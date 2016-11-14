/**
 * Created by qingyun2 on 16/11/14.
 */


require(['domReady'], function(domReady){
    domReady( function(){
        console.log('domReady plugin callback fired at ' + new Date().getTime() );
    });
});

require(['domReady!'], function(){
    console.log( 'domReady! plugin fired at ' + new Date().getTime() );
});


require.config({ });


