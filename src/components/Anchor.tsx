import { Box, Text } from "@chakra-ui/react"
import Link from "next/link";

type AnchorProps = {
  name: string;
  route: string;
};

export const Anchor = ({ name, route }: AnchorProps) => {
  return (
    <Box>
      <Link href={route}>
        <Text as="a" fontSize="md" color="pink.300" textDecor="underline" fontWeight="bold">
          {name}
        </Text>
      </Link>
    </Box>
  )
}