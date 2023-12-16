import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'react-feather'

const ThemeSwitch = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  // const getThemePreference = () => {
  //   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  //   if (prefersDark) {
  //     setIsDarkTheme(true)
  //   } else {
  //     setIsDarkTheme(false)
  //   }
  // }

  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.remove('light')
    } else {
      document.body.classList.add('light')
    }
  }, [isDarkTheme])

  return (
    <div className={`theme-switch ${isDarkTheme ? 'dark' : 'light'}`} onClick={handleToggle}>
      <div className="theme-slider">
        {isDarkTheme ? <Moon className='theme-icon'/> : <Sun className='theme-icon'/>}
      </div>
    </div>
  )
}

export default ThemeSwitch
