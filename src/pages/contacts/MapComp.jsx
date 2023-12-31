import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps"

const MapComp = () => {
  return (
    <YMaps>
      <div>
        MAAAAP
        <Map defaultState={{ center: [51.773086, 55.131687], zoom: 18 }}>
          <Placemark
            geometry={[51.773086, 55.131687]}
            properties={{
              hintContent: "Москва!",
              balloonContent: "Столица России",
            }}
          />
        </Map>
      </div>
    </YMaps>
  )
}

export default MapComp
