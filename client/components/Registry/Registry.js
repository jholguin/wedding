import React, { Component } from 'react'
import './Registry.scss'

export default class Registry extends Component{

  render(){
    const amazon = require('./amazon-logo.png')
    const candb = require('./crateandbarrel-logo.jpeg')
    const dominos = require('./dominos-logo.png')

    return(
      <section className="container registry">
        <a id="registry" />
        <h2>Wedding Registry</h2>
        <div>
          <a target="_blank" href="https://www.amazon.com/wedding/christina-furtado-josh-holguin-austin-february-2018/registry/3U2BLTJM48YUH">
            <img src={amazon} alt="Amazon Registry" />
          </a>
      
          <a target="_blank" href="https://www.crateandbarrel.com/gift-registry/christina-furtado-and-josh-holguin/r5699562">
            <img src={candb} alt="Crate and Barrel Registry" />
          </a>
      
          <a target="_blank" href="https://www.dominosweddingregistry.com/registry/registry-3007">
            <img className="dominos" src={dominos} alt="Dominos Registry" />
          </a>
        </div>
      </section>
    )
  }
}