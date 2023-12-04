import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Button, Card, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../assets/app/hooks";
import { addImage } from "../../features/imageUtilitySlice";

interface AcceptedFile extends File {
  preview: string;
}

const ImageUploader = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<AcceptedFile | null>(null);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": ["jpg", "jpeg", "png", "gif", "webp"] },
    maxFiles: 1,
  });

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0] as AcceptedFile;
      file.preview = URL.createObjectURL(file);
      setSelectedImage(file);
      dispatch(addImage(file));
      navigate("/upload-new");
    }
  }, [acceptedFiles, dispatch, navigate]);

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
    <Card borderRadius="inherit" pt="10%" h="100%" className="container">
      <Box textAlign="center" m="0 auto">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <Button size="xxl" fontWeight="bolder" px={7} py={8} className="button-86" color="white">
            Upload Picture
          </Button>
          <Text fontSize="lg" fontWeight={600} color="gray.500">
            or drop a file
          </Text>
        </div>
        {selectedImage && (
          <Box display="flex" flexDirection="column" alignItems="center">
            <h4>Files</h4>
            <Image src={selectedImage.preview} alt="Uploaded" />
            <Text fontSize="sm" color="gray.600">
              {selectedImage.name} - {formatFileSize(selectedImage.size)}
            </Text>
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default ImageUploader;
