import { Outlet } from "react-router-dom";
import { Navbar, Header, Footer } from "../components";

export default function Main() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Outlet />
      <Footer />
    </>
  );
}
