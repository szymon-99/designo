import React from "react"
import Facebook from "../assets/svgs/icons/icon-facebook.svg"
import Instagram from "../assets/svgs/icons/icon-instagram.svg"
import Pinterest from "../assets/svgs/icons/icon-pinterest.svg"
import Twitter from "../assets/svgs/icons/icon-twitter.svg"
import Youtube from "../assets/svgs/icons/icon-youtube.svg"

interface icon {
  id: number
  icon: any
  url: string
}
export const links: icon[] = [
  {
    id: 1,
    icon: <Facebook />,
    url: "www.facebook.com",
  },
  {
    id: 2,
    icon: <Instagram />,
    url: "www.instagram.com",
  },
  {
    id: 3,
    icon: <Pinterest />,
    url: "www.pinterest.com",
  },
  {
    id: 4,
    icon: <Twitter />,
    url: "www.twitter.com",
  },
  {
    id: 5,
    icon: <Youtube />,
    url: "www.youtube.com",
  },
]
