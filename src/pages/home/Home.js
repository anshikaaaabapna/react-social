import "./Home.css"
import Topbar from "../../components/Topbar/Topbar"
import Sidebar from "../../components/Topbar/sidebar/Sidebar"
import Feed from "../../components/Topbar/feed/Feed"
import Rightbar from "../../components/Topbar/rightbar/Rightbar"

export default function Home() {
  return (
    <div>
      <Topbar />
    <div className="homeContainer">
    <Sidebar />
    <Feed />
    <Rightbar />
    </div>


      
    </div>
  )
}
