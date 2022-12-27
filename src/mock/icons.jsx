import { Github } from "../assets/svg/Github";
import { Linkedin } from "../assets/svg/Linkedin";
import { MailIcon } from "../assets/svg/MailIcon";

export const LINK_ICONS = [
  {
    id: 1,
    icon: ({ size, color }) => <Github size={size} color={color} />,
    link: "https://github.com/mauro-titanio",
    message: "Github",
  },
  {
    id: 2,
    icon: ({ size, color }) => <Linkedin size={size} color={color} />,
    link: "https://www.linkedin.com/in/mauro-titanio/",
    message: "LinkedIn",
  },
  {
    id: 3,
    icon: ({ size, color }) => <MailIcon size={size} color={color} />,
    link: "mailto:maurotitanio@gmail.com",
    message: "Send me a mail",
  },
];
