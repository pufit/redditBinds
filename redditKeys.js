// ==UserScript==
// @name RedditKeys
// @description Бинды для редита
// @author Artem B.
// @license MIT
// @version 1.0
// @include https://*.reddit.com/*
// @include https://*.vk.com/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// ==/UserScript==

indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

up = $('[data-click-id=upvote]')[0];
down = $('[data-click-id=downvote]')[0];


$('body').keydown(function(e){
  if(e.keyCode === 38 && (indexOf.call(up.children[0].classList, 'cZdGOJ') >= 0 || indexOf.call(up.children[0].classList, 'kDEiCN') >= 0)){
    up.click();
    return false
  }
  if(e.keyCode === 40 && (indexOf.call(down.children[0].classList, 'gquANw') >= 0 || indexOf.call(down.children[0].classList, 'kQgIul') >= 0)){
    down.click();
    return false
  }
})
