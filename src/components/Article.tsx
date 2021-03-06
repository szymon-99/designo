import React, { FC } from "react"
import { Anchor } from "../styles/Button"
import { article } from "../../custom"
import slugify from "slugify"

interface ArticleProps {
  data: article
  description?: boolean
}

const Article: FC<ArticleProps> = ({ description, data }) => {
  const {
    id,
    data: { name, image },
  } = data
  const slug = slugify(name)

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
          <Anchor to={`/locations/#${slug}`}>see Location</Anchor>
        )}
      </div>
    </article>
  )
}

export default Article
