import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { IconType } from "react-icons";
import { FaHome } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";

type Props = { hide?: () => void };
type LinkT = { text: string; link: string; Icon: IconType; hide?: () => void };

function NavLink({ text, link, Icon = FaHome, hide = () => {} }: LinkT) {
  const openedPage = usePathname();
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      onHoverStart={() => {
        setHovered(true);
      }}
      onHoverEnd={() => {
        setHovered(false);
      }}
    >
      <Link
        href={link}
        onClick={() => {
          hide();
        }}
      >
        <div className="flex items-center space-x-1 hover:cursor-pointer justify-center">
          <Icon className="size-[30px] text-white " />
          <h4 className="text-white">{text}</h4>
        </div>
        <div
          className={`w-1/2 mx-auto mb-2 md:block md:w-full p-1 ${
            hovered ? "bg-white" : ""
          } ${
            link.toLowerCase() !== openedPage.toLowerCase()
              ? "bg-[transparent] "
              : "bg-yellow"
          } `}
        ></div>
      </Link>
    </motion.div>
  );
}

function NavLinks({ hide = () => {} }: Props) {
  const links: LinkT[] = [
    { text: "Home", link: "/", Icon: FaHome },
    { text: "Services", link: "/services", Icon: FaStar },
    { text: "Contact", link: "/contact", Icon: MdMail },
  ];
  return (
    <div className="md:flex md:flex-row md:space-x-10 block">
      {links.map((link) => (
        <NavLink
          key={link.text}
          text={link.text}
          link={link.link}
          Icon={link.Icon}
          hide={hide}
        />
      ))}
    </div>
  );
}

export default NavLinks;
