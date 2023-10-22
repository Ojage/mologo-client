import axios from "axios";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import { Helmet } from "react-helmet";
import {
  Box,
  Button,
  Card,
  Center,
  Container,
  Flex,
  Image,
  Link,
  Spinner,
  Text,
} from "@chakra-ui/react";
import bg from "../../assets/images/6306486.jpg";
import { useNavigate } from "react-router";

export interface ImageUploaderProps {
  onImageSelected: (file: File) => void;
}

export function ImageUploader({ onImageSelected }: ImageUploaderProps) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": ["jpg", "jpeg", "png", "gif", "webp"] }, // Specify acceptable image file types
  });

  const files = acceptedFiles.map((file: File) => {
    return(
    <li key={file.name}>{file.name} - {formatFileSize(file.size)}</li>
  )});

  function formatFileSize(bytes: number): string {
    const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    let unitIndex = 0;
    let size = bytes;
    handleFileSelection(acceptedFiles[0])

    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }

    return `${size.toFixed(2)} ${units[unitIndex]}`;
  }

  const navigate = useNavigate();

  // Handle file selection and pass it to the calling component
  const handleFileSelection = (file: File) => {
    onImageSelected(file);
  };

  return (
    <Card borderRadius="inherit" pt="10%" h="100%" className="container">
      <Box textAlign="center" m="0 auto">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <Button
            rounded="full"
            onClick={() => navigate("/upload-new")}
            size={"lg"}
            fontWeight={"bolder"}
            px={7}
            py={8}
            colorScheme={"red"}
            bg={"#410FF8"}
            _hover={{ bg: "#3000dc" }}
          >
            Upload Picture
          </Button>
          <Text fontSize="lg" fontWeight={600} color="gray.500">
            or drop a file,
          </Text>
        </div>
        {acceptedFiles.length > 0 && (
          <aside>
            <h4>Files</h4>
            <ul>{files}</ul>
          </aside>
        )}
      </Box>
    </Card>
  );
}
