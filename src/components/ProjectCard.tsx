import { Container, Flex, Text } from "@chakra-ui/react"

type ProjectCardProps = {
  title: string;
  description: string;
}

export const ProjectCard = ({ title, description }: ProjectCardProps) => {
  return (
    <Container w="80%" bg="blackAlpha.400" p="5" border="1px" borderColor="whiteAlpha.200">
      <Flex gap={5} align="flex-start" justify="space-between" direction="column">
        <Text fontSize="2xl" color="pink.300" fontWeight="semibold">
          {title}
        </Text>
        <Text fontSize="md" color="white">
          {description}
        </Text>
      </Flex>
    </Container>
  )
}