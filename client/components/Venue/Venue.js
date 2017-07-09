import React, { Component } from 'react'
import './Venue.scss'

export default class Venue extends Component{

  render(){

    return(
      <section className="container venue">
        
        <div>
          <h3>Ceremony &amp; Reception</h3>
          <h4><a href="https://www.thevineyardatflorence.com/">The Vineyard at Florence</a></h4>
          <p>111 Via Francesco<br />
          Florence, TX 76527<br />
          5pm - 11pm</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.543658822416!2d-97.73135268487661!3d30.84345058733921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86452d896683f4d9%3A0xb2f4c2e466a9f209!2sThe+Vineyard+at+Florence!5e0!3m2!1sen!2sus!4v1498006890406" width="600" height="200" frameBorder="0" allowFullScreen></iframe>
        </div>
      </section>
    )
  }
}