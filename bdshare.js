;(function(){
var bdshare_warp = document.getElementById('bdshare_wrap');
var sharepic="http://www1.pcauto.com.cn/wap/RX0909/RX100100.JPG";//分享图片
if (!bdshare_wrap) return;
var titleReg=/([^_]*)_?.*/;//匹配第一个空格前的字符
var shareTopic="#PCauto手机触屏版#";
var shareTitle=document.title.replace(titleReg,"$1");
var shareUrl=window.location.href;
window.bds_config = {
    'bdText' : shareTopic+shareTitle,
    'wbUid' : '2298836177',
    "bdPic":sharepic,
    'snsKey' : {
        'tsina' : '3549659419'
    }
};
var openUrl='http://go.10086.cn/ishare.do?m=t&u='+shareUrl+'&t='+shareTitle+'&sid=090820323305', shareContent;
$('#popBox .popcon').addClass('bdsharePop');
    if(share_cfg.isWeixin || share_cfg.isMqq){

    }else if(share_cfg.isUc || share_cfg.isQQ){
        shareContent =  '<div id="bdshare" class="bdshare_t bds_tools get-codes-bdshare">'+
        '<a data-app="weixinFriend" class="nativeShare weixinfriend"><i></i>朋友圈</a>'+
        '<a data-app="weixin" class="nativeShare weixin"><i></i>微信好友</a>'+
        '<a class="bds_qzone">QQ空间</a>'+
        '<a data-app="QQ" class="nativeShare qqfriend"><i></i>QQ好友</a>'+
        '<a class="bds_tsina" title="分享到新浪微博" href="#">新浪微博</a>'+
        '</div>';
        bdshare_warp.innerHTML = shareContent;
        shareWrap();
    }else{
        shareContent = '<div id="bdshare" class="bdshare_t bds_tools get-codes-bdshare">'+
        '<a class="bds_tsina" title="分享到新浪微博" href="#">新浪微博</a>'+
        '<a class="bds_qzone">QQ空间</a>'+
        '</div>';
        bdshare_warp.innerHTML = shareContent;
    }

document.write('<script type="text/javascript" id="bdshare_js" data="type=tools&img=2&uid=508160"><\/script>');
var queue = [
{
    config: {
        id: 'bdshare_js',
        data: 'type=tools&mini=1&uid=726255'
    }
},
{
    url: 'http://bdimg.share.baidu.com/static/js/shell_v2.js?t=' + new Date().getHours()
}
]
for(var i = 0,l = queue.length;i<l;i++){
    var script = document.createElement('script');
    if(queue[i].config){
        var c = queue[i].config;
        for(var j in c){
            if(c.hasOwnProperty(j)){
                script.setAttribute(j,c[j])
            }
        }
    }
    document.getElementsByTagName('head')[0].appendChild(script);
    queue[i].url && (script.src = queue[i].url);
}
})();
