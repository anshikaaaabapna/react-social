import "./topbar.css"
import {Search,Person,Chat, Notifications} from "@mui/icons-material"


export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Lamasocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar"><Search className="searchIcon" />
        <input placeholder="search for friends, post or any video" className="searchInput"></input>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconitem">
<Person />
<span className="topbarIconbadge">1</span>
          </div>
          <div className="topbarIconitem">
<Chat />
<span className="topbarIconbadge">1</span>
          </div>
          <div className="topbarIconitem">
<Notifications />
<span className="topbarIconbadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}
