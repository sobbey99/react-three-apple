import { GlobalStyle } from "./styles/GlobalStyle";
import Quote from "./sections/Quote";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import DesignSection from "./sections/DesignSection";

function App() {
  return (
    <>
      <GlobalStyle />
      <Quote />
      <HeroSection />
      <DesignSection />
      {/* <PhoneModel /> */}
    </>
  );
}

export default App;
