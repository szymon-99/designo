import { ImageDataLike } from "gatsby-plugin-image"
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  // | string
  export default content
}
declare module "*.png" {
  const value: string
  export default value
}

export type service = {
  data: {
    name: string
    image: {
      localFiles: ImageDataLike[]
    }
    huge?: boolean
  }
  id: string
}
export type project = {
  data: {
    name: string
    desc: string
    image: {
      localFiles: ImageDataLike[]
    }
  }
  id: string
}

type URL = {
  publicURL: string
}

type article = {
  id: string
  data: {
    name: string
    desc?: string
    image: {
      localFiles: URL[]
    }
  }
}

export interface SVGQuery {
  allAirtable: {
    nodes: article[]
  }
}
