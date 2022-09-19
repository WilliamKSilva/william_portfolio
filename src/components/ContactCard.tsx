import { Container, Icon, Text, VStack } from "@chakra-ui/react"
import Image from "next/image";
import { BsLinkedin } from 'react-icons/bs';

type ContactCardProps = {
  name: string;
  image_url: string;
}

export const ContactCard = ({ name, image_url }: ContactCardProps) => {
  return (
    <Container w="80%">
      <VStack gap={1}>
        <Image src={image_url} width={10} height={10} alt="Contact icon" />
        <Text fontSize="md" color="white" fontWeight="bold">{name}</Text>
      </VStack>
    </Container>
  )
}