/* Components */
import * as Playlist from "../src/Feature/MusicTracker/components/Datatable.component";
import Header from "./components/Header/Header.component";
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
    /*     { path: "component2", element: <Component2 /> }, */
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

/*
export default App; */

