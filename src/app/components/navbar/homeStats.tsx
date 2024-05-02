import React from "react";
import { motion } from "framer-motion";

type Props = {};

function HomeStats({}: Props) {
  return (
    <section className="my-14 py-6 px-[50px]">
      <div className="md:flex justify-around space-y-10 md:space-y-0">
        <motion.div
          initial={{ x: 100, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-center text-secondary">Completed Projects</h1>
          <h1 className="text-center">+30</h1>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-center text-secondary">Awards Received</h1>
          <h1 className="text-center">3</h1>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "tween", duration: 2 }}
        >
          <h1 className="text-center text-secondary">Client Satisfaction</h1>
          <h1 className="text-center">+95%</h1>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeStats;
