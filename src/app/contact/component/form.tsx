"use client";

import React, { useState } from "react";
import { sendMessage } from "../../../../utils";

type Props = {};

function ContactForm({}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  return (
    <form
      id="contactForm"
      className="w-full my-4"
      action={(data) => {
        setStatus("sending");
        sendMessage(data)
          .then((r) => {
            setMessage("");
            setPhone("");
            setEmail("");
            setName("");
            setStatus("sent");
            setTimeout(() => {
              setStatus("");
            }, 5000);
          })
          .catch(() => {
            setStatus("error");
            setTimeout(() => {
              setStatus("");
            }, 5000);
          });
      }}
    >
      <label htmlFor="name" className="text-[24px] text-primary my-2">
        Your Name
      </label>
      <input
        id="name"
        className="block outline outline-2 outline-primary p-2 rounded w-full"
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.currentTarget.value);
        }}
      />
      <br />
      <label htmlFor="email" className="text-[24px] text-primary my-2">
        Your Email
      </label>
      <input
        id="email"
        className="block outline outline-2 outline-primary p-2 rounded w-full"
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.currentTarget.value);
        }}
      />
      <br />
      <label htmlFor="phone" className="text-[24px] text-primary my-2">
        Your Phone Number
      </label>
      <input
        id="phone"
        className="block outline outline-2 outline-primary p-2 rounded w-full"
        type="tel"
        name="phone"
        value={phone}
        onChange={(e) => {
          setPhone(e.currentTarget.value);
        }}
      />
      <br />
      <label htmlFor="message" className="text-[24px] text-primary my-2">
        Your Message / Inquiry
      </label>
      <textarea
        id="message"
        className="block outline outline-2 outline-primary p-2 rounded w-full"
        name="message"
        rows={6}
        value={message}
        onChange={(e) => {
          setMessage(e.currentTarget.value);
        }}
      />
      <br />
      <input name="bot" type="hidden" value={""} />
      <div className="flex justify-end">
        <button
          className={`${
            status === "sending" ? "bg-yellow" : "bg-primary"
          }  text-white ml-auto py-4 px-8 rounded`}
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending" : "Send Email"}
        </button>
      </div>
      {status === "error" && (
        <h5 className="text-yellow">Error submitting, Please retry....</h5>
      )}
      {status === "sent" && <h5 className="text-primary">Message sent</h5>}
    </form>
  );
}

export default ContactForm;
