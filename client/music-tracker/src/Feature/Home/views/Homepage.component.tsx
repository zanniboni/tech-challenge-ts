import { Introduction } from "./Homepage.style";
import { Link } from 'react-router-dom'
import IconLabelButtons from '../components/Button.component'

const Homepage = () => {
  return (
    <>
      <Introduction>Welcome to iHeartMedia Music Tracker</Introduction>
      <Link to="/musictracker" style={{ textDecoration: 'none' }}><IconLabelButtons></IconLabelButtons></Link>
    </>
  )
};

export default Homepage;

