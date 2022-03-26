import React, { useState } from "react";
import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import TabOptions from "../../components/common/tabOption";

function HomePage() {
const [activeTab,setActiveTab]=useState("Delivery")

  const getCorrectScreen=(tab)=>{
    switch(tab){
      case "Delivery":
        return<div>Delivery</div>
        case "Dining Out":
          return<div>Dining Out</div>
          case "NightLife":
            return<div>Night Life</div>
            default:
              return<div>Delivery</div>
    }
  }
  return (
    <div>
      <Header />

      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
}


export default HomePage;
