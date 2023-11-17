import L from "leaflet";
import "leaflet-routing-machine";

export const calculateRouteDistance = (origin, destination) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(origin[0], origin[1]),
      L.latLng(destination[0], destination[1])
    ]
  });
 
  instance.on('routesfound', (e) => {
    const [route] = e.routes;
    console.log("ROUTE",route)
    const {summary} = route;
    
    console.log({
      distance: summary.totalDistance / 1000,
      time: Math.round(summary.totalTime % 3600 / 60)
    })
  })
}