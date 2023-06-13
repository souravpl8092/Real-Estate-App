import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { Box, Button, Text, Input, Stack, useToast } from "@chakra-ui/react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [mob, setMob] = useState("");
  const toast = useToast();

  const handleClick = () => {
    if (mob !== "" && mob.length === 10) {
      navigate("/form");
    } else {
      toast({
        title: "Please enter 10 digit mobile number",
        status: "warning",
        duration: 2500,
        isClosable: true,
        position: "bottom"
      });
    }
  };

  return (
    <>
      <Navbar />
      <Box
        h="390px"
        w="430.962px"
        p="24px 40px"
        border="1px solid lightgray"
        bg="#FFFFFF"
        m="auto"
        mt="4%"
        boxShadow="lg"
        fontFamily="Nunito, sans-serif"
      >
        <Text fontSize="20px" fontWeight="500" lineHeight="24px" mb="2">
          Welcome to Login/Signup
        </Text>

        <Text fontSize="16px" lineHeight="24px" mb="5">
          Please enter details
        </Text>

        <Input
          type="number"
          onChange={(e) => setMob(e.target.value)}
          value={mob}
          placeholder="10 digit phone number"
          fontSize="16px"
          lineHeight="24px"
          mb="4"
        />
        <Button onClick={handleClick} colorScheme="blue" w="full">
          Continue
        </Button>

        <br />
        <br />
        <Stack direction="row" justifyContent="space-between" mb="5">
          <Button colorScheme="red" leftIcon={<FaGoogle />} w="50%">
            Google
          </Button>
          <Button
            colorScheme="blue"
            bg="#214ECC"
            leftIcon={<FaFacebook />}
            w="50%"
          >
            Facebook
          </Button>
        </Stack>
        <Text color="#757E85" fontSize="14px" lineHeight="21px">
          <span style={{ fontWeight: "bold", color: "black" }}>Note: </span>
          If you have entered an Email Id / Phone No. which is not registered on
          Sigma Value, the app will automatically go for Signup.
        </Text>
        <Text textColor="#FF3562" textAlign="end" mt="4%">
          Admin Login
        </Text>
      </Box>
    </>
  );
};

export default Login;
