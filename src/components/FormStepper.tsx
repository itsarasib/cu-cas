import {
  Stack,
  Step,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  Text,
} from "@chakra-ui/react";
import { Section } from "../types/form";

interface Props {
  activeStep: number;
  steps: Section[];
  setActiveStep: (index: number) => void;
}

const FormStepper: React.FC<Props> = ({ activeStep, steps, setActiveStep }) => {
  return (
    <Stack>
      <Stepper size="sm" index={activeStep} gap="0">
        {steps.map((_, index) => (
          <Step
            key={index}
            style={{ gap: "0px", cursor: "pointer" }}
            onClick={() => setActiveStep(index)}
          >
            <StepIndicator>
              <StepStatus complete={<StepIcon />} />
            </StepIndicator>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Text>
        Step {activeStep + 1}: <b>{steps[activeStep].title}</b>
      </Text>
    </Stack>
  );
};

export default FormStepper;
