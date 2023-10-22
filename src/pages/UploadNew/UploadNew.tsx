import { Box, Button, Card, Heading } from "@chakra-ui/react";
import { ImageUploader } from "../../components";
import { useImageContext } from "../../ImageContext";

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
  const { selectedImage } = useImageContext();
  const { setSelectedImage } = useImageContext(); // Use the hook to access the context
  const handleImageSelect = (image: File) => {
    setSelectedImage(image); // Set the selected image in the context
  };
  if (selectedImage) {
    alert("somthing");
  }
  return (
    <Box
      fontFamily="Montserrat"
      h="fit-content"
      textAlign="center"
      alignItems="center"
      mb="9.5rem"
    >
      <Box m="0 auto" mt="10%">
        <Heading fontFamily="Montserrat" fontSize="xxx-large">
          {" "}
          Upload an image to Compress
        </Heading>
        <Box
          m="0 auto"
          h="20vh"
          w="40vw"
          border=" 1px dashed gainsboro"
          rounded="full"
        >
          <ImageUploader onImageSelected={handleImageSelect} />
        </Box>
      </Box>
    </Box>
  );
};

export default UploadNew;
