import {
  Box,
  Button,
  Container,
  HStack,
  Input,
  Select,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const SyllabusPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  const [semester, setSemester] = useState<string>("");
  const [academicYear, setAcademicYear] = useState<number>(0);
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  const [src, setSrc] = useState<string>("");
  const toast = useToast();

  const handleSearch = () => {
    setIsLoading(true);
    setShouldShow(false);
    setTimeout(() => {
      if (
        keyword === "ui" &&
        semester === "semester 1" &&
        academicYear === 2023
      ) {
        setSrc(
          "https://mycourseville-default.s3.ap-southeast-1.amazonaws.com/useruploaded_course_files/2023_1/35498/materials/2190443_User_Interface_Design_1_2023-536114-16968296505143.pdf"
        );
        setShouldShow(true);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        toast({
          title: "Not Found !",
          description: "Seems like course you are looking for does not exist!.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }, 300);
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSemesterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSemester(e.target.value);
  };

  const handleAcademicYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcademicYear(Number(e.target.value));
  };
  return (
    <Container maxW="7xl" mt="30px">
      <Text fontSize="2xl" fontWeight={500}>
        {" "}
        Search for course syllabus{" "}
      </Text>
      <HStack mt="20px" justifyContent="space-between">
        <HStack gap="10px" fontWeight={500}>
          <Box>
            <Text> Search Keyword</Text>
            <Input
              mt="10px"
              placeholder="Search"
              onChange={handleKeywordChange}
            />
          </Box>
          <Box>
            <Text> Semester </Text>
            <Select
              mt="10px"
              placeholder="Select semester"
              onChange={handleSemesterChange}
            >
              <option value="semester 1"> semester 1 </option>
              <option value="semester 2"> semester 2</option>
              <option value="summer"> summer </option>
            </Select>
          </Box>
          <Box>
            <Text> Academic Year </Text>
            <Input
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              mt="10px"
              placeholder="academic year"
              onChange={handleAcademicYearChange}
              type="number"
            />
          </Box>
        </HStack>
        <Button
          borderRadius="16px"
          variant="gradient-button"
          onClick={handleSearch}
        >
          Search
          {isLoading && <Spinner size="sm" ml="5px" thickness="2px" />}
        </Button>
      </HStack>

      {shouldShow && (
        <Container
          bgColor="rgba(239, 174, 199, 0.50)"
          maxW="none"
          px="40px"
          py="20px"
          mt="30px"
          h="100vh"
          borderRadius="14px"
        >
          <Text fontSize="20px" fontWeight={500}>
            {" "}
            User Interface Design's course syllabus
          </Text>
          <Box mt="20px" height="100%">
            <iframe
              name="something"
              src={src}
              width="100%"
              height="100%"
              style={{ borderRadius: "16px" }}
            />
          </Box>
        </Container>
      )}
    </Container>
  );
};

export default SyllabusPage;
