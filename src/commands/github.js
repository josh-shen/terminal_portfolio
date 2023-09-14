import React from "react"
import { CommandLine } from "./command"

export const Github = (props) => {
    const command = props.command

    return (
        <div style={{paddingBottom: 15}}>
            <CommandLine command={command}></CommandLine>
            <br></br>
            https://github.com/josh-shen
        </div>
    )
}