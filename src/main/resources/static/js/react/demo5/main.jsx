var HelloMessage1 = React.createClass( {
    getInitialState: function() {
        return { value: 'Hello Runoob!' };
    },
    handleChange: function( event ) {
        this.setState( { value: event.target.value });
    },
    render: function() {
        var value = this.state.value;
        return <div>
            <input type="text" value={value} onChange={this.handleChange} />
            <h4>{value}</h4>
        </div>;
    }
});
ReactDOM.render(
    <HelloMessage1 />,
    document.getElementById( 'example1' )
);

var Content2 = React.createClass( {
    render: function() {
        return <div>
            <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
            <h4>{this.props.myDataProp}</h4>
        </div>;
    }
});
var HelloMessage2 = React.createClass( {
    getInitialState: function() {
        return { value: 'Hello Runoob!' };
    },
    handleChange: function( event ) {
        this.setState( { value: event.target.value });
    },
    render: function() {
        var value = this.state.value;
        return <div>
            <Content2 myDataProp={value}
                updateStateProp={this.handleChange}></Content2>
        </div>;
    }
});
ReactDOM.render(
    <HelloMessage2 />,
    document.getElementById( 'example2' )
);

var HelloMessage3 = React.createClass( {
    getInitialState: function() {
        return { value: 'Hello Runoob!' };
    },
    handleChange: function( event ) {
        this.setState( { value: '菜鸟教程' })
    },
    render: function() {
        var value = this.state.value;
        return <div>
            <button onClick={this.handleChange}>点我</button>
            <h4>{value}</h4>
        </div>;
    }
});
ReactDOM.render(
    <HelloMessage3 />,
    document.getElementById( 'example3' )
);

var Content = React.createClass( {
    render: function() {
        return <div>
            <button onClick={this.props.updateStateProp}>点我</button>
            <h4>{this.props.myDataProp}</h4>
        </div>
    }
});
var HelloMessage = React.createClass( {
    getInitialState: function() {
        return { value: 'Hello Runoob!' };
    },
    handleChange: function( event ) {
        this.setState( { value: '菜鸟教程' })
    },
    render: function() {
        var value = this.state.value;
        return <div>
            <Content myDataProp={value}
                updateStateProp={this.handleChange}></Content>
        </div>;
    }
});
ReactDOM.render(
    <HelloMessage />,
    document.getElementById( 'example' )
);