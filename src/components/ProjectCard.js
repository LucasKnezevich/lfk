import { React, useState } from 'react'
import { ChevronUp, ChevronDown } from 'react-feather'

// eslint-disable-next-line react/prop-types
export const ProjectCard = ({ name, description, url }) => {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <div className="project-card">
      <a href={url} target="blank" className="project-link">
        <h1>{name}</h1>
        {showDescription
          ? (
              description
                ? (
            <p>{description}</p>
                  )
                : (
            <p><i>No repo description available.</i></p>
                  )
            )
          : null}
      </a>
      {showDescription
        ? (
        <ChevronUp
          className="project-dropdown-icon"
          onClick={() => setShowDescription(!showDescription)}
        />
          )
        : (
        <ChevronDown
          className="project-dropdown-icon"
          onClick={() => setShowDescription(!showDescription)}
        />
          )}
    </div>
  )
}
