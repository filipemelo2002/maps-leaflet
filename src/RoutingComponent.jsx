import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
  const {origin, destination} = props;
  console.log("destination = ", destination)
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(origin[0], origin[1]),
      L.latLng(destination[0], destination[1])
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  return instance;
};

const RoutingMachine = (props) => {
  const {origin, destination} = props;
  const Route = createControlComponent(createRoutineMachineLayer)

  return <Route origin={origin} destination={destination} />
};



export default RoutingMachine;