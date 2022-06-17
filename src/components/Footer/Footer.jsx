import styled from 'styled-components'
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare
} from 'react-icons/fa'

const FooterContainer = styled.div`
  font-size: 25px;
  /* color: #918e9b; */
  color: ${({ theme }) => theme.footerLinks};

  height: 64px;
  width: 100%;
  /* background-color: #161619; */
  background-color: ${({ theme }) => theme.footer};
  padding-block: 19.5px;

  border-radius: 0px 0px 10px 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  transition: all 0.5s ease-in;
`

export const Footer = () => {
  return (
    <FooterContainer>
      <a
        href='https://www.twitter.com'
        target='_blank'
        rel='noopener noreferrer'>
        <FaTwitterSquare />
      </a>
      <a
        href='https://www.facebook.com'
        target='_blank'
        rel='noopener noreferrer'>
        <FaFacebookSquare />
      </a>
      <a
        href='https://www.instagram.com'
        target='_blank'
        rel='noopener noreferrer'>
        <FaInstagramSquare />
      </a>
      <a
        href='https://github.com/'
        target='_blank'
        rel='noopener noreferrer'>
        <FaGithubSquare />
      </a>
    </FooterContainer>
  )
}
