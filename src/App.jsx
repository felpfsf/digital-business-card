// States
import { useEffect, useState } from 'react'

// Styles
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyles'
import { lightTheme, darkTheme } from './styles/Themes'

// Icons
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

// Components
import { Content } from './components/Content'
import { ProfileImage } from './components/Header/ProfileImage'
import { Footer } from './components/Footer/Footer'
import { Attribuition } from './components/Attribuition/Attribuition'

const Container = styled.div`
  margin-top: 25px;
  margin-inline: auto;

  max-width: 320px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in;
`

function App() {
  const [theme, setTheme] = useState('light')

  const isDarkTheme = theme === 'dark'

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? 'light' : 'dark'
    setTheme(updatedTheme)
    localStorage.setItem('theme', updatedTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDarkTheme =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme)
    } else if (prefersDarkTheme) {
      setTheme('dark')
    }
  }, [])

  // TODO
  // Props text change

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyle />

        <Container>
          <button className='switcher' onClick={toggleTheme}>
            {isDarkTheme ? (
              <MdOutlineLightMode color='white' size={32} />
            ) : (
              <MdOutlineDarkMode color='dark' size={32} />
            )}
          </button>
          <ProfileImage />
          <Content />
          <Footer />
          <Attribuition />
        </Container>
      </>
    </ThemeProvider>
  )
}

export default App
