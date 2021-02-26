import React from 'react'
import "../Style/SidebarOption.css"


export const SidebarOption = ({title,Icon}) => {
    return (
        <div className="sidebarOption">
        {Icon && <Icon className="sidebarOption_icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}
