cc.Class({
    extends: cc.Component,

    properties: {
        Canvas:{
            default:null,
            type:cc.Node
        },
        dialogLabel:{
            default:null,
            type:cc.Label       //文本框
        },
        contentList:{
            default: [],
            type: [cc.String]   //谈话内容
            
        },
    },
    onLoad: function () {
        this.node.on(cc.Label.EventType.MOUSE_DOWN, function (event) {
            this.node.active=!this.node.active;
          for(i=0;i<contentList.length;i++){
              contentList[0]="dsa d";
              contentList[1]="qwwee";
              label.string = contentList[i];
              console.log(contentList[i]);
            this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
                this.node.active=!this.node.active;
              }, this);
          }
        }, this);
  },
});
