import React from "react"
import { CommandLine } from "./command"

export const Email = (props) => {
    const command = props.command

    return (
        <div style={{paddingBottom: 10}}>
            <CommandLine command={command}></CommandLine>
            joshausneh@gmail.com
        </div>
    )
}