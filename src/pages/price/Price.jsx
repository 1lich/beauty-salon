import {
  OuterPriceDiv,
  InnerPriceDiv,
  TitleDiv,
  PriceValue,
  DescDiv,
} from "./styled-Price"

const Price = (props) => {
  return (
    <OuterPriceDiv key={props.id}>
      <InnerPriceDiv>
        <TitleDiv>{props.name}</TitleDiv>
        <PriceValue>{props.price}</PriceValue>
      </InnerPriceDiv>
      <DescDiv>{props.description}</DescDiv>
    </OuterPriceDiv>
  )
}

export default Price
