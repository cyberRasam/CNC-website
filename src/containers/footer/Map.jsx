import React from 'react';
import googleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import { GoogleMap } from '@react-google-maps/api';

function Map({ location, zoomLevel }) {
  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  );
  return (
    <div className="map">
      <h2 className="map-h2">Visit us at</h2>

      <div className="google-map">
        <googleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD9OBOEPRHBuD5L19fNz5Fw-JobFfSQzE8' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </googleMapReact>
      </div>
    </div>
  );
}

export default Map;
