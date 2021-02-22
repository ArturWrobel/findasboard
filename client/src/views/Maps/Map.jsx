import React, { Component, useState } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Popup, CircleMarker, useMapEvents } from 'react-leaflet'
import { Grid, Typography, Paper } from "@material-ui/core/"

import Marker from 'react-leaflet-enhanced-marker'
import ZDJ from './logo.png'

const localisation = {
    'Paris': {
        position: [48.83337461170715, 2.293775616200383],
        address: 'Paseo Club Deportivo 12'

    },
    'Warsaw': {
        position: [52.20876739031568, 20.94590095676287],
        address: 'Warszawa aleje'
    },
    'Madrid': {
        position: [40.41997355199679, -3.8004563630874704],
        address: 'Madryckie aleje'
    }
}

/* console.log(newData[0]['position'])
console.log(newData[0]['city']) */
console.log(localisation.Paris.position)
console.log('---------------------------------')


function LocationMarker() {
    const [pos, setPos] = useState(null)
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPos([48.83337461170715, 2.293775616200383])
            map.flyTo([48.83337461170715, 2.293775616200383], map.getZoom())
        },
    })

    return pos === null ? null : (
        <Marker position={pos}
            icon={<img src={ZDJ} style={{ width: '50px' }} />}
        >
            <Popup>{localisation.Paris.address}</Popup>
        </Marker>
    )
}

export default class Map extends Component {
    render() {
        
        /* var myIcon = L.icon({
            iconUrl: require('./logo.png'),
            iconSize: [40, 40],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76]
        }); */
        const position = [48.82250531045911, 2.3389814659568855]
        const position1 = [40.420006223968684, -3.8008962453680466]

        return (
            <>
    <Typography variant="h6">
{/* cccc */}
    </Typography>
                <MapContainer style={{
                    height: '100%',
                    width: '100%'
                }} center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        position={position}
                        icon={<img src={ZDJ} style={{ width: '50px' }} />}
                    >
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <CircleMarker
                        center={[51.515, -0.15]}
                        radius={50}
                        fillOpacity={0.5}
                    />
                    <LocationMarker />
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