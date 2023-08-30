import React from "react"
import { CommandLine } from "./command"

export const Welcome = (props) => {
    const command = props.command

    const { name, version } = require("../../package.json")

    return (
        <div style={{paddingBottom: 15}}>
            <CommandLine command={command}></CommandLine>
            <br></br>
            <div>Welcome to {name}. (Version {version})</div>
            <br></br>
            ---
            <div style={{paddingTop: 10, paddingBottom: 10}}>
                This portfolio's source code can be found in this project's <a class="prefix" href="https://github.com/josh-shen/portfolio" target="_blank" rel="noopener noreferrer">GitHub repo</a>
            </div>
            ---
            <div style={{paddingTop: 10}}>For a list of available commands, type <span class="secondary">"help"</span></div>
        </div>
    )
}