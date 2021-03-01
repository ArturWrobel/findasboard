import React, { useState } from 'react'
import DeckGL from '@deck.gl/react';
import { ArcLayer } from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';


export default function ArcLayers({ data }) {
    const [viewport, setViewport] = useState({
        longitude: -100,
    latitude: 40.7,
    zoom: 3,
    maxZoom: 15,
    pitch: 30,
    bearing: 30
    })

    const layer = new ArcLayer({
        id: 'arc-layer',
        data,
        pickable: true,
        getWidth: 4,
        getSourcePosition: d => d.from.coordinates,
        getTargetPosition: d => d.to.coordinates,
        getSourceColor: d => [Math.sqrt(d.inbound), 140, 0],
        getTargetColor: d => [Math.sqrt(d.outbound), 140, 0],
    });

    return <DeckGL viewState={viewport}
    onViewportChange={viewport => {
        setViewport(viewport)}}
        layers={[layer]}
        getTooltip={({ object }) => object && `${object.from.name} to ${object.to.name}`}>
            <StaticMap mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} />
        </DeckGL>;
}