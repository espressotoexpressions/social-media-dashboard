import { useState, useEffect } from "react";
import { FollowerComponent } from "./components/FollowerComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { DetailComponent } from "./components/DetailComponent";
import { fetchSocialsData } from "./services/socialMediaService";
import ModeToggle from "./components/ModeToggle";

function App() {
  const [socialData, setSocialData] = useState("");

  useEffect(() => {
    const GetData = async () => {
      const data = await fetchSocialsData();
      setSocialData(data);
    };
    GetData();
  }, []);

  return (
    <>
      <div className="flex flex-col  flex-wrap  m-10 dark:bg-primary-dark">
        <div className="flex  flex-col justify-center gap-10 m-20">
          <div>
            <h1 className="text-3xl font-bold dark:text-white"> Social Media Dashboard</h1>
            <div className="flex justify-between ">

            <HeaderComponent TotalFollowerCnt="23,004" />
            <ModeToggle/>
            </div>
          </div>

          <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-10">
            {socialData != "" && (
              <FollowerComponent
                borderColor="bg-blue-400"
                imgSrc={socialData.SocialMedia[0].imgSrc}
                userName={socialData.SocialMedia[0].userName}
                totalCnt={socialData.SocialMedia[0].countTotal}
                todayCnt={socialData.SocialMedia[0].countToday}
                followerOrSubsriber={socialData.SocialMedia[0].countLbl}
              />
            )}
            {socialData != "" && (
              <FollowerComponent
                borderColor="bg-blue-500"
                imgSrc={socialData.SocialMedia[1].imgSrc}
                userName={socialData.SocialMedia[1].userName}
                totalCnt={socialData.SocialMedia[1].countTotal}
                todayCnt={socialData.SocialMedia[1].countToday}
                followerOrSubsriber={socialData.SocialMedia[1].countLbl}
              />
            )}
            {socialData != "" && (
              <FollowerComponent
                borderColor="bg-yellow-100"
                imgSrc={socialData.SocialMedia[2].imgSrc}
                userName={socialData.SocialMedia[2].userName}
                totalCnt={socialData.SocialMedia[2].countTotal}
                todayCnt={socialData.SocialMedia[2].countToday}
                followerOrSubsriber={socialData.SocialMedia[2].countLbl}
              />
            )}
            {socialData != "" && (
              <FollowerComponent
                borderColor="bg-red-500"
                imgSrc={socialData.SocialMedia[3].imgSrc}
                userName={socialData.SocialMedia[3].userName}
                totalCnt={socialData.SocialMedia[3].countTotal}
                todayCnt={socialData.SocialMedia[3].countToday}
                followerOrSubsriber={socialData.SocialMedia[3].countLbl}
              />
            )}
          </div>

          <p className="text-2xl  text-gray-500  dark:text-textheader-dark">Overview - Today</p>
          <div className="grid sm:grid-cols-2  lg:grid-cols-4  gap-10 ">
            {socialData != "" && (
              <DetailComponent
                detailLabel={socialData.SocialMedia[0].details[0].detailLbl}
                imgSrc={socialData.SocialMedia[0].imgSrc}
                detailCnt={socialData.SocialMedia[0].details[0].detailCount}
                percentRate={socialData.SocialMedia[0].details[0].percentCnt}
              />
            )}
            {socialData != "" && (
              <DetailComponent
                detailLabel={socialData.SocialMedia[0].details[1].detailLbl}
                imgSrc={socialData.SocialMedia[0].imgSrc}
                detailCnt={socialData.SocialMedia[0].details[1].detailCount}
                percentRate={socialData.SocialMedia[0].details[1].percentCnt}
              />
            )}

            {socialData != "" && (
              <DetailComponent
                detailLabel={socialData.SocialMedia[2].details[0].detailLbl}
                imgSrc={socialData.SocialMedia[2].imgSrc}
                detailCnt={socialData.SocialMedia[2].details[0].detailCount}
                percentRate={socialData.SocialMedia[2].details[0].percentCnt}
              />
            )}
            {socialData != "" && (
              <DetailComponent
                detailLabel={socialData.SocialMedia[2].details[1].detailLbl}
                imgSrc={socialData.SocialMedia[2].imgSrc}
                detailCnt={socialData.SocialMedia[2].details[1].detailCount}
                percentRate={socialData.SocialMedia[2].details[1].percentCnt}
              />
            )}
            {socialData != "" && (
              <DetailComponent
                detailLabel={socialData.SocialMedia[1].details[0].detailLbl}
                imgSrc={socialData.SocialMedia[1].imgSrc}
                detailCnt={socialData.SocialMedia[1].details[0].detailCount}
                percentRate={socialData.SocialMedia[1].details[0].percentCnt}
              />
            )}
            {socialData != "" && (
              <DetailComponent
                detailLabel={socialData.SocialMedia[1].details[1].detailLbl}
                imgSrc={socialData.SocialMedia[1].imgSrc}
                detailCnt={socialData.SocialMedia[1].details[1].detailCount}
                percentRate={socialData.SocialMedia[1].details[1].percentCnt}
              />
            )}
            {socialData != "" && (
              <DetailComponent
                detailLabel={socialData.SocialMedia[3].details[0].detailLbl}
                imgSrc={socialData.SocialMedia[3].imgSrc}
                detailCnt={socialData.SocialMedia[3].details[0].detailCount}
                percentRate={socialData.SocialMedia[3].details[0].percentCnt}
              />
            )}
            {socialData != "" && (
              <DetailComponent
                detailLabel={socialData.SocialMedia[3].details[1].detailLbl}
                imgSrc={socialData.SocialMedia[3].imgSrc}
                detailCnt={socialData.SocialMedia[3].details[1].detailCount}
                percentRate={socialData.SocialMedia[3].details[1].percentCnt}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
