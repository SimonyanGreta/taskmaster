import { Routes, Route } from "react-router-dom";
import LoginForm from "../../pages/LogIn";
import {InboxPage} from "../../pages/Inbox";

import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route element={<PrivateRoute />}>
        <Route path="/tasks" element={<InboxPage />} />
      </Route>
    </Routes>
  );
}
