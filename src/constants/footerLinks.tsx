import React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
interface icon {
  id: number
  icon: any
  url: string
}
export const links: icon[] = [
  {
    id: 1,
    icon: <FaFacebook />,
    url: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    url: "https://www.instagram.com",
  },
  {
    id: 3,
    icon: <FaPinterest />,
    url: "https://www.pinterest.com",
  },
  {
    id: 4,
    icon: <FaTwitter />,
    url: "https://www.twitter.com",
  },
  {
    id: 5,
    icon: <FaYoutube />,
    url: "https://www.youtube.com",
  },
]
