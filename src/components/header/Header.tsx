import { memo } from "react";
import AddUser from "../add-user/AddUser";
import HeaderBtn from "../headerbtn/HeaderBtn";

const Header = () => {
  return (
    <>
      <div className="w-full bg-white h-[80px]">
        <nav className="container flex items-center h-full justify-between">
          <HeaderBtn />
          <AddUser />
        </nav>
      </div>
    </>
  );
};

export default memo(Header);
