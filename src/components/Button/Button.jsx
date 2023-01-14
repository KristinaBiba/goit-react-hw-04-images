import { Component } from 'react';

export class Button extends Component {
    state = {
    page: 1,
}
   
    handleClick = () => {
        this.setState(prevState => { return { page: prevState.page + 1 } })
        return this.props.onClick(this.state.page);
    }
    render() {
        return <button type='button' className='button-load' onClick={this.handleClick}>Load more</button>
    }
}