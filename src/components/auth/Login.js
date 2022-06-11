import { Button, TextField } from "@mui/material";
import { useState } from "react";

const initialInput = {
  username: "",
  password: "",
}

export const Login = ({ onlogin, children }) => {
  const [inputs, setInputs] = useState(initialInput)
  return (
    <>
      <div className="bg-primary w-full mb-4 py-4">
        <h2 className="text-center text-white text-4xl">Log in</h2>
      </div>
      <form className="p-8">
        <div className="flex flex-col">
          <TextField
            id="username"
            fullwidth
            name="username"
            variant="standard"
            placeholder="Email"
            margin="normal"
            onChange={(element) => setInputs({...inputs, username: element.target.value })}
          />
          <TextField
            id="pw"
            name="pw"
            fullwidth
            variant="standard"
            type="password"
            placeholder="Password"
            margin="normal"
            onChange={(element) => setInputs({...inputs, password: element.target.value })}
          />
        </div>
        <div className="mt-8 flex justify-between">
          {children}
          <Button variant="contained" onClick={() => onlogin(inputs)}>
            Login
          </Button>
        </div>
      </form>
    </>
  );
};
