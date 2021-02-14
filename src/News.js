import React from 'react'
import Typography from '@material-ui/core/Typography';


export default function News({news}){

    return (
            <div className = "News">
            <br></br>
            <Typography variant="h2" component="h2">
            Public Health Alerts
            </Typography>
        
            {news.map((item, index) => {
                return <h3>{item.title}</h3>
            })}
            </div>
    )
}