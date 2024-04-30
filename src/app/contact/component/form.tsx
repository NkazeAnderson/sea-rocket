import React from "react";

type Props = {};

function ContactForm({}: Props) {
  return (
    <form className="w-full my-4">
      <label htmlFor="name" className="text-[24px] text-primary my-2">
        Your Name
      </label>
      <input
        id="name"
        className="block outline outline-2 outline-primary p-2 rounded w-full"
        type="text"
        name="name"
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
      />
      <br />
      <input type="hidden" value={"sea rocket tech"} />
      <div className="flex justify-end">
        <button
          className="bg-primary text-white ml-auto py-4 px-8 rounded"
          type="submit"
        >
          Send Email
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
