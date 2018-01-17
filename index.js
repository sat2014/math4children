import React, {createElement, Component} from 'react'
import {render} from 'react-dom'
//import {Heading} from './heading'
import {myHeading, myHeadingBlue} from './heading.css' 
import MuiThemneProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';

import { Provider } from 'react-redux'
import storeFactory from './store'
import sampleData from './initialState'
import putName from './actions'

const style = {
    num1: 0,
    num2: 0,
    height: 70,
    width: 70,
    margin: 10,
    backgroundColor: '#76D8E3',
    textAlign: 'center',
    display: 'inline-block',
  };

  const styleSquare = {
    height: 350,
    width: 250,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
  };

  const styleSnackbar = {
    top: 'auto',
    bottom: 'auto',
    left: 'auto',
    transform:'translate3d(0, -50px, 0)',
  };

const initialState = (localStorage["redux1-store"]) ?
    JSON.parse(localStorage["redux1-store"]) :
    sampleData

const saveState = () => 
    localStorage["redux1-store"] = JSON.stringify(store.getState())

const store = storeFactory(initialState)
store.subscribe(saveState)

window.React = React
window.store = store

injectTapEventPlugin()

console.log('React service started at port 3000!')

// render(
//     createElement('h1', { className: 'myHeading' }, 'Say Hello to Redux!'),    
//     document.getElementById('react-container')
//   );

const Button = props =>      
      <button onClick={props.onClick}>{ props.text }</button>  

const getRndInteger = (min=0, max=10) =>
     Math.floor(Math.random() * (max - min + 1) ) + min

  
export class Counter extends Component {
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
          open: false
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.nextQuestion = this.nextQuestion.bind(this)
    }

    handleChange = (event) => {
        this.setState({
          answer: parseInt(event.target.value)
        })
              this.state.num1+this.state.num2 == parseInt(event.target.value) ? this.setState({sum: this.state.sum+1, open: true, clicks: this.state.clicks+1, num1: this.state.num1=Math.floor(Math.random() * (10 - 0 + 1) ) + 0, num2: this.state.num1=Math.floor(Math.random() * (10 - 0 + 1) ) + 0, answer: this.state.answer=''}) 
                        : console.log("The answer is not correct yet!")
       
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
        });
      };

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
       }

    nextQuestion = (event) => {     
        console.log("inside nextQuestion") 
        
          let n1 = Math.floor(Math.random() * (10 - 0 + 1) ) + 0
          let n2 = Math.floor(Math.random() * (10 - 0 + 1) ) + 0
        //  console.log("nextQuestion"+n1)
        //  console.log(n2)
         this.setState({
        num1:  n1,
      num2:  n2
         })
    }

    increment = () => 
        this.setState({
            clicks: this.state.clicks + 1,
          sum: this.state.sum + 1
        }) 

    decrement = () => 
        this.setState({
            clicks: this.state.clicks + 1,
          sum: this.state.sum - 1
        }) 

    doubleIncrement = () => 
        this.setState({
            clicks: this.state.clicks + 1,
          sum: this.state.sum + 2
        }) 

    doubleDecrement = () => 
        this.setState({
            clicks: this.state.clicks + 1,
          sum: this.state.sum - 2
        }) 

    clicksCount = () => 
        this.setState({
          clicks: this.state.clicks + 1
        }) 

        

    render() {
      return (
          <Provider store={store}>
          <MuiThemneProvider>       
        <div>         
          {/* <Heading> </Heading> */}
          <center>
          {/* <Paper zDepth={2}>
          <TextField hintText="Enter Your Name"  underlineShow={false}  onChange={(e, newValue) => this.setState({ name: newValue})}/><br/>
          <Divider />
                    <TextField hintText="Minimum Number" underlineShow={false}  onChange={(e, newValue) => this.setState({ min: newValue})} /> <br/>
                    <Divider />
                    <TextField hintText="Maximum Number" underlineShow={false}  onChange={(e, newValue) => this.setState({ max: newValue})} /> <br/>
                    <Divider />
                    </Paper>
                     <RaisedButton label="Done" primary={true} onTouchTap={() => {} }/>  */}
          
          <Paper zDepth={5}> <p className='myHeadingBlue'>Questions Number: { this.state.clicks} </p> 
          </Paper>
         
          {/* <Paper zDepth={2} >Score: { this.state.sum } </Paper>    */}
          <Paper zDepth={2} style={styleSquare}>     
            <Paper style={style} zDepth={2} circle={true} >
            {/* <h1> {this.state.num1=Math.floor(Math.random() * (10 - 0 + 1) ) + 0}</h1>            */}
            <h1> {this.state.num1!=this.state.num2 ?this.state.num1 : Math.floor(Math.random() * (10 - 0 + 1) ) + 0}</h1>  
            {console.log(this.state.num1)}
            </Paper> 
            <div> <h2> +</h2> </div> 
            <Paper style={style} zDepth={2} circle={true} >  
            {/* <div> <h1> {this.state.num2=Math.floor(Math.random() * (10 - 0 + 1) ) + 0}</h1> </div> */}
            <div> <h1> {this.state.num2!=this.state.num1 ? this.state.num2 : Math.floor(Math.random() * (10 - 0 + 1) ) + 0}</h1> </div>
            {console.log(this.state.num2)}
            </Paper> 
            <Divider /> 
            <TextField name="answerTextField" hintText="?" hintStyle={{ width: '200px', textAlign: 'center' }} inputStyle={{ textAlign: 'center' }} style={{ fontSize: '63px', margin: 15}} underlineShow={false}   
                 value={this.state.answer}
                 onChange={this.handleChange}                 
                // onChange={(e, newValue) =>  { 
                //      this.state.num1+this.state.num2 == parseInt(newValue) ? this.setState({sum: this.state.sum+1, num1: this.state.num1=Math.floor(Math.random() * (10 - 0 + 1) ) + 0, num2: this.state.num1=Math.floor(Math.random() * (10 - 0 + 1) ) + 0}) 
                //         : console.log("inside onChange: condiition not true")
                    
                        
               // }               
                   
           // } 
           />
           <Snackbar bodyStyle={{ backgroundColor: 'teal', color: 'coral' }}
          open={this.state.open}
          message="Correct!"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
           style={styleSnackbar} 
        />
               
        </Paper>
       <p />
             <RaisedButton label="Skip this question" primary={true} onClick={this.handleSkipQuestion}/>       
              {/* <Button text="add 1" onClick={ this.increment } /> */}
              {/* <p>     <Button text="subtract 1" onClick={ this.decrement } />
          </p>  
          {/* <p>
            <input type="text" name="fname" />
            <input type="submit" value="Submit" onClick={ this.increment }/>
          </p> */}
          {/* <p className='myHeadingBlue'>   */}
         
          <Paper zDepth={5}><p className='myHeadingBlue'>Your Score: { this.state.sum } </p> 
          </Paper> 
          {/* </p> */}
          {/* <p className='myHeadingBlue'>Name: { this.state.name } </p>
          <p className='myHeadingBlue'>Min: { this.state.min } </p>
          <p className='myHeadingBlue'>Max: { this.state.max } </p> */}
          </center>
        </div>

          </MuiThemneProvider>
          </Provider>
      );
    }
  }

  render(      
    <Counter />,
    document.getElementById('react-container')
  );