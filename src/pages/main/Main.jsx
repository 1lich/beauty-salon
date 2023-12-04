import Layout from "../../components/Layout"
import { MainDiv, StyledImg } from "./styled-Main"
import img from "../../assets/images/bgc.png"

const Main = () => {
  return (
    <Layout title="Главная">
      <MainDiv>
        <StyledImg src={img} />
      </MainDiv>
    </Layout>
  )
}

export default Main
