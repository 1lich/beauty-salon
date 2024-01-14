import { YMaps, Placemark } from "@pbe/react-yandex-maps"

import { MapContainer, StyledMap } from "./styled-Contacts"

const MapComponent = () => {
  return (
    <YMaps>
      <MapContainer>
        <StyledMap defaultState={{ center: [51.773086, 55.131687], zoom: 18 }}>
          <Placemark
            geometry={[51.773086, 55.131687]}
            properties={{
              hintContent: "Москва!",
              balloonContent: "Столица России",
            }}
          />
        </StyledMap>
      </MapContainer>
    </YMaps>
  )
}

export default MapComponent
