import React from "react";
import { MdDeleteForever } from "react-icons/md";

export default function Notes(prop){
    return (
        <div className="note">
            <h2 className="notetitle">{prop.title}</h2>
            <hr></hr>
            <div className="description">{prop.text}</div>
            <div className="notes-footer">
                <small>{prop.date}</small>
                <MdDeleteForever className="delete-icon" size = '1.3em' onClick={() =>{prop.deleteNote(prop.id)}}/>
            </div>
        </div>
    )
}