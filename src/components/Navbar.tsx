import {
  Avatar,
  Box,
  HStack,
  Image,
  Link,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
const navItem = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "evaluation",
    path: "/evaluation",
  },
  {
    title: "syllabus",
    path: "/syllabus",
  },
];

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isAuthenticated, token, name } = useAuth();

  const handleLogout = async () => {
    setIsLoading(true);
    dispatch(logout());
    setIsLoading(false);
    return true;
  };
  return (
    <HStack
      h="10vh"
      bgColor="white"
      px="40px"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid #dddfe2"
      // mb="30px"
    >
      <HStack gap="20px">
        <Link href="/">
          <Image src="/chula_logo.svg" alt="Chulalongkorn University Logo" />
        </Link>
        <HStack gap="20px">
          {navItem.map((item) => {
            return (
              <Link
                href={item.path}
                fontWeight={500}
                fontSize="18px"
                _hover={{ color: "pink" }}
              >
                {item.title}
              </Link>
            );
          })}
        </HStack>
      </HStack>
      <Box>
        {isAuthenticated ? (
          <HStack gap="10px">
            <Avatar
              size="md"
              bgColor="#F6D1DF"
              color="white"
              name={name ? name : "A"}
            />
            <Text fontWeight={500}> {token} </Text>
            <Link ml="20px" size="sm" onClick={handleLogout} href="/">
              Log out
              {isLoading && <Spinner size="sm" ml="5px" thickness="2px" />}
            </Link>
          </HStack>
        ) : (
          <Link
            href="/login"
            bgColor="#F6D1DF"
            padding="10px 20px"
            fontWeight={500}
            borderRadius="16px"
            cursor="pointer"
            _hover={{ textDecor: "none" }}
          >
            {" "}
            login{" "}
          </Link>
        )}
      </Box>
    </HStack>
  );
};

export default Navbar;
