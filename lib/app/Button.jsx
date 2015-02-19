_.ns( 'Demo' ).Button = function() {
  return React.createClass({
    render: function() {
      return (
        <button className="btn-primary">{ this.props.children }</button>
      );
    }
  });
};
