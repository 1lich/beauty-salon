import Layout from "../../components/Layout"
import {
  Logos,
  ServiceCard,
  ServiceDiv,
  ServicePhoto,
  ServicesGrid,
  ServicesInfo,
} from "./styled-Services"
import barber from "../../assets/images/barber.png"
import manicure from "../../assets/images/manicure.png"
import pedicure from "../../assets/images/pedicure.png"
import cosmetology from "../../assets/images/cosmetology.png"
import bodyestate from "../../assets/images/body esthete.png"
import makeup from "../../assets/images/make-up.png"

const Services = () => {
  return (
    <Layout title="Услуги">
      <ServicesInfo />
      <ServiceDiv>
        <ServicesGrid>
          <ServiceCard>
            <ServicePhoto src={barber} />
            <h2>Парикмахерские услуги</h2>
          </ServiceCard>
          <ServiceCard>
            <ServicePhoto src={manicure} />
            <h2>Маникюр</h2>
          </ServiceCard>
          <ServiceCard>
            <ServicePhoto src={pedicure} />
            <h2>Педикюр</h2>
          </ServiceCard>
          <ServiceCard>
            <ServicePhoto src={cosmetology} />
            <h2>Косметология</h2>
          </ServiceCard>
          <ServiceCard>
            <ServicePhoto src={bodyestate} />
            <h2>Эстет по телу</h2>
          </ServiceCard>
          <ServiceCard>
            <ServicePhoto src={makeup} />
            <h2>Визаж</h2>
          </ServiceCard>
        </ServicesGrid>
      </ServiceDiv>
      <Logos>
        <></>
      </Logos>
    </Layout>
  )
}

export default Services
