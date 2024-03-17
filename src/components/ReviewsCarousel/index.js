// Write your code here
import {Component} from 'react'
import './index.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

class ReviewsCarousel extends Component {
  state = {reviewIndex: 0}

  onMoveLeft = () => {
    const {reviewIndex} = this.state
    if (reviewIndex !== 0) {
      this.setState(prevState => ({reviewIndex: prevState.reviewIndex - 1}))
    }
  }

  onMoveRight = () => {
    const {reviewIndex} = this.state
    if (reviewIndex !== reviewsList.length - 1) {
      this.setState(prevState => ({reviewIndex: prevState.reviewIndex + 1}))
    }
  }

  render() {
    const {reviewIndex} = this.state
    const reviewItem = reviewsList[reviewIndex]
    const {imgUrl, username, companyName, description} = reviewItem
    const leftArrow = (
      <img
        className="arrow"
        alt="left arrow"
        src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
        onClick={this.onMoveLeft}
      />
    )
    const rightArrow = (
      <img
        className="arrow"
        alt="right arrow"
        src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
        onClick={this.onMoveRight}
      />
    )
    return (
      <div className="app-contianer">
        <h1 className="title">Reviews</h1>
        <div className="review-container">
          <button className="arrow" data-testid="leftArrow" type="button">
            {leftArrow}
          </button>
          <div className="review-card">
            <img className="profile-pic" src={imgUrl} alt={username} />
            <p className="name">{username}</p>
            <p className="details">{companyName}</p>
            <p className="details">{description}</p>
          </div>
          <button className="arrow" data-testid="rightArrow" type="button">
            {rightArrow}
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
