import React from "react"
import { CommandLine } from "./command"

export const Invalid = (props) => {
    const command = props.command

    return (
        <div style={{paddingBottom: 10}}>
            <CommandLine command={command}></CommandLine>
            <span class="error">{command} : The term '{command}' is not recognized as the name of a command. Check the spelling of the name and try again.</span>
        </div>
    )
}