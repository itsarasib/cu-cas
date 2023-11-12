import { Box, HStack, Input, Radio, RadioGroup, Text } from "@chakra-ui/react";
import { Question } from "../types/form";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../store/evaluationSlice";
import { RootState } from "../store/store";

interface Props {
  question: Question;
  activeStep: number;
  index: number;
}

export const QuestionComponent: React.FC<Props> = ({
  question,
  activeStep,
  index,
}) => {
  const form = useSelector((state: RootState) => state.evaluationForm.result);
  const dispatch = useDispatch();

  const handleChange = (value: string) => {
    dispatch(
      update({
        section: activeStep,
        questionNo: index,
        answer: value,
      })
    );
  };
  const QuestionText: React.FC<{ title: string }> = ({ title }) => {
    return (
      <Text fontSize="18px" fontWeight={500}>
        {" "}
        {title}{" "}
      </Text>
    );
  };
  switch (question.type) {
    case "radio":
      return (
        <Box>
          <QuestionText title={question.title} />
          <RadioGroup
            onChange={(value) => {
              handleChange(value);
            }}
            value={form[activeStep]?.question[index].answer ?? ""}
          >
            <HStack gap="20px" mt="10px">
              {question.option.map((option) => {
                return (
                  <Radio value={option.value}>
                    <Text>{option.title}</Text>
                  </Radio>
                );
              })}
            </HStack>
          </RadioGroup>
        </Box>
      );
      break;
    case "checkbox":
      return (
        <Box>
          <QuestionText title={question.title} />
          <HStack gap="20px" mt="10px">
            {question.option.map((option) => {
              return (
                <Box>
                  <Text>{option.title}</Text>
                </Box>
              );
            })}
          </HStack>
        </Box>
      );
      break;
    case "text":
      return (
        <Box>
          <QuestionText title={question.title} />
          <Input
            mt="10px"
            value={form[activeStep]?.question[index].answer ?? ""}
            placeholder={question.title}
            onChange={(e) => handleChange(e.target.value)}
          />
        </Box>
      );
    default:
      return <></>;
      break;
  }
};
