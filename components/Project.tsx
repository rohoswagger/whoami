import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Link,
  Tag,
  Text,
} from "@chakra-ui/react";

import { FaGithub } from "react-icons/fa";

interface ProjectProps {
  data: {
    tags: string[];
    title: string;
    dates: string;
    description: string;
    image: string;
    github: string;
  };
}

export function Project(props: ProjectProps) {
  return (
    <Center as="section" py="5vh">
      <Box maxW="420px" minW="50vw" bg="white" p="6">
        <Image
          src={props.data.image}
          alt={props.data.title}
          borderRadius="xl"
          objectFit="cover"
          mx="auto"
        />
        <HStack mt="5" spacing="3">
          {props.data.tags.map((item) => (
            <Tag key={item} variant="outline">
              {item}
            </Tag>
          ))}
        </HStack>
        <Heading my="4" size="lg">
          {props.data.title}
        </Heading>
        <Text>{props.data.description}</Text>
        <Center my="6">
          <Link href={props.data.github} isExternal>
            <Button colorScheme="blue">
              View on{" "}
              <Box pl="5px">
                <FaGithub />
              </Box>
            </Button>
          </Link>
        </Center>
      </Box>
    </Center>
  );
}
