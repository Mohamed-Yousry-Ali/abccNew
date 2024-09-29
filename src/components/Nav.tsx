"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  useColorMode,
  Divider,
  HStack,
} from "@chakra-ui/react";
import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import imgSrc from "./../../public/images/new revisions 77.png";

// import imgSrc from "./../../public/images/new revisions.jpg";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import "./../../src/i18n";
import { Link, NavLink } from "react-router-dom";
import { capitalizeEachWord } from "../utility";
import { t } from "i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WhatsAppButton from "./WhatsAppButton";

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
interface IProps {
  position?: "absolute" | "relative";
  zIndex?: string;
  bg?: string;
}
// Define the props for the components
interface NavProps {
  NAV_ITEMS: Array<NavItem>;
}

export default function Nav({ bg, position, zIndex }: IProps) {
  //states
  const { colorMode, toggleColorMode } = useColorMode();

  const { isOpen, onToggle } = useDisclosure();
  const [selectLang, setSelectLang] = useState(true);

  const { t, i18n } = useTranslation();

  // Load language preference from cookies
  useEffect(() => {
    const storedLang = Cookies.get("selectLang");
    if (storedLang) {
      setSelectLang(storedLang === "true");
      i18n.changeLanguage(storedLang === "true" ? "ar" : "en");
    }
  }, [i18n]);

  useEffect(() => {
    if (colorMode === "light") {
      document.body.style.backgroundImage =
        "linear-gradient(40deg, #fff, #fff, #e6e6e6)";
    } else {
      document.body.style.backgroundImage = "";
    }
  }, [colorMode]);

  //handlers
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectLang(lng === "ar");
    Cookies.set("selectLang", String(lng === "ar")); // Convert boolean to string
  };

  const NAV_ITEMS: Array<NavItem> = [
    {
      label: t("Home"),
      href: "/",
    },
    {
      label: t("About"),
      href: "/about",
    },
    {
      label: t("Construction"),
      href: "cooo",
      children: [
        {
          label: t("Contractors"),

          href: "/contractors",
        },
        {
          label: t("finishes"),
          href: "/finishes",
        },
        {
          label: t("Sports-equipment"),

          href: "/sports",
        },
        {
          label: t("Building-maintenance"),
          href: "/maintenance",
        },
      ],
    },
    {
      label: t("Logistics"),
      href: "cooo",
      children: [
        {
          label: t("clearance"),
          href: "/clearance",
        },
        {
          label: t("Road-Transport"),
          href: "/Road-Transport",
        },
        {
          label: t("Sea-Freight"),
          href: "/Sea-Freight",
        },
        {
          label: t("Air-Freight"),
          href: "/Air-Freight",
        },
        {
          label: t("Logistics-Services"),
          href: "/Logistics-Services",
        },
        {
          label: t("Customs-Business"),
          href: "/Customs-Business",
        },
      ],
    },
    {
      label: t("commerce"),
      href: "/commerce",
    },
  ];

  return (
    <Box
      zIndex={zIndex}
      bg={bg}
      position={position}
      _hover={{ backgroundColor: "#393939" }}
      justifyContent={"space-around"}
      width={"100%"}
    >
      <Flex
        color={useColorModeValue("gray.600white", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        align="center"
      >
        {/* Responsive Icon */}
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        {/* links  */}
        <Flex
          flex={{ base: "1", md: "1" }}
          display={{ base: "none", md: "flex" }}
          direction={"column"}
          gap={4}
        >
          <Box display={"flex"} marginRight={"26px"}>
            <HStack spacing={4} marginLeft={"20px"}>
              <Link to="https://twitter.com/ELMTS_ADVANCED">
                <FontAwesomeIcon
                  icon={faTwitter}
                  color={"#fff"}
                  fontSize={"30px"}
                />
              </Link>
            </HStack>
            <HStack spacing={4} marginLeft={"20px"}>
              <Link to="https://twitter.com/ELMTS_ADVANCED">
                <FontAwesomeIcon
                  icon={faFacebook}
                  color={"#fff"}
                  fontSize={"30px"}
                />
              </Link>
            </HStack>
            <HStack spacing={4} marginLeft={"20px"}>
              <Link to="https://twitter.com/ELMTS_ADVANCED">
                <FontAwesomeIcon
                  icon={faSnapchat}
                  color={"#fff"}
                  fontSize={"30px"}
                />
              </Link>
            </HStack>
            <HStack spacing={4} marginLeft={"20px"}>
              <Link to="https://twitter.com/ELMTS_ADVANCED">
                <FontAwesomeIcon
                  icon={faInstagram}
                  color={"#fff"}
                  fontSize={"30px"}
                />
              </Link>
            </HStack>
            <HStack spacing={2} marginLeft={"20px"}>
              <WhatsAppButton />
            </HStack>
          </Box>
          <Divider pt={"10px"} />
          <Box>
            <DesktopNav NAV_ITEMS={NAV_ITEMS} />
          </Box>
        </Flex>

        {/* logo */}
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "center" }}>
          <Box borderRadius="md" overflow="hidden" as={Link} to={"/"}>
            <Image
              src={imgSrc}
              alt="Logo"
              objectFit="cover"
              maxHeight="75px"
              maxWidth="400px"
            />
          </Box>
        </Flex>

        {/* buttons  language and dark mode */}
        <Stack flex={{ base: 1, md: 1 }} direction={"column"} textAlign={"end"}>
          <Box mx={"5px"}>
            {/* background-image: linear-gradient(90deg, #fff, #fff, #e6e6e6); */}
            <Button
              onClick={toggleColorMode}
              width={"fit-content"}
              mx={"3px"}
              fontSize={"large"}
              color={"white"}
              bgColor={"transparent"}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            {selectLang ? (
              <Button
                // display={{ base: "none", md: "inline-flex" }}
                fontSize={"md"}
                width={"fit-content"}
                height={50}
                fontWeight={600}
                color={"white"}
                bgColor={"transparent"}
                onClick={() => changeLanguage("en")}
              >
                English
              </Button>
            ) : (
              <Button
                // display={{ base: "none", md: "inline-flex" }}
                fontSize={"md"}
                width={"fit-content"}
                height={50}
                fontWeight={400}
                color={"white"}
                bgColor={"transparent"}
                onClick={() => changeLanguage("ar")}
              >
                Arabic
              </Button>
            )}
          </Box>

          <Divider
            display={{ base: "inline-flex", sm: "none", md: "inline-flex" }}
          />

          <Box style={{ justifyContent: "flex-start" }}>
            <Box
              display={{ base: "inline-flex", sm: "none", md: "inline-flex" }}
            >
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Box
                    as={NavLink}
                    p={2}
                    to={"/vision"}
                    fontSize={"17px"}
                    textTransform={"uppercase"}
                    fontWeight={"800"}
                    end
                    color={"#fff"}
                    _hover={{
                      color: "#fff",
                    }}
                  >
                    {capitalizeEachWord(t("Vision"))}
                  </Box>
                </PopoverTrigger>
              </Popover>
            </Box>
            <Box
              display={{ base: "inline-flex", sm: "none", md: "inline-flex" }}
            >
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Box
                    as={NavLink}
                    p={2}
                    to={"/contact"}
                    fontSize={"17px"}
                    textTransform={"uppercase"}
                    fontWeight={"800"}
                    end
                    color={"#fff"}
                    _hover={{
                      color: "#fff",
                    }}
                  >
                    {capitalizeEachWord(t("Contact"))}
                  </Box>
                </PopoverTrigger>
              </Popover>
            </Box>
          </Box>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav NAV_ITEMS={NAV_ITEMS} />
      </Collapse>
    </Box>
  );
}

const DesktopNav: React.FC<NavProps> = ({ NAV_ITEMS }) => {
  const linkColor = useColorModeValue("white", "white");
  const linkHoverColor = useColorModeValue("white", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem: NavItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as={NavLink}
                py={2}
                to={navItem.href ?? "#"}
                fontSize={{
                  base: "auto auto",
                  sm: "17px",
                  md: "13px",
                  lg: "17px",
                }}
                textTransform={"uppercase"}
                fontWeight={"800"}
                width={"100%"}
                end
                color={linkColor}
                _hover={{
                  color: linkHoverColor,
                }}
                onClick={(event) => {
                  if (navItem.children) {
                    event.preventDefault();
                  }
                  // Continue with other logic if necessary
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as={Link}
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("gray.300", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#000" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          {/* <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} /> */}
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav: React.FC<NavProps> = ({ NAV_ITEMS }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <MobileNavItem label={capitalizeEachWord(t("Vision"))} />
      <MobileNavItem label={capitalizeEachWord(t("Contact"))} />
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
        onClick={(event) => {
          if (children) {
            event.preventDefault();
          }
          // Continue with other logic if necessary
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
