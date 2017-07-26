import React, { Component } from 'react'
import './Header.scss'

export default class Header extends Component{

	constructor(props){
		super(props)
		this.state = { expandMenu: false }

		this.handleMenuClick = this.handleMenuClick.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	handleMenuClick() {
    this.setState({
      expandMenu: !this.state.expandMenu
 		})
  }

  handleClick(e){
  	e.preventDefault()
  	let t = document.querySelector(e.target.hash)
  	let body = document.querySelector('body')
  	body.scrollTop = t.offsetTop - 48
  }

	render(){
		return(
			<header>
				<nav className={this.state.expandMenu ? 'show': 'hide'}>
					<a href="#home" onClick={this.handleClick}>Home</a>
					<a href="#couple" onClick={this.handleClick}>Couple</a>
					<a href="our-story">Our Story</a>
					<span className="icon-octopus"></span>
					<a href="event">Event</a>
					<a href="events">Events</a>
					<a href="registry">Registry</a>
					<a href="rsvp">RSVP</a>
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