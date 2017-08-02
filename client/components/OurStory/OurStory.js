import React, { Component } from 'react'
import { connect } from "react-redux"
import { getActiveLanguage, getTranslate } from 'react-localize-redux';
import './OurStory.scss'

@connect((store) => {
  return {
    translate: getTranslate(store.local)
  }
})
export default class OurStory extends Component{

  render(){
    const contigo = require('./contigo.jpg')
    const sxsw = require('./sxsw.jpg')
    const translate = this.props.translate

    return(
      <section className="container our-story">
        <a id="our-story" />
        <h2>{translate("our-story.title")}</h2>
        <div className="carousel">
          <section className="card one">
            <figure>
              <div className="image" />
              <figcaption>
                <h3>{translate("our-story.stories.one.date")}</h3>
                <p>{translate("our-story.stories.one.body")}</p>
              </figcaption>
            </figure>
          </section>
          <section className="card two">
            <figure>
              <div className="image" />
              <figcaption>
                <h3>{translate("our-story.stories.two.date")}</h3>
                <p>{translate("our-story.stories.two.body")}</p>
              </figcaption>
            </figure>
          </section>
          <section className="card three">
            <figure>
              <div className="image" />
              <figcaption>
                <h3>{translate("our-story.stories.three.date")}</h3>
                <p>{translate("our-story.stories.three.body")}</p>
              </figcaption>
            </figure>
          </section>
          <section className="card four">
            <figure>
              <div className="image" />
              <figcaption>
                <h3>{translate("our-story.stories.four.date")}</h3>
                <p>{translate("our-story.stories.four.body")}</p>
              </figcaption>
            </figure>
          </section>
          <section className="card five">
            <figure>
              <div className="image" />
              <figcaption>
                <h3>{translate("our-story.stories.five.date")}</h3>
                <p>{translate("our-story.stories.five.body")}</p>
              </figcaption>
            </figure>
          </section>
          <section className="card six">
            <figure>
              <div className="image" />
              <figcaption>
                <h3>{translate("our-story.stories.six.date")}</h3>
                <p>{translate("our-story.stories.six.body")}</p>
              </figcaption>
            </figure>
          </section>
          <section className="card seven">
            <figure>
              <div className="image" />
              <figcaption>
                <h3>{translate("our-story.stories.seven.date")}</h3>
                <p>{translate("our-story.stories.seven.body")}</p>
              </figcaption>
            </figure>
          </section>
          <section className="card eight">
            <figure>
              <div className="image" />
              <figcaption>
                <h3>{translate("our-story.stories.eight.date")}</h3>
                <p>{translate("our-story.stories.eight.body")}</p>
              </figcaption>
            </figure>
          </section>
        </div>
      </section>
    )
  }
}