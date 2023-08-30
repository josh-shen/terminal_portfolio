import React from "react"
import { CommandLine } from "./command"

export const History = (props) => {
    const command = props.command
    const history = props.history

    const getHistory = () => {
        return history.map((line, index) => (
            <React.Fragment key={index}>
            {line}
            <br></br>
            </React.Fragment>
        ))
    }
    return (
        <div style={{paddingBottom: 10}}>
            <CommandLine command={command}></CommandLine>
            {getHistory()}
        </div>
    )
}