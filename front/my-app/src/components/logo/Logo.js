import React, { Component } from 'react'
import './logos.css'

class Logo extends Component {
	render() {
		return (
			<div className="containers">
				<a href="/home" className="brand-logo center">
					{
						<img
							src="https://image.noelshack.com/fichiers/2018/24/3/1528883121-webp-net-resizeimage.png"
							alt="logo"
						/>
					}
				</a>
			</div>
		)
	}
}
export default Logo
