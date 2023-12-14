import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'react-feather'

export const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDarkTheme])

  return (
    <div className="theme-toggle-switch">
      <label className="theme-label">
        <input
          type="checkbox"
          className="theme-checkbox"
          checked={isDarkTheme}
          onChange={handleToggle}
        />
        <span className="theme-slider" />
        {isDarkTheme ? <Moon className="theme-icon"/> : <Sun className="theme-icon"/>}
        {/* <span className="theme-slider" /> */}
      </label>
    </div>
  )
}
