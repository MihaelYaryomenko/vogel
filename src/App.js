import './App.scss'
import SideBarButton from './components/SideBarButton'
import homeLogo from './images/home.svg'
import compassLogo from './images/compass-alt.svg'
import languageLogo from './images/language.svg'
import portraitLogo from './images/portrait.svg'
import signoutLogo from './images/sign-out-alt.svg'
import pagesLogo from './images/window-maximize.svg'
import flameLogo from './images/flame.svg'
import { ReactComponent as ProfileLogo } from './images/portrait.svg'
import { ReactComponent as PlusLogo } from './images/plus.svg'
import { ReactComponent as ArrowLogo } from './images/arrow-right.svg'

function App() {
  return (
    <>
      <div id="sidebar">
        <img id="vogel-logo" src="./logo.png" alt="" />
        <SideBarButton icon={homeLogo} text="feed" />
        <SideBarButton icon={portraitLogo} text="profile" />
        <SideBarButton icon={compassLogo} text="explore" />
        <SideBarButton icon={languageLogo} text="language" />
        <SideBarButton icon={signoutLogo} text="logout" />
        <SideBarButton icon={pagesLogo} text="pages" />
        <SideBarButton icon={flameLogo} text="trending" />
        <button id="blue-sign-in-btn">{'sign in +'.toUpperCase()}</button>
      </div>
      <div id="main-container">
        <div id="tabs-container">
          <div id="left-tabs-btn" className="tabs-btn  selected-tabs-btn">
            <p className="tabs-btn-paragraph">FEED</p>
            <div id="tabs-btn-border"></div>
          </div>
          <div className="tabs-btn">
            <p className="tabs-btn-paragraph">PEOPLE</p>
          </div>
          <div id="right-tabs-btn" className="tabs-btn">
            <p className="tabs-btn-paragraph">TRENDING</p>
          </div>
        </div>
        <div id="new-post-container">
          <ProfileLogo className="new-post-icon" style={{ fill: '#0d6efd' }} />
          <p id="new-post-paragraph">What's on your mind.</p>
          <PlusLogo className="new-post-icon" style={{ fill: '#0d6efd' }} />
        </div>
        <div id="follow-people-container">
          <p id="follow-people-paragraph">Follow People</p>
          <ArrowLogo id="follow-people-arrow-icon" style={{ fill: 'black' }} />
        </div>
      </div>
    </>
  )
}

export default App
