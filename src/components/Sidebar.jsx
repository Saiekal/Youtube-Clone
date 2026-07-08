import React, { useState } from 'react'
import Style from '../css/Sidebar.module.css'
import { House } from 'lucide-react';
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions, MdWatchLater } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdPlaylistPlay } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";

const Sidebar = ({ toggle }) => {
  return (
    <aside className={toggle ? Style.sidebar : Style.sidebarHide}>
      {toggle && (
        <div className={Style.menu}>
          <House size={22} />
          <span>Home</span>
        </div>
      )}
      {toggle && (
        <div className={Style.menu}>
          <SiYoutubeshorts size={22} />
          <span>Shorts</span>
        </div>
      )}

      {toggle && <hr color="grey" />}

      {toggle && (
        <div className={Style.menu}>
          <MdSubscriptions size={22} />
          <span>Subscription</span>
        </div>
      )}

      {toggle && (
        <div className={Style.menu}>
          <MdHistory size={22} />
          <span>History</span>
        </div>
      )}
      {toggle && (
        <div className={Style.menu}>
          <MdPlaylistPlay size={22} />
          <span>Playlist</span>
        </div>
      )}

      {toggle && (
        <div className={Style.menu}>
          <MdOutlineWatchLater size={22} />
          <span>Watch later</span>
        </div>
      )}
    </aside>
  )
}

export default Sidebar