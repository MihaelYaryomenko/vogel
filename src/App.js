import './App.scss'
import SideBarButton from './components/SideBarButton'
import homeLogo from './images/home.svg'
import compassLogo from './images/compass-alt.svg'
import languageLogo from './images/language.svg'
import portraitLogo from './images/portrait.svg'
import signoutLogo from './images/sign-out-alt.svg'
import pagesLogo from './images/window-maximize.svg'
import flameLogo from './images/flame.svg'

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
    </>
  )
}

export default App
