import { Component } from 'react'

export class Mouse extends Component {


    state = {
        x: 0,
        y: 0,
    }

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY,
        })
    }

  render() {
    // console.log(this.props.children)
    return (
      <div 
        style={{height: '100vh'}}
        onMouseMove={this.handleMouseMove}
        >
            {/* {this.props.render(this.state)} */}
            {this.props.children(this.state)}
      </div>
    )
  }
}

export default Mouse