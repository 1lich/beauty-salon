import { createDomain } from "effector"
import axios from "axios"
import axios from "axios"
const commonDomain = createDomain("commonDomain")

export const getPriceListEvent = commonDomain.createEvent("getPriceListEvent")
export const priceListStore = commonDomain.createStore([])
export const getPriceListFx = commonDomain.createEffect(async () => {
  const getPriceList = await axios
    .get("http://192.168.31.131:5000/api/data")
    .then((response) => {
      console.log("received from express", response.data)
      return response.data
    })
    .catch((error) => {
      console.error(error)
    })

  return getPriceList
})

export const getStaffListEvent = commonDomain.createEvent("getStaffListEvent")
export const staffListStore = commonDomain.createStore([])
export const getStaffListFx = commonDomain.createEffect(async () => {
  const getStaffList = await axios
    .get("http://192.168.31.131:5000/api/staff")
    .then((response) => {
      console.log("received from express", response.data)
      return response.data
    })
    .catch((error) => {
      console.error(error)
    })

  return getStaffList
})

staffListStore.on(getStaffListFx.done, (_, payload) => payload)
staffListStore.watch((data) => console.log("data in store", data.result))
getStaffListFx.doneData.watch((data) => console.log("received data:", data))
getStaffListFx()

priceListStore.on(getPriceListFx.done, (_, payload) => payload)
priceListStore.watch((data) => console.log("data in store", data.result))
getPriceListFx.doneData.watch((data) => console.log("received data:", data))
getPriceListFx()
priceListStore.on(getPriceListFx.done, (_, payload) => payload)
priceListStore.watch((data) => console.log("data in store", data.result))
getPriceListFx.doneData.watch((data) => console.log("received data:", data))
getPriceListFx()
