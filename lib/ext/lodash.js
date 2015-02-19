_.ns = function( path ) {
  var node = window;
  path.split( '.' ).forEach( function( segment ) {
    if ( !node[ segment ] ) {
      node[ segment ] = {};
    }
    node = node[ segment ];
  });
  return node;
};
