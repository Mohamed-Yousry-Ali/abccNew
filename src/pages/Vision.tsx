import { Box, Container, Grid, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import v1 from "./../../public/images/v1.jpeg";
import v2 from "./../../public/images/v2.png";
import v3 from "./../../public/images/v3.jpeg";
import { capitalizeEachWord } from "../utility";
import Nav from "../components/Nav";
import "./../../src/styles/VisionHomePage.css";

function Vision() {
  const { t } = useTranslation();

  return (
    <>
      <Nav bg={"#393939"} />
      <Container maxW="8xl" mt={"50px"}>
        <Box textAlign={"center"} w={"20%"} h={"20%"} m={"auto"}>
          <Text
            as={"h2"}
            color={"#034583"}
            fontSize={50}
            fontWeight={"bold"}
            marginBlockStart={15}
            marginBlockEnd={15}
            textAlign={"center"}
          >
            {capitalizeEachWord(t("Vision"))}
          </Text>
        </Box>
        <Box
          as={"section"}
          className="visionHome"
          paddingTop={{ base: "130px", md: "100px", lg: "100px" }}
          width={"100%"}
        >
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // Responsive columns
            gap={10}
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
                {capitalizeEachWord(t("visionsrone"))}
              </Box>
            </Box>
            <Box position="relative">
              <Image src={v1} w="100%" h="95%" borderRadius={"2%"} />
            </Box>
            <Box className="item-v" width={"fit-content"}>
              <Box as={"div"} className="number-v">
                2
              </Box>
              <Box as={"div"} className="servname-v">
                {capitalizeEachWord(t("thriving-economy"))}
              </Box>
              <Box as={"div"} className="content-v">
                {capitalizeEachWord(t("visionsrtwo"))}
              </Box>
            </Box>
            <Box position="relative">
              <Image src={v2} w="100%" h="95%" borderRadius={"2%"} />
            </Box>
            <Box className="item-v" width={"100%"}>
              <Box as={"div"} className="number-v">
                3
              </Box>
              <Box as={"div"} className="servname-v">
                {capitalizeEachWord(t("Ambitious-homeland"))}
              </Box>
              <Box as={"div"} className="content-v">
                {capitalizeEachWord(t("visionsrthree"))}
              </Box>
            </Box>
            <Box position="relative">
              <Image src={v3} w="100%" h="60%" borderRadius={"2%"} />
            </Box>
          </Grid>
          {/* <Box style={{ direction: "rtl", position: "absolute" }} className="nt">
          <Button style={{ position: "relative" }}>{t("more")}</Button>
        </Box> */}
        </Box>
      </Container>
    </>
  );
}

export default Vision;
