import React, { FC } from "react"
import { Button } from "../styles/Button"
import { article } from "../../custom"

interface ArticleProps {
  data: article
  description?: boolean
  locations?: boolean
}

const Article: FC<ArticleProps> = ({ locations, description, data }) => {
  const {
    id,
    data: { name, image },
  } = data
  return (
    <article key={id}>
      <div className="img">
        <img src={image.localFiles[0].publicURL} alt={name} />
        <div className="bg"></div>
      </div>
      <div>
        <h3>{name}</h3>
        {description ? (
          <p>{data.data.desc}</p>
        ) : (
          <Button to={locations ? "/locations" : `/${name}`}>
            see loaction
          </Button>
        )}
      </div>
    </article>
  )
}

export default Article
