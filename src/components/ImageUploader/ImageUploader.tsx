import axios from 'axios';
import { SetStateAction, useCallback, useState } from 'react';
import Dropzone from 'react-dropzone';
import { Helmet } from 'react-helmet';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Link,
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
      <Text as="h1">Mologo Image Compressor</Text>
      <Text>
        Compress your images online for free with this simple and easy-to-use
        image uploader. Drag and drop an image file, compress it, and download
        it in just a few clicks.
      </Text>
      <Text>
        For your <i>jpg, png and webp images</i>
      </Text>
      <Helmet>
        <title>
          Mologo Image Compressor - compress your images(jpg/png/png/webp)
          online for free
        </title>
        <meta
          name="description"
          content="Compress your images online for free with this simple and easy-to-use image uploader. Drag and drop an image file, compress it, and download it in just a few clicks."
        ></meta>
        <meta
          name="keywords"
          content="compress image, image uploader, image compression, image compressor, free image compression, jpg, png, webp"
        ></meta>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8617916630762602"
     crossOrigin="anonymous"></script>
      </Helmet>
      <Center>
        <Flex mt="4rem">
          <Box>
            <Box
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
                        borderRadius="5px"
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
                        _hover={{
                          cursor: 'pointer',
                          boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
                        }}
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
                    _hover={{
                      cursor: 'pointer',
                      boxShadow:
                        'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
                    }}
                    variant="ghost"
                    onClick={handleCompress}
                    fontFamily="montserrat"
                  >
                    Compress Image
                  </Button>
                  {isLoading && (
                    <Spinner
                      borderRadius="5px"
                      border="1px solid"
                      p="8px"
                    />
                  )}
                </Flex>
              </Center>
            )}
            {file && (
              <p>
                {file?.name} of size: {formatFileSize(fileSize)}
              </p>
            )}
          </Box>
          {compressedFile && (
            <Container>
              <Image
                h="22rem"
                objectFit="cover"
                src={URL.createObjectURL(compressedFile)}
                borderRadius="5px"
                alt="Compressed file"
                className="preview-image"
              />
              <p>Compressed Image:</p>
              <Link
                textDecor="none"
                _hover={{ cursor: 'pointer' }}
                href={URL.createObjectURL(compressedFile)}
                download={`mologo_compressed-${file?.name}`}
              >
                <Button
                  borderRadius="5px"
                  border="1px solid"
                  p="8px"
                  variant="ghost"
                  fontFamily="montserrat"
                  _hover={{
                    cursor: 'pointer',
                    boxShadow:
                      'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
                  }}
                >
                  Download Compressed Image
                </Button>
              </Link>
              <Text>
                Of size <u> {formatFileSize(compressedFile.size)}</u>
              </Text>
              <br />
            </Container>
          )}
        </Flex>
      </Center>
      <Flex
        justifyContent="space-between"
        w="100vw"
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        alignItems="center"
      >
        <Text
          as={Link}
          textDecor="none"
          color="grey"
          href="#"
          ml="2rem"
        >
          Mologo
        </Text>{' '}
        <Link
          m="2rem"
          textDecor="none"
          mr="2rem"
          href="https://www.buymeacoffee.com/salathielojage"
        >
          <Button
            border="1px solid"
            p="8px"
            variant="ghost"
            fontFamily="montserrat"
            borderRadius={6}
            _hover={{
              cursor: 'pointer',
              boxShadow:
                'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
            }}
          >
            You can buy me Eru here!
          </Button>
        </Link>
      </Flex>
    </div>
  );
}
