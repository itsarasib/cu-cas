import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Image,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { mockCourses } from "../mock/mockCourses";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ActiveProps: React.ComponentProps<typeof Box> = {
  bg: "linear-gradient(180deg, #F08EFCCC,#EE5166)",
  w: "20%",
  py: "5px",
  color: "white",
  textAlign: "center",
  fontWeight: "500",
  fontSize: "16px",
  border: "1px solid #ECEDEF",
  cursor: "pointer",
};

const InactiveProps: React.ComponentProps<typeof Box> = {
  bg: "#ECEDEF",
  w: "20%",
  py: "5px",
  color: "#8A97AB",
  textAlign: "center",
  fontWeight: "500",
  fontSize: "16px",
  border: "1px solid #ECEDEF",
  cursor: "pointer",
};

const CourseListsPage = () => {
  const [isEvaluated, setIsEvaluated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const filteredCourses = isEvaluated
    ? mockCourses.filter((course) => course.status === "evaluated")
    : mockCourses.filter((course) => course.status === "not-evaluate");

  const handleEvaluatedClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsEvaluated(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleNotEvaluatedClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsEvaluated(false);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Box w="80%" mx="auto">
      <Flex justifyContent="center">
        <Box
          borderLeftRadius="20px"
          {...(isEvaluated ? InactiveProps : ActiveProps)}
          onClick={handleNotEvaluatedClick}
        >
          <Text mr="30px" display="flex" justifyContent="flex-end">
            Not evaluated courses
          </Text>
        </Box>
        <Box
          borderRightRadius="20px"
          {...(isEvaluated ? ActiveProps : InactiveProps)}
          onClick={handleEvaluatedClick}
        >
          <Text ml="30px" display="flex" justifyContent="flex-start">
            Evaluated courses
          </Text>
        </Box>
      </Flex>

      <HStack justifyContent="space-between" my="30px">
        <Flex alignItems="center">
          <Box fontWeight="700" fontSize="24px">
            Courses waiting to be evaluated
          </Box>
          <Box
            bg="gray.200"
            fontWeight="700"
            fontSize="16px"
            borderRadius="16px"
            py="5px"
            px="10px"
            mx="10px"
          >
            {filteredCourses.length}
          </Box>
        </Flex>
        <InputGroup width="20%">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="tel" placeholder="Search" />
        </InputGroup>
      </HStack>

      <SimpleGrid columns={4} spacing={10}>
        {isLoading
          ? Array.from({ length: 8 }, (_, index) => (
              <Box
                key={index}
                bg="#ECF1F4"
                width="200px"
                height="200px"
                borderRadius="20px"
                mx="auto"
                p="5"
              >
                <SkeletonCircle size="10" mt="6" mx="auto" />
                <SkeletonText
                  mt="4"
                  noOfLines={4}
                  spacing="4"
                  skeletonHeight="2"
                  mx="auto"
                />
              </Box>
            ))
          : filteredCourses.map((course) => (
              <Box
                key={course.course_id}
                bg="#ECF1F4"
                width="200px"
                height="200px"
                borderRadius="20px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                mx="auto"
                border="1px solid transparent"
                cursor="pointer"
                onClick={() => navigate(`/evaluation/${course.course_id}`)}
                sx={{
                  "&:hover": {
                    border: "1px solid gradient(#e66465, #9198e5)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
                  },
                }}
              >
                <Image
                  src={course.img_url}
                  alt={course.title}
                  width="70px"
                  height="70px"
                />
                <Text textAlign="center" fontWeight="600">
                  {course.title}
                </Text>
                <Text textAlign="center">{course.semester}</Text>
                <Text textAlign="center">{course.professor}</Text>
                <Text textAlign="center">valid until: {course.expire_in}</Text>
              </Box>
            ))}
      </SimpleGrid>
    </Box>
  );
};

export default CourseListsPage;
