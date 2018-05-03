// ==UserScript==
// @name RedditKeys
// @description Бинды для редита
// @author Artem B.
// @updateURL https://raw.githubusercontent.com/pufit/redditKeys/master/redditKeys.js
// @downloadURL https://raw.githubusercontent.com/pufit/redditKeys/master/redditKeys.js
// @license MIT
// @version 1.0
// @include https://*.reddit.com/*
// @include https://*.vk.com/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// ==/UserScript==

var up, down,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };


function main(){
  var wind = $('.exxCWQ');
  if (wind.length){
    var b = wind[0].children[0].children[0].children[0].children[0].children[0].children;
    up = b[0];
    down = b[2];
  } else {
    up = $('[data-click-id=upvote]')[0];
    down = $('[data-click-id=downvote]')[0];
  }
  
  $('body').bind('keydown', handler)
}

function handler(e){
  if (e.keyCode === 38 && (indexOf.call(up.children[0].classList, 'cZdGOJ') >= 0 || indexOf.call(up.children[0].classList, 'kDEiCN') >= 0)){
    up.click();
    return false
  }
  if (e.keyCode === 40 && (indexOf.call(down.children[0].classList, 'gquANw') >= 0 || indexOf.call(down.children[0].classList, 'kQgIul') >= 0)){
    down.click();
    return false
  }
}

main()

var loc = location.href;
setInterval(function(){
  if (location.href !== loc){
    loc = location.href;
    $('body').unbind('keydown', handler)
    main();
    console.log(loc)
  }
}, 100);
