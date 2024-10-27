import { Component } from 'react'

export class Cat extends Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <>
      {/* <img
					src='https://i0.wp.com/aroundpet.ru/wp-content/uploads/kakie-koty-lovyat-myshei.jpg'
					style={{
						position: 'absolute',
						left: mouse.x,
						top: mouse.y,
						width: '200px',
					}}
					alt='Cat Hunt mouse'
				/> */}
      <p style={{fontSize: '25px'}}>
        Horiz: {mouse.x}, Vert: {mouse.y}
      </p>
      </>
    )
  }
}

export default Cat