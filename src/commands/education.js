import React from "react"
import { CommandLine } from "./command"

export const Education = (props) => {
    const command = props.command

    return (
        <div style={{paddingBottom: 10}}>
            <CommandLine command={command}></CommandLine>
            <b>B.S in Computer Engineering</b>
            <div>University of Texas at Dallas | 2018 - 2022</div>               
        </div>
    )
}