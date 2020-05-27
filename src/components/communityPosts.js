import React from "react"
import Navigation from "../components/navigation"
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const LeftColumn = styled.div`
  width: "70%";
  padding: 24px;
`

const RightColumn = styled.div`
  width: "30%";
  padding: 24px;
`

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.3rem;
`

const Meta = styled.div`
  font-weight: 100;
  margin-bottom: 24px;
`

const Subtitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`

const Description = styled.p`
  font-size: 0.8rem;
  word-wrap: wrap;
`

export default () => {
  return (
    <Container>
      <LeftColumn> 
          <Title>Community forum</Title>
          <Meta className="post-meta">(23 topics/week)</Meta>
          <Subtitle>Feedback & ideas</Subtitle>
          <Description>Share your feedback on current Portify features, and new ideas to make things even better.</Description>
          <Subtitle>Financial chat</Subtitle>
          <Description>Money-saving tips and Fintech Chat.</Description>
          <Subtitle>General chat</Subtitle>
          <Description>Off-topic threads that don't fit anywhere else.</Description>
      </LeftColumn>
      <RightColumn> 
          <Title>Events and groups</Title>
          <Meta className="post-meta">2 upcoming events</Meta>
          <Subtitle>Jun 12, 2020</Subtitle>
          <Description>Webinar on COVID-19 and credit score</Description>
          <Subtitle>Jun 18, 2020</Subtitle>
          <Description>Online focus group via zoom</Description>
      </RightColumn>
    </Container>
  )
}
