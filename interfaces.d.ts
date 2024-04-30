type NavLinkT = { text: string; link: string; Icon: IconType };

type ReasonT = {
  heading: string;
  text1: string;
  text2?: string;
  image: string;
};

type ServiceT = {
  name: string;
  domain_price: number;
  hosting_price: number;
  developer_fee: number;
  image: string;
  text1: string;
  text2?: string;
  includes: string[];
};
