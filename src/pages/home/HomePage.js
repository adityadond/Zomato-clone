import React, { useState } from "react";
import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import TabOptions from "../../components/common/tabOption";
import Delivery from "../../components/Delivery/Delivery";
import DinningOut from "../../components/DinningOut/DinningOut";
import NightLife from "../../components/NightLife/NightLife";

function HomePage() {
const [activeTab,setActiveTab]=useState("Delivery")

  const getCorrectScreen=(tab)=>{
    switch(tab){
      case "Delivery":
        return<Delivery/>
        case "Dining Out":
          return<DinningOut/>
          case "NightLife":
            return<NightLife/>
            default:
              return<Delivery/>
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
