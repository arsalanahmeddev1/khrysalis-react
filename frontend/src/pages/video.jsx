import { useState } from "react";
import Header from "../components/header";
import blipsIcon from "../assets/icons/blips.png";
import downloadIcon from "../assets/icons/download.png";
import shareIcon from "../assets/icons/share.png";
import likeIcon from "../assets/icons/thumbs-up.png";
import Dashboard from "../components/dashboard";
import AdImage from "../assets/images/ad.png";
import profilePic from "../assets/icons/blips-profile.png";
import { VerifiedTick } from "../assets/svgs";
import liked1 from "../assets/images/liked-1.png";
import Button from "../components/button";
import LineDivider from "../components/divider";
import { Link, useParams } from "react-router-dom";
import {
  useLikeVideoMutation,
  useVideoDetailQuery,
} from "../redux/features/video";
import { useGetUserQuery } from "../redux/features/auth";
import {
  useAllCommentsQuery,
  useAddCommentMutation,
  useLikeCommentMutation,
} from "../redux/features/comments";
import Loader from "../components/Loader";
import Comment from "../components/comment";
import { useSubscribeChannelMutation } from "../redux/features/channel";

const upload_url = process.env.REACT_APP_ASSET_URL;

const VideoPage = () => {
  const [commentState, setCommentState] = useState("");
  const [reply, setReply] = useState();
  const { id } = useParams();

  const userData = useGetUserQuery(id);
  const videoData = useVideoDetailQuery(id);
  const comments = useAllCommentsQuery(videoData.data?.videoDetail._id);
  const [commentApi] = useAddCommentMutation();
  const [likeVideoApi] = useLikeVideoMutation();
  const [followChannelApi] = useSubscribeChannelMutation();
  const [likeCommentApi] = useLikeCommentMutation();

  const commentSubmit = (id) => {
    if (id) {
      commentApi({
        user: userData.data.user._id,
        text: commentState,
        video: videoData.data.videoDetail._id,
        replies: id,
      });
    } else {
      commentApi({
        user: userData.data.user._id,
        text: commentState,
        video: videoData.data.videoDetail._id,
      });
    }

    setCommentState("");
    setReply(null);
  };

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

  if (videoData.isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-black-false pb-20 min-h-screen text-white-false">
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
              <div className="mt-3 flex gap-x-2 h-[300px]">
                <div className="w-[60%]">
                  <video
                    src={upload_url + videoData.data.videoDetail.video}
                    controls
                    autoPlay
                    className="h-full w-full"
                  />
                </div>
                <div className="w-[40%] flex flex-col bg-[#1B1B1B] relative">
                  <img src={AdImage} className="h-full w-full" alt="" />
                </div>
              </div>
              <div className="flex gap-x-2 mt-3">
                <div className="w-[60%]">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-2">
                      <div className="flex items-center gap-x-4 ">
                        <div>
                          <img src={profilePic} alt="" />
                        </div>
                        <div className="flex gap-y-1 flex-col">
                          <div className="flex items-center">
                            <h1 className="capitalize font-semibold w-[100px] text-[20px]">
                              Gaming world
                            </h1>
                            <VerifiedTick width={25} height={25} />
                          </div>
                          <p className="text-[10px]">18.6k Subscription</p>
                        </div>
                      </div>
                      {(userData.data.user.subscribed.includes(
                        videoData.data.videoDetail.channel
                      ) &&
                        "Following") || (
                        <Button
                          onClick={() =>
                            followChannelApi({
                              channel: videoData.data.videoDetail.channel,
                            })
                          }
                          enabled={"Follow"}
                        >
                          Follow
                        </Button>
                      )}
                    </div>
                    <div className="flex gap-x-3 justify-between items-center">
                      {videoData.data?.videoDetail.like.includes(
                        userData.data.user._id
                      ) ? (
                        <div
                          onClick={() => likeVideoApi({ id })}
                          className="flex justify-center items-center gap-x-[6px]"
                        >
                          <img src={likeIcon} alt="like_icon" />
                          <span>Liked</span>
                        </div>
                      ) : (
                        <div
                          onClick={() => likeVideoApi({ id })}
                          className="flex justify-center items-center gap-x-[6px]"
                        >
                          <img src={likeIcon} alt="like_icon" />
                          <span>Likes</span>
                        </div>
                      )}
                      <div className="flex justify-center items-center gap-x-[6px]">
                        <img src={shareIcon} alt="share_icon" />
                        <span>Share</span>
                      </div>
                      <div className="flex justify-center items-center gap-x-[6px]">
                        <img src={downloadIcon} alt="download_icon" />
                        <span>Download</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-4 mt-8">
                    <span className="text-[10px]">
                      Gaming World 171,532 views Aug 13, 2021{" "}
                    </span>
                    <Link to="#" className="font-bold text-[10px] uppercase">
                      ...More
                    </Link>
                  </div>
                  <LineDivider />
                  <div>
                    <h2 className="text-[20px] font-bold">
                      {comments.data?.comment.length} Comments
                    </h2>
                    <div>
                      {reply && `Reply to ${reply.name}`}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter your comment"
                        className="border border-gray-300 rounded-md me-4 text-black"
                        value={commentState}
                        onChange={(e) => setCommentState(e.target.value)}
                      />
                      <button onClick={() => commentSubmit(reply?.id)}>
                        Submit
                      </button>
                    </div>
                    <div className="flex flex-col gap-y-6 mt-6">
                      {comments.data?.comment.map((comment) => (
                        <Comment
                          {...comment}
                          likeCommentApi={likeCommentApi}
                          setReply={setReply}
                          comments={comments.data?.comment}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-[40%] p-2">
                  <div className="flex flex-col gap-y-2">
                    <div className="flex items-center gap-x-4">
                      <div className="w-[223px] h-[135px]">
                        <img src={liked1} className="w-full h-full" alt="" />
                      </div>
                      <div className="flex flex-col gap-y-2 h-fit py-2 w-[220px]">
                        <p className="text-[13px] font-bold">
                          Lorem Ipsimply dummy text um is simply dummy text of
                          the printing{" "}
                        </p>
                        <p className="text-[10px]">
                          Lorem If the printing and typesettingpsum is f the
                          printing and typesettingsimply.
                        </p>
                        <div className="text-[10px] flex items-center justify-between">
                          <span className="font-semibold tracking-wider">
                            Gameforall
                          </span>
                          <div className="flex gap-x-2">
                            <span>532 views</span>
                            <span>1 Month ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <div className="w-[223px] h-[135px]">
                        <img src={liked1} className="w-full h-full" alt="" />
                      </div>
                      <div className="flex flex-col gap-y-2 h-fit py-2 w-[220px]">
                        <p className="text-[13px] font-bold">
                          Lorem Ipsimply dummy text um is simply dummy text of
                          the printing{" "}
                        </p>
                        <p className="text-[10px]">
                          Lorem If the printing and typesettingpsum is f the
                          printing and typesettingsimply.
                        </p>
                        <div className="text-[10px] flex items-center justify-between">
                          <span className="font-semibold tracking-wider">
                            Gameforall
                          </span>
                          <div className="flex gap-x-2">
                            <span>532 views</span>
                            <span>1 Month ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <div className="w-[223px] h-[135px]">
                        <img src={liked1} className="w-full h-full" alt="" />
                      </div>
                      <div className="flex flex-col gap-y-2 h-fit py-2 w-[220px]">
                        <p className="text-[13px] font-bold">
                          Lorem Ipsimply dummy text um is simply dummy text of
                          the printing{" "}
                        </p>
                        <p className="text-[10px]">
                          Lorem If the printing and typesettingpsum is f the
                          printing and typesettingsimply.
                        </p>
                        <div className="text-[10px] flex items-center justify-between">
                          <span className="font-semibold tracking-wider">
                            Gameforall
                          </span>
                          <div className="flex gap-x-2">
                            <span>532 views</span>
                            <span>1 Month ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default VideoPage;
