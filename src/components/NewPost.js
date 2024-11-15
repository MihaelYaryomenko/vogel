import React from 'react'
import { ReactComponent as ProfileLogo } from '../images/portrait.svg'
import { ReactComponent as PlusLogo } from '../images/plus.svg'

const newPost = () => {
  return (
    <div id="new-post-container">
      <ProfileLogo className="new-post-icon" style={{ fill: '#0d6efd' }} />
      <p id="new-post-paragraph">What's on your mind.</p>
      <PlusLogo className="new-post-icon" style={{ fill: '#0d6efd' }} />
    </div>
  )
}

export default newPost
