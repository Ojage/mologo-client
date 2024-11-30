// Footer.tsx

"use client";

import {
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Flex,
  Heading,
  Link,
  useToast,
  Box,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import logo from "../../assets/images/default.png";
import {
  MotionBox,
  MotionIconButton,
  MotionInput,
  MotionButton,
} from "../common/MotionElements"; 

// Social Button Component with Animation
const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <MotionIconButton
      as="a"
      href={href}
      aria-label={label}
      variant="ghost"
      size="lg"
      isRound
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      whileHover={{ scale: 1.2, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </MotionIconButton>
  );
};

// List Header Component
const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

// Logo Component with Animation
const Logo = (props: any) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Flex alignItems="center" gap="1rem">
        <Box
          as="img"
          src={logo}
          alt="kindpic Logo"
          h="40px"
          borderRadius="md"
          {...props}
        />
        {/* <Heading size="md" color={useColorModeValue("gray.700", "white")}>
          kindpic
        </Heading> */}
      </Flex>
    </MotionBox>
  );
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleSubscribe = async () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email address.",
        description: "Please enter a valid email.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title: "Subscription successful.",
        description: "You've been subscribed to our newsletter.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: "Unable to subscribe. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MotionBox
      fontFamily="Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen'"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ base: "1fr", sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          {/* Logo and Social Media */}
          <Stack spacing={6}>
            <Logo />
            <Text fontSize={"sm"}>© 2024 kindpic. All rights reserved.</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"https://twitter.com/yourprofile"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"https://youtube.com/yourchannel"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"https://instagram.com/yourprofile"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>

          {/* Team Links */}
          <Stack align={"flex-start"}>
            <ListHeader>Team</ListHeader>
            <Link href={"#"} _hover={{ color: "blue.500" }}>
              About us
            </Link>
            <Link href={"#"} _hover={{ color: "blue.500" }}>
              Blog
            </Link>
            <Link href={"#"} _hover={{ color: "blue.500" }}>
              Contact us
            </Link>
            <Link href={"#"} _hover={{ color: "blue.500" }}>
              Pricing
            </Link>
            <Link href={"#"} _hover={{ color: "blue.500" }}>
              Testimonials
            </Link>
          </Stack>

          {/* Support Links */}
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"} _hover={{ color: "blue.500" }}>
              Help Center
            </Link>
            <Link href={"#"} _hover={{ color: "blue.500" }}>
              Terms of Service
            </Link>
            <Link href={"#"} _hover={{ color: "blue.500" }}>
              Legal
            </Link>
            <Link href={"#"} _hover={{ color: "blue.500" }}>
              Privacy Policy
            </Link>
            <Link href={"#"} _hover={{ color: "blue.500" }}>
              Status
            </Link>
          </Stack>

          {/* Newsletter Subscription */}
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Text fontSize={"sm"}>
              Subscribe to our newsletter to receive the latest updates and offers.
            </Text>
            <MotionBox
              as={Stack}
              direction={"row"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <MotionInput
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: useColorModeValue("whiteAlpha.300", "gray.700"),
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                whileFocus={{ scale: 1.05 }}
                // transition={{ type: "spring", stiffness: 300 }}
                aria-label="Email Address"
              />
              <MotionButton
                bg={useColorModeValue("#410FF8", "blue.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "blue.600",
                }}
                onClick={handleSubscribe}
                isLoading={isSubmitting}
                loadingText="Subscribing"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Subscribe"
              >
                <BiMailSend />
              </MotionButton>
            </MotionBox>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* Footer Bottom Links */}
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2024 kindpic. All rights reserved.</Text>
          <Stack direction={"row"} spacing={6}>
            <Link href={"#"} _hover={{ color: "blue.500" }}>
              Privacy Policy
            </Link>
            <Link href={"#"} _hover={{ color: "blue.500" }}>
              Terms of Service
            </Link>
            <Link href={"#"} _hover={{ color: "blue.500" }}>
              Contact
            </Link>
          </Stack>
        </Container>
      </Box>
    </MotionBox>
  );
}
