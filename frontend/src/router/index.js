import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import FollowersPage from "../pages/followers";
import LibraryPage from "../pages/library";
import LikedPage from "../pages/liked";
import MusicPage from "../pages/music";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import ReelsPage from "../pages/reels";
import NewsPage from "../pages/news";
import SubscriptionHomePage from "../pages/subscription";
import SubscriptionVideoPage from "../pages/subscription/videos";
import SubscriptionPlaylistPage from "../pages/subscription/playlist";
import PodcastPage from "../pages/podcast";
import ChannelMainPage from "../pages/channel";
import ChannelDashboardPage from "../pages/channel/dashboard";
import ChannelContentPage from "../pages/channel/content";
import ChannelAnalyticsPage from "../pages/channel/analytics";
import ChannelCommentsMentionPage from "../pages/channel/comments.mentions";
import ChannelSubtitlesPage from "../pages/channel/subtitles";
import ChannelCopyrightPage from "../pages/channel/copyright";
import ChannelEarningPage from "../pages/channel/earn";
import ChannelCustomizationPage from "../pages/channel/customization";
import ReportHistoryPage from "../pages/report-history";
import StorePage from "../pages/store";
import FashionPage from "../pages/fashionAndBeauty";
import SportsPage from "../pages/sports";
import ProductDetailsPage from "../pages/product-details";
import SettingsAccountPage from "../pages/settings/Account";
import SettingsNotificationPage from "../pages/settings/notification";
import PerformanceAndPlaybackPage from "../pages/settings/playbackAndPerformance";
import DownloadsPage from "../pages/settings/downloads";
import PrivacyPage from "../pages/settings/privacy";
import ConnectedAppsPage from "../pages/settings/connected-apps";
import BillingsAndPaymentPage from "../pages/settings/billings-and-payment";
import AdvanceSettingPage from "../pages/settings/advance-setting";
import ChannelAudioLibraryPage from "../pages/channel/audio-library";
import SubscriptionCommunityPage from "../pages/subscription/community";
import SubscriptionChannelPage from "../pages/subscription/channel";
import SubscriptionAboutPage from "../pages/subscription/about";
import ParentalControlPage from "../pages/parentalControl";
import TrendingPage from "../pages/trending";
import GamingPage from "../pages/gaming";
import FeedbackPage from "../pages/feedback";
import HelpNotificationPage from "../pages/help-notification";
import CopyRightPage from "../pages/copyright";
import LiveStreamPage from "../pages/live-streaming";
import VideoPage from "../pages/video";
import HistoryPage from "../pages/History";
import Public from "../components/Route/PublicRoute";
import Protected from "../components/Route/ProtectedRoute";
import VideoUploadPage from "../pages/channel/video-upload";

const AppRouter = () => {
  const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/trending", element: <TrendingPage /> },
    { path: "/news", element: <NewsPage /> },
  ];

  const publicRoutes = [
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignupPage /> },
  ];

  const protectedRoutes = [
    { path: "/channel/video-upload", element: <VideoUploadPage /> },
    { path: "/video/:id", element: <VideoPage /> },
    { path: "/followers", element: <FollowersPage /> },
    { path: "/library", element: <LibraryPage /> },
    { path: "/liked", element: <LikedPage /> },
    { path: "/music", element: <MusicPage /> },
    { path: "/gaming", element: <GamingPage /> },
    { path: "/podcast", element: <PodcastPage /> },
    { path: "/feedback", element: <FeedbackPage /> },
    { path: "/copyright", element: <CopyRightPage /> },
    { path: "/history", element: <HistoryPage /> },
    { path: "/live-stream", element: <LiveStreamPage /> },
    { path: "/help-notification", element: <HelpNotificationPage /> },
    { path: "/channel/main", element: <ChannelMainPage /> },
    { path: "/channel/dashboard", element: <ChannelDashboardPage /> },
    { path: "/channel/content", element: <ChannelContentPage /> },
    { path: "/channel/analytics", element: <ChannelAnalyticsPage /> },
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
    { path: "/report-history", element: <ReportHistoryPage /> },
    { path: "/store", element: <StorePage /> },
    { path: "/fashion&beauty", element: <FashionPage /> },
    { path: "/sports", element: <SportsPage /> },
    { path: "/product/details", element: <ProductDetailsPage /> },
    { path: "/settings/account", element: <SettingsAccountPage /> },
    { path: "/settings/notifications", element: <SettingsNotificationPage /> },
    {
      path: "/settings/performance&playback",
      element: <PerformanceAndPlaybackPage />,
    },
    { path: "/settings/downloads", element: <DownloadsPage /> },
    { path: "/settings/privacy", element: <PrivacyPage /> },
    { path: "/settings/connected-apps", element: <ConnectedAppsPage /> },
    { path: "/settings/billing&payment", element: <BillingsAndPaymentPage /> },
    { path: "/settings/advance", element: <AdvanceSettingPage /> },
    { path: "/parental-control", element: <ParentalControlPage /> },
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
