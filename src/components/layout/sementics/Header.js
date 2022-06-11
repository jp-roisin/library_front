import { Button } from "@mui/material";

export const Header = ({ logout }) => {
  return (
    <>
      <header className="py-6 flex justify-between bg-primary text-white">
        <h1 className="text-3xl ml-6">My Library</h1>
        <nav className="w-[400px] mr-6">
          <ul className="flex justify-around">
            <li>Historique</li>
            <li>Rechercher</li>
            <li>
              <Button variant="contained" color="error" onClick={logout}>
                Logout
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
