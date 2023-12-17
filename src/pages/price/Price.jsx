import { priceListStore } from "../../services/commonDomain"
import { useUnit } from "effector-react"

import Layout from "../../components/Layout"
import {
  DescDiv,
  PriceDiv,
  InnerPriceDiv,
  OuterPriceDiv,
  PriceGrid,
  PriceH1,
  PriceImg,
  PriceValue,
  TitleDiv,
  CenterDiv,
} from "./styled-Price"
import img from "../../assets/images/wash.png"

const Price = () => {
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
                <OuterPriceDiv key={id}>
                  <InnerPriceDiv>
                    <TitleDiv>{title}</TitleDiv>
                    <PriceValue>{price}</PriceValue>
                  </InnerPriceDiv>
                  <DescDiv>{description}</DescDiv>
                </OuterPriceDiv>
              )
            })}
          </PriceDiv>
        </PriceGrid>
      </CenterDiv>
    </Layout>
  )
}

export default Price
