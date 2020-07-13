import React from 'react'
import classes from './DashboardFooter.module.css'
const dashboardFooter = () => {
    return (
        <div className={classes.DashboardFooter}>
            <a href="/seller" style={{
                color : "white",
                fontSize : "30px",
                fontWeight : "bold",
                textDecoration : "none"
            }}>Wanna become a seller contact us!!!</a>
        </div>
    )
}

export default dashboardFooter;