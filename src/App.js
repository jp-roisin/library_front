import axios from "axios";
import { useState } from "react";
import { Authentification } from "./components/auth/Authentification";
import { DefaultLayout } from "./components/layout/DefaultLayout";
import { UnlogedLayout } from "./components/layout/UnlogedLayout";
import { ListBooks } from "./components/library/ListBooks";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const App = () => {
  const [authMode, setAuthMode] = useState(false);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setAuthMode(true);
  };

  const loginHandler = (data) => {
    const formatedData = JSON.parse(JSON.stringify(data));
    axios
      .post(`http://localhost:8000/api/login_check`, formatedData, { headers })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          setAuthMode(false);
        } else {
          console.log("Nope login check");
        }
      });
  };

  const registerHandler = (data) => {
    const formatedData = JSON.parse(JSON.stringify(data));
    axios
      .post(`http://localhost:8000/api/register`, formatedData, { headers })
      .then((res) => {
        if (res.data.users) {
          setAuthMode(false);
        } else {
          console.log("NOPE");
        }
      });
  };

  return (
    <>
      {!authMode && (
        <DefaultLayout logout={logoutHandler}>
          <ListBooks />
        </DefaultLayout>
      )}
      {authMode && (
        <UnlogedLayout>
          <Authentification
            onLogin={loginHandler}
            onRegister={registerHandler}
          />
        </UnlogedLayout>
      )}
    </>
  );
};

export default App;
