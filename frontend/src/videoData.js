// Mock video data
export const getVideoData = (videoId) => {
  // This would normally be fetched from an API
  return {
    id: videoId,
    title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
    description:
      "The official video for \"Never Gonna Give You Up\" by Rick Astley\n\nTaken from the album 'Whenever You Need Somebody' – deluxe 2CD and digital deluxe out 6th May 2022 Pre-order here – https://RickAstley.lnk.to/WYNS2022ID\n\nFollow Rick Astley:\nSpotify - https://RickAstley.lnk.to/SpotifyID\nApple Music - https://RickAstley.lnk.to/AppleMusicID\nAmazon Music - https://RickAstley.lnk.to/AmazonMusicID\nDeezer - https://RickAstley.lnk.to/DeezerID\n\nLyrics:\nWe're no strangers to love\nYou know the rules and so do I\nA full commitment's what I'm thinking of\nYou wouldn't get this from any other guy\n\nI just wanna tell you how I'm feeling\nGotta make you understand\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\n#RickAstley #NeverGonnaGiveYouUp #WheneverYouNeedSomebody #OfficialMusicVideo",
    views: 1256000000,
    likes: 15600000,
    dislikes: 580000,
    publishedAt: "2009-10-25T06:57:33Z",
    channelId: "UCuAXFkgsw1L7xaCfnd5JJOw",
    channelName: "Rick Astley",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKZ3MkQXGz5NUttNUMXgCDvnwvwXRJfGUUUYNcDr=s176-c-k-c0x00ffffff-no-rj",
    channelSubscribers: 4200000,
    tags: ["Rick Astley", "Never Gonna Give You Up", "Music", "Pop"],
    commentCount: 3200000,
    comments: [
      {
        id: "comment1",
        authorDisplayName: "Music Lover",
        authorProfileImageUrl:
          "https://yt3.googleusercontent.com/ytc/APkrFKZ3MkQXGz5NUttNUMXgCDvnwvwXRJfGUUUYNcDr=s176-c-k-c0x00ffffff-no-rj",
        authorChannelId: "UC123456789",
        textDisplay: "This song never gets old. Still listening in 2023!",
        publishedAt: "2023-01-15T12:34:56Z",
        likeCount: 15243,
      },
      {
        id: "comment2",
        authorDisplayName: "Retro Fan",
        authorProfileImageUrl:
          "https://yt3.googleusercontent.com/ytc/APkrFKaqca-xQcJtp9XfTdQx5-TeoFpCOeXGGQQC8GIQSg=s176-c-k-c0x00ffffff-no-rj",
        authorChannelId: "UC987654321",
        textDisplay: "I've been rickrolled so many times that I actually enjoy this song now. It's a classic!",
        publishedAt: "2022-11-20T08:12:34Z",
        likeCount: 8765,
      },
      {
        id: "comment3",
        authorDisplayName: "Internet Historian",
        authorProfileImageUrl:
          "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj",
        authorChannelId: "UC567891234",
        textDisplay:
          "Fun fact: This video was uploaded to YouTube in 2009, but the song was released in 1987. It's amazing how internet culture gave it a second life decades later.",
        publishedAt: "2022-08-05T15:45:12Z",
        likeCount: 12543,
      },
      {
        id: "comment4",
        authorDisplayName: "Meme Expert",
        authorProfileImageUrl:
          "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
        authorChannelId: "UC135792468",
        textDisplay:
          "This is the greatest rickroll of all time. I've seen this video at least 100 times and it still makes me smile every time.",
        publishedAt: "2023-03-10T09:23:45Z",
        likeCount: 9876,
      },
    ],
  }
}

// Mock recommended videos data
export const getRecommendedVideos = (currentVideoId) => {
  // This would normally be fetched from an API
  return [
    {
      id: "dQw4w9WgXcQ1",
      title: "Rick Astley - Together Forever (Official Music Video)",
      thumbnail: "https://i.ytimg.com/vi/yPYZpwSpKmA/maxresdefault.jpg",
      channelName: "Rick Astley",
      channelId: "UCuAXFkgsw1L7xaCfnd5JJOw",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKZ3MkQXGz5NUttNUMXgCDvnwvwXRJfGUUUYNcDr=s176-c-k-c0x00ffffff-no-rj",
      views: 86000000,
      publishedAt: "2010-10-25T06:57:33Z",
      duration: 213, // 3:33
    },
    {
      id: "dQw4w9WgXcQ2",
      title: "Rick Astley - Whenever You Need Somebody (Official Music Video)",
      thumbnail: "https://i.ytimg.com/vi/BeyEGebJ1l4/maxresdefault.jpg",
      channelName: "Rick Astley",
      channelId: "UCuAXFkgsw1L7xaCfnd5JJOw",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKZ3MkQXGz5NUttNUMXgCDvnwvwXRJfGUUUYNcDr=s176-c-k-c0x00ffffff-no-rj",
      views: 45000000,
      publishedAt: "2011-02-15T12:34:56Z",
      duration: 210, // 3:30
    },
    {
      id: "dQw4w9WgXcQ3",
      title: "a-ha - Take On Me (Official Video) [Remastered in 4K]",
      thumbnail: "https://i.ytimg.com/vi/djV11Xbc914/maxresdefault.jpg",
      channelName: "a-ha",
      channelId: "UC1Ue7TuX3iH4y8d9QAi8FHQ",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
      views: 1400000000,
      publishedAt: "2010-02-17T06:57:33Z",
      duration: 225, // 3:45
    },
    {
      id: "dQw4w9WgXcQ4",
      title: "Michael Jackson - Billie Jean (Official Video)",
      thumbnail: "https://i.ytimg.com/vi/Zi_XLOBDo_Y/maxresdefault.jpg",
      channelName: "Michael Jackson",
      channelId: "UC5OrDvL9DscpcAstz7JnQGA",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKaqca-xQcJtp9XfTdQx5-TeoFpCOeXGGQQC8GIQSg=s176-c-k-c0x00ffffff-no-rj",
      views: 1100000000,
      publishedAt: "2009-10-03T08:45:00Z",
      duration: 294, // 4:54
    },
    {
      id: "dQw4w9WgXcQ5",
      title: "Queen - Bohemian Rhapsody (Official Video Remastered)",
      thumbnail: "https://i.ytimg.com/vi/fJ9rUzIMcZQ/maxresdefault.jpg",
      channelName: "Queen Official",
      channelId: "UCiMhD4jzUqG-IgPzUmmytRQ",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj",
      views: 1500000000,
      publishedAt: "2008-08-01T14:30:00Z",
      duration: 355, // 5:55
    },
    {
      id: "dQw4w9WgXcQ6",
      title: "Toto - Africa (Official HD Video)",
      thumbnail: "https://i.ytimg.com/vi/FTQbiNvZqaY/maxresdefault.jpg",
      channelName: "Toto Official",
      channelId: "UCxYkZIJuDTVm_8zJrK7-FsQ",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
      views: 950000000,
      publishedAt: "2012-04-25T18:20:00Z",
      duration: 274, // 4:34
    },
    {
      id: "dQw4w9WgXcQ7",
      title: "Guns N' Roses - Sweet Child O' Mine (Official Music Video)",
      thumbnail: "https://i.ytimg.com/vi/1w7OgIMMRc4/maxresdefault.jpg",
      channelName: "Guns N' Roses",
      channelId: "UCIak6JLVOjuZxxXcGd3cZsg",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
      views: 1200000000,
      publishedAt: "2009-12-25T10:15:00Z",
      duration: 355, // 5:55
    },
    {
      id: "dQw4w9WgXcQ8",
      title: "Nirvana - Smells Like Teen Spirit (Official Music Video)",
      thumbnail: "https://i.ytimg.com/vi/hTWKbfoikeg/maxresdefault.jpg",
      channelName: "Nirvana",
      channelId: "UCFMZHIQMgBXwqHOX8_MdZ_g",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKaqca-xQcJtp9XfTdQx5-TeoFpCOeXGGQQC8GIQSg=s176-c-k-c0x00ffffff-no-rj",
      views: 1300000000,
      publishedAt: "2010-06-16T22:45:00Z",
      duration: 301, // 5:01
    },
  ]
}
