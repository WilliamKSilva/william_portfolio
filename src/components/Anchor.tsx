import { Box, Text } from "@chakra-ui/react"

type AnchorProps = {
  name: string;
};

export const Anchor = ({ name }: AnchorProps) => {
  return (
    <Box>
      <Text as="a" fontSize="md" color="pink.300" textDecor="underline" fontWeight="bold">
        {name}
      </Text>
    </Box>
  )
}