import { Stack } from "@chakra-ui/react";
import { Section } from "../types/form";
import { QuestionComponent } from "../utils/mapFormQuestion";

interface Props {
  activeStep: number;
  section: Section;
}
const Form: React.FC<Props> = ({ activeStep, section }) => {
  return (
    <Stack gap="20px" mt="20px">
      {section.question.map((question, index) => (
        <QuestionComponent
          question={question}
          activeStep={activeStep}
          index={index}
        />
      ))}
    </Stack>
  );
};

export default Form;
