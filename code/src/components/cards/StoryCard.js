import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  border-radius: 6px;
  background: #fff;
  margin: 20px;
  width: 400px;
`

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`

const SecondaryText = styled.p`
  margin: 0;
  color: #6b6b6b;
`

const SupportingText = styled.p`
  margin-top: 10px;
  color: #6b6b6b;
`

const Thumbnail = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  margin-right: 10px;
  margin-bottom: 10px;
`

const TitleBar = styled.div`
  display: flex;
  align-items: center;
`

const CoverImage = styled.img`
  border-radius: 6px 6px 0 0;
  object-fit: cover;
  object-position: 45% 55%;
  width: 100%;
  height: 210px;
`

const Content = styled.div`
  padding: 20px;
 
`


export const StoryCard = ({ title, secondaryText, supportingText, thumbnailUrl, coverImage, className }) => (
  <Container className={className}>
    {coverImage && <CoverImage src={coverImage} />}
    <Content>
      <TitleBar>
        {thumbnailUrl && <Thumbnail url={thumbnailUrl} />}
        <div>
          {title && <Title>{title}</Title>}
          {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
        </div>
      </TitleBar>
      {supportingText && <SupportingText>{supportingText}</SupportingText>}
    </Content>
  </Container>
)