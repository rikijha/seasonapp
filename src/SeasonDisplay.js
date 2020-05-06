import './SeasonDisplay.css';
import React from 'react';


const seasonConfig={
        winter:{
            text:"Burr, it is chilly",
            iconName:'snowflake'
        },
        summer:{
            text:"Let's hit the beach",
            iconName:'sun'
        }
}

class SeasonDisplay extends React.Component{

    constructor(props){
        super(props);
    }

   

    getSeason(lat,month){

        if(month >2 && month<9){
            return lat >0 ? 'summer':'winter';
        }else{
            return lat >0 ? 'winter': 'summer';
        }
    }

    render(){
        const season=this.getSeason(this.props.lat,new Date().getMonth());
        const {text,iconName}=seasonConfig[season];
        return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
        );
        
    }
}

export default SeasonDisplay;