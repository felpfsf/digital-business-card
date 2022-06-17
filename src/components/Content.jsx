import styled from "styled-components"
import { Header } from "./Header/Header"
import { ProfileImage } from "./Header/ProfileImage"
import { Info } from "./Info/Info"

const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.body};

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: all 0.5s ease-in;
`

export const Content = () => {
  return (
    <ContentWrapper>
      <Header />
      <Info />
    </ContentWrapper>
  )
}
