/*
 * zzllrr RSS Reader
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */


var L=CLOUD?chrome.storage.local:localStorage, SS=chrome.storage.sync, SL=chrome.storage.local, zFo, zFe, zEn, feN=0,eng=[
{"name":"web","engine":[{"title":"%u767E%u5EA6","href":"","lnk":"www.baidu.com/s%3Fwd%3D%25s","fn":"fna%28%29","sz":"%23content_left"},{"title":"Google","href":"","lnk":"www.google.com/%23sclient%3Dpsy%26q%3D%25s","fn":"fna%28%29","sz":""},{"title":"%u641C%u72D7","href":"","lnk":"www.sogou.com/web%3Fquery%3D%25s","fn":"fna%28%29","sz":".results"},{"title":"Yahoo","href":"","lnk":"search.yahoo.com/search%3Fp%3D%25s","fn":"fna%28%29","sz":"%23web%3Eol"},{"title":"Ask","href":"","lnk":"www.ask.com/web%3Fq%3D%25s","fn":"fna%28%29","sz":"%23teoma-results"},{"title":"Bing","href":"","lnk":"www.bing.com/search%3Fq%3D%25s","fn":"fna%28%29","sz":"%23b_results"},{"title":"Wolfram","href":"","lnk":"www.wolframalpha.com/input/%3Fi%3D%25s","fn":"fna%28%29","sz":"%23answers"},{"title":"360","href":"www.so.com","lnk":"ww.so.com/s%3Fq%3D%25s","fn":"fna%28%29","sz":"%23main%3Eul"}]},{"name":"Q%26A","engine":[{"title":"Quora","href":"","lnk":"www.quora.com/search%3Fq%3D%25s","fn":"fna%28%29","sz":".QueryResultsList"},{"title":"%u77E5%u4E4E","href":"","lnk":"www.zhihu.com/search%3Fq%3D%25s","fn":"fna%28%29","sz":".list.contents"},{"title":"%u641C%u72D7%u77E5%u4E4E%u641C%u7D22","href":"","lnk":"zhihu.sogou.com/zhihu%3Fquery%3D%25s","fn":"fna%28%29","sz":".box-result"},{"title":"%u641C%u72D7%u5FAE%u4FE1%u641C%u7D22","href":"","lnk":"weixin.sogou.com/weixin%3Ftype%3D2%26query%3D%25s","fn":"fna%28%29","sz":".news-list"},{"title":"%u767E%u5EA6%u77E5%u9053","href":"","lnk":"zhidao.baidu.com/q%3Fword%3D%25s%26ct%3D17%26tn%3Dikaslist","fn":"fnb%28%29","sz":"%23wgt-list"},{"title":"Yahoo%20Answers","href":"","lnk":"answers.yahoo.com/search/search_result%3Fp%3D%25s%26fr%3Dush-ans","fn":"fn0%28%29","sz":"%23web"},{"title":"Wikipedia","href":"www.wikipedia.org","lnk":"en.wikipedia.org/w/index.php%3Fsearch%3D%25s","fn":"fnb%28%29","sz":"%23mw-content-text"},{"title":"%u767E%u5EA6%u8D34%u5427","href":"","lnk":"tieba.baidu.com/f%3Fkw%3D%25s%26ie%3Dutf-8","fn":"fnb%28%29","sz":"%23thread_list"},{"title":"%u767E%u5EA6%u767E%u79D1","href":"","lnk":"baike.baidu.com/search%3Fword%3D%25s","fn":"fnb%28%29","sz":".searchResult"},{"title":"%u767E%u5EA6%u7ECF%u9A8C","href":"","lnk":"jingyan.baidu.com/search%3Fword%3D%25s","fn":"fna%28%29","sz":"%23search-list"},{"title":"360%u95EE%u7B54","href":"","lnk":"wenda.so.com/search/%3Fq%3D%25s","fn":"fna%28%29","sz":".qa-list"},{"title":"360%u767E%u79D1","href":"","lnk":"baike.so.com/search/%3Fq%3D%25s","fn":"fna%28%29","sz":".result"},{"title":"%u641C%u72D7%u95EE%u95EE","href":"","lnk":"wenwen.sogou.com/s/%3Fw%3D%25s","fn":"fna%28%29","sz":".result_list"},{"title":"%u641C%u72D7%u767E%u79D1","href":"","lnk":"baike.sogou.com/Search.e%3Fsp%3DS%25s","fn":"fna%28%29","sz":".result"},{"title":"%u4E92%u52A8%u767E%u79D1","href":"","lnk":"so.baike.com/s/doc/%25s","fn":"fna%28%29","sz":"%23search-wiki"},{"title":"%u679C%u58F3","href":"","lnk":"www.guokr.com/search/all/%3Fwd%3D%25s","fn":"fna%28%29","sz":".items"}]},{"name":"social","engine":[{"title":"Facebook","href":"","lnk":"www.facebook.com/%23%21/search.php%3Fq%3D%25s","fn":"fn0%28%29","sz":""},{"title":"Google+","href":"","lnk":"plus.google.com/circles%3Ftab%3DwG%23sparks/interests/%25s","fn":"fnb%28%29","sz":""},{"title":"Twitter","href":"","lnk":"twitter.com/%23%21/search/%25s","fn":"fn0%28%29","sz":""},{"title":"Gmail","href":"mail.google.com/mail/u/0/%23inbox","lnk":"mail.google.com/mail/u/0/%23search/%25s","fn":"fn0%28%29","sz":""}]},{"name":"video","engine":[{"title":"YouTube","href":"","lnk":"www.youtube.com/results%3Fsearch_query%3D%25s%26aq%3Df","fn":"fna%28%29","sz":""},{"title":"%u8C46%u74E3%u7535%u5F71","href":"","lnk":"movie.douban.com/subject_search%3Fsearch_text%3D%25s","fn":"fna%28%29","sz":""},{"title":"%u641C%u5E93","href":"","lnk":"www.soku.com/v%3Fkeyword%3D%25s","fn":"fn0%28%29","sz":".sk-vlist"},{"title":"360%u89C6%u9891","href":"","lnk":"video.so.com/v%3Fq%3D%25s","fn":"fnb%28%29","sz":".a-engineso-body"}]},{"name":"music","engine":[{"title":"%u767E%u5EA6MP3","href":"","lnk":"music.baidu.com/search%3Fkey%3D%25s","fn":"fn0%28%29","sz":".search-song-list%3Eul"},{"title":"%u867E%u7C73%u97F3%u4E50","href":"","lnk":"www.xiami.com/search%3Fkey%3D%25s","fn":"fnb%28%29","sz":".result_main"},{"title":"%u8C46%u74E3%u97F3%u4E50","href":"","lnk":"music.douban.com/subject_search%3Fsearch_text%3D%25s","fn":"fna%28%29","sz":""}]},{"name":"keywords","engine":[{"title":"%u767E%u5EA6%u8BCD%u5178","href":"","lnk":"dict.baidu.com/s%3Fwd%3D%25s%26tn%3Ddict","fn":"fna%28%29","sz":"%23tab-list"},{"title":"TheFreeDictionary","href":"www.thefreedictionary.com","lnk":"encyclopedia2.thefreedictionary.com/%25s","fn":"fna%28%29","sz":"%23MainTxt"},{"title":"%u6709%u9053%u8BCD%u5178","href":"","lnk":"dict.youdao.com/search%3Fq%3D%25s","fn":"fn0%28%29","sz":"%23results-contents"},{"title":"Google%20Trends","href":"","lnk":"trends.google.com/trends/explore%23q%3D%25s","fn":"fna%28%29","sz":"%23reportMain"},{"title":"%u6C49%u5178","href":"","lnk":"www.zdic.net/sousuo/%3Fq%3D%25s","fn":"fnb%28%29","sz":"%23content"},{"title":"Google%20Keyword%20Planner","href":"","lnk":"adwords.google.com/ko/KeywordPlanner/Home","fn":"","sz":""},{"title":"%u6CAA%u6C5F%u5C0FD","href":"","lnk":"dict.hjenglish.com/w/%25s","fn":"fna%28%29","sz":".mian_container%2C.main_container"},{"title":"%u7231%u8BCD%u9738","href":"","lnk":"www.iciba.com/%25s","fn":"fnd%28%29","sz":"%23dict_main"},{"title":"%u6D77%u8BCD","href":"","lnk":"dict.cn/%25s","fn":"fn0%28%29","sz":".main"},{"title":"Urban%20Dictionary","href":"","lnk":"www.urbandictionary.com/define.php%3Fterm%3D%25s","fn":"fna%28%29","sz":"%23content"},{"title":"Bing%u8BCD%u5178","href":"","lnk":"www.bing.com/dict/search%3Fq%3D%25s","fn":"fna%28%29","sz":".lf_area"}]}
], zTsplit='zzllrrReaderEntryTextSep', zRListScrollTop=0
,colors={
	'white':'#f5f5f5 whitesmoke rgba(0,0,0,0.87)',//white whitesmoke black
	'black':'black darkgray gray',
	'green':'darkseagreen white darkslategray',//honeydew
	'blue':'steelblue lavender midnightblue',//lightsteelblue
	'pink':'pink white indigo'//lavenderblush
}, Head={
	'xml':'<?xml version="1.0" encoding="utf-8"?>',
	'rss':'<rss '+['xmlns:content','content/" xmlns:sy','syndication/" xmlns:slash','slash/"'].join('="'+H+'purl.org/rss/1.0/modules/')+
		' xmlns:wfw="'+H+'wellformedweb.org/CommentAPI/" xmlns:dc="'+H+'purl.org/dc/elements/1.1/" xmlns:atom="'+H+w3c+'2005/Atom" version="2.0">'

}, RssAddIds={
	zhihuzhuanlan:{"t":"知乎专栏","u":Hs+"zhuanlan.zhihu.com/%id","s":"var test=$(Entry.bdfromData(data,fU)).find('#preloadedState').text()||'';var A=[],o=(jSon(test)).database.Post; $.each(o,function(i,v){A.push({s:fU, u:H_a(v.url,fU), r:0, f:0, d:0, l:imgdatasrc(v.titleImage)+br+v.content, h:v.title, p:Date.parse(v.updated)/1000, a:v.author, g:'', c:'', e:''});});return A"},
	qzone:{"t":"QQ空间","u":H+"feeds.qzone.qq.com/cgi-bin/cgi_rss_out?uin=%id"},
	sinablog:{"t":"新浪博客","u":H+"blog.sina.com.cn/%id"},
	baijia:{"t":"百家号","u":Hs+"baijia.baidu.com/u?app_id=%id","n":"%id@百度百家","r":"","m":".article-info .title a","l":"var A=[];$(@).parents('.article-info').find('.art-img img').each(function(){A.push(imgdatasrc(fn1($(this).attr('src').replace(/.+=/,''))))});A.join('')","p":"Time.reg($(@).parents('.article-info').find('.info').text().replace(/\\s.+/,''))"},
	dajia:{"t":"腾讯大家","u":H+"dajia.qq.com/user/%id","n":"%id@腾讯大家","r":"#content","m":".txt h2 a","l":"$(@).parents('.txt').find('.con p').text()","p":"Time.reg($(@).parents('.txt').find('.time').text())","c":"$(@).parents('.txt').find('.commentNum_mod a').attr('href')"},
	feedsky:{"t":"Feedsky","u":H+"feed.feedsky.com/%id"},
	jianshu:{"t":"简书","u":H+"www.jianshu.com/u/%id","m":".content .title","j":"","l":"($(@).parent().prev().find('img').attr('src')?imgdatasrc('http:'+$(@).parent().prev().find('img').attr('src')):'')+br+$(@).next().text().trim()","p":"Date.parse($(@).prev().find('.time').attr('data-shared-at'))/1000"},
	weixinhao:{"t":"微信公众号","u":H+"weixin.sogou.com/weixin?type=1&s_from=input&query=%id&ie=utf8","m":".news-list2 a[uigs*=account_article_]","j":"","l":"","p":"+$(@).next().find('script').text().replace(/\\D+/g,'')"}
	
}, RssSechIds={
	baidu:{"t":"百度新闻搜索","u":H+"news.baidu.com/ns?word=%s&bs=google&sr=0&cl=2&rn=20&tn=news&ct=0&clk=sortbytime","n":"%s_百度新闻搜索","m":".c-title a","l":"$(@).parent().nextAll('.c-summary').text()","p":"Time.reg($(@).parent().next().find('.c-author').text().replace(/.+  /,''))","a":"$(@).parent().next().find('.c-author').text().replace(/  .+/,'')"},
	Google:{"t":"Google搜索","u":Hs+"www.google.com/#q=%s&tbm=nws","n":"%s_Google News","m":"h3.r a[data-href]","l":"$(@).parent().nextAll('.st').text()","p":"Time.reg($(@).parent().next().find('.f.nsa._uQb').text())","a":"$(@).parent().next().find('._tQb._IId').text()"},
	weixin:{"t":"微信文章搜索","u":H+"weixin.sogou.com/weixin?type=2&query=%s","n":"%s_微信文章搜索","m":".txt-box h4 a","l":"$(@).parent().next().text()","p":"$(@).parent().nextAll('.s-p').find('.time cript').text().replace(/.+\\(.|'.+$/g,'')","a":"$(@).parent().nextAll('.s-p').find('.wx-name').attr('title')"}
	
}, fanyi={
	uA:zlrA3(H+'fanyi.',ZLR('baidu sogou qq'),'.com').concat(Hs+'www.bing.com/translator/')
		
//zEn.query(function(enA){console.log(enA[0].l)}, {index:'p',keyRange:zEn.makeKeyRange({lower:1491876771,upper:1491876771})})

},

zzllrr=XML.wrapE('author', XML.wrapE('name','zzllrr')+XML.wrapE('email','zzllrr@gmail.com')+XML.wrapE('uri', HOM.ZR)),
hk=gM('hotkey')+' ',
hkn='\n'+hk,
qrAli=Hs+'qr.alipay.com/', qrqq=Hs+'i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&a=1&u=122618817&ac=ZZLLRR&n=%E5%B0%8F%E4%B9%90%E7%AC%91%E4%BA%86&f=wallet',
qrwx='wxp://',
qrs={
	'V2aliPay':qrAli+'FKX0950616RXMKGXATWY52',
	'V2qqPay':qrqq.replace('ZZLLRR','A5692108EF5009E2392BE97029C628474D54816FED899014CB4EEA2D271CF645'),
	'V2weixinPay':qrwx+'f2f0KhK_RnSDrozki2q4gmcvsFMS0DQJPVas',
	
	'weixinZQR':H+'weixin.qq.com/r/uXUFCg3EKzNUhxxpnyCd'
			
};
loadImage=function(uri, cb) {
  var xhr=new XMLHttpRequest();
  xhr.responseType='blob';
  xhr.onload=function(){
    cb(URL.createObjectURL(xhr.response), uri);
  }
  xhr.open('GET', uri, true);
  xhr.send();
}, Dialog=function(typ, off, titl, txt){
	var me=$('#zrDialog').eq(0);
	if(off){
		L.dia=0;
		$('#zrDialogButton input').hide(0,function(){

			Load.ingsucc('zrDialogOK', 1000);
			setTimeout(function(){
				me.parent('#zrMask').fadeOut().nextAll().removeClass('opaq');
			}, 1500);
		});

		return
	}
	$('#zrMedia').hide();
	$('#zrDialogInput').val(txt||'').toggle(/prom/.test(typ)).focus();
	$('#zrDialogOK').toggle(typ!='prom2').next().show();
	$('#zrDialogTitle').html(titl.replace(/\n/g,'<br />'));

	if(!/prom/.test(typ)){
		$('body')[0].tabIndex=0;
		$('body').focus();
	}
	$('#zrMask').fadeIn().nextAll().addClass('opaq');

	var u=$('#zrDialogTitle #qrcode').attr('data-iu');
	if(u){
		var qrcode = new QRCode($('#zrDialogTitle #qrcode')[0], {
			text:u,
			width : 150,
			height : 150
		});
	}
};

HOM.ZR=webStore+(CLOUD?ZRC:ZRL)+CN;
var empting=0, empties=[];

var emptyTask=function(){
	if(!empting && empties.length){
		empting=1;//锁住，防止崩溃
		var e0=empties[0], fU=e0.fU, endDate=e0.endDate;
		var emptyOpts={index:'d',keyRange:zEn.makeKeyRange({lower:1, upper:1})};
		zEn.query(function(enAd){
			var emptyEnA=[];
			for(var i=enAd.length-1; i>-1; i--){
				var eni=enAd[i];
				if(eni.s==fU && eni.p < endDate){
					emptyEnA.push({type:'remove', key:eni.u});
				}
			}
			if(emptyEnA.length){
				var cb=function(){
					empting=0;
					empties.shift();
					//console.log('del forever!');
					if(empties.length){
						emptyTask();
					}
				};
				zEn.batch(emptyEnA,cb,cb);
			}
		},emptyOpts);
	}
};

jQuery.fn.extend({
  needUpdate: function(s) {
    return this.filter(function(){
				var past=$(this).attr('data-past');
				return !past || s && (new Date()).getTime()/1000-Number(past)>s;
			})
  }
});

titleRe(gM('zname'));

L.FT='';
L.dia=0;
L.updateFeedCnt=0;
L.imgOpts=L.imgOpts||'imgPreOff';
L.diys=L.diys || 'img/edit.png';
L.sort=L.sort || 'sort';
L.sortType=L.sortType || 'up';
L.pressfav=L.pressfav || L.mediafav || '金陵晚报,现代快报,南京晨报,南京日报,扬子晚报,东方卫报';
L.bookfav=L.bookfav || '图灵社区,豆瓣阅读';
L.color=L.color||'white';
L.opac=L.opac||100;
L.audioSpeed=L.audioSpeed||6;
L.audioPitch=L.audioPitch||5;
L.audioPerson=L.audioPerson||0;
L.audioLanguage=L.audioLanguage||0;
L.audioEngine=L.audioEngine||0;

if(L.date!=Time.reg('now')){
	$.get(H+'www.bing.com', function(d){
		var u=($(d).find('#bgDiv').css('background-image')||'').replace(/([\s:,]?url\(['"]?)|(['"]?\))/gi,'');
		if(!u){
			var u=d.match(/g_img=\{url:\s*['"][^'"]+/)||'';
			if(u){u=u[0].replace(/.+url:\s*['"]?/gi,'')}
		}
		
		if(/^[/]/.test(u)){u=H_a(u,H+'s.cn.bing.net')}
		var b=$('body').css('background-image');
		L.bing=u;
		L.date=Time.reg('now');
		if(L.theme=='bing' && b.indexOf(u)<0 && b.indexOf('blob:chrome')<0){toggleColor()}
	});
}

function errMsg(e) {
	console.log(e.name);
}



var SLk=ZLR('color BGC theme opac FO FE w h zoomin padd font fontSp fontSz fontPd cols lineh align searchPos searchNeg imgNeg Tag Folder');
var SLo={color:'white',BGC:'white',theme:'theme',opac:10,FO:'',FE:'',w:150,h:150,zoomin:1.3,padd:'60x60',font:'Microsoft YaHei',fontSp:'sp0',fontSz:'sz4',fontPd:'pd0',cols:1,lineh:1.3,align:'left',searchPos:'',searchNeg:'',imgNeg:'',Tag:'',Folder:'[]',hao123:'http://s0.hao123img.com/res/skin/press-plane/body_bg.jpg'};

if(CLOUD){
	$('#ZRfavicon').attr('href','img/ZRC.png');
	var SFS=chrome.syncFileSystem, SF={
		ini:function(cb){
			SFS.requestFileSystem(function(fs){
				fs.root.getFile('/rss.txt', {}, function(fE) {
			    	SF.read(cb);
	/*
		fE.isFile === true
		fE.name == 'rss.txt'
		fE.fullPath == '/rss.txt'
	*/
				}, function(e){
					errMsg(e);
					SF.read(cb);
				});

			});

		},
		read:function(cb){
			SFS.requestFileSystem(function(fs){
				fs.root.getFile('/rss.txt', {}, function(fE) {
				    fE.file(function(f) {
						var reader = new FileReader();

						reader.onloadend = function(e) {
							//console.log(this.result);
							var os=$(this.result).siblings('outline').add($(this.result));
							Folder.addFeedOpml(os, cb);
						};

				       reader.readAsText(f);
				    }, errMsg);

				}, errMsg);

			});

		},

		save:function(cb){
			var cbb=function(outs){
				SFS.requestFileSystem(function(fs){
					fs.root.getFile('/rss.txt', {create: true}, function(fE) {

					    fE.createWriter(function(fW) {
							fW.truncate(0);
							fW.onwriteend = function(e) {
								
//								console.log('Write completed.');
								if(cb){cb()}
							};

							fW.onerror = function(e) {
//								console.log('Write failed: ' + e.toString());
							};
//console.log(outs);
							var bb = new Blob([outs], { type: "text/plain" });
							
							setTimeout(function(){fW.write(bb)}, 500);

					    }, errMsg);

					}, errMsg);
				});
			};

			Folder.outFeedOpml(-1, cbb);
		}

	};


	SFS.onFileStatusChanged.addListener(function (o){
		var fE=o.fileEntry;
		if(fE.name=='rss.txt'){
			if(o.status == 'synced'){	//pending conflicting
				if(o.action=='updated'){	//added deleted
					if(o.direction=='local_to_remote'){

					}else{	//remote_to_local
						SF.read(function(){SF.save()});
					}
					Load.ingsucc('Allcnt',2000);
				}
			}

		}

	});


	var SLK={
		ini:function(cb){

			SL.set(SLo, function(){
				SLK.load(cb);
			});

		}, save:function(cb){
				for(var i in SLk){
					var k=SLk[i];
					SLo[k]=L[k]
				}
				SL.set(SLo, cb);

		}, load:function(cb){
				SL.get(SLk, function(l){

					for(var i in SLk){
						var k=SLk[i];
						L[k]=l[k]
					}
					if(cb){cb()}
				});
		}


	};


	SL.get('folder', function(l){
		if(!l.folder){
			SLK.ini(ini_ok);
		}else{
			SLK.load(ini_ok);
		}
	});
	
}else{
	
	for(var i in SLk){
		var k=SLk[i];
		L[k]=L[k]||SLo[k];
	}
	ini_ok();
}

function ini_ok(){


$(function(){
	createStore(function(){if(CLOUD){SF.ini(function(){Entry.update()})}else{Entry.update(true)} });


	bodybg(1);
	$('#ThemeOpt #color input[src*='+L.color+']').addClass('toggle');
	$('#zRhead #opac').val(L.opac);
	$('#audioTxt').val('Hello! Good Luck!');

	$('#tabs,#tabs0').tabs();
	if(CLOUD){
		$('#logo').attr('src','img/ZRC.png')
		$('#appZRC').attr({'id':'appZRL', 'src':'img/ZRL.png'});
		$('#zimg').attr('src','img/ZRC.png');
	}

	var t0='<a target=_blank href="', t1='"></a>';
	$('#zimg').wrap(t0+HOM.ZR+t1);
	$(zlr('#appZ', 'IG IL RL RC Ain1 ', ',')).wrap(function(){return t0+HOM[this.id.replace(/app/,'')]+t1});
	var abtjs='', zr='zzllrrreader', rr='rssreader',zrr='zzllrr'+rr, hrefs=ZLR('sites.google.com/site/'+zrr+
		' weibo.com/'+zr+
		' blog.sina.com.cn/'+rr+
		' mailto:zzllrr@gmail.com'+
		' www.facebook.com/'+zrr+
		' jingyan.baidu.com/search?word=%E5%B0%8F%E4%B9%90%E9%98%85%E8%AF%BB%E6%94%BB%E7%95%A5'+
		' www.douban.com/group/'+zrr+'/ '+
		fns('more', HOM.ZRL, gM('zname'), gM('zdesc2'), HOM.ZRPic));
	var imgs=ZLR('Official Weibo Sina Gmail Facebook.png Baidu Douban Share');
	for(i in hrefs){
		if(!/^(http|mailto)/.test(hrefs[i])){hrefs[i] = H+hrefs[i];}
		if(!/\./.test(imgs[i])){imgs[i] += '.ico'}

		abtjs +='<a href="'+hrefs[i]+'" target="_blank">'+imgSRC+imgs[i]+'" /></a>';
	}

	$('#abtjs').html(abtjs);

	$('.copyright, #donaTip').on('click',function(){window.open('mailto:zzllrr@gmail.com?subject=zzllrr%20RSS%20Reader')});
	$('.credits').on('click',function(){window.open($(this).attr('data-href') || HOM[$(this).attr('data-zzllrr')])});
	$('#zrMask').on('click',function(e){
		e.stopPropagation();
		var et=$(e.target);
		if(et.is('#zrMask')){
			$('#zrDialogOff').click();
		}
	});


	$('#Scroll').text(gM('top0')+' / '+gM('top1'));

	$('#UnreadToggle').text([gM('unread'), gM('read'), gM('entryall')].join(' / '));

	$(zlr3('#ruleFull','Article Comment','Tip',',')).html(function(){return gM('ruleFull')+
		':'+gM(this.id.substr(0,15))+'<br />'+gM('sizzle')+'<br />'+gM('sizzleTip')});
	//$(zlr3('#','rssAdd sechEntry searchPos searchNeg dona','Tip',',')).html(function(){return gM(this.id).replace(/\n/g,'<br />')});
	$(zlr3('#','dona','Tip',',')).html(function(){return gM(this.id).replace(/\n/g,'<br />')});

	
	$('#Allopt').html(optStr('all'));
	$('#Allcnt').attr('title',gM('unread'));
	$('#zRAudioPause').attr('title',gM('audio'));
	
	
	$('#selAll').after(q_key(gM('selAll'),'A',1));
	$('#selToggle').html(q_key(gM('selToggle'),'I',1));

	$('#adv').after(function(){return gM(this.id)});

	$('#FeedBurn :radio').after(function(){return gM(this.value)}).on('click', function(){
		$('#FeedEdit > div').not('#'+this.value).hide();
		$('#FeedEdit > #'+this.value).fadeIn();
	});


	$('.method').each(function(i){
		$(this).html(gM('method')+' '+'III'.substr(0,i+1)+')');
	});

	$('#rssAddTip').html(gM('rssAddTip').replace(/\n/g,'<br />'));
	$('#FeedBasic th:empty').html(function(){return gM(this.id.substr(4))});

	$('#FeedBasic td, #ruleUrl').append('<input type=text />');
	$('#RuleFull td').append('<input type=text placeholder="'+gM('sizzle')+'" title="'+gM('sizzleTip')+'" />');
	$('#ruleBurnDetail td').not('#ruleUrl').append('<input type=text placeholder="'+gM('attr')+' @:links[i]" />');
	$('#rulePubDate input').attr('placeholder',"Date.parse(Time.reg(''))/1000").val("Date.parse(Time.reg(''))/1000");

	$('html').addClass(L.fontSz+' '+L.fontSp);
	$('.zname').html(gM('zname').replace(/\(.+/,'')).on('click',function(){window.open(HOM.ZR)});
	$('#zRFolder').html('Loading...');
	$('#sort').children().eq(0).html('--'+gM('sort')+'--');
	$('#rss > span,#FeedAdd').html(function(){return gM('rss'+this.id.substr(4))});
	$('#zmediaIn,#zmediaOut').html(function(){return gM(this.id.substr(6))});

	$('#EntryTag').html(gM('tag'));
	$(zlr2('a td span :header', '[id]:empty', ',')).html(function(){return gM(this.id)});


	$('#zRentries').css('font-family',L.font||'Microsoft YaHei');
	$('#font').val(L.font||'Microsoft YaHei');

	$('#Sel > *').filter('[title]').attr('title',function(i,v){return hk+v});
	$('#Pager :text,#btnRight input').filter('[title]').attr('title',function(i,v){return gM(this.id)+hkn+v});



	$('#logo').attr('title',gM('pause')+hkn+'Pause Break');
	$('.zRMid,.SidebarToggle').attr('title',gM('SidebarToggle')+hkn+'L');
	$('.FulscrToggle').attr('title',gM('FulscrToggle')+hkn+'Space');
	$('.page0').attr('title',gM('page0')+hkn+'K');
	$('.page1').attr('title',gM('page1')+hkn+'J');

	$('#pgPrev').attr('title',gM('pgPrev')+hkn+'Shift(⇧) + ←');
	$('#pgNext').attr('title',gM('pgNext')+hkn+'Shift(⇧) + →');

	$('#MrdAll').attr('title',gM('MkrdAll')+hkn+'Shift(⇧) + A');
	$('.DelAll').attr('title',gM('DelAll')+hkn+'Shift(⇧) + (D)elete');

	$('#OutXML').attr('title',gM('outEntry'));

	$('#sechEntry').attr('title', function(){return gM(this.id+'Tip')}).attr('placeholder', function(){return gM(this.id)});
	$('#sechEntry, #Out, #opac, #theme, #zname,#fontPd,#fontSp,#fontSz,#color').not('[title]').attr('title',function(){return gM(this.id)});





	$('#rssSech img[data-sech]').attr('title',function(){var t=$(this).attr('data-sech'); return gM(t)});
	$('#themeOpt').attr('title',gM('toggleTip'));
	
	$('#tags').attr('placeholder', gM('tagTip'));

	$('optgroup[id]').attr('label',function(){return gM(this.id)});

	$('#RssAdd2').val(gM('save')+' / '+gM('RssAdd'));
	$('#RssIn, #RssOut').val(function(){return gM(this.id.replace('Rss',''))});

	$(':button').not('[value]').val(function(){return gM(this.id)});
	$('#audioLanguage').html(Options([0,1,2,3,4],['zh-CN','zh-HK','zh-TW','en-US','en-GB']).join(''));
	$('#audioEngine').html(Options([0,1,2,3,4],['Baidu','Sogou','QQ','Bing','Youdao']).join(''));
	$('#audioOpt .btntxt').val(function(){return gM(this.value)});
	$('#audioOpt .btnnum,#audioOpt select').val(function(){return L[this.id]});

	$(zlr('#','color imgOpts opac font fontSz fontSp fontPd sort sortType',',')).val(function(){return L[this.id]});
	$('#sortType').toggle(L.sort!='sort');


	$('#feedUrl,#feedHome').find('input').attr('placeholder', H);
	$('#ruleUrl input').attr('placeholder', gM('sizzle'));


	$('#theme').val(L.theme);

	var t='',t2='<option value="">'+gM('example')+'</option>';
	$.each(RssAddIds, function(i, v){
		var tt;
		t+='<option value='+i;
		$.each(v, function(ii, vv){
			if(ii=='t'){
				tt=vv;
			}else{
				t+=' data-'+ii+'="'+vv+'"';
			}
		});
		t+='>'+tt+'</option>';
	});
	
	$.each(RssAddIds, function(i, v){
		var tt;
		if(v.s || v.p){
			t2+='<option value='+i;

			$.each(v, function(ii, vv){
				if(ii=='t'){
					tt=vv;
				}else{
					t2+=' data-'+ii+'="'+vv+'"';
				}
			});
			t2+='>'+tt+'</option>';
		}
	});
	$.each(RssSechIds, function(i, v){
		var tt;
		if(v.s || v.p){
			t2+='<option value='+i;

			$.each(v, function(ii, vv){
				if(ii=='t'){
					tt=vv;
				}else{
					t2+=' data-'+ii+'="'+vv+'"';
				}
			});
			t2+='>'+tt+'</option>';
		}
	});
	
	
	$('#RssAddIds').html(t);
	$('#RssAddIds2').html(t2);

	$(zlr2('span h2 option th','[id]:empty',',')).html(function(){return gM(this.id)});
	$('option:empty').html(function(){return gM(this.value)});

	t='';
	var pressSechBy=[zlr2('日 晨 早 晚 快 时 周 新','报')+' 假日 周末',
		'都市 区报 县报 城市 城乡 农村',
		'儿童 孩子 少年 青年 青少年 老年 中老年',
		'小学 中学 初中 高中 大学 学报 院报 校报',
		'导报 参考 消息 文摘 信报 服务 地铁',
		'党 政 军 公 检 法 人 民',
		'科 学 教 育 技 术 考 生 招 职 辅 导',
		'工 交 建 商 企 财 税 经济 金融 证券 消费',
		'农 林 牧 渔 邮 矿 水 电 气 能',
		'卫 生 医 药 健 康 体 球 生活',
		'文 娱 美 艺 琴 棋 书 画 音 乐 广播 电视 动漫 漫画',
		'外 语 英 藏 满 维 蒙 俄 朝 哈 壮 汉'];
	for(var i=0;i<pressSechBy.length;i++){
		var p=ZLR(pressSechBy[i]),ps='';
		for(var j=0;j<p.length;j++){
			ps+=SC+'sechTag>'+p[j]+sc;
		}
		t+=DC+'pressTag>'+ps+dc;
		
	}
	
	$('#pressSechBy').html(t);
	if(L.ZR=='0'){
		$('.zRTest').show();
	}

	toggleColor(true);

	$('input:button:not(.menu)').hover(
		function(){hoverItOff(this,'',1)},
		function(){hoverIt(this)}
	);


	//$('#zrDialogInput, #RssTool :text, :search').not('#sechEntry').on('mouseover', function(){this.select()});


	$('#map_cn > path').on('click', function(){$(this).next().click()});
	$('#map_cn > text').on('click', function(){
		var t=$(this).text(),cs=SC+'"city0 chosen">'+t+sc;
		for(var i=0;i<city_cn.length;i++){
			var ci=city_cn[i],cij;
			for(var j in ci){
				if(j==t){
					var cj=ci[j];
					if(typeof cj == 'string'){
						cj=ZLR(cj);
					}
					for(var k=0;k<cj.length;k++){
						var ck=cj[k];
						if(typeof ck == 'string'){
							cs+=DC+'City1>'+SC+'city1>'+ck+sc+dc;
						}else{
							for(var l in ck){
								cs+=DC+'City1>'+SC+'city1>'+l+sc
							}
							ck=ZLR(ck[l]);
							for(var l=0;l<ck.length;l++){
								cs+=SC+'city2>'+ck[l]+sc
							}
							cs+=dc;
						}
					}
					cij=1;
					break;
				}
			}
			if(cij){break}
		}
		$('#pressLocation').html(cs);
		setTimeout(function(){$('#pressSechGO').click();},150);
	});
	$('#pressLocation').on('click','span',function(){
		var me=$(this);
		$('#pressLocation span').not(me).removeClass('chosen');
		me.toggleClass('chosen');
		if(me.filter('.city0').not('.chosen').length){
			$('#pressLocation').empty();
		}
		$('#pressSechGO').click();
	});
	$('.sechTag').on('click',function(){
		var me=$(this);
		$('#pressSech').val(me.text()).next().click();
	});


	$('i,:button, :image, :checkbox, .zRMid,#zmediaIn,#zmediaOut,#zRbar, #Sel span[id!=Out],#logos img, #rss > span, #FeedAdd,#tabs li > a').on('click', function(){clk(this)});


	$('select, :file, #opac, #font').on('change',function(){cng(this)});


	$('#rssSech img').on('click',function(){
		var me=$(this), kwd=me.prevAll('#RssSech').val().trim(), kwd0=kwd, sech=me.attr('data-sech'),
			lnk=me.attr('data-lnk'), href=me.attr('data-href'), fn=me.attr('data-fn'), u;

		if(sech){
			var o=RssSechIds[sech];
			lnk=o.u;
		}

		if(kwd){
			if(fn){
				kwd=eval(fn.replace(/fn.\(/g, '$&'+"'"+kwd+"'"));
			}
			u=lnk.replace('%s',kwd);
		}else{
			u=href||H_W(lnk);
		}

		if(kwd && sech){
			$('#feedUrl input').val(u);
			$('#feedName input').val((o.n||'').replace('%s', kwd0));
			$('#feedDesc, #feedHome').find('input').val(function(){
				return o[$(this).parent().attr('data-feed')]||''
			});

			loadrule(o);

			$('#RssAdd2').click();
			Load.succ('RssAdd');
		}else{
			window.open(H+H_w(u));
		}

	});



	$('#zRbar *').on('click',function(e){
		e.stopPropagation();
	});

	$('#Pager .mi-span').on('click',function(){
		var id=$(this).attr('id');
		if(/pg(Prev|Next)/.test(id)){
			var n=Number($('.FulscrToggle').attr('data-allcnt')), pN=id=='pgNext';
			if(n>=0 && pN || n<=1 && !pN){return}
			var pg=$('#zROpts #page'), page=Number(pg.val()) +(pN?1:-1);
			
			pg.val(page || 1).change();//.click();
		}else{
			clk(this);
		}
	})

	$('#sechEntry').on('mouseup',function(e){
		e.stopPropagation();
		var me=$(this), id=this.id;
		if(id=='sechEntry'){
			var kwd=FtA(me.val().trim().toLowerCase()).join(','), kwd0=me.attr('data-s')||'';

			if(kwd0===kwd){return}
			me.attr('data-s', kwd);
		}

		Entry.list();
	});

	$('#page').on('change',function(e){// keyup mouseup click 
		e.stopPropagation();
		var me=$(this), v=+me.val()||1;
		me.val(v);

		var zTA=$('#zRentryText').val().split(zTsplit), zTAl=zTA.length;
		if(zTAl>(v-1)*10){
			$('#zRentries').html(zTA.slice((v-1)*10,v*10).join(''));
			Entry.selThen();
		}else{
			Entry.list();
		}
	});
	
	
	$('#RssAddId').on('change keyup mouseup click',function(e){
		e.stopPropagation();
		var me=$(this),du=$('#RssAddIds option:selected').attr('data-u'),dus=du.split('%id'),
			v=me.val().trim(), u=du.replace('%id',fn0(v));
		$('#rssAdd #urlAdd').val(u);
	});

	$('#audioOpt .btntxt').on('click', function(){
		var me=$(this), nx=me.next(), d=me.attr('data-d');//data-default
		nx.val(d);
		L[nx.attr('id')]=d;
		if(L.audioplaying=='0'){
			$('#audioPlay').removeAttr('src');
		}else{
			$('#audioPlay2 audio[src]').removeAttr('src');
		}
	});
	$('#audioOpt .btnnum,#audioOpt select').on('change',function(e){
		//e.stopPropagation();
		var me=$(this), v=me.val(),id=this.id;
		L[id]=v;
		if(L.audioplaying=='0'){
			$('#audioPlay').removeAttr('src');
		}else{
			$('#audioPlay2 audio[src]').removeAttr('src');
		}
		if(id=='audioEngine'){
		/*
			if(v=='2' && !L.audioEngine2TK){
				L.audioEngine2TK='';
				me.parent().parent().find('summary').html('<p>需要guid值：</p><p><input type=text id=audioEngine2TK></p><p>才可使用腾讯语音</p>'+detail('请打开'+href(fanyi.uA[2],'腾讯翻译君'),'<p>在F12 Console控制台中输入</p><pre>$.cookie("fy_guid")</pre><p>并回车，然后复制结果</p><p>然后返回到此页面粘贴guid值</p>'));
				$('#audioEngine2TK').on('change keyup',function(){
					L.audioEngine2TK=$(this).val();
				});
			}else{
				me.parent().parent().find('summary').empty();
			}
			*/
			if(Math.abs(+Time.now5().substr(0,2)-(+L[id+v]||0))>2){
				$.ajax({type:'get', url:fanyi.uA[+v], success:function(){ L[id+v] = Time.now5().substr(0,2) }});
				
			}
		}
	});

	$('#zRAudioPause').on('click', function(){
		var aP=$('#audioPlay'), a=aP[0];
		if(L.audioplaying=='0'){
			if(a.paused){
				a.play();
			}else{
				$('audio[src]').each(function(){
					this.pause()
				});
				
				
				//a.pause();
			}
		}else if(L.audioplaying=='2'){
			aP=$('#audioPlay2 .audioPlaying');
			if(aP.length){
				a=aP[0];
				if(a.paused){
					a.play();
				}else{
					$('audio[src]').each(function(){
						this.pause()
					});
					//a.pause();
				}
			}else{
				$('#audioParaA p').eq(0).click();
			}
		}
	});

 	$('#audioParaA').on('click','p', function(e){
		var me=$(this);
		me.addClass('audioPlay').siblings().removeClass('audioPlay');
		var t=me.attr('data-src')||me.text().trim().replace(/[,，：:;；]$/,'').trim();

		if(t){
			var s=uriRe.test(t)?t:txt2audio(t,L.audioSpeed,L.audioPitch,L.audioPerson,L.audioLanguage,+L.audioEngine);
			if(!s){
				chrome.tts.speak(t);
			}
			if(L.audioplaying=='0'){
				$('#audioPlay').attr('data-i',me.index()).attr('src',s)[0].play();
			}else{
				var aPi=$('#audioPlay2 audio').eq(me.index()).addClass('audioPlaying').removeAttr('style hidden');
				aPi.show().siblings().removeClass('audioPlaying').hide().each(function(){
					this.pause();
				});
				if(aPi.attr('src')){
					aPi[0].play();
				}else{
					aPi.attr('src',s)[0].addEventListener('ended', function () {  
						var ap=$('#audioParaA p'),i=$(this).index(), pi=ap.eq(i), pisemi=/[,，] *$/.test(pi.text()), i1=i+1<ap.length?i+1:0;
						pi.siblings().removeClass('audioPlay');
						setTimeout(function(){
							ap.eq(i1).click();
						},pisemi?200:500);
				    }, false);
					aPi[0].play();
				}
			}
			var h=0,margin=(me.outerHeight(true)-me.outerHeight())/2;
			
			me.prevAll().each(function(){
				h+=$(this).outerHeight(true);
			});
			h-=margin*me.prevAll().length;
			$('#audioParaA').animate({scrollTop: Math.max(h-150,0)+'px'}, 'slow');
		}else{
			me.next().click()
		}
	});

	$('#audioPlay')[0].addEventListener('ended', function () {  
		var ap=$('#audioParaA p'),i=+$('#audioPlay').attr('data-i'), pi=ap.eq(i), pisemi=/[,，] *$/.test(pi.text());
		setTimeout(function(){
			ap.eq((i+1)%ap.length).click();
		},pisemi?200:500);
    }, false);

	$('#theme_pics').on('click','img', function(){
		var me=$(this), diyAdd=me.is('.diyAdd'), theme=L.theme, t;
		if(me.is('.diy')){

			if(L.dia == me.attr('data-dia')){
				Dialog(null, true);
				var t=$('#zrDialogInput').val().trim();

				if(!diyAdd){
					if(t){
						me.attr('src', t).addClass('selected').siblings().removeClass('selected');
					}else{
						me.remove();
					}
					L.diy=t||'';
					t=[];
					$('#theme_pics img').not('.diyAdd').each(function(){
						t.push($(this).attr('src'));
					});
					L.diys=t.join(' ');
				}else{
					if(t){
						me.before('<img class=selected width=120 height=60 src="'+t+'" />');
						L.diys=(L.diys+' '+t).trim();
						L.diy=t;
					}else{return}
				}


			}else{
				me.add('#zrDialogOK').attr('data-dia', Time.now5());
				Dialog('prom', null, itv('','edit')+gM('diy')+'\n'+H, diyAdd?'':me.attr('src'))
			}


		}else{
			me.addClass('selected').siblings().removeClass('selected');
			t=me.attr('data-src_l') || me.attr('src');
			L[L.theme]=t;
			clk($('#themeOpt')[0]);
		}
		toggleColor();
	});


    $('#AllOpt').on('mouseover', function(){
		$('#Allopt').show();
	}).on('mouseout',function(){
		$('#Allopt').hide();
	});

    $('#zRFolder, #zRFav, #zRTag, #AllOpt').on('mouseover','details > *, .Tag', function(){

		$(this).find('.opt').show();

	}).on('mouseout','details > *, .Tag', function(){
		$(this).find('.opt').hide();

	}).on('click','.opt *', function(e){
		e.stopPropagation();

	}).on('click','.NavWeb', function(){
		window.open(this.title);

	}).on('click','.NavWeb3', function(){
		var me=$(this), feed=me.parent().next(), u=feed.attr('data-u'), ttl=this.title;
		zFe.get(u, function(fe){
			if(L.dia == me.attr('data-dia')){
				Dialog(null, true);
				var t=$('#zrDialogInput').val().trim();
				if(t!==fe.r){
					fe.r=t;
					zFe.put(fe, function(){
						feed.attr('data-r',t);
					});
				}
			}else{
				me.add('#zrDialogOK').attr('data-dia', Time.now5());
				Dialog('prom', null, itv('','border_color')+ttl, fe.r)
			}
		});

	}).on('click','.MkrdBat', function(){
		var me=$(this);
		if(me.parent().is('#Allopt')){
			Folder.MkrdBat(0);
			return;
		}
		var t=me.parent().next();
		if(t.is('.fo')){
			var fUA=[];
			t.parent().parent().find('.feed').not('[data-cnt=" (0)"]').each(function(){
				fUA.push($(this).attr('data-u'))
			});
			if(fUA.length){
				Folder.MkrdBat(fUA);
			}
		}

		if(t.is('.feed')){
			Folder.MkrdBat(t.attr('data-u'));
		}

		if(t.is('.label')){
			return;
		}

	}).on('click','.hideread, .unhideread', function(){
		$(this).toggleClass('hideread unhideread').attr('title', gM(($(this).is('unhideread')?'':'un')+'hideread'))
		Entry.cntUnread();



	}).on('click','.outrss', function(){
		var all=$(this).next().is('.newFolder'), nx=$(this).parent().next();
		if(nx.is('.fo') || all){
			var foi=all?-1:$(this).parents('details').index();
			Folder.outFeedOpml(foi);
		}
		/*
		else{
			Folder.outFeed(nx.attr('data-u'));
		}
		*/

	}).on('click','.feedEdit', function(){
		var nx=$(this).parent().next();
		RssTool.ini('rssBurn');

		$('#FeedEdit [data-feed]').each(function(){
			var a=$(this).attr('data-feed');
			$(this).children().val(nx.attr('data-'+a) || '');
		});

		RssTool.show('rssBurn');
		$('#zRhead').show();

	}).on('click','.newFolder', function(){
		var fA=jSon(L.Folder), FO=L.FO.trim(), fo=Folder.getNew();
		fA.unshift({n:fo,f:''});
		L.FO=fo;
		L.Folder=JSON.stringify(fA);
		var cb=function(){
			$('.fo[data-n="'+fo+'"]').prev().find('.renm').click();
		};
		if(CLOUD){
			SLK.save(function(){
				Folder.list(0,cb);
				SF.save();
			});
		}else{
			Folder.list(0,cb);
		}

	}).on('click','.renm', function(){
		var me=$(this), t=me.parent().next(), f=t.parent(), n=t.attr('data-n');

		if(L.dia == me.attr('data-dia')){
			Dialog(null, true);
			var m=$('#zrDialogInput').val().trim();

			if(m && m!=n){
				if(t.is('.fo')){
					if($('#zRFolder .fo[data-n="'+m+'"]').length){return}
					t.attr('data-n', m).text(m);
					L.FO=m;
					Folder.save().nav(1);
				}
				if(t.is('.feed')){
					t.attr('data-n', m).text(m);
					var u=t.attr('data-u');
					zFe.get(u, function(obj){
						obj.n=m;
						zFe.put(obj, function(){
							Folder.save().nav();
						});
					});
				}

				if(t.is('.label')){
					Tag.act('ren',n,m);
				}
			}
		}else{
			me.add('#zrDialogOK').attr('data-dia', Time.now5());
			Dialog('prom', null, itv('','edit')+gM('renm')+': '+spanRed(XML.encode(n, true)), n)
		}


	}).on('click','.dele', function(){
		var me=$(this), t=me.parent().next(), f=t.parent();
		if(L.dia != me.attr('data-dia')){
			me.add('#zrDialogOK').attr('data-dia', Time.now5());
			Dialog('conf', null, itv('','clear')+gM('delAlert'));
			return
		}

		Dialog(null, true);

		if(t.is('.fo')){
			f=f.parent();
			var dt=t.parents('details'), i=dt.index();

			var fA=jSon(L.Folder), fUA=fA[i].f.split(' ');
			for(var i=fUA.length-1; i>-1; i--){
				Folder.eraseFeed(fUA[i]);
			}
			fA.splice(i,1);
			L.Folder=JSON.stringify(fA);

			if(dt.find('.zRnav').length){
				if(dt.find('.zRnav').filter('div').length){L.FE=''}
				if(dt.next().length){dt=dt.next()}else if(dt.prev().length){dt=dt.prev()}else{dt=$('')}
				L.FO=dt.find('.fo').attr('data-n')||'';
				dt.children('summary').addClass('zRnav');
			}

		}

		if(t.is('.feed')){
			Folder.eraseFeed(t.attr('data-u'));
		}

		if(t.is('.label')){
			Tag.act('del',t.attr('data-n'));
			f.slideUp('slow', function(){
				f.remove();
				Folder.nav();
			});
			return;
		}

		f.slideUp('slow', function(){
			f.remove();
			Entry.cntUnread();
			Folder.save().nav();
		});
	});


	$('#pressFav').sortable({
		items:'.zMedia',
		scroll:true

	}).on('sortupdate',function(){
		var t='';
		$('#pressFav .zMediaName[data-url]').each(function(){
			t+=$(this).text()+','
		});
		L.pressfav=t.replace(/,$/,'');
		clk($('#pressSechGO')[0]);
	});

	$('#bookFav').sortable({
		items:'.zMedia',
		scroll:true

	}).on('sortupdate',function(){
		var t='';
		$('#bookFav .zMediaName[data-url]').each(function(){
			t+=$(this).text()+','
		});
		L.bookfav=t.replace(/,$/,'');

	});
	
	
	$('#zRFolder').sortable({
		items:'details',
		scroll:true
	});
	$('#zRFav').sortable({
		items:'details',
		scroll:true
	});
	$('#zRTag').on('sortupdate','details', function(){
		Tag.save();
		//Folder.nav(true);

	});

	$('#zRLeft').on('sortupdate','#zRFolder, #zRFolder details', function(e,u){
		u.item.find('.fo, .feed').eq(0).click();
		Folder.save().nav(true);
		Entry.cntUnread();


	}).on('change','#zRsearchType', function(){
		var j=+$(this).val(),enj=eng[j].engine;
		var o=[];
		for(var i in enj){
			var e=enj[i];
			o.push(SCtv('mi-span zRsearchEng" data-fn="'+unescape(e.fn)+'" data-href="'+unescape(e.href)+'" data-lnk="'+unescape(e.lnk)+'" data-sz="'+(unescape(e.sz)||''),gM(unescape(e.title))));
		}
		$('#ZRsearchEng').html(o.join(''));
	}).on('click','#zRsearchOff,#zRsearchOff2', function(){
		$('#tabsleft,#tabsright').html('​');//不可见字符

	}).on('click','#zRsearchGO', function(){
		window.open($(this).attr('href'));
	}).on('click','#zRsearchFrame', function(){
		var u=$(this).attr('href');
		$('#tabsright').html('<'+(CLOUD?'webview':'iframe')+' src="'+u+'" style="width:98%;height:500px" />');
		
	}).on('click','.zRsearchEng', function(){
		var me=$(this).addClass('toggle'), kwd=$('#zRsearch').val().trim(), aB=$('#tabsright');
		aB.html('...');
		me.siblings().removeClass('toggle');
		L.zRsearchType=$('#zRsearchType').val()+','+me.index();

		var Url=me.attr('data-href');
		var fn=me.attr('data-fn');
		var lnk=me.attr('data-lnk');
		var sz=me.attr('data-sz'), node=sz || 'body,BODY';
		fn=fn.replace(/fn[0-9a-z]\(\)/g,function(t){return t.replace(')','%n)')});

		Url=lnk.replace(/%s/g,eval(fn.substr(0,3))(kwd));
		if(!/^https?:/.test(Url)){Url=H+Url}
		$('#zRsearchGO,#zRsearchFrame').attr('href',Url);
		
		var ajax={
			type:'GET',
			url:Url,
			error:function(xhr, status, error){
				/*
				zEn.get(iU, function(obj){
					Entry.bdLoadHtml(obj.l, aB);
				});
				*/
			},
			success:function(data, status, xhr){
		
				var html=Entry.bdfromData(data,Url),t=$(html).find(node).eq(0);
			//	consoloe.log(t.length, t.length?t.html():html);
				Entry.bdLoadHtml(t.length?t.html():html, aB);
			},
			dataFilter:function (data, type){return dataFilter(data, type)}
		};
		$.ajax(ajax);

	}).on('click','.feed, .fo, .label, #EntryAll, #EntryFav, #EntryTag', function(){
		var me=$(this), id=me.attr('id'), pa=me.parent();

		//$('#zRLeft details > .sel').removeClass('sel');
		$('#zROpts #Pager > #page').val(1);

		if(id){
			$('#zRLeft .zRnav').removeClass('zRnav');
			L.FE='';
			L.FT='';
		}
		if(me.is('#EntryAll')){
			L.FO='';
			$('#entryType').val(0);
			$('#entryDate').val('last7');
			$('#zRFolder>details').removeAttr('open');

		}else if(me.is('#EntryFav')){
			L.FO=' ';
			$('#entryType').val('');
			$('#entryDate').val('last7');
			
		}else if(me.is('#EntryTag')){
			L.FO='  ';
			$('#entryType').val(1);
			$('#entryDate').val('');
			
		}else if(me.is('.feed')){//只允许单选
			me.toggleClass('zRnav');
			var fO=pa.prevAll('summary').find('.fo');
			if(me.is('.zRnav')){
				var u=me.attr('data-u'), fo=fO.addClass('zRnav').text();
				L.FO=fo;
				L.FE=u;
				Entry.cntUnreadFeed(u);

			}else{
				L.FO=fO.text();
				L.FE='';
			}

		}else if(me.is('.fo')){//只允许单选
			me.toggleClass('zRnav');
			$('#zRLeft .zRnav').not(me).removeClass('zRnav');
			
			if(me.is('.zRnav')){
				var fo=me.attr('data-n');
				var feedCnt=pa.nextAll().length;
				L.FO=fo;
				if(feedCnt){
					var feedNs=[], feedUs=[];
					pa.nextAll().find('.feed').each(function(){
						feedNs.push($(this).attr('data-n'));
						feedUs.push($(this).attr('data-u'));
					});

				}

			}else{
				L.FO='';
			}
			L.FE='';

		}else if(me.is('.label')){//允许多选

			pa.toggleClass('zRnav');

			var tArr=[];
			$('#Tags .Tag.zRnav').each(function(){
				tArr.push($(this).find('.label').text());
			});
			L.FT=tArr.join(',');

		}

		Entry.update(true);


	}).on('contextmenu', '.feed', function(){
		window.open($(this).attr('data-u'));
		return false;
	});

/*
	$('#zRList123').on('scroll',function(){
		var sT=$('#zRList')[0].scrollTop, dir=sT-zRListScrollTop;
		zRListScrollTop=sT;
		if(dir<0 && sT>0 || dir>0 && sT<$('#zRList').height()){return}
		
		var selei=($('#zRentries > div:'+(dir<0?'first':'last')).attr('class')||' Entry1 ').match(/ Entry\d+ /)[0], si=+selei.match(/\d+/)[0],
		zTA=$('#zRentryText').val().split(zTsplit);
		
		console.log(dir<0?'向上滚':'向下');
		$('#zRentries').html(function(x){return dir<0?prog+x:x+prog});
		for(var i=0, l=zTA.length;i<l;i++){
			if(zTA[i].indexOf(selei)>0){

				var htm=(dir<0?zTA.slice(max([0,i-21]),i-1):zTA.slice(i+1,i+21)).join('');
				$('#zRentries').html(htm);
				
				break;
			}
		}
		zRListScrollTop=0;

	});
*/
	$('#zRentries').on('click','.sele > details > summary', function(){

		var pa=$(this).parent(), act=$(this).nextAll('.entryAction'), aH=$(this).next().find('.articleHead'), aB=aH.next();
		var fU=aH.find('.articleSource').attr('data-u'), iU=aH.find('.navWeb').attr('data-u'), sel=pa.parent();

		$('.sele.seled').removeClass('seled sel');
		sel.addClass('seled');


		Entry.act('r',1,[iU]);

		var imgs=pa.prev(), imgO=$('#imgOpts').val(), imgPreAll=imgO=='imgPreAll', imgOff=imgO=='imgOff', imgPreOne=imgO=='imgPreOne', imgPreOn=imgPreAll || imgPreOne;
		if(pa.is('[open]')){
			if(imgPreOn){imgs.fadeIn()}
			//if(!imgOff){aB.find(zlr2('img :image','[src]',',')).removeAttr('src')}
			aB.next().find('details[open]').removeAttr('open');
		}else{
			imgs.hide();
			if(!aB.html()){
				zFe.get(fU, function(obj){
					if(obj.r){
						aH.find('.navWeb3').click();
					}else{
						zEn.get(iU, function(obj){
							if(obj){
								if(obj.l){
									Entry.bdLoadHtml(obj.l, aB).updateFeedCmt(iU);
								}else{
									aH.find('.navWeb1').click();
								}
							}
						});
					}
				});
				

			}
/*
			if(!imgOff){
				Entry.bdLoadImg(aB);
			}
*/

		}
		imgs.prev().find('.bold').removeClass('bold');


		sel.siblings().find('details[open]').removeAttr('open').prev('.entryImgs').show();
		Entry.unread().scrol();

		act.find('.markread').removeClass('markread').addClass('unmarkread').text('check_box_outline_blank');

	}).on('click','.sele > .entryHead', function(){
		$(this).nextAll('details').find('summary').eq(0).click();
	}).on('click','.FeedAdd[data-u]', function(){
		clk(this);
	}).on('mouseover','.sele > .entryHead', function(){
		$(this).children('.del').show();

	}).on('mouseover','.shares > input[type=url]', function(){
		this.select();

	}).on('mouseout','.sele > .entryHead', function(){
		$(this).children('.del').hide();

	}).on('click','.view label>span', function(){
		$(this).parent().hide();

	}).on('click','.view .ZoomIn,.view .LineH, .view .col, .view .Padd', function(){
		$(this).next().fadeToggle().parent().siblings().find('label').hide();

	}).on('click',zlr('.view > .','align>i nocss noimg negimg ubb big2zh zMath',',')+', .zAudio', function(e){	// keyup mouseup
		e.stopPropagation();
		var me=$(this), v=me.val();
		if(me.is('.nocss, .noimg, .ubb')){
			var aB=me.parents('.articleHead').next();
			if(aB.children().is((CLOUD?'webview':'iframe')+':only-child')){return}
			if(me.is('.noimg')){
				aB.find('img, :image').toggle();
			}
			if(me.is('.nocss')){
				aB.find('[style], [class]').removeAttr('style class');
				aB.find('font').removeAttr('color face size');
				aB.find('table').removeAttr('width');
				aB.find('style, link[rel=stylesheet], link[type="text/css"]').remove();
				aB.find('a').addClass(L.color);
				aB.find(':header').each(function(){
					$(this).replaceWith(XML.wrapE('div',$(this).html()));
				});
				me.parents('.view').find('label').hide();
			}
			if(me.is('.ubb')){
				if(/\[\/.+\]/.test(aB.text())){
					aB.html(ubb2html(aB.text()));
				}
			}
		}else if(me.is('.zAudio')){
			var aB=me.parents('.articleHead').next(),t='';
			if(!aB.length){
				aB=me.parent().prev().find('.articleBody');
			}
			if(aB.children().is((CLOUD?'webview':'iframe')+':only-child')){return}
			aB.find('p,h1,h2,h3,blockquote').each(function(){
				var p=$(this).text().trim();
				if(p){
					t+=p+'\n';
				}
			});
			t=t.trim();
			if(!t){
				t=aB.text().trim();
			}
			$('#zRRight #Audio').click();
			$('#audioTxt').val(t);
			$('#zRAudioPlay2').click();

		}else if(me.is('.negimg')){
			clk(this)

		}else if(me.is('.big2zh')){
			me.parents('.articleHead').nextAll().html(function(i,v){return zh2big(v,1)});
			
			
		}else if(me.is('.zMath')){
			toggleMath(me.parents('.articleHead').next()[0]);


		}else{
			v=me.attr('class').replace(/mi|toggle/g,'').trim();
			me.addClass('toggle').siblings().removeClass('toggle');
			L.align=v;
			$('.view .align i').removeClass('toggle').filter('.'+v).addClass('toggle');
			$('article > .articleBody').css('text-align',v);
			me.parents('.view').find('label').hide();
		}

	}).on('change',zlr('.view ','input select',','), function(e){	// keyup mouseup
		e.stopPropagation();
		var me=$(this), v=me.val();
		if(me.is('.zoomin')){
			L.zoomin=v;
			$('.Zoomin .zoomin').val(v);
			$('summary + article').css('zoom',v);
		}else if(me.is('.lineh')){
			L.lineh=v;
			$('.Lineh .lineh').val(v);
			$('summary + article').css('line-height',v);
			
		}else if(me.is('.padd')){
			var pads=me.parent().find('input'), wh=[pads.eq(0).val(), pads.eq(1).val()];
			L.padd=wh.join('x');
			$('.PAdd .padd').val(function(){return $(this).next().length?wh[0]:wh[1]});
			$('article > .articleBody').css('padding',wh.concat(wh,'').join('px ').trim());

		}else if(me.is('.cols')){
			L.cols=v;
			$('.Cols .cols').val(v);
			$('article > .articleBody').not('article > .articleBody > '+
				(CLOUD?'webview':'iframe')+
				':only-child').removeClass(zlr('col','1 2 3 4 5')).addClass('col'+v);

		}else if(me.is('.negimg')){
			clk(this)
		}
		if(CLOUD){SLK.save()}
	}).on('click','.sele > .entryImgs > img', function(){
		$(this).parent().next().find('summary').eq(0).click();

	}).on('dblclick','code', function(){
		$(this).parents('.articleBody').find('code').html(function(i,t){return XML.decode(t)});

	}).on('click',zlr3('.sele > details > .entryAction > .',' un','edit',','), function(){
		var me=$(this), aH=me.parent().prev().children().eq(0), T=aH.find('.navWeb1'), aB=aH.next(), ed=aB.is('[contenteditable]');
		if(ed){
			var iU=aH.find('.navWeb').attr('data-u'), t=T.text();
			me.parents('details').prev().find('.entryTitle').text(t);
			T.add(aB).removeAttr('contenteditable');

			zEn.get(iU, function(obj){
				obj.h=t;
				obj.l=aB.html();
				zEn.put(obj);
			});
		}else{
			T.add(aB).attr('contenteditable',true);
		}
		if(ed){var id='edit'+Time.now5(); me.attr('id', id);Load.ingsucc(id, 500)}
		me.toggleClass('edit unedit');
		me.attr('title', gM(ed?'edit':'save')).text(ed?'edit':'save');

	}).on('click',zlr('.sele > details > .entryAction > .','fav unfav markread unmarkread del tag',','), function(){
		var me=$(this), dt=me.parents('details'), sm=dt.children().eq(0), aH=sm.next().children().eq(0);
		if(!me.parent().is('.entryAction')){return}

		var iU=aH.find('.navWeb').attr('data-u'), fU=aH.find('.articleSource').attr('data-u');
		var cl=me.attr('class').replace('mi','').trim(), cla=cl.replace('un',''), u=/un/.test(cl), c=cla.substr(0,1);

/*
		if(c=='d'){

			if(L.dia != me.attr('data-dia')){
				me.add('#zrDialogOK').attr('data-dia', Time.now5());
				Dialog('conf', null, itv('','clear')+gM('delAlert'));
				return
			}
			Dialog(null, true);
		}
*/
//console.log(c);


		var cb=function(){
			if(c=='d'){
				var sele=dt.parents('.sele'), read=aH.find('.entryTitle.bold').length;

				var zTA=$('#zRentryText').val().split(zTsplit);

				var selei=sele.attr('class').match(/ Entry\d+ /)[0];
			//	console.log(selei);
				for(var i=0, l=zTA.length;i<l;i++){
					if(zTA[i].indexOf(selei)>0){
						zTA=zTA.slice(0,i).concat(zTA.slice(i+1));
					//	console.log(selei,'匹配成功');
						break;
					}
				}

				if(!sele.siblings().length){
					$('#Pager > #page').val(1)
				}
				if(zTA.length){
					$('#zRentryText').val(zTA.join(zTsplit));
					$('#zRentries').html(zTA.slice(0,10).join(''));

				}else{
					Entry.list();
				}



			}
			//console.log(c);
			if(c=='r'||c=='d' && read){
				var rcnt=c=='r' && u?1:-1;

				var feed=$('#zRFolder .feed[data-u="'+fU+'"]');
				feed.attr('data-cnt',function(i,v){return Cnt(CntN(v)+rcnt)});
				feed.parents('details').find('.fo').attr('data-cnt',function(i,v){return Cnt(CntN(v)+rcnt)});
				$('#Allcnt').text(function(i,v){return '/ '+(CntN(v)+rcnt)});

				$('.FulscrToggle').attr('data-allcnt',function(i,v){return /^\d+$/.test(v)?CntN(v)+rcnt:v});
			}
			

			Entry.selThen()

		};


		if(c=='t'){
			var t0=me.next().text();
			if(L.dia == me.attr('data-dia')){
				Dialog(null, true);
				var tag=$('#zrDialogInput').val().trim();
				tag=FtA(tag||'').join(',');
				if(t0==tag){return}
				me.next().html(tag?Arrf(function(x){return XML.wrapE('b',x)},tag.split(',')).join(''):'');
			}else{
				me.add('#zrDialogOK').attr('data-dia', Time.now5());
				Dialog('prom', null, itv('','bookmark')+gM('tag')+': '+'\n'+gM('tagTip'), t0||aH.find('.cata').text())
			}
		}

		if(c=='m'){c='r'; dt.prev().prev().find('.entryTitle').toggleClass('bold',u)}

//console.log(c);
		Entry.act(c,c=='t'?tag:(u?0:1),[iU],cb);

		if(/[fr]/.test(c)){

			if(c=='f'){
				var f2=dt.prevAll('.entryHead').children().eq(1);
				me.add(f2).toggleClass(cla+' un'+cla).attr('title', gM((u?'':'un')+'fav')+hkn+'S').text('favorite'+(u?'_border':''));
				if(!u){
					Load.plus1('EntryFav',1000);
				}
			}else{
			//	console.log(c);
				me.toggleClass(cla+' un'+cla).attr('title', gM((u?'':'un')+'markread')+hkn+'M').text(u?'done':'check_box_outline_blank');
			}
		}




	}).on('click','.sele > details > .entryAction', function(){
		$(this).parents('details').removeAttr('open').parent().show();
		Entry.scrol();

	}).on('click','.sele > details > .entryAction .tags b', function(){
		$('#entryType').val(null);
		$('#zRTag .label[data-n="'+$(this).text()+'"]').click()


	}).on('click','.sele > .entryHead .entryTitle', function(){
		$(this).parent().nextAll('details').removeAttr('open').parent().removeClass('seled').toggleClass('sel');
		Entry.selThen();

	}).on('click','.sele > .entryHead .del', function(){
		$(this).parent().parent().find('.entryAction').find('.del').click();

	}).on('click','.sele > .entryHead .entrySource + i', function(){
		$(this).parent().parent().find('.entryAction').children().first().click();

	}).on('click',zlr('.articleHead > .head > .navWeb','1:not([contenteditable]) 2 3 4',','), function(){
		var me=$(this), u=me.attr('data-u'), nav1=me.is('.navWeb1'), nav2=me.is('.navWeb2'), nav3=me.is('.navWeb3'), nav4=me.is('.navWeb4');
		var aH=me.parents('.articleHead'), aB=aH.next(), frm=aB.children((CLOUD?'webview':'iframe')+'[src="'+u+'"]'), node;
		var iU=aH.find('.navWeb').attr('data-u'), fU=aH.find('.articleSource').attr('data-u'), iT=aH.find('.navWeb1').text();


		if(nav4){
			Dialog('prom2', null, gM('qrTip')+'\n<div id=qrcode data-iu="'+iU+'">'+dc+'\n『'+iT+'』'+gM('ruleUrl')+':', iU);
			return
		}

		Entry.scrol();

		me.addClass('toggle').siblings().removeClass('toggle');
		aB.removeClass(zlr('col','1 2 3 4 5')).addClass('col'+(nav2?1:L.cols));
		var cb=function(){
			zFe.get(fU, function(obj){
				if(nav3){
					node=obj.r ||'article, .article';
				}

				aB.html('...');
				if(nav2){
					aB.html('<'+(CLOUD?'webview':'iframe')+' src="'+u+'" style="width:98%;height:'+$(window).height()+'px" />');
				}else{
					var ajax={
						type:'GET',
						url:u,
						error:function(xhr, status, error){
							zEn.get(iU, function(obj){
								Entry.bdLoadHtml(obj.l, aB);
							});
						},
						success:function(data, status, xhr){
							var ext=xhr.getResponseHeader('Content-Type');
							//console.log(ext);
							if(/application/.test(ext)){
								aB.html('<'+(CLOUD?'webview':'iframe')+' src="'+u+'" style="width:98%;height:'+$(window).height()+'px" />');
								return
							}

							var html=Entry.bdfromData(data,u),t=$(html).find(node).eq(0);
						//	consoloe.log(t.length, t.length?t.html():html);
							Entry.bdLoadHtml(t.length?t.html():html, aB);
							aB.parent().next().find('.edit').toggleClass('edit unedit').attr('title',gM('save')).text('save');
						},
						dataFilter:function (data, type){return dataFilter(data, type)}
					};
					$.ajax(ajax);
				}

			});

		};
		if(nav1){
			zEn.get(iU, function(obj){
				if(obj.l){
					Entry.bdLoadHtml(obj.l, aB);
					//console.log(obj.l);
				}else{
					cb();
				}
			});

		}else{
			cb();
		}


	}).on('click','.articleHead > .meta > .articleSource, .entryHead > .entrySource', function(e){
		e.stopPropagation();
		var me=$(this), u=me.attr('data-u');
		if(me.is('.articleSource2')){

			if(L.dia != me.attr('data-dia')){
				me.add('#zrDialogOK').attr('data-dia', Time.now5());
				Dialog('conf', null, itv('','rss_feed')+gM('rssAdd')+':\n'+$(this).text()+'\n'+u);
				return
			}
			Dialog(null, true);

			$('#rssAdd #urlAdd').val(u);
			Entry.RssAdd(u);

		}else{
			var feed=$('#zRFolder .feed[data-u="'+u+'"]');
			if(feed.length){
				L.FO=feed.parents('details').find('.fo').text();
				L.FE=u;
				Folder.list();
			}else{
				
				
				
			}
		}

	}).on('click','.sele .entryAction > .imgdownload', function(){
		var me=$(this), pa=me.parent(), imgr=me.next('.imgdls'), aB=pa.prev().children('.articleBody'), aH=aB.prev(), iU=aH.find('.navWeb').attr('data-u');

		var wd=imgr.find('.w'), ht=imgr.find('.h');

		if(aB.children('webview').length){

			if(L.dia != me.attr('data-dia')){
				me.add('#zrDialogOK').attr('data-dia', Time.now5());
				Dialog('conf', null, itv('','file_download')+gM('imgdlTip'));
				return
			}
			Dialog(null, true);
			window.open(iU);

			imgr.fadeOut();
		}else if(imgr.is(':visible')){
			imgr.fadeOut();
		}else{
			wd.val(L.w); ht.val(L.h);
			imgr.fadeIn();
		}

	}).on('click','.sele .entryAction .imgdl', function(){
		var me=$(this), imgr=me.parent(), pp=imgr.parent(), aB=pp.prev().children('.articleBody'), aH=aB.prev(), iU=aH.find('.navWeb').attr('data-u');

		var wd=imgr.find('.w'), ht=imgr.find('.h'), aHs=aH.find('.articleSource').text(), aHt=aH.find('.navWeb1').text();


		if(aB.children('webview').length){

			if(L.dia != me.attr('data-dia')){
				me.add('#zrDialogOK').attr('data-dia', Time.now5());
				Dialog('conf', null, itv('','file_download')+gM('imgdlTip'));
				return
			}
			Dialog(null, true);
			window.open(iU);

			imgr.fadeOut();
		}else{
			var w=Number(wd.val())||150, h=Number(ht.val())||150, imgArr=[], pname, pext;
			L.w=w; L.h=h;
			var aBimg=aB.find(zlr2('img :image','[data-wh]',',')).filter(function(){
				var wh=$(this).attr('data-wh').split('x');
				return Number(wh[0])>=w && Number(wh[1])>=h;
			});
			aBimg.each(function(){
				var url=this.src, n;
				if(imgArr.indexOf(url)<0){
					if(url.substr(0,11)=='data:image/'){
						pname = url.replace(/[;,].*/,'');
						pext = pname.split('/')[1].toLowerCase().replace('x-icon','ico').replace('+xml','');
						n=($(this).attr('alt') || $(this).attr('title') || $(this).attr('id') || $(this).attr('class'))+ '.'+pext;
					}else{
						pname = decodeURIComponent(url.replace(/\?.+$/,'').replace(/.+[/]/,''));
						pext = pname.replace(/.+\./, '').replace(/\&.+$/,'');
						n=pname+(pname.indexOf('.')>0?'':'.jpg');
					}
					imgArr.push(url);
					saveAs(url, n);
				}
			});

			imgr.fadeOut();
		}

	}).on('click','.sele .entryAction .entrydl', function(){
		var me=$(this), imgr=me.parent(), pp=imgr.parent(), aB=pp.prev().children('.articleBody'), aH=aB.prev(), iU=aH.find('.navWeb').attr('data-u');

		var wd=imgr.find('.w'), ht=imgr.find('.h'), aHs=aH.find('.articleSource').text(), aHt=aH.find('.navWeb1').text();


		if(aB.children('webview').length){

			if(L.dia != me.attr('data-dia')){
				me.add('#zrDialogOK').attr('data-dia', Time.now5());
				Dialog('conf', null, itv('','file_download')+gM('imgdlTip'));
				return
			}
			Dialog(null, true);
			window.open(iU);

			imgr.fadeOut();
		}else{
			var cvs=$('#zRcvs').attr({'width':200,'height':200})[0],ctx=cvs.getContext('2d');
			var data='<svg xmlns="'+xmlns+'" xmlns:xlink="'+xmlnsxlink+'">'+
				'<desc name="zzllrr RSS Reader" url="'+HOM.ZR+'">'+gM('zname')+'</desc>'+
			    '<foreignObject width="100%" height="100%">'+XML.wrapE('h1',href(iU,aHt))+DCtv('by','by '+href(HOM.ZR,gM('zname')))+//<![CDATA[
			    aB.html()+'</foreignObject>'+'</svg>';//]]>
		  var DOMURL = window.URL || webkitURL;
		  //var url=svgAs($(data));
		 // console.log(url, aHt);
		 // saveAs(url, pathTxt(aHt,1)+'.png');
		  saveText(data, pathTxt(aHt,1)+'.svg');
		  /*
		  var img=new Image(), svg=new Blob([data],{type:'image/svg+xml'});
		  var url=DOMURL.createObjectURL(svg);
		  console.log(url, aHt, svg, data);
		  img.onload=function(){
		    ctx.drawImage(img, 0, 0);
		    saveAs(ctx.toDataURL(), '通过Canvas '+pathTxt(aHt,1));
		    saveAs(url,pathTxt(aHt,1));
		    DOMURL.revokeObjectURL(url);
		    
		  }
		  img.src = url;
		  
		  */
		  imgr.fadeOut();
		}


	}).on('click','.sele .entryAction > .txtdownload', function(){
		var me=$(this),nx=me.next().fadeToggle();

	}).on('click','.sele .entryAction .txtdls input', function(){
		var me=$(this), v=me.val(), txtdls=me.parent(), pp=txtdls.parent(), aB=pp.prev().children('.articleBody'), aH=aB.prev(), iU=aH.find('.navWeb').attr('data-u');
		var aHs=aH.find('.articleSource').text(), aHt=aH.find('.navWeb1').text();


		if(aB.children('webview').length){

			txtdls.fadeOut();
		}else{
			if(v=='TXT'){
				var aB1=aB.clone();
				aB1.children().each(function(){
					var $t=$(this);
					$t.replaceWith($t.text());
				})
				saveText([aHt,iU,
					aB1.html()].join('\n'), aHt+'.txt');//,'via '+gM('zname'),HOM.ZR
			}
			if(v=='HTML'){
				var meta=aH.find('.meta').clone(), aS=meta.find('.articleSource');
				aS.replaceWith(aS[0].outerHTML.replace(/<span/,'<a').replace('</span','</a').replace('data-u=','href='));
				var t=outHTML(DCtv('article',[
							XML.wrapE('h2',href(iU,aHt)),
							meta[0].outerHTML,
							XML.wrapE('article', aB.html()),
							(j.c?XML.wrapE('p',j.c):'')
						].join('\n')));
				saveText(t, aHt+'.html');
			}

		}
		


	}).on('click','.sele > details > .entryAction *, .sele > .entryHead > span, .sele > .entryHead > i', function(e){
		e.stopPropagation();

	}).on('click','.sele > details > .entryAction > .share', function(){
		$(this).next().fadeToggle();

	}).on('click',['.shares img','email','qr'].join(',.sele > details > .entryAction > .'), function(){
		var $t=$(this), share='email', eA=$t.parent();
		if($t.is('img')){share=$t.attr('data-share'); eA=eA.parent()}

		var hd=eA.prev().children().eq(0).find('.head'), iU=hd.find('.navWeb').attr('data-u'), t=hd.find('.navWeb1').text();
		var s=eA.prev().prev().find('.summary').text().substr(0,50), aBimg=eA.parent().prev().children();
		
		if($t.is('.qr')){
			share='qr';
			$t.parents('.sele').find('.navWeb4').click();
		}else if(share=='email'){
			window.open('mailto:?subject='+fn0(t+'')+'&body='+encodeURI(iU+'\n\n\t\tvia '+gM('zname').replace(/\(.+/,'')));
			
		}else{
			if(!aBimg.length){aBimg=eA.prev().find(zlr2('img :image','[data-wh]',',')).filter(function(){return Number($(this).attr('data-wh').split('x')[0])>=150})}
			if(!aBimg.length){aBimg=eA.prev().find(zlr2('img :image','[data-src]',','))}
			var pic=aBimg.eq(0).attr('data-src')||'';
			if(pic.indexOf('data:image/')>-1){pic=''}
			window.open(fns(share, iU, t, s, pic),'','status=no,resizable=no,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=632,height=320,left=0,top=0');
		}

	}).on('click','.ZMath .katex',function(){
		copy2clipboard($(this).parent('.ZMath').attr('title'))

	}).on('mouseup','.articleBody, .date+.summary, .cmtBody', function(){
		var t=window.getSelection().toString().trim(), s=$('#tabsleft #zRsearch');
		if(t && t.length<38){
			var j=(L.zRsearchType||'0,0').split(',');
			if(s.length){
				s.val(t);
			}else{
				var o=[];
				for(var i in eng){
					o.push(gM(unescape(eng[i].name)));
				}

				$('#tabsleft').html('<div id=ZRsearchType><select id=zRsearchType>'+Options(seqA(0,eng.length),o).join('')+'</select><i class="mi" id="zRsearchOff">cancel</i></div><div id=ZRsearch><input type=text id=zRsearch value="'+t+'"><i class="mi" id="zRsearchOff2">cancel</i><i class="mi" id="zRsearchGO">open_in_new</i><i class="mi" id="zRsearchFrame">picture_in_picture</i></div><div id=ZRsearchEng></div>')
				$('#zRsearchType').val(j[0]);
				$('#zRsearchType').change();
				toggleColor(1);
			}

			$('.zRsearchEng').eq(+j[1]).click();
		}



	}).on('contextmenu','summary .cmtCnt,.articleSource', function(){
		window.open($(this).attr('data-u'));
		return false;
	});


	$('body').on('click','.zMediaName',function(){
		var me=$(this),u=me.attr('data-url'),t=me.text().trim(),c=me.attr('data-cata');
		if(u){
			window.open(me.attr('data-url'));
		}else{
			if(t=='+'){
				$('#mediaSearch > div').hide();
				$('#media'+c+',#zrMedia').show();

			}
		}



	}).on('click','.Mediafav',function(){
		var me=$(this),s=/_/.test(me.text())?'fav':'unfav',isfav=/un/.test(s),c=me.attr('data-cata').trim(),pa=me.parent(),pi=me.next().text(),t=L[c+'fav'],mf=pa.parent('#'+c+'Fav').length;
		if(isfav){
			var s1=s.replace('un','');
			me.text('favorite_border');
			L[c+'fav']=t.replace(new RegExp('(^|,)'+pi+'(,|$)'),',').replace(/^,|,$/g,'');
			mf && pa.remove() && $('.zMediaName[data-cata="'+c+'"]').filter(function(){return $(this).text()==pi}).prev().text('favorite_border');
		}else{
			me.text('favorite').attr('title',gM('unfav'));
			Load.plus1('zmediaIn',1000);
			L[c+'fav']=(t+','+pi).replace(/^,/g,'');
		}
	}).on('click','.navWeb', function(){
		window.open($(this).attr('data-u'));
	}).on('keydown',function(e){
		var k=e.keyCode, shft=e.shiftKey||k==16, ctrl=e.ctrlKey||k==17, alt=e.altKey||k==18, cmd=k==91,
			act=document.activeElement, node=act.tagName.toLowerCase(), id=$(act).attr('id');
//console.log(k,node);
		var diaOn=$('#zrDialog').is(':visible');

		if(diaOn && node!='input' && k!=13 && k!=79 && k!=27){return}

		if(node=='body'){
			if(diaOn){
				if(!(shft || ctrl)){
					if(k==13 || k==79){
						$('#zrDialogOK').eq(0).click();
						return
					}
					if(k==27){
						$('#zrDialogOff').eq(0).click();
						return
					}
				}
			}

			if($('.rssToolOff').is(':visible')){
				if(!(shft || ctrl)){
					if(k==27){
						$('.rssToolOff').eq(0).click();
						return
					}
				}
			}
		}
		if(node=='textarea' && ctrl){
			if(k==69){act.value='';return false}
		}

		if(/^(input|textarea)$/.test(node) && ctrl){
			if(k==83){

				if($(act).parents('#FeedEdit').length>0){
					$(act).parents('#FeedEdit').next().find('#RssAdd2').click();
				}
				return false
			}
		}

		if(alt){
			if(k==50 || k==98){
				var t=getSelection().toString();
				if(t){saveText(t, gM('zname')+'_'+Time.now()+'.txt')}
			}
		}
		if(node=='div' && $('.sele.seled').length && $('.sele.seled > details[open]').length){
			if(k==49 && alt && !ctrl || k==83 && !shft && !alt && ctrl){
				var eA=$('.sele.seled').find('.entryAction span'), aH=$('.sele.seled').find('.articleHead');
				eA.eq(2).click()
				e.stopPropagation();
			}

			
		}
		if(/^(body|summary)$/.test(node) ){

			if($('.sele.seled').length && $('.sele.seled > details[open]').length && !ctrl){
				var eA=$('.sele.seled').find('.entryAction > span'), aH=$('.sele.seled').find('.articleHead');
				if(k==49 && alt){eA.eq(2).click()}
				if(!alt && !cmd){
					if(k==83 && !shft){eA.eq(0).click()}
					if(k==77){eA.eq(1).click()}
				
					if((k==68 || k==46) && !shft){eA.filter('.del').click()}
					if(k==66){eA.filter('.imgdownload').click()}
					if(k==69){eA.filter('.email').click()}
					if(k==83 && shft){eA.filter('.share').click()}

					if(k==86){aH.find('.navWeb').click()}
					if(k==67){aH.find('.navWeb2').click()}
					if(k==88){aH.find('.navWeb3').click()}
					if(k==90){aH.find('.navWeb4').click()}
					if(k==84){eA.filter('.tag').click()}
				}
			}



			if(ctrl){
				if(k==83){
					$('.articleBody[contenteditable]').each(function(){
						var aH=$(this).prev(), iU=aH.find('.navWeb').attr('data-u'), t=aH.find('.navWeb1').text(), html=$(this).html();
						zEn.get(iU, function(obj){
							obj.h=t;
							obj.l=html;
							zEn.put(j);
						});
					})
				}

				if(k==35){Scroll('scrollB')}
				if(k==36){Scroll('scrollT')}

				if(k==83 && shft){clk($('#feedSech')[0])}

			}else if(!cmd && !alt){
				if(!shft){

					if($('.sel.sele').length){
						if(k==68 || k==46){$('#del').click()}
						if($('.sele.seled > details[open]').length<1){
							if(k==83){$('#fav, #unfav').filter(':visible').eq(0).click()}
						}
					}

					if(k==32){$('.FulscrToggle').eq(0).click()}
					if(k==35){Entry.scrolB()}
					if(k==36){Entry.scrolT()}

					if(k==74){$('.page1').eq(0).click()}
					if(k==75){$('.page0').eq(0).click()}
					if(k==80){$('.seled').prev().addClass('seled').next().removeClass('seled')}
					if(k==78){$('.seled').next().addClass('seled').prev().removeClass('seled');
						if($('.seled').length<1){$('.sele').eq(0).addClass('seled')}
					}
					if(k==70){$('.zRMid, #zRbar').click()}
					if(k==76){$('.zRMid').click()}


					if(k==79){$('.seled').children('details').children('summary').click().focus()}

					if(k==65){$('.sele').removeClass('seled').toggleClass('sel', !$('#selAll').prop('checked')); Entry.selThen()}
					if(k==73){$('#selToggle').click()}
					if(k==82){Entry.update(true)}
					if(k==19 || k==119){Entry.update('pause')}

					if(k==81){clk($('#feedAdd')[0])}
					if(k==85){cng($('#entryType').val(function(i,v){return v==''?0:(v=='0'?1:'')})[0])}

				}else{

					if(k==65 || k==68 || k==46){
						$('.sele').removeClass('seled').addClass('sel');
						$('#selAll').prop('checked', true);

						$('#'+(k==65?'markread':'del')).click();
					}
					if(k==191){$('#sechEntry').focus()}

					if(k==74 || k==40){var f=$('#zRLeft .zRnav').next().find('.feed'); if(f.length<1){f=$('#zRLeft .zRnav').parent().next().attr('open',true).find('.feed').eq(0)} f.click()}
					if(k==75 || k==38){var f=$('#zRLeft .zRnav').prev().find('.feed'); if(f.length<1){f=$('#zRLeft .zRnav').parent().prev().attr('open',true).find('.feed').last()} f.click()}

					if(k==80){$('#zRLeft .zRnav').parent().prev().find('.fo').click()}
					if(k==78){$('#zRLeft .zRnav').parent().next().find('.fo').click()}
					if(k==79){$('.seled').children('details').find('.articleCmt > details > summary').click().focus()}

					if(k==81){clk($('#feedBurn')[0])}

					if(k==39){$('#pgNext').click()}
					if(k==37){$('#pgPrev').click()}

					

					if($('#zRentries > .sel').length){
						if(k==77){$('#markread').click()}
						if(k==85){$('#unmarkread').click()}
						if(k==84){$('#tag').click()}
					}

				}

			}


		}else{
			if(k==13){
				if(id=='zrDialogInput'){$('#zrDialogOK').filter(':visible').click()}
				if(id=='RssSech'){$('#rssSech img').eq(0).click()}
				if(id=='urlAdd' || id=='RssAddId'){$('#RssAdd').click()}
				if(id=='tags'){$('#tag').click()}
				if(id=='sechEntry'){$('#sechEntry').mouseup()}
				if(id=='pressSech'){
					$(act).next().click()
				}
				if(id=='zRsearch'){
					var eng=$('.zRsearchEng.toggle');
					if(!eng.length){
						eng=$('.zRsearchEng').eq(0);
					}
					eng.click();
				}
			}

		}
	});

	clk($('#pressSechGO')[0],1);
	clk($('#pressSechGO')[0]);
	clk($('#bookSechGO')[0],1);
	clk($('#bookSechGO')[0]);

	$('#note').html(L.note || '').on('click mouseup keyup',function(){
		L.note=$('#NoteView.toggle').length?$(this).html():XML.decode($(this).html());
	});
	if(L.Folder=='[]'){
		$('#urlAdd').val(H+'www.zhihu.com/rss');
		$('#RssAdd').click();
	}
	


	$('#font,#FONT').on('click',function(){
		if($('#CSS_fontfamily').length<1){
			var FF=jSon(fontHan),A=[],B=[];
			$.each(FF,function(j,u){
				$.each(u,function(i,v){
					if(isSupportFontFamily(v)) {
				        A.push(v);
				        B.push(i);
				    }
					
				})
			});
			$('#datalist').append('<datalist id=CSS_fontfamily>'+Options(A,B).join('')+'</datalist>');
		}
	});


	var qrcode001 = new QRCode($('#donaV2aliPay')[0], {
		text:qrs['V2aliPay'],
		width : 150,
		height : 150
	}),qrcode002 = new QRCode($('#donaV2qqPay')[0], {
		text:qrs['V2qqPay'],
		width : 150,
		height : 150
	}),weixinZQR = new QRCode($('#weixinZQR')[0], {
		text:qrs['weixinZQR'],
		width : 150,
		height : 150
	});

});
}


function createStore(cbb){
	var cb=function(){
		Tag.list();
		Folder.list(true, function(){cbb()});

		Entry.searchKey('Pos');
		Entry.searchKey('Neg');

		var k=L.searchPos;
		if(k){$('#sechEntry').val(k).mouseup()}

	}, cb0=function(){
		zEn = new IDBStore({
			dbVersion: '2',
			storeName: 'Entry',
			storePrefix: 'zR',
			keyPath: 'u',
			autoIncrement: true,
			onStoreReady: cb,
		  indexes:[
			{name:'p', keyPath:'p'}, {name:'s', keyPath:'s'}, {name:'r', keyPath:'r'}, {name:'d', keyPath:'d'}, {name:'f', keyPath:'f'}
		  ]
		});
	};
    zFe = new IDBStore({
      dbVersion: '1',
      storeName: 'Feed',
	  storePrefix: 'zR',
      keyPath: 'u',
      autoIncrement: true,
      onStoreReady: cb0
    });

}

var Load={
	succ:function(id, tim){Load.ed(id); $('#'+(id?id:'Allopt')).after(itv('" title="OK','check_circle'));
		if(id){setTimeout(function(){Load.ed(id)}, tim||2000)}
		},
	plus1:function(id, tim){Load.ed(id); $('#'+(id?id:'Allopt')).addClass('pulse').after(itv('plus1" title="+1','plus_one'));
		if(id){setTimeout(function(){Load.ed(id);$('#'+(id?id:'Allopt')).removeClass('pulse')}, tim||2000)}
		},
	err:function(t,id, tim){Load.ed(id); $('#'+(id?id:'Allopt')).after(itv('" title="'+t,'report_problem'));
		if(id){setTimeout(function(){Load.ed(id)}, tim||2000)}
		},
	ing:function(id, tim){Load.ed(id); $('#'+(id?id:'Allopt')).after(itv('" title="loading...','autorenew'));
		setTimeout(function(){Load.ed(id)}, tim||2000);
		},
	ingProg:function(id, tim){Load.ed(id); $('#'+(id?id:'Allopt')).after(itv('" title="loading...','autorenew'));
		},
	ingsucc:function(id, tim){
			Load.ing(id, tim);
			setTimeout(function(){
				Load.succ(id, tim);
			}, tim);
		},
	ed:function(id){
			$('#'+(id?id:'Allopt')).nextAll('img, progress,i').not('#zrDialogOff').fadeOut().remove();
			if(id=='RssAdd'){$('#rssAdd > #noRss').slideUp()}
		},

}, Tag={
	list:function(){
		var t=L.Tag, tArr=[], ft=L.FT, tagArr=ft.split(','), opt;

		if(t){
			tArr=t.split(',');
			for(var i in tArr){
				tArr[i]=DC+'"Tag'+(ft && tagArr.indexOf(tArr[i])>-1?' zRnav':'')+'"'+optStr('label')+'label data-n="'+tArr[i]+'">'+tArr[i]+sc+dc;
			}
		}

		$('#zRTag').html(tArr.join('')||br);

		$('#zRTag').sortable({
			items:'.Tag',
			placeholder:'placeholder',
			scroll:true
		});

	},

	act:function(type,str,str2){
		var t=L.Tag, tArr=[], sArr=FtA(str);

		if(t){tArr=t.split(',')}

		for(var j in sArr){
			var s=sArr[j].trim(), i=tArr.indexOf(s), enA=[];
			if(i<0){
				if(type=='add'){
					tArr.push(s);
				}
			}else{
				if(type=='del'){
					tArr.splice(i,1);
				}
				if(type=='ren'){
					tArr[i]=str2;
				}

				var ftA=L.FT.split(','), i=ftA.indexOf(s);
				if(i>-1){
					if(type=='del'){
						ftA.splice(i,1);
					}
					if(type=='ren'){
						ftA[i]=str2;
					}

					L.FT=ftA.join(',');

					$('.sel > details > .entryAction > .tag').each(function(){
						var tA=FtA($(this).text()), i=tA.indexOf(s);
						if(i>-1){
							if(type=='del'){
								tA.splice(i,1);
							}
							if(type=='ren'){
								tA[i]=str2;
							}
							var tag=tA.join(','), iU=$(this).parent().prev().children('.articleHead').find('.navWeb').attr('data-u');
							$(this).text(tag);
							zEn.get(iU, function(obj){
								obj.t=tag;
								zEn.put(obj);
							});
						}
					});
				}

			}
		}
		L.Tag=tArr.join(',');
		Tag.list();
		if(CLOUD){SLK.save()}
	},

	save:function(){
		var tArr=[];
		$('#Tags .label').each(function(){
			tArr.push($(this).attr('data-n'));
		});
		L.Tag=tArr.join(',');
		if(CLOUD){SLK.save()}
	}


}, Folder={
	getNew:function(name){
		var foA=[], fo=name || gM('newFolder'), fA=jSon(L.Folder);
		for(var i in fA){
			var t=fA[i].n;
			if(t.indexOf(fo)>-1){foA.push(t)}
		}

		if(foA.indexOf(fo)>-1){
			for(var i=1;i<10000;i++){
				if(foA.indexOf(fo+'_'+i)<0){
					fo += '_'+i;
					break;
				}
			}
		}
		return fo;
	},
	list:function(nolist, cb){
		$('#zROpts #Pager > #page').val(1);
		var FO=L.FO, FE=L.FE, fA=jSon(L.Folder||'[]'), feA=[], t='';

		zFe.getAll(function(FeA){
			for(var i=fA.length-1; i>-1; i--){
				var n=fA[i].n, fes=fA[i].f.split(' '), str='';

				for(var j in fes){
					var fi=fes[j], fe, h, r, s;
					if(!fi){break}
					if(fi.indexOf(Hs)!=0){fi=H+fi}

					feA.push(fi);

					for(var ii in FeA){
						fe=FeA[ii];
						if(fi==fe.u){

							h=fe.h || H+H_W(fi);
							if(h && !/^https*:/.test(h)){h=H+h}

							r=fe.r||'';
							s=fe.s||'';

							var js='mjlpagce', a, sA=[];
							for(var k=0;k<8;k++){
								a=js.substr(k,1);
								j[a]=$(this).attr('data-'+a)||'';
								sA.push('" data-'+a+'="'+(fe[a]||''));
							}

							str += '<div'+optStr('feed', h, r)+
								'"mi-span feed'+(FE==fi?' zRnav':'')+
								'" data-u="'+fi+
								'" data-h="'+h+
								'" data-d="'+fe.d+
								'" data-n="'+fe.n+
								'" data-r="'+r+
								'" data-s="'+s+
								(s?'':sA.join(''))+
								'">'+fe.n+sc+dc;
							break;
						}
					}

				}

				t = '<details'+(FO==n || FE && (fes.indexOf(H_w(FE))>-1||fes.indexOf(FE)>-1)?' open':'')+'><summary'+
					optStr('fo')+'"fo'+(FO==n?' zRnav':'')+'" data-n="'+n+'">'+n+sc+'</summary>'+str+'</details>'+t;//(FE?'sel':'zRnav')
			}
			$('#zRFolder').html(t);

			Folder.nav(nolist);

			$('#zRFolder details').sortable({
				items:'div',
				connectWith:'#zRFolder details',
				placeholder:'placeholder',
				scroll:true
			});


			Entry.cntUnreadAll();
			if(cb){cb()}
		});
	},


	nav:function(nolist){//nolist=true 只切换标签，不刷新文章列表
		var FO=L.FO;

		if(nolist){
			if(FO==' '){$('#FAVs').click()}
			if(!L.FT && !FO){$('#ALLs').click()}
			
		}else{
			//Entry.list();
			if(FO==' '){$('#EntryFav').click()}
			if(!L.FT && !FO){$('#EntryAll').click()}

		}
	},

	MkrdBat:function(fU){
		Load.ing();
		var tp=typeof(fU),isNum=tp=='number',isStr=tp=='string',isArr=tp=='object',EnA=[];
		var getEn=function(j){
			var Oi=(isNum?'r':'s'), Ok=(isNum?0:(isStr?fU:fU[j]));
			var Opts={index:Oi,keyRange:zEn.makeKeyRange({lower:Ok, upper:Ok})};
			zEn.query(function(enA){
				for(var i=enA.length-1; i>-1; i--){
					if(enA[i].r==0){
						EnA.push(enA[i].u);
					}
				}
				if(j==0){
					Entry.act('r',1,EnA,function(){
						Load.ed;
						Entry.list();
					});
				}else{
					getEn(j-1);
				}
			},Opts);
		};
		getEn(isArr?fU.length-1:0);
	},

	eraseFeed:function(fU){
		Load.ing();
		var Opts={index:'s',keyRange:zEn.makeKeyRange({lower:fU, upper:fU})};
		zEn.query(function(enA){
			var EnA=[];
			for(var i=enA.length-1; i>-1; i--){
				EnA.push({type:'remove', key:enA[i].u});
			}

			zEn.batch(EnA, function(){
				zFe.remove(fU, function(){
					Load.ed();
				});
			}, function(){
				zFe.remove(fU, function(){
					Load.ed();
				});
			});

		},Opts);
	},

	addFeedOpml:function(os, cbb){
		if(CLOUD){L.Folder= L.Folder|| '[]'}
		var fA=jSon(L.Folder), foA=[], feA='', FeA=[];
		for(var i in fA){
			foA.push(fA[i].n);
			feA += ' '+fA[i].f;
		}
		feA=feA.trim().split(' ');
		var o=os.parents('opml'),t=o.find('pressfav').text();
		if(t){
			L.pressfav=t;
			clk($('#pressSechGO')[0],1);
		}
		t=o.find('bookfav').text();
		if(t){
			L.bookfav=t;
			clk($('#bookSechGO')[0],1);
		}
		t=o.find('searchneg').text();
		if(t){
			L.searchNeg=t
		}
		t=o.find('searchpos').text();
		if(t){
			L.searchPos=t
		}
		os.find('[xmlUrl]').each(function(){//[xmlUrl][htmlUrl]

			var me=$(this), fo=me.parent('outline').attr('text') || Folder.getNew(), i=foA.indexOf(fo), f='';
			var Fe=me.attr('xmlUrl'), fe=H_w1(Fe);
			if(feA.indexOf(fe)<0){
				feA.push(fe);
				f += ' '+fe;
				var j={u:Fe, n:me.attr('text')||me.attr('title')||H_w(me.attr('htmlUrl'))||fe, h:H_h(Fe,me.attr('htmlUrl')), d:me.attr('title')||''};
				$('#FeedEdit [data-feed]').not('#feedBasic td').each(function(){
					var a=$(this).attr('data-feed');
					j[a]=me.attr(this.id)||'';	//toLowerCase()
				});

				FeA.push({type:'put',value:j});
			}

			f=f.trim();
			if(f){
				if(i<0){
					fA.push({n:fo,f:f});
					foA.push(fo);
				}else{
					fA[i].f =(fA[i].f+' '+f).trim();
				}
			}
		});
		if(FeA.length){
			Load.ingProg('RssAdd')
			var cb=function(){
				L.Folder=JSON.stringify(fA);
				if(CLOUD){
					SLK.save(function(){
						Folder.list(false, cbb);
						Entry.update();
					});
				}else{
					Folder.list();
					setTimeout(Entry.update,200);
					Load.succ('RssAdd');
				}
			};
			zFe.batch(FeA, cb, cb);
		}
		//Load.succ('RssAdd');
	},

	outFeed:function(fU){
		/*
		Feed
			a	entry author
			c	comment url
			d	Feed description
			e	comment RSS url
			g	entry catalog
			h	Feed homepage URL
			j	entry title
			l	entry summary
			m	entry link（regexp）
			n	Feed name
			p	entry pubDate
			r	entry full content（regexp）
			s	JS
			t	comment full content（regexp）
			u	Feed url
			
			
			
		Entry
			a	entry author
			c	comment url
			d	deleted
			e	comment RSS url
			f	fav
			g	entry catalog
			h	entry title
			j	
			l	entry summary
			m	
			n	
			p	entry pubDate(time Stamp/1000)
			r	read
			s	src（Feed Url）
			t	comment full content（regexp）
			u	entry url
		*/
		zFe.get(fU, function(fe){
			var outs=[Head.xml, Head.rss,
				'<channel>',
				XML.wrapE('title',XML.wrap(fe.n)),
				'<atom:link href="'+fU+'" rel="self" type="application/rss+xml" />',
				XML.wrapE('link', H+H_W(fe.h?fe.h:fU)),
				XML.wrapE('description', XML.wrap(XML.decode(fe.d))),
				XML.wrapE('generator', XML.wrap(gM('zname'))),
				zzllrr,
				XML.wrapE('lastBuildDate', new Date())+'\n'].join('\n');

			var Opts={index:'p',keyRange:zEn.makeKeyRange({lower:0})}, d=new Date();

			zEn.query(function(enA){
				for(var i=enA.length-1; i>-1; i--){
					var j=enA[i];
					if(j.s==fU){
						d.setTime(j.p*1000);
						outs += ['\t<item>',
							XML.wrapE('title', XML.wrap(j.h)),
							XML.wrapE('link', XML.wrap(j.u)),
							XML.wrapE('author', XML.wrap(j.a||'')),
							XML.wrapE('category', XML.wrap(j.g || j.t||'')),
							XML.wrapE('pubDate', d),
							XML.wrapE('content:encoded', XML.wrap(j.l)),
							XML.wrapE('comments', XML.wrap(j.c||'')),
							XML.wrapE('wfw:commentRss', XML.wrap(j.e||''))+
							'\n\t</item>\n'].join('\n\t\t');
					}
					if(i==0){
						outs += '</channel>\n</rss>';
						saveText(outs, fe.n+'_'+Time.now()+'.xml');
					}
				}

			},Opts);
		});
	},

	outFeedOpml:function(foi, cb){

		var nm, outs=['</body>','</opml>'].join('\n');
		var fA=jSon(L.Folder), feA=[], fi, tmpArr=['<outline title="','" text="','">\n', '" type="rss" xmlUrl="', '" htmlUrl="', '" />\n'];
		if(foi>-1){fA=fA.slice(foi,foi+1)}

		zFe.getAll(function(FeA){
			for(var i=fA.length-1; i>-1; i--){
				var n=XML.encode(fA[i].n), fes=fA[i].f.split(' '), str=tmpArr.slice(0,3).join(n);
				nm=n;
				if(fes[0]){
					for(var j=0; j<fes.length; j++){
						if(fes[j].indexOf(Hs)!=0){fi=H+fes[j]}

						for(var ii in FeA){
							var fe=FeA[ii], t='';
							if(fe.u==fi){
								$('#FeedEdit [data-feed]').not('#feedBasic td').each(function(){
									var a=$(this).attr('data-feed');
									t += '" '+this.id+'="'+XML.encode(fe[a], true);
								});

								str +='\t\t'+tmpArr[0]+fe.d+ // str +='\t\t'+tmpArr[0]+XML.encode(fe.d, true)+
									tmpArr[1]+XML.encode(fe.n, true)+
									tmpArr[3]+XML.encode(fi, true)+
									tmpArr[4]+XML.encode(H+H_W(fe.h?fe.h:fi), true)+t+
									tmpArr[5];
								break;
							}
						}
					}
				}
				str +='</outline>\n';
				outs = str+outs;
			}
			outs=[Head.xml,
				'<opml version="1.0">',
				'<head>',
				XML.wrapE('title', gM('zname')+Time.local()),
				zzllrr,
				XML.wrapE('searchneg', L.searchneg),
				XML.wrapE('searchpos', L.searchpos),
				XML.wrapE('pressfav', L.pressfav),
				XML.wrapE('bookfav', L.bookfav),
				'</head>','<body>',''].join('\n')+outs;
			if(cb){cb(outs); return}
			saveText(outs,(foi>-1?nm:gM('zname'))+'_'+Time.now()+'.opml');
		});
	},

	save:function(){
		var fA=[];
		$('#zRFolder details').each(function(){
			var s={}, f='';
			s.n = $(this).find('summary .fo').attr('data-n');
			$(this).find('.feed').each(function(){
				var u=$(this).attr('data-u');
				f += ' '+H_w1(u);
			});
			s.f=f.trim();
			fA.push(s);
		});
		L.Folder=JSON.stringify(fA);
		if(CLOUD){
			SLK.save(function(){
				SF.save();
			});
		}

		return Folder;
	}

}, Entry={

	searchKey:function(t){
		var k='search'+t, v=(L[k]||'').trim();
		$('#'+k).attr('title',gM(k)+'\n'+v).toggleClass('on', !!v);
	},


	selThen:function(){
		var All=$('#zRentries > div'), Sel=$('#zRbar #Sel'), sel=All.filter('.sel'), n=sel.length, N=All.length;
		$('#SelAll > #selAll').prop('checked', All.length==n);

		Sel.children('#tags').hide();

		if(N){
			Sel.children('#unmarkread').prevAll().show();

			if(n){
				var ac=sel.find('.entryAction'), favs=ac.children('.fav').length;
				Sel.children('#del, #Out,#tag').show();

				Sel.children('#untag').toggle(ac.children('.tag').not(':empty').length>0);

				Sel.children('#fav').toggle(ac.children('.fav').length>0);
				Sel.children('#unfav').toggle(ac.children('.unfav').length>0);
				Sel.children('#unmarkread').toggle(sel.has('.entryTitle.bold').length<n);
				Sel.children('#markread').toggle(sel.has('.entryTitle.bold').length>0);
				Sel.show();

			}else{
				Sel.children('#selToggle').nextAll().add(Sel).hide();
			}
			$('#btnRight,#zROpt').fadeIn();
		}else{
			Sel.add('#btnRight,#zROpt').hide();
		}

		Entry.unread();
	},


	scrol:function(prev, cb){
		var h=0, sel=$('#zRentries > .seled');
		if(prev){sel=sel.prev()}
		sel.prevAll().add('#zROpt').each(function(){
			h += $(this).outerHeight();
		});
		$('#zRList').animate({scrollTop: h+'px'}, 'normal', cb);
	},

	scrolT:function(){
		var sel=$('#zRentries > .seled');

		if(sel.children('details[open]').length){
			Entry.scrol();
		}else{
			$('#zRList').animate({scrollTop: '0px'}, 'normal');
		}
		$('body')[0].tabIndex=0;
		$('body').focus();
	},

	scrolB:function(){
		var h=0, sel=$('#zRentries > .seled');

		if(sel.children('details[open]').length){
			sel.prevAll().each(function(){
				h += $(this).outerHeight();
			});

			h+=sel.outerHeight()-(sel.find('.articleCmt').outerHeight()||0)-sel.find('.entryAction').outerHeight()-20;
			$('#zRList').animate({scrollTop: h+'px'}, 'slow');
		}else{
			$('#zRList').animate({scrollTop: $('#zRentries').height()+'px'}, 'normal');
		}
		$('body')[0].tabIndex=0;
		$('body').focus();
	},

	unread:function(){
		var cnt=$('.entryHead .entryTitle.bold').length;
		$('#unreadCnt').html(gM('unreadCnt')+': '+XML.wrapE('b', cnt||'0'));
		return Entry;
	},

	cntUnread:function(){
		Entry.unread();

		var cnt=0, u=$('#Allopt .unhideread').length;
		$('#zRFolder summary').each(function(){
			var n=0;
			$(this).nextAll().each(function(){
				var feed=$(this).children('.feed'), fe=CntN(feed.attr('data-cnt'));
				$(this).toggle(fe>0 || u<1);
				n += fe;
			});
			cnt += n;
			$(this).parent().toggle(n>0 || u<1);
			$(this).find('.fo').attr('data-cnt',Cnt(n));
		});
		

		$('#zROpts #Allcnt').text('/ '+cnt);

		var nav=$('#zRLeft .zRnav'), t=cnt+'_'+gM('zname');
		if(nav.length){
			t+='_'+nav.not('.Tag').text()+(nav.find('[data-cnt]').attr('data-cnt')||'');
		}
		titleRe(t);
		Load.ed();
	},

	act:function(k, v, iUA, cb){
		if(k=='t' && v){Tag.act('add',v)}

		var cnt=0, feA=[];
		for(var i=iUA.length-1; i>-1; i--){
//console.log(iU3A[i]);
			zEn.get(iUA[i], function(obj){

				if(obj){
	//console.log(obj);
					var j=obj, fU=j.s;
					if(k=='t'){
						var t=FtA(v).join(',');
						if(t && j.t){t = FtA(j.t+','+v).join(',')}
						j.t=t;
					}else{
						j[k]=v;
						if(k=='d'){j.a='';j.c='',j.e='';j.f='';j.g='',j.h='';j.l='';j.p='',j.r=''}
					}
					if(feA.indexOf(fU)<0){feA.push(fU)}

					zEn.put(j, function(){
						if(/[dr]/.test(k)){
							cnt++;
							if(cnt==iUA.length){
								for(var k in feA){
									Entry.cntUnreadFeed(feA[k]);
								}
								if(cb){cb()}
							}
						}
					});
				}
			});
		}
	},


	list:function(){

		$('#zRbar #Sel,#zROpt').hide();

		$('#zRList').removeAttr('style');
		$('#zRentries').html('<meter value=10 max=400></meter>');
		var fr=$('#entryType').val(), fo=L.FO, fe=L.FE, ft=L.FT, dt=$('#entryDate').val(), fav=fo==' ',zRm=$('#zRentries > meter');

		var kwd=$('#zRbar #sechEntry').attr('data-s')||'', page=Number($('#zROpts #Pager > #page').val());

		$('#sechEntry[data-s]').toggleClass('on',!!kwd);

		var imgO=$('#imgOpts').val(), imgPreAll=imgO=='imgPreAll', imgOff=imgO=='imgOff', imgPreOne=imgO=='imgPreOne', imgPreOn=imgPreAll || imgPreOne, sumlen=imgPreOne?300:150;

		var strA=[], imgsA=[], strAL, cnt=0, zm=L.zoomin, padd=L.padd.split('x'), cols=L.cols, lineh=L.lineh, aln=L.align, strNum='<input type=number min=';

		var kwdArr=FtA(kwd), RgArr=[], isRg=false;
		if(/^[/].*[/]$/.test(kwd)){
			isRg=true;
			kwd=kwd.substr(1, kwd.length-2);
			kwdArr=[kwd];
			try{
				RgArr.push(new RegExp(kwd,'gi'));
			}catch(e){

			}
		}
zRm.val(40);
		zFe.getAll(function(FeA){

zRm.val(80);
			if(FeA.length<1){$('#zRList').removeAttr('style');$('#zRentries').empty(); return}

			var today=Date.parse((new Date()).toDateString())/1000;
			var Opts={index:'p'}, KR={lower:0};
			if(dt){
				if(dt=='today'){KR.lower=today}
				if(dt=='yesterday'){KR.lower=today-3600*24; KR.upper=today; KR.excludeUpper=true}
				if(/last/.test(dt)){KR.lower=today-3600*24*(Number(dt.substr(4))-1)}
			}
			if(!fe){
				var fes=[], fs=$('#zRFolder .feed');
				if($('#zRFolder .fo.zRnav').length){fs=$('#zRFolder .fo.zRnav').parent().nextAll().find('.feed')}

				fs.each(function(){
					fes.push($(this).attr('data-u'));
				});

				if(!fes.length){
					
					$('#zRList').removeAttr('style');$('#zRentries').empty(); return
				}
			}
//console.log(fes.length);
			Opts.keyRange=zEn.makeKeyRange(KR);



var sid=setInterval(function(){
	zRm.val(zRm.val()+1);
},50);


setTimeout(function(){
	clearInterval(sid);
},200*50);


			zEn.query(function(enA){
				var hid=CLOUD?' hidden':'';

				for(var i=enA.length-1; i>-1; i--){

					strAL=strA.length;
if(strAL>=100){break}

					var j=enA[i];
					if(j.d===1 || fr && j.r!=Number(fr) || fav && !j.f){continue}
					if(ft && !j.t || !fe && fes.indexOf(j.s)<0 || fe && j.s!=fe ){continue}
					if(ft){
						var tArr=j.t.split(','), tagArr=ft.split(','), tag=1;
						for(var k in tagArr){
							if(tArr.indexOf(tagArr[k])<0){tag=0; break}
						}
						if(!tag){continue}
					}

					var bd=$(XML.wrapE('div', j.l));
					bd.find('script, style, meta').remove();
					var t=bd.text().trim(), tL=t.toLowerCase(), tt;
					var h=j.h.trim(), hL=h.toLowerCase(), ti;
//saveText(bd.html(),'11.txt');


					if(kwd){
						var fail=false;
						for(var ki in kwdArr){
							var kwdi=kwdArr[ki], neg=false, tki;

							if(isRg){
								RgArr[0].lastIndex=0;
								if(RgArr[0].test(hL) || RgArr[0].test(tL)){break}
							}

							if(/^-.+/.test(kwdi)){neg=true; kwdi=kwdi.substr(1)}
							tki=tL.indexOf(kwdi);

							if(neg && (tki>=0 || hL.indexOf(kwdi)>=0) ||
							  !neg && tki<0 && hL.indexOf(kwdi)<0 ){fail=true; break}


							if(!neg){
								if(tki>-1){ti=Math.min(ti || tki, tki)}
								var Rg=new RegExp(kwdi.replace(/[\^\$\.\+\*\?\{\}\(\)\[\]\/]/g, function(t){return '\\'+t}),'gi');
								RgArr.push(Rg);
							}
						}

						if(fail){continue}
					}else{
						ti=0;
					}

					cnt++;

				//	if(strAL>=20*(page-1)){

						if(kwd && RgArr.length>0){
							var mrk=XML.wrapE('mark', '$&');
							if(ti>-1){t=t.substr(Math.max(ti-10,0))}
							t=t.substr(0,sumlen);
							tt=XML.encode(t, true);

							for(var ki in RgArr){
								if(ti>-1){t=t.replace(RgArr[ki],mrk)}
								h=h.replace(RgArr[ki],mrk);
							}
							t=XML.encode(t, true).replace(/&lt;[/]?mark&gt;/g, function(t){return XML.decode(t)});
							h=XML.encode(h, true).replace(/&lt;[/]?mark&gt;/g, function(t){return XML.decode(t)});
						}else{
							t=XML.encode(t.substr(0,sumlen), true);
							tt=t;
							h=XML.encode(h, true);
						}
						var tm=new Date(), tm2, unfav=(j.f?'un':'')+'fav';
						tm.setTime(j.p*1000);
						tm2=Time.lite(tm);
						tm=Time.local(tm);

						var imgA=[], srcA=[];

						if(imgPreOn){
							bd.find(zlr2('img :image','[data-src]',',')).each(function(){
								var s=$(this).attr('data-src'), pTitle=$(this).attr('title')||$(this).attr('alt')||$(this).closest('[title]').attr('title')||'';
								if(blked(s)){
									$(this).remove();
									return true;
								}
								var img0='<img title="'+pTitle+'" data-src="'+s+'" height=150 class=opaq hidden />';	//hidden
								if(srcA.indexOf(s)<0){imgA.push(img0); srcA.push(s)}
							});
							//imgsA=imgsA.concat(srcA);
						}

						var fh=j.s, fd='', fn='', fU=j.s, iU=j.u;
						for(var ii in FeA){
							var feed=FeA[ii];
							if(fU == feed.u){
								fh=H+(feed.h || H_W(fU));
								fd=feed.d;
								fn=feed.n;
								break;
							}
						}

						var su=j.su, sh, st, sd, aSrc2='articleSource', fail=true;

						if(su){
							sh=j.sh?j.sh:H+H_W(su);
							st=j.st?j.st:sh;
							sd=su;
							for(var ii in FeA){
								var feed=FeA[ii];
								if(su == feed.u){
									sd=XML.decode(feed.d);
									st=feed.n;
									fail=!fail;
									break;
								}
							}
							if(fail){aSrc2 += ' articleSource2'}

						}else{
							sh=fh;
							st=fn;
						}

						var shares='';
						for(var k in FNS){
							shares += imgSRC+FNS[k].split(' ')[1]+'" title="'+gM(k)+'" data-share='+k+' />';
						}
						shares += '<input type=url value="'+iU+'" title="'+gM('ruleUrl')+'" />';
						if(imgPreOn && imgA.length<1){imgA.unshift(imgSRC+'ZRL.png" class=nopic height=0 title="'+tt+'" />')}


//console.log(iU);
//console.log(t);

				strA.push([DCtv('sele Entry'+cnt+' '+L.fontPd,
					DCtv('entryHead',
						SCtv('entrySource" '+(L.FE?'hidden ':'')+'data-u="'+fU+'" title="'+(fd||''),fn)+
						itv(unfav+'" title="'+gM(unfav)+hkn+'S','favorite'+(unfav=='unfav'?'':'_border'))+
						SCtv('entryTitle'+(j.r?'':' bold'),h)+
						itv('del" hidden title="'+gM('del')+hkn+'D','clear'))+
					DCtv('entryImgs'+(imgPreOne?' imgPreOne':''),imgA.join(''))+

					'<details><summary title="'+gM('toggleTip')+'">'+
							SCtv('date" title="'+tm,tm2)+
							SCtv('summary',t||gM('toggleTip'))+'</summary>'+
						'<article style="zoom:'+zm+';line-height:'+lineh+'">'+
							DCtv('articleHead',
								DCtv('head',
									itv('navWeb4" title="'+gM('qrTip')+hkn+'Z','phone_iphone')+
									SCtv('navWeb1 toggle '+L.color+'" data-u="'+iU, j.h)+
									itv('navWeb3" title="'+gM('ruleFullArticle')+hkn+'X" data-u="'+iU,'reorder')+
									itv('navWeb2" title="'+gM('navWeb2')+hkn+'C" data-u="'+iU,'picture_in_picture')+
									itv('navWeb" title="'+iU+hkn+'V" data-u="'+iU,'launch'))+
									
								DCtv('meta',SCtv('from',gM('from'))+
									SCtv('articleSource" data-u="'+fU+'" title="'+(fd||fU),fn)+
									(su?SCtv(aSrc2+'" data-u="'+su+'" title="'+(sd||su),st):'')+
									(j.a?SCtv('by',gM('by'))+SCtv('author',/&lt;a /.test(j.a)?XML.decode(j.a):j.a):'')+
									DCtv('time',tm)+
									(j.g?SCtv('cata',(j.g||'').replace(/\s*,\s*/g,', ')):''))+
								DCtv('view',
									SCtv('align',itv('left'+(aln=='left'?' toggle':''),'format_align_left')+
										itv('center'+(aln=='center'?' toggle':''),'format_align_center')+
										itv('right'+(aln=='right'?' toggle':''),'format_align_right'))+
									SCtv('Cols" title="'+gM('cols'), itv('col','border_vertical')+
										'<label hidden>'+SCtv('desc',gM('cols'))+strNum+
											'1 step=1 max=10 class=cols value='+cols+' /></label>')+
									SCtv('Zoomin" title="'+gM('zoomin'), itv('ZoomIn','zoom_in')+
										'<label hidden>'+SCtv('desc',gM('zoomin'))+strNum+
											'.8 step=.1 max=10 class=zoomin value='+zm+' /></label>')+
									SCtv('Lineh" title="'+gM('lineh'), itv('LineH','format_line_spacing')+
										'<label hidden>'+SCtv('desc',gM('lineh'))+strNum+
											'1.2 step=.1 max=10 class=lineh value='+lineh+' /></label>')+
									SCtv('PAdd" title="'+gM('padd'), itv('Padd','select_all')+
										'<label hidden>'+SCtv('desc',gM('padd'))+
											'<input type=number step=10 max=100 class=padd value='+padd[0]+
											' /><input type=number step=10 max=100 class=padd value='+padd[1]+' /></label>')+
									itv('nocss" title="CSS Off','format_color_reset')+
									itv('noimg" title="'+gM('imgoff'),'collections')+
									itv('negimg" title="'+gM('imgNeg'),'block')+
									itv('ubb" title="UBB Off','settings_ethernet')+
									itv('big2zh" title="Simple Chinese','translate')+
									itv('zMath" title="'+gM('formulaStyle'),'functions')+
									itv('zAudio" title="'+gM('audio'), 'hearing')
								))+
							DCtv('articleBody col'+cols+'" style="padding:'+padd.concat(padd,'').join('px ').trim())+
								'</article>'+
						DCtv('entryAction',
							
							SCtv(unfav+' mi" title="'+gM(unfav)+hkn+'S', 'favorite'+(unfav=='unfav'?'':'_border'))+
							SCtv('zAudio mi" title="'+gM('Audio'), 'volume_up')+

							SCtv('markread mi" title="'+gM('markread')+hkn+'M', j.r?'done':'check_box_outline_blank')+
							SCtv('edit mi" title="'+gM('edit')+hkn+'Alt + 1', 'edit')+
							SCtv('tag mi" title="'+gM('tag')+hkn+'T', 'bookmark')+
							'<i class=tags>'+(j.t?Arrf(function(x){return XML.wrapE('b',x)},j.t.split(',')).join(''):'')+'</i>'+


							SCtv('txtdownload mi"'+hid+' title="'+gM('outEntry'),'system_update_alt')+
							SCtv('txtdls" hidden="',
								'<input type=button value=TXT /><input type=button value=HTML />')+
							SCtv('imgdownload mi"'+hid+' title="'+gM('imgdl')+hkn+'B','file_download')+
							SCtv('imgdls" hidden="',
								'<input type=number min=0 step=50 class="w" value='+L.w+' title="'+gM('minW')+
								'"><span> × </span>'+
								'<input type=number min=0 step=50 class="h" value='+L.h+' title="'+gM('minH')+
								'">'+SCtv('imgdl mi-span" title="'+gM('imgdl'), gM('imgdl'))+
								'')+//	SCtv('entrydl mi-span" title="'+gM('outEntry'), gM('outEntry')))+


						//	SCtv('print mi" title="'+hk+'Ctrl+P', 'print')+

							SCtv('del mi" title="'+gM('del')+hkn+'D(elete)', 'clear')+

							SCtv('qr mi" title="'+gM('qrTip')+hkn+'Z', 'phone_iphone')+

							SCtv('email mi" title="'+gM('email')+hkn+'E', 'mail')+
								
							SCtv('share mi" title="'+gM('share')+hkn+'Shift + S', 'share')+

							SCtv('shares" hidden="',shares)
						)+'</details>'), j.h]);
	/*					
					}else{
						strA.push(['','','']);
					}
*/
				}

				var sA=strA.slice(0,10), sort=L.sort, sortType=L.sortType;
				if(sA.length<1){$('#zRList').removeAttr('style');$('#zRentries').empty();return}
				if(sort!='sort'){
					if(sort=='rulePubDate'){
						if(sortType=='up'){sA.reverse()}
					}else{
						sA.sort(function(a,b){
							return sortType=='up'?sortBy.chr(a[1],b[1]):sortBy.chr(b[1],a[1])
						});
					}
				}
				

				$('#zRentries').html(Arri(sA,0).join(''));
				$('#zRentryText').val(Arri(strA,0).join(zTsplit));


				if(imgPreOn){
					$('.entryImgs .opaq').each(function(i){

						this.onerror = function(){
							var me=$(this);
							me.removeClass('ing').addClass('ed');
							me.add(zlr3('.sele ','img :image','[data-src*="'+this.src+'"]',',')).remove();
							lazyLoadImg();
						};
						this.onload = function(){

							var me=$(this);

							me.removeClass('ing').addClass('ed');
							var w=this.naturalWidth, h=this.naturalHeight, s=this.src;
							me.attr({'data-width':w, 'data-height':h});
							var imgO=$('#imgOpts').val(), imgPreAll=imgO=='imgPreAll', imgPreOne=imgO=='imgPreOne';
							if($('.entryImgs img').not(me).filter('[src="'+s+'"]').length || h<50){
								me.remove();
							}else{

								var h0=(imgPreOne || h<150)?h:150;
								me.siblings('[data-height]').filter(function(){return Number($(this).attr('data-height'))<h0}).remove();

								if(h<150 && me.siblings().length || imgPreOne && me.siblings('[data-height]').length){
									me.remove();
								}
							}

							lazyLoadImg();
						}
					});

					if(CLOUD){
						var img0=$('.entryImgs .opaq').not('.ing, .ed, [src]').slice(0,1).addClass('ing'), cb=function(u1, u0){
							img0.attr('src', u1);
						};
						loadImage(img0.attr('data-src'), cb);

					}else{
						$('.entryImgs .opaq').not('.ing, .ed, [src]').slice(0,8).addClass('ing').attr('src', function(){
							return $(this).attr('data-src');
						});
					}

				}
				toggleMath();
				toggleCode();
				toggleColor(/url/.test($('body').css('background-image')));
				

				$('.FulscrToggle').attr('data-allcnt',cnt+(sA.length<10?'':'+'));

				$('#SelAll > #selAll').prop('checked',false);
				Entry.selThen();

			}, Opts);
		});
		$('#zRList').width(98-19*$('#zRLeft,#zRRight').filter(':visible').length+'%');
		return Entry;
	},

	cntUnreadAll:function(){
		var Opts={index:'r',keyRange:zEn.makeKeyRange({lower:0, upper:0})};

		zEn.query(function(enA){
			var feJ={};
			for(var i in enA){
				var eN=enA[i], fe=eN.s;
				if(eN.d===0){
					feJ[fe]=(feJ[fe]||0)+1;
				}
			}
			for(var i in feJ){
				$('#zRFolder .feed[data-u="'+i+'"]').attr('data-cnt',Cnt(feJ[i]));
			}
			Entry.cntUnread();
		},Opts);
	},

	cntUnreadFeed:function(fU){
		var Opts={index:'s',keyRange:zEn.makeKeyRange({lower:fU, upper:fU})};
		zEn.query(function(enA){
			var cnt=0;
			for(var i in enA){
				var eN=enA[i];
				if(eN.r+eN.d===0){cnt++}
			}
			$('#zRFolder .feed[data-u="'+fU+'"]').attr('data-cnt',Cnt(cnt));
			Entry.cntUnread();
		},Opts);
	},
	
	bdfromData:function(data,u){
		
		var sep='<body', tArr=data.replace(/<body><\/body>/ig,'').split(sep), html='';

		if(tArr.length<2){
			sep=sep.toUpperCase();
			tArr=data.split(sep);
		}
		var sep2=sep.replace('<','</')+'>';
		if(tArr.length>2){
			
			tArr=data.replace(/<\/body>\s*<body>/ig,'').split(sep);
			
			
		}
		if(tArr.length>1){
			if(tArr[1].indexOf(sep2)<0){
				tArr[1]+=sep2;
			}
			html=sep+tArr[1].substr(0, tArr[1].lastIndexOf(sep2)+7);

			html=Entry.bd(blking(html,0,1), u);
			html.find('footer').nextAll().remove();
			html=html.html();
		}else{
			html=data;
		
		}
		return '<div>'+html+dc
	},

	bd:function(html, u){
		var bd=$(XML.wrapE('div', (html||'')));
		bd.find('.adsbygoogle, .ads').remove();
		
		bd.find(zlr2('img :image','[src]',',')).each(function(){
			var s=H_a($(this).attr('file')||$(this).attr('data-original')||this.src, u);
//console.log(this.src, u, s);
			$(this).removeAttr('src data-src onerror');
			if(!blked(s)){
				$(this).attr('data-src', s);
			}
		});

		
		bd.find('form').attr('method','');
		bd.find(':button, :submit').attr('disabled','disabled');
		var ZBD='#ZBD'+Time.now5()+' ';
		bd.attr('id', 'ZBD').find('style').html(function(i, v){
			return ZBD+v.trim().replace(/[\},(\*\/)][\n\s]+/g, '$&'+ZBD).trim();
		});
		
		bd.find((CLOUD?'webview':'iframe')+'[src]').each(function(){
			var s=H_a(this.src);
			//console.log('iframe:', s);
			$(this).attr('data-src', s).removeAttr('src');
		});

		bd.find(zlr3('[on','click load',']',',')).removeAttr(zlr('on','click load'));
	//	bd.find('a[href*="javascript:"]').removeAttr('href');
	//	bd.find('a[href^="#"]').removeAttr('href');
	
		bd.find('a').not('[href]').filter(function(){return /https?:/.test($(this).text())}).attr('target','_blank').attr('href', function(){return 'http'+$(this).text().split(/http/)[1].split(' ')[0]});
		bd.find(zlr3('a[href*=','"javascript:" "#"',']',',')).removeAttr('href');
		bd.find('a[href]').attr('target','_blank').filter('[href^=http]').attr('href', function(i,v){return H_u(v)});
		bd.find('a[href]').not(zlr3('[href^=','http "mailto:"',']',',')).attr('href', function(i,v){return H_a(H_u(v),u)});

		bd.find('a').filter(zlr3('[href*="','?feed=rss2 .opml .xml .rdf .feedsky.com .feedburner.com atom. syndicate =rss =feed =atom =xml subscri /sub podcast feed rss. rss','"]',',')).each(function(){
			var url=H_a(this.href,u),fu=H_w1(url),LF=L.Folder;
			if(LF.indexOf(fu)<0){
				$(this).after(SC+'"FeedAdd mi-span" data-u="'+url+'" title="'+gM('rssAdd')+'">'+sc)
			}
		});
		bd.find('object').has('embed[src]').each(function(){
			var em=$(this).find('embed[src]'), src=H_a(em.attr('src')), wd=em.attr('width'), ht=em.attr('height');
			$(this).replaceWith('<'+(CLOUD?'webview':'iframe')+' src="'+src+'" style="width:'+(wd||500)+'px;height:'+(ht||400)+'px" >');
		});
		bd.find('embed[src]').each(function(){
			var em=$(this), src=H_a(em.attr('src')), wd=em.attr('width'), ht=em.attr('height');
			$(this).replaceWith('<'+(CLOUD?'webview':'iframe')+' src="'+src+'" style="width:'+(wd||500)+'px;height:'+(ht||400)+'px" >');
		});
		return bd;
	},

	bdLoadHtml:function(html, aB){
		aB.html(html||'');
		aB.find('style, link[rel=stylesheet], link[type="text/css"], .adsbygoogle, .ads, footer,.footer').remove();
		toggleMath(aB);
		toggleCode(aB);
		aB.find('a').addClass(L.color);
		aB.find('video').attr({'width':320,'height':240,'controls':'controls'});
		aB.find('audio').attr({'controls':'controls'});
		aB.find((CLOUD?'webview':'iframe')+'[data-src]').each(function(){
			$(this).attr('src', $(this).attr('data-src'));
		}).attr({'width':'98%'});
		return Entry.bdLoadImg(aB);
	},

	bdLoadImg:function(bd){

		var act=$(this).parent().next('.entryAction'), aBimg=bd.find(zlr2('img :image','[data-src]',','));

		var imgO=$('#imgOpts').val(), imgPreAll=imgO=='imgPreAll', imgOff=imgO=='imgOff', imgPreOne=imgO=='imgPreOne', imgPreOn=imgPreAll || imgPreOne;

		if(!imgOff){
			aBimg.not('[src]').each(function(){
				var me=$(this), s=me.attr('data-src');

				this.onerror = function(){
					me.add($(zlr3('.sele ','img :image','[data-src*="'+this.src+'"]',','))).remove();
					lazyLoadImg();
				};
				this.onload = function(){
					var me=$(this), w=this.naturalWidth, h=this.naturalHeight, s=this.src, img=$('.entryImgs img[data-src="'+s+'"]').not('[src]');
					$(zlr3('.sele ','img :image','[data-src="'+s+'"]',',')).not('[data-wh]').attr('data-wh',w+'x'+h);

					var wi=$(this).attr('width'), hi=$(this).attr('height');
					if(wi){$(this).attr('max-width', wi).removeAttr('width')}
					if(hi){$(this).attr('max-height', hi).removeAttr('height')}
					$(this).attr('style', function(i, v){return (v||'').replace(/(width|height)\s*:\s*[^;]*;?/ig, '').trim()})
					if(h>=100){
						img.attr('src', s);
					}else{
						img.remove();
					}

					lazyLoadImg();
				};

				if(blked(s)){$(zlr3('.sele ','img :image','[data-src="'+s+'"]',',')).remove(); return true}

				if(CLOUD){
					var cb=function(u1, u0){
						me.attr('src', u1);
					};
					loadImage(s, cb);
				}else{
					//console.log('img: ',s);
					me.attr('src', s);
				}
			});

			if(aBimg.not('[src]').length<1){
				lazyLoadImg();
			}
		}else{
			aBimg.css('opacity',0);
		}
		return Entry;
	},

	author:function(obj, conts){
		var aEmail=xml2txt($(obj).find('author email'), conts, true), aUrl=xml2txt($(obj).find('author uri'), conts, true);
		var a=xml2txt($(obj).find('author name, :creator'), conts);
		if(aUrl){a = '<a target=_blank href="'+aUrl+'">'+a+'</a>'}
		if(aEmail){a += '['+aEmail+']'};
		if(!a){a=xml2txt($(obj).find('author'), conts)}
		a=a.replace('(author unknown)','');
		return a;
	},

	update:function(fresh){
		if(L.timeOut){clearTimeout(Number(L.timeOut))}
	//	L.timeOut=setTimeout(Entry.update, 1000*30);
		
		var l=$('#logos > #logo');
		if(fresh=='pause'){
			l.toggleClass('pause');
			var isp=l.is('.pause');
			$('#ZRfavicon').attr('href','img/ZR'+(CLOUD?'C':'L')+(isp?2:'')+'.png');
			if(isp){return}
		}
		l.removeClass('pause');

		if($('#zRFolder .feed').length<1){return}
		if(fresh){
			Entry.list();
		}
		Load.ing();

		var fo=L.FO.trim(), fe=L.FE, fes='', n=+(L.updateFeedCnt)||0, n1, nT=5;
		if(n<0){n=0}
		if(n<nT){
			var sortF=function(a,b){
				var ta=Number($(a).attr('data-past')||0), tb=+$(b).attr('data-past')||0, ca=CntN($(a).attr('data-cnt')), cb=CntN($(b).attr('data-cnt'));
				return ta-tb || ca-cb
			};
			if(fe){fes=$('#zRFolder .feed[data-u="'+fe+'"]').needUpdate(70)}
			n1=fes.length;
			if(n+n1<nT && fo){
				fes=$('#zRFolder .fo[data-n="'+fo+'"]').parent().nextAll().find('.feed').not(fes).needUpdate(70).sort(sortF).slice(0, nT-n-n1).add(fes);
			}
			n1=fes.length;
			if(n+n1<nT){
				var fees=$('#zRFolder .fo[data-n!="'+fo+'"]').parent().nextAll().find('.feed').not(fes);
				fes=fees.needUpdate().slice(0, nT-n-n1).add(fes);
				n1=fes.length;
				if(n+n1<nT){
					fes=fees.not(fes).needUpdate(70).sort(sortF).slice(0, nT-n-n1).add(fes);
				}
			}

		}
		feN=fes.length;
		if(feN>0){
			fes.each(function(){
				var u=$(this).attr('data-u'), s=$(this).attr('data-s'), m=$(this).attr('data-m'), j={};
				$(this).attr('data-past', (new Date()).getTime()/1000);
				if(s||m){
					if(m){
						var js='mjlpagce', a;
						for(var k=0;k<8;k++){
							a=js.substr(k,1);
							j[a]=$(this).attr('data-'+a)||'';
						}
					}else{
						j={s:s};
					}
//console.log(u,j);
					Entry.updateFeed(u,j);
				}else{
					Entry.updateFeed(u);
				}
				n++;
			});
			L.updateFeedCnt=n;

		}

		
	},

	updateFeedCmt:function(iU){
		zEn.get(iU, function(obj){
			var entry=obj, cmte=entry.e, cmtc=entry.c, aH=$('.navWeb').filter('[data-u="'+iU+'"]').parents('.articleHead');
			if(cmte && !aH.nextAll('.articleCmt').length){
				aH.next().after(DCtv('articleCmt',itv('" title="loading...','autorenew')));
				var Cmt=aH.next().next();
				var ajax={
					type: 'GET',
					url:cmte,
					error:function (xhr, status, error){
						/*
						console.log(status);
						console.log(error);
						console.log(xhr);
						*/
						Load.err(cmte+'\n'+gM('cmt')+': '+entry.h);
						Cmt.slideUp('slow', function(){
							$(this).remove();
						});
					},
					success:function(data, status){
	//console.log(status);
	//console.log(data);
						var xml=$(data);
						if(xml.is('zml')){
							xml=$.parseXML(ZML.decode($(data).text()));
						}
						var c=xml.find('channel'), d=xml.find('feed'), isRss=c.length, isAtom=d.length;
						Cmt.empty().hide();

						if(isRss + isAtom){
							var items=xml.find(isRss?'item':'entry'), cmts=[], cmtsUni=[];
							items.each(function(){
	//console.log($(this));
								var it=$(this),tm=new Date(), tm2, u=it.find('link'), conts=it.contents();
								u=isRss?xml2txt(u, conts, true):xmlTrim(u.attr('href'));
								u=H_a(H_u(u), cmte);




								tm.setTime(Time.fromZH(xml2txt(it.find('pub'+(isRss?'Date, pubdate':'lished')), conts)));
								tm2=Time.lite(tm);

								var h;
								h0=xml2txt(it.find(isRss?':encoded':'content'), conts);
								h1=xml2txt(it.find(isRss?'description':'summary'), conts);

	//console.log(h0,h1);
								var cmtBy=html2txt(XML.unwrap(Entry.author(this, conts)) || xml2txt(it.find('title'), conts));

								var h01=XML.decode(XML.unwrap(h0 || h1));
								if(/^&lt;/.test(h01)){h01=XML.decode(h01)}
								if(/^&lt;/.test(h01)){h01=XML.decode(h01)}//两次解码
								
								var html=html2html(blking(h01, true).trim());

								html=enclosure2html(it.find('enclosure'),cmte)+Entry.bd(html, u).html();


								if(!html){html='&nbsp;&nbsp;'}

								var cmti=cmtBy+'\n'+html;

								if(cmtsUni.indexOf(cmti)<0){
									cmtsUni.push(cmti);
									cmti=DC+'cmt>'+SC+'cmtHead>'+SC+'cmtDate title="'+Time.local(tm)+'">'+tm2+sC+'navWeb data-u="'+u+'" title="'+u+'">'+sc+sC+
										'cmtBy><a name="'+u+'">'+cmtBy+'</a>'+sc+DC+
										'cmtBody>'+html+dc+dc;
									cmts.push(cmti);
								}

							});
							var n=cmts.length;
							if(n && cmtsUni.length && aH.next().html().substr(0,20) !=cmtsUni[0].split('\n')[1].substr(0,20)){//部分RSS评论内容与文章原文重复

								Cmt.append(cmts.join(''));
								Cmt.find('.cmtBody a').filter('[href^="#"]').attr('href', function(i,v){
									var ui=$(this).attr('href'), u=Cmt.find('.cmtHead > .navWeb').filter('[title$="'+ui+'"]').attr('title');
									if(!u){
										var aName=$(this).text().replace(/^@/,'');
										$(this).parents('.cmt').nextAll().find('.cmtBy a:contains("'+aName+'")').each(function(){
											var aName2=xml2txt($(this), conts);
											u=$(this).attr('name');
											if(aName==aName2){return false}
										});
									}
									return u?'#'+u:'';
								});

								Cmt.find('.cmtBody a').filter('[href=""]').removeAttr('href');

								if(L.imgOpts!='imgOff'){
									var img0=Cmt.find(zlr2('img :image','[data-src]',',')).on('error',function(){
										$(this).remove();
									});

									if(CLOUD){
										var cb=function(u1, u0){
											img0.attr('src', u1);
										};
										loadImage(img0.attr('data-src'), cb);

									}else{
										img0.attr('src', function(){return $(this).attr('data-src')});
									}
								}

								Cmt.children().wrapAll('<details />');
								Cmt.children('details').prepend('<summary title="'+gM('toggleTip')+hkn+'Shift + O">'+
									SC+'"cmtCnt mi-span" data-u="'+cmte+'" data-cnt="'+Cnt(n)+'">'+gM('cmt')+sc+'</summary>');
								Cmt.slideDown();
								toggleColor(true);
							}
						}

					},
					dataFilter:function (data, type){return dataFilter(data, type)}

				};
				$.ajax(ajax);
			}
		});
	},


	updateFeed:function(fU, j){
		var ajax={
			type: 'GET',
			url:fU,
			error:function(xhr, status, error){
				feN--;
				zFe.get(fU, function(obj){
					Load.err(fU+'\n'+obj.n);
					updateFeedCnt();
					$('#zRFolder .feed[data-u="'+fU+'"]').attr('data-past', (new Date()).getTime()/1000);
				});
			},
			success:function(data, status, xhr){
				feN--;
				if(j){
					//console.log(j);
					Entry.pushFeed2(fU, data, j);
				}else{
					//Entry.pushFeed(fU, $(data).find('item, entry'));
					var xml=$(data);
					if(xml.is('zml')){
						xml=$.parseXML(ZML.decode($(data).text()));
					}
					//console.log('updateFeed',fU);
					Entry.pushFeed(fU, xml.find('item, entry'));
				}
				updateFeedCnt();
				$('#zRFolder .feed[data-u="'+fU+'"]').attr('data-past', (new Date()).getTime()/1000);

			},
			dataFilter:function (data, type){return dataFilter(data, type)},
			beforeSend:function(xhr){
				if($('#zRFolder .feed[data-u="'+fU+'"]').length<1){
					updateFeedCnt();
					return false;
				}
			}
		};
		$.ajax(ajax);
	},

	pushFeed:function(fU, items){
		Load.ing();
		var iUA=[], cnt=0, isRss=items.filter('item').length, isAtom=items.filter('entry').length;

		if(isRss + isAtom){
			zFe.get(fU, function(obj){
//console.log(fU,obj);
				if(!obj){return}
				var Opts={index:'s',keyRange:zEn.makeKeyRange({lower:fU, upper:fU})}, endDate=(new Date()).getTime()/1000;
				zEn.query(function(enA){

					for(var i in enA){
						iUA.push(H_u(enA[i].u));
					}
					var EnA=[];

					items.each(function(i){
						var it=$(this),pubD=it.find('pub'+(isRss?'Date, pubdate':'lished')), conts=it.contents();
						if(pubD.length<1){pubD=it.find('updated')}

						var pubDate=xml2txt(pubD, conts), tm=Time.fromZH(pubDate)/1000;

						if(!tm){tm=Date.parse(pubDate.replace(/[^\d\s-:\/]/g,' '))/1000}
						if(!tm || tm<Date.parse('2003-1-1')/1000){tm=(new Date()).getTime()/1000}
						endDate=Math.min(endDate,tm);
//console.log(tm, endDate,endDate<tm);
						var lnk=it.find('link'), lnk2=it.find('link[rel=alternate]'), u, srce=it.find('source'), su, sh, st;
						if(isRss){
							u=H_u(xml2txt(lnk, conts, true));

							su=srce.attr('url');
							if(su){
								sh=H+H_W(su);
								st=xml2txt(srce, conts, true);
							}
//console.log('RSS',u,su);
						}else{

							u=H_u(xmlTrim(lnk2.attr('href') || lnk.attr('href')));
							su=H_u(xml2txt(srce.find('id'), conts, true).replace('tag:google.com,2005:reader/feed/',''));
							if(su!=fU){
								sh=H_u(xmlTrim(srce.find('link[rel=alternate]').attr('href')));
								st=xml2txt(srce.find('title'), conts, true);
								su=H_a(su,sh);
							}else{
								su='';
							}
//console.log('ATOM',u,su);
						}

						u=H_a(H_u(u),fU);
//console.log(u);
						if(!u || iUA.indexOf(u)>-1){return true}

						/* www.w3school.com.cn/rss/rss_reference.asp
						channel ：'title', 'link', atom:link , 'description', 'language', 'copyright', 'managingEditor', 'webMaster', 'lastBuildDate', 'rating', 'docs' , ttl , generator , sy:updatePeriod , sy:updateFrequency
						item : 'title', 'link', 'description', 'author', 'category', 'comments', 'enclosure', 'guid', 'pubDate', 'source','content:encoded' , wfw:commentRss , slash:comments , dc:creator

						imagetags = 'title', 'url', 'link', 'width', 'height'
						textinputtags = 'title', 'description', 'name', 'link'

						*/

						/*
						feed : id link[rel=alternate] link[rel=self] title updated 'subtitle' generator
						entry : id link[rel=alternate] published 'updated' title summary content 'author > name email uri' category[term]
								link[rel=replies][type="text/html"][href] link[rel=replies][type="application/atom+xml"][href]


						*/

						var t0=xmlTrim(html2txt(XML.unwrap(xml2txt(it.find('title'), conts, true).trim())));
//console.log(t0);

						var entry={s:fU, u:u, h:t0, r:0, f:0, d:0, p:tm};

						if(su){
							entry.su=su;
							entry.sh=sh;
							entry.st=st;
						}

						var a=Entry.author(this, conts), c=xml2txt(it.find('comments'), conts, true), e=xml2txt(it.find(':commentRss'), conts, true), g, gArr=[];

						if(!isRss){
							c=it.find('link[rel=replies][type="text/html"]').attr('href');
							e=it.find('link[rel=replies][type="application/atom+xml"]').attr('href');
						}

						it.find('category').each(function(){
							var term=$(this).attr('term') || '';
							if(term){
								term=term.replace(/user[/]\d+[/](label|bundle)[/]*/,'');

								if(term.indexOf('state/com.google')>0){return true}
							}else{
								term=xmlTrim($(this).text());
							}
							termA=term.trim().split(/[,、]/g);
							for(var ii in termA){
								term=termA[ii];
								if(term && gArr.indexOf(term)<0){gArr.push(term)}
							}
						});
						g=gArr.join(',');

						if(a){entry.a=a}
						if(g){entry.g=g}
						if(c){entry.c=H_u(c)}
						if(e){entry.e=H_u(e)}


						var h,ph0,pit=it.prev(),pconts=pit.contents();
						h0=xml2txt(it.find(isRss?':encoded':'content'), conts);
						h1=xml2txt(it.find(isRss?'description':'summary'), conts);
						
						ph0=xml2txt(pit.find(isRss?':encoded':'content'), pconts);
//console.log(h0,h1,ph0);
						if(h0 && h0==ph0){
							return true
						}
						
//console.log(XML.unwrap(h0 || h1));
						var h01=XML.decode(XML.unwrap(h0 || h1));
//console.log(h01);

						if(/^&lt;/.test(h01)){h01=XML.decode(h01)}
						if(/^&lt;/.test(h01)){h01=XML.decode(h01)}//两次解析
//console.log(h01);
						var html=html2html(blking(h01, true).trim().replace(/&lt;/g,'<'+String.fromCharCode(parseInt('FEFF',16))));	//invisible space
//console.log(h01);
//console.log(html);
						html=enclosure2html(it.find('enclosure'),fU)+Entry.bd(html, u).html();
//console.log(html);
						entry.l=html;

						EnA.push({type:'put', value:entry});

						iUA.unshift(u);
						cnt++;
//console.log('cnt ',cnt);
					});

					var cb=function(){
						var feed=$('#zRFolder .feed[data-u="'+fU+'"]');
						if(feed.length){
							feed.attr('data-past',(new Date()).getTime()/1000);
							Entry.cntUnreadFeed(fU);
							if(cnt>0 && feN<1){
								if($('#zRentries > .sele').length<1){
									//console.log('en li 6');
									Entry.list();
								}
							}
						}else{
							Folder.list();
						}
						Load.ed();
						
						//彻底清除旧的已删除文章，释放空间
						empties.push({fU:fU,endDate:endDate});
						emptyTask();
					};
					zEn.batch(EnA, cb, cb);
				},Opts);
			});
		}
	},

	pushFeed2:function(fU, data, j){
		Load.ing();
		var iUA=[], cnt=0, entries;


		zFe.get(fU, function(obj){
			if(!obj){return}

			var Opts={index:'s',keyRange:zEn.makeKeyRange({lower:fU, upper:fU})};
			zEn.query(function(enA){
				var hA=[];
				for(var i in enA){
					var ei=enA[i];
					iUA.push(ei.u);
					hA.push(ei.h);
				}
				var EnA=[];

				if(j.s){

					entries=eval('(function (){' + j.s + '})()')||[];
					if(!(entries instanceof Array)){
						entries=[entries];
					}
					for(var k=0;k<entries.length;k++){
						var ek=entries[k];

						var u=entries[i].u, ekh=ek.h;
						if(!u || iUA.indexOf(u)>-1 || hA.indexOf(ekh)>-1){continue}
						
						var html=blking(ek.l, true).trim();
						html=Entry.bd(html, fU).html();
						hA.push(ekh);
						ek.l=html;
						EnA.push({type:'put', value:ek});

						iUA.unshift(u);
						cnt++;
					}
					
					
				}else{
					entries=[];
					var Attr=j.m.match(/\.\[.+\]$/), A=Attr?j.m.replace(Attr[0],''):j.m;
					if(Attr){Attr=Attr[0].replace(/^\.\[|\]$/g,'')}

					$(data).find(A).each(function(){
						
						var u=H_a($(this).attr(Attr||'href'),fU), head=html2txt(eval(j.j.replace(/@/g,'this')||'$(this).text()')||'');
						if(!u || iUA.indexOf(u)>-1 || hA.indexOf(head)>-1){
							return true;
						}
						var html=blking(eval(j.l.replace(/@/g,'this'))||'', true).trim();
						html=Entry.bd(html, fU).html();
						hA.push(ekh);

						var jp=eval(j.p.replace(/@/g,'this'));
						EnA.push({type:'put', value:{s:fU, u:u,
							r:0, f:0, d:0, l:html,
							h:head,
							p:/^\d{10}$/.test(jp)?+jp:(Date.parse(jp) || (new Date()).getTime())/1000,
							a:(eval(j.a.replace(/@/g,'this'))||'').trim(), g:(eval(j.g.replace(/@/g,'this'))||'').trim(),
							c:(eval(j.c.replace(/@/g,'this'))||'').trim(), e:(eval(j.e.replace(/@/g,'this'))||'').trim()}
						});
						
						iUA.unshift(u);
						cnt++;
					});

				}


				var cb=function(){
					var feed=$('#zRFolder .feed[data-u="'+fU+'"]');
					if(feed.length){
						feed.attr('data-past',(new Date()).getTime()/1000);
						Entry.cntUnreadFeed(fU);
						if(cnt>0 && feN<1){
							if($('#zRentries > .sele').length<1){
								//console.log('en li 6');
								Entry.list();
							}
						}
					}else{
						Folder.list();
					}
					Load.ed();
				};
				zEn.batch(EnA, cb, cb);
			},Opts);
		});

	},

	RssAdd:function(Url, data, noloop){

		var url=H_u(Url), feed=$('#zRFolder .feed[data-u="'+url+'"]');
		if(feed.length){
			feed.click();
			Load.succ('RssAdd');
		}else{
			Load.ingProg('RssAdd');

			if(data){Entry.RssAddData(data, url, noloop)}else{
				var ajax={
					type: 'GET',
					url:url,
					error:function (xhr, status, error){
						/*
						console.log(status);
						console.log(error);
						console.log(xhr);
						console.log(xhr.responseText);
						*/
						if(xhr.status!=404){
							var t=blking(XML.decode(xhr.responseText));
	//console.log(t);
							//Load.ing('RssAdd',3000);
							Entry.RssAddData(t, url, noloop);
						}
						Load.err(url+'\n'+xhr.status,'RssAdd');

					},
					success:function (data, status){
						//console.log(status);
						//console.log(data);

						//Load.ing('RssAdd',3000);
						Entry.RssAddData(data, url, noloop);
					},
					dataFilter:function (data, type){return dataFilter(data, type)}

				};
				$.ajax(ajax);
			}
		}
	},

	RssAddData:function(data, url, noloop){
		var d=$(data), c, isRss=0, isAtom=0, isOpml=0;
		if(d.is('zml')){
			d=$($.parseXML(XML.wrapE('xml',ZML.decode(d.text()))).childNodes[0].childNodes);
		}

		if(d.is('channel')){isRss=1; c=d}else{
			c=d.find('channel').eq(0);
			if(c.length){isRss=1}else{
				if(d.is('feed')){isAtom=1; c=d}else{
					c=d.find('feed').eq(0);
					if(c.length){isAtom=1}else{
						if(d.is('outline')){isOpml=1; c=d.siblings('outline').add(d)}else{
							c=d.find('outline').eq(0).siblings('outline').add(d.find('outline').eq(0));
							if(c.length){isOpml=1}else{
								var tp=typeof(data);
								//console.log(tp);
							}
						}
					}

				}
			}
		}


		if(isRss + isAtom){
//console.log(url);
			var fA=jSon(L.Folder), j={u:url}, items=c.find(isRss?'item':'entry'), FO=L.FO.trim(), hasFU=$('#zRFolder .feed[data-u="'+url+'"]').length;
			var u0=H_w1(url), u1=u0+'"', u2=u0+' ';
			if(!hasFU && L.Folder.indexOf(u1)<0 && L.Folder.indexOf(u2)<0){
				if(fA.length && FO){
					var i=$('#zRFolder .fo[data-n="'+FO+'"]').parents('details').index();
					fA[i].f +=' '+u0;
					fA[i].f = fA[i].f.trim();
				}else{
					var fo=Folder.getNew();
					fA.push({n:fo,f:u0});
					L.FO=fo;
				}

				L.Folder=JSON.stringify(fA);
				L.FE=url;
				if(CLOUD){SLK.save()}
			}

			var W=H_W(url), conts=c.contents();
			var h=isRss?xml2txt(c.children('link'), conts, true):(c.children('link[rel=alternate]').attr('href')||c.children('link[rel!=self]').attr('href'));


			h=H_a(H_u(h),url);
			j.n=XML.decode(XML.unwrap(c.children('title').text().trim()).trim());

//console.log(h);
			j.h=H_w(h);
			//if(j.h==W || j.h==W+'/'){j.h=''}


			j.d=XML.encode(html2txt(xml2txt(c.children('description'), conts)));

			$('#FeedEdit [data-feed]').not('#feedBasic td').each(function(){
				var a=$(this).attr('data-feed');
				j[a]=xml2txt(c.children(this.id.toLowerCase()), conts);
			});

			zFe.put(j, function(){
				$('#Alls .zRnav[id]').removeClass('zRnav');
				$('#zRList').removeAttr('style');
				$('#zRentries').empty();
				Entry.pushFeed(url, items);
				if(!hasFU){Folder.list(true, function(){if(CLOUD){SF.save()}})}
				Load.succ('RssAdd');
			});

		}else if(isOpml){
			Folder.addFeedOpml(c);

		}else{

			if(tp=='object'){
				Load.err(tp+'', 'RssAdd');
//console.log($('opml',data));
			}
			if(tp=='string'){

//console.log(data);

				var sep='application/rss+xml', tArr=data.split(sep), rss, urlA=[url], titleJ={}, URL=H_W(url);
				titleJ[url]='-- URL --';
//console.log(tArr);
				if(tArr.length<2){sep=sep.replace('rss','atom'); tArr=data.split(sep)}
				//atom
				if(tArr.length>1){
					rss=tArr[0].substr(tArr[0].lastIndexOf('<link'))+sep+tArr[1].substr(0,tArr[1].indexOf('>')+1);
//console.log(rss);
					rss=H_a($(rss).attr('href'), url);
				}
				tArr=ZLR(zlr3('[href*="','?feed=rss2 .opml .xml .rdf .feedsky.com .feedburner.com atom. syndicate =rss =feed =atom =xml subscri /sub podcast feed rss. rss','"]'));
				for(var i in tArr){
					if(!rss){
						var th=d.find(tArr[i]).attr('href');
						if( !/site.?map/i.test(th) && !/feedback/ig.test(th) ){
							rss=H_a(th, url);
						}
					}else{
						break;
					}
				}

				if(!rss){
					sep='url=';
					//console.log(data);
					var tArr1=data.split(sep);

					if(tArr1.length>1){
						rss=H_a(tArr1[1].split(/['"]/)[0], url);
					}
				}

				d.find(tArr.join()).each(function(){
					var u=H_a($(this).attr('href'), url);
					if(urlA.indexOf(u)<0){
						urlA.push(u);
						titleJ[u]=$(this).text().trim();
					}
					u=u.replace(/.+http:/,'http:').replace(/.+https:/,'https:');
					if(urlA.indexOf(u)<0){
						urlA.push(u);
						titleJ[u]=$(this).text().trim();
					}
				});

				if(urlA.length>1){
					urlA.sort(function(a,b){
						var au=H_d(a), bu=H_d(b), aL=au.length, bL=bu.length, t=0;
						for(var i=0;i<Math.min(aL,bL);i++){
							var ai=au.charAt(aL-1-i), bi=bu.charAt(bL-1-i);
							if(ai<bi){return -1}
							if(ai>bi){return 1}
						}
						return a<b?-1:1
					});
					var g0=H_d(url), g=g0, gi, ui, ti, uiL, tiL, urlT, urlL='';
					for(var i in urlA){
						ui=urlA[i];
						ti=titleJ[ui];
						gi=H_d(ui);
						if(gi!=g){
							g=gi;
							if(g!=g0){
								urlL +='</optgroup><optgroup label="'+g+'">';
							}
						}

						urlT='<option value="'+ui+'" title="'+ti+'\n'+ui+'">';

						ti=ti.substr(0,30)+ZLR(' -',5);
						tiL=ti.length;
						if(tiL<40){
							ti=ti+ZLR(' -', parseInt(20-tiL/2));
						}
						tiL=ti.length;
						if(tiL<40){
							ti=ti+' ';
						}

						ui=ui.replace(/^https*:[/]{2}[^\/]+/,'').substr(0,70);

						urlT+=ti+ui+'</option>';

						if(gi==g0){
							urlL =urlT+urlL;
						}else{
							urlL +=urlT;
						}
					}
					urlL ='<optgroup label="'+g0+'">'+urlL+'</optgroup>';
					$('#urlList').html(urlL).fadeIn();
				}

				$('#RssBurn').attr({'data-u':url,
					'data-n':d.find('title').text().trim()||URL,
					'data-d':(d.find('meta[name=description]').attr('content')||'').trim(),
					'data-h':URL});


				if(rss){rss=rss.replace(/.+http:/,'http:').replace(/.+https:/,'https:')}
				if(rss && rss!=url && !noloop){
					$('#rssAdd #urlAdd').val(rss);
//console.log(rss);
					//Load.ing('RssAdd',3000);
					Load.ingProg('RssAdd');
					Entry.RssAdd(rss,null,true);
					$('#rssAdd > #noRss').hide();
				}else{
					Load.err(url+'\nno RSS!','RssAdd');

					$('#rssAdd > #noRss').fadeIn();
				}
			}

		}

	}

}, RssTool={
	ini:function(id){
		if(id=='rssBurn'){
			$('#FeedEdit input').val('');
			$('#FeedBurn :radio:eq(0)').click();
			$('#FeedBurn > label:gt(1)').add('#RSSInOut').hide();
			$('#FeedBurn #adv').prop('checked', false);
		}
		if(id=='rssAdd'){
			$('#upOpml, #urlAdd').val('');
			$('#noRss, #urlList').hide();
		}
		return this;
	},
	show:function(id){
		$('.rssTool.toggle').not(id.replace('rss','#feed')).removeClass('toggle');
		$(id.replace('rss','#feed')).addClass('toggle');
		$('#RssTool #'+id).siblings(':not(#rss)').hide().end().fadeIn();
		$('#RssTool').show().next().hide();
	},
	hide:function(){
		$('#RssTool').hide().next().show();
	}
};





function updateFeedCnt(){var n=Number(L.updateFeedCnt) || 0; L.updateFeedCnt=n-1;
	if(n<5){
		if(L.timeOut){clearTimeout(Number(L.timeOut))}
		L.timeOut=setTimeout(Entry.update, 1000*30);
	}
}

function optStr(t, h, r){
	var s='', a=t=='all', o=t=='fo', f=t=='feed', l=t=='label';
	if(a){
		return itv('MkrdBat" title="'+gM('MkrdBat'),'done_all')+
			itv('outrss" title="'+gM('outrsstip'),'system_update_alt')+
			itv('newFolder" title="'+gM('newFolder'),'create_new_folder')+
			itv('hideread" title="'+gM('hideread'),'check_box');
	}
	if(l){
		return '>'+SC+'opt hidden>'+
			itv('renm" title="'+gM('renm'),'edit')+
			itv('dele" title="'+gM('del'),'clear')+
			sC;
	}
	if(o){
		return '>'+SC+'opt hidden>'+
				itv('MkrdBat" title="'+gM('MkrdBat'),'done_all')+
				itv('outrss" title="'+gM('outrss'),'system_update_alt')+
				itv('renm" title="'+gM('renm'),'edit')+
				itv('dele" title="'+gM('del'),'clear')+
				sC;
	}
	if(f){
		return '>'+SC+'opt hidden>'+
				itv('MkrdBat" title="'+gM('MkrdBat'),'done_all')+
				itv('NavWeb" title="'+h,'launch')+
				itv('NavWeb3" title="'+gM('ruleFull')+':'+gM('ruleFullArticle')+'\n'+gM('sizzle')+'\n'+gM('sizzleTip')+'" data-r="'+r,'border_color')+
				itv('feedEdit" title="'+gM('edit'),'cast')+
				itv('renm" title="'+gM('renm'),'edit')+
				itv('dele" title="'+gM('del'),'clear')+
				sC;
	}
}

function lazyLoadImg(){
	var imgO=$('#imgOpts').val(), imgPreAll=imgO=='imgPreAll', imgOff=imgO=='imgOff', imgPreOne=imgO=='imgPreOne', imgPreOn=imgPreAll || imgPreOne;

	if(imgPreOn){
		$('.entryImgs .opaq').not('.ing, .ed, [src]').eq(0).each(function(){
			var me=$(this).addClass('ing');
			if(CLOUD){
				var s=me.attr('data-src'), cb=function(u1, u0){
					me.attr('src', u1);
				};
				loadImage(s, cb);
			}else{
				me.attr('src', me.attr('data-src'));
			}
		});

		if(imgPreOne){
			$('.entryImgs').has('.opaq.ed[src]').each(function(){
				if($(this).children().length<2){

					$(this).children().fadeTo('slow', 1, function(){
						$(this).removeClass('opaq');
					});


				}
			});
		}else{
			
			$('.entryImgs .opaq.ed[src]').fadeTo('slow', 1, function(){
				$(this).removeClass('opaq');
			});
		}


		$('.entryImgs:empty').each(function(){
			$(this).append(imgSRC+'ZRL.png" class=nopic height=0 title="'+XML.encode($(this).next().find('summary > .summary').text().substr(0,120))+'" />');
		});

	}
}


function blked(t){
	var iArr=['/feedsky/s.gif?r=http','feedsky.com/r/i/feedsky/','.feedsportal.com/','.feedburner.com/~'];
	/*
	www1.feedsky.com/r/i/feedsky/.../art01.gif
	feedburner.com/r/ c/
	feedburner.com/~r/ ~ff/
	*/
	for(var i in iArr){
		if(t.indexOf(iArr[i])>0){return true}
	}
	if(L.imgNeg){
		var regA=L.imgNeg.split(',');
		for(var i in regA){
			if((new RegExp(regA[i])).test(t)){
				return true
			}
		}
	}
	return false;
}
function blking(t, Neg, noscript){
	var s=t, arr;
	s=s.replace(/<img [^>]*src=['"]*http[^>]+[/]feedsky\.com\/r\/i\/feedsky\/[^>]+>/gi,'');
	s=s.replace(/<img [^>]*src=['"]*http[^>]+[/]feedsky[/]s\.gif\?r=http[^>]+>/gi,'');
	s=s.replace(/<img [^>]*src=['"]*http[^>]+\.feedsportal\.com[/][^>][/][^>]+>/gi,'');
	s=s.replace(/<img [^>]*src=['"]*http[^>]+\.feedburner\.com[/]~[^>]+>/gi,'');
	s=s.replace(/<img [^>]*src=['"]*http[^>]+\.(sitemeter|clicky|cnzz|51yes|umeng)\.com[/][^>]+>/gi,'');
	s=s.replace(/<img [^>]*src=['"]*http[^>]+\.51\.la[/][^>]+>/gi,'');

	s=s.replace(/ http-equiv="?refresh"?/g,'');
	
	s=s.replace(/\\[\[\]]/gi,'$');


	if(noscript){
		//s=s.replace(/<script/gi,'<cript hidden').replace(/<\/script>/gi,'</cript>') 不使用此方案，因为js代码中有$,会经常被作为公式替换
		//s=s.replace(/<script[^>]*>[\D\d]*<[/]script>/gi,'');	两组script之间的信息也被匹配，因此弃用
		arr=s.split(/<\/script>/gi);
		for(var i in arr){
			arr[i]=arr[i].split(/<script/gi)[0];
		}
		s=arr.join('');
	}



	var n=L.searchNeg;
	if(Neg && n){
		var kwdArr=FtA(n);
		for(var ki in kwdArr){
			if(s.indexOf(kwdArr[ki])>-1){s=''; break}
		}
	}
	return s;
}

function dataFilter(data, type) {
	var tp=typeof(data);
//console.log('typeof: ',tp);
	if(tp=='string'){
		return blking(data);
	}else{
		return data;
	}
}



function xml2txt(obj, conts, decodeUrl){
	var t=xmlTrim(XML.unwrap(((obj[0]||'').innerHTML || obj.text() || '').trim()));

	if(!t && conts){
		try{
			if(obj[0].nextSibling){
				t=xmlTrim(obj[0].nextSibling.nodeValue.replace(/^\[CDATA\[|\]{2}$/g,''));
			}
		}catch(e){

		}
	}
	return decodeUrl?XML.decode(t):t;
}

function xmlTrim(t){return XML.unwrap(t).trim()}


function FtA(t){
	var arr=(t||'').replace(/[,\s]*,[,\s]*/g,',').trim().replace(/^,|,$/g,'').split(','), tArr=[];
	for(var i in arr){
		if(tArr.indexOf(arr[i])<0){tArr.push(arr[i])}
	}
	return tArr;
}


function iU2A(u){
	var t=u.replace(/[^\w\d\.-]/g,'.'), w=H_W(u), tA=[(u.indexOf(Hs)!=0?'':'_')+w, t.replace(/^https?\.{3}/,'').replace(w,'')];
	if(/\d/.test(tA[1])){
		var s=tA[1].split(/\d+/)[0].length;
		tA[0]+=tA[1].substr(0,s);
		tA[1]=tA[1].substr(s+1);
	}
	return tA;
}
function Cnt(n){return ' ('+n+')'}
function CntN(t){return Number((t||'').replace(/\D/g,''))}

function toggleCode(obj){
	var o=$(obj||'.articleBody');
	
	o.find('code').attr('title',gM('decodeTip')).each(function(){
		var me=$(this);
		me.html(XML.encode(me.html()));
	})
}
function toggleMath(obj){
	var formula=zlr3(':contains(','$ \\[ \\( \\begin{',')',','), hed=$('.entryHead > .entryTitle, .date + .summary, .head > .navWeb1'),
	tex2span=function(t, inlineOnly){
		var t1=t;
		if(!inlineOnly){
			t1=t1.replace(/\$\$[^\$]+\$\$/g, function(f){
				if(/\)\./.test(f)){
					return f
				}
				var s=f.replace(/\$/g,'').trim();
				return DC+'ZMath title="'+s+'">'+s+dc
			});
		}

		return t1.replace(/\$[^\$]+\$(?!\$)/g, function(f){
				var s=f.replace(/\$/g,'').trim();
				return SC+'ZMath title="'+s+'">'+s+sc
			}).replace(/\\\(.+\\\)/g, function(f){
				var fa=split(f,/\)/g)[1], s=Arrf(function(x){var xA=x.split('\\(');
					return xA.length>1?xA[0]+SC+'ZMath title="'+xA[1]+'">'+xA[1]+sc:SC+'ZMath title="'+x+'">'+x+sc}, fa);
				return s.join('')
			});

	};

	var o=$(obj||'.articleBody'), oZ=o.find('.ZMath');
	if(!oZ.length){

		o.find(formula).add(o).not('pre,code').each(function(){
		//	if(o.children().length<1){
				$(this).contents().filter(function(){return this.nodeType==3 && $(this).parents('pre,code').length<1}).each(function(){
					var t0=this.nodeValue, t1=tex2span(this.nodeValue);
					if(t0!=t1){
						//console.log(t0);
						//console.log(t1);
						$(this).after(t1);
						$(this).remove();
					}
				})
		//	}
		});
		oZ=o.find('.ZMath')
	}
//consolelog(hed.length);
	hed.not(':has(.Zmath)').html(function(i,v){return v.replace(/\$[^\$]+\$(?!\$)/g, function(f){
		//consolelog('f = ',f);
		var s=f.replace(/\$/g,'').trim();

		

		return SCtv('ZMath" title="'+s,s)
	})})

//consolelog('obj  = ', obj);
	if(obj){
		oZ.add(o.parents('.sele').find('.entryHead > .entryTitle, .date + .summary, .head > .navWeb1').find('.ZMath')).each(function(){
			var z=$(this),t=this.title, tx=$(this).text();
			
			if(z.find('.katex').length){
				
				
				
				//z.text(t);
				
				
				if(obj){
					
					//z.replaceWith(t)
					z.text(t)
				}
			}else{
				
				
				//consolelog('katex.render','obj', tx);
				
				katex.render(tx, this, {
				    throwOnError: false
				});
			}
			
		});
	}else{
		oZ.add(hed.find('.ZMath')).each(function(){
			var z=$(this),t=this.title, tx=$(this).text();
			if(!z.find('.katex').length){
				//consolelog('katex.render', tx);
				katex.render(tx, this, {
				    throwOnError: false
				});
			}
		});
	}
	


}

function bodybg(ini){
	var co=ini?L.color:$('#ThemeOpt #color .toggle').attr('src').split('.')[0].split('/')[1], c=colors[co].split(' '), BGC=c[0], BGC1=c[1], FGC=c[2], thm=(L[L.theme]||'').replace(/^theme$/,''), opac=Number($('#zRhead #opac').val());
	if(CLOUD){
		if(thm){
			if(CLOUD && L.bingBlob && L.theme=='bing'){ thm = L.bingBlob}
			if(CLOUD && !L.bingBlob){
				var cb=function(u1, u0){
					L.bingBlob=u1;
					$('body').css('background-image','-webkit-cross-fade(url("../img/'+co+'.gif"),url("'+
						(u1||'../img/'+co+'.gif') + '"),'+opac+'%)');
				};
				loadImage(thm, cb);
			}else{
				$('body').css('background-image','-webkit-cross-fade(url("../img/'+co+'.gif"),url("'+
					(thm||'../img/'+co+'.gif') + '"),'+opac+'%)');
			}
		}else{
			$('body').css('background-image','-webkit-cross-fade(url("../img/'+co+'.gif"),url("../img/'+co+'.gif"),'+opac+'%)');
		}
	}else{

		if(thm){
		//	$('body').css('background-image','url("'+thm+'")');
		 	$('body').css('background','url("'+thm+'") center center fixed no-repeat /cover');
		}else{
			$('body').css('background',BGC);
		}
	}
}
function toggleColor(nobody){
	if(!nobody){bodybg()}
	var co=$('#ThemeOpt #color .toggle').attr('src').split('.')[0].split('/')[1], c=colors[co].split(' '), BGC=c[0], BGC1=c[1], FGC=c[2], opac=Number($('#zRhead #opac').val());
	L.color=co;
	L.opac=opac;


	$('#themeOpt').toggle(L.theme!='theme');
	if(L.theme=='theme'){$('#zRhead #opac, #imgdlTheme').hide()}

	$('input:not(:checkbox,:button,:radio,:image,:range),#zrMedia').not('#theme,#sechEntry,#zRsearch,#Pager > *').css({'color':FGC,'background':BGC});

	$('body,:button, .ui-tabs-nav a,select,#sechEntry,#zRsearch,#Pager > *').css('color',FGC);

	$('article a,#tabsright a,.navWeb1').removeClass('white black blue green pink').addClass(L.color);

	hoverIt(':button:not(.menu)');

	$('#zRList:not(:has(#zRentries:empty))').css('background-color',hex2rgba('#'+{'white':'FFFFFF','black':'000000','pink':'fff0f5','green':'f0fff0','blue':'b0c4de'}[co],opac/100));
}

function hoverIt(t){
	var co=$('#ThemeOpt #color .toggle').attr('src').split('.')[0].split('/')[1], c=colors[co].split(' '), BGC=c[0], BGC1=c[1];
	$(t).css('background-image',bgfrom +BGC1+ '),color-stop(.5,'+BGC+'), to(' +BGC1+ '))');
}

function hoverItOff(t,from,to){
	var co=$('#ThemeOpt #color .toggle').attr('src').split('.')[0].split('/')[1], c=colors[co].split(' ');
	$(t).css('background-image',bgfrom +c[from?1:0]+ '), to(' +c[to?1:0]+ '))');
}



function theme_pics(){
	var thm=L.theme, t='', pics, src_l;
	if(thm=='baidu'){
		for(var i=1;i<321;i++){
			src_l=H+'1.su.bdimg.com/skin/'+i+'.jpg';
			t+='<img class="'+(src_l==L.baidu?'selected':'')+
				'" src="'+src_l.replace('skin/', i<150?'skin_small/bg_':'skin_plus/')+
				'" data-src_l="'+src_l+'" />';
		}

	}

	if(thm=='qq'){
		for(var i=1;i<29;i++){
			src_l=H+'w.qq.com/img/bg/'+i+'.jpg';
			t+='<img class="'+(src_l==L.qq?'selected':'')+
				'" src="'+src_l+
				'" data-src_l="'+src_l+'" />';
		}
	}


	if(thm=='diy'){
		pics=L.diys.split(' ');
		for(var i in pics){
			t+='<img class="diy '+(pics[i]==L.diy?'selected':'')+'" src="'+pics[i]+'" data-src_l="'+pics[i]+'" />';
		}
		t+=imgSRC+'ZRL.png" class="diyAdd diy" src="'+pics[i]+'" />';
	}


	$('#theme_pics').html(t);
}

function enclosure2html(obj,U){
	var t='';
	if(obj.length){
		var type=obj.attr('type')||'audio',av=/video/.test(type),len=+obj.attr('length')||0,unit='B',u=H_a(obj.attr('url')||'',U||'');
		if(len){
			len/=1024;
			unit='KB';
			if(len>1024){
				len/=1024;
				unit='MB';
			}
			if(len>1024){
				len/=1024;
				unit='GB';
			}
			if(/\./.test(len)){
				len=len.toFixed(2).replace(/0+$/,'').replace(/\.$/,'')
			}
		}
		if(av){
			t='<video width=320 height=240 controls="controls" src="'+u+'"></video>'	//poster=
		}else{
			t='<audio controls="controls" src="'+u+'"></audio>'
		}
		t+='<a target=_blank href="'+u+'">【'+gM(av?'video':'audio')+(len?' '+len+unit:'')+'】</a>'+br
	}
	return t
}

function clk(obj,opt1){
	var me=$(obj), id=me.attr('id'), pid=me.parent().attr('id'), tabact=$('#tabs li.ui-tabs-active a').attr('id').toLowerCase();
	var MediaURLA=function(c){
		var medias=(c=='press'?presss:books).split(','), uA=urlTran(urldecode(c=='press'?pressUrls:bookUrls)).split('\n');
		return [medias,uA]
	}, loadMedia=function(A,pA,pUA,c){
		var sech=!opt1, r=[],lf=L[c+'fav'].split(','),medias=(c=='press'?presss:books).split(',');
		for(var i=A.length-1;i>-1;i--){
			var pi=pA[A[i]],pui=pUA[A[i]],uf=(!sech || lf.indexOf(pi)>-1?'un':'')+'fav';
			r.push(DCtv('zMedia',itv('Mediafav" data-cata="'+c+'" title="'+gM(uf), 'favorite'+(uf=='fav'?'_border':''))+
				SCtv('zMediaName" data-url="'+pui+'" data-cata="'+c,pi)))
		}
		r.push(sech?'':DCtv('zMediaAdd',SCtv('zMediaName" data-cata="'+c,' + '))+DCtv('clear'));
		if(sech){
			$('#'+c+'Result').html(r.join(''));
		}else{
			$('#'+c+'Fav').html(r.join(''));
		}
	};
	if(id=='pressSechGO'){
		var c='press',res=[],sech=!opt1,pS=$('#'+c+'Sech').val().trim(),pSA=ZLR(pS),pL=$('#pressLocation .chosen'),pt=pL.text(),
			MA=MediaURLA(c),pA=MA[0],pUA=MA[1],
			pC0=pressC0.split(','),pC1=pressC1.split(','),pC2=pressC2.split(',');

		if(!pS && pL.length<1 && sech){
			var lf=L[c+'fav'].split(',');
			for(var i=lf.length-1;i>-1;i--){
				var pi=pA.indexOf(lf[i]);
				if(pi>-1){
					res.push(pi)
				}
			}
		}else if(!sech){
			var lf=L[c+'fav'].split(',');
			for(var i=lf.length-1;i>-1;i--){
				var pi=pA.indexOf(lf[i]);
				if(pi>-1){
					res.push(pi)
				}
			}
		}else{
			for(var i=pA.length-1;i>-1;i--){
				var pi=pA[i],pui=pUA[i],f=1;
				if(pS){
					for(var j=pSA.length-1;j>-1;j--){
						if(pi.indexOf(pSA[j])<0 && pui.indexOf(pSA[j])<0){
							f=0;
							break;
						}
					}
				}
				if(f && pL.length){
					var pc0=$('#pressLocation .city0').text();
					if(!pC0[i]){f=0}
					if(city_cn0.split(',')[city_cn00.split(',').indexOf(pC0[i])]!=pc0){
						f=0;
					}
					if(f && pL.is('.city1') && pC1[i]!=pt){
						f=0;
					}
					if(f && pL.is('.city2') && pC2[i]!=pt){
						f=0;
					}
				}
				if(f){res.push(i)}
			}
		}
		loadMedia(res,pA,pUA,c);
	}
	
	if(id=='bookSechGO'){
		var c='book',res=[],sech=!opt1,pS=$('#'+c+'Sech').val().trim(),pSA=ZLR(pS),
			MA=MediaURLA(c),pA=MA[0],pUA=MA[1];

		if(!pS && sech){
			res=seqA(0,books.split(',').length);
		}else if(!sech){
			var lf=L[c+'fav'].split(',');
			for(var i=lf.length-1;i>-1;i--){
				var pi=pA.indexOf(lf[i]);
				if(pi>-1){
					res.push(pi)
				}
			}
		}else{
			for(var i=pA.length-1;i>-1;i--){
				var pi=pA[i],pui=pUA[i],f=1;
				if(pS){
					for(var j=pSA.length-1;j>-1;j--){
						if(pi.indexOf(pSA[j])<0 && pui.indexOf(pSA[j])<0){
							f=0;
							break;
						}
					}
				}
				if(f){res.push(i)}
			}
		}
		loadMedia(res,pA,pUA,c);
	}
	
	if(me.is('.mediaSechOK')){
		$('#zrMedia').hide();
		clk(me.prev()[0],1);
	}
	if(id=='zmediaBack'){
		$('#zrMedia').hide();
		clk($('#'+tabact+'SechGO')[0],1);
	}
	if(id=='zmediaOut'){
		$('#zmediaCode').val(L[tabact+'fav']).toggle()
	}
	if(id=='zmediaIn'){
		var zC=$('#zmediaCode'), v=zC.val()||L[tabact+'fav'];
		if(zC.is(':visible')){
			L[tabact+'fav']=v;
			clk($('#'+tabact+'SechGO')[0],1);
			zC.hide();

		}else{
			zC.val('').fadeIn();
		}
	}


	if(id=='zRAudioClear'){
		var aP=$('#audioPlay'), a=aP[0];
		if(a.paused || a.ended){
			
		}else{
			a.pause();
		}
		$('#audioTxt').val('');
		$('#audioParaA,#audioPlay2').empty();
		$('#zRaudioPlay,#zRAudioPause').hide();

	}

	if(id=='zRAudioPlay2'){
		L.audioplaying=2;
		var aP=$('#audioPlay'),aP2=$('#audioPlay2').show(), a=aP[0], s=$('#audioTxt').val(), sA=txt2A(s),l=sA.length,
		A=Arrf(function(t){return uriRe.test(t)?'<p data-src="'+t+'" title="'+fn1(t)+'">'+XML.encode(fn1(t).replace(/.+\//,''),1)+'</p>':XML.wrapE('p',XML.encode(t,1))}, sA), A0=[];
		
		$('#audioParaA p').each(function(){A0.push($(this).attr('data-src')||$(this).text())});
		var newP=sA.join('\n')!=A0.join('\n');

	//	$('#audioPlay').hide();
		if(!aP2.find('audio').length || newP){
			aP2.html(copyA('<audio controls="controls" hidden></audio>',l));
		}
		aP2.show();
		if(newP){
			$('#audioParaA').html(A.join(''));

			var t='';
			for(var i=0;i<l;i++){
				t=sA[i].trim();
				if(t){
					$('#audioParaA p').eq(i).click();
					$('#zRAudioPause').fadeIn();
					$('#zRaudioPlay').show();
					break;
				}
			}
			
		}else{
			var ap=$('#audioParaA p'), ap0=ap.filter('.audioPlay').eq(0);
			if(ap0.length){
				a=aP2.find('audio').eq(ap0.index()).show();
				if(a.attr('src')){
					a=a[0];
					if(a.paused){
						a.play();
					}else if(a.ended){
						ap.eq(i+1<l?i+1:0).click();
					}else{
						a.pause();
					}
				}else{
					ap0.click();
				}
			}else{
				ap.eq(0).click();
			}
		}

	}

	if(pid=='NoteOpt'){
		if(id=='NoteClear'){
			L.note='';
			$('#NoteOpt+#note').html('');
			return;
		}

		if(id=='NoteCode'){
			var iscode=me.text()=='code';
			me.text(iscode?'visibility':'code');
			$('#NoteOpt+#note').html(iscode?XML.encode(L.note):L.note);
			
		}else if(id=='NoteAudio'){
			$('#audioTxt').val($('#NoteOpt+#note').text().trim());
			$('#zRAudioPlay2').click();
		}

	}

	if(pid=='color'){
		me.addClass('toggle').siblings().removeClass('toggle');
		toggleColor();
	}

	if(id=='FeedAdd'){
		RssTool.ini('rssAdd').show('rssAdd');
		if($('#zRhead:visible').length==0){
			$('#zRbar').click();
		}
	}
	if(me.is('.FeedAdd[data-u]')){
		RssTool.ini('rssAdd').show('rssAdd');
		$('#rssAdd #urlAdd').val(me.attr('data-u'));
		$('#RssAdd').click();
	}
	
	if(/^feed/.test(id) && pid=='rss'){
		var rid=id.replace('feed','rss');
		RssTool.ini(rid).show(rid);
	}

	if(id=='zrDialogOK'){
		L.dia=me.attr('data-dia');
		$('[data-dia='+L.dia+']').not(me).eq(0).click();
	}
	if(id=='zrDialogOff'){
		L.dia=0; me.parents('#zrMask').fadeOut().nextAll().removeClass('opaq');
	}

	if(id=='imgdlTheme'){
		var imgU=(L[L.theme]||'').replace(/^theme$/,'');
		saveAs(imgU, imgU.replace(/.+[/]/,''));
	}
	if(id=='themeOpt'){
		var v=me.val();
		if(v=='‹'){$('#zRhead #opac, #imgdlTheme').hide(); $('#theme_pics').html('')}else{
			theme_pics();
			var thm=(L[L.theme]||'').replace(/^theme$/,'');
			if(thm){$('#imgdlTheme').show()}
			if(thm || $('#theme_pics img').length || L.theme=='bing'){$('#zRhead #opac').show()}
		}
		me.val(v=='‹'?'›':'‹');
	}

	if(id=='adv'){
		$('#FeedBurn :radio:eq(0)').click();
		$('#FeedBurn > label:gt(1)').add('#RSSInOut').toggle(me.prop('checked'));
	}

	if(/search(Pos|Neg)/.test(id) || me.is('.negimg')){
		var isimg=me.is('.negimg'),ispos=id=='searchPos';
		if(isimg){
			id='imgNeg';
		}
		var tip=gM(id+'Tip'), k0=L[id], k1=$('#sechEntry').val();
		
		if(L.dia == me.attr('data-dia')){
			Dialog(null, true);
			var t=$('#zrDialogInput').val().trim();
			L[id] = FtA(t.toLowerCase()).join(',');
			
			if(isimg){
				if(L[id]){
					var regA=L[id].split(',');
					$('#zRentries img[data-src]').each(function(){
						var s=$(this).attr('data-src');
						for(var i=0,l=regA.length;i<l;i++){
							if((new RegExp(regA[i])).test(s)){
								$(this).remove();
								break;
							}
						}
					});
				}
			}else{
				Entry.searchKey(id.substr(-3));
			}
			setTimeout(Load.ed,300)

		}else{
			me.add('#zrDialogOK').attr('data-dia', Time.now5());
			Dialog('prom', null, itv('', isimg?'block':(ispos?'add':'remove'))+gM(id)+': '+spanRed(XML.encode(k0, true))+'\n\n'+tip+(ispos?'\n\n'+gM('sechEntryTip'):''), k0)
		}
	}


	if(me.is('.zRMid')){
		var isleft=me.prev().is('#zRLeft');
		$('#zR'+(isleft?'Left':'Right')).toggle();
		$('#zRList').width(98-19*$('#zRLeft,#zRRight').filter(':visible').length+'%');
	}
	if(id=='zRbar'){if($('#themeOpt').val()=='‹'){$('#themeOpt').click()} $('#zRhead').toggle()}

	if(id=='selAll'){$('.sele').removeClass('seled').toggleClass('sel', $('#selAll').prop('checked')); Entry.selThen()}
	if(id=='selToggle'){$('.sele').removeClass('seled').toggleClass('sel'); Entry.selThen()}

	if(me.is('.SidebarToggle')){$('.zRMid').click()}
	if(me.is('.FulscrToggle')){
		$('#navOpt,#zRhead').toggle();
		$('#zRLeft,#zRRight').children('[id]').toggle();
	}
	if(id=='Top1'){Entry.scrolB()}
	if(id=='Top0'){Entry.scrolT()}

	if(me.is('.page0')){Entry.scrol(true, function(){
			setTimeout(function(){$('.seled').prev().children('details').children('summary').click().focus()}, 200)
		})
	}
	if(me.is('.page1')){$(($('.seled').length?'.seled + ':'')+'.sele').eq(0).children('details').children('summary').click().focus()}


	if(me.is('.rssToolOff')){
		RssTool.hide();
	}

	if(id=='noRssOff'){
		$('#rssAdd > #noRss').slideUp();
	}
	if(id=='RssAdd'){

		var rssUrl=$('#rssAdd #urlAdd');
		var url=rssUrl.val().trim(), file=$('#upOpml')[0].files[0];
		if(!url && !file){
			return;
		}

		//Load.ing('RssAdd',3000);
		Load.ingProg('RssAdd');

		if(file){
			var reader = new FileReader();
			reader.onload = function(e){
				var data=e.target.result, d=$(data), c, isRss=0, isAtom=0, isOpml=0;
				if(d.is('outline')){isOpml=1; c=d.siblings('outline').add(d)}else{
					c=d.find('outline').eq(0).siblings('outline').add(d.find('outline').eq(0));
					if(c.length){isOpml=1}else{

						if(d.is('channel')){isRss=1; c=d}else{
							c=d.find('channel').eq(0);
							if(c.length){isRss=1}else{
								if(d.is('feed')){isAtom=1; c=d}else{
									c=d.find('feed').eq(0);
									if(c.length){isAtom=1}else{

									}
								}
							}
						}
					}
				}


				if(isRss+isAtom){
					var u=c.find('[rel=self]').eq(0);
					if(!u.length){u=c.find('link')}
					u=u.text().trim()||u.attr('href');

					if(u && !/^https*:/.test(u)){u = H+u}
					if(!u){
						Load.err('no feed Url!', 'RssAdd');
					}else{
						Entry.RssAddData(data, H_u(u));
					}

				}else if(isOpml){
					//console.log(isOpml);
					Folder.addFeedOpml(d);
				}

			}
			reader.readAsText(file);

		}else if(url){

			if(!/^http/.test(url)){url = H+url}
			if(!/\./.test(url)){url += '.com'}

			var addId=$('#RssAddIds option:selected');
			if(addId.attr('data-m') || addId.attr('data-s')){
				var blogId=$('#RssAddId').val();
				if(addId.attr('data-u').replace('%id', fn0(blogId))==url){
					$('#feedUrl input, #feedHome input').val(url);
					$('#feedName input').val((addId.attr('data-n')||'').replace('%id', blogId) || blogId +'@'+addId.text());
					$('#feedDesc').find('input').val(function(){
						return (addId.attr('data-'+$(this).parent().attr('data-feed'))||'').replace('%id', blogId) || ''
					});


					loadrule(addId);


					$('#RssAdd2').click();
					Load.succ('RssAdd');
					return;
				}else{
					Load.succ('RssAdd');
				}
			}

			Entry.RssAdd(url);
		}
	}

	if(/^logo$/.test(id)){Entry.update('pause')}
	if(id=='out'){me.nextAll().fadeToggle()}

	if(/^(un)?(fav|tag|del|markread)$/.test(id)){
		var sel=$('#zRentries > .sel'), fUA=[], iUA=[];
		if(!sel.length){return}

/*
		sel.each(function(){
			var iU=$(this).find('.articleHead').eq(0).find('.navWeb').attr('data-u'),
				fU=$(this).find('.entrySource').eq(0).attr('data-u');
			iUA.push(iU);
			if($(this).find('.entryHead .entryTitle.bold').length){
				fUA.push(fU);
			}
		});
*/

		var cla=id.replace('un',''), u=/un/.test(id), c=cla.substr(0,1);
		var act=sel.find('.entryAction').children('.'+(id=='untag'?'tag':id));	//(cla=='markread'?(u?cla:'un'+cla):id)

/*
		if(c=='d'){

			if(L.dia != me.attr('data-dia')){
				me.add('#zrDialogOK').attr('data-dia', Time.now5());
				Dialog('conf', null, itv('','clear')+gM('delAlert'));
				return
			}
			Dialog(null, true);
		}
*/
		if(c=='m'){c='r'}

		if(id=='untag'){var tag='';L.FT=''; act.text('')}
		if(id=='tag'){
			var tags=$('#Sel > #tags');
			if(!tags.is(':visible')){tags.fadeIn(); return}
			var tag=tags.val().trim();
			tags.fadeOut();
			if(!tag){return}
		}

		var cb=Entry.list;
		
		if(/tag/.test(id)){
			
			Entry.act(c, tag, iUA, cb);
		}else{
			//act.click();
			act.each(function(){$(this).click()})
		}
		

		/*
		if(c=='f' && L.FO!=' '){
			cb=function(){
				sel.each(function(){
					var ttl=gM((u?'':'un')+'fav');
					$(this).find('.entryHead .entrySource + i').toggleClass('fav', !u).toggleClass('unfav', u).attr('title', gM((u?'':'un')+'fav')+hkn+'S').html('favorite'+(u?'_border':''));
					$(this).find('.entryAction span:eq(0)').attr('title', gM((u?'':'un')+'fav')+hkn+'S').html('favorite'+(u?'_border':''));
				});
				Entry.selThen();
			};
		}
		if(c=='d'){
			sel.remove();
			cb=function(){
				if($('#zRentries > .sele').not('.sel').length){
					//sel.remove();
					if(fUA.length){
						var n=fUA.length,FUA=countA(fUA), fdA=FUA[0], fdn=FUA[1], fn=fdA.length;
						for(var i=0;i<fn;i++){
							var fU=fdA[i], fUn=fdn[i], feed=$('#zRFolder .feed[data-u="'+fU+'"]');
							feed.attr('data-cnt',function(i,v){return Cnt(CntN(v)-fUn)});
							feed.parents('details').find('.fo').attr('data-cnt',function(i,v){return Cnt(CntN(v)-fUn)});
						}
						$('#Allcnt').text('/ '+(CntN(v)-n));

						Entry.selThen();
						$('#FulscrToggle').attr('data-allcnt',function(i,v){return /^\d+$/.test(v)?CntN(v)-n:v});
					}
				}else{
					Entry.list();
				}
			};
		}
		Entry.act((c=='e'?'d':c), (c=='e'?2:(c=='t'?tag:(u?0:1))), iUA, cb);
		*/
	}

	if(/^Out(URL|CSV|.+ML)$/.test(id)){
		var sel=$('#zRentries > div').filter('.sel'), t='', ttl=document.title, n=sel.length, cnt=n, d=new Date(), cb;

		if(id=='OutURL'){
			sel.each(function(){
				t+=$(this).find('.articleHead .navWeb').attr('data-u')+'\r\n';
			});
			saveText(t, ttl+'_'+Time.now()+'.txt');
			return;
		}

		if(id=='OutCSV'){
			sel.each(function(){
				t+=$(this).find('.articleHead .navWeb').attr('data-u')+'\t'+
					$(this).find('.articleHead .navWeb1').text()+'\r\n';


			});
			saveText(t, ttl+'_'+Time.now()+'.csv');
			return;
		}

		if(/Out[ZX]ML/.test(id)){
			cb=function(){
				t=[Head.xml, Head.rss,
					'<channel>', XML.wrapE('title', XML.wrap(ttl)),
					'<atom:link href="'+H+'zzllrr.rss.reader/'+d.getTime()+'" rel="self" type="application/rss+xml" />',
					XML.wrapE('link', HOM.ZR),
					XML.wrapE('description', XML.wrap(gM('zdesc2'))),
					XML.wrapE('generator', XML.wrap(gM('zname'))),
					zzllrr,
					XML.wrapE('lastBuildDate', d),t].join('\n')+'</channel>\n</rss>';

				saveText(id=='OutXML'?t:ZML.encode(t.substr(Head.xml.length)), ttl+'_'+Time.now()+'.'+id.substr(3).toLowerCase());
			};
		}
		if(/OutHTML/.test(id)){
			cb=function(){
				t=outHTML(t);
				saveText(t, ttl+'_'+Time.now()+'.html');
			};
		}

		sel.each(function(){
			var iU=$(this).find('.articleHead .navWeb').attr('data-u');
			zEn.get(iU, function(obj){
				var j=obj, fe=$('#zRFolder .feed[data-u="'+j.s+'"]');

				d.setTime(j.p*1000);

				if(/Out[XZ]ML/.test(id)){
					t+=['\t<item>',
						XML.wrapE('title', XML.wrap(j.h)),
						XML.wrapE('link', XML.wrap(iU)),
						XML.wrapE('author', XML.wrap(j.a||'')),
						XML.wrapE('category', XML.wrap(j.g || j.t||'')),
						XML.wrapE('pubDate', d),
						XML.wrapE('content:encoded', XML.wrap((j.l||'').replace(/ data-src=/g,' src='))),
						XML.wrapE('source', XML.wrap(fe.attr('data-n')||'')).replace('<source','<source url="'+XML.encode(j.s)+'"'),
						XML.wrapE('comments', XML.wrap(j.c||'')),
						XML.wrapE('wfw:commentRss', XML.wrap(j.e||''))+
						'\n\t</item>\n'].join('\n\t\t');
				}
				if(/OutHTML/.test(id)){
					t+=detail(j.h,
						DCtv('article',[
							XML.wrapE('h2',href(iU,j.h)),
							'<div class=meta>',
							XML.wrapE('p',gM('from')+': '+href(j.s,fe.attr('data-n'))+(j.a?' '+gM('by')+': '+j.a:'')),
							(j.g||j.t?XML.wrapE('p',j.g||j.t):''),
							XML.wrapE('p', d.toLocaleString()),
							dc,
							XML.wrapE('article', (j.l||'').replace(/ data-src=/g,' src=')),
							(j.c?XML.wrapE('p',j.c):'')
						].join('\n')));
				}
				cnt--;

				if(cnt==0){cb()}
			});
		});
	}

	if(id=='RssBurn'){
		clk($('#feedBurn')[0]);

		$('#feedUrl input').val(me.attr('data-u'));
		$('#feedName input').val(me.attr('data-n'));
		$('#feedDesc input').val(me.attr('data-d'));
		$('#feedHome input').val(me.attr('data-h'));
	}

	if(id=='RssAdd2'){
		var u=$('#feedUrl > input').val().trim(), feed=$('#zRFolder .feed[data-u="'+u+'"]'), fe={}, a, v;
		if(feed.length){
			$('#FeedEdit [data-feed]').each(function(){
				a=$(this).attr('data-feed');
				v=$(this).children().val().trim();
				feed.attr('data-'+a, v);
				if(a=='n'){feed.text(v)}
				if(a=='h'){
					var h=v||(H+H_W(feed.attr('data-u')));
					feed.prev().find('.NavWeb').attr('title',h);
				
				}

				fe[a]=v;
			});
			zFe.get(u, function(){
				zFe.put(fe, function(){
					Load.succ(id);
					if(CLOUD){SF.save()}
				});
			});

		}else if(u){

			$('#FeedEdit [data-feed]').each(function(i){
				a=$(this).attr('data-feed');
				v=$(this).children().val().trim();
				if(a=='h'){
					v=$('#feedUrl').children().val().trim();
				}
				fe[a]=v;
			});
			var fA=jSon(L.Folder), FO=L.FO.trim();

			if(fA.length && FO){
				var i=$('#zRFolder .fo[data-n="'+FO+'"]').parents('details').index();
				fA[i].f +=' '+H_w1(u);
				fA[i].f = fA[i].f.trim();
			}else{
				var fo=Folder.getNew();
				fA.push({n:fo,f:H_w1(u)});
				L.FO=fo;
			}

			L.Folder=JSON.stringify(fA);
			L.FE=u;
			if(CLOUD){SLK.save()}
			//console.log(fe);
			zFe.put(fe, function(){
				$('#Alls .zRnav[id]').removeClass('zRnav');
				$('#zRList').removeAttr('style');
				$('#zRentries').empty();
				Folder.list(true, function(){if(CLOUD){SF.save()}});
				Load.succ('RssAdd2');
			});
		}
	}

	if(id=='RssOut'){
		var u=$('#feedUrl > input').val().trim(), fe={}, a, v, i, out=[], ext=$('#rssInOut').val();
		if(!u){return}

		$('#FeedEdit [data-feed]').each(function(i){
			a=$(this).attr('data-feed');
			v=$(this).children().val().trim();
			iD=this.id;
			fe[a]=v;
			if(i>3){
				out.push(XML.wrapE(iD, XML.wrap(v)));
			}
		});

		if(/[XZ]ML/.test(ext)){

			var outs=[Head.xml,Head.rss,
				'<channel>',
				XML.wrapE('title', XML.wrap(fe.n)),
				'<atom:link href="'+fe.u+'" rel="self" type="application/rss+xml" />',
				XML.wrapE('link', H+H_W(fe.h?fe.h:fe.u)),
				XML.wrapE('description', XML.wrap(XML.decode(fe.d))),
				XML.wrapE('generator', XML.wrap(gM('zname'))),
				zzllrr,
				XML.wrapE('lastBuildDate', new Date()),
				out.join('\n'),'</channel>','</rss>'].join('\n'), X=ext=='XML';
			saveText(X?outs:ZML.encode(outs.substr(Head.xml.length)), fe.n+'_'+Time.now()+'.'+ext.toLowerCase());

		}else{
			$('#zrDialogOK').attr('data-dia', Time.now5());
			Dialog('prom2', null, itv('','cast')+gM('out')+' RSS (JSON)\n'+fe.n, JSON.stringify(fe));
		}
	}


	if(id=='RssIn'){
		var u=$('#feedUrl > input').val().trim(), fe={}, a, v, i, out=[], ext=$('#rssInOut').val();

		if(ext=='XML'){

			clk($('#feedAdd')[0]);

		}else{

			if(L.dia == me.attr('data-dia')){
				Dialog(null, true);
				var t=$('#zrDialogInput').val().trim();
				if(t){
					try{
						fe=JSON.parse(t);
						$('#FeedEdit [data-feed]').each(function(i){
							a=$(this).attr('data-feed');
							$(this).children().val(fe[a]);
						});
						Load.succ(id);
					}catch(e){
						Load.err('bad JSON',id);
					}
				}
			}else{
				me.add('#zrDialogOK').attr('data-dia', Time.now5());
				Dialog('prom', null, itv('','cast')+gM('In')+' RSS (JSON)', '')
			}
		}
	}
	
	if(me.is('.DelAll')){
		$('.sele').removeClass('seled').addClass('sel');
		$('#selAll').prop('checked', true);
		$('#Pager > #page').val(1);
		$('#del').click();
	}
	
	if(me.is('.Reload')){
		Entry.list();
	}
	
	if(id=='MrdAll'){
		$('.sele').removeClass('seled').addClass('sel');
		$('#selAll').prop('checked', true);
		$('#markread').click();
	}

	if(id=='Settings'){
		$('#settings').slideToggle();
		me.toggleClass('on');
	}
	
	if(me.is('a,:checkbox')){
		$('body')[0].tabIndex=0;
		$('body').focus();
	}
}

function cng(obj){
	var me=$(obj), id=me.attr('id'), v=me.val();
	if(id=='upOpml'){clk($('#RssAdd')[0])}


	if(/sort/.test(id)){
		if(id=='sort'){me.next('#sortType').toggle(v!='sort')}
		L[id]=v;
		Entry.list();
	}
	if(id=='fontSp'){$('html').removeClass('sp0 sp1 sp2 sp3 sp4 sp5').addClass(v); L[id]=v}
	if(id=='fontSz'){$('html').removeClass('sz0 sz1 sz2 sz3 sz4 sz5').addClass(v); L[id]=v}
	if(id=='fontPd'){$('.sele').removeClass('pd0 pd1 pd2 pd3 pd4 pd5').addClass(v); L[id]=v}
	if(id=='font'){$('#zRentries').css('font-family',v);L[id]=v}
	
	
	if(id== 'opac'){toggleColor()}
	if(id=='theme'){
		L.theme=v;
		if($('#themeOpt').val()=='‹'){theme_pics()}

		toggleColor();
	}

	if(id=='imgOpts'){L.imgOpts=v; Entry.list()}

	if(/entry(Date|Type)/.test(id)){
		$('#zROpts #Pager > #page').val(1);
		Entry.list();
	}

	if(id=='RssAddIds'){
		var RAI=$('#RssAddId'), blogId=RAI.val().trim(),du=me.children('[value='+v+']').attr('data-u'),dus=du.split('%id')
		u=du.replace('%id',blogId);
		RAI.prev().text(dus[0]);
		RAI.next().text(dus[1]);
		$('#rssAdd #urlAdd').val(u);

	}
	if(id=='RssAddIds2'){
		if(v){
			var o=me.children('[value='+v+']');
			loadrule(o);
		}
	}

	if(id=='urlList'){
		$('#rssAdd #urlAdd').val(v);
	}

	$('body')[0].tabIndex=0;
	$('body').focus();
	if(CLOUD){SLK.save()}
}

function loadrule(obj){
	$('#FeedEdit [data-feed]').not('#feedBasic td').each(function(){
		var f=$(this).attr('data-feed');
		var t=obj.length?obj.attr('data-'+f):obj[f];
		//console.log(f,t);
		$(this).children().val(t||'');
	});
}
function outHTML(t){
	return ['<html xmlns="'+xhtml+'"><head><title>',
				gM('zname'),
				'</title><meta charset="UTF-8">',
				csslib.katex,
				'<style>body{background:rgb(245,245,245);color:rgba(0,0,0,0.87);padding:10px 10% 10px 10%} .article{zoom:1.3} .article>.meta{background: rgba(220, 220, 220,.5);text-align:center;padding:5px} .article>article{background:white;padding:50px} .meta *{margin:5px}</style></head><body>',
				XML.wrapE('h6',href(HOM.ZR,gM('zname'))+' '+Time.local()),
				t,'</body></html>'].join('\n')
}
/*
chrome.storage.onChanged.addListener(function (objCng, areaName){
	if(areaName=='sync'){ // n "0" "1" "2" "3"... "fU" "fe"
		for(var k in SSk){
			if(k in objCng){
				L[k]=objCng[k].newValue;
			}
		}
	}

});
*/
function ubb2html(t0, webview){

	var t=t0, a0='<a target="_blank" href="', a1='</a>', r0=/^[^\]]+\]|\[[^\[]+\]$/g;
	var tA=ZLR('b bold i italic u h\\w sub sup center cite code dfn em kbd samp strong var big del mark pre strike ul ol p q s wbr list \\* quote');

	for(var i=tA.length-1;i>-1;i--){
		t=t.replace(new RegExp('\\[\\/?'+tA[i]+'\\]','gi'), function(w){return w.replace('[','<').replace(']','>').replace(/list|\*/g,'li').replace('quote','q').replace('bold','b').replace('italic','i')});
	}

	tA=ZLR('red green blue white purple yellow violet brown black pink orange gold #\\w*');
	for(var i=tA.length-1;i>-1;i--){
		t=t.replace(new RegExp('\\[\\/?'+tA[i]+'\\]','gi'), function(w){return w.substr(1,1)=='/'?'</font>':w.replace('['+tA[i]+']','<font color='+tA[i]+'>')});
	}

	tA=ZLR('img image');
	for(var i=tA.length-1;i>-1;i--){
		t=t.replace(new RegExp('\\['+tA[i]+'\\].*?\\[\\/'+tA[i]+'\\]','gi'), function(w){return '<img src="'+w.replace(r0,'')+'" />'});
	}

	tA=ZLR('url download ref refer');
	for(var i=tA.length-1;i>-1;i--){
		t=t.replace(new RegExp('\\['+tA[i]+'\\].*?\\[\\/'+tA[i]+'\\]','gi'), function(w){return a0+w.replace(r0,'')+'">'+w.replace(r0,'')+a1});
		t=t.replace(new RegExp('\\['+tA[i]+'=[^\\]]*?\\].*?\\[\\/'+tA[i]+'\\]','gi'), function(w){return a0+w.split(']')[0].split('=')[1]+'">'+w.replace(r0,'')+a1});
	}

	tA=ZLR('fly move');
	for(var i=tA.length-1;i>-1;i--){
		t=t.replace(new RegExp('\\['+tA[i]+'\\].*?\\[\\/'+tA[i]+'\\]','gi'), function(w){return '<marquee direction=right behavior=scroll scrollamount=10 scrolldelay=200>'+w.replace(r0,'')+'</marquee>'});
	}

	tA=ZLR('left right');
	for(var i=tA.length-1;i>-1;i--){
		t=t.replace(new RegExp('\\['+tA[i]+'\\].*?\\[\\/'+tA[i]+'\\]','gi'), function(w){return '<p align='+w.split(']')[0].substr(1)+'>'+w.replace(r0,'')+'</p>'});
	}

	tA=ZLR('color size font');
	for(var i=tA.length-1;i>-1;i--){
		t=t.replace(new RegExp('\\['+tA[i]+'=[^\\]]*?\\].*?\\[\\/'+tA[i]+'\\]','gi'), function(w){return '<font '+w.split(']')[0].substr(1).replace(/^font/i,'face')+'>'+w.replace(r0,'')+'</font>'});
	}

	tA=ZLR('align');
	for(var i=tA.length-1;i>-1;i--){
		t=t.replace(new RegExp('\\['+tA[i]+'=[^\\]]*?\\].*?\\[\\/'+tA[i]+'\\]','gi'), function(w){return '<p '+w.split(']')[0].substr(1)+'>'+w.replace(r0,'')+'</p>'});
	}

	tA=ZLR('rm mp dir qt');
	for(var i=tA.length-1;i>-1;i--){
		t=t.replace(new RegExp('\\['+tA[i]+'=[^\\]]*?\\].*?\\[\\/'+tA[i]+'\\]','gi'), function(w){return '<video controls=controls width='+w.split(']')[0].split('=')[1].replace(',',' height=')+' src="'+w.replace(r0,'')+'">'+w.replace(r0,'')+'</video>'});
	}

	t=t.replace(/\[list=[^\]]*?\].*?\[\/list\]/gi, function(w){return '<ol type='+w.split(']')[0].split('=')[1]+'>'+w.replace(r0,'')+'</ol>'});
	t=t.replace(/\[w\].*?\[\/w\]/gi, function(w){var w0=w.substr(3, w.length-7), wb=webview?'webview':'iframe';
		return '<'+wb+' src="'+u+'" style="width:98%;height:500px" />'});
	t=t.replace(/\[email\].*?\[\/email\]/gi, function(w){return a0+'mailto:'+w.replace(r0,'')+'">'+w.replace(r0,'')+a1});
	t=t.replace(/\[email=[^\]]*?\].*?\[\/email\]/gi, function(w){return a0+'mailto:'+w.split(']')[0].split('=')[1]+'">'+w.replace(r0,'')+a1});
	return t;
}


function urlencode(u){
	return u.replace(/ http:\/\//g,' ').replace(/^http:\/\//g,'').replace(/https:\/\//g,'>').replace(/\.com\.cn/g,'^').replace(/\.com/g,'@').replace(/\.cn/g,'<').replace(/www\./g,';').replace(/www/g,'*').replace(/paper/g,'+').replace(/news/g,'$').replace(/\n/g,' ')
}
function urldecode(u){
	return u.replace(/>/g,'https://').replace(/\^/g,'.com.cn').replace(/@/g,'.com').replace(/</g,'.cn').replace(/;/g,'www.').replace(/\*/g,'www').replace(/\+/g,'paper').replace(/\$/g,'news').replace(/ /g,'\n')
}

function noti(icon,title,text,type,json,cb){
	var opt={"iconUrl":icon||'img/ZRL.png',"title":title||gM('Zname'),"message":text,"type":type||'basic',"isClickable":true};
	if(json){$.extend(opt,json)}
	chrome.notifications.create('123',opt,function(d){});
	chrome.notifications.onClicked.addListener(function (d){if(d=='123'){chrome.notifications.clear('123',cb)}});
}

function copy2clipboard(t){
    $('body').append('<input id=zzllrrclip hidden type=text value="'+t+'" />');
    $('#zzllrrclip').select();
    document.execCommand('copy', false, null);
    $('#zzllrrclip').remove();
}