<<<<<<< HEAD
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
=======
import React, { Component } from 'react'
import './Logo.css'

class Logo extends Component {
	render() {
		return (
			<div class="nav-wrapper">
				<a href="" class="brand-logo center">
					{
						<img
							src="https://image.noelshack.com/fichiers/2018/24/3/1528883121-webp-net-resizeimage.png"
							alt=""
						/>
					}
				</a>
			</div>
		)
	}
>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a
}
export default Logo
