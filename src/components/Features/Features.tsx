"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button
          as={Link}
          variant={"link"}
          colorScheme={"blue"}
          size={"sm"}
          href={href}
        >
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function FeaturesSection() {
  return (
    <Box
      p={4}
      fontFamily="Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen'"
    >
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Key Features of kindpic
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Optimize your images effortlessly with kindpic's powerful features.
          Compress, convert, and sync your images to boost your website's
          performance.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Image compression"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Reduce image file sizes without compromising quality."
            }
            href={"#"}
          />
          <Card
            heading={"Format conversion"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Convert images to various formats to meet your needs."
            }
            href={"#"}
          />
          <Card
            heading={"Ease of use"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "Simplify image optimization with our user-friendly interface."
            }
            href={"#"}
          />
          <Card
            heading={"Cloud sync"}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              "Access your optimized images from anywhere with cloud sync."
            }
            href={"#"}
          />
          <Card
            heading={"Background Remover"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "Effortlessly remove backgrounds from images for a clean look."
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
