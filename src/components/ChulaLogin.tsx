import {
  Box,
  Text,
  Input,
  Button,
  HStack,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { fakeLogin } from "../fake/fakeLogin";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

interface LoginError {
  error: boolean;
  message: string;
}

const ChulaLogin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<LoginError>({
    error: false,
    message: "initial",
  });

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") handleLogin();
  };

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      setTimeout(async () => {
        const result = await fakeLogin(username, password);
        if (result.status == 200) {
          if (!result.token && !result.name)
            throw new Error("token or name is not found");
          dispatch(login({ token: result.token, name: result.name }));
          navigate("/");
        } else {
          setLoginError({
            error: true,
            message: result.message as string,
          });
          setIsLoading(false);
        }
      }, 300);
    } catch (error) {
      setIsLoading(false);
      setLoginError({
        error: true,
        message: "something went wrong",
      });
    }
  };

  return (
    <Box maxW="3xl" w="full">
      <Box my="30px" display="flex" flexDir="column" gap="15px">
        <Text fontSize="24px" fontWeight={700}>
          Username
        </Text>
        <Input
          placeholder="username"
          bgColor="#ECF1F4"
          onChange={handleUsernameChange}
        />
      </Box>
      <Box my="30px" display="flex" flexDir="column" gap="15px">
        <Text fontSize="24px" fontWeight={700}>
          Password
        </Text>
        <Input
          type="password"
          placeholder="password"
          bgColor="#ECF1F4"
          onKeyDown={handleKeyDown}
          onChange={handlePasswordChange}
        />
      </Box>
      <Box
        bgColor={loginError.error ? "error" : "transparent"}
        color={loginError.error ? "white" : "transparent"}
        padding="10px"
        borderRadius="5px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text> {loginError.message} </Text>
        <Button
          bgColor={loginError.error ? "white" : "transparent"}
          color={loginError.error ? "error" : "transparent"}
          fontWeight={500}
          _focus={{ bgColor: "transparent", color: "transparent" }}
          onClick={() => setLoginError((prev) => ({ ...prev, error: false }))}
          height="1.5rem"
          width="1.5rem"
          padding="0"
        >
          X
        </Button>
      </Box>
      <HStack justifyContent="space-between" my="30px">
        <Box
          fontWeight={500}
          cursor="pointer"
          _hover={{ color: "#FF7456" }}
          onClick={onOpen}
        >
          <Text> forgot password? (Show password) </Text>
        </Box>
        <Button variant="gradient-button" onClick={handleLogin}>
          Login
          {isLoading && <Spinner size="sm" ml="5px" thickness="2px" />}
        </Button>
      </HStack>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>your username and password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>username: 6338145221 password: 1234</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ChulaLogin;
