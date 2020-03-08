
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
import { transition } from "assets/jss/material-dashboard-react";




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
      display:"none",
      isClicked:false,
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



   SendPost=()=>{

    alert("station updated");  

        var body = '{"max_10_nis_inv":'
        +this.state.max10+',"max_5_nis_inv":'
        +this.state.max5+',"max_2_nis_inv": '
        +this.state.max2+',"max_1_nis_inv": '
        +this.state.max1+',"current_10_nis_inv":'
        +this.state.current10+',"current_5_nis_inv": '
        +this.state.current5+',"current_2_nis_inv": '
        +this.state.current2+',"current_1_nis_inv": '
        +this.state.current1+',"cart_inv": '
        +this.state.cartInventory+',"timer": '
        +this.state.time+
        '}';
      
        var postRequest = {
          host: "localhost",
          path: "/stations",
          port: 3001,
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(body)
          }
        };
      
        // var buffer = "";
      
        var req = http.request(postRequest, function (res) {
      
          console.log("status: ",res.statusCode);
          var buffer = "";
          res.on("data", function (data) { buffer = buffer + data; });
          res.on("end", function (data) { console.log(buffer); });
      
        });
      
        req.on('error', function (e) {
          console.log('problem with request: ' + e.message);
        });
      


        req.write(body);
        req.end();
      
      }
      
      ////////////////////////////////////
      ///setting cart states functions ///
      ///////////////////////////////////

      handleTimeChange=(element)=> {
        this.setState({time:element.target.value})
      }

      handleCartChange=(element)=>{
        this.setState({cartInventory:element.target.value})
      }

      handleTenChange=(element)=>{
        this.setState({max10:element.target.value})
      }

      handleFiveChange=(element)=>{
        this.setState({max5:element.target.value})
      }
      
      handleTwoChange=(element)=>{
        this.setState({max2:element.target.value})
      }

      handleOneChange=(element)=>{
        this.setState({max1:element.target.value})
      }

      handleCurrentTenChange=(element)=>{
        this.setState({current10:element.target.value})
      }
      handleCurrentFiveChange=(element)=>{
        this.setState({current5:element.target.value})
      }
      handleCurrentTwoChange=(element)=>{
        this.setState({current2:element.target.value})
      }
      handleCurrentOneChange=(element)=>{
        this.setState({current1:element.target.value})
      }


      // function display header off/on //
     // ///////////////////////////////// //


      isClicked=()=>{
        if(this.state.isClicked===false){
          this.setState({isClicked:true, display:""})

        }
        else{
       
            this.setState({isClicked:false,display:"none"})
          
        }
        
      }

            // ///////////////////////////////// //

      
     

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
      <CardHeader  onClick={()=>{this.isClicked()}} style={{cursor:"pointer"}} color="primary">
        <h4 >Station:  {e.station_id}</h4>
      </CardHeader>
      <CardBody>
        

        <GridContainer style={{display:this.state.display, transitiondelay:1}}>
          <GridItem xs={12} sm={12} md={3}>
          Timer (secs) 
          <div className="text-box" style={{position:"absolute", backgroundColor:"black",width:230 ,height:45, borderRadius:4, opacity:0.07}}></div>
             <CustomInput 
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
                  />
      
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          Cart inventory 
          <div className="text-box" style={{position:"absolute", backgroundColor:"black",width:230 ,height:45, borderRadius:4, opacity:0.07}}></div>
            <CustomInput
              labelText={e.cart_inv}
              id="cart_inventory"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: (event) => this.handleCartChange(event),
                type: "text",
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          Max 10 NIS inventory 
          <div className="text-box" style={{position:"absolute", backgroundColor:"black",width:230 ,height:45, borderRadius:4, opacity:0.07}}></div>
            <CustomInput
              labelText={e.max_10_nis_inv}  
              id="max_10 _NIS_inventory"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: (event) => this.handleTenChange(event),
                type: "text",
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          Max 5 NIS inventory 
          <div className="text-box" style={{position:"absolute", backgroundColor:"black",width:230 ,height:45, borderRadius:4, opacity:0.07}}></div>
            <CustomInput
              labelText={e.max_5_nis_inv}
              id="max_5 _NIS_inventory"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: (event) => this.handleFiveChange(event),
                type: "text",
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          Max 2 NIS inventory 
          <div className="text-box" style={{position:"absolute", backgroundColor:"black",width:230 ,height:45, borderRadius:4, opacity:0.07}}></div>
            <CustomInput
              labelText={e.max_2_nis_inv}
              id="max_2 _NIS_inventory"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: (event) => this.handleTwoChange(event),
                type: "text",
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          Max 1 NIS inventory 
          <div className="text-box" style={{position:"absolute", backgroundColor:"black",width:230 ,height:45, borderRadius:4, opacity:0.07}}></div>
            <CustomInput
              labelText={e.max_1_nis_inv}
              id="max_1 _NIS_inventory"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: (event) => this.handleOneChange(event),
                type: "text",
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
Current 10 NIS inventory  
<div className="text-box" style={{position:"absolute", backgroundColor:"black",width:230 ,height:45, borderRadius:4, opacity:0.07}}></div>
  <CustomInput
    labelText={e.current_10_nis_inv}
    id="current_10_NIS_inventory"
    formControlProps={{
      fullWidth: true
    }}
    inputProps={{
      onChange: (event) => this.handleCurrentTenChange(event),
      type: "text",
    }}
  />
</GridItem>
<GridItem xs={12} sm={12} md={3}>
Current 5 NIS inventory  
<div className="text-box" style={{position:"absolute", backgroundColor:"black",width:230 ,height:45, borderRadius:4, opacity:0.07}}></div>
  <CustomInput
    labelText={e.current_5_nis_inv}
    id="current_5_NIS_inventory"
    formControlProps={{
      fullWidth: true
    }}
    inputProps={{
      onChange: (event) => this.handleCurrentFiveChange(event),
      type: "text",
    }}
  />
</GridItem>
<GridItem xs={12} sm={12} md={3}>
Current 2 NIS inventory  
<div className="text-box" style={{position:"absolute", backgroundColor:"black",width:230 ,height:45, borderRadius:4, opacity:0.07}}></div>
  <CustomInput
    labelText={e.current_2_nis_inv}
    id="current_2_NIS_inventory"
    formControlProps={{
      fullWidth: true
    }}
    inputProps={{
      onChange: (event) => this.handleCurrentTwoChange(event),
      type: "text",
    }}
  />
</GridItem>
<GridItem xs={12} sm={12} md={3}>
Current 1 NIS inventory
<div className="text-box" style={{position:"absolute", backgroundColor:"black",width:230 ,height:45, borderRadius:4, opacity:0.07}}></div>
  <CustomInput
    labelText={e.current_1_nis_inv}
    id="current_1_NIS_inventory"
    formControlProps={{
      fullWidth: true
    }}
    inputProps={{
      onChange: (event) => this.handleCurrentOneChange(event),
      type: "text",
    }}
  />
  
</GridItem>
        </GridContainer>
      </CardBody>
      <CardFooter>
        <Button style={{}} onClick={this.SendPost} color="primary">Update Station</Button>
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






