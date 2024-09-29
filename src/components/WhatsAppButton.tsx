import { Box, IconButton } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const whatsappNumber = "01030238235"; // Replace with your WhatsApp number
  const message = "Hello! I'm interested in your services."; // Replace with your message
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Box
      zIndex="9000" // Ensures the button is above other elements
    >
      <IconButton
        as="a"
        href={whatsappLink}
        target="_blank"
        aria-label="WhatsApp"
        icon={<FaWhatsapp />}
        colorScheme="#e2e8f0"
        size={"md"}
        fontSize="30px"
        isRound
      />
    </Box>
  );
}
export default WhatsAppButton;
