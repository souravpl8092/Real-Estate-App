import { Box, Text } from "@chakra-ui/react";

const LocationInfoBox = ({ info }) => {
  return (
    <Box className="location-info">
      <Text>Location Info</Text>
      <br />
      <Text>Project Name: {info.Project_name}</Text>
      <Text>Location: {info.location}</Text>
      <Text>City: {info.city}</Text>
      <Text>Latitude : {info.lat}</Text>
      <Text>Longitude: {info.lng}</Text>
    </Box>
  );
};

export default LocationInfoBox;
