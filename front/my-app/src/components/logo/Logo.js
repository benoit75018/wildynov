import React, { Component } from "react"
import "./logos.css"

class Logo extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        {
          <img
            src="https://image.noelshack.com/fichiers/2018/24/3/1528883121-webp-net-resizeimage.png"
            alt="logo"
          />
        }
      </div>
    )
  }
}
export default Logo
