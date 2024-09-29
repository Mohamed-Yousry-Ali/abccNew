import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider, Spinner, Center } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import "./App.css";
import "./index.css";
import router from "./router";
import theme from "./theme";
import WOW from "wow.js";

function App() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Change the direction based on the selected language
    document.body.dir = t("direction");
    new WOW().init(); // Initialize WOW.js

    // Simulate a loading delay or use your actual loading logic
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [i18n.language, t]);

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="2xl" w={"100px"} />
      </Center>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
