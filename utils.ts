import emailjs from "@emailjs/browser";
import { navLinks } from "./constants";

export const getPageInfo = (text: string) => {
  let link: NavLinkT | undefined;
  navLinks.forEach((value) => {
    if (value.text.toLowerCase() === text.toLowerCase()) {
      link = value;
    }
  });
  return link;
};

export const sendMessage = async (formData: FormData) => {
  await emailjs.send(
    process.env.NEXT_PUBLIC_EmailJsContactService ?? "",
    process.env.NEXT_PUBLIC_EmailJsContactTemplate ?? "",
    {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    },
    {
      publicKey: process.env.NEXT_PUBLIC_EmailJsPublicKey,
      blockHeadless: false,
    }
  );
  return {
    good: "okay",
  };
};
