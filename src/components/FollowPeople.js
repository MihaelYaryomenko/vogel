import React from 'react'
import { ReactComponent as ArrowLogo } from '../images/arrow-right.svg'

const FollowPeople = () => {
  return (
    <div id="follow-people-container">
      <p id="follow-people-paragraph">Follow People</p>
      <ArrowLogo id="follow-people-arrow-icon" style={{ fill: 'black' }} />
    </div>
  )
}

export default FollowPeople
