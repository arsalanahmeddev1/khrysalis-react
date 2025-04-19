// import React, { useState } from "react";
// import MyContext from "./context";
// import { Provider } from "react-redux";
// import { store } from "../redux/store";

// // ALERT
// import { positions, transitions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

// const options = {
//   timeout: 5000,
//   position: positions.BOTTOM_CENTER,
//   transition: transitions.SCALE,
// };

// const MyProvider = ({ children }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [data, setData] = useState({
//     isDarkMode: true,
//   });

//   const updateData = (newData) => {
//     setData(newData);
//   };

//   return (
//     <Provider store={store}>
//       <AlertProvider template={AlertTemplate} {...options}>
//         <MyContext.Provider value={{ data, updateData, searchQuery, setSearchQuery}}>
//           {children}
//         </MyContext.Provider>
//       </AlertProvider>
//     </Provider>
//   );
// };

// export default MyProvider;
