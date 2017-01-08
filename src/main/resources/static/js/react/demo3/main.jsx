var LikeButton = React.createClass( {
    getInitialState: function() {
        return { liked: false };
    },
    handleClick: function( event ) {
        this.setState( { liked: !this.state.liked });
    },
    render: function() {
        var text = this.state.liked ? '喜欢' : '不喜欢';
        return (
            <p onClick={this.handleClick}>
                你<b>{text}</b>我。点我切换状态。
            </p>
        );
    }
});

ReactDOM.render(
    <LikeButton />,
    document.getElementById( 'example' )
);


class Toggle extends React.Component {
    constructor( props ) {
        super( props );
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind( this );
    }

    handleClick() {
        this.setState( prevState => ( {
            isToggleOn: !prevState.isToggleOn
        }) );
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById( 'root' )
);
