import React,{Component} from 'react';

class App extends Component{
    state={
        time:5,
        time2:0
    }
    componentWillMount(){
        setInterval(()=>{
            let m=this.state.time;
            this.setState({time:m-1});
        },1000)
    }

    render(){
        if(this.state.time<0){
            alert("Done");
        }
        return(
            <div>
                <input onChange={event=>this.setState({time2:event.target.value})}/>
                <button onClick={()=>this.setState({time:this.state.time2})}>Add New Value</button>
                <p>{this.state.time}</p>
            </div>
        );
    }
}

export default App;