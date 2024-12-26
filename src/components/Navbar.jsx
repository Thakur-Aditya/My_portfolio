import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles.js";
import { navLinks } from "../constants/index.js";
import { logo, menu, close, aditya_logo } from "../assets/index.js";
import { li } from "framer-motion/client";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex  items-center justify-between gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={aditya_logo}
            alt="logo"
            className="w-9 h-9 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Thakur Aditya
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              onClick={() => setActive(nav.title)}
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white cursor-pointer font-medium text-[18px]`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <a
              href="/public/Aditya_Singh_CV_December_2024.pdf"
              download="Aditya Singh Resume"
            >
              My Resume
            </a>
          </li>
        </ul>
        <div className="sm:hidden ">
          <img
            src={!menuToggle ? menu : close}
            alt=""
            onClick={() => setMenuToggle(!menuToggle)}
          />
          <div
            className={`${
              menuToggle ? "flex" : "hidden"
            } black-gradient absolute top-20 min-w-[140px] right-0 mx-4 my-2 z-10 rounded-xl px-3 `}
          >
            <ul className="list-none flex sm:hidden justify-end items-start flex-col gap-1">
              {navLinks.map((nav) => (
                <li
                  onClick={() => {
                    setActive(nav.title);
                    setMenuToggle(!menuToggle);
                  }}
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
