import React from 'react';


class Paginator extends React.Component {
    onPageChange = () => {
        var new_page;
        if (this.props.direction === 'left') {
            new_page = this.props.current_page - 1;
        }
        else {
            new_page = this.props.current_page + 1;
        }
        this.props.onButtonClick(new_page);
    }

    getButtonState = () => {
        if ((this.props.direction === 'left' && this.props.current_page === 1) || 
            (this.props.direction === 'right' && this.props.current_page === this.props.total_pages)) {
             return 'ui button disabled'
        }
        return 'ui button active'
    }

    render() {
        return (
            <div className={`ui ${this.props.direction} huge rail`}>
                <div className={`${this.getButtonState()}`} onClick={this.onPageChange}>
                    <i className={`chevron ${this.props.direction} icon`}></i>
                </div>
            </div>
        );
    }
}

export default Paginator;
