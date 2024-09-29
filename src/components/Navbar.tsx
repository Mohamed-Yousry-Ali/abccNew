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
} from "@chakra-ui/react";
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

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

// Define the props for the components
interface NavProps {
  NAV_ITEMS: Array<NavItem>;
}

export default function Navbar() {
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

          href: "contractors",
        },
        {
          label: t("finishes"),
          href: "finishes",
        },
        {
          label: t("Sports-equipment"),

          href: "sports",
        },
        {
          label: t("Building-maintenance"),
          href: "maintenance",
        },
      ],
    },
    {
      label: t("Logistics"),
      href: "cooo",
      children: [
        {
          label: t("clearance"),
          href: "clearance",
        },
        {
          label: t("Road-Transport"),
          href: "Road-Transport",
        },
        {
          label: t("Sea-Freight"),
          href: "Sea-Freight",
        },
        {
          label: t("Air-Freight"),
          href: "Air-Freight",
        },
        {
          label: t("Logistics-Services"),
          href: "Logistics-Services",
        },
        {
          label: t("Customs-Business"),
          href: "Customs-Business",
        },
      ],
    },
    {
      label: t("Vision"),
      href: "vision",
    },
    {
      label: t("Contact"),
      href: "/contact",
    },
  ];

  return (
    <Box width="100%">
      <Flex
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align="center"
      >
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

        {/* logo */}
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          {/* <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            Logo
            
          </Text> */}
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
        {/* links  */}
        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <DesktopNav NAV_ITEMS={NAV_ITEMS} />
        </Flex>
        {/* button */}
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {/* background-image: linear-gradient(90deg, #fff, #fff, #e6e6e6); */}
          <Button
            onClick={toggleColorMode}
            width={"100%"}
            padding={" 24px 18px 24px 18px;"}
            fontSize={"large"}
            bg={"#bdbebf"}
            _hover={{
              bg: "#034583",
            }}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          {selectLang ? (
            <Button
              // display={{ base: "none", md: "inline-flex" }}
              fontSize={"md"}
              width={"100%"}
              height={50}
              fontWeight={600}
              color={"white"}
              bg={"#bdbebf"}
              _hover={{
                bg: "#034583",
              }}
              onClick={() => changeLanguage("en")}
            >
              En
            </Button>
          ) : (
            <Button
              // display={{ base: "none", md: "inline-flex" }}
              fontSize={"md"}
              width={"100%"}
              height={50}
              fontWeight={400}
              color={"white"}
              bg={"#bdbebf"}
              _hover={{
                bg: "#034583",
              }}
              onClick={() => changeLanguage("ar")}
            >
              Ar
            </Button>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav NAV_ITEMS={NAV_ITEMS} />
      </Collapse>
    </Box>
  );
}

const DesktopNav: React.FC<NavProps> = ({ NAV_ITEMS }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("#034583", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem: NavItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as={NavLink}
                p={2}
                to={navItem.href ?? "#"}
                fontSize={"17px"}
                textTransform={"uppercase"}
                fontWeight={"800"}
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
