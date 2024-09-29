import { Container } from "@chakra-ui/react";
import Nav from "../components/Nav";
import TransitionBox from "../UI/Duration";

const Commerce = () => {
  return (
    <>
      <Nav bg={"#393939"} />
      <Container maxW="8xl">
        <TransitionBox />
      </Container>
    </>
  );
};

export default Commerce;
