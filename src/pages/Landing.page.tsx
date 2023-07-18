import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { ImageUploader } from '../components';

const Landing = () => {
 return (
   <HStack w="100%"  alignItems="center">
    <Box minW="50%" h="40vh" pl="3rem">
        <Box maxW="30vw" pt="4rem">
        <Box fontFamily="montserrat" w="fit-content" p="5" border="1px solid" borderRadius="3" bg="#fff" color="black" fontSize="12px">
            Free up Weight </Box>
        <Text mt={0} as="h1" fontFamily="'Righteous', cursive" fontSize='36px'>
            Mologo Photos
        </Text>
        <Text>Compress your images online for free with this simple and easy-to-use
        image uploader.</Text>
        <Button mt="18" fontFamily="montserrat" p="8" border="none" borderRadius="3" bg="#3d52f3" color="white" size="sm" _hover={{bg: "#05179e", cursor: "pointer"}} _active={{bg: "#05179e"}}>
          See our Product
        </Button>
        </Box>
        
    </Box>
    <Box maxW="50%">
    <ImageUploader />
    </Box>
   </HStack>
 )
}

export default Landing;