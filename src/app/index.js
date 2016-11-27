// importing the React libraries
import React from "react";
import { render } from "react-dom";

// importing the Components
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            homeLink: "Home"
        };
    }

    onGreet() {
        alert("alert");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset">
                        <Home
                            name={"Bob"}
                            initialAge={23}
                            greet={this.onGreet}
                            changeLink ={this.onChangeLinkName.bind(this)}
                            initialLinkName={this.state.homeLink}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById("app"));
