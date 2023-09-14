import React from "react"
import { CommandLine } from "./command"

export const Github = (props) => {
    const command = props.command

    window.open("https://github.com/josh-shen", "_blank")

    return (
        <div style={{paddingBottom: 15}}>
            <CommandLine command={command}></CommandLine>
            <br></br>
            <a class="highlight" href="https://github.com/josh-shen">https://github.com/josh-shen</a>
        </div>
    )
}