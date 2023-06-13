import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Flex justifyContent="space-between" bg="#bed4e5" w="100%" p="4">
      <Flex gap="4" w="60%" justifyContent="space-around">
        <Box
          fontFamily="Nunito, sans-serif"
          fontSize="18px"
          color="#717d89"
          lineHeight="49.2px"
          onClick={() => navigate("/")}
          cursor="pointer"
          _hover={{
            color: "red"
          }}
        >
          Home
        </Box>
        <Box
          fontFamily="Nunito, sans-serif"
          fontSize="18px"
          color="#717d89"
          lineHeight="49.2px"
          cursor="pointer"
          _hover={{
            color: "red"
          }}
        >
          Our Product
        </Box>
        <Box
          fontFamily="Nunito, sans-serif"
          fontSize="18px"
          color="#717d89"
          lineHeight="49.2px"
          cursor="pointer"
          _hover={{
            color: "red"
          }}
        >
          About Us
        </Box>
        <Box
          fontFamily="Nunito, sans-serif"
          fontSize="18px"
          color="#717d89"
          lineHeight="49.2px"
          cursor="pointer"
          _hover={{
            color: "red"
          }}
        >
          Contact Us
        </Box>
      </Flex>

      <Button
        onClick={() => navigate("/login")}
        fontFamily="DM Sans, sans-serif"
        fontSize="18px"
        fontWeight="semibold"
        cursor="pointer"
        variant="outline"
        colorScheme="red"
        borderRadius="full"
        border="2px"
        p="15px 30px"
        h="52.4px"
        w="107.062px"
        _hover={{
          background: "#FF3562",
          color: "whiteAlpha.900",
          p: "5",
          border: "1px"
        }}
      >
        Log In
      </Button>
    </Flex>
  );
};

export default Navbar;
