import { priceListStore } from "../../services/commonDomain"
import { useUnit } from "effector-react"

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
  const priceList = useUnit(priceListStore)
  console.log(priceList)

  return (
    <Layout title="Цены на услуги">
      <PriceH1>Цены на услуги</PriceH1>
      <CenterDiv>
        <PriceGrid>
          <PriceImg src={img}></PriceImg>
          <PriceDiv>
            {priceList.map(({ id, title, price, description } = priceList) => {
              return (
                <Price
                  key={id}
                  title={title}
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
