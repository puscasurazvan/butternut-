import styled from 'styled-components'

const SmallSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`

const Heading = styled.h4`
  color: rgb(29, 108, 147);
  padding: 0;
  width: 150px;
  font-size: 14px;
  margin: 0 5px 0;
`
const Paragraph = styled.p`
  color: rgb(29, 108, 147);
  margin: 0 5px;
  font-size: 14px;
  display: flex;
  width: fit-content;
  padding: 0 5px;
  background-color: rgb(240, 240, 240);
`

const Image = styled.img`
  margin-right: 5px;
`
const Copy = styled.p`
  margin-top: 2px;
`

export const StyledDetails = {
  SmallSection,
  Heading,
  Paragraph,
  Image,
  Copy
}