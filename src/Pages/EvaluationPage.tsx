import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Text,
  useSteps,
} from "@chakra-ui/react";
import Breadcrumb, { BreadCrumbItem } from "../components/Breadcrumb";
import { mockForm } from "../mock/mockForm";
import FormStepper from "../components/FormStepper";
import Form from "../components/Form";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useEffect } from "react";
import { mapFormQuestionToAnswerState } from "../utils/mapFormQuestionToAnswerState";
import { initialize } from "../store/evaluationSlice";

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
    console.log(JSON.stringify(form));
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

            <Box px="20px" mt="20px">
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

            <HStack justifyContent="space-between">
              <Button onClick={clearForm}>clear form</Button>
              <Box>
                {activeStep !== 0 && (
                  <Button onClick={handleBack}> back </Button>
                )}
                {activeStep !== mockForm.section.length - 1 && (
                  <Button onClick={handleNext}> next </Button>
                )}
                <Button onClick={() => handleSubmit()}> submit </Button>
              </Box>
            </HStack>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default EvaluationPage;
