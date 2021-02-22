import React, { useState } from 'react'
import { MapContainer, TileLayer, Popup, useMapEvents } from 'react-leaflet'
import location from './data'
import Marker from 'react-leaflet-enhanced-marker'
import ZDJ from './logo.png'

export default function Map(props) {
    const position = [52.20876739031568, 20.94590095676287]
    var address = ("Aleje Jerozolimskie 160")

    function setLocation(loc) {
        let out
        switch (loc) {
            case 'Paris':
                out = location[0].position
                address = (location[0].address)
                break
            case 'Madrid':
                out = location[2].position
                address = (location[2].address)
                break
            case 'Brussels':
                out = location[3].position
                address = (location[3].address)
                break
            case 'Cairo':
                out = location[5].position
                address = (location[5].address)
                break
            case 'Bucharest':
                out = location[4].position
                address = (location[4].address)
                break
            case 'Bratislava':
                out = location[6].position
                address = (location[6].address)
                break
            case 'Tunis':
                out = location[7].position
                address = (location[7].address)
                break
            case 'Warsaw':
                out = location[1].position
                address = (location[1].address)
                break
            default:
                out = [52.20876739031568, 20.94590095676287]
                break
        }
        return out
    }

    function LocationMarker() {
        const [pos, setPos] = useState(null)
        const map = useMapEvents({
            mouseover() {
                map.locate()
            },
            locationfound(e) {
                setPos(setLocation(props.city))
                map.flyTo(setLocation(props.city), map.getZoom())
            },
        })

        return pos === null ? null : (
            <Marker position={pos}
                icon={<img src={ZDJ} alt ='logo' style={{ width: '50px' }} />}
            >
                <Popup>{address}</Popup>
            </Marker>
        )
    }

    return (
        <>

            <MapContainer style={{ height: '100%', width: '100%' }} center={position} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={position}
                    icon={<img src={ZDJ} alt ='logo' style={{ width: '50px' }} />}
                >
                    <Popup>
                    {location[1].address}
                    </Popup>
                </Marker>
                <LocationMarker />
            </MapContainer>
        </>
    )
}