var Dot = require('./dot');
var util = require('./util');

var Slot = function (groups, board, c, r) {
    this.board = board;

    this.sprite = groups.slots.create(0, 0, 'square');
    this.sprite.inputEnabled = true;
    this.sprite.anchor.setTo(-0.03, -0.03);
    this.sprite.scale.x = 0.5;
    this.sprite.scale.y = 0.5;

    if (r < 10) {
        this.dot = new Dot(groups, c, r);
        this.dot.sprite.bringToTop();
        this.sprite.events.onInputOver.add(function () {
            this.board.indicate(c, r);
        }, this);
        this.sprite.events.onInputOut.add(function () {
            this.board.clearIndication();
        }, this);
    }

    var pos = util.getPosition(r, c);
    this.sprite.x = pos.x;
    this.sprite.y = pos.y;

    this.showDot = function (show) {
        this.dot.visible(show);
    };
};
Slot.load = function (game) {
    game.load.image('square', 'square.png');
};

module.exports = Slot;