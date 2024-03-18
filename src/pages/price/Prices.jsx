import { getPriceListEvent, priceListStore } from "../../services/commonDomain"
import { useUnit } from "effector-react"
import { useEffect } from "react"

import Layout from "../../components/Layout"
import {
  PriceDiv,
  PriceGrid,
  PriceH1,
  PriceImg,
  CenterDiv,
} from "./styled-Prices"
import img from "../../assets/images/wash.png"
import Price from "./Price"

const Prices = () => {
  useEffect(() => {
    getPriceListEvent()
  }, [])
  const priceList = useUnit(priceListStore).result
  return (
    <Layout title="Цены на услуги">
      <PriceH1>Цены на услуги</PriceH1>
      <CenterDiv>
        <PriceGrid>
          <PriceImg src={img}></PriceImg>
          <PriceDiv>
            {priceList.map(({ id, name, description, price } = priceList) => {
            {priceList.map(({ id, name, description, price } = priceList) => {
              return (
                <Price
                  key={id}
                  name={name}
                  name={name}
                  price={price}
                  description={description}
                />
              )
            })}
          </PriceDiv>
        </PriceGrid>
      </CenterDiv>
    </Layout>
  )
}

export default Prices
