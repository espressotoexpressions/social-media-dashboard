import { Card } from "flowbite-react";

export function HeaderComponent({TotalFollowerCnt}) {
  return (
    <>

   <p className="text-1xl  text-gray-500" >Total Followers: {TotalFollowerCnt}</p>
    </>
  );
}
