import { motion } from "framer-motion";
import { forwardRef } from "react";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Box,
  Heading,
  Text,
  LinkBox,
  Accordion,
  AccordionProps,
  Button,
  ButtonProps,
  Image,
  ImageProps,
  Flex,
  VStack,
  HStack,
  Grid,
  GridProps,
  Stack,
  StackProps,
  Container,
  ContainerProps,
  Input,
  InputProps,
  FlexProps,
  IconButton,
} from "@chakra-ui/react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

// Combine Chakra's Link and Router's Link props
type MotionLinkProps = ChakraLinkProps & RouterLinkProps;

export const MotionLink = motion(
  forwardRef<HTMLAnchorElement, MotionLinkProps>((props, ref) => (
    <ChakraLink as={RouterLink} ref={ref} {...props} />
  ))
);

export const MotionBox = motion(
  forwardRef<HTMLDivElement, React.ComponentProps<typeof Box>>((props, ref) => (
    <Box ref={ref} {...props} />
  ))
);

// Corrected MotionIconButton
export const MotionIconButton = motion(
  forwardRef<HTMLButtonElement, React.ComponentProps<typeof IconButton>>((props, ref) => (
    <IconButton ref={ref} {...props} />
  ))
);

export const MotionLinkBox = motion(
  forwardRef<HTMLDivElement, React.ComponentProps<typeof LinkBox>>((props, ref) => (
    <LinkBox ref={ref} {...props} />
  ))
);

export const MotionHeading = motion(
  forwardRef<HTMLHeadingElement, React.ComponentProps<typeof Heading>>((props, ref) => (
    <Heading ref={ref} {...props} />
  ))
);

export const MotionText = motion(
  forwardRef<HTMLParagraphElement, React.ComponentProps<typeof Text>>((props, ref) => (
    <Text ref={ref} {...props} />
  ))
);

export const MotionAccordion = motion(
  forwardRef<HTMLDivElement, AccordionProps>((props, ref) => (
    <Accordion ref={ref} {...props} />
  ))
);

export const MotionButton = motion(
  forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
    <Button ref={ref} {...props} />
  ))
);

export const MotionImage = motion(
  forwardRef<HTMLImageElement, ImageProps>((props, ref) => (
    <Image ref={ref} {...props} />
  ))
);

export const MotionFlex = motion(
  forwardRef<HTMLDivElement, FlexProps>((props, ref) => (
    <Flex ref={ref} {...props} />
  ))
);

export const MotionVStack = motion(
  forwardRef<HTMLDivElement, StackProps>((props, ref) => (
    <VStack ref={ref} {...props} />
  ))
);

export const MotionHStack = motion(
  forwardRef<HTMLDivElement, StackProps>((props, ref) => (
    <HStack ref={ref} {...props} />
  ))
);

export const MotionGrid = motion(
  forwardRef<HTMLDivElement, GridProps>((props, ref) => (
    <Grid ref={ref} {...props} />
  ))
);

export const MotionContainer = motion(
  forwardRef<HTMLDivElement, ContainerProps>((props, ref) => (
    <Container ref={ref} {...props} />
  ))
);

export const MotionStack = motion(
  forwardRef<HTMLDivElement, StackProps>((props, ref) => (
    <Stack ref={ref} {...props} />
  ))
);

export const MotionInput = motion(
  forwardRef<HTMLInputElement, InputProps>((props, ref) => (
    <Input ref={ref} {...props} />
  ))
);
