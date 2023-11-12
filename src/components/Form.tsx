import { Box } from "@chakra-ui/react";
import { Section } from "../types/form";
import { QuestionComponent } from "../utils/mapFormQuestion";

interface Props {
  activeStep: number;
  section: Section;
}
const Form: React.FC<Props> = ({ activeStep, section }) => {
  return (
    <Box>
      {section.question.map((question, index) => (
        <QuestionComponent
          question={question}
          activeStep={activeStep}
          index={index}
        />
      ))}
    </Box>
  );
};

export default Form;
