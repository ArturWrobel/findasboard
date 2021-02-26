import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'

export default function Map() {
    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        zoom: 10,
        width: '100vw',
        height: '100vh'
    })
    return (
        <>
            <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            /* mapStyle="mapbox://styles/leighhalliday/cjufmjn1r2kic1fl9wxg7u1l4" */
            onViewportChange={viewport => {
                setViewport(viewport);
            }}
            >
                markers
            </ReactMapGL>
        </>
    )
}
