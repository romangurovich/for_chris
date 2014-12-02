var actions = require("./actions");
var config = require("./config");

var moveOnePiece = function(from, to) {
    actions.move(from,to);
};

var moveNPieces = function(n,from, to, via) {
    if (n=== 1) {
        moveOnePiece(from, to)
    } else {
        moveNPieces(n - 1, from, via, to);
        moveOnePiece(from, to);
        moveNPieces(n-1,via, to, from);
    }
};

moveNPieces(config.pieces, 0, 2, 1);

actions.finish();
