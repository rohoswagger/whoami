import { ButtonGroup, Flex, Stack, Text } from "@chakra-ui/react";
import { SocialLinks } from "./NavBar";

export const Footer = () => (
  <Flex
    as="footer"
    role="contentinfo"
    pt={{ base: "12", md: "16" }}
    pb="3"
    justifyContent="center">
    <Stack spacing={{ base: "4", md: "5" }}>
      <Stack justify="space-between" direction="row" align="center">
        <ButtonGroup variant="tertiary" gap="12">
          <SocialLinks />
        </ButtonGroup>
      </Stack>
      <Text fontSize="md" color="fg.subtle" textAlign="center">
        Built with ❤︎ by Roshan Desai.
      </Text>
    </Stack>
  </Flex>
);
