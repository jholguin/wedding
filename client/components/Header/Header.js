import React, { Component } from 'react'
import './Header.scss'

export default class Header extends Component{
	render(){
		return(
			<header>
				<nav>
					<span>Home</span>
					<span>Couple</span>
					<span>Our Story</span>
					<span className="icon-octopus"></span>
					<span>Event</span>
					<span>Location</span>
					<span>Registry</span>
					<span>RSVP</span>
				</nav>
			</header>
		)
	}
}