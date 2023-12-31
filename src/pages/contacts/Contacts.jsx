import Layout from "../../components/Layout"
import MapComponent from "./MapComponent"
import MapComp from "./MapComp"
import { StyledH1 } from "./styled-Contacts"

const Contacts = () => {
  return (
    <Layout title="Контакты">
      <StyledH1>Контакты</StyledH1>
      <MapComp />
    </Layout>
  )
}

export default Contacts
