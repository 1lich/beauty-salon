import { useEffect } from "react"

const MapComponent = () => {
  useEffect(() => {
    const loadMap = async () => {
      const ymaps = await window.ymaps
      if (ymaps) {
        const map = new ymaps.Map("map", {
          center: [55.751574, 37.573856],
          zoom: 9,
        })

        const placemark = new ymaps.Placemark([55.751574, 37.573856])
        map.geoObjects.add(placemark)
      }
    }

    loadMap()
  }, [])

  return <div id="map" style={{ width: "100%", height: "400px" }} />
}

export default MapComponent
