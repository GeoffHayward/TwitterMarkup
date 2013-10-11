TwitterMarkup
=============

A simple JavaScript static object that will marking up a string of Twitter tweets. It marks up urls, usernames and hashtags or all of them in one.

Where the HTML is:
```html
<ul id="myTweets">
    <li>TWEET 1</li>
    <li>TWEET 2</li>
    <li>TWEET 3</li>
</ul>
```

Example: 
```javascript
TwitterMarkup.transform(document.getElementById('myTweets'));
```
