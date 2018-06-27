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
}
export default Logo
