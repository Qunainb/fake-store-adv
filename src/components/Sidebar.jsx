import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { useContext } from "react";

export default function Sidebar() {
  const { isOpen, handleClose } = useContext(SidebarContext);

  return <div>Sidebar</div>;
}
