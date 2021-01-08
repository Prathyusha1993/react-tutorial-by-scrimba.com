function DateApp () {

    const styles = {
        //color:"orange",
        backgroundColor: "black",
        fontSize: 20   //default is pixels and if we are mentioning 200px it should be as "200px"
    }

    const date = new Date()
    // const date1 = new Date(2021, 1, 5, 15)   //dynamically giving the year date and time 
    const hours = date.getHours()
    let timeOfDay
    if(hours < 12){
        timeOfDay = "Morning"
        styles.color = "green"      //as styles is an object i can acess and give the color as shown here
    }else if(hours >= 12 && hours < 17){
        timeOfDay = "Afternoon"
        styles.color = "red"
    } else {
        timeOfDay = "Night"
        styles.color = "blue"
    }

    return(
        <div>
            <h3>It is currently about {date.getHours() % 12} o' clock</h3>
            {/* inline styling in javascript */}   
            {/* <h2 style={"color:orange", "background-color: FF2D00"}> Good {timeOfDay}</h2>  */}
            {/* inline styling  default is pixels for fontsize*/}  
            <h2 style={{color:"orange", backgroundColor: "black", fontSize: 20}}> Good {timeOfDay}</h2>  
            {/* internal styling */}
            <h4 style={styles}> Good {timeOfDay}</h4>  
        </div>
    )
}

export default DateApp;