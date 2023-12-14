import React, { useEffect, useState } from 'react'
import { GitHubRepo } from '../components/GitHubRepo'

const Projects = () => {
  const [gitHubRepos, setGitHubRepos] = useState([])

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/LucasKnezevich/repos')
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
      <div className="github">
        <h3 className="title-text">GitHub</h3>
        <div className="gh-repo-container">
          {gitHubRepos.map(repo => (
            <GitHubRepo
              key={repo.id}
              name={repo.name}
              description={repo.description}
              url={repo.html_url}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
