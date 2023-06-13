import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import { Data } from "../Components/Data";
import { Box } from "@chakra-ui/react";

const MapView = () => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = Data.map((ev, index) => {
    return (
      <LocationMarker
        key={index}
        lat={ev.Coordinates[0]}
        lng={ev.Coordinates[1]}
        onClick={() =>
          setLocationInfo({
            city: ev.city,
            location: ev.location,
            lat: ev.Coordinates[0],
            lng: ev.Coordinates[1],
            Project_name: ev.Project_name
          })
        }
      />
    );
  });

  return (
    <Box w="80vw" h="91vh" position="relative">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBpOTqKJ2WNT9z58Wiej2-4wMpyLGnKAks" }}
        defaultCenter={{
          lat: 18.516726,
          lng: 73.856255
        }}
        defaultZoom={12}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </Box>
  );
};

export default MapView;
