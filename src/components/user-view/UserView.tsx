"use client"
import Image from "next/image";
import { FC, memo, useState } from "react";
import icon from "@/assets/icon.jpg";

interface IData {
  id: string;
  first_name: string;
  last_name: string;
  region: string;
  gender: string;
}

interface IProps {
  data: IData[];
}

const API_URL = "https://68ad7902a0b85b2f2cf37bcd.mockapi.io/user";

const UserView: FC<IProps> = ({ data }) => {
  const [users, setUsers] = useState<IData[]>(data);

  const handleDelete = async (id: string) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="grid grid-cols-4 gap-[1rem] max-[1060px]:grid-cols-3 max-[850px]:grid-cols-2 max-[600px]:grid-cols-1 my-[30px]">
      {users?.map((item) => (
        <div
          className="shadow-md p-[1rem] hover:shadow-xl transition-all"
          key={item.id}
        >
          <div className="flex items-center gap-4">
            <Image
              src={icon}
              alt="user"
              width={100}
              height={100}
              className="rounded-[50%]"
            />
            <h2 className="font-bold line-clamp-1">
              {item.first_name} {item.last_name}
            </h2>
          </div>
          <div className="flex justify-between mt-[10px]">
            <p className="text-sm text-gray-600">Region: {item.region}</p>
            <p className="text-sm text-gray-600">Gender: {item.gender}</p>
          </div>
          <div className="flex gap-[1rem] items-center text-white mt-[10px]">
            <button
              onClick={() => handleDelete(item.id)}
              className="py-[7px] bg-red-600 w-full rounded-2xl cursor-pointer"
            >
              Delete
            </button>
            <button className="py-[7px] bg-green-500 w-full rounded-2xl cursor-pointer">
              Update
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(UserView);
