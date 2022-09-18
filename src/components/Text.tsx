import { Box, Text as ChakraText } from "@chakra-ui/react";
import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
}

export const Text = ({ children }: TextProps) => {
  return (
    <Box>
      <ChakraText fontSize="lg" fontWeight="bold" color="white">
        {children}
      </ChakraText>
    </Box>
  )
}