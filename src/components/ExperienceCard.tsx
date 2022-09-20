import { Container, Flex, HStack, Text } from "@chakra-ui/react";

type ExperienceCardProps = {
  title: string;
  description: string;
  date: string;
};

export const ExperienceCard = ({ title, description, date }: ExperienceCardProps) => {
  return (
    <Container w="95%" bg="blackAlpha.400" p="7" border="1px" borderColor="whiteAlpha.200">
      <Flex gap={8} align="flex-start" justify="space-between" direction="column" scrollBehavior="auto">
        <Flex w="full" justify="space-between" align="center">
          <Text fontSize="2xl" color="pink.300" fontWeight="semibold">
            {title}
          </Text>
          <Text fontSize="sm" color="whiteAlpha.700" fontWeight="light">
            {date}
          </Text>
        </Flex>
        <Text fontSize="lg" color="white">
          {description}
        </Text>
      </Flex>      
    </Container>
  );
};