import { Button } from "@mui/material";
import { useState } from "react";
import { Modal } from "../../ui/Modal";

export const Header = ({ logout }) => {
  const [scanModalIsOpen, setScanModalIsOpen] = useState(false);

  return (
    <>
      <header className="py-6 flex justify-between bg-primary text-white">
        <h1 className="text-3xl ml-6">My Library</h1>
        <nav className="w-[400px] mr-6">
          <ul className="flex justify-around">
            <li>
              <Button
                variant="text"
                color="inherit"
                onClick={() => setScanModalIsOpen(true)}
              >
                Scan isbn
              </Button>
            </li>
            <li>
              <Button variant="contained" color="error" onClick={logout}>
                Logout
              </Button>
            </li>
          </ul>
        </nav>
      </header>
      <>
        {scanModalIsOpen && (
          <Modal onCloseModal={() => setScanModalIsOpen(false)}>
          <div className="m-6">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel esse
              nulla possimus sed molestias omnis quos excepturi, totam
              aspernatur officiis vitae. Modi cum atque impedit delectus
              corporis praesentium tempore tenetur?
            </p>
          </div>
          </Modal>
        )}
      </>
    </>
  );
};
