import React, { useEffect, useState } from "react"
import { CommandLine } from "./command"

export const IPconfig = (props) => {
    const command = props.command
    const [address, setAddress] = useState("")

    useEffect(() => {
        fetch("https://api.ipify.org").then(response => {
            return response.text()
        })
        .then(data => {
            setAddress(data)
        })
    }, []) 

    //navigator.connection.type support not available yet...
    return (
        <div style={{paddingBottom: 15}}>
            <CommandLine command={command}></CommandLine>
            <br></br>
            Host Name . . . : {window.location.hostname}
            <br></br>

            <br></br>
            User-Agent. . . : {navigator.userAgent}
            <br></br>
            IPv4 Address. . : {address}
        </div>
    )
}