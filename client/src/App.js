import React from "react";
import Routes from "./routes";
import { validateUser } from "./requests/userValidateRequest";
import "./App.css";

function App() {
  const { user, isLoading, isError } = validateUser();

  return <Routes />;
}

export default App;
