import React from "react"
import { CommandLine } from "./command"

export const Email = (props) => {
    const command = props.command

    return (
        <div style={{paddingBottom: 15}}>
            <CommandLine command={command}></CommandLine>
            <br></br>
            joshausneh@gmail.com
        </div>
    )
}