var async_1 = require('angular2/src/core/facade/async');
var Insertion = (function () {
    function Insertion() {
    }
    Insertion.sort = function (input) {
        for (var j = 1; j < input.items.length; j++) {
            (function (j) {
                async_1.TimerWrapper.setTimeout(function () {
                    var key = input.items[j].val;
                    var i = j - 1;
                    while (i >= 0 && input.items[i].val > key) {
                        input.items[i + 1].val = input.items[i].val;
                        i = i - 1;
                    }
                    input.items[i + 1].val = key;
                    input.setCurrent(input.items[i + 1]);
                }, 1000 * j);
            })(j);
        }
    };
    return Insertion;
})();
exports.Insertion = Insertion;
