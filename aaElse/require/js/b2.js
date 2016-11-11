/**
 * Created by qingyun2 on 16/11/8.
 */

define(['./b1', 'require'], function (b1, require) {
    // b1 =  require('./b1');
    // b1.say();
    return {
        say: function () {
            // require('./b1');
            console.log('b2.js');

        }
    }
});