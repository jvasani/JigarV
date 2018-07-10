import React, { Component } from "react";
import LandingPage from "@pages/LandingPage";
import AboutPage from "@pages/AboutPage";
import PortfolioPage from "@pages/PortfolioPage";
import ParallaxBackground from "@components / ParallaxBackground ";

import ScrollTop from "@components/ScrollTop";
import ThemeSwitcher from "@components/ThemeSwitcher";
import Browser from "@components / Browser ";
import Footer from "@components/Footer";
import ContactMePage from "@pages/ContactMePage";

class App extends Component {
  render() {
    return (
     
      <div className="dev-landing-page" id="root">
        <ThemeSwitcher>
          <Browser except firefox>
            <ParallaxBackground />
          </Browser>
          <LandingPage />
          <AboutPage />
          <PortfolioPage />
          <ContactMePage />
          <ScrollTop />
          <Footer />
        </ThemeSwitcher>
      </div>
    );
  }

  newMethod() {
    return div.div.id;
  }
}

export default App;
