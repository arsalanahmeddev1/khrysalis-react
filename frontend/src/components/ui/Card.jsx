import React from 'react'
import { Link } from 'react-router-dom';

const Card = (

  {
    config,
    variant = 'vertical',
  }) => {
  const {
    content = {},
    imgWrapper = {},
    thumbnail = {},
    channel = {},
    actions = {},
  } = config;

  const { title, description, showDescription, uploadedAt, views, duration, watchedAt } = content;
  const { imgWrapperClass } = imgWrapper;
  const { img, video, className, id } = thumbnail;
  const { name, img: channelImg, subscribers, isVerified, icon, } = channel;
  const {
    onClick,
    onRemove,
    saveToPlaylist,
    removeFromLikedVideos,
    share,
    addToQueue,
    notInterested,
  } = actions;

  const cardLayout =
    variant === 'horizontal'
      ? 'flex flex-col'
      : 'video-card-wrapper';
  return (
    <>
      <div className={`group ${className} ${cardLayout} w-full  block`}>
        <div className={`relative mb-[10px] flex-shrink-0 ${imgWrapperClass}`}>
          <Link to={`/watch?v=${id}`} >
            {(thumbnail.img || thumbnail.video) && (
              <>
                <img
                  src={thumbnail.img || thumbnail.video}
                  alt={content.title}
                  className={`w-full h-full object-cover rounded-xl max-w-[320px] max-h-[180px] ${className}`}
                />
                <div className="video-card-bottom-area">
                  {thumbnail.duration}
                </div>
              </>
            )}
          </Link>
        </div>
        <div>
          {content.title && <h1>{content.title}</h1>}

          {content.showDescription && content.description && (
            <p className="mt-2 text-gray-600">{content.description}</p>
          )}
          {channel.name && (
            // <div className="flex items-center mt-2">
            <>
              {channel.img && (
                <img
                  src={channel.img}
                  alt={channel.name}
                  className="w-6 h-6 rounded-full mr-2"
                />
              )}
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">{channel.name}</p>
              {/* {channel.isVerified && channel.icon && <span className="ml-1">{channel.icon}</span>} */}
            </>
            // </div>
          )}
          {views && (
            <p className="text-sm text-gray-500">Views {views} . <span>{uploadedAt}</span></p>
          )}
          {watchedAt && <p className="ml-1 text-gray-500">watched {watchedAt} </p>}

          {actions && (
            <div className="mt-4 flex gap-2">
              {actions.saveToPlaylist && (
                <button onClick={actions.saveToPlaylist} className="text-sm text-blue-600">
                  Save to Playlist
                </button>
              )}
              {actions.share && (
                <button onClick={actions.share} className="text-sm text-blue-600">
                  Share
                </button>
              )}
            </div>
          )}
        </div>
      </div>

    </>


  )
}

export default Card;
