/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,i=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},a=/constructor/i.test(e.HTMLElement),f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},d="application/octet-stream",s=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,s)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(i){u(i)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,s){if(!s){t=p(t)}var v=this,w=t.type,m=w===d,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&a)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;i(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define([],function(){return saveAs})}
!function(a){"use strict";if(a.URL=a.URL||a.webkitURL,a.Blob&&a.URL)try{return void new Blob}catch(a){}var b=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||function(a){var b=function(a){return Object.prototype.toString.call(a).match(/^\[object\s(.*)\]$/)[1]},c=function(){this.data=[]},d=function(b,c,d){this.data=b,this.size=b.length,this.type=c,this.encoding=d},e=c.prototype,f=d.prototype,g=a.FileReaderSync,h=function(a){this.code=this[this.name=a]},i="NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),j=i.length,k=a.URL||a.webkitURL||a,l=k.createObjectURL,m=k.revokeObjectURL,n=k,o=a.btoa,p=a.atob,q=a.ArrayBuffer,r=a.Uint8Array,s=/^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;for(d.fake=f.fake=!0;j--;)h.prototype[i[j]]=j+1;return k.createObjectURL||(n=a.URL=function(a){var c,b=document.createElementNS("http://www.w3.org/1999/xhtml","a");return b.href=a,"origin"in b||("data:"===b.protocol.toLowerCase()?b.origin=null:(c=a.match(s),b.origin=c&&c[1])),b}),n.createObjectURL=function(a){var c,b=a.type;return null===b&&(b="application/octet-stream"),a instanceof d?(c="data:"+b,"base64"===a.encoding?c+";base64,"+a.data:"URI"===a.encoding?c+","+decodeURIComponent(a.data):o?c+";base64,"+o(a.data):c+","+encodeURIComponent(a.data)):l?l.call(k,a):void 0},n.revokeObjectURL=function(a){"data:"!==a.substring(0,5)&&m&&m.call(k,a)},e.append=function(a){var c=this.data;if(r&&(a instanceof q||a instanceof r)){for(var e="",f=new r(a),i=0,j=f.length;i<j;i++)e+=String.fromCharCode(f[i]);c.push(e)}else if("Blob"===b(a)||"File"===b(a)){if(!g)throw new h("NOT_READABLE_ERR");var k=new g;c.push(k.readAsBinaryString(a))}else a instanceof d?"base64"===a.encoding&&p?c.push(p(a.data)):"URI"===a.encoding?c.push(decodeURIComponent(a.data)):"raw"===a.encoding&&c.push(a.data):("string"!=typeof a&&(a+=""),c.push(unescape(encodeURIComponent(a))))},e.getBlob=function(a){return arguments.length||(a=null),new d(this.data.join(""),a,"raw")},e.toString=function(){return"[object BlobBuilder]"},f.slice=function(a,b,c){var e=arguments.length;return e<3&&(c=null),new d(this.data.slice(a,e>1?b:this.data.length),c,this.encoding)},f.toString=function(){return"[object Blob]"},f.close=function(){this.size=0,delete this.data},c}(a);a.Blob=function(a,c){var d=c?c.type||"":"",e=new b;if(a)for(var f=0,g=a.length;f<g;f++)Uint8Array&&a[f]instanceof Uint8Array?e.append(a[f].buffer):e.append(a[f]);var h=e.getBlob(d);return!h.slice&&h.webkitSlice&&(h.slice=h.webkitSlice),h};var c=Object.getPrototypeOf||function(a){return a.__proto__};a.Blob.prototype=c(new a.Blob)}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content||this);
!function(){var e="RandExp",t=function(){return function e(t,n,r){function o(s,i){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!i&&u)return u(s,!0);if(a)return a(s,!0);var p=new Error("Cannot find module '"+s+"'");throw p.code="MODULE_NOT_FOUND",p}var h=n[s]={exports:{}};t[s][0].call(h.exports,function(e){var n=t[s][1][e];return o(n?n:e)},h,h.exports,e,t,n,r)}return n[s].exports}for(var a="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){function r(e){return e+(e>=97&&122>=e?-32:e>=65&&90>=e?32:0)}function o(){return!this.randInt(0,1)}function a(e){return e instanceof h?e.index(this.randInt(0,e.length-1)):e[this.randInt(0,e.length-1)]}function s(e){if(e.type===p.types.CHAR)return new h(e.value);if(e.type===p.types.RANGE)return new h(e.from,e.to);for(var t=new h,n=0;n<e.set.length;n++){var o=s.call(this,e.set[n]);if(t.add(o),this.ignoreCase)for(var a=0;a<o.length;a++){var i=o.index(a),u=r(i);i!==u&&t.add(u)}}return e.not?this.defaultRange.clone().subtract(t):t}function i(e,t){"number"==typeof t.max&&(e.max=t.max),t.defaultRange instanceof h&&(e.defaultRange=t.defaultRange),"function"==typeof t.randInt&&(e.randInt=t.randInt)}function u(e,t){var n,i,p,h,c;switch(e.type){case l.ROOT:case l.GROUP:if(e.followedBy||e.notFollowedBy)return"";for(e.remember&&void 0===e.groupNumber&&(e.groupNumber=t.push(null)-1),n=e.options?a.call(this,e.options):e.stack,i="",h=0,c=n.length;c>h;h++)i+=u.call(this,n[h],t);return e.remember&&(t[e.groupNumber]=i),i;case l.POSITION:return"";case l.SET:var f=s.call(this,e);return f.length?String.fromCharCode(a.call(this,f)):"";case l.REPETITION:for(p=this.randInt(e.min,e.max===1/0?e.min+this.max:e.max),i="",h=0;p>h;h++)i+=u.call(this,e.value,t);return i;case l.REFERENCE:return t[e.value-1]||"";case l.CHAR:var g=this.ignoreCase&&o.call(this)?r(e.value):e.value;return String.fromCharCode(g)}}var p=e("ret"),h=e("discontinuous-range"),l=p.types,c=t.exports=function(e,t){if(this.defaultRange=this.defaultRange.clone(),e instanceof RegExp)this.ignoreCase=e.ignoreCase,this.multiline=e.multiline,i(this,e),e=e.source;else{if("string"!=typeof e)throw new Error("Expected a regexp or string");this.ignoreCase=t&&-1!==t.indexOf("i"),this.multiline=t&&-1!==t.indexOf("m")}this.tokens=p(e)};c.prototype.max=100,c.prototype.gen=function(){return u.call(this,this.tokens,[])},c.randexp=function(e,t){var n;return void 0===e._randexp?(n=new c(e,t),e._randexp=n):n=e._randexp,i(n,e),n.gen()},c.sugar=function(){RegExp.prototype.gen=function(){return c.randexp(this)}},c.prototype.defaultRange=new h(32,126),c.prototype.randInt=function(e,t){return e+Math.floor(Math.random()*(1+t-e))}},{"discontinuous-range":2,ret:3}],2:[function(e,t,n){function r(e,t){this.low=e,this.high=t,this.length=1+t-e}function o(e,t){return this instanceof o?(this.ranges=[],this.length=0,void 0!==e&&this.add(e,t),void 0):new o(e,t)}function a(e){e.length=e.ranges.reduce(function(e,t){return e+t.length},0)}r.prototype.overlaps=function(e){return!(this.high<e.low||this.low>e.high)},r.prototype.touches=function(e){return!(this.high+1<e.low||this.low-1>e.high)},r.prototype.add=function(e){return this.touches(e)&&new r(Math.min(this.low,e.low),Math.max(this.high,e.high))},r.prototype.subtract=function(e){return this.overlaps(e)?e.low<=this.low&&e.high>=this.high?[]:e.low>this.low&&e.high<this.high?[new r(this.low,e.low-1),new r(e.high+1,this.high)]:e.low<=this.low?[new r(e.high+1,this.high)]:[new r(this.low,e.low-1)]:!1},r.prototype.toString=function(){return this.low==this.high?this.low.toString():this.low+"-"+this.high},r.prototype.clone=function(){return new r(this.low,this.high)},o.prototype.add=function(e,t){function n(e){for(var t=[],n=0;n<s.ranges.length&&!e.touches(s.ranges[n]);)t.push(s.ranges[n].clone()),n++;for(;n<s.ranges.length&&e.touches(s.ranges[n]);)e=e.add(s.ranges[n]),n++;for(t.push(e);n<s.ranges.length;)t.push(s.ranges[n].clone()),n++;s.ranges=t,a(s)}var s=this;return e instanceof o?e.ranges.forEach(n):e instanceof r?n(e):(void 0===t&&(t=e),n(new r(e,t))),this},o.prototype.subtract=function(e,t){function n(e){for(var t=[],n=0;n<s.ranges.length&&!e.overlaps(s.ranges[n]);)t.push(s.ranges[n].clone()),n++;for(;n<s.ranges.length&&e.overlaps(s.ranges[n]);)t=t.concat(s.ranges[n].subtract(e)),n++;for(;n<s.ranges.length;)t.push(s.ranges[n].clone()),n++;s.ranges=t,a(s)}var s=this;return e instanceof o?e.ranges.forEach(n):e instanceof r?n(e):(void 0===t&&(t=e),n(new r(e,t))),this},o.prototype.index=function(e){for(var t=0;t<this.ranges.length&&this.ranges[t].length<=e;)e-=this.ranges[t].length,t++;return t>=this.ranges.length?null:this.ranges[t].low+e},o.prototype.toString=function(){return"[ "+this.ranges.join(", ")+" ]"},o.prototype.clone=function(){return new o(this)},t.exports=o},{}],3:[function(e,t,n){var r=e("./util"),o=e("./types"),a=e("./sets"),s=e("./positions");t.exports=function(e){var t,n,i=0,u={type:o.ROOT,stack:[]},p=u,h=u.stack,l=[],c=function(t){r.error(e,"Nothing to repeat at column "+(t-1))},f=r.strToChars(e);for(t=f.length;t>i;)switch(n=f[i++]){case"\\":switch(n=f[i++]){case"b":h.push(s.wordBoundary());break;case"B":h.push(s.nonWordBoundary());break;case"w":h.push(a.words());break;case"W":h.push(a.notWords());break;case"d":h.push(a.ints());break;case"D":h.push(a.notInts());break;case"s":h.push(a.whitespace());break;case"S":h.push(a.notWhitespace());break;default:/\d/.test(n)?h.push({type:o.REFERENCE,value:parseInt(n,10)}):h.push({type:o.CHAR,value:n.charCodeAt(0)})}break;case"^":h.push(s.begin());break;case"$":h.push(s.end());break;case"[":var g;"^"===f[i]?(g=!0,i++):g=!1;var y=r.tokenizeClass(f.slice(i),e);i+=y[1],h.push({type:o.SET,set:y[0],not:g});break;case".":h.push(a.anyChar());break;case"(":var d={type:o.GROUP,stack:[],remember:!0};n=f[i],"?"===n&&(n=f[i+1],i+=2,"="===n?d.followedBy=!0:"!"===n?d.notFollowedBy=!0:":"!==n&&r.error(e,"Invalid group, character '"+n+"' after '?' at column "+(i-1)),d.remember=!1),h.push(d),l.push(p),p=d,h=d.stack;break;case")":0===l.length&&r.error(e,"Unmatched ) at column "+(i-1)),p=l.pop(),h=p.options?p.options[p.options.length-1]:p.stack;break;case"|":p.options||(p.options=[p.stack],delete p.stack);var v=[];p.options.push(v),h=v;break;case"{":var R,C,w=/^(\d+)(,(\d+)?)?\}/.exec(f.slice(i));null!==w?(R=parseInt(w[1],10),C=w[2]?w[3]?parseInt(w[3],10):1/0:R,i+=w[0].length,h.push({type:o.REPETITION,min:R,max:C,value:h.pop()})):h.push({type:o.CHAR,value:123});break;case"?":0===h.length&&c(i),h.push({type:o.REPETITION,min:0,max:1,value:h.pop()});break;case"+":0===h.length&&c(i),h.push({type:o.REPETITION,min:1,max:1/0,value:h.pop()});break;case"*":0===h.length&&c(i),h.push({type:o.REPETITION,min:0,max:1/0,value:h.pop()});break;default:h.push({type:o.CHAR,value:n.charCodeAt(0)})}return 0!==l.length&&r.error(e,"Unterminated group"),u},t.exports.types=o},{"./positions":4,"./sets":5,"./types":6,"./util":7}],4:[function(e,t,n){var r=e("./types");n.wordBoundary=function(){return{type:r.POSITION,value:"b"}},n.nonWordBoundary=function(){return{type:r.POSITION,value:"B"}},n.begin=function(){return{type:r.POSITION,value:"^"}},n.end=function(){return{type:r.POSITION,value:"$"}}},{"./types":6}],5:[function(e,t,n){var r=e("./types"),o=function(){return[{type:r.RANGE,from:48,to:57}]},a=function(){return[{type:r.CHAR,value:95},{type:r.RANGE,from:97,to:122},{type:r.RANGE,from:65,to:90}].concat(o())},s=function(){return[{type:r.CHAR,value:9},{type:r.CHAR,value:10},{type:r.CHAR,value:11},{type:r.CHAR,value:12},{type:r.CHAR,value:13},{type:r.CHAR,value:32},{type:r.CHAR,value:160},{type:r.CHAR,value:5760},{type:r.CHAR,value:6158},{type:r.CHAR,value:8192},{type:r.CHAR,value:8193},{type:r.CHAR,value:8194},{type:r.CHAR,value:8195},{type:r.CHAR,value:8196},{type:r.CHAR,value:8197},{type:r.CHAR,value:8198},{type:r.CHAR,value:8199},{type:r.CHAR,value:8200},{type:r.CHAR,value:8201},{type:r.CHAR,value:8202},{type:r.CHAR,value:8232},{type:r.CHAR,value:8233},{type:r.CHAR,value:8239},{type:r.CHAR,value:8287},{type:r.CHAR,value:12288},{type:r.CHAR,value:65279}]},i=function(){return[{type:r.CHAR,value:10},{type:r.CHAR,value:13},{type:r.CHAR,value:8232},{type:r.CHAR,value:8233}]};n.words=function(){return{type:r.SET,set:a(),not:!1}},n.notWords=function(){return{type:r.SET,set:a(),not:!0}},n.ints=function(){return{type:r.SET,set:o(),not:!1}},n.notInts=function(){return{type:r.SET,set:o(),not:!0}},n.whitespace=function(){return{type:r.SET,set:s(),not:!1}},n.notWhitespace=function(){return{type:r.SET,set:s(),not:!0}},n.anyChar=function(){return{type:r.SET,set:i(),not:!0}}},{"./types":6}],6:[function(e,t,n){t.exports={ROOT:0,GROUP:1,POSITION:2,SET:3,RANGE:4,REPETITION:5,REFERENCE:6,CHAR:7}},{}],7:[function(e,t,n){var r=e("./types"),o=e("./sets"),a="@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?",s={0:0,t:9,n:10,v:11,f:12,r:13};n.strToChars=function(e){var t=/(\[\\b\])|(\\)?\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|(0?[0-7]{2})|c([@A-Z\[\\\]\^?])|([0tnvfr]))/g;return e=e.replace(t,function(e,t,n,r,o,i,u,p){if(n)return e;var h=t?8:r?parseInt(r,16):o?parseInt(o,16):i?parseInt(i,8):u?a.indexOf(u):p?s[p]:void 0,l=String.fromCharCode(h);return/[\[\]{}\^$.|?*+()]/.test(l)&&(l="\\"+l),l})},n.tokenizeClass=function(e,t){for(var a,s,i=[],u=/\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(?:\\)?([^\]]))|(\])|(?:\\)?(.)/g;null!=(a=u.exec(e));)if(a[1])i.push(o.words());else if(a[2])i.push(o.ints());else if(a[3])i.push(o.whitespace());else if(a[4])i.push(o.notWords());else if(a[5])i.push(o.notInts());else if(a[6])i.push(o.notWhitespace());else if(a[7])i.push({type:r.RANGE,from:(a[8]||a[9]).charCodeAt(0),to:a[10].charCodeAt(0)});else{if(!(s=a[12]))return[i,u.lastIndex];i.push({type:r.CHAR,value:s.charCodeAt(0)})}n.error(t,"Unterminated character class")},n.error=function(e,t){throw new SyntaxError("Invalid regular expression: /"+e+"/: "+t)}},{"./sets":5,"./types":6}]},{},[1])}()(1);"function"==typeof define&&"object"==typeof define.amd?define(e,function(){return t}):"undefined"!=typeof window&&(window[e]=t)}();

var uid_template = new RandExp(/[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}/);

var ics = function() {
    'use strict';

    if (navigator.userAgent.indexOf('MSIE') > -1 && navigator.userAgent.indexOf('MSIE 10') == -1) {
        console.log('Unsupported Browser');
        return;
    }

    var SEPARATOR = (navigator.appVersion.indexOf('Win') !== -1) ? '\r\n' : '\n';
    var calendarEvents = [];
    var calendarStart = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Apple Inc.//Mac OS X 10.10.5//EN',
        'CALSCALE:GREGORIAN',
        'BEGIN:VTIMEZONE',
        'TZID:America/New_York',
        'BEGIN:DAYLIGHT',
        'TZOFFSETFROM:-0500',
        'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU',
        'DTSTART:20070311T020000',
        'TZNAME:EDT',
        'TZOFFSETTO:-0400',
        'END:DAYLIGHT',
        'BEGIN:STANDARD',
        'TZOFFSETFROM:-0400',
        'RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU',
        'DTSTART:20071104T020000',
        'TZNAME:EST',
        'TZOFFSETTO:-0500',
        'END:STANDARD',
        'END:VTIMEZONE',
    ].join(SEPARATOR);
    var calendarEnd = SEPARATOR + 'END:VCALENDAR';

    return {
        /**
         * Returns events array
         * @return {array} Events
         */
        'events': function() {
            return calendarEvents;
        },

        /**
         * Returns calendar
         * @return {string} Calendar in iCalendar format
         */
        'calendar': function() {
            return calendarStart + SEPARATOR + calendarEvents.join(SEPARATOR) + calendarEnd;
        },

        'addTodo': function(summary, due) {
            var due_date = new Date(due);

            var due_year = '2016';
            var due_month = ("00" + ((due_date.getMonth() + 1).toString())).slice(-2);
            var due_day = ("00" + ((due_date.getDate()).toString())).slice(-2);
            var due_time = 'T230000'

            var due_ics = due_year + due_month + due_day + due_time;

            var calendarEvent = [
                'BEGIN:VTODO',
                'CREATED:20160817T071513Z',
                'UID:' + uid_template.gen(),
                'SUMMARY:' + summary,
                'DTSTART;TZID=America/New_York:' + due_ics,
                'DTSTAMP:20160817T071513Z',
                'SEQUENCE:0',
                'DUE;TZID=America/New_York:' + due_ics,
                'BEGIN:VALARM',
                'X-WR-ALARMUID:' + uid_template.gen(),
                'UID:' + uid_template.gen(),
                'TRIGGER;VALUE=DATE-TIME:' + due_ics,
                'DESCRIPTION:Event reminder',
                'ACTION:DISPLAY',
                'END:VALARM',
                'END:VTODO',
            ].join(SEPARATOR);

            calendarEvents.push(calendarEvent);
            return calendarEvent;
        },

        /**
         * Download calendar using the saveAs function from filesave.js
         * @param  {string} filename Filename
         * @param  {string} ext      Extention
         */
        'download': function(filename, ext) {
            if (calendarEvents.length < 1) {
                return false;
            }

            ext = (typeof ext !== 'undefined') ? ext : '.ics';
            filename = (typeof filename !== 'undefined') ? filename : 'calendar';
            var calendar = calendarStart + SEPARATOR + calendarEvents.join(SEPARATOR) + calendarEnd;

            var blob;
            if (navigator.userAgent.indexOf('MSIE 10') === -1) { // chrome or firefox
                blob = new Blob([calendar]);
            } else { // ie
                var bb = new BlobBuilder();
                bb.append(calendar);
                blob = bb.getBlob('text/x-vCalendar;charset=' + document.characterSet);
            }
            saveAs(blob, filename + ext);
            return calendar;
        }
    };
};