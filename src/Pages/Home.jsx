import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Text textAlign="center" fontSize="40px" mt="5">
          Welcome to Real Estate App
        </Text>
      </Box>
    </>
  );
};

export default Home;
