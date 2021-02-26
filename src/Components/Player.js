import React from 'react'
import '../Style/Player.css'
import { Body } from './Body'
import { Footer } from './Footer'
import { Sidebar } from './Sidebar'


export const Player = ({spotify}) => {
    return (
        <div className="player">
        <div className="player_body">
        {/*SideBar */}
        
        <Sidebar/>
         {/*Body */}
         <Body/>
       
        </div>
        <Footer/>
        {/* Footer */}
        </div>
    )
}
