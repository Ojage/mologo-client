import axios from 'axios';
import { SetStateAction, useCallback, useState } from 'react';
import Dropzone from 'react-dropzone';
import { Helmet } from 'react-helmet';
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Spinner,
  Text,
} from '@chakra-ui/react';

import './ImageUploader.css';

export interface ImageUploaderProps {
  prop?: string;
}

export function ImageUploader({ prop = 'default value' }: ImageUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [compressedFile, setCompressedFile] = useState<File | null>(null);

  const handleDrop = useCallback(
    (acceptedFiles: SetStateAction<File | null>[]) => {
      setFile(acceptedFiles[0]);
      setCompressedFile(null);
    },
    [],
  );
  function formatFileSize(bytes: number): string {
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let unitIndex = 0;
    let size = bytes;

    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }

    return `${size.toFixed(2)} ${units[unitIndex]}`;
  }

  const handleCompress = async () => {
    setIsLoading(true);
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post(
        `https://mologo.vercel.app/compress/${file?.type?.split('/')[1]}`,
        formData,
        {
          responseType: 'blob',
        },
      );

      const compressedBlob = new Blob([response.data], {
        type: response.headers['content-type'],
      });

      const compressedFile = new File([compressedBlob], file.name, {
        type: response.headers['content-type'],
      });

      setCompressedFile(compressedFile);
      setIsLoading(false);
    }
  };
  let fileSize = 0;
  if (file) {
    fileSize = file.size;
  }
  console.log(compressedFile);
  return (
    <div className="ImageUploader">
      <Helmet>
        <title>Image Uploader</title>
      </Helmet>
      <center>
        <Box
          mt="4rem"
          h="22rem"
          borderRadius="5px"
          w="22rem"
          border="1px solid gainsboro"
          
        >
          <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {file ? (
                  <Image
                    h="22rem"
                    w="22rem"
                    objectFit="cover"
                    src={URL.createObjectURL(file)}
                    alt="Selected file"
                    className="preview-image"
                  />
                ) : (
                  <Text
                    m="9px"
                    mt="9rem"
                    textAlign="center"
                    _hover={{ cursor: 'pointer', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }}
                  >
                    Drag and drop an image file here, or click to select one
                  </Text>
                )}
              </div>
            )}
          </Dropzone>
        </Box>

        {file && (
          <Center>
            <Flex
              gap="1rem"
              p="13px"
            >
              <Button
                borderRadius="5px"
                border="1px solid"
                p="8px"
                variant="ghost"
                onClick={handleCompress}
                fontFamily="montserrat"
              >
                Compress Image
              </Button>
              {isLoading && <Spinner />}
            </Flex>
          </Center>
        )}
        {file && (
          <p>
            {file?.name} of size: {formatFileSize(fileSize)}
          </p>
        )}
        {compressedFile && (
          <div>
            <p>Compressed Image:</p>
            <a
              href={URL.createObjectURL(compressedFile)}
              download={`mologo_compressed-${file?.name}`}
            >
              <Button boxShadow="dark-lg">Download Compressed Image</Button>
            </a>
            <br />

            <Image
              h="22rem"
              objectFit="cover"
              src={URL.createObjectURL(compressedFile)}
              alt="Compressed file"
              className="preview-image"
            />
            <strong>
              Of size <u> {formatFileSize(compressedFile.size)}</u>
            </strong>
          </div>
        )}
      </center>
    </div>
  );
}
