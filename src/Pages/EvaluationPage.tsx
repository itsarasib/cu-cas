import {
  Box,
  Button,
  Container,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
  useSteps,
} from "@chakra-ui/react";
import Breadcrumb, { BreadCrumbItem } from "../components/Breadcrumb";
import { mockForm } from "../mock/mockForm";
import FormStepper from "../components/FormStepper";
import Form from "../components/Form";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";
import { mapFormQuestionToAnswerState } from "../utils/mapFormQuestionToAnswerState";
import { initialize } from "../store/evaluationSlice";
import { mockCourses } from "../mock/mockCourses";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const breadCrumbItem: BreadCrumbItem[] = [
  {
    title: "Course",
    path: "/evaluation",
  },
  {
    title: "ICE capstone",
    path: "#",
  },
];

const EvaluationPage: React.FC = () => {
  const form = useSelector((state: RootState) => state.evaluationForm.result);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: mockForm.section.length,
  });

  useEffect(() => {
    if (form.length === 0) {
      const initalState = mapFormQuestionToAnswerState(mockForm);
      dispatch(initialize(initalState));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    onOpen();
  };

  const handleComfirmSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      const course = mockCourses.find((course) => course.course_id === id);
      if (!course) return;
      course.status = "evaluated";
      const initialState = mapFormQuestionToAnswerState(mockForm);
      dispatch(initialize(initialState));
      navigate("/evaluation");
    }, 300);
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const clearForm = () => {
    const initalState = mapFormQuestionToAnswerState(mockForm);
    dispatch(initialize(initalState));
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  });

  return (
    <Box w="full" bgColor="rgba(255, 238, 244, 0.50)" minH="100vh" pt="30px">
      <Container maxW="7xl">
        <Breadcrumb path={breadCrumbItem} />

        <Box
          w="full"
          bgColor="white"
          minH={"70vh"}
          borderRadius="16px"
          mt="20px"
        >
          <Container w="full" m={0} px={"70px"} py="30px" maxW="none">
            <Text fontSize="3xl" fontWeight={600} variant="heading">
              {" "}
              ICE capstone evalutaion
            </Text>

            <Box px="20px" my="20px">
              <FormStepper
                activeStep={activeStep}
                steps={mockForm.section}
                setActiveStep={setActiveStep}
              />
            </Box>

            <Form
              activeStep={activeStep}
              section={mockForm.section[activeStep]}
            />

            <HStack justifyContent="space-between" mt="30px">
              <Button onClick={clearForm} bgColor="#E74645" color="white">
                clear form
              </Button>
              <HStack gap="20px">
                {activeStep !== 0 && (
                  <Button onClick={handleBack}> back </Button>
                )}
                {activeStep !== mockForm.section.length - 1 && (
                  <Button onClick={handleNext}> next </Button>
                )}
                {activeStep === mockForm.section.length - 1 && (
                  <Button colorScheme="messenger" onClick={handleSubmit}>
                    {" "}
                    submit{" "}
                  </Button>
                )}
              </HStack>
            </HStack>
          </Container>
        </Box>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Form Submission</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure to submit the form</ModalBody>

          <ModalFooter>
            <Button bgColor="#E74645" color="white" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              bgColor="#3BCC69"
              color="white"
              onClick={handleComfirmSubmit}
            >
              Submit
              {isLoading && <Spinner ml="3" />}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default EvaluationPage;
