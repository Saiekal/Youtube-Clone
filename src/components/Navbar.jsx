import React from 'react'
import Style from '../css/Nav.module.css'
import { Bell, Menu, Plus, Search, Mic } from 'lucide-react'

const Navbar = ({ toggle, setToggle }) => {

  return (
    <nav className={Style.navbar}>

      <section className={Style.section}>

        {/* Left Section */}
        <div style={{ display: "flex", width: "12vw", justifyContent: "space-around" }}>
          <Menu
            size={30}
            style={{ color: "white", fontWeight: "700", cursor: "pointer" }}
            onClick={() => setToggle(prev => !prev)}
          />

          <div
            style={{
              width: "65%",
              height: "60%",
              display: "block",
              fill: "currentcolor"
            }}
          >
            {/* Your YouTube SVG remains exactly the same */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={93}
              height={20}
              viewBox="0 0 93 20"
              style={{
                width: "100%",
                height: "100%",
                color: "white"
              }}
            >
              {/* Paste your existing SVG paths here (no changes needed) */}
            </svg>
          </div>
        </div>

        {/* Search Section */}

        <div className={Style.SearchBox}>

          <div className={Style.SearchBoxChild}>
            <input
              type="text"
              className={Style.input}
              placeholder="Search"
            />

            <button className={Style.btnSearch}>
              <Search size={22} />
            </button>
          </div>

          <button className={Style.btnMic}>
            <Mic size={22} />
          </button>

        </div>

        {/* Right Section */}

        <div className={Style.bellParent}>

          <div className={Style.createPlus}>
            <Plus />
            <p>create</p>
          </div>

          <Bell style={{ color: "white" }} />

          <div className={Style.profile}>
            <h2>S</h2>
          </div>

        </div>

      </section>
    </nav>
  )
}

export default Navbar