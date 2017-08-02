import React, { Component } from 'react'
import { connect } from "react-redux"
import { getActiveLanguage, getTranslate } from 'react-localize-redux';
import './Couple.scss'


@connect((store) => {
  return {
    translate: getTranslate(store.local)
  };
})
export default class Header extends Component{

  render(){
    const josh = require('./josh.jpg')
    const tina = require('./tina.jpg')
    const chewie = require('./chewbacca.jpg')
    const translate = this.props.translate

    return(
      <section className="container couple">
        <a id="couple"></a>
        <h2>{translate("couple.title")}</h2>
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