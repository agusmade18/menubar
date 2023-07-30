import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineUnorderedList,
  AiOutlineFileImage,
  AiOutlinePhone,
} from "react-icons/ai";
const menus = [
  { name: "Home", link: "/", icon: <AiOutlineHome /> },
  { name: "Profile", link: "/profile", icon: <AiOutlineUser /> },
  { name: "Portfolio", link: "/portfolio", icon: <AiOutlineUnorderedList /> },
  { name: "Gallery", link: "/gallery", icon: <AiOutlineFileImage /> },
  { name: "Contact", link: "/contact", icon: <AiOutlinePhone /> },
];

export default menus;
