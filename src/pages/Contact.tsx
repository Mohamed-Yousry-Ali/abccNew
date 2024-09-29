import { useTranslation } from "react-i18next";
import {
  Box,
  HStack,
  Text,
  Grid,
  Divider, // Import Divider
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileButton,
  faPhone,
  faEnvelope,
  faGlobe,
  faLocation,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import "./../styles/Footer.css";
import Nav from "../components/Nav";
const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <Nav bg={"#393939"} />
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // Responsive columns
        gap={10}
        my={30}
        px={15}
        templateRows={{ base: "auto auto", md: "auto" }} // Responsive rows
      >
        <Box position="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14844.112403602592!2d39.196526!3d21.5457565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d16bb23432d3%3A0x39f2a0a1dd2ea01c!2z2LTYsdmD2Kkg2KfZhNij2LnZhdin2YQg2KfZhNmF2KrYt9mI2LHYqSDZhNmE2KrYrtmE2YrYtSDYp9mE2KzZhdix2YPZiiAtIEFCQ0MsIEFkdmFuY2VkIEJ1c2luZXNzIENv!5e0!3m2!1sar!2seg!4v1723834590235!5m2!1sar!2seg"
            style={{
              border: 0,
              filter: "grayscale(100%)",
            }}
            width={"100%"}
            height={"400px"}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>

        <Box mx={4}>
          <Text
            as={"h2"}
            color={"#034583"}
            fontSize={50}
            fontWeight={"bold"}
            marginBlockStart={15}
            marginBlockEnd={15}
          >
            {t("Contact")}
          </Text>
          <Box width="full" fontSize={18}>
            <Grid gap={4} width="full">
              <HStack spacing={4} p={0} m={0}>
                <FontAwesomeIcon icon={faMobileButton} />
                <Text>920022518 +</Text>
                <Divider orientation="vertical" height="40px" />
              </HStack>
              <HStack spacing={4} p={0} m={0}>
                <FontAwesomeIcon icon={faPhone} />
                <Text>920022518 +</Text>
                <Divider orientation="vertical" height="40px" />
              </HStack>
              <HStack spacing={4} p={0} m={0}>
                <FontAwesomeIcon icon={faEnvelope} />
                <Text>info@abcc.com.sa</Text>
                <Divider orientation="vertical" height="40px" />
              </HStack>
              <HStack spacing={4} p={0} m={0}>
                <FontAwesomeIcon icon={faGlobe} />
                <Text>www.abcc-company.com</Text>
              </HStack>
              <HStack spacing={4} p={0} m={0}>
                <FontAwesomeIcon icon={faLocation} />
                <Text>الرياض حى الملز شارع الجامعة</Text>
              </HStack>
              <HStack spacing={4} p={0} m={0}>
                <FontAwesomeIcon icon={faClock} />
                <Text>ساعات العمل: ⋅ يفتح ٨ ص يوم الى 5 مساء</Text>
              </HStack>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Contact;
