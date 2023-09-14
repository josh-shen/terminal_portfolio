import React from "react"
import { CommandLine } from "./command"

export const Welcome = (props) => {
    const command = props.command

    const { version } = require("../../package.json")

    return (
        <div style={{paddingBottom: 15}}>
            <CommandLine command={command}></CommandLine>
            <pre>
                    <code>{`
     ██╗ ██████╗ ███████╗██╗  ██╗    ███████╗██╗  ██╗███████╗███╗   ██╗
     ██║██╔═══██╗██╔════╝██║  ██║    ██╔════╝██║  ██║██╔════╝████╗  ██║
     ██║██║   ██║███████╗███████║    ███████╗███████║█████╗  ██╔██╗ ██║
██   ██║██║   ██║╚════██║██╔══██║    ╚════██║██╔══██║██╔══╝  ██║╚██╗██║
╚█████╔╝╚██████╔╝███████║██║  ██║    ███████║██║  ██║███████╗██║ ╚████║
 ╚════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝    ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝ (Version ${version})
                 `}</code>
            </pre>
            <div style={{paddingTop: 10, paddingBottom: 10}}>
                This portfolio's source code can be found in this project's <a class="highlight" href="https://github.com/josh-shen/terminal_portfolio" target="_blank" rel="noopener noreferrer">GitHub repo</a>
            </div>
            ---
            <div style={{paddingTop: 15}}>For a list of available commands, type <span class="highlight">'help'</span></div>
        </div>
    )
}