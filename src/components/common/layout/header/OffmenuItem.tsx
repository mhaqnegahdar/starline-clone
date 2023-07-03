// Hooks/Actions
import { useState } from "react";
import Link from "next/link";

//Icons
import { MdKeyboardArrowDown } from "react-icons/md";

// Types
import { MenuItem, OffmenuProps } from "@/types";

const OffmenuItem = ({ item }: OffmenuProps) => {
  // Props
  const { link, title, subLinks } = item;
  // State
  const [toggle, setToggle] = useState(false);

  return (
    <li
      className="menu__item  position-relative w-100 d-block px-3"
      onClick={() => setToggle(p => (p === false ? true : false))}
    >
      <Link
        href={link}
        className="offmenu__item  text-secondary  d-inline-block p-2 mx-auto position-relative"
      >
        {title}
        {subLinks && <MdKeyboardArrowDown size={20} className="" />}
      </Link>
      {subLinks && subLinks?.length > 0 && toggle ? (
        <ul className="offmenu__sub-item-wrapper  ps-3  bg-white  z-3  ">
          {subLinks?.map(({ key, link, title }) => (
            <Link
              key={key}
              href={link}
              className=" offmenu__item offmenu__sub-item  text-secondary d-block p-2 mx-auto position-relative "
            >
              {title}
            </Link>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default OffmenuItem;
