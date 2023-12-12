import React from "react"
import Layout from "../../components/Layout"
import {
  StyledH1,
  StyledStaffCard,
  StyledStaffGrid,
  StyledStaffInfo,
  StyledStaffName,
  StyledStaffPhoto,
} from "./styled-Staff"
import img from "../../assets/images/photo/katya.png"
import img2 from "../../assets/images/photo/irina.png"
import img3 from "../../assets/images/photo/olga.png"

const Staff = () => {
  return (
    <Layout>
      <StyledH1>Наши мастера</StyledH1>
      <StyledStaffGrid>
        <StyledStaffCard>
          <StyledStaffPhoto src={img} />
          <StyledStaffName>Екатерина Залупкина</StyledStaffName>
          <StyledStaffInfo>Стилист-таксист</StyledStaffInfo>
        </StyledStaffCard>
        <StyledStaffCard>
          <StyledStaffPhoto src={img2} />
          <StyledStaffName>Ирина Баребухова</StyledStaffName>
          <StyledStaffInfo>Стилист-онанист</StyledStaffInfo>
        </StyledStaffCard>
        <StyledStaffCard>
          <StyledStaffPhoto src={img3} />
          <StyledStaffName>Ольга Пупкина</StyledStaffName>
          <StyledStaffInfo>Стилист-террорист</StyledStaffInfo>
        </StyledStaffCard>
      </StyledStaffGrid>
    </Layout>
  )
}

export default Staff
