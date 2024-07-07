import "./toggle.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb } from "@fortawesome/free-solid-svg-icons"

import React from 'react'

export default function ToggleTheme() {
  const DarkMode = () => {
    document.querySelector("body").classList.toggle('darkmode')

  }
  return (
    <div>
        <FontAwesomeIcon icon={faLightbulb} onClick={DarkMode} />     
    </div>
  )
}
