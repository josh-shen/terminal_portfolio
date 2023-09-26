import React from "react"
import { CommandLine } from "./command"

export const Help = (props) => {
    const command = props.command

    return (
        <div style={{paddingBottom: 15}}>
            <CommandLine command={command}></CommandLine>
            Available commands:
            <br></br>
            about, clear, clhy, date, echo, education, email, github, help, history, ipconfig, linkedin, ping, welcome
            <br></br>
            <br></br>
            Type <span class="highlight">'help [command]'</span> for more command specific information
            <br></br>
            <br></br>
            [crtl+l] clear terminal
            <br></br>
            [alt+f7] clear command history
        </div>
    )
}