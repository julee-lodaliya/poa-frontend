import React from "react";
import Header from "../../layout/header";
import Sidebar from "../../layout/sidebar";
import { FontProvider } from "../../context/FontContext";
import RecordsTableHeader from "./recordsTableHeader";
const Dashboard = () => {
  return (
    <section className="login_container_new">
    <FontProvider>
     <Header />
     
     <div className="d-flex ">
     <Sidebar />
     <RecordsTableHeader/>
     </div>
     </FontProvider>
    </section>
  );
};

export default Dashboard;
