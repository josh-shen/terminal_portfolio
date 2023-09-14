import React from "react"
import { CommandLine } from "./command"

export const LinkedIn = (props) => {
    const command = props.command

    window.open("https://www.linkedin.com/in/jo-shshen/", "_blank")
    
    return (
        <div style={{paddingBottom: 15}}>
            <CommandLine command={command}></CommandLine>
            <br></br>
            <a class="highlight" href="https://www.linkedin.com/in/jo-shshen/">https://www.linkedin.com/in/jo-shshen/</a>
        </div>
    )
}