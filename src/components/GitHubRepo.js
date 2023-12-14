import { useState } from "react";
import { ChevronUp, ChevronDown } from "react-feather";

export const GitHubRepo = ({ name, description, url }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="gh-repo">
      <a href={url} target="blank" className="gh-repo-link">
        <h1>{name}</h1>
        {showDescription ? (
          description ? (
            <p>{description}</p>
          ) : (
            <p><i>No repo description available.</i></p>
          )
        ) : null}
      </a>
      {showDescription ? (
        <ChevronUp
          className="gh-dropdown-icon"
          onClick={() => setShowDescription(!showDescription)}
        />
      ) : (
        <ChevronDown
          className="gh-dropdown-icon"
          onClick={() => setShowDescription(!showDescription)}
        />
      )}
    </div>
  );
};
