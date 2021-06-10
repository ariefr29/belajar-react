import logo from "./logo.svg";
import "./App.css";
import Card from "./component/Card";
import route from "./routes";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"




const App = () => {
  return (
      <div>
        <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/singlepost"> Single Post</Link>
        </div>
        <Switch>
          {
            route.map((item, index) => {
              console.log(item)
              return (
                <Route path={item.path} component={item.component} exact={item.exact} key={index} />
              )
            })
          }
        </Switch>
      </BrowserRouter>
      </div>
  )
}


// function App() {
//   return (
//     <div className="wrapper">
//       <div className="row">
//         <Card
//           image="https://obs.line-scdn.net/0h5ywUzbn8alZKLEAwYNwVAXB6aTl5QHlVLho7SBpCNGI1HS0DcBojOGkpMmE0Ty0IJB0gNmkkcWdvHngFIkIj/w644"
//           title="judul 1"
//           user="Muhamad Irva"
//         />
//         <Card
//           image="https://cdn-image.hipwee.com/wp-content/uploads/2020/03/hipwee-Kan-saya-belanjanya-cuma-dikit-nggak-banyak-ini.-Cepet-kok-pasti-9.png"
//           title="judul 2"
//           user="Aria KM"
//         />
//         <Card
//           image="https://media-assets-ggwp.s3.ap-southeast-1.amazonaws.com/2020/07/arti-wibu-cv-640x360.jpg"
//           title="judul 3"
//           user="Age S"
//         />
//         <Card
//           image="https://media.lawgo.id/storage/vYg4LYG75x58XvJ0BYmq6uEG704ythpOQe81g66By9E.jpg"
//           title="judul 4"
//           user="Willy Ferry"
//         />
//         <Card
//           image="https://media.lawgo.id/storage/vYg4LYG75x58XvJ0BYmq6uEG704ythpOQe81g66By9E.jpg"
//           title="judul 5"
//           user="Alvin Faiz"
//         />
//         <Card
//           image="https://media.suara.com/pictures/480x260/2015/04/02/o_19ht7ql4fffu10b61laf1avpddda.jpg"
//           title="judul 6"
//           user="Arief R"
//         />
//       </div>
//     </div>
//   );
// }

export default App;
