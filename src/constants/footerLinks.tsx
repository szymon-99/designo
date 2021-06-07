import React from "react"
// import Facebook from "../assets/svgs/icons/icon-facebook.svg"
// import Instagram from "../assets/svgs/icons/icon-instagram.svg"
// import Pinterest from "../assets/svgs/icons/icon-pinterest.svg"
// import Twitter from "../assets/svgs/icons/icon-twitter.svg"
// import Youtube from "../assets/svgs/icons/icon-youtube.svg"
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
    url: "www.facebook.com",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    url: "www.instagram.com",
  },
  {
    id: 3,
    icon: <FaPinterest />,
    url: "www.pinterest.com",
  },
  {
    id: 4,
    icon: <FaTwitter />,
    url: "www.twitter.com",
  },
  {
    id: 5,
    icon: <FaYoutube />,
    url: "www.youtube.com",
  },
]
