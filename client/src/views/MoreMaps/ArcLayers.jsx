import React, { useState } from 'react'
import DeckGL from '@deck.gl/react';
import { ArcLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';


export default function ArcLayers({ data }) {
    const [viewport, setViewport] = useState({
        latitude: 10.20876739031568,
        longitude: -1.94590095676287,
        zoom:2,
        pitch: 50,
        bearing: 180
    })

    const layer = new ArcLayer({
        id: 'arc-layer',
        data,
        pickable: true,
        getWidth: 2,
        getSourcePosition: d => d.from.coordinates,
        getTargetPosition: d => d.to.coordinates,
        getSourceColor: d => [Math.sqrt(d.inbound), 140, 0],
        getTargetColor: d => [Math.sqrt(d.outbound), 140, 0],
    });

    return <DeckGL viewState={viewport}
        onViewportChange={viewport => {
            setViewport(viewport)
        }}
        layers={[layer]}
        getTooltip={({ object }) => object && `${object.from.name} to ${object.to.name}`}>
        <StaticMap mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
                mapStyle="mapbox://styles/artmanfx/cklmdyje23bdk17qok50yreh2"
                />
    </DeckGL>;
}