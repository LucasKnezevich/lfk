import React, { useState, useEffect } from 'react'

const ImageGen = () => {
  const [imageUrl, setImageUrl] = useState(null)

  const fetchImg = async () => {
    try {
      const response = await fetch(
        'https://dog.ceo/api/breeds/image/random'
      )
      const details = await response.json()
      setImageUrl(details.message)
    } catch (error) {
      console.error('ERROR: ', error)
    }
  }

  useEffect(() => {
    fetchImg()
  }, [])

  return (
    <>
      {imageUrl == null
        ? null
        : (
        <div className="image-gen-container">
          <img
            src={imageUrl}
            alt="Random Dog Photo"
            className="image-gen"
          />
        </div>
          )}
    </>
  )
}

export default ImageGen
