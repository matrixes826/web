class App extends React.Component {
    render() {
        return (
            <div>
                Hello World!!!<br />
                {this.props.name}欢迎学习spring boot with React！！！
            </div>
        );
    }
};
var name = 'wz';
ReactDOM.render( <App name={name} />, document.getElementById( 'app' ))