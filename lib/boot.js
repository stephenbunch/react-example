var kernel = type.Kernel();

( function walk( node ) {
  _.forIn( node.value, function( value, key ) {
    var path = node.path + '.' + key;
    if ( _.isPlainObject( value ) ) {
      walk({ value: value, path: path });
    } else {
      kernel.bind( path ).to( value ).asSingleton();
    }
  });
} ({ value: _.ns( 'Demo' ), path: 'Demo' }) );

kernel.get( 'Demo.App' ).then( function( App ) {
  React.render( React.createElement( App ), document.body );
});
