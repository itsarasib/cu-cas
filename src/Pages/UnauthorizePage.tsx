import { Box, Center, Image, Link, Text } from "@chakra-ui/react";

const UnAuthorizePage: React.FC = () => {
  return (
    <Center h="90vh">
      <Box textAlign="center">
        <Center>
          <Image src="unauthorize.svg" alt="unauthorize" />
        </Center>
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          You need to login to see this page
        </Text>
        <Text mb="20px" letterSpacing="0.5px" color="#8A97AB">
          {`We’re sorry, the page you requested could not served as youe need to login first!`}
        </Text>
        <Link
          href="/login"
          padding="10px 20px"
          border="1px solid black"
          borderRadius="20px"
          _hover={{ textDecoration: "none", color: "white", bg: "black" }}
        >
          {" "}
          back to login page
        </Link>
      </Box>
    </Center>
  );
};

export default UnAuthorizePage;
