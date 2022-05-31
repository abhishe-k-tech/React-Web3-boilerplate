import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import LayoutWrapper from "./components/auth";
import Spinner from "./components/spinner";
import { guestRoutes, userRoutes } from "./routes/mainRoutes/mainRoutes";
function App() {
  // const auth = JSON.parse(localStorage.getItem("auth"));
  // const role = userData.designation for role base login

  const auth = false;
  let routes = [];

  switch (auth) {
    case true:
      routes = userRoutes;
      break;
    default:
      routes = guestRoutes;
  }
  let mainContent = routes.map((route) =>
    route.component ? (
      <Route
        key={route.name}
        path={route.path}
        exact={route.exact}
        name={route.name}
        element={<route.component />}
      />
    ) : (
      route.redirectRoute && (
        <Route
          path={route.path}
          key={route.name}
          element={<Navigate to="/" />}
        />
      )
    )
  );

  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutWrapper isAuthenticated={auth} />}>
            {mainContent}
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
