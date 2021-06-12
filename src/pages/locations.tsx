import React from "react"
import { Layout, Contact, MapCell } from "../components"
import { data } from "../constants/locations"

const locations = () => {
  return (
    <Layout>
      {data.map((location, index) => {
        if (index % 2 === 1) {
          return <MapCell key={location.id} location={location} />
        }
        return <MapCell key={location.id} location={location} reverse />
      })}
      <Contact />
    </Layout>
  )
}

export default locations
