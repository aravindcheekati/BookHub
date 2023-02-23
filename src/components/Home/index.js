import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <div className="home">
          <NavBar />
          <div className="home-main">
            <h1 className="home-heading">Find Your Next Favorite Books?</h1>
            <p className="tag-line">
              You are in the right place. Tell us what titles or genres you have
              enjoyed in the past, and we will give you surprisingly insightful
              recommendations.
            </p>
            <div className="carousel-container">
              <div className="top-rated-text-container">
                <p>Top Rated Books</p>
                <button type="button">Find Books</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
