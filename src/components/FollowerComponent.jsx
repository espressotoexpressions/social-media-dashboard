import { useEffect,useState } from "react";
import { fetchSocialsData } from "../services/socialMediaService";

export function  FollowerComponent  ({
  imgSrc,
  userName,
  totalCnt,
  todayCnt,
  borderColor,
  followerOrSubsriber
}) {


  
  // useEffect(()=>{
  //   if (socialData!="")
  //     {console.log("ENTER USE effect")
  //       // console.log(socialData.SocialMedia[0].name)
  //     }
  // },[socialData])
  return (
    <>
    
        <div
          className={`${borderColor} border-0 h-[250px] flex items-end rounded-md `}
        >
          <div className="h-[245px] w-[100%]  dark:bg-card-dark text-black flex flex-col  items-center justify-center rounded-b-md bg-slate-100">
            <div className="flex pb-10">
              <img src={imgSrc} alt="Social media Icon" className="pe-3 " />
              <p className="dark:text-gray-400"> @{userName}</p>
            </div>
            <p className="text-5xl font-bold tracking-tight  dark:text-textheader-dark">{totalCnt}</p>

            
            <p className="tracking-widest text-gray-500"> {followerOrSubsriber}</p>
            <div className="flex">
            <img src={todayCnt>=0 ? "./images/icon-up.svg" : "./images/icon-down.svg"} alt="" className="object-contain pe-2" />  
            <p className={` ${todayCnt>=0 ? "text-green-400" : "text-red-700"} font-bold`}>
             {Math.abs(todayCnt)} Today
            </p>
            </div>
          </div>
          
        </div>
     
    </>
  );
}
