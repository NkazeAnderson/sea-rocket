import { FaHome, FaStar } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export const navLinks: NavLinkT[] = [
  { text: "Home", link: "/", Icon: FaHome },
  { text: "Services", link: "/services", Icon: FaStar },
  { text: "Contact", link: "/contact", Icon: MdMail },
];

export const reasons: ReasonT[] = [
  {
    heading: "Life support from us",
    text1:
      "Our services does not ends at the end of developing your apps. We are available to help you maintain and make advancements to your projects",
    text2: undefined,
    image: "/undraw_business_chat_re_gg4h.svg",
  },
  {
    heading: "High Quality Designs",
    text1:
      "We use neat and high quality designs to represent your company online",
    text2:
      "Your apps and websites will have that professional feel you always wanted",
    image: "/undraw_setting.svg",
  },
  {
    heading: "Get Results Faster",
    text1:
      "We have a dedicated team ready to get to work and deliver exactly what you need in less than no time",
    text2: undefined,
    image: "/undraw_engineering_team_a7n2.svg",
  },
  {
    heading: "Clean and Secure Code",
    text1:
      "We use neat and high quality designs to represent your company online.",
    text2:
      "Your apps and websites will have that professional feel you always wanted",
    image: "/undraw_pair_programming_re_or4x.svg",
  },
];

export const services: ServiceT[] = [
  {
    name: "Clone",
    domain_price: 10000,
    hosting_price: 40000,
    developer_fee: 10000,
    image: "/undraw_typewriter_re_u9i2.svg",
    text1: "Clone an existing website staticly in less than 24 hours",
    text2: "The cloned website will be adjusted to suite your needs",
    includes: [
      ".Com/.Org Domain name",
      "1 Professional email",
      "1 Year hosting",
      "Exact Website Replica",
      "24hrs delivery",
      "1 year free support",
    ],
  },
  {
    name: "WordPress",
    domain_price: 10000,
    hosting_price: 65000,
    developer_fee: 25000,
    image: "/undraw_wordpress_utxt.svg",
    text1: "Build a dynamic website using WordPress in less than 1 week",
    text2:
      " Best option for businesses in need of a simple and decent online presence",
    includes: [
      ".Com/.Org Domain name",
      "3 Professional email",
      "1 Year hosting",
      "100% Customized Website",
      "7 days delivery",
      "1 year free support",
    ],
  },

  {
    name: "React",
    domain_price: 10000,
    hosting_price: 65000,
    developer_fee: 50000,
    image: "/undraw_react_re_g3ui.svg",
    text1: "Build fully dynamic website with react code in less than 2 weeks",
    text2: "Your site will be fully customized for high user experience",
    includes: [
      ".Com/.Org Domain name",
      "5 Professional email",
      "1 Year hosting",
      "Company Branded Website",
      "14 days delivery",
      "1 year free support",
    ],
  },
  {
    name: "Rest APIs",
    domain_price: 10000,
    hosting_price: 65000,
    developer_fee: 50000,
    image: "/undraw_cloud_hosting_7xb1.svg",
    text1: "Build secured apis to run on cloud with Javascript or python",
    text2:
      "Your apis will have full crud functionality, secured and documented",
    includes: [
      "Crud endpoints",
      "Secure endpoints",
      "Code",
      "Admin Permissions",
      "14 days delivery",
      "1 year free support",
    ],
  },
  {
    name: "Mobile Apps",
    domain_price: 0,
    hosting_price: 120000,
    developer_fee: 80000,
    image: "/undraw_android_jr64.svg",
    text1:
      "Build android or Iphone apps for your company and keep engaged with your customers",
    text2:
      "Your applications will be light weight, fast and fully dynamic with a good interface",
    includes: ["React Native Code", "20 days delivery", "1 year free support"],
  },
];
