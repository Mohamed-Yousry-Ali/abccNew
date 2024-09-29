// import { Box } from "@chakra-ui/react";
// import { motion } from "framer-motion";

// const MotionBox = motion(Box);
import { Box, Grid, Image } from "@chakra-ui/react";
import "./../styles/Duration.css";
import imgSea from "./../../public/images/supply-chain-banner_msite.png";
import plamp from "./../../public/images/PLUM_CLUSTER.png";
import elctricity from "./../../public/images/uneap89dlb74-pprjaah3ru2rmithn605a1snai_11-01-16_03-08-43.jpg";
import grass from "./../../public/images/kategorija-isskustvennyj-gazon.jpg";
import paints from "./../../public/images/1677926517_en-idei-club-p-exterior-wall-painting-dizain-76.jpg";
import ceramic from "./../../public/images/Plytki-z-Castoramy.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faStroopwafel,
  faPlugCircleBolt,
  faWrench,
  faRainbow,
  faPaintRoller,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";

const RotatingDiv = () => {
  return (
    <>
      <Box
        as="h2"
        textAlign={"center"}
        fontSize={"32px"}
        pt={"20px"}
        fontWeight={"bold"}
      >
        القطاع التجارى
      </Box>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // Responsive columns
        gap={10}
        my={30}
        px={15}
        pb={"400px"}
        h={"100%"}
        templateRows={{ base: "auto auto", md: "auto" }} // Responsive rows
      >
        <Box className="container">
          <Box
            className="box front"
            bgColor={"#2e4092"}
            h={{ base: "1", md: "400px" }}
          >
            <Box w={"100%"} textAlign={"center"}>
              <FontAwesomeIcon icon={faStroopwafel} fontSize={"100px"} />
              <Box as="h2"> مواد البناء </Box>
              <Box as="h4"> رمل بانواعه وبلوك وحديد وأسمنت وبحص حجر صغير</Box>
            </Box>
          </Box>
          <Box className="box back">
            <Image src={imgSea} h={{ base: "1", md: "400px" }} w={"100%"} />
          </Box>
        </Box>
        <Box className="container">
          <Box
            className="box front"
            bgColor={"#2e4092"}
            h={{ base: "1", md: "400px" }}
          >
            <Box w={"100%"} textAlign={"center"}>
              <FontAwesomeIcon icon={faPlugCircleBolt} fontSize={"100px"} />
              <Box as="h2"> مواد الكهرباء </Box>
              <Box as="h4">
                مواد الكهرباء بانواعها واشكالها المختلفة والحديثة
              </Box>
            </Box>
          </Box>
          <Box className="box back">
            <Image src={elctricity} h={{ base: "1", md: "400px" }} w={"100%"} />
          </Box>
        </Box>
      </Grid>

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // Responsive columns
        gap={10}
        my={30}
        px={15}
        pb={"400px"}
        h={"100%"}
        templateRows={{ base: "auto auto", md: "auto" }} // Responsive rows
      >
        <Box className="container">
          <Box
            className="box front"
            bgColor={"#2e4092"}
            h={{ base: "1", md: "400px" }}
          >
            <Box w={"100%"} textAlign={"center"}>
              <FontAwesomeIcon icon={faWrench} fontSize={"100px"} />
              <Box as="h2"> مواد السباكة والصرف الصحى </Box>
              <Box as="h4"> مواد السباكه والصرف الصحه (مواسير وتوابعها ) </Box>
            </Box>
          </Box>
          <Box className="box back">
            <Image src={plamp} h={{ base: "1", md: "400px" }} w={"100%"} />
          </Box>
        </Box>
        <Box className="container">
          <Box
            className="box front"
            bgColor={"#2e4092"}
            h={{ base: "1", md: "400px" }}
          >
            <Box w={"100%"} textAlign={"center"}>
              <FontAwesomeIcon icon={faRainbow} fontSize={"100px"} />
              <Box as="h2">العشب الصناعى</Box>
              <Box as="h4">العشب الصناعى بانواعة المختلفه واشكاله الحديثة</Box>
            </Box>
          </Box>
          <Box className="box back">
            <Image src={grass} h={{ base: "1", md: "400px" }} w={"100%"} />
          </Box>
        </Box>
      </Grid>

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // Responsive columns
        gap={10}
        my={30}
        px={15}
        pb={"400px"}
        h={"100%"}
        templateRows={{ base: "auto auto", md: "auto" }} // Responsive rows
      >
        <Box className="container">
          <Box
            className="box front"
            bgColor={"#2e4092"}
            h={{ base: "1", md: "400px" }}
          >
            <Box w={"100%"} textAlign={"center"}>
              <FontAwesomeIcon icon={faPaintRoller} fontSize={"100px"} />
              <Box as="h2">الدهانات</Box>
              <Box as="h4">جميع انواع ومواد الدهانات المختلفة والحديثة</Box>
            </Box>
          </Box>
          <Box className="box back">
            <Image src={paints} h={{ base: "1", md: "400px" }} w={"100%"} />
          </Box>
        </Box>

        <Box className="container">
          <Box
            className="box front"
            bgColor={"#2e4092"}
            h={{ base: "1", md: "400px" }}
          >
            <Box w={"100%"} textAlign={"center"}>
              <FontAwesomeIcon icon={faCubes} fontSize={"100px"} />
              <Box as="h2">البلاط والسيراميك</Box>
              <Box as="h4">
                {" "}
                البلاط والسيراميك باشكلاهم المختلفه والحديثه والجودة الممتازة
              </Box>
            </Box>
          </Box>
          <Box className="box back">
            <Image src={ceramic} h={{ base: "1", md: "400px" }} w={"100%"} />
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default RotatingDiv;
