"use client";

import Head from "next/head";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import projects from "../data/projects.json";
import styles from "../styles/animations.module.css";
// import { Project } from "../components/project";
import { Project } from "@/components/Project";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Roshan Desai</title>
        <link rel="icon" href="./icon.ico" />
      </Head>

      <main>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          pt={20}
          minHeight={"50vh"}>
          <Heading
            alignContent="center"
            size="4xl"
            className={styles.animoji}
            textAlign="center">
            👦🏽 Hey, I&apos;m Roshan!
          </Heading>
          <Text fontSize="2xl" alignContent="center" textAlign="center">
            Here you can learn more about my experiences and projects.
          </Text>
          <div>
            <Heading className={styles.typedOut} mt="200px" size="3xl">
              I like{" "}
              <Text color="purple" display="inline-block">
                to code
              </Text>
            </Heading>
            <NextLink href="#projects">
              <Text
                fontSize="2xl"
                alignContent="center"
                textAlign="center"
                mt="15px">
                but also{" "}
                <Box display="inline-block" marginLeft="5px">
                  <FaArrowDown />
                </Box>
              </Text>
            </NextLink>
          </div>
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          pt="20">
          <Heading id="projects">Projects</Heading>
        </Flex>
        {projects.map((proj: any) => (
          <Project data={proj} key={proj} />
        ))}
      </main>
    </Box>
  );
}
