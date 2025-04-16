import {
  home,
  blips,
  followers,
  library,
  history,
  liked,
  trending,
  music,
  gaming,
  news,
  setting,
  help,
  feedback,
  hamburger,
  homeDark,
  blipsDark,
  followersDark,
  libraryDark,
  historyDark,
  likedDark,
  trendingDark,
  musicDark,
  gamingDark,
  newsDark,
  settingDark,
  helpDark,
  feedbackDark,
} from './assets/images';

export const sideBarItems = [
  [
    {
      title: "home",
      iconLight: home,
      iconDark: homeDark,
      path: "/"
    }, {
      title: "blips",
      iconLight: blips,
      iconDark: blipsDark,
      path: '/blips'
    }, {
      title: "followers",
      iconLight: followers,
      iconDark: followersDark,
      path: "/followers"
    }, {
      title: "library",
      iconLight: library,
      iconDark: libraryDark,
      path: "/library",
    }, {
      title: "history",
      iconLight: history,
      iconDark: historyDark,
      path: "/history"
    }, {
      title: "liked",
      iconLight: liked,
      iconDark: likedDark,
      path: "/liked"
    }, {
      title: "trending",
      iconLight: trending,
      iconDark: trendingDark,
      path: "/trending"
    }, {
      title: "music",
      iconLight: music,
      iconDark: musicDark,
      path: "/music"
    }, {
      title: "gaming",
      iconLight: gaming,
      iconDark: gamingDark,
      path: "/gaming"
    }, {
      title: "news",
      iconLight: news,
      iconDark: newsDark,
      path: "/news"
    }
  ], [
    {
      title: "settings",
      iconLight: setting,
      iconDark: settingDark,
      path: "/settings/account"
    }, {
      title: "report history",
      iconLight: history,
      iconDark: historyDark,
      path: "/report-history"
    }, {
      title: "help",
      iconLight: help,
      iconDark: helpDark,
      path: "/help-notification"
    }, {
      title: "send feedback",
      iconLight: feedback,
      iconDark: feedbackDark,
      path: "/feedback"
    }
  ]
]

export const settingItems = [
  {
    title: "Account",
    path: "/settings/account"
  },
  {
    title: "Notifications",
    path: "/settings/notifications"
  },
  {
    title: "Privacy",
    path: "/settings/privacy"
  },
  {
    title: "Playback and Performance",
    path: "/settings/performance&playback"
  },
  {
    title: "Downloads",
    path: "/settings/downloads"
  },
  {
    title: "Connected Apps",
    path: "/settings/connected-apps"
  },
  {
    title: "Billing and Payments",
    path: "/settings/billing&payment"
  },
  {
    title: "Advance settings",
    path: "/settings/advance"
  }
]



export const streamData = [
  {
    streamer: "Laser belch",
    category: "Neon White",
    viewers: 556,
    tags: ["English", "FirstPlayThrough"],
    description: "Check out this stream from Laser Belch"
  },
  {
    streamer: "Laser belch",
    category: "Neon White",
    viewers: 556,
    tags: ["English", "FirstPlayThrough", "SecondPlayThrough"],
    description: "Check out this stream from Laser Belch"
  },
  {
    streamer: "Laser belch",
    category: "Neon White",
    viewers: 556,
    tags: ["English", "FirstPlayThrough"],
    description: "Check out this stream from Laser Belch"
  },
  {
    streamer: "Laser belch",
    category: "Neon White",
    viewers: 556,
    tags: ["English", "FirstPlayThrough"],
    description: "Check out this stream from Laser Belch"
  },
  {
    streamer: "Laser belch",
    category: "Neon White",
    viewers: 556,
    tags: ["English", "FirstPlayThrough"],
    description: "Check out this stream from Laser Belch"
  },
];


export const initialHistoryData = [
  {
    id: "dQw4w9WgXcQ",
    title: "Building a YouTube Clone with React and Tailwind CSS - Full Tutorial",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
    channel: "Web Dev Simplified",
    channelId: "UC-T8W79DN6PBnzomelvqJYw",
    views: "1.2M",
    uploadTime: "2 months ago",
    duration: "18:24",
    watchedAt: "2023-05-15T14:32:00",
  },
  {
    id: "FZ0cG47msEk",
    title: "React 18 New Features Explained - What You Need to Know About the Latest Update",
    thumbnail: "https://i.ytimg.com/vi/FZ0cG47msEk/mqdefault.jpg",
    channel: "Fireship",
    channelId: "UCsBjURrPoezykLs9EqgamOA",
    views: "856K",
    uploadTime: "3 weeks ago",
    duration: "10:12",
    watchedAt: "2023-05-15T10:15:00",
  },
  {
    id: "UBOj6rqRUME",
    title: "Tailwind CSS Crash Course - Build Modern Websites Without Writing CSS",
    thumbnail: "https://i.ytimg.com/vi/UBOj6rqRUME/mqdefault.jpg",
    channel: "Traversy Media",
    channelId: "UC29ju8bIPH5as8OGnQzwJyA",
    views: "2.3M",
    uploadTime: "1 year ago",
    duration: "24:56",
    watchedAt: "2023-05-15T08:45:00",
  },
  {
    id: "oxoFVqetl1E",
    title: "JavaScript Interview Questions Every Developer Should Know",
    thumbnail: "https://i.ytimg.com/vi/oxoFVqetl1E/mqdefault.jpg",
    channel: "Coding With Mosh",
    channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
    views: "1.5M",
    uploadTime: "5 months ago",
    duration: "32:18",
    watchedAt: "2023-05-14T19:20:00",
  },
  {
    id: "NO7_jgzVgbc",
    title: "How to Build a Portfolio Website That Gets You Hired",
    thumbnail: "https://i.ytimg.com/vi/NO7_jgzVgbc/mqdefault.jpg",
    channel: "Clever Programmer",
    channelId: "UCqrILQNl5Ed9Dz6CGMyvMTQ",
    views: "987K",
    uploadTime: "7 months ago",
    duration: "45:22",
    watchedAt: "2023-05-14T16:30:00",
  },
  {
    id: "9zBsdzdE4sM",
    title: "CSS Grid Tutorial - Complete Guide to Building Layouts with Grid",
    thumbnail: "https://i.ytimg.com/vi/9zBsdzdE4sM/mqdefault.jpg",
    channel: "Kevin Powell",
    channelId: "UCJZv4d5rbIKd4QHMPkcABCw",
    views: "1.1M",
    uploadTime: "8 months ago",
    duration: "28:34",
    watchedAt: "2023-05-14T14:15:00",
  },
  {
    id: "ydkQlJhodio",
    title: "TypeScript for React Developers - Why You Should Use It",
    thumbnail: "https://i.ytimg.com/vi/ydkQlJhodio/mqdefault.jpg",
    channel: "Ben Awad",
    channelId: "UC-8QAzbLcRglXeN_MY9blyw",
    views: "723K",
    uploadTime: "4 months ago",
    duration: "15:42",
    watchedAt: "2023-05-10T20:30:00",
  },
  {
    id: "__mSgDEOyv8",
    title: "Next.js vs React - Which One Should You Choose for Your Project?",
    thumbnail: "https://i.ytimg.com/vi/__mSgDEOyv8/mqdefault.jpg",
    channel: "Academind",
    channelId: "UCSJbGtTlrDami-tDGPUV9-w",
    views: "1.8M",
    uploadTime: "2 months ago",
    duration: "22:15",
    watchedAt: "2023-05-10T18:15:00",
  },
  {
    id: "bbkBuqC1rU4",
    title: "Redux Toolkit Tutorial - State Management in React Made Easy",
    thumbnail: "https://i.ytimg.com/vi/bbkBuqC1rU4/mqdefault.jpg",
    channel: "Programming with Mosh",
    channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
    views: "654K",
    uploadTime: "3 months ago",
    duration: "19:48",
    watchedAt: "2023-05-10T15:20:00",
  },
  {
    id: "l2v6RjDoB2U",
    title: "How to Deploy a React App to Vercel - Complete Deployment Guide",
    thumbnail: "https://i.ytimg.com/vi/l2v6RjDoB2U/mqdefault.jpg",
    channel: "Sonny Sangha",
    channelId: "UCqeTj_QAnNlmt7FwzNwHZnA",
    views: "432K",
    uploadTime: "1 month ago",
    duration: "12:36",
    watchedAt: "2023-05-10T13:10:00",
  },
  {
    id: "5fLW5Q5ODiE",
    title: "React Performance Optimization Techniques You Need to Know",
    thumbnail: "https://i.ytimg.com/vi/5fLW5Q5ODiE/mqdefault.jpg",
    channel: "Jack Herrington",
    channelId: "UC6vRUjYqDuoUsYsku86Lrsw",
    views: "876K",
    uploadTime: "6 months ago",
    duration: "27:14",
    watchedAt: "2023-05-08T11:45:00",
  },
  {
    id: "7CqJlxBYj-M",
    title: "Building a Full Stack App with React, Node.js, and MongoDB",
    thumbnail: "https://i.ytimg.com/vi/7CqJlxBYj-M/mqdefault.jpg",
    channel: "JavaScript Mastery",
    channelId: "UCmXmlB4-HJytD7wek0Uo97A",
    views: "1.3M",
    uploadTime: "9 months ago",
    duration: "1:02:45",
    watchedAt: "2023-05-08T09:30:00",
  },
  {
    id: "JJSoEo8JSnc",
    title: "CSS Flexbox Tutorial - How to Build Modern Layouts",
    thumbnail: "https://i.ytimg.com/vi/JJSoEo8JSnc/mqdefault.jpg",
    channel: "Traversy Media",
    channelId: "UC29ju8bIPH5as8OGnQzwJyA",
    views: "2.7M",
    uploadTime: "1 year ago",
    duration: "20:32",
    watchedAt: "2023-05-05T16:20:00",
  },
  {
    id: "Ul3y1LXxzdU",
    title: "React Router v6 Tutorial - Complete Guide to Routing in React",
    thumbnail: "https://i.ytimg.com/vi/Ul3y1LXxzdU/mqdefault.jpg",
    channel: "Net Ninja",
    channelId: "UCW5YeuERMmlnqo4oq8vwUpg",
    views: "945K",
    uploadTime: "5 months ago",
    duration: "16:28",
    watchedAt: "2023-05-05T14:15:00",
  },
  {
    id: "Uszj_k0DGsg",
    title: "How to Use GitHub Like a Pro - Advanced Git Techniques",
    thumbnail: "https://i.ytimg.com/vi/Uszj_k0DGsg/mqdefault.jpg",
    channel: "Fireship",
    channelId: "UCsBjURrPoezykLs9EqgamOA",
    views: "1.6M",
    uploadTime: "7 months ago",
    duration: "14:52",
    watchedAt: "2023-05-05T10:30:00",
  },
]

export const initialSubscriptionsData = [
  {
    id: "UCsBjURrPoezykLs9EqgamOA",
    name: "Fireship",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/h5Jml_Ckp1D8LqzEUlUaLRiKPbmHJ4Vt4JGhTzpxD9LVgg8M-Mf5K8ORNfVTLKGxH0H_2gQYOg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    subscribers: "2.4M",
    description:
      "High-intensity ⚡ code tutorials and tech news to help you ship your app faster. New videos every week covering the topics that real developers need to know about.",
    notificationSetting: "all",
    lastUpload: {
      videoId: "dQw4w9WgXcQ",
      title: "10 React Antipatterns to Avoid - Code This, Not That!",
      timeAgo: "2 days ago",
      date: "2023-05-13T14:00:00",
    },
  },
  {
    id: "UC8butISFwT-Wl7EV0hUK0BQ",
    name: "freeCodeCamp.org",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKaqca-xQcJtp9XfTdQx5-TeoFpCOeXGGQQC8GIQSg=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-bpfJE=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    subscribers: "8.2M",
    description:
      "Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers.",
    notificationSetting: "personalized",
    lastUpload: {
      videoId: "FZ0cG47msEk",
      title: "Learn Python Full Course for Beginners",
      timeAgo: "1 week ago",
      date: "2023-05-08T10:00:00",
    },
  },
  {
    id: "UCW5YeuERMmlnqo4oq8vwUpg",
    name: "Net Ninja",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKbpSojje_-tkBQecNtFuPdSCrg3ZT0FhaYjln9k0g=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/L8Jb0vEKKJU7-P9N_LRjQSwUhK1IY_FZwbKI03gu0_MXAcU8UhYJBUKWWH0W7jYvBN2qWJOS=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    subscribers: "1.2M",
    description:
      "Black-belt your web development skills. Over 1000 free programming tutorials about modern JavaScript, Node.js, React, Vue.js, Firebase, MongoDB and much more.",
    notificationSetting: "none",
    lastUpload: {
      videoId: "UBOj6rqRUME",
      title: "React Native Crash Course",
      timeAgo: "3 days ago",
      date: "2023-05-12T16:30:00",
    },
  },
  {
    id: "UC29ju8bIPH5as8OGnQzwJyA",
    name: "Traversy Media",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/I6_E2PxV5vNQVKWR3NsSsXb5h7ZnFtoZGFXookgFjGI4_iZ3O0-jybuilders-Wy9Dl0jUQaXYnGTY=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    subscribers: "2.1M",
    description:
      "Traversy Media features the best online web development and programming tutorials for all of the latest web technologies including Node.js, Angular, React, Vue.js, PHP, Rails, HTML, CSS and much more.",
    notificationSetting: "personalized",
    lastUpload: {
      videoId: "oxoFVqetl1E",
      title: "Full Stack MERN Application Tutorial",
      timeAgo: "5 days ago",
      date: "2023-05-10T12:00:00",
    },
  },
  {
    id: "UCvuY904el7JvBlPbdqbfguw",
    name: "Maximilian Schwarzmüller",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/ytc/APkrFKZJ-JGzAiMb1Vb6lYfCFESZIYQ9QF6DhTLvl_BqUQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    subscribers: "780K",
    description:
      "I'm Manuel Lorenz, a passionate web developer and instructor focused on Angular, React, Vue and other frontend technologies.",
    notificationSetting: "all",
    lastUpload: {
      videoId: "NO7_jgzVgbc",
      title: "Angular vs React - Which Framework to Learn in 2023",
      timeAgo: "2 weeks ago",
      date: "2023-05-01T09:15:00",
    },
  },
  {
    id: "UCJZv4d5rbIKd4QHMPkcABCw",
    name: "Kevin Powell",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY8J5-d_A=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/ytc/APkrFKYmhu0i_-VSU4v6X4HHgfZIHzqwTvMJGkrN2bxJ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    subscribers: "950K",
    description:
      "Helping you become a better frontend developer, mostly focusing on HTML and CSS, with some JavaScript thrown in for good measure.",
    notificationSetting: "none",
    lastUpload: {
      videoId: "9zBsdzdE4sM",
      title: "CSS Grid Made Simple",
      timeAgo: "1 day ago",
      date: "2023-05-14T18:30:00",
    },
  },
  {
    id: "UC-8QAzbLcRglXeN_MY9blyw",
    name: "Ben Awad",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKYRGnQADYYGUANq_sBUMyjL1fZQR3I3-nt1JTtB=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/ytc/APkrFKYRGnQADYYGUANq_sBUMyjL1fZQR3I3-nt1JTtB=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "340K",
    description:
      "I make videos about programming, mostly focusing on web development with React, TypeScript, GraphQL, and more.",
    notificationSetting: "personalized",
    lastUpload: {
      videoId: "ydkQlJhodio",
      title: "Building a Full Stack App with Next.js, Prisma, and PostgreSQL",
      timeAgo: "3 weeks ago",
      date: "2023-04-25T14:45:00",
    },
  },
  {
    id: "UCSJbGtTlrDami-tDGPUV9-w",
    name: "Academind",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKaqQkSJAqVbmMj0z0eAGM8IeVLUPZvXrbjHE4Nt=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/ytc/APkrFKaqQkSJAqVbmMj0z0eAGM8IeVLUPZvXrbjHE4Nt=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "1.9M",
    description:
      "Online education that actually works! Master the most recent technologies through project-based learning.",
    notificationSetting: "all",
    lastUpload: {
      videoId: "__mSgDEOyv8",
      title: "React 18 - Complete Guide",
      timeAgo: "4 days ago",
      date: "2023-05-11T11:20:00",
    },
  },
  {
    id: "UCWv7vMbMWH4-V0ZXdmDpPBA",
    name: "Programming with Mosh",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKaQMVMjk5Gl5EHURhR3-XKnEICkESG-JbrY4YEPbA=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/ytc/APkrFKaQMVMjk5Gl5EHURhR3-XKnEICkESG-JbrY4YEPbA=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "3.8M",
    description:
      "I train professional software engineers that companies love to hire. My courses are practical, concise and engaging.",
    notificationSetting: "personalized",
    lastUpload: {
      videoId: "bbkBuqC1rU4",
      title: "JavaScript Algorithms and Data Structures",
      timeAgo: "1 week ago",
      date: "2023-05-08T08:00:00",
    },
  },
  {
    id: "UCqeTj_QAnNlmt7FwzNwHZnA",
    name: "Sonny Sangha",
    avatar:
      "https://yt3.googleusercontent.com/FjeN785fVWx0Hd-1MZHI3g3HImv6_xT6YYPvS_d_9FhNNQq-EFPFMdaHIaAJHfUW7Z1vtkzvhw=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/FjeN785fVWx0Hd-1MZHI3g3HImv6_xT6YYPvS_d_9FhNNQq-EFPFMdaHIaAJHfUW7Z1vtkzvhw=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "420K",
    description:
      "I'm a software developer who makes videos about modern web development with a focus on React, Next.js, and full-stack applications.",
    notificationSetting: "none",
    lastUpload: {
      videoId: "l2v6RjDoB2U",
      title: "Build a Twitter Clone with Next.js 13",
      timeAgo: "6 days ago",
      date: "2023-05-09T15:30:00",
    },
  },
  {
    id: "UC6vRUjYqDuoUsYsku86Lrsw",
    name: "Jack Herrington",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKZ_CKzGy9XFbHZmPqQWYMY9vVCYxhNNxUmIAFSLuA=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/ytc/APkrFKZ_CKzGy9XFbHZmPqQWYMY9vVCYxhNNxUmIAFSLuA=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "210K",
    description: "Frontend videos from basic to very advanced; tutorials, technology deep-dives and more!",
    notificationSetting: "all",
    lastUpload: {
      videoId: "5fLW5Q5ODiE",
      title: "React Server Components Explained",
      timeAgo: "2 days ago",
      date: "2023-05-13T10:15:00",
    },
  },
  {
    id: "UCmXmlB4-HJytD7wek0Uo97A",
    name: "JavaScript Mastery",
    avatar:
      "https://yt3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "980K",
    description:
      "Master modern web development with a project-based approach. JavaScript, React.js, Next.js, and more.",
    notificationSetting: "personalized",
    lastUpload: {
      videoId: "7CqJlxBYj-M",
      title: "Build and Deploy a Modern Web 3.0 Blockchain App",
      timeAgo: "3 days ago",
      date: "2023-05-12T09:30:00",
    },
  },
]

