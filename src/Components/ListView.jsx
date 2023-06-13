import React from "react";
import { Data } from "../Components/Data";
import { Box, Text } from "@chakra-ui/react";

const ListView = () => {
  return (
    <Box>
      {Data.map((info) => (
        <Box border="1px solid gray" p="3">
          <Text>
            <b>City:</b> {info.city}
          </Text>
          <Text>
            <b>Location:</b> {info.location}
          </Text>
          <Text>
            <b>Project Name:</b> {info.Project_name}
          </Text>
          <b>Coordinates:</b> {info.Coordinates[0]}, {info.Coordinates[1]}
        </Box>
      ))}

      <br />
    </Box>
  );
};

export default ListView;
