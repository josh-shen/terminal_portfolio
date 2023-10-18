using Google.Cloud.Functions.Framework;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace HelloHttp;

public class Output {
  public string Hostname {get; set;}
  public string Address {get; set;}
  public string ReplyAddress {get; set;}
  public long[] RTT {get; set;}
}

public class Function : IHttpFunction {
  public async Task HandleAsync(HttpContext context) {
    Ping pingSender = new Ping ();
    PingOptions options = new PingOptions ();
    options.DontFragment = true;

    // Create a buffer of 32 bytes of data to be transmitted.
    string data = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    byte[] buffer = Encoding.ASCII.GetBytes (data);
    int timeout = 30000;

    // Resolve hostname to IP address
    string hostname = context.Request.Form["target"].ToString();
    IPAddress ipv4 = Dns.GetHostEntry(hostname).AddressList.First(addr => addr.AddressFamily == AddressFamily.InterNetwork);
    
    // Get input parameters
    string address = "";
    int length = Convert.ToInt32(context.Request.Form["attempts"].ToString());
    long[] rtt = new long[length];

    // Ping
    for (int i=0; i<length; i++) {
      PingReply reply = await pingSender.SendPingAsync (ipv4, timeout, buffer, options);
      address = reply.Address.ToString();
      if (reply.Status == IPStatus.Success ){
        rtt[i] = reply.RoundtripTime;
      }
      else {
        rtt[i] = -1;
      }
    }
    
    // Return response as object
    var output = new Output {
      Hostname = hostname,
      Address = ipv4.ToString(),
      ReplyAddress = address,
      RTT = rtt
    };
    string jsonString = JsonSerializer.Serialize(output);
    HttpResponse response = context.Response;
    response.Headers.Append("Access-Control-Allow-Origin", "*");
    await response.WriteAsync(jsonString);
  }
}
