
import Navbar from "../../components/Navbar/Navbar"

const LandingHeader = () => {
  return (
    <Navbar />
    // <Box
    //   fontFamily="'Righteous', cursive"
    //   as="nav"
    //   p="8"
    //   className="Landing-header"
    //   w="100%"
    //   boxShadow=" rgba(17, 17, 26, 0.1) 0px 1px 0px"
    //   maxH="100px"
    // >
    //   <HStack pl="34" h="6vh" gap={22}>
    //     <Box as={Link} to="/" h="50px">
    //       <Image borderRadius="50%" src={logo} alt="logo-of-mologo" h="100%" />
    //     </Box>
    //     <HStack gap={8}>
    //       {navRoutes.map((navRoute) => {
    //         return (
    //           <Box as={Link} to={navRoute.path} textDecor="none" color="primary">
    //             {navRoute.name}
    //           </Box>
    //         );
    //       })}
    //     </HStack>
    //   </HStack>
    // </Box>
  );
};

export default LandingHeader;
