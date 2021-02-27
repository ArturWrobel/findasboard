import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Icon from './Icon'
import places from './data'

console.log(places)
//const data = places[0]
export default function Map() {
    const [viewport, setViewport] = useState({
        latitude: 20.20876739031568,
        longitude: 20.94590095676287,
        zoom: 2,
        width: '100%',
        height: '100%'
    })

    return (
        <>
            <ReactMapGL
                {...viewport}
                mapStyle="mapbox://styles/artmanfx/cklmdyje23bdk17qok50yreh2"
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >

                <Icon data={places} />

                <Marker
                    styles={{ "width": "20px", "height": "20px" }}
                    latitude={52.20876739031568}
                    longitude={20.94590095676287}
                >
                    {/* <div style={{color: "red"}}>You are here</div> */}
                </Marker>
            </ReactMapGL>
        </>
    )
}
