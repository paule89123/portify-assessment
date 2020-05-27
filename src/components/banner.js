import React from "react"
import Navigation from "../components/navigation"
import soundIcon from '../../static/assets/sound-icon.png'

export default () => {
  return (
    <div 
      style={{
        display: "flex",
        padding: 64,
        margin: "64px 0px",
        borderRadius: 9,
        color: "white",
        background: "linear-gradient(140deg, #381696, #aea3d5)",
        boxShadow: "0 0 30px var(--card-shadow)",
        lineHeight: "1.5"
      }}>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            fontWeight: "700",

          }}>
              
              <img alt="" style={{filter: "invert(1)", width: 40, marginRight: 16}} src={soundIcon} />
              The Modern WorkTech
        </div>
        <div
          style={{
            width: "50%",
            textAlign: "center",
            padding: "0px 36px"
          }}>
              Tune in to our weekly podcast to listen to the stories, struggles, views and faily lives of modern workers.
              <br /><br />
              Each week, we interview people form across the country who are taking small steps towards their dreams.
        </div>
    </div>
  )
}
