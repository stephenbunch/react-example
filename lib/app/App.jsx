_.ns( 'Demo' ).App = [ 'Demo.Button', function( Button ) {
  return React.createClass({
    render: function() {
      return (
        <div>
          <h1>hello world</h1>
          <Button>test</Button>
        </div>
      );
    }
  });
}];
