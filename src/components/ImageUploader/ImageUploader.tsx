import axios from "axios";
import { useCallback, useState, useRef } from "react";
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
  prop?: string;
}

export function ImageUploader({ prop = "default value" }: ImageUploaderProps) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: any) => (
    <li key={file.path}>{file.path}</li>
  ));
  function formatFileSize(bytes: number): string {
    const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    let unitIndex = 0;
    let size = bytes;

    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }

    return `${size.toFixed(2)} ${units[unitIndex]}`;
  }
  // const fileInputRef = useRef<HTMLInputElement>(null);

 

  // let fileSize = 0;
  // if (file) {
  //   fileSize = file.size;
  // }
  const navigate = useNavigate();
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
        {acceptedFiles.length > 1 && (
          <aside>
            <h4>Files</h4>
            <ul>{files}</ul>
          </aside>
        )}
      </Box>
    </Card>
  );
}
