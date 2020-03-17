cc.Class({
    extends: cc.Component,
        properties: {
        goods:{
            default:null,
            type:cc.Node
        }
    },
    onLoad: function () {
          this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            console.log('Mouse down');
            this.goods.destroy();
          }, this);
    },
});