import { Header } from "./sementics/Header";

export const DefaultLayout = ({ logout, children }) => {
  return (
    <>
      <Header logout={logout} />
      <section className="w-[80%] m-auto my-12">
        <div>{children}</div>
      </section>
    </>
  );
};
