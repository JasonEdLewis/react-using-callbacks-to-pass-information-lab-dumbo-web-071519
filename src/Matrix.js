import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state ={
      color:''
    }
  }
  handleColorSelector=(color)=>{
    this.setState ={ 
      color
    }
  }
  handleCell=()=>{
    this.genRow(this.props)
  }


  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
      // console.log(this.props)
    return (
      <div id="app">
        <ColorSelector handleColorSelector={this.handleColorSelector}/>
        <Cell handleCell={this.handleCell}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
