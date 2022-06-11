import { Button, TextField } from "@mui/material";
import { useState } from "react";

const initialInputs = {
  password: "",
  last_name: "",
  first_name: "",
  email: "",
}

export const Register = ({ onRegister, children }) => {
  const [inputs, setInputs] = useState(initialInputs)
  return (
    <>
      <div className="bg-primary w-full mb-4 py-4">
        <h2 className="text-center text-white text-4xl">Register</h2>
      </div>
      <form className="p-8" >
        <div className="flex flex-col">
          <TextField
            id="lastName"
            fullwidth
            name="lastName"
            variant="standard"
            placeholder="Nom"
            margin="normal"
            onChange={(element) => setInputs({...inputs, last_name: element.target.value })}
          />
          <TextField
            id="firstName"
            fullwidth
            name="firstName"
            variant="standard"
            placeholder="Prénom"
            margin="normal"
            onChange={(element) => setInputs({...inputs, first_name: element.target.value })}
          />
          <TextField
            id="email"
            fullwidth
            name="email"
            variant="standard"
            placeholder="Email"
            margin="normal"
            onChange={(element) => setInputs({...inputs, email: element.target.value })}
          />
          <TextField
            id="pw"
            name="pw"
            fullwidth
            variant="standard"
            placeholder="Password"
            type="password"
            margin="normal"
            onChange={(element) => setInputs({...inputs, password: element.target.value })}
          />
        </div>
        <div className="mt-8 flex justify-between">
        {children}
          <Button variant="contained" onClick={() => onRegister(inputs)}>
            Login
          </Button>
        </div>
      </form>
    </>
  );
};
