cc.Class({
    extends: cc.Component,
    properties: {
        button: cc.Button
    },
    onLoad: function () {
        this.button.node.on('click', this.callback, this);
    },
    callback: function (button) {
        cc.director.loadScene("houseScene");
    },
});
