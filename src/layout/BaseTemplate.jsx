import { Outlet } from "react-router-dom";
import Header from "@layout/Header";
import AccountProvider from "@components/providers/AccountProvider";
import Footer from "@layout/Footer";

export default function BaseTemplate() {
  return (
    <AccountProvider>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />

        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Outlet />
        </main>

        <Footer/>
      </div>
    </AccountProvider>
  );
}