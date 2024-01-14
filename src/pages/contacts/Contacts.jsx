import Layout from "../../components/Layout"
import MapComponent from "./MapComponent"
import { StyledH1 } from "./styled-Contacts"

const Contacts = () => {
  return (
    <Layout title="Контакты">
      <StyledH1>Контакты</StyledH1>
      <MapComponent />
    </Layout>
  )
}

export default Contacts
