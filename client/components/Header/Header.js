import React, { Component } from 'react'
import { setLanguages, getActiveLanguage, getTranslate, setActiveLanguage } from 'react-localize-redux';
import { connect } from "react-redux"
import './Header.scss'

@connect((store) => {
    return {
        translate: getTranslate(store.local)
    }
})
export default class Header extends Component{

	constructor(props){
		super(props)
		this.state = { expandMenu: false }

		this.handleMenuClick = this.handleMenuClick.bind(this)
		this.handleClick = this.handleClick.bind(this)
        this.handleLanguageClick = this.handleLanguageClick.bind(this)
	}

    handleMenuClick() {
        this.setState({
            expandMenu: !this.state.expandMenu
        })
    }

    handleClick(e){
        e.preventDefault()
        let t = document.querySelector(e.target.hash)
        window.scroll(0, t.offsetTop - 48)
        this.setState({
            expandMenu: !this.state.expandMenu
        })
    }

    handleLanguageClick(e){
        e.preventDefault()
        let lang = e.target.getAttribute('data-lang')
        this.props.dispatch(setActiveLanguage(lang))
    }

	render(){
        let usflag = require('./united-states.svg')
        let prflag = require('./portugal.svg')

		return(
			<header>
				<nav className={this.state.expandMenu ? 'show': 'hide'}>
					<a href="#home" onClick={this.handleClick}>Home</a>
					<a href="#couple" onClick={this.handleClick}>Couple</a>
					<a href="#our-story" onClick={this.handleClick}>Our Story</a>
					<a href="#venue" onClick={this.handleClick}>Venue</a>
                    <span className="icon-octopus"></span>
					<a href="#playlist" onClick={this.handleClick}>Playlist</a>
					<a href="#registry" onClick={this.handleClick}>Registry</a>
					<a href="#rsvp" onClick={this.handleClick}>RSVP</a>
                    <a href="#en" onClick={this.handleLanguageClick}>
                        <img src={usflag} alt="United States Flag" data-lang="en" />
                    </a>
                    <a href="#pt" onClick={this.handleLanguageClick}>
                        <img src={prflag} alt="Portuguese Flag" data-lang="pt" />
                    </a>
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