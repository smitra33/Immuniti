import React, { Component } from 'react'   
import Toolbar from '@material-ui/core/Toolbar';  
import TextField from '@material-ui/core/TextField';  
import Checkbox from '@material-ui/core/Checkbox';  
import Button from '@material-ui/core/Button';
export class Navbar extends Component {  
        render() {  
                return (  
                        <div>  
                                <br></br>
                                <div>  
                                    <h2> Immunity Checklist </h2>
                                 </div>   
                                 <Button variant="contained">Exercise</Button>
                                <Checkbox  
                                        value="primary"  
                                        inputProps={{ 'aria-label': 'primary checkbox' }}  
                                />  
                                <br></br>
                                <Button variant="contained">8 hours of Sleep</Button>
                                <Checkbox  
                                        value="primary"  
                                        inputProps={{ 'aria-label': 'primary checkbox' }}  
                                />  
                                 <br></br>
                                <Button variant="contained">Wash Hands</Button>
                                <Checkbox  
                                        value="primary"  
                                        inputProps={{ 'aria-label': 'primary checkbox' }}  
                                />  
                                <br></br>
                                <Button variant="contained">Drink Enough Water</Button>
                                <Checkbox  
                                        value="primary"  
                                        inputProps={{ 'aria-label': 'primary checkbox' }}  
                                />  
                                   <br></br>
                                <Button variant="contained">Fruits and Vegetables</Button>
                                <Checkbox  
                                        value="primary"  
                                        inputProps={{ 'aria-label': 'primary checkbox' }}  
                                />  
                                      <br></br>
                                <Button variant="contained">Destress Activity</Button>
                                <Checkbox  
                                        value="primary"  
                                        inputProps={{ 'aria-label': 'primary checkbox' }}  
                                />  
                                           <br></br>
                                <Button variant="contained">Social Interaction</Button>
                                <Checkbox  
                                        value="primary"  
                                        inputProps={{ 'aria-label': 'primary checkbox' }}  
                                />  
                        </div>  
                )  
        }  
}  

export default Navbar  