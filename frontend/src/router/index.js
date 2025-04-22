import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import LibraryPage from "../pages/library";
import LikedPage from "../pages/liked";
import MusicPage from "../pages/music";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import NewsPage from "../pages/news";
import SubscriptionHomePage from "../pages/subscription";
import SubscriptionVideoPage from "../pages/subscription/videos";
import SubscriptionPlaylistPage from "../pages/subscription/playlist";
import PodcastPage from "../pages/podcast";
import ChannelMainPage from "../pages/Channel-old";
import ChannelDashboardPage from "../pages/channel-old/dashboard";
import ChannelContentPage from "../pages/channel-old/content";
import ChannelAnalyticsPage from "../pages/channel-old/analytics";
import ChannelCommentsMentionPage from "../pages/channel-old/comments.mentions";
import ChannelSubtitlesPage from "../pages/channel-old/subtitles";
import ChannelCopyrightPage from "../pages/channel-old/copyright";
import ChannelEarningPage from "../pages/channel-old/earn";
import ChannelCustomizationPage from "../pages/channel-old/customization";
import ReportHistory from "../pages/ReportHistory";
import StorePage from "../pages/store";
import FashionPage from "../pages/fashionAndBeauty";
import SportsPage from "../pages/sports";
import ProductDetailsPage from "../pages/product-details";
import PerformanceAndPlaybackPage from "../pages/settings/playbackAndPerformance";
import ChannelAudioLibraryPage from "../pages/channel-old/audio-library";
import SubscriptionCommunityPage from "../pages/subscription/community";
import SubscriptionChannelPage from "../pages/subscription/channel";
import SubscriptionAboutPage from "../pages/subscription/about";
import Trending from "../pages/Trending";
import FeedbackPage from "../pages/Feedback";
import CopyRightPage from "../pages/CopyRight";
import LiveStreamPage from "../pages/live-streaming";
import VideoPage from "../pages/video";
import HistoryPage from "../pages/History";
import Public from "../components/Route/PublicRoute";
import Protected from "../components/Route/ProtectedRoute";
import VideoUploadPage from "../pages/channel-old/video-upload";
import Blips from "../pages/blips";
import Subscriptions from "../pages/Subscriptions";
import ChannelPage from "../pages/Channelpage";
import GamingPage from "../pages/GamingPage";
import WatchPage from "../pages/WatchPage";
import SettingsPage from "../pages/SettingsPage";
import Help from "../pages/Help";

// Studio Pages
import CreateChannel from "../pages/CreateChannel"
import Dashboard from "../pages/studio/Dashboard"
import Content from "../pages/studio/Content"
import Analytics from "../pages/studio/Analytics"
import Comments from "../pages/studio/Comments"
import Customization from "../pages/studio/Customization"
import UploadVideo from "../pages/studio/UploadVideo"
import UploadShort from "../pages/studio/UploadShort"

const AppRouter = () => {
  const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/settings/*", element: <SettingsPage /> },
    { path: "/channel/:channelId", element: <ChannelPage /> },
    { path: "/watch", element: <WatchPage /> },
    { path: "/gaming", element: <GamingPage /> },
    { path: "/blips", element: <Blips /> },
    { path: "/Trending", element: <Trending /> },
    { path: "/news", element: <NewsPage /> },
    { path: "/channel/video-upload", element: <VideoUploadPage /> },
    { path: "/video/:id", element: <VideoPage /> },
    { path: "/Subscriptions", element: <Subscriptions /> },
    { path: "/library", element: <LibraryPage /> },
    { path: "/liked", element: <LikedPage /> },
    { path: "/music", element: <MusicPage /> },
    { path: "/podcast", element: <PodcastPage /> },
    { path: "/feedback", element: <FeedbackPage /> },
    { path: "/copyright", element: <CopyRightPage /> },
    { path: "/history", element: <HistoryPage /> },
    { path: "/live-stream", element: <LiveStreamPage /> },
    { path: "/channel/main", element: <ChannelMainPage /> },
    { path: "/channel/dashboard", element: <ChannelDashboardPage /> },
    { path: "/channel/content", element: <ChannelContentPage /> },
    { path: "/channel/analytics", element: <ChannelAnalyticsPage /> },
    { path: "/help", element: <Help /> },

    {
      path: "/channel/comments/mentions",
      element: <ChannelCommentsMentionPage />,
    },
    { path: "/channel/subtitles", element: <ChannelSubtitlesPage /> },
    { path: "/channel/copyrights", element: <ChannelCopyrightPage /> },
    { path: "/channel/earn", element: <ChannelEarningPage /> },
    { path: "/channel/customization", element: <ChannelCustomizationPage /> },
    { path: "/channel/audio-library", element: <ChannelAudioLibraryPage /> },
    { path: "/subscription", element: <SubscriptionHomePage /> },
    { path: "/subscription/videos", element: <SubscriptionVideoPage /> },
    { path: "/subscription/playlist", element: <SubscriptionPlaylistPage /> },
    { path: "/subscription/community", element: <SubscriptionCommunityPage /> },
    { path: "/subscription/channels", element: <SubscriptionChannelPage /> },
    { path: "/subscription/about", element: <SubscriptionAboutPage /> },
    { path: "/report-history", element: <ReportHistory /> },
    { path: "/store", element: <StorePage /> },
    { path: "/fashion&beauty", element: <FashionPage /> },
    { path: "/sports", element: <SportsPage /> },
    { path: "/product/details", element: <ProductDetailsPage /> },
    {
      path: "/settings/performance&playback",
      element: <PerformanceAndPlaybackPage />,
    },

    // Studio Routes
    {
      path: "/create-channel",
      element: <CreateChannel />,
    },
    {
      path: "/studio/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/studio/content",
      element: <Content />,
    },
    {
      path: "/studio/analytics",
      element: <Analytics />,
    },
    {
      path: "/studio/comments",
      element: <Comments />,
    },
    {
      path: "/studio/customization",
      element: <Customization />,
    },
    {
      path: "/studio/upload/video",
      element: <UploadVideo />,
    },
    {
      path: "/studio/upload/short",
      element: <UploadShort />,
    },
  ];

  const publicRoutes = [
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignupPage /> },
  ];

  const protectedRoutes = [

  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
      {publicRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<Public>{route.element}</Public>}
        />
      ))}
      {protectedRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<Protected>{route.element}</Protected>}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
