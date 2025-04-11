import React from "react";
import dislikeIcon from "../assets/icons/thumbs-down.png";
import likeIcon from "../assets/icons/thumbs-up.png";
import profilePic from "../assets/icons/blips-profile.png";

const Comment = ({
  user,
  text,
  like,
  likeCommentApi,
  setReply,
  _id: id,
  replies,
  comments,
}) => {
  const commentsReplies = comments.filter((comment) => comment.replies === id);

  return (
    <div>
      {!replies && (
        <div className="flex gap-x-2 items-start">
          <img src={profilePic} height={59} width={59} alt="" />
          <div className="flex flex-col gap-y-3">
            <p className="text-[11px] font-bold">{user.name}</p>
            <p className="text-[7px]">{text}</p>
            <div className="flex gap-x-2">
              <img
                onClick={() => likeCommentApi({ id })}
                height={14}
                width={14}
                src={likeIcon}
                alt=""
              />
              <span className="text-[13px]">{like.length} likes</span>
              <img height={14} width={14} src={dislikeIcon} alt="" />
              <span
                onClick={() =>
                  setReply({
                    id,
                    name: user.name,
                  })
                }
                className="text-[13px]"
              >
                Reply
              </span>
            </div>
          </div>
        </div>
      )}

      {(commentsReplies.length &&
        commentsReplies.map(({ user, text, like, likeCommentApi, _id: id }) => (
          <div className="ms-5 flex gap-x-2 items-start">
            <img src={profilePic} height={59} width={59} alt="" />
            <div className="flex flex-col gap-y-3">
              <p className="text-[11px] font-bold">{user.name}</p>
              <p className="text-[7px]">{text}</p>
              <div className="flex gap-x-2">
                <img
                  onClick={() => likeCommentApi({ id })}
                  height={14}
                  width={14}
                  src={likeIcon}
                  alt=""
                />
                <span className="text-[13px]">{like.length} likes</span>
                <img height={14} width={14} src={dislikeIcon} alt="" />
                <span
                  onClick={() =>
                    setReply({
                      id,
                      name: user.name,
                    })
                  }
                  className="text-[13px]"
                >
                  Reply
                </span>
              </div>
            </div>
          </div>
        ))) ||
        ""}
    </div>
  );
};

export default Comment;
