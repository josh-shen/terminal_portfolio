import React from "react"
import { CommandLine } from "./command"

export const Echo = (props) => {
    const command = props.command
    const string = props.string

    return (
        <div>
            <CommandLine command={command}></CommandLine>
            {string}
        </div>
    )
}