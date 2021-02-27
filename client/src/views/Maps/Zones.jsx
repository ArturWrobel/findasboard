import React from 'react'
import { MapContainer, TileLayer, Popup, Rectangle, Circle, CircleMarker, Polygon, Tooltip } from 'react-leaflet'

const center = [52.215, 20.945858041418422]
const center1 = [52.23, 21.028041418422]
const center2 = [52.20, 21.008041418422]



/* 52.20876739031583, 20.945858041418422 */

const polygon = [
    [52.205, 20.93],
    [52.2, 20.95],
    [52.21, 20.96],
]

const rectangle = [
    [52.22, 20.89],
    [52.21, 20.91],
]

const rectangle1 = [
    [52.23, 20.99],
    [52.2, 20.97],
]

const fillBlueOptions = { fillColor: 'blue' }
const blackOptions = { color: 'black' }
const purpleOptions = { color: 'purple' }
const redOptions = { color: 'red' }
const marronOptions = { color: 'marron' }

export default function Zones() {
    return (
        <>
            <MapContainer center={center} style={{ height: '100%', width: '100%' }} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Circle center={center} pathOptions={fillBlueOptions} radius={200}>
                    <Tooltip>Zone I</Tooltip>
                </Circle>
                <Circle center={center1} pathOptions={redOptions} radius={200}>
                    <Tooltip>Zone II</Tooltip>
                </Circle>
                <Circle center={center2} pathOptions={purpleOptions} radius={200}>
                    <Tooltip>Zone III</Tooltip>
                </Circle>
                <CircleMarker center={[52.215, 21.018041418422]} pathOptions={marronOptions} radius={40}>
                    <Popup>Popup in CircleMarker</Popup>
                    <Tooltip>Prospects: 50</Tooltip>
                </CircleMarker>
                <CircleMarker center={[52.235, 20.908041418422]} pathOptions={purpleOptions} radius={40}>
                <Tooltip>Prospects :100</Tooltip>
                </CircleMarker>
                <Polygon pathOptions={purpleOptions} positions={polygon}>
                    <Tooltip>Zone V</Tooltip>
                </Polygon>
                <Rectangle bounds={rectangle} pathOptions={blackOptions}>
                    <Tooltip>To investigate</Tooltip>
                </Rectangle>
                <Rectangle bounds={rectangle1} pathOptions={redOptions}>
                    <Tooltip>Prospects: 200</Tooltip>
                </Rectangle>
            </MapContainer>
        </>
    )
}
