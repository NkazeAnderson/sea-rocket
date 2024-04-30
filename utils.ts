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
