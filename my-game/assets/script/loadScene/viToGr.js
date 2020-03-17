cc.Class({
    extends: cc.Component,
        properties: {
        arrow:{
            default:null,
            type:cc.Node
        }
    },
    onLoad: function () {
          this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            console.log('Mouse down');
            cc.director.loadScene("groundScene");
          }, this);
    },
});