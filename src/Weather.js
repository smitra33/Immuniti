import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

export default function Weather({weather}) {
  
    return (
        <div className="Weather">
            <h1> Immuniti++ </h1>
            <Button variant="contained">Health Alerts</Button>
            <Button variant="contained" color="secondary"
            onClick={()=> alert("Resources Currently Not Available")}>
            Heath Resources
            </Button>
        </div>
    )
}
