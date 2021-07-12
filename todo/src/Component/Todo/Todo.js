import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {

    state={
        input:'',
        items:[]
    }

    handleChange=event=>{
        
     this.setState({
         input: event.target.value
     })
     
    }

    storeItems=(event)=>{
        event.preventDefault()
        const {input}=this.state;

             this.setState({
                 items:[...this.state.items,input],
                 input:''
                } )

            }

 deleteItem= key=>{
     
    this.setState({
        items:this.state.items.filter((data,index)=>index!==key)
    })
 }

    render() {
    const {input,items}=this.state;
    console.log(items)
    
        return (
            <div className='todoContainer'>
                <h1>Todo App</h1>
               <form className='inputSection' onSubmit={this.storeItems}>
                   <input type='text'onChange={this.handleChange}  value={input} placeholder='enter items..'></input>
              
                </form> 
                
                  <ul>
                     {items.map((data,index)=>(
                         <li key={index}>{data} <i class="fas  fa-trash-alt"  onClick={()=>this.deleteItem(index)} aria-hidden="true"></i>
                         
                         
                         </li>
                     )

                     )}
                      </ul>
               
            </div> 
           
        )
    }
}

