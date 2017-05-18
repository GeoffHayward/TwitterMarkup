/*
* Static object
*   TwitterMarkup
*   
* Description 
*   You can use this object to markup DOM elements that hold raw Twitter tweets urls, usernames and hashtags.
* 
* TwitterMarkup by Geoff Hayward - http://geoffhayward.eu
*/ 
var TwitterMarkup = (function(){
	
    /*
    * Performs the Twiter markup transform on a given DOM element, and the element's sub-elements.
    */
    function transform(element){
        var ts = element.innerHTML;
        ts = _parseURLs(ts);
        ts = _parseUsernames(ts);
        ts = _parseHashtags(ts);
        element.innerHTML = ts;
    };
         
    function _parseURLs(tweetsString) {
        return tweetsString.replace(/(https?:\/\/t.co\/[A-Z0-9-_]{10})/ig, function(match, group1) {
            return '<a href="' + group1 + '" target="_blank">' + match + '</a>';
        });
    };
         
    function _parseUsernames(tweetsString){
        return tweetsString.replace(/[@]+([A-Z0-9_]+)/ig, function(match, group1) {
            return '<a href="http://twitter.com/' + group1 + '" target="_blank">' + match + '</a>'; 
		});
    };
          
    function _parseHashtags(tweetsString){
        return tweetsString.replace(/[#]+([A-Za-z0-9-_]+)/ig, function(match, group1) {
            return '<a href="http://twitter.com/search?q=%23' + group1 + '" target="_blank">' + match + '</a>'; 
        });
    };
	
	return {
		transform : transform
	};
    
})();
