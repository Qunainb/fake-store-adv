import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
      <Sidebar />
      <Footer />
    </>
  );
}
