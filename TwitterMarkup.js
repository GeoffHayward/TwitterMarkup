/*
* Static class:	TwitterMarkup
* Version:	23/05/2012 v1.0.0
*  
* Use for marking up Twitter tweets’: urls, usernames and hashtags or all of them in one.
*
*/ 
var TwitterMarkup = {
	parseURL: function(pText) {
		return pText.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/=]+/g, function(url) {
			return url.link(url).replace('href=', 'target="_blank" href=');
		});
	},
	usernames: function(pText){
		return pText.replace(/[@]+[A-Za-z0-9-_]+/g, function(u) {
			return u.link("http://twitter.com/"+u.replace("@","")).replace('href=', 'target="_blank" href=');
		});
	},
	hashtags: function(pText){
		return pText.replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
			return t.link("http://twitter.com/search?q="+t.replace("#","%23")).replace('href=', 'target="_blank" href=');
		});
	},
	applyAllToString: function(pText){
		return TwitterMarkup.hashtags(TwitterMarkup.usernames(TwitterMarkup.parseURL(pText)));
	},
	applyAllToNode: function(pNode) {
		pNode.innerHTML = TwitterMarkup.applyAllToString(pNode.innerHTML);
	}
};