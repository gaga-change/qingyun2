/**
 * Created by qingyun2 on 16/11/8.
 */

define(['./b2', 'require'], function (b2, require) {

    require('./b2');
    b2.say();

    return {
        say: function () {
            // require('./b2');
            console.log('b1.js');
        }
    }
});