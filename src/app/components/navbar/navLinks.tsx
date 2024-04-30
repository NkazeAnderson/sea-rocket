import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";
import { FaHome } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdMail } from "react-icons/md";

type Props = {};
type LinkT = { text: string; link: string; Icon: IconType };

function NavLink({ text, link, Icon = FaHome }: LinkT) {
  const openedPage = usePathname();
  return (
    <Link href={link}>
      <div className="flex items-center space-x-1 hover:cursor-pointer">
        <Icon className="size-[30px] text-white " />
        <h4 className="text-white">{text}</h4>
      </div>
      <div
        className={`w-full p-1 ${
          link.toLowerCase() !== openedPage.toLowerCase()
            ? "bg-[transparent] "
            : "bg-white"
        } `}
      ></div>
    </Link>
  );
}

function NavLinks({}: Props) {
  const links: LinkT[] = [
    { text: "Home", link: "/", Icon: FaHome },
    { text: "Services", link: "/services", Icon: FaStar },
    { text: "Contact", link: "/contact", Icon: MdMail },
  ];
  return (
    <div className="flex flex-row space-x-10">
      {links.map((link) => (
        <NavLink
          key={link.text}
          text={link.text}
          link={link.link}
          Icon={link.Icon}
        />
      ))}
    </div>
  );
}

export default NavLinks;
