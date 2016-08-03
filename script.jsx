var Button = React.createClass({
 localHandleClick: function() {
    this.props.localHandleClick(this.props.increment);
 },
  render: function() {
    return (
      <button onClick={ this.localHandleClick }>Increment { this.props.increment } </button>
      ); 
  }
});  

var Results = React.createClass({
  render : function() {
   return (<h1>Hello, you have clicked {this.props.localCounter} times</h1>)
  }
});

var Main = React.createClass({
  getInitialState: function(){
    return { counter : 0 };
  },
  handleClick: function(increment){
    this.setState( { counter : this.state.counter + increment  })
  },
  render: function(){
    return (
      <div>
        <Results localCounter={ this.state.counter } />
        <Button localHandleClick={ this.handleClick } increment={ 1 } />
        <Button localHandleClick={ this.handleClick } increment={ 21 } />
        <Button localHandleClick={ this.handleClick } increment={ 4 } />
        <Button localHandleClick={ this.handleClick } increment={ 10 } />
      </div>
      );
  }
}); 
ReactDOM.render(<Main />,document.getElementById('root'));