import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import MainPage from "./pages/MainPage";
import RepositoriesPage from "./pages/RepositoriePage";

export function AppRoutes() {
  return (
    <Router>
      <Route path="/repositories">
        <RepositoriesPage />
      </Route>
      <Route>
        <MainPage />
      </Route>
    </Router>
  );
}

// import React from "react";
// import { Route, Routes } from "react-router-dom";

// import MainPage from "./pages/MainPage";

// export function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<MainPage />} />
//     </Routes>
//   );
// }
