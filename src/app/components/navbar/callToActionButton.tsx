"use client";
import React from "react";

import { motion } from "framer-motion";

type Props = {
  text: string;
  action: () => void;
};

function CallToActionButton({ text, action }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.2 }}
      transition={{ delay: 1 }}
      onClick={() => {
        action();
      }}
      className="border-2 rounded-full bg-primary border-white py-2 px-10 hover:cursor-pointer"
    >
      <h4 className="text-white ">{text}</h4>
    </motion.div>
  );
}

export default CallToActionButton;
