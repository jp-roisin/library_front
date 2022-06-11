import axios from "axios";
import { useState } from "react";
import { Authentification } from "./components/auth/Authentification";
import { DefaultLayout } from "./components/layout/DefaultLayout";
import { UnlogedLayout } from "./components/layout/UnlogedLayout";
import { ListBooks } from "./components/library/ListBooks";

const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
};

const App = () => {
  const [loginMode, setLoginMode] = useState(false);

  const logoutHandler = () => {
    localStorage.removeItem("token")
    setLoginMode(true);
 }

  const loginHandler = (data) => {
    const formatedData = JSON.parse(JSON.stringify(data));
    axios
      .post(`http://localhost:8000/api/login_check`, formatedData, { headers })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token)
          setLoginMode(false);
        } else {
          console.log("Nope login check")
        }
      });
  };

  const registerHandler = (data) => {
    const formatedData = JSON.parse(JSON.stringify(data));
    axios
      .post(`http://localhost:8000/api/register`, formatedData, { headers })
      .then((res) => {
        if (res.data.users) {
          setLoginMode(false);
        } else {
          console.log("NOPE");
        }
      });
  };

  return (
    <>
      {!loginMode && (
        <DefaultLayout logout={logoutHandler}>
          <ListBooks />
        </DefaultLayout>
      )}
      {loginMode && (
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
