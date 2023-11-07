import React from "react"
import { CommandLine } from "./command"

export const Email = (props) => {
    const command = props.command

    return (
        <div style={{paddingBottom: 15}}>
            <CommandLine command={command}></CommandLine>
            <br></br>
            joshuashen320@gmail.com
        </div>
    )
}