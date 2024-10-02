import React from "react";
import Header from "./component/layout/Header";
import ContactUs from "./pages/ContactUs";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Category from "./pages/Category";
import DetailProdect from "./pages/DetailProdect";
import FAQs from "./pages/FAQs";

const App: React.FC = () => {
  return (

    <div className="overflow-hidden">
      <Header/>
      <main className="bg-primery">
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/category" element={<Category />} />
            <Route path="/Product/:id" element={<DetailProdect />} />
            <Route path="/FAQ`s" element={<FAQs />} />
            <Route path="/contactUs" element={<ContactUs />} />
         </Routes>
      </main>
    </div>  

  );
};

export default App;
