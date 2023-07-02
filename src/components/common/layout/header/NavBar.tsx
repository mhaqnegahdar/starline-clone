import Link from "next/link";
import React from "react";

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

const NavBar = () => {
  return (
    <nav className=" navbar border-0 border-top-2 border-bottom-2 border-white px-5 ">
      <ul className="menu d-flex justify-content-around w-100 navbar">
        {menuItems.map(({ key, title, link }) => (
          <Link
            key={key}
            href={link}
            className="menu__item  text-white fw-bold d-inline-block p-2 mx-auto"
          >
            {title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
