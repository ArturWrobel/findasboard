import React, { useState } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl';
import Icon from './Icon'
import places from './data'

console.log(places)
//const data = places[0]
export default function Navi() {
    const [viewport, setViewport] = useState({
        latitude: 44.451115495348205,
        longitude: 26.088031664318496,
        zoom: 12,
        width: '100%',
        height: '100%'
    })

    return (
        <>
            <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/artmanfx/cklqm6z7q7din17ms453ji94u"

            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={viewport => {
                setViewport(viewport);
            }}
            >
                
                    <Icon data={places}/>

                <Marker
                styles= {{ "width": "20px", "height": "20px"}}
                latitude = {52.20876739031568}
                longitude = {20.94590095676287}
                >
                    {/* <div style={{color: "red"}}>You are here</div> */}
                </Marker>
            </ReactMapGL>
        </>
    )
}
