import { Box, Container, Grid, Image, Text } from "@chakra-ui/react";
import imgabout from "./../../public/images/Untitled design (14).png";
import { useTranslation } from "react-i18next";
import { capitalizeEachWord } from "../utility";
import "./../styles/Constructions.css";
import Nav from "../components/Nav";
const ConsTruction = () => {
  const { t } = useTranslation();

  return (
    <>
      <Nav bg={"#393939"} />
      <Container maxW="8xl">
        <Text
          as={"h2"}
          color={"#034583"}
          fontSize={50}
          fontWeight={"bold"}
          marginBlockStart={15}
          marginBlockEnd={15}
          textAlign={"center"}
        >
          {t("Contractors")}
        </Text>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // Responsive columns
          gap={10}
          my={30}
          px={15}
          templateRows={{ base: "auto auto", md: "auto" }} // Responsive rows
        >
          <Box position="relative">
            <Image src={imgabout} w="100%" h="100%" borderRadius={"2%"} />
          </Box>

          <Box mx={4}>
            <Text
              as={"p"}
              marginTop={0}
              marginBottom={"1rem"}
              lineHeight={1.8}
              fontSize={20}
              textAlign={"justify"}
              width={"90%"}
            >
              {capitalizeEachWord(t("Contractors-info"))}
            </Text>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default ConsTruction;
