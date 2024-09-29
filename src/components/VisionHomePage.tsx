import { Box, Grid, Image } from "@chakra-ui/react";
import "./../styles/VisionHomePage.css";
import { useTranslation } from "react-i18next";
import imgSrc from "./../../public/images/Saudi_Vision_2030_logo.svg.png";
import { capitalizeEachWord } from "../utility";

const VisionHomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* <Box
        as={"h3"}
        fontSize={"35px"}
        fontWeight={"bold"}
        color={"#fff"}
        textAlign={"center"}
        className="vis"
        width={"fit-content"}
      >
        {t("Vision")}
      </Box> */}
      <Box alignItems={"center"} textAlign={"center"}>
        <Image src={imgSrc} width={"20%"} margin={"auto"} />
      </Box>
      <Box
        as={"section"}
        className="visionHome"
        paddingTop={{ base: "130px", md: "100px", lg: "100px" }}
        width={"100%"}
      >
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} // Responsive columns
          gap={10}
          my={30}
          templateRows={{ base: "auto auto", md: "auto" }} // Responsive rows
          marginBottom={{ base: "100%", sm: "24%", md: "8%", lg: "8%" }}
        >
          <Box className="item-v" width={"100%"}>
            <Box as={"div"} className="number-v">
              1
            </Box>
            <Box as={"div"} className="servname-v">
              {capitalizeEachWord(t("vibrant-community"))}
            </Box>
            <Box as={"div"} className="content-v">
              {capitalizeEachWord(t("vibrant-community-short"))}
            </Box>
          </Box>
          <Box className="item-v" width={"fit-content"}>
            <Box as={"div"} className="number-v">
              2
            </Box>
            <Box as={"div"} className="servname-v">
              {capitalizeEachWord(t("thriving-economy"))}
            </Box>
            <Box as={"div"} className="content-v">
              {capitalizeEachWord(t("thriving-economy-short"))}
            </Box>
          </Box>
          <Box className="item-v" width={"100%"}>
            <Box as={"div"} className="number-v">
              3
            </Box>
            <Box as={"div"} className="servname-v">
              {capitalizeEachWord(t("Ambitious-homeland"))}
            </Box>
            <Box as={"div"} className="content-v">
              {capitalizeEachWord(t("Ambitious-homeland-short"))}
            </Box>
          </Box>
        </Grid>
        {/* <Box style={{ direction: "rtl", position: "absolute" }} className="nt">
          <Button style={{ position: "relative" }}>{t("more")}</Button>
        </Box> */}
      </Box>
    </>
  );
};

export default VisionHomePage;
