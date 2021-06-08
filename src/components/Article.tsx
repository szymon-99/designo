import React, { FC } from "react"
import { Button } from "../styles/Button"
import { article } from "./Friends"

interface ArticleProps {
  data: article
  description?: boolean
}

const Article: FC<ArticleProps> = ({ description, data }) => {
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
          <Button to={`/${name}`}>see loaction</Button>
        )}
      </div>
    </article>
  )
}

export default Article
