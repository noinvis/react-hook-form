import { memo } from "react";
import UserView from "../user-view/UserView";

const Main = async () => {
  const response = await fetch("https://68ad7902a0b85b2f2cf37bcd.mockapi.io/user");
  const data = await response.json();
  return (
    <div className="container">
      <p className="text-center text-[30px] max-[555px]:text-[1rem] font-medium">
        Users
      </p>
      <UserView data={data} />
    </div>
  );
};

export default memo(Main);
