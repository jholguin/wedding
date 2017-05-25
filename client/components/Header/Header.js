import React, { Component } from 'react'
import './Header.scss'

export default class Header extends Component{

	constructor(props){
		super(props)
		this.state = { expandMenu: false }

		this.handleMenuClick = this.handleMenuClick.bind(this)
	}

	handleMenuClick() {
    this.setState({
      expandMenu: !this.state.expandMenu
 		})
 		
 		console.log(this.state)
  }

	render(){
		return(
			<header>
				<nav className={this.state.expandMenu ? 'show': 'hide'}>
					<span>Home</span>
					<span>Couple</span>
					<span>Our Story</span>
					<span className="icon-octopus"></span>
					<span>Event</span>
					<span>Location</span>
					<span>Registry</span>
					<span>RSVP</span>
				</nav>
				<section className="menu" onClick={this.handleMenuClick}>
					<span></span>
					<span></span>
					<span></span>
				</section>
			</header>

		)
	}
}