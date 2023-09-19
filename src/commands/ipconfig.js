import React, { useEffect, useState } from "react"
import { CommandLine } from "./command"

export const IPconfig = (props) => {
    const command = props.command
    
    const [response, setResponse] = useState("")

    useEffect (() => {
        fetch("http://ipwho.is/")
        .then(data => {
            return data.json()
        })
        .then(response => {
            setResponse(response)
        })
    }, [])
    
    return (
        <div style={{paddingBottom: 15}}>
            <CommandLine command={command}></CommandLine>
            <br></br>
            Connection-specific DNS suffix . : {response.connection.domain}
            <br></br>
            IP Address . . . . . . . . . . . : {response.ip}
            <br></br>
            Type . . . . . . . . . . . . . . : {response.type}
        </div>
    )
}