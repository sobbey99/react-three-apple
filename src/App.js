import { GlobalStyle } from "./styles/GlobalStyle";
import Quote from "./sections/Quote";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import ProcessorSection from "./sections/ProcessorSection";

function App() {
  return (
    <>
      <GlobalStyle />
      <Quote />
      <HeroSection />
      <DesignSection />
      <DisplaySection />
      <ProcessorSection />
      {/* <PhoneModel /> */}
    </>
  );
}

export default App;
