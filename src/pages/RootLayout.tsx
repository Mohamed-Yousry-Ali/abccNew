import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";
import WhatsAppButton from "../components/WhatsAppButton";

const RootLayout = () => {
  return (
    <>
      <Box mb={"50px"}>
        <Outlet />
      </Box>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default RootLayout;
