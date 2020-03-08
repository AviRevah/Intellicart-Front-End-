//Contact.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from "components/Card/Card.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardHeader from "components/Card/CardHeader.js";


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



class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs:[{}],
    }
    // this.state = { logs: [{id:1,commands:"hh"},{id:2,commands:"mm"}] };
  }

  componentDidMount(){
    fetch('http://localhost:3001/logs')
      .then((response) => response.json())
      .then((logs) =>
       {
       this.setState({
         logs: logs
       })
            })
    }
  render() 
  {
    return (
      
    <div>
      {/* click Logs buttom above to see the logs dear developer */}
     {
        this.state.logs.map((e,id)=>
        <GridContainer>
          <GridItem xs={12} sm={8} md={8}>
          <CardHeader >
        <h20>Log id:  {e.id}</h20>
      </CardHeader>
        <Card>
        <div>
        {e.commands} <br/>
        {e.interrupts} <br/>
        {e.info} <br/>
        </div>
        </Card>
        </GridItem>
        </GridContainer>
        )
  }
    </div>
    
    );
  }
}

ReactDOM.render(

  
  <Contact />,
  document.getElementById('root')
);
export default Contact