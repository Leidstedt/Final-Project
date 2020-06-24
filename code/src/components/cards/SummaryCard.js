import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  border-radius: 6px;
  background: #17243d;
  margin: 20px;
  width: 75%;
`

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  color: #ffff;
`

const NumCompanies = styled.p`
  margin-top: 10px;
  color: #ffff;
`


const NumParticipants = styled.p`
  margin-top: 10px;
  color: #ffff;
`

const TitleBar = styled.div`
  display: flex;
  align-items: center;
`

const Content = styled.div`
  padding: 20px;
`


export const SummaryCard = ({ title, numCompanies, numParticipants, className }) => (
  <Container className={className}>
    <Content>
      <TitleBar>
        <div>
          {title && <Title>{title}</Title>}
        </div>
      </TitleBar>
      {numParticipants && <NumParticipants>{numParticipants}</NumParticipants>}
      {numCompanies && <NumCompanies>{numCompanies}</NumCompanies>}
    </Content>
  </Container>
)