import { Box, Text, Link as ChakraLink } from "@chakra-ui/react"
import Link from "next/link";

type AnchorProps = {
  name: string;
  route: string;
};

export const Anchor = ({ name, route }: AnchorProps) => {
  return (
    <Box>
      <Link href={route}>
        <ChakraLink fontSize="md" color="pink.300" textDecor="underline" fontWeight="bold">
          {name}
        </ChakraLink>
      </Link>
    </Box>
  )
}