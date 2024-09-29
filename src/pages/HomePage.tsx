import { Box } from "@chakra-ui/react";
import ImageSlider from "../UI/ImageSlider";
import { SlideData } from "../SlideData";
import AboutCom from "../components/AboutCom";
import MsgCompany from "../components/MsgCompany";
import CompanyServices from "../components/CompanyServices";
import VisionHomePage from "../components/VisionHomePage";
import MapCompany from "../components/MapCompany";
import OurFeature from "../components/OurFeature";
import { useState, useEffect } from "react";
import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      <IconButton
        aria-label="Scroll to top"
        icon={<ArrowUpIcon />}
        onClick={scrollToTop}
        position="fixed"
        bottom="40px"
        right="40px"
        size="lg"
        colorScheme={useColorModeValue("blue", "teal")}
        visibility={isVisible ? "visible" : "hidden"}
        opacity={isVisible ? 1 : 0}
        transition="opacity 0.4s"
        zIndex={1000}
      />
      <Box w="100%" color="white" style={{ direction: "ltr" }}>
        <ImageSlider slides={SlideData} />
      </Box>
      <OurFeature />
      <AboutCom />

      <MsgCompany />

      <CompanyServices />
      <VisionHomePage />
      <MapCompany />
    </>
  );
};

export default HomePage;
