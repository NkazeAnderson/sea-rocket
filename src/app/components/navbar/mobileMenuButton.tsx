import React from "react";
import { FaBars } from "react-icons/fa";

type Props = {};

function MobileMenuButton({}: Props) {
  return (
    <button className="p-4 bg-primary text-white rounded-md">
      <FaBars />
    </button>
  );
}

export default MobileMenuButton;
