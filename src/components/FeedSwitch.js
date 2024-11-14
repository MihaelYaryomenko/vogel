import React from 'react'

const SideBarButton = ({ icon, text }) => {
  return (
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
 )
}

export default SideBarButton
