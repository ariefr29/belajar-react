import "./App.css";
import Header from "./component/Header";
import Card from "./component/Card";
import route from "./routes";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom"




const Latihan = () => {
  return (
      <div>

        <Header 
          name="Logor" 
          image="https://lh3.googleusercontent.com/a-/AOh14GiCijaPPDfb-nmdVFlSFM6rpHzHlNNFOjhop56l=s288-p-no" 
          urlButton="http://facebook.com/logor.logor.315" 
        />

        <BrowserRouter>
          <div className="menu flex-container flex-justify-center text-bold">
            {
              route.map((item, index) => {
                console.log(item)
                return (
                  <NavLink exact to={item.path} key={index}> {item.name} </NavLink>
                )
              })
            }
          </div>

          <div className="wrap">
            <div className="centerx px-md-1rem">
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
            </div>
          </div>
        </BrowserRouter>

      </div>
    )
}


export default Latihan;
