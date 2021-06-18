import React from 'react';


class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {spans: 0};

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const imageHeight = this.imageRef.current.clientHeight;

        // 10 corresponds to the value of grid-auto-rows
        // stype in css file
        const spans = Math.ceil(imageHeight / 10);

        // don't need {key: value} syntax
        // because both have same name
        this.setState({ spans:spans });
    }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;