/*
* Static object
*   TwitterMarkup
*   
* Description 
*   You can use this object to markup raw Twitter tweets urls, usernames and hashtags.
* 
* TwitterMarkup by Geoff Hayward - http://geoffhayward.eu
*/ 
var TwitterMarkup = {
	
    /*
    * Consider method as public 
    * 
    * This performs the markup transform on a DOM element that contains raw Twitter
    * tweets.
    */
    transform: function(element){
        var ts = element.innerHTML;
        ts = TwitterMarkup._parseURLs(ts);
        ts = TwitterMarkup._parseUsernames(ts);
        ts = TwitterMarkup._parseHashtags(ts);
        element.innerHTML = ts;
    },
    
    /*
    * Consider method as private.
    */      
    _parseURLs: function(tweetsString) {
        return tweetsString.replace(/(https?:\/\/t.co\/[A-Z0-9-_]{10})/ig, function(match, group1) {
            return '<a href="' + group1 + '" target="_blank">' + match + '</a>';
        });
    },
    
    /*
    * Consider method as private.
    */      
    _parseUsernames: function(tweetsString){
        return tweetsString.replace(/[@]+([A-Z0-9_]+)/ig, function(match, group1) {
            return '<a href="http://twitter.com/' + group1 + '" target="_blank">' + match + '</a>'; 
	});
    },
    
    /*
    * Consider method as private.
    */      
    _parseHashtags: function(tweetsString){
        return tweetsString.replace(/[#]+([A-Za-z0-9-_]+)/ig, function(match, group1) {
            return '<a href="http://twitter.com/search?q=%23' + group1 + '" target="_blank">' + match + '</a>'; 
        });
    }
    
};
