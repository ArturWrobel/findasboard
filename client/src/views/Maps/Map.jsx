import React, { Component } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Popup, CircleMarker } from 'react-leaflet'
import Marker from 'react-leaflet-enhanced-marker'
import ZDJ from './logo.png'

/* function GetIcon() {
    return L.icon ({
        iconUrl: ('./logo.png'),
        iconSize: [40, 40]
    })
} */

export default class Map extends Component {
    render() {
        
        /* var myIcon = L.icon({
            iconUrl: require('./logo.png'),
            iconSize: [40, 40],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76]
        }); */
        const position = [51.505, -0.09]

        return (
            <>
                <MapContainer style={{ height: '100%', width: '100vh' }} center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        position={position}
                        icon={<img src= {ZDJ} style={{width:'50px'}}/>}
                    >
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <CircleMarker
    center={[51.505, -0.09]}
    radius={50 }
  fillOpacity={0.5}
  />
                </MapContainer>
            </>
        )
    }
}

class ReactComponent extends Component {
    render() {
      const markerStyle = {
        backgroundColor: "blue",
        color: "white",
        display: "flex",
        justifyContent: "center",
        width: "50px",
        height: "50px",
        borderRadius: "50px",
        alignItems: "center"
      };
      return <div style={markerStyle}>Marker</div>;
    }
  }