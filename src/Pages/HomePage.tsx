import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Box>
      <Box
        position="relative"
        w="100%"
        h="60vh"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        bg="linear-gradient(90deg, #F08EFCCC,#EE5166)"
        opacity={0.6}
      >
        <Image
          src="/cucasHome.jpeg"
          alt="CU-CAS background"
          w="100%"
          h="100%"
          objectFit="cover"
          position="absolute"
          zIndex={-1}
          opacity={0.6}
        />
        <Text
          fontSize="7xl"
          fontWeight="bold"
          color="white"
          textShadow="10px 10px 20px black"
          ml="5%"
        >
          CU-CAS
        </Text>
      </Box>
      <Box width="45%" mx="auto" textAlign="left" my="30px">
        <Text fontSize="xl">
          The Chula Curriculum Management Information System, CU-CAS, is an
          information system developed by the Academic Administration Office.
          Assists in creating course syllabus for teachers and evaluating online
          teaching. To be used in the administration of the university's
          teaching curriculum.
        </Text>
        <Link to={isAuthenticated ? "/evaluation" : "/login"}>
          <Text
            fontSize="xl"
            fontWeight="500"
            my="30px"
            _hover={{ textDecoration: "underline", color: "#ce4179" }}
          >
            Faculty and students can log into the assessment system here.
          </Text>
        </Link>
      </Box>

      <Box bgColor="gray.200" p="20px" mx="auto" textAlign="center">
        <Text
          fontSize="40px"
          fontWeight="500"
          mt="5px"
          borderBottom="2px solid black"
          width="50%"
          mx="auto"
          textAlign="center"
        >
          Contact
        </Text>
        <Text fontSize="20px" fontWeight="500" color="#ce4179" mt="5px">
          Office of Academic Affairs
        </Text>
        <Text fontSize="20px" fontWeight="500" mt="5px">
          Chulalongkorn University
        </Text>
        <Text mt="5px">
          Chamchuri 5 Building, 6th Floor, 254 Phyathai Road, Pathumwan, Bangkok
          10330 Thailand
        </Text>
        <Box display="flex" justifyContent="center">
          <Text mt="5px">
            <Text fontWeight="500" as="span">
              Tel.
            </Text>{" "}
            +66 2218 0016
          </Text>
        </Box>

        <Box display="flex" justifyContent="center">
          <Text mt="5px">
            <Text fontWeight="500" as="span">
              Fax
            </Text>{" "}
            +66 2218 0003
          </Text>
        </Box>

        <Box display="flex" justifyContent="center">
          <Text mt="5px">
            <Text fontWeight="500" as="span">
              Email:
            </Text>{" "}
            Email:
          </Text>
        </Box>

        <Box display="flex" justifyContent="center">
          <Text fontWeight="500" mt="5px">
            Website:
          </Text>
          <Link
            to="http://www.academic.chula.ac.th"
            target="_blank"
            rel="noReferrer"
          >
            <Text
              mt="5px"
              _hover={{ textDecoration: "underline", color: "#ce4179" }}
            >
              www.academic.chula.ac.th
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
