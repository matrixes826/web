class App extends React.Component {
    render() {
        return (
            <div>
                Hello World!!!<br />
                {this.props.name} 欢迎学习spring boot with React！！！
            </div>
        );
    }
};
var name = 'wz';
ReactDOM.render( <App name={name} />, document.getElementById( 'app' ) );



function Clock( props ) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()} .</h2>
        </div>
    );
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById( 'root' )
    );
}

setInterval( tick, 1000 );

class Clock1 extends React.Component {
    constructor( props ) {
        super( props );
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval( this.timerID );
    }

    tick() {
        this.setState( {
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()} .</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock1 />,
    document.getElementById( 'root1' )
);


function App2() {
    return (
        <div>
            <Clock1 />
            <Clock1 />
            <Clock1 />
        </div>
    );
}

ReactDOM.render(
    <App2 />,
    document.getElementById( 'root2' )
);