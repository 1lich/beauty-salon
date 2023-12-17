import { createDomain } from "effector"

const commonDomain = createDomain("commonDomain")

export const getPriceListEvent = commonDomain.createEvent("getPriceList")

export const priceListStore = commonDomain.createStore([
  {
    id: 0,
    title: "Женская стрижка",
    price: "7000",
    description: "бреем налысо",
  },
  { id: 1, title: "Укладка", price: "5000", description: "клей момент" },
  {
    id: 2,
    title: "Свадебная прическа",
    description: "как у старика извращенца",
  },
  {
    id: 3,
    title: "Мытье головы",
    price: "1000",
    description: "слюна и легкий массаж",
  },
  { id: 4, title: "Подрочить", price: "300", description: "двумя руками" },
])

priceListStore.on(getPriceListEvent, (_, payload) => payload)
priceListStore.watch((data) => console.log(`data: ${data}`))
