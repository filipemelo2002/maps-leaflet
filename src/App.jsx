import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import RoutingComponent from "./RoutingComponent";
import { useState } from "react";
const locations = [
  [-8.050674, -34.883229],
  [-8.118669, -34.96769],
  [-7.989409, -34.851263],
  [-7.976938, -35.032061],
];

function App() {
  const origin = [-8.054163, -34.941645];
  const [destination, setDestination] = useState([]);

  return (
    <>
      <MapContainer
        center={origin}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: 700, width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          <Marker position={origin}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        {locations.map((marker, index) => (
          <Marker position={marker} key={index} eventHandlers={{
            click: () => {
                console.log("change destination = ", marker)
                setDestination(marker)
              }
          }}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
        {
          destination.length > 0 && (
            <RoutingComponent origin={origin} destination={destination}/>            
          )
        }
      </MapContainer>
    </>
  );
}

export default App;
