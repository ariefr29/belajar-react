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
          image="https://scontent.fcgk3-2.fna.fbcdn.net/v/t1.6435-9/72103795_114747836598527_93424407795466240_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeF696LHbPEHrqUOwTX-ba1wWntd1f2CsMVae13V_YKwxULzdN5X19ZULeHg9ywF5LnmjO01rktglnJyF1Io0VrI&_nc_ohc=ZqZdJ5YHPUAAX_Tx4uc&_nc_ht=scontent.fcgk3-2.fna&oh=9b674cdf9b1fce24514ecb2acc2fb388&oe=60E90494" 
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
