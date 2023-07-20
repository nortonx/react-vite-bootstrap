import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return(
    <main className="container py-4 px-3 mx-auto" data-testid="main-layout">
      <Header />
        <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;