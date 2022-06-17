import styled from 'styled-components'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'

const TitleName = styled.h1`
  font-size: 25px;
  color: ${({ theme }) => theme.title};
  margin-top: 21px;
`

const Occupation = styled.h3`
  font-size: 13px;
  font-weight: 400;

  color: #f3bf99;
`

const PersonalWebsite = styled.a`
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.subtitle};

  margin-top: 8px;
  margin-bottom: 15px;
`

const ButtonsBox = styled.div`
  display: flex;
  gap: 17px;
`

const Button = styled.button`
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.primary ? '#374151' : '#fff')};

  background-color: ${props =>
    props.primary ? '#FFFFFF' : props.theme.button};

  width: 115px;
  padding: 9px 13px;

  border: ${props => (props.primary ? '1px solid #d1d5db' : 'none')};
  border-radius: 6px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  cursor: pointer;
  transition: all 0.2s ease-in;
`
export const Header = () => {
  const name = 'Laura Smith'
  const occupation = 'Frontend Developer'
  const personalLinks = 'laurasmith.website'

  return (
    <>
      <TitleName>{name}</TitleName>

      <Occupation>{occupation}</Occupation>

      <PersonalWebsite>{personalLinks}</PersonalWebsite>

      <ButtonsBox>
        <Button primary onClick={(e) => { e.preventDefault(); window.open('https://google.com', '_blank') }}>
          <GrMail />
          Email
        </Button>

        <Button onClick={(e) => { e.preventDefault(); window.open('https://www.linkedin.com/in/andressa-helena/', '_blank)') }}>
          <BsLinkedin />
          Linkedin
        </Button>
      </ButtonsBox>
    </>
  )
}
