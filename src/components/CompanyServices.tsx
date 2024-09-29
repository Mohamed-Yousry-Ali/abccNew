import { Box, Grid, Image, Text } from "@chakra-ui/react";
import imgSrc from "./../../public/images/new revisions11.png";
import imgSrc2 from "./../../public/images/bg-services.jpg";
import "./../styles/CompanyServices.css";
import { useTranslation } from "react-i18next";
import { capitalizeEachWord } from "../utility";
const CompanyServices = () => {
  const { t } = useTranslation();
  return (
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
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} // Responsive columns
            gap={10}
            my={30}
            templateRows={{ base: "auto auto", md: "auto" }} // Responsive rows
          >
            <Box className="box-serv" w={"96%"}>
              <Image src={imgSrc} />
              <Text as={"h2"} className="comp" fontSize={65}>
                <span className="serv" style={{ fontSize: 80 }}>
                  {t("services")}
                </span>
                {t("company")}
              </Text>
            </Box>
            <Box>
              <Box
                as={"h3"}
                fontSize={"35px"}
                fontWeight={"bold"}
                color={"rgb(242, 142, 87)"}
                textAlign={"center"}
              >
                {t("Construction")}
              </Box>

              <Box className="item" w={"90%"}>
                <Box as={"div"} className="number">
                  1
                </Box>
                <Box as={"div"} className="servname">
                  {capitalizeEachWord(t("Contractors"))}
                </Box>
                <Box as={"div"} className="content">
                  {capitalizeEachWord(t("Contractors-short"))}
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
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                as={"h3"}
                fontSize={"35px"}
                fontWeight={"bold"}
                color={"rgb(242, 142, 87)"}
                textAlign={"center"}
              >
                {capitalizeEachWord(t("Logistics"))}
              </Box>

              <Box className="item" w={"90%"}>
                <Box as={"div"} className="number">
                  5
                </Box>
                <Box as={"div"} className="servname">
                  {capitalizeEachWord(t("clearance-com"))}
                </Box>
                <Box as={"div"} className="content">
                  {capitalizeEachWord(t("clearance-com-short"))}
                </Box>
              </Box>
              <Box className="item" w={"90%"}>
                <Box as={"div"} className="number">
                  6
                </Box>
                <Box as={"div"} className="servname">
                  {capitalizeEachWord(t("Transportation"))}
                </Box>
                <Box as={"div"} className="content">
                  {capitalizeEachWord(t("Transportation-info"))}
                </Box>
              </Box>
              <Box className="item" w={"90%"}>
                <Box as={"div"} className="number">
                  7
                </Box>
                <Box as={"div"} className="servname">
                  {capitalizeEachWord(t("Logistics-Services"))}
                </Box>
                <Box as={"div"} className="content">
                  {capitalizeEachWord(t("Logistics-Services-short"))}
                </Box>
              </Box>
              <Box className="item" w={"90%"}>
                <Box as={"div"} className="number">
                  8
                </Box>
                <Box as={"div"} className="servname">
                  {capitalizeEachWord(t("Customs-Business"))}
                </Box>
                <Box as={"div"} className="content">
                  {capitalizeEachWord(t("Customs-Business-short"))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default CompanyServices;
