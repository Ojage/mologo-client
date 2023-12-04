import { Box, Button, HStack, VStack, Text, useToast, Image, Heading } from "@chakra-ui/react";
import { useImageContext } from "../../ImageContext";
import { useAppSelector } from "../../assets/app/hooks";
import { RootState } from "../../store/store";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useState } from "react";
import axios from "axios";

const UploadNew = () => {
  const toast = useToast();
  const images = useAppSelector((state: RootState) => state.imageUtility.imgArr);
  const image2Compress = images[0].file;
  const [isLoading, setIsLoading] = useState(false);
  const [compressedFile, setCompressedFile] = useState<File | null>(null);
  const handleCompress = async () => {
    setIsLoading(true);
    if (image2Compress) {
      try {
        const formData = new FormData();
        formData.append("file", image2Compress);

        const response = await axios.post(
          `https://mologo.vercel.app/compress/${image2Compress?.type?.split("/")[1]}`,
          formData,
          {
            responseType: "blob",
          }
        );

        const compressedBlob = new Blob([response.data], {
          type: response.headers["content-type"],
        });

        const compressedFile = new File([compressedBlob], image2Compress.name, {
          type: response.headers["content-type"],
        });

        setCompressedFile(compressedFile);
        setIsLoading(false);
        toast({
          title: "Compression Successfull",
          description: "Your image has been compressed successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        // Display error toast notification
        toast({
          title: "Compression Failed",
          description: "An error occurred while compressing the image.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });

        setIsLoading(false);
      }
    }
  };
  const downloadFile = () => {
    if (compressedFile) {
      const url = URL.createObjectURL(compressedFile);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", compressedFile?.name || "compressed_image");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  // Function to format file size
  const formatFileSize = (bytes: number): string => {
    const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    let size = bytes;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }

    return `${size.toFixed(2)} ${units[unitIndex]}`;
  };

  return (
    <Box fontFamily="Montserrat" textAlign="center" alignItems="center" mb="9.5rem">
      <VStack gap="2rem">
        <HStack gap="2rem" m="0 auto" mt="10%" p="1rem" w="fit-content">
          <Box h="fit-content" w="fit-content" p="1rem" border=" 1px dashed gainsboro" rounded="md">
            <Box m="0 auto" h="50vh" w="40vw">
              {images.length > 0 && (
                <Image rounded="md" h="100%" w="100%" objectFit="cover" src={URL.createObjectURL(image2Compress)} alt="Uploaded" />
              )}
            </Box>
          </Box>
          {images.length > 0 && (
            <VStack>
              <Text>{formatFileSize(image2Compress.size)}</Text>
              <Button isLoading={isLoading} loadingText="Compressing..." onClick={() => handleCompress()} color="white" className="button-86">
                Compress
              </Button>
            </VStack>
          )}
        </HStack>
        {
          compressedFile &&
          (<HStack gap="2rem" p="1rem" w="fit-content">
            <Box h="fit-content" w="fit-content" p="1rem" border=" 1px dashed gainsboro" rounded="md">
              <Box m="0 auto" h="50vh" w="40vw">
                <Image rounded="md" h="100%" w="100%" objectFit="cover" src={URL.createObjectURL(compressedFile)} alt="Uploaded" />
              </Box>
            </Box>
            <VStack>
              <Text>{formatFileSize(compressedFile.size)}</Text>
              <Button onClick={() => downloadFile()}
                color="white" className="button-86">
                Download
              </Button>
            </VStack>
          </HStack>)
        }
      </VStack>

    </Box>
  );
};

export default UploadNew;
