import React, { Component } from 'react'
import { connect } from "react-redux"
import { getTranslate } from 'react-localize-redux'
import './Venue.scss'

@connect((store) => {
  return {
    translate: getTranslate(store.local)
  }
})
export default class Venue extends Component{

  render(){

    const translate = this.props.translate

    return(
      <section className="container venue">
        <a id="venue" />
        <div>
          <h2>{translate("venue.title")}</h2>
          <h3>{translate("venue.sub_title")}</h3>
          <h4><a href="https://www.thevineyardatflorence.com/">The Vineyard at Florence</a></h4>
          <p>111 Via Francesco<br />
          Florence, TX 76527<br />
          5:30pm - 11pm</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.543658822416!2d-97.73135268487661!3d30.84345058733921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86452d896683f4d9%3A0xb2f4c2e466a9f209!2sThe+Vineyard+at+Florence!5e0!3m2!1sen!2sus!4v1498006890406" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className="lodging">
          <h2>Lodging</h2>
          <p>We have room blocks reserved for 2/23 - 2/25. Please feel free to visit the hotels below to find the accommodations best suited for your visit.</p>
          <article>
            <h3><a target="_blank" href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Furtado-Holguin%20Wedding%5Eausnb%60fhwfhwa%60129.00%60USD%60false%601%602/23/18%602/25/18%601/23/18&app=resvlink&stop_mobi=yes">Residence Inn By Marriott<br />Austin Northwest-The Domain Area</a></h3>
            <p>11301 Burnet Rd<br />Austin, Tx 78758<br /><a href="tel:512-719-7055">512-719-7055</a></p>
            <p>
              <a target="_blank" href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Furtado-Holguin%20Wedding%5Eausnb%60fhwfhwa%60129.00%60USD%60false%601%602/23/18%602/25/18%601/23/18&app=resvlink&stop_mobi=yes">
                Visit Website for offer
              </a>
            </p>
          </article>
          <article>
            <h3><a target="_blank" href="https://www.lonestarcourt.com/">Lone Star Court</a></h3>
            <p>10901 Domain Drive<br />Austin, Texas 78758<br /><a href="tel:512-814-2625">512-814-2625</a></p>
            <p>Group/Block Code: <strong>CHRISTINAJOSHUA</strong></p>
            <p>
              <a target="_blank" href="https://www.lonestarcourt.com/">
                Visit Website
              </a>
            </p>
          </article>
          <article>
            <h3><a target="_blank" href="https://us01.iqwebbook.com/TVAFTX655/">The Vineyard at Florence</a></h3>
            <p>There will be Villa Suites available for the night of the wedding onsite at the venue as well.</p>
            <p>111 Via Francesco<br />Florence, TX 76527<br /><a href="tel:512.572.7000">512.572.7000</a></p>
            <p>Code: <strong>HOL18</strong></p>
            <p>
              <a target="_blank" href="https://us01.iqwebbook.com/TVAFTX655/">
                Visit Website
              </a>
            </p>
          </article>
        </div>
      </section>
    )
  }
}