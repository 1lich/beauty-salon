import React from "react"
import { useEffect } from "react"
import { getStaffListEvent, staffListStore } from "../../services/commonDomain"
import { useUnit } from "effector-react"

import Layout from "../../components/Layout"
import {
  StyledH1,
  StyledStaffCard,
  StyledStaffGrid,
  StyledStaffInfo,
  StyledStaffName,
  StyledStaffPhoto,
} from "./styled-Staff"

const Staff = () => {
  useEffect(() => {
    getStaffListEvent()
  }, [])
  const staffList = useUnit(staffListStore).result
  console.log("received data to staff", staffList)
  return (
    <Layout>
      <StyledH1>Наши мастера</StyledH1>
      <StyledStaffGrid>
        {staffList.map(({ id, name, occupation, photo } = staffList) => {
          return (
            <StyledStaffCard key={id}>
              <StyledStaffPhoto src={photo} />
              <StyledStaffName>{name}</StyledStaffName>
              <StyledStaffInfo>{occupation}</StyledStaffInfo>
            </StyledStaffCard>
          )
        })}
      </StyledStaffGrid>
    </Layout>
  )
}

export default Staff
