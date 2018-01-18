import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemneProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';

import {myHeadingBlue} from './heading.css' 

console.log('React service started at port 3000!')

const style = {
                num1: 0,
                num2: 0,
                height: 70,
                width: 70,
                margin: 10,
                backgroundColor: '#76D8E3',
                textAlign: 'center',
                display: 'inline-block',
              }

const styleSquare = {
                      height: 350,
                      width: 250,
                      margin: 10,
                      textAlign: 'center',
                      display: 'inline-block',
                    }

const styleSnackbar = {
                        top: 'auto',
                        bottom: 'auto',
                        left: 'auto',
                        transform:'translate3d(0, -50px, 0)',
                        minWidth: 1385,
                      }

const getRndInteger = (min=0, max=10) => Math.floor(Math.random() * (max - min + 1) ) + min

injectTapEventPlugin()



class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
        num1: 0,
        num2: 0,
        answer: '',
        sum: 0,
        clicks: 0,
        min: 0,
        max: 0,
        name: 'Unknown',
        open: false,
        snackbarMessage: '',
        alertOpen: false,
        alertMessage: ''
    }
    //this.increment = this.increment.bind(this)
    //this.decrement = this.decrement.bind(this)
    //this.nextQuestion = this.nextQuestion.bind(this)
  }

  handleChange = (event) => {
    console.log('inside handleChange')
    !isNaN(event.target.value) ?      
          this.setState({ answer: parseInt(event.target.value, 10) })
          : console.log('input is not a number')
          !isNaN(event.target.value) ?  
            this.state.num1+this.state.num2 === parseInt(event.target.value, 10) ? this.setState({sum: this.state.sum+1, snackbarMessage: `Wow, ${event.target.value} is correct!`, open: true, clicks: this.state.clicks+1, 
              }) 
                      : console.log("The answer is not correct yet!")
     : this.setState({answer: ''})  
  }

  handleSkipQuestion = () => {
    this.setState({
        clicks: this.state.clicks+1, num1: this.state.num1=Math.floor(Math.random() * (10 - 0 + 1) ) + 0, num2: this.state.num1=Math.floor(Math.random() * (10 - 0 + 1) ) + 0, answer: this.state.answer=''
    })                    
  }

  handleRequestClose = () => {
      console.log("inside handleRequestclose")
    this.setState({
      open: false,
      num1: this.state.num1=Math.floor(Math.random() * (10 - 0 + 1) ) + 0, num2: this.state.num1=Math.floor(Math.random() * (10 - 0 + 1) ) + 0, answer: this.state.answer='',
      snackbarMessage: ''
    })
  }
  
  alertHandleOpen = () => {
    this.setState({alertOpen: true});
  };

  alertHandleClose = () => {
    this.setState({alertOpen: false});
    this.setState({answer: ''})
  };

  // focusAnswerTextField(){
  //   this.refs.answerTextField.focus()
  // }

  componentWillMount() {
    this.setState({clicks: this.state.clicks+1,num1: this.state.num1=Math.floor(Math.random() * (10 - 0 + 1) ) + 0, num2: this.state.num1=Math.floor(Math.random() * (10 - 0 + 1) ) + 0})    
    console.log("componentWillMount"+this.state.sum)
    console.log("componentWillMount"+this.state.num1)
    console.log("componentWillMount"+this.state.num2)
  }

  componentDidMount() {
    console.log("componentDidMount: "+this.state.sum)
    console.log("componentDidMount: "+this.state.num1)
    console.log("componentDidMount: "+this.state.num2)
    //this.focusAnswerTextField()
   }

   clicksCount = () => 
      this.setState({
      clicks: this.state.clicks + 1
   }) 

  render() {
    const alertActions = [        
      <FlatButton
        label="Ok"
        primary={true}
        onClick={this.alertHandleClose}
      />
    ]

    return (
      <MuiThemneProvider>
        <center>
          <div className="App">
          <Paper zDepth={5}> <header className="App-header">           
              <h1 className="App-title">Math For Children </h1>
            </header> </Paper>          
            {/* <Paper zDepth={5}> 
              <p className='myHeadingBlue'>Question Number: { this.state.clicks} </p>                      
            </Paper> */}
            <Paper zDepth={2} style={styleSquare}>               
              <Paper style={style} zDepth={2} circle={true} >          
              <h1> {this.state.num1!==this.state.num2 ?this.state.num1 : Math.floor(Math.random() * (10 - 0 + 1) ) + 0}</h1>  
              {console.log(this.state.num1)}
              </Paper> 
              <div> 
                <h2> + </h2>
              </div> 
              <Paper style={style} zDepth={2} circle={true} >             
                <div> <h1> {this.state.num2!==this.state.num1 ? this.state.num2 : Math.floor(Math.random() * (10 - 0 + 1) ) + 0}</h1> </div>
                {console.log(this.state.num2)}
              </Paper> 
              <Divider /> 
              <TextField autoFocus={true} 
                ref="answerTextField" 
                hintText="?" 
                hintStyle={{ width: '200px', height: '40px', textAlign: 'center' }} 
                inputStyle={{ textAlign: 'center'  }} 
                style={{ fontSize: '63px', margin: 15,    height: '80px', width: '200px',   backgroundColor: '#fff176',}} 
                underlineShow={false}   
                value={this.state.answer}
                onChange={ this.handleChange }    
                onInput={(e)=>{e.target.value = Math.max(0, parseInt(e.target.value, 10) ).toString().slice(0,2)}}
                min={0}       
              />
              <Snackbar bodyStyle={{ border: "2px solid #ffffff", backgroundColor: 'teal', color: 'coral',   minWidth: '14.5%', maxWidth: '14.5%', height:'55px', fontWeight: 400, fontSize: 16}}
                open={this.state.open}
                message={this.state.snackbarMessage}
                autoHideDuration={2000}
                onRequestClose={this.handleRequestClose}
                style={styleSnackbar} 
              />

              <Dialog
                actions={alertActions}
                modal={false}
                open={this.state.alertOpen}
                onRequestClose={this.alertHandleClose}
              >
              {this.state.alertMessage}
              </Dialog>
              <RaisedButton label="Skip this question" secondary={true} fullWidth={true} onClick={this.handleSkipQuestion}/> 
            </Paper>
            <Paper zDepth={5}><p className='myHeadingBlue'>Your Score: { this.state.sum }  </p> 
            </Paper>         
          </div>
        </center>
      </MuiThemneProvider> 
    );
  }
}

export default App;
