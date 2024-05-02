import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

type Props = {};

function ContactInfo({}: Props) {
  return (
    <div>
      <h3>Contacts</h3>
      <div className="hover:scale-125 flex space-x-3 my-2 items-center">
        <FaPhone />
        <p className="">
          <a href="tel:+237683403750">683403750</a>
        </p>
      </div>
      <div className="flex space-x-3 my-2 items-center">
        <FaLocationPin /> <p>Bocom, Mile 6, Bamenda </p>
      </div>
      <div className="hover:scale-125 flex space-x-3 my-2 items-center">
        <MdEmail />{" "}
        <p>
          <a href="mailto:info@searocketenterprise.com">
            info@searocketenterprise.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactInfo;
