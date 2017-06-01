import React, { Component } from 'react'
import './Couple.scss'


export default class Header extends Component{

  render(){
    const joshImg = require('./josh.png')
    const tinaImg = require('./tina.png')

    return(
      <section className="container couple">
        <h2>The Couple - O Casal</h2>
        <figure>
          <img src={joshImg} alt="Josh Holguin" />
          <figcaption>
            Josh Holguin
          </figcaption>
        </figure>
        <figure>
          <img src={tinaImg} alt="Christina Furtado" />
          <figcaption>
            Christina-Marie Garcia Furtado
          </figcaption>
        </figure>
      </section>
    )
  }
}