import React from 'react'

const SideBarButton = ({ icon, text }) => {
  return (
    <div className="sidebarButton">
      <img className="sidebarIcon" src={icon} alt={text} />
      <p className="sidebarParagraph">{text.toUpperCase()}</p>
    </div>
  )
}

export default SideBarButton
