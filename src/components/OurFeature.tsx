import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faClone,
  faLightbulb,
  faEnvelope,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { capitalizeEachWord } from "../utility";

const OurFeature = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: faStar,
      title: capitalizeEachWord(t("workquick")),
      desc: capitalizeEachWord(t("workquickinfo")),
    },
    {
      icon: faClone,
      title: capitalizeEachWord(t("Consultation")),
      desc: capitalizeEachWord(t("Consultationinfo")),
    },
    {
      icon: faLightbulb,
      title: capitalizeEachWord(t("OurStaff")),
      desc: capitalizeEachWord(t("OurStaffinfo")),
    },
    {
      icon: faEnvelope,
      title: capitalizeEachWord(t("modernway")),
      desc: capitalizeEachWord(t("modernwayinfo")),
    },
    {
      icon: faEnvelope,
      title: capitalizeEachWord(t("Greatworkhistory")),
      desc: t("Greatworkhistoryinfo"),
    },
    {
      icon: faHeart,
      title: capitalizeEachWord(t("Continuouscustomersupport")),
      desc: t("Continuouscustomersupportinfo"),
    },
  ];

  return (
    <Box id="ser" py={[6, 8, 10]}>
      <Container maxW="container.8xl">
        <Heading
          as="h2"
          size="xl"
          marginBottom={10}
          textAlign="center"
          color={"#034583"}
          fontWeight="bold"
        >
          {t("feature")}
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          {features.map((feature, index) => (
            <Flex
              key={index}
              direction="column"
              align="center"
              textAlign="center"
              p={6}
              _light={{ backgroundColor: "white" }}
              borderRadius="md"
              boxShadow="md"
              className="wow animate__animated animate__fadeIn"
              data-wow-duration="5s"
            >
              <Box
                as={FontAwesomeIcon}
                icon={feature.icon}
                boxSize={12}
                mb={4}
                color={"#034583"}
              />
              <Heading as="h3" size="md" mb={2}>
                {feature.title}
              </Heading>
              <Text>{feature.desc}</Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default OurFeature;
