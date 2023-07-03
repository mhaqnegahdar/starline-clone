// Hooks/Acitons
import React from "react";
import Link from "next/link";

//Icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillChatFill } from "react-icons/bs";
import { AiTwotonePhone } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

// Types
import { ToggleStateType } from "@/types";
import OffmenuItem from "./OffmenuItem";

// Data
const menuItems = [
  { key: 1, title: "Home", link: "/" },
  {
    key: 2,
    title: "INVENTORY",
    link: "#",
    subLinks: [
      { key: 1, title: "INVENTORY", link: "#" },
      { key: 2, title: "CAR FINDER", link: "#" },
      { key: 3, title: "APPRAISE MY TRADE", link: "#" },
    ],
  },
  {
    key: 3,
    title: "FINANCING",
    link: "#",
    subLinks: [
      { key: 1, title: "FINANCING APPLYCATION", link: "#" },
      { key: 2, title: "FINANCING CALCULATOR", link: "#" },
    ],
  },
  {
    key: 4,
    title: "SERVICE",
    link: "#",
    subLinks: [{ key: 1, title: "SERVICE APPOINTMENT", link: "#" }],
  },
  {
    key: 5,
    title: "DEALERSHIP",
    link: "#",
    subLinks: [
      { key: 1, title: "ABOUT US", link: "#" },
      { key: 2, title: "CONTACT US", link: "#" },
    ],
  },
  { key: 6, title: "TEXT US NOW", link: "#" },
  { key: 7, title: "DIRECTION", link: "#" },
];

const menuInfos = [
  { key: 1, icon: AiTwotonePhone, link: "tel:9057825159" },
  { key: 2, icon: HiLocationMarker, link: "#" },
  { key: 3, icon: BsFillChatFill, link: "#" },
];

const NavBar = ({ toggle, setToggle }: ToggleStateType) => {
  return (
    <nav className=" navbar border-0 border-top-2 border-bottom-2 border-white position-relative ">
      {/* Menu On Larg Screen */}
      <ul className="menu d-none d-lg-flex justify-content-around w-100 navbar ">
        {menuItems.map(({ key, title, link, subLinks }) => (
          <li key={key} className="menu__item  position-relative">
            <Link
              href={link}
              className="menu__item  text-white  d-inline-block p-2 mx-auto position-relative"
            >
              {title}
              {subLinks && <MdKeyboardArrowDown size={20} className="" />}
            </Link>
            {subLinks && subLinks?.length > 0 ? (
              <ul className="menu__sub-item-wrapper position-absolute p-3  bg-black  z-3  ">
                {subLinks?.map(({ key, link, title }) => (
                  <Link
                    key={key}
                    href={link}
                    className=" menu__item menu__sub-item  text-white d-block p-2 mx-auto position-relative "
                  >
                    {title}
                  </Link>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
      {/* Info On Small Screen */}
      <div className="menu d-flex d-lg-none justify-content-center align-items-center w-100 navbar p-0 px-lg-5 py-2 m-0 mt-md-3 mb-2 ">
        {menuInfos.map(({ key, icon: Icon, link }) => (
          <Link
            href={link}
            key={key}
            className={` ${
              key === 2
                ? " border border-secondary border-top-0 border-bottom-0"
                : ""
            } d-inline-block mx-1 px-sm-5  px-2 w-25 min-w-25  text-secondary text-center`}
          >
            <Icon className="" size={35} />
          </Link>
        ))}
      </div>
      {/* Offcanvas Menu */}
      {toggle === true ? (
        <ul className="offmenu d-flex flex-column align-items-start w-100 navbar position-absolute bg-white top-100 shadow-lg   ">
          {menuItems.map(menuItem => (
            <OffmenuItem key={menuItem.key} item={menuItem} />
          ))}
        </ul>
      ) : null}
    </nav>
  );
};

export default NavBar;
