import { Box, Button, Card, Heading } from "@chakra-ui/react";
import { ImageUploader } from "../../components";

const UploadNew = () => {
  // const handleCompress = async () => {
  //   setIsLoading(true);
  //   if (file) {
  //     const formData = new FormData();
  //     formData.append("file", file);

  //     const response = await axios.post(
  //       `https://mologo.vercel.app/compress/${file?.type?.split("/")[1]}`,
  //       formData,
  //       {
  //         responseType: "blob",
  //       }
  //     );

  //     const compressedBlob = new Blob([response.data], {
  //       type: response.headers["content-type"],
  //     });

  //     const compressedFile = new File([compressedBlob], file.name, {
  //       type: response.headers["content-type"],
  //     });

  //     setCompressedFile(compressedFile);
  //     setIsLoading(false);
  //   }
  // };
  return (
    <Box
      fontFamily="Montserrat"
      h="100vh"
      textAlign="center"
      alignItems="center"
    >
      <Box m="0 auto" mt="10%">
        <Heading fontFamily="Montserrat" fontSize="xxx-large">
          {" "}
          Upload an image to Compress
        </Heading>
        <Box m="0 auto" h="20vh" w="40vw" border=" 1px dashed gainsboro" rounded="full">
        <ImageUploader />

        </Box>
      </Box>
    </Box>
  );
};

export default UploadNew;
