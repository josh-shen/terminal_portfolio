import React from "react"
import { CommandLine } from "./command"

export const About = (props) => {
    const command = props.command

    return (
        <div style={{paddingBottom: 15}}>
            <CommandLine command={command}></CommandLine>
            <br></br>
            <div>Hello, my name is Josh Shen!</div>
            <br></br>
            I'm a software developer based in the DFW area. 
            <br></br>
            I have a strong passion for writing code to solve real-life challenges and a deep interest in computer networks.
        </div>
    )
}