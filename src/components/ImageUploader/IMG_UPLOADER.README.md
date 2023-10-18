{/* <Flex>
        <Box>
          <Box
            h="40vh"
            w="100%"
            border="0.5px inset white"
            backgroundImage={`url(${bg})`}
            backgroundSize="cover"
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
                    <Box>
                      <Text
                        m="9px"
                        mt="9rem"
                        color="white"
                        textAlign="center"
                        _hover={{
                          cursor: 'pointer',
                          boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
                        }}
                      >
                        Drag and drop an image file here, or click to select one
                      </Text>
                    </Box>
                  )}
                </div>
              )}
            </Dropzone>
          </Box>
          {file && (
            <Center>
              <Flex gap="1rem" p="13px">
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
                {isLoading && <Spinner borderRadius="5px" border="1px solid" p="8px" />}
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
      </Flex> */}