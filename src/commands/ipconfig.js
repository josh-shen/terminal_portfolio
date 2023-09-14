import React from "react"
import { CommandLine } from "./command"

export const IPconfig = (props) => {
    const command = props.command

    const os = require("os-browserify")
    const network = os.networkInterfaces()

    for (var key in network) {
        console.log(key);
        var net_info = network[key];
            
        net_info.forEach(element => {      
            console.log("\tinterface:");
            
                for (var attr in element){
                    console.log("\t\t" + attr + 
                        " : " + element[attr] );
                }
        });  
    }

    return (
        <div style={{paddingBottom: 15}}>
            <CommandLine command={command}></CommandLine>
            <br></br>
        </div>
    )
}