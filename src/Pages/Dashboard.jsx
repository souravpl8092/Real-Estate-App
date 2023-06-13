import React, { useState } from "react";
import { Box, Text, Flex, Avatar } from "@chakra-ui/react";
import { CiMap } from "react-icons/ci";
import { BsListColumns } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ListView from "../Components/ListView";
import MapView from "../Components/MapView";

const Dashboard = () => {
  const [view, setView] = useState("mapview");
  const navigate = useNavigate();
  return (
    <Box fontFamily="Nunito, sans-serif" color="#757E85" m="auto">
      <Flex justifyContent="space-between">
        <Box w="20%" pl="5">
          <Box fontSize="20px" fontWeight="bold" lineHeight="2" pl="5">
            View Location
          </Box>
          <br />
          <br />
          <br />
          <Flex
            gap="5"
            p="2"
            onClick={() => setView("mapview")}
            _hover={{
              background: "gray.200"
            }}
          >
            <CiMap fontSize="28px" />
            <Text fontSize="20px">Map View</Text>
          </Flex>
          <br />
          <Flex
            gap="5"
            p="2"
            onClick={() => setView("listview")}
            _hover={{
              background: "gray.200"
            }}
          >
            <BsListColumns fontSize="28px" />
            <Text fontSize="20px">List View</Text>
          </Flex>
          <br />

          <Flex
            gap="5"
            p="2"
            onClick={() => navigate("/")}
            _hover={{
              background: "gray.200"
            }}
          >
            <FaHome fontSize="28px" />
            <Text fontSize="20px">Back to Home</Text>
          </Flex>
        </Box>
        <Box w="80%" m="auto">
          <Flex bg="#011627" justifyContent="space-between" p="2">
            <Text color="gray.400" fontSize="20px" lineHeight="2.5">
              Dashboard
            </Text>
            <Avatar
              size="md"
              name="Christian Nwamba"
              src="https://i.pinimg.com/564x/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.jpg"
            />
          </Flex>
          <Box w="100%" h="90%">
            {view === "mapview" ? <MapView /> : <ListView />}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
