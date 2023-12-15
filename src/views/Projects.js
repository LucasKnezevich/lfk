import React, { useEffect, useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'

const Projects = () => {
  const [gitHubRepos, setGitHubRepos] = useState([])
  const domainData = require('../assets/data/domains.json')

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/LucasKnezevich/repos'
        )
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setGitHubRepos(data)
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }

    fetchRepos()
  }, [])

  return (
    <div className="view-content">
      <h1 className="title-text">Projects</h1>
      <div className="project-section-container">
        <h2 className="title-text">GitHub</h2>
        <div className="project-card-container">
          {gitHubRepos.map((repo) => (
            <ProjectCard
              key={repo.id}
              name={repo.name}
              description={repo.description}
              url={repo.html_url}
            />
          ))}
        </div>
      </div>
      <div className="project-section-container">
        <h2 className="title-text">Domains</h2>
        <div className="project-card-container">
          {domainData.map((domain) => (
            <ProjectCard
              key={domain.id}
              name={domain.name}
              description={domain.description}
              url={domain.url} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
