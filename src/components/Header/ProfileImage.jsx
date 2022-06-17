import styled from 'styled-components'
import ProfilePic from '../../assets/images/profile_pic.png'

const ProfileImg = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`

export const ProfileImage = () => {
  return (
    <>
      <ProfileImg src={ProfilePic} />
    </>
  )
}
