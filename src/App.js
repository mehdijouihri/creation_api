import React from "react";
import './App.css';

class App extends React.Component {
   
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    componentDidMount() {
        fetch("https://dummyjson.com/products/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json.products,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> New Arrival phones </h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                  <li class="list">
                       <li class="titre">title: { item.title }</li>
                       <li classe="descrip">description: { item.description }</li>
                       <li class="prix">price: { item.price } </li>
                   </li>
                       <img src={item.thumbnail} alt="images"></img>
                  </ol>

                ))
            }
        </div>
    );
}
}
   
export default App;
