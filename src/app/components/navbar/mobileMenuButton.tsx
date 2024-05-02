import React from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

type Props = { opened: boolean };

function MobileMenuButton({ opened }: Props) {
  return (
    <button className="p-4 bg-primary text-white rounded-md">
      {!opened ? <FaBars /> : <FaXmark />}
    </button>
  );
}

export default MobileMenuButton;
