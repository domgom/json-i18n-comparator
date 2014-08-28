var assert = require('assert'); // node.js core module
var c = require('../comparator');

describe('Traverse json a and json b removing duplicated keys', function () {

    [1,2,3].forEach(function(i) {
        it("testCase " + i, function () {
            var a= require("./a" + i + ".json");
            var b =require("./b" + i + ".json");
            var rA = require("./results/a" + i + ".json");
            var rB = require("./results/b" + i + ".json");
            c.traverse(a,b );
            assert.deepEqual(a,rA );
            assert.deepEqual(b,rB );
        });
    });

});