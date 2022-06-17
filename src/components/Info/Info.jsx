import styled from 'styled-components'

const InfoContent = styled.div`
  width: 100%;
  text-align: justify;
  padding: 36px;
`

const About = styled.h2`
  color: ${({ theme }) => theme.title};
  font-size: 16px;
`

const AboutBio = styled.p`
  color: ${({ theme }) => theme.paragraph};
  font-size: 10px;
  max-width: 270px;
  line-height: 16px;
  margin-top: 5px;
`

const Interests = styled.h2`
  color: ${({ theme }) => theme.title};
  font-size: 16px;
  margin-top: 20px;
`

const InterestsDesc = styled.p`
  color: ${({ theme }) => theme.paragraph};
  font-size: 10px;
  max-width: 270px;
  line-height: 1.5;
  margin-top: 5px;
`

export const Info = () => {
  const bio =
    'I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and   best practices, and am always looking for new things to learn.'
  
  const interests =
    'Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.'


  return (
    <>
      <InfoContent>
        <About>About</About>
        <AboutBio>
          {/* I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn. */}
          {bio}
        </AboutBio>
        <Interests>Interests</Interests>
        <InterestsDesc>
          {/* Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic. */}
          {interests}
        </InterestsDesc>
      </InfoContent>
    </>
  )
}
