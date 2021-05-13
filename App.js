import logo from './logo.svg';
import React,{Component} from'react';
import InputForm from './Component/InputForm'
import List from './Component/List'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pendingItem:""
    };
  }
  handleItemInput = e => {
    this.setState({ 
      pendingItem: e.target.value
    });
  }
  newItemSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      list: [
        {
          name: this.state.pendingItem,
        },
        ...this.state.list
      ],
      pendingItem: ""
    });
  };
  render() {
    return (
      <div className="wrapper">
       
        <InputForm
          className="input"
          type="text"
          handleItemInput={this.handleItemInput}
          newItemSubmitHandler={this.newItemSubmitHandler}
          pendingItem={this.state.pendingItem}
        />
       
      <List list={this.state.list}/>
    </div>
    );
  }

}
export default App
