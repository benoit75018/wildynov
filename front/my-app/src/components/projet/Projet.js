
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Projet.css';
import  NavBar from '../AppBar'
import ResponsiveDialog from './modalform'

class ModalSwitch extends React.Component {
    constructor(props){
        super(props);
        this.state={
        Titre:'',
        last_name:'',
        
        }
       }
       
render() {
          


 return (
   /*CREATE ROUTE*/
           <div>

          <Switch >
               <Route exact path="/projet" component={Projets} />   
            
          </Switch>
     
       
          </div>
    );
  }
}



/*FRONT OF THIS FILE */
export const Projets = () => (

  <div>
{/* CAN CLICK ON LOGO  */}
    <a href="#" linkButton={true} href="/home"class="brand-logo center">{<img src="https://image.noelshack.com/fichiers/2018/24/3/1528883121-webp-net-resizeimage.png" />}</a>
    <NavBar/>
    <ResponsiveDialog/>
       
  </div>
        
)
     
  
        /*/EXPORT THIS FILE */
export const Projet = () => (
          <Router>
            <Route component={ModalSwitch} />
          </Router>
        );
        

export default Projet;