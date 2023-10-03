import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Upload from "../pages/Upload/Upload";
import App from "../App";
import Question from "../pages/Question.tsx/Question";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/question-answer",
    element: <Question />,
  },
]);

export default router;
