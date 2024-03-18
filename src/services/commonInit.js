import { sample } from "effector"

import {
  getPriceListEvent,
  getPriceListFx,
  getStaffListEvent,
  getStaffListFx,
} from "./commonDomain"

sample({
  clock: getStaffListEvent,
  target: getStaffListFx,
})

sample({
  clock: getPriceListEvent,
  target: getPriceListFx,
})
