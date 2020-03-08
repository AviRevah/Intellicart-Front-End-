
import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';
import  { Component } from 'react';
import ReactDOM from 'react-dom';
import InputLabel from "@material-ui/core/InputLabel";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import CardFooter from "components/Card/CardFooter.js";
import avatar from "assets/img/faces/marc.jpg";


const https = require('https');
const http = require('http');
const axios = require('axios');

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};




class Typography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stations:[{}],
      time:'',
      cartInventory:'',
      max10:'',
      max5:'',
      max2:'',
      max1:'',
      current10:'',
      current5:'',
      current2:'',
      current1:'',
      

    };
    // this.handleChange = this.handleChange.bind(this);
 
  }


  componentDidMount(){
    fetch('http://localhost:3001/stations')
      .then((response) => response.json())
      .then((stations) =>
       {
       this.setState({
        stations: stations
       })
            })
    }



//    SendPost=()=>{

//     alert("station updated");  

//         var body = '{"max_10_nis_inv":'
//         +this.state.max10+',"max_5_nis_inv":'
//         +this.state.max5+',"max_2_nis_inv": '
//         +this.state.max2+',"max_1_nis_inv": '
//         +this.state.max1+',"current_10_nis_inv":'
//         +this.state.current10+',"current_5_nis_inv": '
//         +this.state.current5+',"current_2_nis_inv": '
//         +this.state.current2+',"current_1_nis_inv": '
//         +this.state.current1+',"cart_inv": '
//         +this.state.cartInventory+',"timer": '
//         +this.state.time+
//         '}';
      
//         var postRequest = {
//           host: "localhost",
//           path: "/stations",
//           port: 3001,
//           method: "POST",
//           headers: {
//             'Content-Type': 'application/json',
//             'Content-Length': Buffer.byteLength(body)
//           }
//         };
      
//         // var buffer = "";
      
//         var req = http.request(postRequest, function (res) {
      
//           console.log("status: ",res.statusCode);
//           var buffer = "";
//           res.on("data", function (data) { buffer = buffer + data; });
//           res.on("end", function (data) { console.log(buffer); });
      
//         });
      
//         req.on('error', function (e) {
//           console.log('problem with request: ' + e.message);
//         });
      


//         req.write(body);
//         req.end();
      
//       }
      


  render()  
  {
  

      return (
 

      <div>
     {
        this.state.stations.map((e,id)=>
<div>

    
<GridContainer>
  <GridItem xs={12} sm={12} md={8}>
    <Card>
      <CardHeader color="primary">
        <h4 >Client  {e.station_id}</h4>
      </CardHeader>
      <CardBody>

          <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
          
            <Button color="primary">Client 1</Button>
             {/* <CustomInput 
                    labelText= {e.timer}
                    id="timer"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled:false,
                      onChange: (event) => this.handleTimeChange(event),
                      type: "text",
                   
                    }}
                  /> */}
      
          </GridItem>
          
          <GridItem xs={12} sm={12} md={3}>
          
            <Button color="primary">Client 2</Button>
             {/* <CustomInput 
                    labelText= {e.timer}
                    id="timer"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled:false,
                      onChange: (event) => this.handleTimeChange(event),
                      type: "text",
                   
                    }}
                  /> */}
      
          </GridItem>
          
          <GridItem xs={12} sm={12} md={3}>
          
            <Button color="primary">Client 3</Button>
             {/* <CustomInput 
                    labelText= {e.timer}
                    id="timer"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled:false,
                      onChange: (event) => this.handleTimeChange(event),
                      type: "text",
                   
                    }}
                  /> */}
      
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          
          <Button color="primary">Client 4</Button>
           {/* <CustomInput 
                  labelText= {e.timer}
                  id="timer"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    disabled:false,
                    onChange: (event) => this.handleTimeChange(event),
                    type: "text",
                 
                  }}
                /> */}
    
        </GridItem>
    
      

          </GridContainer>
     
      </CardBody>
      <CardFooter>
    
        {/* <Button onClick={this.SendPost} color="primary">Update Station</Button> */}
      </CardFooter>
    </Card>
  </GridItem>
  <GridItem xs={12} sm={12} md={4}>
  </GridItem>
</GridContainer>
</div>

        )
  }
    </div>
  );
  }
}

ReactDOM.render(

  
  <Typography />,
  document.getElementById('root')
);



export default Typography






