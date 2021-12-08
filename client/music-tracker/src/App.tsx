/* Components */
import MusicTracker from "../src/Feature/MusicTracker/views/Home/Tracker.component";
import Navbar from "./components/Navbar/Navbar.component";
import Homepage from "./Feature/Home/views/Homepage.component";

/* ApolloClient Setup */
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

/* const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});
 */

// function App() {
//   return (
//     /*     <ApolloProvider client={client}> */
//     /*     <Header></Header> */
//     <Routes>
//       <Route path="/" element={<Homepage />} />
//       {/*       <Route path="/musictracker" element={<Playlist />} /> */}
//     </Routes>
//     /*     </ApolloProvider> */
//   );
// }



const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/musictracker", element: <MusicTracker /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <Navbar />
      <App />
    </Router>
  );
};

export default AppWrapper;

/*
export default App; */

