//
var ua = navigator.userAgent.toLowerCase();
var share_cfg = {
    isUc : !!/UCBrowser/i.test(ua), //uc browser
    isMqq: !!/\sQQ/i.test(ua), //qq app
    isQQ : !!/MQQBrowser/i.test(ua), //qq browser
    isAndroid : !!/android/i.test(ua), // android os
    isIos : !!/(iphone|iPod|iPad)/i.test(ua), //ios os
    isWeixin : !!/MicroMessenger/i.test(ua), //weixin app
    // version : getVersion(ua),
    qqlowerApi: "http://3gimg.qq.com/html5/js/qb.js",
    qqHigApi:"http://jsapi.qq.com/get?api=app.share",
}
/*分享到微信*/
wxApi.init(function () {
    var shareData = {
title: document.title,// 分享标题
desc: document.getElementsByName('description')[0].content,// 分享描述
link: window.location.href,// 分享链接
imgUrl:"http://www1.pcauto.com.cn/wap/RX0909/RX100100.JPG",// 分享图标
};
wx.onMenuShareAppMessage(shareData);// 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
wx.onMenuShareTimeline(shareData);// 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
wx.onMenuShareQQ(shareData);// 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
wx.onMenuShareWeibo(shareData);// 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
});

//include bsShare.js

function shareWrap(){
    var config = {
        url:'http://blog.wangjunfeng.com',// 分享的网页链接
        title:'抢油卡',// 标题
        desc:'抢油卡',// 描述
        img:'http://www.wangjunfeng.com/img/face.jpg',// 图片
        img_title:'抢油卡',// 图片标题
        from:'太平洋汽车网' // 来源
    };
    var share_obj = new nativeShare('bdshare',config);
}
function initShare(){
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
}

function shareToFriend(){
    initShare(); //init share 
    $('#popBox .popcon').addClass('bdsharePop');
    if(share_cfg.isWeixin || share_cfg.isMqq){
        detectWeixinApi(); //弹窗
    }else if(share_cfg.isUc || share_cfg.isQQ){
        showPop('<p class="tit">分享到</p>');
        $('#bdshare_warp').show(); //自带分享
    }else{
        showPop('<p class="tit">分享到</p>');
        $('#bdshare_warp').show(); //百度分享
    }
}
