import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Text,
  VStack,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs
      .send(
        "service_vnee0ga",
        "template_s574gyb",
        {
          name: name,
          email: email,
          message: message,
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_API_KEY
        }, {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_API_KEY
        }
      )
      .then(() => {
        alert("Message sent successfully!");
      });
  };

  return (
    <Box p={4} width='80%'>
      <Box textAlign="center">
        <Heading size="xl" pt={5}>
          Contact Me
        </Heading>
        <Text fontSize="xl" pt={5}>
          I&apos;m always happy to chat!
        </Text>
      </Box>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" variant="filled" placeholder="Roshan Desai" onChange={event => setName(event.currentTarget.value)}/>
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" variant="filled" placeholder='roshan@dev.com' onChange={event => setEmail(event.currentTarget.value)}/>
          </FormControl>

          <FormControl id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea variant="filled" onChange={event => setMessage(event.currentTarget.value)}/>
          </FormControl>

          <Button type="submit" colorScheme="green">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Contact;
