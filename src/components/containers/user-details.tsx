import React from "react";
import { Avatar } from "../common";
import Link from "next/link";
import { Separator } from "../ui";
interface Props {
  user: User;
}

const UserDetails: React.FC<Props> = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4">
      <div className="flex flex-col items-center justify-center">
        <Avatar
          src={user.avatar}
          alt={user.name}
          className="w-40 h-40 text-[7rem]"
        />
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="">{user.email}</p>
      </div>
      <Separator />
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex gap-2">
          <Link
            href={`/${user.id}/orders`}
            className=" underline underline-offset-4 cursor-pointer hover:scale-105 transition:transform duration-200"
          >
            Orders:{" "}
          </Link>
          <p className="">20</p>
        </div>
        <div className="flex gap-2">
          <Link
            href={`/${user.id}/wishlist`}
            className=" underline underline-offset-4 cursor-pointer hover:scale-105 transition:transform duration-200"
          >
            Wishlist:{" "}
          </Link>
          <p className="">5</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
