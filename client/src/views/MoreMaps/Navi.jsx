import React, { useState } from 'react'
import ReactMapGL, { Marker, Layer, Source } from 'react-map-gl';
import Icon from './Icon'
import places from './data'
import geo from './map.geojson'

console.log(places)
//const data = places[0]
export default function Navi() {
    const [viewport, setViewport] = useState({
        latitude: 44.436115495348205,
        longitude: 26.088031664318496,
        zoom: 12,
        width: '100%',
        height: '100%'
    })

     const clusterLayer = {
        id: 'clusters',
        type: 'circle',
        source: 'earthquakes',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 1, '#f28cb1', 3, '#f1f075'],
          'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
        }
      };
      
       const clusterCountLayer = {
        id: 'cluster-count',
        type: 'symbol',
        source: 'earthquakes',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12
        }
      };
      
       const unclusteredPointLayer = {
        id: 'unclustered-point',
        type: 'circle',
        source: 'earthquakes',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': '#11b4da',
          'circle-radius': 4,
          'circle-stroke-width': 1,
          'circle-stroke-color': '#fff'
        }
      };
    

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

                <Icon data={places} />
                <Marker
                    styles={{ "width": "20px", "height": "20px" }}
                    latitude={52.20876739031568}
                    longitude={20.94590095676287}
                >
                    {/* <div style={{color: "red"}}>You are here</div> */}
                    <Source
                        id="earthquakes"
                        type="geojson"
                        data = {geo}
                        cluster={true}
                        clusterMaxZoom={14}
                        clusterRadius={50}
                    >
                <Layer {...clusterLayer} />
                <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
                    </Source>
                </Marker>
            </ReactMapGL>
        </>
    )
}
