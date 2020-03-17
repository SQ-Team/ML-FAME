cc.Class({
    extends: cc.Component,

    properties: {
        //dialog:{}
        playSpeed:0,
         speed:0,
         dialogLabel:{
            default:null,
            type:cc.Label       //文本框
        },
         contentStr:{
            default:"",
            type:cc.string          //当前播放的内容
        },
         currTextIndex:0,         //当前播放内容的索引
         currDialogIndex:0,        //当前对话列表的索引
         isPlaying:{
            default:false,
            type:cc.boolean         //是否正在播放
        },
    
         contentList:{
            default: [],
            type: [cc.String]   //谈话内容
            
        },
      
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onLoad () {
        this. dialogLabel = this.node.getComponentInChildren(cc.Label);
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this. onClickBox, this);
    },
    /**点击跳过打字机效果 */
    onClickBox:function(){
        if(this. isPlaying){
            this. dialogLabel.string = this. contentStr;
            this. reset();
        }else{
            //对话是否结束 TODO
            this. currDialogIndex++;
            if(this. contentList[this. currDialogIndex] == null)
                this. currDialogIndex = 0;
            this.playDialog(this. contentList[this. currDialogIndex]);
        }
    },



    start () {
        this. speed = this.playSpeed;
        this. contentList = AnalyzeJSON. instance.getDialog();    //从管理器里读取要显示的对话
        this.playDialog(this. contentList[this. currDialogIndex]);
    },

    // update (dt) {},
    update (dt) {
        //#region 打字机效果
        if(this. isPlaying){
            this. speed -= dt;
            if(this. speed <= 0){
                this. speed = this.playSpeed;
                if(this. contentStr[this. currTextIndex] == null){
                    this. reset();
                }else{
                    this. addText(this. contentStr[this. currTextIndex]);
                    this. currTextIndex++;
                }
            }else return;
        }
        //#endregion
    },

    /**开始对话 */
    playDialog:function(str,callback){
        this. isPlaying = true;
        this. contentStr = str;
        this. clearContent();
        
        if(callback)
            this. endEvent = callback;
    },
 
    /**设置速度 */
    setSpeed:function(val){
        this.playSpeed = val;
    },
 
 
    /**重置内容 */
     reset:function(){
        this. isPlaying = false;
        this. contentStr = "";
        this. currTextIndex = 0;
        this. speed = this.playSpeed;
    },
 
    /**清除对话框内容 */
     clearContent:function(){
        this. dialogLabel.string = "";
    },
 
    /**添加文字 */
    addText:function(aStr){
        this.dialogLabel.string += aStr;
    }
});
