import React, { useState } from 'react'
import Style from '../css/Sidebar.module.css'
import { House } from 'lucide-react';
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions, MdWatchLater } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdPlaylistPlay } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { LuShoppingBag } from "react-icons/lu";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { RiMovie2Line } from "react-icons/ri";
import { MdOutlineVideoLibrary } from 'react-icons/md';


const Sidebar = ({ toggle }) => {
  return (
    <aside className={toggle ? Style.sidebar : Style.sidebarHide}>
      {toggle && (
        <>
          <div className={Style.menu}>
            <House size={22} />
            <span>Home</span>
          </div>

          <div className={Style.menu}>
            <SiYoutubeshorts size={22} />
            <span>Shorts</span>
          </div>

          <div className={Style.menu}>
            <MdSubscriptions size={22} />
            <span>Subscriptions</span>
          </div>

          <hr />

          <h3 className={Style.heading}>You &gt;</h3>

          <div className={Style.menu}>
            <CgProfile size={22} />
            <span>Your channel</span>
          </div>

          <div className={Style.menu}>
            <MdHistory size={22} />
            <span>History</span>
          </div>

          <div className={Style.menu}>
            <MdPlaylistPlay size={22} />
            <span>Playlists</span>
          </div>

          <div className={Style.menu}>
            <MdOutlineWatchLater size={22} />
            <span>Watch Later</span>
          </div>

          <div className={Style.menu}>
            <AiOutlineLike size={22} />
            <span>Liked videos</span>
          </div>

          <div className={Style.menu}>
            <MdOutlineVideoLibrary size={22} />
            <span>Your videos</span>
          </div>


          <hr />

          <h3 className={Style.heading}>Explore</h3>

          <div className={Style.menu}>
            <LuShoppingBag size={22} />
            <span>Shopping</span>
          </div>

          <div className={Style.menu}>
            <IoMusicalNotesOutline size={22} />
            <span>Music</span>
          </div>

          <div className={Style.menu}>
            <RiMovie2Line size={22} />
            <span>Films</span>
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;