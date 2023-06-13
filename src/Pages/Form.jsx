import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Text,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Select
} from "@chakra-ui/react";

const Form = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Box
        w="90%"
        m="auto"
        fontFamily="Nunito, sans-serif"
        mt="5"
        color="#757E85"
      >
        <FormControl id="city">
          <FormLabel>City</FormLabel>
          <Select placeholder="Select City">
            <option>Pune</option>
          </Select>
        </FormControl>
        <br />
        <FormControl id="location">
          <FormLabel>Select Location</FormLabel>
          <Text>*for which micromarket analysis is required.</Text>
          <Select placeholder="Select...">
            <option>Khadki</option>
            <option>Pimple Saudagar</option>
            <option>Khadadi</option>
            <option>Hinjewadi</option>
          </Select>
        </FormControl>
        <br />
        <Text textAlign="center" color="blackAlpha.900" fontWeight="semibold">
          OR
        </Text>
        <br />
        <Stack direction="row" justifyContent="space-between" mb="5">
          <FormControl>
            <FormLabel>Latitude</FormLabel>
            <Input type="text" placeholder="Project Latitude" />
          </FormControl>
          <FormControl>
            <FormLabel>Longitude</FormLabel>
            <Input type="text" placeholder="Project Longitude" />
          </FormControl>
        </Stack>
        <Button onClick={() => navigate("/dashboard")} colorScheme="teal">
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Form;
