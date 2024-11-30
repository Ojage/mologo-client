import { Box, Button, VStack, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer/Footer';
import CTAWithVid from '../components/CTA/CTAWithVid';
import FeaturesSection from '../components/Features/Features';
import Testimonials from '../components/Testimonials/Testimonials';

const Landing = () => {
 return (
   <VStack w="100%"  alignItems="center" overflowX="hidden">
    <Helmet>
        <title>KindPic - Remove Backgrounds and Compress Images Easily (jpg/png/webp) Online for Free</title>
        <meta name="description" content="Compress your images online for free with this simple and easy-to-use image uploader. Drag and drop an image file, compress it, and download it in just a few clicks." />
        <meta name="keywords" content="compress image, image uploader, image compression, image compressor, free image compression, jpg, png, webp" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8617916630762602"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
    <CTAWithVid />
    <FeaturesSection />
    <Testimonials />
    {/* <Box minW="50%" h="40vh" pl="3rem">
        <Box maxW="30vw" pt="4rem">
        <Box fontFamily="montserrat" w="fit-content" p="5" border="1px solid" borderRadius="3" bg="#fff" color="black" fontSize="12px">
            Free up Weight </Box>
        <Text mt={0} as="h1" fontFamily="'Righteous', cursive" fontSize='36px'>
            kindpic Photos
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
    </Box> */}
   </VStack>
 )
}

export default Landing;