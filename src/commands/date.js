import React from "react"
import { CommandLine } from "./command"

export const CurrDate = (props) => {
    const command = props.command

    const date = new Date()

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    let hours = date.getHours()
    let ampm = hours >= 12 ? "PM" : "AM"
    if (hours > 12) {hours = hours - 12}
    
    let minutes = date.getMinutes()
    if (minutes < 10) {minutes = "0" + minutes}

    let seconds = date.getSeconds()
    if (seconds < 10) {seconds = "0" + seconds}

    return (
        <div style={{paddingBottom: 15}}>
            <CommandLine command={command}></CommandLine>
            <br></br>
            <div>{days[date.getUTCDay() - 1]}, {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()} {hours}:{minutes}:{seconds} {ampm}</div>
        </div>
    )
}