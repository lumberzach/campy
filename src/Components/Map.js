import GoogleMapReact from "google-map-react"
import LocationMarker from "./LocationMarker"
import FireInfo from './FireInfo'
import { useState } from 'react'
require("dotenv").config()


const Map = ({ fireData, center, zoom }) => {
    const [fireLocationInfo, setFireLocationInfo] = useState(null)

    const fireMarkers = fireData.map(ev => {
        if (ev.categories[0].id === 8) {
            return <LocationMarker 
            key={ev.id}
            lat={ev.geometries[0].coordinates[1]} 
            lng={ev.geometries[0].coordinates[0]} 
            showInfo={() => setFireLocationInfo({id: ev.id, title: ev.title})} />
        }
        return null
    })



    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                

                {fireMarkers}
            </GoogleMapReact>
            {fireLocationInfo && <FireInfo fireInfo={fireLocationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 33.4484,
        lng: -112.0740
    }, 
    zoom: 6
}

export default Map
