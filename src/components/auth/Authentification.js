import { Button } from "@mui/material";
import { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";

export const Authentification = ({ onLogin, onRegister }) => {
  const [registerMode, setRegisterMode] = useState(false)
  return (
    <>
    {registerMode && 
      <Login onlogin={onLogin}>
        <Button onClick={() => setRegisterMode(prev => !prev)} variant="text">M'enregistrer</Button>
      </Login>
    }
    {!registerMode &&
      <Register onRegister={onRegister}>
        <Button onClick={() => setRegisterMode(prev => !prev)} variant="text">J'ai déjà un compte</Button>
      </Register>
    }
    </>
  );
};
