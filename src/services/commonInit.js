import { sample } from "effector"

import { getPriceListEvent, getPriceListFx } from "./commonDomain"

sample({
  clock: getPriceListEvent,
  target: getPriceListFx,
})
