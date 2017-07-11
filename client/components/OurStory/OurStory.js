import React, { Component } from 'react'
import './OurStory.scss'


export default class OurStory extends Component{
  
  render(){
    const contigo = require('./contigo.jpg')
    const sxsw = require('./sxsw.jpg')

    return(
      <section className="container our-story">
        <h2>Our Story</h2>
        <div className="carousel">
          <section className="card one">
            <figure>
              <div className="image" />
              <figcaption>
                <h3>September 15, 2014</h3>
                <p>An affair of the heart "hinged" on cocktails and conversation... Our first date was at Contigo in Austin after connecting on the online dating app, Hinge. Relieved to recognize each other's faces in a sea of online dating profiles, our first date was mellow, void of (most) of the usual awkwardness. Though there was the standard first date chit chat about where we were each from, what we did for fun, etc., one thing was clear - we both had a profound love for music and whether Josh knew it then or not, wine. A love that would carry us through to...</p>
              </figcaption>
            </figure>
          </section>
          <section className="card two">
            <figure>
              <div className="image" />
              <figcaption>
                <h3>October 3, 2014</h3>
                <p>Wigs, balloon bombs, and amore in the air... Want to get to know someone? Spend 72 hours with them at a music festival. Austin City Limits turned into our third, fourth and fifth dates. During each of our self-inflicted themed days we wigged out, dressed as Florida tourists and put on our Chelsea/Giants best. We've been laughing, sharing stories and swaying to the music ever since. </p>
              </figcaption>
            </figure>
          </section>
          <section className="card three">
            <figure>
              <div className="image" />
              <figcaption>
                <h3>April 9, 2015</h3>
                <p>Off to see the wizard... Josh took Christina to his second home, Seattle, for her birthday. It was in the Emerald City we indulged our love for oysters, coffee and the Sound. It was reassuring we could make home anywhere we went, if even for just one memorable week.</p>
              </figcaption>
            </figure>
          </section>
          <section className="card four">
            <figure>
              <div className="image" />
              <figcaption>
                <h3>September 6, 2015</h3>
                <p>From Meet the Parents to Hawaii 5-0... Remember what we said about really getting to know someone at a music festival? Well, take those three days and turn them into 10 days including a five hour flight to Hawaii and that's how you really get to know their family. There was one gorgeous home, copious amounts of wine/cocktails, quality cigar time, incredibly beautiful sunsets and a romantic kiss under a freezing waterfall.</p>
              </figcaption>
            </figure>
          </section>
          <section className="card five">
            <figure>
              <div className="image" />
              <figcaption>
                <h3>January 10, 2016</h3>
                <p>Chewie becomes our co-pilot... We decided to build our family by adding one rather large fur-child. We made the pilgrimage to Oklahoma to rescue him and all 115lbs+ of him has been slobbering his way into our hearts (and our bed) ever since.</p>
              </figcaption>
            </figure>
          </section>
          <section className="card six">
            <figure>
              <div className="image" />
              <figcaption>
                <h3>June 13, 2016</h3>
                <p>European Vacation aka "the good vacation"... this is where Josh got to indulge in his nasty soccer habit and my Portuguese crush on Ronaldo (ha). It was two weeks of backpacking through England, France and Ireland in the midst of Europe's biggest futbol tournament. We lived, drank and dined like locals and that's when we knew, we could take this love global.</p>
              </figcaption>
            </figure>
          </section>
          <section className="card seven">
            <figure>
              <div className="image" />
              <figcaption>
                <h3>December 25, 2016</h3>
                <p>A "very Holguin-Furtado" Christmas... after a concussion sidelined Christina's plans for a California Christmas, we celebrated in Austin with crepes, espresso and Chinese food. Gathered around our tiny tree with our little family, we knew we had found home in each other.</p>
              </figcaption>
            </figure>
          </section>
          <section className="card eight">
            <figure>
              <div className="image" />
              <figcaption>
                <h3>April 28, 2017</h3>
                <p>She said "sim!"... In Texas wine country (Fredericksburg), in front Messina Hof winery, Josh popped the question, in Portuguese no less! With our parents capturing the moment, we knew it was time we sealed the deal. Which leads us to... </p>
              </figcaption>
            </figure>
          </section>
        </div>
      </section>
    )
  }
}