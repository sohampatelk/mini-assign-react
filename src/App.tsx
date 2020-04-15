import React from 'react';
import { Button } from 'semantic-ui-react';

interface IAppProps {
}
interface IState {
  changeColor: string;
}

export default class App extends React.Component<IAppProps, IState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      changeColor: ""
    }
    console.log("We are in constructor() method..");
  }

  changeColor = () => {
    console.log("Now we are in changeColor() Method withch is going to be yellow..");
    this.setState({ changeColor: "Yellow" });
  }

  componentDidMount() {
    console.log("Component is created and we are in componentDidMount() function..");
    this.setState({ changeColor: "Blue" });
  }

  render() {
    console.log("We are in render() function");
    return (
      <div style={{ backgroundColor: this.state.changeColor }}  >
        <h1>{this.state.changeColor}</h1>
        <Button color="blue" size="large" content="Press button to change the background color" onClick={this.changeColor} />
      </div>
    );
  }
}