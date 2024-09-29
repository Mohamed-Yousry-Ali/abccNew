import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import imgSrc from "./../../public/images/new revisions 77.png";
import imgSrc2 from "./../../public/images/bg-services.jpg";
import "./../styles/CompanyServices.css";
import { useTranslation } from "react-i18next";
import { capitalizeEachWord } from "../utility";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const LogisticFeat = () => {
  const { t } = useTranslation();
  return (
    <>
      <Nav bg={"#393939"} />

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(1, 1fr)" }} // Responsive columns
        gap={4}
        templateRows={{ base: "auto auto", md: "auto" }} // Responsive rows
      >
        <Box
          backgroundImage={`url(${imgSrc2})`}
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Box
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.5)" // Semi-transparent black overlay
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={"40px"}
          >
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // Responsive columns
              gap={10}
              my={30}
              templateRows={{ base: "auto auto", md: "auto" }} // Responsive rows
            >
              <Box className="box-serv" w={"96%"}>
                <Image src={imgSrc} />
                <Text
                  as={"h2"}
                  className="comp"
                  fontSize={80}
                  lineHeight={"1.2"}
                >
                  <span className="serv" style={{ fontSize: 60 }}>
                    {t("OurFound")}
                  </span>
                  {t("theLogistics")}
                </Text>
              </Box>
              <Box>
                <Box className="item" w={"90%"}>
                  <Box as={"div"} className="number">
                    1
                  </Box>
                  <Box as={"div"} className="servname">
                    {capitalizeEachWord(t("clearance-com"))}
                  </Box>
                  <Box as={"div"} className="content">
                    {capitalizeEachWord(t("clearance-com-short"))}
                    <Button
                      as={Link}
                      to={"/clearance"}
                      variant="outline"
                      mx={"3px"}
                      color={"#002960"}
                    >
                      {capitalizeEachWord(t("more"))}
                    </Button>
                  </Box>
                </Box>
                <Box className="item" w={"90%"}>
                  <Box as={"div"} className="number">
                    2
                  </Box>
                  <Box as={"div"} className="servname">
                    {capitalizeEachWord(t("Road-Transport"))}
                  </Box>
                  <Box as={"div"} className="content">
                    {capitalizeEachWord(t("Road-Transport-short"))}
                    <Button
                      as={Link}
                      to={"/Road-Transport"}
                      variant="outline"
                      mx={"3px"}
                      color={"#002960"}
                    >
                      {capitalizeEachWord(t("more"))}
                    </Button>
                  </Box>
                </Box>
                <Box className="item" w={"90%"}>
                  <Box as={"div"} className="number">
                    3
                  </Box>
                  <Box as={"div"} className="servname">
                    {capitalizeEachWord(t("Sea-Freight"))}
                  </Box>
                  <Box as={"div"} className="content">
                    {capitalizeEachWord(t("Sea-Freight-short"))}
                    <Button
                      as={Link}
                      to={"/Sea-Freight"}
                      variant="outline"
                      mx={"3px"}
                      color={"#002960"}
                    >
                      {capitalizeEachWord(t("more"))}
                    </Button>
                  </Box>
                </Box>
                <Box className="item" w={"90%"}>
                  <Box as={"div"} className="number">
                    4
                  </Box>
                  <Box as={"div"} className="servname">
                    {capitalizeEachWord(t("Air-Freight"))}
                  </Box>
                  <Box as={"div"} className="content">
                    {capitalizeEachWord(t("Air-Freight-short"))}
                    <Button
                      as={Link}
                      to={"Air-Freight"}
                      variant="outline"
                      mx={"3px"}
                      color={"#002960"}
                    >
                      {capitalizeEachWord(t("more"))}
                    </Button>
                  </Box>
                </Box>
                <Box className="item" w={"90%"}>
                  <Box as={"div"} className="number">
                    5
                  </Box>
                  <Box as={"div"} className="servname">
                    {capitalizeEachWord(t("Logistics-Services"))}
                  </Box>
                  <Box as={"div"} className="content">
                    {capitalizeEachWord(t("Logistics-Services-short"))}
                    <Button
                      as={Link}
                      to={"/Logistics-Services"}
                      variant="outline"
                      mx={"3px"}
                      color={"#002960"}
                    >
                      {capitalizeEachWord(t("more"))}
                    </Button>
                  </Box>
                </Box>
                <Box className="item" w={"90%"}>
                  <Box as={"div"} className="number">
                    6
                  </Box>
                  <Box as={"div"} className="servname">
                    {capitalizeEachWord(t("Customs-Business"))}
                  </Box>
                  <Box as={"div"} className="content">
                    {capitalizeEachWord(t("Customs-Business-short"))}
                    <Button
                      as={Link}
                      to={"/Customs-Business"}
                      variant="outline"
                      mx={"3px"}
                      color={"#002960"}
                    >
                      {capitalizeEachWord(t("more"))}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default LogisticFeat;
