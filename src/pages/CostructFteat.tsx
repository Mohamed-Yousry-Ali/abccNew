import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import imgSrc from "./../../public/images/new revisions 77.png";
import imgSrc2 from "./../../public/images/bg-services.jpg";
import "./../styles/CompanyServices.css";
import { useTranslation } from "react-i18next";
import { capitalizeEachWord } from "../utility";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const CostructFteat = () => {
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
          position="relative"
          backgroundImage={`url(${imgSrc2})`}
          backgroundSize="cover"
          backgroundPosition="center"
          height={{ base: "2400px", md: "850px", lg: "850px" }}
        >
          <Box
            position="absolute"
            top={0}
            left={0}
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
                  {t("construct")}
                </Text>
              </Box>
              <Box>
                <Box className="item" w={"90%"}>
                  <Box as={"div"} className="number">
                    1
                  </Box>
                  <Box as={"div"} className="servname">
                    {capitalizeEachWord(t("Contractors"))}
                  </Box>
                  <Box as={"div"} className="content">
                    {capitalizeEachWord(t("Contractors-short"))}
                    <Button
                      as={Link}
                      to={"/contractors"}
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
                    {capitalizeEachWord(t("finishes"))}
                  </Box>
                  <Box as={"div"} className="content">
                    {capitalizeEachWord(t("finishes-short"))}
                    <Button
                      as={Link}
                      to={"/finishes"}
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
                    {capitalizeEachWord(t("Sports-equipment"))}
                  </Box>
                  <Box as={"div"} className="content">
                    {capitalizeEachWord(t("Sports-equipment-short"))}
                    <Button
                      as={Link}
                      to={"/sports"}
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
                    {capitalizeEachWord(t("maintenance"))}
                  </Box>
                  <Box as={"div"} className="content">
                    {capitalizeEachWord(t("maintenance-info"))}
                    <Button
                      as={Link}
                      to={"/maintenance"}
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

export default CostructFteat;
