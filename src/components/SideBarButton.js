import React from 'react'

const SideBarButton = ({ icon, text }) => {
  return (
    <div className="sideBarButton">
      <img className="sidebarIcon" src={icon} alt={text} />
      <p className="sidebar-paragraph">{text.toUpperCase()}</p>
    </div>
  )
}

export default SideBarButton
