import React, {Component} from 'react'
import {render} from 'react-dom'
import MuiThemneProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const TextInputFields = () => (
    <div>
                     <TextField hintText="Enter Your Name"   value={this.state.name} onChange={(e, newValue) => this.setState({ name: newValue})}/>
                    <TextField hintText="Minimum Number" value={this.state.min} onChange={(e, newValue) => this.setState({ min: newValue})} />
                    <TextField hintText="Maximum Number" value={this.state.max} onChange={(e, newValue) => this.setState({ max: newValue})} />
                     <RaisedButton label="Continue" primary={true} onTouchTap={() => {} }/> 
    </div>
    )
export class Heading extends Component {
    render() {
        return (
            <form>
                {/* <h1 className='myHeading'> Say hello to Redux </h1> */}
               <MuiThemneProvider>                    
                   <TextInputFields />
               </MuiThemneProvider>
                
            </form>
        )
    }
}