/* Components */
import MusicTracker from "../src/Feature/MusicTracker/views/Home/Tracker.component";
import Navbar from "./components/Navbar/Navbar.component";
import Homepage from "./Feature/Home/views/Homepage.component";
import { ApolloProvider } from '@apollo/client'
import client from './services/ApolloSetup'

import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/musictracker", element: <MusicTracker /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <App />
      </Router>
    </ApolloProvider>
  );
};

export default AppWrapper;

/*
export default App; */

