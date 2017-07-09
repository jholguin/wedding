import React, { Component } from 'react'
import './Couple.scss'


export default class Header extends Component{

  render(){
    const josh = require('./josh.jpg')
    const tina = require('./tina.jpg')
    const chewie = require('./chewbacca.jpg')

    return(
      <section className="container couple">
        <h2>The Couple</h2>
        <figure>
          <img src={josh} alt="Josh Holguin" />
          <figcaption>
            Josh Holguin
          </figcaption>
        </figure>
        <figure>
          <img src={tina} alt="Christina Furtado" />
          <figcaption>
            Christina-Marie Garcia Furtado
          </figcaption>
        </figure>
        <figure>
          <img src={chewie} alt="Chewbacca" />
          <figcaption>
            Chewbacca
          </figcaption>
        </figure>
      </section>
    )
  }
}