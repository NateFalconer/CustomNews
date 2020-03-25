import React, { Component } from "react";
import Pagination from 'react-bootstrap/Pagination'

class NextButton extends Component {

    state = {
        index: 4
    }
    paginationBasic = () => {
        let active = 1;
        let items = [];
        for (let number = 1; number <= 4; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active} 
                onClick={() =>
                    this.setState({
                      index:
                        this.state.index > 0 ? this.state.index - 1 : this.state.index
                    })}>
                    {number}
                </Pagination.Item>,
            );
        }
        return(
        <div>
            <Pagination size="lg">{items}</Pagination>
            <br />
        </div>
        )
    }

    render() {
        return (<div>
            {this.paginationBasic()}
        </div>
        )
    }
}

export default NextButton;
