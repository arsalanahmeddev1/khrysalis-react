import { useState, useEffect } from "react";
import { useContext } from "react";
import MyContext from "../../router/context";

const CalenderSvg = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 11 11"
      fill="none"
    >
      <path
        d="M3.5 0.530273V1.93008"
        stroke="white"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.49994 0.530273V1.93008"
        stroke="white"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.25 3.83789H9.75"
        stroke="white"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 3.56347V7.52958C10 8.92939 9.25 9.86259 7.5 9.86259H3.5C1.75 9.86259 1 8.92939 1 7.52958V3.56347C1 2.16367 1.75 1.23047 3.5 1.23047H7.5C9.25 1.23047 10 2.16367 10 3.56347Z"
        stroke="white"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.34729 5.98926H7.3527"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.34717 7.38867H7.35258"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.4978 5.98926H5.50321"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.49756 7.38867H5.50297"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.64697 5.98926H3.65237"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.64697 7.38867H3.65237"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const UserAdminSvg = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 11 11"
      fill="none"
    >
      <path
        d="M4.125 1.28318C4.46494 1.28318 4.79724 1.37725 5.07989 1.55349C5.36253 1.72973 5.58283 1.98024 5.71292 2.27332C5.84301 2.5664 5.87704 2.8889 5.81073 3.20003C5.74441 3.51117 5.58071 3.79696 5.34034 4.02128C5.09997 4.24559 4.79372 4.39835 4.46031 4.46024C4.12691 4.52213 3.78132 4.49037 3.46726 4.36897C3.1532 4.24757 2.88477 4.04199 2.69591 3.77822C2.50705 3.51446 2.40625 3.20435 2.40625 2.88712C2.40625 2.46173 2.58733 2.05376 2.90966 1.75296C3.23199 1.45216 3.66916 1.28318 4.125 1.28318ZM4.125 0.641602C3.64909 0.641602 3.18387 0.773299 2.78816 1.02004C2.39245 1.26678 2.08404 1.61748 1.90192 2.0278C1.71979 2.43811 1.67214 2.88961 1.76499 3.3252C1.85783 3.76079 2.08701 4.1609 2.42353 4.47494C2.76005 4.78898 3.1888 5.00285 3.65557 5.08949C4.12233 5.17614 4.60615 5.13167 5.04583 4.96171C5.48552 4.79175 5.86132 4.50394 6.12573 4.13466C6.39013 3.76539 6.53125 3.33124 6.53125 2.88712C6.53125 2.29157 6.27774 1.72042 5.82648 1.2993C5.37522 0.878182 4.76318 0.641602 4.125 0.641602Z"
        fill="white"
      />
      <path
        d="M7.5625 9.62387H6.875V8.01993C6.875 7.59454 6.69392 7.18657 6.37159 6.88577C6.04926 6.58498 5.61209 6.41599 5.15625 6.41599H3.09375C2.63791 6.41599 2.20074 6.58498 1.87841 6.88577C1.55608 7.18657 1.375 7.59454 1.375 8.01993V9.62387H0.6875V8.01993C0.6875 7.42438 0.941015 6.85323 1.39227 6.43211C1.84353 6.01099 2.45557 5.77441 3.09375 5.77441H5.15625C5.79443 5.77441 6.40647 6.01099 6.85773 6.43211C7.30899 6.85323 7.5625 7.42438 7.5625 8.01993V9.62387Z"
        fill="white"
      />
    </svg>
  );
};

const VerifiedTick = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 26 27"
      fill="none"
    >
      <circle cx="13.3557" cy="13.408" r="12.6174" fill="#5213AA" />
      <path
        d="M6.14551 13.408L10.6517 17.9142L20.5654 9.80298"
        stroke="white"
      />
    </svg>
  );
};
const Hamburger = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 17"
      fill="none"
    >
      <rect x="0.5" y="0.5" width="24" height="16" stroke="white" />
      <rect x="3" y="4" width="19" height="2" fill="#D9D9D9" />
      <rect x="3" y="8" width="19" height="2" fill="#D9D9D9" />
      <rect x="3" y="12" width="19" height="2" fill="#D9D9D9" />
    </svg>
  );
};
const AddUser = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 20"
      fill="none"
    >
      <path
        d="M24.375 8.125H21.875V5.625C21.875 5.28125 21.5938 5 21.25 5H20C19.6562 5 19.375 5.28125 19.375 5.625V8.125H16.875C16.5312 8.125 16.25 8.40625 16.25 8.75V10C16.25 10.3438 16.5312 10.625 16.875 10.625H19.375V13.125C19.375 13.4688 19.6562 13.75 20 13.75H21.25C21.5938 13.75 21.875 13.4688 21.875 13.125V10.625H24.375C24.7188 10.625 25 10.3438 25 10V8.75C25 8.40625 24.7188 8.125 24.375 8.125ZM8.75 10C11.5117 10 13.75 7.76172 13.75 5C13.75 2.23828 11.5117 0 8.75 0C5.98828 0 3.75 2.23828 3.75 5C3.75 7.76172 5.98828 10 8.75 10ZM12.25 11.25H11.5977C10.7305 11.6484 9.76562 11.875 8.75 11.875C7.73438 11.875 6.77344 11.6484 5.90234 11.25H5.25C2.35156 11.25 0 13.6016 0 16.5V18.125C0 19.1602 0.839844 20 1.875 20H15.625C16.6602 20 17.5 19.1602 17.5 18.125V16.5C17.5 13.6016 15.1484 11.25 12.25 11.25Z"
        fill="white"
      />
    </svg>
  );
};

const Reaction = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      viewBox="0 0 31 31"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.3567 0H22.1423V6.64326H15.4991V8.85768H22.1423V15.5009H24.3567V8.85768H31V6.64326H24.3567V0ZM11.0702 6.69198C8.7655 6.90273 6.56854 7.76578 4.73661 9.18005C2.90469 10.5943 1.51363 12.5013 0.726354 14.6776C-0.0609251 16.8539 -0.211837 19.2095 0.291292 21.4684C0.794421 23.7274 1.93076 25.7963 3.56724 27.4328C5.20372 29.0692 7.27259 30.2056 9.53157 30.7087C11.7905 31.2118 14.1461 31.0609 16.3224 30.2736C18.4987 29.4864 20.4057 28.0953 21.82 26.2634C23.2342 24.4315 24.0973 22.2345 24.308 19.9298H22.0825C21.8736 21.7944 21.1426 23.5622 19.9734 25.0297C18.8043 26.4972 17.2446 27.6048 15.4738 28.2251C13.703 28.8453 11.7931 28.953 9.96374 28.5358C8.13443 28.1186 6.46007 27.1934 5.13334 25.8667C3.8066 24.5399 2.8814 22.8656 2.46418 21.0363C2.04696 19.2069 2.15468 17.297 2.77494 15.5262C3.39521 13.7554 4.50282 12.1957 5.97032 11.0266C7.43782 9.85742 9.20559 9.12635 11.0702 8.91747V6.69198ZM7.74859 17.7154C8.33589 17.7154 8.89913 17.4821 9.31442 17.0668C9.7297 16.6515 9.96301 16.0882 9.96301 15.5009C9.96301 14.9136 9.7297 14.3504 9.31442 13.9351C8.89913 13.5198 8.33589 13.2865 7.74859 13.2865C7.16128 13.2865 6.59804 13.5198 6.18275 13.9351C5.76747 14.3504 5.53417 14.9136 5.53417 15.5009C5.53417 16.0882 5.76747 16.6515 6.18275 17.0668C6.59804 17.4821 7.16128 17.7154 7.74859 17.7154ZM12.1774 23.2514C13.7541 23.2514 15.178 22.5915 16.1855 21.533L17.7511 23.1008C17.0291 23.8499 16.1633 24.4455 15.2055 24.8519C14.2478 25.2583 13.2178 25.4671 12.1774 25.4658C11.1164 25.4671 10.0666 25.25 9.09317 24.8278C8.11978 24.4057 7.24372 23.7877 6.51958 23.0123L8.08739 21.4444C8.6054 22.0142 9.23689 22.4694 9.94128 22.7806C10.6457 23.0918 11.4074 23.2521 12.1774 23.2514ZM16.6063 17.7154C17.1936 17.7154 17.7568 17.4821 18.1721 17.0668C18.5874 16.6515 18.8207 16.0882 18.8207 15.5009C18.8207 14.9136 18.5874 14.3504 18.1721 13.9351C17.7568 13.5198 17.1936 13.2865 16.6063 13.2865C16.019 13.2865 15.4557 13.5198 15.0404 13.9351C14.6252 14.3504 14.3918 14.9136 14.3918 15.5009C14.3918 16.0882 14.6252 16.6515 15.0404 17.0668C15.4557 17.4821 16.019 17.7154 16.6063 17.7154Z"
        fill="white"
        fill-opacity="0.3"
      />
    </svg>
  );
};
const ThumbsUp = ({ width, height }) => {
  const { data, updateData } = useContext(MyContext);
  const [isDarkMode, setIsDarkMode] = useState(data.isDarkMode);
  useEffect(() => {
    setIsDarkMode(data?.isDarkMode);
  }, [data?.isDarkMode]);
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.09058 15.1457L7.57695 17.3079C7.89777 17.6682 8.61962 17.8484 9.10085 17.8484H12.1486C13.1111 17.8484 14.1538 17.0376 14.3944 15.9565L16.3193 9.38008C16.7203 8.11884 15.9985 7.03775 14.7954 7.03775H11.5872C11.106 7.03775 10.705 6.58731 10.7852 5.95669L11.1862 3.07385C11.3466 2.26306 10.8654 1.36217 10.1435 1.09191C9.50187 0.821642 8.69982 1.182 8.379 1.72253L5.09058 7.21792"
        stroke={isDarkMode ? "white" : "black"}
        stroke-miterlimit="10"
      />
      <path
        d="M1 15.1458V6.31715C1 5.05591 1.48123 4.60547 2.6041 4.60547H3.40615C4.52903 4.60547 5.01026 5.05591 5.01026 6.31715V15.1458C5.01026 16.407 4.52903 16.8575 3.40615 16.8575H2.6041C1.48123 16.8575 1 16.407 1 15.1458Z"
        stroke={isDarkMode ? "white" : "black"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const ThumbsDown = ({ width, height }) => {
  const { data, updateData } = useContext(MyContext);
  const [isDarkMode, setIsDarkMode] = useState(data.isDarkMode);
  useEffect(() => {
    setIsDarkMode(data?.isDarkMode);
  }, [data?.isDarkMode]);
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9094 3.70265L9.42305 1.54053C9.10223 1.18017 8.38038 0.999994 7.89915 0.999994L4.85136 0.999994C3.8889 0.999994 2.84623 1.81079 2.60562 2.89185L0.680693 9.46831C0.279667 10.7296 1.00151 11.8106 2.20459 11.8106L5.41279 11.8106C5.89402 11.8106 6.29505 12.2611 6.21484 12.8917L5.81382 15.7745C5.65341 16.5853 6.13464 17.4862 6.85649 17.7565C7.49813 18.0267 8.30018 17.6664 8.621 17.1259L11.9094 11.6305"
        stroke={isDarkMode ? "white" : "black"}
        stroke-miterlimit="10"
      />
      <path
        d="M16 3.70258L16 12.5312C16 13.7925 15.5188 14.2429 14.3959 14.2429L13.5938 14.2429C12.471 14.2429 11.9897 13.7925 11.9897 12.5312L11.9897 3.70258C11.9897 2.44135 12.471 1.9909 13.5938 1.9909L14.3959 1.9909C15.5188 1.9909 16 2.44135 16 3.70258Z"
        stroke={isDarkMode ? "white" : "black"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const Comments = ({ width, height }) => {
  const { data, updateData } = useContext(MyContext);
  const [isDarkMode, setIsDarkMode] = useState(data.isDarkMode);
  useEffect(() => {
    setIsDarkMode(data?.isDarkMode);
  }, [data?.isDarkMode]);
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.571289 1V12.1429H6.14272L7.99986 14L9.857 12.1429H15.4284V1H0.571289Z"
        stroke={isDarkMode ? "white" : "black"}
        stroke-miterlimit="10"
      />
      <path
        d="M3.6665 4.09521H12.3332"
        stroke={isDarkMode ? "white" : "black"}
        stroke-miterlimit="10"
      />
      <path
        d="M3.6665 6.57153H12.3332"
        stroke={isDarkMode ? "white" : "black"}
        stroke-miterlimit="10"
      />
      <path
        d="M3.6665 9.04761H9.85698"
        stroke={isDarkMode ? "white" : "black"}
        stroke-miterlimit="10"
      />
    </svg>
  );
};
const Share = ({ width, height }) => {
  const { data, updateData } = useContext(MyContext);
  const [isDarkMode, setIsDarkMode] = useState(data.isDarkMode);
  useEffect(() => {
    setIsDarkMode(data?.isDarkMode);
  }, [data?.isDarkMode]);
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.8383 19.0064H1.45127e-05V8.68485C-0.0016711 7.97976 0.1435 7.28401 0.423927 6.65319C0.804667 5.70946 1.41926 4.90881 2.19427 4.3469C2.96928 3.785 3.87193 3.48561 4.79437 3.48451H9.60836V0H11.1017L16.8729 6.48237L11.0812 12.9877H9.60836V9.5032H6.4775C5.82262 9.50499 5.18611 9.74658 4.66449 10.1914C4.14288 10.6361 3.76461 11.2598 3.58704 11.9678L1.8383 19.0064ZM4.79437 4.7516C4.08731 4.75245 3.39549 4.98245 2.80193 5.414C2.20837 5.84556 1.73828 6.46032 1.44809 7.18454L1.43779 7.20885C1.23286 7.66673 1.12676 8.17237 1.1281 8.68485V17.151L2.50048 11.6273C2.74478 10.6531 3.26524 9.79492 3.98294 9.18294C4.70064 8.57097 5.57643 8.23855 6.4775 8.2361H10.7364V11.583L15.2775 6.48237L10.7364 1.38169V4.7516H4.79437Z"
        fill={isDarkMode ? "white" : "black"}
      />
    </svg>
  );
};

export {
  CalenderSvg,
  UserAdminSvg,
  VerifiedTick,
  Hamburger,
  AddUser,
  Reaction,
  ThumbsUp,
  ThumbsDown,
  Comments,
  Share,
};
