import React, { useEffect, useState } from "react"
import { CommandLine } from "./command"

export const Ping = (props) => {
    const command = props.command
    const target = props.target
    const n = props.n

    const [output, setOutput] = useState({})
    const [outputTimes, setOutputTimes] = useState()
    const [stats, setStats] = useState([])

    useEffect(() => {
        let data = new FormData()
        data.append("target", target)
        data.append("attempts", n)

        fetch("https://us-central1-ping-399804.cloudfunctions.net/pinger", {
            method: "POST",
            body: data
        }).then(response => {
            return response.text()
        })
        .then(data => {
            const output = JSON.parse(data)
            setOutput(output)

            setOutputTimes(output.RTT.map((time) =>
                <div>Reply from {output.Address}: bytes=32 time={time}ms</div>
            ))

            let count = 0
            let min = Infinity
            let max = -Infinity
            let avg = 0

            for (let i=0; i<n; i++){
                if (output.RTT[i] != -1){
                    count++
                    avg += output.RTT[i]
                    if (output.RTT[i] < min){min = output.RTT[i]}
                    if (output.RTT[i] > max){max = output.RTT[i]}
                }
            }
            setStats([count, min, max, Math.round(avg/n)])
        })
    }, [target, n]) 

    return (
        <div style={{paddingBottom: 15}}>
            <CommandLine command={command}></CommandLine>
            <br></br>
            Pinging {output.Hostname} [{output.Address}] with 32 bytes of data:
            <br></br>
            {outputTimes}
            <br></br>
            Ping statistcs for {output.Address}:
            <br></br>
            &emsp;&emsp;&emsp; Packets: Sent = {n}, Received = {stats[0]}, Lost = {n - stats[0]} ({(n-stats[0])/n*100}% loss),
            <br></br>
            Approximate round trip times in milli-seconds:
            <br></br>
            &emsp;&emsp;&emsp; Minimum = {stats[1]}ms, Maximum = {stats[2]}ms, Average = {stats[3]}ms
        </div>
    )
}