// src/contexts/AppProviders.jsx
import { useContext } from "react";
import { ThemeProvider } from "./ThemeContext";
import { SearchProvider } from "./SearchContext";
import { SkeletonTheme } from "react-loading-skeleton";
import ThemeContext from './ThemeContext';
import { DataProvider } from "./DataContext";

const AppProvidersWrapper = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);

  const skeletonBaseColor = isDarkMode ? '#202020' : '#e0e0e0';
  const skeletonHighlightColor = isDarkMode ? '#444' : '#f5f5f5';

  return (
    <SkeletonTheme baseColor={skeletonBaseColor} highlightColor={skeletonHighlightColor}>
      <SearchProvider>{children}</SearchProvider>
    </SkeletonTheme>
  );
};

export const AppProviders = ({ children }) => (
  <ThemeProvider>
    <AppProvidersWrapper>
    <DataProvider>{children}</DataProvider>
      </AppProvidersWrapper>
  </ThemeProvider>
);
