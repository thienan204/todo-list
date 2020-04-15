import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  state = {
    items: [],
    id: uuidv4(),
    item: '',
    editItem: false
  }
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
  console.log("Iteem",this.state.item)

    const NewItem={
      id:this.state.id,
      title:this.state.item,
    }

    const updatedItem=[...this.state.items,NewItem]

    this.setState({
      items:updatedItem,
      item:'',
      id:uuidv4(),
      editItem:false

    })
  }
  clearList=()=>{
    this.setState({
      items:[]
    })
  }
  handleDelete=(id)=>{
    console.log("delete",id)
    const filtedItems=this.state.items.filter(item=>item.id!==id)
    this.setState({
      items:filtedItems
    })
  }
  handleEdit=(id)=>{
    console.log("dit",id)
    const filtedItem=this.state.items.filter(item=>item.id!==id)
    const selectedItem=this.state.items.find(item=>item.id===id)
    console.log("sleced item",selectedItem)
    this.setState({
      items:filtedItem,
      item:selectedItem.title,
      editItem:true,
      id:id
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>

    );
  }

}

export default App;
