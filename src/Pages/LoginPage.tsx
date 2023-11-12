import { Center, Container, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import ChulaLogin from "../components/ChulaLogin";
import SceLogin from "../components/SceLogin";

const ActiveProps: React.ComponentProps<typeof Text> = {
  cursor: "pointer",
  borderBottom: "1.5px solid #DE5C8E",
  pb: "3px",
  color: "#DE5C8E",
};

const InactiveProps: React.ComponentProps<typeof Text> = {
  color: "#8A97AB",
  cursor: "pointer",
  pb: "3px",
  borderBottom: "1.5px solid #8A97AB",
};

const LoginPage = () => {
  const [isLoginWithSce, setIsLoginWithSce] = useState(false);
  return (
    <Container maxW="5xl" mt="30px">
      <HStack fontWeight={700} fontSize="20px" gap="20px" mb="30px">
        <Text
          {...(isLoginWithSce ? InactiveProps : ActiveProps)}
          onClick={() => setIsLoginWithSce(false)}
        >
          Login With Chula Account
        </Text>
        <Text
          {...(isLoginWithSce ? ActiveProps : InactiveProps)}
          onClick={() => setIsLoginWithSce(true)}
        >
          Login With SCE Account
        </Text>
      </HStack>
      <Center
        borderRadius="16px"
        bgColor="rgba(239, 174, 199, 0.50)"
        minH="500px"
      >
        {isLoginWithSce ? <SceLogin /> : <ChulaLogin />}
      </Center>
    </Container>
  );
};

export default LoginPage;
