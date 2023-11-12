import { Box, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const SceLogin: React.FC = () => {
  const [sce, setSce] = useState<string>("");

  const handleSceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSce(e.target.value);
  };

  const handleLogin = () => {
    console.log(sce);
  };

  return (
    <Box maxW="3xl" w="full">
      <Box my="30px" display="flex" flexDir="column" gap="15px">
        <Text fontSize="24px" fontWeight={700}>
          SCE key
        </Text>
        <Input
          placeholder="sce key"
          bgColor="#ECF1F4"
          onChange={handleSceChange}
        />
      </Box>
      <Box textAlign="right" my="50px">
        <Button variant="gradient-button" onClick={handleLogin}>
          {" "}
          Login{" "}
        </Button>
      </Box>
    </Box>
  );
};

export default SceLogin;
