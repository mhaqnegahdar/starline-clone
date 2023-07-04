import Link from "next/link";

const links = [
  { key: 1, title: "Inventory", link: "#" },
  { key: 2, title: "Financing", link: "#" },
  { key: 3, title: "Traid-In Request", link: "#" },
  { key: 4, title: "Contact Us", link: "#" },
  { key: 5, title: "About Us", link: "#" },
];
const FooterLinks = () => {
  return (
    <div className="p-0 m-0 py-2 col-11 d-flex flex-wrap justify-content-center border-top border-bottom border-white">
      {links.map(({ link, key, title }) => (
        <Link
          key={key}
          href={link}
          className="text-white px-4  text-white m-0 p-2 py-md-0 font-3 "
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;
