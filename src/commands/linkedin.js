import React from "react"
import { CommandLine } from "./command"

export const LinkedIn = (props) => {
    const command = props.command

    return (
        <div style={{paddingBottom: 15}}>
            <CommandLine command={command}></CommandLine>
            <br></br>
            https://www.linkedin.com/in/jo-shshen/
        </div>
    )
}