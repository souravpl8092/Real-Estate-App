import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import { Box } from "@chakra-ui/react";

const LocationMarker = ({ onClick }) => {
  return (
    <Box fontSize="2rem" color="red" onClick={onClick}>
      <Icon icon={locationIcon} className="location-icon" />
    </Box>
  );
};

export default LocationMarker;
