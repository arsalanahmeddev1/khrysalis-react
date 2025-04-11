import Header from "../../components/header";
import blipsIcon from "../../assets/icons/blips.png";
import Dashboard from "../../components/dashboard";
import gamingHeaderPic from "../../assets/images/gamingheader1.png";
import profilePic from "../../assets/icons/blips-profile.png";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../../components/button";
import history1Img from "../../assets/images/history-1.png";
import history2Img from "../../assets/images/history-2.png";
import history3Img from "../../assets/images/history-3.png";
import history4Img from "../../assets/images/history-4.png";
import { VerifiedTick } from "../../assets/svgs";
import { subscriptionTabs as tabs } from "../../conts";

const SubscriptionVideoPage = () => {
  const categories = [
    "All",
    "Trending",
    "Live",
    "Gaming",
    "Music",
    "Travel",
    "Sports",
    "Animation",
    "Game play",
    "Streaming",
    "Camping",
    "Cast",
  ];
  return (
    <div className="bg-black-false pb-20 min-h-screen">
      <div className="max-w-screen-xl m-auto">
        <Header />
        <div className="px-4">
          {/* Main  */}
          <div className="flex justify-between relative top-[72px]">
            <div className="!w-[14%]">
              <Dashboard />
            </div>
            <div className="w-[86%]">
              <div className="flex justify-center items-center">
                <img src={blipsIcon} className="w-[52px]" alt="" />
              </div>
              <div className="text-white-false flex justify-between mt-4 px-1">
                {categories?.map((item) => {
                  return <span className="">{item}</span>;
                })}
              </div>

              <div className="mt-4">
                <div>
                  <img src={gamingHeaderPic} alt="" />
                </div>
                <div className="mt-4 flex justify-between text-white-false items-center">
                  <div className="flex items-center gap-x-4 ">
                    <div>
                      <img src={profilePic} alt="" />
                    </div>
                    <div className="flex gap-y-1 flex-col">
                      <div className="flex gap-x-2 items-center">
                        <h1 className="capitalize font-semibold text-[25px]">
                          Gaming world
                        </h1>
                        <VerifiedTick width={25} height={25} />
                      </div>
                      <div className="flex text-[10px] gap-x-2">
                        <span>Gaming World</span>
                        <span>18.6k subscribers</span>
                        <span>526 videos</span>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <span className="text-[12px] font-medium">
                          Gaming world
                        </span>{" "}
                        <IoIosArrowForward className="text-[12px]" />
                      </div>
                    </div>
                  </div>
                  <Button>Followers</Button>
                </div>
                <div className="flex items-center">
                  <div className="mt-10 flex gap-3 items-start flex-wrap justify-around">
                    {tabs?.map((val, index) => (
                      <Button path={val?.path} enabled={"Videos"}>
                        {val?.title}
                      </Button>
                    ))}
                  </div>
                  {/* <div></div>
                                    <div className="flex gap-x-2 text-white-false">
                                        <a href="">Latest</a>
                                        <a href="">Popular</a>
                                        <a href="">Oldest</a>
                                    </div> */}
                </div>
                <div className="flex justify-between flex-wrap gap-5 text-white-false mt-8">
                  <div className="w-[232px] flex-col flex gap-y-2">
                    <div>
                      <img
                        src={history1Img}
                        className="w-[232px] h-[135px]"
                        alt=""
                      />
                    </div>
                    <span className="block text-[13px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </span>
                  </div>
                  <div className="w-[232px] flex-col flex gap-y-2">
                    <div>
                      <img
                        src={history2Img}
                        className="w-[232px] h-[135px]"
                        alt=""
                      />
                    </div>
                    <span className="block text-[13px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </span>
                  </div>
                  <div className="w-[232px] flex-col flex gap-y-2">
                    <div>
                      <img
                        src={history3Img}
                        className="w-[232px] h-[135px]"
                        alt=""
                      />
                    </div>
                    <span className="block text-[13px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </span>
                  </div>
                  <div className="w-[232px] flex-col flex gap-y-2">
                    <div>
                      <img
                        src={history4Img}
                        className="w-[232px] h-[135px]"
                        alt=""
                      />
                    </div>
                    <span className="block text-[13px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </span>
                  </div>
                  <div className="w-[232px] flex-col flex gap-y-2">
                    <div>
                      <img
                        src={history1Img}
                        className="w-[232px] h-[135px]"
                        alt=""
                      />
                    </div>
                    <span className="block text-[13px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </span>
                  </div>
                  <div className="w-[232px] flex-col flex gap-y-2">
                    <div>
                      <img
                        src={history2Img}
                        className="w-[232px] h-[135px]"
                        alt=""
                      />
                    </div>
                    <span className="block text-[13px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </span>
                  </div>
                  <div className="w-[232px] flex-col flex gap-y-2">
                    <div>
                      <img
                        src={history3Img}
                        className="w-[232px] h-[135px]"
                        alt=""
                      />
                    </div>
                    <span className="block text-[13px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </span>
                  </div>
                  <div className="w-[232px] flex-col flex gap-y-2">
                    <div>
                      <img
                        src={history4Img}
                        className="w-[232px] h-[135px]"
                        alt=""
                      />
                    </div>
                    <span className="block text-[13px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionVideoPage;
