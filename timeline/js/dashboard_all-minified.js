/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
function escapeHtml(t){return t&&(t=t.replace(/>/g,"&gt;"),t=t.replace(/</g,"&lt;")),t}function getRegex(t){var e=t.map(function(t){return 1===t.token.length?t.token:""}).join(),i=new RegExp("[^"+e+"]"),o=/(^|\n)&gt;&gt;&gt;([\s\S]*$)/,n=/(^|\n)&gt;(([^\n]*)(\n&gt;[^\n]*)*)/g,s=/\r?\n\r?\n\r?/g,r=/\r?\n\r?/g,a=/(^|\s)((?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[\/?#]\S*)?)/gi
return{nonTokensChars:i,multilineQuote:o,singleLineQuote:n,blockquoteTags:/<\/?blockquote>/gi,doubleLineBreak:s,singleLineBreak:r,url:a}}function escapeRegExp(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function getTokens(){var t=[{name:"pre",token:"```",elementName:"pre",multiline:!0,plainContent:!0},{name:"code",token:"`",elementName:"code",ignoreAfter:!0,plainContent:!0},{name:"bold",token:"*",elementName:"b",requireNonTokens:!0,spaceWrapIgnored:!0},{name:"italics",token:"_",elementName:"i",requireNonTokens:!0},{name:"strikethrough",token:"~",elementName:"s",requireNonTokens:!0,spaceWrapIgnored:!0}]
return t.forEach(function(t){if(!t.regex){var e='(^|[\\s\\?\\.,\\-!\\^;:{(\\[%$#+="])',i=t.multiline?"([\\s\\S]*?)?":"(.*?\\S *)?",o=t.ignoreAfter?"":"(?=$|\\s|[\\?\\.,'\\-!\\^;:})\\]%$~{\\[<#+=\"])",n=escapeRegExp(t.token),s=e+n+i+n+o
t.regex=new RegExp(s,"g")}}),t}function getStorage(t){try{data_string=localStorage.getItem(t)
var e=JSON.parse(data_string)}catch(i){var e=null}return e}function getNextDate(t,e){var i=new Date(t)
return i.setDate(t.getDate()+e),i}function getUrlParams(){var t=function(t){if(""==t)return{}
for(var e={},i=0;i<t.length;++i){var o=t[i].split("=",2)
1==o.length?e[o[0]]="":e[o[0]]=decodeURIComponent(o[1].replace(/\+/g," "))}return e}(window.location.search.substr(1).split("&"))
return t}function getParams(t){var e={}
e.integrations=[]
for(var i in t)i.beginsWith("Integrations")&&e.integrations.push(t[i])
return e.start=t.start,e.end=t.end,e}function getUserPreferences(t){dashboard_preferences=getStorage("dashboard_preferences"),null===dashboard_preferences&&(dashboard_preferences={},dashboard_preferences.integrations=[],index_counter=0,$.each(t,function(){return dashboard_preferences.integrations.push({Integration_Name:this.integration_name,API_key:this.apiKey,Owner:this.user,Created_On:this.createdOn}),2==index_counter?!1:void index_counter++}))
var e=getUrlParams()
if(selected_integrations=Array(),0!=Object.keys(e)){var o=getParams(e)
for(i=0;i<t.length;i++)o.integrations.indexOf(t[i].integration_name)>-1&&selected_integrations.push({Integration_Name:t[i].integration_name,API_key:t[i].apiKey,Owner:t[i].user,Created_On:t[i].createdOn,type:t[i].type})
return param_start=new Date(parseInt(o.start)),param_end=new Date(parseInt(o.end)),selected_integrations}for(selected_integrations=dashboard_preferences.integrations,i=0;i<t.length;i++)for(x=0;x<selected_integrations.length;x++)t[i].integration_name==selected_integrations[x].Integration_Name&&(selected_integrations[x].type=t[i].type)}function generateGroups(){if(set_groups===!1)for(var t=0;t<selected_integrations.length;t++){var e=selected_integrations[t]
groups.add({id:t,content:e.Integration_Name}),t==selected_integrations.length-1&&(set_groups=!0)}}function generateContainer(){set_container===!1&&(container=document.getElementById("visualization"),usable_height=$(window).height()-$("#menunav").outerHeight()-parseInt($("body").css("margin-bottom")),usable_height-=.1*usable_height,options.minHeight=usable_height,options.maxHeight=usable_height,timeline=new vis.Timeline(container),timeline.setOptions(options),timeline.setGroups(groups),set_container=!0)}function checkTooltips(){data_elements=$("[data-json_string]"),data_elements.length>0&&$("[data-json_string]").qtip({content:{attr:"data-json_string"},position:{my:"bottom center",at:"top center"},style:{classes:"qtip-jtools nice_json"}})}function getHumanDate(t){var e=new moment(t),i=e.toString().split(" ")
if(i.length>=6){var o=i.slice(0,5).join(" ")
return o}return console.log("Something bad with the date!"),""}function getShareLink(){var t={}
for(x=0;x<selected_integrations.length;x++)t["Integrations"+x.toString()]=selected_integrations[x].Integration_Name
current_range=timeline.getWindow(),t.start=current_range.start.getTime(),t.end=current_range.end.getTime()
var e=$.param(t),i=window.location.protocol+"//"+window.location.hostname+"/dashboard?"+e
return i}function fix404Images(){var t=document.getElementsByTagName("img")
for(i=0;i<t.length;i++)t[i].onerror=t[i].src="/images/webhook_custom.png"}function addNewRelicItem(t,e){var i=t.incident_id,o='<a target="_blank" href="'+t.incident_url+'">'+i+"</a>",n='<img  src="/images/NewRelic-logo-square_small.png"  width="30" height="30" onerror="this.src=\'/images/webhook_custom.png\';">'+o,s=t.timestamp,r='<div class="tooltip-title">'+t.condition_name+"</div>",a="<p>"+t.details+"</p>",h='<p><span class="json-key tooltip-label">TYPE:</span>'+t.event_type+"</p>",d='<p><span class="json-key tooltip-label">APP NAME: </span>'+JSON.stringify(t.targets)+"</p>",l='<p><span class="json-key tooltip-label">MESSAGE: </span>'+t.details+"</p>",u=r+a+h+d+l,c={id:t._id,group:e,content:n,start:s,type:"box",className:newRelic_statuses[t.current_state],json_string:u}
items.update(c)}function addPagerdutyItem(t,e){var i='<a target="_blank" href="'+t.html_url+'">'+t.id+"</a>",o='<img  src="/images/pdlogo.png" width="20" height="20" onerror="this.src=\'/images/webhook_custom.png\';">'+i,n=t.id,s=t.created_on
if(void 0!==t.trigger_summary_data.subject)var r='<div class="tooltip-title">'+t.trigger_summary_data.subject+"</div>"
else var a=t.trigger_summary_data.HOSTNAME+": "+t.trigger_summary_data.SERVICEDESC+" "+t.trigger_summary_data.HOSTSTATE,r='<div class="tooltip-title">'+a+"</div>"
var h='<p><span class="json-key tooltip-label">EVENT ID: </span>'+t.id+"</p>",d='<p><span class="json-key tooltip-label">STATUS: </span>'+t.status+"</p>",l="<p></p>"
if("resolved"==t.status)if(void 0==t.resolved_by_user)var u='<p><span class="json-key tooltip-label">RESOLVED BY: </span>API</p>'
else if(null==t.resolved_by_user.name)var u='<p><span class="json-key tooltip-label">RESOLVED BY: </span> API </p>'
else var u='<p><span class="json-key tooltip-label">RESOLVED BY: </span>'+t.resolved_by_user.name+"</p>"
else if(null==t.assigned_to_user.name)var u='<p><span class="json-key tooltip-label">ASSIGNED TO: </span> none </p>'
else var u='<p><span class="json-key tooltip-label">ASSIGNED TO: </span>'+t.assigned_to_user.name+"</p>"
var c='<p><span class="json-key tooltip-label">CREATED ON: </span>'+getHumanDate(s)+"</p>",p=r+l+h+d+u+c
d=pagerduty_statuses[t.status]
var f={id:n,group:e,content:o,start:s,end:t.last_status_change_on,type:"range",className:d,json_string:p}
"resolved"!==t.status&&(f.type="box",delete f.end),items.update(f)}function addCustomItem(t,e){var i='<img  src="/images/users_photos/'+t.username+'.jpg" width="30" height="30" hspace="3" onerror="this.src=\'/images/webhook_custom.png\';">'+t.username,o=t._id
if(void 0==t.start)var n=t.start_date
else var n=t.start
var s='<p><span class="json-key tooltip-label">USERNAME: </span>'+t.username+"</p>",r=lightMarkdown.toHtml(t.message).replace("<p>","").replace("</p>",""),a=emojify.replace(r)
a=a.replace("&amp;lt;","<").replace("&amp;gt;",">"),a=a.replace("&lt;","<").replace("&gt;",">"),a=linkify(a).replace("<<","<").replace(">>",">")
var h='<p><span class="json-key tooltip-label">MESSAGE: </span>'+a+"</p>",d='<p><span class="json-key tooltip-label">CREATED ON: </span>'+getHumanDate(n)+"</p>",l=s+h+d
item_data={id:o,group:e,content:i,start:n,type:"box",json_string:l},items.update(item_data)}function linkify(t){var e,i,o,n
return i=/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,e=t.replace(i,'<a href="$1" target="_blank">$1</a>'),o=/(^|[^\/])(www\.[\S]+(\b|$))/gim,e=e.replace(o,'$1<a href="http://$2" target="_blank">$2</a>'),n=/(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim,e=e.replace(n,'<a href="mailto:$1">$1</a>')}function reduceRange(){options.zoomMax>3024e5&&(options.zoomMax=Math.floor(options.zoomMax/2),timeline.setOptions(options))
var t=new vis.DataSet
$.each(items.getIds(),function(e,i){0===e&&(item=items.get(i),reduced_start=new Date(item.start)),599>e&&(item=items.get(i),t.add(item)),599===e&&(item=items.get(i),reduced_end=new Date(item.start))}),t.length>0&&(items=t,start=reduced_start,end=reduced_end)}function getItemsRange(t){t.end>getNextDate(end,1)?(items.clear(),start=getNextDate(t.start,-1),end=getNextDate(t.start,days_interval),console.log([t.start,t.end]),console.log(["generateDashboard right",start,end]),generateDashboard(start,end)):t.start<getNextDate(start,-1)&&(items.clear(),end=getNextDate(t.end,1),start=getNextDate(t.end,-days_interval),console.log([t.start,t.end]),console.log(["generateDashboard left",start,end]),generateDashboard(start,end)),checkTooltips()}function generateDashboard(t,e,i){generateGroups(),generateContainer(),$("#ajaxLoading").show(),console.log(t,e)
for(var o=0;o<selected_integrations.length;o++){var n=selected_integrations[o]
if("undefined"==typeof i||i===n.Integration_Name){var s=url_start+"/webhooks/integrations/"+n.Integration_Name+"/search",r={search:"",type:n.type,start_date:t.toISOString(),end_date:e.toISOString()}
console.log(s),console.log(JSON.stringify(r)),$.ajax({type:"POST",url:s,contentType:"application/json",data:JSON.stringify(r),custom_group:o,selected_integration:n,success:function(t){integration_list[n.Integration_Name].last_update=new Date
try{switch(this.selected_integration.type){case"newrelic":for(var e=0;e<=t.length-1;e++)event_data=t[e],addNewRelicItem(event_data,this.custom_group)
break
case"pagerduty":for(var e=0;e<=t.length-1;e++)event_data=t[e],addPagerdutyItem(event_data,this.custom_group)
break
case"custom":for(var e=0;e<=t.length-1;e++)event_data=t[e],addCustomItem(event_data,this.custom_group)}}catch(i){console.log("Error",i.stack),console.log("Error",i.name),console.log("Error",i.message)}this.custom_group==selected_integrations.length-1&&(timeline.setItems(items),checkTooltips(),timeline.off("rangechanged",getItemsRange),timeline.on("rangechanged",getItemsRange))},error:function(t,e,i){alert(i.Message)},dataType:"json"})}}}function goToNow(){var t=timeline.getCurrentTime()
t.setHours(t.getHours()+1)
var e=new Date(t)
e.setHours(t.getHours()-6),timeline.setWindow(e,t)}function setIntegrationList(){for(i=0;i<selected_integrations.length;i++){var t={last_update:new Date,integration_group:i}
integration_list[selected_integrations[i].Integration_Name]=t}}function zoom(t){var e=timeline.getWindow(),i=e.end-e.start
timeline.setWindow({start:e.start.valueOf()-i*t,end:e.end.valueOf()+i*t,animation:!1})}function move(t){var e=timeline.getWindow(),i=e.end-e.start
timeline.setWindow({start:e.start.valueOf()-i*t,end:e.end.valueOf()-i*t,animation:!1})}if(!function(t,e){"object"==typeof module&&"object"==typeof module.exports?module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document")
return e(t)}:e(t)}("undefined"!=typeof window?window:this,function(t,e){function i(t){var e=t.length,i=J.type(t)
return"function"===i||J.isWindow(t)?!1:1===t.nodeType&&e?!0:"array"===i||0===e||"number"==typeof e&&e>0&&e-1 in t}function o(t,e,i){if(J.isFunction(e))return J.grep(t,function(t,o){return!!e.call(t,o,t)!==i})
if(e.nodeType)return J.grep(t,function(t){return t===e!==i})
if("string"==typeof e){if(at.test(e))return J.filter(e,t,i)
e=J.filter(e,t)}return J.grep(t,function(t){return q.call(e,t)>=0!==i})}function n(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}function s(t){var e=ft[t]={}
return J.each(t.match(pt)||[],function(t,i){e[i]=!0}),e}function r(){K.removeEventListener("DOMContentLoaded",r,!1),t.removeEventListener("load",r,!1),J.ready()}function a(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=J.expando+a.uid++}function h(t,e,i){var o
if(void 0===i&&1===t.nodeType)if(o="data-"+e.replace(_t,"-$1").toLowerCase(),i=t.getAttribute(o),"string"==typeof i){try{i="true"===i?!0:"false"===i?!1:"null"===i?null:+i+""===i?+i:bt.test(i)?J.parseJSON(i):i}catch(n){}yt.set(t,e,i)}else i=void 0
return i}function d(){return!0}function l(){return!1}function u(){try{return K.activeElement}catch(t){}}function c(t,e){return J.nodeName(t,"table")&&J.nodeName(11!==e.nodeType?e:e.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t}function p(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function f(t){var e=Lt.exec(t.type)
return e?t.type=e[1]:t.removeAttribute("type"),t}function m(t,e){for(var i=0,o=t.length;o>i;i++)vt.set(t[i],"globalEval",!e||vt.get(e[i],"globalEval"))}function g(t,e){var i,o,n,s,r,a,h,d
if(1===e.nodeType){if(vt.hasData(t)&&(s=vt.access(t),r=vt.set(e,s),d=s.events)){delete r.handle,r.events={}
for(n in d)for(i=0,o=d[n].length;o>i;i++)J.event.add(e,n,d[n][i])}yt.hasData(t)&&(a=yt.access(t),h=J.extend({},a),yt.set(e,h))}}function v(t,e){var i=t.getElementsByTagName?t.getElementsByTagName(e||"*"):t.querySelectorAll?t.querySelectorAll(e||"*"):[]
return void 0===e||e&&J.nodeName(t,e)?J.merge([t],i):i}function y(t,e){var i=e.nodeName.toLowerCase()
"input"===i&&Tt.test(t.type)?e.checked=t.checked:("input"===i||"textarea"===i)&&(e.defaultValue=t.defaultValue)}function b(e,i){var o,n=J(i.createElement(e)).appendTo(i.body),s=t.getDefaultComputedStyle&&(o=t.getDefaultComputedStyle(n[0]))?o.display:J.css(n[0],"display")
return n.detach(),s}function _(t){var e=K,i=Bt[t]
return i||(i=b(t,e),"none"!==i&&i||(Ft=(Ft||J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),e=Ft[0].contentDocument,e.write(),e.close(),i=b(t,e),Ft.detach()),Bt[t]=i),i}function w(t,e,i){var o,n,s,r,a=t.style
return i=i||Wt(t),i&&(r=i.getPropertyValue(e)||i[e]),i&&(""!==r||J.contains(t.ownerDocument,t)||(r=J.style(t,e)),Yt.test(r)&&Ht.test(e)&&(o=a.width,n=a.minWidth,s=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=i.width,a.width=o,a.minWidth=n,a.maxWidth=s)),void 0!==r?r+"":r}function x(t,e){return{get:function(){return t()?void delete this.get:(this.get=e).apply(this,arguments)}}}function k(t,e){if(e in t)return e
for(var i=e[0].toUpperCase()+e.slice(1),o=e,n=Xt.length;n--;)if(e=Xt[n]+i,e in t)return e
return o}function T(t,e,i){var o=Ut.exec(e)
return o?Math.max(0,o[1]-(i||0))+(o[2]||"px"):e}function D(t,e,i,o,n){for(var s=i===(o?"border":"content")?4:"width"===e?1:0,r=0;4>s;s+=2)"margin"===i&&(r+=J.css(t,i+xt[s],!0,n)),o?("content"===i&&(r-=J.css(t,"padding"+xt[s],!0,n)),"margin"!==i&&(r-=J.css(t,"border"+xt[s]+"Width",!0,n))):(r+=J.css(t,"padding"+xt[s],!0,n),"padding"!==i&&(r+=J.css(t,"border"+xt[s]+"Width",!0,n)))
return r}function O(t,e,i){var o=!0,n="width"===e?t.offsetWidth:t.offsetHeight,s=Wt(t),r="border-box"===J.css(t,"boxSizing",!1,s)
if(0>=n||null==n){if(n=w(t,e,s),(0>n||null==n)&&(n=t.style[e]),Yt.test(n))return n
o=r&&(Z.boxSizingReliable()||n===t.style[e]),n=parseFloat(n)||0}return n+D(t,e,i||(r?"border":"content"),o,s)+"px"}function C(t,e){for(var i,o,n,s=[],r=0,a=t.length;a>r;r++)o=t[r],o.style&&(s[r]=vt.get(o,"olddisplay"),i=o.style.display,e?(s[r]||"none"!==i||(o.style.display=""),""===o.style.display&&kt(o)&&(s[r]=vt.access(o,"olddisplay",_(o.nodeName)))):(n=kt(o),"none"===i&&n||vt.set(o,"olddisplay",n?i:J.css(o,"display"))))
for(r=0;a>r;r++)o=t[r],o.style&&(e&&"none"!==o.style.display&&""!==o.style.display||(o.style.display=e?s[r]||"":"none"))
return t}function M(t,e,i,o,n){return new M.prototype.init(t,e,i,o,n)}function S(){return setTimeout(function(){Zt=void 0}),Zt=J.now()}function E(t,e){var i,o=0,n={height:t}
for(e=e?1:0;4>o;o+=2-e)i=xt[o],n["margin"+i]=n["padding"+i]=t
return e&&(n.opacity=n.width=t),n}function P(t,e,i){for(var o,n=(ie[e]||[]).concat(ie["*"]),s=0,r=n.length;r>s;s++)if(o=n[s].call(i,e,t))return o}function N(t,e,i){var o,n,s,r,a,h,d,l,u=this,c={},p=t.style,f=t.nodeType&&kt(t),m=vt.get(t,"fxshow")
i.queue||(a=J._queueHooks(t,"fx"),null==a.unqueued&&(a.unqueued=0,h=a.empty.fire,a.empty.fire=function(){a.unqueued||h()}),a.unqueued++,u.always(function(){u.always(function(){a.unqueued--,J.queue(t,"fx").length||a.empty.fire()})})),1===t.nodeType&&("height"in e||"width"in e)&&(i.overflow=[p.overflow,p.overflowX,p.overflowY],d=J.css(t,"display"),l="none"===d?vt.get(t,"olddisplay")||_(t.nodeName):d,"inline"===l&&"none"===J.css(t,"float")&&(p.display="inline-block")),i.overflow&&(p.overflow="hidden",u.always(function(){p.overflow=i.overflow[0],p.overflowX=i.overflow[1],p.overflowY=i.overflow[2]}))
for(o in e)if(n=e[o],Qt.exec(n)){if(delete e[o],s=s||"toggle"===n,n===(f?"hide":"show")){if("show"!==n||!m||void 0===m[o])continue
f=!0}c[o]=m&&m[o]||J.style(t,o)}else d=void 0
if(J.isEmptyObject(c))"inline"===("none"===d?_(t.nodeName):d)&&(p.display=d)
else{m?"hidden"in m&&(f=m.hidden):m=vt.access(t,"fxshow",{}),s&&(m.hidden=!f),f?J(t).show():u.done(function(){J(t).hide()}),u.done(function(){var e
vt.remove(t,"fxshow")
for(e in c)J.style(t,e,c[e])})
for(o in c)r=P(f?m[o]:0,o,u),o in m||(m[o]=r.start,f&&(r.end=r.start,r.start="width"===o||"height"===o?1:0))}}function I(t,e){var i,o,n,s,r
for(i in t)if(o=J.camelCase(i),n=e[o],s=t[i],J.isArray(s)&&(n=s[1],s=t[i]=s[0]),i!==o&&(t[o]=s,delete t[i]),r=J.cssHooks[o],r&&"expand"in r){s=r.expand(s),delete t[o]
for(i in s)i in t||(t[i]=s[i],e[i]=n)}else e[o]=n}function A(t,e,i){var o,n,s=0,r=ee.length,a=J.Deferred().always(function(){delete h.elem}),h=function(){if(n)return!1
for(var e=Zt||S(),i=Math.max(0,d.startTime+d.duration-e),o=i/d.duration||0,s=1-o,r=0,h=d.tweens.length;h>r;r++)d.tweens[r].run(s)
return a.notifyWith(t,[d,s,i]),1>s&&h?i:(a.resolveWith(t,[d]),!1)},d=a.promise({elem:t,props:J.extend({},e),opts:J.extend(!0,{specialEasing:{}},i),originalProperties:e,originalOptions:i,startTime:Zt||S(),duration:i.duration,tweens:[],createTween:function(e,i){var o=J.Tween(t,d.opts,e,i,d.opts.specialEasing[e]||d.opts.easing)
return d.tweens.push(o),o},stop:function(e){var i=0,o=e?d.tweens.length:0
if(n)return this
for(n=!0;o>i;i++)d.tweens[i].run(1)
return e?a.resolveWith(t,[d,e]):a.rejectWith(t,[d,e]),this}}),l=d.props
for(I(l,d.opts.specialEasing);r>s;s++)if(o=ee[s].call(d,t,l,d.opts))return o
return J.map(l,P,d),J.isFunction(d.opts.start)&&d.opts.start.call(t,d),J.fx.timer(J.extend(h,{elem:t,anim:d,queue:d.opts.queue})),d.progress(d.opts.progress).done(d.opts.done,d.opts.complete).fail(d.opts.fail).always(d.opts.always)}function j(t){return function(e,i){"string"!=typeof e&&(i=e,e="*")
var o,n=0,s=e.toLowerCase().match(pt)||[]
if(J.isFunction(i))for(;o=s[n++];)"+"===o[0]?(o=o.slice(1)||"*",(t[o]=t[o]||[]).unshift(i)):(t[o]=t[o]||[]).push(i)}}function L(t,e,i,o){function n(a){var h
return s[a]=!0,J.each(t[a]||[],function(t,a){var d=a(e,i,o)
return"string"!=typeof d||r||s[d]?r?!(h=d):void 0:(e.dataTypes.unshift(d),n(d),!1)}),h}var s={},r=t===be
return n(e.dataTypes[0])||!s["*"]&&n("*")}function z(t,e){var i,o,n=J.ajaxSettings.flatOptions||{}
for(i in e)void 0!==e[i]&&((n[i]?t:o||(o={}))[i]=e[i])
return o&&J.extend(!0,t,o),t}function R(t,e,i){for(var o,n,s,r,a=t.contents,h=t.dataTypes;"*"===h[0];)h.shift(),void 0===o&&(o=t.mimeType||e.getResponseHeader("Content-Type"))
if(o)for(n in a)if(a[n]&&a[n].test(o)){h.unshift(n)
break}if(h[0]in i)s=h[0]
else{for(n in i){if(!h[0]||t.converters[n+" "+h[0]]){s=n
break}r||(r=n)}s=s||r}return s?(s!==h[0]&&h.unshift(s),i[s]):void 0}function F(t,e,i,o){var n,s,r,a,h,d={},l=t.dataTypes.slice()
if(l[1])for(r in t.converters)d[r.toLowerCase()]=t.converters[r]
for(s=l.shift();s;)if(t.responseFields[s]&&(i[t.responseFields[s]]=e),!h&&o&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),h=s,s=l.shift())if("*"===s)s=h
else if("*"!==h&&h!==s){if(r=d[h+" "+s]||d["* "+s],!r)for(n in d)if(a=n.split(" "),a[1]===s&&(r=d[h+" "+a[0]]||d["* "+a[0]])){r===!0?r=d[n]:d[n]!==!0&&(s=a[0],l.unshift(a[1]))
break}if(r!==!0)if(r&&t["throws"])e=r(e)
else try{e=r(e)}catch(u){return{state:"parsererror",error:r?u:"No conversion from "+h+" to "+s}}}return{state:"success",data:e}}function B(t,e,i,o){var n
if(J.isArray(e))J.each(e,function(e,n){i||Te.test(t)?o(t,n):B(t+"["+("object"==typeof n?e:"")+"]",n,i,o)})
else if(i||"object"!==J.type(e))o(t,e)
else for(n in e)B(t+"["+n+"]",e[n],i,o)}function H(t){return J.isWindow(t)?t:9===t.nodeType&&t.defaultView}var Y=[],W=Y.slice,G=Y.concat,U=Y.push,q=Y.indexOf,$={},V=$.toString,X=$.hasOwnProperty,Z={},K=t.document,Q="2.1.3",J=function(t,e){return new J.fn.init(t,e)},tt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,et=/^-ms-/,it=/-([\da-z])/gi,ot=function(t,e){return e.toUpperCase()}
J.fn=J.prototype={jquery:Q,constructor:J,selector:"",length:0,toArray:function(){return W.call(this)},get:function(t){return null!=t?0>t?this[t+this.length]:this[t]:W.call(this)},pushStack:function(t){var e=J.merge(this.constructor(),t)
return e.prevObject=this,e.context=this.context,e},each:function(t,e){return J.each(this,t,e)},map:function(t){return this.pushStack(J.map(this,function(e,i){return t.call(e,i,e)}))},slice:function(){return this.pushStack(W.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,i=+t+(0>t?e:0)
return this.pushStack(i>=0&&e>i?[this[i]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:U,sort:Y.sort,splice:Y.splice},J.extend=J.fn.extend=function(){var t,e,i,o,n,s,r=arguments[0]||{},a=1,h=arguments.length,d=!1
for("boolean"==typeof r&&(d=r,r=arguments[a]||{},a++),"object"==typeof r||J.isFunction(r)||(r={}),a===h&&(r=this,a--);h>a;a++)if(null!=(t=arguments[a]))for(e in t)i=r[e],o=t[e],r!==o&&(d&&o&&(J.isPlainObject(o)||(n=J.isArray(o)))?(n?(n=!1,s=i&&J.isArray(i)?i:[]):s=i&&J.isPlainObject(i)?i:{},r[e]=J.extend(d,s,o)):void 0!==o&&(r[e]=o))
return r},J.extend({expando:"jQuery"+(Q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===J.type(t)},isArray:Array.isArray,isWindow:function(t){return null!=t&&t===t.window},isNumeric:function(t){return!J.isArray(t)&&t-parseFloat(t)+1>=0},isPlainObject:function(t){return"object"!==J.type(t)||t.nodeType||J.isWindow(t)?!1:!t.constructor||X.call(t.constructor.prototype,"isPrototypeOf")},isEmptyObject:function(t){var e
for(e in t)return!1
return!0},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?$[V.call(t)]||"object":typeof t},globalEval:function(t){var e,i=eval
t=J.trim(t),t&&(1===t.indexOf("use strict")?(e=K.createElement("script"),e.text=t,K.head.appendChild(e).parentNode.removeChild(e)):i(t))},camelCase:function(t){return t.replace(et,"ms-").replace(it,ot)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()},each:function(t,e,o){var n,s=0,r=t.length,a=i(t)
if(o){if(a)for(;r>s&&(n=e.apply(t[s],o),n!==!1);s++);else for(s in t)if(n=e.apply(t[s],o),n===!1)break}else if(a)for(;r>s&&(n=e.call(t[s],s,t[s]),n!==!1);s++);else for(s in t)if(n=e.call(t[s],s,t[s]),n===!1)break
return t},trim:function(t){return null==t?"":(t+"").replace(tt,"")},makeArray:function(t,e){var o=e||[]
return null!=t&&(i(Object(t))?J.merge(o,"string"==typeof t?[t]:t):U.call(o,t)),o},inArray:function(t,e,i){return null==e?-1:q.call(e,t,i)},merge:function(t,e){for(var i=+e.length,o=0,n=t.length;i>o;o++)t[n++]=e[o]
return t.length=n,t},grep:function(t,e,i){for(var o,n=[],s=0,r=t.length,a=!i;r>s;s++)o=!e(t[s],s),o!==a&&n.push(t[s])
return n},map:function(t,e,o){var n,s=0,r=t.length,a=i(t),h=[]
if(a)for(;r>s;s++)n=e(t[s],s,o),null!=n&&h.push(n)
else for(s in t)n=e(t[s],s,o),null!=n&&h.push(n)
return G.apply([],h)},guid:1,proxy:function(t,e){var i,o,n
return"string"==typeof e&&(i=t[e],e=t,t=i),J.isFunction(t)?(o=W.call(arguments,2),n=function(){return t.apply(e||this,o.concat(W.call(arguments)))},n.guid=t.guid=t.guid||J.guid++,n):void 0},now:Date.now,support:Z}),J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){$["[object "+e+"]"]=e.toLowerCase()})
var nt=function(t){function e(t,e,i,o){var n,s,r,a,h,d,u,p,f,m
if((e?e.ownerDocument||e:B)!==N&&P(e),e=e||N,i=i||[],a=e.nodeType,"string"!=typeof t||!t||1!==a&&9!==a&&11!==a)return i
if(!o&&A){if(11!==a&&(n=yt.exec(t)))if(r=n[1]){if(9===a){if(s=e.getElementById(r),!s||!s.parentNode)return i
if(s.id===r)return i.push(s),i}else if(e.ownerDocument&&(s=e.ownerDocument.getElementById(r))&&R(e,s)&&s.id===r)return i.push(s),i}else{if(n[2])return Q.apply(i,e.getElementsByTagName(t)),i
if((r=n[3])&&w.getElementsByClassName)return Q.apply(i,e.getElementsByClassName(r)),i}if(w.qsa&&(!j||!j.test(t))){if(p=u=F,f=e,m=1!==a&&t,1===a&&"object"!==e.nodeName.toLowerCase()){for(d=D(t),(u=e.getAttribute("id"))?p=u.replace(_t,"\\$&"):e.setAttribute("id",p),p="[id='"+p+"'] ",h=d.length;h--;)d[h]=p+c(d[h])
f=bt.test(t)&&l(e.parentNode)||e,m=d.join(",")}if(m)try{return Q.apply(i,f.querySelectorAll(m)),i}catch(g){}finally{u||e.removeAttribute("id")}}}return C(t.replace(ht,"$1"),e,i,o)}function i(){function t(i,o){return e.push(i+" ")>x.cacheLength&&delete t[e.shift()],t[i+" "]=o}var e=[]
return t}function o(t){return t[F]=!0,t}function n(t){var e=N.createElement("div")
try{return!!t(e)}catch(i){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function s(t,e){for(var i=t.split("|"),o=t.length;o--;)x.attrHandle[i[o]]=e}function r(t,e){var i=e&&t,o=i&&1===t.nodeType&&1===e.nodeType&&(~e.sourceIndex||$)-(~t.sourceIndex||$)
if(o)return o
if(i)for(;i=i.nextSibling;)if(i===e)return-1
return t?1:-1}function a(t){return function(e){var i=e.nodeName.toLowerCase()
return"input"===i&&e.type===t}}function h(t){return function(e){var i=e.nodeName.toLowerCase()
return("input"===i||"button"===i)&&e.type===t}}function d(t){return o(function(e){return e=+e,o(function(i,o){for(var n,s=t([],i.length,e),r=s.length;r--;)i[n=s[r]]&&(i[n]=!(o[n]=i[n]))})})}function l(t){return t&&"undefined"!=typeof t.getElementsByTagName&&t}function u(){}function c(t){for(var e=0,i=t.length,o="";i>e;e++)o+=t[e].value
return o}function p(t,e,i){var o=e.dir,n=i&&"parentNode"===o,s=Y++
return e.first?function(e,i,s){for(;e=e[o];)if(1===e.nodeType||n)return t(e,i,s)}:function(e,i,r){var a,h,d=[H,s]
if(r){for(;e=e[o];)if((1===e.nodeType||n)&&t(e,i,r))return!0}else for(;e=e[o];)if(1===e.nodeType||n){if(h=e[F]||(e[F]={}),(a=h[o])&&a[0]===H&&a[1]===s)return d[2]=a[2]
if(h[o]=d,d[2]=t(e,i,r))return!0}}}function f(t){return t.length>1?function(e,i,o){for(var n=t.length;n--;)if(!t[n](e,i,o))return!1
return!0}:t[0]}function m(t,i,o){for(var n=0,s=i.length;s>n;n++)e(t,i[n],o)
return o}function g(t,e,i,o,n){for(var s,r=[],a=0,h=t.length,d=null!=e;h>a;a++)(s=t[a])&&(!i||i(s,o,n))&&(r.push(s),d&&e.push(a))
return r}function v(t,e,i,n,s,r){return n&&!n[F]&&(n=v(n)),s&&!s[F]&&(s=v(s,r)),o(function(o,r,a,h){var d,l,u,c=[],p=[],f=r.length,v=o||m(e||"*",a.nodeType?[a]:a,[]),y=!t||!o&&e?v:g(v,c,t,a,h),b=i?s||(o?t:f||n)?[]:r:y
if(i&&i(y,b,a,h),n)for(d=g(b,p),n(d,[],a,h),l=d.length;l--;)(u=d[l])&&(b[p[l]]=!(y[p[l]]=u))
if(o){if(s||t){if(s){for(d=[],l=b.length;l--;)(u=b[l])&&d.push(y[l]=u)
s(null,b=[],d,h)}for(l=b.length;l--;)(u=b[l])&&(d=s?tt(o,u):c[l])>-1&&(o[d]=!(r[d]=u))}}else b=g(b===r?b.splice(f,b.length):b),s?s(null,r,b,h):Q.apply(r,b)})}function y(t){for(var e,i,o,n=t.length,s=x.relative[t[0].type],r=s||x.relative[" "],a=s?1:0,h=p(function(t){return t===e},r,!0),d=p(function(t){return tt(e,t)>-1},r,!0),l=[function(t,i,o){var n=!s&&(o||i!==M)||((e=i).nodeType?h(t,i,o):d(t,i,o))
return e=null,n}];n>a;a++)if(i=x.relative[t[a].type])l=[p(f(l),i)]
else{if(i=x.filter[t[a].type].apply(null,t[a].matches),i[F]){for(o=++a;n>o&&!x.relative[t[o].type];o++);return v(a>1&&f(l),a>1&&c(t.slice(0,a-1).concat({value:" "===t[a-2].type?"*":""})).replace(ht,"$1"),i,o>a&&y(t.slice(a,o)),n>o&&y(t=t.slice(o)),n>o&&c(t))}l.push(i)}return f(l)}function b(t,i){var n=i.length>0,s=t.length>0,r=function(o,r,a,h,d){var l,u,c,p=0,f="0",m=o&&[],v=[],y=M,b=o||s&&x.find.TAG("*",d),_=H+=null==y?1:Math.random()||.1,w=b.length
for(d&&(M=r!==N&&r);f!==w&&null!=(l=b[f]);f++){if(s&&l){for(u=0;c=t[u++];)if(c(l,r,a)){h.push(l)
break}d&&(H=_)}n&&((l=!c&&l)&&p--,o&&m.push(l))}if(p+=f,n&&f!==p){for(u=0;c=i[u++];)c(m,v,r,a)
if(o){if(p>0)for(;f--;)m[f]||v[f]||(v[f]=Z.call(h))
v=g(v)}Q.apply(h,v),d&&!o&&v.length>0&&p+i.length>1&&e.uniqueSort(h)}return d&&(H=_,M=y),m}
return n?o(r):r}var _,w,x,k,T,D,O,C,M,S,E,P,N,I,A,j,L,z,R,F="sizzle"+1*new Date,B=t.document,H=0,Y=0,W=i(),G=i(),U=i(),q=function(t,e){return t===e&&(E=!0),0},$=1<<31,V={}.hasOwnProperty,X=[],Z=X.pop,K=X.push,Q=X.push,J=X.slice,tt=function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i
return-1},et="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",it="[\\x20\\t\\r\\n\\f]",ot="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",nt=ot.replace("w","w#"),st="\\["+it+"*("+ot+")(?:"+it+"*([*^$|!~]?=)"+it+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+nt+"))|)"+it+"*\\]",rt=":("+ot+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+st+")*)|.*)\\)|)",at=new RegExp(it+"+","g"),ht=new RegExp("^"+it+"+|((?:^|[^\\\\])(?:\\\\.)*)"+it+"+$","g"),dt=new RegExp("^"+it+"*,"+it+"*"),lt=new RegExp("^"+it+"*([>+~]|"+it+")"+it+"*"),ut=new RegExp("="+it+"*([^\\]'\"]*?)"+it+"*\\]","g"),ct=new RegExp(rt),pt=new RegExp("^"+nt+"$"),ft={ID:new RegExp("^#("+ot+")"),CLASS:new RegExp("^\\.("+ot+")"),TAG:new RegExp("^("+ot.replace("w","w*")+")"),ATTR:new RegExp("^"+st),PSEUDO:new RegExp("^"+rt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+it+"*(even|odd|(([+-]|)(\\d*)n|)"+it+"*(?:([+-]|)"+it+"*(\\d+)|))"+it+"*\\)|)","i"),bool:new RegExp("^(?:"+et+")$","i"),needsContext:new RegExp("^"+it+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+it+"*((?:-\\d)?\\d*)"+it+"*\\)|)(?=[^-]|$)","i")},mt=/^(?:input|select|textarea|button)$/i,gt=/^h\d$/i,vt=/^[^{]+\{\s*\[native \w/,yt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,bt=/[+~]/,_t=/'|\\/g,wt=new RegExp("\\\\([\\da-f]{1,6}"+it+"?|("+it+")|.)","ig"),xt=function(t,e,i){var o="0x"+e-65536
return o!==o||i?e:0>o?String.fromCharCode(o+65536):String.fromCharCode(o>>10|55296,1023&o|56320)},kt=function(){P()}
try{Q.apply(X=J.call(B.childNodes),B.childNodes),X[B.childNodes.length].nodeType}catch(Tt){Q={apply:X.length?function(t,e){K.apply(t,J.call(e))}:function(t,e){for(var i=t.length,o=0;t[i++]=e[o++];);t.length=i-1}}}w=e.support={},T=e.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement
return e?"HTML"!==e.nodeName:!1},P=e.setDocument=function(t){var e,i,o=t?t.ownerDocument||t:B
return o!==N&&9===o.nodeType&&o.documentElement?(N=o,I=o.documentElement,i=o.defaultView,i&&i!==i.top&&(i.addEventListener?i.addEventListener("unload",kt,!1):i.attachEvent&&i.attachEvent("onunload",kt)),A=!T(o),w.attributes=n(function(t){return t.className="i",!t.getAttribute("className")}),w.getElementsByTagName=n(function(t){return t.appendChild(o.createComment("")),!t.getElementsByTagName("*").length}),w.getElementsByClassName=vt.test(o.getElementsByClassName),w.getById=n(function(t){return I.appendChild(t).id=F,!o.getElementsByName||!o.getElementsByName(F).length}),w.getById?(x.find.ID=function(t,e){if("undefined"!=typeof e.getElementById&&A){var i=e.getElementById(t)
return i&&i.parentNode?[i]:[]}},x.filter.ID=function(t){var e=t.replace(wt,xt)
return function(t){return t.getAttribute("id")===e}}):(delete x.find.ID,x.filter.ID=function(t){var e=t.replace(wt,xt)
return function(t){var i="undefined"!=typeof t.getAttributeNode&&t.getAttributeNode("id")
return i&&i.value===e}}),x.find.TAG=w.getElementsByTagName?function(t,e){return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t):w.qsa?e.querySelectorAll(t):void 0}:function(t,e){var i,o=[],n=0,s=e.getElementsByTagName(t)
if("*"===t){for(;i=s[n++];)1===i.nodeType&&o.push(i)
return o}return s},x.find.CLASS=w.getElementsByClassName&&function(t,e){return A?e.getElementsByClassName(t):void 0},L=[],j=[],(w.qsa=vt.test(o.querySelectorAll))&&(n(function(t){I.appendChild(t).innerHTML="<a id='"+F+"'></a><select id='"+F+"-\f]' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&j.push("[*^$]="+it+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||j.push("\\["+it+"*(?:value|"+et+")"),t.querySelectorAll("[id~="+F+"-]").length||j.push("~="),t.querySelectorAll(":checked").length||j.push(":checked"),t.querySelectorAll("a#"+F+"+*").length||j.push(".#.+[+~]")}),n(function(t){var e=o.createElement("input")
e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&j.push("name"+it+"*[*^$|!~]?="),t.querySelectorAll(":enabled").length||j.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),j.push(",.*:")})),(w.matchesSelector=vt.test(z=I.matches||I.webkitMatchesSelector||I.mozMatchesSelector||I.oMatchesSelector||I.msMatchesSelector))&&n(function(t){w.disconnectedMatch=z.call(t,"div"),z.call(t,"[s!='']:x"),L.push("!=",rt)}),j=j.length&&new RegExp(j.join("|")),L=L.length&&new RegExp(L.join("|")),e=vt.test(I.compareDocumentPosition),R=e||vt.test(I.contains)?function(t,e){var i=9===t.nodeType?t.documentElement:t,o=e&&e.parentNode
return t===o||!(!o||1!==o.nodeType||!(i.contains?i.contains(o):t.compareDocumentPosition&&16&t.compareDocumentPosition(o)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0
return!1},q=e?function(t,e){if(t===e)return E=!0,0
var i=!t.compareDocumentPosition-!e.compareDocumentPosition
return i?i:(i=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&i||!w.sortDetached&&e.compareDocumentPosition(t)===i?t===o||t.ownerDocument===B&&R(B,t)?-1:e===o||e.ownerDocument===B&&R(B,e)?1:S?tt(S,t)-tt(S,e):0:4&i?-1:1)}:function(t,e){if(t===e)return E=!0,0
var i,n=0,s=t.parentNode,a=e.parentNode,h=[t],d=[e]
if(!s||!a)return t===o?-1:e===o?1:s?-1:a?1:S?tt(S,t)-tt(S,e):0
if(s===a)return r(t,e)
for(i=t;i=i.parentNode;)h.unshift(i)
for(i=e;i=i.parentNode;)d.unshift(i)
for(;h[n]===d[n];)n++
return n?r(h[n],d[n]):h[n]===B?-1:d[n]===B?1:0},o):N},e.matches=function(t,i){return e(t,null,null,i)},e.matchesSelector=function(t,i){if((t.ownerDocument||t)!==N&&P(t),i=i.replace(ut,"='$1']"),!(!w.matchesSelector||!A||L&&L.test(i)||j&&j.test(i)))try{var o=z.call(t,i)
if(o||w.disconnectedMatch||t.document&&11!==t.document.nodeType)return o}catch(n){}return e(i,N,null,[t]).length>0},e.contains=function(t,e){return(t.ownerDocument||t)!==N&&P(t),R(t,e)},e.attr=function(t,e){(t.ownerDocument||t)!==N&&P(t)
var i=x.attrHandle[e.toLowerCase()],o=i&&V.call(x.attrHandle,e.toLowerCase())?i(t,e,!A):void 0
return void 0!==o?o:w.attributes||!A?t.getAttribute(e):(o=t.getAttributeNode(e))&&o.specified?o.value:null},e.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},e.uniqueSort=function(t){var e,i=[],o=0,n=0
if(E=!w.detectDuplicates,S=!w.sortStable&&t.slice(0),t.sort(q),E){for(;e=t[n++];)e===t[n]&&(o=i.push(n))
for(;o--;)t.splice(i[o],1)}return S=null,t},k=e.getText=function(t){var e,i="",o=0,n=t.nodeType
if(n){if(1===n||9===n||11===n){if("string"==typeof t.textContent)return t.textContent
for(t=t.firstChild;t;t=t.nextSibling)i+=k(t)}else if(3===n||4===n)return t.nodeValue}else for(;e=t[o++];)i+=k(e)
return i},x=e.selectors={cacheLength:50,createPseudo:o,match:ft,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(wt,xt),t[3]=(t[3]||t[4]||t[5]||"").replace(wt,xt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(t){var e,i=!t[6]&&t[2]
return ft.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":i&&ct.test(i)&&(e=D(i,!0))&&(e=i.indexOf(")",i.length-e)-i.length)&&(t[0]=t[0].slice(0,e),t[2]=i.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(wt,xt).toLowerCase()
return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=W[t+" "]
return e||(e=new RegExp("(^|"+it+")"+t+"("+it+"|$)"))&&W(t,function(t){return e.test("string"==typeof t.className&&t.className||"undefined"!=typeof t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,i,o){return function(n){var s=e.attr(n,t)
return null==s?"!="===i:i?(s+="","="===i?s===o:"!="===i?s!==o:"^="===i?o&&0===s.indexOf(o):"*="===i?o&&s.indexOf(o)>-1:"$="===i?o&&s.slice(-o.length)===o:"~="===i?(" "+s.replace(at," ")+" ").indexOf(o)>-1:"|="===i?s===o||s.slice(0,o.length+1)===o+"-":!1):!0}},CHILD:function(t,e,i,o,n){var s="nth"!==t.slice(0,3),r="last"!==t.slice(-4),a="of-type"===e
return 1===o&&0===n?function(t){return!!t.parentNode}:function(e,i,h){var d,l,u,c,p,f,m=s!==r?"nextSibling":"previousSibling",g=e.parentNode,v=a&&e.nodeName.toLowerCase(),y=!h&&!a
if(g){if(s){for(;m;){for(u=e;u=u[m];)if(a?u.nodeName.toLowerCase()===v:1===u.nodeType)return!1
f=m="only"===t&&!f&&"nextSibling"}return!0}if(f=[r?g.firstChild:g.lastChild],r&&y){for(l=g[F]||(g[F]={}),d=l[t]||[],p=d[0]===H&&d[1],c=d[0]===H&&d[2],u=p&&g.childNodes[p];u=++p&&u&&u[m]||(c=p=0)||f.pop();)if(1===u.nodeType&&++c&&u===e){l[t]=[H,p,c]
break}}else if(y&&(d=(e[F]||(e[F]={}))[t])&&d[0]===H)c=d[1]
else for(;(u=++p&&u&&u[m]||(c=p=0)||f.pop())&&((a?u.nodeName.toLowerCase()!==v:1!==u.nodeType)||!++c||(y&&((u[F]||(u[F]={}))[t]=[H,c]),u!==e)););return c-=n,c===o||c%o===0&&c/o>=0}}},PSEUDO:function(t,i){var n,s=x.pseudos[t]||x.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t)
return s[F]?s(i):s.length>1?(n=[t,t,"",i],x.setFilters.hasOwnProperty(t.toLowerCase())?o(function(t,e){for(var o,n=s(t,i),r=n.length;r--;)o=tt(t,n[r]),t[o]=!(e[o]=n[r])}):function(t){return s(t,0,n)}):s}},pseudos:{not:o(function(t){var e=[],i=[],n=O(t.replace(ht,"$1"))
return n[F]?o(function(t,e,i,o){for(var s,r=n(t,null,o,[]),a=t.length;a--;)(s=r[a])&&(t[a]=!(e[a]=s))}):function(t,o,s){return e[0]=t,n(e,null,s,i),e[0]=null,!i.pop()}}),has:o(function(t){return function(i){return e(t,i).length>0}}),contains:o(function(t){return t=t.replace(wt,xt),function(e){return(e.textContent||e.innerText||k(e)).indexOf(t)>-1}}),lang:o(function(t){return pt.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(wt,xt).toLowerCase(),function(e){var i
do if(i=A?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return i=i.toLowerCase(),i===t||0===i.indexOf(t+"-")
while((e=e.parentNode)&&1===e.nodeType)
return!1}}),target:function(e){var i=t.location&&t.location.hash
return i&&i.slice(1)===e.id},root:function(t){return t===I},focus:function(t){return t===N.activeElement&&(!N.hasFocus||N.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:function(t){return t.disabled===!1},disabled:function(t){return t.disabled===!0},checked:function(t){var e=t.nodeName.toLowerCase()
return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,t.selected===!0},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1
return!0},parent:function(t){return!x.pseudos.empty(t)},header:function(t){return gt.test(t.nodeName)},input:function(t){return mt.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase()
return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e
return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:d(function(){return[0]}),last:d(function(t,e){return[e-1]}),eq:d(function(t,e,i){return[0>i?i+e:i]}),even:d(function(t,e){for(var i=0;e>i;i+=2)t.push(i)
return t}),odd:d(function(t,e){for(var i=1;e>i;i+=2)t.push(i)
return t}),lt:d(function(t,e,i){for(var o=0>i?i+e:i;--o>=0;)t.push(o)
return t}),gt:d(function(t,e,i){for(var o=0>i?i+e:i;++o<e;)t.push(o)
return t})}},x.pseudos.nth=x.pseudos.eq
for(_ in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[_]=a(_)
for(_ in{submit:!0,reset:!0})x.pseudos[_]=h(_)
return u.prototype=x.filters=x.pseudos,x.setFilters=new u,D=e.tokenize=function(t,i){var o,n,s,r,a,h,d,l=G[t+" "]
if(l)return i?0:l.slice(0)
for(a=t,h=[],d=x.preFilter;a;){(!o||(n=dt.exec(a)))&&(n&&(a=a.slice(n[0].length)||a),h.push(s=[])),o=!1,(n=lt.exec(a))&&(o=n.shift(),s.push({value:o,type:n[0].replace(ht," ")}),a=a.slice(o.length))
for(r in x.filter)!(n=ft[r].exec(a))||d[r]&&!(n=d[r](n))||(o=n.shift(),s.push({value:o,type:r,matches:n}),a=a.slice(o.length))
if(!o)break}return i?a.length:a?e.error(t):G(t,h).slice(0)},O=e.compile=function(t,e){var i,o=[],n=[],s=U[t+" "]
if(!s){for(e||(e=D(t)),i=e.length;i--;)s=y(e[i]),s[F]?o.push(s):n.push(s)
s=U(t,b(n,o)),s.selector=t}return s},C=e.select=function(t,e,i,o){var n,s,r,a,h,d="function"==typeof t&&t,u=!o&&D(t=d.selector||t)
if(i=i||[],1===u.length){if(s=u[0]=u[0].slice(0),s.length>2&&"ID"===(r=s[0]).type&&w.getById&&9===e.nodeType&&A&&x.relative[s[1].type]){if(e=(x.find.ID(r.matches[0].replace(wt,xt),e)||[])[0],!e)return i
d&&(e=e.parentNode),t=t.slice(s.shift().value.length)}for(n=ft.needsContext.test(t)?0:s.length;n--&&(r=s[n],!x.relative[a=r.type]);)if((h=x.find[a])&&(o=h(r.matches[0].replace(wt,xt),bt.test(s[0].type)&&l(e.parentNode)||e))){if(s.splice(n,1),t=o.length&&c(s),!t)return Q.apply(i,o),i
break}}return(d||O(t,u))(o,e,!A,i,bt.test(t)&&l(e.parentNode)||e),i},w.sortStable=F.split("").sort(q).join("")===F,w.detectDuplicates=!!E,P(),w.sortDetached=n(function(t){return 1&t.compareDocumentPosition(N.createElement("div"))}),n(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||s("type|href|height|width",function(t,e,i){return i?void 0:t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),w.attributes&&n(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||s("value",function(t,e,i){return i||"input"!==t.nodeName.toLowerCase()?void 0:t.defaultValue}),n(function(t){return null==t.getAttribute("disabled")})||s(et,function(t,e,i){var o
return i?void 0:t[e]===!0?e.toLowerCase():(o=t.getAttributeNode(e))&&o.specified?o.value:null}),e}(t)
J.find=nt,J.expr=nt.selectors,J.expr[":"]=J.expr.pseudos,J.unique=nt.uniqueSort,J.text=nt.getText,J.isXMLDoc=nt.isXML,J.contains=nt.contains
var st=J.expr.match.needsContext,rt=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,at=/^.[^:#\[\.,]*$/
J.filter=function(t,e,i){var o=e[0]
return i&&(t=":not("+t+")"),1===e.length&&1===o.nodeType?J.find.matchesSelector(o,t)?[o]:[]:J.find.matches(t,J.grep(e,function(t){return 1===t.nodeType}))},J.fn.extend({find:function(t){var e,i=this.length,o=[],n=this
if("string"!=typeof t)return this.pushStack(J(t).filter(function(){for(e=0;i>e;e++)if(J.contains(n[e],this))return!0}))
for(e=0;i>e;e++)J.find(t,n[e],o)
return o=this.pushStack(i>1?J.unique(o):o),o.selector=this.selector?this.selector+" "+t:t,o},filter:function(t){return this.pushStack(o(this,t||[],!1))},not:function(t){return this.pushStack(o(this,t||[],!0))},is:function(t){return!!o(this,"string"==typeof t&&st.test(t)?J(t):t||[],!1).length}})
var ht,dt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,lt=J.fn.init=function(t,e){var i,o
if(!t)return this
if("string"==typeof t){if(i="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:dt.exec(t),!i||!i[1]&&e)return!e||e.jquery?(e||ht).find(t):this.constructor(e).find(t)
if(i[1]){if(e=e instanceof J?e[0]:e,J.merge(this,J.parseHTML(i[1],e&&e.nodeType?e.ownerDocument||e:K,!0)),rt.test(i[1])&&J.isPlainObject(e))for(i in e)J.isFunction(this[i])?this[i](e[i]):this.attr(i,e[i])
return this}return o=K.getElementById(i[2]),o&&o.parentNode&&(this.length=1,this[0]=o),this.context=K,this.selector=t,this}return t.nodeType?(this.context=this[0]=t,this.length=1,this):J.isFunction(t)?"undefined"!=typeof ht.ready?ht.ready(t):t(J):(void 0!==t.selector&&(this.selector=t.selector,this.context=t.context),J.makeArray(t,this))}
lt.prototype=J.fn,ht=J(K)
var ut=/^(?:parents|prev(?:Until|All))/,ct={children:!0,contents:!0,next:!0,prev:!0}
J.extend({dir:function(t,e,i){for(var o=[],n=void 0!==i;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(n&&J(t).is(i))break
o.push(t)}return o},sibling:function(t,e){for(var i=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&i.push(t)
return i}}),J.fn.extend({has:function(t){var e=J(t,this),i=e.length
return this.filter(function(){for(var t=0;i>t;t++)if(J.contains(this,e[t]))return!0})},closest:function(t,e){for(var i,o=0,n=this.length,s=[],r=st.test(t)||"string"!=typeof t?J(t,e||this.context):0;n>o;o++)for(i=this[o];i&&i!==e;i=i.parentNode)if(i.nodeType<11&&(r?r.index(i)>-1:1===i.nodeType&&J.find.matchesSelector(i,t))){s.push(i)
break}return this.pushStack(s.length>1?J.unique(s):s)},index:function(t){return t?"string"==typeof t?q.call(J(t),this[0]):q.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(J.unique(J.merge(this.get(),J(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),J.each({parent:function(t){var e=t.parentNode
return e&&11!==e.nodeType?e:null},parents:function(t){return J.dir(t,"parentNode")},parentsUntil:function(t,e,i){return J.dir(t,"parentNode",i)},next:function(t){return n(t,"nextSibling")},prev:function(t){return n(t,"previousSibling")},nextAll:function(t){return J.dir(t,"nextSibling")},prevAll:function(t){return J.dir(t,"previousSibling")},nextUntil:function(t,e,i){return J.dir(t,"nextSibling",i)},prevUntil:function(t,e,i){return J.dir(t,"previousSibling",i)},siblings:function(t){return J.sibling((t.parentNode||{}).firstChild,t)},children:function(t){return J.sibling(t.firstChild)},contents:function(t){return t.contentDocument||J.merge([],t.childNodes)}},function(t,e){J.fn[t]=function(i,o){var n=J.map(this,e,i)
return"Until"!==t.slice(-5)&&(o=i),o&&"string"==typeof o&&(n=J.filter(o,n)),this.length>1&&(ct[t]||J.unique(n),ut.test(t)&&n.reverse()),this.pushStack(n)}})
var pt=/\S+/g,ft={}
J.Callbacks=function(t){t="string"==typeof t?ft[t]||s(t):J.extend({},t)
var e,i,o,n,r,a,h=[],d=!t.once&&[],l=function(s){for(e=t.memory&&s,i=!0,a=n||0,n=0,r=h.length,o=!0;h&&r>a;a++)if(h[a].apply(s[0],s[1])===!1&&t.stopOnFalse){e=!1
break}o=!1,h&&(d?d.length&&l(d.shift()):e?h=[]:u.disable())},u={add:function(){if(h){var i=h.length
!function s(e){J.each(e,function(e,i){var o=J.type(i)
"function"===o?t.unique&&u.has(i)||h.push(i):i&&i.length&&"string"!==o&&s(i)})}(arguments),o?r=h.length:e&&(n=i,l(e))}return this},remove:function(){return h&&J.each(arguments,function(t,e){for(var i;(i=J.inArray(e,h,i))>-1;)h.splice(i,1),o&&(r>=i&&r--,a>=i&&a--)}),this},has:function(t){return t?J.inArray(t,h)>-1:!(!h||!h.length)},empty:function(){return h=[],r=0,this},disable:function(){return h=d=e=void 0,this},disabled:function(){return!h},lock:function(){return d=void 0,e||u.disable(),this},locked:function(){return!d},fireWith:function(t,e){return!h||i&&!d||(e=e||[],e=[t,e.slice?e.slice():e],o?d.push(e):l(e)),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!i}}
return u},J.extend({Deferred:function(t){var e=[["resolve","done",J.Callbacks("once memory"),"resolved"],["reject","fail",J.Callbacks("once memory"),"rejected"],["notify","progress",J.Callbacks("memory")]],i="pending",o={state:function(){return i},always:function(){return n.done(arguments).fail(arguments),this},then:function(){var t=arguments
return J.Deferred(function(i){J.each(e,function(e,s){var r=J.isFunction(t[e])&&t[e]
n[s[1]](function(){var t=r&&r.apply(this,arguments)
t&&J.isFunction(t.promise)?t.promise().done(i.resolve).fail(i.reject).progress(i.notify):i[s[0]+"With"](this===o?i.promise():this,r?[t]:arguments)})}),t=null}).promise()},promise:function(t){return null!=t?J.extend(t,o):o}},n={}
return o.pipe=o.then,J.each(e,function(t,s){var r=s[2],a=s[3]
o[s[1]]=r.add,a&&r.add(function(){i=a},e[1^t][2].disable,e[2][2].lock),n[s[0]]=function(){return n[s[0]+"With"](this===n?o:this,arguments),this},n[s[0]+"With"]=r.fireWith}),o.promise(n),t&&t.call(n,n),n},when:function(t){var e,i,o,n=0,s=W.call(arguments),r=s.length,a=1!==r||t&&J.isFunction(t.promise)?r:0,h=1===a?t:J.Deferred(),d=function(t,i,o){return function(n){i[t]=this,o[t]=arguments.length>1?W.call(arguments):n,o===e?h.notifyWith(i,o):--a||h.resolveWith(i,o)}}
if(r>1)for(e=new Array(r),i=new Array(r),o=new Array(r);r>n;n++)s[n]&&J.isFunction(s[n].promise)?s[n].promise().done(d(n,o,s)).fail(h.reject).progress(d(n,i,e)):--a
return a||h.resolveWith(o,s),h.promise()}})
var mt
J.fn.ready=function(t){return J.ready.promise().done(t),this},J.extend({isReady:!1,readyWait:1,holdReady:function(t){t?J.readyWait++:J.ready(!0)},ready:function(t){(t===!0?--J.readyWait:J.isReady)||(J.isReady=!0,t!==!0&&--J.readyWait>0||(mt.resolveWith(K,[J]),J.fn.triggerHandler&&(J(K).triggerHandler("ready"),J(K).off("ready"))))}}),J.ready.promise=function(e){return mt||(mt=J.Deferred(),"complete"===K.readyState?setTimeout(J.ready):(K.addEventListener("DOMContentLoaded",r,!1),t.addEventListener("load",r,!1))),mt.promise(e)},J.ready.promise()
var gt=J.access=function(t,e,i,o,n,s,r){var a=0,h=t.length,d=null==i
if("object"===J.type(i)){n=!0
for(a in i)J.access(t,e,a,i[a],!0,s,r)}else if(void 0!==o&&(n=!0,J.isFunction(o)||(r=!0),d&&(r?(e.call(t,o),e=null):(d=e,e=function(t,e,i){return d.call(J(t),i)})),e))for(;h>a;a++)e(t[a],i,r?o:o.call(t[a],a,e(t[a],i)))
return n?t:d?e.call(t):h?e(t[0],i):s}
J.acceptData=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType},a.uid=1,a.accepts=J.acceptData,a.prototype={key:function(t){if(!a.accepts(t))return 0
var e={},i=t[this.expando]
if(!i){i=a.uid++
try{e[this.expando]={value:i},Object.defineProperties(t,e)}catch(o){e[this.expando]=i,J.extend(t,e)}}return this.cache[i]||(this.cache[i]={}),i},set:function(t,e,i){var o,n=this.key(t),s=this.cache[n]
if("string"==typeof e)s[e]=i
else if(J.isEmptyObject(s))J.extend(this.cache[n],e)
else for(o in e)s[o]=e[o]
return s},get:function(t,e){var i=this.cache[this.key(t)]
return void 0===e?i:i[e]},access:function(t,e,i){var o
return void 0===e||e&&"string"==typeof e&&void 0===i?(o=this.get(t,e),void 0!==o?o:this.get(t,J.camelCase(e))):(this.set(t,e,i),void 0!==i?i:e)},remove:function(t,e){var i,o,n,s=this.key(t),r=this.cache[s]
if(void 0===e)this.cache[s]={}
else{J.isArray(e)?o=e.concat(e.map(J.camelCase)):(n=J.camelCase(e),e in r?o=[e,n]:(o=n,o=o in r?[o]:o.match(pt)||[])),i=o.length
for(;i--;)delete r[o[i]]}},hasData:function(t){return!J.isEmptyObject(this.cache[t[this.expando]]||{})},discard:function(t){t[this.expando]&&delete this.cache[t[this.expando]]}}
var vt=new a,yt=new a,bt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,_t=/([A-Z])/g
J.extend({hasData:function(t){return yt.hasData(t)||vt.hasData(t)},data:function(t,e,i){return yt.access(t,e,i)},removeData:function(t,e){yt.remove(t,e)},_data:function(t,e,i){return vt.access(t,e,i)},_removeData:function(t,e){vt.remove(t,e)}}),J.fn.extend({data:function(t,e){var i,o,n,s=this[0],r=s&&s.attributes
if(void 0===t){if(this.length&&(n=yt.get(s),1===s.nodeType&&!vt.get(s,"hasDataAttrs"))){for(i=r.length;i--;)r[i]&&(o=r[i].name,0===o.indexOf("data-")&&(o=J.camelCase(o.slice(5)),h(s,o,n[o])))
vt.set(s,"hasDataAttrs",!0)}return n}return"object"==typeof t?this.each(function(){yt.set(this,t)}):gt(this,function(e){var i,o=J.camelCase(t)
if(s&&void 0===e){if(i=yt.get(s,t),void 0!==i)return i
if(i=yt.get(s,o),void 0!==i)return i
if(i=h(s,o,void 0),void 0!==i)return i}else this.each(function(){var i=yt.get(this,o)
yt.set(this,o,e),-1!==t.indexOf("-")&&void 0!==i&&yt.set(this,t,e)})},null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){yt.remove(this,t)})}}),J.extend({queue:function(t,e,i){var o
return t?(e=(e||"fx")+"queue",o=vt.get(t,e),i&&(!o||J.isArray(i)?o=vt.access(t,e,J.makeArray(i)):o.push(i)),o||[]):void 0},dequeue:function(t,e){e=e||"fx"
var i=J.queue(t,e),o=i.length,n=i.shift(),s=J._queueHooks(t,e),r=function(){J.dequeue(t,e)}
"inprogress"===n&&(n=i.shift(),o--),n&&("fx"===e&&i.unshift("inprogress"),delete s.stop,n.call(t,r,s)),!o&&s&&s.empty.fire()},_queueHooks:function(t,e){var i=e+"queueHooks"
return vt.get(t,i)||vt.access(t,i,{empty:J.Callbacks("once memory").add(function(){vt.remove(t,[e+"queue",i])})})}}),J.fn.extend({queue:function(t,e){var i=2
return"string"!=typeof t&&(e=t,t="fx",i--),arguments.length<i?J.queue(this[0],t):void 0===e?this:this.each(function(){var i=J.queue(this,t,e)
J._queueHooks(this,t),"fx"===t&&"inprogress"!==i[0]&&J.dequeue(this,t)})},dequeue:function(t){return this.each(function(){J.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var i,o=1,n=J.Deferred(),s=this,r=this.length,a=function(){--o||n.resolveWith(s,[s])}
for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";r--;)i=vt.get(s[r],t+"queueHooks"),i&&i.empty&&(o++,i.empty.add(a))
return a(),n.promise(e)}})
var wt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,xt=["Top","Right","Bottom","Left"],kt=function(t,e){return t=e||t,"none"===J.css(t,"display")||!J.contains(t.ownerDocument,t)},Tt=/^(?:checkbox|radio)$/i
!function(){var t=K.createDocumentFragment(),e=t.appendChild(K.createElement("div")),i=K.createElement("input")
i.setAttribute("type","radio"),i.setAttribute("checked","checked"),i.setAttribute("name","t"),e.appendChild(i),Z.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",Z.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}()
var Dt="undefined"
Z.focusinBubbles="onfocusin"in t
var Ot=/^key/,Ct=/^(?:mouse|pointer|contextmenu)|click/,Mt=/^(?:focusinfocus|focusoutblur)$/,St=/^([^.]*)(?:\.(.+)|)$/
J.event={global:{},add:function(t,e,i,o,n){var s,r,a,h,d,l,u,c,p,f,m,g=vt.get(t)
if(g)for(i.handler&&(s=i,i=s.handler,n=s.selector),i.guid||(i.guid=J.guid++),(h=g.events)||(h=g.events={}),(r=g.handle)||(r=g.handle=function(e){return typeof J!==Dt&&J.event.triggered!==e.type?J.event.dispatch.apply(t,arguments):void 0}),e=(e||"").match(pt)||[""],d=e.length;d--;)a=St.exec(e[d])||[],p=m=a[1],f=(a[2]||"").split(".").sort(),p&&(u=J.event.special[p]||{},p=(n?u.delegateType:u.bindType)||p,u=J.event.special[p]||{},l=J.extend({type:p,origType:m,data:o,handler:i,guid:i.guid,selector:n,needsContext:n&&J.expr.match.needsContext.test(n),namespace:f.join(".")},s),(c=h[p])||(c=h[p]=[],c.delegateCount=0,u.setup&&u.setup.call(t,o,f,r)!==!1||t.addEventListener&&t.addEventListener(p,r,!1)),u.add&&(u.add.call(t,l),l.handler.guid||(l.handler.guid=i.guid)),n?c.splice(c.delegateCount++,0,l):c.push(l),J.event.global[p]=!0)},remove:function(t,e,i,o,n){var s,r,a,h,d,l,u,c,p,f,m,g=vt.hasData(t)&&vt.get(t)
if(g&&(h=g.events)){for(e=(e||"").match(pt)||[""],d=e.length;d--;)if(a=St.exec(e[d])||[],p=m=a[1],f=(a[2]||"").split(".").sort(),p){for(u=J.event.special[p]||{},p=(o?u.delegateType:u.bindType)||p,c=h[p]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),r=s=c.length;s--;)l=c[s],!n&&m!==l.origType||i&&i.guid!==l.guid||a&&!a.test(l.namespace)||o&&o!==l.selector&&("**"!==o||!l.selector)||(c.splice(s,1),l.selector&&c.delegateCount--,u.remove&&u.remove.call(t,l))
r&&!c.length&&(u.teardown&&u.teardown.call(t,f,g.handle)!==!1||J.removeEvent(t,p,g.handle),delete h[p])}else for(p in h)J.event.remove(t,p+e[d],i,o,!0)
J.isEmptyObject(h)&&(delete g.handle,vt.remove(t,"events"))}},trigger:function(e,i,o,n){var s,r,a,h,d,l,u,c=[o||K],p=X.call(e,"type")?e.type:e,f=X.call(e,"namespace")?e.namespace.split("."):[]
if(r=a=o=o||K,3!==o.nodeType&&8!==o.nodeType&&!Mt.test(p+J.event.triggered)&&(p.indexOf(".")>=0&&(f=p.split("."),p=f.shift(),f.sort()),d=p.indexOf(":")<0&&"on"+p,e=e[J.expando]?e:new J.Event(p,"object"==typeof e&&e),e.isTrigger=n?2:3,e.namespace=f.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=o),i=null==i?[e]:J.makeArray(i,[e]),u=J.event.special[p]||{},n||!u.trigger||u.trigger.apply(o,i)!==!1)){if(!n&&!u.noBubble&&!J.isWindow(o)){for(h=u.delegateType||p,Mt.test(h+p)||(r=r.parentNode);r;r=r.parentNode)c.push(r),a=r
a===(o.ownerDocument||K)&&c.push(a.defaultView||a.parentWindow||t)}for(s=0;(r=c[s++])&&!e.isPropagationStopped();)e.type=s>1?h:u.bindType||p,l=(vt.get(r,"events")||{})[e.type]&&vt.get(r,"handle"),l&&l.apply(r,i),l=d&&r[d],l&&l.apply&&J.acceptData(r)&&(e.result=l.apply(r,i),e.result===!1&&e.preventDefault())
return e.type=p,n||e.isDefaultPrevented()||u._default&&u._default.apply(c.pop(),i)!==!1||!J.acceptData(o)||d&&J.isFunction(o[p])&&!J.isWindow(o)&&(a=o[d],a&&(o[d]=null),J.event.triggered=p,o[p](),J.event.triggered=void 0,a&&(o[d]=a)),e.result}},dispatch:function(t){t=J.event.fix(t)
var e,i,o,n,s,r=[],a=W.call(arguments),h=(vt.get(this,"events")||{})[t.type]||[],d=J.event.special[t.type]||{}
if(a[0]=t,t.delegateTarget=this,!d.preDispatch||d.preDispatch.call(this,t)!==!1){for(r=J.event.handlers.call(this,t,h),e=0;(n=r[e++])&&!t.isPropagationStopped();)for(t.currentTarget=n.elem,i=0;(s=n.handlers[i++])&&!t.isImmediatePropagationStopped();)(!t.namespace_re||t.namespace_re.test(s.namespace))&&(t.handleObj=s,t.data=s.data,o=((J.event.special[s.origType]||{}).handle||s.handler).apply(n.elem,a),void 0!==o&&(t.result=o)===!1&&(t.preventDefault(),t.stopPropagation()))
return d.postDispatch&&d.postDispatch.call(this,t),t.result}},handlers:function(t,e){var i,o,n,s,r=[],a=e.delegateCount,h=t.target
if(a&&h.nodeType&&(!t.button||"click"!==t.type))for(;h!==this;h=h.parentNode||this)if(h.disabled!==!0||"click"!==t.type){for(o=[],i=0;a>i;i++)s=e[i],n=s.selector+" ",void 0===o[n]&&(o[n]=s.needsContext?J(n,this).index(h)>=0:J.find(n,this,null,[h]).length),o[n]&&o.push(s)
o.length&&r.push({elem:h,handlers:o})}return a<e.length&&r.push({elem:this,handlers:e.slice(a)}),r},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),t}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,e){var i,o,n,s=e.button
return null==t.pageX&&null!=e.clientX&&(i=t.target.ownerDocument||K,o=i.documentElement,n=i.body,t.pageX=e.clientX+(o&&o.scrollLeft||n&&n.scrollLeft||0)-(o&&o.clientLeft||n&&n.clientLeft||0),t.pageY=e.clientY+(o&&o.scrollTop||n&&n.scrollTop||0)-(o&&o.clientTop||n&&n.clientTop||0)),t.which||void 0===s||(t.which=1&s?1:2&s?3:4&s?2:0),t}},fix:function(t){if(t[J.expando])return t
var e,i,o,n=t.type,s=t,r=this.fixHooks[n]
for(r||(this.fixHooks[n]=r=Ct.test(n)?this.mouseHooks:Ot.test(n)?this.keyHooks:{}),o=r.props?this.props.concat(r.props):this.props,t=new J.Event(s),e=o.length;e--;)i=o[e],t[i]=s[i]
return t.target||(t.target=K),3===t.target.nodeType&&(t.target=t.target.parentNode),r.filter?r.filter(t,s):t},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==u()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===u()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&J.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(t){return J.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}},simulate:function(t,e,i,o){var n=J.extend(new J.Event,i,{type:t,isSimulated:!0,originalEvent:{}})
o?J.event.trigger(n,null,e):J.event.dispatch.call(e,n),n.isDefaultPrevented()&&i.preventDefault()}},J.removeEvent=function(t,e,i){t.removeEventListener&&t.removeEventListener(e,i,!1)},J.Event=function(t,e){return this instanceof J.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&t.returnValue===!1?d:l):this.type=t,e&&J.extend(this,e),this.timeStamp=t&&t.timeStamp||J.now(),void(this[J.expando]=!0)):new J.Event(t,e)},J.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var t=this.originalEvent
this.isDefaultPrevented=d,t&&t.preventDefault&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent
this.isPropagationStopped=d,t&&t.stopPropagation&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent
this.isImmediatePropagationStopped=d,t&&t.stopImmediatePropagation&&t.stopImmediatePropagation(),this.stopPropagation()}},J.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){J.event.special[t]={delegateType:e,bindType:e,handle:function(t){var i,o=this,n=t.relatedTarget,s=t.handleObj
return(!n||n!==o&&!J.contains(o,n))&&(t.type=s.origType,i=s.handler.apply(this,arguments),t.type=e),i}}}),Z.focusinBubbles||J.each({focus:"focusin",blur:"focusout"},function(t,e){var i=function(t){J.event.simulate(e,t.target,J.event.fix(t),!0)}
J.event.special[e]={setup:function(){var o=this.ownerDocument||this,n=vt.access(o,e)
n||o.addEventListener(t,i,!0),vt.access(o,e,(n||0)+1)},teardown:function(){var o=this.ownerDocument||this,n=vt.access(o,e)-1
n?vt.access(o,e,n):(o.removeEventListener(t,i,!0),vt.remove(o,e))}}}),J.fn.extend({on:function(t,e,i,o,n){var s,r
if("object"==typeof t){"string"!=typeof e&&(i=i||e,e=void 0)
for(r in t)this.on(r,e,i,t[r],n)
return this}if(null==i&&null==o?(o=e,i=e=void 0):null==o&&("string"==typeof e?(o=i,i=void 0):(o=i,i=e,e=void 0)),o===!1)o=l
else if(!o)return this
return 1===n&&(s=o,o=function(t){return J().off(t),s.apply(this,arguments)},o.guid=s.guid||(s.guid=J.guid++)),this.each(function(){J.event.add(this,t,o,i,e)})},one:function(t,e,i,o){return this.on(t,e,i,o,1)},off:function(t,e,i){var o,n
if(t&&t.preventDefault&&t.handleObj)return o=t.handleObj,J(t.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this
if("object"==typeof t){for(n in t)this.off(n,e,t[n])
return this}return(e===!1||"function"==typeof e)&&(i=e,e=void 0),i===!1&&(i=l),this.each(function(){J.event.remove(this,t,i,e)})},trigger:function(t,e){return this.each(function(){J.event.trigger(t,e,this)})},triggerHandler:function(t,e){var i=this[0]
return i?J.event.trigger(t,e,i,!0):void 0}})
var Et=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Pt=/<([\w:]+)/,Nt=/<|&#?\w+;/,It=/<(?:script|style|link)/i,At=/checked\s*(?:[^=]|=\s*.checked.)/i,jt=/^$|\/(?:java|ecma)script/i,Lt=/^true\/(.*)/,zt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Rt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
Rt.optgroup=Rt.option,Rt.tbody=Rt.tfoot=Rt.colgroup=Rt.caption=Rt.thead,Rt.th=Rt.td,J.extend({clone:function(t,e,i){var o,n,s,r,a=t.cloneNode(!0),h=J.contains(t.ownerDocument,t)
if(!(Z.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||J.isXMLDoc(t)))for(r=v(a),s=v(t),o=0,n=s.length;n>o;o++)y(s[o],r[o])
if(e)if(i)for(s=s||v(t),r=r||v(a),o=0,n=s.length;n>o;o++)g(s[o],r[o])
else g(t,a)
return r=v(a,"script"),r.length>0&&m(r,!h&&v(t,"script")),a},buildFragment:function(t,e,i,o){for(var n,s,r,a,h,d,l=e.createDocumentFragment(),u=[],c=0,p=t.length;p>c;c++)if(n=t[c],n||0===n)if("object"===J.type(n))J.merge(u,n.nodeType?[n]:n)
else if(Nt.test(n)){for(s=s||l.appendChild(e.createElement("div")),r=(Pt.exec(n)||["",""])[1].toLowerCase(),a=Rt[r]||Rt._default,s.innerHTML=a[1]+n.replace(Et,"<$1></$2>")+a[2],d=a[0];d--;)s=s.lastChild
J.merge(u,s.childNodes),s=l.firstChild,s.textContent=""}else u.push(e.createTextNode(n))
for(l.textContent="",c=0;n=u[c++];)if((!o||-1===J.inArray(n,o))&&(h=J.contains(n.ownerDocument,n),s=v(l.appendChild(n),"script"),h&&m(s),i))for(d=0;n=s[d++];)jt.test(n.type||"")&&i.push(n)
return l},cleanData:function(t){for(var e,i,o,n,s=J.event.special,r=0;void 0!==(i=t[r]);r++){if(J.acceptData(i)&&(n=i[vt.expando],n&&(e=vt.cache[n]))){if(e.events)for(o in e.events)s[o]?J.event.remove(i,o):J.removeEvent(i,o,e.handle)
vt.cache[n]&&delete vt.cache[n]}delete yt.cache[i[yt.expando]]}}}),J.fn.extend({text:function(t){return gt(this,function(t){return void 0===t?J.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=t)})},null,t,arguments.length)},append:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=c(this,t)
e.appendChild(t)}})},prepend:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=c(this,t)
e.insertBefore(t,e.firstChild)}})},before:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},remove:function(t,e){for(var i,o=t?J.filter(t,this):this,n=0;null!=(i=o[n]);n++)e||1!==i.nodeType||J.cleanData(v(i)),i.parentNode&&(e&&J.contains(i.ownerDocument,i)&&m(v(i,"script")),i.parentNode.removeChild(i))
return this},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(J.cleanData(v(t,!1)),t.textContent="")
return this},clone:function(t,e){return t=null==t?!1:t,e=null==e?t:e,this.map(function(){return J.clone(this,t,e)})},html:function(t){return gt(this,function(t){var e=this[0]||{},i=0,o=this.length
if(void 0===t&&1===e.nodeType)return e.innerHTML
if("string"==typeof t&&!It.test(t)&&!Rt[(Pt.exec(t)||["",""])[1].toLowerCase()]){t=t.replace(Et,"<$1></$2>")
try{for(;o>i;i++)e=this[i]||{},1===e.nodeType&&(J.cleanData(v(e,!1)),e.innerHTML=t)
e=0}catch(n){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=arguments[0]
return this.domManip(arguments,function(e){t=this.parentNode,J.cleanData(v(this)),t&&t.replaceChild(e,this)}),t&&(t.length||t.nodeType)?this:this.remove()},detach:function(t){return this.remove(t,!0)},domManip:function(t,e){t=G.apply([],t)
var i,o,n,s,r,a,h=0,d=this.length,l=this,u=d-1,c=t[0],m=J.isFunction(c)
if(m||d>1&&"string"==typeof c&&!Z.checkClone&&At.test(c))return this.each(function(i){var o=l.eq(i)
m&&(t[0]=c.call(this,i,o.html())),o.domManip(t,e)})
if(d&&(i=J.buildFragment(t,this[0].ownerDocument,!1,this),o=i.firstChild,1===i.childNodes.length&&(i=o),o)){for(n=J.map(v(i,"script"),p),s=n.length;d>h;h++)r=i,h!==u&&(r=J.clone(r,!0,!0),s&&J.merge(n,v(r,"script"))),e.call(this[h],r,h)
if(s)for(a=n[n.length-1].ownerDocument,J.map(n,f),h=0;s>h;h++)r=n[h],jt.test(r.type||"")&&!vt.access(r,"globalEval")&&J.contains(a,r)&&(r.src?J._evalUrl&&J._evalUrl(r.src):J.globalEval(r.textContent.replace(zt,"")))}return this}}),J.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){J.fn[t]=function(t){for(var i,o=[],n=J(t),s=n.length-1,r=0;s>=r;r++)i=r===s?this:this.clone(!0),J(n[r])[e](i),U.apply(o,i.get())
return this.pushStack(o)}})
var Ft,Bt={},Ht=/^margin/,Yt=new RegExp("^("+wt+")(?!px)[a-z%]+$","i"),Wt=function(e){return e.ownerDocument.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):t.getComputedStyle(e,null)}
!function(){function e(){r.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",r.innerHTML="",n.appendChild(s)
var e=t.getComputedStyle(r,null)
i="1%"!==e.top,o="4px"===e.width,n.removeChild(s)}var i,o,n=K.documentElement,s=K.createElement("div"),r=K.createElement("div")
r.style&&(r.style.backgroundClip="content-box",r.cloneNode(!0).style.backgroundClip="",Z.clearCloneStyle="content-box"===r.style.backgroundClip,s.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",s.appendChild(r),t.getComputedStyle&&J.extend(Z,{pixelPosition:function(){return e(),i},boxSizingReliable:function(){return null==o&&e(),o},reliableMarginRight:function(){var e,i=r.appendChild(K.createElement("div"))
return i.style.cssText=r.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",r.style.width="1px",n.appendChild(s),e=!parseFloat(t.getComputedStyle(i,null).marginRight),n.removeChild(s),r.removeChild(i),e}}))}(),J.swap=function(t,e,i,o){var n,s,r={}
for(s in e)r[s]=t.style[s],t.style[s]=e[s]
n=i.apply(t,o||[])
for(s in e)t.style[s]=r[s]
return n}
var Gt=/^(none|table(?!-c[ea]).+)/,Ut=new RegExp("^("+wt+")(.*)$","i"),qt=new RegExp("^([+-])=("+wt+")","i"),$t={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:"0",fontWeight:"400"},Xt=["Webkit","O","Moz","ms"]
J.extend({cssHooks:{opacity:{get:function(t,e){if(e){var i=w(t,"opacity")
return""===i?"1":i}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(t,e,i,o){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var n,s,r,a=J.camelCase(e),h=t.style
return e=J.cssProps[a]||(J.cssProps[a]=k(h,a)),r=J.cssHooks[e]||J.cssHooks[a],void 0===i?r&&"get"in r&&void 0!==(n=r.get(t,!1,o))?n:h[e]:(s=typeof i,"string"===s&&(n=qt.exec(i))&&(i=(n[1]+1)*n[2]+parseFloat(J.css(t,e)),s="number"),void(null!=i&&i===i&&("number"!==s||J.cssNumber[a]||(i+="px"),Z.clearCloneStyle||""!==i||0!==e.indexOf("background")||(h[e]="inherit"),r&&"set"in r&&void 0===(i=r.set(t,i,o))||(h[e]=i))))}},css:function(t,e,i,o){var n,s,r,a=J.camelCase(e)
return e=J.cssProps[a]||(J.cssProps[a]=k(t.style,a)),r=J.cssHooks[e]||J.cssHooks[a],r&&"get"in r&&(n=r.get(t,!0,i)),void 0===n&&(n=w(t,e,o)),"normal"===n&&e in Vt&&(n=Vt[e]),""===i||i?(s=parseFloat(n),i===!0||J.isNumeric(s)?s||0:n):n}}),J.each(["height","width"],function(t,e){J.cssHooks[e]={get:function(t,i,o){return i?Gt.test(J.css(t,"display"))&&0===t.offsetWidth?J.swap(t,$t,function(){return O(t,e,o)}):O(t,e,o):void 0},set:function(t,i,o){var n=o&&Wt(t)
return T(t,i,o?D(t,e,o,"border-box"===J.css(t,"boxSizing",!1,n),n):0)}}}),J.cssHooks.marginRight=x(Z.reliableMarginRight,function(t,e){return e?J.swap(t,{display:"inline-block"},w,[t,"marginRight"]):void 0}),J.each({margin:"",padding:"",border:"Width"},function(t,e){J.cssHooks[t+e]={expand:function(i){for(var o=0,n={},s="string"==typeof i?i.split(" "):[i];4>o;o++)n[t+xt[o]+e]=s[o]||s[o-2]||s[0]
return n}},Ht.test(t)||(J.cssHooks[t+e].set=T)}),J.fn.extend({css:function(t,e){return gt(this,function(t,e,i){var o,n,s={},r=0
if(J.isArray(e)){for(o=Wt(t),n=e.length;n>r;r++)s[e[r]]=J.css(t,e[r],!1,o)
return s}return void 0!==i?J.style(t,e,i):J.css(t,e)},t,e,arguments.length>1)},show:function(){return C(this,!0)},hide:function(){return C(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){kt(this)?J(this).show():J(this).hide()})}}),J.Tween=M,M.prototype={constructor:M,init:function(t,e,i,o,n,s){this.elem=t,this.prop=i,this.easing=n||"swing",this.options=e,this.start=this.now=this.cur(),this.end=o,this.unit=s||(J.cssNumber[i]?"":"px")},cur:function(){var t=M.propHooks[this.prop]
return t&&t.get?t.get(this):M.propHooks._default.get(this)},run:function(t){var e,i=M.propHooks[this.prop]
return this.pos=e=this.options.duration?J.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):M.propHooks._default.set(this),this}},M.prototype.init.prototype=M.prototype,M.propHooks={_default:{get:function(t){var e
return null==t.elem[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(e=J.css(t.elem,t.prop,""),e&&"auto"!==e?e:0):t.elem[t.prop]},set:function(t){J.fx.step[t.prop]?J.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[J.cssProps[t.prop]]||J.cssHooks[t.prop])?J.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},M.propHooks.scrollTop=M.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},J.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2}},J.fx=M.prototype.init,J.fx.step={}
var Zt,Kt,Qt=/^(?:toggle|show|hide)$/,Jt=new RegExp("^(?:([+-])=|)("+wt+")([a-z%]*)$","i"),te=/queueHooks$/,ee=[N],ie={"*":[function(t,e){var i=this.createTween(t,e),o=i.cur(),n=Jt.exec(e),s=n&&n[3]||(J.cssNumber[t]?"":"px"),r=(J.cssNumber[t]||"px"!==s&&+o)&&Jt.exec(J.css(i.elem,t)),a=1,h=20
if(r&&r[3]!==s){s=s||r[3],n=n||[],r=+o||1
do a=a||".5",r/=a,J.style(i.elem,t,r+s)
while(a!==(a=i.cur()/o)&&1!==a&&--h)}return n&&(r=i.start=+r||+o||0,i.unit=s,i.end=n[1]?r+(n[1]+1)*n[2]:+n[2]),i}]}
J.Animation=J.extend(A,{tweener:function(t,e){J.isFunction(t)?(e=t,t=["*"]):t=t.split(" ")
for(var i,o=0,n=t.length;n>o;o++)i=t[o],ie[i]=ie[i]||[],ie[i].unshift(e)},prefilter:function(t,e){e?ee.unshift(t):ee.push(t)}}),J.speed=function(t,e,i){var o=t&&"object"==typeof t?J.extend({},t):{complete:i||!i&&e||J.isFunction(t)&&t,duration:t,easing:i&&e||e&&!J.isFunction(e)&&e}
return o.duration=J.fx.off?0:"number"==typeof o.duration?o.duration:o.duration in J.fx.speeds?J.fx.speeds[o.duration]:J.fx.speeds._default,(null==o.queue||o.queue===!0)&&(o.queue="fx"),o.old=o.complete,o.complete=function(){J.isFunction(o.old)&&o.old.call(this),o.queue&&J.dequeue(this,o.queue)},o},J.fn.extend({fadeTo:function(t,e,i,o){return this.filter(kt).css("opacity",0).show().end().animate({opacity:e},t,i,o)},animate:function(t,e,i,o){var n=J.isEmptyObject(t),s=J.speed(e,i,o),r=function(){var e=A(this,J.extend({},t),s);(n||vt.get(this,"finish"))&&e.stop(!0)}
return r.finish=r,n||s.queue===!1?this.each(r):this.queue(s.queue,r)},stop:function(t,e,i){var o=function(t){var e=t.stop
delete t.stop,e(i)}
return"string"!=typeof t&&(i=e,e=t,t=void 0),e&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var e=!0,n=null!=t&&t+"queueHooks",s=J.timers,r=vt.get(this)
if(n)r[n]&&r[n].stop&&o(r[n])
else for(n in r)r[n]&&r[n].stop&&te.test(n)&&o(r[n])
for(n=s.length;n--;)s[n].elem!==this||null!=t&&s[n].queue!==t||(s[n].anim.stop(i),e=!1,s.splice(n,1));(e||!i)&&J.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var e,i=vt.get(this),o=i[t+"queue"],n=i[t+"queueHooks"],s=J.timers,r=o?o.length:0
for(i.finish=!0,J.queue(this,t,[]),n&&n.stop&&n.stop.call(this,!0),e=s.length;e--;)s[e].elem===this&&s[e].queue===t&&(s[e].anim.stop(!0),s.splice(e,1))
for(e=0;r>e;e++)o[e]&&o[e].finish&&o[e].finish.call(this)
delete i.finish})}}),J.each(["toggle","show","hide"],function(t,e){var i=J.fn[e]
J.fn[e]=function(t,o,n){return null==t||"boolean"==typeof t?i.apply(this,arguments):this.animate(E(e,!0),t,o,n)}}),J.each({slideDown:E("show"),slideUp:E("hide"),slideToggle:E("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){J.fn[t]=function(t,i,o){return this.animate(e,t,i,o)}}),J.timers=[],J.fx.tick=function(){var t,e=0,i=J.timers
for(Zt=J.now();e<i.length;e++)t=i[e],t()||i[e]!==t||i.splice(e--,1)
i.length||J.fx.stop(),Zt=void 0},J.fx.timer=function(t){J.timers.push(t),t()?J.fx.start():J.timers.pop()},J.fx.interval=13,J.fx.start=function(){Kt||(Kt=setInterval(J.fx.tick,J.fx.interval))},J.fx.stop=function(){clearInterval(Kt),Kt=null},J.fx.speeds={slow:600,fast:200,_default:400},J.fn.delay=function(t,e){return t=J.fx?J.fx.speeds[t]||t:t,e=e||"fx",this.queue(e,function(e,i){var o=setTimeout(e,t)
i.stop=function(){clearTimeout(o)}})},function(){var t=K.createElement("input"),e=K.createElement("select"),i=e.appendChild(K.createElement("option"))
t.type="checkbox",Z.checkOn=""!==t.value,Z.optSelected=i.selected,e.disabled=!0,Z.optDisabled=!i.disabled,t=K.createElement("input"),t.value="t",t.type="radio",Z.radioValue="t"===t.value}()
var oe,ne,se=J.expr.attrHandle
J.fn.extend({attr:function(t,e){return gt(this,J.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){J.removeAttr(this,t)})}}),J.extend({attr:function(t,e,i){var o,n,s=t.nodeType
return t&&3!==s&&8!==s&&2!==s?typeof t.getAttribute===Dt?J.prop(t,e,i):(1===s&&J.isXMLDoc(t)||(e=e.toLowerCase(),o=J.attrHooks[e]||(J.expr.match.bool.test(e)?ne:oe)),void 0===i?o&&"get"in o&&null!==(n=o.get(t,e))?n:(n=J.find.attr(t,e),null==n?void 0:n):null!==i?o&&"set"in o&&void 0!==(n=o.set(t,i,e))?n:(t.setAttribute(e,i+""),i):void J.removeAttr(t,e)):void 0},removeAttr:function(t,e){var i,o,n=0,s=e&&e.match(pt)
if(s&&1===t.nodeType)for(;i=s[n++];)o=J.propFix[i]||i,J.expr.match.bool.test(i)&&(t[o]=!1),t.removeAttribute(i)},attrHooks:{type:{set:function(t,e){if(!Z.radioValue&&"radio"===e&&J.nodeName(t,"input")){var i=t.value
return t.setAttribute("type",e),i&&(t.value=i),e}}}}}),ne={set:function(t,e,i){return e===!1?J.removeAttr(t,i):t.setAttribute(i,i),i}},J.each(J.expr.match.bool.source.match(/\w+/g),function(t,e){var i=se[e]||J.find.attr
se[e]=function(t,e,o){var n,s
return o||(s=se[e],se[e]=n,n=null!=i(t,e,o)?e.toLowerCase():null,se[e]=s),n}})
var re=/^(?:input|select|textarea|button)$/i
J.fn.extend({prop:function(t,e){return gt(this,J.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[J.propFix[t]||t]})}}),J.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(t,e,i){var o,n,s,r=t.nodeType
return t&&3!==r&&8!==r&&2!==r?(s=1!==r||!J.isXMLDoc(t),s&&(e=J.propFix[e]||e,n=J.propHooks[e]),void 0!==i?n&&"set"in n&&void 0!==(o=n.set(t,i,e))?o:t[e]=i:n&&"get"in n&&null!==(o=n.get(t,e))?o:t[e]):void 0},propHooks:{tabIndex:{get:function(t){return t.hasAttribute("tabindex")||re.test(t.nodeName)||t.href?t.tabIndex:-1}}}}),Z.optSelected||(J.propHooks.selected={get:function(t){var e=t.parentNode
return e&&e.parentNode&&e.parentNode.selectedIndex,null}}),J.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){J.propFix[this.toLowerCase()]=this})
var ae=/[\t\r\n\f]/g
J.fn.extend({addClass:function(t){var e,i,o,n,s,r,a="string"==typeof t&&t,h=0,d=this.length
if(J.isFunction(t))return this.each(function(e){J(this).addClass(t.call(this,e,this.className))})
if(a)for(e=(t||"").match(pt)||[];d>h;h++)if(i=this[h],o=1===i.nodeType&&(i.className?(" "+i.className+" ").replace(ae," "):" ")){for(s=0;n=e[s++];)o.indexOf(" "+n+" ")<0&&(o+=n+" ")
r=J.trim(o),i.className!==r&&(i.className=r)}return this},removeClass:function(t){var e,i,o,n,s,r,a=0===arguments.length||"string"==typeof t&&t,h=0,d=this.length
if(J.isFunction(t))return this.each(function(e){J(this).removeClass(t.call(this,e,this.className))})
if(a)for(e=(t||"").match(pt)||[];d>h;h++)if(i=this[h],o=1===i.nodeType&&(i.className?(" "+i.className+" ").replace(ae," "):"")){for(s=0;n=e[s++];)for(;o.indexOf(" "+n+" ")>=0;)o=o.replace(" "+n+" "," ")
r=t?J.trim(o):"",i.className!==r&&(i.className=r)}return this},toggleClass:function(t,e){var i=typeof t
return"boolean"==typeof e&&"string"===i?e?this.addClass(t):this.removeClass(t):this.each(J.isFunction(t)?function(i){J(this).toggleClass(t.call(this,i,this.className,e),e)}:function(){if("string"===i)for(var e,o=0,n=J(this),s=t.match(pt)||[];e=s[o++];)n.hasClass(e)?n.removeClass(e):n.addClass(e)
else(i===Dt||"boolean"===i)&&(this.className&&vt.set(this,"__className__",this.className),this.className=this.className||t===!1?"":vt.get(this,"__className__")||"")})},hasClass:function(t){for(var e=" "+t+" ",i=0,o=this.length;o>i;i++)if(1===this[i].nodeType&&(" "+this[i].className+" ").replace(ae," ").indexOf(e)>=0)return!0
return!1}})
var he=/\r/g
J.fn.extend({val:function(t){var e,i,o,n=this[0]
return arguments.length?(o=J.isFunction(t),this.each(function(i){var n
1===this.nodeType&&(n=o?t.call(this,i,J(this).val()):t,null==n?n="":"number"==typeof n?n+="":J.isArray(n)&&(n=J.map(n,function(t){return null==t?"":t+""})),e=J.valHooks[this.type]||J.valHooks[this.nodeName.toLowerCase()],e&&"set"in e&&void 0!==e.set(this,n,"value")||(this.value=n))})):n?(e=J.valHooks[n.type]||J.valHooks[n.nodeName.toLowerCase()],e&&"get"in e&&void 0!==(i=e.get(n,"value"))?i:(i=n.value,"string"==typeof i?i.replace(he,""):null==i?"":i)):void 0}}),J.extend({valHooks:{option:{get:function(t){var e=J.find.attr(t,"value")
return null!=e?e:J.trim(J.text(t))}},select:{get:function(t){for(var e,i,o=t.options,n=t.selectedIndex,s="select-one"===t.type||0>n,r=s?null:[],a=s?n+1:o.length,h=0>n?a:s?n:0;a>h;h++)if(i=o[h],!(!i.selected&&h!==n||(Z.optDisabled?i.disabled:null!==i.getAttribute("disabled"))||i.parentNode.disabled&&J.nodeName(i.parentNode,"optgroup"))){if(e=J(i).val(),s)return e
r.push(e)}return r},set:function(t,e){for(var i,o,n=t.options,s=J.makeArray(e),r=n.length;r--;)o=n[r],(o.selected=J.inArray(o.value,s)>=0)&&(i=!0)
return i||(t.selectedIndex=-1),s}}}}),J.each(["radio","checkbox"],function(){J.valHooks[this]={set:function(t,e){return J.isArray(e)?t.checked=J.inArray(J(t).val(),e)>=0:void 0}},Z.checkOn||(J.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})}),J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(t,e){J.fn[e]=function(t,i){return arguments.length>0?this.on(e,null,t,i):this.trigger(e)}}),J.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)},bind:function(t,e,i){return this.on(t,null,e,i)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,i,o){return this.on(e,t,i,o)},undelegate:function(t,e,i){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",i)}})
var de=J.now(),le=/\?/
J.parseJSON=function(t){return JSON.parse(t+"")},J.parseXML=function(t){var e,i
if(!t||"string"!=typeof t)return null
try{i=new DOMParser,e=i.parseFromString(t,"text/xml")}catch(o){e=void 0}return(!e||e.getElementsByTagName("parsererror").length)&&J.error("Invalid XML: "+t),e}
var ue=/#.*$/,ce=/([?&])_=[^&]*/,pe=/^(.*?):[ \t]*([^\r\n]*)$/gm,fe=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,me=/^(?:GET|HEAD)$/,ge=/^\/\//,ve=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,ye={},be={},_e="*/".concat("*"),we=t.location.href,xe=ve.exec(we.toLowerCase())||[]
J.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:we,type:"GET",isLocal:fe.test(xe[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":_e,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":J.parseJSON,"text xml":J.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?z(z(t,J.ajaxSettings),e):z(J.ajaxSettings,t)},ajaxPrefilter:j(ye),ajaxTransport:j(be),ajax:function(t,e){function i(t,e,i,r){var h,l,v,y,_,x=e
2!==b&&(b=2,a&&clearTimeout(a),o=void 0,s=r||"",w.readyState=t>0?4:0,h=t>=200&&300>t||304===t,i&&(y=R(u,w,i)),y=F(u,y,w,h),h?(u.ifModified&&(_=w.getResponseHeader("Last-Modified"),_&&(J.lastModified[n]=_),_=w.getResponseHeader("etag"),_&&(J.etag[n]=_)),204===t||"HEAD"===u.type?x="nocontent":304===t?x="notmodified":(x=y.state,l=y.data,v=y.error,h=!v)):(v=x,(t||!x)&&(x="error",0>t&&(t=0))),w.status=t,w.statusText=(e||x)+"",h?f.resolveWith(c,[l,x,w]):f.rejectWith(c,[w,x,v]),w.statusCode(g),g=void 0,d&&p.trigger(h?"ajaxSuccess":"ajaxError",[w,u,h?l:v]),m.fireWith(c,[w,x]),d&&(p.trigger("ajaxComplete",[w,u]),--J.active||J.event.trigger("ajaxStop")))}"object"==typeof t&&(e=t,t=void 0),e=e||{}
var o,n,s,r,a,h,d,l,u=J.ajaxSetup({},e),c=u.context||u,p=u.context&&(c.nodeType||c.jquery)?J(c):J.event,f=J.Deferred(),m=J.Callbacks("once memory"),g=u.statusCode||{},v={},y={},b=0,_="canceled",w={readyState:0,getResponseHeader:function(t){var e
if(2===b){if(!r)for(r={};e=pe.exec(s);)r[e[1].toLowerCase()]=e[2]
e=r[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return 2===b?s:null},setRequestHeader:function(t,e){var i=t.toLowerCase()
return b||(t=y[i]=y[i]||t,v[t]=e),this},overrideMimeType:function(t){return b||(u.mimeType=t),this},statusCode:function(t){var e
if(t)if(2>b)for(e in t)g[e]=[g[e],t[e]]
else w.always(t[w.status])
return this},abort:function(t){var e=t||_
return o&&o.abort(e),i(0,e),this}}
if(f.promise(w).complete=m.add,w.success=w.done,w.error=w.fail,u.url=((t||u.url||we)+"").replace(ue,"").replace(ge,xe[1]+"//"),u.type=e.method||e.type||u.method||u.type,u.dataTypes=J.trim(u.dataType||"*").toLowerCase().match(pt)||[""],null==u.crossDomain&&(h=ve.exec(u.url.toLowerCase()),u.crossDomain=!(!h||h[1]===xe[1]&&h[2]===xe[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(xe[3]||("http:"===xe[1]?"80":"443")))),u.data&&u.processData&&"string"!=typeof u.data&&(u.data=J.param(u.data,u.traditional)),L(ye,u,e,w),2===b)return w
d=J.event&&u.global,d&&0===J.active++&&J.event.trigger("ajaxStart"),u.type=u.type.toUpperCase(),u.hasContent=!me.test(u.type),n=u.url,u.hasContent||(u.data&&(n=u.url+=(le.test(n)?"&":"?")+u.data,delete u.data),u.cache===!1&&(u.url=ce.test(n)?n.replace(ce,"$1_="+de++):n+(le.test(n)?"&":"?")+"_="+de++)),u.ifModified&&(J.lastModified[n]&&w.setRequestHeader("If-Modified-Since",J.lastModified[n]),J.etag[n]&&w.setRequestHeader("If-None-Match",J.etag[n])),(u.data&&u.hasContent&&u.contentType!==!1||e.contentType)&&w.setRequestHeader("Content-Type",u.contentType),w.setRequestHeader("Accept",u.dataTypes[0]&&u.accepts[u.dataTypes[0]]?u.accepts[u.dataTypes[0]]+("*"!==u.dataTypes[0]?", "+_e+"; q=0.01":""):u.accepts["*"])
for(l in u.headers)w.setRequestHeader(l,u.headers[l])
if(u.beforeSend&&(u.beforeSend.call(c,w,u)===!1||2===b))return w.abort()
_="abort"
for(l in{success:1,error:1,complete:1})w[l](u[l])
if(o=L(be,u,e,w)){w.readyState=1,d&&p.trigger("ajaxSend",[w,u]),u.async&&u.timeout>0&&(a=setTimeout(function(){w.abort("timeout")},u.timeout))
try{b=1,o.send(v,i)}catch(x){if(!(2>b))throw x
i(-1,x)}}else i(-1,"No Transport")
return w},getJSON:function(t,e,i){return J.get(t,e,i,"json")},getScript:function(t,e){return J.get(t,void 0,e,"script")}}),J.each(["get","post"],function(t,e){J[e]=function(t,i,o,n){return J.isFunction(i)&&(n=n||o,o=i,i=void 0),J.ajax({url:t,type:e,dataType:n,data:i,success:o})}}),J._evalUrl=function(t){return J.ajax({url:t,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},J.fn.extend({wrapAll:function(t){var e
return J.isFunction(t)?this.each(function(e){J(this).wrapAll(t.call(this,e))}):(this[0]&&(e=J(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild
return t}).append(this)),this)},wrapInner:function(t){return this.each(J.isFunction(t)?function(e){J(this).wrapInner(t.call(this,e))}:function(){var e=J(this),i=e.contents()
i.length?i.wrapAll(t):e.append(t)})},wrap:function(t){var e=J.isFunction(t)
return this.each(function(i){J(this).wrapAll(e?t.call(this,i):t)})},unwrap:function(){return this.parent().each(function(){J.nodeName(this,"body")||J(this).replaceWith(this.childNodes)}).end()}}),J.expr.filters.hidden=function(t){return t.offsetWidth<=0&&t.offsetHeight<=0},J.expr.filters.visible=function(t){return!J.expr.filters.hidden(t)}
var ke=/%20/g,Te=/\[\]$/,De=/\r?\n/g,Oe=/^(?:submit|button|image|reset|file)$/i,Ce=/^(?:input|select|textarea|keygen)/i
J.param=function(t,e){var i,o=[],n=function(t,e){e=J.isFunction(e)?e():null==e?"":e,o[o.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)}
if(void 0===e&&(e=J.ajaxSettings&&J.ajaxSettings.traditional),J.isArray(t)||t.jquery&&!J.isPlainObject(t))J.each(t,function(){n(this.name,this.value)})
else for(i in t)B(i,t[i],e,n)
return o.join("&").replace(ke,"+")},J.fn.extend({serialize:function(){return J.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=J.prop(this,"elements")
return t?J.makeArray(t):this}).filter(function(){var t=this.type
return this.name&&!J(this).is(":disabled")&&Ce.test(this.nodeName)&&!Oe.test(t)&&(this.checked||!Tt.test(t))}).map(function(t,e){var i=J(this).val()
return null==i?null:J.isArray(i)?J.map(i,function(t){return{name:e.name,value:t.replace(De,"\r\n")}}):{name:e.name,value:i.replace(De,"\r\n")}}).get()}}),J.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(t){}}
var Me=0,Se={},Ee={0:200,1223:204},Pe=J.ajaxSettings.xhr()
t.attachEvent&&t.attachEvent("onunload",function(){for(var t in Se)Se[t]()}),Z.cors=!!Pe&&"withCredentials"in Pe,Z.ajax=Pe=!!Pe,J.ajaxTransport(function(t){var e
return Z.cors||Pe&&!t.crossDomain?{send:function(i,o){var n,s=t.xhr(),r=++Me
if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(n in t.xhrFields)s[n]=t.xhrFields[n]
t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest")
for(n in i)s.setRequestHeader(n,i[n])
e=function(t){return function(){e&&(delete Se[r],e=s.onload=s.onerror=null,"abort"===t?s.abort():"error"===t?o(s.status,s.statusText):o(Ee[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:void 0,s.getAllResponseHeaders()))}},s.onload=e(),s.onerror=e("error"),e=Se[r]=e("abort")
try{s.send(t.hasContent&&t.data||null)}catch(a){if(e)throw a}},abort:function(){e&&e()}}:void 0}),J.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(t){return J.globalEval(t),t}}}),J.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),J.ajaxTransport("script",function(t){if(t.crossDomain){var e,i
return{send:function(o,n){e=J("<script>").prop({async:!0,charset:t.scriptCharset,src:t.url}).on("load error",i=function(t){e.remove(),i=null,t&&n("error"===t.type?404:200,t.type)}),K.head.appendChild(e[0])},abort:function(){i&&i()}}}})
var Ne=[],Ie=/(=)\?(?=&|$)|\?\?/
J.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Ne.pop()||J.expando+"_"+de++
return this[t]=!0,t}}),J.ajaxPrefilter("json jsonp",function(e,i,o){var n,s,r,a=e.jsonp!==!1&&(Ie.test(e.url)?"url":"string"==typeof e.data&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ie.test(e.data)&&"data")
return a||"jsonp"===e.dataTypes[0]?(n=e.jsonpCallback=J.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ie,"$1"+n):e.jsonp!==!1&&(e.url+=(le.test(e.url)?"&":"?")+e.jsonp+"="+n),e.converters["script json"]=function(){return r||J.error(n+" was not called"),r[0]},e.dataTypes[0]="json",s=t[n],t[n]=function(){r=arguments},o.always(function(){t[n]=s,e[n]&&(e.jsonpCallback=i.jsonpCallback,Ne.push(n)),r&&J.isFunction(s)&&s(r[0]),r=s=void 0}),"script"):void 0}),J.parseHTML=function(t,e,i){if(!t||"string"!=typeof t)return null
"boolean"==typeof e&&(i=e,e=!1),e=e||K
var o=rt.exec(t),n=!i&&[]
return o?[e.createElement(o[1])]:(o=J.buildFragment([t],e,n),n&&n.length&&J(n).remove(),J.merge([],o.childNodes))}
var Ae=J.fn.load
J.fn.load=function(t,e,i){if("string"!=typeof t&&Ae)return Ae.apply(this,arguments)
var o,n,s,r=this,a=t.indexOf(" ")
return a>=0&&(o=J.trim(t.slice(a)),t=t.slice(0,a)),J.isFunction(e)?(i=e,e=void 0):e&&"object"==typeof e&&(n="POST"),r.length>0&&J.ajax({url:t,type:n,dataType:"html",data:e}).done(function(t){s=arguments,r.html(o?J("<div>").append(J.parseHTML(t)).find(o):t)}).complete(i&&function(t,e){r.each(i,s||[t.responseText,e,t])}),this},J.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){J.fn[e]=function(t){return this.on(e,t)}}),J.expr.filters.animated=function(t){return J.grep(J.timers,function(e){return t===e.elem}).length}
var je=t.document.documentElement
J.offset={setOffset:function(t,e,i){var o,n,s,r,a,h,d,l=J.css(t,"position"),u=J(t),c={}
"static"===l&&(t.style.position="relative"),a=u.offset(),s=J.css(t,"top"),h=J.css(t,"left"),d=("absolute"===l||"fixed"===l)&&(s+h).indexOf("auto")>-1,d?(o=u.position(),r=o.top,n=o.left):(r=parseFloat(s)||0,n=parseFloat(h)||0),J.isFunction(e)&&(e=e.call(t,i,a)),null!=e.top&&(c.top=e.top-a.top+r),null!=e.left&&(c.left=e.left-a.left+n),"using"in e?e.using.call(t,c):u.css(c)}},J.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){J.offset.setOffset(this,t,e)})
var e,i,o=this[0],n={top:0,left:0},s=o&&o.ownerDocument
return s?(e=s.documentElement,J.contains(e,o)?(typeof o.getBoundingClientRect!==Dt&&(n=o.getBoundingClientRect()),i=H(s),{top:n.top+i.pageYOffset-e.clientTop,left:n.left+i.pageXOffset-e.clientLeft}):n):void 0},position:function(){if(this[0]){var t,e,i=this[0],o={top:0,left:0}
return"fixed"===J.css(i,"position")?e=i.getBoundingClientRect():(t=this.offsetParent(),e=this.offset(),J.nodeName(t[0],"html")||(o=t.offset()),o.top+=J.css(t[0],"borderTopWidth",!0),o.left+=J.css(t[0],"borderLeftWidth",!0)),{top:e.top-o.top-J.css(i,"marginTop",!0),left:e.left-o.left-J.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||je;t&&!J.nodeName(t,"html")&&"static"===J.css(t,"position");)t=t.offsetParent
return t||je})}}),J.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,i){var o="pageYOffset"===i
J.fn[e]=function(n){return gt(this,function(e,n,s){var r=H(e)
return void 0===s?r?r[i]:e[n]:void(r?r.scrollTo(o?t.pageXOffset:s,o?s:t.pageYOffset):e[n]=s)},e,n,arguments.length,null)}}),J.each(["top","left"],function(t,e){J.cssHooks[e]=x(Z.pixelPosition,function(t,i){return i?(i=w(t,e),Yt.test(i)?J(t).position()[e]+"px":i):void 0})}),J.each({Height:"height",Width:"width"},function(t,e){J.each({padding:"inner"+t,content:e,"":"outer"+t},function(i,o){J.fn[o]=function(o,n){var s=arguments.length&&(i||"boolean"!=typeof o),r=i||(o===!0||n===!0?"margin":"border")
return gt(this,function(e,i,o){var n
return J.isWindow(e)?e.document.documentElement["client"+t]:9===e.nodeType?(n=e.documentElement,Math.max(e.body["scroll"+t],n["scroll"+t],e.body["offset"+t],n["offset"+t],n["client"+t])):void 0===o?J.css(e,i,r):J.style(e,i,o,r)},e,s?o:void 0,s,null)}})}),J.fn.size=function(){return this.length},J.fn.andSelf=J.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return J})
var Le=t.jQuery,ze=t.$
return J.noConflict=function(e){return t.$===J&&(t.$=ze),e&&t.jQuery===J&&(t.jQuery=Le),J},typeof e===Dt&&(t.jQuery=t.$=J),J}),"undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict"
var e=t.fn.jquery.split(" ")[0].split(".")
if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict"
function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"}
for(var i in e)if(void 0!==t.style[i])return{end:e[i]}
return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this
t(this).one("bsTransitionEnd",function(){i=!0})
var n=function(){i||t(o).trigger(t.support.transition.end)}
return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var i=t(this),n=i.data("bs.alert")
n||i.data("bs.alert",n=new o(this)),"string"==typeof e&&n[e].call(i)})}var i='[data-dismiss="alert"]',o=function(e){t(e).on("click",i,this.close)}
o.VERSION="3.3.2",o.TRANSITION_DURATION=150,o.prototype.close=function(e){function i(){r.detach().trigger("closed.bs.alert").remove()}var n=t(this),s=n.attr("data-target")
s||(s=n.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""))
var r=t(s)
e&&e.preventDefault(),r.length||(r=n.closest(".alert")),r.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(r.removeClass("in"),t.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",i).emulateTransitionEnd(o.TRANSITION_DURATION):i())}
var n=t.fn.alert
t.fn.alert=e,t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",i,o.prototype.close)}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var o=t(this),n=o.data("bs.button"),s="object"==typeof e&&e
n||o.data("bs.button",n=new i(this,s)),"toggle"==e?n.toggle():e&&n.setState(e)})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.isLoading=!1}
i.VERSION="3.3.2",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",o=this.$element,n=o.is("input")?"val":"html",s=o.data()
e+="Text",null==s.resetText&&o.data("resetText",o[n]()),setTimeout(t.proxy(function(){o[n](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,o.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]')
if(e.length){var i=this.$element.find("input")
"radio"==i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"))
t&&this.$element.toggleClass("active")}
var o=t.fn.button
t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var o=t(i.target)
o.hasClass("btn")||(o=o.closest(".btn")),e.call(o,"toggle"),i.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var o=t(this),n=o.data("bs.carousel"),s=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e),r="string"==typeof e?e:s.slide
n||o.data("bs.carousel",n=new i(this,s)),"number"==typeof e?n.to(e):r?n[r]():s.interval&&n.pause().cycle()})}var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))}
i.VERSION="3.3.2",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev()
break
case 39:this.next()
break
default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),o="prev"==t&&0===i||"next"==t&&i==this.$items.length-1
if(o&&!this.options.wrap)return e
var n="prev"==t?-1:1,s=(i+n)%this.$items.length
return this.$items.eq(s)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"))
return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,o){var n=this.$element.find(".item.active"),s=o||this.getItemForDirection(e,n),r=this.interval,a="next"==e?"left":"right",h=this
if(s.hasClass("active"))return this.sliding=!1
var d=s[0],l=t.Event("slide.bs.carousel",{relatedTarget:d,direction:a})
if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,r&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active")
var u=t(this.$indicators.children()[this.getItemIndex(s)])
u&&u.addClass("active")}var c=t.Event("slid.bs.carousel",{relatedTarget:d,direction:a})
return t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),s[0].offsetWidth,n.addClass(a),s.addClass(a),n.one("bsTransitionEnd",function(){s.removeClass([e,a].join(" ")).addClass("active"),n.removeClass(["active",a].join(" ")),h.sliding=!1,setTimeout(function(){h.$element.trigger(c)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(n.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(c)),r&&this.cycle(),this}}
var o=t.fn.carousel
t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=o,this}
var n=function(i){var o,n=t(this),s=t(n.attr("data-target")||(o=n.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""))
if(s.hasClass("carousel")){var r=t.extend({},s.data(),n.data()),a=n.attr("data-slide-to")
a&&(r.interval=!1),e.call(s,r),a&&s.data("bs.carousel").to(a),i.preventDefault()}}
t(document).on("click.bs.carousel.data-api","[data-slide]",n).on("click.bs.carousel.data-api","[data-slide-to]",n),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this)
e.call(i,i.data())})})}(jQuery),+function(t){"use strict"
function e(e){var i,o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")
return t(o)}function i(e){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),s=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e)
!n&&s.toggle&&"show"==e&&(s.toggle=!1),n||i.data("bs.collapse",n=new o(this,s)),"string"==typeof e&&n[e]()})}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.$trigger=t(this.options.trigger).filter('[href="#'+e.id+'"], [data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()}
o.VERSION="3.3.2",o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},o.prototype.dimension=function(){var t=this.$element.hasClass("width")
return t?"width":"height"},o.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing")
if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse")
if(this.$element.trigger(s),!s.isDefaultPrevented()){n&&n.length&&(i.call(n,"hide"),e||n.data("bs.collapse",null))
var r=this.dimension()
this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1
var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[r](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")}
if(!t.support.transition)return a.call(this)
var h=t.camelCase(["scroll",r].join("-"))
this.$element.one("bsTransitionEnd",t.proxy(a,this)).emulateTransitionEnd(o.TRANSITION_DURATION)[r](this.$element[0][h])}}}},o.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse")
if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension()
this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1
var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")}
return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(o.TRANSITION_DURATION):n.call(this)}}},o.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},o.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,o){var n=t(o)
this.addAriaAndCollapsedClass(e(n),n)},this)).end()},o.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in")
t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)}
var n=t.fn.collapse
t.fn.collapse=i,t.fn.collapse.Constructor=o,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var n=t(this)
n.attr("data-target")||o.preventDefault()
var s=e(n),r=s.data("bs.collapse"),a=r?"toggle":t.extend({},n.data(),{trigger:this})
i.call(s,a)})}(jQuery),+function(t){"use strict"
function e(e){e&&3===e.which||(t(n).remove(),t(s).each(function(){var o=t(this),n=i(o),s={relatedTarget:this}
n.hasClass("open")&&(n.trigger(e=t.Event("hide.bs.dropdown",s)),e.isDefaultPrevented()||(o.attr("aria-expanded","false"),n.removeClass("open").trigger("hidden.bs.dropdown",s)))}))}function i(e){var i=e.attr("data-target")
i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""))
var o=i&&t(i)
return o&&o.length?o:e.parent()}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.dropdown")
o||i.data("bs.dropdown",o=new r(this)),"string"==typeof e&&o[e].call(i)})}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',r=function(e){t(e).on("click.bs.dropdown",this.toggle)}
r.VERSION="3.3.2",r.prototype.toggle=function(o){var n=t(this)
if(!n.is(".disabled, :disabled")){var s=i(n),r=s.hasClass("open")
if(e(),!r){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e)
var a={relatedTarget:this}
if(s.trigger(o=t.Event("show.bs.dropdown",a)),o.isDefaultPrevented())return
n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger("shown.bs.dropdown",a)}return!1}},r.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var o=t(this)
if(e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled")){var n=i(o),r=n.hasClass("open")
if(!r&&27!=e.which||r&&27==e.which)return 27==e.which&&n.find(s).trigger("focus"),o.trigger("click")
var a=" li:not(.divider):visible a",h=n.find('[role="menu"]'+a+', [role="listbox"]'+a)
if(h.length){var d=h.index(e.target)
38==e.which&&d>0&&d--,40==e.which&&d<h.length-1&&d++,~d||(d=0),h.eq(d).trigger("focus")}}}}
var a=t.fn.dropdown
t.fn.dropdown=o,t.fn.dropdown.Constructor=r,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,r.prototype.toggle).on("keydown.bs.dropdown.data-api",s,r.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',r.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',r.prototype.keydown)}(jQuery),+function(t){"use strict"
function e(e,o){return this.each(function(){var n=t(this),s=n.data("bs.modal"),r=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e)
s||n.data("bs.modal",s=new i(this,r)),"string"==typeof e?s[e](o):r.show&&s.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}
i.VERSION="3.3.2",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,n=t.Event("show.bs.modal",{relatedTarget:e})
this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop(function(){var n=t.support.transition&&o.$element.hasClass("fade")
o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.options.backdrop&&o.adjustBackdrop(),o.adjustDialog(),n&&o.$element[0].offsetWidth,o.$element.addClass("in").attr("aria-hidden",!1),o.enforceFocus()
var s=t.Event("shown.bs.modal",{relatedTarget:e})
n?o.$element.find(".modal-dialog").one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this
this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,n=this.$element.hasClass("fade")?"fade":""
if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n
if(this.$backdrop=t('<div class="modal-backdrop '+n+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return
s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in")
var r=function(){o.removeBackdrop(),e&&e()}
t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):r()}else e&&e()},i.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},i.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10)
this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},i.prototype.measureScrollbar=function(){var t=document.createElement("div")
t.className="modal-scrollbar-measure",this.$body.append(t)
var e=t.offsetWidth-t.clientWidth
return this.$body[0].removeChild(t),e}
var o=t.fn.modal
t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),n=o.attr("href"),s=t(o.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),r=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),o.data())
o.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(s,r,this)})}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;(n||"destroy"!=e)&&(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)}
i.VERSION="3.3.2",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport)
for(var n=this.options.trigger.split(" "),s=n.length;s--;){var r=n[s]
if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this))
else if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",h="hover"==r?"mouseleave":"focusout"
this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(h+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults()
return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type)
return i&&i.$tip&&i.$tip.is(":visible")?void(i.hoverState="in"):(i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type)
return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide()},i.prototype.show=function(){var e=t.Event("show.bs."+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0])
if(e.isDefaultPrevented()||!o)return
var n=this,s=this.tip(),r=this.getUID(this.type)
this.setContent(),s.attr("id",r),this.$element.attr("aria-describedby",r),this.options.animation&&s.addClass("fade")
var a="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,d=h.test(a)
d&&(a=a.replace(h,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element)
var l=this.getPosition(),u=s[0].offsetWidth,c=s[0].offsetHeight
if(d){var p=a,f=this.options.container?t(this.options.container):this.$element.parent(),m=this.getPosition(f)
a="bottom"==a&&l.bottom+c>m.bottom?"top":"top"==a&&l.top-c<m.top?"bottom":"right"==a&&l.right+u>m.width?"left":"left"==a&&l.left-u<m.left?"right":a,s.removeClass(p).addClass(a)}var g=this.getCalculatedOffset(a,l,u,c)
this.applyPlacement(g,a)
var v=function(){var t=n.hoverState
n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)}
t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",v).emulateTransitionEnd(i.TRANSITION_DURATION):v()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,r=parseInt(o.css("margin-top"),10),a=parseInt(o.css("margin-left"),10)
isNaN(r)&&(r=0),isNaN(a)&&(a=0),e.top=e.top+r,e.left=e.left+a,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in")
var h=o[0].offsetWidth,d=o[0].offsetHeight
"top"==i&&d!=s&&(e.top=e.top+s-d)
var l=this.getViewportAdjustedDelta(i,e,h,d)
l.left?e.left+=l.left:e.top+=l.top
var u=/top|bottom/.test(i),c=u?2*l.left-n+h:2*l.top-s+d,p=u?"offsetWidth":"offsetHeight"
o.offset(e),this.replaceArrow(c,o[0][p],u)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle()
t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=this.tip(),r=t.Event("hide.bs."+this.type)
return this.$element.trigger(r),r.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element
var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect()
null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}))
var s=o?{top:0,left:0}:e.offset(),r={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},a=o?{width:t(window).width(),height:t(window).height()}:null
return t.extend({},n,r,a,s)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0}
if(!this.$viewport)return n
var s=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport)
if(/right|left/.test(t)){var a=e.top-s-r.scroll,h=e.top+s-r.scroll+o
a<r.top?n.top=r.top-a:h>r.top+r.height&&(n.top=r.top+r.height-h)}else{var d=e.left-s,l=e.left+s+i
d<r.left?n.left=r.left-d:l>r.width&&(n.left=r.left+r.width-l)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options
return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random())
while(document.getElementById(t))
return t},i.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this
e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this
clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type)})}
var o=t.fn.tooltip
t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var o=t(this),n=o.data("bs.popover"),s="object"==typeof e&&e;(n||"destroy"!=e)&&(n||o.data("bs.popover",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.init("popover",t,e)}
if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js")
i.VERSION="3.3.2",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent()
t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options
return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},i.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip}
var o=t.fn.popover
t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery),+function(t){"use strict"
function e(i,o){var n=t.proxy(this.process,this)
this.$body=t("body"),this.$scrollElement=t(t(i).is("body")?window:i),this.options=t.extend({},e.DEFAULTS,o),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",n),this.refresh(),this.process()}function i(i){return this.each(function(){var o=t(this),n=o.data("bs.scrollspy"),s="object"==typeof i&&i
n||o.data("bs.scrollspy",n=new e(this,s)),"string"==typeof i&&n[i]()})}e.VERSION="3.3.2",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e="offset",i=0
t.isWindow(this.$scrollElement[0])||(e="position",i=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight()
var o=this
this.$body.find(this.selector).map(function(){var o=t(this),n=o.data("target")||o.attr("href"),s=/^#./.test(n)&&t(n)
return s&&s.length&&s.is(":visible")&&[[s[e]().top+i,n]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){o.offsets.push(this[0]),o.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,r=this.activeTarget
if(this.scrollHeight!=i&&this.refresh(),e>=o)return r!=(t=s[s.length-1])&&this.activate(t)
if(r&&e<n[0])return this.activeTarget=null,this.clear()
for(t=n.length;t--;)r!=s[t]&&e>=n[t]&&(!n[t+1]||e<=n[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear()
var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=t(i).parents("li").addClass("active")
o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")}
var o=t.fn.scrollspy
t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=o,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this)
i.call(e,e.data())})})}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tab")
n||o.data("bs.tab",n=new i(this)),"string"==typeof e&&n[e]()})}var i=function(e){this.element=t(e)}
i.VERSION="3.3.2",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target")
if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),r=t.Event("show.bs.tab",{relatedTarget:n[0]})
if(n.trigger(s),e.trigger(r),!r.isDefaultPrevented()&&!s.isDefaultPrevented()){var a=t(o)
this.activate(e.closest("li"),i),this.activate(a,a.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},i.prototype.activate=function(e,o,n){function s(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var r=o.find("> .active"),a=n&&t.support.transition&&(r.length&&r.hasClass("fade")||!!o.find("> .fade").length)
r.length&&a?r.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),r.removeClass("in")}
var o=t.fn.tab
t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this}
var n=function(i){i.preventDefault(),e.call(t(this),"show")}
t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var o=t(this),n=o.data("bs.affix"),s="object"==typeof e&&e
n||o.data("bs.affix",n=new i(this,s)),"string"==typeof e&&n[e]()})}var i=function(e,o){this.options=t.extend({},i.DEFAULTS,o),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()}
i.VERSION="3.3.2",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),r=this.$target.height()
if(null!=i&&"top"==this.affixed)return i>n?"top":!1
if("bottom"==this.affixed)return null!=i?n+this.unpin<=s.top?!1:"bottom":t-o>=n+r?!1:"bottom"
var a=null==this.affixed,h=a?n:s.top,d=a?r:e
return null!=i&&i>=n?"top":null!=o&&h+d>=t-o?"bottom":!1},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(i.RESET).addClass("affix")
var t=this.$target.scrollTop(),e=this.$element.offset()
return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),o=this.options.offset,n=o.top,s=o.bottom,r=t("body").height()
"object"!=typeof o&&(s=n=o),"function"==typeof n&&(n=o.top(this.$element)),"function"==typeof s&&(s=o.bottom(this.$element))
var a=this.getState(r,e,n,s)
if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","")
var h="affix"+(a?"-"+a:""),d=t.Event(h+".bs.affix")
if(this.$element.trigger(d),d.isDefaultPrevented())return
this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(h).trigger(h.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:r-e-s})}}
var o=t.fn.affix
t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),o=i.data()
o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),e.call(i,o)})})}(jQuery),function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vis=e():t.vis=e()}(this,function(){return function(t){function e(o){if(i[o])return i[o].exports
var n=i[o]={exports:{},id:o,loaded:!1}
return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={}
return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict"
e.util=i(1),e.DOMutil=i(7),e.DataSet=i(8),e.DataView=i(10),e.Queue=i(9),e.Graph3d=i(11),e.graph3d={Camera:i(15),Filter:i(16),Point2d:i(14),Point3d:i(13),Slider:i(17),StepNumber:i(18)},e.Timeline=i(19),e.Graph2d=i(49),e.timeline={DateUtil:i(27),DataStep:i(52),Range:i(24),stack:i(32),TimeStep:i(30),components:{items:{Item:i(34),BackgroundItem:i(38),BoxItem:i(36),PointItem:i(37),RangeItem:i(33)},Component:i(26),CurrentTime:i(44),CustomTime:i(42),DataAxis:i(51),GraphGroup:i(53),Group:i(31),BackgroundGroup:i(35),ItemSet:i(29),Legend:i(57),LineGraph:i(50),TimeAxis:i(39)}},e.Network=i(59),e.network={Images:i(117),dotparser:i(115),gephiParser:i(116),allOptions:i(111)},e.network.convertDot=function(t){return e.network.dotparser.DOTToGraph(t)},e.network.convertGephi=function(t,i){return e.network.gephiParser.parseGephi(t,i)},e.moment=i(2),e.Hammer=i(20),e.keycharm=i(41)},function(t,e,i){"use strict"
var o=i(2),n=i(6)
e.isNumber=function(t){return t instanceof Number||"number"==typeof t},e.recursiveDOMDelete=function(t){if(t)for(;t.hasChildNodes()===!0;)e.recursiveDOMDelete(t.firstChild),t.removeChild(t.firstChild)},e.giveRange=function(t,e,i,o){if(e==t)return.5
var n=1/(e-t)
return Math.max(0,(o-t)*n)},e.isString=function(t){return t instanceof String||"string"==typeof t},e.isDate=function(t){if(t instanceof Date)return!0
if(e.isString(t)){var i=s.exec(t)
if(i)return!0
if(!isNaN(Date.parse(t)))return!0}return!1},e.randomUUID=function(){return n.v4()},e.assignAllKeys=function(t,e){for(var i in t)t.hasOwnProperty(i)&&"object"!=typeof t[i]&&(t[i]=e)},e.fillIfDefined=function(t,i){var o=arguments.length<=2||void 0===arguments[2]?!1:arguments[2]
for(var n in t)void 0!==i[n]&&("object"!=typeof i[n]?void 0!==i[n]&&null!==i[n]||void 0===t[n]||o!==!0?t[n]=i[n]:delete t[n]:"object"==typeof t[n]&&e.fillIfDefined(t[n],i[n],o))},e.protoExtend=function(t,e){for(var i=1;i<arguments.length;i++){var o=arguments[i]
for(var n in o)t[n]=o[n]}return t},e.extend=function(t,e){for(var i=1;i<arguments.length;i++){var o=arguments[i]
for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n])}return t},e.selectiveExtend=function(t,e,i){if(!Array.isArray(t))throw new Error("Array with property names expected as first argument")
for(var o=2;o<arguments.length;o++)for(var n=arguments[o],s=0;s<t.length;s++){var r=t[s]
n.hasOwnProperty(r)&&(e[r]=n[r])}return e},e.selectiveDeepExtend=function(t,i,o){var n=arguments.length<=3||void 0===arguments[3]?!1:arguments[3]
if(Array.isArray(o))throw new TypeError("Arrays are not supported by deepExtend")
for(var s=2;s<arguments.length;s++)for(var r=arguments[s],a=0;a<t.length;a++){var h=t[a]
if(r.hasOwnProperty(h))if(o[h]&&o[h].constructor===Object)void 0===i[h]&&(i[h]={}),i[h].constructor===Object?e.deepExtend(i[h],o[h],!1,n):null===o[h]&&void 0!==i[h]&&n===!0?delete i[h]:i[h]=o[h]
else{if(Array.isArray(o[h]))throw new TypeError("Arrays are not supported by deepExtend")
null===o[h]&&void 0!==i[h]&&n===!0?delete i[h]:i[h]=o[h]}}return i},e.selectiveNotDeepExtend=function(t,i,o){var n=arguments.length<=3||void 0===arguments[3]?!1:arguments[3]
if(Array.isArray(o))throw new TypeError("Arrays are not supported by deepExtend")
for(var s in o)if(o.hasOwnProperty(s)&&-1==t.indexOf(s))if(o[s]&&o[s].constructor===Object)void 0===i[s]&&(i[s]={}),i[s].constructor===Object?e.deepExtend(i[s],o[s]):null===o[s]&&void 0!==i[s]&&n===!0?delete i[s]:i[s]=o[s]
else if(Array.isArray(o[s])){i[s]=[]
for(var r=0;r<o[s].length;r++)i[s].push(o[s][r])}else null===o[s]&&void 0!==i[s]&&n===!0?delete i[s]:i[s]=o[s]
return i},e.deepExtend=function(t,i,o,n){for(var s in i)if(i.hasOwnProperty(s)||o===!0)if(i[s]&&i[s].constructor===Object)void 0===t[s]&&(t[s]={}),t[s].constructor===Object?e.deepExtend(t[s],i[s],o):null===i[s]&&void 0!==t[s]&&n===!0?delete t[s]:t[s]=i[s]
else if(Array.isArray(i[s])){t[s]=[]
for(var r=0;r<i[s].length;r++)t[s].push(i[s][r])}else null===i[s]&&void 0!==t[s]&&n===!0?delete t[s]:t[s]=i[s]
return t},e.equalArray=function(t,e){if(t.length!=e.length)return!1
for(var i=0,o=t.length;o>i;i++)if(t[i]!=e[i])return!1
return!0},e.convert=function(t,i){var n
if(void 0!==t){if(null===t)return null
if(!i)return t
if("string"!=typeof i&&!(i instanceof String))throw new Error("Type must be a string")
switch(i){case"boolean":case"Boolean":return Boolean(t)
case"number":case"Number":return Number(t.valueOf())
case"string":case"String":return String(t)
case"Date":if(e.isNumber(t))return new Date(t)
if(t instanceof Date)return new Date(t.valueOf())
if(o.isMoment(t))return new Date(t.valueOf())
if(e.isString(t))return n=s.exec(t),n?new Date(Number(n[1])):o(t).toDate()
throw new Error("Cannot convert object of type "+e.getType(t)+" to type Date")
case"Moment":if(e.isNumber(t))return o(t)
if(t instanceof Date)return o(t.valueOf())
if(o.isMoment(t))return o(t)
if(e.isString(t))return n=s.exec(t),o(n?Number(n[1]):t)
throw new Error("Cannot convert object of type "+e.getType(t)+" to type Date")
case"ISODate":if(e.isNumber(t))return new Date(t)
if(t instanceof Date)return t.toISOString()
if(o.isMoment(t))return t.toDate().toISOString()
if(e.isString(t))return n=s.exec(t),n?new Date(Number(n[1])).toISOString():new Date(t).toISOString()
throw new Error("Cannot convert object of type "+e.getType(t)+" to type ISODate")
case"ASPDate":if(e.isNumber(t))return"/Date("+t+")/"
if(t instanceof Date)return"/Date("+t.valueOf()+")/"
if(e.isString(t)){n=s.exec(t)
var r
return r=n?new Date(Number(n[1])).valueOf():new Date(t).valueOf(),"/Date("+r+")/"}throw new Error("Cannot convert object of type "+e.getType(t)+" to type ASPDate")
default:throw new Error('Unknown type "'+i+'"')}}}
var s=/^\/?Date\((\-?\d+)/i
e.getType=function(t){var e=typeof t
return"object"==e?null===t?"null":t instanceof Boolean?"Boolean":t instanceof Number?"Number":t instanceof String?"String":Array.isArray(t)?"Array":t instanceof Date?"Date":"Object":"number"==e?"Number":"boolean"==e?"Boolean":"string"==e?"String":void 0===e?"undefined":e},e.copyAndExtendArray=function(t,e){for(var i=[],o=0;o<t.length;o++)i.push(t[o])
return i.push(e),i},e.copyArray=function(t){for(var e=[],i=0;i<t.length;i++)e.push(t[i])
return e},e.getAbsoluteLeft=function(t){return t.getBoundingClientRect().left},e.getAbsoluteTop=function(t){return t.getBoundingClientRect().top},e.addClassName=function(t,e){var i=t.className.split(" ");-1==i.indexOf(e)&&(i.push(e),t.className=i.join(" "))},e.removeClassName=function(t,e){var i=t.className.split(" "),o=i.indexOf(e);-1!=o&&(i.splice(o,1),t.className=i.join(" "))},e.forEach=function(t,e){var i,o
if(Array.isArray(t))for(i=0,o=t.length;o>i;i++)e(t[i],i,t)
else for(i in t)t.hasOwnProperty(i)&&e(t[i],i,t)},e.toArray=function(t){var e=[]
for(var i in t)t.hasOwnProperty(i)&&e.push(t[i])
return e},e.updateProperty=function(t,e,i){return t[e]!==i?(t[e]=i,!0):!1},e.throttle=function(t,e){var i=null,o=!1
return function n(){i?o=!0:(o=!1,t(),i=setTimeout(function(){i=null,o&&n()},e))}},e.addEventListener=function(t,e,i,o){t.addEventListener?(void 0===o&&(o=!1),"mousewheel"===e&&navigator.userAgent.indexOf("Firefox")>=0&&(e="DOMMouseScroll"),t.addEventListener(e,i,o)):t.attachEvent("on"+e,i)},e.removeEventListener=function(t,e,i,o){t.removeEventListener?(void 0===o&&(o=!1),"mousewheel"===e&&navigator.userAgent.indexOf("Firefox")>=0&&(e="DOMMouseScroll"),t.removeEventListener(e,i,o)):t.detachEvent("on"+e,i)},e.preventDefault=function(t){t||(t=window.event),t.preventDefault?t.preventDefault():t.returnValue=!1},e.getTarget=function(t){t||(t=window.event)
var e
return t.target?e=t.target:t.srcElement&&(e=t.srcElement),void 0!=e.nodeType&&3==e.nodeType&&(e=e.parentNode),e},e.hasParent=function(t,e){for(var i=t;i;){if(i===e)return!0
i=i.parentNode}return!1},e.option={},e.option.asBoolean=function(t,e){return"function"==typeof t&&(t=t()),null!=t?0!=t:e||null},e.option.asNumber=function(t,e){return"function"==typeof t&&(t=t()),null!=t?Number(t)||e||null:e||null},e.option.asString=function(t,e){return"function"==typeof t&&(t=t()),null!=t?String(t):e||null},e.option.asSize=function(t,i){return"function"==typeof t&&(t=t()),e.isString(t)?t:e.isNumber(t)?t+"px":i||null},e.option.asElement=function(t,e){return"function"==typeof t&&(t=t()),t||e||null},e.hexToRGB=function(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i
t=t.replace(e,function(t,e,i,o){return e+e+i+i+o+o})
var i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)
return i?{r:parseInt(i[1],16),g:parseInt(i[2],16),b:parseInt(i[3],16)}:null},e.overrideOpacity=function(t,i){if(-1!=t.indexOf("rgba"))return t
if(-1!=t.indexOf("rgb")){var o=t.substr(t.indexOf("(")+1).replace(")","").split(",")
return"rgba("+o[0]+","+o[1]+","+o[2]+","+i+")"}var o=e.hexToRGB(t)
return null==o?t:"rgba("+o.r+","+o.g+","+o.b+","+i+")"},e.RGBToHex=function(t,e,i){return"#"+((1<<24)+(t<<16)+(e<<8)+i).toString(16).slice(1)},e.parseColor=function(t){var i
if(e.isString(t)===!0){if(e.isValidRGB(t)===!0){var o=t.substr(4).substr(0,t.length-5).split(",").map(function(t){return parseInt(t)})
t=e.RGBToHex(o[0],o[1],o[2])}if(e.isValidHex(t)===!0){var n=e.hexToHSV(t),s={h:n.h,s:.8*n.s,v:Math.min(1,1.02*n.v)},r={h:n.h,s:Math.min(1,1.25*n.s),v:.8*n.v},a=e.HSVToHex(r.h,r.s,r.v),h=e.HSVToHex(s.h,s.s,s.v)
i={background:t,border:a,highlight:{background:h,border:a},hover:{background:h,border:a}}}else i={background:t,border:t,highlight:{background:t,border:t},hover:{background:t,border:t}}}else i={},i.background=t.background||void 0,i.border=t.border||void 0,e.isString(t.highlight)?i.highlight={border:t.highlight,background:t.highlight}:(i.highlight={},i.highlight.background=t.highlight&&t.highlight.background||void 0,i.highlight.border=t.highlight&&t.highlight.border||void 0),e.isString(t.hover)?i.hover={border:t.hover,background:t.hover}:(i.hover={},i.hover.background=t.hover&&t.hover.background||void 0,i.hover.border=t.hover&&t.hover.border||void 0)
return i},e.RGBToHSV=function(t,e,i){t/=255,e/=255,i/=255
var o=Math.min(t,Math.min(e,i)),n=Math.max(t,Math.max(e,i))
if(o==n)return{h:0,s:0,v:o}
var s=t==o?e-i:i==o?t-e:i-t,r=t==o?3:i==o?1:5,a=60*(r-s/(n-o))/360,h=(n-o)/n,d=n
return{h:a,s:h,v:d}}
var r={split:function(t){var e={}
return t.split(";").forEach(function(t){if(""!=t.trim()){var i=t.split(":"),o=i[0].trim(),n=i[1].trim()
e[o]=n}}),e},join:function(t){return Object.keys(t).map(function(e){return e+": "+t[e]}).join("; ")}}
e.addCssText=function(t,i){var o=r.split(t.style.cssText),n=r.split(i),s=e.extend(o,n)
t.style.cssText=r.join(s)},e.removeCssText=function(t,e){var i=r.split(t.style.cssText),o=r.split(e)
for(var n in o)o.hasOwnProperty(n)&&delete i[n]
t.style.cssText=r.join(i)},e.HSVToRGB=function(t,e,i){var o,n,s,r=Math.floor(6*t),a=6*t-r,h=i*(1-e),d=i*(1-a*e),l=i*(1-(1-a)*e)
switch(r%6){case 0:o=i,n=l,s=h
break
case 1:o=d,n=i,s=h
break
case 2:o=h,n=i,s=l
break
case 3:o=h,n=d,s=i
break
case 4:o=l,n=h,s=i
break
case 5:o=i,n=h,s=d}return{r:Math.floor(255*o),g:Math.floor(255*n),b:Math.floor(255*s)}},e.HSVToHex=function(t,i,o){var n=e.HSVToRGB(t,i,o)
return e.RGBToHex(n.r,n.g,n.b)},e.hexToHSV=function(t){var i=e.hexToRGB(t)
return e.RGBToHSV(i.r,i.g,i.b)},e.isValidHex=function(t){var e=/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
return e},e.isValidRGB=function(t){t=t.replace(" ","")
var e=/rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/i.test(t)
return e},e.isValidRGBA=function(t){t=t.replace(" ","")
var e=/rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(.{1,3})\)/i.test(t)
return e},e.selectiveBridgeObject=function(t,i){if("object"==typeof i){for(var o=Object.create(i),n=0;n<t.length;n++)i.hasOwnProperty(t[n])&&"object"==typeof i[t[n]]&&(o[t[n]]=e.bridgeObject(i[t[n]]))
return o}return null},e.bridgeObject=function(t){if("object"==typeof t){var i=Object.create(t)
for(var o in t)t.hasOwnProperty(o)&&"object"==typeof t[o]&&(i[o]=e.bridgeObject(t[o]))
return i}return null},e.mergeOptions=function(t,e,i){var o=(arguments.length<=3||void 0===arguments[3]?!1:arguments[3],arguments.length<=4||void 0===arguments[4]?{}:arguments[4])
if(null===e[i])t[i]=Object.create(o[i])
else if(void 0!==e[i])if("boolean"==typeof e[i])t[i].enabled=e[i]
else{void 0===e[i].enabled&&(t[i].enabled=!0)
for(var n in e[i])e[i].hasOwnProperty(n)&&(t[i][n]=e[i][n])}},e.binarySearchCustom=function(t,e,i,o){for(var n=1e4,s=0,r=0,a=t.length-1;a>=r&&n>s;){var h=Math.floor((r+a)/2),d=t[h],l=void 0===o?d[i]:d[i][o],u=e(l)
if(0==u)return h;-1==u?r=h+1:a=h-1,s++}return-1},e.binarySearchValue=function(t,e,i,o){for(var n,s,r,a,h=1e4,d=0,l=0,u=t.length-1;u>=l&&h>d;){if(a=Math.floor(.5*(u+l)),n=t[Math.max(0,a-1)][i],s=t[a][i],r=t[Math.min(t.length-1,a+1)][i],s==e)return a
if(e>n&&s>e)return"before"==o?Math.max(0,a-1):a
if(e>s&&r>e)return"before"==o?a:Math.min(t.length-1,a+1)
e>s?l=a+1:u=a-1,d++}return-1},e.easingFunctions={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return.5>t?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return.5>t?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t}}},function(t,e,i){"use strict"
t.exports="undefined"!=typeof window&&window.moment||i(3)},function(t,e,i){(function(t){!function(e,i){t.exports=i()}(this,function(){"use strict"
function e(){return Ai.apply(null,arguments)}function i(t){Ai=t}function o(t){return"[object Array]"===Object.prototype.toString.call(t)}function n(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function s(t,e){var i,o=[]
for(i=0;i<t.length;++i)o.push(e(t[i],i))
return o}function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function a(t,e){for(var i in e)r(e,i)&&(t[i]=e[i])
return r(e,"toString")&&(t.toString=e.toString),r(e,"valueOf")&&(t.valueOf=e.valueOf),t}function h(t,e,i,o){return St(t,e,i,o,!0).utc()}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function l(t){return null==t._pf&&(t._pf=d()),t._pf}function u(t){if(null==t._isValid){var e=l(t)
t._isValid=!(isNaN(t._d.getTime())||!(e.overflow<0)||e.empty||e.invalidMonth||e.invalidWeekday||e.nullInput||e.invalidFormat||e.userInvalidated),t._strict&&(t._isValid=t._isValid&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour)}return t._isValid}function c(t){var e=h(NaN)
return null!=t?a(l(e),t):l(e).userInvalidated=!0,e}function p(t,e){var i,o,n
if("undefined"!=typeof e._isAMomentObject&&(t._isAMomentObject=e._isAMomentObject),"undefined"!=typeof e._i&&(t._i=e._i),"undefined"!=typeof e._f&&(t._f=e._f),"undefined"!=typeof e._l&&(t._l=e._l),"undefined"!=typeof e._strict&&(t._strict=e._strict),"undefined"!=typeof e._tzm&&(t._tzm=e._tzm),"undefined"!=typeof e._isUTC&&(t._isUTC=e._isUTC),"undefined"!=typeof e._offset&&(t._offset=e._offset),"undefined"!=typeof e._pf&&(t._pf=l(e)),"undefined"!=typeof e._locale&&(t._locale=e._locale),Li.length>0)for(i in Li)o=Li[i],n=e[o],"undefined"!=typeof n&&(t[o]=n)
return t}function f(t){p(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),zi===!1&&(zi=!0,e.updateOffset(this),zi=!1)}function m(t){return t instanceof f||null!=t&&null!=t._isAMomentObject}function g(t){return 0>t?Math.ceil(t):Math.floor(t)}function v(t){var e=+t,i=0
return 0!==e&&isFinite(e)&&(i=g(e)),i}function y(t,e,i){var o,n=Math.min(t.length,e.length),s=Math.abs(t.length-e.length),r=0
for(o=0;n>o;o++)(i&&t[o]!==e[o]||!i&&v(t[o])!==v(e[o]))&&r++
return r+s}function b(){}function _(t){return t?t.toLowerCase().replace("_","-"):t}function w(t){for(var e,i,o,n,s=0;s<t.length;){for(n=_(t[s]).split("-"),e=n.length,i=_(t[s+1]),i=i?i.split("-"):null;e>0;){if(o=x(n.slice(0,e).join("-")))return o
if(i&&i.length>=e&&y(n,i,!0)>=e-1)break
e--}s++}return null}function x(e){var i=null
if(!Ri[e]&&"undefined"!=typeof t&&t&&t.exports)try{i=ji._abbr,!function(){var t=new Error('Cannot find module "./locale"')
throw t.code="MODULE_NOT_FOUND",t}(),k(i)}catch(o){}return Ri[e]}function k(t,e){var i
return t&&(i="undefined"==typeof e?D(t):T(t,e),i&&(ji=i)),ji._abbr}function T(t,e){return null!==e?(e.abbr=t,Ri[t]=Ri[t]||new b,Ri[t].set(e),k(t),Ri[t]):(delete Ri[t],null)}function D(t){var e
if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return ji
if(!o(t)){if(e=x(t))return e
t=[t]}return w(t)}function O(t,e){var i=t.toLowerCase()
Fi[i]=Fi[i+"s"]=Fi[e]=t}function C(t){return"string"==typeof t?Fi[t]||Fi[t.toLowerCase()]:void 0}function M(t){var e,i,o={}
for(i in t)r(t,i)&&(e=C(i),e&&(o[e]=t[i]))
return o}function S(t,i){return function(o){return null!=o?(P(this,t,o),e.updateOffset(this,i),this):E(this,t)}}function E(t,e){return t._d["get"+(t._isUTC?"UTC":"")+e]()}function P(t,e,i){return t._d["set"+(t._isUTC?"UTC":"")+e](i)}function N(t,e){var i
if("object"==typeof t)for(i in t)this.set(i,t[i])
else if(t=C(t),"function"==typeof this[t])return this[t](e)
return this}function I(t,e,i){var o=""+Math.abs(t),n=e-o.length,s=t>=0
return(s?i?"+":"":"-")+Math.pow(10,Math.max(0,n)).toString().substr(1)+o}function A(t,e,i,o){var n=o
"string"==typeof o&&(n=function(){return this[o]()}),t&&(Wi[t]=n),e&&(Wi[e[0]]=function(){return I(n.apply(this,arguments),e[1],e[2])}),i&&(Wi[i]=function(){return this.localeData().ordinal(n.apply(this,arguments),t)})}function j(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function L(t){var e,i,o=t.match(Bi)
for(e=0,i=o.length;i>e;e++)Wi[o[e]]?o[e]=Wi[o[e]]:o[e]=j(o[e])
return function(n){var s=""
for(e=0;i>e;e++)s+=o[e]instanceof Function?o[e].call(n,t):o[e]
return s}}function z(t,e){return t.isValid()?(e=R(e,t.localeData()),Yi[e]=Yi[e]||L(e),Yi[e](t)):t.localeData().invalidDate()}function R(t,e){function i(t){return e.longDateFormat(t)||t}var o=5
for(Hi.lastIndex=0;o>=0&&Hi.test(t);)t=t.replace(Hi,i),Hi.lastIndex=0,o-=1
return t}function F(t){return"function"==typeof t&&"[object Function]"===Object.prototype.toString.call(t)}function B(t,e,i){no[t]=F(e)?e:function(t){return t&&i?i:e}}function H(t,e){return r(no,t)?no[t](e._strict,e._locale):new RegExp(Y(t))}function Y(t){return t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,i,o,n){return e||i||o||n}).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function W(t,e){var i,o=e
for("string"==typeof t&&(t=[t]),"number"==typeof e&&(o=function(t,i){i[e]=v(t)}),i=0;i<t.length;i++)so[t[i]]=o}function G(t,e){W(t,function(t,i,o,n){o._w=o._w||{},e(t,o._w,o,n)})}function U(t,e,i){null!=e&&r(so,t)&&so[t](e,i._a,i,t)}function q(t,e){return new Date(Date.UTC(t,e+1,0)).getUTCDate()}function $(t){return this._months[t.month()]}function V(t){return this._monthsShort[t.month()]}function X(t,e,i){var o,n,s
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),o=0;12>o;o++){if(n=h([2e3,o]),i&&!this._longMonthsParse[o]&&(this._longMonthsParse[o]=new RegExp("^"+this.months(n,"").replace(".","")+"$","i"),this._shortMonthsParse[o]=new RegExp("^"+this.monthsShort(n,"").replace(".","")+"$","i")),i||this._monthsParse[o]||(s="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[o]=new RegExp(s.replace(".",""),"i")),i&&"MMMM"===e&&this._longMonthsParse[o].test(t))return o
if(i&&"MMM"===e&&this._shortMonthsParse[o].test(t))return o
if(!i&&this._monthsParse[o].test(t))return o}}function Z(t,e){var i
return"string"==typeof e&&(e=t.localeData().monthsParse(e),"number"!=typeof e)?t:(i=Math.min(t.date(),q(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,i),t)}function K(t){return null!=t?(Z(this,t),e.updateOffset(this,!0),this):E(this,"Month")}function Q(){return q(this.year(),this.month())}function J(t){var e,i=t._a
return i&&-2===l(t).overflow&&(e=i[ao]<0||i[ao]>11?ao:i[ho]<1||i[ho]>q(i[ro],i[ao])?ho:i[lo]<0||i[lo]>24||24===i[lo]&&(0!==i[uo]||0!==i[co]||0!==i[po])?lo:i[uo]<0||i[uo]>59?uo:i[co]<0||i[co]>59?co:i[po]<0||i[po]>999?po:-1,l(t)._overflowDayOfYear&&(ro>e||e>ho)&&(e=ho),l(t).overflow=e),t}function tt(t){e.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function et(t,e){var i=!0
return a(function(){return i&&(tt(t+"\n"+(new Error).stack),i=!1),e.apply(this,arguments)},e)}function it(t,e){go[t]||(tt(e),go[t]=!0)}function ot(t){var e,i,o=t._i,n=vo.exec(o)
if(n){for(l(t).iso=!0,e=0,i=yo.length;i>e;e++)if(yo[e][1].exec(o)){t._f=yo[e][0]
break}for(e=0,i=bo.length;i>e;e++)if(bo[e][1].exec(o)){t._f+=(n[6]||" ")+bo[e][0]
break}o.match(eo)&&(t._f+="Z"),xt(t)}else t._isValid=!1}function nt(t){var i=_o.exec(t._i)
return null!==i?void(t._d=new Date(+i[1])):(ot(t),void(t._isValid===!1&&(delete t._isValid,e.createFromInputFallback(t))))}function st(t,e,i,o,n,s,r){var a=new Date(t,e,i,o,n,s,r)
return 1970>t&&a.setFullYear(t),a}function rt(t){var e=new Date(Date.UTC.apply(null,arguments))
return 1970>t&&e.setUTCFullYear(t),e}function at(t){return ht(t)?366:365}function ht(t){return t%4===0&&t%100!==0||t%400===0}function dt(){return ht(this.year())}function lt(t,e,i){var o,n=i-e,s=i-t.day()
return s>n&&(s-=7),n-7>s&&(s+=7),o=Et(t).add(s,"d"),{week:Math.ceil(o.dayOfYear()/7),year:o.year()}}function ut(t){return lt(t,this._week.dow,this._week.doy).week}function ct(){return this._week.dow}function pt(){return this._week.doy}function ft(t){var e=this.localeData().week(this)
return null==t?e:this.add(7*(t-e),"d")}function mt(t){var e=lt(this,1,4).week
return null==t?e:this.add(7*(t-e),"d")}function gt(t,e,i,o,n){var s,r=6+n-o,a=rt(t,0,1+r),h=a.getUTCDay()
return n>h&&(h+=7),i=null!=i?1*i:n,s=1+r+7*(e-1)-h+i,{year:s>0?t:t-1,dayOfYear:s>0?s:at(t-1)+s}}function vt(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1
return null==t?e:this.add(t-e,"d")}function yt(t,e,i){return null!=t?t:null!=e?e:i}function bt(t){var e=new Date
return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function _t(t){var e,i,o,n,s=[]
if(!t._d){for(o=bt(t),t._w&&null==t._a[ho]&&null==t._a[ao]&&wt(t),t._dayOfYear&&(n=yt(t._a[ro],o[ro]),t._dayOfYear>at(n)&&(l(t)._overflowDayOfYear=!0),i=rt(n,0,t._dayOfYear),t._a[ao]=i.getUTCMonth(),t._a[ho]=i.getUTCDate()),e=0;3>e&&null==t._a[e];++e)t._a[e]=s[e]=o[e]
for(;7>e;e++)t._a[e]=s[e]=null==t._a[e]?2===e?1:0:t._a[e]
24===t._a[lo]&&0===t._a[uo]&&0===t._a[co]&&0===t._a[po]&&(t._nextDay=!0,t._a[lo]=0),t._d=(t._useUTC?rt:st).apply(null,s),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[lo]=24)}}function wt(t){var e,i,o,n,s,r,a
e=t._w,null!=e.GG||null!=e.W||null!=e.E?(s=1,r=4,i=yt(e.GG,t._a[ro],lt(Et(),1,4).year),o=yt(e.W,1),n=yt(e.E,1)):(s=t._locale._week.dow,r=t._locale._week.doy,i=yt(e.gg,t._a[ro],lt(Et(),s,r).year),o=yt(e.w,1),null!=e.d?(n=e.d,s>n&&++o):n=null!=e.e?e.e+s:s),a=gt(i,o,n,r,s),t._a[ro]=a.year,t._dayOfYear=a.dayOfYear}function xt(t){if(t._f===e.ISO_8601)return void ot(t)
t._a=[],l(t).empty=!0
var i,o,n,s,r,a=""+t._i,h=a.length,d=0
for(n=R(t._f,t._locale).match(Bi)||[],i=0;i<n.length;i++)s=n[i],o=(a.match(H(s,t))||[])[0],o&&(r=a.substr(0,a.indexOf(o)),r.length>0&&l(t).unusedInput.push(r),a=a.slice(a.indexOf(o)+o.length),d+=o.length),Wi[s]?(o?l(t).empty=!1:l(t).unusedTokens.push(s),U(s,o,t)):t._strict&&!o&&l(t).unusedTokens.push(s)
l(t).charsLeftOver=h-d,a.length>0&&l(t).unusedInput.push(a),l(t).bigHour===!0&&t._a[lo]<=12&&t._a[lo]>0&&(l(t).bigHour=void 0),t._a[lo]=kt(t._locale,t._a[lo],t._meridiem),_t(t),J(t)}function kt(t,e,i){var o
return null==i?e:null!=t.meridiemHour?t.meridiemHour(e,i):null!=t.isPM?(o=t.isPM(i),o&&12>e&&(e+=12),o||12!==e||(e=0),e):e}function Tt(t){var e,i,o,n,s
if(0===t._f.length)return l(t).invalidFormat=!0,void(t._d=new Date(NaN))
for(n=0;n<t._f.length;n++)s=0,e=p({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[n],xt(e),u(e)&&(s+=l(e).charsLeftOver,s+=10*l(e).unusedTokens.length,l(e).score=s,(null==o||o>s)&&(o=s,i=e))
a(t,i||e)}function Dt(t){if(!t._d){var e=M(t._i)
t._a=[e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],_t(t)}}function Ot(t){var e=new f(J(Ct(t)))
return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function Ct(t){var e=t._i,i=t._f
return t._locale=t._locale||D(t._l),null===e||void 0===i&&""===e?c({nullInput:!0}):("string"==typeof e&&(t._i=e=t._locale.preparse(e)),m(e)?new f(J(e)):(o(i)?Tt(t):i?xt(t):n(e)?t._d=e:Mt(t),t))}function Mt(t){var i=t._i
void 0===i?t._d=new Date:n(i)?t._d=new Date(+i):"string"==typeof i?nt(t):o(i)?(t._a=s(i.slice(0),function(t){return parseInt(t,10)}),_t(t)):"object"==typeof i?Dt(t):"number"==typeof i?t._d=new Date(i):e.createFromInputFallback(t)}function St(t,e,i,o,n){var s={}
return"boolean"==typeof i&&(o=i,i=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=n,s._l=i,s._i=t,s._f=e,s._strict=o,Ot(s)}function Et(t,e,i,o){return St(t,e,i,o,!1)}function Pt(t,e){var i,n
if(1===e.length&&o(e[0])&&(e=e[0]),!e.length)return Et()
for(i=e[0],n=1;n<e.length;++n)e[n].isValid()&&!e[n][t](i)||(i=e[n])
return i}function Nt(){var t=[].slice.call(arguments,0)
return Pt("isBefore",t)}function It(){var t=[].slice.call(arguments,0)
return Pt("isAfter",t)}function At(t){var e=M(t),i=e.year||0,o=e.quarter||0,n=e.month||0,s=e.week||0,r=e.day||0,a=e.hour||0,h=e.minute||0,d=e.second||0,l=e.millisecond||0
this._milliseconds=+l+1e3*d+6e4*h+36e5*a,this._days=+r+7*s,this._months=+n+3*o+12*i,this._data={},this._locale=D(),this._bubble()}function jt(t){return t instanceof At}function Lt(t,e){A(t,0,0,function(){var t=this.utcOffset(),i="+"
return 0>t&&(t=-t,i="-"),i+I(~~(t/60),2)+e+I(~~t%60,2)})}function zt(t){var e=(t||"").match(eo)||[],i=e[e.length-1]||[],o=(i+"").match(Do)||["-",0,0],n=+(60*o[1])+v(o[2])
return"+"===o[0]?n:-n}function Rt(t,i){var o,s
return i._isUTC?(o=i.clone(),s=(m(t)||n(t)?+t:+Et(t))-+o,o._d.setTime(+o._d+s),e.updateOffset(o,!1),o):Et(t).local()}function Ft(t){return 15*-Math.round(t._d.getTimezoneOffset()/15)}function Bt(t,i){var o,n=this._offset||0
return null!=t?("string"==typeof t&&(t=zt(t)),Math.abs(t)<16&&(t=60*t),!this._isUTC&&i&&(o=Ft(this)),this._offset=t,this._isUTC=!0,null!=o&&this.add(o,"m"),n!==t&&(!i||this._changeInProgress?ie(this,Kt(t-n,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?n:Ft(this)}function Ht(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function Yt(t){return this.utcOffset(0,t)}function Wt(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Ft(this),"m")),this}function Gt(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(zt(this._i)),this}function Ut(t){return t=t?Et(t).utcOffset():0,(this.utcOffset()-t)%60===0}function qt(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function $t(){if("undefined"!=typeof this._isDSTShifted)return this._isDSTShifted
var t={}
if(p(t,this),t=Ct(t),t._a){var e=t._isUTC?h(t._a):Et(t._a)
this._isDSTShifted=this.isValid()&&y(t._a,e.toArray())>0}else this._isDSTShifted=!1
return this._isDSTShifted}function Vt(){return!this._isUTC}function Xt(){return this._isUTC}function Zt(){return this._isUTC&&0===this._offset}function Kt(t,e){var i,o,n,s=t,a=null
return jt(t)?s={ms:t._milliseconds,d:t._days,M:t._months}:"number"==typeof t?(s={},e?s[e]=t:s.milliseconds=t):(a=Oo.exec(t))?(i="-"===a[1]?-1:1,s={y:0,d:v(a[ho])*i,h:v(a[lo])*i,m:v(a[uo])*i,s:v(a[co])*i,ms:v(a[po])*i}):(a=Co.exec(t))?(i="-"===a[1]?-1:1,s={y:Qt(a[2],i),M:Qt(a[3],i),d:Qt(a[4],i),h:Qt(a[5],i),m:Qt(a[6],i),s:Qt(a[7],i),w:Qt(a[8],i)}):null==s?s={}:"object"==typeof s&&("from"in s||"to"in s)&&(n=te(Et(s.from),Et(s.to)),s={},s.ms=n.milliseconds,s.M=n.months),o=new At(s),jt(t)&&r(t,"_locale")&&(o._locale=t._locale),o}function Qt(t,e){var i=t&&parseFloat(t.replace(",","."))
return(isNaN(i)?0:i)*e}function Jt(t,e){var i={milliseconds:0,months:0}
return i.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(i.months,"M").isAfter(e)&&--i.months,i.milliseconds=+e-+t.clone().add(i.months,"M"),i}function te(t,e){var i
return e=Rt(e,t),t.isBefore(e)?i=Jt(t,e):(i=Jt(e,t),i.milliseconds=-i.milliseconds,i.months=-i.months),i}function ee(t,e){return function(i,o){var n,s
return null===o||isNaN(+o)||(it(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period)."),s=i,i=o,o=s),i="string"==typeof i?+i:i,n=Kt(i,o),ie(this,n,t),this}}function ie(t,i,o,n){var s=i._milliseconds,r=i._days,a=i._months
n=null==n?!0:n,s&&t._d.setTime(+t._d+s*o),r&&P(t,"Date",E(t,"Date")+r*o),a&&Z(t,E(t,"Month")+a*o),n&&e.updateOffset(t,r||a)}function oe(t,e){var i=t||Et(),o=Rt(i,this).startOf("day"),n=this.diff(o,"days",!0),s=-6>n?"sameElse":-1>n?"lastWeek":0>n?"lastDay":1>n?"sameDay":2>n?"nextDay":7>n?"nextWeek":"sameElse"
return this.format(e&&e[s]||this.localeData().calendar(s,this,Et(i)))}function ne(){return new f(this)}function se(t,e){var i
return e=C("undefined"!=typeof e?e:"millisecond"),"millisecond"===e?(t=m(t)?t:Et(t),+this>+t):(i=m(t)?+t:+Et(t),i<+this.clone().startOf(e))}function re(t,e){var i
return e=C("undefined"!=typeof e?e:"millisecond"),"millisecond"===e?(t=m(t)?t:Et(t),+t>+this):(i=m(t)?+t:+Et(t),+this.clone().endOf(e)<i)}function ae(t,e,i){return this.isAfter(t,i)&&this.isBefore(e,i)}function he(t,e){var i
return e=C(e||"millisecond"),"millisecond"===e?(t=m(t)?t:Et(t),+this===+t):(i=+Et(t),+this.clone().startOf(e)<=i&&i<=+this.clone().endOf(e))}function de(t,e,i){var o,n,s=Rt(t,this),r=6e4*(s.utcOffset()-this.utcOffset())
return e=C(e),"year"===e||"month"===e||"quarter"===e?(n=le(this,s),"quarter"===e?n/=3:"year"===e&&(n/=12)):(o=this-s,n="second"===e?o/1e3:"minute"===e?o/6e4:"hour"===e?o/36e5:"day"===e?(o-r)/864e5:"week"===e?(o-r)/6048e5:o),i?n:g(n)}function le(t,e){var i,o,n=12*(e.year()-t.year())+(e.month()-t.month()),s=t.clone().add(n,"months")
return 0>e-s?(i=t.clone().add(n-1,"months"),o=(e-s)/(s-i)):(i=t.clone().add(n+1,"months"),o=(e-s)/(i-s)),-(n+o)}function ue(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ce(){var t=this.clone().utc()
return 0<t.year()&&t.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():z(t,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):z(t,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function pe(t){var i=z(this,t||e.defaultFormat)
return this.localeData().postformat(i)}function fe(t,e){return this.isValid()?Kt({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function me(t){return this.from(Et(),t)}function ge(t,e){return this.isValid()?Kt({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function ve(t){return this.to(Et(),t)}function ye(t){var e
return void 0===t?this._locale._abbr:(e=D(t),null!=e&&(this._locale=e),this)}function be(){return this._locale}function _e(t){switch(t=C(t)){case"year":this.month(0)
case"quarter":case"month":this.date(1)
case"week":case"isoWeek":case"day":this.hours(0)
case"hour":this.minutes(0)
case"minute":this.seconds(0)
case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),"isoWeek"===t&&this.isoWeekday(1),"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this}function we(t){return t=C(t),void 0===t||"millisecond"===t?this:this.startOf(t).add(1,"isoWeek"===t?"week":t).subtract(1,"ms")}function xe(){return+this._d-6e4*(this._offset||0)}function ke(){return Math.floor(+this/1e3)}function Te(){return this._offset?new Date(+this):this._d}function De(){var t=this
return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function Oe(){var t=this
return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function Ce(){return u(this)}function Me(){return a({},l(this))}function Se(){return l(this).overflow}function Ee(t,e){A(0,[t,t.length],0,e)}function Pe(t,e,i){return lt(Et([t,11,31+e-i]),e,i).week}function Ne(t){var e=lt(this,this.localeData()._week.dow,this.localeData()._week.doy).year
return null==t?e:this.add(t-e,"y")}function Ie(t){var e=lt(this,1,4).year
return null==t?e:this.add(t-e,"y")}function Ae(){return Pe(this.year(),1,4)}function je(){var t=this.localeData()._week
return Pe(this.year(),t.dow,t.doy)}function Le(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)}function ze(t,e){return"string"!=typeof t?t:isNaN(t)?(t=e.weekdaysParse(t),"number"==typeof t?t:null):parseInt(t,10)}function Re(t){return this._weekdays[t.day()]}function Fe(t){return this._weekdaysShort[t.day()]}function Be(t){return this._weekdaysMin[t.day()]}function He(t){var e,i,o
for(this._weekdaysParse=this._weekdaysParse||[],e=0;7>e;e++)if(this._weekdaysParse[e]||(i=Et([2e3,1]).day(e),o="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[e]=new RegExp(o.replace(".",""),"i")),this._weekdaysParse[e].test(t))return e}function Ye(t){var e=this._isUTC?this._d.getUTCDay():this._d.getDay()
return null!=t?(t=ze(t,this.localeData()),this.add(t-e,"d")):e}function We(t){var e=(this.day()+7-this.localeData()._week.dow)%7
return null==t?e:this.add(t-e,"d")}function Ge(t){return null==t?this.day()||7:this.day(this.day()%7?t:t-7)}function Ue(t,e){A(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}function qe(t,e){return e._meridiemParse}function $e(t){return"p"===(t+"").toLowerCase().charAt(0)}function Ve(t,e,i){return t>11?i?"pm":"PM":i?"am":"AM"}function Xe(t,e){e[po]=v(1e3*("0."+t))}function Ze(){return this._isUTC?"UTC":""}function Ke(){return this._isUTC?"Coordinated Universal Time":""}function Qe(t){return Et(1e3*t)}function Je(){return Et.apply(null,arguments).parseZone()}function ti(t,e,i){var o=this._calendar[t]
return"function"==typeof o?o.call(e,i):o}function ei(t){var e=this._longDateFormat[t],i=this._longDateFormat[t.toUpperCase()]
return e||!i?e:(this._longDateFormat[t]=i.replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t])}function ii(){return this._invalidDate}function oi(t){return this._ordinal.replace("%d",t)}function ni(t){return t}function si(t,e,i,o){var n=this._relativeTime[i]
return"function"==typeof n?n(t,e,i,o):n.replace(/%d/i,t)}function ri(t,e){var i=this._relativeTime[t>0?"future":"past"]
return"function"==typeof i?i(e):i.replace(/%s/i,e)}function ai(t){var e,i
for(i in t)e=t[i],"function"==typeof e?this[i]=e:this["_"+i]=e
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function hi(t,e,i,o){var n=D(),s=h().set(o,e)
return n[i](s,t)}function di(t,e,i,o,n){if("number"==typeof t&&(e=t,t=void 0),t=t||"",null!=e)return hi(t,e,i,n)
var s,r=[]
for(s=0;o>s;s++)r[s]=hi(t,s,i,n)
return r}function li(t,e){return di(t,e,"months",12,"month")}function ui(t,e){return di(t,e,"monthsShort",12,"month")}function ci(t,e){return di(t,e,"weekdays",7,"day")}function pi(t,e){return di(t,e,"weekdaysShort",7,"day")}function fi(t,e){return di(t,e,"weekdaysMin",7,"day")}function mi(){var t=this._data
return this._milliseconds=Zo(this._milliseconds),this._days=Zo(this._days),this._months=Zo(this._months),t.milliseconds=Zo(t.milliseconds),t.seconds=Zo(t.seconds),t.minutes=Zo(t.minutes),t.hours=Zo(t.hours),t.months=Zo(t.months),t.years=Zo(t.years),this}function gi(t,e,i,o){var n=Kt(e,i)
return t._milliseconds+=o*n._milliseconds,t._days+=o*n._days,t._months+=o*n._months,t._bubble()}function vi(t,e){return gi(this,t,e,1)}function yi(t,e){return gi(this,t,e,-1)}function bi(t){return 0>t?Math.floor(t):Math.ceil(t)}function _i(){var t,e,i,o,n,s=this._milliseconds,r=this._days,a=this._months,h=this._data
return s>=0&&r>=0&&a>=0||0>=s&&0>=r&&0>=a||(s+=864e5*bi(xi(a)+r),r=0,a=0),h.milliseconds=s%1e3,t=g(s/1e3),h.seconds=t%60,e=g(t/60),h.minutes=e%60,i=g(e/60),h.hours=i%24,r+=g(i/24),n=g(wi(r)),a+=n,r-=bi(xi(n)),o=g(a/12),a%=12,h.days=r,h.months=a,h.years=o,this}function wi(t){return 4800*t/146097}function xi(t){return 146097*t/4800}function ki(t){var e,i,o=this._milliseconds
if(t=C(t),"month"===t||"year"===t)return e=this._days+o/864e5,i=this._months+wi(e),"month"===t?i:i/12
switch(e=this._days+Math.round(xi(this._months)),t){case"week":return e/7+o/6048e5
case"day":return e+o/864e5
case"hour":return 24*e+o/36e5
case"minute":return 1440*e+o/6e4
case"second":return 86400*e+o/1e3
case"millisecond":return Math.floor(864e5*e)+o
default:throw new Error("Unknown unit "+t)}}function Ti(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*v(this._months/12)}function Di(t){return function(){return this.as(t)}}function Oi(t){return t=C(t),this[t+"s"]()}function Ci(t){return function(){return this._data[t]}}function Mi(){return g(this.days()/7)}function Si(t,e,i,o,n){return n.relativeTime(e||1,!!i,t,o)}function Ei(t,e,i){var o=Kt(t).abs(),n=pn(o.as("s")),s=pn(o.as("m")),r=pn(o.as("h")),a=pn(o.as("d")),h=pn(o.as("M")),d=pn(o.as("y")),l=n<fn.s&&["s",n]||1===s&&["m"]||s<fn.m&&["mm",s]||1===r&&["h"]||r<fn.h&&["hh",r]||1===a&&["d"]||a<fn.d&&["dd",a]||1===h&&["M"]||h<fn.M&&["MM",h]||1===d&&["y"]||["yy",d]
return l[2]=e,l[3]=+t>0,l[4]=i,Si.apply(null,l)}function Pi(t,e){return void 0===fn[t]?!1:void 0===e?fn[t]:(fn[t]=e,!0)}function Ni(t){var e=this.localeData(),i=Ei(this,!t,e)
return t&&(i=e.pastFuture(+this,i)),e.postformat(i)}function Ii(){var t,e,i,o=mn(this._milliseconds)/1e3,n=mn(this._days),s=mn(this._months)
t=g(o/60),e=g(t/60),o%=60,t%=60,i=g(s/12),s%=12
var r=i,a=s,h=n,d=e,l=t,u=o,c=this.asSeconds()
return c?(0>c?"-":"")+"P"+(r?r+"Y":"")+(a?a+"M":"")+(h?h+"D":"")+(d||l||u?"T":"")+(d?d+"H":"")+(l?l+"M":"")+(u?u+"S":""):"P0D"}var Ai,ji,Li=e.momentProperties=[],zi=!1,Ri={},Fi={},Bi=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Hi=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Yi={},Wi={},Gi=/\d/,Ui=/\d\d/,qi=/\d{3}/,$i=/\d{4}/,Vi=/[+-]?\d{6}/,Xi=/\d\d?/,Zi=/\d{1,3}/,Ki=/\d{1,4}/,Qi=/[+-]?\d{1,6}/,Ji=/\d+/,to=/[+-]?\d+/,eo=/Z|[+-]\d\d:?\d\d/gi,io=/[+-]?\d+(\.\d{1,3})?/,oo=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,no={},so={},ro=0,ao=1,ho=2,lo=3,uo=4,co=5,po=6
A("M",["MM",2],"Mo",function(){return this.month()+1}),A("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)}),A("MMMM",0,0,function(t){return this.localeData().months(this,t)}),O("month","M"),B("M",Xi),B("MM",Xi,Ui),B("MMM",oo),B("MMMM",oo),W(["M","MM"],function(t,e){e[ao]=v(t)-1}),W(["MMM","MMMM"],function(t,e,i,o){var n=i._locale.monthsParse(t,o,i._strict)
null!=n?e[ao]=n:l(i).invalidMonth=t})
var fo="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),mo="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),go={}
e.suppressDeprecationWarnings=!1
var vo=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,yo=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],bo=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],_o=/^\/?Date\((\-?\d+)/i
e.createFromInputFallback=et("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),A(0,["YY",2],0,function(){return this.year()%100}),A(0,["YYYY",4],0,"year"),A(0,["YYYYY",5],0,"year"),A(0,["YYYYYY",6,!0],0,"year"),O("year","y"),B("Y",to),B("YY",Xi,Ui),B("YYYY",Ki,$i),B("YYYYY",Qi,Vi),B("YYYYYY",Qi,Vi),W(["YYYYY","YYYYYY"],ro),W("YYYY",function(t,i){i[ro]=2===t.length?e.parseTwoDigitYear(t):v(t)}),W("YY",function(t,i){i[ro]=e.parseTwoDigitYear(t)}),e.parseTwoDigitYear=function(t){return v(t)+(v(t)>68?1900:2e3)}
var wo=S("FullYear",!1)
A("w",["ww",2],"wo","week"),A("W",["WW",2],"Wo","isoWeek"),O("week","w"),O("isoWeek","W"),B("w",Xi),B("ww",Xi,Ui),B("W",Xi),B("WW",Xi,Ui),G(["w","ww","W","WW"],function(t,e,i,o){e[o.substr(0,1)]=v(t)})
var xo={dow:0,doy:6}
A("DDD",["DDDD",3],"DDDo","dayOfYear"),O("dayOfYear","DDD"),B("DDD",Zi),B("DDDD",qi),W(["DDD","DDDD"],function(t,e,i){i._dayOfYear=v(t)}),e.ISO_8601=function(){}
var ko=et("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var t=Et.apply(null,arguments)
return this>t?this:t}),To=et("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var t=Et.apply(null,arguments)
return t>this?this:t})
Lt("Z",":"),Lt("ZZ",""),B("Z",eo),B("ZZ",eo),W(["Z","ZZ"],function(t,e,i){i._useUTC=!0,i._tzm=zt(t)})
var Do=/([\+\-]|\d\d)/gi
e.updateOffset=function(){}
var Oo=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Co=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/
Kt.fn=At.prototype
var Mo=ee(1,"add"),So=ee(-1,"subtract")
e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ"
var Eo=et("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return void 0===t?this.localeData():this.locale(t)})
A(0,["gg",2],0,function(){return this.weekYear()%100}),A(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Ee("gggg","weekYear"),Ee("ggggg","weekYear"),Ee("GGGG","isoWeekYear"),Ee("GGGGG","isoWeekYear"),O("weekYear","gg"),O("isoWeekYear","GG"),B("G",to),B("g",to),B("GG",Xi,Ui),B("gg",Xi,Ui),B("GGGG",Ki,$i),B("gggg",Ki,$i),B("GGGGG",Qi,Vi),B("ggggg",Qi,Vi),G(["gggg","ggggg","GGGG","GGGGG"],function(t,e,i,o){e[o.substr(0,2)]=v(t)}),G(["gg","GG"],function(t,i,o,n){i[n]=e.parseTwoDigitYear(t)}),A("Q",0,0,"quarter"),O("quarter","Q"),B("Q",Gi),W("Q",function(t,e){e[ao]=3*(v(t)-1)}),A("D",["DD",2],"Do","date"),O("date","D"),B("D",Xi),B("DD",Xi,Ui),B("Do",function(t,e){return t?e._ordinalParse:e._ordinalParseLenient}),W(["D","DD"],ho),W("Do",function(t,e){e[ho]=v(t.match(Xi)[0],10)})
var Po=S("Date",!0)
A("d",0,"do","day"),A("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)}),A("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)}),A("dddd",0,0,function(t){return this.localeData().weekdays(this,t)}),A("e",0,0,"weekday"),A("E",0,0,"isoWeekday"),O("day","d"),O("weekday","e"),O("isoWeekday","E"),B("d",Xi),B("e",Xi),B("E",Xi),B("dd",oo),B("ddd",oo),B("dddd",oo),G(["dd","ddd","dddd"],function(t,e,i){var o=i._locale.weekdaysParse(t)
null!=o?e.d=o:l(i).invalidWeekday=t}),G(["d","e","E"],function(t,e,i,o){e[o]=v(t)})
var No="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Io="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Ao="Su_Mo_Tu_We_Th_Fr_Sa".split("_")
A("H",["HH",2],0,"hour"),A("h",["hh",2],0,function(){return this.hours()%12||12}),Ue("a",!0),Ue("A",!1),O("hour","h"),B("a",qe),B("A",qe),B("H",Xi),B("h",Xi),B("HH",Xi,Ui),B("hh",Xi,Ui),W(["H","HH"],lo),W(["a","A"],function(t,e,i){i._isPm=i._locale.isPM(t),i._meridiem=t}),W(["h","hh"],function(t,e,i){e[lo]=v(t),l(i).bigHour=!0})
var jo=/[ap]\.?m?\.?/i,Lo=S("Hours",!0)
A("m",["mm",2],0,"minute"),O("minute","m"),B("m",Xi),B("mm",Xi,Ui),W(["m","mm"],uo)
var zo=S("Minutes",!1)
A("s",["ss",2],0,"second"),O("second","s"),B("s",Xi),B("ss",Xi,Ui),W(["s","ss"],co)
var Ro=S("Seconds",!1)
A("S",0,0,function(){return~~(this.millisecond()/100)}),A(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),A(0,["SSS",3],0,"millisecond"),A(0,["SSSS",4],0,function(){return 10*this.millisecond()}),A(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),A(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),A(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),A(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),A(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),O("millisecond","ms"),B("S",Zi,Gi),B("SS",Zi,Ui),B("SSS",Zi,qi)
var Fo
for(Fo="SSSS";Fo.length<=9;Fo+="S")B(Fo,Ji)
for(Fo="S";Fo.length<=9;Fo+="S")W(Fo,Xe)
var Bo=S("Milliseconds",!1)
A("z",0,0,"zoneAbbr"),A("zz",0,0,"zoneName")
var Ho=f.prototype
Ho.add=Mo,Ho.calendar=oe,Ho.clone=ne,Ho.diff=de,Ho.endOf=we,Ho.format=pe,Ho.from=fe,Ho.fromNow=me,Ho.to=ge,Ho.toNow=ve,Ho.get=N,Ho.invalidAt=Se,Ho.isAfter=se,Ho.isBefore=re,Ho.isBetween=ae,Ho.isSame=he,Ho.isValid=Ce,Ho.lang=Eo,Ho.locale=ye,Ho.localeData=be,Ho.max=To,Ho.min=ko,Ho.parsingFlags=Me,Ho.set=N,Ho.startOf=_e,Ho.subtract=So,Ho.toArray=De,Ho.toObject=Oe,Ho.toDate=Te,Ho.toISOString=ce,Ho.toJSON=ce,Ho.toString=ue,Ho.unix=ke,Ho.valueOf=xe,Ho.year=wo,Ho.isLeapYear=dt,Ho.weekYear=Ne,Ho.isoWeekYear=Ie,Ho.quarter=Ho.quarters=Le,Ho.month=K,Ho.daysInMonth=Q,Ho.week=Ho.weeks=ft,Ho.isoWeek=Ho.isoWeeks=mt,Ho.weeksInYear=je,Ho.isoWeeksInYear=Ae,Ho.date=Po,Ho.day=Ho.days=Ye,Ho.weekday=We,Ho.isoWeekday=Ge,Ho.dayOfYear=vt,Ho.hour=Ho.hours=Lo,Ho.minute=Ho.minutes=zo,Ho.second=Ho.seconds=Ro,Ho.millisecond=Ho.milliseconds=Bo,Ho.utcOffset=Bt,Ho.utc=Yt,Ho.local=Wt,Ho.parseZone=Gt,Ho.hasAlignedHourOffset=Ut,Ho.isDST=qt,Ho.isDSTShifted=$t,Ho.isLocal=Vt,Ho.isUtcOffset=Xt,Ho.isUtc=Zt,Ho.isUTC=Zt,Ho.zoneAbbr=Ze,Ho.zoneName=Ke,Ho.dates=et("dates accessor is deprecated. Use date instead.",Po),Ho.months=et("months accessor is deprecated. Use month instead",K),Ho.years=et("years accessor is deprecated. Use year instead",wo),Ho.zone=et("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Ht)
var Yo=Ho,Wo={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Go={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Uo="Invalid date",qo="%d",$o=/\d{1,2}/,Vo={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Xo=b.prototype
Xo._calendar=Wo,Xo.calendar=ti,Xo._longDateFormat=Go,Xo.longDateFormat=ei,Xo._invalidDate=Uo,Xo.invalidDate=ii,Xo._ordinal=qo,Xo.ordinal=oi,Xo._ordinalParse=$o,Xo.preparse=ni,Xo.postformat=ni,Xo._relativeTime=Vo,Xo.relativeTime=si,Xo.pastFuture=ri,Xo.set=ai,Xo.months=$,Xo._months=fo,Xo.monthsShort=V,Xo._monthsShort=mo,Xo.monthsParse=X,Xo.week=ut,Xo._week=xo,Xo.firstDayOfYear=pt,Xo.firstDayOfWeek=ct,Xo.weekdays=Re,Xo._weekdays=No,Xo.weekdaysMin=Be,Xo._weekdaysMin=Ao,Xo.weekdaysShort=Fe,Xo._weekdaysShort=Io,Xo.weekdaysParse=He,Xo.isPM=$e,Xo._meridiemParse=jo,Xo.meridiem=Ve,k("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,i=1===v(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th"
return t+i}}),e.lang=et("moment.lang is deprecated. Use moment.locale instead.",k),e.langData=et("moment.langData is deprecated. Use moment.localeData instead.",D)
var Zo=Math.abs,Ko=Di("ms"),Qo=Di("s"),Jo=Di("m"),tn=Di("h"),en=Di("d"),on=Di("w"),nn=Di("M"),sn=Di("y"),rn=Ci("milliseconds"),an=Ci("seconds"),hn=Ci("minutes"),dn=Ci("hours"),ln=Ci("days"),un=Ci("months"),cn=Ci("years"),pn=Math.round,fn={s:45,m:45,h:22,d:26,M:11},mn=Math.abs,gn=At.prototype
gn.abs=mi,gn.add=vi,gn.subtract=yi,gn.as=ki,gn.asMilliseconds=Ko,gn.asSeconds=Qo,gn.asMinutes=Jo,gn.asHours=tn,gn.asDays=en,gn.asWeeks=on,gn.asMonths=nn,gn.asYears=sn,gn.valueOf=Ti,gn._bubble=_i,gn.get=Oi,gn.milliseconds=rn,gn.seconds=an,gn.minutes=hn,gn.hours=dn,gn.days=ln,gn.weeks=Mi,gn.months=un,gn.years=cn,gn.humanize=Ni,gn.toISOString=Ii,gn.toString=Ii,gn.toJSON=Ii,gn.locale=ye,gn.localeData=be,gn.toIsoString=et("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Ii),gn.lang=Eo,A("X",0,0,"unix"),A("x",0,0,"valueOf"),B("x",to),B("X",io),W("X",function(t,e,i){i._d=new Date(1e3*parseFloat(t,10))}),W("x",function(t,e,i){i._d=new Date(v(t))}),e.version="2.10.6",i(Et),e.fn=Yo,e.min=Nt,e.max=It,e.utc=h,e.unix=Qe,e.months=li,e.isDate=n,e.locale=k,e.invalid=c,e.duration=Kt,e.isMoment=m,e.weekdays=ci,e.parseZone=Je,e.localeData=D,e.isDuration=jt,e.monthsShort=ui,e.weekdaysMin=fi,e.defineLocale=T,e.weekdaysShort=pi,e.normalizeUnits=C,e.relativeTimeThreshold=Pi
var vn=e
return vn})}).call(e,i(4)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){function i(t){throw new Error("Cannot find module '"+t+"'.")}i.keys=function(){return[]},i.resolve=i,t.exports=i,i.id=5},function(t,e){(function(e){"use strict"
function i(t,e,i){var o=e&&i||0,n=0
for(e=e||[],t.toLowerCase().replace(/[0-9a-f]{2}/g,function(t){16>n&&(e[o+n++]=u[t])});16>n;)e[o+n++]=0
return e}function o(t,e){var i=e||0,o=l
return o[t[i++]]+o[t[i++]]+o[t[i++]]+o[t[i++]]+"-"+o[t[i++]]+o[t[i++]]+"-"+o[t[i++]]+o[t[i++]]+"-"+o[t[i++]]+o[t[i++]]+"-"+o[t[i++]]+o[t[i++]]+o[t[i++]]+o[t[i++]]+o[t[i++]]+o[t[i++]]}function n(t,e,i){var n=e&&i||0,s=e||[]
t=t||{}
var r=void 0!==t.clockseq?t.clockseq:m,a=void 0!==t.msecs?t.msecs:(new Date).getTime(),h=void 0!==t.nsecs?t.nsecs:v+1,d=a-g+(h-v)/1e4
if(0>d&&void 0===t.clockseq&&(r=r+1&16383),(0>d||a>g)&&void 0===t.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
g=a,v=h,m=r,a+=122192928e5
var l=(1e4*(268435455&a)+h)%4294967296
s[n++]=l>>>24&255,s[n++]=l>>>16&255,s[n++]=l>>>8&255,s[n++]=255&l
var u=a/4294967296*1e4&268435455
s[n++]=u>>>8&255,s[n++]=255&u,s[n++]=u>>>24&15|16,s[n++]=u>>>16&255,s[n++]=r>>>8|128,s[n++]=255&r
for(var c=t.node||f,p=0;6>p;p++)s[n+p]=c[p]
return e?e:o(s)}function s(t,e,i){var n=e&&i||0
"string"==typeof t&&(e="binary"==t?new Array(16):null,t=null),t=t||{}
var s=t.random||(t.rng||r)()
if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e)for(var a=0;16>a;a++)e[n+a]=s[a]
return e||o(s)}var r,a="undefined"!=typeof window?window:"undefined"!=typeof e?e:null
if(a&&a.crypto&&crypto.getRandomValues){var h=new Uint8Array(16)
r=function(){return crypto.getRandomValues(h),h}}if(!r){var d=new Array(16)
r=function(){for(var t,e=0;16>e;e++)0===(3&e)&&(t=4294967296*Math.random()),d[e]=t>>>((3&e)<<3)&255
return d}}for(var l=[],u={},c=0;256>c;c++)l[c]=(c+256).toString(16).substr(1),u[l[c]]=c
var p=r(),f=[1|p[0],p[1],p[2],p[3],p[4],p[5]],m=16383&(p[6]<<8|p[7]),g=0,v=0,y=s
y.v1=n,y.v4=s,y.parse=i,y.unparse=o,t.exports=y}).call(e,function(){return this}())},function(t,e){"use strict"
e.prepareElements=function(t){for(var e in t)t.hasOwnProperty(e)&&(t[e].redundant=t[e].used,t[e].used=[])},e.cleanupElements=function(t){for(var e in t)if(t.hasOwnProperty(e)&&t[e].redundant){for(var i=0;i<t[e].redundant.length;i++)t[e].redundant[i].parentNode.removeChild(t[e].redundant[i])
t[e].redundant=[]}},e.getSVGElement=function(t,e,i){var o
return e.hasOwnProperty(t)?e[t].redundant.length>0?(o=e[t].redundant[0],e[t].redundant.shift()):(o=document.createElementNS("http://www.w3.org/2000/svg",t),i.appendChild(o)):(o=document.createElementNS("http://www.w3.org/2000/svg",t),e[t]={used:[],redundant:[]},i.appendChild(o)),e[t].used.push(o),o},e.getDOMElement=function(t,e,i,o){var n
return e.hasOwnProperty(t)?e[t].redundant.length>0?(n=e[t].redundant[0],e[t].redundant.shift()):(n=document.createElement(t),void 0!==o?i.insertBefore(n,o):i.appendChild(n)):(n=document.createElement(t),e[t]={used:[],redundant:[]},void 0!==o?i.insertBefore(n,o):i.appendChild(n)),e[t].used.push(n),n},e.drawPoint=function(t,i,o,n,s,r){var a
if("circle"==o.style?(a=e.getSVGElement("circle",n,s),a.setAttributeNS(null,"cx",t),a.setAttributeNS(null,"cy",i),a.setAttributeNS(null,"r",.5*o.size)):(a=e.getSVGElement("rect",n,s),a.setAttributeNS(null,"x",t-.5*o.size),a.setAttributeNS(null,"y",i-.5*o.size),a.setAttributeNS(null,"width",o.size),a.setAttributeNS(null,"height",o.size)),void 0!==o.style&&a.setAttributeNS(null,"style",o.style),a.setAttributeNS(null,"class",o.className+" vis-point"),r){var h=e.getSVGElement("text",n,s)
r.xOffset&&(t+=r.xOffset),r.yOffset&&(i+=r.yOffset),r.content&&(h.textContent=r.content),r.className&&h.setAttributeNS(null,"class",r.className+" vis-label"),h.setAttributeNS(null,"x",t),h.setAttributeNS(null,"y",i)}return a},e.drawBar=function(t,i,o,n,s,r,a,h){if(0!=n){0>n&&(n*=-1,i-=n)
var d=e.getSVGElement("rect",r,a)
d.setAttributeNS(null,"x",t-.5*o),d.setAttributeNS(null,"y",i),d.setAttributeNS(null,"width",o),d.setAttributeNS(null,"height",n),d.setAttributeNS(null,"class",s),h&&d.setAttributeNS(null,"style",h)}}},function(t,e,i){"use strict"
function o(t,e){if(t&&!Array.isArray(t)&&(e=t,t=null),this._options=e||{},this._data={},this.length=0,this._fieldId=this._options.fieldId||"id",this._type={},this._options.type)for(var i in this._options.type)if(this._options.type.hasOwnProperty(i)){var o=this._options.type[i]
"Date"==o||"ISODate"==o||"ASPDate"==o?this._type[i]="Date":this._type[i]=o}if(this._options.convert)throw new Error('Option "convert" is deprecated. Use "type" instead.')
this._subscribers={},t&&this.add(t),this.setOptions(e)}var n=i(1),s=i(9)
o.prototype.setOptions=function(t){t&&void 0!==t.queue&&(t.queue===!1?this._queue&&(this._queue.destroy(),delete this._queue):(this._queue||(this._queue=s.extend(this,{replace:["add","update","remove"]})),"object"==typeof t.queue&&this._queue.setOptions(t.queue)))},o.prototype.on=function(t,e){var i=this._subscribers[t]
i||(i=[],this._subscribers[t]=i),i.push({callback:e})},o.prototype.subscribe=function(){throw new Error("DataSet.subscribe is deprecated. Use DataSet.on instead.")},o.prototype.off=function(t,e){var i=this._subscribers[t]
i&&(this._subscribers[t]=i.filter(function(t){return t.callback!=e}))},o.prototype.unsubscribe=function(){throw new Error("DataSet.unsubscribe is deprecated. Use DataSet.off instead.")},o.prototype._trigger=function(t,e,i){if("*"==t)throw new Error("Cannot trigger event *")
var o=[]
t in this._subscribers&&(o=o.concat(this._subscribers[t])),"*"in this._subscribers&&(o=o.concat(this._subscribers["*"]))
for(var n=0;n<o.length;n++){var s=o[n]
s.callback&&s.callback(t,e,i||null)}},o.prototype.add=function(t,e){var i,o=[],n=this
if(Array.isArray(t))for(var s=0,r=t.length;r>s;s++)i=n._addItem(t[s]),o.push(i)
else{if(!(t instanceof Object))throw new Error("Unknown dataType")
i=n._addItem(t),o.push(i)}return o.length&&this._trigger("add",{items:o},e),o},o.prototype.update=function(t,e){var i=[],o=[],n=[],s=this,r=s._fieldId,a=function(t){var e=t[r]
s._data[e]?(e=s._updateItem(t),o.push(e),n.push(t)):(e=s._addItem(t),i.push(e))}
if(Array.isArray(t))for(var h=0,d=t.length;d>h;h++)a(t[h])
else{if(!(t instanceof Object))throw new Error("Unknown dataType")
a(t)}return i.length&&this._trigger("add",{items:i},e),o.length&&this._trigger("update",{items:o,data:n},e),i.concat(o)},o.prototype.get=function(t){var e,i,o,s=this,r=n.getType(arguments[0])
"String"==r||"Number"==r?(e=arguments[0],o=arguments[1]):"Array"==r?(i=arguments[0],o=arguments[1]):o=arguments[0]
var a
if(o&&o.returnType){var h=["Array","Object"]
a=-1==h.indexOf(o.returnType)?"Array":o.returnType}else a="Array"
var d,l,u,c,p=o&&o.type||this._options.type,f=o&&o.filter,m=[]
if(void 0!=e)d=s._getItem(e,p),f&&!f(d)&&(d=null)
else if(void 0!=i)for(u=0,c=i.length;c>u;u++)d=s._getItem(i[u],p),f&&!f(d)||m.push(d)
else for(l in this._data)this._data.hasOwnProperty(l)&&(d=s._getItem(l,p),f&&!f(d)||m.push(d))
if(o&&o.order&&void 0==e&&this._sort(m,o.order),o&&o.fields){var g=o.fields
if(void 0!=e)d=this._filterFields(d,g)
else for(u=0,c=m.length;c>u;u++)m[u]=this._filterFields(m[u],g)}if("Object"==a){var v={}
for(u=0;u<m.length;u++)v[m[u].id]=m[u]
return v}return void 0!=e?d:m},o.prototype.getIds=function(t){var e,i,o,n,s,r=this._data,a=t&&t.filter,h=t&&t.order,d=t&&t.type||this._options.type,l=[]
if(a)if(h){s=[]
for(o in r)r.hasOwnProperty(o)&&(n=this._getItem(o,d),a(n)&&s.push(n))
for(this._sort(s,h),e=0,i=s.length;i>e;e++)l[e]=s[e][this._fieldId]}else for(o in r)r.hasOwnProperty(o)&&(n=this._getItem(o,d),a(n)&&l.push(n[this._fieldId]))
else if(h){s=[]
for(o in r)r.hasOwnProperty(o)&&s.push(r[o])
for(this._sort(s,h),e=0,i=s.length;i>e;e++)l[e]=s[e][this._fieldId]}else for(o in r)r.hasOwnProperty(o)&&(n=r[o],l.push(n[this._fieldId]))
return l},o.prototype.getDataSet=function(){return this},o.prototype.forEach=function(t,e){var i,o,n=e&&e.filter,s=e&&e.type||this._options.type,r=this._data
if(e&&e.order)for(var a=this.get(e),h=0,d=a.length;d>h;h++)i=a[h],o=i[this._fieldId],t(i,o)
else for(o in r)r.hasOwnProperty(o)&&(i=this._getItem(o,s),n&&!n(i)||t(i,o))},o.prototype.map=function(t,e){var i,o=e&&e.filter,n=e&&e.type||this._options.type,s=[],r=this._data
for(var a in r)r.hasOwnProperty(a)&&(i=this._getItem(a,n),o&&!o(i)||s.push(t(i,a)))
return e&&e.order&&this._sort(s,e.order),s},o.prototype._filterFields=function(t,e){if(!t)return t
var i={}
if(Array.isArray(e))for(var o in t)t.hasOwnProperty(o)&&-1!=e.indexOf(o)&&(i[o]=t[o])
else for(var o in t)t.hasOwnProperty(o)&&e.hasOwnProperty(o)&&(i[e[o]]=t[o])
return i},o.prototype._sort=function(t,e){if(n.isString(e)){var i=e
t.sort(function(t,e){var o=t[i],n=e[i]
return o>n?1:n>o?-1:0})}else{if("function"!=typeof e)throw new TypeError("Order must be a function or a string")
t.sort(e)}},o.prototype.remove=function(t,e){var i,o,n,s=[]
if(Array.isArray(t))for(i=0,o=t.length;o>i;i++)n=this._remove(t[i]),null!=n&&s.push(n)
else n=this._remove(t),null!=n&&s.push(n)
return s.length&&this._trigger("remove",{items:s},e),s},o.prototype._remove=function(t){if(n.isNumber(t)||n.isString(t)){if(this._data[t])return delete this._data[t],this.length--,t}else if(t instanceof Object){var e=t[this._fieldId]
if(e&&this._data[e])return delete this._data[e],this.length--,e}return null},o.prototype.clear=function(t){var e=Object.keys(this._data)
return this._data={},this.length=0,this._trigger("remove",{items:e},t),e},o.prototype.max=function(t){var e=this._data,i=null,o=null
for(var n in e)if(e.hasOwnProperty(n)){var s=e[n],r=s[t]
null!=r&&(!i||r>o)&&(i=s,o=r)}return i},o.prototype.min=function(t){var e=this._data,i=null,o=null
for(var n in e)if(e.hasOwnProperty(n)){var s=e[n],r=s[t]
null!=r&&(!i||o>r)&&(i=s,o=r)}return i},o.prototype.distinct=function(t){var e,i=this._data,o=[],s=this._options.type&&this._options.type[t]||null,r=0
for(var a in i)if(i.hasOwnProperty(a)){var h=i[a],d=h[t],l=!1
for(e=0;r>e;e++)if(o[e]==d){l=!0
break}l||void 0===d||(o[r]=d,r++)}if(s)for(e=0;e<o.length;e++)o[e]=n.convert(o[e],s)
return o},o.prototype._addItem=function(t){var e=t[this._fieldId]
if(void 0!=e){if(this._data[e])throw new Error("Cannot add item: item with id "+e+" already exists")}else e=n.randomUUID(),t[this._fieldId]=e
var i={}
for(var o in t)if(t.hasOwnProperty(o)){var s=this._type[o]
i[o]=n.convert(t[o],s)}return this._data[e]=i,this.length++,e},o.prototype._getItem=function(t,e){var i,o,s=this._data[t]
if(!s)return null
var r={}
if(e)for(i in s)s.hasOwnProperty(i)&&(o=s[i],r[i]=n.convert(o,e[i]))
else for(i in s)s.hasOwnProperty(i)&&(o=s[i],r[i]=o)
return r},o.prototype._updateItem=function(t){var e=t[this._fieldId]
if(void 0==e)throw new Error("Cannot update item: item has no id (item: "+JSON.stringify(t)+")")
var i=this._data[e]
if(!i)throw new Error("Cannot update item: no item with id "+e+" found")
for(var o in t)if(t.hasOwnProperty(o)){var s=this._type[o]
i[o]=n.convert(t[o],s)}return e},t.exports=o},function(t,e){"use strict"
function i(t){this.delay=null,this.max=1/0,this._queue=[],this._timeout=null,this._extended=null,this.setOptions(t)}i.prototype.setOptions=function(t){t&&"undefined"!=typeof t.delay&&(this.delay=t.delay),t&&"undefined"!=typeof t.max&&(this.max=t.max),this._flushIfNeeded()},i.extend=function(t,e){var o=new i(e)
if(void 0!==t.flush)throw new Error("Target object already has a property flush")
t.flush=function(){o.flush()}
var n=[{name:"flush",original:void 0}]
if(e&&e.replace)for(var s=0;s<e.replace.length;s++){var r=e.replace[s]
n.push({name:r,original:t[r]}),o.replace(t,r)}return o._extended={object:t,methods:n},o},i.prototype.destroy=function(){if(this.flush(),this._extended){for(var t=this._extended.object,e=this._extended.methods,i=0;i<e.length;i++){var o=e[i]
o.original?t[o.name]=o.original:delete t[o.name]}this._extended=null}},i.prototype.replace=function(t,e){var i=this,o=t[e]
if(!o)throw new Error("Method "+e+" undefined")
t[e]=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
i.queue({args:t,fn:o,context:this})}},i.prototype.queue=function(t){"function"==typeof t?this._queue.push({fn:t}):this._queue.push(t),this._flushIfNeeded()},i.prototype._flushIfNeeded=function(){if(this._queue.length>this.max&&this.flush(),clearTimeout(this._timeout),this.queue.length>0&&"number"==typeof this.delay){var t=this
this._timeout=setTimeout(function(){t.flush()},this.delay)}},i.prototype.flush=function(){for(;this._queue.length>0;){var t=this._queue.shift()
t.fn.apply(t.context||t.fn,t.args||[])}},t.exports=i},function(t,e,i){"use strict"
function o(t,e){this._data=null,this._ids={},this.length=0,this._options=e||{},this._fieldId="id",this._subscribers={}
var i=this
this.listener=function(){i._onEvent.apply(i,arguments)},this.setData(t)}var n=i(1),s=i(8)
o.prototype.setData=function(t){var e,i,o
if(this._data){this._data.off&&this._data.off("*",this.listener),e=[]
for(var n in this._ids)this._ids.hasOwnProperty(n)&&e.push(n)
this._ids={},this.length=0,this._trigger("remove",{items:e})}if(this._data=t,this._data){for(this._fieldId=this._options.fieldId||this._data&&this._data.options&&this._data.options.fieldId||"id",e=this._data.getIds({filter:this._options&&this._options.filter}),i=0,o=e.length;o>i;i++)n=e[i],this._ids[n]=!0
this.length=e.length,this._trigger("add",{items:e}),this._data.on&&this._data.on("*",this.listener)}},o.prototype.refresh=function(){for(var t,e=this._data.getIds({filter:this._options&&this._options.filter}),i={},o=[],n=[],s=0;s<e.length;s++)t=e[s],i[t]=!0,this._ids[t]||(o.push(t),this._ids[t]=!0,this.length++)
for(t in this._ids)this._ids.hasOwnProperty(t)&&(i[t]||(n.push(t),delete this._ids[t],this.length--))
o.length&&this._trigger("add",{items:o}),n.length&&this._trigger("remove",{items:n})},o.prototype.get=function(t){var e,i,o,s=this,r=n.getType(arguments[0])
"String"==r||"Number"==r||"Array"==r?(e=arguments[0],i=arguments[1],o=arguments[2]):(i=arguments[0],o=arguments[1])
var a=n.extend({},this._options,i)
this._options.filter&&i&&i.filter&&(a.filter=function(t){return s._options.filter(t)&&i.filter(t)})
var h=[]
return void 0!=e&&h.push(e),h.push(a),h.push(o),this._data&&this._data.get.apply(this._data,h)},o.prototype.getIds=function(t){var e
if(this._data){var i,o=this._options.filter
i=t&&t.filter?o?function(e){return o(e)&&t.filter(e)}:t.filter:o,e=this._data.getIds({filter:i,order:t&&t.order})}else e=[]
return e},o.prototype.getDataSet=function(){for(var t=this;t instanceof o;)t=t._data
return t||null},o.prototype._onEvent=function(t,e,i){var o,n,s,r,a=e&&e.items,h=this._data,d=[],l=[],u=[],c=[]
if(a&&h){switch(t){case"add":for(o=0,n=a.length;n>o;o++)s=a[o],r=this.get(s),r&&(this._ids[s]=!0,l.push(s))
break
case"update":for(o=0,n=a.length;n>o;o++)s=a[o],r=this.get(s),r?this._ids[s]?(u.push(s),d.push(e.data[o])):(this._ids[s]=!0,l.push(s)):this._ids[s]&&(delete this._ids[s],c.push(s))
break
case"remove":for(o=0,n=a.length;n>o;o++)s=a[o],this._ids[s]&&(delete this._ids[s],c.push(s))}this.length+=l.length-c.length,l.length&&this._trigger("add",{items:l},i),u.length&&this._trigger("update",{items:u,data:d},i),c.length&&this._trigger("remove",{items:c},i)}},o.prototype.on=s.prototype.on,o.prototype.off=s.prototype.off,o.prototype._trigger=s.prototype._trigger,o.prototype.subscribe=o.prototype.on,o.prototype.unsubscribe=o.prototype.off,t.exports=o},function(t,e,i){"use strict"
function o(t,e,i){if(!(this instanceof o))throw new SyntaxError("Constructor must be called with the new operator")
this.containerElement=t,this.width="400px",this.height="400px",this.margin=10,this.defaultXCenter="55%",this.defaultYCenter="50%",this.xLabel="x",this.yLabel="y",this.zLabel="z"
var n=function(t){return t}
this.xValueLabel=n,this.yValueLabel=n,this.zValueLabel=n,this.filterLabel="time",this.legendLabel="value",this.style=o.STYLE.DOT,this.showPerspective=!0,this.showGrid=!0,this.keepAspectRatio=!0,this.showShadow=!1,this.showGrayBottom=!1,this.showTooltip=!1,this.verticalRatio=.5,this.animationInterval=1e3,this.animationPreload=!1,this.camera=new c,this.camera.setArmRotation(1,.5),this.camera.setArmLength(1.7),this.eye=new l(0,0,-1),this.dataTable=null,this.dataPoints=null,this.colX=void 0,this.colY=void 0,this.colZ=void 0,this.colValue=void 0,this.colFilter=void 0,this.xMin=0,this.xStep=void 0,this.xMax=1,this.yMin=0,this.yStep=void 0,this.yMax=1,this.zMin=0,this.zStep=void 0,this.zMax=1,this.valueMin=0,this.valueMax=1,this.xBarWidth=1,this.yBarWidth=1,this.axisColor="#4D4D4D",this.gridColor="#D3D3D3",this.dataColor={fill:"#7DC1FF",stroke:"#3267D2",strokeWidth:1},this.create(),this.setOptions(i),e&&this.setData(e)}function n(t){return"clientX"in t?t.clientX:t.targetTouches[0]&&t.targetTouches[0].clientX||0}function s(t){return"clientY"in t?t.clientY:t.targetTouches[0]&&t.targetTouches[0].clientY||0}var r=i(12),a=i(8),h=i(10),d=i(1),l=i(13),u=i(14),c=i(15),p=i(16),f=i(17),m=i(18)
r(o.prototype),o.prototype._setScale=function(){this.scale=new l(1/(this.xMax-this.xMin),1/(this.yMax-this.yMin),1/(this.zMax-this.zMin)),this.keepAspectRatio&&(this.scale.x<this.scale.y?this.scale.y=this.scale.x:this.scale.x=this.scale.y),this.scale.z*=this.verticalRatio,this.scale.value=1/(this.valueMax-this.valueMin)
var t=(this.xMax+this.xMin)/2*this.scale.x,e=(this.yMax+this.yMin)/2*this.scale.y,i=(this.zMax+this.zMin)/2*this.scale.z
this.camera.setArmLocation(t,e,i)},o.prototype._convert3Dto2D=function(t){var e=this._convertPointToTranslation(t)
return this._convertTranslationToScreen(e)},o.prototype._convertPointToTranslation=function(t){var e=t.x*this.scale.x,i=t.y*this.scale.y,o=t.z*this.scale.z,n=this.camera.getCameraLocation().x,s=this.camera.getCameraLocation().y,r=this.camera.getCameraLocation().z,a=Math.sin(this.camera.getCameraRotation().x),h=Math.cos(this.camera.getCameraRotation().x),d=Math.sin(this.camera.getCameraRotation().y),u=Math.cos(this.camera.getCameraRotation().y),c=Math.sin(this.camera.getCameraRotation().z),p=Math.cos(this.camera.getCameraRotation().z),f=u*(c*(i-s)+p*(e-n))-d*(o-r),m=a*(u*(o-r)+d*(c*(i-s)+p*(e-n)))+h*(p*(i-s)-c*(e-n)),g=h*(u*(o-r)+d*(c*(i-s)+p*(e-n)))-a*(p*(i-s)-c*(e-n))
return new l(f,m,g)},o.prototype._convertTranslationToScreen=function(t){var e,i,o=this.eye.x,n=this.eye.y,s=this.eye.z,r=t.x,a=t.y,h=t.z
return this.showPerspective?(e=(r-o)*(s/h),i=(a-n)*(s/h)):(e=r*-(s/this.camera.getArmLength()),i=a*-(s/this.camera.getArmLength())),new u(this.xcenter+e*this.frame.canvas.clientWidth,this.ycenter-i*this.frame.canvas.clientWidth)},o.prototype._setBackgroundColor=function(t){var e="white",i="gray",o=1
if("string"==typeof t)e=t,i="none",o=0
else if("object"==typeof t)void 0!==t.fill&&(e=t.fill),void 0!==t.stroke&&(i=t.stroke),void 0!==t.strokeWidth&&(o=t.strokeWidth)
else if(void 0!==t)throw"Unsupported type of backgroundColor"
this.frame.style.backgroundColor=e,this.frame.style.borderColor=i,this.frame.style.borderWidth=o+"px",this.frame.style.borderStyle="solid"},o.STYLE={BAR:0,BARCOLOR:1,BARSIZE:2,DOT:3,DOTLINE:4,DOTCOLOR:5,DOTSIZE:6,GRID:7,LINE:8,SURFACE:9},o.prototype._getStyleNumber=function(t){switch(t){case"dot":return o.STYLE.DOT
case"dot-line":return o.STYLE.DOTLINE
case"dot-color":return o.STYLE.DOTCOLOR
case"dot-size":return o.STYLE.DOTSIZE
case"line":return o.STYLE.LINE
case"grid":return o.STYLE.GRID
case"surface":return o.STYLE.SURFACE
case"bar":return o.STYLE.BAR
case"bar-color":return o.STYLE.BARCOLOR
case"bar-size":return o.STYLE.BARSIZE}return-1},o.prototype._determineColumnIndexes=function(t,e){if(this.style===o.STYLE.DOT||this.style===o.STYLE.DOTLINE||this.style===o.STYLE.LINE||this.style===o.STYLE.GRID||this.style===o.STYLE.SURFACE||this.style===o.STYLE.BAR)this.colX=0,this.colY=1,this.colZ=2,this.colValue=void 0,t.getNumberOfColumns()>3&&(this.colFilter=3)
else{if(this.style!==o.STYLE.DOTCOLOR&&this.style!==o.STYLE.DOTSIZE&&this.style!==o.STYLE.BARCOLOR&&this.style!==o.STYLE.BARSIZE)throw'Unknown style "'+this.style+'"'
this.colX=0,this.colY=1,this.colZ=2,this.colValue=3,t.getNumberOfColumns()>4&&(this.colFilter=4)}},o.prototype.getNumberOfRows=function(t){return t.length},o.prototype.getNumberOfColumns=function(t){var e=0
for(var i in t[0])t[0].hasOwnProperty(i)&&e++
return e},o.prototype.getDistinctValues=function(t,e){for(var i=[],o=0;o<t.length;o++)-1==i.indexOf(t[o][e])&&i.push(t[o][e])
return i},o.prototype.getColumnRange=function(t,e){for(var i={min:t[0][e],max:t[0][e]},o=0;o<t.length;o++)i.min>t[o][e]&&(i.min=t[o][e]),i.max<t[o][e]&&(i.max=t[o][e])
return i},o.prototype._dataInitialize=function(t,e){var i=this
if(this.dataSet&&this.dataSet.off("*",this._onChange),void 0!==t){Array.isArray(t)&&(t=new a(t))
var n
if(!(t instanceof a||t instanceof h))throw new Error("Array, DataSet, or DataView expected")
if(n=t.get(),0!=n.length){this.dataSet=t,this.dataTable=n,this._onChange=function(){i.setData(i.dataSet)},this.dataSet.on("*",this._onChange),this.colX="x",this.colY="y",this.colZ="z",this.colValue="style",this.colFilter="filter",n[0].hasOwnProperty("filter")&&void 0===this.dataFilter&&(this.dataFilter=new p(t,this.colFilter,this),this.dataFilter.setOnLoadCallback(function(){i.redraw()}))
var s=this.style==o.STYLE.BAR||this.style==o.STYLE.BARCOLOR||this.style==o.STYLE.BARSIZE
if(s){if(void 0!==this.defaultXBarWidth)this.xBarWidth=this.defaultXBarWidth
else{var r=this.getDistinctValues(n,this.colX)
this.xBarWidth=r[1]-r[0]||1}if(void 0!==this.defaultYBarWidth)this.yBarWidth=this.defaultYBarWidth
else{var d=this.getDistinctValues(n,this.colY)
this.yBarWidth=d[1]-d[0]||1}}var l=this.getColumnRange(n,this.colX)
s&&(l.min-=this.xBarWidth/2,l.max+=this.xBarWidth/2),this.xMin=void 0!==this.defaultXMin?this.defaultXMin:l.min,this.xMax=void 0!==this.defaultXMax?this.defaultXMax:l.max,this.xMax<=this.xMin&&(this.xMax=this.xMin+1),this.xStep=void 0!==this.defaultXStep?this.defaultXStep:(this.xMax-this.xMin)/5
var u=this.getColumnRange(n,this.colY)
s&&(u.min-=this.yBarWidth/2,u.max+=this.yBarWidth/2),this.yMin=void 0!==this.defaultYMin?this.defaultYMin:u.min,this.yMax=void 0!==this.defaultYMax?this.defaultYMax:u.max,this.yMax<=this.yMin&&(this.yMax=this.yMin+1),this.yStep=void 0!==this.defaultYStep?this.defaultYStep:(this.yMax-this.yMin)/5
var c=this.getColumnRange(n,this.colZ)
if(this.zMin=void 0!==this.defaultZMin?this.defaultZMin:c.min,this.zMax=void 0!==this.defaultZMax?this.defaultZMax:c.max,this.zMax<=this.zMin&&(this.zMax=this.zMin+1),this.zStep=void 0!==this.defaultZStep?this.defaultZStep:(this.zMax-this.zMin)/5,void 0!==this.colValue){var f=this.getColumnRange(n,this.colValue)
this.valueMin=void 0!==this.defaultValueMin?this.defaultValueMin:f.min,this.valueMax=void 0!==this.defaultValueMax?this.defaultValueMax:f.max,this.valueMax<=this.valueMin&&(this.valueMax=this.valueMin+1)}this._setScale()}}},o.prototype._getDataPoints=function(t){var e,i,n,s,r,a,h=[]
if(this.style===o.STYLE.GRID||this.style===o.STYLE.SURFACE){var d=[],u=[]
for(n=0;n<this.getNumberOfRows(t);n++)e=t[n][this.colX]||0,i=t[n][this.colY]||0,-1===d.indexOf(e)&&d.push(e),-1===u.indexOf(i)&&u.push(i)
var c=function(t,e){return t-e}
d.sort(c),u.sort(c)
var p=[]
for(n=0;n<t.length;n++){e=t[n][this.colX]||0,i=t[n][this.colY]||0,s=t[n][this.colZ]||0
var f=d.indexOf(e),m=u.indexOf(i)
void 0===p[f]&&(p[f]=[])
var g=new l
g.x=e,g.y=i,g.z=s,r={},r.point=g,r.trans=void 0,r.screen=void 0,r.bottom=new l(e,i,this.zMin),p[f][m]=r,h.push(r)}for(e=0;e<p.length;e++)for(i=0;i<p[e].length;i++)p[e][i]&&(p[e][i].pointRight=e<p.length-1?p[e+1][i]:void 0,p[e][i].pointTop=i<p[e].length-1?p[e][i+1]:void 0,p[e][i].pointCross=e<p.length-1&&i<p[e].length-1?p[e+1][i+1]:void 0)}else for(n=0;n<t.length;n++)a=new l,a.x=t[n][this.colX]||0,a.y=t[n][this.colY]||0,a.z=t[n][this.colZ]||0,void 0!==this.colValue&&(a.value=t[n][this.colValue]||0),r={},r.point=a,r.bottom=new l(a.x,a.y,this.zMin),r.trans=void 0,r.screen=void 0,h.push(r)
return h},o.prototype.create=function(){for(;this.containerElement.hasChildNodes();)this.containerElement.removeChild(this.containerElement.firstChild)
this.frame=document.createElement("div"),this.frame.style.position="relative",this.frame.style.overflow="hidden",this.frame.canvas=document.createElement("canvas"),this.frame.canvas.style.position="relative",this.frame.appendChild(this.frame.canvas)
var t=document.createElement("DIV")
t.style.color="red",t.style.fontWeight="bold",t.style.padding="10px",t.innerHTML="Error: your browser does not support HTML canvas",this.frame.canvas.appendChild(t),this.frame.filter=document.createElement("div"),this.frame.filter.style.position="absolute",this.frame.filter.style.bottom="0px",this.frame.filter.style.left="0px",this.frame.filter.style.width="100%",this.frame.appendChild(this.frame.filter)
var e=this,i=function(t){e._onMouseDown(t)},o=function(t){e._onTouchStart(t)},n=function(t){e._onWheel(t)},s=function(t){e._onTooltip(t)}
d.addEventListener(this.frame.canvas,"keydown",onkeydown),d.addEventListener(this.frame.canvas,"mousedown",i),d.addEventListener(this.frame.canvas,"touchstart",o),d.addEventListener(this.frame.canvas,"mousewheel",n),d.addEventListener(this.frame.canvas,"mousemove",s),this.containerElement.appendChild(this.frame)},o.prototype.setSize=function(t,e){this.frame.style.width=t,this.frame.style.height=e,this._resizeCanvas()},o.prototype._resizeCanvas=function(){this.frame.canvas.style.width="100%",this.frame.canvas.style.height="100%",this.frame.canvas.width=this.frame.canvas.clientWidth,this.frame.canvas.height=this.frame.canvas.clientHeight,this.frame.filter.style.width=this.frame.canvas.clientWidth-20+"px"},o.prototype.animationStart=function(){if(!this.frame.filter||!this.frame.filter.slider)throw"No animation available"
this.frame.filter.slider.play()},o.prototype.animationStop=function(){this.frame.filter&&this.frame.filter.slider&&this.frame.filter.slider.stop()},o.prototype._resizeCenter=function(){"%"===this.defaultXCenter.charAt(this.defaultXCenter.length-1)?this.xcenter=parseFloat(this.defaultXCenter)/100*this.frame.canvas.clientWidth:this.xcenter=parseFloat(this.defaultXCenter),"%"===this.defaultYCenter.charAt(this.defaultYCenter.length-1)?this.ycenter=parseFloat(this.defaultYCenter)/100*(this.frame.canvas.clientHeight-this.frame.filter.clientHeight):this.ycenter=parseFloat(this.defaultYCenter)},o.prototype.setCameraPosition=function(t){void 0!==t&&(void 0!==t.horizontal&&void 0!==t.vertical&&this.camera.setArmRotation(t.horizontal,t.vertical),void 0!==t.distance&&this.camera.setArmLength(t.distance),this.redraw())},o.prototype.getCameraPosition=function(){var t=this.camera.getArmRotation()
return t.distance=this.camera.getArmLength(),t},o.prototype._readData=function(t){this._dataInitialize(t,this.style),this.dataFilter?this.dataPoints=this.dataFilter._getDataPoints():this.dataPoints=this._getDataPoints(this.dataTable),this._redrawFilter()},o.prototype.setData=function(t){this._readData(t),this.redraw(),this.animationAutoStart&&this.dataFilter&&this.animationStart()},o.prototype.setOptions=function(t){var e=void 0
if(this.animationStop(),void 0!==t){if(void 0!==t.width&&(this.width=t.width),void 0!==t.height&&(this.height=t.height),void 0!==t.xCenter&&(this.defaultXCenter=t.xCenter),void 0!==t.yCenter&&(this.defaultYCenter=t.yCenter),void 0!==t.filterLabel&&(this.filterLabel=t.filterLabel),void 0!==t.legendLabel&&(this.legendLabel=t.legendLabel),void 0!==t.xLabel&&(this.xLabel=t.xLabel),void 0!==t.yLabel&&(this.yLabel=t.yLabel),void 0!==t.zLabel&&(this.zLabel=t.zLabel),void 0!==t.xValueLabel&&(this.xValueLabel=t.xValueLabel),void 0!==t.yValueLabel&&(this.yValueLabel=t.yValueLabel),void 0!==t.zValueLabel&&(this.zValueLabel=t.zValueLabel),void 0!==t.style){var i=this._getStyleNumber(t.style);-1!==i&&(this.style=i)}void 0!==t.showGrid&&(this.showGrid=t.showGrid),void 0!==t.showPerspective&&(this.showPerspective=t.showPerspective),void 0!==t.showShadow&&(this.showShadow=t.showShadow),void 0!==t.tooltip&&(this.showTooltip=t.tooltip),void 0!==t.showAnimationControls&&(this.showAnimationControls=t.showAnimationControls),void 0!==t.keepAspectRatio&&(this.keepAspectRatio=t.keepAspectRatio),void 0!==t.verticalRatio&&(this.verticalRatio=t.verticalRatio),void 0!==t.animationInterval&&(this.animationInterval=t.animationInterval),void 0!==t.animationPreload&&(this.animationPreload=t.animationPreload),void 0!==t.animationAutoStart&&(this.animationAutoStart=t.animationAutoStart),void 0!==t.xBarWidth&&(this.defaultXBarWidth=t.xBarWidth),void 0!==t.yBarWidth&&(this.defaultYBarWidth=t.yBarWidth),void 0!==t.xMin&&(this.defaultXMin=t.xMin),void 0!==t.xStep&&(this.defaultXStep=t.xStep),void 0!==t.xMax&&(this.defaultXMax=t.xMax),void 0!==t.yMin&&(this.defaultYMin=t.yMin),void 0!==t.yStep&&(this.defaultYStep=t.yStep),void 0!==t.yMax&&(this.defaultYMax=t.yMax),void 0!==t.zMin&&(this.defaultZMin=t.zMin),void 0!==t.zStep&&(this.defaultZStep=t.zStep),void 0!==t.zMax&&(this.defaultZMax=t.zMax),void 0!==t.valueMin&&(this.defaultValueMin=t.valueMin),void 0!==t.valueMax&&(this.defaultValueMax=t.valueMax),void 0!==t.backgroundColor&&this._setBackgroundColor(t.backgroundColor),void 0!==t.cameraPosition&&(e=t.cameraPosition),void 0!==e&&(this.camera.setArmRotation(e.horizontal,e.vertical),this.camera.setArmLength(e.distance)),void 0!==t.axisColor&&(this.axisColor=t.axisColor),void 0!==t.gridColor&&(this.gridColor=t.gridColor),t.dataColor&&("string"==typeof t.dataColor?(this.dataColor.fill=t.dataColor,this.dataColor.stroke=t.dataColor):(t.dataColor.fill&&(this.dataColor.fill=t.dataColor.fill),t.dataColor.stroke&&(this.dataColor.stroke=t.dataColor.stroke),void 0!==t.dataColor.strokeWidth&&(this.dataColor.strokeWidth=t.dataColor.strokeWidth)))}this.setSize(this.width,this.height),this.dataTable&&this.setData(this.dataTable),this.animationAutoStart&&this.dataFilter&&this.animationStart()},o.prototype.redraw=function(){if(void 0===this.dataPoints)throw"Error: graph data not initialized"
this._resizeCanvas(),this._resizeCenter(),this._redrawSlider(),this._redrawClear(),this._redrawAxis(),this.style===o.STYLE.GRID||this.style===o.STYLE.SURFACE?this._redrawDataGrid():this.style===o.STYLE.LINE?this._redrawDataLine():this.style===o.STYLE.BAR||this.style===o.STYLE.BARCOLOR||this.style===o.STYLE.BARSIZE?this._redrawDataBar():this._redrawDataDot(),this._redrawInfo(),this._redrawLegend()},o.prototype._redrawClear=function(){var t=this.frame.canvas,e=t.getContext("2d")
e.clearRect(0,0,t.width,t.height)},o.prototype._redrawLegend=function(){var t
if(this.style===o.STYLE.DOTCOLOR||this.style===o.STYLE.DOTSIZE){var e,i,n=.02*this.frame.clientWidth
this.style===o.STYLE.DOTSIZE?(e=n/2,i=n/2+2*n):(e=20,i=20)
var s=Math.max(.25*this.frame.clientHeight,100),r=this.margin,a=this.frame.clientWidth-this.margin,h=a-i,d=r+s}var l=this.frame.canvas,u=l.getContext("2d")
if(u.lineWidth=1,u.font="14px arial",this.style===o.STYLE.DOTCOLOR){var c=0,p=s
for(t=c;p>t;t++){var f=(t-c)/(p-c),g=240*f,v=this._hsv2rgb(g,1,1)
u.strokeStyle=v,u.beginPath(),u.moveTo(h,r+t),u.lineTo(a,r+t),u.stroke()}u.strokeStyle=this.axisColor,u.strokeRect(h,r,i,s)}if(this.style===o.STYLE.DOTSIZE&&(u.strokeStyle=this.axisColor,u.fillStyle=this.dataColor.fill,u.beginPath(),u.moveTo(h,r),u.lineTo(a,r),u.lineTo(a-i+e,d),u.lineTo(h,d),u.closePath(),u.fill(),u.stroke()),this.style===o.STYLE.DOTCOLOR||this.style===o.STYLE.DOTSIZE){var y=5,b=new m(this.valueMin,this.valueMax,(this.valueMax-this.valueMin)/5,!0)
for(b.start(),b.getCurrent()<this.valueMin&&b.next();!b.end();)t=d-(b.getCurrent()-this.valueMin)/(this.valueMax-this.valueMin)*s,u.beginPath(),u.moveTo(h-y,t),u.lineTo(h,t),u.stroke(),u.textAlign="right",u.textBaseline="middle",u.fillStyle=this.axisColor,u.fillText(b.getCurrent(),h-2*y,t),b.next()
u.textAlign="right",u.textBaseline="top"
var _=this.legendLabel
u.fillText(_,a,d+this.margin)}},o.prototype._redrawFilter=function(){if(this.frame.filter.innerHTML="",this.dataFilter){var t={visible:this.showAnimationControls},e=new f(this.frame.filter,t)
this.frame.filter.slider=e,this.frame.filter.style.padding="10px",e.setValues(this.dataFilter.values),e.setPlayInterval(this.animationInterval)
var i=this,o=function(){var t=e.getIndex()
i.dataFilter.selectValue(t),i.dataPoints=i.dataFilter._getDataPoints(),i.redraw()}
e.setOnChangeCallback(o)}else this.frame.filter.slider=void 0},o.prototype._redrawSlider=function(){void 0!==this.frame.filter.slider&&this.frame.filter.slider.redraw()},o.prototype._redrawInfo=function(){if(this.dataFilter){var t=this.frame.canvas,e=t.getContext("2d")
e.font="14px arial",e.lineStyle="gray",e.fillStyle="gray",e.textAlign="left",e.textBaseline="top"
var i=this.margin,o=this.margin
e.fillText(this.dataFilter.getLabel()+": "+this.dataFilter.getSelectedValue(),i,o)}},o.prototype._redrawAxis=function(){var t,e,i,o,n,s,r,a,h,d,u,c,p,f=this.frame.canvas,g=f.getContext("2d")
g.font=24/this.camera.getArmLength()+"px arial"
var v=.025/this.scale.x,y=.025/this.scale.y,b=5/this.camera.getArmLength(),_=this.camera.getArmRotation().horizontal
for(g.lineWidth=1,o=void 0===this.defaultXStep,i=new m(this.xMin,this.xMax,this.xStep,o),i.start(),i.getCurrent()<this.xMin&&i.next();!i.end();){var w=i.getCurrent()
this.showGrid?(t=this._convert3Dto2D(new l(w,this.yMin,this.zMin)),e=this._convert3Dto2D(new l(w,this.yMax,this.zMin)),g.strokeStyle=this.gridColor,g.beginPath(),g.moveTo(t.x,t.y),g.lineTo(e.x,e.y),g.stroke()):(t=this._convert3Dto2D(new l(w,this.yMin,this.zMin)),e=this._convert3Dto2D(new l(w,this.yMin+v,this.zMin)),g.strokeStyle=this.axisColor,g.beginPath(),g.moveTo(t.x,t.y),g.lineTo(e.x,e.y),g.stroke(),t=this._convert3Dto2D(new l(w,this.yMax,this.zMin)),e=this._convert3Dto2D(new l(w,this.yMax-v,this.zMin)),g.strokeStyle=this.axisColor,g.beginPath(),g.moveTo(t.x,t.y),g.lineTo(e.x,e.y),g.stroke()),r=Math.cos(_)>0?this.yMin:this.yMax,n=this._convert3Dto2D(new l(w,r,this.zMin)),Math.cos(2*_)>0?(g.textAlign="center",g.textBaseline="top",n.y+=b):Math.sin(2*_)<0?(g.textAlign="right",g.textBaseline="middle"):(g.textAlign="left",g.textBaseline="middle"),g.fillStyle=this.axisColor,g.fillText("  "+this.xValueLabel(i.getCurrent())+"  ",n.x,n.y),i.next()}for(g.lineWidth=1,o=void 0===this.defaultYStep,i=new m(this.yMin,this.yMax,this.yStep,o),i.start(),i.getCurrent()<this.yMin&&i.next();!i.end();)this.showGrid?(t=this._convert3Dto2D(new l(this.xMin,i.getCurrent(),this.zMin)),e=this._convert3Dto2D(new l(this.xMax,i.getCurrent(),this.zMin)),g.strokeStyle=this.gridColor,g.beginPath(),g.moveTo(t.x,t.y),g.lineTo(e.x,e.y),g.stroke()):(t=this._convert3Dto2D(new l(this.xMin,i.getCurrent(),this.zMin)),e=this._convert3Dto2D(new l(this.xMin+y,i.getCurrent(),this.zMin)),g.strokeStyle=this.axisColor,g.beginPath(),g.moveTo(t.x,t.y),g.lineTo(e.x,e.y),g.stroke(),t=this._convert3Dto2D(new l(this.xMax,i.getCurrent(),this.zMin)),e=this._convert3Dto2D(new l(this.xMax-y,i.getCurrent(),this.zMin)),g.strokeStyle=this.axisColor,g.beginPath(),g.moveTo(t.x,t.y),g.lineTo(e.x,e.y),g.stroke()),s=Math.sin(_)>0?this.xMin:this.xMax,n=this._convert3Dto2D(new l(s,i.getCurrent(),this.zMin)),Math.cos(2*_)<0?(g.textAlign="center",g.textBaseline="top",n.y+=b):Math.sin(2*_)>0?(g.textAlign="right",g.textBaseline="middle"):(g.textAlign="left",g.textBaseline="middle"),g.fillStyle=this.axisColor,g.fillText("  "+this.yValueLabel(i.getCurrent())+"  ",n.x,n.y),i.next()
for(g.lineWidth=1,o=void 0===this.defaultZStep,i=new m(this.zMin,this.zMax,this.zStep,o),i.start(),i.getCurrent()<this.zMin&&i.next(),s=Math.cos(_)>0?this.xMin:this.xMax,r=Math.sin(_)<0?this.yMin:this.yMax;!i.end();)t=this._convert3Dto2D(new l(s,r,i.getCurrent())),g.strokeStyle=this.axisColor,g.beginPath(),g.moveTo(t.x,t.y),g.lineTo(t.x-b,t.y),g.stroke(),g.textAlign="right",g.textBaseline="middle",g.fillStyle=this.axisColor,g.fillText(this.zValueLabel(i.getCurrent())+" ",t.x-5,t.y),i.next()
g.lineWidth=1,t=this._convert3Dto2D(new l(s,r,this.zMin)),e=this._convert3Dto2D(new l(s,r,this.zMax)),g.strokeStyle=this.axisColor,g.beginPath(),g.moveTo(t.x,t.y),g.lineTo(e.x,e.y),g.stroke(),g.lineWidth=1,c=this._convert3Dto2D(new l(this.xMin,this.yMin,this.zMin)),p=this._convert3Dto2D(new l(this.xMax,this.yMin,this.zMin)),g.strokeStyle=this.axisColor,g.beginPath(),g.moveTo(c.x,c.y),g.lineTo(p.x,p.y),g.stroke(),c=this._convert3Dto2D(new l(this.xMin,this.yMax,this.zMin)),p=this._convert3Dto2D(new l(this.xMax,this.yMax,this.zMin)),g.strokeStyle=this.axisColor,g.beginPath(),g.moveTo(c.x,c.y),g.lineTo(p.x,p.y),g.stroke(),g.lineWidth=1,t=this._convert3Dto2D(new l(this.xMin,this.yMin,this.zMin)),e=this._convert3Dto2D(new l(this.xMin,this.yMax,this.zMin)),g.strokeStyle=this.axisColor,g.beginPath(),g.moveTo(t.x,t.y),g.lineTo(e.x,e.y),g.stroke(),t=this._convert3Dto2D(new l(this.xMax,this.yMin,this.zMin)),e=this._convert3Dto2D(new l(this.xMax,this.yMax,this.zMin)),g.strokeStyle=this.axisColor,g.beginPath(),g.moveTo(t.x,t.y),g.lineTo(e.x,e.y),g.stroke()
var x=this.xLabel
x.length>0&&(u=.1/this.scale.y,s=(this.xMin+this.xMax)/2,r=Math.cos(_)>0?this.yMin-u:this.yMax+u,n=this._convert3Dto2D(new l(s,r,this.zMin)),Math.cos(2*_)>0?(g.textAlign="center",g.textBaseline="top"):Math.sin(2*_)<0?(g.textAlign="right",g.textBaseline="middle"):(g.textAlign="left",g.textBaseline="middle"),g.fillStyle=this.axisColor,g.fillText(x,n.x,n.y))
var k=this.yLabel
k.length>0&&(d=.1/this.scale.x,s=Math.sin(_)>0?this.xMin-d:this.xMax+d,r=(this.yMin+this.yMax)/2,n=this._convert3Dto2D(new l(s,r,this.zMin)),Math.cos(2*_)<0?(g.textAlign="center",g.textBaseline="top"):Math.sin(2*_)>0?(g.textAlign="right",g.textBaseline="middle"):(g.textAlign="left",g.textBaseline="middle"),g.fillStyle=this.axisColor,g.fillText(k,n.x,n.y))
var T=this.zLabel
T.length>0&&(h=30,s=Math.cos(_)>0?this.xMin:this.xMax,r=Math.sin(_)<0?this.yMin:this.yMax,a=(this.zMin+this.zMax)/2,n=this._convert3Dto2D(new l(s,r,a)),g.textAlign="right",g.textBaseline="middle",g.fillStyle=this.axisColor,g.fillText(T,n.x-h,n.y))},o.prototype._hsv2rgb=function(t,e,i){var o,n,s,r,a,h
switch(r=i*e,a=Math.floor(t/60),h=r*(1-Math.abs(t/60%2-1)),a){case 0:o=r,n=h,s=0
break
case 1:o=h,n=r,s=0
break
case 2:o=0,n=r,s=h
break
case 3:o=0,n=h,s=r
break
case 4:o=h,n=0,s=r
break
case 5:o=r,n=0,s=h
break
default:o=0,n=0,s=0}return"RGB("+parseInt(255*o)+","+parseInt(255*n)+","+parseInt(255*s)+")"},o.prototype._redrawDataGrid=function(){var t,e,i,n,s,r,a,h,d,u,c,p,f=this.frame.canvas,m=f.getContext("2d")
if(m.lineJoin="round",m.lineCap="round",!(void 0===this.dataPoints||this.dataPoints.length<=0)){for(s=0;s<this.dataPoints.length;s++){var g=this._convertPointToTranslation(this.dataPoints[s].point),v=this._convertTranslationToScreen(g)
this.dataPoints[s].trans=g,this.dataPoints[s].screen=v
var y=this._convertPointToTranslation(this.dataPoints[s].bottom)
this.dataPoints[s].dist=this.showPerspective?y.length():-y.z}var b=function(t,e){return e.dist-t.dist}
if(this.dataPoints.sort(b),this.style===o.STYLE.SURFACE){for(s=0;s<this.dataPoints.length;s++)if(t=this.dataPoints[s],e=this.dataPoints[s].pointRight,i=this.dataPoints[s].pointTop,n=this.dataPoints[s].pointCross,void 0!==t&&void 0!==e&&void 0!==i&&void 0!==n){if(this.showGrayBottom||this.showShadow){var _=l.subtract(n.trans,t.trans),w=l.subtract(i.trans,e.trans),x=l.crossProduct(_,w),k=x.length()
r=x.z>0}else r=!0
r?(p=(t.point.z+e.point.z+i.point.z+n.point.z)/4,d=240*(1-(p-this.zMin)*this.scale.z/this.verticalRatio),u=1,this.showShadow?(c=Math.min(1+x.x/k/2,1),a=this._hsv2rgb(d,u,c),h=a):(c=1,a=this._hsv2rgb(d,u,c),h=this.axisColor)):(a="gray",h=this.axisColor),m.lineWidth=this._getStrokeWidth(t),m.fillStyle=a,m.strokeStyle=h,m.beginPath(),m.moveTo(t.screen.x,t.screen.y),m.lineTo(e.screen.x,e.screen.y),m.lineTo(n.screen.x,n.screen.y),m.lineTo(i.screen.x,i.screen.y),m.closePath(),m.fill(),m.stroke()}}else for(s=0;s<this.dataPoints.length;s++)t=this.dataPoints[s],e=this.dataPoints[s].pointRight,i=this.dataPoints[s].pointTop,void 0!==t&&void 0!==e&&(p=(t.point.z+e.point.z)/2,d=240*(1-(p-this.zMin)*this.scale.z/this.verticalRatio),m.lineWidth=2*this._getStrokeWidth(t),m.strokeStyle=this._hsv2rgb(d,1,1),m.beginPath(),m.moveTo(t.screen.x,t.screen.y),m.lineTo(e.screen.x,e.screen.y),m.stroke()),void 0!==t&&void 0!==i&&(p=(t.point.z+i.point.z)/2,d=240*(1-(p-this.zMin)*this.scale.z/this.verticalRatio),m.lineWidth=2*this._getStrokeWidth(t),m.strokeStyle=this._hsv2rgb(d,1,1),m.beginPath(),m.moveTo(t.screen.x,t.screen.y),m.lineTo(i.screen.x,i.screen.y),m.stroke())}},o.prototype._getStrokeWidth=function(t){return void 0!==t?this.showPerspective?1/-t.trans.z*this.dataColor.strokeWidth:-(this.eye.z/this.camera.getArmLength())*this.dataColor.strokeWidth:this.dataColor.strokeWidth},o.prototype._redrawDataDot=function(){var t,e=this.frame.canvas,i=e.getContext("2d")
if(!(void 0===this.dataPoints||this.dataPoints.length<=0)){for(t=0;t<this.dataPoints.length;t++){var n=this._convertPointToTranslation(this.dataPoints[t].point),s=this._convertTranslationToScreen(n)
this.dataPoints[t].trans=n,this.dataPoints[t].screen=s
var r=this._convertPointToTranslation(this.dataPoints[t].bottom)
this.dataPoints[t].dist=this.showPerspective?r.length():-r.z}var a=function(t,e){return e.dist-t.dist}
this.dataPoints.sort(a)
var h=.02*this.frame.clientWidth
for(t=0;t<this.dataPoints.length;t++){var d=this.dataPoints[t]
if(this.style===o.STYLE.DOTLINE){var l=this._convert3Dto2D(d.bottom)
i.lineWidth=1,i.strokeStyle=this.gridColor,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(d.screen.x,d.screen.y),i.stroke()}var u
u=this.style===o.STYLE.DOTSIZE?h/2+2*h*(d.point.value-this.valueMin)/(this.valueMax-this.valueMin):h
var c
c=this.showPerspective?u/-d.trans.z:u*-(this.eye.z/this.camera.getArmLength()),0>c&&(c=0)
var p,f,m
this.style===o.STYLE.DOTCOLOR?(p=240*(1-(d.point.value-this.valueMin)*this.scale.value),f=this._hsv2rgb(p,1,1),m=this._hsv2rgb(p,1,.8)):this.style===o.STYLE.DOTSIZE?(f=this.dataColor.fill,m=this.dataColor.stroke):(p=240*(1-(d.point.z-this.zMin)*this.scale.z/this.verticalRatio),f=this._hsv2rgb(p,1,1),m=this._hsv2rgb(p,1,.8)),i.lineWidth=this._getStrokeWidth(d),i.strokeStyle=m,i.fillStyle=f,i.beginPath(),i.arc(d.screen.x,d.screen.y,c,0,2*Math.PI,!0),i.fill(),i.stroke()}}},o.prototype._redrawDataBar=function(){var t,e,i,n,s=this.frame.canvas,r=s.getContext("2d")
if(!(void 0===this.dataPoints||this.dataPoints.length<=0)){for(t=0;t<this.dataPoints.length;t++){var a=this._convertPointToTranslation(this.dataPoints[t].point),h=this._convertTranslationToScreen(a)
this.dataPoints[t].trans=a,this.dataPoints[t].screen=h
var d=this._convertPointToTranslation(this.dataPoints[t].bottom)
this.dataPoints[t].dist=this.showPerspective?d.length():-d.z}var u=function(t,e){return e.dist-t.dist}
this.dataPoints.sort(u),r.lineJoin="round",r.lineCap="round"
var c=this.xBarWidth/2,p=this.yBarWidth/2
for(t=0;t<this.dataPoints.length;t++){var f,m,g,v=this.dataPoints[t]
this.style===o.STYLE.BARCOLOR?(f=240*(1-(v.point.value-this.valueMin)*this.scale.value),m=this._hsv2rgb(f,1,1),g=this._hsv2rgb(f,1,.8)):this.style===o.STYLE.BARSIZE?(m=this.dataColor.fill,g=this.dataColor.stroke):(f=240*(1-(v.point.z-this.zMin)*this.scale.z/this.verticalRatio),m=this._hsv2rgb(f,1,1),g=this._hsv2rgb(f,1,.8)),this.style===o.STYLE.BARSIZE&&(c=this.xBarWidth/2*((v.point.value-this.valueMin)/(this.valueMax-this.valueMin)*.8+.2),p=this.yBarWidth/2*((v.point.value-this.valueMin)/(this.valueMax-this.valueMin)*.8+.2))
var y=this,b=v.point,_=[{point:new l(b.x-c,b.y-p,b.z)},{point:new l(b.x+c,b.y-p,b.z)},{point:new l(b.x+c,b.y+p,b.z)},{point:new l(b.x-c,b.y+p,b.z)}],w=[{point:new l(b.x-c,b.y-p,this.zMin)},{point:new l(b.x+c,b.y-p,this.zMin)},{point:new l(b.x+c,b.y+p,this.zMin)},{point:new l(b.x-c,b.y+p,this.zMin)}]
_.forEach(function(t){t.screen=y._convert3Dto2D(t.point)}),w.forEach(function(t){t.screen=y._convert3Dto2D(t.point)})
var x=[{corners:_,center:l.avg(w[0].point,w[2].point)},{corners:[_[0],_[1],w[1],w[0]],center:l.avg(w[1].point,w[0].point)},{corners:[_[1],_[2],w[2],w[1]],center:l.avg(w[2].point,w[1].point)},{corners:[_[2],_[3],w[3],w[2]],center:l.avg(w[3].point,w[2].point)},{corners:[_[3],_[0],w[0],w[3]],center:l.avg(w[0].point,w[3].point)}]
for(v.surfaces=x,e=0;e<x.length;e++){i=x[e]
var k=this._convertPointToTranslation(i.center)
i.dist=this.showPerspective?k.length():-k.z}for(x.sort(function(t,e){var i=e.dist-t.dist
return i?i:t.corners===_?1:e.corners===_?-1:0}),r.lineWidth=this._getStrokeWidth(v),r.strokeStyle=g,r.fillStyle=m,e=2;e<x.length;e++)i=x[e],n=i.corners,r.beginPath(),r.moveTo(n[3].screen.x,n[3].screen.y),r.lineTo(n[0].screen.x,n[0].screen.y),r.lineTo(n[1].screen.x,n[1].screen.y),r.lineTo(n[2].screen.x,n[2].screen.y),r.lineTo(n[3].screen.x,n[3].screen.y),r.fill(),r.stroke()}}},o.prototype._redrawDataLine=function(){var t,e,i=this.frame.canvas,o=i.getContext("2d")
if(!(void 0===this.dataPoints||this.dataPoints.length<=0)){for(e=0;e<this.dataPoints.length;e++){var n=this._convertPointToTranslation(this.dataPoints[e].point),s=this._convertTranslationToScreen(n)
this.dataPoints[e].trans=n,this.dataPoints[e].screen=s}if(this.dataPoints.length>0){for(t=this.dataPoints[0],o.lineWidth=this._getStrokeWidth(t),o.lineJoin="round",o.lineCap="round",o.strokeStyle=this.dataColor.stroke,o.beginPath(),o.moveTo(t.screen.x,t.screen.y),e=1;e<this.dataPoints.length;e++)t=this.dataPoints[e],o.lineTo(t.screen.x,t.screen.y)
o.stroke()}}},o.prototype._onMouseDown=function(t){if(t=t||window.event,this.leftButtonDown&&this._onMouseUp(t),this.leftButtonDown=t.which?1===t.which:1===t.button,this.leftButtonDown||this.touchDown){this.startMouseX=n(t),this.startMouseY=s(t),this.startStart=new Date(this.start),this.startEnd=new Date(this.end),this.startArmRotation=this.camera.getArmRotation(),this.frame.style.cursor="move"
var e=this
this.onmousemove=function(t){e._onMouseMove(t)},this.onmouseup=function(t){e._onMouseUp(t)},d.addEventListener(document,"mousemove",e.onmousemove),d.addEventListener(document,"mouseup",e.onmouseup),d.preventDefault(t)}},o.prototype._onMouseMove=function(t){t=t||window.event
var e=parseFloat(n(t))-this.startMouseX,i=parseFloat(s(t))-this.startMouseY,o=this.startArmRotation.horizontal+e/200,r=this.startArmRotation.vertical+i/200,a=4,h=Math.sin(a/360*2*Math.PI)
Math.abs(Math.sin(o))<h&&(o=Math.round(o/Math.PI)*Math.PI-.001),Math.abs(Math.cos(o))<h&&(o=(Math.round(o/Math.PI-.5)+.5)*Math.PI-.001),Math.abs(Math.sin(r))<h&&(r=Math.round(r/Math.PI)*Math.PI),Math.abs(Math.cos(r))<h&&(r=(Math.round(r/Math.PI-.5)+.5)*Math.PI),this.camera.setArmRotation(o,r),this.redraw()
var l=this.getCameraPosition()
this.emit("cameraPositionChange",l),d.preventDefault(t)},o.prototype._onMouseUp=function(t){this.frame.style.cursor="auto",this.leftButtonDown=!1,d.removeEventListener(document,"mousemove",this.onmousemove),d.removeEventListener(document,"mouseup",this.onmouseup),d.preventDefault(t)},o.prototype._onTooltip=function(t){var e=300,i=this.frame.getBoundingClientRect(),o=n(t)-i.left,r=s(t)-i.top
if(this.showTooltip){if(this.tooltipTimeout&&clearTimeout(this.tooltipTimeout),this.leftButtonDown)return void this._hideTooltip()
if(this.tooltip&&this.tooltip.dataPoint){var a=this._dataPointFromXY(o,r)
a!==this.tooltip.dataPoint&&(a?this._showTooltip(a):this._hideTooltip())}else{var h=this
this.tooltipTimeout=setTimeout(function(){h.tooltipTimeout=null
var t=h._dataPointFromXY(o,r)
t&&h._showTooltip(t)},e)}}},o.prototype._onTouchStart=function(t){this.touchDown=!0
var e=this
this.ontouchmove=function(t){e._onTouchMove(t)},this.ontouchend=function(t){e._onTouchEnd(t)},d.addEventListener(document,"touchmove",e.ontouchmove),d.addEventListener(document,"touchend",e.ontouchend),this._onMouseDown(t)},o.prototype._onTouchMove=function(t){this._onMouseMove(t)},o.prototype._onTouchEnd=function(t){this.touchDown=!1,d.removeEventListener(document,"touchmove",this.ontouchmove),d.removeEventListener(document,"touchend",this.ontouchend),this._onMouseUp(t)},o.prototype._onWheel=function(t){t||(t=window.event)
var e=0
if(t.wheelDelta?e=t.wheelDelta/120:t.detail&&(e=-t.detail/3),e){var i=this.camera.getArmLength(),o=i*(1-e/10)
this.camera.setArmLength(o),this.redraw(),this._hideTooltip()}var n=this.getCameraPosition()
this.emit("cameraPositionChange",n),d.preventDefault(t)},o.prototype._insideTriangle=function(t,e){function i(t){return t>0?1:0>t?-1:0}var o=e[0],n=e[1],s=e[2],r=i((n.x-o.x)*(t.y-o.y)-(n.y-o.y)*(t.x-o.x)),a=i((s.x-n.x)*(t.y-n.y)-(s.y-n.y)*(t.x-n.x)),h=i((o.x-s.x)*(t.y-s.y)-(o.y-s.y)*(t.x-s.x))
return!(0!=r&&0!=a&&r!=a||0!=a&&0!=h&&a!=h||0!=r&&0!=h&&r!=h)},o.prototype._dataPointFromXY=function(t,e){var i,n=100,s=null,r=null,a=null,h=new u(t,e)
if(this.style===o.STYLE.BAR||this.style===o.STYLE.BARCOLOR||this.style===o.STYLE.BARSIZE)for(i=this.dataPoints.length-1;i>=0;i--){s=this.dataPoints[i]
var d=s.surfaces
if(d)for(var l=d.length-1;l>=0;l--){var c=d[l],p=c.corners,f=[p[0].screen,p[1].screen,p[2].screen],m=[p[2].screen,p[3].screen,p[0].screen]
if(this._insideTriangle(h,f)||this._insideTriangle(h,m))return s}}else for(i=0;i<this.dataPoints.length;i++){s=this.dataPoints[i]
var g=s.screen
if(g){var v=Math.abs(t-g.x),y=Math.abs(e-g.y),b=Math.sqrt(v*v+y*y);(null===a||a>b)&&n>b&&(a=b,r=s)}}return r},o.prototype._showTooltip=function(t){var e,i,o
this.tooltip?(e=this.tooltip.dom.content,i=this.tooltip.dom.line,o=this.tooltip.dom.dot):(e=document.createElement("div"),e.style.position="absolute",e.style.padding="10px",e.style.border="1px solid #4d4d4d",e.style.color="#1a1a1a",e.style.background="rgba(255,255,255,0.7)",e.style.borderRadius="2px",e.style.boxShadow="5px 5px 10px rgba(128,128,128,0.5)",i=document.createElement("div"),i.style.position="absolute",i.style.height="40px",i.style.width="0",i.style.borderLeft="1px solid #4d4d4d",o=document.createElement("div"),o.style.position="absolute",o.style.height="0",o.style.width="0",o.style.border="5px solid #4d4d4d",o.style.borderRadius="5px",this.tooltip={dataPoint:null,dom:{content:e,line:i,dot:o}}),this._hideTooltip(),this.tooltip.dataPoint=t,"function"==typeof this.showTooltip?e.innerHTML=this.showTooltip(t.point):e.innerHTML="<table><tr><td>x:</td><td>"+t.point.x+"</td></tr><tr><td>y:</td><td>"+t.point.y+"</td></tr><tr><td>z:</td><td>"+t.point.z+"</td></tr></table>",e.style.left="0",e.style.top="0",this.frame.appendChild(e),this.frame.appendChild(i),this.frame.appendChild(o)
var n=e.offsetWidth,s=e.offsetHeight,r=i.offsetHeight,a=o.offsetWidth,h=o.offsetHeight,d=t.screen.x-n/2
d=Math.min(Math.max(d,10),this.frame.clientWidth-10-n),i.style.left=t.screen.x+"px",i.style.top=t.screen.y-r+"px",e.style.left=d+"px",e.style.top=t.screen.y-r-s+"px",o.style.left=t.screen.x-a/2+"px",o.style.top=t.screen.y-h/2+"px"},o.prototype._hideTooltip=function(){if(this.tooltip){this.tooltip.dataPoint=null
for(var t in this.tooltip.dom)if(this.tooltip.dom.hasOwnProperty(t)){var e=this.tooltip.dom[t]
e&&e.parentNode&&e.parentNode.removeChild(e)}}},t.exports=o},function(t,e){function i(t){return t?o(t):void 0}function o(t){for(var e in i.prototype)t[e]=i.prototype[e]
return t}t.exports=i,i.prototype.on=i.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},i.prototype.once=function(t,e){function i(){o.off(t,i),e.apply(this,arguments)}var o=this
return this._callbacks=this._callbacks||{},i.fn=e,this.on(t,i),this},i.prototype.off=i.prototype.removeListener=i.prototype.removeAllListeners=i.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this
var i=this._callbacks[t]
if(!i)return this
if(1==arguments.length)return delete this._callbacks[t],this
for(var o,n=0;n<i.length;n++)if(o=i[n],o===e||o.fn===e){i.splice(n,1)
break}return this},i.prototype.emit=function(t){this._callbacks=this._callbacks||{}
var e=[].slice.call(arguments,1),i=this._callbacks[t]
if(i){i=i.slice(0)
for(var o=0,n=i.length;n>o;++o)i[o].apply(this,e)}return this},i.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},i.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e){"use strict"
function i(t,e,i){this.x=void 0!==t?t:0,this.y=void 0!==e?e:0,this.z=void 0!==i?i:0}i.subtract=function(t,e){var o=new i
return o.x=t.x-e.x,o.y=t.y-e.y,o.z=t.z-e.z,o},i.add=function(t,e){var o=new i
return o.x=t.x+e.x,o.y=t.y+e.y,o.z=t.z+e.z,o},i.avg=function(t,e){return new i((t.x+e.x)/2,(t.y+e.y)/2,(t.z+e.z)/2)},i.crossProduct=function(t,e){var o=new i
return o.x=t.y*e.z-t.z*e.y,o.y=t.z*e.x-t.x*e.z,o.z=t.x*e.y-t.y*e.x,o},i.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},t.exports=i},function(t,e){"use strict"
function i(t,e){this.x=void 0!==t?t:0,this.y=void 0!==e?e:0}t.exports=i},function(t,e,i){"use strict"
function o(){this.armLocation=new n,this.armRotation={},this.armRotation.horizontal=0,this.armRotation.vertical=0,this.armLength=1.7,this.cameraLocation=new n,this.cameraRotation=new n(.5*Math.PI,0,0),this.calculateCameraOrientation()}var n=i(13)
o.prototype.setArmLocation=function(t,e,i){this.armLocation.x=t,this.armLocation.y=e,this.armLocation.z=i,this.calculateCameraOrientation()},o.prototype.setArmRotation=function(t,e){void 0!==t&&(this.armRotation.horizontal=t),void 0!==e&&(this.armRotation.vertical=e,this.armRotation.vertical<0&&(this.armRotation.vertical=0),this.armRotation.vertical>.5*Math.PI&&(this.armRotation.vertical=.5*Math.PI)),void 0===t&&void 0===e||this.calculateCameraOrientation()},o.prototype.getArmRotation=function(){var t={}
return t.horizontal=this.armRotation.horizontal,t.vertical=this.armRotation.vertical,t},o.prototype.setArmLength=function(t){void 0!==t&&(this.armLength=t,this.armLength<.71&&(this.armLength=.71),this.armLength>5&&(this.armLength=5),this.calculateCameraOrientation())},o.prototype.getArmLength=function(){return this.armLength},o.prototype.getCameraLocation=function(){return this.cameraLocation},o.prototype.getCameraRotation=function(){return this.cameraRotation},o.prototype.calculateCameraOrientation=function(){this.cameraLocation.x=this.armLocation.x-this.armLength*Math.sin(this.armRotation.horizontal)*Math.cos(this.armRotation.vertical),this.cameraLocation.y=this.armLocation.y-this.armLength*Math.cos(this.armRotation.horizontal)*Math.cos(this.armRotation.vertical),this.cameraLocation.z=this.armLocation.z+this.armLength*Math.sin(this.armRotation.vertical),this.cameraRotation.x=Math.PI/2-this.armRotation.vertical,this.cameraRotation.y=0,this.cameraRotation.z=-this.armRotation.horizontal},t.exports=o},function(t,e,i){"use strict"
function o(t,e,i){this.data=t,this.column=e,this.graph=i,this.index=void 0,this.value=void 0,this.values=i.getDistinctValues(t.get(),this.column),this.values.sort(function(t,e){return t>e?1:e>t?-1:0}),this.values.length>0&&this.selectValue(0),this.dataPoints=[],this.loaded=!1,this.onLoadCallback=void 0,i.animationPreload?(this.loaded=!1,this.loadInBackground()):this.loaded=!0}var n=i(10)
o.prototype.isLoaded=function(){return this.loaded},o.prototype.getLoadedProgress=function(){for(var t=this.values.length,e=0;this.dataPoints[e];)e++
return Math.round(e/t*100)},o.prototype.getLabel=function(){return this.graph.filterLabel},o.prototype.getColumn=function(){return this.column},o.prototype.getSelectedValue=function(){return void 0!==this.index?this.values[this.index]:void 0},o.prototype.getValues=function(){return this.values},o.prototype.getValue=function(t){if(t>=this.values.length)throw"Error: index out of range"
return this.values[t]},o.prototype._getDataPoints=function(t){if(void 0===t&&(t=this.index),void 0===t)return[]
var e
if(this.dataPoints[t])e=this.dataPoints[t]
else{var i={}
i.column=this.column,i.value=this.values[t]
var o=new n(this.data,{filter:function(t){return t[i.column]==i.value}}).get()
e=this.graph._getDataPoints(o),this.dataPoints[t]=e}return e},o.prototype.setOnLoadCallback=function(t){this.onLoadCallback=t},o.prototype.selectValue=function(t){if(t>=this.values.length)throw"Error: index out of range"
this.index=t,this.value=this.values[t]},o.prototype.loadInBackground=function(t){void 0===t&&(t=0)
var e=this.graph.frame
if(t<this.values.length){this._getDataPoints(t)
void 0===e.progress&&(e.progress=document.createElement("DIV"),e.progress.style.position="absolute",e.progress.style.color="gray",e.appendChild(e.progress))
var i=this.getLoadedProgress()
e.progress.innerHTML="Loading animation... "+i+"%",e.progress.style.bottom="60px",e.progress.style.left="10px"
var o=this
setTimeout(function(){o.loadInBackground(t+1)},10),this.loaded=!1}else this.loaded=!0,void 0!==e.progress&&(e.removeChild(e.progress),e.progress=void 0),this.onLoadCallback&&this.onLoadCallback()},t.exports=o},function(t,e,i){"use strict"
function o(t,e){if(void 0===t)throw"Error: No container element defined"
if(this.container=t,this.visible=e&&void 0!=e.visible?e.visible:!0,this.visible){this.frame=document.createElement("DIV"),this.frame.style.width="100%",this.frame.style.position="relative",this.container.appendChild(this.frame),this.frame.prev=document.createElement("INPUT"),this.frame.prev.type="BUTTON",this.frame.prev.value="Prev",this.frame.appendChild(this.frame.prev),this.frame.play=document.createElement("INPUT"),this.frame.play.type="BUTTON",this.frame.play.value="Play",this.frame.appendChild(this.frame.play),this.frame.next=document.createElement("INPUT"),this.frame.next.type="BUTTON",this.frame.next.value="Next",this.frame.appendChild(this.frame.next),this.frame.bar=document.createElement("INPUT"),this.frame.bar.type="BUTTON",this.frame.bar.style.position="absolute",this.frame.bar.style.border="1px solid red",this.frame.bar.style.width="100px",this.frame.bar.style.height="6px",this.frame.bar.style.borderRadius="2px",this.frame.bar.style.MozBorderRadius="2px",this.frame.bar.style.border="1px solid #7F7F7F",this.frame.bar.style.backgroundColor="#E5E5E5",this.frame.appendChild(this.frame.bar),this.frame.slide=document.createElement("INPUT"),this.frame.slide.type="BUTTON",this.frame.slide.style.margin="0px",this.frame.slide.value=" ",this.frame.slide.style.position="relative",this.frame.slide.style.left="-100px",this.frame.appendChild(this.frame.slide)
var i=this
this.frame.slide.onmousedown=function(t){i._onMouseDown(t)},this.frame.prev.onclick=function(t){i.prev(t)},this.frame.play.onclick=function(t){i.togglePlay(t)},this.frame.next.onclick=function(t){i.next(t)}}this.onChangeCallback=void 0,this.values=[],this.index=void 0,this.playTimeout=void 0,this.playInterval=1e3,this.playLoop=!0}var n=i(1)
o.prototype.prev=function(){var t=this.getIndex()
t>0&&(t--,this.setIndex(t))},o.prototype.next=function(){var t=this.getIndex()
t<this.values.length-1&&(t++,this.setIndex(t))},o.prototype.playNext=function(){var t=new Date,e=this.getIndex()
e<this.values.length-1?(e++,this.setIndex(e)):this.playLoop&&(e=0,this.setIndex(e))
var i=new Date,o=i-t,n=Math.max(this.playInterval-o,0),s=this
this.playTimeout=setTimeout(function(){s.playNext()},n)},o.prototype.togglePlay=function(){void 0===this.playTimeout?this.play():this.stop()},o.prototype.play=function(){this.playTimeout||(this.playNext(),this.frame&&(this.frame.play.value="Stop"))},o.prototype.stop=function(){clearInterval(this.playTimeout),this.playTimeout=void 0,this.frame&&(this.frame.play.value="Play")},o.prototype.setOnChangeCallback=function(t){this.onChangeCallback=t},o.prototype.setPlayInterval=function(t){this.playInterval=t},o.prototype.getPlayInterval=function(t){return this.playInterval},o.prototype.setPlayLoop=function(t){this.playLoop=t},o.prototype.onChange=function(){void 0!==this.onChangeCallback&&this.onChangeCallback()},o.prototype.redraw=function(){if(this.frame){this.frame.bar.style.top=this.frame.clientHeight/2-this.frame.bar.offsetHeight/2+"px",this.frame.bar.style.width=this.frame.clientWidth-this.frame.prev.clientWidth-this.frame.play.clientWidth-this.frame.next.clientWidth-30+"px"
var t=this.indexToLeft(this.index)
this.frame.slide.style.left=t+"px"}},o.prototype.setValues=function(t){this.values=t,this.values.length>0?this.setIndex(0):this.index=void 0},o.prototype.setIndex=function(t){if(!(t<this.values.length))throw"Error: index out of range"
this.index=t,this.redraw(),this.onChange()},o.prototype.getIndex=function(){return this.index},o.prototype.get=function(){return this.values[this.index]},o.prototype._onMouseDown=function(t){var e=t.which?1===t.which:1===t.button
if(e){this.startClientX=t.clientX,this.startSlideX=parseFloat(this.frame.slide.style.left),this.frame.style.cursor="move"
var i=this
this.onmousemove=function(t){i._onMouseMove(t)},this.onmouseup=function(t){i._onMouseUp(t)},n.addEventListener(document,"mousemove",this.onmousemove),n.addEventListener(document,"mouseup",this.onmouseup),n.preventDefault(t)}},o.prototype.leftToIndex=function(t){var e=parseFloat(this.frame.bar.style.width)-this.frame.slide.clientWidth-10,i=t-3,o=Math.round(i/e*(this.values.length-1))
return 0>o&&(o=0),o>this.values.length-1&&(o=this.values.length-1),o},o.prototype.indexToLeft=function(t){var e=parseFloat(this.frame.bar.style.width)-this.frame.slide.clientWidth-10,i=t/(this.values.length-1)*e,o=i+3
return o},o.prototype._onMouseMove=function(t){var e=t.clientX-this.startClientX,i=this.startSlideX+e,o=this.leftToIndex(i)
this.setIndex(o),n.preventDefault()},o.prototype._onMouseUp=function(t){this.frame.style.cursor="auto",n.removeEventListener(document,"mousemove",this.onmousemove),n.removeEventListener(document,"mouseup",this.onmouseup),n.preventDefault()},t.exports=o},function(t,e){"use strict"
function i(t,e,i,o){this._start=0,this._end=0,this._step=1,this.prettyStep=!0,this.precision=5,this._current=0,this.setRange(t,e,i,o)}i.prototype.setRange=function(t,e,i,o){this._start=t?t:0,this._end=e?e:0,this.setStep(i,o)},i.prototype.setStep=function(t,e){void 0===t||0>=t||(void 0!==e&&(this.prettyStep=e),this.prettyStep===!0?this._step=i.calculatePrettyStep(t):this._step=t)},i.calculatePrettyStep=function(t){var e=function(t){return Math.log(t)/Math.LN10},i=Math.pow(10,Math.round(e(t))),o=2*Math.pow(10,Math.round(e(t/2))),n=5*Math.pow(10,Math.round(e(t/5))),s=i
return Math.abs(o-t)<=Math.abs(s-t)&&(s=o),Math.abs(n-t)<=Math.abs(s-t)&&(s=n),0>=s&&(s=1),s},i.prototype.getCurrent=function(){return parseFloat(this._current.toPrecision(this.precision))},i.prototype.getStep=function(){return this._step},i.prototype.start=function(){this._current=this._start-this._start%this._step},i.prototype.next=function(){this._current+=this._step},i.prototype.end=function(){return this._current>this._end},t.exports=i},function(t,e,i){"use strict"
function o(t,e,i,d){if(!(this instanceof o))throw new SyntaxError("Constructor must be called with the new operator")
if(!(Array.isArray(i)||i instanceof r||i instanceof a)&&i instanceof Object){var c=d
d=i,i=c}var f=this
this.defaultOptions={start:null,end:null,autoResize:!0,throttleRedraw:0,orientation:{axis:"bottom",item:"bottom"},moment:n,width:null,height:null,maxHeight:null,minHeight:null},this.options=s.deepExtend({},this.defaultOptions),this._create(t),this.components=[],this.body={dom:this.dom,domProps:this.props,emitter:{on:this.on.bind(this),off:this.off.bind(this),emit:this.emit.bind(this)},hiddenDates:[],util:{getScale:function(){return f.timeAxis.step.scale},getStep:function(){return f.timeAxis.step.step},toScreen:f._toScreen.bind(f),toGlobalScreen:f._toGlobalScreen.bind(f),toTime:f._toTime.bind(f),toGlobalTime:f._toGlobalTime.bind(f)}},this.range=new h(this.body),this.components.push(this.range),this.body.range=this.range,this.timeAxis=new l(this.body),this.timeAxis2=null,this.components.push(this.timeAxis),this.currentTime=new u(this.body),this.components.push(this.currentTime),this.itemSet=new p(this.body),this.components.push(this.itemSet),this.itemsData=null,this.groupsData=null,this.on("tap",function(t){f.emit("click",f.getEventProperties(t))}),this.on("doubletap",function(t){f.emit("doubleClick",f.getEventProperties(t))}),this.dom.root.oncontextmenu=function(t){f.emit("contextmenu",f.getEventProperties(t))},d&&this.setOptions(d),i&&this.setGroups(i),e?this.setItems(e):this._redraw()}var n=(i(12),i(20),i(2)),s=i(1),r=i(8),a=i(10),h=i(24),d=i(28),l=i(39),u=i(44),c=i(42),p=i(29),f=i(45),m=i(47)["default"],g=i(47).printStyle,v=i(48).allOptions,y=i(48).configureOptions
o.prototype=new d,o.prototype._createConfigurator=function(){return new f(this,this.dom.container,y)},o.prototype.redraw=function(){this.itemSet&&this.itemSet.markDirty({refreshItems:!0}),this._redraw()},o.prototype.setOptions=function(t){var e=m.validate(t,v)
if(e===!0&&console.log("%cErrors have been found in the supplied options object.",g),d.prototype.setOptions.call(this,t),"type"in t&&t.type!==this.options.type){this.options.type=t.type
var i=this.itemsData
if(i){var o=this.getSelection()
this.setItems(null),this.setItems(i),this.setSelection(o)}}},o.prototype.setItems=function(t){var e,i=null==this.itemsData
if(e=t?t instanceof r||t instanceof a?t:new r(t,{type:{start:"Date",end:"Date"}}):null,this.itemsData=e,i)if(void 0!=this.options.start||void 0!=this.options.end){if(void 0==this.options.start||void 0==this.options.end)var o=this.getItemRange()
var n=void 0!=this.options.start?this.options.start:o.min,s=void 0!=this.options.end?this.options.end:o.max
this.setWindow(n,s,{animation:!1})}else this.fit({animation:!1})
this.itemSet&&this.itemSet.setItems(e)},o.prototype.setGroups=function(t){var e
e=t?t instanceof r||t instanceof a?t:new r(t):null,this.groupsData=e,this.itemSet.setGroups(e)},o.prototype.setData=function(t){t&&t.groups&&this.setGroups(t.groups),t&&t.items&&this.setItems(t.items)},o.prototype.setSelection=function(t,e){this.itemSet&&this.itemSet.setSelection(t),e&&e.focus&&this.focus(t,e)},o.prototype.getSelection=function(){return this.itemSet&&this.itemSet.getSelection()||[]},o.prototype.focus=function(t,e){if(this.itemsData&&void 0!=t){var i=Array.isArray(t)?t:[t],o=this.itemsData.getDataSet().get(i,{type:{start:"Date",end:"Date"}}),n=null,s=null
if(o.forEach(function(t){var e=t.start.valueOf(),i="end"in t?t.end.valueOf():t.start.valueOf();(null===n||n>e)&&(n=e),(null===s||i>s)&&(s=i)}),null!==n&&null!==s){var r=(n+s)/2,a=Math.max(this.range.end-this.range.start,1.1*(s-n)),h=e&&void 0!==e.animation?e.animation:!0
this.range.setRange(r-a/2,r+a/2,h)}}},o.prototype.fit=function(t){var e=t&&void 0!==t.animation?t.animation:!0,i=this.getItemRange()
this.range.setRange(i.min,i.max,e)},o.prototype.getItemRange=function(){var t=this,e=this.getDataRange(),i=e.min,o=e.max,n=null,r=null
if(null!=i&&null!=o){var a,h,d,l,u
!function(){var e=function(t){return s.convert(t.data.start,"Date").valueOf()},c=function(t){var e=void 0!=t.data.end?t.data.end:t.data.start
return s.convert(e,"Date").valueOf()}
a=o-i,0>=a&&(a=10),h=a/t.props.center.width,s.forEach(t.itemSet.items,function(t){t.show()
var s=e(t),a=c(t),d=new Date(s-(t.getWidthLeft()+10)*h),l=new Date(a+(t.getWidthRight()+10)*h)
i>d&&(i=d,n=t),l>o&&(o=l,r=t)}.bind(t)),n&&r&&(d=n.getWidthLeft()+10,l=r.getWidthRight()+10,u=t.props.center.width-d-l,u>0&&(i=e(n)-d*a/u,o=c(r)+l*a/u))}()}return{min:null!=i?new Date(i):null,max:null!=o?new Date(o):null}},o.prototype.getDataRange=function(){var t=null,e=null,i=this.itemsData&&this.itemsData.getDataSet()
return i&&i.forEach(function(i){var o=s.convert(i.start,"Date").valueOf(),n=s.convert(void 0!=i.end?i.end:i.start,"Date").valueOf();(null===t||t>o)&&(t=o),(null===e||n>e)&&(e=o)}),{min:null!=t?new Date(t):null,max:null!=e?new Date(e):null}},o.prototype.getEventProperties=function(t){var e=t.center?t.center.x:t.clientX,i=t.center?t.center.y:t.clientY,o=e-s.getAbsoluteLeft(this.dom.centerContainer),n=i-s.getAbsoluteTop(this.dom.centerContainer),r=this.itemSet.itemFromTarget(t),a=this.itemSet.groupFromTarget(t),h=c.customTimeFromTarget(t),d=this.itemSet.options.snap||null,l=this.body.util.getScale(),u=this.body.util.getStep(),p=this._toTime(o),f=d?d(p,l,u):p,m=s.getTarget(t),g=null
return null!=r?g="item":null!=h?g="custom-time":s.hasParent(m,this.timeAxis.dom.foreground)?g="axis":this.timeAxis2&&s.hasParent(m,this.timeAxis2.dom.foreground)?g="axis":s.hasParent(m,this.itemSet.dom.labelSet)?g="group-label":s.hasParent(m,this.currentTime.bar)?g="current-time":s.hasParent(m,this.dom.center)&&(g="background"),{event:t,item:r?r.id:null,group:a?a.groupId:null,what:g,pageX:t.srcEvent?t.srcEvent.pageX:t.pageX,pageY:t.srcEvent?t.srcEvent.pageY:t.pageY,x:o,y:n,time:p,snappedTime:f}},t.exports=o},function(t,e,i){"use strict"
if("undefined"!=typeof window){var o=i(21),n=window.Hammer||i(22)
t.exports=o(n,{preventDefault:"mouse"})}else t.exports=function(){throw Error("hammer.js is only available in a browser, not in node.js.")}},function(t,e,i){var o,n,s
!function(i){n=[],o=i,s="function"==typeof o?o.apply(e,n):o,!(void 0!==s&&(t.exports=s))}(function(){var t=null
return function e(i,o){function n(t){return t.match(/[^ ]+/g)}function s(e){if("hammer.input"!==e.type){if(e.srcEvent._handled||(e.srcEvent._handled={}),e.srcEvent._handled[e.type])return
e.srcEvent._handled[e.type]=!0}var i=!1
e.stopPropagation=function(){i=!0},e.firstTarget=t
for(var o=t;o&&!i;){var n=o.hammer&&o.hammer._handlers[e.type]
if(n)for(var s=0;s<n.length&&!i;s++)n[s](e)
o=o.parentNode}}var r=o||{preventDefault:!1}
if(i.Manager){var a=i,h=function(t,i){var o=Object.create(r)
return i&&a.extend(o,i),e(new a(t,o),o)}
return a.extend(h,a),h.Manager=function(t,i){var o=Object.create(r)
return i&&a.extend(o,i),e(new a.Manager(t,o),o)},h}var d=Object.create(i),l=i.element
return l.hammer=d,i.on("hammer.input",function(e){r.preventDefault!==!0&&r.preventDefault!==e.pointerType||e.preventDefault(),e.isFirst&&(t=e.target)}),d._handlers={},d.on=function(t,e){return n(t).forEach(function(t){var o=d._handlers[t]
o||(d._handlers[t]=o=[],i.on(t,s)),o.push(e)}),d},d.off=function(t,e){return n(t).forEach(function(t){var o=d._handlers[t]
o&&(o=e?o.filter(function(t){return t!==e}):[],o.length>0?d._handlers[t]=o:(i.off(t,s),delete d._handlers[t]))}),d},d.emit=function(e,o){t=o.target,i.emit(e,o)},d.destroy=function(){delete i.element.hammer,d._handlers={},i.destroy()},d}})},function(t,e,i){var o
!function(n,s,r,a){"use strict"
function h(t,e,i){return setTimeout(f(t,i),e)}function d(t,e,i){return Array.isArray(t)?(l(t,i[e],i),!0):!1}function l(t,e,i){var o
if(t)if(t.forEach)t.forEach(e,i)
else if(t.length!==a)for(o=0;o<t.length;)e.call(i,t[o],o,t),o++
else for(o in t)t.hasOwnProperty(o)&&e.call(i,t[o],o,t)}function u(t,e,i){for(var o=Object.keys(e),n=0;n<o.length;)(!i||i&&t[o[n]]===a)&&(t[o[n]]=e[o[n]]),n++
return t}function c(t,e){return u(t,e,!0)}function p(t,e,i){var o,n=e.prototype
o=t.prototype=Object.create(n),o.constructor=t,o._super=n,i&&u(o,i)}function f(t,e){return function(){return t.apply(e,arguments)}}function m(t,e){return typeof t==ft?t.apply(e?e[0]||a:a,e):t}function g(t,e){return t===a?e:t}function v(t,e,i){l(w(e),function(e){t.addEventListener(e,i,!1)})}function y(t,e,i){l(w(e),function(e){t.removeEventListener(e,i,!1)})}function b(t,e){for(;t;){if(t==e)return!0
t=t.parentNode}return!1}function _(t,e){return t.indexOf(e)>-1}function w(t){return t.trim().split(/\s+/g)}function x(t,e,i){if(t.indexOf&&!i)return t.indexOf(e)
for(var o=0;o<t.length;){if(i&&t[o][i]==e||!i&&t[o]===e)return o
o++}return-1}function k(t){return Array.prototype.slice.call(t,0)}function T(t,e,i){for(var o=[],n=[],s=0;s<t.length;){var r=e?t[s][e]:t[s]
x(n,r)<0&&o.push(t[s]),n[s]=r,s++}return i&&(o=e?o.sort(function(t,i){return t[e]>i[e]}):o.sort()),o}function D(t,e){for(var i,o,n=e[0].toUpperCase()+e.slice(1),s=0;s<ct.length;){if(i=ct[s],o=i?i+n:e,o in t)return o
s++}return a}function O(){return yt++}function C(t){var e=t.ownerDocument
return e.defaultView||e.parentWindow}function M(t,e){var i=this
this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){m(t.options.enable,[t])&&i.handler(e)},this.init()}function S(t){var e,i=t.options.inputClass
return new(e=i?i:wt?W:xt?q:_t?V:Y)(t,E)}function E(t,e,i){var o=i.pointers.length,n=i.changedPointers.length,s=e&Mt&&o-n===0,r=e&(Et|Pt)&&o-n===0
i.isFirst=!!s,i.isFinal=!!r,s&&(t.session={}),i.eventType=e,P(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function P(t,e){var i=t.session,o=e.pointers,n=o.length
i.firstInput||(i.firstInput=A(e)),n>1&&!i.firstMultiple?i.firstMultiple=A(e):1===n&&(i.firstMultiple=!1)
var s=i.firstInput,r=i.firstMultiple,a=r?r.center:s.center,h=e.center=j(o)
e.timeStamp=vt(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=F(a,h),e.distance=R(a,h),N(i,e),e.offsetDirection=z(e.deltaX,e.deltaY),e.scale=r?H(r.pointers,o):1,e.rotation=r?B(r.pointers,o):0,I(i,e)
var d=t.element
b(e.srcEvent.target,d)&&(d=e.srcEvent.target),e.target=d}function N(t,e){var i=e.center,o=t.offsetDelta||{},n=t.prevDelta||{},s=t.prevInput||{}
e.eventType!==Mt&&s.eventType!==Et||(n=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},o=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=n.x+(i.x-o.x),e.deltaY=n.y+(i.y-o.y)}function I(t,e){var i,o,n,s,r=t.lastInterval||e,h=e.timeStamp-r.timeStamp
if(e.eventType!=Pt&&(h>Ct||r.velocity===a)){var d=r.deltaX-e.deltaX,l=r.deltaY-e.deltaY,u=L(h,d,l)
o=u.x,n=u.y,i=gt(u.x)>gt(u.y)?u.x:u.y,s=z(d,l),t.lastInterval=e}else i=r.velocity,o=r.velocityX,n=r.velocityY,s=r.direction
e.velocity=i,e.velocityX=o,e.velocityY=n,e.direction=s}function A(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:mt(t.pointers[i].clientX),clientY:mt(t.pointers[i].clientY)},i++
return{timeStamp:vt(),pointers:e,center:j(e),deltaX:t.deltaX,deltaY:t.deltaY}}function j(t){var e=t.length
if(1===e)return{x:mt(t[0].clientX),y:mt(t[0].clientY)}
for(var i=0,o=0,n=0;e>n;)i+=t[n].clientX,o+=t[n].clientY,n++
return{x:mt(i/e),y:mt(o/e)}}function L(t,e,i){return{x:e/t||0,y:i/t||0}}function z(t,e){return t===e?Nt:gt(t)>=gt(e)?t>0?It:At:e>0?jt:Lt}function R(t,e,i){i||(i=Bt)
var o=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]]
return Math.sqrt(o*o+n*n)}function F(t,e,i){i||(i=Bt)
var o=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]]
return 180*Math.atan2(n,o)/Math.PI}function B(t,e){return F(e[1],e[0],Ht)-F(t[1],t[0],Ht)}function H(t,e){return R(e[0],e[1],Ht)/R(t[0],t[1],Ht)}function Y(){this.evEl=Wt,this.evWin=Gt,this.allow=!0,this.pressed=!1,M.apply(this,arguments)}function W(){this.evEl=$t,this.evWin=Vt,M.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function G(){this.evTarget=Zt,this.evWin=Kt,this.started=!1,M.apply(this,arguments)}function U(t,e){var i=k(t.touches),o=k(t.changedTouches)
return e&(Et|Pt)&&(i=T(i.concat(o),"identifier",!0)),[i,o]}function q(){this.evTarget=Jt,this.targetIds={},M.apply(this,arguments)}function $(t,e){var i=k(t.touches),o=this.targetIds
if(e&(Mt|St)&&1===i.length)return o[i[0].identifier]=!0,[i,i]
var n,s,r=k(t.changedTouches),a=[],h=this.target
if(s=i.filter(function(t){return b(t.target,h)}),e===Mt)for(n=0;n<s.length;)o[s[n].identifier]=!0,n++
for(n=0;n<r.length;)o[r[n].identifier]&&a.push(r[n]),e&(Et|Pt)&&delete o[r[n].identifier],n++
return a.length?[T(s.concat(a),"identifier",!0),a]:void 0}function V(){M.apply(this,arguments)
var t=f(this.handler,this)
this.touch=new q(this.manager,t),this.mouse=new Y(this.manager,t)}function X(t,e){this.manager=t,this.set(e)}function Z(t){if(_(t,se))return se
var e=_(t,re),i=_(t,ae)
return e&&i?re+" "+ae:e||i?e?re:ae:_(t,ne)?ne:oe}function K(t){this.id=O(),this.manager=null,this.options=c(t||{},this.defaults),this.options.enable=g(this.options.enable,!0),this.state=he,this.simultaneous={},this.requireFail=[]}function Q(t){return t&pe?"cancel":t&ue?"end":t&le?"move":t&de?"start":""}function J(t){return t==Lt?"down":t==jt?"up":t==It?"left":t==At?"right":""}function tt(t,e){var i=e.manager
return i?i.get(t):t}function et(){K.apply(this,arguments)}function it(){et.apply(this,arguments),this.pX=null,this.pY=null}function ot(){et.apply(this,arguments)}function nt(){K.apply(this,arguments),this._timer=null,this._input=null}function st(){et.apply(this,arguments)}function rt(){et.apply(this,arguments)}function at(){K.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ht(t,e){return e=e||{},e.recognizers=g(e.recognizers,ht.defaults.preset),new dt(t,e)}function dt(t,e){e=e||{},this.options=c(e,ht.defaults),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.element=t,this.input=S(this),this.touchAction=new X(this,this.options.touchAction),lt(this,!0),l(e.recognizers,function(t){var e=this.add(new t[0](t[1]))
t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function lt(t,e){var i=t.element
l(t.options.cssProps,function(t,o){i.style[D(i.style,o)]=e?t:""})}function ut(t,e){var i=s.createEvent("Event")
i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}var ct=["","webkit","moz","MS","ms","o"],pt=s.createElement("div"),ft="function",mt=Math.round,gt=Math.abs,vt=Date.now,yt=1,bt=/mobile|tablet|ip(ad|hone|od)|android/i,_t="ontouchstart"in n,wt=D(n,"PointerEvent")!==a,xt=_t&&bt.test(navigator.userAgent),kt="touch",Tt="pen",Dt="mouse",Ot="kinect",Ct=25,Mt=1,St=2,Et=4,Pt=8,Nt=1,It=2,At=4,jt=8,Lt=16,zt=It|At,Rt=jt|Lt,Ft=zt|Rt,Bt=["x","y"],Ht=["clientX","clientY"]
M.prototype={handler:function(){},init:function(){this.evEl&&v(this.element,this.evEl,this.domHandler),this.evTarget&&v(this.target,this.evTarget,this.domHandler),this.evWin&&v(C(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&y(this.element,this.evEl,this.domHandler),this.evTarget&&y(this.target,this.evTarget,this.domHandler),this.evWin&&y(C(this.element),this.evWin,this.domHandler)}}
var Yt={mousedown:Mt,mousemove:St,mouseup:Et},Wt="mousedown",Gt="mousemove mouseup"
p(Y,M,{handler:function(t){var e=Yt[t.type]
e&Mt&&0===t.button&&(this.pressed=!0),e&St&&1!==t.which&&(e=Et),this.pressed&&this.allow&&(e&Et&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:Dt,srcEvent:t}))}})
var Ut={pointerdown:Mt,pointermove:St,pointerup:Et,pointercancel:Pt,pointerout:Pt},qt={2:kt,3:Tt,4:Dt,5:Ot},$t="pointerdown",Vt="pointermove pointerup pointercancel"
n.MSPointerEvent&&($t="MSPointerDown",Vt="MSPointerMove MSPointerUp MSPointerCancel"),p(W,M,{handler:function(t){var e=this.store,i=!1,o=t.type.toLowerCase().replace("ms",""),n=Ut[o],s=qt[t.pointerType]||t.pointerType,r=s==kt,a=x(e,t.pointerId,"pointerId")
n&Mt&&(0===t.button||r)?0>a&&(e.push(t),a=e.length-1):n&(Et|Pt)&&(i=!0),0>a||(e[a]=t,this.callback(this.manager,n,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),i&&e.splice(a,1))}})
var Xt={touchstart:Mt,touchmove:St,touchend:Et,touchcancel:Pt},Zt="touchstart",Kt="touchstart touchmove touchend touchcancel"
p(G,M,{handler:function(t){var e=Xt[t.type]
if(e===Mt&&(this.started=!0),this.started){var i=U.call(this,t,e)
e&(Et|Pt)&&i[0].length-i[1].length===0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:kt,srcEvent:t})}}})
var Qt={touchstart:Mt,touchmove:St,touchend:Et,touchcancel:Pt},Jt="touchstart touchmove touchend touchcancel"
p(q,M,{handler:function(t){var e=Qt[t.type],i=$.call(this,t,e)
i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:kt,srcEvent:t})}}),p(V,M,{handler:function(t,e,i){var o=i.pointerType==kt,n=i.pointerType==Dt
if(o)this.mouse.allow=!1
else if(n&&!this.mouse.allow)return
e&(Et|Pt)&&(this.mouse.allow=!0),this.callback(t,e,i)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}})
var te=D(pt.style,"touchAction"),ee=te!==a,ie="compute",oe="auto",ne="manipulation",se="none",re="pan-x",ae="pan-y"
X.prototype={set:function(t){t==ie&&(t=this.compute()),ee&&(this.manager.element.style[te]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[]
return l(this.manager.recognizers,function(e){m(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),Z(t.join(" "))},preventDefaults:function(t){if(!ee){var e=t.srcEvent,i=t.offsetDirection
if(this.manager.session.prevented)return void e.preventDefault()
var o=this.actions,n=_(o,se),s=_(o,ae),r=_(o,re)
return n||s&&i&zt||r&&i&Rt?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}}
var he=1,de=2,le=4,ue=8,ce=ue,pe=16,fe=32
K.prototype={defaults:{},set:function(t){return u(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(d(t,"recognizeWith",this))return this
var e=this.simultaneous
return t=tt(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return d(t,"dropRecognizeWith",this)?this:(t=tt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(d(t,"requireFailure",this))return this
var e=this.requireFail
return t=tt(t,this),-1===x(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(d(t,"dropRequireFailure",this))return this
t=tt(t,this)
var e=x(this.requireFail,t)
return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){i.manager.emit(i.options.event+(e?Q(o):""),t)}var i=this,o=this.state
ue>o&&e(!0),e(),o>=ue&&e(!0)},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=fe)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(fe|he)))return!1
t++}return!0},recognize:function(t){var e=u({},t)
return m(this.options.enable,[this,e])?(this.state&(ce|pe|fe)&&(this.state=he),this.state=this.process(e),void(this.state&(de|le|ue|pe)&&this.tryEmit(e))):(this.reset(),void(this.state=fe))},process:function(t){},getTouchAction:function(){},reset:function(){}},p(et,K,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers
return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,o=e&(de|le),n=this.attrTest(t)
return o&&(i&Pt||!n)?e|pe:o||n?i&Et?e|ue:e&de?e|le:de:fe}}),p(it,et,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ft},getTouchAction:function(){var t=this.options.direction,e=[]
return t&zt&&e.push(ae),t&Rt&&e.push(re),e},directionTest:function(t){var e=this.options,i=!0,o=t.distance,n=t.direction,s=t.deltaX,r=t.deltaY
return n&e.direction||(e.direction&zt?(n=0===s?Nt:0>s?It:At,i=s!=this.pX,o=Math.abs(t.deltaX)):(n=0===r?Nt:0>r?jt:Lt,i=r!=this.pY,o=Math.abs(t.deltaY))),t.direction=n,i&&o>e.threshold&&n&e.direction},attrTest:function(t){return et.prototype.attrTest.call(this,t)&&(this.state&de||!(this.state&de)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY
var e=J(t.direction)
e&&this.manager.emit(this.options.event+e,t),this._super.emit.call(this,t)}}),p(ot,et,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[se]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&de)},emit:function(t){if(this._super.emit.call(this,t),1!==t.scale){var e=t.scale<1?"in":"out"
this.manager.emit(this.options.event+e,t)}}}),p(nt,K,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[oe]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,o=t.distance<e.threshold,n=t.deltaTime>e.time
if(this._input=t,!o||!i||t.eventType&(Et|Pt)&&!n)this.reset()
else if(t.eventType&Mt)this.reset(),this._timer=h(function(){this.state=ce,this.tryEmit()},e.time,this)
else if(t.eventType&Et)return ce
return fe},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===ce&&(t&&t.eventType&Et?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=vt(),this.manager.emit(this.options.event,this._input)))}}),p(st,et,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[se]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&de)}}),p(rt,et,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:zt|Rt,pointers:1},getTouchAction:function(){return it.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction
return i&(zt|Rt)?e=t.velocity:i&zt?e=t.velocityX:i&Rt&&(e=t.velocityY),this._super.attrTest.call(this,t)&&i&t.direction&&t.distance>this.options.threshold&&gt(e)>this.options.velocity&&t.eventType&Et},emit:function(t){var e=J(t.direction)
e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),p(at,K,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ne]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,o=t.distance<e.threshold,n=t.deltaTime<e.time
if(this.reset(),t.eventType&Mt&&0===this.count)return this.failTimeout()
if(o&&n&&i){if(t.eventType!=Et)return this.failTimeout()
var s=this.pTime?t.timeStamp-this.pTime<e.interval:!0,r=!this.pCenter||R(this.pCenter,t.center)<e.posThreshold
this.pTime=t.timeStamp,this.pCenter=t.center,r&&s?this.count+=1:this.count=1,this._input=t
var a=this.count%e.taps
if(0===a)return this.hasRequireFailures()?(this._timer=h(function(){this.state=ce,this.tryEmit()},e.interval,this),de):ce}return fe},failTimeout:function(){return this._timer=h(function(){this.state=fe},this.options.interval,this),fe},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ce&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ht.VERSION="2.0.4",ht.defaults={domEvents:!1,touchAction:ie,enable:!0,inputTarget:null,inputClass:null,preset:[[st,{enable:!1}],[ot,{enable:!1},["rotate"]],[rt,{direction:zt}],[it,{direction:zt},["swipe"]],[at],[at,{event:"doubletap",taps:2},["tap"]],[nt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}}
var me=1,ge=2
dt.prototype={set:function(t){return u(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?ge:me},recognize:function(t){var e=this.session
if(!e.stopped){this.touchAction.preventDefaults(t)
var i,o=this.recognizers,n=e.curRecognizer;(!n||n&&n.state&ce)&&(n=e.curRecognizer=null)
for(var s=0;s<o.length;)i=o[s],e.stopped===ge||n&&i!=n&&!i.canRecognizeWith(n)?i.reset():i.recognize(t),!n&&i.state&(de|le|ue)&&(n=e.curRecognizer=i),s++}},get:function(t){if(t instanceof K)return t
for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i]
return null},add:function(t){if(d(t,"add",this))return this
var e=this.get(t.options.event)
return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(d(t,"remove",this))return this
var e=this.recognizers
return t=this.get(t),e.splice(x(e,t),1),this.touchAction.update(),this},on:function(t,e){var i=this.handlers
return l(w(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this},off:function(t,e){var i=this.handlers
return l(w(t),function(t){e?i[t].splice(x(i[t],e),1):delete i[t]}),this},emit:function(t,e){this.options.domEvents&&ut(t,e)
var i=this.handlers[t]&&this.handlers[t].slice()
if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()}
for(var o=0;o<i.length;)i[o](e),o++}},destroy:function(){this.element&&lt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},u(ht,{INPUT_START:Mt,INPUT_MOVE:St,INPUT_END:Et,INPUT_CANCEL:Pt,STATE_POSSIBLE:he,STATE_BEGAN:de,STATE_CHANGED:le,STATE_ENDED:ue,STATE_RECOGNIZED:ce,STATE_CANCELLED:pe,STATE_FAILED:fe,DIRECTION_NONE:Nt,DIRECTION_LEFT:It,DIRECTION_RIGHT:At,DIRECTION_UP:jt,DIRECTION_DOWN:Lt,DIRECTION_HORIZONTAL:zt,DIRECTION_VERTICAL:Rt,DIRECTION_ALL:Ft,Manager:dt,Input:M,TouchAction:X,TouchInput:q,MouseInput:Y,PointerEventInput:W,TouchMouseInput:V,SingleTouchInput:G,Recognizer:K,AttrRecognizer:et,Tap:at,Pan:it,Swipe:rt,Pinch:ot,Rotate:st,Press:nt,on:v,off:y,each:l,merge:c,extend:u,inherit:p,bindFn:f,prefixed:D}),"function"==ft&&i(23)?(o=function(){return ht}.call(e,i,e,t),!(o!==a&&(t.exports=o))):"undefined"!=typeof t&&t.exports?t.exports=ht:n[r]=ht}(window,document,"Hammer")},function(t,e){(function(e){t.exports=e}).call(e,{})},function(t,e,i){"use strict"
function o(t,e){var i=a().hours(0).minutes(0).seconds(0).milliseconds(0)
this.start=i.clone().add(-3,"days").valueOf(),this.end=i.clone().add(4,"days").valueOf(),this.body=t,this.deltaDifference=0,this.scaleOffset=0,this.startToFront=!1,this.endToFront=!0,this.defaultOptions={start:null,end:null,moment:a,direction:"horizontal",moveable:!0,zoomable:!0,min:null,max:null,zoomMin:10,zoomMax:31536e10},this.options=r.extend({},this.defaultOptions),this.props={touch:{}},this.animationTimer=null,this.body.emitter.on("panstart",this._onDragStart.bind(this)),this.body.emitter.on("panmove",this._onDrag.bind(this)),this.body.emitter.on("panend",this._onDragEnd.bind(this)),this.body.emitter.on("mousewheel",this._onMouseWheel.bind(this)),this.body.emitter.on("touch",this._onTouch.bind(this)),this.body.emitter.on("pinch",this._onPinch.bind(this)),this.setOptions(e)}function n(t){if("horizontal"!=t&&"vertical"!=t)throw new TypeError('Unknown direction "'+t+'". Choose "horizontal" or "vertical".')}function s(t,e){return{x:t.x-r.getAbsoluteLeft(e),y:t.y-r.getAbsoluteTop(e)}}var r=i(1),a=(i(25),i(2)),h=i(26),d=i(27)
o.prototype=new h,o.prototype.setOptions=function(t){if(t){var e=["direction","min","max","zoomMin","zoomMax","moveable","zoomable","moment","activate","hiddenDates","zoomKey"]
r.selectiveExtend(e,this.options,t),("start"in t||"end"in t)&&this.setRange(t.start,t.end)}},o.prototype.setRange=function(t,e,i,o){o!==!0&&(o=!1)
var n=void 0!=t?r.convert(t,"Date").valueOf():null,s=void 0!=e?r.convert(e,"Date").valueOf():null
if(this._cancelAnimation(),i){var a=this,h=this.start,l=this.end,u="object"==typeof i&&"duration"in i?i.duration:500,c="object"==typeof i&&"easingFunction"in i?i.easingFunction:"easeInOutQuad",p=r.easingFunctions[c]
if(!p)throw new Error("Unknown easing function "+JSON.stringify(c)+". Choose from: "+Object.keys(r.easingFunctions).join(", "))
var f=(new Date).valueOf(),m=!1,g=function b(){if(!a.props.touch.dragging){var t=(new Date).valueOf(),e=t-f,i=p(e/u),r=e>u,c=r||null===n?n:h+(n-h)*i,g=r||null===s?s:l+(s-l)*i
v=a._applyRange(c,g),d.updateHiddenDates(a.options.moment,a.body,a.options.hiddenDates),m=m||v,v&&a.body.emitter.emit("rangechange",{start:new Date(a.start),end:new Date(a.end),byUser:o}),r?m&&a.body.emitter.emit("rangechanged",{start:new Date(a.start),end:new Date(a.end),byUser:o}):a.animationTimer=setTimeout(b,20)}}
return g()}var v=this._applyRange(n,s)
if(d.updateHiddenDates(this.options.moment,this.body,this.options.hiddenDates),v){var y={start:new Date(this.start),end:new Date(this.end),byUser:o}
this.body.emitter.emit("rangechange",y),this.body.emitter.emit("rangechanged",y)}},o.prototype._cancelAnimation=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.animationTimer=null)},o.prototype._applyRange=function(t,e){var i,o=null!=t?r.convert(t,"Date").valueOf():this.start,n=null!=e?r.convert(e,"Date").valueOf():this.end,s=null!=this.options.max?r.convert(this.options.max,"Date").valueOf():null,a=null!=this.options.min?r.convert(this.options.min,"Date").valueOf():null
if(isNaN(o)||null===o)throw new Error('Invalid start "'+t+'"')
if(isNaN(n)||null===n)throw new Error('Invalid end "'+e+'"')
if(o>n&&(n=o),null!==a&&a>o&&(i=a-o,o+=i,n+=i,null!=s&&n>s&&(n=s)),null!==s&&n>s&&(i=n-s,o-=i,n-=i,null!=a&&a>o&&(o=a)),null!==this.options.zoomMin){var h=parseFloat(this.options.zoomMin)
0>h&&(h=0),h>n-o&&(this.end-this.start===h&&o>this.start&&n<this.end?(o=this.start,n=this.end):(i=h-(n-o),o-=i/2,n+=i/2))}if(null!==this.options.zoomMax){var d=parseFloat(this.options.zoomMax)
0>d&&(d=0),n-o>d&&(this.end-this.start===d&&o<this.start&&n>this.end?(o=this.start,n=this.end):(i=n-o-d,o+=i/2,n-=i/2))}var l=this.start!=o||this.end!=n
return o>=this.start&&o<=this.end||n>=this.start&&n<=this.end||this.start>=o&&this.start<=n||this.end>=o&&this.end<=n||this.body.emitter.emit("checkRangedItems"),this.start=o,this.end=n,l},o.prototype.getRange=function(){return{start:this.start,end:this.end}},o.prototype.conversion=function(t,e){return o.conversion(this.start,this.end,t,e)},o.conversion=function(t,e,i,o){return void 0===o&&(o=0),0!=i&&e-t!=0?{offset:t,scale:i/(e-t-o)}:{offset:0,scale:1}},o.prototype._onDragStart=function(t){this.deltaDifference=0,this.previousDelta=0,this.options.moveable&&this._isInsideRange(t)&&this.props.touch.allowDragging&&(this.props.touch.start=this.start,this.props.touch.end=this.end,this.props.touch.dragging=!0,this.body.dom.root&&(this.body.dom.root.style.cursor="move"))},o.prototype._onDrag=function(t){if(this.props.touch.dragging&&this.options.moveable&&this.props.touch.allowDragging){var e=this.options.direction
n(e)
var i="horizontal"==e?t.deltaX:t.deltaY
i-=this.deltaDifference
var o=this.props.touch.end-this.props.touch.start,s=d.getHiddenDurationBetween(this.body.hiddenDates,this.start,this.end)
o-=s
var r="horizontal"==e?this.body.domProps.center.width:this.body.domProps.center.height,a=-i/r*o,h=this.props.touch.start+a,l=this.props.touch.end+a,u=d.snapAwayFromHidden(this.body.hiddenDates,h,this.previousDelta-i,!0),c=d.snapAwayFromHidden(this.body.hiddenDates,l,this.previousDelta-i,!0)
if(u!=h||c!=l)return this.deltaDifference+=i,this.props.touch.start=u,this.props.touch.end=c,void this._onDrag(t)
this.previousDelta=i,this._applyRange(h,l),this.body.emitter.emit("rangechange",{start:new Date(this.start),end:new Date(this.end),byUser:!0})}},o.prototype._onDragEnd=function(t){this.props.touch.dragging&&this.options.moveable&&this.props.touch.allowDragging&&(this.props.touch.dragging=!1,this.body.dom.root&&(this.body.dom.root.style.cursor="auto"),this.body.emitter.emit("rangechanged",{start:new Date(this.start),end:new Date(this.end),byUser:!0}))},o.prototype._onMouseWheel=function(t){if(this.options.zoomable&&this.options.moveable&&this._isInsideRange(t)&&(!this.options.zoomKey||t[this.options.zoomKey])){var e=0
if(t.wheelDelta?e=t.wheelDelta/120:t.detail&&(e=-t.detail/3),e){var i
i=0>e?1-e/5:1/(1+e/5)
var o=s({x:t.clientX,y:t.clientY},this.body.dom.center),n=this._pointerToDate(o)
this.zoom(i,n,e)}t.preventDefault()}},o.prototype._onTouch=function(t){this.props.touch.start=this.start,this.props.touch.end=this.end,this.props.touch.allowDragging=!0,this.props.touch.center=null,this.scaleOffset=0,this.deltaDifference=0},o.prototype._onPinch=function(t){if(this.options.zoomable&&this.options.moveable){this.props.touch.allowDragging=!1,this.props.touch.center||(this.props.touch.center=s(t.center,this.body.dom.center))
var e=1/(t.scale+this.scaleOffset),i=this._pointerToDate(this.props.touch.center),o=d.getHiddenDurationBetween(this.options.moment,this.body.hiddenDates,this.start,this.end),n=d.getHiddenDurationBefore(this.options.moment,this.body.hiddenDates,this,i),r=o-n,a=i-n+(this.props.touch.start-(i-n))*e,h=i+r+(this.props.touch.end-(i+r))*e
this.startToFront=0>=1-e,this.endToFront=0>=e-1
var l=d.snapAwayFromHidden(this.body.hiddenDates,a,1-e,!0),u=d.snapAwayFromHidden(this.body.hiddenDates,h,e-1,!0)
l==a&&u==h||(this.props.touch.start=l,this.props.touch.end=u,this.scaleOffset=1-t.scale,a=l,h=u),this.setRange(a,h,!1,!0),this.startToFront=!1,this.endToFront=!0}},o.prototype._isInsideRange=function(t){var e=t.center?t.center.x:t.clientX,i=e-r.getAbsoluteLeft(this.body.dom.centerContainer),o=this.body.util.toTime(i)
return o>=this.start&&o<=this.end},o.prototype._pointerToDate=function(t){var e,i=this.options.direction
if(n(i),"horizontal"==i)return this.body.util.toTime(t.x).valueOf()
var o=this.body.domProps.center.height
return e=this.conversion(o),t.y/e.scale+e.offset},o.prototype.zoom=function(t,e,i){null==e&&(e=(this.start+this.end)/2)
var o=d.getHiddenDurationBetween(this.body.hiddenDates,this.start,this.end),n=d.getHiddenDurationBefore(this.options.moment,this.body.hiddenDates,this,e),s=o-n,r=e-n+(this.start-(e-n))*t,a=e+s+(this.end-(e+s))*t
this.startToFront=!(i>0),this.endToFront=!(-i>0)
var h=d.snapAwayFromHidden(this.body.hiddenDates,r,i,!0),l=d.snapAwayFromHidden(this.body.hiddenDates,a,-i,!0)
h==r&&l==a||(r=h,a=l),this.setRange(r,a,!1,!0),this.startToFront=!1,this.endToFront=!0},o.prototype.move=function(t){var e=this.end-this.start,i=this.start+e*t,o=this.end+e*t
this.start=i,this.end=o},o.prototype.moveTo=function(t){var e=(this.start+this.end)/2,i=e-t,o=this.start-i,n=this.end-i
this.setRange(o,n)},t.exports=o},function(t,e,i){"use strict"
i(20)
e.onTouch=function(t,e){e.inputHandler=function(t){t.isFirst&&!o&&(e(t),o=!0,setTimeout(function(){o=!1},0))},t.on("hammer.input",e.inputHandler)}
var o=!1
e.onRelease=function(t,e){return e.inputHandler=function(t){t.isFinal&&!n&&(e(t),n=!0,setTimeout(function(){n=!1},0))},t.on("hammer.input",e.inputHandler)}
var n=!1
e.offTouch=function(t,e){t.off("hammer.input",e.inputHandler)},e.offRelease=e.offTouch},function(t,e){"use strict"
function i(t,e){this.options=null,this.props=null}i.prototype.setOptions=function(t){t&&util.extend(this.options,t)},i.prototype.redraw=function(){return!1},i.prototype.destroy=function(){},i.prototype._isResized=function(){var t=this.props._previousWidth!==this.props.width||this.props._previousHeight!==this.props.height
return this.props._previousWidth=this.props.width,this.props._previousHeight=this.props.height,t},t.exports=i},function(t,e){"use strict"
e.convertHiddenOptions=function(t,e,i){if(e.hiddenDates=[],i&&1==Array.isArray(i)){for(var o=0;o<i.length;o++)if(void 0===i[o].repeat){var n={}
n.start=t(i[o].start).toDate().valueOf(),n.end=t(i[o].end).toDate().valueOf(),e.hiddenDates.push(n)}e.hiddenDates.sort(function(t,e){return t.start-e.start})}},e.updateHiddenDates=function(t,i,o){if(o&&void 0!==i.domProps.centerContainer.width){e.convertHiddenOptions(t,i,o)
for(var n=t(i.range.start),s=t(i.range.end),r=i.range.end-i.range.start,a=r/i.domProps.centerContainer.width,h=0;h<o.length;h++)if(void 0!==o[h].repeat){var d=t(o[h].start),l=t(o[h].end)
if("Invalid Date"==d._d)throw new Error("Supplied start date is not valid: "+o[h].start)
if("Invalid Date"==l._d)throw new Error("Supplied end date is not valid: "+o[h].end)
var u=l-d
if(u>=4*a){var c=0,p=s.clone()
switch(o[h].repeat){case"daily":d.day()!=l.day()&&(c=1),d.dayOfYear(n.dayOfYear()),d.year(n.year()),d.subtract(7,"days"),l.dayOfYear(n.dayOfYear()),l.year(n.year()),l.subtract(7-c,"days"),p.add(1,"weeks")
break
case"weekly":var f=l.diff(d,"days"),m=d.day()
d.date(n.date()),d.month(n.month()),d.year(n.year()),l=d.clone(),d.day(m),l.day(m),l.add(f,"days"),d.subtract(1,"weeks"),l.subtract(1,"weeks"),p.add(1,"weeks")
break
case"monthly":d.month()!=l.month()&&(c=1),d.month(n.month()),d.year(n.year()),d.subtract(1,"months"),l.month(n.month()),l.year(n.year()),l.subtract(1,"months"),l.add(c,"months"),p.add(1,"months")
break
case"yearly":d.year()!=l.year()&&(c=1),d.year(n.year()),d.subtract(1,"years"),l.year(n.year()),l.subtract(1,"years"),l.add(c,"years"),p.add(1,"years")
break
default:return void console.log("Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:",o[h].repeat)}for(;p>d;)switch(i.hiddenDates.push({start:d.valueOf(),end:l.valueOf()}),o[h].repeat){case"daily":d.add(1,"days"),l.add(1,"days")
break
case"weekly":d.add(1,"weeks"),l.add(1,"weeks")
break
case"monthly":d.add(1,"months"),l.add(1,"months")
break
case"yearly":d.add(1,"y"),l.add(1,"y")
break
default:return void console.log("Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:",o[h].repeat)}i.hiddenDates.push({start:d.valueOf(),end:l.valueOf()})}}e.removeDuplicates(i)
var g=e.isHidden(i.range.start,i.hiddenDates),v=e.isHidden(i.range.end,i.hiddenDates),y=i.range.start,b=i.range.end
1==g.hidden&&(y=1==i.range.startToFront?g.startDate-1:g.endDate+1),1==v.hidden&&(b=1==i.range.endToFront?v.startDate-1:v.endDate+1),1!=g.hidden&&1!=v.hidden||i.range._applyRange(y,b)}},e.removeDuplicates=function(t){for(var e=t.hiddenDates,i=[],o=0;o<e.length;o++)for(var n=0;n<e.length;n++)o!=n&&1!=e[n].remove&&1!=e[o].remove&&(e[n].start>=e[o].start&&e[n].end<=e[o].end?e[n].remove=!0:e[n].start>=e[o].start&&e[n].start<=e[o].end?(e[o].end=e[n].end,e[n].remove=!0):e[n].end>=e[o].start&&e[n].end<=e[o].end&&(e[o].start=e[n].start,e[n].remove=!0))
for(var o=0;o<e.length;o++)e[o].remove!==!0&&i.push(e[o])
t.hiddenDates=i,t.hiddenDates.sort(function(t,e){return t.start-e.start})},e.printDates=function(t){for(var e=0;e<t.length;e++)console.log(e,new Date(t[e].start),new Date(t[e].end),t[e].start,t[e].end,t[e].remove)},e.stepOverHiddenDates=function(t,e,i){for(var o=!1,n=e.current.valueOf(),s=0;s<e.hiddenDates.length;s++){var r=e.hiddenDates[s].start,a=e.hiddenDates[s].end
if(n>=r&&a>n){o=!0
break}}if(1==o&&n<e._end.valueOf()&&n!=i){var h=t(i),d=t(a)
h.year()!=d.year()?e.switchedYear=!0:h.month()!=d.month()?e.switchedMonth=!0:h.dayOfYear()!=d.dayOfYear()&&(e.switchedDay=!0),e.current=d}},e.toScreen=function(t,i,o){if(0==t.body.hiddenDates.length){var n=t.range.conversion(o)
return(i.valueOf()-n.offset)*n.scale}var s=e.isHidden(i,t.body.hiddenDates)
1==s.hidden&&(i=s.startDate)
var r=e.getHiddenDurationBetween(t.body.hiddenDates,t.range.start,t.range.end)
i=e.correctTimeForHidden(t.options.moment,t.body.hiddenDates,t.range,i)
var n=t.range.conversion(o,r)
return(i.valueOf()-n.offset)*n.scale},e.toTime=function(t,i,o){if(0==t.body.hiddenDates.length){var n=t.range.conversion(o)
return new Date(i/n.scale+n.offset)}var s=e.getHiddenDurationBetween(t.body.hiddenDates,t.range.start,t.range.end),r=t.range.end-t.range.start-s,a=r*i/o,h=e.getAccumulatedHiddenDuration(t.body.hiddenDates,t.range,a),d=new Date(h+a+t.range.start)
return d},e.getHiddenDurationBetween=function(t,e,i){for(var o=0,n=0;n<t.length;n++){var s=t[n].start,r=t[n].end
s>=e&&i>r&&(o+=r-s)}return o},e.correctTimeForHidden=function(t,i,o,n){return n=t(n).toDate().valueOf(),n-=e.getHiddenDurationBefore(t,i,o,n)},e.getHiddenDurationBefore=function(t,e,i,o){var n=0
o=t(o).toDate().valueOf()
for(var s=0;s<e.length;s++){var r=e[s].start,a=e[s].end
r>=i.start&&a<i.end&&o>=a&&(n+=a-r)}return n},e.getAccumulatedHiddenDuration=function(t,e,i){for(var o=0,n=0,s=e.start,r=0;r<t.length;r++){var a=t[r].start,h=t[r].end
if(a>=e.start&&h<e.end){if(n+=a-s,s=h,n>=i)break
o+=h-a}}return o},e.snapAwayFromHidden=function(t,i,o,n){var s=e.isHidden(i,t)
return 1==s.hidden?0>o?1==n?s.startDate-(s.endDate-i)-1:s.startDate-1:1==n?s.endDate+(i-s.startDate)+1:s.endDate+1:i},e.isHidden=function(t,e){for(var i=0;i<e.length;i++){var o=e[i].start,n=e[i].end
if(t>=o&&n>t)return{hidden:!0,startDate:o,endDate:n}}return{hidden:!1,startDate:o,endDate:n}}},function(t,e,i){"use strict"
function o(){}var n=i(12),s=i(20),r=i(25),a=i(1),h=(i(8),i(10),i(24),i(29),i(39)),d=i(40),l=i(27),u=i(42)
n(o.prototype),o.prototype._create=function(t){function e(t){i.isActive()&&i.emit("mousewheel",t)}this.dom={},this.dom.container=t,this.dom.root=document.createElement("div"),this.dom.background=document.createElement("div"),this.dom.backgroundVertical=document.createElement("div"),this.dom.backgroundHorizontal=document.createElement("div"),this.dom.centerContainer=document.createElement("div"),this.dom.leftContainer=document.createElement("div"),this.dom.rightContainer=document.createElement("div"),this.dom.center=document.createElement("div"),this.dom.left=document.createElement("div"),this.dom.right=document.createElement("div"),this.dom.top=document.createElement("div"),this.dom.bottom=document.createElement("div"),this.dom.shadowTop=document.createElement("div"),this.dom.shadowBottom=document.createElement("div"),this.dom.shadowTopLeft=document.createElement("div"),this.dom.shadowBottomLeft=document.createElement("div"),this.dom.shadowTopRight=document.createElement("div"),this.dom.shadowBottomRight=document.createElement("div"),this.dom.root.className="vis-timeline",this.dom.background.className="vis-panel vis-background",this.dom.backgroundVertical.className="vis-panel vis-background vis-vertical",this.dom.backgroundHorizontal.className="vis-panel vis-background vis-horizontal",this.dom.centerContainer.className="vis-panel vis-center",this.dom.leftContainer.className="vis-panel vis-left",this.dom.rightContainer.className="vis-panel vis-right",this.dom.top.className="vis-panel vis-top",this.dom.bottom.className="vis-panel vis-bottom",this.dom.left.className="vis-content",this.dom.center.className="vis-content",this.dom.right.className="vis-content",this.dom.shadowTop.className="vis-shadow vis-top",this.dom.shadowBottom.className="vis-shadow vis-bottom",this.dom.shadowTopLeft.className="vis-shadow vis-top",this.dom.shadowBottomLeft.className="vis-shadow vis-bottom",this.dom.shadowTopRight.className="vis-shadow vis-top",this.dom.shadowBottomRight.className="vis-shadow vis-bottom",this.dom.root.appendChild(this.dom.background),this.dom.root.appendChild(this.dom.backgroundVertical),this.dom.root.appendChild(this.dom.backgroundHorizontal),this.dom.root.appendChild(this.dom.centerContainer),this.dom.root.appendChild(this.dom.leftContainer),this.dom.root.appendChild(this.dom.rightContainer),this.dom.root.appendChild(this.dom.top),this.dom.root.appendChild(this.dom.bottom),this.dom.centerContainer.appendChild(this.dom.center),this.dom.leftContainer.appendChild(this.dom.left),this.dom.rightContainer.appendChild(this.dom.right),this.dom.centerContainer.appendChild(this.dom.shadowTop),this.dom.centerContainer.appendChild(this.dom.shadowBottom),this.dom.leftContainer.appendChild(this.dom.shadowTopLeft),this.dom.leftContainer.appendChild(this.dom.shadowBottomLeft),this.dom.rightContainer.appendChild(this.dom.shadowTopRight),this.dom.rightContainer.appendChild(this.dom.shadowBottomRight),this.on("rangechange",function(){this._redraw()}.bind(this)),this.on("touch",this._onTouch.bind(this)),this.on("pan",this._onDrag.bind(this))
var i=this
this.on("change",function(t){t&&1==t.queue?i._redrawTimer||(i._redrawTimer=setTimeout(function(){i._redrawTimer=null,i._redraw()},0)):i._redraw()}),this.hammer=new s(this.dom.root),this.hammer.get("pinch").set({enable:!0}),this.hammer.get("pan").set({threshold:5,direction:30}),this.listeners={}
var o=["tap","doubletap","press","pinch","pan","panstart","panmove","panend"]
if(o.forEach(function(t){var e=function(e){i.isActive()&&i.emit(t,e)}
i.hammer.on(t,e),i.listeners[t]=e}),r.onTouch(this.hammer,function(t){i.emit("touch",t)}.bind(this)),r.onRelease(this.hammer,function(t){i.emit("release",t)}.bind(this)),this.dom.root.addEventListener("mousewheel",e),this.dom.root.addEventListener("DOMMouseScroll",e),this.props={root:{},background:{},centerContainer:{},leftContainer:{},rightContainer:{},center:{},left:{},right:{},top:{},bottom:{},border:{},scrollTop:0,scrollTopMin:0},this.customTimes=[],this.touch={},this.redrawCount=0,!t)throw new Error("No container provided")
t.appendChild(this.dom.root)},o.prototype.setOptions=function(t){if(t){var e=["width","height","minHeight","maxHeight","autoResize","start","end","clickToUse","dataAttributes","hiddenDates","locale","locales","moment","throttleRedraw"]
if(a.selectiveExtend(e,this.options,t),"orientation"in t&&("string"==typeof t.orientation?this.options.orientation={item:t.orientation,axis:t.orientation}:"object"==typeof t.orientation&&("item"in t.orientation&&(this.options.orientation.item=t.orientation.item),"axis"in t.orientation&&(this.options.orientation.axis=t.orientation.axis))),"both"===this.options.orientation.axis){if(!this.timeAxis2){var i=this.timeAxis2=new h(this.body)
i.setOptions=function(t){var e=t?a.extend({},t):{}
e.orientation="top",h.prototype.setOptions.call(i,e)},this.components.push(i)}}else if(this.timeAxis2){var o=this.components.indexOf(this.timeAxis2);-1!==o&&this.components.splice(o,1),this.timeAxis2.destroy(),this.timeAxis2=null}if("function"==typeof t.drawPoints&&(t.drawPoints={onRender:t.drawPoints}),"hiddenDates"in this.options&&l.convertHiddenOptions(this.options.moment,this.body,this.options.hiddenDates),"clickToUse"in t&&(t.clickToUse?this.activator||(this.activator=new d(this.dom.root)):this.activator&&(this.activator.destroy(),delete this.activator)),"showCustomTime"in t)throw new Error("Option `showCustomTime` is deprecated. Create a custom time bar via timeline.addCustomTime(time [, id])")
this._initAutoResize()}if(this.components.forEach(function(e){return e.setOptions(t)}),"configure"in t){this.configurator||(this.configurator=this._createConfigurator()),this.configurator.setOptions(t.configure)
var n=a.deepExtend({},this.options)
this.components.forEach(function(t){a.deepExtend(n,t.options)}),this.configurator.setModuleOptions({global:n})}this._origRedraw||(this._origRedraw=this._redraw.bind(this)),this._redraw=a.throttle(this._origRedraw,this.options.throttleRedraw),this._redraw()},o.prototype.isActive=function(){return!this.activator||this.activator.active},o.prototype.destroy=function(){this.setItems(null),this.setGroups(null),this.off(),this._stopAutoResize(),this.dom.root.parentNode&&this.dom.root.parentNode.removeChild(this.dom.root),this.dom=null,this.activator&&(this.activator.destroy(),delete this.activator)
for(var t in this.listeners)this.listeners.hasOwnProperty(t)&&delete this.listeners[t]
this.listeners=null,this.hammer=null,this.components.forEach(function(t){return t.destroy()}),this.body=null},o.prototype.setCustomTime=function(t,e){var i=this.customTimes.filter(function(t){return e===t.options.id})
if(0===i.length)throw new Error("No custom time bar found with id "+JSON.stringify(e))
i.length>0&&i[0].setCustomTime(t)},o.prototype.getCustomTime=function(t){var e=this.customTimes.filter(function(e){return e.options.id===t})
if(0===e.length)throw new Error("No custom time bar found with id "+JSON.stringify(t))
return e[0].getCustomTime()},o.prototype.getEventProperties=function(t){return{event:t}},o.prototype.addCustomTime=function(t,e){var i=void 0!==t?a.convert(t,"Date").valueOf():new Date,o=this.customTimes.some(function(t){return t.options.id===e})
if(o)throw new Error("A custom time with id "+JSON.stringify(e)+" already exists")
var n=new u(this.body,a.extend({},this.options,{time:i,id:e}))
return this.customTimes.push(n),this.components.push(n),this._redraw(),e},o.prototype.removeCustomTime=function(t){var e=this.customTimes.filter(function(e){return e.options.id===t})
if(0===e.length)throw new Error("No custom time bar found with id "+JSON.stringify(t))
e.forEach(function(t){this.customTimes.splice(this.customTimes.indexOf(t),1),this.components.splice(this.components.indexOf(t),1),t.destroy()}.bind(this))},o.prototype.getVisibleItems=function(){return this.itemSet&&this.itemSet.getVisibleItems()||[]},o.prototype.fit=function(t){var e=this.getDataRange()
if(null!==e.min||null!==e.max){var i=e.max-e.min,o=new Date(e.min.valueOf()-.01*i),n=new Date(e.max.valueOf()+.01*i),s=t&&void 0!==t.animation?t.animation:!0
this.range.setRange(o,n,s)}},o.prototype.getDataRange=function(){throw new Error("Cannot invoke abstract method getDataRange")},o.prototype.setWindow=function(t,e,i){var o
if(1==arguments.length){var n=arguments[0]
o=void 0!==n.animation?n.animation:!0,this.range.setRange(n.start,n.end,o)}else o=i&&void 0!==i.animation?i.animation:!0,this.range.setRange(t,e,o)},o.prototype.moveTo=function(t,e){var i=this.range.end-this.range.start,o=a.convert(t,"Date").valueOf(),n=o-i/2,s=o+i/2,r=e&&void 0!==e.animation?e.animation:!0
this.range.setRange(n,s,r)},o.prototype.getWindow=function(){var t=this.range.getRange()
return{start:new Date(t.start),end:new Date(t.end)}},o.prototype.redraw=function(){this._redraw()},o.prototype._redraw=function(){var t=!1,e=this.options,i=this.props,o=this.dom
if(o){l.updateHiddenDates(this.options.moment,this.body,this.options.hiddenDates),"top"==e.orientation?(a.addClassName(o.root,"vis-top"),a.removeClassName(o.root,"vis-bottom")):(a.removeClassName(o.root,"vis-top"),a.addClassName(o.root,"vis-bottom")),o.root.style.maxHeight=a.option.asSize(e.maxHeight,""),o.root.style.minHeight=a.option.asSize(e.minHeight,""),o.root.style.width=a.option.asSize(e.width,""),i.border.left=(o.centerContainer.offsetWidth-o.centerContainer.clientWidth)/2,i.border.right=i.border.left,i.border.top=(o.centerContainer.offsetHeight-o.centerContainer.clientHeight)/2,i.border.bottom=i.border.top
var n=o.root.offsetHeight-o.root.clientHeight,s=o.root.offsetWidth-o.root.clientWidth
0===o.centerContainer.clientHeight&&(i.border.left=i.border.top,i.border.right=i.border.left),0===o.root.clientHeight&&(s=n),i.center.height=o.center.offsetHeight,i.left.height=o.left.offsetHeight,i.right.height=o.right.offsetHeight,i.top.height=o.top.clientHeight||-i.border.top,i.bottom.height=o.bottom.clientHeight||-i.border.bottom
var r=Math.max(i.left.height,i.center.height,i.right.height),h=i.top.height+r+i.bottom.height+n+i.border.top+i.border.bottom
o.root.style.height=a.option.asSize(e.height,h+"px"),i.root.height=o.root.offsetHeight,i.background.height=i.root.height-n
var d=i.root.height-i.top.height-i.bottom.height-n
i.centerContainer.height=d,i.leftContainer.height=d,i.rightContainer.height=i.leftContainer.height,i.root.width=o.root.offsetWidth,i.background.width=i.root.width-s,i.left.width=o.leftContainer.clientWidth||-i.border.left,i.leftContainer.width=i.left.width,i.right.width=o.rightContainer.clientWidth||-i.border.right,i.rightContainer.width=i.right.width
var u=i.root.width-i.left.width-i.right.width-s
i.center.width=u,i.centerContainer.width=u,i.top.width=u,i.bottom.width=u,o.background.style.height=i.background.height+"px",o.backgroundVertical.style.height=i.background.height+"px",o.backgroundHorizontal.style.height=i.centerContainer.height+"px",o.centerContainer.style.height=i.centerContainer.height+"px",o.leftContainer.style.height=i.leftContainer.height+"px",o.rightContainer.style.height=i.rightContainer.height+"px",o.background.style.width=i.background.width+"px",o.backgroundVertical.style.width=i.centerContainer.width+"px",o.backgroundHorizontal.style.width=i.background.width+"px",o.centerContainer.style.width=i.center.width+"px",o.top.style.width=i.top.width+"px",o.bottom.style.width=i.bottom.width+"px",o.background.style.left="0",o.background.style.top="0",o.backgroundVertical.style.left=i.left.width+i.border.left+"px",o.backgroundVertical.style.top="0",o.backgroundHorizontal.style.left="0",o.backgroundHorizontal.style.top=i.top.height+"px",o.centerContainer.style.left=i.left.width+"px",o.centerContainer.style.top=i.top.height+"px",o.leftContainer.style.left="0",o.leftContainer.style.top=i.top.height+"px",o.rightContainer.style.left=i.left.width+i.center.width+"px",o.rightContainer.style.top=i.top.height+"px",o.top.style.left=i.left.width+"px",o.top.style.top="0",o.bottom.style.left=i.left.width+"px",o.bottom.style.top=i.top.height+i.centerContainer.height+"px",this._updateScrollTop()
var c=this.props.scrollTop
"top"!=e.orientation.item&&(c+=Math.max(this.props.centerContainer.height-this.props.center.height-this.props.border.top-this.props.border.bottom,0)),o.center.style.left="0",o.center.style.top=c+"px",o.left.style.left="0",o.left.style.top=c+"px",o.right.style.left="0",o.right.style.top=c+"px"
var p=0==this.props.scrollTop?"hidden":"",f=this.props.scrollTop==this.props.scrollTopMin?"hidden":""
if(o.shadowTop.style.visibility=p,o.shadowBottom.style.visibility=f,o.shadowTopLeft.style.visibility=p,o.shadowBottomLeft.style.visibility=f,o.shadowTopRight.style.visibility=p,o.shadowBottomRight.style.visibility=f,this.components.forEach(function(e){t=e.redraw()||t}),t){var m=3
this.redrawCount<m?(this.redrawCount++,this._redraw()):console.log("WARNING: infinite loop in redraw?"),this.redrawCount=0}}},o.prototype.repaint=function(){throw new Error("Function repaint is deprecated. Use redraw instead.")},o.prototype.setCurrentTime=function(t){if(!this.currentTime)throw new Error("Option showCurrentTime must be true")
this.currentTime.setCurrentTime(t)},o.prototype.getCurrentTime=function(){if(!this.currentTime)throw new Error("Option showCurrentTime must be true")
return this.currentTime.getCurrentTime()},o.prototype._toTime=function(t){return l.toTime(this,t,this.props.center.width)},o.prototype._toGlobalTime=function(t){return l.toTime(this,t,this.props.root.width)},o.prototype._toScreen=function(t){return l.toScreen(this,t,this.props.center.width)},o.prototype._toGlobalScreen=function(t){return l.toScreen(this,t,this.props.root.width)},o.prototype._initAutoResize=function(){1==this.options.autoResize?this._startAutoResize():this._stopAutoResize()},o.prototype._startAutoResize=function(){var t=this
this._stopAutoResize(),this._onResize=function(){return 1!=t.options.autoResize?void t._stopAutoResize():void(t.dom.root&&(t.dom.root.offsetWidth==t.props.lastWidth&&t.dom.root.offsetHeight==t.props.lastHeight||(t.props.lastWidth=t.dom.root.offsetWidth,t.props.lastHeight=t.dom.root.offsetHeight,t.emit("change"))))},a.addEventListener(window,"resize",this._onResize),this.watchTimer=setInterval(this._onResize,1e3)},o.prototype._stopAutoResize=function(){this.watchTimer&&(clearInterval(this.watchTimer),this.watchTimer=void 0),this._onResize&&(a.removeEventListener(window,"resize",this._onResize),this._onResize=null)},o.prototype._onTouch=function(t){this.touch.allowDragging=!0,this.touch.initialScrollTop=this.props.scrollTop},o.prototype._onPinch=function(t){this.touch.allowDragging=!1},o.prototype._onDrag=function(t){if(this.touch.allowDragging){var e=t.deltaY,i=this._getScrollTop(),o=this._setScrollTop(this.touch.initialScrollTop+e)
o!=i&&(this._redraw(),this.emit("verticalDrag"))}},o.prototype._setScrollTop=function(t){return this.props.scrollTop=t,this._updateScrollTop(),this.props.scrollTop},o.prototype._updateScrollTop=function(){var t=Math.min(this.props.centerContainer.height-this.props.center.height,0)
return t!=this.props.scrollTopMin&&("top"!=this.options.orientation.item&&(this.props.scrollTop+=t-this.props.scrollTopMin),this.props.scrollTopMin=t),this.props.scrollTop>0&&(this.props.scrollTop=0),this.props.scrollTop<t&&(this.props.scrollTop=t),this.props.scrollTop},o.prototype._getScrollTop=function(){return this.props.scrollTop},o.prototype._createConfigurator=function(){throw new Error("Cannot invoke abstract method _createConfigurator")},t.exports=o},function(t,e,i){"use strict"
function o(t,e){this.body=t,this.defaultOptions={type:null,orientation:{item:"bottom"},align:"auto",stack:!0,groupOrderSwap:function(t,e,i){var o=e.order
e.order=t.order,t.order=o},groupOrder:"order",selectable:!0,multiselect:!1,editable:{updateTime:!1,updateGroup:!1,add:!1,remove:!1},groupEditable:{order:!1,add:!1,remove:!1},snap:h.snap,onAdd:function(t,e){e(t)},onUpdate:function(t,e){e(t)},onMove:function(t,e){e(t)},onRemove:function(t,e){e(t)},onMoving:function(t,e){e(t)},onAddGroup:function(t,e){e(t)},onMoveGroup:function(t,e){e(t)},onRemoveGroup:function(t,e){e(t)},margin:{item:{horizontal:10,vertical:10},axis:20}},this.options=s.extend({},this.defaultOptions),this.itemOptions={type:{start:"Date",end:"Date"}},this.conversion={toScreen:t.util.toScreen,toTime:t.util.toTime},this.dom={},this.props={},this.hammer=null
var i=this
this.itemsData=null,this.groupsData=null,this.itemListeners={add:function(t,e,o){i._onAdd(e.items)},update:function(t,e,o){i._onUpdate(e.items)},remove:function(t,e,o){i._onRemove(e.items)}},this.groupListeners={add:function(t,e,o){i._onAddGroups(e.items)},update:function(t,e,o){i._onUpdateGroups(e.items)},remove:function(t,e,o){i._onRemoveGroups(e.items)}},this.items={},this.groups={},this.groupIds=[],this.selection=[],this.stackDirty=!0,this.touchParams={},this.groupTouchParams={},this._create(),this.setOptions(e)}var n=i(20),s=i(1),r=i(8),a=i(10),h=i(30),d=i(26),l=i(31),u=i(35),c=i(36),p=i(37),f=i(33),m=i(38),g="__ungrouped__",v="__background__"
o.prototype=new d,o.types={background:m,box:c,range:f,point:p},o.prototype._create=function(){var t=document.createElement("div")
t.className="vis-itemset",t["timeline-itemset"]=this,this.dom.frame=t
var e=document.createElement("div")
e.className="vis-background",t.appendChild(e),this.dom.background=e
var i=document.createElement("div")
i.className="vis-foreground",t.appendChild(i),this.dom.foreground=i
var o=document.createElement("div")
o.className="vis-axis",this.dom.axis=o
var s=document.createElement("div")
s.className="vis-labelset",this.dom.labelSet=s,this._updateUngrouped()
var r=new u(v,null,this)
r.show(),this.groups[v]=r,this.hammer=new n(this.body.dom.centerContainer),this.hammer.on("hammer.input",function(t){t.isFirst&&this._onTouch(t)}.bind(this)),this.hammer.on("panstart",this._onDragStart.bind(this)),this.hammer.on("panmove",this._onDrag.bind(this)),this.hammer.on("panend",this._onDragEnd.bind(this)),this.hammer.get("pan").set({threshold:5,direction:30}),this.hammer.on("tap",this._onSelectItem.bind(this)),this.hammer.on("press",this._onMultiSelectItem.bind(this)),this.hammer.on("doubletap",this._onAddItem.bind(this)),this.groupHammer=new n(this.body.dom.leftContainer),this.groupHammer.on("panstart",this._onGroupDragStart.bind(this)),this.groupHammer.on("panmove",this._onGroupDrag.bind(this)),this.groupHammer.on("panend",this._onGroupDragEnd.bind(this)),this.groupHammer.get("pan").set({threshold:5,direction:30}),this.show()},o.prototype.setOptions=function(t){if(t){var e=["type","align","order","stack","selectable","multiselect","groupOrder","dataAttributes","template","groupTemplate","hide","snap","groupOrderSwap"]
s.selectiveExtend(e,this.options,t),"orientation"in t&&("string"==typeof t.orientation?this.options.orientation.item="top"===t.orientation?"top":"bottom":"object"==typeof t.orientation&&"item"in t.orientation&&(this.options.orientation.item=t.orientation.item)),"margin"in t&&("number"==typeof t.margin?(this.options.margin.axis=t.margin,this.options.margin.item.horizontal=t.margin,this.options.margin.item.vertical=t.margin):"object"==typeof t.margin&&(s.selectiveExtend(["axis"],this.options.margin,t.margin),"item"in t.margin&&("number"==typeof t.margin.item?(this.options.margin.item.horizontal=t.margin.item,this.options.margin.item.vertical=t.margin.item):"object"==typeof t.margin.item&&s.selectiveExtend(["horizontal","vertical"],this.options.margin.item,t.margin.item)))),"editable"in t&&("boolean"==typeof t.editable?(this.options.editable.updateTime=t.editable,this.options.editable.updateGroup=t.editable,this.options.editable.add=t.editable,this.options.editable.remove=t.editable):"object"==typeof t.editable&&s.selectiveExtend(["updateTime","updateGroup","add","remove"],this.options.editable,t.editable)),"groupEditable"in t&&("boolean"==typeof t.groupEditable?(this.options.groupEditable.order=t.groupEditable,this.options.groupEditable.add=t.groupEditable,this.options.groupEditable.remove=t.groupEditable):"object"==typeof t.groupEditable&&s.selectiveExtend(["order","add","remove"],this.options.groupEditable,t.groupEditable))
var i=function(e){var i=t[e]
if(i){if(!(i instanceof Function))throw new Error("option "+e+" must be a function "+e+"(item, callback)")
this.options[e]=i}}.bind(this);["onAdd","onUpdate","onRemove","onMove","onMoving","onAddGroup","onMoveGroup","onRemoveGroup"].forEach(i),this.markDirty()}},o.prototype.markDirty=function(t){this.groupIds=[],this.stackDirty=!0,t&&t.refreshItems&&s.forEach(this.items,function(t){t.dirty=!0,t.displayed&&t.redraw()})},o.prototype.destroy=function(){this.hide(),this.setItems(null),this.setGroups(null),this.hammer=null,this.body=null,this.conversion=null},o.prototype.hide=function(){this.dom.frame.parentNode&&this.dom.frame.parentNode.removeChild(this.dom.frame),this.dom.axis.parentNode&&this.dom.axis.parentNode.removeChild(this.dom.axis),this.dom.labelSet.parentNode&&this.dom.labelSet.parentNode.removeChild(this.dom.labelSet)},o.prototype.show=function(){this.dom.frame.parentNode||this.body.dom.center.appendChild(this.dom.frame),this.dom.axis.parentNode||this.body.dom.backgroundVertical.appendChild(this.dom.axis),this.dom.labelSet.parentNode||this.body.dom.left.appendChild(this.dom.labelSet)},o.prototype.setSelection=function(t){var e,i,o,n
for(void 0==t&&(t=[]),Array.isArray(t)||(t=[t]),e=0,i=this.selection.length;i>e;e++)o=this.selection[e],n=this.items[o],n&&n.unselect()
for(this.selection=[],e=0,i=t.length;i>e;e++)o=t[e],n=this.items[o],n&&(this.selection.push(o),n.select())},o.prototype.getSelection=function(){return this.selection.concat([])},o.prototype.getVisibleItems=function(){var t=this.body.range.getRange(),e=this.body.util.toScreen(t.start),i=this.body.util.toScreen(t.end),o=[]
for(var n in this.groups)if(this.groups.hasOwnProperty(n))for(var s=this.groups[n],r=s.visibleItems,a=0;a<r.length;a++){var h=r[a]
h.left<i&&h.left+h.width>e&&o.push(h.id)}return o},o.prototype._deselect=function(t){for(var e=this.selection,i=0,o=e.length;o>i;i++)if(e[i]==t){e.splice(i,1)
break}},o.prototype.redraw=function(){var t=this.options.margin,e=this.body.range,i=s.option.asSize,o=this.options,n=o.orientation.item,r=!1,a=this.dom.frame
this.props.top=this.body.domProps.top.height+this.body.domProps.border.top,this.props.left=this.body.domProps.left.width+this.body.domProps.border.left,a.className="vis-itemset",r=this._orderGroups()||r
var h=e.end-e.start,d=h!=this.lastVisibleInterval||this.props.width!=this.props.lastWidth
d&&(this.stackDirty=!0),this.lastVisibleInterval=h,this.props.lastWidth=this.props.width
var l=this.stackDirty,u=this._firstGroup(),c={item:t.item,axis:t.axis},p={item:t.item,axis:t.item.vertical/2},f=0,m=t.axis+t.item.vertical
return this.groups[v].redraw(e,p,l),s.forEach(this.groups,function(t){var i=t==u?c:p,o=t.redraw(e,i,l)
r=o||r,f+=t.height}),f=Math.max(f,m),this.stackDirty=!1,a.style.height=i(f),this.props.width=a.offsetWidth,this.props.height=f,this.dom.axis.style.top=i("top"==n?this.body.domProps.top.height+this.body.domProps.border.top:this.body.domProps.top.height+this.body.domProps.centerContainer.height),this.dom.axis.style.left="0",r=this._isResized()||r},o.prototype._firstGroup=function(){var t="top"==this.options.orientation.item?0:this.groupIds.length-1,e=this.groupIds[t],i=this.groups[e]||this.groups[g]
return i||null},o.prototype._updateUngrouped=function(){var t,e,i=this.groups[g]
this.groups[v]
if(this.groupsData){if(i){i.hide(),delete this.groups[g]
for(e in this.items)if(this.items.hasOwnProperty(e)){t=this.items[e],t.parent&&t.parent.remove(t)
var o=this._getGroupId(t.data),n=this.groups[o]
n&&n.add(t)||t.hide()}}}else if(!i){var s=null,r=null
i=new l(s,r,this),this.groups[g]=i
for(e in this.items)this.items.hasOwnProperty(e)&&(t=this.items[e],i.add(t))
i.show()}},o.prototype.getLabelSet=function(){return this.dom.labelSet},o.prototype.setItems=function(t){var e,i=this,o=this.itemsData
if(t){if(!(t instanceof r||t instanceof a))throw new TypeError("Data must be an instance of DataSet or DataView")
this.itemsData=t}else this.itemsData=null
if(o&&(s.forEach(this.itemListeners,function(t,e){o.off(e,t)}),e=o.getIds(),this._onRemove(e)),this.itemsData){var n=this.id
s.forEach(this.itemListeners,function(t,e){i.itemsData.on(e,t,n)}),e=this.itemsData.getIds(),this._onAdd(e),this._updateUngrouped()}},o.prototype.getItems=function(){return this.itemsData},o.prototype.setGroups=function(t){var e,i=this
if(this.groupsData&&(s.forEach(this.groupListeners,function(t,e){i.groupsData.off(e,t)}),e=this.groupsData.getIds(),this.groupsData=null,this._onRemoveGroups(e)),t){if(!(t instanceof r||t instanceof a))throw new TypeError("Data must be an instance of DataSet or DataView")
this.groupsData=t}else this.groupsData=null
if(this.groupsData){var o=this.id
s.forEach(this.groupListeners,function(t,e){i.groupsData.on(e,t,o)}),e=this.groupsData.getIds(),this._onAddGroups(e)}this._updateUngrouped(),this._order(),this.body.emitter.emit("change",{queue:!0})},o.prototype.getGroups=function(){return this.groupsData},o.prototype.removeItem=function(t){var e=this.itemsData.get(t),i=this.itemsData.getDataSet()
e&&this.options.onRemove(e,function(e){e&&i.remove(t)})},o.prototype._getType=function(t){return t.type||this.options.type||(t.end?"range":"box")},o.prototype._getGroupId=function(t){var e=this._getType(t)
return"background"==e&&void 0==t.group?v:this.groupsData?t.group:g},o.prototype._onUpdate=function(t){var e=this
t.forEach(function(t){var i,n=e.itemsData.get(t,e.itemOptions),s=e.items[t],r=e._getType(n),a=o.types[r]
if(s&&(a&&s instanceof a?e._updateItem(s,n):(i=s.selected,e._removeItem(s),s=null)),!s){if(!a)throw"rangeoverflow"==r?new TypeError('Item type "rangeoverflow" is deprecated. Use css styling instead: .vis-item.vis-range .vis-item-content {overflow: visible;}'):new TypeError('Unknown item type "'+r+'"')
s=new a(n,e.conversion,e.options),s.id=t,e._addItem(s),i&&(this.selection.push(t),s.select())}}.bind(this)),this._order(),this.stackDirty=!0,this.body.emitter.emit("change",{queue:!0})},o.prototype._onAdd=o.prototype._onUpdate,o.prototype._onRemove=function(t){var e=0,i=this
t.forEach(function(t){var o=i.items[t]
o&&(e++,i._removeItem(o))}),e&&(this._order(),this.stackDirty=!0,this.body.emitter.emit("change",{queue:!0}))},o.prototype._order=function(){s.forEach(this.groups,function(t){t.order()})},o.prototype._onUpdateGroups=function(t){this._onAddGroups(t)},o.prototype._onAddGroups=function(t){var e=this
t.forEach(function(t){var i=e.groupsData.get(t),o=e.groups[t]
if(o)o.setData(i)
else{if(t==g||t==v)throw new Error("Illegal group id. "+t+" is a reserved id.")
var n=Object.create(e.options)
s.extend(n,{height:null}),o=new l(t,i,e),e.groups[t]=o
for(var r in e.items)if(e.items.hasOwnProperty(r)){var a=e.items[r]
a.data.group==t&&o.add(a)}o.order(),o.show()}}),this.body.emitter.emit("change",{queue:!0})},o.prototype._onRemoveGroups=function(t){var e=this.groups
t.forEach(function(t){var i=e[t]
i&&(i.hide(),delete e[t])}),this.markDirty(),this.body.emitter.emit("change",{queue:!0})},o.prototype._orderGroups=function(){if(this.groupsData){var t=this.groupsData.getIds({order:this.options.groupOrder}),e=!s.equalArray(t,this.groupIds)
if(e){var i=this.groups
t.forEach(function(t){i[t].hide()}),t.forEach(function(t){i[t].show()}),this.groupIds=t}return e}return!1},o.prototype._addItem=function(t){this.items[t.id]=t
var e=this._getGroupId(t.data),i=this.groups[e]
i&&i.add(t)},o.prototype._updateItem=function(t,e){var i=t.data.group,o=t.data.subgroup
if(t.setData(e),i!=t.data.group||o!=t.data.subgroup){var n=this.groups[i]
n&&n.remove(t)
var s=this._getGroupId(t.data),r=this.groups[s]
r&&r.add(t)}},o.prototype._removeItem=function(t){t.hide(),delete this.items[t.id]
var e=this.selection.indexOf(t.id);-1!=e&&this.selection.splice(e,1),t.parent&&t.parent.remove(t)},o.prototype._constructByEndArray=function(t){for(var e=[],i=0;i<t.length;i++)t[i]instanceof f&&e.push(t[i])
return e},o.prototype._onTouch=function(t){this.touchParams.item=this.itemFromTarget(t),this.touchParams.dragLeftItem=t.target.dragLeftItem||!1,this.touchParams.dragRightItem=t.target.dragRightItem||!1,this.touchParams.itemProps=null},o.prototype._getGroupIndex=function(t){for(var e=0;e<this.groupIds.length;e++)if(t==this.groupIds[e])return e},o.prototype._onDragStart=function(t){var e,i=this.touchParams.item||null,o=this
if(i&&i.selected){if(!this.options.editable.updateTime&&!this.options.editable.updateGroup&&!i.editable)return
if(i.editable===!1)return
var n=this.touchParams.dragLeftItem,s=this.touchParams.dragRightItem
if(n)e={item:n,initialX:t.center.x,dragLeft:!0,data:this._cloneItemData(i.data)},this.touchParams.itemProps=[e]
else if(s)e={item:s,initialX:t.center.x,dragRight:!0,data:this._cloneItemData(i.data)},this.touchParams.itemProps=[e]
else{this.touchParams.selectedItem=i
var r=this._getGroupIndex(i.data.group)
this.touchParams.itemProps=this.getSelection().map(function(e){var i=o.items[e],n=o._getGroupIndex(i.data.group)
return{item:i,initialX:t.center.x,groupOffset:r-n,data:this._cloneItemData(i.data)}}.bind(this))}t.stopPropagation()}else this.options.editable.add&&(t.srcEvent.ctrlKey||t.srcEvent.metaKey)&&this._onDragStartAddItem(t)},o.prototype._onDragStartAddItem=function(t){var e=this.options.snap||null,i=s.getAbsoluteLeft(this.dom.frame),o=t.center.x-i-10,n=this.body.util.toTime(o),r=this.body.util.getScale(),a=this.body.util.getStep(),h=e?e(n,r,a):h,d=h,l={type:"range",start:h,end:d,content:"new item"},u=s.randomUUID()
l[this.itemsData._fieldId]=u
var c=this.groupFromTarget(t)
c&&(l.group=c.groupId)
var p=new f(l,this.conversion,this.options)
p.id=u,p.data=this._cloneItemData(l),this._addItem(p)
var m={item:p,dragRight:!0,initialX:t.center.x,data:p.data}
this.touchParams.itemProps=[m],t.stopPropagation()},o.prototype._onDrag=function(t){if(this.touchParams.itemProps){t.stopPropagation()
var e=this,i=this.options.snap||null,o=this.body.dom.root.offsetLeft+this.body.domProps.left.width,n=this.body.util.getScale(),r=this.body.util.getStep(),a=this.touchParams.selectedItem,h=e.options.editable.updateGroup,d=null
if(h&&a&&void 0!=a.data.group){var l=e.groupFromTarget(t)
l&&(d=this._getGroupIndex(l.groupId))}this.touchParams.itemProps.forEach(function(a){var h=e.body.util.toTime(t.center.x-o),l=e.body.util.toTime(a.initialX-o),u=h-l,c=this._cloneItemData(a.item.data)
if(a.item.editable!==!1){var p=e.options.editable.updateTime||a.item.editable===!0
if(p)if(a.dragLeft){if(void 0!=c.start){var f=s.convert(a.data.start,"Date"),m=new Date(f.valueOf()+u)
c.start=i?i(m,n,r):m}}else if(a.dragRight){if(void 0!=c.end){var g=s.convert(a.data.end,"Date"),v=new Date(g.valueOf()+u)
c.end=i?i(v,n,r):v}}else if(void 0!=c.start){var f=s.convert(a.data.start,"Date").valueOf(),m=new Date(f+u)
if(void 0!=c.end){var g=s.convert(a.data.end,"Date"),y=g.valueOf()-f.valueOf()
c.start=i?i(m,n,r):m,c.end=new Date(c.start.valueOf()+y)}else c.start=i?i(m,n,r):m}var b=e.options.editable.updateGroup||a.item.editable===!0
if(b&&!a.dragLeft&&!a.dragRight&&null!=d&&void 0!=c.group){var _=d-a.groupOffset
_=Math.max(0,_),_=Math.min(e.groupIds.length-1,_),c.group=e.groupIds[_]}c=this._cloneItemData(c),e.options.onMoving(c,function(t){t&&a.item.setData(this._cloneItemData(t,"Date"))}.bind(this))}}.bind(this)),this.stackDirty=!0,this.body.emitter.emit("change")}},o.prototype._moveToGroup=function(t,e){var i=this.groups[e]
if(i&&i.groupId!=t.data.group){var o=t.parent
o.remove(t),o.order(),i.add(t),i.order(),t.data.group=i.groupId}},o.prototype._onDragEnd=function(t){if(this.touchParams.itemProps){t.stopPropagation()
var e=this,i=this.itemsData.getDataSet(),o=this.touchParams.itemProps
this.touchParams.itemProps=null,o.forEach(function(t){var o=t.item.id,n=null!=e.itemsData.get(o,e.itemOptions)
if(n){var s=this._cloneItemData(t.item.data)
e.options.onMove(s,function(n){n?(n[i._fieldId]=o,i.update(n)):(t.item.setData(t.data),e.stackDirty=!0,e.body.emitter.emit("change"))})}else e.options.onAdd(t.item.data,function(i){e._removeItem(t.item),i&&e.itemsData.getDataSet().add(i),e.stackDirty=!0,e.body.emitter.emit("change")})}.bind(this))}},o.prototype._onGroupDragStart=function(t){this.options.groupEditable.order&&(this.groupTouchParams.group=this.groupFromTarget(t),this.groupTouchParams.group&&(t.stopPropagation(),this.groupTouchParams.originalOrder=this.groupsData.getIds({order:this.options.groupOrder})))},o.prototype._onGroupDrag=function(t){if(this.options.groupEditable.order&&this.groupTouchParams.group){t.stopPropagation()
var e=this.groupFromTarget(t)
if(e&&e.height!=this.groupTouchParams.group.height){var i=e.top<this.groupTouchParams.group.top,o=t.center?t.center.y:t.clientY,n=s.getAbsoluteTop(e.dom.foreground),r=this.groupTouchParams.group.height
if(i){if(o>n+r)return}else{var a=e.height
if(n+a-r>o)return}}if(e&&e!=this.groupTouchParams.group){var h=this.groupsData,d=h.get(e.groupId),l=h.get(this.groupTouchParams.group.groupId)
l&&d&&(this.options.groupOrderSwap(l,d,this.groupsData),this.groupsData.update(l),this.groupsData.update(d))
var u=this.groupsData.getIds({order:this.options.groupOrder})
if(!s.equalArray(u,this.groupTouchParams.originalOrder))for(var h=this.groupsData,c=this.groupTouchParams.originalOrder,p=this.groupTouchParams.group.groupId,f=Math.min(c.length,u.length),m=0,g=0,v=0;f>m;){for(;f>m+g&&f>m+v&&u[m+g]==c[m+v];)m++
if(m+g>=f)break
if(u[m+g]!=p)if(c[m+v]!=p){var y=u.indexOf(c[m+v]),b=h.get(u[m+g]),_=h.get(c[m+v])
this.options.groupOrderSwap(b,_,h),h.update(b),h.update(_)
var w=u[m+g]
u[m+g]=c[m+v],u[y]=w,m++}else v=1
else g=1}}}},o.prototype._onGroupDragEnd=function(t){if(this.options.groupEditable.order&&this.groupTouchParams.group){t.stopPropagation()
var e=this,i=e.groupTouchParams.group.groupId,o=e.groupsData.getDataSet(),n=s.extend({},o.get(i))
e.options.onMoveGroup(n,function(t){if(t)t[o._fieldId]=i,o.update(t)
else{var n=o.getIds({order:e.options.groupOrder})
if(!s.equalArray(n,e.groupTouchParams.originalOrder))for(var r=e.groupTouchParams.originalOrder,a=Math.min(r.length,n.length),h=0;a>h;){for(;a>h&&n[h]==r[h];)h++
if(h>=a)break
var d=n.indexOf(r[h]),l=o.get(n[h]),u=o.get(r[h])
e.options.groupOrderSwap(l,u,o),groupsData.update(l),groupsData.update(u)
var c=n[h]
n[h]=r[h],n[d]=c,h++}}}),e.body.emitter.emit("groupDragged",{groupId:i})}},o.prototype._onSelectItem=function(t){if(this.options.selectable){var e=t.srcEvent&&(t.srcEvent.ctrlKey||t.srcEvent.metaKey),i=t.srcEvent&&t.srcEvent.shiftKey
if(e||i)return void this._onMultiSelectItem(t)
var o=this.getSelection(),n=this.itemFromTarget(t),s=n?[n.id]:[]
this.setSelection(s)
var r=this.getSelection();(r.length>0||o.length>0)&&this.body.emitter.emit("select",{items:r,event:t})}},o.prototype._onAddItem=function(t){if(this.options.selectable&&this.options.editable.add){var e=this,i=this.options.snap||null,o=this.itemFromTarget(t)
if(t.stopPropagation(),o){var n=e.itemsData.get(o.id)
this.options.onUpdate(n,function(t){t&&e.itemsData.getDataSet().update(t)})}else{var r=s.getAbsoluteLeft(this.dom.frame),a=t.center.x-r,h=this.body.util.toTime(a),d=this.body.util.getScale(),l=this.body.util.getStep(),u={start:i?i(h,d,l):h,content:"new item"}
if("range"===this.options.type){var c=this.body.util.toTime(a+this.props.width/5)
u.end=i?i(c,d,l):c}u[this.itemsData._fieldId]=s.randomUUID()
var p=this.groupFromTarget(t)
p&&(u.group=p.groupId),u=this._cloneItemData(u),this.options.onAdd(u,function(t){t&&e.itemsData.getDataSet().add(t)})}}},o.prototype._onMultiSelectItem=function(t){if(this.options.selectable){var e=this.itemFromTarget(t)
if(e){var i=this.options.multiselect?this.getSelection():[],n=t.srcEvent&&t.srcEvent.shiftKey||!1
if(n&&this.options.multiselect){i.push(e.id)
var s=o._getItemRange(this.itemsData.get(i,this.itemOptions))
i=[]
for(var r in this.items)if(this.items.hasOwnProperty(r)){var a=this.items[r],h=a.data.start,d=void 0!==a.data.end?a.data.end:h
h>=s.min&&d<=s.max&&!(a instanceof m)&&i.push(a.id)}}else{var l=i.indexOf(e.id);-1==l?i.push(e.id):i.splice(l,1)}this.setSelection(i),this.body.emitter.emit("select",{items:this.getSelection(),event:t})}}},o._getItemRange=function(t){var e=null,i=null
return t.forEach(function(t){(null==i||t.start<i)&&(i=t.start),void 0!=t.end?(null==e||t.end>e)&&(e=t.end):(null==e||t.start>e)&&(e=t.start)}),{min:i,max:e}},o.prototype.itemFromTarget=function(t){for(var e=t.target;e;){if(e.hasOwnProperty("timeline-item"))return e["timeline-item"]
e=e.parentNode}return null},o.prototype.groupFromTarget=function(t){for(var e=t.center?t.center.y:t.clientY,i=0;i<this.groupIds.length;i++){var o=this.groupIds[i],n=this.groups[o],r=n.dom.foreground,a=s.getAbsoluteTop(r)
if(e>a&&e<a+r.offsetHeight)return n
if("top"===this.options.orientation.item){if(i===this.groupIds.length-1&&e>a)return n}else if(0===i&&e<a+r.offset)return n}return null},o.itemSetFromTarget=function(t){for(var e=t.target;e;){if(e.hasOwnProperty("timeline-itemset"))return e["timeline-itemset"]
e=e.parentNode}return null},o.prototype._cloneItemData=function(t,e){var i=s.extend({},t)
return e||(e=this.itemsData.getDataSet()._options.type),void 0!=i.start&&(i.start=s.convert(i.start,e&&e.start||"Date")),void 0!=i.end&&(i.end=s.convert(i.end,e&&e.end||"Date")),i},t.exports=o},function(t,e,i){"use strict"
function o(t,e,i,s){this.moment=n,this.current=this.moment(),this._start=this.moment(),this._end=this.moment(),this.autoScale=!0,this.scale="day",this.step=1,this.setRange(t,e,i),this.switchedDay=!1,this.switchedMonth=!1,this.switchedYear=!1,this.hiddenDates=s,void 0===s&&(this.hiddenDates=[]),this.format=o.FORMAT}var n=i(2),s=i(27),r=i(1)
o.FORMAT={minorLabels:{millisecond:"SSS",second:"s",minute:"HH:mm",hour:"HH:mm",weekday:"ddd D",day:"D",month:"MMM",year:"YYYY"},majorLabels:{millisecond:"HH:mm:ss",second:"D MMMM HH:mm",minute:"ddd D MMMM",hour:"ddd D MMMM",weekday:"MMMM YYYY",day:"MMMM YYYY",month:"YYYY",year:""}},o.prototype.setMoment=function(t){this.moment=t,this.current=this.moment(this.current),this._start=this.moment(this._start),this._end=this.moment(this._end)},o.prototype.setFormat=function(t){var e=r.deepExtend({},o.FORMAT)
this.format=r.deepExtend(e,t)},o.prototype.setRange=function(t,e,i){if(!(t instanceof Date&&e instanceof Date))throw"No legal start or end date in method setRange"
this._start=void 0!=t?this.moment(t.valueOf()):new Date,this._end=void 0!=e?this.moment(e.valueOf()):new Date,this.autoScale&&this.setMinimumStep(i)},o.prototype.start=function(){this.current=this._start.clone(),this.roundToMinor()},o.prototype.roundToMinor=function(){switch(this.scale){case"year":this.current.year(this.step*Math.floor(this.current.year()/this.step)),this.current.month(0)
case"month":this.current.date(1)
case"day":case"weekday":this.current.hours(0)
case"hour":this.current.minutes(0)
case"minute":this.current.seconds(0)
case"second":this.current.milliseconds(0)}if(1!=this.step)switch(this.scale){case"millisecond":this.current.subtract(this.current.milliseconds()%this.step,"milliseconds")
break
case"second":this.current.subtract(this.current.seconds()%this.step,"seconds")
break
case"minute":this.current.subtract(this.current.minutes()%this.step,"minutes")
break
case"hour":this.current.subtract(this.current.hours()%this.step,"hours")
break
case"weekday":case"day":this.current.subtract((this.current.date()-1)%this.step,"day")
break
case"month":this.current.subtract(this.current.month()%this.step,"month")
break
case"year":this.current.subtract(this.current.year()%this.step,"year")}},o.prototype.hasNext=function(){return this.current.valueOf()<=this._end.valueOf()},o.prototype.next=function(){var t=this.current.valueOf()
if(this.current.month()<6)switch(this.scale){case"millisecond":this.current.add(this.step,"millisecond")
break
case"second":this.current.add(this.step,"second")
break
case"minute":this.current.add(this.step,"minute")
break
case"hour":this.current.add(this.step,"hour"),this.current.subtract(this.current.hours()%this.step,"hour")
break
case"weekday":case"day":this.current.add(this.step,"day")
break
case"month":this.current.add(this.step,"month")
break
case"year":this.current.add(this.step,"year")}else switch(this.scale){case"millisecond":this.current.add(this.step,"millisecond")
break
case"second":this.current.add(this.step,"second")
break
case"minute":this.current.add(this.step,"minute")
break
case"hour":this.current.add(this.step,"hour")
break
case"weekday":case"day":this.current.add(this.step,"day")
break
case"month":this.current.add(this.step,"month")
break
case"year":this.current.add(this.step,"year")}if(1!=this.step)switch(this.scale){case"millisecond":this.current.milliseconds()<this.step&&this.current.milliseconds(0)
break
case"second":this.current.seconds()<this.step&&this.current.seconds(0)
break
case"minute":this.current.minutes()<this.step&&this.current.minutes(0)
break
case"hour":this.current.hours()<this.step&&this.current.hours(0)
break
case"weekday":case"day":this.current.date()<this.step+1&&this.current.date(1)
break
case"month":this.current.month()<this.step&&this.current.month(0)
break
case"year":}this.current.valueOf()==t&&(this.current=this._end.clone()),s.stepOverHiddenDates(this.moment,this,t)},o.prototype.getCurrent=function(){return this.current},o.prototype.setScale=function(t){t&&"string"==typeof t.scale&&(this.scale=t.scale,this.step=t.step>0?t.step:1,this.autoScale=!1)},o.prototype.setAutoScale=function(t){this.autoScale=t},o.prototype.setMinimumStep=function(t){if(void 0!=t){var e=31104e6,i=2592e6,o=864e5,n=36e5,s=6e4,r=1e3,a=1
1e3*e>t&&(this.scale="year",this.step=1e3),500*e>t&&(this.scale="year",this.step=500),100*e>t&&(this.scale="year",this.step=100),50*e>t&&(this.scale="year",this.step=50),10*e>t&&(this.scale="year",this.step=10),5*e>t&&(this.scale="year",this.step=5),e>t&&(this.scale="year",this.step=1),3*i>t&&(this.scale="month",this.step=3),i>t&&(this.scale="month",this.step=1),5*o>t&&(this.scale="day",this.step=5),2*o>t&&(this.scale="day",this.step=2),o>t&&(this.scale="day",this.step=1),o/2>t&&(this.scale="weekday",this.step=1),4*n>t&&(this.scale="hour",this.step=4),n>t&&(this.scale="hour",this.step=1),15*s>t&&(this.scale="minute",this.step=15),10*s>t&&(this.scale="minute",this.step=10),5*s>t&&(this.scale="minute",this.step=5),s>t&&(this.scale="minute",this.step=1),15*r>t&&(this.scale="second",this.step=15),10*r>t&&(this.scale="second",this.step=10),5*r>t&&(this.scale="second",this.step=5),r>t&&(this.scale="second",this.step=1),200*a>t&&(this.scale="millisecond",this.step=200),100*a>t&&(this.scale="millisecond",this.step=100),50*a>t&&(this.scale="millisecond",this.step=50),10*a>t&&(this.scale="millisecond",this.step=10),5*a>t&&(this.scale="millisecond",this.step=5),a>t&&(this.scale="millisecond",this.step=1)}},o.snap=function(t,e,i){var o=n(t)
if("year"==e){var s=o.year()+Math.round(o.month()/12)
o.year(Math.round(s/i)*i),o.month(0),o.date(0),o.hours(0),o.minutes(0),o.seconds(0),o.milliseconds(0)}else if("month"==e)o.date()>15?(o.date(1),o.add(1,"month")):o.date(1),o.hours(0),o.minutes(0),o.seconds(0),o.milliseconds(0)
else if("day"==e){switch(i){case 5:case 2:o.hours(24*Math.round(o.hours()/24))
break
default:o.hours(12*Math.round(o.hours()/12))}o.minutes(0),o.seconds(0),o.milliseconds(0)}else if("weekday"==e){switch(i){case 5:case 2:o.hours(12*Math.round(o.hours()/12))
break
default:o.hours(6*Math.round(o.hours()/6))}o.minutes(0),o.seconds(0),o.milliseconds(0)}else if("hour"==e){switch(i){case 4:o.minutes(60*Math.round(o.minutes()/60))
break
default:o.minutes(30*Math.round(o.minutes()/30))}o.seconds(0),o.milliseconds(0)}else if("minute"==e){switch(i){case 15:case 10:o.minutes(5*Math.round(o.minutes()/5)),o.seconds(0)
break
case 5:o.seconds(60*Math.round(o.seconds()/60))
break
default:o.seconds(30*Math.round(o.seconds()/30))}o.milliseconds(0)}else if("second"==e)switch(i){case 15:case 10:o.seconds(5*Math.round(o.seconds()/5)),o.milliseconds(0)
break
case 5:o.milliseconds(1e3*Math.round(o.milliseconds()/1e3))
break
default:o.milliseconds(500*Math.round(o.milliseconds()/500))}else if("millisecond"==e){var r=i>5?i/2:1
o.milliseconds(Math.round(o.milliseconds()/r)*r)}return o},o.prototype.isMajor=function(){if(1==this.switchedYear)switch(this.switchedYear=!1,this.scale){case"year":case"month":case"weekday":case"day":case"hour":case"minute":case"second":case"millisecond":return!0
default:return!1}else if(1==this.switchedMonth)switch(this.switchedMonth=!1,this.scale){case"weekday":case"day":case"hour":case"minute":case"second":case"millisecond":return!0
default:return!1}else if(1==this.switchedDay)switch(this.switchedDay=!1,this.scale){case"millisecond":case"second":case"minute":case"hour":return!0
default:return!1}var t=this.moment(this.current)
switch(this.scale){case"millisecond":return 0==t.milliseconds()
case"second":return 0==t.seconds()
case"minute":return 0==t.hours()&&0==t.minutes()
case"hour":return 0==t.hours()
case"weekday":case"day":return 1==t.date()
case"month":return 0==t.month()
case"year":return!1
default:return!1}},o.prototype.getLabelMinor=function(t){void 0==t&&(t=this.current)
var e=this.format.minorLabels[this.scale]
return e&&e.length>0?this.moment(t).format(e):""},o.prototype.getLabelMajor=function(t){void 0==t&&(t=this.current)
var e=this.format.majorLabels[this.scale]
return e&&e.length>0?this.moment(t).format(e):""},o.prototype.getClassName=function(){function t(t){return t/h%2==0?" vis-even":" vis-odd"}function e(t){return t.isSame(new Date,"day")?" vis-today":t.isSame(s().add(1,"day"),"day")?" vis-tomorrow":t.isSame(s().add(-1,"day"),"day")?" vis-yesterday":""}function i(t){return t.isSame(new Date,"week")?" vis-current-week":""}function o(t){return t.isSame(new Date,"month")?" vis-current-month":""}function n(t){return t.isSame(new Date,"year")?" vis-current-year":""}var s=this.moment,r=this.moment(this.current),a=r.locale?r.locale("en"):r.lang("en"),h=this.step
switch(this.scale){case"millisecond":return t(a.milliseconds()).trim()
case"second":return t(a.seconds()).trim()
case"minute":return t(a.minutes()).trim()
case"hour":var d=a.hours()
return 4==this.step&&(d=d+"-h"+(d+4)),"vis-h"+d+e(a)+t(a.hours())
case"weekday":return"vis-"+a.format("dddd").toLowerCase()+e(a)+i(a)+t(a.date())
case"day":var l=a.date(),u=a.format("MMMM").toLowerCase()
return"vis-day"+l+" vis-"+u+o(a)+t(l-1)
case"month":return"vis-"+a.format("MMMM").toLowerCase()+o(a)+t(a.month())
case"year":var c=a.year()
return"vis-year"+c+n(a)+t(c)
default:return""}},t.exports=o},function(t,e,i){"use strict"
function o(t,e,i){this.groupId=t,this.subgroups={},this.subgroupIndex=0,this.subgroupOrderer=e&&e.subgroupOrder,this.itemSet=i,this.dom={},this.props={label:{width:0,height:0}},this.className=null,this.items={},this.visibleItems=[],this.orderedItems={byStart:[],byEnd:[]},this.checkRangedItems=!1
var o=this
this.itemSet.body.emitter.on("checkRangedItems",function(){o.checkRangedItems=!0}),this._create(),this.setData(e)}var n=i(1),s=i(32)
i(33)
o.prototype._create=function(){var t=document.createElement("div")
this.itemSet.options.groupEditable.order?t.className="vis-label draggable":t.className="vis-label",this.dom.label=t
var e=document.createElement("div")
e.className="vis-inner",t.appendChild(e),this.dom.inner=e
var i=document.createElement("div")
i.className="vis-group",i["timeline-group"]=this,this.dom.foreground=i,this.dom.background=document.createElement("div"),this.dom.background.className="vis-group",this.dom.axis=document.createElement("div"),this.dom.axis.className="vis-group",this.dom.marker=document.createElement("div"),this.dom.marker.style.visibility="hidden",this.dom.marker.innerHTML="?",this.dom.background.appendChild(this.dom.marker)},o.prototype.setData=function(t){var e
if(e=this.itemSet.options&&this.itemSet.options.groupTemplate?this.itemSet.options.groupTemplate(t):t&&t.content,e instanceof Element){for(this.dom.inner.appendChild(e);this.dom.inner.firstChild;)this.dom.inner.removeChild(this.dom.inner.firstChild)
this.dom.inner.appendChild(e)}else void 0!==e&&null!==e?this.dom.inner.innerHTML=e:this.dom.inner.innerHTML=this.groupId||""
this.dom.label.title=t&&t.title||"",this.dom.inner.firstChild?n.removeClassName(this.dom.inner,"vis-hidden"):n.addClassName(this.dom.inner,"vis-hidden")
var i=t&&t.className||null
i!=this.className&&(this.className&&(n.removeClassName(this.dom.label,this.className),n.removeClassName(this.dom.foreground,this.className),n.removeClassName(this.dom.background,this.className),n.removeClassName(this.dom.axis,this.className)),n.addClassName(this.dom.label,i),n.addClassName(this.dom.foreground,i),n.addClassName(this.dom.background,i),n.addClassName(this.dom.axis,i),this.className=i),this.style&&(n.removeCssText(this.dom.label,this.style),this.style=null),t&&t.style&&(n.addCssText(this.dom.label,t.style),this.style=t.style)},o.prototype.getLabelWidth=function(){return this.props.label.width},o.prototype.redraw=function(t,e,i){var o=!1,r=this.dom.marker.clientHeight
if(r!=this.lastMarkerHeight&&(this.lastMarkerHeight=r,n.forEach(this.items,function(t){t.dirty=!0,t.displayed&&t.redraw()}),i=!0),"function"==typeof this.itemSet.options.order){if(i){var a=this,h=!1
n.forEach(this.items,function(t){t.displayed||(t.redraw(),a.visibleItems.push(t)),t.repositionX(h)})
var d=this.orderedItems.byStart.slice().sort(function(t,e){return a.itemSet.options.order(t.data,e.data)})
s.stack(d,e,!0)}this.visibleItems=this._updateVisibleItems(this.orderedItems,this.visibleItems,t)}else this.visibleItems=this._updateVisibleItems(this.orderedItems,this.visibleItems,t),this.itemSet.options.stack?s.stack(this.visibleItems,e,i):s.nostack(this.visibleItems,e,this.subgroups)
var l=this._calculateHeight(e),u=this.dom.foreground
this.top=u.offsetTop,this.left=u.offsetLeft,this.width=u.offsetWidth,o=n.updateProperty(this,"height",l)||o,o=n.updateProperty(this.props.label,"width",this.dom.inner.clientWidth)||o,o=n.updateProperty(this.props.label,"height",this.dom.inner.clientHeight)||o,this.dom.background.style.height=l+"px",this.dom.foreground.style.height=l+"px",this.dom.label.style.height=l+"px"
for(var c=0,p=this.visibleItems.length;p>c;c++){var f=this.visibleItems[c]
f.repositionY(e)}return o},o.prototype._calculateHeight=function(t){var e,i=this.visibleItems
this.resetSubgroups()
var o=this
if(i.length>0){var s=i[0].top,r=i[0].top+i[0].height
if(n.forEach(i,function(t){s=Math.min(s,t.top),r=Math.max(r,t.top+t.height),void 0!==t.data.subgroup&&(o.subgroups[t.data.subgroup].height=Math.max(o.subgroups[t.data.subgroup].height,t.height),o.subgroups[t.data.subgroup].visible=!0)}),s>t.axis){var a=s-t.axis
r-=a,n.forEach(i,function(t){t.top-=a})}e=r+t.item.vertical/2}else e=0
return e=Math.max(e,this.props.label.height)},o.prototype.show=function(){this.dom.label.parentNode||this.itemSet.dom.labelSet.appendChild(this.dom.label),this.dom.foreground.parentNode||this.itemSet.dom.foreground.appendChild(this.dom.foreground),this.dom.background.parentNode||this.itemSet.dom.background.appendChild(this.dom.background),this.dom.axis.parentNode||this.itemSet.dom.axis.appendChild(this.dom.axis)},o.prototype.hide=function(){var t=this.dom.label
t.parentNode&&t.parentNode.removeChild(t)
var e=this.dom.foreground
e.parentNode&&e.parentNode.removeChild(e)
var i=this.dom.background
i.parentNode&&i.parentNode.removeChild(i)
var o=this.dom.axis
o.parentNode&&o.parentNode.removeChild(o)},o.prototype.add=function(t){if(this.items[t.id]=t,t.setParent(this),void 0!==t.data.subgroup&&(void 0===this.subgroups[t.data.subgroup]&&(this.subgroups[t.data.subgroup]={height:0,visible:!1,index:this.subgroupIndex,items:[]},this.subgroupIndex++),this.subgroups[t.data.subgroup].items.push(t)),this.orderSubgroups(),-1==this.visibleItems.indexOf(t)){var e=this.itemSet.body.range
this._checkIfVisible(t,this.visibleItems,e)}},o.prototype.orderSubgroups=function(){if(void 0!==this.subgroupOrderer){var t=[]
if("string"==typeof this.subgroupOrderer){for(var e in this.subgroups)t.push({subgroup:e,sortField:this.subgroups[e].items[0].data[this.subgroupOrderer]})
t.sort(function(t,e){return t.sortField-e.sortField})}else if("function"==typeof this.subgroupOrderer){for(var e in this.subgroups)t.push(this.subgroups[e].items[0].data)
t.sort(this.subgroupOrderer)}if(t.length>0)for(var i=0;i<t.length;i++)this.subgroups[t[i].subgroup].index=i}},o.prototype.resetSubgroups=function(){for(var t in this.subgroups)this.subgroups.hasOwnProperty(t)&&(this.subgroups[t].visible=!1)},o.prototype.remove=function(t){delete this.items[t.id],t.setParent(null)
var e=this.visibleItems.indexOf(t)
if(-1!=e&&this.visibleItems.splice(e,1),void 0!==t.data.subgroup){var i=this.subgroups[t.data.subgroup]
if(i){var o=i.items.indexOf(t)
i.items.splice(o,1),i.items.length||(delete this.subgroups[t.data.subgroup],this.subgroupIndex--),this.orderSubgroups()}}},o.prototype.removeFromDataSet=function(t){this.itemSet.removeItem(t.id)},o.prototype.order=function(){for(var t=n.toArray(this.items),e=[],i=[],o=0;o<t.length;o++)void 0!==t[o].data.end&&i.push(t[o]),e.push(t[o])
this.orderedItems={byStart:e,byEnd:i},s.orderByStart(this.orderedItems.byStart),s.orderByEnd(this.orderedItems.byEnd)},o.prototype._updateVisibleItems=function(t,e,i){var o,s,r=[],a={},h=(i.end-i.start)/4,d=i.start-h,l=i.end+h,u=function(t){return d>t?-1:l>=t?0:1}
if(e.length>0)for(s=0;s<e.length;s++)this._checkIfVisibleWithReference(e[s],r,a,i)
var c=n.binarySearchCustom(t.byStart,u,"data","start")
if(this._traceVisible(c,t.byStart,r,a,function(t){return t.data.start<d||t.data.start>l}),1==this.checkRangedItems)for(this.checkRangedItems=!1,s=0;s<t.byEnd.length;s++)this._checkIfVisibleWithReference(t.byEnd[s],r,a,i)
else{var p=n.binarySearchCustom(t.byEnd,u,"data","end")
this._traceVisible(p,t.byEnd,r,a,function(t){return t.data.end<d||t.data.end>l})}for(s=0;s<r.length;s++)o=r[s],o.displayed||o.show(),o.repositionX()
return r},o.prototype._traceVisible=function(t,e,i,o,n){var s,r
if(-1!=t){for(r=t;r>=0&&(s=e[r],!n(s));r--)void 0===o[s.id]&&(o[s.id]=!0,i.push(s))
for(r=t+1;r<e.length&&(s=e[r],!n(s));r++)void 0===o[s.id]&&(o[s.id]=!0,i.push(s))}},o.prototype._checkIfVisible=function(t,e,i){t.isVisible(i)?(t.displayed||t.show(),t.repositionX(),e.push(t)):t.displayed&&t.hide()},o.prototype._checkIfVisibleWithReference=function(t,e,i,o){t.isVisible(o)?void 0===i[t.id]&&(i[t.id]=!0,e.push(t)):t.displayed&&t.hide()},t.exports=o},function(t,e){"use strict"
var i=.001
e.orderByStart=function(t){t.sort(function(t,e){return t.data.start-e.data.start})},e.orderByEnd=function(t){t.sort(function(t,e){var i="end"in t.data?t.data.end:t.data.start,o="end"in e.data?e.data.end:e.data.start
return i-o})},e.stack=function(t,i,o){var n,s
if(o)for(n=0,s=t.length;s>n;n++)t[n].top=null
for(n=0,s=t.length;s>n;n++){var r=t[n]
if(r.stack&&null===r.top){r.top=i.axis
do{for(var a=null,h=0,d=t.length;d>h;h++){var l=t[h]
if(null!==l.top&&l!==r&&l.stack&&e.collision(r,l,i.item)){a=l
break}}null!=a&&(r.top=a.top+a.height+i.item.vertical)}while(a)}}},e.nostack=function(t,e,i){var o,n,s
for(o=0,n=t.length;n>o;o++)if(void 0!==t[o].data.subgroup){s=e.axis
for(var r in i)i.hasOwnProperty(r)&&1==i[r].visible&&i[r].index<i[t[o].data.subgroup].index&&(s+=i[r].height+e.item.vertical)
t[o].top=s}else t[o].top=e.axis},e.collision=function(t,e,o){return t.left-o.horizontal+i<e.left+e.width&&t.left+t.width+o.horizontal-i>e.left&&t.top-o.vertical+i<e.top+e.height&&t.top+t.height+o.vertical-i>e.top}},function(t,e,i){"use strict"
function o(t,e,i){if(this.props={content:{width:0}},this.overflow=!1,t){if(void 0==t.start)throw new Error('Property "start" missing in item '+t.id)
if(void 0==t.end)throw new Error('Property "end" missing in item '+t.id)}n.call(this,t,e,i)}var n=(i(20),i(34))
o.prototype=new n(null,null,null),o.prototype.baseClassName="vis-item vis-range",o.prototype.isVisible=function(t){return this.data.start<t.end&&this.data.end>t.start},o.prototype.redraw=function(){var t=this.dom
if(t||(this.dom={},t=this.dom,t.box=document.createElement("div"),t.frame=document.createElement("div"),t.frame.className="vis-item-overflow",t.box.appendChild(t.frame),t.content=document.createElement("div"),t.content.className="vis-item-content",t.frame.appendChild(t.content),t.box["timeline-item"]=this,this.dirty=!0),!this.parent)throw new Error("Cannot redraw item: no parent attached")
if(!t.box.parentNode){var e=this.parent.dom.foreground
if(!e)throw new Error("Cannot redraw item: parent has no foreground container element")
e.appendChild(t.box)}if(this.displayed=!0,this.dirty){this._updateContents(this.dom.content),this._updateTitle(this.dom.box),this._updateDataAttributes(this.dom.box),this._updateStyle(this.dom.box)
var i=(this.options.editable.updateTime||this.options.editable.updateGroup||this.editable===!0)&&this.editable!==!1,o=(this.data.className?" "+this.data.className:"")+(this.selected?" vis-selected":"")+(i?" vis-editable":" vis-readonly")
t.box.className=this.baseClassName+o,this.overflow="hidden"!==window.getComputedStyle(t.frame).overflow,this.dom.content.style.maxWidth="none",this.props.content.width=this.dom.content.offsetWidth,this.height=this.dom.box.offsetHeight,this.dom.content.style.maxWidth="",this.dirty=!1}this._repaintDeleteButton(t.box),this._repaintDragLeft(),this._repaintDragRight()},o.prototype.show=function(){this.displayed||this.redraw()},o.prototype.hide=function(){if(this.displayed){var t=this.dom.box
t.parentNode&&t.parentNode.removeChild(t),this.displayed=!1}},o.prototype.repositionX=function(t){var e,i,o=this.parent.width,n=this.conversion.toScreen(this.data.start),s=this.conversion.toScreen(this.data.end)
void 0!==t&&t!==!0||(-o>n&&(n=-o),s>2*o&&(s=2*o))
var r=Math.max(s-n,1)
switch(this.overflow?(this.left=n,this.width=r+this.props.content.width,i=this.props.content.width):(this.left=n,this.width=r,i=Math.min(s-n,this.props.content.width)),this.dom.box.style.left=this.left+"px",this.dom.box.style.width=r+"px",this.options.align){case"left":this.dom.content.style.left="0"
break
case"right":this.dom.content.style.left=Math.max(r-i,0)+"px"
break
case"center":this.dom.content.style.left=Math.max((r-i)/2,0)+"px"
break
default:e=this.overflow?s>0?Math.max(-n,0):-i:0>n?-n:0,this.dom.content.style.left=e+"px"}},o.prototype.repositionY=function(){var t=this.options.orientation.item,e=this.dom.box
"top"==t?e.style.top=this.top+"px":e.style.top=this.parent.height-this.top-this.height+"px"},o.prototype._repaintDragLeft=function(){if(this.selected&&this.options.editable.updateTime&&!this.dom.dragLeft){var t=document.createElement("div")
t.className="vis-drag-left",t.dragLeftItem=this,this.dom.box.appendChild(t),this.dom.dragLeft=t}else!this.selected&&this.dom.dragLeft&&(this.dom.dragLeft.parentNode&&this.dom.dragLeft.parentNode.removeChild(this.dom.dragLeft),this.dom.dragLeft=null)},o.prototype._repaintDragRight=function(){if(this.selected&&this.options.editable.updateTime&&!this.dom.dragRight){var t=document.createElement("div")
t.className="vis-drag-right",t.dragRightItem=this,this.dom.box.appendChild(t),this.dom.dragRight=t}else!this.selected&&this.dom.dragRight&&(this.dom.dragRight.parentNode&&this.dom.dragRight.parentNode.removeChild(this.dom.dragRight),this.dom.dragRight=null)},t.exports=o},function(t,e,i){"use strict"
function o(t,e,i){this.id=null,this.parent=null,this.data=t,this.dom=null,this.conversion=e||{},this.options=i||{},this.selected=!1,this.displayed=!1,this.dirty=!0,this.top=null,this.left=null,this.width=null,this.height=null,this.editable=null,this.data&&this.data.hasOwnProperty("editable")&&"boolean"==typeof this.data.editable&&(this.editable=t.editable)}var n=i(20),s=i(1)
o.prototype.stack=!0,o.prototype.select=function(){this.selected=!0,this.dirty=!0,this.displayed&&this.redraw()},o.prototype.unselect=function(){this.selected=!1,this.dirty=!0,this.displayed&&this.redraw()},o.prototype.setData=function(t){var e=void 0!=t.group&&this.data.group!=t.group
e&&this.parent.itemSet._moveToGroup(this,t.group),t.hasOwnProperty("editable")&&"boolean"==typeof t.editable&&(this.editable=t.editable),this.data=t,this.dirty=!0,this.displayed&&this.redraw()},o.prototype.setParent=function(t){this.displayed?(this.hide(),this.parent=t,this.parent&&this.show()):this.parent=t},o.prototype.isVisible=function(t){return!1},o.prototype.show=function(){return!1},o.prototype.hide=function(){return!1},o.prototype.redraw=function(){},o.prototype.repositionX=function(){},o.prototype.repositionY=function(){},o.prototype._repaintDeleteButton=function(t){var e=(this.options.editable.remove||this.data.editable===!0)&&this.data.editable!==!1
if(this.selected&&e&&!this.dom.deleteButton){var i=this,o=document.createElement("div")
o.className="vis-delete",o.title="Delete this item",new n(o).on("tap",function(t){t.stopPropagation(),i.parent.removeFromDataSet(i)}),t.appendChild(o),this.dom.deleteButton=o}else!this.selected&&this.dom.deleteButton&&(this.dom.deleteButton.parentNode&&this.dom.deleteButton.parentNode.removeChild(this.dom.deleteButton),this.dom.deleteButton=null)},o.prototype._updateContents=function(t){var e
if(this.options.template){var i=this.parent.itemSet.itemsData.get(this.id)
e=this.options.template(i)}else e=this.data.content
var o=this._contentToString(this.content)!==this._contentToString(e)
if(o){if(e instanceof Element)t.innerHTML="",t.appendChild(e)
else if(void 0!=e)t.innerHTML=e
else if("background"!=this.data.type||void 0!==this.data.content)throw new Error('Property "content" missing in item '+this.id)
this.content=e}},o.prototype._updateTitle=function(t){null!=this.data.title?t.title=this.data.title||"":t.removeAttribute("vis-title")},o.prototype._updateDataAttributes=function(t){if(this.options.dataAttributes&&this.options.dataAttributes.length>0){var e=[]
if(Array.isArray(this.options.dataAttributes))e=this.options.dataAttributes
else{if("all"!=this.options.dataAttributes)return
e=Object.keys(this.data)}for(var i=0;i<e.length;i++){var o=e[i],n=this.data[o]
null!=n?t.setAttribute("data-"+o,n):t.removeAttribute("data-"+o)}}},o.prototype._updateStyle=function(t){this.style&&(s.removeCssText(t,this.style),this.style=null),this.data.style&&(s.addCssText(t,this.data.style),this.style=this.data.style)},o.prototype._contentToString=function(t){return"string"==typeof t?t:t&&"outerHTML"in t?t.outerHTML:t},o.prototype.getWidthLeft=function(){return 0},o.prototype.getWidthRight=function(){return 0},t.exports=o},function(t,e,i){"use strict"
function o(t,e,i){n.call(this,t,e,i),this.width=0,this.height=0,this.top=0,this.left=0}var n=(i(1),i(31))
o.prototype=Object.create(n.prototype),o.prototype.redraw=function(t,e,i){var o=!1
this.visibleItems=this._updateVisibleItems(this.orderedItems,this.visibleItems,t),this.width=this.dom.background.offsetWidth,this.dom.background.style.height="0"
for(var n=0,s=this.visibleItems.length;s>n;n++){var r=this.visibleItems[n]
r.repositionY(e)}return o},o.prototype.show=function(){this.dom.background.parentNode||this.itemSet.dom.background.appendChild(this.dom.background)},t.exports=o},function(t,e,i){"use strict"
function o(t,e,i){if(this.props={dot:{width:0,height:0},line:{width:0,height:0}},t&&void 0==t.start)throw new Error('Property "start" missing in item '+t)
n.call(this,t,e,i)}var n=i(34)
i(1)
o.prototype=new n(null,null,null),o.prototype.isVisible=function(t){var e=(t.end-t.start)/4
return this.data.start>t.start-e&&this.data.start<t.end+e},o.prototype.redraw=function(){var t=this.dom
if(t||(this.dom={},t=this.dom,t.box=document.createElement("DIV"),t.content=document.createElement("DIV"),t.content.className="vis-item-content",t.box.appendChild(t.content),t.line=document.createElement("DIV"),t.line.className="vis-line",t.dot=document.createElement("DIV"),t.dot.className="vis-dot",t.box["timeline-item"]=this,this.dirty=!0),!this.parent)throw new Error("Cannot redraw item: no parent attached")
if(!t.box.parentNode){var e=this.parent.dom.foreground
if(!e)throw new Error("Cannot redraw item: parent has no foreground container element")
e.appendChild(t.box)}if(!t.line.parentNode){var i=this.parent.dom.background
if(!i)throw new Error("Cannot redraw item: parent has no background container element")
i.appendChild(t.line)}if(!t.dot.parentNode){var o=this.parent.dom.axis
if(!i)throw new Error("Cannot redraw item: parent has no axis container element")
o.appendChild(t.dot)}if(this.displayed=!0,this.dirty){this._updateContents(this.dom.content),this._updateTitle(this.dom.box),this._updateDataAttributes(this.dom.box),this._updateStyle(this.dom.box)
var n=(this.options.editable.updateTime||this.options.editable.updateGroup||this.editable===!0)&&this.editable!==!1,s=(this.data.className?" "+this.data.className:"")+(this.selected?" vis-selected":"")+(n?" vis-editable":" vis-readonly")
t.box.className="vis-item vis-box"+s,t.line.className="vis-item vis-line"+s,t.dot.className="vis-item vis-dot"+s,this.props.dot.height=t.dot.offsetHeight,this.props.dot.width=t.dot.offsetWidth,this.props.line.width=t.line.offsetWidth,this.width=t.box.offsetWidth,this.height=t.box.offsetHeight,this.dirty=!1}this._repaintDeleteButton(t.box)},o.prototype.show=function(){this.displayed||this.redraw()},o.prototype.hide=function(){if(this.displayed){var t=this.dom
t.box.parentNode&&t.box.parentNode.removeChild(t.box),t.line.parentNode&&t.line.parentNode.removeChild(t.line),t.dot.parentNode&&t.dot.parentNode.removeChild(t.dot),this.displayed=!1}},o.prototype.repositionX=function(){var t=this.conversion.toScreen(this.data.start),e=this.options.align
"right"==e?this.left=t-this.width:"left"==e?this.left=t:this.left=t-this.width/2,this.dom.box.style.left=this.left+"px",this.dom.line.style.left=t-this.props.line.width/2+"px",this.dom.dot.style.left=t-this.props.dot.width/2+"px"},o.prototype.repositionY=function(){var t=this.options.orientation.item,e=this.dom.box,i=this.dom.line,o=this.dom.dot
if("top"==t)e.style.top=(this.top||0)+"px",i.style.top="0",i.style.height=this.parent.top+this.top+1+"px",i.style.bottom=""
else{var n=this.parent.itemSet.props.height,s=n-this.parent.top-this.parent.height+this.top
e.style.top=(this.parent.height-this.top-this.height||0)+"px",i.style.top=n-s+"px",i.style.bottom="0"}o.style.top=-this.props.dot.height/2+"px"},o.prototype.getWidthLeft=function(){return this.width/2},o.prototype.getWidthRight=function(){return this.width/2},t.exports=o},function(t,e,i){"use strict"
function o(t,e,i){if(this.props={dot:{top:0,width:0,height:0},content:{height:0,marginLeft:0}},t&&void 0==t.start)throw new Error('Property "start" missing in item '+t)
n.call(this,t,e,i)}var n=i(34)
o.prototype=new n(null,null,null),o.prototype.isVisible=function(t){var e=(t.end-t.start)/4
return this.data.start>t.start-e&&this.data.start<t.end+e},o.prototype.redraw=function(){var t=this.dom
if(t||(this.dom={},t=this.dom,t.point=document.createElement("div"),t.content=document.createElement("div"),t.content.className="vis-item-content",t.point.appendChild(t.content),t.dot=document.createElement("div"),t.point.appendChild(t.dot),t.point["timeline-item"]=this,this.dirty=!0),!this.parent)throw new Error("Cannot redraw item: no parent attached")
if(!t.point.parentNode){var e=this.parent.dom.foreground
if(!e)throw new Error("Cannot redraw item: parent has no foreground container element")
e.appendChild(t.point)}if(this.displayed=!0,this.dirty){this._updateContents(this.dom.content),this._updateTitle(this.dom.point),this._updateDataAttributes(this.dom.point),this._updateStyle(this.dom.point)
var i=(this.options.editable.updateTime||this.options.editable.updateGroup||this.editable===!0)&&this.editable!==!1,o=(this.data.className?" "+this.data.className:"")+(this.selected?" vis-selected":"")+(i?" vis-editable":" vis-readonly")
t.point.className="vis-item vis-point"+o,t.dot.className="vis-item vis-dot"+o,this.props.dot.width=t.dot.offsetWidth,this.props.dot.height=t.dot.offsetHeight,this.props.content.height=t.content.offsetHeight,t.content.style.marginLeft=2*this.props.dot.width+"px",t.dot.style.top=(this.height-this.props.dot.height)/2+"px",t.dot.style.left=this.props.dot.width/2+"px",this.width=t.point.offsetWidth,this.height=t.point.offsetHeight,this.dirty=!1}this._repaintDeleteButton(t.point)},o.prototype.show=function(){this.displayed||this.redraw()},o.prototype.hide=function(){this.displayed&&(this.dom.point.parentNode&&this.dom.point.parentNode.removeChild(this.dom.point),this.displayed=!1)},o.prototype.repositionX=function(){var t=this.conversion.toScreen(this.data.start)
this.left=t-this.props.dot.width,this.dom.point.style.left=this.left+"px"},o.prototype.repositionY=function(){var t=this.options.orientation.item,e=this.dom.point
"top"==t?e.style.top=this.top+"px":e.style.top=this.parent.height-this.top-this.height+"px"},o.prototype.getWidthLeft=function(){return this.props.dot.width},o.prototype.getWidthRight=function(){return this.width-this.props.dot.width},t.exports=o},function(t,e,i){"use strict"
function o(t,e,i){if(this.props={content:{width:0}},this.overflow=!1,t){if(void 0==t.start)throw new Error('Property "start" missing in item '+t.id)
if(void 0==t.end)throw new Error('Property "end" missing in item '+t.id)}n.call(this,t,e,i)}var n=(i(20),i(34)),s=i(35),r=i(33)
o.prototype=new n(null,null,null),o.prototype.baseClassName="vis-item vis-background",o.prototype.stack=!1,o.prototype.isVisible=function(t){return this.data.start<t.end&&this.data.end>t.start},o.prototype.redraw=function(){var t=this.dom
if(t||(this.dom={},t=this.dom,t.box=document.createElement("div"),t.frame=document.createElement("div"),t.frame.className="vis-item-overflow",t.box.appendChild(t.frame),t.content=document.createElement("div"),t.content.className="vis-item-content",t.frame.appendChild(t.content),this.dirty=!0),!this.parent)throw new Error("Cannot redraw item: no parent attached")
if(!t.box.parentNode){var e=this.parent.dom.background
if(!e)throw new Error("Cannot redraw item: parent has no background container element")
e.appendChild(t.box)}if(this.displayed=!0,this.dirty){this._updateContents(this.dom.content),this._updateTitle(this.dom.content),this._updateDataAttributes(this.dom.content),this._updateStyle(this.dom.box)
var i=(this.data.className?" "+this.data.className:"")+(this.selected?" vis-selected":"")
t.box.className=this.baseClassName+i,this.overflow="hidden"!==window.getComputedStyle(t.content).overflow,this.props.content.width=this.dom.content.offsetWidth,this.height=0,this.dirty=!1}},o.prototype.show=r.prototype.show,o.prototype.hide=r.prototype.hide,o.prototype.repositionX=r.prototype.repositionX,o.prototype.repositionY=function(t){var e="top"===this.options.orientation.item
this.dom.content.style.top=e?"":"0",this.dom.content.style.bottom=e?"0":""
var i
if(void 0!==this.data.subgroup){var o=this.data.subgroup,n=this.parent.subgroups,r=n[o].index
if(1==e){i=this.parent.subgroups[o].height+t.item.vertical,i+=0==r?t.axis-.5*t.item.vertical:0
var a=this.parent.top
for(var h in n)n.hasOwnProperty(h)&&1==n[h].visible&&n[h].index<r&&(a+=n[h].height+t.item.vertical)
a+=0!=r?t.axis-.5*t.item.vertical:0,this.dom.box.style.top=a+"px",this.dom.box.style.bottom=""}else{var a=this.parent.top,d=0
for(var h in n)if(n.hasOwnProperty(h)&&1==n[h].visible){var l=n[h].height+t.item.vertical
d+=l,n[h].index>r&&(a+=l)}i=this.parent.subgroups[o].height+t.item.vertical,this.dom.box.style.top=this.parent.height-d+a+"px",this.dom.box.style.bottom=""}}else this.parent instanceof s?(i=Math.max(this.parent.height,this.parent.itemSet.body.domProps.center.height,this.parent.itemSet.body.domProps.centerContainer.height),this.dom.box.style.top=e?"0":"",this.dom.box.style.bottom=e?"":"0"):(i=this.parent.height,this.dom.box.style.top=this.parent.top+"px",this.dom.box.style.bottom="")
this.dom.box.style.height=i+"px"},t.exports=o},function(t,e,i){"use strict"
function o(t,e){this.dom={foreground:null,lines:[],majorTexts:[],minorTexts:[],redundant:{lines:[],majorTexts:[],minorTexts:[]}},this.props={range:{start:0,end:0,minimumStep:0},lineTop:0},this.defaultOptions={orientation:{axis:"bottom"},showMinorLabels:!0,showMajorLabels:!0,format:r.FORMAT,moment:h,timeAxis:null},this.options=n.extend({},this.defaultOptions),this.body=t,this._create(),this.setOptions(e)}var n=i(1),s=i(26),r=i(30),a=i(27),h=i(2)
o.prototype=new s,o.prototype.setOptions=function(t){t&&(n.selectiveExtend(["showMinorLabels","showMajorLabels","hiddenDates","timeAxis","moment"],this.options,t),n.selectiveDeepExtend(["format"],this.options,t),"orientation"in t&&("string"==typeof t.orientation?this.options.orientation.axis=t.orientation:"object"==typeof t.orientation&&"axis"in t.orientation&&(this.options.orientation.axis=t.orientation.axis)),"locale"in t&&("function"==typeof h.locale?h.locale(t.locale):h.lang(t.locale)))},o.prototype._create=function(){this.dom.foreground=document.createElement("div"),this.dom.background=document.createElement("div"),this.dom.foreground.className="vis-time-axis vis-foreground",this.dom.background.className="vis-time-axis vis-background"},o.prototype.destroy=function(){this.dom.foreground.parentNode&&this.dom.foreground.parentNode.removeChild(this.dom.foreground),this.dom.background.parentNode&&this.dom.background.parentNode.removeChild(this.dom.background),this.body=null},o.prototype.redraw=function(){var t=this.props,e=this.dom.foreground,i=this.dom.background,o="top"==this.options.orientation.axis?this.body.dom.top:this.body.dom.bottom,n=e.parentNode!==o
this._calculateCharSize()
var s=this.options.showMinorLabels&&"none"!==this.options.orientation.axis,r=this.options.showMajorLabels&&"none"!==this.options.orientation.axis
t.minorLabelHeight=s?t.minorCharHeight:0,t.majorLabelHeight=r?t.majorCharHeight:0,t.height=t.minorLabelHeight+t.majorLabelHeight,t.width=e.offsetWidth,t.minorLineHeight=this.body.domProps.root.height-t.majorLabelHeight-("top"==this.options.orientation.axis?this.body.domProps.bottom.height:this.body.domProps.top.height),t.minorLineWidth=1,t.majorLineHeight=t.minorLineHeight+t.majorLabelHeight,t.majorLineWidth=1
var a=e.nextSibling,h=i.nextSibling
return e.parentNode&&e.parentNode.removeChild(e),i.parentNode&&i.parentNode.removeChild(i),e.style.height=this.props.height+"px",this._repaintLabels(),a?o.insertBefore(e,a):o.appendChild(e),h?this.body.dom.backgroundVertical.insertBefore(i,h):this.body.dom.backgroundVertical.appendChild(i),this._isResized()||n},o.prototype._repaintLabels=function(){var t=this.options.orientation.axis,e=n.convert(this.body.range.start,"Number"),i=n.convert(this.body.range.end,"Number"),o=this.body.util.toTime(7*(this.props.minorCharWidth||10)).valueOf(),s=o-a.getHiddenDurationBefore(this.options.moment,this.body.hiddenDates,this.body.range,o)
s-=this.body.util.toTime(0).valueOf()
var h=new r(new Date(e),new Date(i),s,this.body.hiddenDates)
h.setMoment(this.options.moment),this.options.format&&h.setFormat(this.options.format),this.options.timeAxis&&h.setScale(this.options.timeAxis),this.step=h
var d=this.dom
d.redundant.lines=d.lines,d.redundant.majorTexts=d.majorTexts,d.redundant.minorTexts=d.minorTexts,d.lines=[],d.majorTexts=[],d.minorTexts=[]
var l,u,c,p,f,m,g,v,y,b=void 0,_=0
for(h.start(),u=h.getCurrent(),p=this.body.util.toScreen(u);h.hasNext()&&1e3>_;){_++,f=h.isMajor(),y=h.getClassName(),v=h.getLabelMinor(),l=u,c=p,h.next(),u=h.getCurrent(),p=this.body.util.toScreen(u),m=p-c
var w=(v.length+1)*this.props.minorCharWidth<m
this.options.showMinorLabels&&w&&this._repaintMinorText(c,v,t,y),f&&this.options.showMajorLabels?(c>0&&(void 0==b&&(b=c),this._repaintMajorText(c,h.getLabelMajor(),t,y)),g=this._repaintMajorLine(c,m,t,y)):w?g=this._repaintMinorLine(c,m,t,y):g&&(g.style.width=parseInt(g.style.width)+m+"px")}if(this.options.showMajorLabels){var x=this.body.util.toTime(0),k=h.getLabelMajor(x),T=k.length*(this.props.majorCharWidth||10)+10;(void 0==b||b>T)&&this._repaintMajorText(0,k,t,y)}n.forEach(this.dom.redundant,function(t){for(;t.length;){var e=t.pop()
e&&e.parentNode&&e.parentNode.removeChild(e)}})},o.prototype._repaintMinorText=function(t,e,i,o){var n=this.dom.redundant.minorTexts.shift()
if(!n){var s=document.createTextNode("")
n=document.createElement("div"),n.appendChild(s),this.dom.foreground.appendChild(n)}return this.dom.minorTexts.push(n),n.childNodes[0].nodeValue=e,n.style.top="top"==i?this.props.majorLabelHeight+"px":"0",n.style.left=t+"px",n.className="vis-text vis-minor "+o,n},o.prototype._repaintMajorText=function(t,e,i,o){var n=this.dom.redundant.majorTexts.shift()
if(!n){var s=document.createTextNode(e)
n=document.createElement("div"),n.appendChild(s),this.dom.foreground.appendChild(n)}return this.dom.majorTexts.push(n),n.childNodes[0].nodeValue=e,n.className="vis-text vis-major "+o,n.style.top="top"==i?"0":this.props.minorLabelHeight+"px",n.style.left=t+"px",n},o.prototype._repaintMinorLine=function(t,e,i,o){var n=this.dom.redundant.lines.shift()
n||(n=document.createElement("div"),this.dom.background.appendChild(n)),this.dom.lines.push(n)
var s=this.props
return"top"==i?n.style.top=s.majorLabelHeight+"px":n.style.top=this.body.domProps.top.height+"px",n.style.height=s.minorLineHeight+"px",n.style.left=t-s.minorLineWidth/2+"px",n.style.width=e+"px",n.className="vis-grid vis-vertical vis-minor "+o,n},o.prototype._repaintMajorLine=function(t,e,i,o){var n=this.dom.redundant.lines.shift()
n||(n=document.createElement("div"),this.dom.background.appendChild(n)),this.dom.lines.push(n)
var s=this.props
return"top"==i?n.style.top="0":n.style.top=this.body.domProps.top.height+"px",n.style.left=t-s.majorLineWidth/2+"px",n.style.height=s.majorLineHeight+"px",n.style.width=e+"px",n.className="vis-grid vis-vertical vis-major "+o,n},o.prototype._calculateCharSize=function(){this.dom.measureCharMinor||(this.dom.measureCharMinor=document.createElement("DIV"),this.dom.measureCharMinor.className="vis-text vis-minor vis-measure",this.dom.measureCharMinor.style.position="absolute",this.dom.measureCharMinor.appendChild(document.createTextNode("0")),this.dom.foreground.appendChild(this.dom.measureCharMinor)),this.props.minorCharHeight=this.dom.measureCharMinor.clientHeight,this.props.minorCharWidth=this.dom.measureCharMinor.clientWidth,this.dom.measureCharMajor||(this.dom.measureCharMajor=document.createElement("DIV"),this.dom.measureCharMajor.className="vis-text vis-major vis-measure",this.dom.measureCharMajor.style.position="absolute",this.dom.measureCharMajor.appendChild(document.createTextNode("0")),this.dom.foreground.appendChild(this.dom.measureCharMajor)),this.props.majorCharHeight=this.dom.measureCharMajor.clientHeight,this.props.majorCharWidth=this.dom.measureCharMajor.clientWidth},t.exports=o},function(t,e,i){"use strict"
function o(t){this.active=!1,this.dom={container:t},this.dom.overlay=document.createElement("div"),this.dom.overlay.className="vis-overlay",this.dom.container.appendChild(this.dom.overlay),this.hammer=a(this.dom.overlay),this.hammer.on("tap",this._onTapOverlay.bind(this))
var e=this,i=["tap","doubletap","press","pinch","pan","panstart","panmove","panend"]
i.forEach(function(t){e.hammer.on(t,function(t){t.stopPropagation()})}),document&&document.body&&(this.onClick=function(i){n(i.target,t)||e.deactivate()},document.body.addEventListener("click",this.onClick)),void 0!==this.keycharm&&this.keycharm.destroy(),this.keycharm=s(),this.escListener=this.deactivate.bind(this)}function n(t,e){for(;t;){if(t===e)return!0
t=t.parentNode}return!1}var s=i(41),r=i(12),a=i(20),h=i(1)
r(o.prototype),o.current=null,o.prototype.destroy=function(){this.deactivate(),this.dom.overlay.parentNode.removeChild(this.dom.overlay),this.onClick&&document.body.removeEventListener("click",this.onClick),this.hammer.destroy(),this.hammer=null},o.prototype.activate=function(){o.current&&o.current.deactivate(),o.current=this,this.active=!0,this.dom.overlay.style.display="none",h.addClassName(this.dom.container,"vis-active"),this.emit("change"),this.emit("activate"),this.keycharm.bind("esc",this.escListener)},o.prototype.deactivate=function(){this.active=!1,this.dom.overlay.style.display="",h.removeClassName(this.dom.container,"vis-active"),this.keycharm.unbind("esc",this.escListener),this.emit("change"),this.emit("deactivate")},o.prototype._onTapOverlay=function(t){this.activate(),t.stopPropagation()},t.exports=o},function(t,e,i){var o,n,s
!function(i,r){n=[],o=r,s="function"==typeof o?o.apply(e,n):o,!(void 0!==s&&(t.exports=s))}(this,function(){function t(t){var e,i=t&&t.preventDefault||!1,o=t&&t.container||window,n={},s={keydown:{},keyup:{}},r={}
for(e=97;122>=e;e++)r[String.fromCharCode(e)]={code:65+(e-97),shift:!1}
for(e=65;90>=e;e++)r[String.fromCharCode(e)]={code:e,shift:!0}
for(e=0;9>=e;e++)r[""+e]={code:48+e,shift:!1}
for(e=1;12>=e;e++)r["F"+e]={code:111+e,shift:!1}
for(e=0;9>=e;e++)r["num"+e]={code:96+e,shift:!1}
r["num*"]={code:106,shift:!1},r["num+"]={code:107,shift:!1},r["num-"]={code:109,shift:!1},r["num/"]={code:111,shift:!1},r["num."]={code:110,shift:!1},r.left={code:37,shift:!1},r.up={code:38,shift:!1},r.right={code:39,shift:!1},r.down={code:40,shift:!1},r.space={code:32,shift:!1},r.enter={code:13,shift:!1},r.shift={code:16,shift:void 0},r.esc={code:27,shift:!1},r.backspace={code:8,shift:!1},r.tab={code:9,shift:!1},r.ctrl={code:17,shift:!1},r.alt={code:18,shift:!1},r["delete"]={code:46,shift:!1},r.pageup={code:33,shift:!1},r.pagedown={code:34,shift:!1},r["="]={code:187,shift:!1},r["-"]={code:189,shift:!1},r["]"]={code:221,shift:!1},r["["]={code:219,shift:!1}
var a=function(t){d(t,"keydown")},h=function(t){d(t,"keyup")},d=function(t,e){if(void 0!==s[e][t.keyCode]){for(var o=s[e][t.keyCode],n=0;n<o.length;n++)void 0===o[n].shift?o[n].fn(t):1==o[n].shift&&1==t.shiftKey?o[n].fn(t):0==o[n].shift&&0==t.shiftKey&&o[n].fn(t)
1==i&&t.preventDefault()}}
return n.bind=function(t,e,i){if(void 0===i&&(i="keydown"),void 0===r[t])throw new Error("unsupported key: "+t)
void 0===s[i][r[t].code]&&(s[i][r[t].code]=[]),s[i][r[t].code].push({fn:e,shift:r[t].shift})},n.bindAll=function(t,e){void 0===e&&(e="keydown")
for(var i in r)r.hasOwnProperty(i)&&n.bind(i,t,e)},n.getKey=function(t){for(var e in r)if(r.hasOwnProperty(e)){if(1==t.shiftKey&&1==r[e].shift&&t.keyCode==r[e].code)return e
if(0==t.shiftKey&&0==r[e].shift&&t.keyCode==r[e].code)return e
if(t.keyCode==r[e].code&&"shift"==e)return e}return"unknown key, currently not supported"},n.unbind=function(t,e,i){if(void 0===i&&(i="keydown"),void 0===r[t])throw new Error("unsupported key: "+t)
if(void 0!==e){var o=[],n=s[i][r[t].code]
if(void 0!==n)for(var a=0;a<n.length;a++)n[a].fn==e&&n[a].shift==r[t].shift||o.push(s[i][r[t].code][a])
s[i][r[t].code]=o}else s[i][r[t].code]=[]},n.reset=function(){s={keydown:{},keyup:{}}},n.destroy=function(){s={keydown:{},keyup:{}},o.removeEventListener("keydown",a,!0),o.removeEventListener("keyup",h,!0)},o.addEventListener("keydown",a,!0),o.addEventListener("keyup",h,!0),n}return t})},function(t,e,i){"use strict"
function o(t,e){this.body=t,this.defaultOptions={moment:a,locales:h,locale:"en",id:void 0},this.options=s.extend({},this.defaultOptions),e&&e.time?this.customTime=e.time:this.customTime=new Date,this.eventParams={},this.setOptions(e),this._create()}var n=i(20),s=i(1),r=i(26),a=i(2),h=i(43)
o.prototype=new r,o.prototype.setOptions=function(t){t&&s.selectiveExtend(["moment","locale","locales","id"],this.options,t)},o.prototype._create=function(){var t=document.createElement("div")
t["custom-time"]=this,t.className="vis-custom-time "+(this.options.id||""),t.style.position="absolute",t.style.top="0px",t.style.height="100%",this.bar=t
var e=document.createElement("div")
e.style.position="relative",e.style.top="0px",e.style.left="-10px",e.style.height="100%",e.style.width="20px",t.appendChild(e),this.hammer=new n(e),this.hammer.on("panstart",this._onDragStart.bind(this)),this.hammer.on("panmove",this._onDrag.bind(this)),this.hammer.on("panend",this._onDragEnd.bind(this)),this.hammer.get("pan").set({threshold:5,direction:30})},o.prototype.destroy=function(){this.hide(),this.hammer.destroy(),this.hammer=null,this.body=null},o.prototype.redraw=function(){var t=this.body.dom.backgroundVertical
this.bar.parentNode!=t&&(this.bar.parentNode&&this.bar.parentNode.removeChild(this.bar),t.appendChild(this.bar))
var e=this.body.util.toScreen(this.customTime),i=this.options.locales[this.options.locale]
i||(this.warned||(console.log("WARNING: options.locales['"+this.options.locale+"'] not found. See http://visjs.org/docs/timeline.html#Localization"),this.warned=!0),i=this.options.locales.en)
var o=i.time+": "+this.options.moment(this.customTime).format("dddd, MMMM Do YYYY, H:mm:ss")
return o=o.charAt(0).toUpperCase()+o.substring(1),this.bar.style.left=e+"px",this.bar.title=o,!1},o.prototype.hide=function(){this.bar.parentNode&&this.bar.parentNode.removeChild(this.bar)},o.prototype.setCustomTime=function(t){this.customTime=s.convert(t,"Date"),this.redraw()},o.prototype.getCustomTime=function(){return new Date(this.customTime.valueOf())},o.prototype._onDragStart=function(t){this.eventParams.dragging=!0,this.eventParams.customTime=this.customTime,t.stopPropagation()},o.prototype._onDrag=function(t){if(this.eventParams.dragging){var e=this.body.util.toScreen(this.eventParams.customTime)+t.deltaX,i=this.body.util.toTime(e)
this.setCustomTime(i),this.body.emitter.emit("timechange",{id:this.options.id,time:new Date(this.customTime.valueOf())}),t.stopPropagation()}},o.prototype._onDragEnd=function(t){this.eventParams.dragging&&(this.body.emitter.emit("timechanged",{id:this.options.id,time:new Date(this.customTime.valueOf())}),t.stopPropagation())},o.customTimeFromTarget=function(t){for(var e=t.target;e;){if(e.hasOwnProperty("custom-time"))return e["custom-time"]
e=e.parentNode}return null},t.exports=o},function(t,e){"use strict"
e.en={current:"current",time:"time"},e.en_EN=e.en,e.en_US=e.en,e.nl={current:"huidige",time:"tijd"},e.nl_NL=e.nl,e.nl_BE=e.nl},function(t,e,i){"use strict"
function o(t,e){this.body=t,this.defaultOptions={showCurrentTime:!0,moment:r,locales:a,locale:"en"},this.options=n.extend({},this.defaultOptions),this.offset=0,this._create(),this.setOptions(e)}var n=i(1),s=i(26),r=i(2),a=i(43)
o.prototype=new s,o.prototype._create=function(){var t=document.createElement("div")
t.className="vis-current-time",t.style.position="absolute",t.style.top="0px",t.style.height="100%",this.bar=t},o.prototype.destroy=function(){this.options.showCurrentTime=!1,this.redraw(),this.body=null},o.prototype.setOptions=function(t){t&&n.selectiveExtend(["showCurrentTime","moment","locale","locales"],this.options,t)},o.prototype.redraw=function(){if(this.options.showCurrentTime){var t=this.body.dom.backgroundVertical
this.bar.parentNode!=t&&(this.bar.parentNode&&this.bar.parentNode.removeChild(this.bar),t.appendChild(this.bar),this.start())
var e=this.options.moment((new Date).valueOf()+this.offset),i=this.body.util.toScreen(e),o=this.options.locales[this.options.locale]
o||(this.warned||(console.log("WARNING: options.locales['"+this.options.locale+"'] not found. See http://visjs.org/docs/timeline.html#Localization"),this.warned=!0),o=this.options.locales.en)
var n=o.current+" "+o.time+": "+e.format("dddd, MMMM Do YYYY, H:mm:ss")
n=n.charAt(0).toUpperCase()+n.substring(1),this.bar.style.left=i+"px",this.bar.title=n}else this.bar.parentNode&&this.bar.parentNode.removeChild(this.bar),this.stop()
return!1},o.prototype.start=function(){function t(){e.stop()
var i=e.body.range.conversion(e.body.domProps.center.width).scale,o=1/i/10
30>o&&(o=30),o>1e3&&(o=1e3),e.redraw(),e.currentTimeTimer=setTimeout(t,o)}var e=this
t()},o.prototype.stop=function(){void 0!==this.currentTimeTimer&&(clearTimeout(this.currentTimeTimer),delete this.currentTimeTimer)},o.prototype.setCurrentTime=function(t){var e=n.convert(t,"Date").valueOf(),i=(new Date).valueOf()
this.offset=e-i,this.redraw()},o.prototype.getCurrentTime=function(){return new Date((new Date).valueOf()+this.offset)},t.exports=o},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=i(46),a=o(r),h=i(1),d=function(){function t(e,i,o){var s=arguments.length<=3||void 0===arguments[3]?1:arguments[3]
n(this,t),this.parent=e,this.changedOptions=[],this.container=i,this.allowCreation=!1,this.options={},this.initialized=!1,this.popupCounter=0,this.defaultOptions={enabled:!1,filter:!0,container:void 0,showButton:!0},h.extend(this.options,this.defaultOptions),this.configureOptions=o,this.moduleOptions={},this.domElements=[],this.popupDiv={},this.popupLimit=5,this.popupHistory={},this.colorPicker=new a["default"](s),this.wrapper=void 0}return s(t,[{key:"setOptions",value:function(t){if(void 0!==t){this.popupHistory={},this._removePopup()
var e=!0
"string"==typeof t?this.options.filter=t:t instanceof Array?this.options.filter=t.join():"object"==typeof t?(void 0!==t.container&&(this.options.container=t.container),void 0!==t.filter&&(this.options.filter=t.filter),void 0!==t.showButton&&(this.options.showButton=t.showButton),void 0!==t.enabled&&(e=t.enabled)):"boolean"==typeof t?(this.options.filter=!0,e=t):"function"==typeof t&&(this.options.filter=t,e=!0),this.options.filter===!1&&(e=!1),this.options.enabled=e}this._clean()}},{key:"setModuleOptions",value:function(t){this.moduleOptions=t,this.options.enabled===!0&&(this._clean(),void 0!==this.options.container&&(this.container=this.options.container),this._create())}},{key:"_create",value:function(){var t=this
this._clean(),this.changedOptions=[]
var e=this.options.filter,i=0,o=!1
for(var n in this.configureOptions)this.configureOptions.hasOwnProperty(n)&&(this.allowCreation=!1,o=!1,"function"==typeof e?(o=e(n,[]),o=o||this._handleObject(this.configureOptions[n],[n],!0)):e!==!0&&-1===e.indexOf(n)||(o=!0),o!==!1&&(this.allowCreation=!0,i>0&&this._makeItem([]),this._makeHeader(n),this._handleObject(this.configureOptions[n],[n])),i++)
this.options.showButton===!0&&!function(){var e=document.createElement("div")
e.className="vis-configuration vis-config-button",e.innerHTML="generate options",e.onclick=function(){t._printOptions()},e.onmouseover=function(){e.className="vis-configuration vis-config-button hover"},e.onmouseout=function(){e.className="vis-configuration vis-config-button"},t.optionsContainer=document.createElement("div"),t.optionsContainer.className="vis-configuration vis-config-option-container",t.domElements.push(t.optionsContainer),t.domElements.push(e)}(),this._push(),this.colorPicker.insertTo(this.container)}},{key:"_push",value:function(){this.wrapper=document.createElement("div"),this.wrapper.className="vis-configuration-wrapper",this.container.appendChild(this.wrapper)
for(var t=0;t<this.domElements.length;t++)this.wrapper.appendChild(this.domElements[t])
this._showPopupIfNeeded()}},{key:"_clean",value:function(){for(var t=0;t<this.domElements.length;t++)this.wrapper.removeChild(this.domElements[t])
void 0!==this.wrapper&&(this.container.removeChild(this.wrapper),this.wrapper=void 0),this.domElements=[],this._removePopup()}},{key:"_getValue",value:function(t){for(var e=this.moduleOptions,i=0;i<t.length;i++){if(void 0===e[t[i]]){e=void 0
break}e=e[t[i]]}return e}},{key:"_makeItem",value:function(t){var e=arguments,i=this
if(this.allowCreation===!0){var o,n,s,r=function(){var r=document.createElement("div")
for(r.className="vis-configuration vis-config-item vis-config-s"+t.length,o=e.length,n=Array(o>1?o-1:0),s=1;o>s;s++)n[s-1]=e[s]
return n.forEach(function(t){r.appendChild(t)}),i.domElements.push(r),{v:i.domElements.length}}()
if("object"==typeof r)return r.v}return 0}},{key:"_makeHeader",value:function(t){var e=document.createElement("div")
e.className="vis-configuration vis-config-header",e.innerHTML=t,this._makeItem([],e)}},{key:"_makeLabel",value:function(t,e){var i=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],o=document.createElement("div")
return o.className="vis-configuration vis-config-label vis-config-s"+e.length,i===!0?o.innerHTML="<i><b>"+t+":</b></i>":o.innerHTML=t+":",o}},{key:"_makeDropdown",value:function(t,e,i){var o=document.createElement("select")
o.className="vis-configuration vis-config-select"
var n=0
void 0!==e&&-1!==t.indexOf(e)&&(n=t.indexOf(e))
for(var s=0;s<t.length;s++){var r=document.createElement("option")
r.value=t[s],s===n&&(r.selected="selected"),r.innerHTML=t[s],o.appendChild(r)}var a=this
o.onchange=function(){a._update(this.value,i)}
var h=this._makeLabel(i[i.length-1],i)
this._makeItem(i,h,o)}},{key:"_makeRange",value:function(t,e,i){var o=t[0],n=t[1],s=t[2],r=t[3],a=document.createElement("input")
a.className="vis-configuration vis-config-range"
try{a.type="range",a.min=n,a.max=s}catch(h){}a.step=r
var d="",l=0
if(void 0!==e){var u=1.2
0>e&&n>e*u?(a.min=Math.ceil(e*u),l=a.min,d="range increased"):n>e/u&&(a.min=Math.ceil(e/u),l=a.min,d="range increased"),e*u>s&&1!==s&&(a.max=Math.ceil(e*u),l=a.max,d="range increased"),a.value=e}else a.value=o
var c=document.createElement("input")
c.className="vis-configuration vis-config-rangeinput",c.value=a.value
var p=this
a.onchange=function(){c.value=this.value,p._update(Number(this.value),i)},a.oninput=function(){c.value=this.value}
var f=this._makeLabel(i[i.length-1],i),m=this._makeItem(i,f,a,c)
""!==d&&this.popupHistory[m]!==l&&(this.popupHistory[m]=l,this._setupPopup(d,m))}},{key:"_setupPopup",value:function(t,e){var i=this
if(this.initialized===!0&&this.allowCreation===!0&&this.popupCounter<this.popupLimit){var o=document.createElement("div")
o.id="vis-configuration-popup",o.className="vis-configuration-popup",o.innerHTML=t,o.onclick=function(){i._removePopup()},this.popupCounter+=1,this.popupDiv={html:o,index:e}}}},{key:"_removePopup",value:function(){void 0!==this.popupDiv.html&&(this.popupDiv.html.parentNode.removeChild(this.popupDiv.html),clearTimeout(this.popupDiv.hideTimeout),clearTimeout(this.popupDiv.deleteTimeout),this.popupDiv={})}},{key:"_showPopupIfNeeded",value:function(){var t=this
if(void 0!==this.popupDiv.html){var e=this.domElements[this.popupDiv.index],i=e.getBoundingClientRect()
this.popupDiv.html.style.left=i.left+"px",this.popupDiv.html.style.top=i.top-30+"px",document.body.appendChild(this.popupDiv.html),this.popupDiv.hideTimeout=setTimeout(function(){t.popupDiv.html.style.opacity=0},1500),this.popupDiv.deleteTimeout=setTimeout(function(){t._removePopup()},1800)}}},{key:"_makeCheckbox",value:function(t,e,i){var o=document.createElement("input")
o.type="checkbox",o.className="vis-configuration vis-config-checkbox",o.checked=t,void 0!==e&&(o.checked=e,e!==t&&("object"==typeof t?e!==t.enabled&&this.changedOptions.push({path:i,value:e}):this.changedOptions.push({path:i,value:e})))
var n=this
o.onchange=function(){n._update(this.checked,i)}
var s=this._makeLabel(i[i.length-1],i)
this._makeItem(i,s,o)}},{key:"_makeTextInput",value:function(t,e,i){var o=document.createElement("input")
o.type="text",o.className="vis-configuration vis-config-text",o.value=e,e!==t&&this.changedOptions.push({path:i,value:e})
var n=this
o.onchange=function(){n._update(this.value,i)}
var s=this._makeLabel(i[i.length-1],i)
this._makeItem(i,s,o)}},{key:"_makeColorField",value:function(t,e,i){var o=this,n=t[1],s=document.createElement("div")
e=void 0===e?n:e,"none"!==e?(s.className="vis-configuration vis-config-colorBlock",s.style.backgroundColor=e):s.className="vis-configuration vis-config-colorBlock none",e=void 0===e?n:e,s.onclick=function(){o._showColorPicker(e,s,i)}
var r=this._makeLabel(i[i.length-1],i)
this._makeItem(i,r,s)}},{key:"_showColorPicker",value:function(t,e,i){var o=this,n=e.getBoundingClientRect(),s=document.body.getBoundingClientRect(),r=n.left+n.width+5,a=n.top-s.top+n.height+2
this.colorPicker.show(r,a),this.colorPicker.setColor(t),this.colorPicker.setCallback(function(t){var n="rgba("+t.r+","+t.g+","+t.b+","+t.a+")"
e.style.backgroundColor=n,o._update(n,i)})}},{key:"_handleObject",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?[]:arguments[1],i=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],o=!1,n=this.options.filter,s=!1
for(var r in t)if(t.hasOwnProperty(r)){o=!0
var a=t[r],d=h.copyAndExtendArray(e,r)
if("function"==typeof n&&(o=n(r,e),o===!1&&!(a instanceof Array)&&"string"!=typeof a&&"boolean"!=typeof a&&a instanceof Object&&(this.allowCreation=!1,o=this._handleObject(a,d,!0),this.allowCreation=i===!1)),o!==!1){s=!0
var l=this._getValue(d)
if(a instanceof Array)this._handleArray(a,l,d)
else if("string"==typeof a)this._makeTextInput(a,l,d)
else if("boolean"==typeof a)this._makeCheckbox(a,l,d)
else if(a instanceof Object){var u=!0
if(-1!==e.indexOf("physics")&&this.moduleOptions.physics.solver!==r&&(u=!1),u===!0)if(void 0!==a.enabled){var c=h.copyAndExtendArray(d,"enabled"),p=this._getValue(c)
if(p===!0){var f=this._makeLabel(r,d,!0)
this._makeItem(d,f),s=this._handleObject(a,d)||s}else this._makeCheckbox(a,p,d)}else{var f=this._makeLabel(r,d,!0)
this._makeItem(d,f),s=this._handleObject(a,d)||s}}else console.error("dont know how to handle",a,r,d)}}return s}},{key:"_handleArray",value:function(t,e,i){"string"==typeof t[0]&&"color"===t[0]?(this._makeColorField(t,e,i),t[1]!==e&&this.changedOptions.push({path:i,value:e})):"string"==typeof t[0]?(this._makeDropdown(t,e,i),t[0]!==e&&this.changedOptions.push({path:i,value:e})):"number"==typeof t[0]&&(this._makeRange(t,e,i),t[0]!==e&&this.changedOptions.push({path:i,value:Number(e)}))}},{key:"_update",value:function(t,e){var i=this._constructOptions(t,e)
this.parent.body&&this.parent.body.emitter&&this.parent.body.emitter.emit&&this.parent.body.emitter.emit("configChange",i),this.initialized=!0,this.parent.setOptions(i)}},{key:"_constructOptions",value:function(t,e){var i=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],o=i
t="true"===t?!0:t,t="false"===t?!1:t
for(var n=0;n<e.length;n++)"global"!==e[n]&&(void 0===o[e[n]]&&(o[e[n]]={}),n!==e.length-1?o=o[e[n]]:o[e[n]]=t)
return i}},{key:"_printOptions",value:function(){var t=this.getOptions()
this.optionsContainer.innerHTML="<pre>var options = "+JSON.stringify(t,null,2)+"</pre>"}},{key:"getOptions",value:function(){for(var t={},e=0;e<this.changedOptions.length;e++)this._constructOptions(this.changedOptions[e].value,this.changedOptions[e].path,t)
return t}}]),t}()
e["default"]=d,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=i(20),r=i(25),a=i(1),h=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?1:arguments[0]
o(this,t),this.pixelRatio=e,this.generated=!1,this.centerCoordinates={x:144.5,y:144.5},this.r=289*.49,this.color={r:255,g:255,b:255,a:1},this.hueCircle=void 0,this.initialColor={r:255,g:255,b:255,a:1},this.previousColor=void 0,this.applied=!1,this.updateCallback=function(){},this._create()}return n(t,[{key:"insertTo",value:function(t){void 0!==this.hammer&&(this.hammer.destroy(),this.hammer=void 0),this.container=t,this.container.appendChild(this.frame),this._bindHammer(),this._setSize()}},{key:"setCallback",value:function(t){if("function"!=typeof t)throw new Error("Function attempted to set as colorPicker callback is not a function.")
this.updateCallback=t}},{key:"_isColorString",value:function(t){var e={black:"#000000",navy:"#000080",darkblue:"#00008B",mediumblue:"#0000CD",blue:"#0000FF",darkgreen:"#006400",green:"#008000",teal:"#008080",darkcyan:"#008B8B",deepskyblue:"#00BFFF",darkturquoise:"#00CED1",mediumspringgreen:"#00FA9A",lime:"#00FF00",springgreen:"#00FF7F",aqua:"#00FFFF",cyan:"#00FFFF",midnightblue:"#191970",dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",forestgreen:"#228B22",seagreen:"#2E8B57",darkslategray:"#2F4F4F",limegreen:"#32CD32",mediumseagreen:"#3CB371",turquoise:"#40E0D0",royalblue:"#4169E1",steelblue:"#4682B4",darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",indigo:"#4B0082",darkolivegreen:"#556B2F",cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",mediumaquamarine:"#66CDAA",dimgray:"#696969",slateblue:"#6A5ACD",olivedrab:"#6B8E23",slategray:"#708090",lightslategray:"#778899",mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",chartreuse:"#7FFF00",aquamarine:"#7FFFD4",maroon:"#800000",purple:"#800080",olive:"#808000",gray:"#808080",skyblue:"#87CEEB",lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",darkred:"#8B0000",darkmagenta:"#8B008B",saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",lightgreen:"#90EE90",mediumpurple:"#9370D8",darkviolet:"#9400D3",palegreen:"#98FB98",darkorchid:"#9932CC",yellowgreen:"#9ACD32",sienna:"#A0522D",brown:"#A52A2A",darkgray:"#A9A9A9",lightblue:"#ADD8E6",greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",firebrick:"#B22222",darkgoldenrod:"#B8860B",mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",darkkhaki:"#BDB76B",silver:"#C0C0C0",mediumvioletred:"#C71585",indianred:"#CD5C5C",peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",lightgrey:"#D3D3D3",palevioletred:"#D87093",thistle:"#D8BFD8",orchid:"#DA70D6",goldenrod:"#DAA520",crimson:"#DC143C",gainsboro:"#DCDCDC",plum:"#DDA0DD",burlywood:"#DEB887",lightcyan:"#E0FFFF",lavender:"#E6E6FA",darksalmon:"#E9967A",violet:"#EE82EE",palegoldenrod:"#EEE8AA",lightcoral:"#F08080",khaki:"#F0E68C",aliceblue:"#F0F8FF",honeydew:"#F0FFF0",azure:"#F0FFFF",sandybrown:"#F4A460",wheat:"#F5DEB3",beige:"#F5F5DC",whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",ghostwhite:"#F8F8FF",salmon:"#FA8072",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",red:"#FF0000",fuchsia:"#FF00FF",magenta:"#FF00FF",deeppink:"#FF1493",orangered:"#FF4500",tomato:"#FF6347",hotpink:"#FF69B4",coral:"#FF7F50",darkorange:"#FF8C00",lightsalmon:"#FFA07A",orange:"#FFA500",lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",moccasin:"#FFE4B5",bisque:"#FFE4C4",mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",seashell:"#FFF5EE",cornsilk:"#FFF8DC",lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",snow:"#FFFAFA",yellow:"#FFFF00",lightyellow:"#FFFFE0",ivory:"#FFFFF0",white:"#FFFFFF"}
return"string"==typeof t?e[t]:void 0}},{key:"setColor",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?!0:arguments[1]
if("none"!==t){var i=void 0,o=this._isColorString(t)
if(void 0!==o&&(t=o),a.isString(t)===!0){if(a.isValidRGB(t)===!0){var n=t.substr(4).substr(0,t.length-5).split(",")
i={r:n[0],g:n[1],b:n[2],a:1}}else if(a.isValidRGBA(t)===!0){var n=t.substr(5).substr(0,t.length-6).split(",")
i={r:n[0],g:n[1],b:n[2],a:n[3]}}else if(a.isValidHex(t)===!0){var s=a.hexToRGB(t)
i={r:s.r,g:s.g,b:s.b,a:1}}}else if(t instanceof Object&&void 0!==t.r&&void 0!==t.g&&void 0!==t.b){var r=void 0!==t.a?t.a:"1.0"
i={r:t.r,g:t.g,b:t.b,a:r}}if(void 0===i)throw new Error("Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: "+JSON.stringify(t))
this._setColor(i,e)}}},{key:"show",value:function(t,e){this.applied=!1,this.frame.style.display="block",this.frame.style.top=e+"px",this.frame.style.left=t+"px",this._generateHueCircle()}},{key:"_hide",value:function(){var t=arguments.length<=0||void 0===arguments[0]?!0:arguments[0]
t===!0&&(this.previousColor=a.extend({},this.color)),this.applied===!0&&this.updateCallback(this.initialColor),this.frame.style.display="none"}},{key:"_save",value:function(){this.updateCallback(this.color),this.applied=!1,this._hide()}},{key:"_apply",value:function(){this.applied=!0,this.updateCallback(this.color),this._updatePicker(this.color)}},{key:"_loadLast",value:function(){void 0!==this.previousColor?this.setColor(this.previousColor,!1):alert("There is no last color to load...")}},{key:"_setColor",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?!0:arguments[1]
e===!0&&(this.initialColor=a.extend({},t)),this.color=t
var i=a.RGBToHSV(t.r,t.g,t.b),o=2*Math.PI,n=this.r*i.s,s=this.centerCoordinates.x+n*Math.sin(o*i.h),r=this.centerCoordinates.y+n*Math.cos(o*i.h)
this.colorPickerSelector.style.left=s-.5*this.colorPickerSelector.clientWidth+"px",this.colorPickerSelector.style.top=r-.5*this.colorPickerSelector.clientHeight+"px",this._updatePicker(t)}},{key:"_setOpacity",value:function(t){this.color.a=t/100,this._updatePicker(this.color)}},{key:"_setBrightness",value:function(t){var e=a.RGBToHSV(this.color.r,this.color.g,this.color.b)
e.v=t/100
var i=a.HSVToRGB(e.h,e.s,e.v)
i.a=this.color.a,this.color=i,this._updatePicker()}},{key:"_updatePicker",value:function(){var t=arguments.length<=0||void 0===arguments[0]?this.color:arguments[0],e=a.RGBToHSV(t.r,t.g,t.b),i=this.colorPickerCanvas.getContext("2d")
void 0===this.pixelRation&&(this.pixelRatio=(window.devicePixelRatio||1)/(i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1)),i.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)
var o=this.colorPickerCanvas.clientWidth,n=this.colorPickerCanvas.clientHeight
i.clearRect(0,0,o,n),i.putImageData(this.hueCircle,0,0),i.fillStyle="rgba(0,0,0,"+(1-e.v)+")",i.circle(this.centerCoordinates.x,this.centerCoordinates.y,this.r),i.fill(),this.brightnessRange.value=100*e.v,this.opacityRange.value=100*t.a,this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")",this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"}},{key:"_setSize",value:function(){this.colorPickerCanvas.style.width="100%",this.colorPickerCanvas.style.height="100%",this.colorPickerCanvas.width=289*this.pixelRatio,this.colorPickerCanvas.height=289*this.pixelRatio}},{key:"_create",value:function(){if(this.frame=document.createElement("div"),this.frame.className="vis-color-picker",this.colorPickerDiv=document.createElement("div"),this.colorPickerSelector=document.createElement("div"),this.colorPickerSelector.className="vis-selector",this.colorPickerDiv.appendChild(this.colorPickerSelector),this.colorPickerCanvas=document.createElement("canvas"),this.colorPickerDiv.appendChild(this.colorPickerCanvas),this.colorPickerCanvas.getContext){var t=this.colorPickerCanvas.getContext("2d")
this.pixelRatio=(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1),this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)}else{var e=document.createElement("DIV")
e.style.color="red",e.style.fontWeight="bold",e.style.padding="10px",e.innerHTML="Error: your browser does not support HTML canvas",this.colorPickerCanvas.appendChild(e)}this.colorPickerDiv.className="vis-color",this.opacityDiv=document.createElement("div"),this.opacityDiv.className="vis-opacity",this.brightnessDiv=document.createElement("div"),this.brightnessDiv.className="vis-brightness",this.arrowDiv=document.createElement("div"),this.arrowDiv.className="vis-arrow",this.opacityRange=document.createElement("input")
try{this.opacityRange.type="range",this.opacityRange.min="0",this.opacityRange.max="100"}catch(i){}this.opacityRange.value="100",this.opacityRange.className="vis-range",this.brightnessRange=document.createElement("input")
try{this.brightnessRange.type="range",this.brightnessRange.min="0",this.brightnessRange.max="100"}catch(i){}this.brightnessRange.value="100",this.brightnessRange.className="vis-range",this.opacityDiv.appendChild(this.opacityRange),this.brightnessDiv.appendChild(this.brightnessRange)
var o=this
this.opacityRange.onchange=function(){o._setOpacity(this.value)},this.opacityRange.oninput=function(){o._setOpacity(this.value)},this.brightnessRange.onchange=function(){o._setBrightness(this.value)},this.brightnessRange.oninput=function(){o._setBrightness(this.value)},this.brightnessLabel=document.createElement("div"),this.brightnessLabel.className="vis-label vis-brightness",this.brightnessLabel.innerHTML="brightness:",this.opacityLabel=document.createElement("div"),this.opacityLabel.className="vis-label vis-opacity",this.opacityLabel.innerHTML="opacity:",this.newColorDiv=document.createElement("div"),this.newColorDiv.className="vis-new-color",this.newColorDiv.innerHTML="new",this.initialColorDiv=document.createElement("div"),this.initialColorDiv.className="vis-initial-color",this.initialColorDiv.innerHTML="initial",this.cancelButton=document.createElement("div"),this.cancelButton.className="vis-button vis-cancel",this.cancelButton.innerHTML="cancel",this.cancelButton.onclick=this._hide.bind(this,!1),this.applyButton=document.createElement("div"),this.applyButton.className="vis-button vis-apply",this.applyButton.innerHTML="apply",this.applyButton.onclick=this._apply.bind(this),this.saveButton=document.createElement("div"),this.saveButton.className="vis-button vis-save",this.saveButton.innerHTML="save",this.saveButton.onclick=this._save.bind(this),this.loadButton=document.createElement("div"),this.loadButton.className="vis-button vis-load",this.loadButton.innerHTML="load last",this.loadButton.onclick=this._loadLast.bind(this),this.frame.appendChild(this.colorPickerDiv),this.frame.appendChild(this.arrowDiv),this.frame.appendChild(this.brightnessLabel),this.frame.appendChild(this.brightnessDiv),this.frame.appendChild(this.opacityLabel),this.frame.appendChild(this.opacityDiv),this.frame.appendChild(this.newColorDiv),this.frame.appendChild(this.initialColorDiv),this.frame.appendChild(this.cancelButton),this.frame.appendChild(this.applyButton),this.frame.appendChild(this.saveButton),this.frame.appendChild(this.loadButton)}},{key:"_bindHammer",value:function(){var t=this
this.drag={},this.pinch={},this.hammer=new s(this.colorPickerCanvas),this.hammer.get("pinch").set({enable:!0}),r.onTouch(this.hammer,function(e){t._moveSelector(e)}),this.hammer.on("tap",function(e){t._moveSelector(e)}),this.hammer.on("panstart",function(e){t._moveSelector(e)}),this.hammer.on("panmove",function(e){t._moveSelector(e)}),this.hammer.on("panend",function(e){t._moveSelector(e)})}},{key:"_generateHueCircle",value:function(){if(this.generated===!1){var t=this.colorPickerCanvas.getContext("2d")
void 0===this.pixelRation&&(this.pixelRatio=(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)),t.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)
var e=this.colorPickerCanvas.clientWidth,i=this.colorPickerCanvas.clientHeight
t.clearRect(0,0,e,i)
var o=void 0,n=void 0,s=void 0,r=void 0
this.centerCoordinates={x:.5*e,y:.5*i},this.r=.49*e
var h=2*Math.PI/360,d=1/360,l=1/this.r,u=void 0
for(s=0;360>s;s++)for(r=0;r<this.r;r++)o=this.centerCoordinates.x+r*Math.sin(h*s),n=this.centerCoordinates.y+r*Math.cos(h*s),u=a.HSVToRGB(s*d,r*l,1),t.fillStyle="rgb("+u.r+","+u.g+","+u.b+")",t.fillRect(o-.5,n-.5,2,2)
t.strokeStyle="rgba(0,0,0,1)",t.circle(this.centerCoordinates.x,this.centerCoordinates.y,this.r),t.stroke(),this.hueCircle=t.getImageData(0,0,e,i)}this.generated=!0}},{key:"_moveSelector",value:function(t){var e=this.colorPickerDiv.getBoundingClientRect(),i=t.center.x-e.left,o=t.center.y-e.top,n=.5*this.colorPickerDiv.clientHeight,s=.5*this.colorPickerDiv.clientWidth,r=i-s,h=o-n,d=Math.atan2(r,h),l=.98*Math.min(Math.sqrt(r*r+h*h),s),u=Math.cos(d)*l+n,c=Math.sin(d)*l+s
this.colorPickerSelector.style.top=u-.5*this.colorPickerSelector.clientHeight+"px",this.colorPickerSelector.style.left=c-.5*this.colorPickerSelector.clientWidth+"px"
var p=d/(2*Math.PI)
p=0>p?p+1:p
var f=l/this.r,m=a.RGBToHSV(this.color.r,this.color.g,this.color.b)
m.h=p,m.s=f
var g=a.HSVToRGB(m.h,m.s,m.v)
g.a=this.color.a,this.color=g,this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")",this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"}}]),t}()
e["default"]=h,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=i(1),r=!1,a=void 0,h="background: #FFeeee; color: #dd0000",d=function(){function t(){o(this,t)}return n(t,null,[{key:"validate",value:function(e,i,o){r=!1,a=i
var n=i
return void 0!==o&&(n=i[o]),t.parse(e,n,[]),r}},{key:"parse",value:function(e,i,o){for(var n in e)e.hasOwnProperty(n)&&t.check(n,e,i,o)}},{key:"check",value:function(e,i,o,n){void 0===o[e]&&void 0===o.__any__?t.getSuggestion(e,o,n):void 0===o[e]&&void 0!==o.__any__?"object"===t.getType(i[e])&&void 0!==o.__any__.__type__?t.checkFields(e,i,o,"__any__",o.__any__.__type__,n):t.checkFields(e,i,o,"__any__",o.__any__,n):void 0!==o[e].__type__?t.checkFields(e,i,o,e,o[e].__type__,n):t.checkFields(e,i,o,e,o[e],n)}},{key:"checkFields",value:function(e,i,o,n,a,d){var l=t.getType(i[e]),u=a[l]
void 0!==u?"array"===t.getType(u)&&-1===u.indexOf(i[e])?(console.log('%cInvalid option detected in "'+e+'". Allowed values are:'+t.print(u)+' not "'+i[e]+'". '+t.printLocation(d,e),h),r=!0):"object"===l&&"__any__"!==n&&(d=s.copyAndExtendArray(d,e),t.parse(i[e],o[n],d)):void 0===a.any&&(console.log('%cInvalid type received for "'+e+'". Expected: '+t.print(Object.keys(a))+". Received ["+l+'] "'+i[e]+'"'+t.printLocation(d,e),h),r=!0)}},{key:"getType",value:function(t){var e=typeof t
return"object"===e?null===t?"null":t instanceof Boolean?"boolean":t instanceof Number?"number":t instanceof String?"string":Array.isArray(t)?"array":t instanceof Date?"date":void 0!==t.nodeType?"dom":t._isAMomentObject===!0?"moment":"object":"number"===e?"number":"boolean"===e?"boolean":"string"===e?"string":void 0===e?"undefined":e}},{key:"getSuggestion",value:function(e,i,o){var n=t.findInOptions(e,i,o,!1),s=t.findInOptions(e,a,[],!0),d=8,l=4
void 0!==n.indexMatch?console.log('%cUnknown option detected: "'+e+'" in '+t.printLocation(n.path,e,"")+'Perhaps it was incomplete? Did you mean: "'+n.indexMatch+'"?\n\n',h):s.distance<=l&&n.distance>s.distance?console.log('%cUnknown option detected: "'+e+'" in '+t.printLocation(n.path,e,"")+"Perhaps it was misplaced? Matching option found at: "+t.printLocation(s.path,s.closestMatch,""),h):n.distance<=d?console.log('%cUnknown option detected: "'+e+'". Did you mean "'+n.closestMatch+'"?'+t.printLocation(n.path,e),h):console.log('%cUnknown option detected: "'+e+'". Did you mean one of these: '+t.print(Object.keys(i))+t.printLocation(o,e),h),r=!0}},{key:"findInOptions",value:function(e,i,o){var n=arguments.length<=3||void 0===arguments[3]?!1:arguments[3],r=1e9,a="",h=[],d=e.toLowerCase(),l=void 0
for(var u in i){var c=void 0
if(void 0!==i[u].__type__&&n===!0){var p=t.findInOptions(e,i[u],s.copyAndExtendArray(o,u))
r>p.distance&&(a=p.closestMatch,h=p.path,r=p.distance,l=p.indexMatch)}else-1!==u.toLowerCase().indexOf(d)&&(l=u),c=t.levenshteinDistance(e,u),r>c&&(a=u,h=s.copyArray(o),r=c)}return{closestMatch:a,path:h,distance:r,indexMatch:l}}},{key:"printLocation",value:function(t,e){for(var i=arguments.length<=2||void 0===arguments[2]?"Problem value found at: \n":arguments[2],o="\n\n"+i+"options = {\n",n=0;n<t.length;n++){for(var s=0;n+1>s;s++)o+="  "
o+=t[n]+": {\n"}for(var s=0;s<t.length+1;s++)o+="  "
o+=e+"\n"
for(var n=0;n<t.length+1;n++){for(var s=0;s<t.length-n;s++)o+="  "
o+="}\n"}return o+"\n\n"}},{key:"print",value:function(t){return JSON.stringify(t).replace(/(\")|(\[)|(\])|(,"__type__")/g,"").replace(/(\,)/g,", ")}},{key:"levenshteinDistance",value:function(t,e){if(0===t.length)return e.length
if(0===e.length)return t.length
var i,o=[]
for(i=0;i<=e.length;i++)o[i]=[i]
var n
for(n=0;n<=t.length;n++)o[0][n]=n
for(i=1;i<=e.length;i++)for(n=1;n<=t.length;n++)e.charAt(i-1)==t.charAt(n-1)?o[i][n]=o[i-1][n-1]:o[i][n]=Math.min(o[i-1][n-1]+1,Math.min(o[i][n-1]+1,o[i-1][n]+1))
return o[e.length][t.length]}}]),t}()
e["default"]=d,e.printStyle=h},function(t,e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var i="string",o="boolean",n="number",s="array",r="date",a="object",h="dom",d="moment",l="any",u={configure:{enabled:{"boolean":o},filter:{"boolean":o,"function":"function"},container:{dom:h},__type__:{object:a,"boolean":o,"function":"function"}},align:{string:i},autoResize:{"boolean":o},throttleRedraw:{number:n},clickToUse:{"boolean":o},dataAttributes:{string:i,array:s},editable:{add:{"boolean":o,undefined:"undefined"},remove:{"boolean":o,undefined:"undefined"},updateGroup:{"boolean":o,undefined:"undefined"},updateTime:{"boolean":o,undefined:"undefined"},__type__:{"boolean":o,object:a}},end:{number:n,date:r,string:i,moment:d},format:{minorLabels:{millisecond:{string:i,undefined:"undefined"},second:{string:i,undefined:"undefined"},minute:{string:i,undefined:"undefined"},hour:{string:i,undefined:"undefined"},weekday:{string:i,undefined:"undefined"},day:{string:i,undefined:"undefined"},month:{string:i,undefined:"undefined"},year:{string:i,undefined:"undefined"},__type__:{object:a}},majorLabels:{millisecond:{string:i,undefined:"undefined"},second:{string:i,undefined:"undefined"},minute:{string:i,undefined:"undefined"},hour:{string:i,undefined:"undefined"},weekday:{string:i,undefined:"undefined"},day:{string:i,undefined:"undefined"},month:{string:i,undefined:"undefined"},year:{string:i,undefined:"undefined"},__type__:{object:a}},__type__:{object:a}},moment:{"function":"function"},groupOrder:{string:i,"function":"function"},groupEditable:{add:{"boolean":o,undefined:"undefined"},remove:{"boolean":o,undefined:"undefined"},order:{"boolean":o,undefined:"undefined"},__type__:{"boolean":o,object:a}},groupOrderSwap:{"function":"function"},height:{string:i,number:n},hiddenDates:{object:a,array:s},locale:{string:i},locales:{__any__:{any:l},__type__:{object:a}},margin:{axis:{number:n},item:{horizontal:{number:n,undefined:"undefined"},vertical:{number:n,undefined:"undefined"},__type__:{object:a,number:n}},__type__:{object:a,number:n}},max:{date:r,number:n,string:i,moment:d},maxHeight:{number:n,string:i},min:{date:r,number:n,string:i,moment:d},minHeight:{number:n,string:i},moveable:{"boolean":o},multiselect:{"boolean":o},onAdd:{"function":"function"},onUpdate:{"function":"function"},onMove:{"function":"function"},onMoving:{"function":"function"},onRemove:{"function":"function"},onAddGroup:{"function":"function"},onMoveGroup:{"function":"function"},onRemoveGroup:{"function":"function"},order:{"function":"function"},orientation:{axis:{string:i,undefined:"undefined"},item:{string:i,undefined:"undefined"},__type__:{string:i,object:a}},selectable:{"boolean":o},showCurrentTime:{"boolean":o},showMajorLabels:{"boolean":o},showMinorLabels:{"boolean":o},stack:{"boolean":o},snap:{"function":"function","null":"null"},start:{date:r,number:n,string:i,moment:d},template:{"function":"function"},groupTemplate:{"function":"function"},timeAxis:{scale:{string:i,undefined:"undefined"},step:{number:n,undefined:"undefined"},__type__:{object:a}},type:{string:i},width:{string:i,number:n},zoomable:{"boolean":o},zoomKey:{string:["ctrlKey","altKey","metaKey",""]},zoomMax:{number:n},zoomMin:{number:n},__type__:{object:a}},c={global:{align:["center","left","right"],autoResize:!0,throttleRedraw:[10,0,1e3,10],clickToUse:!1,editable:{add:!1,remove:!1,updateGroup:!1,updateTime:!1},end:"",format:{minorLabels:{millisecond:"SSS",second:"s",minute:"HH:mm",hour:"HH:mm",weekday:"ddd D",day:"D",month:"MMM",year:"YYYY"},majorLabels:{millisecond:"HH:mm:ss",second:"D MMMM HH:mm",minute:"ddd D MMMM",hour:"ddd D MMMM",weekday:"MMMM YYYY",day:"MMMM YYYY",month:"YYYY",year:""}},groupsDraggable:!1,height:"",locale:"",margin:{axis:[20,0,100,1],item:{horizontal:[10,0,100,1],vertical:[10,0,100,1]}},max:"",maxHeight:"",min:"",minHeight:"",moveable:!1,multiselect:!1,orientation:{axis:["both","bottom","top"],item:["bottom","top"]},selectable:!0,showCurrentTime:!1,showMajorLabels:!0,showMinorLabels:!0,stack:!0,start:"",type:["box","point","range","background"],width:"100%",zoomable:!0,zoomKey:["ctrlKey","altKey","metaKey",""],zoomMax:[31536e10,10,31536e10,1],zoomMin:[10,10,31536e10,1]}}
e.allOptions=u,e.configureOptions=c},function(t,e,i){"use strict"
function o(t,e,i,o){if(!(Array.isArray(i)||i instanceof r)&&i instanceof Object){var a=o
o=i,i=a}var d=this
this.defaultOptions={start:null,end:null,autoResize:!0,orientation:{axis:"bottom",item:"bottom"},moment:n,width:null,height:null,maxHeight:null,minHeight:null},this.options=s.deepExtend({},this.defaultOptions),this._create(t),this.components=[],this.body={dom:this.dom,domProps:this.props,emitter:{on:this.on.bind(this),off:this.off.bind(this),emit:this.emit.bind(this)},hiddenDates:[],util:{toScreen:d._toScreen.bind(d),toGlobalScreen:d._toGlobalScreen.bind(d),toTime:d._toTime.bind(d),toGlobalTime:d._toGlobalTime.bind(d)}},this.range=new h(this.body),this.components.push(this.range),this.body.range=this.range,this.timeAxis=new l(this.body),this.components.push(this.timeAxis),this.currentTime=new u(this.body),this.components.push(this.currentTime),this.linegraph=new p(this.body),this.components.push(this.linegraph),this.itemsData=null,this.groupsData=null,this.on("tap",function(t){d.emit("click",d.getEventProperties(t))}),this.on("doubletap",function(t){d.emit("doubleClick",d.getEventProperties(t))}),this.dom.root.oncontextmenu=function(t){d.emit("contextmenu",d.getEventProperties(t))},o&&this.setOptions(o),i&&this.setGroups(i),e?this.setItems(e):this._redraw()}var n=(i(12),i(20),i(2)),s=i(1),r=i(8),a=i(10),h=i(24),d=i(28),l=i(39),u=i(44),c=i(42),p=i(50),f=i(45),m=i(47)["default"],g=i(47).printStyle,v=i(58).allOptions,y=i(58).configureOptions
o.prototype=new d,o.prototype.setOptions=function(t){var e=m.validate(t,v)
e===!0&&console.log("%cErrors have been found in the supplied options object.",g),d.prototype.setOptions.call(this,t)},o.prototype.setItems=function(t){var e,i=null==this.itemsData
if(e=t?t instanceof r||t instanceof a?t:new r(t,{type:{start:"Date",end:"Date"}}):null,this.itemsData=e,this.linegraph&&this.linegraph.setItems(e),i)if(void 0!=this.options.start||void 0!=this.options.end){var o=void 0!=this.options.start?this.options.start:null,n=void 0!=this.options.end?this.options.end:null
this.setWindow(o,n,{animation:!1})}else this.fit({animation:!1})},o.prototype.setGroups=function(t){var e
e=t?t instanceof r||t instanceof a?t:new r(t):null,this.groupsData=e,this.linegraph.setGroups(e)},o.prototype.getLegend=function(t,e,i){return void 0===e&&(e=15),void 0===i&&(i=15),void 0!==this.linegraph.groups[t]?this.linegraph.groups[t].getLegend(e,i):"cannot find group:"+t},o.prototype.isGroupVisible=function(t){return void 0!==this.linegraph.groups[t]?this.linegraph.groups[t].visible&&(void 0===this.linegraph.options.groups.visibility[t]||1==this.linegraph.options.groups.visibility[t]):!1},o.prototype.getDataRange=function(){var t=null,e=null
for(var i in this.linegraph.groups)if(this.linegraph.groups.hasOwnProperty(i)&&1==this.linegraph.groups[i].visible)for(var o=0;o<this.linegraph.groups[i].itemsData.length;o++){var n=this.linegraph.groups[i].itemsData[o],r=s.convert(n.x,"Date").valueOf()
t=null==t?r:t>r?r:t,e=null==e?r:r>e?r:e}return{min:null!=t?new Date(t):null,max:null!=e?new Date(e):null}},o.prototype.getEventProperties=function(t){var e=t.center?t.center.x:t.clientX,i=t.center?t.center.y:t.clientY,o=e-s.getAbsoluteLeft(this.dom.centerContainer),n=i-s.getAbsoluteTop(this.dom.centerContainer),r=this._toTime(o),a=c.customTimeFromTarget(t),h=s.getTarget(t),d=null
s.hasParent(h,this.timeAxis.dom.foreground)?d="axis":this.timeAxis2&&s.hasParent(h,this.timeAxis2.dom.foreground)?d="axis":s.hasParent(h,this.linegraph.yAxisLeft.dom.frame)?d="data-axis":s.hasParent(h,this.linegraph.yAxisRight.dom.frame)?d="data-axis":s.hasParent(h,this.linegraph.legendLeft.dom.frame)?d="legend":s.hasParent(h,this.linegraph.legendRight.dom.frame)?d="legend":null!=a?d="custom-time":s.hasParent(h,this.currentTime.bar)?d="current-time":s.hasParent(h,this.dom.center)&&(d="background")
var l=[],u=this.linegraph.yAxisLeft,p=this.linegraph.yAxisRight
return u.hidden||l.push(u.screenToValue(n)),p.hidden||l.push(p.screenToValue(n)),{event:t,what:d,pageX:t.srcEvent?t.srcEvent.pageX:t.pageX,pageY:t.srcEvent?t.srcEvent.pageY:t.pageY,x:o,y:n,time:r,value:l}},o.prototype._createConfigurator=function(){return new f(this,this.dom.container,y)},t.exports=o},function(t,e,i){"use strict"
function o(t,e){this.id=n.randomUUID(),this.body=t,this.defaultOptions={yAxisOrientation:"left",defaultGroup:"default",sort:!0,sampling:!0,stack:!1,graphHeight:"400px",shaded:{enabled:!1,orientation:"bottom"},style:"line",barChart:{width:50,sideBySide:!1,align:"center"},interpolation:{enabled:!0,parametrization:"centripetal",alpha:.5},drawPoints:{enabled:!0,size:6,style:"square"},dataAxis:{showMinorLabels:!0,showMajorLabels:!0,icons:!1,width:"40px",visible:!0,alignZeros:!0,left:{range:{min:void 0,max:void 0},format:function(t){return t},title:{text:void 0,style:void 0}},right:{range:{min:void 0,max:void 0},format:function(t){return t},title:{text:void 0,style:void 0}}},legend:{enabled:!1,icons:!0,left:{visible:!0,position:"top-left"},right:{visible:!0,position:"top-right"}},groups:{visibility:{}}},this.options=n.extend({},this.defaultOptions),this.dom={},this.props={},this.hammer=null,this.groups={},this.abortedGraphUpdate=!1,this.updateSVGheight=!1,this.updateSVGheightOnResize=!1
var i=this
this.itemsData=null,this.groupsData=null,this.itemListeners={add:function(t,e,o){i._onAdd(e.items)},update:function(t,e,o){i._onUpdate(e.items)},remove:function(t,e,o){i._onRemove(e.items)}},this.groupListeners={add:function(t,e,o){i._onAddGroups(e.items)},update:function(t,e,o){i._onUpdateGroups(e.items)},remove:function(t,e,o){i._onRemoveGroups(e.items)}},this.items={},this.selection=[],this.lastStart=this.body.range.start,this.touchParams={},this.svgElements={},this.setOptions(e),this.groupsUsingDefaultStyles=[0],this.COUNTER=0,this.body.emitter.on("rangechanged",function(){i.lastStart=i.body.range.start,i.svg.style.left=n.option.asSize(-i.props.width),i.redraw.call(i,!0)}),this._create(),this.framework={svg:this.svg,svgElements:this.svgElements,options:this.options,groups:this.groups},this.body.emitter.emit("change")}var n=i(1),s=i(7),r=i(8),a=i(10),h=i(26),d=i(51),l=i(53),u=i(57),c=i(56),p=(i(54),"__ungrouped__")
o.prototype=new h,o.prototype._create=function(){var t=document.createElement("div")
t.className="vis-line-graph",this.dom.frame=t,this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.style.position="relative",this.svg.style.height=(""+this.options.graphHeight).replace("px","")+"px",this.svg.style.display="block",t.appendChild(this.svg),this.options.dataAxis.orientation="left",this.yAxisLeft=new d(this.body,this.options.dataAxis,this.svg,this.options.groups),this.options.dataAxis.orientation="right",this.yAxisRight=new d(this.body,this.options.dataAxis,this.svg,this.options.groups),delete this.options.dataAxis.orientation,this.legendLeft=new u(this.body,this.options.legend,"left",this.options.groups),this.legendRight=new u(this.body,this.options.legend,"right",this.options.groups),this.show()},o.prototype.setOptions=function(t){if(t){var e=["sampling","defaultGroup","stack","height","graphHeight","yAxisOrientation","style","barChart","dataAxis","sort","groups"]
void 0===t.graphHeight&&void 0!==t.height&&void 0!==this.body.domProps.centerContainer.height?(this.updateSVGheight=!0,this.updateSVGheightOnResize=!0):void 0!==this.body.domProps.centerContainer.height&&void 0!==t.graphHeight&&parseInt((t.graphHeight+"").replace("px",""))<this.body.domProps.centerContainer.height&&(this.updateSVGheight=!0),n.selectiveDeepExtend(e,this.options,t),n.mergeOptions(this.options,t,"interpolation"),n.mergeOptions(this.options,t,"drawPoints"),n.mergeOptions(this.options,t,"shaded"),n.mergeOptions(this.options,t,"legend"),t.interpolation&&"object"==typeof t.interpolation&&t.interpolation.parametrization&&("uniform"==t.interpolation.parametrization?this.options.interpolation.alpha=0:"chordal"==t.interpolation.parametrization?this.options.interpolation.alpha=1:(this.options.interpolation.parametrization="centripetal",this.options.interpolation.alpha=.5)),this.yAxisLeft&&void 0!==t.dataAxis&&(this.yAxisLeft.setOptions(this.options.dataAxis),this.yAxisRight.setOptions(this.options.dataAxis)),this.legendLeft&&void 0!==t.legend&&(this.legendLeft.setOptions(this.options.legend),this.legendRight.setOptions(this.options.legend)),this.groups.hasOwnProperty(p)&&this.groups[p].setOptions(t)}this.dom.frame&&this.redraw(!0)},o.prototype.hide=function(){this.dom.frame.parentNode&&this.dom.frame.parentNode.removeChild(this.dom.frame)},o.prototype.show=function(){this.dom.frame.parentNode||this.body.dom.center.appendChild(this.dom.frame)},o.prototype.setItems=function(t){var e,i=this,o=this.itemsData
if(t){if(!(t instanceof r||t instanceof a))throw new TypeError("Data must be an instance of DataSet or DataView")
this.itemsData=t}else this.itemsData=null
if(o&&(n.forEach(this.itemListeners,function(t,e){o.off(e,t)}),e=o.getIds(),this._onRemove(e)),this.itemsData){var s=this.id
n.forEach(this.itemListeners,function(t,e){i.itemsData.on(e,t,s)}),e=this.itemsData.getIds(),this._onAdd(e)}this._updateUngrouped(),this.redraw(!0)},o.prototype.setGroups=function(t){var e,i=this
if(this.groupsData&&(n.forEach(this.groupListeners,function(t,e){i.groupsData.off(e,t)}),e=this.groupsData.getIds(),this.groupsData=null,this._onRemoveGroups(e)),t){if(!(t instanceof r||t instanceof a))throw new TypeError("Data must be an instance of DataSet or DataView")
this.groupsData=t}else this.groupsData=null
if(this.groupsData){var o=this.id
n.forEach(this.groupListeners,function(t,e){i.groupsData.on(e,t,o)}),e=this.groupsData.getIds(),this._onAddGroups(e)}this._onUpdate()},o.prototype._onUpdate=function(t){this._updateUngrouped(),this._updateAllGroupData(),this.redraw(!0)},o.prototype._onAdd=function(t){this._onUpdate(t)},o.prototype._onRemove=function(t){this._onUpdate(t)},o.prototype._onUpdateGroups=function(t){for(var e=0;e<t.length;e++){var i=this.groupsData.get(t[e])
this._updateGroup(i,t[e])}this.redraw(!0)},o.prototype._onAddGroups=function(t){this._onUpdateGroups(t)},o.prototype._onRemoveGroups=function(t){for(var e=0;e<t.length;e++)this.groups.hasOwnProperty(t[e])&&("right"==this.groups[t[e]].options.yAxisOrientation?(this.yAxisRight.removeGroup(t[e]),this.legendRight.removeGroup(t[e]),this.legendRight.redraw()):(this.yAxisLeft.removeGroup(t[e]),this.legendLeft.removeGroup(t[e]),this.legendLeft.redraw()),delete this.groups[t[e]])
this._updateUngrouped(),this.redraw(!0)},o.prototype._updateGroup=function(t,e){this.groups.hasOwnProperty(e)?(this.groups[e].update(t),"right"==this.groups[e].options.yAxisOrientation?(this.yAxisRight.updateGroup(e,this.groups[e]),this.legendRight.updateGroup(e,this.groups[e])):(this.yAxisLeft.updateGroup(e,this.groups[e]),this.legendLeft.updateGroup(e,this.groups[e]))):(this.groups[e]=new l(t,e,this.options,this.groupsUsingDefaultStyles),"right"==this.groups[e].options.yAxisOrientation?(this.yAxisRight.addGroup(e,this.groups[e]),this.legendRight.addGroup(e,this.groups[e])):(this.yAxisLeft.addGroup(e,this.groups[e]),this.legendLeft.addGroup(e,this.groups[e]))),this.legendLeft.redraw(),this.legendRight.redraw()},o.prototype._updateAllGroupData=function(){if(null!=this.itemsData){var t,e={}
for(t in this.groups)this.groups.hasOwnProperty(t)&&(e[t]=[])
for(var i in this.itemsData._data)if(this.itemsData._data.hasOwnProperty(i)){var o=this.itemsData._data[i]
if(void 0===e[o.group])throw new Error("Cannot find referenced group "+o.group+". Possible reason: items added before groups? Groups need to be added before items, as items refer to groups.")
o.x=n.convert(o.x,"Date"),e[o.group].push(o)}for(t in this.groups)this.groups.hasOwnProperty(t)&&this.groups[t].setItems(e[t])}},o.prototype._updateUngrouped=function(){if(this.itemsData&&null!=this.itemsData){var t=0
for(var e in this.itemsData._data)if(this.itemsData._data.hasOwnProperty(e)){var i=this.itemsData._data[e]
void 0!=i&&(i.hasOwnProperty("group")?void 0===i.group&&(i.group=p):i.group=p,t=i.group==p?t+1:t)}if(0==t)delete this.groups[p],this.legendLeft.removeGroup(p),this.legendRight.removeGroup(p),this.yAxisLeft.removeGroup(p),this.yAxisRight.removeGroup(p)
else{var o={id:p,content:this.options.defaultGroup}
this._updateGroup(o,p)}}else delete this.groups[p],this.legendLeft.removeGroup(p),this.legendRight.removeGroup(p),this.yAxisLeft.removeGroup(p),this.yAxisRight.removeGroup(p)
this.legendLeft.redraw(),this.legendRight.redraw()},o.prototype.redraw=function(t){var e=!1
this.props.width=this.dom.frame.offsetWidth,this.props.height=this.body.domProps.centerContainer.height-this.body.domProps.border.top-this.body.domProps.border.bottom,void 0===this.lastWidth&&this.props.width&&(t=!0),e=this._isResized()||e
var i=this.body.range.end-this.body.range.start,o=i!=this.lastVisibleInterval
if(this.lastVisibleInterval=i,1==e&&(this.svg.style.width=n.option.asSize(3*this.props.width),this.svg.style.left=n.option.asSize(-this.props.width),-1==(this.options.height+"").indexOf("%")&&1!=this.updateSVGheightOnResize||(this.updateSVGheight=!0)),1==this.updateSVGheight?(this.options.graphHeight!=this.props.height+"px"&&(this.options.graphHeight=this.props.height+"px",this.svg.style.height=this.props.height+"px"),this.updateSVGheight=!1):this.svg.style.height=(""+this.options.graphHeight).replace("px","")+"px",1==e||1==o||1==this.abortedGraphUpdate||1==t)e=this._updateGraph()||e
else if(0!=this.lastStart){var s=this.body.range.start-this.lastStart,r=this.body.range.end-this.body.range.start
if(0!=this.props.width){var a=this.props.width/r,h=s*a
this.svg.style.left=-this.props.width-h+"px"}}return this.legendLeft.redraw(),this.legendRight.redraw(),e},o.prototype._updateGraph=function(){if(s.prepareElements(this.svgElements),0!=this.props.width&&null!=this.itemsData){var t,e,i={},o={},n={},r=!1,a=[]
for(var h in this.groups)this.groups.hasOwnProperty(h)&&(t=this.groups[h],1!=t.visible||void 0!==this.options.groups.visibility[h]&&1!=this.options.groups.visibility[h]||a.push(h))
if(a.length>0){var d=this.body.util.toGlobalTime(-this.body.domProps.root.width),l=this.body.util.toGlobalTime(2*this.body.domProps.root.width),u={}
for(this._getRelevantData(a,u,d,l),this._applySampling(a,u),e=0;e<a.length;e++)i[a[e]]=this._convertXcoordinates(u[a[e]])
this._getYRanges(a,i,n),r=this._updateYAxis(a,n)
var p=5
if(1==r&&this.COUNTER<p)return s.cleanupElements(this.svgElements),this.abortedGraphUpdate=!0,this.COUNTER++,this.body.emitter.emit("change"),!0
for(this.COUNTER>p&&console.log("WARNING: there may be an infinite loop in the _updateGraph emitter cycle."),this.COUNTER=0,this.abortedGraphUpdate=!1,e=0;e<a.length;e++)t=this.groups[a[e]],o[a[e]]=this._convertYcoordinates(u[a[e]],t)
for(e=0;e<a.length;e++)t=this.groups[a[e]],"bar"!=t.options.style&&t.draw(o[a[e]],t,this.framework)
c.draw(a,o,this.framework)}}return s.cleanupElements(this.svgElements),!1},o.prototype._getRelevantData=function(t,e,i,o){var s,r,a,h
if(t.length>0)for(r=0;r<t.length;r++){s=this.groups[t[r]],e[t[r]]=[]
var d=e[t[r]]
if(1==s.options.sort){var l=Math.max(0,n.binarySearchValue(s.itemsData,i,"x","before"))
for(a=l;a<s.itemsData.length;a++)if(h=s.itemsData[a],void 0!==h){if(h.x>o){d.push(h)
break}d.push(h)}}else for(a=0;a<s.itemsData.length;a++)h=s.itemsData[a],void 0!==h&&h.x>i&&h.x<o&&d.push(h)}},o.prototype._applySampling=function(t,e){var i
if(t.length>0)for(var o=0;o<t.length;o++)if(i=this.groups[t[o]],1==i.options.sampling){var n=e[t[o]]
if(n.length>0){var s=1,r=n.length,a=this.body.util.toGlobalScreen(n[n.length-1].x)-this.body.util.toGlobalScreen(n[0].x),h=r/a
s=Math.min(Math.ceil(.2*r),Math.max(1,Math.round(h)))
for(var d=[],l=0;r>l;l+=s)d.push(n[l])
e[t[o]]=d}}},o.prototype._getYRanges=function(t,e,i){var o,n,s,r,a=[],h=[]
if(t.length>0){for(s=0;s<t.length;s++)o=e[t[s]],r=this.groups[t[s]].options,o.length>0&&(n=this.groups[t[s]],r.stack===!0&&"bar"===r.style?"left"===r.yAxisOrientation?a=a.concat(n.getData(o)):h=h.concat(n.getData(o)):i[t[s]]=n.getYRange(o,t[s]))
c.getStackedYRange(a,i,t,"__barStackLeft","left"),c.getStackedYRange(h,i,t,"__barStackRight","right")}},o.prototype._updateYAxis=function(t,e){var i,o,n=!1,s=!1,r=!1,a=1e9,h=1e9,d=-1e9,l=-1e9
if(t.length>0){for(var u=0;u<t.length;u++){var c=this.groups[t[u]]
c&&"right"!=c.options.yAxisOrientation?(s=!0,a=1e9,d=-1e9):c&&c.options.yAxisOrientation&&(r=!0,h=1e9,l=-1e9)}for(var u=0;u<t.length;u++)e.hasOwnProperty(t[u])&&e[t[u]].ignore!==!0&&(i=e[t[u]].min,o=e[t[u]].max,"right"!=e[t[u]].yAxisOrientation?(s=!0,a=a>i?i:a,d=o>d?o:d):(r=!0,h=h>i?i:h,l=o>l?o:l))
1==s&&this.yAxisLeft.setRange(a,d),1==r&&this.yAxisRight.setRange(h,l)}n=this._toggleAxisVisiblity(s,this.yAxisLeft)||n,n=this._toggleAxisVisiblity(r,this.yAxisRight)||n,1==r&&1==s?(this.yAxisLeft.drawIcons=!0,this.yAxisRight.drawIcons=!0):(this.yAxisLeft.drawIcons=!1,this.yAxisRight.drawIcons=!1),this.yAxisRight.master=!s,0==this.yAxisRight.master?(1==r?this.yAxisLeft.lineOffset=this.yAxisRight.width:this.yAxisLeft.lineOffset=0,n=this.yAxisLeft.redraw()||n,this.yAxisRight.stepPixels=this.yAxisLeft.stepPixels,this.yAxisRight.zeroCrossing=this.yAxisLeft.zeroCrossing,this.yAxisRight.amountOfSteps=this.yAxisLeft.amountOfSteps,n=this.yAxisRight.redraw()||n):n=this.yAxisRight.redraw()||n
for(var p=["__barStackLeft","__barStackRight","__lineStackLeft","__lineStackRight"],u=0;u<p.length;u++)-1!=t.indexOf(p[u])&&t.splice(t.indexOf(p[u]),1)
return n},o.prototype._toggleAxisVisiblity=function(t,e){var i=!1
return 0==t?e.dom.frame.parentNode&&0==e.hidden&&(e.hide(),i=!0):e.dom.frame.parentNode||1!=e.hidden||(e.show(),i=!0),i},o.prototype._convertXcoordinates=function(t){for(var e,i,o=[],n=this.body.util.toScreen,s=0;s<t.length;s++)e=n(t[s].x)+this.props.width,i=t[s].y,o.push({x:e,y:i})
return o},o.prototype._convertYcoordinates=function(t,e){var i,o,n=[],s=this.body.util.toScreen,r=this.yAxisLeft,a=Number(this.svg.style.height.replace("px",""))
"right"==e.options.yAxisOrientation&&(r=this.yAxisRight)
for(var h=0;h<t.length;h++){var d=t[h].label?t[h].label:null
i=s(t[h].x)+this.props.width,o=Math.round(r.convertValue(t[h].y)),n.push({x:i,y:o,label:d})}return e.setZeroPosition(Math.min(a,r.convertValue(0))),n},t.exports=o},function(t,e,i){"use strict"
function o(t,e,i,o){this.id=n.randomUUID(),this.body=t,this.defaultOptions={orientation:"left",showMinorLabels:!0,showMajorLabels:!0,icons:!0,majorLinesOffset:7,minorLinesOffset:4,labelOffsetX:10,labelOffsetY:2,iconWidth:20,width:"40px",visible:!0,alignZeros:!0,left:{range:{min:void 0,max:void 0},format:function(t){return t},title:{text:void 0,style:void 0}},right:{range:{min:void 0,max:void 0},format:function(t){return t},title:{text:void 0,style:void 0}}},this.linegraphOptions=o,this.linegraphSVG=i,this.props={},this.DOMelements={lines:{},labels:{},title:{}},this.dom={},this.range={start:0,end:0},this.options=n.extend({},this.defaultOptions),this.conversionFactor=1,this.setOptions(e),this.width=Number((""+this.options.width).replace("px","")),this.minWidth=this.width,this.height=this.linegraphSVG.offsetHeight,this.hidden=!1,this.stepPixels=25,this.zeroCrossing=-1,this.amountOfSteps=-1,this.lineOffset=0,this.master=!0,this.svgElements={},this.iconsRemoved=!1,this.groups={},this.amountOfGroups=0,this._create()
var s=this
this.body.emitter.on("verticalDrag",function(){s.dom.lineContainer.style.top=s.body.domProps.scrollTop+"px"})}var n=i(1),s=i(7),r=i(26),a=i(52)
o.prototype=new r,o.prototype.addGroup=function(t,e){this.groups.hasOwnProperty(t)||(this.groups[t]=e),this.amountOfGroups+=1},o.prototype.updateGroup=function(t,e){this.groups[t]=e},o.prototype.removeGroup=function(t){this.groups.hasOwnProperty(t)&&(delete this.groups[t],this.amountOfGroups-=1)},o.prototype.setOptions=function(t){if(t){var e=!1
this.options.orientation!=t.orientation&&void 0!==t.orientation&&(e=!0)
var i=["orientation","showMinorLabels","showMajorLabels","icons","majorLinesOffset","minorLinesOffset","labelOffsetX","labelOffsetY","iconWidth","width","visible","left","right","alignZeros"]
n.selectiveExtend(i,this.options,t),this.minWidth=Number((""+this.options.width).replace("px","")),e===!0&&this.dom.frame&&(this.hide(),this.show())}},o.prototype._create=function(){this.dom.frame=document.createElement("div"),this.dom.frame.style.width=this.options.width,this.dom.frame.style.height=this.height,this.dom.lineContainer=document.createElement("div"),this.dom.lineContainer.style.width="100%",this.dom.lineContainer.style.height=this.height,this.dom.lineContainer.style.position="relative",this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.style.position="absolute",this.svg.style.top="0px",this.svg.style.height="100%",this.svg.style.width="100%",this.svg.style.display="block",this.dom.frame.appendChild(this.svg)},o.prototype._redrawGroupIcons=function(){s.prepareElements(this.svgElements)
var t,e=this.options.iconWidth,i=15,o=4,n=o+.5*i
t="left"===this.options.orientation?o:this.width-e-o
var r=Object.keys(this.groups)
r.sort(function(t,e){return e>t?-1:1})
for(var a=0;a<r.length;a++){var h=r[a]
this.groups[h].visible!==!0||void 0!==this.linegraphOptions.visibility[h]&&this.linegraphOptions.visibility[h]!==!0||(this.groups[h].drawIcon(t,n,this.svgElements,this.svg,e,i),n+=i+o)}s.cleanupElements(this.svgElements),this.iconsRemoved=!1},o.prototype._cleanupIcons=function(){this.iconsRemoved===!1&&(s.prepareElements(this.svgElements),s.cleanupElements(this.svgElements),this.iconsRemoved=!0)},o.prototype.show=function(){this.hidden=!1,this.dom.frame.parentNode||("left"===this.options.orientation?this.body.dom.left.appendChild(this.dom.frame):this.body.dom.right.appendChild(this.dom.frame)),this.dom.lineContainer.parentNode||this.body.dom.backgroundHorizontal.appendChild(this.dom.lineContainer)},o.prototype.hide=function(){this.hidden=!0,this.dom.frame.parentNode&&this.dom.frame.parentNode.removeChild(this.dom.frame),this.dom.lineContainer.parentNode&&this.dom.lineContainer.parentNode.removeChild(this.dom.lineContainer)},o.prototype.setRange=function(t,e){this.master===!1&&this.options.alignZeros===!0&&-1!=this.zeroCrossing&&t>0&&(t=0),this.range.start=t,this.range.end=e},o.prototype.redraw=function(){var t=!1,e=0
this.dom.lineContainer.style.top=this.body.domProps.scrollTop+"px"
for(var i in this.groups)this.groups.hasOwnProperty(i)&&(this.groups[i].visible!==!0||void 0!==this.linegraphOptions.visibility[i]&&this.linegraphOptions.visibility[i]!==!0||e++)
if(0===this.amountOfGroups||0===e)this.hide()
else{this.show(),this.height=Number(this.linegraphSVG.style.height.replace("px","")),this.dom.lineContainer.style.height=this.height+"px",this.width=this.options.visible===!0?Number((""+this.options.width).replace("px","")):0
var o=this.props,n=this.dom.frame
n.className="vis-data-axis",this._calculateCharSize()
var s=this.options.orientation,r=this.options.showMinorLabels,a=this.options.showMajorLabels
o.minorLabelHeight=r?o.minorCharHeight:0,o.majorLabelHeight=a?o.majorCharHeight:0,o.minorLineWidth=this.body.dom.backgroundHorizontal.offsetWidth-this.lineOffset-this.width+2*this.options.minorLinesOffset,o.minorLineHeight=1,o.majorLineWidth=this.body.dom.backgroundHorizontal.offsetWidth-this.lineOffset-this.width+2*this.options.majorLinesOffset,o.majorLineHeight=1,"left"===s?(n.style.top="0",n.style.left="0",n.style.bottom="",n.style.width=this.width+"px",n.style.height=this.height+"px",this.props.width=this.body.domProps.left.width,this.props.height=this.body.domProps.left.height):(n.style.top="",n.style.bottom="0",n.style.left="0",n.style.width=this.width+"px",n.style.height=this.height+"px",this.props.width=this.body.domProps.right.width,this.props.height=this.body.domProps.right.height),t=this._redrawLabels(),t=this._isResized()||t,this.options.icons===!0?this._redrawGroupIcons():this._cleanupIcons(),this._redrawTitle(s)}return t},o.prototype._redrawLabels=function(){var t=!1
s.prepareElements(this.DOMelements.lines),s.prepareElements(this.DOMelements.labels)
var e,i=this.options.orientation
if(this.master===!1){var o,n,r,h;-1!==this.zeroCrossing&&this.options.alignZeros===!0?this.range.end>0?(o=this.range.end/this.zeroCrossing,n=this.range.end-this.amountOfSteps*o,r=this.range.end):(o=-1*this.range.start/(this.amountOfSteps-this.zeroCrossing),n=this.range.start,r=this.range.start+o*this.amountOfSteps):(n=this.range.start,r=this.range.end),h=this.stepPixels}else h=this.props.majorCharHeight,n=this.range.start,r=this.range.end
if(this.step=e=new a(n,r,h,this.dom.frame.offsetHeight,this.options[this.options.orientation].range,this.options[this.options.orientation].format,this.master===!1&&this.options.alignZeros),this.master===!0)this.stepPixels=this.dom.frame.offsetHeight/e.marginRange*e.step,this.amountOfSteps=Math.ceil(this.dom.frame.offsetHeight/this.stepPixels)
else if(this.options.alignZeros===!0&&-1!==this.zeroCrossing){var d=(e.current-this.zeroCrossing*e.step)/e.step
this.step.shift(d)}this.valueAtBottom=e.marginEnd,this.maxLabelSize=0
for(var l=0,u=0,c=!1;u<this.amountOfSteps;)l=Math.round(u*this.stepPixels),c=e.isMajor(),u>0&&u!==this.amountOfSteps&&((this.options.showMinorLabels&&c===!1||this.master===!1&&this.options.showMinorLabels===!0)&&this._redrawLabel(l-2,e.getCurrent(),i,"vis-y-axis vis-minor",this.props.minorCharHeight),c&&this.options.showMajorLabels&&this.master===!0||this.options.showMinorLabels===!1&&this.master===!1&&c===!0?(l>=0&&this._redrawLabel(l-2,e.getCurrent(),i,"vis-y-axis vis-major",this.props.majorCharHeight),this._redrawLine(l,i,"vis-grid vis-horizontal vis-major",this.options.majorLinesOffset,this.props.majorLineWidth)):this._redrawLine(l,i,"vis-grid vis-horizontal vis-minor",this.options.minorLinesOffset,this.props.minorLineWidth)),this.master===!0&&0===e.current&&(this.zeroCrossing=u),e.next(),u+=1
this.master===!0&&0===e.current&&(this.zeroCrossing=u),this.conversionFactor=this.stepPixels/e.step
var p=0
void 0!==this.options[i].title&&void 0!==this.options[i].title.text&&(p=this.props.titleCharHeight)
var f=this.options.icons===!0?Math.max(this.options.iconWidth,p)+this.options.labelOffsetX+15:p+this.options.labelOffsetX+15
return this.maxLabelSize>this.width-f&&this.options.visible===!0?(this.width=this.maxLabelSize+f,this.options.width=this.width+"px",s.cleanupElements(this.DOMelements.lines),s.cleanupElements(this.DOMelements.labels),this.redraw(),t=!0):this.maxLabelSize<this.width-f&&this.options.visible===!0&&this.width>this.minWidth?(this.width=Math.max(this.minWidth,this.maxLabelSize+f),this.options.width=this.width+"px",s.cleanupElements(this.DOMelements.lines),s.cleanupElements(this.DOMelements.labels),this.redraw(),t=!0):(s.cleanupElements(this.DOMelements.lines),s.cleanupElements(this.DOMelements.labels),t=!1),t},o.prototype.convertValue=function(t){var e=this.valueAtBottom-t,i=e*this.conversionFactor
return i},o.prototype.screenToValue=function(t){return this.valueAtBottom-t/this.conversionFactor},o.prototype._redrawLabel=function(t,e,i,o,n){var r=s.getDOMElement("div",this.DOMelements.labels,this.dom.frame)
r.className=o,r.innerHTML=e,"left"===i?(r.style.left="-"+this.options.labelOffsetX+"px",r.style.textAlign="right"):(r.style.right="-"+this.options.labelOffsetX+"px",r.style.textAlign="left"),r.style.top=t-.5*n+this.options.labelOffsetY+"px",e+=""
var a=Math.max(this.props.majorCharWidth,this.props.minorCharWidth)
this.maxLabelSize<e.length*a&&(this.maxLabelSize=e.length*a)},o.prototype._redrawLine=function(t,e,i,o,n){if(this.master===!0){var r=s.getDOMElement("div",this.DOMelements.lines,this.dom.lineContainer)
r.className=i,r.innerHTML="","left"===e?r.style.left=this.width-o+"px":r.style.right=this.width-o+"px",r.style.width=n+"px",r.style.top=t+"px"}},o.prototype._redrawTitle=function(t){if(s.prepareElements(this.DOMelements.title),void 0!==this.options[t].title&&void 0!==this.options[t].title.text){var e=s.getDOMElement("div",this.DOMelements.title,this.dom.frame)
e.className="vis-y-axis vis-title vis-"+t,e.innerHTML=this.options[t].title.text,void 0!==this.options[t].title.style&&n.addCssText(e,this.options[t].title.style),"left"===t?e.style.left=this.props.titleCharHeight+"px":e.style.right=this.props.titleCharHeight+"px",e.style.width=this.height+"px"}s.cleanupElements(this.DOMelements.title)},o.prototype._calculateCharSize=function(){if(!("minorCharHeight"in this.props)){var t=document.createTextNode("0"),e=document.createElement("div")
e.className="vis-y-axis vis-minor vis-measure",e.appendChild(t),this.dom.frame.appendChild(e),this.props.minorCharHeight=e.clientHeight,this.props.minorCharWidth=e.clientWidth,this.dom.frame.removeChild(e)}if(!("majorCharHeight"in this.props)){var i=document.createTextNode("0"),o=document.createElement("div")
o.className="vis-y-axis vis-major vis-measure",o.appendChild(i),this.dom.frame.appendChild(o),this.props.majorCharHeight=o.clientHeight,this.props.majorCharWidth=o.clientWidth,this.dom.frame.removeChild(o)}if(!("titleCharHeight"in this.props)){var n=document.createTextNode("0"),s=document.createElement("div")
s.className="vis-y-axis vis-title vis-measure",s.appendChild(n),this.dom.frame.appendChild(s),this.props.titleCharHeight=s.clientHeight,this.props.titleCharWidth=s.clientWidth,this.dom.frame.removeChild(s)}},t.exports=o},function(t,e){"use strict"
function i(t,e,i,o,n,s,r){this.current=0,this.autoScale=!0,this.stepIndex=0,this.step=1,this.scale=1,this.formattingFunction=s,this.marginStart,this.marginEnd,this.deadSpace=0,this.majorSteps=[1,2,5,10],this.minorSteps=[.25,.5,1,2],this.alignZeros=r,this.setRange(t,e,i,o,n)}i.prototype.setRange=function(t,e,i,o,n){this._start=void 0===n.min?t:n.min,this._end=void 0===n.max?e:n.max,this._start===this._end&&(this._start=void 0===n.min?this._start-.75:this._start,this._end=void 0===n.max?this._end+1:this._end),this.autoScale===!0&&this.setMinimumStep(i,o),this.setFirst(n)},i.prototype.setMinimumStep=function(t,e){var i=this._end-this._start,o=1.2*i,n=t*(o/e),s=Math.round(Math.log(o)/Math.LN10),r=-1,a=Math.pow(10,s),h=0
0>s&&(h=s)
for(var d=!1,l=h;Math.abs(l)<=Math.abs(s);l++){a=Math.pow(10,l)
for(var u=0;u<this.minorSteps.length;u++){var c=a*this.minorSteps[u]
if(c>=n){d=!0,r=u
break}}if(d===!0)break}this.stepIndex=r,this.scale=a,this.step=a*this.minorSteps[r]},i.prototype.setFirst=function(t){void 0===t&&(t={})
var e=void 0===t.min?this._start-2*this.scale*this.minorSteps[this.stepIndex]:t.min,i=void 0===t.max?this._end+this.scale*this.minorSteps[this.stepIndex]:t.max
this.marginEnd=void 0===t.max?this.roundToMinor(i):t.max,this.marginStart=void 0===t.min?this.roundToMinor(e):t.min,this.alignZeros===!0&&(this.marginEnd-this.marginStart)%this.step!=0&&(this.marginEnd+=this.marginEnd%this.step),this.deadSpace=this.roundToMinor(i)-i+this.roundToMinor(e)-e,this.marginRange=this.marginEnd-this.marginStart,this.current=this.marginEnd},i.prototype.roundToMinor=function(t){var e=t-t%(this.scale*this.minorSteps[this.stepIndex])
return t%(this.scale*this.minorSteps[this.stepIndex])>.5*(this.scale*this.minorSteps[this.stepIndex])?e+this.scale*this.minorSteps[this.stepIndex]:e},i.prototype.hasNext=function(){return this.current>=this.marginStart},i.prototype.next=function(){var t=this.current
this.current-=this.step,this.current===t&&(this.current=this._end)},i.prototype.previous=function(){this.current+=this.step,this.marginEnd+=this.step,this.marginRange=this.marginEnd-this.marginStart},i.prototype.getCurrent=function(){var t=Math.abs(this.current)<this.step/2?0:this.current,e=t.toPrecision(5)
return"function"==typeof this.formattingFunction&&(e=this.formattingFunction(t)),"number"==typeof e?""+e:"string"==typeof e?e:t.toPrecision(5)},i.prototype.isMajor=function(){return this.current%(this.scale*this.majorSteps[this.stepIndex])===0},i.prototype.shift=function(t){if(0>t)for(var e=0;-t>e;e++)this.previous()
else if(t>0)for(var e=0;t>e;e++)this.next()},t.exports=i},function(t,e,i){"use strict"
function o(t,e,i,o){this.id=e
var s=["sampling","style","sort","yAxisOrientation","barChart","drawPoints","shaded","interpolation"]
this.options=n.selectiveBridgeObject(s,i),this.usingDefaultStyle=void 0===t.className,this.groupsUsingDefaultStyles=o,this.zeroPosition=0,this.update(t),1==this.usingDefaultStyle&&(this.groupsUsingDefaultStyles[0]+=1),this.itemsData=[],this.visible=void 0===t.visible?!0:t.visible}var n=i(1),s=i(7),r=i(54),a=i(56),h=i(55)
o.prototype.setItems=function(t){if(null!=t){this.itemsData=t,1==this.options.sort&&this.itemsData.sort(function(t,e){return t.x-e.x})
for(var e=0;e<this.itemsData.length;e++)this.itemsData[e].y=Number(this.itemsData[e].y)}else this.itemsData=[]},o.prototype.setZeroPosition=function(t){this.zeroPosition=t},o.prototype.setOptions=function(t){if(void 0!==t){var e=["sampling","style","sort","yAxisOrientation","barChart","excludeFromLegend"]
n.selectiveDeepExtend(e,this.options,t),"function"==typeof t.drawPoints&&(t.drawPoints={onRender:t.drawPoints}),n.mergeOptions(this.options,t,"interpolation"),n.mergeOptions(this.options,t,"drawPoints"),n.mergeOptions(this.options,t,"shaded"),t.interpolation&&"object"==typeof t.interpolation&&t.interpolation.parametrization&&("uniform"==t.interpolation.parametrization?this.options.interpolation.alpha=0:"chordal"==t.interpolation.parametrization?this.options.interpolation.alpha=1:(this.options.interpolation.parametrization="centripetal",this.options.interpolation.alpha=.5))}"line"==this.options.style?this.type=new r(this.id,this.options):"bar"==this.options.style?this.type=new a(this.id,this.options):"points"==this.options.style&&(this.type=new h(this.id,this.options))},o.prototype.update=function(t){this.group=t,this.content=t.content||"graph",this.className=t.className||this.className||"vis-graph-group"+this.groupsUsingDefaultStyles[0]%10,this.visible=void 0===t.visible?!0:t.visible,this.style=t.style,this.setOptions(t.options)},o.prototype.drawIcon=function(t,e,i,o,n,r){var a,h,d=.5*r,l=s.getSVGElement("rect",i,o)
if(l.setAttributeNS(null,"x",t),l.setAttributeNS(null,"y",e-d),l.setAttributeNS(null,"width",n),l.setAttributeNS(null,"height",2*d),l.setAttributeNS(null,"class","vis-outline"),"line"==this.options.style){if(a=s.getSVGElement("path",i,o),a.setAttributeNS(null,"class",this.className),void 0!==this.style&&a.setAttributeNS(null,"style",this.style),a.setAttributeNS(null,"d","M"+t+","+e+" L"+(t+n)+","+e),1==this.options.shaded.enabled&&(h=s.getSVGElement("path",i,o),"top"==this.options.shaded.orientation?h.setAttributeNS(null,"d","M"+t+", "+(e-d)+"L"+t+","+e+" L"+(t+n)+","+e+" L"+(t+n)+","+(e-d)):h.setAttributeNS(null,"d","M"+t+","+e+" L"+t+","+(e+d)+" L"+(t+n)+","+(e+d)+"L"+(t+n)+","+e),h.setAttributeNS(null,"class",this.className+" vis-icon-fill")),1==this.options.drawPoints.enabled){var u={style:this.options.drawPoints.style,size:this.options.drawPoints.size,className:this.className}
s.drawPoint(t+.5*n,e,u,i,o)}}else{var c=Math.round(.3*n),p=Math.round(.4*r),f=Math.round(.75*r),m=Math.round((n-2*c)/3)
s.drawBar(t+.5*c+m,e+d-p-1,c,p,this.className+" vis-bar",i,o,this.style),s.drawBar(t+1.5*c+m+2,e+d-f-1,c,f,this.className+" vis-bar",i,o,this.style)}},o.prototype.getLegend=function(t,e){var i=document.createElementNS("http://www.w3.org/2000/svg","svg")
return this.drawIcon(0,.5*e,[],i,t,e),{icon:i,label:this.content,orientation:this.options.yAxisOrientation}},o.prototype.getYRange=function(t){return this.type.getYRange(t)},o.prototype.getData=function(t){return this.type.getData(t)},o.prototype.draw=function(t,e,i){this.type.draw(t,e,i)},t.exports=o},function(t,e,i){"use strict"
function o(t,e){this.groupId=t,this.options=e}var n=i(7),s=i(55)
o.prototype.getData=function(t){for(var e=[],i=0;i<t.length;i++)e.push({x:t[i].x,y:t[i].y,groupId:this.groupId})
return e},o.prototype.getYRange=function(t){for(var e=t[0].y,i=t[0].y,o=0;o<t.length;o++)e=e>t[o].y?t[o].y:e,i=i<t[o].y?t[o].y:i
return{min:e,max:i,yAxisOrientation:this.options.yAxisOrientation}},o.getStackedYRange=function(t,e,i,n,s){if(t.length>0){t.sort(function(t,e){return t.x===e.x?t.groupId<e.groupId?-1:1:t.x-e.x})
var r={}
o._getDataIntersections(r,t),e[n]=o._getStackedYRange(r,t),e[n].yAxisOrientation=s,i.push(n)}},o._getStackedYRange=function(t,e){for(var i,o=e[0].y,n=e[0].y,s=0;s<e.length;s++)i=e[s].x,void 0===t[i]?(o=o>e[s].y?e[s].y:o,n=n<e[s].y?e[s].y:n):e[s].y<0?t[i].accumulatedNegative+=e[s].y:t[i].accumulatedPositive+=e[s].y
for(var r in t)t.hasOwnProperty(r)&&(o=o>t[r].accumulatedNegative?t[r].accumulatedNegative:o,o=o>t[r].accumulatedPositive?t[r].accumulatedPositive:o,n=n<t[r].accumulatedNegative?t[r].accumulatedNegative:n,n=n<t[r].accumulatedPositive?t[r].accumulatedPositive:n)
return{min:o,max:n}},o._getDataIntersections=function(t,e){for(var i,o=0;o<e.length;o++)o+1<e.length&&(i=Math.abs(e[o+1].x-e[o].x)),o>0&&(i=Math.min(i,Math.abs(e[o-1].x-e[o].x))),0===i&&(void 0===t[e[o].x]&&(t[e[o].x]={amount:0,resolved:0,accumulatedPositive:0,accumulatedNegative:0}),t[e[o].x].amount+=1)},o.prototype.draw=function(t,e,i){if(null!=t&&t.length>0){var r,a,h=Number(i.svg.style.height.replace("px",""))
if(r=n.getSVGElement("path",i.svgElements,i.svg),r.setAttributeNS(null,"class",e.className),void 0!==e.style&&r.setAttributeNS(null,"style",e.style),a=1==e.options.interpolation.enabled?o._catmullRom(t,e):o._linear(t),1==e.options.shaded.enabled){var d,l=n.getSVGElement("path",i.svgElements,i.svg)
d="top"==e.options.shaded.orientation?"M"+t[0].x+",0 "+a+"L"+t[t.length-1].x+",0":"M"+t[0].x+","+h+" "+a+"L"+t[t.length-1].x+","+h,l.setAttributeNS(null,"class",e.className+" vis-fill"),void 0!==e.options.shaded.style&&l.setAttributeNS(null,"style",e.options.shaded.style),l.setAttributeNS(null,"d",d)}r.setAttributeNS(null,"d","M"+a),1==e.options.drawPoints.enabled&&s.draw(t,e,i)}},o._catmullRomUniform=function(t){for(var e,i,o,n,s,r,a=Math.round(t[0].x)+","+Math.round(t[0].y)+" ",h=1/6,d=t.length,l=0;d-1>l;l++)e=0==l?t[0]:t[l-1],i=t[l],o=t[l+1],n=d>l+2?t[l+2]:o,s={x:(-e.x+6*i.x+o.x)*h,y:(-e.y+6*i.y+o.y)*h},r={x:(i.x+6*o.x-n.x)*h,y:(i.y+6*o.y-n.y)*h},a+="C"+s.x+","+s.y+" "+r.x+","+r.y+" "+o.x+","+o.y+" "
return a},o._catmullRom=function(t,e){var i=e.options.interpolation.alpha
if(0==i||void 0===i)return this._catmullRomUniform(t)
for(var o,n,s,r,a,h,d,l,u,c,p,f,m,g,v,y,b,_,w,x=Math.round(t[0].x)+","+Math.round(t[0].y)+" ",k=t.length,T=0;k-1>T;T++)o=0==T?t[0]:t[T-1],n=t[T],s=t[T+1],r=k>T+2?t[T+2]:s,d=Math.sqrt(Math.pow(o.x-n.x,2)+Math.pow(o.y-n.y,2)),l=Math.sqrt(Math.pow(n.x-s.x,2)+Math.pow(n.y-s.y,2)),u=Math.sqrt(Math.pow(s.x-r.x,2)+Math.pow(s.y-r.y,2)),g=Math.pow(u,i),y=Math.pow(u,2*i),v=Math.pow(l,i),b=Math.pow(l,2*i),w=Math.pow(d,i),_=Math.pow(d,2*i),c=2*_+3*w*v+b,p=2*y+3*g*v+b,f=3*w*(w+v),f>0&&(f=1/f),m=3*g*(g+v),m>0&&(m=1/m),a={x:(-b*o.x+c*n.x+_*s.x)*f,y:(-b*o.y+c*n.y+_*s.y)*f},h={x:(y*n.x+p*s.x-b*r.x)*m,y:(y*n.y+p*s.y-b*r.y)*m},0==a.x&&0==a.y&&(a=n),0==h.x&&0==h.y&&(h=s),x+="C"+a.x+","+a.y+" "+h.x+","+h.y+" "+s.x+","+s.y+" "
return x},o._linear=function(t){for(var e="",i=0;i<t.length;i++)e+=0==i?t[i].x+","+t[i].y:" "+t[i].x+","+t[i].y
return e},t.exports=o},function(t,e,i){"use strict"
function o(t,e){this.groupId=t,this.options=e}var n=i(7)
o.prototype.getYRange=function(t){for(var e=t[0].y,i=t[0].y,o=0;o<t.length;o++)e=e>t[o].y?t[o].y:e,i=i<t[o].y?t[o].y:i
return{min:e,max:i,yAxisOrientation:this.options.yAxisOrientation}},o.prototype.draw=function(t,e,i,n){o.draw(t,e,i,n)},o.draw=function(t,e,i,o){function s(t){return t="undefined"==typeof t?{}:t,{style:t.style||e.options.drawPoints.style,size:t.size||e.options.drawPoints.size,className:t.className||e.className}}function r(){var t=void 0
return i.options.drawPoints.onRender&&"function"==typeof i.options.drawPoints.onRender&&(t=i.options.drawPoints.onRender),e.group.options&&e.group.options.drawPoints&&e.group.options.drawPoints.onRender&&"function"==typeof e.group.options.drawPoints.onRender&&(t=e.group.options.drawPoints.onRender),t}o=o||0
for(var a=r(),h=0;h<t.length;h++)if(a){var d=a(t[h],e,i)
d!==!0&&"object"!=typeof d||n.drawPoint(t[h].x+o,t[h].y,s(d),i.svgElements,i.svg,t[h].label)}else n.drawPoint(t[h].x+o,t[h].y,s(),i.svgElements,i.svg,t[h].label)},t.exports=o},function(t,e,i){"use strict"
function o(t,e){this.groupId=t,this.options=e}var n=i(7),s=i(55)
o.prototype.getYRange=function(t){for(var e=t[0].y,i=t[0].y,o=0;o<t.length;o++)e=e>t[o].y?t[o].y:e,i=i<t[o].y?t[o].y:i
return{min:e,max:i,yAxisOrientation:this.options.yAxisOrientation}},o.prototype.getData=function(t){for(var e=[],i=0;i<t.length;i++)e.push({x:t[i].x,y:t[i].y,groupId:this.groupId})
return e},o.draw=function(t,e,i){var r,a,h,d,l,u,c=[],p={},f=0
for(l=0;l<t.length;l++)if(d=i.groups[t[l]],"bar"===d.options.style&&d.visible===!0&&(void 0===i.options.groups.visibility[t[l]]||i.options.groups.visibility[t[l]]===!0))for(u=0;u<e[t[l]].length;u++)c.push({x:e[t[l]][u].x,y:e[t[l]][u].y,groupId:t[l],label:e[t[l]][u].label}),f+=1
if(0!==f)for(c.sort(function(t,e){return t.x===e.x?t.groupId<e.groupId?-1:1:t.x-e.x}),o._getDataIntersections(p,c),l=0;l<c.length;l++){d=i.groups[c[l].groupId]
var m=.1*d.options.barChart.width
a=c[l].x
var g=0
if(void 0===p[a])l+1<c.length&&(r=Math.abs(c[l+1].x-a)),l>0&&(r=Math.min(r,Math.abs(c[l-1].x-a))),h=o._getSafeDrawData(r,d,m)
else{var v=l+(p[a].amount-p[a].resolved),y=l-(p[a].resolved+1)
v<c.length&&(r=Math.abs(c[v].x-a)),y>0&&(r=Math.min(r,Math.abs(c[y].x-a))),h=o._getSafeDrawData(r,d,m),p[a].resolved+=1,d.options.stack===!0?c[l].y<d.zeroPosition?(g=p[a].accumulatedNegative,p[a].accumulatedNegative+=d.zeroPosition-c[l].y):(g=p[a].accumulatedPositive,p[a].accumulatedPositive+=d.zeroPosition-c[l].y):d.options.barChart.sideBySide===!0&&(h.width=h.width/p[a].amount,h.offset+=p[a].resolved*h.width-.5*h.width*(p[a].amount+1),"left"===d.options.barChart.align?h.offset-=.5*h.width:"right"===d.options.barChart.align&&(h.offset+=.5*h.width))}if(n.drawBar(c[l].x+h.offset,c[l].y-g,h.width,d.zeroPosition-c[l].y,d.className+" vis-bar",i.svgElements,i.svg,d.style),d.options.drawPoints.enabled===!0){var b={x:c[l].x+h.offset,y:c[l].y-g,groupId:c[l].groupId,label:c[l].label}
s.draw([b],d,i,h.offset)}}},o._getDataIntersections=function(t,e){for(var i,o=0;o<e.length;o++)o+1<e.length&&(i=Math.abs(e[o+1].x-e[o].x)),o>0&&(i=Math.min(i,Math.abs(e[o-1].x-e[o].x))),0===i&&(void 0===t[e[o].x]&&(t[e[o].x]={amount:0,resolved:0,accumulatedPositive:0,accumulatedNegative:0}),t[e[o].x].amount+=1)},o._getSafeDrawData=function(t,e,i){var o,n
return t<e.options.barChart.width&&t>0?(o=i>t?i:t,n=0,"left"===e.options.barChart.align?n-=.5*t:"right"===e.options.barChart.align&&(n+=.5*t)):(o=e.options.barChart.width,n=0,"left"===e.options.barChart.align?n-=.5*e.options.barChart.width:"right"===e.options.barChart.align&&(n+=.5*e.options.barChart.width)),{width:o,offset:n}},o.getStackedYRange=function(t,e,i,n,s){if(t.length>0){t.sort(function(t,e){return t.x===e.x?t.groupId<e.groupId?-1:1:t.x-e.x})
var r={}
o._getDataIntersections(r,t),e[n]=o._getStackedYRange(r,t),e[n].yAxisOrientation=s,i.push(n)}},o._getStackedYRange=function(t,e){for(var i,o=e[0].y,n=e[0].y,s=0;s<e.length;s++)i=e[s].x,void 0===t[i]?(o=o>e[s].y?e[s].y:o,n=n<e[s].y?e[s].y:n):e[s].y<0?t[i].accumulatedNegative+=e[s].y:t[i].accumulatedPositive+=e[s].y
for(var r in t)t.hasOwnProperty(r)&&(o=o>t[r].accumulatedNegative?t[r].accumulatedNegative:o,o=o>t[r].accumulatedPositive?t[r].accumulatedPositive:o,n=n<t[r].accumulatedNegative?t[r].accumulatedNegative:n,n=n<t[r].accumulatedPositive?t[r].accumulatedPositive:n)
return{min:o,max:n}},t.exports=o},function(t,e,i){"use strict"
function o(t,e,i,o){this.body=t,this.defaultOptions={enabled:!0,icons:!0,iconSize:20,iconSpacing:6,left:{visible:!0,position:"top-left"},right:{visible:!0,position:"top-left"}},this.side=i,this.options=n.extend({},this.defaultOptions),this.linegraphOptions=o,this.svgElements={},this.dom={},this.groups={},this.amountOfGroups=0,this._create(),this.setOptions(e)}var n=i(1),s=i(7),r=i(26)
o.prototype=new r,o.prototype.clear=function(){this.groups={},this.amountOfGroups=0},o.prototype.addGroup=function(t,e){1!=e.options.excludeFromLegend&&(this.groups.hasOwnProperty(t)||(this.groups[t]=e),this.amountOfGroups+=1)},o.prototype.updateGroup=function(t,e){this.groups[t]=e},o.prototype.removeGroup=function(t){this.groups.hasOwnProperty(t)&&(delete this.groups[t],this.amountOfGroups-=1)},o.prototype._create=function(){this.dom.frame=document.createElement("div"),this.dom.frame.className="vis-legend",this.dom.frame.style.position="absolute",this.dom.frame.style.top="10px",this.dom.frame.style.display="block",this.dom.textArea=document.createElement("div"),this.dom.textArea.className="vis-legend-text",this.dom.textArea.style.position="relative",this.dom.textArea.style.top="0px",this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.style.position="absolute",this.svg.style.top="0px",this.svg.style.width=this.options.iconSize+5+"px",this.svg.style.height="100%",this.dom.frame.appendChild(this.svg),this.dom.frame.appendChild(this.dom.textArea)},o.prototype.hide=function(){this.dom.frame.parentNode&&this.dom.frame.parentNode.removeChild(this.dom.frame)},o.prototype.show=function(){this.dom.frame.parentNode||this.body.dom.center.appendChild(this.dom.frame)},o.prototype.setOptions=function(t){var e=["enabled","orientation","icons","left","right"]
n.selectiveDeepExtend(e,this.options,t)},o.prototype.redraw=function(){var t=0,e=Object.keys(this.groups)
e.sort(function(t,e){return e>t?-1:1})
for(var i=0;i<e.length;i++){var o=e[i]
1!=this.groups[o].visible||void 0!==this.linegraphOptions.visibility[o]&&1!=this.linegraphOptions.visibility[o]||t++}if(0==this.options[this.side].visible||0==this.amountOfGroups||0==this.options.enabled||0==t)this.hide()
else{if(this.show(),"top-left"==this.options[this.side].position||"bottom-left"==this.options[this.side].position?(this.dom.frame.style.left="4px",this.dom.frame.style.textAlign="left",this.dom.textArea.style.textAlign="left",this.dom.textArea.style.left=this.options.iconSize+15+"px",this.dom.textArea.style.right="",this.svg.style.left="0px",this.svg.style.right=""):(this.dom.frame.style.right="4px",this.dom.frame.style.textAlign="right",this.dom.textArea.style.textAlign="right",this.dom.textArea.style.right=this.options.iconSize+15+"px",this.dom.textArea.style.left="",this.svg.style.right="0px",this.svg.style.left=""),"top-left"==this.options[this.side].position||"top-right"==this.options[this.side].position)this.dom.frame.style.top=4-Number(this.body.dom.center.style.top.replace("px",""))+"px",this.dom.frame.style.bottom=""
else{var n=this.body.domProps.center.height-this.body.domProps.centerContainer.height
this.dom.frame.style.bottom=4+n+Number(this.body.dom.center.style.top.replace("px",""))+"px",this.dom.frame.style.top=""}0==this.options.icons?(this.dom.frame.style.width=this.dom.textArea.offsetWidth+10+"px",this.dom.textArea.style.right="",this.dom.textArea.style.left="",this.svg.style.width="0px"):(this.dom.frame.style.width=this.options.iconSize+15+this.dom.textArea.offsetWidth+10+"px",this.drawLegendIcons())
for(var s="",i=0;i<e.length;i++){var o=e[i]
1!=this.groups[o].visible||void 0!==this.linegraphOptions.visibility[o]&&1!=this.linegraphOptions.visibility[o]||(s+=this.groups[o].content+"<br />")}this.dom.textArea.innerHTML=s,this.dom.textArea.style.lineHeight=.75*this.options.iconSize+this.options.iconSpacing+"px"}},o.prototype.drawLegendIcons=function(){if(this.dom.frame.parentNode){var t=Object.keys(this.groups)
t.sort(function(t,e){return e>t?-1:1}),s.prepareElements(this.svgElements)
var e=window.getComputedStyle(this.dom.frame).paddingTop,i=Number(e.replace("px","")),o=i,n=this.options.iconSize,r=.75*this.options.iconSize,a=i+.5*r+3
this.svg.style.width=n+5+i+"px"
for(var h=0;h<t.length;h++){var d=t[h]
1!=this.groups[d].visible||void 0!==this.linegraphOptions.visibility[d]&&1!=this.linegraphOptions.visibility[d]||(this.groups[d].drawIcon(o,a,this.svgElements,this.svg,n,r),a+=r+this.options.iconSpacing)}s.cleanupElements(this.svgElements)}},t.exports=o},function(t,e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var i="string",o="boolean",n="number",s="array",r="date",a="object",h="dom",d="moment",l="any",u={configure:{enabled:{"boolean":o},filter:{"boolean":o,"function":"function"},container:{dom:h},__type__:{object:a,"boolean":o,"function":"function"}},yAxisOrientation:{string:["left","right"]},defaultGroup:{string:i},sort:{"boolean":o},sampling:{"boolean":o},stack:{"boolean":o},graphHeight:{string:i,number:n},shaded:{enabled:{"boolean":o},orientation:{string:["bottom","top"]},__type__:{"boolean":o,object:a}},style:{string:["line","bar","points"]},barChart:{width:{number:n},sideBySide:{"boolean":o},align:{string:["left","center","right"]},__type__:{object:a}},interpolation:{enabled:{"boolean":o},parametrization:{string:["centripetal","chordal","uniform"]},alpha:{number:n},__type__:{object:a,"boolean":o}},drawPoints:{enabled:{"boolean":o},onRender:{"function":"function"},size:{number:n},style:{string:["square","circle"]},__type__:{object:a,"boolean":o,"function":"function"}},dataAxis:{showMinorLabels:{"boolean":o},showMajorLabels:{"boolean":o},icons:{"boolean":o},width:{string:i,number:n},visible:{"boolean":o},alignZeros:{"boolean":o},left:{range:{min:{number:n},max:{number:n},__type__:{object:a}},format:{"function":"function"},title:{text:{string:i,number:n},style:{string:i},__type__:{object:a}},__type__:{object:a}},right:{range:{min:{number:n},max:{number:n},__type__:{object:a}},format:{"function":"function"},title:{text:{string:i,number:n},style:{string:i},__type__:{object:a}},__type__:{object:a}},__type__:{object:a}},legend:{enabled:{"boolean":o},icons:{"boolean":o},left:{visible:{"boolean":o},position:{string:["top-right","bottom-right","top-left","bottom-left"]},__type__:{object:a}},right:{visible:{"boolean":o},position:{string:["top-right","bottom-right","top-left","bottom-left"]},__type__:{object:a}},__type__:{object:a,"boolean":o}},groups:{visibility:{any:l},__type__:{object:a}},autoResize:{"boolean":o},throttleRedraw:{number:n},clickToUse:{"boolean":o},end:{number:n,date:r,string:i,moment:d},format:{minorLabels:{millisecond:{string:i,undefined:"undefined"},second:{string:i,undefined:"undefined"},minute:{string:i,undefined:"undefined"},hour:{string:i,undefined:"undefined"},weekday:{string:i,undefined:"undefined"},day:{string:i,undefined:"undefined"},month:{string:i,undefined:"undefined"},year:{string:i,undefined:"undefined"},__type__:{object:a}},majorLabels:{millisecond:{string:i,undefined:"undefined"},second:{string:i,undefined:"undefined"},minute:{string:i,undefined:"undefined"},hour:{string:i,undefined:"undefined"},weekday:{string:i,undefined:"undefined"},day:{string:i,undefined:"undefined"},month:{string:i,undefined:"undefined"},year:{string:i,undefined:"undefined"},__type__:{object:a}},__type__:{object:a}},moment:{"function":"function"},height:{string:i,number:n},hiddenDates:{object:a,array:s},locale:{string:i},locales:{__any__:{any:l},__type__:{object:a}},max:{date:r,number:n,string:i,moment:d},maxHeight:{number:n,string:i},min:{date:r,number:n,string:i,moment:d},minHeight:{number:n,string:i},moveable:{"boolean":o},multiselect:{"boolean":o},orientation:{string:i},showCurrentTime:{"boolean":o},showMajorLabels:{"boolean":o},showMinorLabels:{"boolean":o},start:{date:r,number:n,string:i,moment:d},timeAxis:{scale:{string:i,undefined:"undefined"},step:{number:n,undefined:"undefined"},__type__:{object:a}},width:{string:i,number:n},zoomable:{"boolean":o},zoomKey:{string:["ctrlKey","altKey","metaKey",""]},zoomMax:{number:n},zoomMin:{number:n},__type__:{object:a}},c={global:{sort:!0,sampling:!0,stack:!1,shaded:{enabled:!1,orientation:["top","bottom"]},style:["line","bar","points"],barChart:{width:[50,5,100,5],sideBySide:!1,align:["left","center","right"]},interpolation:{enabled:!0,parametrization:["centripetal","chordal","uniform"]},drawPoints:{enabled:!0,size:[6,2,30,1],style:["square","circle"]},dataAxis:{showMinorLabels:!0,showMajorLabels:!0,icons:!1,width:[40,0,200,1],visible:!0,alignZeros:!0,left:{title:{text:"",style:""}},right:{title:{text:"",style:""}}},legend:{enabled:!1,icons:!0,left:{visible:!0,position:["top-right","bottom-right","top-left","bottom-left"]},right:{visible:!0,position:["top-right","bottom-right","top-left","bottom-left"]}},autoResize:!0,throttleRedraw:[10,0,1e3,10],clickToUse:!1,end:"",format:{minorLabels:{millisecond:"SSS",second:"s",minute:"HH:mm",hour:"HH:mm",weekday:"ddd D",day:"D",month:"MMM",year:"YYYY"},majorLabels:{millisecond:"HH:mm:ss",second:"D MMMM HH:mm",minute:"ddd D MMMM",hour:"ddd D MMMM",weekday:"MMMM YYYY",day:"MMMM YYYY",month:"YYYY",year:""}},height:"",locale:"",max:"",maxHeight:"",min:"",minHeight:"",moveable:!0,orientation:["both","bottom","top"],showCurrentTime:!1,showMajorLabels:!0,showMinorLabels:!0,start:"",width:"100%",zoomable:!0,zoomKey:["ctrlKey","altKey","metaKey",""],zoomMax:[31536e10,10,31536e10,1],zoomMin:[10,10,31536e10,1]}}
e.allOptions=u,e.configureOptions=c},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e,i){var o=this
if(!(this instanceof n))throw new SyntaxError("Constructor must be called with the new operator")
this.options={},this.defaultOptions={locale:"en",locales:Y,clickToUse:!1},z.extend(this.options,this.defaultOptions),this.body={container:t,nodes:{},nodeIndices:[],edges:{},edgeIndices:[],emitter:{on:this.on.bind(this),off:this.off.bind(this),emit:this.emit.bind(this),once:this.once.bind(this)},eventListeners:{onTap:function(){},onTouch:function(){},onDoubleTap:function(){},onHold:function(){},onDragStart:function(){},onDrag:function(){},onDragEnd:function(){},onMouseWheel:function(){},onPinch:function(){},onMouseMove:function(){},onRelease:function(){},onContext:function(){}},data:{nodes:null,edges:null},functions:{createNode:function(){},createEdge:function(){},getPointer:function(){}},modules:{},view:{scale:1,translation:{x:0,y:0}}},this.bindEventListeners(),this.images=new B(function(){return o.body.emitter.emit("_requestRedraw")}),this.groups=new r["default"],this.canvas=new y["default"](this.body),this.selectionHandler=new T["default"](this.body,this.canvas),this.interactionHandler=new x["default"](this.body,this.canvas,this.selectionHandler),this.view=new _["default"](this.body,this.canvas),this.renderer=new g["default"](this.body,this.canvas),this.physics=new c["default"](this.body),this.layoutEngine=new O["default"](this.body),this.clustering=new f["default"](this.body),this.manipulation=new M["default"](this.body,this.canvas,this.selectionHandler),this.nodesHandler=new h["default"](this.body,this.images,this.groups,this.layoutEngine),this.edgesHandler=new l["default"](this.body,this.images,this.groups),this.body.modules.kamadaKawai=new j["default"](this.body,150,.05),this.body.modules.clustering=this.clustering,this.canvas._create(),this.setOptions(i),this.setData(e)}var s=i(60),r=o(s),a=i(61),h=o(a),d=i(81),l=o(d),u=i(90),c=o(u),p=i(99),f=o(p),m=i(101),g=o(m),v=i(102),y=o(v),b=i(103),_=o(b),w=i(105),x=o(w),k=i(108),T=o(k),D=i(109),O=o(D),C=i(110),M=o(C),S=i(45),E=o(S),P=i(47),N=o(P),I=i(111),A=i(112),j=o(A)
i(114)
var L=i(12),z=(i(20),i(1)),R=(i(8),i(10),i(115)),F=i(116),B=i(117),H=i(40),Y=i(118)
L(n.prototype),n.prototype.setOptions=function(t){var e=this
if(void 0!==t){var i=N["default"].validate(t,I.allOptions)
i===!0&&console.log("%cErrors have been found in the supplied options object.",P.printStyle)
var o=["locale","locales","clickToUse"]
if(z.selectiveDeepExtend(o,this.options,t),t=this.layoutEngine.setOptions(t.layout,t),this.canvas.setOptions(t),this.groups.setOptions(t.groups),this.nodesHandler.setOptions(t.nodes),this.edgesHandler.setOptions(t.edges),this.physics.setOptions(t.physics),this.manipulation.setOptions(t.manipulation,t,this.options),this.interactionHandler.setOptions(t.interaction),this.renderer.setOptions(t.interaction),this.selectionHandler.setOptions(t.interaction),void 0!==t.groups&&this.body.emitter.emit("refreshNodes"),"configure"in t&&(this.configurator||(this.configurator=new E["default"](this,this.body.container,I.configureOptions,this.canvas.pixelRatio)),this.configurator.setOptions(t.configure)),this.configurator&&this.configurator.options.enabled===!0){var n={nodes:{},edges:{},layout:{},interaction:{},manipulation:{},physics:{},global:{}}
z.deepExtend(n.nodes,this.nodesHandler.options),z.deepExtend(n.edges,this.edgesHandler.options),z.deepExtend(n.layout,this.layoutEngine.options),z.deepExtend(n.interaction,this.selectionHandler.options),z.deepExtend(n.interaction,this.renderer.options),z.deepExtend(n.interaction,this.interactionHandler.options),z.deepExtend(n.manipulation,this.manipulation.options),z.deepExtend(n.physics,this.physics.options),z.deepExtend(n.global,this.canvas.options),z.deepExtend(n.global,this.options),this.configurator.setModuleOptions(n)}void 0!==t.clickToUse?t.clickToUse===!0?void 0===this.activator&&(this.activator=new H(this.canvas.frame),this.activator.on("change",function(){e.body.emitter.emit("activate")})):(void 0!==this.activator&&(this.activator.destroy(),delete this.activator),this.body.emitter.emit("activate")):this.body.emitter.emit("activate"),this.canvas.setSize(),this.body.emitter.emit("startSimulation")}},n.prototype._updateVisibleIndices=function(){var t=this.body.nodes,e=this.body.edges
this.body.nodeIndices=[],this.body.edgeIndices=[]
for(var i in t)t.hasOwnProperty(i)&&t[i].options.hidden===!1&&this.body.nodeIndices.push(i)
for(var o in e)e.hasOwnProperty(o)&&e[o].options.hidden===!1&&this.body.edgeIndices.push(o)},n.prototype.bindEventListeners=function(){var t=this
this.body.emitter.on("_dataChanged",function(){t._updateVisibleIndices(),t.physics.updatePhysicsData(),t.body.emitter.emit("_requestRedraw"),t.body.emitter.emit("_dataUpdated")}),this.body.emitter.on("_dataUpdated",function(){t._updateValueRange(t.body.nodes),t._updateValueRange(t.body.edges),t.body.emitter.emit("startSimulation"),t.body.emitter.emit("_requestRedraw")})},n.prototype.setData=function(t){if(this.body.emitter.emit("resetPhysics"),this.body.emitter.emit("_resetData"),this.selectionHandler.unselectAll(),t&&t.dot&&(t.nodes||t.edges))throw new SyntaxError('Data must contain either parameter "dot" or  parameter pair "nodes" and "edges", but not both.')
if(this.setOptions(t&&t.options),t&&t.dot){console.log("The dot property has been depricated. Please use the static convertDot method to convert DOT into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertDot(dotString);")
var e=R.DOTToGraph(t.dot)
return void this.setData(e)}if(t&&t.gephi){console.log("The gephi property has been depricated. Please use the static convertGephi method to convert gephi into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertGephi(gephiJson);")
var i=F.parseGephi(t.gephi)
return void this.setData(i)}this.nodesHandler.setData(t&&t.nodes,!0),this.edgesHandler.setData(t&&t.edges,!0),this.body.emitter.emit("_dataChanged"),this.body.emitter.emit("_dataLoaded"),this.body.emitter.emit("initPhysics")},n.prototype.destroy=function(){this.body.emitter.emit("destroy"),this.body.emitter.off(),this.off(),delete this.groups,delete this.canvas,delete this.selectionHandler,delete this.interactionHandler,delete this.view,delete this.renderer,delete this.physics,delete this.layoutEngine,delete this.clustering,delete this.manipulation,delete this.nodesHandler,delete this.edgesHandler,delete this.configurator,delete this.images
for(var t in this.body.nodes)delete this.body.nodes[t]
for(var e in this.body.edges)delete this.body.edges[e]
z.recursiveDOMDelete(this.body.container)},n.prototype._updateValueRange=function(t){var e,i=void 0,o=void 0,n=0
for(e in t)if(t.hasOwnProperty(e)){var s=t[e].getValue()
void 0!==s&&(i=void 0===i?s:Math.min(s,i),o=void 0===o?s:Math.max(s,o),n+=s)}if(void 0!==i&&void 0!==o)for(e in t)t.hasOwnProperty(e)&&t[e].setValueRange(i,o,n)},n.prototype.isActive=function(){return!this.activator||this.activator.active},n.prototype.setSize=function(){return this.canvas.setSize.apply(this.canvas,arguments)},n.prototype.canvasToDOM=function(){return this.canvas.canvasToDOM.apply(this.canvas,arguments)},n.prototype.DOMtoCanvas=function(){return this.canvas.DOMtoCanvas.apply(this.canvas,arguments)},n.prototype.findNode=function(){return this.clustering.findNode.apply(this.clustering,arguments)},n.prototype.isCluster=function(){return this.clustering.isCluster.apply(this.clustering,arguments)},n.prototype.openCluster=function(){return this.clustering.openCluster.apply(this.clustering,arguments)},n.prototype.cluster=function(){return this.clustering.cluster.apply(this.clustering,arguments)},n.prototype.getNodesInCluster=function(){return this.clustering.getNodesInCluster.apply(this.clustering,arguments)},n.prototype.clusterByConnection=function(){return this.clustering.clusterByConnection.apply(this.clustering,arguments)},n.prototype.clusterByHubsize=function(){return this.clustering.clusterByHubsize.apply(this.clustering,arguments)},n.prototype.clusterOutliers=function(){return this.clustering.clusterOutliers.apply(this.clustering,arguments)},n.prototype.getSeed=function(){return this.layoutEngine.getSeed.apply(this.layoutEngine,arguments)},n.prototype.enableEditMode=function(){return this.manipulation.enableEditMode.apply(this.manipulation,arguments)},n.prototype.disableEditMode=function(){return this.manipulation.disableEditMode.apply(this.manipulation,arguments)},n.prototype.addNodeMode=function(){return this.manipulation.addNodeMode.apply(this.manipulation,arguments)},n.prototype.editNode=function(){return this.manipulation.editNode.apply(this.manipulation,arguments)},n.prototype.editNodeMode=function(){return console.log("Deprecated: Please use editNode instead of editNodeMode."),this.manipulation.editNode.apply(this.manipulation,arguments)},n.prototype.addEdgeMode=function(){return this.manipulation.addEdgeMode.apply(this.manipulation,arguments)},n.prototype.editEdgeMode=function(){return this.manipulation.editEdgeMode.apply(this.manipulation,arguments)},n.prototype.deleteSelected=function(){return this.manipulation.deleteSelected.apply(this.manipulation,arguments)},n.prototype.getPositions=function(){return this.nodesHandler.getPositions.apply(this.nodesHandler,arguments)},n.prototype.storePositions=function(){return this.nodesHandler.storePositions.apply(this.nodesHandler,arguments)},n.prototype.moveNode=function(){return this.nodesHandler.moveNode.apply(this.nodesHandler,arguments)},n.prototype.getBoundingBox=function(){return this.nodesHandler.getBoundingBox.apply(this.nodesHandler,arguments)},n.prototype.getConnectedNodes=function(t){return void 0!==this.body.nodes[t]?this.nodesHandler.getConnectedNodes.apply(this.nodesHandler,arguments):this.edgesHandler.getConnectedNodes.apply(this.edgesHandler,arguments)},n.prototype.getConnectedEdges=function(){return this.nodesHandler.getConnectedEdges.apply(this.nodesHandler,arguments)},n.prototype.startSimulation=function(){return this.physics.startSimulation.apply(this.physics,arguments)},n.prototype.stopSimulation=function(){return this.physics.stopSimulation.apply(this.physics,arguments)},n.prototype.stabilize=function(){return this.physics.stabilize.apply(this.physics,arguments)},n.prototype.getSelection=function(){return this.selectionHandler.getSelection.apply(this.selectionHandler,arguments)},n.prototype.getSelectedNodes=function(){return this.selectionHandler.getSelectedNodes.apply(this.selectionHandler,arguments)},n.prototype.getSelectedEdges=function(){return this.selectionHandler.getSelectedEdges.apply(this.selectionHandler,arguments)},n.prototype.getNodeAt=function(){var t=this.selectionHandler.getNodeAt.apply(this.selectionHandler,arguments)
return void 0!==t&&void 0!==t.id?t.id:t},n.prototype.getEdgeAt=function(){var t=this.selectionHandler.getEdgeAt.apply(this.selectionHandler,arguments)
return void 0!==t&&void 0!==t.id?t.id:t},n.prototype.selectNodes=function(){return this.selectionHandler.selectNodes.apply(this.selectionHandler,arguments)},n.prototype.selectEdges=function(){return this.selectionHandler.selectEdges.apply(this.selectionHandler,arguments)},n.prototype.unselectAll=function(){this.selectionHandler.unselectAll.apply(this.selectionHandler,arguments),this.redraw()},n.prototype.redraw=function(){return this.renderer.redraw.apply(this.renderer,arguments)},n.prototype.getScale=function(){return this.view.getScale.apply(this.view,arguments)},n.prototype.getViewPosition=function(){return this.view.getViewPosition.apply(this.view,arguments)},n.prototype.fit=function(){return this.view.fit.apply(this.view,arguments)},n.prototype.moveTo=function(){return this.view.moveTo.apply(this.view,arguments)},n.prototype.focus=function(){return this.view.focus.apply(this.view,arguments)},n.prototype.releaseNode=function(){return this.view.releaseNode.apply(this.view,arguments)},n.prototype.getOptionsFromConfigurator=function(){var t={}
return this.configurator&&(t=this.configurator.getOptions.apply(this.configurator)),t},t.exports=n},function(t,e,i){"use strict"
function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=i(1),r=function(){function t(){o(this,t),this.clear(),this.defaultIndex=0,this.groupsArray=[],this.groupIndex=0,this.defaultGroups=[{border:"#2B7CE9",background:"#97C2FC",highlight:{border:"#2B7CE9",background:"#D2E5FF"},hover:{border:"#2B7CE9",background:"#D2E5FF"}},{border:"#FFA500",background:"#FFFF00",highlight:{border:"#FFA500",background:"#FFFFA3"},hover:{border:"#FFA500",background:"#FFFFA3"}},{border:"#FA0A10",background:"#FB7E81",highlight:{border:"#FA0A10",background:"#FFAFB1"},hover:{border:"#FA0A10",background:"#FFAFB1"}},{border:"#41A906",background:"#7BE141",highlight:{border:"#41A906",background:"#A1EC76"},hover:{border:"#41A906",background:"#A1EC76"}},{border:"#E129F0",background:"#EB7DF4",highlight:{border:"#E129F0",background:"#F0B3F5"},hover:{border:"#E129F0",background:"#F0B3F5"}},{border:"#7C29F0",background:"#AD85E4",highlight:{border:"#7C29F0",background:"#D3BDF0"},hover:{border:"#7C29F0",background:"#D3BDF0"}},{border:"#C37F00",background:"#FFA807",highlight:{border:"#C37F00",background:"#FFCA66"},hover:{border:"#C37F00",background:"#FFCA66"}},{border:"#4220FB",background:"#6E6EFD",highlight:{border:"#4220FB",background:"#9B9BFD"},hover:{border:"#4220FB",background:"#9B9BFD"}},{border:"#FD5A77",background:"#FFC0CB",highlight:{border:"#FD5A77",background:"#FFD1D9"},hover:{border:"#FD5A77",background:"#FFD1D9"}},{border:"#4AD63A",background:"#C2FABC",highlight:{border:"#4AD63A",background:"#E6FFE3"},hover:{border:"#4AD63A",background:"#E6FFE3"}},{border:"#990000",background:"#EE0000",highlight:{border:"#BB0000",background:"#FF3333"},hover:{border:"#BB0000",background:"#FF3333"}},{border:"#FF6000",background:"#FF6000",highlight:{border:"#FF6000",background:"#FF6000"},hover:{border:"#FF6000",background:"#FF6000"}},{border:"#97C2FC",background:"#2B7CE9",highlight:{border:"#D2E5FF",background:"#2B7CE9"},hover:{border:"#D2E5FF",background:"#2B7CE9"}},{border:"#399605",background:"#255C03",highlight:{border:"#399605",background:"#255C03"},hover:{border:"#399605",background:"#255C03"}},{border:"#B70054",background:"#FF007E",highlight:{border:"#B70054",background:"#FF007E"},hover:{border:"#B70054",background:"#FF007E"}},{border:"#AD85E4",background:"#7C29F0",highlight:{border:"#D3BDF0",background:"#7C29F0"},hover:{border:"#D3BDF0",background:"#7C29F0"}},{border:"#4557FA",background:"#000EA1",highlight:{border:"#6E6EFD",background:"#000EA1"},hover:{border:"#6E6EFD",background:"#000EA1"}},{border:"#FFC0CB",background:"#FD5A77",highlight:{border:"#FFD1D9",background:"#FD5A77"},hover:{border:"#FFD1D9",background:"#FD5A77"}},{border:"#C2FABC",background:"#74D66A",highlight:{border:"#E6FFE3",background:"#74D66A"},hover:{border:"#E6FFE3",background:"#74D66A"}},{border:"#EE0000",background:"#990000",highlight:{border:"#FF3333",background:"#BB0000"},hover:{border:"#FF3333",background:"#BB0000"}}],this.options={},this.defaultOptions={useDefaultGroups:!0},s.extend(this.options,this.defaultOptions)}return n(t,[{key:"setOptions",value:function(t){var e=["useDefaultGroups"]
if(void 0!==t)for(var i in t)if(t.hasOwnProperty(i)&&-1===e.indexOf(i)){var o=t[i]
this.add(i,o)}}},{key:"clear",value:function(){this.groups={},this.groupsArray=[]}},{key:"get",value:function(t){var e=this.groups[t]
if(void 0===e)if(this.options.useDefaultGroups===!1&&this.groupsArray.length>0){var i=this.groupIndex%this.groupsArray.length
this.groupIndex++,e={},e.color=this.groups[this.groupsArray[i]],this.groups[t]=e}else{var i=this.defaultIndex%this.defaultGroups.length
this.defaultIndex++,e={},e.color=this.defaultGroups[i],this.groups[t]=e}return e}},{key:"add",value:function(t,e){return this.groups[t]=e,this.groupsArray.push(t),e}}]),t}()
e["default"]=r,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=i(62),a=o(r),h=i(63),d=o(h),l=i(1),u=i(8),c=i(10),p=function(){function t(e,i,o,s){var r=this
n(this,t),this.body=e,this.images=i,this.groups=o,this.layoutEngine=s,this.body.functions.createNode=this.create.bind(this),this.nodesListeners={add:function(t,e){r.add(e.items)},update:function(t,e){r.update(e.items,e.data)},remove:function(t,e){r.remove(e.items)}},this.options={},this.defaultOptions={borderWidth:1,borderWidthSelected:2,brokenImage:void 0,color:{border:"#2B7CE9",background:"#97C2FC",highlight:{border:"#2B7CE9",background:"#D2E5FF"},hover:{border:"#2B7CE9",background:"#D2E5FF"}},fixed:{x:!1,y:!1},font:{color:"#343434",size:14,face:"arial",background:"none",strokeWidth:0,strokeColor:"#ffffff",align:"horizontal"},group:void 0,hidden:!1,icon:{face:"FontAwesome",code:void 0,size:50,color:"#2B7CE9"},image:void 0,label:void 0,labelHighlightBold:!0,level:void 0,mass:1,physics:!0,scaling:{min:10,max:30,label:{enabled:!1,min:14,max:30,maxVisible:30,drawThreshold:5},customScalingFunction:function(t,e,i,o){if(e===t)return.5
var n=1/(e-t)
return Math.max(0,(o-t)*n)}},shadow:{enabled:!1,size:10,x:5,y:5},shape:"ellipse",shapeProperties:{borderDashes:!1,borderRadius:6,useImageSize:!1},size:25,title:void 0,value:void 0,x:void 0,y:void 0},l.extend(this.options,this.defaultOptions),this.bindEventListeners()}return s(t,[{key:"bindEventListeners",value:function(){var t=this
this.body.emitter.on("refreshNodes",this.refresh.bind(this)),this.body.emitter.on("refresh",this.refresh.bind(this)),this.body.emitter.on("destroy",function(){delete t.body.functions.createNode,delete t.nodesListeners.add,delete t.nodesListeners.update,delete t.nodesListeners.remove,delete t.nodesListeners})}},{key:"setOptions",value:function(t){if(void 0!==t){if(a["default"].parseOptions(this.options,t),void 0!==t.shape)for(var e in this.body.nodes)this.body.nodes.hasOwnProperty(e)&&this.body.nodes[e].updateShape()
if(void 0!==t.font){d["default"].parseOptions(this.options.font,t)
for(var e in this.body.nodes)this.body.nodes.hasOwnProperty(e)&&(this.body.nodes[e].updateLabelModule(),this.body.nodes[e]._reset())}if(void 0!==t.size)for(var e in this.body.nodes)this.body.nodes.hasOwnProperty(e)&&this.body.nodes[e]._reset()
void 0===t.hidden&&void 0===t.physics||this.body.emitter.emit("_dataChanged")}}},{key:"setData",value:function(t){var e=this,i=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],o=this.body.data.nodes
if(t instanceof u||t instanceof c)this.body.data.nodes=t
else if(Array.isArray(t))this.body.data.nodes=new u,this.body.data.nodes.add(t)
else{if(t)throw new TypeError("Array or DataSet expected")
this.body.data.nodes=new u}o&&l.forEach(this.nodesListeners,function(t,e){o.off(e,t)}),this.body.nodes={},this.body.data.nodes&&!function(){var t=e
l.forEach(e.nodesListeners,function(e,i){t.body.data.nodes.on(i,e)})
var i=e.body.data.nodes.getIds()
e.add(i,!0)}(),i===!1&&this.body.emitter.emit("_dataChanged")}},{key:"add",value:function(t){for(var e=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],i=void 0,o=[],n=0;n<t.length;n++){i=t[n]
var s=this.body.data.nodes.get(i),r=this.create(s)
o.push(r),this.body.nodes[i]=r}this.layoutEngine.positionInitially(o),e===!1&&this.body.emitter.emit("_dataChanged")}},{key:"update",value:function(t,e){for(var i=this.body.nodes,o=!1,n=0;n<t.length;n++){var s=t[n],r=i[s],a=e[n]
void 0!==r?o=r.setOptions(a):(o=!0,r=this.create(a),i[s]=r)}o===!0?this.body.emitter.emit("_dataChanged"):this.body.emitter.emit("_dataUpdated")}},{key:"remove",value:function(t){for(var e=this.body.nodes,i=0;i<t.length;i++){var o=t[i]
delete e[o]}this.body.emitter.emit("_dataChanged")}},{key:"create",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?a["default"]:arguments[1]
return new e(t,this.body,this.images,this.groups,this.options)}},{key:"refresh",value:function(){var t=arguments.length<=0||void 0===arguments[0]?!1:arguments[0],e=this.body.nodes
for(var i in e){var o=void 0
e.hasOwnProperty(i)&&(o=e[i])
var n=this.body.data.nodes._data[i]
void 0!==o&&void 0!==n&&(t===!0&&o.setOptions({x:null,y:null}),o.setOptions({fixed:!1}),o.setOptions(n))}}},{key:"getPositions",value:function(t){var e={}
if(void 0!==t){if(Array.isArray(t)===!0){for(var i=0;i<t.length;i++)if(void 0!==this.body.nodes[t[i]]){var o=this.body.nodes[t[i]]
e[t[i]]={x:Math.round(o.x),y:Math.round(o.y)}}}else if(void 0!==this.body.nodes[t]){var o=this.body.nodes[t]
e[t]={x:Math.round(o.x),y:Math.round(o.y)}}}else for(var i=0;i<this.body.nodeIndices.length;i++){var o=this.body.nodes[this.body.nodeIndices[i]]
e[this.body.nodeIndices[i]]={x:Math.round(o.x),y:Math.round(o.y)}}return e}},{key:"storePositions",value:function(){var t=[],e=this.body.data.nodes.getDataSet()
for(var i in e._data)if(e._data.hasOwnProperty(i)){var o=this.body.nodes[i]
e._data[i].x==Math.round(o.x)&&e._data[i].y==Math.round(o.y)||t.push({id:i,x:Math.round(o.x),y:Math.round(o.y)})}e.update(t)}},{key:"getBoundingBox",value:function(t){return void 0!==this.body.nodes[t]?this.body.nodes[t].shape.boundingBox:void 0}},{key:"getConnectedNodes",value:function(t){var e=[]
if(void 0!==this.body.nodes[t])for(var i=this.body.nodes[t],o={},n=0;n<i.edges.length;n++){var s=i.edges[n]
s.toId==t?void 0===o[s.fromId]&&(e.push(s.fromId),o[s.fromId]=!0):s.fromId==t&&void 0===o[s.toId]&&(e.push(s.toId),o[s.toId]=!0)}return e}},{key:"getConnectedEdges",value:function(t){var e=[]
if(void 0!==this.body.nodes[t])for(var i=this.body.nodes[t],o=0;o<i.edges.length;o++)e.push(i.edges[o].id)
else console.log("NodeId provided for getConnectedEdges does not exist. Provided: ",t)
return e}},{key:"moveNode",value:function(t,e,i){var o=this
void 0!==this.body.nodes[t]?(this.body.nodes[t].x=Number(e),this.body.nodes[t].y=Number(i),setTimeout(function(){o.body.emitter.emit("startSimulation")},0)):console.log("Node id supplied to moveNode does not exist. Provided: ",t)}}]),t}()
e["default"]=p,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=i(63),a=o(r),h=i(64),d=o(h),l=i(66),u=o(l),c=i(68),p=o(c),f=i(69),m=o(f),g=i(70),v=o(g),y=i(72),b=o(y),_=i(73),w=o(_),x=i(74),k=o(x),T=i(75),D=o(T),O=i(76),C=o(O),M=i(77),S=o(M),E=i(78),P=o(E),N=i(79),I=o(N),A=i(80),j=o(A),L=i(47),z=(o(L),i(1)),R=function(){function t(e,i,o,s,r){n(this,t),this.options=z.bridgeObject(r),this.globalOptions=r,this.body=i,this.edges=[],this.id=void 0,this.imagelist=o,this.grouplist=s,this.x=void 0,this.y=void 0,this.baseSize=this.options.size,this.baseFontSize=this.options.font.size,this.predefinedPosition=!1,this.selected=!1,this.hover=!1,this.labelModule=new a["default"](this.body,this.options),this.setOptions(e)}return s(t,[{key:"attachEdge",value:function(t){-1===this.edges.indexOf(t)&&this.edges.push(t)}},{key:"detachEdge",value:function(t){var e=this.edges.indexOf(t);-1!=e&&this.edges.splice(e,1)}},{key:"setOptions",value:function(e){var i=this.options.shape
if(e){if(void 0!==e.id&&(this.id=e.id),void 0===this.id)throw"Node must have an id"
if(void 0!==e.x&&(null===e.x?(this.x=void 0,this.predefinedPosition=!1):(this.x=parseInt(e.x),this.predefinedPosition=!0)),void 0!==e.y&&(null===e.y?(this.y=void 0,this.predefinedPosition=!1):(this.y=parseInt(e.y),this.predefinedPosition=!0)),void 0!==e.size&&(this.baseSize=e.size),void 0!==e.value&&(e.value=parseFloat(e.value)),"number"==typeof e.group||"string"==typeof e.group&&""!=e.group){var o=this.grouplist.get(e.group)
z.deepExtend(this.options,o),this.options.color=z.parseColor(this.options.color)}if(t.parseOptions(this.options,e,!0,this.globalOptions),void 0!==this.options.image){if(!this.imagelist)throw"No imagelist provided"
this.imageObj=this.imagelist.load(this.options.image,this.options.brokenImage,this.id)}return this.updateLabelModule(),this.updateShape(i),void 0!==e.hidden||void 0!==e.physics}}},{key:"updateLabelModule",value:function(){void 0!==this.options.label&&null!==this.options.label||(this.options.label=""),this.labelModule.setOptions(this.options,!0),void 0!==this.labelModule.baseSize&&(this.baseFontSize=this.labelModule.baseSize)}},{key:"updateShape",value:function(t){if(t===this.options.shape&&this.shape)this.shape.setOptions(this.options,this.imageObj)
else switch(this.options.shape){case"box":this.shape=new d["default"](this.options,this.body,this.labelModule)
break
case"circle":this.shape=new u["default"](this.options,this.body,this.labelModule)
break
case"circularImage":this.shape=new p["default"](this.options,this.body,this.labelModule,this.imageObj)
break
case"database":this.shape=new m["default"](this.options,this.body,this.labelModule)
break
case"diamond":this.shape=new v["default"](this.options,this.body,this.labelModule)
break
case"dot":this.shape=new b["default"](this.options,this.body,this.labelModule)
break
case"ellipse":this.shape=new w["default"](this.options,this.body,this.labelModule)
break
case"icon":this.shape=new k["default"](this.options,this.body,this.labelModule)
break
case"image":this.shape=new D["default"](this.options,this.body,this.labelModule,this.imageObj)
break
case"square":this.shape=new C["default"](this.options,this.body,this.labelModule)
break
case"star":this.shape=new S["default"](this.options,this.body,this.labelModule)
break
case"text":this.shape=new P["default"](this.options,this.body,this.labelModule)
break
case"triangle":this.shape=new I["default"](this.options,this.body,this.labelModule)
break
case"triangleDown":this.shape=new j["default"](this.options,this.body,this.labelModule)
break
default:this.shape=new w["default"](this.options,this.body,this.labelModule)}this._reset()}},{key:"select",value:function(){this.selected=!0,this._reset()}},{key:"unselect",value:function(){this.selected=!1,this._reset()}},{key:"_reset",value:function(){this.shape.width=void 0,this.shape.height=void 0}},{key:"getTitle",value:function(){return this.options.title}},{key:"distanceToBorder",value:function(t,e){return this.shape.distanceToBorder(t,e)}},{key:"isFixed",value:function(){return this.options.fixed.x&&this.options.fixed.y}},{key:"isSelected",value:function(){return this.selected}},{key:"getValue",value:function(){return this.options.value}},{key:"setValueRange",value:function(t,e,i){if(void 0!==this.options.value){var o=this.options.scaling.customScalingFunction(t,e,i,this.options.value),n=this.options.scaling.max-this.options.scaling.min
if(this.options.scaling.label.enabled===!0){var s=this.options.scaling.label.max-this.options.scaling.label.min
this.options.font.size=this.options.scaling.label.min+o*s}this.options.size=this.options.scaling.min+o*n}else this.options.size=this.baseSize,this.options.font.size=this.baseFontSize}},{key:"draw",value:function(t){this.shape.draw(t,this.x,this.y,this.selected,this.hover)}},{key:"updateBoundingBox",value:function(t){this.shape.updateBoundingBox(this.x,this.y,t)}},{key:"resize",value:function(t){this.shape.resize(t,this.selected)}},{key:"isOverlappingWith",value:function(t){return this.shape.left<t.right&&this.shape.left+this.shape.width>t.left&&this.shape.top<t.bottom&&this.shape.top+this.shape.height>t.top}},{key:"isBoundingBoxOverlappingWith",value:function(t){return this.shape.boundingBox.left<t.right&&this.shape.boundingBox.right>t.left&&this.shape.boundingBox.top<t.bottom&&this.shape.boundingBox.bottom>t.top}}],[{key:"parseOptions",value:function(t,e){var i=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],o=arguments.length<=3||void 0===arguments[3]?{}:arguments[3],n=["color","font","fixed","shadow"]
if(z.selectiveNotDeepExtend(n,t,e,i),z.mergeOptions(t,e,"shadow",i,o),void 0!==e.color&&null!==e.color){var s=z.parseColor(e.color)
z.fillIfDefined(t.color,s)}else i===!0&&null===e.color&&(t.color=Object.create(o.color))
void 0!==e.fixed&&null!==e.fixed&&("boolean"==typeof e.fixed?(t.fixed.x=e.fixed,t.fixed.y=e.fixed):(void 0!==e.fixed.x&&"boolean"==typeof e.fixed.x&&(t.fixed.x=e.fixed.x),void 0!==e.fixed.y&&"boolean"==typeof e.fixed.y&&(t.fixed.y=e.fixed.y))),void 0!==e.font&&null!==e.font?a["default"].parseOptions(t.font,e):i===!0&&null===e.font&&(t.font=Object.create(o.font)),void 0!==e.scaling&&z.mergeOptions(t.scaling,e.scaling,"label",i,o.scaling)}}]),t}()
e["default"]=R,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var n=function(){function t(t,e){var i=[],o=!0,n=!1,s=void 0
try{for(var r,a=t[Symbol.iterator]();!(o=(r=a.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(h){n=!0,s=h}finally{try{!o&&a["return"]&&a["return"]()}finally{if(n)throw s}}return i}return function(e,i){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return t(e,i)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=i(1),a=function(){function t(e,i){o(this,t),this.body=e,this.pointToSelf=!1,this.baseSize=void 0,this.fontOptions={},this.setOptions(i),this.size={top:0,left:0,width:0,height:0,yLine:0}}return s(t,[{key:"setOptions",value:function(e){var i=arguments.length<=1||void 0===arguments[1]?!1:arguments[1]
this.nodeOptions=e,this.fontOptions=r.deepExtend({},e.font,!0),void 0!==e.label&&(this.labelDirty=!0),void 0!==e.font&&(t.parseOptions(this.fontOptions,e,i),"string"==typeof e.font?this.baseSize=this.fontOptions.size:"object"==typeof e.font&&void 0!==e.font.size&&(this.baseSize=e.font.size))}},{key:"draw",value:function(t,e,i,o){var n=arguments.length<=4||void 0===arguments[4]?"middle":arguments[4]
if(void 0!==this.nodeOptions.label){var s=this.fontOptions.size*this.body.view.scale
this.nodeOptions.label&&s<this.nodeOptions.scaling.label.drawThreshold-1||(this.calculateLabelSize(t,o,e,i,n),this._drawBackground(t),this._drawText(t,o,e,i,n))}}},{key:"_drawBackground",value:function(t){if(void 0!==this.fontOptions.background&&"none"!==this.fontOptions.background){t.fillStyle=this.fontOptions.background
var e=2
switch(this.fontOptions.align){case"middle":t.fillRect(.5*-this.size.width,.5*-this.size.height,this.size.width,this.size.height)
break
case"top":t.fillRect(.5*-this.size.width,-(this.size.height+e),this.size.width,this.size.height)
break
case"bottom":t.fillRect(.5*-this.size.width,e,this.size.width,this.size.height)
break
default:t.fillRect(this.size.left,this.size.top-.5*e,this.size.width,this.size.height)}}}},{key:"_drawText",value:function(t,e,i,o){var s=arguments.length<=4||void 0===arguments[4]?"middle":arguments[4],r=this.fontOptions.size,a=r*this.body.view.scale
a>=this.nodeOptions.scaling.label.maxVisible&&(r=Number(this.nodeOptions.scaling.label.maxVisible)/this.body.view.scale)
var h=this.size.yLine,d=this._getColor(a),l=n(d,2),u=l[0],c=l[1],p=this._setAlignment(t,i,h,s),f=n(p,2)
i=f[0],h=f[1],t.font=(e&&this.nodeOptions.labelHighlightBold?"bold ":"")+r+"px "+this.fontOptions.face,t.fillStyle=u,t.textAlign="center",this.fontOptions.strokeWidth>0&&(t.lineWidth=this.fontOptions.strokeWidth,t.strokeStyle=c,t.lineJoin="round")
for(var m=0;m<this.lineCount;m++)this.fontOptions.strokeWidth>0&&t.strokeText(this.lines[m],i,h),t.fillText(this.lines[m],i,h),h+=r}},{key:"_setAlignment",value:function(t,e,i,o){if("horizontal"!==this.fontOptions.align&&this.pointToSelf===!1){e=0,i=0
var n=2
"top"===this.fontOptions.align?(t.textBaseline="alphabetic",i-=2*n):"bottom"===this.fontOptions.align?(t.textBaseline="hanging",i+=2*n):t.textBaseline="middle"}else t.textBaseline=o
return[e,i]}},{key:"_getColor",value:function(t){var e=this.fontOptions.color||"#000000",i=this.fontOptions.strokeColor||"#ffffff"
if(t<=this.nodeOptions.scaling.label.drawThreshold){var o=Math.max(0,Math.min(1,1-(this.nodeOptions.scaling.label.drawThreshold-t)))
e=r.overrideOpacity(e,o),i=r.overrideOpacity(i,o)}return[e,i]}},{key:"getTextSize",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],i={width:this._processLabel(t,e),height:this.fontOptions.size*this.lineCount,lineCount:this.lineCount}
return i}},{key:"calculateLabelSize",value:function(t,e){var i=arguments.length<=2||void 0===arguments[2]?0:arguments[2],o=arguments.length<=3||void 0===arguments[3]?0:arguments[3],n=arguments.length<=4||void 0===arguments[4]?"middle":arguments[4]
this.labelDirty===!0&&(this.size.width=this._processLabel(t,e)),this.size.height=this.fontOptions.size*this.lineCount,this.size.left=i-.5*this.size.width,this.size.top=o-.5*this.size.height,this.size.yLine=o+.5*(1-this.lineCount)*this.fontOptions.size,"hanging"===n&&(this.size.top+=.5*this.fontOptions.size,this.size.top+=4,this.size.yLine+=4),this.labelDirty=!1}},{key:"_processLabel",value:function(t,e){var i=0,o=[""],n=0
if(void 0!==this.nodeOptions.label){o=String(this.nodeOptions.label).split("\n"),n=o.length,t.font=(e&&this.nodeOptions.labelHighlightBold?"bold ":"")+this.fontOptions.size+"px "+this.fontOptions.face,i=t.measureText(o[0]).width
for(var s=1;n>s;s++){var r=t.measureText(o[s]).width
i=r>i?r:i}}return this.lines=o,this.lineCount=n,i}}],[{key:"parseOptions",value:function(t,e){var i=arguments.length<=2||void 0===arguments[2]?!1:arguments[2]
if("string"==typeof e.font){var o=e.font.split(" ")
t.size=o[0].replace("px",""),t.face=o[1],t.color=o[2]}else"object"==typeof e.font&&r.fillIfDefined(t,e.font,i)
t.size=Number(t.size)}}]),t}()
e["default"]=a,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(65),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),r(e,[{key:"resize",value:function(t,e){if(void 0===this.width){var i=5,o=this.labelModule.getTextSize(t,e)
this.width=o.width+2*i,this.height=o.height+2*i,this.radius=.5*this.width}}},{key:"draw",value:function(t,e,i,o,n){this.resize(t,o),this.left=e-this.width/2,this.top=i-this.height/2
var s=this.options.borderWidth,r=this.options.borderWidthSelected||2*this.options.borderWidth
t.strokeStyle=o?this.options.color.highlight.border:n?this.options.color.hover.border:this.options.color.border,t.lineWidth=o?r:s,t.lineWidth/=this.body.view.scale,t.lineWidth=Math.min(this.width,t.lineWidth),t.fillStyle=o?this.options.color.highlight.background:n?this.options.color.hover.background:this.options.color.background
var a=this.options.shapeProperties.borderRadius
t.roundRect(this.left,this.top,this.width,this.height,a),this.enableShadow(t),t.fill(),this.disableShadow(t),t.save(),this.enableBorderDashes(t),t.stroke(),this.disableBorderDashes(t),t.restore(),this.updateBoundingBox(e,i),this.labelModule.draw(t,e,i,o)}},{key:"updateBoundingBox",value:function(t,e){this.left=t-.5*this.width,this.top=e-.5*this.height,this.boundingBox.left=this.left,this.boundingBox.top=this.top,this.boundingBox.bottom=this.top+this.height,this.boundingBox.right=this.left+this.width}},{key:"distanceToBorder",value:function(t,e){this.resize(t)
var i=this.width/2,o=this.height/2,n=Math.sin(e)*i,s=Math.cos(e)*o
return i*o/Math.sqrt(n*n+s*s)}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e){"use strict"
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),n=function(){function t(e,o,n){i(this,t),this.body=o,this.labelModule=n,this.setOptions(e),this.top=void 0,this.left=void 0,this.height=void 0,this.width=void 0,this.radius=void 0,this.boundingBox={top:0,left:0,right:0,bottom:0}}return o(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"_distanceToBorder",value:function(t,e){var i=1
return this.resize(t),Math.min(Math.abs(this.width/2/Math.cos(e)),Math.abs(this.height/2/Math.sin(e)))+i}},{key:"enableShadow",value:function(t){this.options.shadow.enabled===!0&&(t.shadowColor="rgba(0,0,0,0.5)",t.shadowBlur=this.options.shadow.size,t.shadowOffsetX=this.options.shadow.x,t.shadowOffsetY=this.options.shadow.y)}},{key:"disableShadow",value:function(t){this.options.shadow.enabled===!0&&(t.shadowColor="rgba(0,0,0,0)",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0)}},{key:"enableBorderDashes",value:function(t){if(this.options.shapeProperties.borderDashes!==!1)if(void 0!==t.setLineDash){var e=this.options.shapeProperties.borderDashes
e===!0&&(e=[5,15]),t.setLineDash(e)}else console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."),this.options.shapeProperties.borderDashes=!1}},{key:"disableBorderDashes",value:function(t){this.options.shapeProperties.borderDashes!==!1&&(void 0!==t.setLineDash?t.setLineDash([0]):(console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."),this.options.shapeProperties.borderDashes=!1))}}]),t}()
e["default"]=n,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(67),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),r(e,[{key:"resize",value:function(t,e){if(void 0===this.width){var i=5,o=this.labelModule.getTextSize(t,e),n=Math.max(o.width,o.height)+2*i
this.options.size=n/2,this.width=n,this.height=n,this.radius=.5*this.width}}},{key:"draw",value:function(t,e,i,o,n){this.resize(t,o),this.left=e-this.width/2,this.top=i-this.height/2,this._drawRawCircle(t,e,i,o,n,this.options.size),this.boundingBox.top=i-this.options.size,this.boundingBox.left=e-this.options.size,this.boundingBox.right=e+this.options.size,this.boundingBox.bottom=i+this.options.size,this.updateBoundingBox(e,i),this.labelModule.draw(t,e,i,o)}},{key:"updateBoundingBox",value:function(t,e){this.boundingBox.top=e-this.options.size,this.boundingBox.left=t-this.options.size,this.boundingBox.right=t+this.options.size,this.boundingBox.bottom=e+this.options.size}},{key:"distanceToBorder",value:function(t,e){this.resize(t)
var i=this.width/2,o=this.height/2,n=Math.sin(e)*i,s=Math.cos(e)*o
return i*o/Math.sqrt(n*n+s*s)}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(65),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o),this.labelOffset=0,this.imageLoaded=!1}return s(e,t),r(e,[{key:"setOptions",value:function(t,e){this.options=t,e&&(this.imageObj=e)}},{key:"_resizeImage",value:function(){var t=!1
if(this.imageObj.width&&this.imageObj.height?this.imageLoaded===!1&&(this.imageLoaded=!0,t=!0):this.imageLoaded=!1,!this.width||!this.height||t===!0){var e,i,o
this.imageObj.width&&this.imageObj.height&&(e=0,i=0),this.options.shapeProperties.useImageSize===!1?this.imageObj.width>this.imageObj.height?(o=this.imageObj.width/this.imageObj.height,e=2*this.options.size*o||this.imageObj.width,i=2*this.options.size||this.imageObj.height):(o=this.imageObj.width&&this.imageObj.height?this.imageObj.height/this.imageObj.width:1,e=2*this.options.size,i=2*this.options.size*o):(e=this.imageObj.width,i=this.imageObj.height),this.width=e,this.height=i,this.radius=.5*this.width}}},{key:"_drawRawCircle",value:function(t,e,i,o,n,s){var r=this.options.borderWidth,a=this.options.borderWidthSelected||2*this.options.borderWidth
t.strokeStyle=o?this.options.color.highlight.border:n?this.options.color.hover.border:this.options.color.border,t.lineWidth=o?a:r,t.lineWidth*=this.networkScaleInv,t.lineWidth=Math.min(this.width,t.lineWidth),t.fillStyle=o?this.options.color.highlight.background:n?this.options.color.hover.background:this.options.color.background,t.circle(e,i,s),this.enableShadow(t),t.fill(),this.disableShadow(t),t.save(),this.enableBorderDashes(t),t.stroke(),this.disableBorderDashes(t),t.restore()}},{key:"_drawImageAtPosition",value:function(t){0!=this.imageObj.width&&(t.globalAlpha=1,this.enableShadow(t),t.drawImage(this.imageObj,this.left,this.top,this.width,this.height),this.disableShadow(t))}},{key:"_drawImageLabel",value:function(t,e,i,o){var n,s=0
if(void 0!==this.height){s=.5*this.height
var r=this.labelModule.getTextSize(t)
r.lineCount>=1&&(s+=r.height/2)}n=i+s,this.options.label&&(this.labelOffset=s),this.labelModule.draw(t,e,n,o,"hanging")}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(67),d=o(h),l=function(t){function e(t,i,o,s){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o),this.imageObj=s,this._swapToImageResizeWhenImageLoaded=!0}return s(e,t),r(e,[{key:"resize",value:function(){if(void 0===this.imageObj.src||void 0===this.imageObj.width||void 0===this.imageObj.height){if(!this.width){var t=2*this.options.size
this.width=t,this.height=t,this._swapToImageResizeWhenImageLoaded=!0,this.radius=.5*this.width}}else this._swapToImageResizeWhenImageLoaded&&(this.width=void 0,this.height=void 0,this._swapToImageResizeWhenImageLoaded=!1),this._resizeImage()}},{key:"draw",value:function(t,e,i,o,n){this.resize(),this.left=e-this.width/2,this.top=i-this.height/2
var s=Math.min(.5*this.height,.5*this.width)
this._drawRawCircle(t,e,i,o,n,s),t.save(),t.clip(),this._drawImageAtPosition(t),t.restore(),this._drawImageLabel(t,e,i,o),this.updateBoundingBox(e,i)}},{key:"updateBoundingBox",value:function(t,e){this.boundingBox.top=e-this.options.size,this.boundingBox.left=t-this.options.size,this.boundingBox.right=t+this.options.size,this.boundingBox.bottom=e+this.options.size,this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset)}},{key:"distanceToBorder",value:function(t,e){return this.resize(t),this._distanceToBorder(t,e)}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(65),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),r(e,[{key:"resize",value:function(t,e){if(void 0===this.width){var i=5,o=this.labelModule.getTextSize(t,e),n=o.width+2*i
this.width=n,this.height=n,this.radius=.5*this.width}}},{key:"draw",value:function(t,e,i,o,n){this.resize(t,o),this.left=e-this.width/2,this.top=i-this.height/2
var s=this.options.borderWidth,r=this.options.borderWidthSelected||2*this.options.borderWidth
t.strokeStyle=o?this.options.color.highlight.border:n?this.options.color.hover.border:this.options.color.border,t.lineWidth=this.selected?r:s,t.lineWidth*=this.networkScaleInv,t.lineWidth=Math.min(this.width,t.lineWidth),t.fillStyle=o?this.options.color.highlight.background:n?this.options.color.hover.background:this.options.color.background,t.database(e-this.width/2,i-.5*this.height,this.width,this.height),this.enableShadow(t),t.fill(),this.disableShadow(t),t.save(),this.enableBorderDashes(t),t.stroke(),this.disableBorderDashes(t),t.restore(),this.updateBoundingBox(e,i,t,o),this.labelModule.draw(t,e,i,o)}},{key:"updateBoundingBox",value:function(t,e,i,o){this.resize(i,o),this.left=t-.5*this.width,this.top=e-.5*this.height,this.boundingBox.left=this.left,this.boundingBox.top=this.top,this.boundingBox.bottom=this.top+this.height,this.boundingBox.right=this.left+this.width}},{key:"distanceToBorder",value:function(t,e){this.resize(t)
var i=this.width/2,o=this.height/2,n=Math.sin(e)*i,s=Math.cos(e)*o
return i*o/Math.sqrt(n*n+s*s)}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(71),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),r(e,[{key:"resize",value:function(t){this._resizeShape()}},{key:"draw",value:function(t,e,i,o,n){this._drawShape(t,"diamond",4,e,i,o,n)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(65),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),r(e,[{key:"_resizeShape",value:function(){if(void 0===this.width){var t=2*this.options.size
this.width=t,this.height=t,this.radius=.5*this.width}}},{key:"_drawShape",value:function(t,e,i,o,n,s,r){this._resizeShape(),this.left=o-this.width/2,this.top=n-this.height/2
var a=this.options.borderWidth,h=this.options.borderWidthSelected||2*this.options.borderWidth
if(t.strokeStyle=s?this.options.color.highlight.border:r?this.options.color.hover.border:this.options.color.border,t.lineWidth=s?h:a,t.lineWidth/=this.body.view.scale,t.lineWidth=Math.min(this.width,t.lineWidth),t.fillStyle=s?this.options.color.highlight.background:r?this.options.color.hover.background:this.options.color.background,t[e](o,n,this.options.size),this.enableShadow(t),t.fill(),this.disableShadow(t),t.save(),this.enableBorderDashes(t),t.stroke(),this.disableBorderDashes(t),t.restore(),void 0!==this.options.label){var d=n+.5*this.height+3
this.labelModule.draw(t,o,d,s,"hanging")}this.updateBoundingBox(o,n)}},{key:"updateBoundingBox",value:function(t,e){this.boundingBox.top=e-this.options.size,this.boundingBox.left=t-this.options.size,this.boundingBox.right=t+this.options.size,this.boundingBox.bottom=e+this.options.size,void 0!==this.options.label&&this.labelModule.size.width>0&&(this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height+3))}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(71),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),r(e,[{key:"resize",value:function(t){this._resizeShape()}},{key:"draw",value:function(t,e,i,o,n){this._drawShape(t,"circle",2,e,i,o,n)}},{key:"distanceToBorder",value:function(t,e){return this.resize(t),this.options.size+this.options.borderWidth}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(65),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),r(e,[{key:"resize",value:function(t,e){if(void 0===this.width){var i=this.labelModule.getTextSize(t,e)
this.width=1.5*i.width,this.height=2*i.height,this.width<this.height&&(this.width=this.height),this.radius=.5*this.width}}},{key:"draw",value:function(t,e,i,o,n){this.resize(t,o),this.left=e-.5*this.width,this.top=i-.5*this.height
var s=this.options.borderWidth,r=this.options.borderWidthSelected||2*this.options.borderWidth
t.strokeStyle=o?this.options.color.highlight.border:n?this.options.color.hover.border:this.options.color.border,t.lineWidth=o?r:s,t.lineWidth/=this.body.view.scale,t.lineWidth=Math.min(this.width,t.lineWidth),t.fillStyle=o?this.options.color.highlight.background:n?this.options.color.hover.background:this.options.color.background,t.ellipse(this.left,this.top,this.width,this.height),this.enableShadow(t),t.fill(),this.disableShadow(t),t.save(),this.enableBorderDashes(t),t.stroke(),this.disableBorderDashes(t),t.restore(),this.updateBoundingBox(e,i,t,o),this.labelModule.draw(t,e,i,o)}},{key:"updateBoundingBox",value:function(t,e,i,o){this.resize(i,o),this.left=t-.5*this.width,this.top=e-.5*this.height,this.boundingBox.left=this.left,this.boundingBox.top=this.top,this.boundingBox.bottom=this.top+this.height,this.boundingBox.right=this.left+this.width}},{key:"distanceToBorder",value:function(t,e){this.resize(t)
var i=.5*this.width,o=.5*this.height,n=Math.sin(e)*i,s=Math.cos(e)*o
return i*o/Math.sqrt(n*n+s*s)}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(65),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),r(e,[{key:"resize",value:function(t){if(void 0===this.width){var e=5,i={width:Number(this.options.icon.size),height:Number(this.options.icon.size)}
this.width=i.width+2*e,this.height=i.height+2*e,this.radius=.5*this.width}}},{key:"draw",value:function(t,e,i,o,n){if(this.resize(t),this.options.icon.size=this.options.icon.size||50,this.left=e-.5*this.width,this.top=i-.5*this.height,this._icon(t,e,i,o),void 0!==this.options.label){var s=5
this.labelModule.draw(t,e,i+.5*this.height+s,o)}this.updateBoundingBox(e,i)}},{key:"updateBoundingBox",value:function(t,e){if(this.boundingBox.top=e-.5*this.options.icon.size,this.boundingBox.left=t-.5*this.options.icon.size,this.boundingBox.right=t+.5*this.options.icon.size,this.boundingBox.bottom=e+.5*this.options.icon.size,void 0!==this.options.label&&this.labelModule.size.width>0){var i=5
this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height+i)}}},{key:"_icon",value:function(t,e,i,o){var n=Number(this.options.icon.size)
void 0!==this.options.icon.code?(t.font=(o?"bold ":"")+n+"px "+this.options.icon.face,t.fillStyle=this.options.icon.color||"black",t.textAlign="center",t.textBaseline="middle",this.enableShadow(t),t.fillText(this.options.icon.code,e,i),this.disableShadow(t)):console.error("When using the icon shape, you need to define the code in the icon options object. This can be done per node or globally.")}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(67),d=o(h),l=function(t){function e(t,i,o,s){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o),this.imageObj=s}return s(e,t),r(e,[{key:"resize",value:function(){this._resizeImage()}},{key:"draw",value:function(t,e,i,o,n){this.resize(),this.left=e-this.width/2,this.top=i-this.height/2,this._drawImageAtPosition(t),this._drawImageLabel(t,e,i,o||n),this.updateBoundingBox(e,i)}},{key:"updateBoundingBox",value:function(t,e){this.resize(),this.left=t-this.width/2,this.top=e-this.height/2,this.boundingBox.top=this.top,this.boundingBox.left=this.left,this.boundingBox.right=this.left+this.width,this.boundingBox.bottom=this.top+this.height,void 0!==this.options.label&&this.labelModule.size.width>0&&(this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset))}},{key:"distanceToBorder",value:function(t,e){this.resize(t)
var i=this.width/2,o=this.height/2,n=Math.sin(e)*i,s=Math.cos(e)*o
return i*o/Math.sqrt(n*n+s*s)}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(71),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),r(e,[{key:"resize",value:function(){this._resizeShape()}},{key:"draw",value:function(t,e,i,o,n){this._drawShape(t,"square",2,e,i,o,n)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(71),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),r(e,[{key:"resize",value:function(t){this._resizeShape()}},{key:"draw",value:function(t,e,i,o,n){this._drawShape(t,"star",4,e,i,o,n)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(65),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),r(e,[{key:"resize",value:function(t,e){if(void 0===this.width){var i=5,o=this.labelModule.getTextSize(t,e)
this.width=o.width+2*i,this.height=o.height+2*i,this.radius=.5*this.width}}},{key:"draw",value:function(t,e,i,o,n){this.resize(t,o||n),this.left=e-this.width/2,this.top=i-this.height/2,this.enableShadow(t),this.labelModule.draw(t,e,i,o||n),this.disableShadow(t),this.updateBoundingBox(e,i,t,o)}},{key:"updateBoundingBox",value:function(t,e,i,o){this.resize(i,o),this.left=t-this.width/2,this.top=e-this.height/2,this.boundingBox.top=this.top,this.boundingBox.left=this.left,this.boundingBox.right=this.left+this.width,this.boundingBox.bottom=this.top+this.height}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(71),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),r(e,[{key:"resize",value:function(t){this._resizeShape()}},{key:"draw",value:function(t,e,i,o,n){this._drawShape(t,"triangle",3,e,i,o,n)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(71),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),r(e,[{key:"resize",value:function(t){this._resizeShape()}},{key:"draw",value:function(t,e,i,o,n){this._drawShape(t,"triangleDown",3,e,i,o,n)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=i(82),a=o(r),h=i(63),d=o(h),l=i(1),u=i(8),c=i(10),p=function(){function t(e,i,o){var s=this
n(this,t),this.body=e,this.images=i,this.groups=o,this.body.functions.createEdge=this.create.bind(this),this.edgesListeners={add:function(t,e){s.add(e.items)},update:function(t,e){s.update(e.items)},remove:function(t,e){s.remove(e.items)}},this.options={},this.defaultOptions={arrows:{to:{enabled:!1,scaleFactor:1},middle:{enabled:!1,scaleFactor:1},from:{enabled:!1,scaleFactor:1}},color:{color:"#848484",highlight:"#848484",hover:"#848484",inherit:"from",opacity:1},dashes:!1,font:{color:"#343434",size:14,face:"arial",background:"none",strokeWidth:2,strokeColor:"#ffffff",align:"horizontal"},hidden:!1,hoverWidth:1.5,label:void 0,labelHighlightBold:!0,length:void 0,physics:!0,scaling:{min:1,max:15,label:{enabled:!0,min:14,max:30,maxVisible:30,drawThreshold:5},customScalingFunction:function(t,e,i,o){if(e===t)return.5
var n=1/(e-t)
return Math.max(0,(o-t)*n)}},selectionWidth:1.5,selfReferenceSize:20,shadow:{enabled:!1,size:10,x:5,y:5},smooth:{enabled:!0,type:"dynamic",forceDirection:"none",roundness:.5},title:void 0,width:1,value:void 0},l.extend(this.options,this.defaultOptions),this.bindEventListeners()}return s(t,[{key:"bindEventListeners",value:function(){var t=this
this.body.emitter.on("_forceDisableDynamicCurves",function(e){"dynamic"===e&&(e="continuous")
var i=!1
for(var o in t.body.edges)if(t.body.edges.hasOwnProperty(o)){var n=t.body.edges[o],s=t.body.data.edges._data[o]
if(void 0!==s){var r=s.smooth
void 0!==r&&r.enabled===!0&&"dynamic"===r.type&&(void 0===e?n.setOptions({smooth:!1}):n.setOptions({smooth:{type:e}}),i=!0)}}i===!0&&t.body.emitter.emit("_dataChanged")}),this.body.emitter.on("_dataUpdated",function(){t.reconnectEdges(),t.markAllEdgesAsDirty()}),this.body.emitter.on("refreshEdges",this.refresh.bind(this)),this.body.emitter.on("refresh",this.refresh.bind(this)),this.body.emitter.on("destroy",function(){delete t.body.functions.createEdge,delete t.edgesListeners.add,delete t.edgesListeners.update,delete t.edgesListeners.remove,delete t.edgesListeners})}},{key:"setOptions",value:function(t){if(void 0!==t){a["default"].parseOptions(this.options,t),void 0!==t.color&&this.markAllEdgesAsDirty()
var e=!1
if(void 0!==t.smooth)for(var i in this.body.edges)this.body.edges.hasOwnProperty(i)&&(e=this.body.edges[i].updateEdgeType()||e)
if(void 0!==t.font){d["default"].parseOptions(this.options.font,t)
for(var i in this.body.edges)this.body.edges.hasOwnProperty(i)&&this.body.edges[i].updateLabelModule()}void 0===t.hidden&&void 0===t.physics&&e!==!0||this.body.emitter.emit("_dataChanged")}}},{key:"setData",value:function(t){var e=this,i=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],o=this.body.data.edges
if(t instanceof u||t instanceof c)this.body.data.edges=t
else if(Array.isArray(t))this.body.data.edges=new u,this.body.data.edges.add(t)
else{if(t)throw new TypeError("Array or DataSet expected")
this.body.data.edges=new u}if(o&&l.forEach(this.edgesListeners,function(t,e){o.off(e,t)}),this.body.edges={},this.body.data.edges){l.forEach(this.edgesListeners,function(t,i){e.body.data.edges.on(i,t)})
var n=this.body.data.edges.getIds()
this.add(n,!0)}i===!1&&this.body.emitter.emit("_dataChanged")}},{key:"add",value:function(t){for(var e=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],i=this.body.edges,o=this.body.data.edges,n=0;n<t.length;n++){var s=t[n],r=i[s]
r&&r.disconnect()
var a=o.get(s,{showInternalIds:!0})
i[s]=this.create(a)}e===!1&&this.body.emitter.emit("_dataChanged")}},{key:"update",value:function(t){for(var e=this.body.edges,i=this.body.data.edges,o=!1,n=0;n<t.length;n++){var s=t[n],r=i.get(s),a=e[s]
void 0!==a?(a.disconnect(),o=a.setOptions(r)||o,a.connect()):(this.body.edges[s]=this.create(r),o=!0)}o===!0?this.body.emitter.emit("_dataChanged"):this.body.emitter.emit("_dataUpdated")}},{key:"remove",value:function(t){for(var e=this.body.edges,i=0;i<t.length;i++){var o=t[i],n=e[o]
void 0!==n&&(n.cleanup(),n.disconnect(),delete e[o])}this.body.emitter.emit("_dataChanged")}},{key:"refresh",value:function(){var t=this.body.edges
for(var e in t){var i=void 0
t.hasOwnProperty(e)&&(i=t[e])
var o=this.body.data.edges._data[e]
void 0!==i&&void 0!==o&&i.setOptions(o)}}},{key:"create",value:function(t){return new a["default"](t,this.body,this.options)}},{key:"markAllEdgesAsDirty",value:function(){for(var t in this.body.edges)this.body.edges[t].edgeType.colorDirty=!0}},{key:"reconnectEdges",value:function(){var t,e=this.body.nodes,i=this.body.edges
for(t in e)e.hasOwnProperty(t)&&(e[t].edges=[])
for(t in i)if(i.hasOwnProperty(t)){var o=i[t]
o.from=null,o.to=null,o.connect()}}},{key:"getConnectedNodes",value:function(t){var e=[]
if(void 0!==this.body.edges[t]){var i=this.body.edges[t]
i.fromId&&e.push(i.fromId),i.toId&&e.push(i.toId)}return e}}]),t}()
e["default"]=p,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=i(63),a=o(r),h=i(83),d=o(h),l=i(87),u=o(l),c=i(88),p=o(c),f=i(89),m=o(f),g=i(1),v=function(){function t(e,i,o){if(n(this,t),void 0===i)throw"No body provided"
this.options=g.bridgeObject(o),this.globalOptions=o,this.body=i,this.id=void 0,this.fromId=void 0,this.toId=void 0,this.selected=!1,this.hover=!1,this.labelDirty=!0,this.colorDirty=!0,this.baseWidth=this.options.width,this.baseFontSize=this.options.font.size,this.from=void 0,this.to=void 0,this.edgeType=void 0,this.connected=!1,this.labelModule=new a["default"](this.body,this.options),this.setOptions(e)}return s(t,[{key:"setOptions",value:function(e){if(e){this.colorDirty=!0,t.parseOptions(this.options,e,!0,this.globalOptions),void 0!==e.id&&(this.id=e.id),void 0!==e.from&&(this.fromId=e.from),void 0!==e.to&&(this.toId=e.to),void 0!==e.title&&(this.title=e.title),void 0!==e.value&&(e.value=parseFloat(e.value)),this.updateLabelModule()
var i=this.updateEdgeType()
return this._setInteractionWidths(),this.connect(),void 0===e.hidden&&void 0===e.physics||(i=!0),i}}},{key:"updateLabelModule",value:function(){this.labelModule.setOptions(this.options,!0),void 0!==this.labelModule.baseSize&&(this.baseFontSize=this.labelModule.baseSize)}},{key:"updateEdgeType",value:function(){var t=!1,e=!0,i=this.options.smooth
return void 0!==this.edgeType&&(this.edgeType instanceof u["default"]&&i.enabled===!0&&"dynamic"===i.type&&(e=!1),this.edgeType instanceof d["default"]&&i.enabled===!0&&"cubicBezier"===i.type&&(e=!1),this.edgeType instanceof p["default"]&&i.enabled===!0&&"dynamic"!==i.type&&"cubicBezier"!==i.type&&(e=!1),this.edgeType instanceof m["default"]&&i.enabled===!1&&(e=!1),e===!0&&(t=this.cleanup())),e===!0?this.options.smooth.enabled===!0?"dynamic"===this.options.smooth.type?(t=!0,this.edgeType=new u["default"](this.options,this.body,this.labelModule)):"cubicBezier"===this.options.smooth.type?this.edgeType=new d["default"](this.options,this.body,this.labelModule):this.edgeType=new p["default"](this.options,this.body,this.labelModule):this.edgeType=new m["default"](this.options,this.body,this.labelModule):this.edgeType.setOptions(this.options),t}},{key:"connect",value:function(){this.disconnect(),this.from=this.body.nodes[this.fromId]||void 0,this.to=this.body.nodes[this.toId]||void 0,this.connected=void 0!==this.from&&void 0!==this.to,this.connected===!0?(this.from.attachEdge(this),this.to.attachEdge(this)):(this.from&&this.from.detachEdge(this),this.to&&this.to.detachEdge(this)),this.edgeType.connect()}},{key:"disconnect",value:function(){this.from&&(this.from.detachEdge(this),this.from=void 0),this.to&&(this.to.detachEdge(this),this.to=void 0),this.connected=!1}},{key:"getTitle",value:function(){return this.title}},{key:"isSelected",value:function(){return this.selected}},{key:"getValue",value:function(){return this.options.value}},{key:"setValueRange",value:function(t,e,i){if(void 0!==this.options.value){var o=this.options.scaling.customScalingFunction(t,e,i,this.options.value),n=this.options.scaling.max-this.options.scaling.min
if(this.options.scaling.label.enabled===!0){var s=this.options.scaling.label.max-this.options.scaling.label.min
this.options.font.size=this.options.scaling.label.min+o*s}this.options.width=this.options.scaling.min+o*n}else this.options.width=this.baseWidth,this.options.font.size=this.baseFontSize
this._setInteractionWidths()}},{key:"_setInteractionWidths",value:function(){"function"==typeof this.options.hoverWidth?this.edgeType.hoverWidth=this.options.hoverWidth(this.options.width):this.edgeType.hoverWidth=this.options.hoverWidth+this.options.width,"function"==typeof this.options.selectionWidth?this.edgeType.selectionWidth=this.options.selectionWidth(this.options.width):this.edgeType.selectionWidth=this.options.selectionWidth+this.options.width}},{key:"draw",value:function(t){var e=this.edgeType.drawLine(t,this.selected,this.hover)
this.drawArrows(t,e),this.drawLabel(t,e)}},{key:"drawArrows",value:function(t,e){this.options.arrows.from.enabled===!0&&this.edgeType.drawArrowHead(t,"from",e,this.selected,this.hover),this.options.arrows.middle.enabled===!0&&this.edgeType.drawArrowHead(t,"middle",e,this.selected,this.hover),this.options.arrows.to.enabled===!0&&this.edgeType.drawArrowHead(t,"to",e,this.selected,this.hover)}},{key:"drawLabel",value:function(t,e){if(void 0!==this.options.label){var i=this.from,o=this.to,n=this.from.selected||this.to.selected||this.selected
if(i.id!=o.id){this.labelModule.pointToSelf=!1
var s=this.edgeType.getPoint(.5,e)
t.save(),"horizontal"!==this.options.font.align&&(this.labelModule.calculateLabelSize(t,n,s.x,s.y),t.translate(s.x,this.labelModule.size.yLine),this._rotateForLabelAlignment(t)),this.labelModule.draw(t,s.x,s.y,n),t.restore()}else{this.labelModule.pointToSelf=!0
var r,a,h=this.options.selfReferenceSize
i.shape.width>i.shape.height?(r=i.x+.5*i.shape.width,a=i.y-h):(r=i.x+h,a=i.y-.5*i.shape.height),s=this._pointOnCircle(r,a,h,.125),this.labelModule.draw(t,s.x,s.y,n)}}}},{key:"isOverlappingWith",value:function(t){if(this.connected){var e=10,i=this.from.x,o=this.from.y,n=this.to.x,s=this.to.y,r=t.left,a=t.top,h=this.edgeType.getDistanceToEdge(i,o,n,s,r,a)
return e>h}return!1}},{key:"_rotateForLabelAlignment",value:function(t){var e=this.from.y-this.to.y,i=this.from.x-this.to.x,o=Math.atan2(e,i);(-1>o&&0>i||o>0&&0>i)&&(o+=Math.PI),t.rotate(o)}},{key:"_pointOnCircle",value:function(t,e,i,o){var n=2*o*Math.PI
return{x:t+i*Math.cos(n),y:e-i*Math.sin(n)}}},{key:"select",value:function(){this.selected=!0}},{key:"unselect",value:function(){this.selected=!1}},{key:"cleanup",value:function(){return this.edgeType.cleanup()}}],[{key:"parseOptions",value:function(t,e){var i=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],o=arguments.length<=3||void 0===arguments[3]?{}:arguments[3],n=["id","from","hidden","hoverWidth","label","labelHighlightBold","length","line","opacity","physics","scaling","selectionWidth","selfReferenceSize","to","title","value","width"]
if(g.selectiveDeepExtend(n,t,e,i),g.mergeOptions(t,e,"smooth",i,o),g.mergeOptions(t,e,"shadow",i,o),void 0!==e.dashes&&null!==e.dashes?t.dashes=e.dashes:i===!0&&null===e.dashes&&(t.dashes=Object.create(o.dashes)),void 0!==e.scaling&&null!==e.scaling?(void 0!==e.scaling.min&&(t.scaling.min=e.scaling.min),void 0!==e.scaling.max&&(t.scaling.max=e.scaling.max),g.mergeOptions(t.scaling,e.scaling,"label",i,o.scaling)):i===!0&&null===e.scaling&&(t.scaling=Object.create(o.scaling)),void 0!==e.arrows&&null!==e.arrows)if("string"==typeof e.arrows){var s=e.arrows.toLowerCase();-1!=s.indexOf("to")&&(t.arrows.to.enabled=!0),-1!=s.indexOf("middle")&&(t.arrows.middle.enabled=!0),-1!=s.indexOf("from")&&(t.arrows.from.enabled=!0)}else{if("object"!=typeof e.arrows)throw new Error("The arrow newOptions can only be an object or a string. Refer to the documentation. You used:"+JSON.stringify(e.arrows))
g.mergeOptions(t.arrows,e.arrows,"to",i,o.arrows),g.mergeOptions(t.arrows,e.arrows,"middle",i,o.arrows),g.mergeOptions(t.arrows,e.arrows,"from",i,o.arrows)}else i===!0&&null===e.arrows&&(t.arrows=Object.create(o.arrows))
if(void 0!==e.color&&null!==e.color)if(g.isString(e.color))t.color.color=e.color,t.color.highlight=e.color,t.color.hover=e.color,t.color.inherit=!1
else{var r=!1
void 0!==e.color.color&&(t.color.color=e.color.color,r=!0),void 0!==e.color.highlight&&(t.color.highlight=e.color.highlight,r=!0),void 0!==e.color.hover&&(t.color.hover=e.color.hover,r=!0),void 0!==e.color.inherit&&(t.color.inherit=e.color.inherit),void 0!==e.color.opacity&&(t.color.opacity=Math.min(1,Math.max(0,e.color.opacity))),void 0===e.color.inherit&&r===!0&&(t.color.inherit=!1)}else i===!0&&null===e.color&&(t.color=Object.create(o.color))
void 0!==e.font&&null!==e.font?a["default"].parseOptions(t.font,e):i===!0&&null===e.font&&(t.font=Object.create(o.font))}}]),t}()
e["default"]=v,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){var i=[],o=!0,n=!1,s=void 0
try{for(var r,a=t[Symbol.iterator]();!(o=(r=a.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(h){n=!0,s=h}finally{try{!o&&a["return"]&&a["return"]()}finally{if(n)throw s}}return i}return function(e,i){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return t(e,i)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),h=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},d=i(84),l=o(d),u=function(t){function e(t,i,o){n(this,e),h(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),a(e,[{key:"_line",value:function(t){var e=this._getViaCoordinates(),i=r(e,2),o=i[0],n=i[1],s=[o,n]
return t.beginPath(),t.moveTo(this.from.x,this.from.y),void 0===o.x?(t.lineTo(this.to.x,this.to.y),s=void 0):t.bezierCurveTo(o.x,o.y,n.x,n.y,this.to.x,this.to.y),this.enableShadow(t),t.stroke(),this.disableShadow(t),s}},{key:"_getViaCoordinates",value:function(){var t=this.from.x-this.to.x,e=this.from.y-this.to.y,i=void 0,o=void 0,n=void 0,s=void 0,r=this.options.smooth.roundness
return(Math.abs(t)>Math.abs(e)||this.options.smooth.forceDirection===!0||"horizontal"===this.options.smooth.forceDirection)&&"vertical"!==this.options.smooth.forceDirection?(o=this.from.y,s=this.to.y,i=this.from.x-r*t,n=this.to.x+r*t):(o=this.from.y-r*e,s=this.to.y+r*e,i=this.from.x,n=this.to.x),[{x:i,y:o},{x:n,y:s}]}},{key:"_findBorderPosition",value:function(t,e){return this._findBorderPositionBezier(t,e)}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,s){var a=arguments.length<=6||void 0===arguments[6]?this._getViaCoordinates():arguments[6],h=r(a,2),d=h[0],l=h[1]
return this._getDistanceToBezierEdge(t,e,i,o,n,s,d,l)}},{key:"getPoint",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?this._getViaCoordinates():arguments[1],i=r(e,2),o=i[0],n=i[1],s=t,a=[]
a[0]=Math.pow(1-s,3),a[1]=3*s*Math.pow(1-s,2),a[2]=3*Math.pow(s,2)*(1-s),a[3]=Math.pow(s,3)
var h=a[0]*this.from.x+a[1]*o.x+a[2]*n.x+a[3]*this.to.x,d=a[0]*this.from.y+a[1]*o.y+a[2]*n.y+a[3]*this.to.y
return{x:h,y:d}}}]),e}(l["default"])
e["default"]=u,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(85),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),r(e,[{key:"_getDistanceToBezierEdge",value:function(t,e,i,o,n,s,r,a){var h=1e9,d=void 0,l=void 0,u=void 0,c=void 0,p=void 0,f=t,m=e,g=[0,0,0,0]
for(l=1;10>l;l++)u=.1*l,g[0]=Math.pow(1-u,3),g[1]=3*u*Math.pow(1-u,2),g[2]=3*Math.pow(u,2)*(1-u),g[3]=Math.pow(u,3),c=g[0]*t+g[1]*r.x+g[2]*a.x+g[3]*i,p=g[0]*e+g[1]*r.y+g[2]*a.y+g[3]*o,l>0&&(d=this._getDistanceToLine(f,m,c,p,n,s),h=h>d?d:h),f=c,m=p
return h}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(86),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),r(e,[{key:"_findBorderPositionBezier",value:function(t,e){var i,o,n,s,r,a=arguments.length<=2||void 0===arguments[2]?this._getViaCoordinates():arguments[2],h=10,d=0,l=0,u=1,c=.2,p=this.to,f=!1
for(t.id===this.from.id&&(p=this.from,f=!0);u>=l&&h>d;){var m=.5*(l+u)
if(i=this.getPoint(m,a),o=Math.atan2(p.y-i.y,p.x-i.x),n=p.distanceToBorder(e,o),s=Math.sqrt(Math.pow(i.x-p.x,2)+Math.pow(i.y-p.y,2)),r=n-s,Math.abs(r)<c)break
0>r?f===!1?l=m:u=m:f===!1?u=m:l=m,d++}return i.t=m,i}},{key:"_getDistanceToBezierEdge",value:function(t,e,i,o,n,s,r){var a=1e9,h=void 0,d=void 0,l=void 0,u=void 0,c=void 0,p=t,f=e
for(d=1;10>d;d++)l=.1*d,u=Math.pow(1-l,2)*t+2*l*(1-l)*r.x+Math.pow(l,2)*i,c=Math.pow(1-l,2)*e+2*l*(1-l)*r.y+Math.pow(l,2)*o,d>0&&(h=this._getDistanceToLine(p,f,u,c,n,s),a=a>h?h:a),p=u,f=c
return a}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var n=function(){function t(t,e){var i=[],o=!0,n=!1,s=void 0
try{for(var r,a=t[Symbol.iterator]();!(o=(r=a.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(h){n=!0,s=h}finally{try{!o&&a["return"]&&a["return"]()}finally{if(n)throw s}}return i}return function(e,i){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return t(e,i)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=i(1),a=function(){function t(e,i,n){o(this,t),this.body=i,this.labelModule=n,this.setOptions(e),this.colorDirty=!0,this.color={},this.selectionWidth=2,this.hoverWidth=1.5}return s(t,[{key:"connect",value:function(){this.from=this.body.nodes[this.options.from],this.to=this.body.nodes[this.options.to]}},{key:"cleanup",value:function(){return!1}},{key:"setOptions",value:function(t){this.options=t,this.from=this.body.nodes[this.options.from],this.to=this.body.nodes[this.options.to],this.id=this.options.id}},{key:"drawLine",value:function(t,e,i){t.strokeStyle=this.getColor(t,e,i),t.lineWidth=this.getLineWidth(e,i)
var o=void 0
return o=this.options.dashes!==!1?this._drawDashedLine(t):this._drawLine(t)}},{key:"_drawLine",value:function(t){var e=void 0
if(this.from!=this.to)e=this._line(t)
else{var i=this._getCircleData(t),o=n(i,3),s=o[0],r=o[1],a=o[2]
this._circle(t,s,r,a)}return e}},{key:"_drawDashedLine",value:function(t){var e=void 0
t.lineCap="round"
var i=[5,5]
if(Array.isArray(this.options.dashes)===!0&&(i=this.options.dashes),void 0!==t.setLineDash){if(t.save(),t.setLineDash(i),t.lineDashOffset=0,this.from!=this.to)e=this._line(t)
else{var o=this._getCircleData(t),s=n(o,3),r=s[0],a=s[1],h=s[2]
this._circle(t,r,a,h)}t.setLineDash([0]),t.lineDashOffset=0,t.restore()}else{if(this.from!=this.to)t.dashedLine(this.from.x,this.from.y,this.to.x,this.to.y,i)
else{var d=this._getCircleData(t),l=n(d,3),r=l[0],a=l[1],h=l[2]
this._circle(t,r,a,h)}this.enableShadow(t),t.stroke(),this.disableShadow(t)}return e}},{key:"findBorderPosition",value:function(t,e,i){return this.from!=this.to?this._findBorderPosition(t,e,i):this._findBorderPositionCircle(t,e,i)}},{key:"findBorderPositions",value:function(t){var e={},i={}
if(this.from!=this.to)e=this._findBorderPosition(this.from,t),i=this._findBorderPosition(this.to,t)
else{var o=this._getCircleData(t),s=n(o,3),r=s[0],a=s[1]
s[2]
e=this._findBorderPositionCircle(this.from,t,{x:r,y:a,low:.25,high:.6,direction:-1}),i=this._findBorderPositionCircle(this.from,t,{x:r,y:a,low:.6,high:.8,direction:1})}return{from:e,to:i}}},{key:"_getCircleData",value:function(t){var e=void 0,i=void 0,o=this.from,n=this.options.selfReferenceSize
return void 0!==t&&void 0===o.shape.width&&o.shape.resize(t),o.shape.width>o.shape.height?(e=o.x+.5*o.shape.width,i=o.y-n):(e=o.x+n,i=o.y-.5*o.shape.height),[e,i,n]}},{key:"_pointOnCircle",value:function(t,e,i,o){var n=2*o*Math.PI
return{x:t+i*Math.cos(n),y:e-i*Math.sin(n)}}},{key:"_findBorderPositionCircle",value:function(t,e,i){for(var o=i.x,n=i.y,s=i.low,r=i.high,a=i.direction,h=10,d=0,l=this.options.selfReferenceSize,u=void 0,c=void 0,p=void 0,f=void 0,m=void 0,g=.05,v=.5*(s+r);r>=s&&h>d&&(v=.5*(s+r),u=this._pointOnCircle(o,n,l,v),c=Math.atan2(t.y-u.y,t.x-u.x),p=t.distanceToBorder(e,c),f=Math.sqrt(Math.pow(u.x-t.x,2)+Math.pow(u.y-t.y,2)),m=p-f,!(Math.abs(m)<g));)m>0?a>0?s=v:r=v:a>0?r=v:s=v,d++
return u.t=v,u}},{key:"getLineWidth",value:function(t,e){return t===!0?Math.max(this.selectionWidth,.3/this.body.view.scale):e===!0?Math.max(this.hoverWidth,.3/this.body.view.scale):Math.max(this.options.width,.3/this.body.view.scale)}},{key:"getColor",value:function(t,e,i){var o=this.options.color
if(o.inherit!==!1){if("both"===o.inherit&&this.from.id!==this.to.id){var n=t.createLinearGradient(this.from.x,this.from.y,this.to.x,this.to.y),s=void 0,a=void 0
return s=this.from.options.color.highlight.border,a=this.to.options.color.highlight.border,this.from.selected===!1&&this.to.selected===!1?(s=r.overrideOpacity(this.from.options.color.border,this.options.color.opacity),a=r.overrideOpacity(this.to.options.color.border,this.options.color.opacity)):this.from.selected===!0&&this.to.selected===!1?a=this.to.options.color.border:this.from.selected===!1&&this.to.selected===!0&&(s=this.from.options.color.border),n.addColorStop(0,s),n.addColorStop(1,a),n}this.colorDirty===!0&&("to"===o.inherit?(this.color.highlight=this.to.options.color.highlight.border,this.color.hover=this.to.options.color.hover.border,this.color.color=r.overrideOpacity(this.to.options.color.border,o.opacity)):(this.color.highlight=this.from.options.color.highlight.border,this.color.hover=this.from.options.color.hover.border,this.color.color=r.overrideOpacity(this.from.options.color.border,o.opacity)))}else this.colorDirty===!0&&(this.color.highlight=o.highlight,this.color.hover=o.hover,this.color.color=r.overrideOpacity(o.color,o.opacity))
return this.colorDirty=!1,e===!0?this.color.highlight:i===!0?this.color.hover:this.color.color}},{key:"_circle",value:function(t,e,i,o){this.enableShadow(t),t.beginPath(),t.arc(e,i,o,0,2*Math.PI,!1),t.stroke(),this.disableShadow(t)}},{key:"getDistanceToEdge",value:function(t,e,i,o,s,r,a){var h=0
if(this.from!=this.to)h=this._getDistanceToEdge(t,e,i,o,s,r,a)
else{var d=this._getCircleData(),l=n(d,3),u=l[0],c=l[1],p=l[2],f=u-s,m=c-r
h=Math.abs(Math.sqrt(f*f+m*m)-p)}return this.labelModule.size.left<s&&this.labelModule.size.left+this.labelModule.size.width>s&&this.labelModule.size.top<r&&this.labelModule.size.top+this.labelModule.size.height>r?0:h}},{key:"_getDistanceToLine",value:function(t,e,i,o,n,s){var r=i-t,a=o-e,h=r*r+a*a,d=((n-t)*r+(s-e)*a)/h
d>1?d=1:0>d&&(d=0)
var l=t+d*r,u=e+d*a,c=l-n,p=u-s
return Math.sqrt(c*c+p*p)}},{key:"drawArrowHead",value:function(t,e,i,o,s){t.strokeStyle=this.getColor(t,o,s),t.fillStyle=t.strokeStyle,t.lineWidth=this.getLineWidth(o,s)
var r=void 0,a=void 0,h=void 0,d=void 0,l=void 0,u=void 0,c=void 0
if("from"===e?(d=this.from,l=this.to,u=.1,c=this.options.arrows.from.scaleFactor):"to"===e?(d=this.to,l=this.from,u=-.1,c=this.options.arrows.to.scaleFactor):(d=this.to,l=this.from,c=this.options.arrows.middle.scaleFactor),d!=l){if("middle"!==e)if(this.options.smooth.enabled===!0){h=this.findBorderPosition(d,t,{via:i})
var p=this.getPoint(Math.max(0,Math.min(1,h.t+u)),i)
r=Math.atan2(h.y-p.y,h.x-p.x)}else r=Math.atan2(d.y-l.y,d.x-l.x),h=this.findBorderPosition(d,t)
else r=Math.atan2(d.y-l.y,d.x-l.x),h=this.getPoint(.6,i)
a=(10+5*this.options.width)*c,t.arrow(h.x,h.y,r,a),this.enableShadow(t),t.fill(),this.disableShadow(t),t.stroke()}else{var f=void 0,m=void 0,g=this._getCircleData(t),v=n(g,3),y=v[0],b=v[1],_=v[2]
"from"===e?(m=this.findBorderPosition(this.from,t,{x:y,y:b,low:.25,high:.6,direction:-1}),f=-2*m.t*Math.PI+1.5*Math.PI+.1*Math.PI):"to"===e?(m=this.findBorderPosition(this.from,t,{x:y,y:b,low:.6,high:1,direction:1}),f=-2*m.t*Math.PI+1.5*Math.PI-1.1*Math.PI):(m=this._pointOnCircle(y,b,_,.175),f=3.9269908169872414)
var w=(10+5*this.options.width)*c
t.arrow(m.x,m.y,f,w),this.enableShadow(t),t.fill(),this.disableShadow(t),t.stroke()}}},{key:"enableShadow",value:function(t){this.options.shadow.enabled===!0&&(t.shadowColor="rgba(0,0,0,0.5)",t.shadowBlur=this.options.shadow.size,t.shadowOffsetX=this.options.shadow.x,t.shadowOffsetY=this.options.shadow.y)}},{key:"disableShadow",value:function(t){this.options.shadow.enabled===!0&&(t.shadowColor="rgba(0,0,0,0)",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0)}}]),t}()
e["default"]=a,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(85),d=o(h),l=function(t){function e(t,i,o){var s=this
n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o),this._boundFunction=function(){s.positionBezierNode()},this.body.emitter.on("_repositionBezierNodes",this._boundFunction)}return s(e,t),r(e,[{key:"setOptions",value:function(t){this.options=t,this.id=this.options.id,this.setupSupportNode(),this.options.physics!==t.physics&&(this.via.setOptions({physics:this.options.physics}),this.positionBezierNode()),this.connect()}},{key:"connect",value:function(){this.from=this.body.nodes[this.options.from],this.to=this.body.nodes[this.options.to],void 0===this.from||void 0===this.to||this.options.physics===!1?this.via.setOptions({physics:!1}):this.from.id===this.to.id?this.via.setOptions({physics:!1}):this.via.setOptions({physics:!0})}},{key:"cleanup",value:function(){return this.body.emitter.off("_repositionBezierNodes",this._boundFunction),void 0!==this.via?(delete this.body.nodes[this.via.id],this.via=void 0,!0):!1}},{key:"setupSupportNode",value:function(){if(void 0===this.via){var t="edgeId:"+this.id,e=this.body.functions.createNode({id:t,shape:"circle",physics:!0,hidden:!0})
this.body.nodes[t]=e,this.via=e,this.via.parentEdgeId=this.id,this.positionBezierNode()}}},{key:"positionBezierNode",value:function(){void 0!==this.via&&void 0!==this.from&&void 0!==this.to?(this.via.x=.5*(this.from.x+this.to.x),this.via.y=.5*(this.from.y+this.to.y)):void 0!==this.via&&(this.via.x=0,this.via.y=0)}},{key:"_line",value:function(t){return t.beginPath(),t.moveTo(this.from.x,this.from.y),t.quadraticCurveTo(this.via.x,this.via.y,this.to.x,this.to.y),this.enableShadow(t),t.stroke(),this.disableShadow(t),this.via}},{key:"getPoint",value:function(t){var e=t,i=Math.pow(1-e,2)*this.from.x+2*e*(1-e)*this.via.x+Math.pow(e,2)*this.to.x,o=Math.pow(1-e,2)*this.from.y+2*e*(1-e)*this.via.y+Math.pow(e,2)*this.to.y
return{x:i,y:o}}},{key:"_findBorderPosition",value:function(t,e){return this._findBorderPositionBezier(t,e,this.via)}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,s){return this._getDistanceToBezierEdge(t,e,i,o,n,s,this.via)}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(85),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),r(e,[{key:"_line",value:function(t){t.beginPath(),t.moveTo(this.from.x,this.from.y)
var e=this._getViaCoordinates(),i=e
return void 0===e.x?(t.lineTo(this.to.x,this.to.y),i=void 0):t.quadraticCurveTo(e.x,e.y,this.to.x,this.to.y),this.enableShadow(t),t.stroke(),this.disableShadow(t),i}},{key:"_getViaCoordinates",value:function(){var t=void 0,e=void 0,i=this.options.smooth.roundness,o=this.options.smooth.type,n=Math.abs(this.from.x-this.to.x),s=Math.abs(this.from.y-this.to.y)
if("discrete"===o||"diagonalCross"===o)Math.abs(this.from.x-this.to.x)<=Math.abs(this.from.y-this.to.y)?(this.from.y>=this.to.y?this.from.x<=this.to.x?(t=this.from.x+i*s,e=this.from.y-i*s):this.from.x>this.to.x&&(t=this.from.x-i*s,e=this.from.y-i*s):this.from.y<this.to.y&&(this.from.x<=this.to.x?(t=this.from.x+i*s,e=this.from.y+i*s):this.from.x>this.to.x&&(t=this.from.x-i*s,e=this.from.y+i*s)),"discrete"===o&&(t=i*s>n?this.from.x:t)):Math.abs(this.from.x-this.to.x)>Math.abs(this.from.y-this.to.y)&&(this.from.y>=this.to.y?this.from.x<=this.to.x?(t=this.from.x+i*n,e=this.from.y-i*n):this.from.x>this.to.x&&(t=this.from.x-i*n,e=this.from.y-i*n):this.from.y<this.to.y&&(this.from.x<=this.to.x?(t=this.from.x+i*n,e=this.from.y+i*n):this.from.x>this.to.x&&(t=this.from.x-i*n,e=this.from.y+i*n)),"discrete"===o&&(e=i*n>s?this.from.y:e))
else if("straightCross"===o)Math.abs(this.from.x-this.to.x)<=Math.abs(this.from.y-this.to.y)?(t=this.from.x,e=this.from.y<this.to.y?this.to.y-(1-i)*s:this.to.y+(1-i)*s):Math.abs(this.from.x-this.to.x)>Math.abs(this.from.y-this.to.y)&&(t=this.from.x<this.to.x?this.to.x-(1-i)*n:this.to.x+(1-i)*n,e=this.from.y)
else if("horizontal"===o)t=this.from.x<this.to.x?this.to.x-(1-i)*n:this.to.x+(1-i)*n,e=this.from.y
else if("vertical"===o)t=this.from.x,e=this.from.y<this.to.y?this.to.y-(1-i)*s:this.to.y+(1-i)*s
else if("curvedCW"===o){n=this.to.x-this.from.x,s=this.from.y-this.to.y
var r=Math.sqrt(n*n+s*s),a=Math.PI,h=Math.atan2(s,n),d=(h+(.5*i+.5)*a)%(2*a)
t=this.from.x+(.5*i+.5)*r*Math.sin(d),e=this.from.y+(.5*i+.5)*r*Math.cos(d)}else if("curvedCCW"===o){n=this.to.x-this.from.x,s=this.from.y-this.to.y
var r=Math.sqrt(n*n+s*s),a=Math.PI,h=Math.atan2(s,n),d=(h+(.5*-i+.5)*a)%(2*a)
t=this.from.x+(.5*i+.5)*r*Math.sin(d),e=this.from.y+(.5*i+.5)*r*Math.cos(d)}else Math.abs(this.from.x-this.to.x)<=Math.abs(this.from.y-this.to.y)?this.from.y>=this.to.y?this.from.x<=this.to.x?(t=this.from.x+i*s,e=this.from.y-i*s,t=this.to.x<t?this.to.x:t):this.from.x>this.to.x&&(t=this.from.x-i*s,e=this.from.y-i*s,t=this.to.x>t?this.to.x:t):this.from.y<this.to.y&&(this.from.x<=this.to.x?(t=this.from.x+i*s,e=this.from.y+i*s,t=this.to.x<t?this.to.x:t):this.from.x>this.to.x&&(t=this.from.x-i*s,e=this.from.y+i*s,t=this.to.x>t?this.to.x:t)):Math.abs(this.from.x-this.to.x)>Math.abs(this.from.y-this.to.y)&&(this.from.y>=this.to.y?this.from.x<=this.to.x?(t=this.from.x+i*n,e=this.from.y-i*n,e=this.to.y>e?this.to.y:e):this.from.x>this.to.x&&(t=this.from.x-i*n,e=this.from.y-i*n,e=this.to.y>e?this.to.y:e):this.from.y<this.to.y&&(this.from.x<=this.to.x?(t=this.from.x+i*n,e=this.from.y+i*n,e=this.to.y<e?this.to.y:e):this.from.x>this.to.x&&(t=this.from.x-i*n,e=this.from.y+i*n,e=this.to.y<e?this.to.y:e)))
return{x:t,y:e}}},{key:"_findBorderPosition",value:function(t,e){var i=arguments.length<=2||void 0===arguments[2]?{}:arguments[2]
return this._findBorderPositionBezier(t,e,i.via)}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,s){var r=arguments.length<=6||void 0===arguments[6]?this._getViaCoordinates():arguments[6]
return this._getDistanceToBezierEdge(t,e,i,o,n,s,r)}},{key:"getPoint",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?this._getViaCoordinates():arguments[1],i=t,o=Math.pow(1-i,2)*this.from.x+2*i*(1-i)*e.x+Math.pow(i,2)*this.to.x,n=Math.pow(1-i,2)*this.from.y+2*i*(1-i)*e.y+Math.pow(i,2)*this.to.y
return{x:o,y:n}}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(86),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),r(e,[{key:"_line",value:function(t){t.beginPath(),t.moveTo(this.from.x,this.from.y),t.lineTo(this.to.x,this.to.y),this.enableShadow(t),t.stroke(),this.disableShadow(t)}},{key:"getPoint",value:function(t){return{x:(1-t)*this.from.x+t*this.to.x,y:(1-t)*this.from.y+t*this.to.y}}},{key:"_findBorderPosition",value:function(t,e){var i=this.to,o=this.from
t.id===this.from.id&&(i=this.from,o=this.to)
var n=Math.atan2(i.y-o.y,i.x-o.x),s=i.x-o.x,r=i.y-o.y,a=Math.sqrt(s*s+r*r),h=t.distanceToBorder(e,n),d=(a-h)/a,l={}
return l.x=(1-d)*o.x+d*i.x,l.y=(1-d)*o.y+d*i.y,l}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,s){return this._getDistanceToLine(t,e,i,o,n,s)}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=i(91),a=o(r),h=i(92),d=o(h),l=i(93),u=o(l),c=i(94),p=o(c),f=i(95),m=o(f),g=i(96),v=o(g),y=i(97),b=o(y),_=i(98),w=o(_),x=i(1),k=function(){function t(e){n(this,t),this.body=e,this.physicsBody={physicsNodeIndices:[],physicsEdgeIndices:[],forces:{},velocities:{}},this.physicsEnabled=!0,this.simulationInterval=1e3/60,this.requiresTimeout=!0,this.previousStates={},this.referenceState={},this.freezeCache={},this.renderTimer=void 0,this.adaptiveTimestep=!1,this.adaptiveTimestepEnabled=!1,this.adaptiveCounter=0,this.adaptiveInterval=3,this.stabilized=!1,this.startedStabilization=!1,this.stabilizationIterations=0,this.ready=!1,this.options={},this.defaultOptions={enabled:!0,barnesHut:{theta:.5,gravitationalConstant:-2e3,centralGravity:.3,springLength:95,springConstant:.04,damping:.09,avoidOverlap:0},forceAtlas2Based:{theta:.5,gravitationalConstant:-50,centralGravity:.01,springConstant:.08,springLength:100,damping:.4,avoidOverlap:0},repulsion:{centralGravity:.2,springLength:200,springConstant:.05,nodeDistance:100,damping:.09,avoidOverlap:0},hierarchicalRepulsion:{centralGravity:0,springLength:100,springConstant:.01,nodeDistance:120,damping:.09},maxVelocity:50,minVelocity:.75,solver:"barnesHut",stabilization:{enabled:!0,iterations:1e3,updateInterval:50,onlyDynamicEdges:!1,fit:!0},timestep:.5,adaptiveTimestep:!0},x.extend(this.options,this.defaultOptions),this.timestep=.5,this.layoutFailed=!1,this.bindEventListeners()}return s(t,[{key:"bindEventListeners",value:function(){var t=this
this.body.emitter.on("initPhysics",function(){t.initPhysics()}),this.body.emitter.on("_layoutFailed",function(){t.layoutFailed=!0}),this.body.emitter.on("resetPhysics",function(){t.stopSimulation(),t.ready=!1}),this.body.emitter.on("disablePhysics",function(){t.physicsEnabled=!1,t.stopSimulation()}),this.body.emitter.on("restorePhysics",function(){t.setOptions(t.options),t.ready===!0&&t.startSimulation()}),this.body.emitter.on("startSimulation",function(){t.ready===!0&&t.startSimulation()}),this.body.emitter.on("stopSimulation",function(){t.stopSimulation()}),this.body.emitter.on("destroy",function(){t.stopSimulation(!1),t.body.emitter.off()})}},{key:"setOptions",value:function(t){void 0!==t&&(t===!1?(this.options.enabled=!1,this.physicsEnabled=!1,this.stopSimulation()):(this.physicsEnabled=!0,x.selectiveNotDeepExtend(["stabilization"],this.options,t),x.mergeOptions(this.options,t,"stabilization"),void 0===t.enabled&&(this.options.enabled=!0),this.options.enabled===!1&&(this.physicsEnabled=!1,this.stopSimulation()),this.timestep=this.options.timestep)),this.init()}},{key:"init",value:function(){var t
"forceAtlas2Based"===this.options.solver?(t=this.options.forceAtlas2Based,this.nodesSolver=new b["default"](this.body,this.physicsBody,t),this.edgesSolver=new p["default"](this.body,this.physicsBody,t),this.gravitySolver=new w["default"](this.body,this.physicsBody,t)):"repulsion"===this.options.solver?(t=this.options.repulsion,this.nodesSolver=new d["default"](this.body,this.physicsBody,t),this.edgesSolver=new p["default"](this.body,this.physicsBody,t),this.gravitySolver=new v["default"](this.body,this.physicsBody,t)):"hierarchicalRepulsion"===this.options.solver?(t=this.options.hierarchicalRepulsion,this.nodesSolver=new u["default"](this.body,this.physicsBody,t),this.edgesSolver=new m["default"](this.body,this.physicsBody,t),this.gravitySolver=new v["default"](this.body,this.physicsBody,t)):(t=this.options.barnesHut,this.nodesSolver=new a["default"](this.body,this.physicsBody,t),this.edgesSolver=new p["default"](this.body,this.physicsBody,t),this.gravitySolver=new v["default"](this.body,this.physicsBody,t)),this.modelOptions=t}},{key:"initPhysics",value:function(){this.physicsEnabled===!0&&this.options.enabled===!0?this.options.stabilization.enabled===!0?this.stabilize():(this.stabilized=!1,this.ready=!0,this.body.emitter.emit("fit",{},this.layoutFailed),this.startSimulation()):(this.ready=!0,this.body.emitter.emit("fit"))}},{key:"startSimulation",value:function(){this.physicsEnabled===!0&&this.options.enabled===!0?(this.stabilized=!1,this.adaptiveTimestep=!1,this.body.emitter.emit("_resizeNodes"),void 0===this.viewFunction&&(this.viewFunction=this.simulationStep.bind(this),this.body.emitter.on("initRedraw",this.viewFunction),this.body.emitter.emit("_startRendering"))):this.body.emitter.emit("_redraw")}},{key:"stopSimulation",value:function(){var t=arguments.length<=0||void 0===arguments[0]?!0:arguments[0]
this.stabilized=!0,t===!0&&this._emitStabilized(),void 0!==this.viewFunction&&(this.body.emitter.off("initRedraw",this.viewFunction),this.viewFunction=void 0,t===!0&&this.body.emitter.emit("_stopRendering"))}},{key:"simulationStep",value:function(){var t=Date.now()
this.physicsTick()
var e=Date.now()-t;(e<.4*this.simulationInterval||this.runDoubleSpeed===!0)&&this.stabilized===!1&&(this.physicsTick(),this.runDoubleSpeed=!0),this.stabilized===!0&&this.stopSimulation()}},{key:"_emitStabilized",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?this.stabilizationIterations:arguments[0];(this.stabilizationIterations>1||this.startedStabilization===!0)&&setTimeout(function(){t.body.emitter.emit("stabilized",{iterations:e}),t.startedStabilization=!1,t.stabilizationIterations=0},0)}},{key:"physicsTick",value:function(){if(this.startedStabilization===!1&&(this.body.emitter.emit("startStabilizing"),this.startedStabilization=!0),this.stabilized===!1){if(this.adaptiveTimestep===!0&&this.adaptiveTimestepEnabled===!0){var t=1.2
this.adaptiveCounter%this.adaptiveInterval===0?(this.timestep=2*this.timestep,this.calculateForces(),this.moveNodes(),this.revert(),this.timestep=.5*this.timestep,this.calculateForces(),this.moveNodes(),this.calculateForces(),this.moveNodes(),this._evaluateStepQuality()===!0?this.timestep=t*this.timestep:this.timestep/t<this.options.timestep?this.timestep=this.options.timestep:(this.adaptiveCounter=-1,this.timestep=Math.max(this.options.timestep,this.timestep/t))):(this.calculateForces(),this.moveNodes()),this.adaptiveCounter+=1}else this.timestep=this.options.timestep,this.calculateForces(),this.moveNodes()
this.stabilized===!0&&this.revert(),this.stabilizationIterations++}}},{key:"updatePhysicsData",value:function(){this.physicsBody.forces={},this.physicsBody.physicsNodeIndices=[],this.physicsBody.physicsEdgeIndices=[]
var t=this.body.nodes,e=this.body.edges
for(var i in t)t.hasOwnProperty(i)&&t[i].options.physics===!0&&this.physicsBody.physicsNodeIndices.push(i)
for(var o in e)e.hasOwnProperty(o)&&e[o].options.physics===!0&&this.physicsBody.physicsEdgeIndices.push(o)
for(var n=0;n<this.physicsBody.physicsNodeIndices.length;n++){var i=this.physicsBody.physicsNodeIndices[n]
this.physicsBody.forces[i]={x:0,y:0},void 0===this.physicsBody.velocities[i]&&(this.physicsBody.velocities[i]={x:0,y:0})}for(var i in this.physicsBody.velocities)void 0===t[i]&&delete this.physicsBody.velocities[i]}},{key:"revert",value:function(){var t=Object.keys(this.previousStates),e=this.body.nodes,i=this.physicsBody.velocities
this.referenceState={}
for(var o=0;o<t.length;o++){var n=t[o]
void 0!==e[n]?e[n].options.physics===!0&&(this.referenceState[n]={positions:{x:e[n].x,y:e[n].y}},i[n].x=this.previousStates[n].vx,i[n].y=this.previousStates[n].vy,e[n].x=this.previousStates[n].x,e[n].y=this.previousStates[n].y):delete this.previousStates[n]}}},{key:"_evaluateStepQuality",value:function(){var t=void 0,e=void 0,i=void 0,o=this.body.nodes,n=this.referenceState,s=.3
for(var r in this.referenceState)if(this.referenceState.hasOwnProperty(r)&&void 0!==o[r]&&(t=o[r].x-n[r].positions.x,e=o[r].y-n[r].positions.y,i=Math.sqrt(Math.pow(t,2)+Math.pow(e,2)),i>s))return!1
return!0}},{key:"moveNodes",value:function(){for(var t=this.physicsBody.physicsNodeIndices,e=this.options.maxVelocity?this.options.maxVelocity:1e9,i=0,o=0,n=5,s=0;s<t.length;s++){var r=t[s],a=this._performStep(r,e)
i=Math.max(i,a),o+=a}this.adaptiveTimestepEnabled=o/t.length<n,this.stabilized=i<this.options.minVelocity}},{key:"_performStep",value:function(t,e){var i=this.body.nodes[t],o=this.timestep,n=this.physicsBody.forces,s=this.physicsBody.velocities
if(this.previousStates[t]={x:i.x,y:i.y,vx:s[t].x,vy:s[t].y},i.options.fixed.x===!1){var r=this.modelOptions.damping*s[t].x,a=(n[t].x-r)/i.options.mass
s[t].x+=a*o,s[t].x=Math.abs(s[t].x)>e?s[t].x>0?e:-e:s[t].x,i.x+=s[t].x*o}else n[t].x=0,s[t].x=0
if(i.options.fixed.y===!1){var h=this.modelOptions.damping*s[t].y,d=(n[t].y-h)/i.options.mass
s[t].y+=d*o,s[t].y=Math.abs(s[t].y)>e?s[t].y>0?e:-e:s[t].y,i.y+=s[t].y*o}else n[t].y=0,s[t].y=0
var l=Math.sqrt(Math.pow(s[t].x,2)+Math.pow(s[t].y,2))
return l}},{key:"calculateForces",value:function(){this.gravitySolver.solve(),this.nodesSolver.solve(),this.edgesSolver.solve()}},{key:"_freezeNodes",value:function(){var t=this.body.nodes
for(var e in t)t.hasOwnProperty(e)&&t[e].x&&t[e].y&&(this.freezeCache[e]={x:t[e].options.fixed.x,y:t[e].options.fixed.y},t[e].options.fixed.x=!0,t[e].options.fixed.y=!0)}},{key:"_restoreFrozenNodes",value:function(){var t=this.body.nodes
for(var e in t)t.hasOwnProperty(e)&&void 0!==this.freezeCache[e]&&(t[e].options.fixed.x=this.freezeCache[e].x,t[e].options.fixed.y=this.freezeCache[e].y)
this.freezeCache={}}},{key:"stabilize",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?this.options.stabilization.iterations:arguments[0]
return"number"!=typeof e&&(console.log("The stabilize method needs a numeric amount of iterations. Switching to default: ",this.options.stabilization.iterations),e=this.options.stabilization.iterations),0===this.physicsBody.physicsNodeIndices.length?void(this.ready=!0):(this.adaptiveTimestep=this.options.adaptiveTimestep,this.body.emitter.emit("_resizeNodes"),this.stopSimulation(),this.stabilized=!1,this.body.emitter.emit("_blockRedraw"),this.targetIterations=e,this.options.stabilization.onlyDynamicEdges===!0&&this._freezeNodes(),this.stabilizationIterations=0,void setTimeout(function(){return t._stabilizationBatch()},0))}},{key:"_stabilizationBatch",value:function(){this.startedStabilization===!1&&(this.body.emitter.emit("startStabilizing"),this.startedStabilization=!0)
for(var t=0;this.stabilized===!1&&t<this.options.stabilization.updateInterval&&this.stabilizationIterations<this.targetIterations;)this.physicsTick(),t++
this.stabilized===!1&&this.stabilizationIterations<this.targetIterations?(this.body.emitter.emit("stabilizationProgress",{iterations:this.stabilizationIterations,total:this.targetIterations}),setTimeout(this._stabilizationBatch.bind(this),0)):this._finalizeStabilization()}},{key:"_finalizeStabilization",value:function(){this.body.emitter.emit("_allowRedraw"),this.options.stabilization.fit===!0&&this.body.emitter.emit("fit"),this.options.stabilization.onlyDynamicEdges===!0&&this._restoreFrozenNodes(),this.body.emitter.emit("stabilizationIterationsDone"),this.body.emitter.emit("_requestRedraw"),this.stabilized===!0?this._emitStabilized():this.startSimulation(),this.ready=!0}}]),t}()
e["default"]=k,t.exports=e["default"]},function(t,e){"use strict"
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),n=function(){function t(e,o,n){i(this,t),this.body=e,this.physicsBody=o,this.barnesHutTree,this.setOptions(n),this.randomSeed=5}return o(t,[{key:"setOptions",value:function(t){this.options=t,this.thetaInversed=1/this.options.theta,this.overlapAvoidanceFactor=1-Math.max(0,Math.min(1,this.options.avoidOverlap))}},{key:"seededRandom",value:function(){var t=1e4*Math.sin(this.randomSeed++)
return t-Math.floor(t)}},{key:"solve",value:function(){if(0!==this.options.gravitationalConstant&&this.physicsBody.physicsNodeIndices.length>0){var t=void 0,e=this.body.nodes,i=this.physicsBody.physicsNodeIndices,o=i.length,n=this._formBarnesHutTree(e,i)
this.barnesHutTree=n
for(var s=0;o>s;s++)t=e[i[s]],t.options.mass>0&&(this._getForceContribution(n.root.children.NW,t),this._getForceContribution(n.root.children.NE,t),this._getForceContribution(n.root.children.SW,t),this._getForceContribution(n.root.children.SE,t))}}},{key:"_getForceContribution",value:function(t,e){if(t.childrenCount>0){var i=void 0,o=void 0,n=void 0
i=t.centerOfMass.x-e.x,o=t.centerOfMass.y-e.y,n=Math.sqrt(i*i+o*o),n*t.calcSize>this.thetaInversed?this._calculateForces(n,i,o,e,t):4===t.childrenCount?(this._getForceContribution(t.children.NW,e),this._getForceContribution(t.children.NE,e),this._getForceContribution(t.children.SW,e),this._getForceContribution(t.children.SE,e)):t.children.data.id!=e.id&&this._calculateForces(n,i,o,e,t)}}},{key:"_calculateForces",value:function(t,e,i,o,n){0===t&&(t=.1,e=t),this.overlapAvoidanceFactor<1&&(t=Math.max(.1+this.overlapAvoidanceFactor*o.shape.radius,t-o.shape.radius))
var s=this.options.gravitationalConstant*n.mass*o.options.mass/Math.pow(t,3),r=e*s,a=i*s
this.physicsBody.forces[o.id].x+=r,this.physicsBody.forces[o.id].y+=a}},{key:"_formBarnesHutTree",value:function(t,e){for(var i=void 0,o=e.length,n=t[e[0]].x,s=t[e[0]].y,r=t[e[0]].x,a=t[e[0]].y,h=1;o>h;h++){var d=t[e[h]].x,l=t[e[h]].y
t[e[h]].options.mass>0&&(n>d&&(n=d),d>r&&(r=d),s>l&&(s=l),l>a&&(a=l))}var u=Math.abs(r-n)-Math.abs(a-s)
u>0?(s-=.5*u,a+=.5*u):(n+=.5*u,r-=.5*u)
var c=1e-5,p=Math.max(c,Math.abs(r-n)),f=.5*p,m=.5*(n+r),g=.5*(s+a),v={root:{centerOfMass:{x:0,y:0},mass:0,range:{minX:m-f,maxX:m+f,minY:g-f,maxY:g+f},size:p,calcSize:1/p,children:{data:null},maxWidth:0,level:0,childrenCount:4}}
this._splitBranch(v.root)
for(var h=0;o>h;h++)i=t[e[h]],i.options.mass>0&&this._placeInTree(v.root,i)
return v}},{key:"_updateBranchMass",value:function(t,e){var i=t.mass+e.options.mass,o=1/i
t.centerOfMass.x=t.centerOfMass.x*t.mass+e.x*e.options.mass,t.centerOfMass.x*=o,t.centerOfMass.y=t.centerOfMass.y*t.mass+e.y*e.options.mass,t.centerOfMass.y*=o,t.mass=i
var n=Math.max(Math.max(e.height,e.radius),e.width)
t.maxWidth=t.maxWidth<n?n:t.maxWidth}},{key:"_placeInTree",value:function(t,e,i){1==i&&void 0!==i||this._updateBranchMass(t,e),t.children.NW.range.maxX>e.x?t.children.NW.range.maxY>e.y?this._placeInRegion(t,e,"NW"):this._placeInRegion(t,e,"SW"):t.children.NW.range.maxY>e.y?this._placeInRegion(t,e,"NE"):this._placeInRegion(t,e,"SE")}},{key:"_placeInRegion",value:function(t,e,i){switch(t.children[i].childrenCount){case 0:t.children[i].children.data=e,t.children[i].childrenCount=1,this._updateBranchMass(t.children[i],e)
break
case 1:t.children[i].children.data.x===e.x&&t.children[i].children.data.y===e.y?(e.x+=this.seededRandom(),e.y+=this.seededRandom()):(this._splitBranch(t.children[i]),this._placeInTree(t.children[i],e))
break
case 4:this._placeInTree(t.children[i],e)}}},{key:"_splitBranch",value:function(t){var e=null
1===t.childrenCount&&(e=t.children.data,t.mass=0,t.centerOfMass.x=0,t.centerOfMass.y=0),t.childrenCount=4,t.children.data=null,this._insertRegion(t,"NW"),this._insertRegion(t,"NE"),this._insertRegion(t,"SW"),this._insertRegion(t,"SE"),null!=e&&this._placeInTree(t,e)}},{key:"_insertRegion",value:function(t,e){var i=void 0,o=void 0,n=void 0,s=void 0,r=.5*t.size
switch(e){case"NW":i=t.range.minX,o=t.range.minX+r,n=t.range.minY,s=t.range.minY+r
break
case"NE":i=t.range.minX+r,o=t.range.maxX,n=t.range.minY,s=t.range.minY+r
break
case"SW":i=t.range.minX,o=t.range.minX+r,n=t.range.minY+r,s=t.range.maxY
break
case"SE":i=t.range.minX+r,o=t.range.maxX,n=t.range.minY+r,s=t.range.maxY}t.children[e]={centerOfMass:{x:0,y:0},mass:0,range:{minX:i,maxX:o,minY:n,maxY:s},size:.5*t.size,calcSize:2*t.calcSize,children:{data:null},maxWidth:0,level:t.level+1,childrenCount:0}}},{key:"_debug",value:function(t,e){void 0!==this.barnesHutTree&&(t.lineWidth=1,this._drawBranch(this.barnesHutTree.root,t,e))}},{key:"_drawBranch",value:function(t,e,i){void 0===i&&(i="#FF0000"),4===t.childrenCount&&(this._drawBranch(t.children.NW,e),this._drawBranch(t.children.NE,e),this._drawBranch(t.children.SE,e),this._drawBranch(t.children.SW,e)),e.strokeStyle=i,e.beginPath(),e.moveTo(t.range.minX,t.range.minY),e.lineTo(t.range.maxX,t.range.minY),e.stroke(),e.beginPath(),e.moveTo(t.range.maxX,t.range.minY),e.lineTo(t.range.maxX,t.range.maxY),e.stroke(),e.beginPath(),e.moveTo(t.range.maxX,t.range.maxY),e.lineTo(t.range.minX,t.range.maxY),e.stroke(),e.beginPath(),e.moveTo(t.range.minX,t.range.maxY),e.lineTo(t.range.minX,t.range.minY),e.stroke()}}]),t}()
e["default"]=n,t.exports=e["default"]},function(t,e){"use strict"
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),n=function(){function t(e,o,n){i(this,t),this.body=e,this.physicsBody=o,this.setOptions(n)}return o(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t,e,i,o,n,s,r,a,h=this.body.nodes,d=this.physicsBody.physicsNodeIndices,l=this.physicsBody.forces,u=this.options.nodeDistance,c=-2/3/u,p=4/3,f=0;f<d.length-1;f++){r=h[d[f]]
for(var m=f+1;m<d.length;m++)a=h[d[m]],t=a.x-r.x,e=a.y-r.y,i=Math.sqrt(t*t+e*e),0===i&&(i=.1*Math.random(),t=i),2*u>i&&(s=.5*u>i?1:c*i+p,s/=i,o=t*s,n=e*s,l[r.id].x-=o,l[r.id].y-=n,l[a.id].x+=o,l[a.id].y+=n)}}}]),t}()
e["default"]=n,t.exports=e["default"]},function(t,e){"use strict"
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),n=function(){function t(e,o,n){i(this,t),this.body=e,this.physicsBody=o,this.setOptions(n)}return o(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){var t,e,i,o,n,s,r,a,h,d,l=this.body.nodes,u=this.physicsBody.physicsNodeIndices,c=this.physicsBody.forces,p=this.options.nodeDistance
for(h=0;h<u.length-1;h++)for(r=l[u[h]],d=h+1;d<u.length;d++)if(a=l[u[d]],r.level===a.level){t=a.x-r.x,e=a.y-r.y,i=Math.sqrt(t*t+e*e)
var f=.05
s=p>i?-Math.pow(f*i,2)+Math.pow(f*p,2):0,0===i?i=.01:s/=i,o=t*s,n=e*s,c[r.id].x-=o,c[r.id].y-=n,c[a.id].x+=o,c[a.id].y+=n}}}]),t}()
e["default"]=n,t.exports=e["default"]},function(t,e){"use strict"
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),n=function(){function t(e,o,n){i(this,t),this.body=e,this.physicsBody=o,this.setOptions(n)}return o(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t=void 0,e=void 0,i=this.physicsBody.physicsEdgeIndices,o=this.body.edges,n=void 0,s=void 0,r=void 0,a=0;a<i.length;a++)e=o[i[a]],e.connected===!0&&e.toId!==e.fromId&&void 0!==this.body.nodes[e.toId]&&void 0!==this.body.nodes[e.fromId]&&(void 0!==e.edgeType.via?(t=void 0===e.options.length?this.options.springLength:e.options.length,n=e.to,s=e.edgeType.via,r=e.from,this._calculateSpringForce(n,s,.5*t),this._calculateSpringForce(s,r,.5*t)):(t=void 0===e.options.length?1.5*this.options.springLength:e.options.length,this._calculateSpringForce(e.from,e.to,t)))}},{key:"_calculateSpringForce",value:function(t,e,i){var o=t.x-e.x,n=t.y-e.y,s=Math.max(Math.sqrt(o*o+n*n),.01),r=this.options.springConstant*(i-s)/s,a=o*r,h=n*r
void 0!==this.physicsBody.forces[t.id]&&(this.physicsBody.forces[t.id].x+=a,this.physicsBody.forces[t.id].y+=h),void 0!==this.physicsBody.forces[e.id]&&(this.physicsBody.forces[e.id].x-=a,this.physicsBody.forces[e.id].y-=h)}}]),t}()
e["default"]=n,t.exports=e["default"]},function(t,e){"use strict"
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),n=function(){function t(e,o,n){i(this,t),this.body=e,this.physicsBody=o,this.setOptions(n)}return o(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t,e,i,o,n,s,r,a,h=this.body.edges,d=.5,l=this.physicsBody.physicsEdgeIndices,u=this.physicsBody.physicsNodeIndices,c=this.physicsBody.forces,p=0;p<u.length;p++){var f=u[p]
c[f].springFx=0,c[f].springFy=0}for(var p=0;p<l.length;p++)e=h[l[p]],e.connected===!0&&(t=void 0===e.options.length?this.options.springLength:e.options.length,i=e.from.x-e.to.x,o=e.from.y-e.to.y,a=Math.sqrt(i*i+o*o),a=0===a?.01:a,r=this.options.springConstant*(t-a)/a,n=i*r,s=o*r,e.to.level!=e.from.level?(void 0!==c[e.toId]&&(c[e.toId].springFx-=n,c[e.toId].springFy-=s),void 0!==c[e.fromId]&&(c[e.fromId].springFx+=n,c[e.fromId].springFy+=s)):(void 0!==c[e.toId]&&(c[e.toId].x-=d*n,c[e.toId].y-=d*s),void 0!==c[e.fromId]&&(c[e.fromId].x+=d*n,c[e.fromId].y+=d*s)))
for(var m,g,r=1,p=0;p<u.length;p++){var f=u[p]
m=Math.min(r,Math.max(-r,c[f].springFx)),g=Math.min(r,Math.max(-r,c[f].springFy)),c[f].x+=m,c[f].y+=g}for(var v=0,y=0,p=0;p<u.length;p++){var f=u[p]
v+=c[f].x,y+=c[f].y}for(var b=v/u.length,_=y/u.length,p=0;p<u.length;p++){var f=u[p]
c[f].x-=b,c[f].y-=_}}}]),t}()
e["default"]=n,t.exports=e["default"]},function(t,e){"use strict"
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),n=function(){function t(e,o,n){i(this,t),this.body=e,this.physicsBody=o,this.setOptions(n)}return o(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t=void 0,e=void 0,i=void 0,o=void 0,n=this.body.nodes,s=this.physicsBody.physicsNodeIndices,r=this.physicsBody.forces,a=0;a<s.length;a++){var h=s[a]
o=n[h],t=-o.x,e=-o.y,i=Math.sqrt(t*t+e*e),this._calculateForces(i,t,e,r,o)}}},{key:"_calculateForces",value:function(t,e,i,o,n){var s=0===t?0:this.options.centralGravity/t
o[n.id].x=e*s,o[n.id].y=i*s}}]),t}()
e["default"]=n,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(91),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),r(e,[{key:"_calculateForces",value:function(t,e,i,o,n){0===t&&(t=.1*Math.random(),e=t),this.overlapAvoidanceFactor<1&&(t=Math.max(.1+this.overlapAvoidanceFactor*o.shape.radius,t-o.shape.radius))
var s=o.edges.length+1,r=this.options.gravitationalConstant*n.mass*o.options.mass*s/Math.pow(t,2),a=e*r,h=i*r
this.physicsBody.forces[o.id].x+=a,this.physicsBody.forces[o.id].y+=h}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},h=i(96),d=o(h),l=function(t){function e(t,i,o){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o)}return s(e,t),r(e,[{key:"_calculateForces",value:function(t,e,i,o,n){if(t>0){var s=n.edges.length+1,r=this.options.centralGravity*s*n.options.mass
o[n.id].x=e*r,o[n.id].y=i*r}}}]),e}(d["default"])
e["default"]=l,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=i(100),a=o(r),h=i(1),d=function(){function t(e){var i=this
n(this,t),this.body=e,this.clusteredNodes={},this.options={},this.defaultOptions={},h.extend(this.options,this.defaultOptions),this.body.emitter.on("_resetData",function(){i.clusteredNodes={}})}return s(t,[{key:"setOptions",value:function(t){}},{key:"clusterByHubsize",value:function(t,e){void 0===t?t=this._getHubSize():"object"==typeof t&&(e=this._checkOptions(t),t=this._getHubSize())
for(var i=[],o=0;o<this.body.nodeIndices.length;o++){var n=this.body.nodes[this.body.nodeIndices[o]]
n.edges.length>=t&&i.push(n.id)}for(var o=0;o<i.length;o++)this.clusterByConnection(i[o],e,!0)
this.body.emitter.emit("_dataChanged")}},{key:"cluster",value:function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments.length<=1||void 0===arguments[1]?!0:arguments[1]
if(void 0===t.joinCondition)throw new Error("Cannot call clusterByNodeData without a joinCondition function in the options.")
t=this._checkOptions(t)
for(var i={},o={},n=0;n<this.body.nodeIndices.length;n++){var s=this.body.nodeIndices[n],r=this.body.nodes[s],a=this._cloneOptions(r)
if(t.joinCondition(a)===!0){i[s]=this.body.nodes[s]
for(var h=0;h<r.edges.length;h++){var d=r.edges[h]
d.hiddenByCluster!==!0&&(o[d.id]=d)}}}this._cluster(i,o,t,e)}},{key:"clusterByEdgeCount",value:function(t,e){var i=arguments.length<=2||void 0===arguments[2]?!0:arguments[2]
e=this._checkOptions(e)
for(var o=[],n={},s=void 0,r=void 0,a=void 0,h=void 0,d=void 0,l=0;l<this.body.nodeIndices.length;l++){var u={},c={}
if(h=this.body.nodeIndices[l],void 0===n[h]){d=0,a=this.body.nodes[h],r=[]
for(var p=0;p<a.edges.length;p++)s=a.edges[p],s.hiddenByCluster!==!0&&r.push(s)
if(r.length===t){for(var f=!0,p=0;p<r.length;p++){s=r[p]
var m=this._getConnectedId(s,h)
if(m===h||void 0!==n[h]){f=!1
break}if(void 0===e.joinCondition)c[s.id]=s,u[h]=this.body.nodes[h],u[m]=this.body.nodes[m],n[h]=!0
else{var g=this._cloneOptions(this.body.nodes[h])
if(e.joinCondition(g)!==!0){f=!1
break}c[s.id]=s,u[h]=this.body.nodes[h],n[h]=!0}}Object.keys(u).length>0&&Object.keys(c).length>0&&f===!0&&o.push({nodes:u,edges:c})}}}for(var l=0;l<o.length;l++)this._cluster(o[l].nodes,o[l].edges,e,!1)
i===!0&&this.body.emitter.emit("_dataChanged")}},{key:"clusterOutliers",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?!0:arguments[1]
this.clusterByEdgeCount(1,t,e)}},{key:"clusterBridges",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?!0:arguments[1]
this.clusterByEdgeCount(2,t,e)}},{key:"clusterByConnection",value:function(t,e){var i=arguments.length<=2||void 0===arguments[2]?!0:arguments[2]
if(void 0===t)throw new Error("No nodeId supplied to clusterByConnection!")
if(void 0===this.body.nodes[t])throw new Error("The nodeId given to clusterByConnection does not exist!")
var o=this.body.nodes[t]
e=this._checkOptions(e,o),void 0===e.clusterNodeProperties.x&&(e.clusterNodeProperties.x=o.x),void 0===e.clusterNodeProperties.y&&(e.clusterNodeProperties.y=o.y),void 0===e.clusterNodeProperties.fixed&&(e.clusterNodeProperties.fixed={},e.clusterNodeProperties.fixed.x=o.options.fixed.x,e.clusterNodeProperties.fixed.y=o.options.fixed.y)
var n={},s={},r=o.id,a=this._cloneOptions(o)
n[r]=o
for(var h=0;h<o.edges.length;h++){var d=o.edges[h]
if(d.hiddenByCluster!==!0){var l=this._getConnectedId(d,r)
if(void 0===this.clusteredNodes[l])if(l!==r)if(void 0===e.joinCondition)s[d.id]=d,n[l]=this.body.nodes[l]
else{var u=this._cloneOptions(this.body.nodes[l])
e.joinCondition(a,u)===!0&&(s[d.id]=d,n[l]=this.body.nodes[l])}else s[d.id]=d}}this._cluster(n,s,e,i)}},{key:"_cloneOptions",value:function(t,e){var i={}
return void 0===e||"node"===e?(h.deepExtend(i,t.options,!0),i.x=t.x,i.y=t.y,i.amountOfConnections=t.edges.length):h.deepExtend(i,t.options,!0),i}},{key:"_createClusterEdges",value:function(t,e,i){for(var o=void 0,n=void 0,s=void 0,r=void 0,a=void 0,d=void 0,l=Object.keys(t),u=[],c=0;c<l.length;c++){n=l[c],s=t[n]
for(var p=0;p<s.edges.length;p++)o=s.edges[p],o.hiddenByCluster!==!0&&(o.toId==n?(r=e.id,a=o.fromId,d=a):(r=o.toId,a=e.id,d=r),void 0===t[d]&&u.push({edge:o,fromId:a,toId:r}))}for(var p=0;p<u.length;p++){var f=u[p].edge,m=this._cloneOptions(f,"edge")
h.deepExtend(m,i),m.from=u[p].fromId,m.to=u[p].toId,m.id="clusterEdge:"+h.randomUUID()
var g=this.body.functions.createEdge(m)
g.clusteringEdgeReplacingId=f.id,this.body.edges[g.id]=g,g.connect(),f.setOptions({physics:!1,hidden:!0}),f.hiddenByCluster=!0}}},{key:"_checkOptions",value:function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0]
return void 0===t.clusterEdgeProperties&&(t.clusterEdgeProperties={}),void 0===t.clusterNodeProperties&&(t.clusterNodeProperties={}),t}},{key:"_cluster",value:function(t,e,i){var o=arguments.length<=3||void 0===arguments[3]?!0:arguments[3]
if(!(Object.keys(t).length<2)){for(var n in t)if(t.hasOwnProperty(n)&&void 0!==this.clusteredNodes[n])return
var s=h.deepExtend({},i.clusterNodeProperties)
if(void 0!==i.processProperties){var r=[]
for(var n in t)if(t.hasOwnProperty(n)){var d=this._cloneOptions(t[n])
r.push(d)}var l=[]
for(var u in e)if(e.hasOwnProperty(u)&&"clusterEdge:"!==u.substr(0,12)){var d=this._cloneOptions(e[u],"edge")
l.push(d)}if(s=i.processProperties(s,r,l),!s)throw new Error("The processProperties function does not return properties!")}void 0===s.id&&(s.id="cluster:"+h.randomUUID())
var c=s.id
void 0===s.label&&(s.label="cluster")
var p=void 0
void 0===s.x&&(p=this._getClusterPosition(t),s.x=p.x),void 0===s.y&&(void 0===p&&(p=this._getClusterPosition(t)),s.y=p.y),s.id=c
var f=this.body.functions.createNode(s,a["default"])
f.isCluster=!0,f.containedNodes=t,f.containedEdges=e,f.clusterEdgeProperties=i.clusterEdgeProperties,this.body.nodes[s.id]=f,this._createClusterEdges(t,s,i.clusterEdgeProperties)
for(var u in e)if(e.hasOwnProperty(u)&&void 0!==this.body.edges[u]){var m=this.body.edges[u]
m.setOptions({physics:!1,hidden:!0}),m.hiddenByCluster=!0}for(var n in t)t.hasOwnProperty(n)&&(this.clusteredNodes[n]={clusterId:s.id,node:this.body.nodes[n]},this.body.nodes[n].setOptions({hidden:!0,physics:!1}))
s.id=void 0,o===!0&&this.body.emitter.emit("_dataChanged")}}},{key:"isCluster",value:function(t){return void 0!==this.body.nodes[t]?this.body.nodes[t].isCluster===!0:(console.log("Node does not exist."),!1)}},{key:"_getClusterPosition",value:function(t){for(var e=Object.keys(t),i=t[e[0]].x,o=t[e[0]].x,n=t[e[0]].y,s=t[e[0]].y,r=void 0,a=1;a<e.length;a++)r=t[e[a]],i=r.x<i?r.x:i,o=r.x>o?r.x:o,n=r.y<n?r.y:n,s=r.y>s?r.y:s
return{x:.5*(i+o),y:.5*(n+s)}}},{key:"openCluster",value:function(t,e){var i=arguments.length<=2||void 0===arguments[2]?!0:arguments[2]
if(void 0===t)throw new Error("No clusterNodeId supplied to openCluster.")
if(void 0===this.body.nodes[t])throw new Error("The clusterNodeId supplied to openCluster does not exist.")
if(void 0===this.body.nodes[t].containedNodes)return void console.log("The node:"+t+" is not a cluster.")
var o=this.body.nodes[t],n=o.containedNodes,s=o.containedEdges
if(void 0!==e&&void 0!==e.releaseFunction&&"function"==typeof e.releaseFunction){var r={},a={x:o.x,y:o.y}
for(var d in n)if(n.hasOwnProperty(d)){var l=this.body.nodes[d]
r[d]={x:l.x,y:l.y}}var u=e.releaseFunction(a,r)
for(var d in n)if(n.hasOwnProperty(d)){var l=this.body.nodes[d]
void 0!==u[d]&&(l.x=void 0===u[d].x?o.x:u[d].x,l.y=void 0===u[d].y?o.y:u[d].y)}}else for(var d in n)if(n.hasOwnProperty(d)){var l=this.body.nodes[d]
l=n[d],l.x=o.x,l.y=o.y}for(var d in n)if(n.hasOwnProperty(d)){var l=this.body.nodes[d]
l.vx=o.vx,l.vy=o.vy,l.setOptions({hidden:!1,physics:!0}),delete this.clusteredNodes[d]}for(var c=[],p=0;p<o.edges.length;p++)c.push(o.edges[p])
for(var p=0;p<c.length;p++){var f=c[p],m=this._getConnectedId(f,t)
if(void 0!==this.clusteredNodes[m]){var g=this.body.nodes[this.clusteredNodes[m].clusterId],v=this.body.edges[f.clusteringEdgeReplacingId]
if(void 0!==v){g.containedEdges[v.id]=v,delete s[v.id]
var y=v.fromId,b=v.toId
v.toId==m?b=this.clusteredNodes[m].clusterId:y=this.clusteredNodes[m].clusterId
var _=this._cloneOptions(v,"edge")
h.deepExtend(_,g.clusterEdgeProperties)
var w="clusterEdge:"+h.randomUUID()
h.deepExtend(_,{from:y,to:b,hidden:!1,physics:!0,id:w})
var x=this.body.functions.createEdge(_)
x.clusteringEdgeReplacingId=v.id,this.body.edges[w]=x,this.body.edges[w].connect()}}else{var k=this.body.edges[f.clusteringEdgeReplacingId]
void 0!==k&&(k.setOptions({physics:!0,hidden:!1}),k.hiddenByCluster=!1)}f.cleanup(),f.disconnect(),delete this.body.edges[f.id]}for(var T in s)if(s.hasOwnProperty(T)){var f=s[T]
f.setOptions({physics:!0,hidden:!1}),f.hiddenByCluster=void 0,delete f.hiddenByCluster}delete this.body.nodes[t],i===!0&&this.body.emitter.emit("_dataChanged")}},{key:"getNodesInCluster",value:function(t){var e=[]
if(this.isCluster(t)===!0){var i=this.body.nodes[t].containedNodes
for(var o in i)i.hasOwnProperty(o)&&e.push(o)}return e}},{key:"findNode",value:function(t){for(var e=[],i=100,o=0;void 0!==this.clusteredNodes[t]&&i>o;)e.push(this.clusteredNodes[t].node),t=this.clusteredNodes[t].clusterId,o++
return e.push(this.body.nodes[t]),e}},{key:"_getConnectedId",value:function(t,e){return t.toId!=e?t.toId:t.fromId!=e?t.fromId:t.fromId}},{key:"_getHubSize",value:function(){for(var t=0,e=0,i=0,o=0,n=0;n<this.body.nodeIndices.length;n++){var s=this.body.nodes[this.body.nodeIndices[n]]
s.edges.length>o&&(o=s.edges.length),t+=s.edges.length,e+=Math.pow(s.edges.length,2),i+=1}t/=i,e/=i
var r=e-Math.pow(t,2),a=Math.sqrt(r),h=Math.floor(t+2*a)
return h>o&&(h=o),h}}]),t}()
e["default"]=d,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=function(t,e,i){for(var o=!0;o;){var n=t,s=e,r=i
a=d=h=void 0,o=!1,null===n&&(n=Function.prototype)
var a=Object.getOwnPropertyDescriptor(n,s)
if(void 0!==a){if("value"in a)return a.value
var h=a.get
if(void 0===h)return
return h.call(r)}var d=Object.getPrototypeOf(n)
if(null===d)return
t=d,e=s,i=r,o=!0}},a=i(62),h=o(a),d=function(t){function e(t,i,o,s,a){n(this,e),r(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,i,o,s,a),this.isCluster=!0,this.containedNodes={},this.containedEdges={}}return s(e,t),e}(h["default"])
e["default"]=d,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}()
"undefined"!=typeof window&&(window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame)
var s=i(1),r=function(){function t(e,i){o(this,t),this.body=e,this.canvas=i,this.redrawRequested=!1,this.renderTimer=void 0,this.requiresTimeout=!0,this.renderingActive=!1,this.renderRequests=0,this.pixelRatio=void 0,this.allowRedraw=!0,this.dragging=!1,this.options={},this.defaultOptions={hideEdgesOnDrag:!1,hideNodesOnDrag:!1},s.extend(this.options,this.defaultOptions),this._determineBrowserMethod(),this.bindEventListeners()}return n(t,[{key:"bindEventListeners",value:function(){var t=this
this.body.emitter.on("dragStart",function(){t.dragging=!0}),this.body.emitter.on("dragEnd",function(){return t.dragging=!1}),this.body.emitter.on("_resizeNodes",function(){return t._resizeNodes()}),this.body.emitter.on("_redraw",function(){t.renderingActive===!1&&t._redraw()}),this.body.emitter.on("_blockRedraw",function(){t.allowRedraw=!1}),this.body.emitter.on("_allowRedraw",function(){t.allowRedraw=!0,t.redrawRequested=!1}),this.body.emitter.on("_requestRedraw",this._requestRedraw.bind(this)),this.body.emitter.on("_startRendering",function(){t.renderRequests+=1,t.renderingActive=!0,t._startRendering()}),this.body.emitter.on("_stopRendering",function(){t.renderRequests-=1,t.renderingActive=t.renderRequests>0,t.renderTimer=void 0}),this.body.emitter.on("destroy",function(){t.renderRequests=0,t.allowRedraw=!1,t.renderingActive=!1,t.requiresTimeout===!0?clearTimeout(t.renderTimer):cancelAnimationFrame(t.renderTimer),t.body.emitter.off()})}},{key:"setOptions",value:function(t){if(void 0!==t){var e=["hideEdgesOnDrag","hideNodesOnDrag"]
s.selectiveDeepExtend(e,this.options,t)}}},{key:"_startRendering",value:function(){this.renderingActive===!0&&void 0===this.renderTimer&&(this.requiresTimeout===!0?this.renderTimer=window.setTimeout(this._renderStep.bind(this),this.simulationInterval):this.renderTimer=window.requestAnimationFrame(this._renderStep.bind(this)))}},{key:"_renderStep",value:function(){this.renderingActive===!0&&(this.renderTimer=void 0,this.requiresTimeout===!0&&this._startRendering(),this._redraw(),this.requiresTimeout===!1&&this._startRendering())}},{key:"redraw",value:function(){this.body.emitter.emit("setSize"),this._redraw()}},{key:"_requestRedraw",value:function(){var t=this
this.redrawRequested!==!0&&this.renderingActive===!1&&this.allowRedraw===!0&&(this.redrawRequested=!0,this.requiresTimeout===!0?window.setTimeout(function(){t._redraw(!1)},0):window.requestAnimationFrame(function(){t._redraw(!1)}))}},{key:"_redraw",value:function(){var t=arguments.length<=0||void 0===arguments[0]?!1:arguments[0]
if(this.allowRedraw===!0){this.body.emitter.emit("initRedraw"),this.redrawRequested=!1
var e=this.canvas.frame.canvas.getContext("2d")
0!==this.canvas.frame.canvas.width&&0!==this.canvas.frame.canvas.height||this.canvas.setSize(),this.pixelRatio=(window.devicePixelRatio||1)/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1),e.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)
var i=this.canvas.frame.canvas.clientWidth,o=this.canvas.frame.canvas.clientHeight
if(e.clearRect(0,0,i,o),0===this.canvas.frame.clientWidth)return
e.save(),e.translate(this.body.view.translation.x,this.body.view.translation.y),e.scale(this.body.view.scale,this.body.view.scale),e.beginPath(),this.body.emitter.emit("beforeDrawing",e),e.closePath(),t===!1&&(this.dragging===!1||this.dragging===!0&&this.options.hideEdgesOnDrag===!1)&&this._drawEdges(e),(this.dragging===!1||this.dragging===!0&&this.options.hideNodesOnDrag===!1)&&this._drawNodes(e,t),this.controlNodesActive===!0&&this._drawControlNodes(e),e.beginPath(),this.body.emitter.emit("afterDrawing",e),e.closePath(),e.restore(),t===!0&&e.clearRect(0,0,i,o)}}},{key:"_resizeNodes",value:function(){var t=this.canvas.frame.canvas.getContext("2d")
void 0===this.pixelRatio&&(this.pixelRatio=(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)),t.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0),t.save(),t.translate(this.body.view.translation.x,this.body.view.translation.y),t.scale(this.body.view.scale,this.body.view.scale)
var e=this.body.nodes,i=void 0
for(var o in e)e.hasOwnProperty(o)&&(i=e[o],i.resize(t),i.updateBoundingBox(t,i.selected))
t.restore()}},{key:"_drawNodes",value:function(t){for(var e=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],i=this.body.nodes,o=this.body.nodeIndices,n=void 0,s=[],r=20,a=this.canvas.DOMtoCanvas({x:-r,y:-r}),h=this.canvas.DOMtoCanvas({x:this.canvas.frame.canvas.clientWidth+r,y:this.canvas.frame.canvas.clientHeight+r}),d={top:a.y,left:a.x,bottom:h.y,right:h.x},l=0;l<o.length;l++)n=i[o[l]],n.isSelected()?s.push(o[l]):e===!0?n.draw(t):n.isBoundingBoxOverlappingWith(d)===!0?n.draw(t):n.updateBoundingBox(t,n.selected)
for(var l=0;l<s.length;l++)n=i[s[l]],n.draw(t)}},{key:"_drawEdges",value:function(t){for(var e=this.body.edges,i=this.body.edgeIndices,o=void 0,n=0;n<i.length;n++)o=e[i[n]],o.connected===!0&&o.draw(t)}},{key:"_drawControlNodes",value:function(t){for(var e=this.body.edges,i=this.body.edgeIndices,o=void 0,n=0;n<i.length;n++)o=e[i[n]],o._drawControlNodes(t)}},{key:"_determineBrowserMethod",value:function(){if("undefined"!=typeof window){var t=navigator.userAgent.toLowerCase()
this.requiresTimeout=!1,-1!=t.indexOf("msie 9.0")?this.requiresTimeout=!0:-1!=t.indexOf("safari")&&t.indexOf("chrome")<=-1&&(this.requiresTimeout=!0)}else this.requiresTimeout=!0}}]),t}()
e["default"]=r,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=i(20),r=i(25),a=i(1),h=function(){function t(e){o(this,t),this.body=e,this.pixelRatio=1,this.resizeTimer=void 0,this.resizeFunction=this._onResize.bind(this),this.cameraState={},this.options={},this.defaultOptions={autoResize:!0,height:"100%",width:"100%"},a.extend(this.options,this.defaultOptions),this.bindEventListeners()}return n(t,[{key:"bindEventListeners",value:function(){var t=this
this.body.emitter.once("resize",function(e){0!==e.width&&(t.body.view.translation.x=.5*e.width),0!==e.height&&(t.body.view.translation.y=.5*e.height)}),this.body.emitter.on("setSize",this.setSize.bind(this)),this.body.emitter.on("destroy",function(){t.hammerFrame.destroy(),t.hammer.destroy(),t._cleanUp()})}},{key:"setOptions",value:function(t){var e=this
if(void 0!==t){var i=["width","height","autoResize"]
a.selectiveDeepExtend(i,this.options,t)}this.options.autoResize===!0&&(this._cleanUp(),this.resizeTimer=setInterval(function(){var t=e.setSize()
t===!0&&e.body.emitter.emit("_requestRedraw")},1e3),this.resizeFunction=this._onResize.bind(this),a.addEventListener(window,"resize",this.resizeFunction))}},{key:"_cleanUp",value:function(){void 0!==this.resizeTimer&&clearInterval(this.resizeTimer),a.removeEventListener(window,"resize",this.resizeFunction),this.resizeFunction=void 0}},{key:"_onResize",value:function(){this.setSize(),this.body.emitter.emit("_redraw")}},{key:"_getCameraState",value:function(){var t=arguments.length<=0||void 0===arguments[0]?this.pixelRatio:arguments[0]
this.cameraState.previousWidth=this.frame.canvas.width/t,this.cameraState.scale=this.body.view.scale,this.cameraState.position=this.DOMtoCanvas({x:.5*this.frame.canvas.width/t,y:.5*this.frame.canvas.height/t})}},{key:"_setCameraState",value:function(){if(void 0!==this.cameraState.scale&&0!==this.frame.canvas.clientWidth&&0!==this.frame.canvas.clientHeight&&0!==this.pixelRatio&&this.cameraState.previousWidth>0){this.body.view.scale=this.cameraState.scale*(this.frame.canvas.width/this.pixelRatio/this.cameraState.previousWidth)
var t=this.DOMtoCanvas({x:.5*this.frame.canvas.clientWidth,y:.5*this.frame.canvas.clientHeight}),e={x:t.x-this.cameraState.position.x,y:t.y-this.cameraState.position.y}
this.body.view.translation.x+=e.x*this.body.view.scale,this.body.view.translation.y+=e.y*this.body.view.scale}}},{key:"_prepareValue",value:function(t){if("number"==typeof t)return t+"px"
if("string"==typeof t){if(-1!==t.indexOf("%")||-1!==t.indexOf("px"))return t
if(-1===t.indexOf("%"))return t+"px"}throw new Error("Could not use the value supplied for width or height:"+t)}},{key:"_create",value:function(){for(;this.body.container.hasChildNodes();)this.body.container.removeChild(this.body.container.firstChild)
if(this.frame=document.createElement("div"),this.frame.className="vis-network",this.frame.style.position="relative",this.frame.style.overflow="hidden",this.frame.tabIndex=900,this.frame.canvas=document.createElement("canvas"),this.frame.canvas.style.position="relative",this.frame.appendChild(this.frame.canvas),this.frame.canvas.getContext){var t=this.frame.canvas.getContext("2d")
this.pixelRatio=(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1),this.frame.canvas.getContext("2d").setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)}else{var e=document.createElement("DIV")
e.style.color="red",e.style.fontWeight="bold",e.style.padding="10px",e.innerHTML="Error: your browser does not support HTML canvas",this.frame.canvas.appendChild(e)}this.body.container.appendChild(this.frame),this.body.view.scale=1,this.body.view.translation={x:.5*this.frame.canvas.clientWidth,y:.5*this.frame.canvas.clientHeight},this._bindHammer()}},{key:"_bindHammer",value:function(){var t=this
void 0!==this.hammer&&this.hammer.destroy(),this.drag={},this.pinch={},this.hammer=new s(this.frame.canvas),this.hammer.get("pinch").set({enable:!0}),this.hammer.get("pan").set({threshold:5,direction:30}),r.onTouch(this.hammer,function(e){t.body.eventListeners.onTouch(e)}),this.hammer.on("tap",function(e){t.body.eventListeners.onTap(e)}),this.hammer.on("doubletap",function(e){t.body.eventListeners.onDoubleTap(e)}),this.hammer.on("press",function(e){t.body.eventListeners.onHold(e)}),this.hammer.on("panstart",function(e){t.body.eventListeners.onDragStart(e)}),this.hammer.on("panmove",function(e){t.body.eventListeners.onDrag(e)}),this.hammer.on("panend",function(e){t.body.eventListeners.onDragEnd(e)}),this.hammer.on("pinch",function(e){t.body.eventListeners.onPinch(e)}),this.frame.canvas.addEventListener("mousewheel",function(e){t.body.eventListeners.onMouseWheel(e)}),this.frame.canvas.addEventListener("DOMMouseScroll",function(e){t.body.eventListeners.onMouseWheel(e)}),this.frame.canvas.addEventListener("mousemove",function(e){t.body.eventListeners.onMouseMove(e)}),this.frame.canvas.addEventListener("contextmenu",function(e){t.body.eventListeners.onContext(e)}),this.hammerFrame=new s(this.frame),r.onRelease(this.hammerFrame,function(e){t.body.eventListeners.onRelease(e)})}},{key:"setSize",value:function(){var t=arguments.length<=0||void 0===arguments[0]?this.options.width:arguments[0],e=arguments.length<=1||void 0===arguments[1]?this.options.height:arguments[1]
t=this._prepareValue(t),e=this._prepareValue(e)
var i=!1,o=this.frame.canvas.width,n=this.frame.canvas.height,s=this.frame.canvas.getContext("2d"),r=this.pixelRatio
return this.pixelRatio=(window.devicePixelRatio||1)/(s.webkitBackingStorePixelRatio||s.mozBackingStorePixelRatio||s.msBackingStorePixelRatio||s.oBackingStorePixelRatio||s.backingStorePixelRatio||1),t!=this.options.width||e!=this.options.height||this.frame.style.width!=t||this.frame.style.height!=e?(this._getCameraState(r),this.frame.style.width=t,this.frame.style.height=e,this.frame.canvas.style.width="100%",this.frame.canvas.style.height="100%",this.frame.canvas.width=Math.round(this.frame.canvas.clientWidth*this.pixelRatio),this.frame.canvas.height=Math.round(this.frame.canvas.clientHeight*this.pixelRatio),this.options.width=t,this.options.height=e,i=!0):(this.frame.canvas.width==Math.round(this.frame.canvas.clientWidth*this.pixelRatio)&&this.frame.canvas.height==Math.round(this.frame.canvas.clientHeight*this.pixelRatio)||this._getCameraState(r),this.frame.canvas.width!=Math.round(this.frame.canvas.clientWidth*this.pixelRatio)&&(this.frame.canvas.width=Math.round(this.frame.canvas.clientWidth*this.pixelRatio),i=!0),this.frame.canvas.height!=Math.round(this.frame.canvas.clientHeight*this.pixelRatio)&&(this.frame.canvas.height=Math.round(this.frame.canvas.clientHeight*this.pixelRatio),i=!0)),i===!0&&(this.body.emitter.emit("resize",{width:Math.round(this.frame.canvas.width/this.pixelRatio),height:Math.round(this.frame.canvas.height/this.pixelRatio),oldWidth:Math.round(o/this.pixelRatio),oldHeight:Math.round(n/this.pixelRatio)}),this._setCameraState()),i}},{key:"_XconvertDOMtoCanvas",value:function(t){return(t-this.body.view.translation.x)/this.body.view.scale}},{key:"_XconvertCanvasToDOM",value:function(t){return t*this.body.view.scale+this.body.view.translation.x}},{key:"_YconvertDOMtoCanvas",value:function(t){return(t-this.body.view.translation.y)/this.body.view.scale}},{key:"_YconvertCanvasToDOM",value:function(t){return t*this.body.view.scale+this.body.view.translation.y}},{key:"canvasToDOM",value:function(t){return{x:this._XconvertCanvasToDOM(t.x),y:this._YconvertCanvasToDOM(t.y)}}},{key:"DOMtoCanvas",value:function(t){return{x:this._XconvertDOMtoCanvas(t.x),y:this._YconvertDOMtoCanvas(t.y)}}}]),t}()
e["default"]=h,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=i(104),a=o(r),h=i(1),d=function(){function t(e,i){var o=this
n(this,t),this.body=e,this.canvas=i,this.animationSpeed=1/this.renderRefreshRate,this.animationEasingFunction="easeInOutQuint",this.easingTime=0,this.sourceScale=0,this.targetScale=0,this.sourceTranslation=0,this.targetTranslation=0,this.lockedOnNodeId=void 0,this.lockedOnNodeOffset=void 0,this.touchTime=0,this.viewFunction=void 0,this.body.emitter.on("fit",this.fit.bind(this)),this.body.emitter.on("animationFinished",function(){o.body.emitter.emit("_stopRendering")}),this.body.emitter.on("unlockNode",this.releaseNode.bind(this))}return s(t,[{key:"setOptions",value:function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0]
this.options=t}},{key:"fit",value:function(){var t=arguments.length<=0||void 0===arguments[0]?{nodes:[]}:arguments[0],e=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],i=void 0,o=void 0
if(void 0!==t.nodes&&0!==t.nodes.length||(t.nodes=this.body.nodeIndices),e===!0){var n=0
for(var s in this.body.nodes)if(this.body.nodes.hasOwnProperty(s)){var r=this.body.nodes[s]
r.predefinedPosition===!0&&(n+=1)}if(n>.5*this.body.nodeIndices.length)return void this.fit(t,!1)
i=a["default"]._getRange(this.body.nodes,t.nodes)
var h=this.body.nodeIndices.length
o=12.662/(h+7.4147)+.0964822
var d=Math.min(this.canvas.frame.canvas.clientWidth/600,this.canvas.frame.canvas.clientHeight/600)
o*=d}else{this.body.emitter.emit("_resizeNodes"),i=a["default"]._getRange(this.body.nodes,t.nodes)
var l=1.1*Math.abs(i.maxX-i.minX),u=1.1*Math.abs(i.maxY-i.minY),c=this.canvas.frame.canvas.clientWidth/l,p=this.canvas.frame.canvas.clientHeight/u
o=p>=c?c:p}o>1?o=1:0===o&&(o=1)
var f=a["default"]._findCenter(i),m={position:f,scale:o,animation:t.animation}
this.moveTo(m)}},{key:"focus",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1]
if(void 0!==this.body.nodes[t]){var i={x:this.body.nodes[t].x,y:this.body.nodes[t].y}
e.position=i,e.lockedOnNode=t,this.moveTo(e)}else console.log("Node: "+t+" cannot be found.")}},{key:"moveTo",value:function(t){return void 0===t?void(t={}):(void 0===t.offset&&(t.offset={x:0,y:0}),void 0===t.offset.x&&(t.offset.x=0),void 0===t.offset.y&&(t.offset.y=0),void 0===t.scale&&(t.scale=this.body.view.scale),void 0===t.position&&(t.position=this.getViewPosition()),void 0===t.animation&&(t.animation={duration:0}),t.animation===!1&&(t.animation={duration:0}),t.animation===!0&&(t.animation={}),void 0===t.animation.duration&&(t.animation.duration=1e3),void 0===t.animation.easingFunction&&(t.animation.easingFunction="easeInOutQuad"),void this.animateView(t))}},{key:"animateView",value:function(t){if(void 0!==t){this.animationEasingFunction=t.animation.easingFunction,this.releaseNode(),t.locked===!0&&(this.lockedOnNodeId=t.lockedOnNode,this.lockedOnNodeOffset=t.offset),0!=this.easingTime&&this._transitionRedraw(!0),this.sourceScale=this.body.view.scale,this.sourceTranslation=this.body.view.translation,this.targetScale=t.scale,this.body.view.scale=this.targetScale
var e=this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight}),i={x:e.x-t.position.x,y:e.y-t.position.y}
this.targetTranslation={x:this.sourceTranslation.x+i.x*this.targetScale+t.offset.x,y:this.sourceTranslation.y+i.y*this.targetScale+t.offset.y},0===t.animation.duration?void 0!=this.lockedOnNodeId?(this.viewFunction=this._lockedRedraw.bind(this),this.body.emitter.on("initRedraw",this.viewFunction)):(this.body.view.scale=this.targetScale,this.body.view.translation=this.targetTranslation,this.body.emitter.emit("_requestRedraw")):(this.animationSpeed=1/(60*t.animation.duration*.001)||1/60,this.animationEasingFunction=t.animation.easingFunction,this.viewFunction=this._transitionRedraw.bind(this),this.body.emitter.on("initRedraw",this.viewFunction),this.body.emitter.emit("_startRendering"))}}},{key:"_lockedRedraw",value:function(){var t={x:this.body.nodes[this.lockedOnNodeId].x,y:this.body.nodes[this.lockedOnNodeId].y},e=this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight}),i={x:e.x-t.x,y:e.y-t.y},o=this.body.view.translation,n={x:o.x+i.x*this.body.view.scale+this.lockedOnNodeOffset.x,y:o.y+i.y*this.body.view.scale+this.lockedOnNodeOffset.y}
this.body.view.translation=n}},{key:"releaseNode",value:function(){void 0!==this.lockedOnNodeId&&void 0!==this.viewFunction&&(this.body.emitter.off("initRedraw",this.viewFunction),this.lockedOnNodeId=void 0,this.lockedOnNodeOffset=void 0)}},{key:"_transitionRedraw",value:function(){var t=arguments.length<=0||void 0===arguments[0]?!1:arguments[0]
this.easingTime+=this.animationSpeed,this.easingTime=t===!0?1:this.easingTime
var e=h.easingFunctions[this.animationEasingFunction](this.easingTime)
this.body.view.scale=this.sourceScale+(this.targetScale-this.sourceScale)*e,this.body.view.translation={x:this.sourceTranslation.x+(this.targetTranslation.x-this.sourceTranslation.x)*e,y:this.sourceTranslation.y+(this.targetTranslation.y-this.sourceTranslation.y)*e},this.easingTime>=1&&(this.body.emitter.off("initRedraw",this.viewFunction),this.easingTime=0,void 0!=this.lockedOnNodeId&&(this.viewFunction=this._lockedRedraw.bind(this),this.body.emitter.on("initRedraw",this.viewFunction)),this.body.emitter.emit("animationFinished"))}},{key:"getScale",value:function(){return this.body.view.scale}},{key:"getViewPosition",value:function(){return this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight})}}]),t}()
e["default"]=d,t.exports=e["default"]},function(t,e){"use strict"
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),n=function(){function t(){i(this,t)}return o(t,null,[{key:"_getRange",value:function(t){var e,i=arguments.length<=1||void 0===arguments[1]?[]:arguments[1],o=1e9,n=-1e9,s=1e9,r=-1e9
if(i.length>0)for(var a=0;a<i.length;a++)e=t[i[a]],s>e.shape.boundingBox.left&&(s=e.shape.boundingBox.left),r<e.shape.boundingBox.right&&(r=e.shape.boundingBox.right),o>e.shape.boundingBox.top&&(o=e.shape.boundingBox.top),n<e.shape.boundingBox.bottom&&(n=e.shape.boundingBox.bottom)
return 1e9===s&&-1e9===r&&1e9===o&&-1e9===n&&(o=0,n=0,s=0,r=0),{minX:s,maxX:r,minY:o,maxY:n}}},{key:"_getRangeCore",value:function(t){var e,i=arguments.length<=1||void 0===arguments[1]?[]:arguments[1],o=1e9,n=-1e9,s=1e9,r=-1e9
if(i.length>0)for(var a=0;a<i.length;a++)e=t[i[a]],s>e.x&&(s=e.x),r<e.x&&(r=e.x),o>e.y&&(o=e.y),n<e.y&&(n=e.y)
return 1e9===s&&-1e9===r&&1e9===o&&-1e9===n&&(o=0,n=0,s=0,r=0),{minX:s,maxX:r,minY:o,maxY:n}}},{key:"_findCenter",value:function(t){return{x:.5*(t.maxX+t.minX),y:.5*(t.maxY+t.minY)}}}]),t}()
e["default"]=n,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=i(106),a=o(r),h=i(107),d=o(h),l=i(1),u=function(){function t(e,i,o){n(this,t),this.body=e,this.canvas=i,this.selectionHandler=o,this.navigationHandler=new a["default"](e,i),this.body.eventListeners.onTap=this.onTap.bind(this),this.body.eventListeners.onTouch=this.onTouch.bind(this),this.body.eventListeners.onDoubleTap=this.onDoubleTap.bind(this),this.body.eventListeners.onHold=this.onHold.bind(this),this.body.eventListeners.onDragStart=this.onDragStart.bind(this),this.body.eventListeners.onDrag=this.onDrag.bind(this),this.body.eventListeners.onDragEnd=this.onDragEnd.bind(this),this.body.eventListeners.onMouseWheel=this.onMouseWheel.bind(this),this.body.eventListeners.onPinch=this.onPinch.bind(this),this.body.eventListeners.onMouseMove=this.onMouseMove.bind(this),this.body.eventListeners.onRelease=this.onRelease.bind(this),this.body.eventListeners.onContext=this.onContext.bind(this),this.touchTime=0,this.drag={},this.pinch={},this.popup=void 0,this.popupObj=void 0,this.popupTimer=void 0,this.body.functions.getPointer=this.getPointer.bind(this),this.options={},this.defaultOptions={dragNodes:!0,dragView:!0,hover:!1,keyboard:{enabled:!1,speed:{x:10,y:10,zoom:.02},bindToWindow:!0},navigationButtons:!1,tooltipDelay:300,zoomView:!0},l.extend(this.options,this.defaultOptions),this.bindEventListeners()}return s(t,[{key:"bindEventListeners",value:function(){var t=this
this.body.emitter.on("destroy",function(){clearTimeout(t.popupTimer),delete t.body.functions.getPointer})}},{key:"setOptions",value:function(t){if(void 0!==t){var e=["hideEdgesOnDrag","hideNodesOnDrag","keyboard","multiselect","selectable","selectConnectedEdges"]
l.selectiveNotDeepExtend(e,this.options,t),l.mergeOptions(this.options,t,"keyboard"),t.tooltip&&(l.extend(this.options.tooltip,t.tooltip),t.tooltip.color&&(this.options.tooltip.color=l.parseColor(t.tooltip.color)))}this.navigationHandler.setOptions(this.options)}},{key:"getPointer",value:function(t){return{x:t.x-l.getAbsoluteLeft(this.canvas.frame.canvas),y:t.y-l.getAbsoluteTop(this.canvas.frame.canvas)}}},{key:"onTouch",value:function(t){(new Date).valueOf()-this.touchTime>50&&(this.drag.pointer=this.getPointer(t.center),this.drag.pinched=!1,this.pinch.scale=this.body.view.scale,this.touchTime=(new Date).valueOf())}},{key:"onTap",value:function(t){var e=this.getPointer(t.center),i=this.selectionHandler.options.multiselect&&(t.changedPointers[0].ctrlKey||t.changedPointers[0].metaKey)
this.checkSelectionChanges(e,t,i),this.selectionHandler._generateClickEvent("click",t,e)}},{key:"onDoubleTap",value:function(t){var e=this.getPointer(t.center)
this.selectionHandler._generateClickEvent("doubleClick",t,e)}},{key:"onHold",value:function(t){var e=this.getPointer(t.center),i=this.selectionHandler.options.multiselect
this.checkSelectionChanges(e,t,i),this.selectionHandler._generateClickEvent("click",t,e),this.selectionHandler._generateClickEvent("hold",t,e)}},{key:"onRelease",value:function(t){if((new Date).valueOf()-this.touchTime>10){var e=this.getPointer(t.center)
this.selectionHandler._generateClickEvent("release",t,e),this.touchTime=(new Date).valueOf()}}},{key:"onContext",value:function(t){var e=this.getPointer({x:t.clientX,y:t.clientY})
this.selectionHandler._generateClickEvent("oncontext",t,e)}},{key:"checkSelectionChanges",value:function(t,e){var i=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],o=this.selectionHandler._getSelectedEdgeCount(),n=this.selectionHandler._getSelectedNodeCount(),s=this.selectionHandler.getSelection(),r=void 0
r=i===!0?this.selectionHandler.selectAdditionalOnPoint(t):this.selectionHandler.selectOnPoint(t)
var a=this.selectionHandler._getSelectedEdgeCount(),h=this.selectionHandler._getSelectedNodeCount(),d=this.selectionHandler.getSelection(),l=this._determineIfDifferent(s,d),u=l.nodesChanges,c=l.edgesChanges,p=!1
h-n>0?(this.selectionHandler._generateClickEvent("selectNode",e,t),r=!0,p=!0):0>h-n?(this.selectionHandler._generateClickEvent("deselectNode",e,t,s),r=!0):h===n&&u===!0&&(this.selectionHandler._generateClickEvent("deselectNode",e,t,s),this.selectionHandler._generateClickEvent("selectNode",e,t),p=!0,r=!0),a-o>0&&p===!1?(this.selectionHandler._generateClickEvent("selectEdge",e,t),r=!0):0>a-o?(this.selectionHandler._generateClickEvent("deselectEdge",e,t,s),r=!0):a===o&&c===!0&&(this.selectionHandler._generateClickEvent("deselectEdge",e,t,s),this.selectionHandler._generateClickEvent("selectEdge",e,t),r=!0),r===!0&&this.selectionHandler._generateClickEvent("select",e,t)}},{key:"_determineIfDifferent",value:function(t,e){for(var i=!1,o=!1,n=0;n<t.nodes.length;n++)-1===e.nodes.indexOf(t.nodes[n])&&(i=!0)
for(var n=0;n<e.nodes.length;n++)-1===t.nodes.indexOf(t.nodes[n])&&(i=!0)
for(var n=0;n<t.edges.length;n++)-1===e.edges.indexOf(t.edges[n])&&(o=!0)
for(var n=0;n<e.edges.length;n++)-1===t.edges.indexOf(t.edges[n])&&(o=!0)
return{nodesChanges:i,edgesChanges:o}}},{key:"onDragStart",value:function(t){void 0===this.drag.pointer&&this.onTouch(t)
var e=this.selectionHandler.getNodeAt(this.drag.pointer)
if(this.drag.dragging=!0,this.drag.selection=[],this.drag.translation=l.extend({},this.body.view.translation),this.drag.nodeId=void 0,void 0!==e&&this.options.dragNodes===!0){this.drag.nodeId=e.id,e.isSelected()===!1&&(this.selectionHandler.unselectAll(),this.selectionHandler.selectObject(e)),this.selectionHandler._generateClickEvent("dragStart",t,this.drag.pointer)
var i=this.selectionHandler.selectionObj.nodes
for(var o in i)if(i.hasOwnProperty(o)){var n=i[o],s={id:n.id,node:n,x:n.x,y:n.y,xFixed:n.options.fixed.x,yFixed:n.options.fixed.y}
n.options.fixed.x=!0,n.options.fixed.y=!0,this.drag.selection.push(s)}}else this.selectionHandler._generateClickEvent("dragStart",t,this.drag.pointer,void 0,!0)}},{key:"onDrag",value:function(t){var e=this
if(this.drag.pinched!==!0){this.body.emitter.emit("unlockNode")
var i=this.getPointer(t.center),o=this.drag.selection
if(o&&o.length&&this.options.dragNodes===!0)!function(){e.selectionHandler._generateClickEvent("dragging",t,i)
var n=i.x-e.drag.pointer.x,s=i.y-e.drag.pointer.y
o.forEach(function(t){var i=t.node
t.xFixed===!1&&(i.x=e.canvas._XconvertDOMtoCanvas(e.canvas._XconvertCanvasToDOM(t.x)+n)),t.yFixed===!1&&(i.y=e.canvas._YconvertDOMtoCanvas(e.canvas._YconvertCanvasToDOM(t.y)+s))}),e.body.emitter.emit("startSimulation")}()
else if(this.options.dragView===!0){if(this.selectionHandler._generateClickEvent("dragging",t,i,void 0,!0),void 0===this.drag.pointer)return void this.onDragStart(t)
var n=i.x-this.drag.pointer.x,s=i.y-this.drag.pointer.y
this.body.view.translation={x:this.drag.translation.x+n,y:this.drag.translation.y+s},this.body.emitter.emit("_redraw")}}}},{key:"onDragEnd",value:function(t){this.drag.dragging=!1
var e=this.drag.selection
e&&e.length?(e.forEach(function(t){t.node.options.fixed.x=t.xFixed,t.node.options.fixed.y=t.yFixed}),this.selectionHandler._generateClickEvent("dragEnd",t,this.getPointer(t.center)),this.body.emitter.emit("startSimulation")):(this.selectionHandler._generateClickEvent("dragEnd",t,this.getPointer(t.center),void 0,!0),this.body.emitter.emit("_requestRedraw"))}},{key:"onPinch",value:function(t){var e=this.getPointer(t.center)
this.drag.pinched=!0,void 0===this.pinch.scale&&(this.pinch.scale=1)
var i=this.pinch.scale*t.scale
this.zoom(i,e)}},{key:"zoom",value:function(t,e){if(this.options.zoomView===!0){var i=this.body.view.scale
1e-5>t&&(t=1e-5),t>10&&(t=10)
var o=void 0
void 0!==this.drag&&this.drag.dragging===!0&&(o=this.canvas.DOMtoCanvas(this.drag.pointer))
var n=this.body.view.translation,s=t/i,r=(1-s)*e.x+n.x*s,a=(1-s)*e.y+n.y*s
if(this.body.view.scale=t,this.body.view.translation={x:r,y:a},void 0!=o){var h=this.canvas.canvasToDOM(o)
this.drag.pointer.x=h.x,this.drag.pointer.y=h.y}this.body.emitter.emit("_requestRedraw"),t>i?this.body.emitter.emit("zoom",{direction:"+",scale:this.body.view.scale}):this.body.emitter.emit("zoom",{direction:"-",scale:this.body.view.scale})}}},{key:"onMouseWheel",value:function(t){var e=0
if(t.wheelDelta?e=t.wheelDelta/120:t.detail&&(e=-t.detail/3),0!==e){var i=this.body.view.scale,o=e/10
0>e&&(o/=1-o),i*=1+o
var n=this.getPointer({x:t.clientX,y:t.clientY})
this.zoom(i,n)}t.preventDefault()}},{key:"onMouseMove",value:function(t){var e=this,i=this.getPointer({x:t.clientX,y:t.clientY}),o=!1
if(void 0!==this.popup&&(this.popup.hidden===!1&&this._checkHidePopup(i),this.popup.hidden===!1&&(o=!0,this.popup.setPosition(i.x+3,i.y-5),this.popup.show())),this.options.keyboard.bindToWindow===!1&&this.options.keyboard.enabled===!0&&this.canvas.frame.focus(),o===!1&&(void 0!==this.popupTimer&&(clearInterval(this.popupTimer),this.popupTimer=void 0),this.drag.dragging||(this.popupTimer=setTimeout(function(){return e._checkShowPopup(i)},this.options.tooltipDelay))),this.options.hover===!0){var n=this.selectionHandler.getNodeAt(i)
void 0===n&&(n=this.selectionHandler.getEdgeAt(i)),this.selectionHandler.hoverObject(n)}}},{key:"_checkShowPopup",value:function(t){var e=this.canvas._XconvertDOMtoCanvas(t.x),i=this.canvas._YconvertDOMtoCanvas(t.y),o={left:e,top:i,right:e,bottom:i},n=void 0===this.popupObj?void 0:this.popupObj.id,s=!1,r="node"
if(void 0===this.popupObj){for(var a=this.body.nodeIndices,h=this.body.nodes,l=void 0,u=[],c=0;c<a.length;c++)l=h[a[c]],l.isOverlappingWith(o)===!0&&void 0!==l.getTitle()&&u.push(a[c])
u.length>0&&(this.popupObj=h[u[u.length-1]],s=!0)}if(void 0===this.popupObj&&s===!1){for(var p=this.body.edgeIndices,f=this.body.edges,m=void 0,g=[],c=0;c<p.length;c++)m=f[p[c]],m.isOverlappingWith(o)===!0&&m.connected===!0&&void 0!==m.getTitle()&&g.push(p[c])
g.length>0&&(this.popupObj=f[g[g.length-1]],r="edge")}void 0!==this.popupObj?this.popupObj.id!==n&&(void 0===this.popup&&(this.popup=new d["default"](this.canvas.frame)),this.popup.popupTargetType=r,this.popup.popupTargetId=this.popupObj.id,this.popup.setPosition(t.x+3,t.y-5),this.popup.setText(this.popupObj.getTitle()),this.popup.show(),this.body.emitter.emit("showPopup",this.popupObj.id)):void 0!==this.popup&&(this.popup.hide(),this.body.emitter.emit("hidePopup"))}},{key:"_checkHidePopup",value:function(t){var e=this.selectionHandler._pointerToPositionObject(t),i=!1
if("node"===this.popup.popupTargetType){if(void 0!==this.body.nodes[this.popup.popupTargetId]&&(i=this.body.nodes[this.popup.popupTargetId].isOverlappingWith(e),i===!0)){var o=this.selectionHandler.getNodeAt(t)
i=o.id===this.popup.popupTargetId}}else void 0===this.selectionHandler.getNodeAt(t)&&void 0!==this.body.edges[this.popup.popupTargetId]&&(i=this.body.edges[this.popup.popupTargetId].isOverlappingWith(e))
i===!1&&(this.popupObj=void 0,this.popup.hide(),this.body.emitter.emit("hidePopup"))}}]),t}()
e["default"]=u,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=(i(1),i(20)),r=i(25),a=i(41),h=function(){function t(e,i){var n=this
o(this,t),this.body=e,this.canvas=i,this.iconsCreated=!1,this.navigationHammers=[],this.boundFunctions={},this.touchTime=0,this.activated=!1,this.body.emitter.on("activate",function(){n.activated=!0,n.configureKeyboardBindings()}),this.body.emitter.on("deactivate",function(){n.activated=!1,n.configureKeyboardBindings()}),this.body.emitter.on("destroy",function(){void 0!==n.keycharm&&n.keycharm.destroy()}),this.options={}}return n(t,[{key:"setOptions",value:function(t){void 0!==t&&(this.options=t,this.create())}},{key:"create",value:function(){this.options.navigationButtons===!0?this.iconsCreated===!1&&this.loadNavigationElements():this.iconsCreated===!0&&this.cleanNavigation(),this.configureKeyboardBindings()}},{key:"cleanNavigation",value:function(){if(0!=this.navigationHammers.length){for(var t=0;t<this.navigationHammers.length;t++)this.navigationHammers[t].destroy()
this.navigationHammers=[]}this.navigationDOM&&this.navigationDOM.wrapper&&this.navigationDOM.wrapper.parentNode&&this.navigationDOM.wrapper.parentNode.removeChild(this.navigationDOM.wrapper),this.iconsCreated=!1}},{key:"loadNavigationElements",value:function(){var t=this
this.cleanNavigation(),this.navigationDOM={}
var e=["up","down","left","right","zoomIn","zoomOut","zoomExtends"],i=["_moveUp","_moveDown","_moveLeft","_moveRight","_zoomIn","_zoomOut","_fit"]
this.navigationDOM.wrapper=document.createElement("div"),this.navigationDOM.wrapper.className="vis-navigation",this.canvas.frame.appendChild(this.navigationDOM.wrapper)
for(var o=0;o<e.length;o++){this.navigationDOM[e[o]]=document.createElement("div"),this.navigationDOM[e[o]].className="vis-button vis-"+e[o],this.navigationDOM.wrapper.appendChild(this.navigationDOM[e[o]])
var n=new s(this.navigationDOM[e[o]])
"_fit"===i[o]?r.onTouch(n,this._fit.bind(this)):r.onTouch(n,this.bindToRedraw.bind(this,i[o])),this.navigationHammers.push(n)}var a=new s(this.canvas.frame)
r.onRelease(a,function(){t._stopMovement()}),this.navigationHammers.push(a),this.iconsCreated=!0}},{key:"bindToRedraw",value:function(t){void 0===this.boundFunctions[t]&&(this.boundFunctions[t]=this[t].bind(this),this.body.emitter.on("initRedraw",this.boundFunctions[t]),this.body.emitter.emit("_startRendering"))}},{key:"unbindFromRedraw",value:function(t){void 0!==this.boundFunctions[t]&&(this.body.emitter.off("initRedraw",this.boundFunctions[t]),this.body.emitter.emit("_stopRendering"),delete this.boundFunctions[t])}},{key:"_fit",value:function(){(new Date).valueOf()-this.touchTime>700&&(this.body.emitter.emit("fit",{duration:700}),this.touchTime=(new Date).valueOf())}},{key:"_stopMovement",value:function(){for(var t in this.boundFunctions)this.boundFunctions.hasOwnProperty(t)&&(this.body.emitter.off("initRedraw",this.boundFunctions[t]),this.body.emitter.emit("_stopRendering"))
this.boundFunctions={}}},{key:"_moveUp",value:function(){this.body.view.translation.y+=this.options.keyboard.speed.y}},{key:"_moveDown",value:function(){this.body.view.translation.y-=this.options.keyboard.speed.y}},{key:"_moveLeft",value:function(){this.body.view.translation.x+=this.options.keyboard.speed.x}},{key:"_moveRight",value:function(){this.body.view.translation.x-=this.options.keyboard.speed.x}},{key:"_zoomIn",value:function(){this.body.view.scale*=1+this.options.keyboard.speed.zoom,this.body.emitter.emit("zoom",{direction:"+",scale:this.body.view.scale})}},{key:"_zoomOut",value:function(){this.body.view.scale/=1+this.options.keyboard.speed.zoom,this.body.emitter.emit("zoom",{direction:"-",scale:this.body.view.scale})}},{key:"configureKeyboardBindings",value:function(){var t=this
void 0!==this.keycharm&&this.keycharm.destroy(),this.options.keyboard.enabled===!0&&(this.options.keyboard.bindToWindow===!0?this.keycharm=a({container:window,preventDefault:!0}):this.keycharm=a({container:this.canvas.frame,preventDefault:!0}),this.keycharm.reset(),this.activated===!0&&(this.keycharm.bind("up",function(){t.bindToRedraw("_moveUp")},"keydown"),this.keycharm.bind("down",function(){t.bindToRedraw("_moveDown")},"keydown"),this.keycharm.bind("left",function(){t.bindToRedraw("_moveLeft")},"keydown"),this.keycharm.bind("right",function(){t.bindToRedraw("_moveRight")},"keydown"),this.keycharm.bind("=",function(){t.bindToRedraw("_zoomIn")},"keydown"),this.keycharm.bind("num+",function(){t.bindToRedraw("_zoomIn")},"keydown"),this.keycharm.bind("num-",function(){t.bindToRedraw("_zoomOut")},"keydown"),this.keycharm.bind("-",function(){t.bindToRedraw("_zoomOut")},"keydown"),this.keycharm.bind("[",function(){t.bindToRedraw("_zoomOut")},"keydown"),this.keycharm.bind("]",function(){t.bindToRedraw("_zoomIn")},"keydown"),this.keycharm.bind("pageup",function(){t.bindToRedraw("_zoomIn")},"keydown"),this.keycharm.bind("pagedown",function(){t.bindToRedraw("_zoomOut")},"keydown"),this.keycharm.bind("up",function(){t.unbindFromRedraw("_moveUp")},"keyup"),this.keycharm.bind("down",function(){t.unbindFromRedraw("_moveDown")},"keyup"),this.keycharm.bind("left",function(){t.unbindFromRedraw("_moveLeft")},"keyup"),this.keycharm.bind("right",function(){t.unbindFromRedraw("_moveRight")},"keyup"),this.keycharm.bind("=",function(){t.unbindFromRedraw("_zoomIn")},"keyup"),this.keycharm.bind("num+",function(){t.unbindFromRedraw("_zoomIn")},"keyup"),this.keycharm.bind("num-",function(){t.unbindFromRedraw("_zoomOut")},"keyup"),this.keycharm.bind("-",function(){t.unbindFromRedraw("_zoomOut")},"keyup"),this.keycharm.bind("[",function(){t.unbindFromRedraw("_zoomOut")},"keyup"),this.keycharm.bind("]",function(){t.unbindFromRedraw("_zoomIn")},"keyup"),this.keycharm.bind("pageup",function(){t.unbindFromRedraw("_zoomIn")},"keyup"),this.keycharm.bind("pagedown",function(){t.unbindFromRedraw("_zoomOut")},"keyup")))}}]),t}()
e["default"]=h,t.exports=e["default"]},function(t,e){"use strict"
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),n=function(){function t(e){i(this,t),this.container=e,this.x=0,this.y=0,this.padding=5,this.hidden=!1,this.frame=document.createElement("div"),this.frame.className="vis-network-tooltip",this.container.appendChild(this.frame)}return o(t,[{key:"setPosition",value:function(t,e){this.x=parseInt(t),this.y=parseInt(e)}},{key:"setText",value:function(t){t instanceof Element?(this.frame.innerHTML="",this.frame.appendChild(t)):this.frame.innerHTML=t}},{key:"show",value:function(t){if(void 0===t&&(t=!0),t===!0){var e=this.frame.clientHeight,i=this.frame.clientWidth,o=this.frame.parentNode.clientHeight,n=this.frame.parentNode.clientWidth,s=this.y-e
s+e+this.padding>o&&(s=o-e-this.padding),s<this.padding&&(s=this.padding)
var r=this.x
r+i+this.padding>n&&(r=n-i-this.padding),r<this.padding&&(r=this.padding),this.frame.style.left=r+"px",this.frame.style.top=s+"px",this.frame.style.visibility="visible",this.hidden=!1}else this.hide()}},{key:"hide",value:function(){this.hidden=!0,this.frame.style.visibility="hidden"}}]),t}()
e["default"]=n,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=i(62),r=i(82),a=i(1),h=function(){function t(e,i){var n=this
o(this,t),this.body=e,this.canvas=i,this.selectionObj={nodes:[],edges:[]},this.hoverObj={nodes:{},edges:{}},this.options={},this.defaultOptions={multiselect:!1,selectable:!0,selectConnectedEdges:!0,hoverConnectedEdges:!0},a.extend(this.options,this.defaultOptions),this.body.emitter.on("_dataChanged",function(){n.updateSelection()})}return n(t,[{key:"setOptions",value:function(t){if(void 0!==t){var e=["multiselect","hoverConnectedEdges","selectable","selectConnectedEdges"]
a.selectiveDeepExtend(e,this.options,t)}}},{key:"selectOnPoint",value:function(t){var e=!1
if(this.options.selectable===!0){var i=this.getNodeAt(t)||this.getEdgeAt(t)
this.unselectAll(),void 0!==i&&(e=this.selectObject(i)),this.body.emitter.emit("_requestRedraw")}return e}},{key:"selectAdditionalOnPoint",value:function(t){var e=!1
if(this.options.selectable===!0){var i=this.getNodeAt(t)||this.getEdgeAt(t)
void 0!==i&&(e=!0,i.isSelected()===!0?this.deselectObject(i):this.selectObject(i),this.body.emitter.emit("_requestRedraw"))}return e}},{key:"_generateClickEvent",value:function(t,e,i,o){var n=arguments.length<=4||void 0===arguments[4]?!1:arguments[4],s=void 0
s=n===!0?{nodes:[],edges:[]}:this.getSelection(),s.pointer={DOM:{x:i.x,y:i.y},canvas:this.canvas.DOMtoCanvas(i)},s.event=e,void 0!==o&&(s.previousSelection=o),this.body.emitter.emit(t,s)}},{key:"selectObject",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?this.options.selectConnectedEdges:arguments[1]
return void 0!==t?(t instanceof s&&e===!0&&this._selectConnectedEdges(t),t.select(),this._addToSelection(t),!0):!1}},{key:"deselectObject",value:function(t){t.isSelected()===!0&&(t.selected=!1,this._removeFromSelection(t))}},{key:"_getAllNodesOverlappingWith",value:function(t){for(var e=[],i=this.body.nodes,o=0;o<this.body.nodeIndices.length;o++){var n=this.body.nodeIndices[o]
i[n].isOverlappingWith(t)&&e.push(n)}return e}},{key:"_pointerToPositionObject",value:function(t){var e=this.canvas.DOMtoCanvas(t)
return{left:e.x-1,top:e.y+1,right:e.x+1,bottom:e.y-1}}},{key:"getNodeAt",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],i=this._pointerToPositionObject(t),o=this._getAllNodesOverlappingWith(i)
return o.length>0?e===!0?this.body.nodes[o[o.length-1]]:o[o.length-1]:void 0}},{key:"_getEdgesOverlappingWith",value:function(t,e){for(var i=this.body.edges,o=0;o<this.body.edgeIndices.length;o++){var n=this.body.edgeIndices[o]
i[n].isOverlappingWith(t)&&e.push(n)}}},{key:"_getAllEdgesOverlappingWith",value:function(t){var e=[]
return this._getEdgesOverlappingWith(t,e),e}},{key:"getEdgeAt",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],i=this._pointerToPositionObject(t),o=this._getAllEdgesOverlappingWith(i)
return o.length>0?e===!0?this.body.edges[o[o.length-1]]:o[o.length-1]:void 0}},{key:"_addToSelection",value:function(t){t instanceof s?this.selectionObj.nodes[t.id]=t:this.selectionObj.edges[t.id]=t}},{key:"_addToHover",value:function(t){t instanceof s?this.hoverObj.nodes[t.id]=t:this.hoverObj.edges[t.id]=t}},{key:"_removeFromSelection",value:function(t){t instanceof s?delete this.selectionObj.nodes[t.id]:delete this.selectionObj.edges[t.id]}},{key:"unselectAll",value:function(){for(var t in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(t)&&this.selectionObj.nodes[t].unselect()
for(var e in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(e)&&this.selectionObj.edges[e].unselect()
this.selectionObj={nodes:{},edges:{}}}},{key:"_getSelectedNodeCount",value:function(){var t=0
for(var e in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(e)&&(t+=1)
return t}},{key:"_getSelectedNode",value:function(){for(var t in this.selectionObj.nodes)if(this.selectionObj.nodes.hasOwnProperty(t))return this.selectionObj.nodes[t]}},{key:"_getSelectedEdge",value:function(){for(var t in this.selectionObj.edges)if(this.selectionObj.edges.hasOwnProperty(t))return this.selectionObj.edges[t]}},{key:"_getSelectedEdgeCount",value:function(){var t=0
for(var e in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(e)&&(t+=1)
return t}},{key:"_getSelectedObjectCount",value:function(){var t=0
for(var e in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(e)&&(t+=1)
for(var i in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(i)&&(t+=1)
return t}},{key:"_selectionIsEmpty",value:function(){for(var t in this.selectionObj.nodes)if(this.selectionObj.nodes.hasOwnProperty(t))return!1
for(var e in this.selectionObj.edges)if(this.selectionObj.edges.hasOwnProperty(e))return!1
return!0}},{key:"_clusterInSelection",value:function(){for(var t in this.selectionObj.nodes)if(this.selectionObj.nodes.hasOwnProperty(t)&&this.selectionObj.nodes[t].clusterSize>1)return!0
return!1}},{key:"_selectConnectedEdges",value:function(t){for(var e=0;e<t.edges.length;e++){var i=t.edges[e]
i.select(),this._addToSelection(i)}}},{key:"_hoverConnectedEdges",value:function(t){for(var e=0;e<t.edges.length;e++){var i=t.edges[e]
i.hover=!0,this._addToHover(i)}}},{key:"_unselectConnectedEdges",value:function(t){for(var e=0;e<t.edges.length;e++){var i=t.edges[e]
i.unselect(),this._removeFromSelection(i)}}},{key:"blurObject",value:function(t){t.hover===!0&&(t.hover=!1,t instanceof s?this.body.emitter.emit("blurNode",{node:t.id}):this.body.emitter.emit("blurEdge",{edge:t.id}))}},{key:"hoverObject",value:function(t){var e=!1
for(var i in this.hoverObj.nodes)this.hoverObj.nodes.hasOwnProperty(i)&&(void 0===t||t instanceof s&&t.id!=i||t instanceof r)&&(this.blurObject(this.hoverObj.nodes[i]),delete this.hoverObj.nodes[i],e=!0)
for(var o in this.hoverObj.edges)this.hoverObj.edges.hasOwnProperty(o)&&(e===!0?(this.hoverObj.edges[o].hover=!1,delete this.hoverObj.edges[o]):void 0===t&&(this.blurObject(this.hoverObj.edges[o]),delete this.hoverObj.edges[o],e=!0))
void 0!==t&&(t.hover===!1&&(t.hover=!0,this._addToHover(t),e=!0,t instanceof s?this.body.emitter.emit("hoverNode",{node:t.id}):this.body.emitter.emit("hoverEdge",{edge:t.id})),t instanceof s&&this.options.hoverConnectedEdges===!0&&this._hoverConnectedEdges(t)),e===!0&&this.body.emitter.emit("_requestRedraw")}},{key:"getSelection",value:function(){var t=this.getSelectedNodes(),e=this.getSelectedEdges()
return{nodes:t,edges:e}}},{key:"getSelectedNodes",value:function(){var t=[]
if(this.options.selectable===!0)for(var e in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(e)&&t.push(e)
return t}},{key:"getSelectedEdges",value:function(){var t=[]
if(this.options.selectable===!0)for(var e in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(e)&&t.push(e)
return t}},{key:"selectNodes",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],i=void 0,o=void 0
if(!t||void 0===t.length)throw"Selection must be an array with ids"
for(this.unselectAll(),i=0;i<t.length;i++){o=t[i]
var n=this.body.nodes[o]
if(!n)throw new RangeError('Node with id "'+o+'" not found')
this.selectObject(n,e)}this.body.emitter.emit("_requestRedraw")}},{key:"selectEdges",value:function(t){var e=void 0,i=void 0
if(!t||void 0===t.length)throw"Selection must be an array with ids"
for(this.unselectAll(),e=0;e<t.length;e++){i=t[e]
var o=this.body.edges[i]
if(!o)throw new RangeError('Edge with id "'+i+'" not found')
this.selectObject(o)}this.body.emitter.emit("_requestRedraw")}},{key:"updateSelection",value:function(){for(var t in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(t)&&(this.body.nodes.hasOwnProperty(t)||delete this.selectionObj.nodes[t])
for(var e in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(e)&&(this.body.edges.hasOwnProperty(e)||delete this.selectionObj.edges[e])}}]),t}()
e["default"]=h,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=i(104),a=o(r),h=i(1),d=function(){function t(e){n(this,t),this.body=e,this.initialRandomSeed=Math.round(1e6*Math.random()),this.randomSeed=this.initialRandomSeed,this.options={},this.optionsBackup={},this.defaultOptions={randomSeed:void 0,improvedLayout:!0,hierarchical:{enabled:!1,levelSeparation:150,direction:"UD",sortMethod:"hubsize"}},h.extend(this.options,this.defaultOptions),this.hierarchicalLevels={},this.bindEventListeners()}return s(t,[{key:"bindEventListeners",value:function(){var t=this
this.body.emitter.on("_dataChanged",function(){t.setupHierarchicalLayout()}),this.body.emitter.on("_dataLoaded",function(){t.layoutNetwork()}),this.body.emitter.on("_resetHierarchicalLayout",function(){t.setupHierarchicalLayout()})}},{key:"setOptions",value:function(t,e){if(void 0!==t){var i=this.options.hierarchical.enabled
if(h.selectiveDeepExtend(["randomSeed","improvedLayout"],this.options,t),h.mergeOptions(this.options,t,"hierarchical"),void 0!==t.randomSeed&&(this.initialRandomSeed=t.randomSeed),this.options.hierarchical.enabled===!0)return i===!0&&this.body.emitter.emit("refresh",!0),"RL"===this.options.hierarchical.direction||"DU"===this.options.hierarchical.direction?this.options.hierarchical.levelSeparation>0&&(this.options.hierarchical.levelSeparation*=-1):this.options.hierarchical.levelSeparation<0&&(this.options.hierarchical.levelSeparation*=-1),this.body.emitter.emit("_resetHierarchicalLayout"),this.adaptAllOptions(e)
if(i===!0)return this.body.emitter.emit("refresh"),h.deepExtend(e,this.optionsBackup)}return e}},{key:"adaptAllOptions",value:function(t){if(this.options.hierarchical.enabled===!0){void 0===t.physics||t.physics===!0?(t.physics={solver:"hierarchicalRepulsion"},this.optionsBackup.physics={solver:"barnesHut"}):"object"==typeof t.physics?(this.optionsBackup.physics={solver:"barnesHut"},void 0!==t.physics.solver&&(this.optionsBackup.physics={solver:t.physics.solver}),t.physics.solver="hierarchicalRepulsion"):t.physics!==!1&&(this.optionsBackup.physics={solver:"barnesHut"},t.physics.solver="hierarchicalRepulsion")
var e="horizontal"
"RL"!==this.options.hierarchical.direction&&"LR"!==this.options.hierarchical.direction||(e="vertical"),void 0===t.edges?(this.optionsBackup.edges={smooth:{enabled:!0,type:"dynamic"}},t.edges={smooth:!1}):void 0===t.edges.smooth?(this.optionsBackup.edges={smooth:{enabled:!0,type:"dynamic"}},t.edges.smooth=!1):"boolean"==typeof t.edges.smooth?(this.optionsBackup.edges={smooth:t.edges.smooth},t.edges.smooth={enabled:t.edges.smooth,type:e}):(void 0!==t.edges.smooth.type&&"dynamic"!==t.edges.smooth.type&&(e=t.edges.smooth.type),this.optionsBackup.edges={smooth:void 0===t.edges.smooth.enabled?!0:t.edges.smooth.enabled,type:void 0===t.edges.smooth.type?"dynamic":t.edges.smooth.type,roundness:void 0===t.edges.smooth.roundness?.5:t.edges.smooth.roundness,forceDirection:void 0===t.edges.smooth.forceDirection?!1:t.edges.smooth.forceDirection},t.edges.smooth={enabled:void 0===t.edges.smooth.enabled?!0:t.edges.smooth.enabled,type:e,roundness:void 0===t.edges.smooth.roundness?.5:t.edges.smooth.roundness,forceDirection:void 0===t.edges.smooth.forceDirection?!1:t.edges.smooth.forceDirection}),this.body.emitter.emit("_forceDisableDynamicCurves",e)}return t}},{key:"seededRandom",value:function(){var t=1e4*Math.sin(this.randomSeed++)
return t-Math.floor(t)}},{key:"positionInitially",value:function(t){if(this.options.hierarchical.enabled!==!0){this.randomSeed=this.initialRandomSeed
for(var e=0;e<t.length;e++){var i=t[e],o=1*t.length+10,n=2*Math.PI*this.seededRandom()
void 0===i.x&&(i.x=o*Math.cos(n)),void 0===i.y&&(i.y=o*Math.sin(n))}}}},{key:"layoutNetwork",value:function(){if(this.options.hierarchical.enabled!==!0&&this.options.improvedLayout===!0){for(var t=0,e=0;e<this.body.nodeIndices.length;e++){var i=this.body.nodes[this.body.nodeIndices[e]]
i.predefinedPosition===!0&&(t+=1)}if(t<.5*this.body.nodeIndices.length){var o=10,n=0,s=100
if(this.body.nodeIndices.length>s){for(var r=this.body.nodeIndices.length;this.body.nodeIndices.length>s;){n+=1
var a=this.body.nodeIndices.length
n%3===0?this.body.modules.clustering.clusterBridges():this.body.modules.clustering.clusterOutliers()
var h=this.body.nodeIndices.length
if(a==h&&n%3!==0||n>o)return this._declusterAll(),this.body.emitter.emit("_layoutFailed"),void console.info("This network could not be positioned by this version of the improved layout algorithm. Please disable improvedLayout for better performance.")}this.body.modules.kamadaKawai.setOptions({springLength:Math.max(150,2*r)})}this.body.modules.kamadaKawai.solve(this.body.nodeIndices,this.body.edgeIndices,!0),this._shiftToCenter()
for(var d=70,e=0;e<this.body.nodeIndices.length;e++)this.body.nodes[this.body.nodeIndices[e]].x+=(.5-this.seededRandom())*d,this.body.nodes[this.body.nodeIndices[e]].y+=(.5-this.seededRandom())*d
this._declusterAll(),this.body.emitter.emit("_repositionBezierNodes")}}}},{key:"_shiftToCenter",value:function(){for(var t=a["default"]._getRangeCore(this.body.nodes,this.body.nodeIndices),e=a["default"]._findCenter(t),i=0;i<this.body.nodeIndices.length;i++)this.body.nodes[this.body.nodeIndices[i]].x-=e.x,this.body.nodes[this.body.nodeIndices[i]].y-=e.y}},{key:"_declusterAll",value:function(){for(var t=!0;t===!0;){t=!1
for(var e=0;e<this.body.nodeIndices.length;e++)this.body.nodes[this.body.nodeIndices[e]].isCluster===!0&&(t=!0,this.body.modules.clustering.openCluster(this.body.nodeIndices[e],{},!1))
t===!0&&this.body.emitter.emit("_dataChanged")}}},{key:"getSeed",value:function(){return this.initialRandomSeed}},{key:"setupHierarchicalLayout",value:function(){if(this.options.hierarchical.enabled===!0&&this.body.nodeIndices.length>0){var t=void 0,e=void 0,i=!1,o=!1
this.hierarchicalLevels={},this.nodeSpacing=100
for(e in this.body.nodes)this.body.nodes.hasOwnProperty(e)&&(t=this.body.nodes[e],void 0!==t.options.level?(i=!0,this.hierarchicalLevels[e]=t.options.level):o=!0)
if(o===!0&&i===!0)throw new Error("To use the hierarchical layout, nodes require either no predefined levels or levels have to be defined for all nodes.")
o===!0&&("hubsize"===this.options.hierarchical.sortMethod?this._determineLevelsByHubsize():("directed"===this.options.hierarchical.sortMethod,this._determineLevelsDirected()))
var n=this._getDistribution()
this._placeNodesByHierarchy(n)}}},{key:"_placeNodesByHierarchy",value:function(t){var e=void 0,i=void 0
this.positionedNodes={}
for(var o in t)if(t.hasOwnProperty(o))for(e in t[o].nodes)t[o].nodes.hasOwnProperty(e)&&(i=t[o].nodes[e],"UD"===this.options.hierarchical.direction||"DU"===this.options.hierarchical.direction?(void 0===i.x&&(i.x=t[o].distance),t[o].distance=i.x+this.nodeSpacing):(void 0===i.y&&(i.y=t[o].distance),t[o].distance=i.y+this.nodeSpacing),this.positionedNodes[e]=!0,this._placeBranchNodes(i.edges,i.id,t,o))}},{key:"_getDistribution",value:function(){var t={},e=void 0,i=void 0
for(e in this.body.nodes)if(this.body.nodes.hasOwnProperty(e)){i=this.body.nodes[e]
var o=void 0===this.hierarchicalLevels[e]?0:this.hierarchicalLevels[e]
"UD"===this.options.hierarchical.direction||"DU"===this.options.hierarchical.direction?(i.y=this.options.hierarchical.levelSeparation*o,i.options.fixed.y=!0):(i.x=this.options.hierarchical.levelSeparation*o,i.options.fixed.x=!0),void 0===t[o]&&(t[o]={amount:0,nodes:{},distance:0}),t[o].amount+=1,t[o].nodes[e]=i}return t}},{key:"_getHubSize",value:function(){var t=0
for(var e in this.body.nodes)if(this.body.nodes.hasOwnProperty(e)){var i=this.body.nodes[e]
void 0===this.hierarchicalLevels[e]&&(t=i.edges.length<t?t:i.edges.length)}return t}},{key:"_determineLevelsByHubsize",value:function(){for(var t=void 0,e=void 0,i=1;i>0&&(i=this._getHubSize(),0!==i);)for(t in this.body.nodes)this.body.nodes.hasOwnProperty(t)&&(e=this.body.nodes[t],e.edges.length===i&&this._setLevelByHubsize(0,e))}},{key:"_setLevelByHubsize",value:function(t,e){if(void 0===this.hierarchicalLevels[e.id]){var i=void 0
this.hierarchicalLevels[e.id]=t
for(var o=0;o<e.edges.length;o++)i=e.edges[o].toId===e.id?e.edges[o].from:e.edges[o].to,this._setLevelByHubsize(t+1,i)}}},{key:"_determineLevelsDirected",value:function(){var t=void 0,e=void 0,i=1e4
for(t in this.body.nodes)this.body.nodes.hasOwnProperty(t)&&(e=this.body.nodes[t],this._setLevelDirected(i,e))
for(t in this.body.nodes)this.body.nodes.hasOwnProperty(t)&&(i=this.hierarchicalLevels[t]<i?this.hierarchicalLevels[t]:i)
for(t in this.body.nodes)this.body.nodes.hasOwnProperty(t)&&(this.hierarchicalLevels[t]-=i)}},{key:"_setLevelDirected",value:function(t,e){if(void 0===this.hierarchicalLevels[e.id]){var i=void 0
this.hierarchicalLevels[e.id]=t
for(var o=0;o<e.edges.length;o++)e.edges[o].toId===e.id?(i=e.edges[o].from,this._setLevelDirected(t-1,i)):(i=e.edges[o].to,this._setLevelDirected(t+1,i))}}},{key:"_placeBranchNodes",value:function(t,e,i,o){for(var n=0;n<t.length;n++){var s=void 0,r=void 0
t[n].toId===e?(s=t[n].from,r=t[n].to):(s=t[n].to,r=t[n].from)
var a=this.hierarchicalLevels[s.id]
void 0===this.positionedNodes[s.id]&&a>o&&("UD"===this.options.hierarchical.direction||"DU"===this.options.hierarchical.direction?(void 0===s.x&&(s.x=Math.max(i[a].distance,r.x)),i[a].distance=s.x+this.nodeSpacing,this.positionedNodes[s.id]=!0):(void 0===s.y&&(s.y=Math.max(i[a].distance,r.y)),i[a].distance=s.y+this.nodeSpacing),this.positionedNodes[s.id]=!0,s.edges.length>1&&this._placeBranchNodes(s.edges,s.id,i,a))}}}]),t}()
e["default"]=d,t.exports=e["default"]},function(t,e,i){"use strict"
function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=i(1),r=i(20),a=i(25),h=function(){function t(e,i,n){var r=this
o(this,t),this.body=e,this.canvas=i,this.selectionHandler=n,this.editMode=!1,this.manipulationDiv=void 0,this.editModeDiv=void 0,this.closeDiv=void 0,this.manipulationHammers=[],this.temporaryUIFunctions={},this.temporaryEventFunctions=[],this.touchTime=0,this.temporaryIds={nodes:[],edges:[]},this.guiEnabled=!1,this.inMode=!1,this.selectedControlNode=void 0,this.options={},this.defaultOptions={enabled:!1,initiallyActive:!1,addNode:!0,addEdge:!0,editNode:void 0,editEdge:!0,deleteNode:!0,deleteEdge:!0,controlNodeStyle:{shape:"dot",size:6,color:{background:"#ff0000",border:"#3c3c3c",highlight:{background:"#07f968",border:"#3c3c3c"}},borderWidth:2,borderWidthSelected:2}},s.extend(this.options,this.defaultOptions),this.body.emitter.on("destroy",function(){r._clean()}),this.body.emitter.on("_dataChanged",this._restore.bind(this)),this.body.emitter.on("_resetData",this._restore.bind(this))}return n(t,[{key:"_restore",value:function(){this.inMode!==!1&&(this.options.initiallyActive===!0?this.enableEditMode():this.disableEditMode())}},{key:"setOptions",value:function(t,e,i){void 0!==e&&(void 0!==e.locale?this.options.locale=e.locale:this.options.locale=i.locale,void 0!==e.locales?this.options.locales=e.locales:this.options.locales=i.locales),void 0!==t&&("boolean"==typeof t?this.options.enabled=t:(this.options.enabled=!0,s.deepExtend(this.options,t)),this.options.initiallyActive===!0&&(this.editMode=!0),this._setup())}},{key:"toggleEditMode",value:function(){this.editMode===!0?this.disableEditMode():this.enableEditMode()}},{key:"enableEditMode",value:function(){this.editMode=!0,this._clean(),this.guiEnabled===!0&&(this.manipulationDiv.style.display="block",this.closeDiv.style.display="block",this.editModeDiv.style.display="none",this.showManipulatorToolbar())}},{key:"disableEditMode",value:function(){this.editMode=!1,this._clean(),this.guiEnabled===!0&&(this.manipulationDiv.style.display="none",this.closeDiv.style.display="none",this.editModeDiv.style.display="block",this._createEditButton())}},{key:"showManipulatorToolbar",value:function(){if(this._clean(),this.manipulationDOM={},this.guiEnabled===!0){this.editMode=!0,this.manipulationDiv.style.display="block",this.closeDiv.style.display="block"
var t=this.selectionHandler._getSelectedNodeCount(),e=this.selectionHandler._getSelectedEdgeCount(),i=t+e,o=this.options.locales[this.options.locale],n=!1
this.options.addNode!==!1&&(this._createAddNodeButton(o),n=!0),this.options.addEdge!==!1&&(n===!0?this._createSeperator(1):n=!0,this._createAddEdgeButton(o)),1===t&&"function"==typeof this.options.editNode?(n===!0?this._createSeperator(2):n=!0,this._createEditNodeButton(o)):1===e&&0===t&&this.options.editEdge!==!1&&(n===!0?this._createSeperator(3):n=!0,this._createEditEdgeButton(o)),0!==i&&(t>0&&this.options.deleteNode!==!1?(n===!0&&this._createSeperator(4),this._createDeleteButton(o)):0===t&&this.options.deleteEdge!==!1&&(n===!0&&this._createSeperator(4),this._createDeleteButton(o))),this._bindHammerToDiv(this.closeDiv,this.toggleEditMode.bind(this)),this._temporaryBindEvent("select",this.showManipulatorToolbar.bind(this))}this.body.emitter.emit("_redraw")}},{key:"addNodeMode",value:function(){if(this.editMode!==!0&&this.enableEditMode(),this._clean(),this.inMode="addNode",this.guiEnabled===!0){var t=this.options.locales[this.options.locale]
this.manipulationDOM={},this._createBackButton(t),this._createSeperator(),this._createDescription(t.addDescription||this.options.locales.en.addDescription),this._bindHammerToDiv(this.closeDiv,this.toggleEditMode.bind(this))}this._temporaryBindEvent("click",this._performAddNode.bind(this))}},{key:"editNode",value:function(){var t=this
this.editMode!==!0&&this.enableEditMode(),this._clean()
var e=this.selectionHandler._getSelectedNode()
if(void 0!==e){if(this.inMode="editNode","function"!=typeof this.options.editNode)throw new Error("No function has been configured to handle the editing of nodes.")
if(e.isCluster!==!0){var i=s.deepExtend({},e.options,!0)
if(i.x=e.x,i.y=e.y,2!==this.options.editNode.length)throw new Error("The function for edit does not support two arguments (data, callback)")
this.options.editNode(i,function(e){null!==e&&void 0!==e&&"editNode"===t.inMode&&t.body.data.nodes.getDataSet().update(e),t.showManipulatorToolbar()})}else alert(this.options.locales[this.options.locale].editClusterError||this.options.locales.en.editClusterError)}else this.showManipulatorToolbar()}},{key:"addEdgeMode",value:function(){if(this.editMode!==!0&&this.enableEditMode(),this._clean(),this.inMode="addEdge",this.guiEnabled===!0){var t=this.options.locales[this.options.locale]
this.manipulationDOM={},this._createBackButton(t),this._createSeperator(),this._createDescription(t.edgeDescription||this.options.locales.en.edgeDescription),this._bindHammerToDiv(this.closeDiv,this.toggleEditMode.bind(this))}this._temporaryBindUI("onTouch",this._handleConnect.bind(this)),this._temporaryBindUI("onDragEnd",this._finishConnect.bind(this)),this._temporaryBindUI("onDrag",this._dragControlNode.bind(this)),this._temporaryBindUI("onRelease",this._finishConnect.bind(this)),this._temporaryBindUI("onDragStart",function(){}),this._temporaryBindUI("onHold",function(){})}},{key:"editEdgeMode",value:function(){var t=this
if(this.editMode!==!0&&this.enableEditMode(),this._clean(),this.inMode="editEdge",this.guiEnabled===!0){var e=this.options.locales[this.options.locale]
this.manipulationDOM={},this._createBackButton(e),this._createSeperator(),this._createDescription(e.editEdgeDescription||this.options.locales.en.editEdgeDescription),this._bindHammerToDiv(this.closeDiv,this.toggleEditMode.bind(this))}this.edgeBeingEditedId=this.selectionHandler.getSelectedEdges()[0],void 0!==this.edgeBeingEditedId?!function(){var e=t.body.edges[t.edgeBeingEditedId],i=t._getNewTargetNode(e.from.x,e.from.y),o=t._getNewTargetNode(e.to.x,e.to.y)
t.temporaryIds.nodes.push(i.id),t.temporaryIds.nodes.push(o.id),t.body.nodes[i.id]=i,t.body.nodeIndices.push(i.id),t.body.nodes[o.id]=o,t.body.nodeIndices.push(o.id),t._temporaryBindUI("onTouch",t._controlNodeTouch.bind(t)),t._temporaryBindUI("onTap",function(){}),t._temporaryBindUI("onHold",function(){}),t._temporaryBindUI("onDragStart",t._controlNodeDragStart.bind(t)),t._temporaryBindUI("onDrag",t._controlNodeDrag.bind(t)),t._temporaryBindUI("onDragEnd",t._controlNodeDragEnd.bind(t)),t._temporaryBindUI("onMouseMove",function(){}),t._temporaryBindEvent("beforeDrawing",function(t){var n=e.edgeType.findBorderPositions(t)
i.selected===!1&&(i.x=n.from.x,i.y=n.from.y),o.selected===!1&&(o.x=n.to.x,o.y=n.to.y)}),t.body.emitter.emit("_redraw")}():this.showManipulatorToolbar()}},{key:"deleteSelected",value:function(){var t=this
this.editMode!==!0&&this.enableEditMode(),this._clean(),this.inMode="delete"
var e=this.selectionHandler.getSelectedNodes(),i=this.selectionHandler.getSelectedEdges(),o=void 0
if(e.length>0){for(var n=0;n<e.length;n++)if(this.body.nodes[e[n]].isCluster===!0)return void alert(this.options.locales[this.options.locale].deleteClusterError||this.options.locales.en.deleteClusterError)
"function"==typeof this.options.deleteNode&&(o=this.options.deleteNode)}else i.length>0&&"function"==typeof this.options.deleteEdge&&(o=this.options.deleteEdge)
if("function"==typeof o){var s={nodes:e,edges:i}
if(2!==o.length)throw new Error("The function for delete does not support two arguments (data, callback)")
o(s,function(e){null!==e&&void 0!==e&&"delete"===t.inMode?(t.body.data.edges.getDataSet().remove(e.edges),t.body.data.nodes.getDataSet().remove(e.nodes),t.body.emitter.emit("startSimulation"),t.showManipulatorToolbar()):(t.body.emitter.emit("startSimulation"),t.showManipulatorToolbar())})}else this.body.data.edges.getDataSet().remove(i),this.body.data.nodes.getDataSet().remove(e),this.body.emitter.emit("startSimulation"),this.showManipulatorToolbar()}},{key:"_setup",value:function(){this.options.enabled===!0?(this.guiEnabled=!0,this._createWrappers(),this.editMode===!1?this._createEditButton():this.showManipulatorToolbar()):(this._removeManipulationDOM(),this.guiEnabled=!1)}},{key:"_createWrappers",value:function(){void 0===this.manipulationDiv&&(this.manipulationDiv=document.createElement("div"),this.manipulationDiv.className="vis-manipulation",this.editMode===!0?this.manipulationDiv.style.display="block":this.manipulationDiv.style.display="none",this.canvas.frame.appendChild(this.manipulationDiv)),void 0===this.editModeDiv&&(this.editModeDiv=document.createElement("div"),this.editModeDiv.className="vis-edit-mode",this.editMode===!0?this.editModeDiv.style.display="none":this.editModeDiv.style.display="block",this.canvas.frame.appendChild(this.editModeDiv)),void 0===this.closeDiv&&(this.closeDiv=document.createElement("div"),this.closeDiv.className="vis-close",this.closeDiv.style.display=this.manipulationDiv.style.display,this.canvas.frame.appendChild(this.closeDiv))}},{key:"_getNewTargetNode",value:function(t,e){var i=s.deepExtend({},this.options.controlNodeStyle)
return i.id="targetNode"+s.randomUUID(),i.hidden=!1,i.physics=!1,i.x=t,i.y=e,this.body.functions.createNode(i)}},{key:"_createEditButton",value:function(){this._clean(),this.manipulationDOM={},s.recursiveDOMDelete(this.editModeDiv)
var t=this.options.locales[this.options.locale],e=this._createButton("editMode","vis-button vis-edit vis-edit-mode",t.edit||this.options.locales.en.edit)
this.editModeDiv.appendChild(e),this._bindHammerToDiv(e,this.toggleEditMode.bind(this))}},{key:"_clean",value:function(){this.inMode=!1,this.guiEnabled===!0&&(s.recursiveDOMDelete(this.editModeDiv),s.recursiveDOMDelete(this.manipulationDiv),this._cleanManipulatorHammers()),this._cleanupTemporaryNodesAndEdges(),this._unbindTemporaryUIs(),this._unbindTemporaryEvents(),this.body.emitter.emit("restorePhysics")}},{key:"_cleanManipulatorHammers",value:function(){if(0!=this.manipulationHammers.length){for(var t=0;t<this.manipulationHammers.length;t++)this.manipulationHammers[t].destroy()
this.manipulationHammers=[]}}},{key:"_removeManipulationDOM",value:function(){this._clean(),s.recursiveDOMDelete(this.manipulationDiv),s.recursiveDOMDelete(this.editModeDiv),s.recursiveDOMDelete(this.closeDiv),this.manipulationDiv&&this.canvas.frame.removeChild(this.manipulationDiv),this.editModeDiv&&this.canvas.frame.removeChild(this.editModeDiv),this.closeDiv&&this.canvas.frame.removeChild(this.manipulationDiv),this.manipulationDiv=void 0,this.editModeDiv=void 0,this.closeDiv=void 0}},{key:"_createSeperator",value:function(){var t=arguments.length<=0||void 0===arguments[0]?1:arguments[0]
this.manipulationDOM["seperatorLineDiv"+t]=document.createElement("div"),this.manipulationDOM["seperatorLineDiv"+t].className="vis-separator-line",this.manipulationDiv.appendChild(this.manipulationDOM["seperatorLineDiv"+t])}},{key:"_createAddNodeButton",value:function(t){var e=this._createButton("addNode","vis-button vis-add",t.addNode||this.options.locales.en.addNode)
this.manipulationDiv.appendChild(e),this._bindHammerToDiv(e,this.addNodeMode.bind(this))}},{key:"_createAddEdgeButton",value:function(t){var e=this._createButton("addEdge","vis-button vis-connect",t.addEdge||this.options.locales.en.addEdge)
this.manipulationDiv.appendChild(e),this._bindHammerToDiv(e,this.addEdgeMode.bind(this))}},{key:"_createEditNodeButton",value:function(t){var e=this._createButton("editNode","vis-button vis-edit",t.editNode||this.options.locales.en.editNode)
this.manipulationDiv.appendChild(e),this._bindHammerToDiv(e,this.editNode.bind(this))}},{key:"_createEditEdgeButton",value:function(t){var e=this._createButton("editEdge","vis-button vis-edit",t.editEdge||this.options.locales.en.editEdge)
this.manipulationDiv.appendChild(e),this._bindHammerToDiv(e,this.editEdgeMode.bind(this))}},{key:"_createDeleteButton",value:function(t){var e=this._createButton("delete","vis-button vis-delete",t.del||this.options.locales.en.del)
this.manipulationDiv.appendChild(e),this._bindHammerToDiv(e,this.deleteSelected.bind(this))}},{key:"_createBackButton",value:function(t){var e=this._createButton("back","vis-button vis-back",t.back||this.options.locales.en.back)
this.manipulationDiv.appendChild(e),this._bindHammerToDiv(e,this.showManipulatorToolbar.bind(this))}},{key:"_createButton",value:function(t,e,i){var o=arguments.length<=3||void 0===arguments[3]?"vis-label":arguments[3]
return this.manipulationDOM[t+"Div"]=document.createElement("div"),this.manipulationDOM[t+"Div"].className=e,this.manipulationDOM[t+"Label"]=document.createElement("div"),this.manipulationDOM[t+"Label"].className=o,this.manipulationDOM[t+"Label"].innerHTML=i,this.manipulationDOM[t+"Div"].appendChild(this.manipulationDOM[t+"Label"]),this.manipulationDOM[t+"Div"]}},{key:"_createDescription",value:function(t){this.manipulationDiv.appendChild(this._createButton("description","vis-button vis-none",t))}},{key:"_temporaryBindEvent",value:function(t,e){this.temporaryEventFunctions.push({event:t,boundFunction:e}),this.body.emitter.on(t,e)}},{key:"_temporaryBindUI",value:function(t,e){if(void 0===this.body.eventListeners[t])throw new Error("This UI function does not exist. Typo? You tried: "+t+" possible are: "+JSON.stringify(Object.keys(this.body.eventListeners)))
this.temporaryUIFunctions[t]=this.body.eventListeners[t],this.body.eventListeners[t]=e}},{key:"_unbindTemporaryUIs",value:function(){for(var t in this.temporaryUIFunctions)this.temporaryUIFunctions.hasOwnProperty(t)&&(this.body.eventListeners[t]=this.temporaryUIFunctions[t],delete this.temporaryUIFunctions[t])
this.temporaryUIFunctions={}}},{key:"_unbindTemporaryEvents",value:function(){for(var t=0;t<this.temporaryEventFunctions.length;t++){var e=this.temporaryEventFunctions[t].event,i=this.temporaryEventFunctions[t].boundFunction
this.body.emitter.off(e,i)}this.temporaryEventFunctions=[]}},{key:"_bindHammerToDiv",value:function(t,e){var i=new r(t,{})
a.onTouch(i,e),this.manipulationHammers.push(i)}},{key:"_cleanupTemporaryNodesAndEdges",value:function(){for(var t=0;t<this.temporaryIds.edges.length;t++){this.body.edges[this.temporaryIds.edges[t]].disconnect(),delete this.body.edges[this.temporaryIds.edges[t]]
var e=this.body.edgeIndices.indexOf(this.temporaryIds.edges[t]);-1!==e&&this.body.edgeIndices.splice(e,1)}for(var t=0;t<this.temporaryIds.nodes.length;t++){delete this.body.nodes[this.temporaryIds.nodes[t]]
var i=this.body.nodeIndices.indexOf(this.temporaryIds.nodes[t]);-1!==i&&this.body.nodeIndices.splice(i,1)}this.temporaryIds={nodes:[],edges:[]}}},{key:"_controlNodeTouch",value:function(t){this.selectionHandler.unselectAll(),this.lastTouch=this.body.functions.getPointer(t.center),this.lastTouch.translation=s.extend({},this.body.view.translation)}},{key:"_controlNodeDragStart",value:function(t){var e=this.lastTouch,i=this.selectionHandler._pointerToPositionObject(e),o=this.body.nodes[this.temporaryIds.nodes[0]],n=this.body.nodes[this.temporaryIds.nodes[1]],s=this.body.edges[this.edgeBeingEditedId]
this.selectedControlNode=void 0
var r=o.isOverlappingWith(i),a=n.isOverlappingWith(i)
r===!0?(this.selectedControlNode=o,s.edgeType.from=o):a===!0&&(this.selectedControlNode=n,s.edgeType.to=n),this.body.emitter.emit("_redraw")}},{key:"_controlNodeDrag",value:function(t){this.body.emitter.emit("disablePhysics")
var e=this.body.functions.getPointer(t.center),i=this.canvas.DOMtoCanvas(e)
if(void 0!==this.selectedControlNode)this.selectedControlNode.x=i.x,this.selectedControlNode.y=i.y
else{var o=e.x-this.lastTouch.x,n=e.y-this.lastTouch.y
this.body.view.translation={x:this.lastTouch.translation.x+o,y:this.lastTouch.translation.y+n}}this.body.emitter.emit("_redraw")}},{key:"_controlNodeDragEnd",value:function(t){for(var e=this.body.functions.getPointer(t.center),i=this.selectionHandler._pointerToPositionObject(e),o=this.body.edges[this.edgeBeingEditedId],n=this.selectionHandler._getAllNodesOverlappingWith(i),s=void 0,r=n.length-1;r>=0;r--)if(n[r]!==this.selectedControlNode.id){s=this.body.nodes[n[r]]
break}if(void 0!==s&&void 0!==this.selectedControlNode)if(s.isCluster===!0)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError)
else{var a=this.body.nodes[this.temporaryIds.nodes[0]]
this.selectedControlNode.id===a.id?this._performEditEdge(s.id,o.to.id):this._performEditEdge(o.from.id,s.id)}else o.updateEdgeType(),this.body.emitter.emit("restorePhysics")
this.body.emitter.emit("_redraw")}},{key:"_handleConnect",value:function(t){if((new Date).valueOf()-this.touchTime>100){this.lastTouch=this.body.functions.getPointer(t.center),this.lastTouch.translation=s.extend({},this.body.view.translation)
var e=this.lastTouch,i=this.selectionHandler.getNodeAt(e)
if(void 0!==i)if(i.isCluster===!0)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError)
else{var o=this._getNewTargetNode(i.x,i.y)
this.body.nodes[o.id]=o,this.body.nodeIndices.push(o.id)
var n=this.body.functions.createEdge({id:"connectionEdge"+s.randomUUID(),from:i.id,to:o.id,physics:!1,smooth:{enabled:!0,type:"continuous",roundness:.5}})
this.body.edges[n.id]=n,this.body.edgeIndices.push(n.id),this.temporaryIds.nodes.push(o.id),this.temporaryIds.edges.push(n.id)}this.touchTime=(new Date).valueOf()}}},{key:"_dragControlNode",value:function(t){var e=this.body.functions.getPointer(t.center)
if(void 0!==this.temporaryIds.nodes[0]){var i=this.body.nodes[this.temporaryIds.nodes[0]]
i.x=this.canvas._XconvertDOMtoCanvas(e.x),i.y=this.canvas._YconvertDOMtoCanvas(e.y),this.body.emitter.emit("_redraw")}else{var o=e.x-this.lastTouch.x,n=e.y-this.lastTouch.y
this.body.view.translation={x:this.lastTouch.translation.x+o,y:this.lastTouch.translation.y+n}}}},{key:"_finishConnect",value:function(t){var e=this.body.functions.getPointer(t.center),i=this.selectionHandler._pointerToPositionObject(e),o=void 0
void 0!==this.temporaryIds.edges[0]&&(o=this.body.edges[this.temporaryIds.edges[0]].fromId)
for(var n=this.selectionHandler._getAllNodesOverlappingWith(i),s=void 0,r=n.length-1;r>=0;r--)if(-1===this.temporaryIds.nodes.indexOf(n[r])){s=this.body.nodes[n[r]]
break}this._cleanupTemporaryNodesAndEdges(),void 0!==s&&(s.isCluster===!0?alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError):void 0!==this.body.nodes[o]&&void 0!==this.body.nodes[s.id]&&this._performAddEdge(o,s.id)),this.body.emitter.emit("_redraw")}},{key:"_performAddNode",value:function(t){var e=this,i={id:s.randomUUID(),x:t.pointer.canvas.x,y:t.pointer.canvas.y,label:"new"}
if("function"==typeof this.options.addNode){if(2!==this.options.addNode.length)throw new Error("The function for add does not support two arguments (data,callback)")
this.options.addNode(i,function(t){null!==t&&void 0!==t&&"addNode"===e.inMode&&(e.body.data.nodes.getDataSet().add(t),e.showManipulatorToolbar())})}else this.body.data.nodes.getDataSet().add(i),this.showManipulatorToolbar()}},{key:"_performAddEdge",value:function(t,e){var i=this,o={from:t,to:e}
if("function"==typeof this.options.addEdge){if(2!==this.options.addEdge.length)throw new Error("The function for connect does not support two arguments (data,callback)")
this.options.addEdge(o,function(t){null!==t&&void 0!==t&&"addEdge"===i.inMode&&(i.body.data.edges.getDataSet().add(t),i.selectionHandler.unselectAll(),i.showManipulatorToolbar())})}else this.body.data.edges.getDataSet().add(o),this.selectionHandler.unselectAll(),this.showManipulatorToolbar()}},{key:"_performEditEdge",value:function(t,e){var i=this,o={id:this.edgeBeingEditedId,from:t,to:e}
if("function"==typeof this.options.editEdge){if(2!==this.options.editEdge.length)throw new Error("The function for edit does not support two arguments (data, callback)")
this.options.editEdge(o,function(t){null===t||void 0===t||"editEdge"!==i.inMode?(i.body.edges[o.id].updateEdgeType(),i.body.emitter.emit("_redraw")):(i.body.data.edges.getDataSet().update(t),i.selectionHandler.unselectAll(),i.showManipulatorToolbar())})}else this.body.data.edges.getDataSet().update(o),this.selectionHandler.unselectAll(),this.showManipulatorToolbar()}}]),t}()
e["default"]=h,t.exports=e["default"]},function(t,e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var i="string",o="boolean",n="number",s="array",r="object",a="dom",h="any",d={configure:{enabled:{"boolean":o},filter:{"boolean":o,string:i,array:s,"function":"function"},container:{dom:a},showButton:{"boolean":o},__type__:{object:r,"boolean":o,string:i,array:s,"function":"function"}},edges:{arrows:{to:{enabled:{"boolean":o},scaleFactor:{number:n},__type__:{object:r,"boolean":o}},middle:{enabled:{"boolean":o},scaleFactor:{number:n},__type__:{object:r,"boolean":o}},from:{enabled:{"boolean":o},scaleFactor:{number:n},__type__:{object:r,"boolean":o}},__type__:{string:["from","to","middle"],object:r}},color:{color:{string:i},highlight:{string:i},hover:{string:i},inherit:{string:["from","to","both"],"boolean":o},opacity:{number:n},__type__:{object:r,string:i}},dashes:{"boolean":o,array:s},font:{color:{string:i},size:{number:n},face:{string:i},background:{string:i},strokeWidth:{number:n},strokeColor:{string:i},align:{string:["horizontal","top","middle","bottom"]},__type__:{object:r,string:i}},hidden:{"boolean":o},hoverWidth:{"function":"function",number:n},label:{string:i,undefined:"undefined"},labelHighlightBold:{"boolean":o},length:{number:n,undefined:"undefined"},physics:{"boolean":o},scaling:{min:{number:n},max:{number:n},label:{enabled:{"boolean":o},min:{number:n},max:{number:n},maxVisible:{number:n},drawThreshold:{number:n},__type__:{object:r,"boolean":o}},customScalingFunction:{"function":"function"},__type__:{object:r}},selectionWidth:{"function":"function",number:n},selfReferenceSize:{number:n},shadow:{enabled:{"boolean":o},size:{number:n},x:{number:n},y:{number:n},__type__:{object:r,"boolean":o}},smooth:{enabled:{"boolean":o},type:{string:["dynamic","continuous","discrete","diagonalCross","straightCross","horizontal","vertical","curvedCW","curvedCCW","cubicBezier"]},roundness:{number:n},forceDirection:{string:["horizontal","vertical","none"],"boolean":o},__type__:{object:r,"boolean":o}},title:{string:i,undefined:"undefined"},width:{number:n},value:{number:n,undefined:"undefined"},__type__:{object:r}},groups:{useDefaultGroups:{"boolean":o},__any__:"get from nodes, will be overwritten below",__type__:{object:r}},interaction:{dragNodes:{"boolean":o},dragView:{"boolean":o},hideEdgesOnDrag:{"boolean":o},hideNodesOnDrag:{"boolean":o},hover:{"boolean":o},keyboard:{enabled:{"boolean":o},speed:{x:{number:n},y:{number:n},zoom:{number:n},__type__:{object:r}},bindToWindow:{"boolean":o},__type__:{object:r,"boolean":o}},multiselect:{"boolean":o},navigationButtons:{"boolean":o},selectable:{"boolean":o},selectConnectedEdges:{"boolean":o},hoverConnectedEdges:{"boolean":o},tooltipDelay:{number:n},zoomView:{"boolean":o},__type__:{object:r}},layout:{randomSeed:{undefined:"undefined",number:n},improvedLayout:{"boolean":o},hierarchical:{enabled:{"boolean":o},levelSeparation:{number:n},direction:{string:["UD","DU","LR","RL"]},sortMethod:{string:["hubsize","directed"]},__type__:{object:r,"boolean":o}},__type__:{object:r}},manipulation:{enabled:{"boolean":o},initiallyActive:{"boolean":o},addNode:{"boolean":o,"function":"function"},addEdge:{"boolean":o,"function":"function"},editNode:{"function":"function"},editEdge:{"boolean":o,"function":"function"},deleteNode:{"boolean":o,"function":"function"},deleteEdge:{"boolean":o,"function":"function"},controlNodeStyle:"get from nodes, will be overwritten below",__type__:{object:r,"boolean":o}},nodes:{borderWidth:{number:n},borderWidthSelected:{number:n,undefined:"undefined"},brokenImage:{string:i,undefined:"undefined"},color:{border:{string:i},background:{string:i},highlight:{border:{string:i},background:{string:i},__type__:{object:r,string:i}},hover:{border:{string:i},background:{string:i},__type__:{object:r,string:i}},__type__:{object:r,string:i}},fixed:{x:{"boolean":o},y:{"boolean":o},__type__:{object:r,"boolean":o}},font:{color:{string:i},size:{number:n},face:{string:i},background:{string:i},strokeWidth:{number:n},strokeColor:{string:i},__type__:{object:r,string:i}},group:{string:i,number:n,undefined:"undefined"},hidden:{"boolean":o},icon:{face:{string:i},code:{string:i},size:{number:n},color:{string:i},__type__:{object:r}},id:{string:i,number:n},image:{string:i,undefined:"undefined"},label:{string:i,undefined:"undefined"},labelHighlightBold:{"boolean":o},level:{number:n,undefined:"undefined"},mass:{number:n},physics:{"boolean":o},scaling:{min:{number:n},max:{number:n},label:{enabled:{"boolean":o},min:{number:n},max:{number:n},maxVisible:{number:n},drawThreshold:{number:n},__type__:{object:r,"boolean":o}},customScalingFunction:{"function":"function"},__type__:{object:r}},shadow:{enabled:{"boolean":o},size:{number:n},x:{number:n},y:{number:n},__type__:{object:r,"boolean":o}},shape:{string:["ellipse","circle","database","box","text","image","circularImage","diamond","dot","star","triangle","triangleDown","square","icon"]},shapeProperties:{borderDashes:{"boolean":o,array:s},borderRadius:{number:n},useImageSize:{"boolean":o},__type__:{object:r}},size:{number:n},title:{string:i,undefined:"undefined"},value:{number:n,undefined:"undefined"},x:{number:n},y:{number:n},__type__:{object:r}},physics:{enabled:{"boolean":o},barnesHut:{gravitationalConstant:{number:n},centralGravity:{number:n},springLength:{number:n},springConstant:{number:n},damping:{number:n},avoidOverlap:{number:n},__type__:{object:r}},forceAtlas2Based:{gravitationalConstant:{number:n},centralGravity:{number:n},springLength:{number:n},springConstant:{number:n},damping:{number:n},avoidOverlap:{number:n},__type__:{object:r}},repulsion:{centralGravity:{number:n},springLength:{number:n},springConstant:{number:n},nodeDistance:{number:n},damping:{number:n},__type__:{object:r}},hierarchicalRepulsion:{centralGravity:{number:n},springLength:{number:n},springConstant:{number:n},nodeDistance:{number:n},damping:{number:n},__type__:{object:r}},maxVelocity:{number:n},minVelocity:{number:n},solver:{string:["barnesHut","repulsion","hierarchicalRepulsion","forceAtlas2Based"]},stabilization:{enabled:{"boolean":o},iterations:{number:n},updateInterval:{number:n},onlyDynamicEdges:{"boolean":o},fit:{"boolean":o},__type__:{object:r,"boolean":o}},timestep:{number:n},adaptiveTimestep:{"boolean":o},__type__:{object:r,"boolean":o}},autoResize:{"boolean":o},clickToUse:{"boolean":o},locale:{string:i},locales:{__any__:{any:h},__type__:{object:r}},height:{string:i},width:{string:i},__type__:{object:r}}
d.groups.__any__=d.nodes,d.manipulation.controlNodeStyle=d.nodes
var l={nodes:{borderWidth:[1,0,10,1],borderWidthSelected:[2,0,10,1],color:{border:["color","#2B7CE9"],background:["color","#97C2FC"],highlight:{border:["color","#2B7CE9"],background:["color","#D2E5FF"]},hover:{border:["color","#2B7CE9"],background:["color","#D2E5FF"]}},fixed:{x:!1,y:!1},font:{color:["color","#343434"],size:[14,0,100,1],face:["arial","verdana","tahoma"],background:["color","none"],strokeWidth:[0,0,50,1],strokeColor:["color","#ffffff"]},hidden:!1,labelHighlightBold:!0,physics:!0,scaling:{min:[10,0,200,1],max:[30,0,200,1],label:{enabled:!1,min:[14,0,200,1],max:[30,0,200,1],maxVisible:[30,0,200,1],drawThreshold:[5,0,20,1]}},shadow:{enabled:!1,size:[10,0,20,1],x:[5,-30,30,1],y:[5,-30,30,1]},shape:["ellipse","box","circle","database","diamond","dot","square","star","text","triangle","triangleDown"],shapeProperties:{borderDashes:!1,borderRadius:[6,0,20,1],useImageSize:!1},size:[25,0,200,1]},edges:{arrows:{to:{enabled:!1,scaleFactor:[1,0,3,.05]},middle:{enabled:!1,scaleFactor:[1,0,3,.05]},from:{enabled:!1,scaleFactor:[1,0,3,.05]}},color:{color:["color","#848484"],highlight:["color","#848484"],hover:["color","#848484"],inherit:["from","to","both",!0,!1],opacity:[1,0,1,.05]},dashes:!1,font:{color:["color","#343434"],size:[14,0,100,1],face:["arial","verdana","tahoma"],background:["color","none"],strokeWidth:[2,0,50,1],strokeColor:["color","#ffffff"],align:["horizontal","top","middle","bottom"]},hidden:!1,hoverWidth:[1.5,0,5,.1],labelHighlightBold:!0,physics:!0,scaling:{min:[1,0,100,1],max:[15,0,100,1],label:{enabled:!0,min:[14,0,200,1],max:[30,0,200,1],maxVisible:[30,0,200,1],drawThreshold:[5,0,20,1]}},selectionWidth:[1.5,0,5,.1],selfReferenceSize:[20,0,200,1],shadow:{enabled:!1,size:[10,0,20,1],x:[5,-30,30,1],y:[5,-30,30,1]},smooth:{enabled:!0,type:["dynamic","continuous","discrete","diagonalCross","straightCross","horizontal","vertical","curvedCW","curvedCCW","cubicBezier"],forceDirection:["horizontal","vertical","none"],roundness:[.5,0,1,.05]},width:[1,0,30,1]},layout:{hierarchical:{enabled:!1,levelSeparation:[150,20,500,5],direction:["UD","DU","LR","RL"],sortMethod:["hubsize","directed"]}},interaction:{dragNodes:!0,dragView:!0,hideEdgesOnDrag:!1,hideNodesOnDrag:!1,hover:!1,keyboard:{enabled:!1,speed:{x:[10,0,40,1],y:[10,0,40,1],zoom:[.02,0,.1,.005]},bindToWindow:!0},multiselect:!1,navigationButtons:!1,selectable:!0,selectConnectedEdges:!0,hoverConnectedEdges:!0,tooltipDelay:[300,0,1e3,25],zoomView:!0},manipulation:{enabled:!1,initiallyActive:!1},physics:{enabled:!0,barnesHut:{gravitationalConstant:[-2e3,-3e4,0,50],centralGravity:[.3,0,10,.05],springLength:[95,0,500,5],springConstant:[.04,0,1.2,.005],damping:[.09,0,1,.01],avoidOverlap:[0,0,1,.01]},forceAtlas2Based:{gravitationalConstant:[-50,-500,0,1],centralGravity:[.01,0,1,.005],springLength:[95,0,500,5],springConstant:[.08,0,1.2,.005],damping:[.4,0,1,.01],avoidOverlap:[0,0,1,.01]},repulsion:{centralGravity:[.2,0,10,.05],springLength:[200,0,500,5],springConstant:[.05,0,1.2,.005],nodeDistance:[100,0,500,5],damping:[.09,0,1,.01]},hierarchicalRepulsion:{centralGravity:[.2,0,10,.05],springLength:[100,0,500,5],springConstant:[.01,0,1.2,.005],nodeDistance:[120,0,500,5],damping:[.09,0,1,.01]},maxVelocity:[50,0,150,1],minVelocity:[.1,.01,.5,.01],solver:["barnesHut","forceAtlas2Based","repulsion","hierarchicalRepulsion"],timestep:[.5,.01,1,.01]},global:{locale:["en","nl"]}}
e.allOptions=d,e.configureOptions=l},function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var s=function(){function t(t,e){var i=[],o=!0,n=!1,s=void 0
try{for(var r,a=t[Symbol.iterator]();!(o=(r=a.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(h){n=!0,s=h}finally{try{!o&&a["return"]&&a["return"]()}finally{if(n)throw s}}return i}return function(e,i){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return t(e,i)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=i(113),h=o(a),d=function(){function t(e,i,o){n(this,t),this.body=e,this.springLength=i,this.springConstant=o,this.distanceSolver=new h["default"]}return r(t,[{key:"setOptions",value:function(t){t&&(t.springLength&&(this.springLength=t.springLength),t.springConstant&&(this.springConstant=t.springConstant))}},{key:"solve",value:function(t,e){var i=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],o=this.distanceSolver.getDistances(this.body,t,e)
this._createL_matrix(o),this._createK_matrix(o)
for(var n=.01,r=1,a=0,h=Math.max(1e3,Math.min(10*this.body.nodeIndices.length,6e3)),d=5,l=1e9,u=0,c=0,p=0,f=0,m=0;l>n&&h>a;){a+=1
var g=this._getHighestEnergyNode(i),v=s(g,4)
for(u=v[0],l=v[1],c=v[2],p=v[3],f=l,m=0;f>r&&d>m;){m+=1,this._moveNode(u,c,p)
var y=this._getEnergy(u),b=s(y,3)
f=b[0],c=b[1],p=b[2]}}}},{key:"_getHighestEnergyNode",value:function(t){for(var e=this.body.nodeIndices,i=this.body.nodes,o=0,n=e[0],r=0,a=0,h=0;h<e.length;h++){var d=e[h]
if(i[d].predefinedPosition===!1||i[d].isCluster===!0&&t===!0||i[d].options.fixed.x===!0||i[d].options.fixed.y===!0){var l=this._getEnergy(d),u=s(l,3),c=u[0],p=u[1],f=u[2]
c>o&&(o=c,n=d,r=p,a=f)}}return[n,o,r,a]}},{key:"_getEnergy",value:function(t){for(var e=this.body.nodeIndices,i=this.body.nodes,o=i[t].x,n=i[t].y,s=0,r=0,a=0;a<e.length;a++){var h=e[a]
if(h!==t){var d=i[h].x,l=i[h].y,u=1/Math.sqrt(Math.pow(o-d,2)+Math.pow(n-l,2))
s+=this.K_matrix[t][h]*(o-d-this.L_matrix[t][h]*(o-d)*u),r+=this.K_matrix[t][h]*(n-l-this.L_matrix[t][h]*(n-l)*u)}}var c=Math.sqrt(Math.pow(s,2)+Math.pow(r,2))
return[c,s,r]}},{key:"_moveNode",value:function(t,e,i){for(var o=this.body.nodeIndices,n=this.body.nodes,s=0,r=0,a=0,h=n[t].x,d=n[t].y,l=0;l<o.length;l++){var u=o[l]
if(u!==t){var c=n[u].x,p=n[u].y,f=1/Math.pow(Math.pow(h-c,2)+Math.pow(d-p,2),1.5)
s+=this.K_matrix[t][u]*(1-this.L_matrix[t][u]*Math.pow(d-p,2)*f),r+=this.K_matrix[t][u]*(this.L_matrix[t][u]*(h-c)*(d-p)*f),a+=this.K_matrix[t][u]*(1-this.L_matrix[t][u]*Math.pow(h-c,2)*f)}}var m=s,g=r,v=e,y=a,b=i,_=(v/m+b/g)/(g/m-y/g),w=-(g*_+v)/m
n[t].x+=w,n[t].y+=_}},{key:"_createL_matrix",value:function(t){var e=this.body.nodeIndices,i=this.springLength
this.L_matrix=[]
for(var o=0;o<e.length;o++){this.L_matrix[e[o]]={}
for(var n=0;n<e.length;n++)this.L_matrix[e[o]][e[n]]=i*t[e[o]][e[n]]}}},{key:"_createK_matrix",value:function(t){var e=this.body.nodeIndices,i=this.springConstant
this.K_matrix=[]
for(var o=0;o<e.length;o++){this.K_matrix[e[o]]={}
for(var n=0;n<e.length;n++)this.K_matrix[e[o]][e[n]]=i*Math.pow(t[e[o]][e[n]],-2)}}}]),t}()
e["default"]=d,t.exports=e["default"]},function(t,e){"use strict"
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),n=function(){function t(){i(this,t)}return o(t,[{key:"getDistances",value:function(t,e,i){for(var o={},n=t.edges,s=0;s<e.length;s++){o[e[s]]={},o[e[s]]={}
for(var r=0;r<e.length;r++)o[e[s]][e[r]]=s==r?0:1e9,o[e[s]][e[r]]=s==r?0:1e9}for(var s=0;s<i.length;s++){var a=n[i[s]]
o[a.fromId][a.toId]=1,o[a.toId][a.fromId]=1}for(var h=e.length,d=0;h>d;d++)for(var s=0;h-1>s;s++)for(var r=s+1;h>r;r++)o[e[s]][e[r]]=Math.min(o[e[s]][e[r]],o[e[s]][e[d]]+o[e[d]][e[r]]),o[e[r]][e[s]]=o[e[s]][e[r]]
return o}}]),t}()
e["default"]=n,t.exports=e["default"]},function(t,e){"use strict"
"undefined"!=typeof CanvasRenderingContext2D&&(CanvasRenderingContext2D.prototype.circle=function(t,e,i){this.beginPath(),this.arc(t,e,i,0,2*Math.PI,!1),this.closePath()},CanvasRenderingContext2D.prototype.square=function(t,e,i){this.beginPath(),this.rect(t-i,e-i,2*i,2*i),this.closePath()},CanvasRenderingContext2D.prototype.triangle=function(t,e,i){this.beginPath(),i*=1.15,e+=.275*i
var o=2*i,n=o/2,s=Math.sqrt(3)/6*o,r=Math.sqrt(o*o-n*n)
this.moveTo(t,e-(r-s)),this.lineTo(t+n,e+s),this.lineTo(t-n,e+s),this.lineTo(t,e-(r-s)),this.closePath()},CanvasRenderingContext2D.prototype.triangleDown=function(t,e,i){this.beginPath(),i*=1.15,e-=.275*i
var o=2*i,n=o/2,s=Math.sqrt(3)/6*o,r=Math.sqrt(o*o-n*n)
this.moveTo(t,e+(r-s)),this.lineTo(t+n,e-s),this.lineTo(t-n,e-s),this.lineTo(t,e+(r-s)),this.closePath()},CanvasRenderingContext2D.prototype.star=function(t,e,i){this.beginPath(),i*=.82,e+=.1*i
for(var o=0;10>o;o++){var n=o%2===0?1.3*i:.5*i
this.lineTo(t+n*Math.sin(2*o*Math.PI/10),e-n*Math.cos(2*o*Math.PI/10))}this.closePath()},CanvasRenderingContext2D.prototype.diamond=function(t,e,i){this.beginPath(),this.lineTo(t,e+i),this.lineTo(t+i,e),this.lineTo(t,e-i),this.lineTo(t-i,e),this.closePath()},CanvasRenderingContext2D.prototype.roundRect=function(t,e,i,o,n){var s=Math.PI/180
0>i-2*n&&(n=i/2),0>o-2*n&&(n=o/2),this.beginPath(),this.moveTo(t+n,e),this.lineTo(t+i-n,e),this.arc(t+i-n,e+n,n,270*s,360*s,!1),this.lineTo(t+i,e+o-n),this.arc(t+i-n,e+o-n,n,0,90*s,!1),this.lineTo(t+n,e+o),this.arc(t+n,e+o-n,n,90*s,180*s,!1),this.lineTo(t,e+n),this.arc(t+n,e+n,n,180*s,270*s,!1),this.closePath()},CanvasRenderingContext2D.prototype.ellipse=function(t,e,i,o){var n=.5522848,s=i/2*n,r=o/2*n,a=t+i,h=e+o,d=t+i/2,l=e+o/2
this.beginPath(),this.moveTo(t,l),this.bezierCurveTo(t,l-r,d-s,e,d,e),this.bezierCurveTo(d+s,e,a,l-r,a,l),this.bezierCurveTo(a,l+r,d+s,h,d,h),this.bezierCurveTo(d-s,h,t,l+r,t,l),this.closePath()},CanvasRenderingContext2D.prototype.database=function(t,e,i,o){var n=1/3,s=i,r=o*n,a=.5522848,h=s/2*a,d=r/2*a,l=t+s,u=e+r,c=t+s/2,p=e+r/2,f=e+(o-r/2),m=e+o
this.beginPath(),this.moveTo(l,p),this.bezierCurveTo(l,p+d,c+h,u,c,u),this.bezierCurveTo(c-h,u,t,p+d,t,p),this.bezierCurveTo(t,p-d,c-h,e,c,e),this.bezierCurveTo(c+h,e,l,p-d,l,p),this.lineTo(l,f),this.bezierCurveTo(l,f+d,c+h,m,c,m),this.bezierCurveTo(c-h,m,t,f+d,t,f),this.lineTo(t,p)},CanvasRenderingContext2D.prototype.arrow=function(t,e,i,o){var n=t-o*Math.cos(i),s=e-o*Math.sin(i),r=t-.9*o*Math.cos(i),a=e-.9*o*Math.sin(i),h=n+o/3*Math.cos(i+.5*Math.PI),d=s+o/3*Math.sin(i+.5*Math.PI),l=n+o/3*Math.cos(i-.5*Math.PI),u=s+o/3*Math.sin(i-.5*Math.PI)
this.beginPath(),this.moveTo(t,e),this.lineTo(h,d),this.lineTo(r,a),this.lineTo(l,u),this.closePath()},CanvasRenderingContext2D.prototype.dashedLine=function(t,e,i,o,n){this.beginPath(),this.moveTo(t,e)
for(var s=n.length,r=i-t,a=o-e,h=a/r,d=Math.sqrt(r*r+a*a),l=0,u=!0,c=0,p=n[0];d>=.1;)p=n[l++%s],p>d&&(p=d),c=Math.sqrt(p*p/(1+h*h)),c=0>r?-c:c,t+=c,e+=h*c,u===!0?this.lineTo(t,e):this.moveTo(t,e),d-=p,u=!u})},function(t,e){"use strict"
function i(t){return P=t,p()}function o(){N=0,I=P.charAt(0)}function n(){N++,I=P.charAt(N)}function s(){return P.charAt(N+1)}function r(t){return L.test(t)}function a(t,e){if(t||(t={}),e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])
return t}function h(t,e,i){for(var o=e.split("."),n=t;o.length;){var s=o.shift()
o.length?(n[s]||(n[s]={}),n=n[s]):n[s]=i}}function d(t,e){for(var i,o,n=null,s=[t],r=t;r.parent;)s.push(r.parent),r=r.parent
if(r.nodes)for(i=0,o=r.nodes.length;o>i;i++)if(e.id===r.nodes[i].id){n=r.nodes[i]
break}for(n||(n={id:e.id},t.node&&(n.attr=a(n.attr,t.node))),i=s.length-1;i>=0;i--){var h=s[i]
h.nodes||(h.nodes=[]),-1===h.nodes.indexOf(n)&&h.nodes.push(n)}e.attr&&(n.attr=a(n.attr,e.attr))}function l(t,e){if(t.edges||(t.edges=[]),t.edges.push(e),t.edge){var i=a({},t.edge)
e.attr=a(i,e.attr)}}function u(t,e,i,o,n){var s={from:e,to:i,type:o}
return t.edge&&(s.attr=a({},t.edge)),s.attr=a(s.attr||{},n),s}function c(){for(j=S.NULL,A="";" "===I||"	"===I||"\n"===I||"\r"===I;)n()
do{var t=!1
if("#"===I){for(var e=N-1;" "===P.charAt(e)||"	"===P.charAt(e);)e--
if("\n"===P.charAt(e)||""===P.charAt(e)){for(;""!=I&&"\n"!=I;)n()
t=!0}}if("/"===I&&"/"===s()){for(;""!=I&&"\n"!=I;)n()
t=!0}if("/"===I&&"*"===s()){for(;""!=I;){if("*"===I&&"/"===s()){n(),n()
break}n()}t=!0}for(;" "===I||"	"===I||"\n"===I||"\r"===I;)n()}while(t)
if(""===I)return void(j=S.DELIMITER)
var i=I+s()
if(E[i])return j=S.DELIMITER,A=i,n(),void n()
if(E[I])return j=S.DELIMITER,A=I,void n()
if(r(I)||"-"===I){for(A+=I,n();r(I);)A+=I,n()
return"false"===A?A=!1:"true"===A?A=!0:isNaN(Number(A))||(A=Number(A)),void(j=S.IDENTIFIER)}if('"'===I){for(n();""!=I&&('"'!=I||'"'===I&&'"'===s());)A+=I,'"'===I&&n(),n()
if('"'!=I)throw w('End of string " expected')
return n(),void(j=S.IDENTIFIER)}for(j=S.UNKNOWN;""!=I;)A+=I,n()
throw new SyntaxError('Syntax error in part "'+x(A,30)+'"')}function p(){var t={}
if(o(),c(),"strict"===A&&(t.strict=!0,c()),"graph"!==A&&"digraph"!==A||(t.type=A,c()),j===S.IDENTIFIER&&(t.id=A,c()),"{"!=A)throw w("Angle bracket { expected")
if(c(),f(t),"}"!=A)throw w("Angle bracket } expected")
if(c(),""!==A)throw w("End of file expected")
return c(),delete t.node,delete t.edge,delete t.graph,t}function f(t){for(;""!==A&&"}"!=A;)m(t),";"===A&&c()}function m(t){var e=g(t)
if(e)return void b(t,e)
var i=v(t)
if(!i){if(j!=S.IDENTIFIER)throw w("Identifier expected")
var o=A
if(c(),"="===A){if(c(),j!=S.IDENTIFIER)throw w("Identifier expected")
t[o]=A,c()}else y(t,o)}}function g(t){var e=null
if("subgraph"===A&&(e={},e.type="subgraph",c(),j===S.IDENTIFIER&&(e.id=A,c())),"{"===A){if(c(),e||(e={}),e.parent=t,e.node=t.node,e.edge=t.edge,e.graph=t.graph,f(e),"}"!=A)throw w("Angle bracket } expected")
c(),delete e.node,delete e.edge,delete e.graph,delete e.parent,t.subgraphs||(t.subgraphs=[]),t.subgraphs.push(e)}return e}function v(t){return"node"===A?(c(),t.node=_(),"node"):"edge"===A?(c(),t.edge=_(),"edge"):"graph"===A?(c(),t.graph=_(),"graph"):null}function y(t,e){var i={id:e},o=_()
o&&(i.attr=o),d(t,i),b(t,e)}function b(t,e){for(;"->"===A||"--"===A;){var i,o=A
c()
var n=g(t)
if(n)i=n
else{if(j!=S.IDENTIFIER)throw w("Identifier or subgraph expected")
i=A,d(t,{id:i}),c()}var s=_(),r=u(t,e,i,o,s)
l(t,r),e=i}}function _(){for(var t=null;"["===A;){for(c(),t={};""!==A&&"]"!=A;){if(j!=S.IDENTIFIER)throw w("Attribute name expected")
var e=A
if(c(),"="!=A)throw w("Equal sign = expected")
if(c(),j!=S.IDENTIFIER)throw w("Attribute value expected")
var i=A
h(t,e,i),c(),","==A&&c()}if("]"!=A)throw w("Bracket ] expected")
c()}return t}function w(t){return new SyntaxError(t+', got "'+x(A,30)+'" (char '+N+")")}function x(t,e){return t.length<=e?t:t.substr(0,27)+"..."}function k(t,e,i){Array.isArray(t)?t.forEach(function(t){Array.isArray(e)?e.forEach(function(e){i(t,e)}):i(t,e)}):Array.isArray(e)?e.forEach(function(e){i(t,e)}):i(t,e)}function T(t,e,i){for(var o=e.split("."),n=o.pop(),s=t,r=0;r<o.length;r++){var a=o[r]
a in s||(s[a]={}),s=s[a]}return s[n]=i,t}function D(t,e){var i={}
for(var o in t)if(t.hasOwnProperty(o)){var n=e[o]
Array.isArray(n)?n.forEach(function(e){T(i,e,t[o])}):"string"==typeof n?T(i,n,t[o]):T(i,o,t[o])}return i}function O(t){var e=i(t),o={nodes:[],edges:[],options:{}}
if(e.nodes&&e.nodes.forEach(function(t){var e={id:t.id,label:String(t.label||t.id)}
a(e,D(t.attr,C)),e.image&&(e.shape="image"),o.nodes.push(e)}),e.edges){var n=function(t){var e={from:t.from,to:t.to}
return a(e,D(t.attr,M)),e.arrows="->"===t.type?"to":void 0,e}
e.edges.forEach(function(t){var e,i
e=t.from instanceof Object?t.from.nodes:{id:t.from},i=t.to instanceof Object?t.to.nodes:{id:t.to},t.from instanceof Object&&t.from.edges&&t.from.edges.forEach(function(t){var e=n(t)
o.edges.push(e)}),k(e,i,function(e,i){var s=u(o,e.id,i.id,t.type,t.attr),r=n(s)
o.edges.push(r)}),t.to instanceof Object&&t.to.edges&&t.to.edges.forEach(function(t){var e=n(t)
o.edges.push(e)})})}return e.attr&&(o.options=e.attr),o}var C={fontsize:"font.size",fontcolor:"font.color",labelfontcolor:"font.color",fontname:"font.face",color:["color.border","color.background"],fillcolor:"color.background",tooltip:"title",labeltooltip:"title"},M=Object.create(C)
M.color="color.color"
var S={NULL:0,DELIMITER:1,IDENTIFIER:2,UNKNOWN:3},E={"{":!0,"}":!0,"[":!0,"]":!0,";":!0,"=":!0,",":!0,"->":!0,"--":!0},P="",N=0,I="",A="",j=S.NULL,L=/[a-zA-Z_0-9.:#]/
e.parseDOT=i,e.DOTToGraph=O},function(t,e){"use strict"
function i(t,e){var i=[],o=[],n={edges:{inheritColor:!1},nodes:{fixed:!1,parseColor:!1}}
void 0!==e&&(void 0!==e.fixed&&(n.nodes.fixed=e.fixed),void 0!==e.parseColor&&(n.nodes.parseColor=e.parseColor),void 0!==e.inheritColor&&(n.edges.inheritColor=e.inheritColor))
for(var s=t.edges,r=t.nodes,a=0;a<s.length;a++){var h={},d=s[a]
h.id=d.id,h.from=d.source,h.to=d.target,h.attributes=d.attributes,h.label=d.label,h.title=void 0!==d.attributes?d.attributes.title:void 0,"Directed"===d.type&&(h.arrows="to"),d.color&&n.inheritColor===!1&&(h.color=d.color),i.push(h)}for(var a=0;a<r.length;a++){var l={},u=r[a]
l.id=u.id,l.attributes=u.attributes,l.title=u.title,l.x=u.x,l.y=u.y,l.label=u.label,l.title=void 0!==u.attributes?u.attributes.title:void 0,n.nodes.parseColor===!0?l.color=u.color:l.color=void 0!==u.color?{background:u.color,border:u.color,highlight:{background:u.color,border:u.color},hover:{background:u.color,border:u.color}}:void 0,l.size=u.size,l.fixed=n.nodes.fixed&&void 0!==u.x&&void 0!==u.y,o.push(l)}return{nodes:o,edges:i}}e.parseGephi=i},function(t,e){"use strict"
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0})
var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),n=function(){function t(e){i(this,t),this.images={},this.imageBroken={},this.callback=e}return o(t,[{key:"_addImageToCache",value:function(t,e){0===e.width&&(document.body.appendChild(e),e.width=e.offsetWidth,e.height=e.offsetHeight,document.body.removeChild(e)),this.images[t]=e}},{key:"_tryloadBrokenUrl",value:function(t,e,i){var o=this
void 0!==t&&void 0!==e&&void 0!==i&&(i.onerror=function(){console.error("Could not load brokenImage:",e),o._addImageToCache(t,new Image)},i.src=e)}},{key:"_redrawWithImage",value:function(t){this.callback&&this.callback(t)}},{key:"load",value:function(t,e,i){var o=this,n=this.images[t]
if(n)return n
var s=new Image
return s.onload=function(){o._addImageToCache(t,s),o._redrawWithImage(s)},s.onerror=function(){console.error("Could not load image:",t),o._tryloadBrokenUrl(t,e,s)},s.src=t,s}}]),t}()
e["default"]=n,t.exports=e["default"]},function(t,e){"use strict"
e.en={edit:"Edit",del:"Delete selected",back:"Back",addNode:"Add Node",addEdge:"Add Edge",editNode:"Edit Node",editEdge:"Edit Edge",addDescription:"Click in an empty space to place a new node.",edgeDescription:"Click on a node and drag the edge to another node to connect them.",editEdgeDescription:"Click on the control points and drag them to a node to connect to it.",createEdgeError:"Cannot link edges to a cluster.",deleteClusterError:"Clusters cannot be deleted.",editClusterError:"Clusters cannot be edited."},e.en_EN=e.en,e.en_US=e.en,e.de={edit:"Editieren",del:"Lösche Auswahl",back:"Zurück",addNode:"Knoten hinzufügen",addEdge:"Kante hinzufügen",editNode:"Knoten editieren",editEdge:"Kante editieren",addDescription:"Klicke auf eine freie Stelle, um einen neuen Knoten zu plazieren.",edgeDescription:"Klicke auf einen Knoten und ziehe die Kante zu einem anderen Knoten, um diese zu verbinden.",editEdgeDescription:"Klicke auf die Verbindungspunkte und ziehe diese auf einen Knoten, um sie zu verbinden.",createEdgeError:"Es ist nicht möglich, Kanten mit Clustern zu verbinden.",deleteClusterError:"Cluster können nicht gelöscht werden.",editClusterError:"Cluster können nicht editiert werden."},e.de_DE=e.de,e.es={edit:"Editar",del:"Eliminar selección",back:"Átras",addNode:"Añadir nodo",addEdge:"Añadir arista",editNode:"Editar nodo",editEdge:"Editar arista",addDescription:"Haga clic en un lugar vacío para colocar un nuevo nodo.",edgeDescription:"Haga clic en un nodo y arrastre la arista hacia otro nodo para conectarlos.",editEdgeDescription:"Haga clic en un punto de control y arrastrelo a un nodo para conectarlo.",createEdgeError:"No se puede conectar una arista a un grupo.",deleteClusterError:"No es posible eliminar grupos.",editClusterError:"No es posible editar grupos."},e.es_ES=e.es,e.nl={edit:"Wijzigen",del:"Selectie verwijderen",back:"Terug",addNode:"Node toevoegen",addEdge:"Link toevoegen",editNode:"Node wijzigen",editEdge:"Link wijzigen",addDescription:"Klik op een leeg gebied om een nieuwe node te maken.",edgeDescription:"Klik op een node en sleep de link naar een andere node om ze te verbinden.",editEdgeDescription:"Klik op de verbindingspunten en sleep ze naar een node om daarmee te verbinden.",createEdgeError:"Kan geen link maken naar een cluster.",deleteClusterError:"Clusters kunnen niet worden verwijderd.",editClusterError:"Clusters kunnen niet worden aangepast."},e.nl_NL=e.nl,e.nl_BE=e.nl}])}),function(t){function e(t,e,i){switch(arguments.length){case 2:return null!=t?t:e
case 3:return null!=t?t:null!=e?e:i
default:throw new Error("Implement me")}}function i(t,e){return Dt.call(t,e)}function o(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function n(t){bt.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function s(t,e){var i=!0
return c(function(){return i&&(n(t),i=!1),e.apply(this,arguments)},e)}function r(t,e){ge[t]||(n(e),ge[t]=!0)}function a(t,e){return function(i){return m(t.call(this,i),e)}}function h(t,e){return function(i){return this.localeData().ordinal(t.call(this,i),e)}}function d(){}function l(t,e){e!==!1&&P(t),p(this,t),this._d=new Date(+t._d)}function u(t){var e=T(t),i=e.year||0,o=e.quarter||0,n=e.month||0,s=e.week||0,r=e.day||0,a=e.hour||0,h=e.minute||0,d=e.second||0,l=e.millisecond||0
this._milliseconds=+l+1e3*d+6e4*h+36e5*a,this._days=+r+7*s,this._months=+n+3*o+12*i,this._data={},this._locale=bt.localeData(),this._bubble()}function c(t,e){for(var o in e)i(e,o)&&(t[o]=e[o])
return i(e,"toString")&&(t.toString=e.toString),i(e,"valueOf")&&(t.valueOf=e.valueOf),t}function p(t,e){var i,o,n
if("undefined"!=typeof e._isAMomentObject&&(t._isAMomentObject=e._isAMomentObject),"undefined"!=typeof e._i&&(t._i=e._i),"undefined"!=typeof e._f&&(t._f=e._f),"undefined"!=typeof e._l&&(t._l=e._l),"undefined"!=typeof e._strict&&(t._strict=e._strict),"undefined"!=typeof e._tzm&&(t._tzm=e._tzm),"undefined"!=typeof e._isUTC&&(t._isUTC=e._isUTC),"undefined"!=typeof e._offset&&(t._offset=e._offset),"undefined"!=typeof e._pf&&(t._pf=e._pf),"undefined"!=typeof e._locale&&(t._locale=e._locale),At.length>0)for(i in At)o=At[i],n=e[o],"undefined"!=typeof n&&(t[o]=n)
return t}function f(t){return 0>t?Math.ceil(t):Math.floor(t)}function m(t,e,i){for(var o=""+Math.abs(t),n=t>=0;o.length<e;)o="0"+o
return(n?i?"+":"":"-")+o}function g(t,e){var i={milliseconds:0,months:0}
return i.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(i.months,"M").isAfter(e)&&--i.months,i.milliseconds=+e-+t.clone().add(i.months,"M"),i}function v(t,e){var i
return e=L(e,t),t.isBefore(e)?i=g(t,e):(i=g(e,t),i.milliseconds=-i.milliseconds,i.months=-i.months),i}function y(t,e){return function(i,o){var n,s
return null===o||isNaN(+o)||(r(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period)."),s=i,i=o,o=s),i="string"==typeof i?+i:i,n=bt.duration(i,o),b(this,n,t),this}}function b(t,e,i,o){var n=e._milliseconds,s=e._days,r=e._months
o=null==o?!0:o,n&&t._d.setTime(+t._d+n*i),s&&pt(t,"Date",ct(t,"Date")+s*i),r&&ut(t,ct(t,"Month")+r*i),o&&bt.updateOffset(t,s||r)}function _(t){return"[object Array]"===Object.prototype.toString.call(t)}function w(t){return"[object Date]"===Object.prototype.toString.call(t)||t instanceof Date}function x(t,e,i){var o,n=Math.min(t.length,e.length),s=Math.abs(t.length-e.length),r=0
for(o=0;n>o;o++)(i&&t[o]!==e[o]||!i&&O(t[o])!==O(e[o]))&&r++
return r+s}function k(t){if(t){var e=t.toLowerCase().replace(/(.)s$/,"$1")
t=de[t]||le[e]||e}return t}function T(t){var e,o,n={}
for(o in t)i(t,o)&&(e=k(o),e&&(n[e]=t[o]))
return n}function D(e){var i,o
if(0===e.indexOf("week"))i=7,o="day"
else{if(0!==e.indexOf("month"))return
i=12,o="month"}bt[e]=function(n,s){var r,a,h=bt._locale[e],d=[]
if("number"==typeof n&&(s=n,n=t),a=function(t){var e=bt().utc().set(o,t)
return h.call(bt._locale,e,n||"")},null!=s)return a(s)
for(r=0;i>r;r++)d.push(a(r))
return d}}function O(t){var e=+t,i=0
return 0!==e&&isFinite(e)&&(i=e>=0?Math.floor(e):Math.ceil(e)),i}function C(t,e){return new Date(Date.UTC(t,e+1,0)).getUTCDate()}function M(t,e,i){return at(bt([t,11,31+e-i]),e,i).week}function S(t){return E(t)?366:365}function E(t){return t%4===0&&t%100!==0||t%400===0}function P(t){var e
t._a&&-2===t._pf.overflow&&(e=t._a[Ct]<0||t._a[Ct]>11?Ct:t._a[Mt]<1||t._a[Mt]>C(t._a[Ot],t._a[Ct])?Mt:t._a[St]<0||t._a[St]>24||24===t._a[St]&&(0!==t._a[Et]||0!==t._a[Pt]||0!==t._a[Nt])?St:t._a[Et]<0||t._a[Et]>59?Et:t._a[Pt]<0||t._a[Pt]>59?Pt:t._a[Nt]<0||t._a[Nt]>999?Nt:-1,t._pf._overflowDayOfYear&&(Ot>e||e>Mt)&&(e=Mt),t._pf.overflow=e)}function N(e){return null==e._isValid&&(e._isValid=!isNaN(e._d.getTime())&&e._pf.overflow<0&&!e._pf.empty&&!e._pf.invalidMonth&&!e._pf.nullInput&&!e._pf.invalidFormat&&!e._pf.userInvalidated,e._strict&&(e._isValid=e._isValid&&0===e._pf.charsLeftOver&&0===e._pf.unusedTokens.length&&e._pf.bigHour===t)),e._isValid}function I(t){return t?t.toLowerCase().replace("_","-"):t}function A(t){for(var e,i,o,n,s=0;s<t.length;){for(n=I(t[s]).split("-"),e=n.length,i=I(t[s+1]),i=i?i.split("-"):null;e>0;){if(o=j(n.slice(0,e).join("-")))return o
if(i&&i.length>=e&&x(n,i,!0)>=e-1)break
e--}s++}return null}function j(t){var e=null
if(!It[t]&&jt)try{e=bt.locale(),require("./locale/"+t),bt.locale(e)}catch(i){}return It[t]}function L(t,e){var i,o
return e._isUTC?(i=e.clone(),o=(bt.isMoment(t)||w(t)?+t:+bt(t))-+i,i._d.setTime(+i._d+o),bt.updateOffset(i,!1),i):bt(t).local()}function z(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function R(t){var e,i,o=t.match(Ft)
for(e=0,i=o.length;i>e;e++)o[e]=me[o[e]]?me[o[e]]:z(o[e])
return function(n){var s=""
for(e=0;i>e;e++)s+=o[e]instanceof Function?o[e].call(n,t):o[e]
return s}}function F(t,e){return t.isValid()?(e=B(e,t.localeData()),ue[e]||(ue[e]=R(e)),ue[e](t)):t.localeData().invalidDate()}function B(t,e){function i(t){return e.longDateFormat(t)||t}var o=5
for(Bt.lastIndex=0;o>=0&&Bt.test(t);)t=t.replace(Bt,i),Bt.lastIndex=0,o-=1
return t}function H(t,e){var i,o=e._strict
switch(t){case"Q":return Kt
case"DDDD":return Jt
case"YYYY":case"GGGG":case"gggg":return o?te:Wt
case"Y":case"G":case"g":return ie
case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return o?ee:Gt
case"S":if(o)return Kt
case"SS":if(o)return Qt
case"SSS":if(o)return Jt
case"DDD":return Yt
case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return qt
case"a":case"A":return e._locale._meridiemParse
case"x":return Xt
case"X":return Zt
case"Z":case"ZZ":return $t
case"T":return Vt
case"SSSS":return Ut
case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return o?Qt:Ht
case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Ht
case"Do":return o?e._locale._ordinalParse:e._locale._ordinalParseLenient
default:return i=new RegExp(Z(X(t.replace("\\","")),"i"))}}function Y(t){t=t||""
var e=t.match($t)||[],i=e[e.length-1]||[],o=(i+"").match(ae)||["-",0,0],n=+(60*o[1])+O(o[2])
return"+"===o[0]?-n:n}function W(t,e,i){var o,n=i._a
switch(t){case"Q":null!=e&&(n[Ct]=3*(O(e)-1))
break
case"M":case"MM":null!=e&&(n[Ct]=O(e)-1)
break
case"MMM":case"MMMM":o=i._locale.monthsParse(e,t,i._strict),null!=o?n[Ct]=o:i._pf.invalidMonth=e
break
case"D":case"DD":null!=e&&(n[Mt]=O(e))
break
case"Do":null!=e&&(n[Mt]=O(parseInt(e.match(/\d{1,2}/)[0],10)))
break
case"DDD":case"DDDD":null!=e&&(i._dayOfYear=O(e))
break
case"YY":n[Ot]=bt.parseTwoDigitYear(e)
break
case"YYYY":case"YYYYY":case"YYYYYY":n[Ot]=O(e)
break
case"a":case"A":i._isPm=i._locale.isPM(e)
break
case"h":case"hh":i._pf.bigHour=!0
case"H":case"HH":n[St]=O(e)
break
case"m":case"mm":n[Et]=O(e)
break
case"s":case"ss":n[Pt]=O(e)
break
case"S":case"SS":case"SSS":case"SSSS":n[Nt]=O(1e3*("0."+e))
break
case"x":i._d=new Date(O(e))
break
case"X":i._d=new Date(1e3*parseFloat(e))
break
case"Z":case"ZZ":i._useUTC=!0,i._tzm=Y(e)
break
case"dd":case"ddd":case"dddd":o=i._locale.weekdaysParse(e),null!=o?(i._w=i._w||{},i._w.d=o):i._pf.invalidWeekday=e
break
case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":t=t.substr(0,1)
case"gggg":case"GGGG":case"GGGGG":t=t.substr(0,2),e&&(i._w=i._w||{},i._w[t]=O(e))
break
case"gg":case"GG":i._w=i._w||{},i._w[t]=bt.parseTwoDigitYear(e)}}function G(t){var i,o,n,s,r,a,h
i=t._w,null!=i.GG||null!=i.W||null!=i.E?(r=1,a=4,o=e(i.GG,t._a[Ot],at(bt(),1,4).year),n=e(i.W,1),s=e(i.E,1)):(r=t._locale._week.dow,a=t._locale._week.doy,o=e(i.gg,t._a[Ot],at(bt(),r,a).year),n=e(i.w,1),null!=i.d?(s=i.d,r>s&&++n):s=null!=i.e?i.e+r:r),h=ht(o,n,s,a,r),t._a[Ot]=h.year,t._dayOfYear=h.dayOfYear}function U(t){var i,o,n,s,r=[]
if(!t._d){for(n=$(t),t._w&&null==t._a[Mt]&&null==t._a[Ct]&&G(t),t._dayOfYear&&(s=e(t._a[Ot],n[Ot]),t._dayOfYear>S(s)&&(t._pf._overflowDayOfYear=!0),o=ot(s,0,t._dayOfYear),t._a[Ct]=o.getUTCMonth(),t._a[Mt]=o.getUTCDate()),i=0;3>i&&null==t._a[i];++i)t._a[i]=r[i]=n[i]
for(;7>i;i++)t._a[i]=r[i]=null==t._a[i]?2===i?1:0:t._a[i]
24===t._a[St]&&0===t._a[Et]&&0===t._a[Pt]&&0===t._a[Nt]&&(t._nextDay=!0,t._a[St]=0),t._d=(t._useUTC?ot:it).apply(null,r),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()+t._tzm),t._nextDay&&(t._a[St]=24)}}function q(t){var e
t._d||(e=T(t._i),t._a=[e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],U(t))}function $(t){var e=new Date
return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function V(e){if(e._f===bt.ISO_8601)return void Q(e)
e._a=[],e._pf.empty=!0
var i,o,n,s,r,a=""+e._i,h=a.length,d=0
for(n=B(e._f,e._locale).match(Ft)||[],i=0;i<n.length;i++)s=n[i],o=(a.match(H(s,e))||[])[0],o&&(r=a.substr(0,a.indexOf(o)),r.length>0&&e._pf.unusedInput.push(r),a=a.slice(a.indexOf(o)+o.length),d+=o.length),me[s]?(o?e._pf.empty=!1:e._pf.unusedTokens.push(s),W(s,o,e)):e._strict&&!o&&e._pf.unusedTokens.push(s)
e._pf.charsLeftOver=h-d,a.length>0&&e._pf.unusedInput.push(a),e._pf.bigHour===!0&&e._a[St]<=12&&(e._pf.bigHour=t),e._isPm&&e._a[St]<12&&(e._a[St]+=12),e._isPm===!1&&12===e._a[St]&&(e._a[St]=0),U(e),P(e)}function X(t){return t.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,i,o,n){return e||i||o||n})}function Z(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function K(t){var e,i,n,s,r
if(0===t._f.length)return t._pf.invalidFormat=!0,void(t._d=new Date(NaN))
for(s=0;s<t._f.length;s++)r=0,e=p({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._pf=o(),e._f=t._f[s],V(e),N(e)&&(r+=e._pf.charsLeftOver,r+=10*e._pf.unusedTokens.length,e._pf.score=r,(null==n||n>r)&&(n=r,i=e))
c(t,i||e)}function Q(t){var e,i,o=t._i,n=oe.exec(o)
if(n){for(t._pf.iso=!0,e=0,i=se.length;i>e;e++)if(se[e][1].exec(o)){t._f=se[e][0]+(n[6]||" ")
break}for(e=0,i=re.length;i>e;e++)if(re[e][1].exec(o)){t._f+=re[e][0]
break}o.match($t)&&(t._f+="Z"),V(t)}else t._isValid=!1}function J(t){Q(t),t._isValid===!1&&(delete t._isValid,bt.createFromInputFallback(t))}function tt(t,e){var i,o=[]
for(i=0;i<t.length;++i)o.push(e(t[i],i))
return o}function et(e){var i,o=e._i
o===t?e._d=new Date:w(o)?e._d=new Date(+o):null!==(i=Lt.exec(o))?e._d=new Date(+i[1]):"string"==typeof o?J(e):_(o)?(e._a=tt(o.slice(0),function(t){return parseInt(t,10)}),U(e)):"object"==typeof o?q(e):"number"==typeof o?e._d=new Date(o):bt.createFromInputFallback(e)}function it(t,e,i,o,n,s,r){var a=new Date(t,e,i,o,n,s,r)
return 1970>t&&a.setFullYear(t),a}function ot(t){var e=new Date(Date.UTC.apply(null,arguments))
return 1970>t&&e.setUTCFullYear(t),e}function nt(t,e){if("string"==typeof t)if(isNaN(t)){if(t=e.weekdaysParse(t),"number"!=typeof t)return null}else t=parseInt(t,10)
return t}function st(t,e,i,o,n){return n.relativeTime(e||1,!!i,t,o)}function rt(t,e,i){var o=bt.duration(t).abs(),n=Tt(o.as("s")),s=Tt(o.as("m")),r=Tt(o.as("h")),a=Tt(o.as("d")),h=Tt(o.as("M")),d=Tt(o.as("y")),l=n<ce.s&&["s",n]||1===s&&["m"]||s<ce.m&&["mm",s]||1===r&&["h"]||r<ce.h&&["hh",r]||1===a&&["d"]||a<ce.d&&["dd",a]||1===h&&["M"]||h<ce.M&&["MM",h]||1===d&&["y"]||["yy",d]
return l[2]=e,l[3]=+t>0,l[4]=i,st.apply({},l)}function at(t,e,i){var o,n=i-e,s=i-t.day()
return s>n&&(s-=7),n-7>s&&(s+=7),o=bt(t).add(s,"d"),{week:Math.ceil(o.dayOfYear()/7),year:o.year()}}function ht(t,e,i,o,n){var s,r,a=ot(t,0,1).getUTCDay()
return a=0===a?7:a,i=null!=i?i:n,s=n-a+(a>o?7:0)-(n>a?7:0),r=7*(e-1)+(i-n)+s+1,{year:r>0?t:t-1,dayOfYear:r>0?r:S(t-1)+r}}function dt(e){var i,o=e._i,n=e._f
return e._locale=e._locale||bt.localeData(e._l),null===o||n===t&&""===o?bt.invalid({nullInput:!0}):("string"==typeof o&&(e._i=o=e._locale.preparse(o)),bt.isMoment(o)?new l(o,!0):(n?_(n)?K(e):V(e):et(e),i=new l(e),i._nextDay&&(i.add(1,"d"),i._nextDay=t),i))}function lt(t,e){var i,o
if(1===e.length&&_(e[0])&&(e=e[0]),!e.length)return bt()
for(i=e[0],o=1;o<e.length;++o)e[o][t](i)&&(i=e[o])
return i}function ut(t,e){var i
return"string"==typeof e&&(e=t.localeData().monthsParse(e),"number"!=typeof e)?t:(i=Math.min(t.date(),C(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,i),t)}function ct(t,e){return t._d["get"+(t._isUTC?"UTC":"")+e]()}function pt(t,e,i){return"Month"===e?ut(t,i):t._d["set"+(t._isUTC?"UTC":"")+e](i)}function ft(t,e){return function(i){return null!=i?(pt(this,t,i),bt.updateOffset(this,e),this):ct(this,t)}}function mt(t){return 400*t/146097}function gt(t){return 146097*t/400}function vt(t){bt.duration.fn[t]=function(){return this._data[t]}}function yt(t){"undefined"==typeof ender&&(_t=kt.moment,kt.moment=t?s("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",bt):bt)}for(var bt,_t,wt,xt="2.8.4",kt="undefined"!=typeof global?global:this,Tt=Math.round,Dt=Object.prototype.hasOwnProperty,Ot=0,Ct=1,Mt=2,St=3,Et=4,Pt=5,Nt=6,It={},At=[],jt="undefined"!=typeof module&&module&&module.exports,Lt=/^\/?Date\((\-?\d+)/i,zt=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Rt=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Ft=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Bt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ht=/\d\d?/,Yt=/\d{1,3}/,Wt=/\d{1,4}/,Gt=/[+\-]?\d{1,6}/,Ut=/\d+/,qt=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,$t=/Z|[\+\-]\d\d:?\d\d/gi,Vt=/T/i,Xt=/[\+\-]?\d+/,Zt=/[\+\-]?\d+(\.\d{1,3})?/,Kt=/\d/,Qt=/\d\d/,Jt=/\d{3}/,te=/\d{4}/,ee=/[+-]?\d{6}/,ie=/[+-]?\d+/,oe=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ne="YYYY-MM-DDTHH:mm:ssZ",se=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],re=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],ae=/([\+\-]|\d\d)/gi,he=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),de={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},le={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},ue={},ce={s:45,m:45,h:22,d:26,M:11},pe="DDD w W M D d".split(" "),fe="M D H h m s w W".split(" "),me={M:function(){return this.month()+1},MMM:function(t){return this.localeData().monthsShort(this,t)},MMMM:function(t){return this.localeData().months(this,t)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(t){return this.localeData().weekdaysMin(this,t)},ddd:function(t){return this.localeData().weekdaysShort(this,t)},dddd:function(t){return this.localeData().weekdays(this,t)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return m(this.year()%100,2)},YYYY:function(){return m(this.year(),4)},YYYYY:function(){return m(this.year(),5)},YYYYYY:function(){var t=this.year(),e=t>=0?"+":"-"
return e+m(Math.abs(t),6)},gg:function(){return m(this.weekYear()%100,2)},gggg:function(){return m(this.weekYear(),4)},ggggg:function(){return m(this.weekYear(),5)},GG:function(){return m(this.isoWeekYear()%100,2)},GGGG:function(){return m(this.isoWeekYear(),4)},GGGGG:function(){return m(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return O(this.milliseconds()/100)},SS:function(){return m(O(this.milliseconds()/10),2)},SSS:function(){return m(this.milliseconds(),3)},SSSS:function(){return m(this.milliseconds(),3)},Z:function(){var t=-this.zone(),e="+"
return 0>t&&(t=-t,e="-"),e+m(O(t/60),2)+":"+m(O(t)%60,2)},ZZ:function(){var t=-this.zone(),e="+"
return 0>t&&(t=-t,e="-"),e+m(O(t/60),2)+m(O(t)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},x:function(){return this.valueOf()},X:function(){return this.unix()},Q:function(){return this.quarter()}},ge={},ve=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];pe.length;)wt=pe.pop(),me[wt+"o"]=h(me[wt],wt)
for(;fe.length;)wt=fe.pop(),me[wt+wt]=a(me[wt],2)
me.DDDD=a(me.DDD,3),c(d.prototype,{set:function(t){var e,i
for(i in t)e=t[i],"function"==typeof e?this[i]=e:this["_"+i]=e
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(t){return this._months[t.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(t){return this._monthsShort[t.month()]},monthsParse:function(t,e,i){var o,n,s
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),o=0;12>o;o++){if(n=bt.utc([2e3,o]),i&&!this._longMonthsParse[o]&&(this._longMonthsParse[o]=new RegExp("^"+this.months(n,"").replace(".","")+"$","i"),this._shortMonthsParse[o]=new RegExp("^"+this.monthsShort(n,"").replace(".","")+"$","i")),i||this._monthsParse[o]||(s="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[o]=new RegExp(s.replace(".",""),"i")),i&&"MMMM"===e&&this._longMonthsParse[o].test(t))return o
if(i&&"MMM"===e&&this._shortMonthsParse[o].test(t))return o
if(!i&&this._monthsParse[o].test(t))return o}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(t){return this._weekdays[t.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(t){return this._weekdaysShort[t.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(t){return this._weekdaysMin[t.day()]},weekdaysParse:function(t){var e,i,o
for(this._weekdaysParse||(this._weekdaysParse=[]),e=0;7>e;e++)if(this._weekdaysParse[e]||(i=bt([2e3,1]).day(e),o="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[e]=new RegExp(o.replace(".",""),"i")),this._weekdaysParse[e].test(t))return e},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(t){var e=this._longDateFormat[t]
return!e&&this._longDateFormat[t.toUpperCase()]&&(e=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t]=e),e},isPM:function(t){return"p"===(t+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(t,e,i){return t>11?i?"pm":"PM":i?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(t,e,i){var o=this._calendar[t]
return"function"==typeof o?o.apply(e,[i]):o},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(t,e,i,o){var n=this._relativeTime[i]
return"function"==typeof n?n(t,e,i,o):n.replace(/%d/i,t)},pastFuture:function(t,e){var i=this._relativeTime[t>0?"future":"past"]
return"function"==typeof i?i(e):i.replace(/%s/i,e)},ordinal:function(t){return this._ordinal.replace("%d",t)},_ordinal:"%d",_ordinalParse:/\d{1,2}/,preparse:function(t){return t},postformat:function(t){return t},week:function(t){return at(t,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),bt=function(e,i,n,s){var r
return"boolean"==typeof n&&(s=n,n=t),r={},r._isAMomentObject=!0,r._i=e,r._f=i,r._l=n,r._strict=s,r._isUTC=!1,r._pf=o(),dt(r)},bt.suppressDeprecationWarnings=!1,bt.createFromInputFallback=s("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),bt.min=function(){var t=[].slice.call(arguments,0)
return lt("isBefore",t)},bt.max=function(){var t=[].slice.call(arguments,0)
return lt("isAfter",t)},bt.utc=function(e,i,n,s){var r
return"boolean"==typeof n&&(s=n,n=t),r={},r._isAMomentObject=!0,r._useUTC=!0,r._isUTC=!0,r._l=n,r._i=e,r._f=i,r._strict=s,r._pf=o(),dt(r).utc()},bt.unix=function(t){return bt(1e3*t)},bt.duration=function(t,e){var o,n,s,r,a=t,h=null
return bt.isDuration(t)?a={ms:t._milliseconds,d:t._days,M:t._months}:"number"==typeof t?(a={},e?a[e]=t:a.milliseconds=t):(h=zt.exec(t))?(o="-"===h[1]?-1:1,a={y:0,d:O(h[Mt])*o,h:O(h[St])*o,m:O(h[Et])*o,s:O(h[Pt])*o,ms:O(h[Nt])*o}):(h=Rt.exec(t))?(o="-"===h[1]?-1:1,s=function(t){var e=t&&parseFloat(t.replace(",","."))
return(isNaN(e)?0:e)*o},a={y:s(h[2]),M:s(h[3]),d:s(h[4]),h:s(h[5]),m:s(h[6]),s:s(h[7]),w:s(h[8])}):"object"==typeof a&&("from"in a||"to"in a)&&(r=v(bt(a.from),bt(a.to)),a={},a.ms=r.milliseconds,a.M=r.months),n=new u(a),bt.isDuration(t)&&i(t,"_locale")&&(n._locale=t._locale),n},bt.version=xt,bt.defaultFormat=ne,bt.ISO_8601=function(){},bt.momentProperties=At,bt.updateOffset=function(){},bt.relativeTimeThreshold=function(e,i){return ce[e]===t?!1:i===t?ce[e]:(ce[e]=i,!0)},bt.lang=s("moment.lang is deprecated. Use moment.locale instead.",function(t,e){return bt.locale(t,e)}),bt.locale=function(t,e){var i
return t&&(i="undefined"!=typeof e?bt.defineLocale(t,e):bt.localeData(t),i&&(bt.duration._locale=bt._locale=i)),bt._locale._abbr},bt.defineLocale=function(t,e){return null!==e?(e.abbr=t,It[t]||(It[t]=new d),It[t].set(e),bt.locale(t),It[t]):(delete It[t],null)},bt.langData=s("moment.langData is deprecated. Use moment.localeData instead.",function(t){return bt.localeData(t)}),bt.localeData=function(t){var e
if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return bt._locale
if(!_(t)){if(e=j(t))return e
t=[t]}return A(t)},bt.isMoment=function(t){return t instanceof l||null!=t&&i(t,"_isAMomentObject")},bt.isDuration=function(t){return t instanceof u}
for(wt=ve.length-1;wt>=0;--wt)D(ve[wt])
bt.normalizeUnits=function(t){return k(t)},bt.invalid=function(t){var e=bt.utc(NaN)
return null!=t?c(e._pf,t):e._pf.userInvalidated=!0,e},bt.parseZone=function(){return bt.apply(null,arguments).parseZone()},bt.parseTwoDigitYear=function(t){return O(t)+(O(t)>68?1900:2e3)},c(bt.fn=l.prototype,{clone:function(){return bt(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var t=bt(this).utc()
return 0<t.year()&&t.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():F(t,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):F(t,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var t=this
return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds()]},isValid:function(){return N(this)},isDSTShifted:function(){return this._a?this.isValid()&&x(this._a,(this._isUTC?bt.utc(this._a):bt(this._a)).toArray())>0:!1},parsingFlags:function(){return c({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(t){return this.zone(0,t)},local:function(t){return this._isUTC&&(this.zone(0,t),this._isUTC=!1,t&&this.add(this._dateTzOffset(),"m")),this},format:function(t){var e=F(this,t||bt.defaultFormat)
return this.localeData().postformat(e)},add:y(1,"add"),subtract:y(-1,"subtract"),diff:function(t,e,i){var o,n,s,r=L(t,this),a=6e4*(this.zone()-r.zone())
return e=k(e),"year"===e||"month"===e?(o=432e5*(this.daysInMonth()+r.daysInMonth()),n=12*(this.year()-r.year())+(this.month()-r.month()),s=this-bt(this).startOf("month")-(r-bt(r).startOf("month")),s-=6e4*(this.zone()-bt(this).startOf("month").zone()-(r.zone()-bt(r).startOf("month").zone())),n+=s/o,"year"===e&&(n/=12)):(o=this-r,n="second"===e?o/1e3:"minute"===e?o/6e4:"hour"===e?o/36e5:"day"===e?(o-a)/864e5:"week"===e?(o-a)/6048e5:o),i?n:f(n)},from:function(t,e){return bt.duration({to:this,from:t}).locale(this.locale()).humanize(!e)},fromNow:function(t){return this.from(bt(),t)},calendar:function(t){var e=t||bt(),i=L(e,this).startOf("day"),o=this.diff(i,"days",!0),n=-6>o?"sameElse":-1>o?"lastWeek":0>o?"lastDay":1>o?"sameDay":2>o?"nextDay":7>o?"nextWeek":"sameElse"
return this.format(this.localeData().calendar(n,this,bt(e)))},isLeapYear:function(){return E(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(t){var e=this._isUTC?this._d.getUTCDay():this._d.getDay()
return null!=t?(t=nt(t,this.localeData()),this.add(t-e,"d")):e},month:ft("Month",!0),startOf:function(t){switch(t=k(t)){case"year":this.month(0)
case"quarter":case"month":this.date(1)
case"week":case"isoWeek":case"day":this.hours(0)
case"hour":this.minutes(0)
case"minute":this.seconds(0)
case"second":this.milliseconds(0)}return"week"===t?this.weekday(0):"isoWeek"===t&&this.isoWeekday(1),"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(e){return e=k(e),e===t||"millisecond"===e?this:this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms")},isAfter:function(t,e){var i
return e=k("undefined"!=typeof e?e:"millisecond"),"millisecond"===e?(t=bt.isMoment(t)?t:bt(t),+this>+t):(i=bt.isMoment(t)?+t:+bt(t),i<+this.clone().startOf(e))},isBefore:function(t,e){var i
return e=k("undefined"!=typeof e?e:"millisecond"),"millisecond"===e?(t=bt.isMoment(t)?t:bt(t),+t>+this):(i=bt.isMoment(t)?+t:+bt(t),+this.clone().endOf(e)<i)},isSame:function(t,e){var i
return e=k(e||"millisecond"),"millisecond"===e?(t=bt.isMoment(t)?t:bt(t),+this===+t):(i=+bt(t),+this.clone().startOf(e)<=i&&i<=+this.clone().endOf(e))},min:s("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(t){return t=bt.apply(null,arguments),this>t?this:t}),max:s("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(t){return t=bt.apply(null,arguments),t>this?this:t}),zone:function(t,e){var i,o=this._offset||0
return null==t?this._isUTC?o:this._dateTzOffset():("string"==typeof t&&(t=Y(t)),Math.abs(t)<16&&(t=60*t),!this._isUTC&&e&&(i=this._dateTzOffset()),this._offset=t,this._isUTC=!0,null!=i&&this.subtract(i,"m"),o!==t&&(!e||this._changeInProgress?b(this,bt.duration(o-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,bt.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(t){return t=t?bt(t).zone():0,(this.zone()-t)%60===0},daysInMonth:function(){return C(this.year(),this.month())},dayOfYear:function(t){var e=Tt((bt(this).startOf("day")-bt(this).startOf("year"))/864e5)+1
return null==t?e:this.add(t-e,"d")},quarter:function(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)},weekYear:function(t){var e=at(this,this.localeData()._week.dow,this.localeData()._week.doy).year
return null==t?e:this.add(t-e,"y")},isoWeekYear:function(t){var e=at(this,1,4).year
return null==t?e:this.add(t-e,"y")},week:function(t){var e=this.localeData().week(this)
return null==t?e:this.add(7*(t-e),"d")},isoWeek:function(t){var e=at(this,1,4).week
return null==t?e:this.add(7*(t-e),"d")},weekday:function(t){var e=(this.day()+7-this.localeData()._week.dow)%7
return null==t?e:this.add(t-e,"d")},isoWeekday:function(t){return null==t?this.day()||7:this.day(this.day()%7?t:t-7)},isoWeeksInYear:function(){return M(this.year(),1,4)},weeksInYear:function(){var t=this.localeData()._week
return M(this.year(),t.dow,t.doy)},get:function(t){return t=k(t),this[t]()},set:function(t,e){return t=k(t),"function"==typeof this[t]&&this[t](e),this},locale:function(e){var i
return e===t?this._locale._abbr:(i=bt.localeData(e),null!=i&&(this._locale=i),this)},lang:s("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===t?this.localeData():this.locale(e)}),localeData:function(){return this._locale},_dateTzOffset:function(){return 15*Math.round(this._d.getTimezoneOffset()/15)}}),bt.fn.millisecond=bt.fn.milliseconds=ft("Milliseconds",!1),bt.fn.second=bt.fn.seconds=ft("Seconds",!1),bt.fn.minute=bt.fn.minutes=ft("Minutes",!1),bt.fn.hour=bt.fn.hours=ft("Hours",!0),bt.fn.date=ft("Date",!0),bt.fn.dates=s("dates accessor is deprecated. Use date instead.",ft("Date",!0)),bt.fn.year=ft("FullYear",!0),bt.fn.years=s("years accessor is deprecated. Use year instead.",ft("FullYear",!0)),bt.fn.days=bt.fn.day,bt.fn.months=bt.fn.month,bt.fn.weeks=bt.fn.week,bt.fn.isoWeeks=bt.fn.isoWeek,bt.fn.quarters=bt.fn.quarter,bt.fn.toJSON=bt.fn.toISOString,c(bt.duration.fn=u.prototype,{_bubble:function(){var t,e,i,o=this._milliseconds,n=this._days,s=this._months,r=this._data,a=0
r.milliseconds=o%1e3,t=f(o/1e3),r.seconds=t%60,e=f(t/60),r.minutes=e%60,i=f(e/60),r.hours=i%24,n+=f(i/24),a=f(mt(n)),n-=f(gt(a)),s+=f(n/30),n%=30,a+=f(s/12),s%=12,r.days=n,r.months=s,r.years=a},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return f(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*O(this._months/12)},humanize:function(t){var e=rt(this,!t,this.localeData())
return t&&(e=this.localeData().pastFuture(+this,e)),this.localeData().postformat(e)},add:function(t,e){var i=bt.duration(t,e)
return this._milliseconds+=i._milliseconds,this._days+=i._days,this._months+=i._months,this._bubble(),this},subtract:function(t,e){var i=bt.duration(t,e)
return this._milliseconds-=i._milliseconds,this._days-=i._days,this._months-=i._months,this._bubble(),this},get:function(t){return t=k(t),this[t.toLowerCase()+"s"]()},as:function(t){var e,i
if(t=k(t),"month"===t||"year"===t)return e=this._days+this._milliseconds/864e5,i=this._months+12*mt(e),"month"===t?i:i/12
switch(e=this._days+Math.round(gt(this._months/12)),t){case"week":return e/7+this._milliseconds/6048e5
case"day":return e+this._milliseconds/864e5
case"hour":return 24*e+this._milliseconds/36e5
case"minute":return 24*e*60+this._milliseconds/6e4
case"second":return 24*e*60*60+this._milliseconds/1e3
case"millisecond":return Math.floor(24*e*60*60*1e3)+this._milliseconds
default:throw new Error("Unknown unit "+t)}},lang:bt.fn.lang,locale:bt.fn.locale,toIsoString:s("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var t=Math.abs(this.years()),e=Math.abs(this.months()),i=Math.abs(this.days()),o=Math.abs(this.hours()),n=Math.abs(this.minutes()),s=Math.abs(this.seconds()+this.milliseconds()/1e3)
return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(t?t+"Y":"")+(e?e+"M":"")+(i?i+"D":"")+(o||n||s?"T":"")+(o?o+"H":"")+(n?n+"M":"")+(s?s+"S":""):"P0D"},localeData:function(){return this._locale}}),bt.duration.fn.toString=bt.duration.fn.toISOString
for(wt in he)i(he,wt)&&vt(wt.toLowerCase())
bt.duration.fn.asMilliseconds=function(){return this.as("ms")},bt.duration.fn.asSeconds=function(){return this.as("s")},bt.duration.fn.asMinutes=function(){return this.as("m")},bt.duration.fn.asHours=function(){return this.as("h")},bt.duration.fn.asDays=function(){return this.as("d")},bt.duration.fn.asWeeks=function(){return this.as("weeks")},bt.duration.fn.asMonths=function(){return this.as("M")},bt.duration.fn.asYears=function(){return this.as("y")},bt.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,i=1===O(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th"
return t+i}}),jt?module.exports=bt:"function"==typeof define&&define.amd?(define("moment",function(t,e,i){return i.config&&i.config()&&i.config().noGlobal===!0&&(kt.moment=_t),bt}),yt(!0)):yt()}.call(this),function(t){function e(e){var i="display: none;position: fixed;top: 0;bottom: 0;left: 0;right: 0;margin: auto;padding: 8px;text-align: center;vertical-align: middle;",o=["width:"+e.width,"height:"+e.height,"z-index:"+e.zIndex,"background:"+e.background,"border-radius:"+e.radius]
i+=o.join(";")
var n="margin-bottom:8px;"
o=["width:"+e.imgWidth,"height:"+e.imgWidth],n+=o.join(";")
var s="margin:0;"
o=["font-size:"+e.fontSize,"color:"+e.fontColor],s+=o.join(";")
var r='<div id="'+e.id+'" style="'+i+'"><img src="'+e.imgPath+'" style="'+n+'"><p style="'+s+'">'+e.tip+"</p></div>",r=' <div id="'+e.id+'" style="'+i+'">                         <div class="cssload-container">                             <div class="cssload-whirlpool"></div>                         </div>                     </div>'
t(document).find("body").append(r)}var i={}
t.loading=function(o){var n=t.extend(t.loading["default"],o)
i=n,e(n)
var s,r="#"+n.id
return t(document).on("ajaxStart",function(){i.ajax&&(s=setTimeout(function(){t(r).show()},500))}),t(document).on("ajaxComplete",function(){clearTimeout(s),t(r).hide()}),t.loading},t.loading.open=function(e){var o="#"+i.id
t(o).hide()},t.loading.close=function(){var e="#"+i.id
t(e).hide()},t.loading.ajax=function(t){i.ajax=t},t.loading["default"]={ajax:!0,id:"ajaxLoading",zIndex:"1000",background:"rgba(0, 0, 0, 0)",minTime:500,radius:"4px",width:"85px",height:"85px",imgPath:"img/ajax-loading.gif",imgWidth:"45px",imgHeight:"45px",tip:"loading...",fontSize:"14px",fontColor:"#fff"}}(window.jQuery||window.Zepto),function(t,e,i){!function(t){"use strict"
"function"==typeof define&&define.amd?define(["jquery"],t):jQuery&&!jQuery.fn.qtip&&t(jQuery)}(function(o){"use strict"
function n(t,e,i,n){this.id=i,this.target=t,this.tooltip=D,this.elements={target:t},this._id=R+"-"+i,this.timers={img:{}},this.options=e,this.plugins={},this.cache={event:{},target:o(),disabled:T,attr:n,onTooltip:T,lastClass:""},this.rendered=this.destroyed=this.disabled=this.waiting=this.hiddenDuringWait=this.positioning=this.triggering=T}function s(t){return t===D||"object"!==o.type(t)}function r(t){return!(o.isFunction(t)||t&&t.attr||t.length||"object"===o.type(t)&&(t.jquery||t.then))}function a(t){var e,i,n,a
return s(t)?T:(s(t.metadata)&&(t.metadata={type:t.metadata}),"content"in t&&(e=t.content,s(e)||e.jquery||e.done?e=t.content={text:i=r(e)?T:e}:i=e.text,"ajax"in e&&(n=e.ajax,a=n&&n.once!==T,delete e.ajax,e.text=function(t,e){var s=i||o(this).attr(e.options.content.attr)||"Loading...",r=o.ajax(o.extend({},n,{context:e})).then(n.success,D,n.error).then(function(t){return t&&a&&e.set("content.text",t),t},function(t,i,o){e.destroyed||0===t.status||e.set("content.text",i+": "+o)})
return a?s:(e.set("content.text",s),r)}),"title"in e&&(o.isPlainObject(e.title)&&(e.button=e.title.button,e.title=e.title.text),r(e.title||T)&&(e.title=T))),"position"in t&&s(t.position)&&(t.position={my:t.position,at:t.position}),"show"in t&&s(t.show)&&(t.show=t.show.jquery?{target:t.show}:t.show===k?{ready:k}:{event:t.show}),"hide"in t&&s(t.hide)&&(t.hide=t.hide.jquery?{target:t.hide}:{event:t.hide}),"style"in t&&s(t.style)&&(t.style={classes:t.style}),o.each(z,function(){this.sanitize&&this.sanitize(t)}),t)}function h(t,e){for(var i,o=0,n=t,s=e.split(".");n=n[s[o++]];)o<s.length&&(i=n)
return[i||t,s.pop()]}function d(t,e){var i,o,n
for(i in this.checks)for(o in this.checks[i])(n=new RegExp(o,"i").exec(t))&&(e.push(n),("builtin"===i||this.plugins[i])&&this.checks[i][o].apply(this.plugins[i]||this,e))}function l(t){return H.concat("").join(t?"-"+t+" ":" ")}function u(t,e){return e>0?setTimeout(o.proxy(t,this),e):void t.call(this)}function c(t){this.tooltip.hasClass(V)||(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this.timers.show=u.call(this,function(){this.toggle(k,t)},this.options.show.delay))}function p(t){if(!this.tooltip.hasClass(V)&&!this.destroyed){var e=o(t.relatedTarget),i=e.closest(Y)[0]===this.tooltip[0],n=e[0]===this.options.show.target[0]
if(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this!==e[0]&&"mouse"===this.options.position.target&&i||this.options.hide.fixed&&/mouse(out|leave|move)/.test(t.type)&&(i||n))try{t.preventDefault(),t.stopImmediatePropagation()}catch(s){}else this.timers.hide=u.call(this,function(){this.toggle(T,t)},this.options.hide.delay,this)}}function f(t){!this.tooltip.hasClass(V)&&this.options.hide.inactive&&(clearTimeout(this.timers.inactive),this.timers.inactive=u.call(this,function(){this.hide(t)},this.options.hide.inactive))}function m(t){this.rendered&&this.tooltip[0].offsetWidth>0&&this.reposition(t)}function g(t,i,n){o(e.body).delegate(t,(i.split?i:i.join("."+R+" "))+"."+R,function(){var t=y.api[o.attr(this,B)]
t&&!t.disabled&&n.apply(t,arguments)})}function v(t,i,s){var r,h,d,l,u,c=o(e.body),p=t[0]===e?c:t,f=t.metadata?t.metadata(s.metadata):D,m="html5"===s.metadata.type&&f?f[s.metadata.name]:D,g=t.data(s.metadata.name||"qtipopts")
try{g="string"==typeof g?o.parseJSON(g):g}catch(v){}if(l=o.extend(k,{},y.defaults,s,"object"==typeof g?a(g):D,a(m||f)),h=l.position,l.id=i,"boolean"==typeof l.content.text){if(d=t.attr(l.content.attr),l.content.attr===T||!d)return T
l.content.text=d}if(h.container.length||(h.container=c),h.target===T&&(h.target=p),l.show.target===T&&(l.show.target=p),l.show.solo===k&&(l.show.solo=h.container.closest("body")),l.hide.target===T&&(l.hide.target=p),l.position.viewport===k&&(l.position.viewport=h.container),h.container=h.container.eq(0),h.at=new _(h.at,k),h.my=new _(h.my),t.data(R))if(l.overwrite)t.qtip("destroy",!0)
else if(l.overwrite===T)return T
return t.attr(F,i),l.suppress&&(u=t.attr("title"))&&t.removeAttr("title").attr(Z,u).attr("title",""),r=new n(t,l,i,!!d),t.data(R,r),r}var y,b,_,w,x,k=!0,T=!1,D=null,O="x",C="y",M="width",S="height",E="top",P="left",N="bottom",I="right",A="center",j="flipinvert",L="shift",z={},R="qtip",F="data-hasqtip",B="data-qtip-id",H=["ui-widget","ui-tooltip"],Y="."+R,W="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),G=R+"-fixed",U=R+"-default",q=R+"-focus",$=R+"-hover",V=R+"-disabled",X="_replacedByqTip",Z="oldtitle",K={ie:function(){for(var t=4,i=e.createElement("div");(i.innerHTML="<!--[if gt IE "+t+"]><i></i><![endif]-->")&&i.getElementsByTagName("i")[0];t+=1);return t>4?t:NaN}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||T}
b=n.prototype,b._when=function(t){return o.when.apply(o,t)},b.render=function(t){if(this.rendered||this.destroyed)return this
var e,i=this,n=this.options,s=this.cache,r=this.elements,a=n.content.text,h=n.content.title,d=n.content.button,l=n.position,u=("."+this._id+" ",[])
return o.attr(this.target[0],"aria-describedby",this._id),s.posClass=this._createPosClass((this.position={my:l.my,at:l.at}).my),this.tooltip=r.tooltip=e=o("<div/>",{id:this._id,"class":[R,U,n.style.classes,s.posClass].join(" "),width:n.style.width||"",height:n.style.height||"",tracking:"mouse"===l.target&&l.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":T,"aria-describedby":this._id+"-content","aria-hidden":k}).toggleClass(V,this.disabled).attr(B,this.id).data(R,this).appendTo(l.container).append(r.content=o("<div />",{"class":R+"-content",id:this._id+"-content","aria-atomic":k})),this.rendered=-1,this.positioning=k,h&&(this._createTitle(),o.isFunction(h)||u.push(this._updateTitle(h,T))),d&&this._createButton(),o.isFunction(a)||u.push(this._updateContent(a,T)),this.rendered=k,this._setWidget(),o.each(z,function(t){var e
"render"===this.initialize&&(e=this(i))&&(i.plugins[t]=e)}),this._unassignEvents(),this._assignEvents(),this._when(u).then(function(){i._trigger("render"),i.positioning=T,i.hiddenDuringWait||!n.show.ready&&!t||i.toggle(k,s.event,T),i.hiddenDuringWait=T}),y.api[this.id]=this,this},b.destroy=function(t){function e(){if(!this.destroyed){this.destroyed=k
var t,e=this.target,i=e.attr(Z)
this.rendered&&this.tooltip.stop(1,0).find("*").remove().end().remove(),o.each(this.plugins,function(t){this.destroy&&this.destroy()})
for(t in this.timers)clearTimeout(this.timers[t])
e.removeData(R).removeAttr(B).removeAttr(F).removeAttr("aria-describedby"),this.options.suppress&&i&&e.attr("title",i).removeAttr(Z),this._unassignEvents(),this.options=this.elements=this.cache=this.timers=this.plugins=this.mouse=D,delete y.api[this.id]}}return this.destroyed?this.target:(t===k&&"hide"!==this.triggering||!this.rendered?e.call(this):(this.tooltip.one("tooltiphidden",o.proxy(e,this)),!this.triggering&&this.hide()),this.target)},w=b.checks={builtin:{"^id$":function(t,e,i,n){var s=i===k?y.nextid:i,r=R+"-"+s
s!==T&&s.length>0&&!o("#"+r).length?(this._id=r,this.rendered&&(this.tooltip[0].id=this._id,this.elements.content[0].id=this._id+"-content",this.elements.title[0].id=this._id+"-title")):t[e]=n},"^prerender":function(t,e,i){i&&!this.rendered&&this.render(this.options.show.ready)},"^content.text$":function(t,e,i){this._updateContent(i)},"^content.attr$":function(t,e,i,o){this.options.content.text===this.target.attr(o)&&this._updateContent(this.target.attr(i))},"^content.title$":function(t,e,i){return i?(i&&!this.elements.title&&this._createTitle(),void this._updateTitle(i)):this._removeTitle()},"^content.button$":function(t,e,i){this._updateButton(i)},"^content.title.(text|button)$":function(t,e,i){this.set("content."+e,i)},"^position.(my|at)$":function(t,e,i){"string"==typeof i&&(this.position[e]=t[e]=new _(i,"at"===e))},"^position.container$":function(t,e,i){this.rendered&&this.tooltip.appendTo(i)},"^show.ready$":function(t,e,i){i&&(!this.rendered&&this.render(k)||this.toggle(k))},"^style.classes$":function(t,e,i,o){this.rendered&&this.tooltip.removeClass(o).addClass(i)},"^style.(width|height)":function(t,e,i){this.rendered&&this.tooltip.css(e,i)},"^style.widget|content.title":function(){this.rendered&&this._setWidget()},"^style.def":function(t,e,i){this.rendered&&this.tooltip.toggleClass(U,!!i)},"^events.(render|show|move|hide|focus|blur)$":function(t,e,i){this.rendered&&this.tooltip[(o.isFunction(i)?"":"un")+"bind"]("tooltip"+e,i)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){if(this.rendered){var t=this.options.position
this.tooltip.attr("tracking","mouse"===t.target&&t.adjust.mouse),this._unassignEvents(),this._assignEvents()}}}},b.get=function(t){if(this.destroyed)return this
var e=h(this.options,t.toLowerCase()),i=e[0][e[1]]
return i.precedance?i.string():i}
var Q=/^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,J=/^prerender|show\.ready/i
b.set=function(t,e){if(this.destroyed)return this
var i,n=this.rendered,s=T,r=this.options
this.checks
return"string"==typeof t?(i=t,t={},t[i]=e):t=o.extend({},t),o.each(t,function(e,i){if(n&&J.test(e))return void delete t[e]
var a,d=h(r,e.toLowerCase())
a=d[0][d[1]],d[0][d[1]]=i&&i.nodeType?o(i):i,s=Q.test(e)||s,t[e]=[d[0],d[1],i,a]}),a(r),this.positioning=k,o.each(t,o.proxy(d,this)),this.positioning=T,this.rendered&&this.tooltip[0].offsetWidth>0&&s&&this.reposition("mouse"===r.position.target?D:this.cache.event),this},b._update=function(t,e,i){var n=this,s=this.cache
return this.rendered&&t?(o.isFunction(t)&&(t=t.call(this.elements.target,s.event,this)||""),o.isFunction(t.then)?(s.waiting=k,t.then(function(t){return s.waiting=T,n._update(t,e)},D,function(t){return n._update(t,e)})):t===T||!t&&""!==t?T:(t.jquery&&t.length>0?e.empty().append(t.css({display:"block",visibility:"visible"})):e.html(t),this._waitForContent(e).then(function(t){n.rendered&&n.tooltip[0].offsetWidth>0&&n.reposition(s.event,!t.length)}))):T},b._waitForContent=function(t){var e=this.cache
return e.waiting=k,(o.fn.imagesLoaded?t.imagesLoaded():o.Deferred().resolve([])).done(function(){e.waiting=T}).promise()},b._updateContent=function(t,e){this._update(t,this.elements.content,e)},b._updateTitle=function(t,e){this._update(t,this.elements.title,e)===T&&this._removeTitle(T)},b._createTitle=function(){var t=this.elements,e=this._id+"-title"
t.titlebar&&this._removeTitle(),t.titlebar=o("<div />",{"class":R+"-titlebar "+(this.options.style.widget?l("header"):"")}).append(t.title=o("<div />",{id:e,"class":R+"-title","aria-atomic":k})).insertBefore(t.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(t){o(this).toggleClass("ui-state-active ui-state-focus","down"===t.type.substr(-4))}).delegate(".qtip-close","mouseover mouseout",function(t){o(this).toggleClass("ui-state-hover","mouseover"===t.type)}),this.options.content.button&&this._createButton()},b._removeTitle=function(t){var e=this.elements
e.title&&(e.titlebar.remove(),e.titlebar=e.title=e.button=D,t!==T&&this.reposition())},b._createPosClass=function(t){return R+"-pos-"+(t||this.options.position.my).abbrev()},b.reposition=function(i,n){if(!this.rendered||this.positioning||this.destroyed)return this
this.positioning=k
var s,r,a,h,d=this.cache,l=this.tooltip,u=this.options.position,c=u.target,p=u.my,f=u.at,m=u.viewport,g=u.container,v=u.adjust,y=v.method.split(" "),b=l.outerWidth(T),_=l.outerHeight(T),w=0,x=0,D=l.css("position"),O={left:0,top:0},C=l[0].offsetWidth>0,M=i&&"scroll"===i.type,S=o(t),j=g[0].ownerDocument,L=this.mouse
if(o.isArray(c)&&2===c.length)f={x:P,y:E},O={left:c[0],top:c[1]}
else if("mouse"===c)f={x:P,y:E},(!v.mouse||this.options.hide.distance)&&d.origin&&d.origin.pageX?i=d.origin:!i||i&&("resize"===i.type||"scroll"===i.type)?i=d.event:L&&L.pageX&&(i=L),"static"!==D&&(O=g.offset()),j.body.offsetWidth!==(t.innerWidth||j.documentElement.clientWidth)&&(r=o(e.body).offset()),O={left:i.pageX-O.left+(r&&r.left||0),top:i.pageY-O.top+(r&&r.top||0)},v.mouse&&M&&L&&(O.left-=(L.scrollX||0)-S.scrollLeft(),O.top-=(L.scrollY||0)-S.scrollTop())
else{if("event"===c?i&&i.target&&"scroll"!==i.type&&"resize"!==i.type?d.target=o(i.target):i.target||(d.target=this.elements.target):"event"!==c&&(d.target=o(c.jquery?c:this.elements.target)),c=d.target,c=o(c).eq(0),0===c.length)return this
c[0]===e||c[0]===t?(w=K.iOS?t.innerWidth:c.width(),x=K.iOS?t.innerHeight:c.height(),c[0]===t&&(O={top:(m||c).scrollTop(),left:(m||c).scrollLeft()})):z.imagemap&&c.is("area")?s=z.imagemap(this,c,f,z.viewport?y:T):z.svg&&c&&c[0].ownerSVGElement?s=z.svg(this,c,f,z.viewport?y:T):(w=c.outerWidth(T),x=c.outerHeight(T),O=c.offset()),s&&(w=s.width,x=s.height,r=s.offset,O=s.position),O=this.reposition.offset(c,O,g),(K.iOS>3.1&&K.iOS<4.1||K.iOS>=4.3&&K.iOS<4.33||!K.iOS&&"fixed"===D)&&(O.left-=S.scrollLeft(),O.top-=S.scrollTop()),(!s||s&&s.adjustable!==T)&&(O.left+=f.x===I?w:f.x===A?w/2:0,O.top+=f.y===N?x:f.y===A?x/2:0)}return O.left+=v.x+(p.x===I?-b:p.x===A?-b/2:0),O.top+=v.y+(p.y===N?-_:p.y===A?-_/2:0),z.viewport?(a=O.adjusted=z.viewport(this,O,u,w,x,b,_),r&&a.left&&(O.left+=r.left),r&&a.top&&(O.top+=r.top),a.my&&(this.position.my=a.my)):O.adjusted={left:0,top:0},d.posClass!==(h=this._createPosClass(this.position.my))&&l.removeClass(d.posClass).addClass(d.posClass=h),this._trigger("move",[O,m.elem||m],i)?(delete O.adjusted,n===T||!C||isNaN(O.left)||isNaN(O.top)||"mouse"===c||!o.isFunction(u.effect)?l.css(O):o.isFunction(u.effect)&&(u.effect.call(l,this,o.extend({},O)),l.queue(function(t){o(this).css({opacity:"",height:""}),K.ie&&this.style.removeAttribute("filter"),t()})),this.positioning=T,this):this},b.reposition.offset=function(t,i,n){function s(t,e){i.left+=e*t.scrollLeft(),i.top+=e*t.scrollTop()}if(!n[0])return i
var r,a,h,d,l=o(t[0].ownerDocument),u=!!K.ie&&"CSS1Compat"!==e.compatMode,c=n[0]
do"static"!==(a=o.css(c,"position"))&&("fixed"===a?(h=c.getBoundingClientRect(),s(l,-1)):(h=o(c).position(),h.left+=parseFloat(o.css(c,"borderLeftWidth"))||0,h.top+=parseFloat(o.css(c,"borderTopWidth"))||0),i.left-=h.left+(parseFloat(o.css(c,"marginLeft"))||0),i.top-=h.top+(parseFloat(o.css(c,"marginTop"))||0),r||"hidden"===(d=o.css(c,"overflow"))||"visible"===d||(r=o(c)))
while(c=c.offsetParent)
return r&&(r[0]!==l[0]||u)&&s(r,1),i}
var tt=(_=b.reposition.Corner=function(t,e){t=(""+t).replace(/([A-Z])/," $1").replace(/middle/gi,A).toLowerCase(),this.x=(t.match(/left|right/i)||t.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(t.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase(),this.forceY=!!e
var i=t.charAt(0)
this.precedance="t"===i||"b"===i?C:O}).prototype
tt.invert=function(t,e){this[t]=this[t]===P?I:this[t]===I?P:e||this[t]},tt.string=function(t){var e=this.x,i=this.y,o=e!==i?"center"===e||"center"!==i&&(this.precedance===C||this.forceY)?[i,e]:[e,i]:[e]
return t!==!1?o.join(" "):o},tt.abbrev=function(){var t=this.string(!1)
return t[0].charAt(0)+(t[1]&&t[1].charAt(0)||"")},tt.clone=function(){return new _(this.string(),this.forceY)},b.toggle=function(t,i){var n=this.cache,s=this.options,r=this.tooltip
if(i){if(/over|enter/.test(i.type)&&n.event&&/out|leave/.test(n.event.type)&&s.show.target.add(i.target).length===s.show.target.length&&r.has(i.relatedTarget).length)return this
n.event=o.event.fix(i)}if(this.waiting&&!t&&(this.hiddenDuringWait=k),!this.rendered)return t?this.render(1):this
if(this.destroyed||this.disabled)return this
var a,h,d,l=t?"show":"hide",u=this.options[l],c=(this.options[t?"hide":"show"],this.options.position),p=this.options.content,f=this.tooltip.css("width"),m=this.tooltip.is(":visible"),g=t||1===u.target.length,v=!i||u.target.length<2||n.target[0]===i.target
return(typeof t).search("boolean|number")&&(t=!m),a=!r.is(":animated")&&m===t&&v,h=a?D:!!this._trigger(l,[90]),this.destroyed?this:(h!==T&&t&&this.focus(i),!h||a?this:(o.attr(r[0],"aria-hidden",!t),t?(this.mouse&&(n.origin=o.event.fix(this.mouse)),o.isFunction(p.text)&&this._updateContent(p.text,T),o.isFunction(p.title)&&this._updateTitle(p.title,T),!x&&"mouse"===c.target&&c.adjust.mouse&&(o(e).bind("mousemove."+R,this._storeMouse),x=k),f||r.css("width",r.outerWidth(T)),this.reposition(i,arguments[2]),f||r.css("width",""),u.solo&&("string"==typeof u.solo?o(u.solo):o(Y,u.solo)).not(r).not(u.target).qtip("hide",o.Event("tooltipsolo"))):(clearTimeout(this.timers.show),delete n.origin,x&&!o(Y+'[tracking="true"]:visible',u.solo).not(r).length&&(o(e).unbind("mousemove."+R),x=T),this.blur(i)),d=o.proxy(function(){t?(K.ie&&r[0].style.removeAttribute("filter"),r.css("overflow",""),"string"==typeof u.autofocus&&o(this.options.show.autofocus,r).focus(),this.options.show.target.trigger("qtip-"+this.id+"-inactive")):r.css({display:"",visibility:"",opacity:"",left:"",top:""}),this._trigger(t?"visible":"hidden")},this),u.effect===T||g===T?(r[l](),d()):o.isFunction(u.effect)?(r.stop(1,1),u.effect.call(r,this),r.queue("fx",function(t){d(),t()})):r.fadeTo(90,t?1:0,d),t&&u.target.trigger("qtip-"+this.id+"-inactive"),this))},b.show=function(t){return this.toggle(k,t)},b.hide=function(t){return this.toggle(T,t)},b.focus=function(t){if(!this.rendered||this.destroyed)return this
var e=o(Y),i=this.tooltip,n=parseInt(i[0].style.zIndex,10),s=y.zindex+e.length
return i.hasClass(q)||this._trigger("focus",[s],t)&&(n!==s&&(e.each(function(){this.style.zIndex>n&&(this.style.zIndex=this.style.zIndex-1)}),e.filter("."+q).qtip("blur",t)),i.addClass(q)[0].style.zIndex=s),this},b.blur=function(t){return!this.rendered||this.destroyed?this:(this.tooltip.removeClass(q),this._trigger("blur",[this.tooltip.css("zIndex")],t),this)},b.disable=function(t){return this.destroyed?this:("toggle"===t?t=!(this.rendered?this.tooltip.hasClass(V):this.disabled):"boolean"!=typeof t&&(t=k),this.rendered&&this.tooltip.toggleClass(V,t).attr("aria-disabled",t),this.disabled=!!t,this)},b.enable=function(){return this.disable(T)},b._createButton=function(){var t=this,e=this.elements,i=e.tooltip,n=this.options.content.button,s="string"==typeof n,r=s?n:"Close tooltip"
e.button&&e.button.remove(),n.jquery?e.button=n:e.button=o("<a />",{"class":"qtip-close "+(this.options.style.widget?"":R+"-icon"),title:r,"aria-label":r}).prepend(o("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),e.button.appendTo(e.titlebar||i).attr("role","button").click(function(e){return i.hasClass(V)||t.hide(e),T})},b._updateButton=function(t){if(!this.rendered)return T
var e=this.elements.button
t?this._createButton():e.remove()},b._setWidget=function(){var t=this.options.style.widget,e=this.elements,i=e.tooltip,o=i.hasClass(V)
i.removeClass(V),V=t?"ui-state-disabled":"qtip-disabled",i.toggleClass(V,o),i.toggleClass("ui-helper-reset "+l(),t).toggleClass(U,this.options.style.def&&!t),e.content&&e.content.toggleClass(l("content"),t),e.titlebar&&e.titlebar.toggleClass(l("header"),t),e.button&&e.button.toggleClass(R+"-icon",!t)},b._storeMouse=function(t){return(this.mouse=o.event.fix(t)).type="mousemove",this},b._bind=function(t,e,i,n,s){if(t&&i&&e.length){var r="."+this._id+(n?"-"+n:"")
return o(t).bind((e.split?e:e.join(r+" "))+r,o.proxy(i,s||this)),this}},b._unbind=function(t,e){return t&&o(t).unbind("."+this._id+(e?"-"+e:"")),this},b._trigger=function(t,e,i){var n=o.Event("tooltip"+t)
return n.originalEvent=i&&o.extend({},i)||this.cache.event||D,this.triggering=t,this.tooltip.trigger(n,[this].concat(e||[])),this.triggering=T,!n.isDefaultPrevented()},b._bindEvents=function(t,e,i,n,s,r){var a=i.filter(n).add(n.filter(i)),h=[]
a.length&&(o.each(e,function(e,i){var n=o.inArray(i,t)
n>-1&&h.push(t.splice(n,1)[0])}),h.length&&(this._bind(a,h,function(t){var e=this.rendered?this.tooltip[0].offsetWidth>0:!1;(e?r:s).call(this,t)}),i=i.not(a),n=n.not(a))),this._bind(i,t,s),this._bind(n,e,r)},b._assignInitialEvents=function(t){function e(t){return this.disabled||this.destroyed?T:(this.cache.event=t&&o.event.fix(t),this.cache.target=t&&o(t.target),clearTimeout(this.timers.show),void(this.timers.show=u.call(this,function(){this.render("object"==typeof t||i.show.ready)},i.prerender?0:i.show.delay)))}var i=this.options,n=i.show.target,s=i.hide.target,r=i.show.event?o.trim(""+i.show.event).split(" "):[],a=i.hide.event?o.trim(""+i.hide.event).split(" "):[]
this._bind(this.elements.target,["remove","removeqtip"],function(t){this.destroy(!0)},"destroy"),/mouse(over|enter)/i.test(i.show.event)&&!/mouse(out|leave)/i.test(i.hide.event)&&a.push("mouseleave"),this._bind(n,"mousemove",function(t){this._storeMouse(t),this.cache.onTarget=k}),this._bindEvents(r,a,n,s,e,function(){return this.timers?void clearTimeout(this.timers.show):T}),(i.show.ready||i.prerender)&&e.call(this,t)},b._assignEvents=function(){var i=this,n=this.options,s=n.position,r=this.tooltip,a=n.show.target,h=n.hide.target,d=s.container,l=s.viewport,u=o(e),g=(o(e.body),o(t)),v=n.show.event?o.trim(""+n.show.event).split(" "):[],b=n.hide.event?o.trim(""+n.hide.event).split(" "):[]
o.each(n.events,function(t,e){i._bind(r,"toggle"===t?["tooltipshow","tooltiphide"]:["tooltip"+t],e,null,r)}),/mouse(out|leave)/i.test(n.hide.event)&&"window"===n.hide.leave&&this._bind(u,["mouseout","blur"],function(t){/select|option/.test(t.target.nodeName)||t.relatedTarget||this.hide(t)}),n.hide.fixed?h=h.add(r.addClass(G)):/mouse(over|enter)/i.test(n.show.event)&&this._bind(h,"mouseleave",function(){clearTimeout(this.timers.show)}),(""+n.hide.event).indexOf("unfocus")>-1&&this._bind(d.closest("html"),["mousedown","touchstart"],function(t){var e=o(t.target),i=this.rendered&&!this.tooltip.hasClass(V)&&this.tooltip[0].offsetWidth>0,n=e.parents(Y).filter(this.tooltip[0]).length>0
e[0]===this.target[0]||e[0]===this.tooltip[0]||n||this.target.has(e[0]).length||!i||this.hide(t)}),"number"==typeof n.hide.inactive&&(this._bind(a,"qtip-"+this.id+"-inactive",f,"inactive"),this._bind(h.add(r),y.inactiveEvents,f)),this._bindEvents(v,b,a,h,c,p),this._bind(a.add(r),"mousemove",function(t){if("number"==typeof n.hide.distance){var e=this.cache.origin||{},i=this.options.hide.distance,o=Math.abs;(o(t.pageX-e.pageX)>=i||o(t.pageY-e.pageY)>=i)&&this.hide(t)}this._storeMouse(t)}),"mouse"===s.target&&s.adjust.mouse&&(n.hide.event&&this._bind(a,["mouseenter","mouseleave"],function(t){return this.cache?void(this.cache.onTarget="mouseenter"===t.type):T}),this._bind(u,"mousemove",function(t){this.rendered&&this.cache.onTarget&&!this.tooltip.hasClass(V)&&this.tooltip[0].offsetWidth>0&&this.reposition(t)})),(s.adjust.resize||l.length)&&this._bind(o.event.special.resize?l:g,"resize",m),s.adjust.scroll&&this._bind(g.add(s.container),"scroll",m)},b._unassignEvents=function(){var i=this.options,n=i.show.target,s=i.hide.target,r=o.grep([this.elements.target[0],this.rendered&&this.tooltip[0],i.position.container[0],i.position.viewport[0],i.position.container.closest("html")[0],t,e],function(t){return"object"==typeof t})
n&&n.toArray&&(r=r.concat(n.toArray())),s&&s.toArray&&(r=r.concat(s.toArray())),this._unbind(r)._unbind(r,"destroy")._unbind(r,"inactive")},o(function(){g(Y,["mouseenter","mouseleave"],function(t){var e="mouseenter"===t.type,i=o(t.currentTarget),n=o(t.relatedTarget||t.target),s=this.options
e?(this.focus(t),i.hasClass(G)&&!i.hasClass(V)&&clearTimeout(this.timers.hide)):"mouse"===s.position.target&&s.position.adjust.mouse&&s.hide.event&&s.show.target&&!n.closest(s.show.target[0]).length&&this.hide(t),i.toggleClass($,e)}),g("["+B+"]",W,f)}),y=o.fn.qtip=function(t,e,n){var s=(""+t).toLowerCase(),r=D,h=o.makeArray(arguments).slice(1),d=h[h.length-1],l=this[0]?o.data(this[0],R):D
return!arguments.length&&l||"api"===s?l:"string"==typeof t?(this.each(function(){var t=o.data(this,R)
if(!t)return k
if(d&&d.timeStamp&&(t.cache.event=d),!e||"option"!==s&&"options"!==s)t[s]&&t[s].apply(t,h)
else{if(n===i&&!o.isPlainObject(e))return r=t.get(e),T
t.set(e,n)}}),r!==D?r:this):"object"!=typeof t&&arguments.length?void 0:(l=a(o.extend(k,{},t)),this.each(function(t){var e,i
return i=o.isArray(l.id)?l.id[t]:l.id,i=!i||i===T||i.length<1||y.api[i]?y.nextid++:i,e=v(o(this),i,l),e===T?k:(y.api[i]=e,o.each(z,function(){"initialize"===this.initialize&&this(e)}),void e._assignInitialEvents(d))}))},o.qtip=n,y.api={},o.each({attr:function(t,e){if(this.length){var i=this[0],n="title",s=o.data(i,"qtip")
if(t===n&&s&&"object"==typeof s&&s.options.suppress)return arguments.length<2?o.attr(i,Z):(s&&s.options.content.attr===n&&s.cache.attr&&s.set("content.text",e),this.attr(Z,e))}return o.fn["attr"+X].apply(this,arguments)},clone:function(t){var e=(o([]),o.fn["clone"+X].apply(this,arguments))
return t||e.filter("["+Z+"]").attr("title",function(){return o.attr(this,Z)}).removeAttr(Z),e}},function(t,e){if(!e||o.fn[t+X])return k
var i=o.fn[t+X]=o.fn[t]
o.fn[t]=function(){return e.apply(this,arguments)||i.apply(this,arguments)}}),o.ui||(o["cleanData"+X]=o.cleanData,o.cleanData=function(t){for(var e,i=0;(e=o(t[i])).length;i++)if(e.attr(F))try{e.triggerHandler("removeqtip")}catch(n){}o["cleanData"+X].apply(this,arguments)}),y.version="2.2.1",y.nextid=0,y.inactiveEvents=W,y.zindex=15e3,y.defaults={prerender:T,id:T,overwrite:k,suppress:k,content:{text:k,attr:"title",title:T,button:T},position:{my:"top left",at:"bottom right",target:T,container:T,viewport:T,adjust:{x:0,y:0,mouse:k,scroll:k,resize:k,method:"flipinvert flipinvert"},effect:function(t,e,i){o(this).animate(e,{duration:200,queue:T})}},show:{target:T,event:"mouseenter",effect:k,delay:90,solo:T,ready:T,autofocus:T},hide:{target:T,event:"mouseleave",effect:k,delay:0,fixed:T,inactive:T,leave:"window",distance:T},style:{classes:"",widget:T,width:T,height:T,def:k},events:{render:D,move:D,show:D,hide:D,toggle:D,visible:D,hidden:D,focus:D,blur:D}},z.viewport=function(i,o,n,s,r,a,h){function d(t,e,i,n,s,r,a,h,d){var l=o[s],y=_[t],b=w[t],x=i===L,k=y===s?d:y===r?-d:-d/2,T=b===s?h:b===r?-h:-h/2,D=g[s]+v[s]-(p?0:c[s]),O=D-l,C=l+d-(a===M?f:m)-D,S=k-(_.precedance===t||y===_[e]?T:0)-(b===A?h/2:0)
return x?(S=(y===s?1:-1)*k,o[s]+=O>0?O:C>0?-C:0,o[s]=Math.max(-c[s]+v[s],l-S,Math.min(Math.max(-c[s]+v[s]+(a===M?f:m),l+S),o[s],"center"===y?l-k:1e9))):(n*=i===j?2:0,O>0&&(y!==s||C>0)?(o[s]-=S+n,u.invert(t,s)):C>0&&(y!==r||O>0)&&(o[s]-=(y===A?-S:S)+n,u.invert(t,r)),o[s]<g&&-o[s]>C&&(o[s]=l,u=_.clone())),o[s]-l}var l,u,c,p,f,m,g,v,y=n.target,b=i.elements.tooltip,_=n.my,w=n.at,x=n.adjust,k=x.method.split(" "),D=k[0],z=k[1]||k[0],R=n.viewport,F=n.container,B=(i.cache,{left:0,top:0})
return R.jquery&&y[0]!==t&&y[0]!==e.body&&"none"!==x.method?(c=F.offset()||B,p="static"===F.css("position"),l="fixed"===b.css("position"),f=R[0]===t?R.width():R.outerWidth(T),m=R[0]===t?R.height():R.outerHeight(T),g={left:l?0:R.scrollLeft(),top:l?0:R.scrollTop()},v=R.offset()||B,"shift"===D&&"shift"===z||(u=_.clone()),B={left:"none"!==D?d(O,C,D,x.x,P,I,M,s,a):0,top:"none"!==z?d(C,O,z,x.y,E,N,S,r,h):0,my:u}):B}})}(window,document),function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t()
else if("function"==typeof define&&define.amd)define([],t)
else{var e
e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){return function t(e,i,o){function n(r,a){if(!i[r]){if(!e[r]){var h="function"==typeof require&&require
if(!a&&h)return h(r,!0)
if(s)return s(r,!0)
var d=new Error("Cannot find module '"+r+"'")
throw d.code="MODULE_NOT_FOUND",d}var l=i[r]={exports:{}}
e[r][0].call(l.exports,function(t){var i=e[r][1][t]
return n(i?i:t)},l,l.exports,t,e,i,o)}return i[r].exports}for(var s="function"==typeof require&&require,r=0;r<o.length;r++)n(o[r])
return n}({1:[function(t,e,i){var o=t("matches-selector")
e.exports=function(t,e,i){for(var n=i?t:t.parentNode;n&&n!==document;){if(o(n,e))return n
n=n.parentNode}}},{"matches-selector":2}],2:[function(t,e,i){function o(t,e){if(s)return s.call(t,e)
for(var i=t.parentNode.querySelectorAll(e),o=0;o<i.length;++o)if(i[o]==t)return!0
return!1}var n=Element.prototype,s=n.matchesSelector||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector
e.exports=o},{}],3:[function(t,e,i){function o(t,e,i,o){var s=n.apply(this,arguments)
return t.addEventListener(i,s),{destroy:function(){t.removeEventListener(i,s)}}}function n(t,e,i,o){return function(i){i.delegateTarget=s(i.target,e,!0),i.delegateTarget&&o.call(t,i)}}var s=t("closest")
e.exports=o},{closest:1}],4:[function(t,e,i){i.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},i.nodeList=function(t){var e=Object.prototype.toString.call(t)
return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||i.node(t[0]))},i.string=function(t){return"string"==typeof t||t instanceof String},i["function"]=function(t){var e=Object.prototype.toString.call(t)
return"[object Function]"===e}},{}],5:[function(t,e,i){function o(t,e,i){if(!t&&!e&&!i)throw new Error("Missing required arguments")
if(!a.string(e))throw new TypeError("Second argument must be a String")
if(!a["function"](i))throw new TypeError("Third argument must be a Function")
if(a.node(t))return n(t,e,i)
if(a.nodeList(t))return s(t,e,i)
if(a.string(t))return r(t,e,i)
throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function n(t,e,i){return t.addEventListener(e,i),{destroy:function(){t.removeEventListener(e,i)}}}function s(t,e,i){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,i)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,i)})}}}function r(t,e,i){return h(document.body,t,e,i)}var a=t("./is"),h=t("delegate")
e.exports=o},{"./is":4,delegate:3}],6:[function(t,e,i){function o(t){var e
if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.focus(),t.setSelectionRange(0,t.value.length),e=t.value
else{t.hasAttribute("contenteditable")&&t.focus()
var i=window.getSelection(),o=document.createRange()
o.selectNodeContents(t),i.removeAllRanges(),i.addRange(o),e=i.toString()}return e}e.exports=o},{}],7:[function(t,e,i){function o(){}o.prototype={on:function(t,e,i){var o=this.e||(this.e={})
return(o[t]||(o[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){function o(){n.off(t,o),e.apply(i,arguments)}var n=this
return o._=e,this.on(t,o,i)},emit:function(t){var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),o=0,n=i.length
for(o;n>o;o++)i[o].fn.apply(i[o].ctx,e)
return this},off:function(t,e){var i=this.e||(this.e={}),o=i[t],n=[]
if(o&&e)for(var s=0,r=o.length;r>s;s++)o[s].fn!==e&&o[s].fn._!==e&&n.push(o[s])
return n.length?i[t]=n:delete i[t],this}},e.exports=o},{}],8:[function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}i.__esModule=!0
var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=t("select"),a=o(r),h=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return t.prototype.resolveOptions=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0]
this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""},t.prototype.initSelection=function(){if(this.text&&this.target)throw new Error('Multiple attributes declared, use either "target" or "text"')
if(this.text)this.selectFake()
else{if(!this.target)throw new Error('Missing required attributes, use either "target" or "text"')
this.selectTarget()}},t.prototype.selectFake=function(){var t=this
this.removeFake(),this.fakeHandler=document.body.addEventListener("click",function(){return t.removeFake()}),this.fakeElem=document.createElement("textarea"),this.fakeElem.style.position="absolute",this.fakeElem.style.left="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=a["default"](this.fakeElem),this.copyText()},t.prototype.removeFake=function(){this.fakeHandler&&(document.body.removeEventListener("click"),this.fakeHandler=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)},t.prototype.selectTarget=function(){this.selectedText=a["default"](this.target),this.copyText()},t.prototype.copyText=function(){var t=void 0
try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)},t.prototype.handleResult=function(t){t?this.emitter.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.emitter.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},t.prototype.clearSelection=function(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},t.prototype.destroy=function(){this.removeFake()},s(t,[{key:"action",set:function(){var t=arguments.length<=0||void 0===arguments[0]?"copy":arguments[0]
if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!=typeof t||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element')
this._target=t}},get:function(){return this._target}}]),t}()
i["default"]=h,e.exports=i["default"]},{select:6}],9:[function(t,e,i){"use strict"
function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function r(t,e){var i="data-clipboard-"+t
if(e.hasAttribute(i))return e.getAttribute(i)}i.__esModule=!0
var a=t("./clipboard-action"),h=o(a),d=t("tiny-emitter"),l=o(d),u=t("good-listener"),c=o(u),p=function(t){function e(i,o){n(this,e),t.call(this),this.resolveOptions(o),this.listenClick(i)}return s(e,t),e.prototype.resolveOptions=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0]
this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText},e.prototype.listenClick=function(t){var e=this
this.listener=c["default"](t,"click",function(t){return e.onClick(t)})},e.prototype.onClick=function(t){var e=t.delegateTarget||t.currentTarget
this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new h["default"]({action:this.action(e),target:this.target(e),text:this.text(e),trigger:e,emitter:this})},e.prototype.defaultAction=function(t){return r("action",t)},e.prototype.defaultTarget=function(t){var e=r("target",t)
return e?document.querySelector(e):void 0},e.prototype.defaultText=function(t){return r("text",t)},e.prototype.destroy=function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)},e}(l["default"])
i["default"]=p,e.exports=i["default"]},{"./clipboard-action":8,"good-listener":5,"tiny-emitter":7}]},{},[9])(9)})
var lightMarkdown={},tokens=getTokens(),regex=getRegex(tokens),plainToken="₪₪PLaiN₪₪",optionsMarkDown={},flavors={slack:{bold:!0,italics:!0,strikethrough:!0,pre:!0,code:!0,longQuote:!0,quote:!0,autoLink:!0,paragraph:!0,lineBreaks:!0},skype:{bold:!0,italics:!0,strikethrough:!0,pre:!1,code:!1,longQuote:!1,quote:!1,autoLink:!0,paragraph:!1,lineBreaks:!0}}
lightMarkdown.setOption=function(t,e){return optionsMarkDown[t]=!!e,this},lightMarkdown.getOption=function(t){return optionsMarkDown[t]},lightMarkdown.setFlavor=function(t){var e=flavors[t]
if(e)for(var i in e)e.hasOwnProperty(i)&&(optionsMarkDown[i]=e[i])
return this},lightMarkdown.toHtml=function(t){t=escapeHtml(t)
var e=[]
if(tokens.forEach(function(i){optionsMarkDown[i.name]&&(t=t.replace(i.regex,function(t,o,n){if(!n||i.requireNonTokens&&!regex.nonTokensChars.test(n)||1===i.token.length&&(n[0]===i.token||n.slice(-1)===i.token)||i.spaceWrapIgnored&&" "===n[0]&&" "===n.slice(-1))return t
if("function"==typeof i.processContent&&(n=i.processContent(n)),i.plainContent){var s=e.push(n)-1
n=plainToken+s}return o+"<"+i.elementName+">"+n+"</"+i.elementName+">"}))}),optionsMarkDown.longQuote&&(t=t.replace(regex.multilineQuote,function(t,e,i){return"&gt;&gt;&gt;"===t?t:(i=i.replace(/^([\s]*)(&gt;)*/,function(t,e,i){return i?t:""}),"<blockquote>"+i+"</blockquote>")})),optionsMarkDown.quote&&(t=t.replace(regex.singleLineQuote,function(t,e,i){return"&gt;"===t?t:(i=i.replace(/\n&gt;/g,"\n"),"<blockquote>"+i+"</blockquote>")})),optionsMarkDown.autoLink&&(t=t.replace(regex.url,function(t,e,i){return e+'<a href="'+i+'" target="_blank">'+i+"</a>"})),optionsMarkDown.paragraph){for(var i,o=[];i=regex.doubleLineBreak.exec(t);)o.push({start:i.index,length:i[0].length})
for(;i=regex.blockquoteTags.exec(t);)o.push({start:i.index,length:i[0].length,suffix:i[0]})
o.push({start:t.length,length:0}),o.sort(function(t,e){return t.start-e.start})
var n="",s=0
o.forEach(function(e){var i="",o=t.substring(s,e.start)
o&&(i="<p>"+o+"</p>"),e.suffix&&(i+=e.suffix),n+=i,s=e.start+e.length}),t=n}return optionsMarkDown.lineBreaks&&(t=t.replace(regex.singleLineBreak,"<br/>")),e.forEach(function(e,i){t=t.replace(plainToken+i,e)}),t},lightMarkdown.setFlavor("slack"),function(t,e){"use strict"
"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.emojify=e()}(this,function(){"use strict"
var t=function(){function t(){var t={named:/:([a-z0-9A-Z_-]+):/,smile:/:-?\)/g,open_mouth:/:o/gi,scream:/:-o/gi,smirk:/[:;]-?]/g,grinning:/[:;]-?d/gi,stuck_out_tongue_closed_eyes:/x-d/gi,stuck_out_tongue_winking_eye:/[:;]-?p/gi,rage:/:-?[\[@]/g,frowning:/:-?\(/g,sob:/:['’]-?\(|:&#x27;\(/g,kissing_heart:/:-?\*/g,wink:/;-?\)/g,pensive:/:-?\//g,confounded:/:-?s/gi,flushed:/:-?\|/g,relaxed:/:-?\$/g,mask:/:-x/gi,heart:/<3|&lt;3/g,broken_heart:/<\/3|&lt;&#x2F;3/g,thumbsup:/:\+1:/g,thumbsdown:/:\-1:/g}
return f.ignore_emoticons&&(t={named:/:([a-z0-9A-Z_-]+):/,thumbsup:/:\+1:/g,thumbsdown:/:\-1:/g}),Object.keys(t).map(function(e){return[t[e],e]})}function e(){var t=d.map(function(t){var e=t[0],i=e.source||e
return i=i.replace(/(^|[^\[])\^/g,"$1"),"("+i+")"}).join("|")
return new RegExp(t,"gi")}function i(t){return" "===t||"	"===t||"\r"===t||"\n"===t||""===t||t===String.fromCharCode(160)}function o(t){var e=null
if(t.replacer)e=t.replacer.apply({config:f},[":"+t.emojiName+":",t.emojiName])
else{var i=f.tag_type||m[f.mode]
e=t.win.document.createElement(i),"img"!==i?e.setAttribute("class","emoji emoji-"+t.emojiName):(e.setAttribute("align","absmiddle"),e.setAttribute("alt",":"+t.emojiName+":"),e.setAttribute("class","emoji"),e.setAttribute("src",f.img_dir+"/"+t.emojiName+".png")),e.setAttribute("title",":"+t.emojiName+":")}t.node.splitText(t.match.index),t.node.nextSibling.nodeValue=t.node.nextSibling.nodeValue.substr(t.match[0].length,t.node.nextSibling.nodeValue.length),e.appendChild(t.node.splitText(t.match.index)),t.node.parentNode.insertBefore(e,t.node.nextSibling)}function n(t){if(t[1]&&t[2]){var e=t[2]
if(p[e])return e}else for(var i=3;i<t.length-1;i++)if(t[i])return d[i-2][1]}function s(t,e){var i=this.config.tag_type||m[this.config.mode]
return"img"!==i?"<"+i+" class='emoji emoji-"+e+"' title=':"+e+":'></"+i+">":"<img align='absmiddle' alt=':"+e+":' class='emoji' src='"+this.config.img_dir+"/"+e+".png' title=':"+e+":' />"}function r(){this.lastEmojiTerminatedAt=-1}function a(i,o){if(!i)return i
o||(o=s),d=t(),l=e()
var n=new r
return i.replace(l,function(){var t=Array.prototype.slice.call(arguments,0,-2),e=arguments[arguments.length-2],i=arguments[arguments.length-1],s=n.validate(t,e,i)
return s?o.apply({config:f},[arguments[0],s]):arguments[0]})}function h(i,s){"undefined"==typeof i&&(i=f.only_crawl_id?document.getElementById(f.only_crawl_id):document.body)
var a=i.ownerDocument,h=a.defaultView||a.parentWindow,u=function(t,e){var i
if(t.hasChildNodes())for(i=t.firstChild;i;)e(i)&&u(i,e),i=i.nextSibling},c=function(t){for(var e,i=[],a=new r;null!==(e=l.exec(t.data));)a.validate(e,e.index,e.input)&&i.push(e)
for(var d=i.length;d-- >0;){var u=n(i[d])
o({node:t,match:i[d],emojiName:u,replacer:s,win:h})}}
d=t(),l=e()
var p=[],m=new RegExp(f.blacklist.elements.join("|"),"i"),g=new RegExp(f.blacklist.classes.join("|"),"i")
if("undefined"!=typeof h.document.createTreeWalker)for(var v,y=h.document.createTreeWalker(i,h.NodeFilter.SHOW_TEXT|h.NodeFilter.SHOW_ELEMENT,function(t){return 1!==t.nodeType?h.NodeFilter.FILTER_ACCEPT:t.tagName.match(m)||"svg"===t.tagName||t.className.match(g)?h.NodeFilter.FILTER_REJECT:h.NodeFilter.FILTER_SKIP},!1);null!==(v=y.nextNode());)p.push(v)
else u(i,function(t){return"undefined"!=typeof t.tagName&&t.tagName.match(m)||"undefined"!=typeof t.className&&t.className.match(g)?!1:1===t.nodeType?!0:(p.push(t),!0)})
p.forEach(c)}var d,l,u="+1,-1,100,1234,8ball,a,ab,abc,abcd,accept,aerial_tramway,airplane,alarm_clock,alien,ambulance,anchor,angel,anger,angry,anguished,ant,apple,aquarius,aries,arrow_backward,arrow_double_down,arrow_double_up,arrow_down,arrow_down_small,arrow_forward,arrow_heading_down,arrow_heading_up,arrow_left,arrow_lower_left,arrow_lower_right,arrow_right,arrow_right_hook,arrow_up,arrow_up_down,arrow_up_small,arrow_upper_left,arrow_upper_right,arrows_clockwise,arrows_counterclockwise,art,articulated_lorry,astonished,atm,b,baby,baby_bottle,baby_chick,baby_symbol,back,baggage_claim,balloon,ballot_box_with_check,bamboo,banana,bangbang,bank,bar_chart,barber,baseball,basketball,bath,bathtub,battery,bear,bee,beer,beers,beetle,beginner,bell,bento,bicyclist,bike,bikini,bird,birthday,black_circle,black_joker,black_medium_small_square,black_medium_square,black_nib,black_small_square,black_square,black_square_button,blossom,blowfish,blue_book,blue_car,blue_heart,blush,boar,boat,bomb,book,bookmark,bookmark_tabs,books,boom,boot,bouquet,bow,bowling,bowtie,boy,bread,bride_with_veil,bridge_at_night,briefcase,broken_heart,bug,bulb,bullettrain_front,bullettrain_side,bus,busstop,bust_in_silhouette,busts_in_silhouette,cactus,cake,calendar,calling,camel,camera,cancer,candy,capital_abcd,capricorn,car,card_index,carousel_horse,cat,cat2,cd,chart,chart_with_downwards_trend,chart_with_upwards_trend,checkered_flag,cherries,cherry_blossom,chestnut,chicken,children_crossing,chocolate_bar,christmas_tree,church,cinema,circus_tent,city_sunrise,city_sunset,cl,clap,clapper,clipboard,clock1,clock10,clock1030,clock11,clock1130,clock12,clock1230,clock130,clock2,clock230,clock3,clock330,clock4,clock430,clock5,clock530,clock6,clock630,clock7,clock730,clock8,clock830,clock9,clock930,closed_book,closed_lock_with_key,closed_umbrella,cloud,clubs,cn,cocktail,coffee,cold_sweat,collision,computer,confetti_ball,confounded,confused,congratulations,construction,construction_worker,convenience_store,cookie,cool,cop,copyright,corn,couple,couple_with_heart,couplekiss,cow,cow2,credit_card,crescent_moon,crocodile,crossed_flags,crown,cry,crying_cat_face,crystal_ball,cupid,curly_loop,currency_exchange,curry,custard,customs,cyclone,dancer,dancers,dango,dart,dash,date,de,deciduous_tree,department_store,diamond_shape_with_a_dot_inside,diamonds,disappointed,disappointed_relieved,dizzy,dizzy_face,do_not_litter,dog,dog2,dollar,dolls,dolphin,donut,door,doughnut,dragon,dragon_face,dress,dromedary_camel,droplet,dvd,e-mail,ear,ear_of_rice,earth_africa,earth_americas,earth_asia,egg,eggplant,eight,eight_pointed_black_star,eight_spoked_asterisk,electric_plug,elephant,email,end,envelope,es,euro,european_castle,european_post_office,evergreen_tree,exclamation,expressionless,eyeglasses,eyes,facepunch,factory,fallen_leaf,family,fast_forward,fax,fearful,feelsgood,feet,ferris_wheel,file_folder,finnadie,fire,fire_engine,fireworks,first_quarter_moon,first_quarter_moon_with_face,fish,fish_cake,fishing_pole_and_fish,fist,five,flags,flashlight,floppy_disk,flower_playing_cards,flushed,foggy,football,fork_and_knife,fountain,four,four_leaf_clover,fr,free,fried_shrimp,fries,frog,frowning,fu,fuelpump,full_moon,full_moon_with_face,game_die,gb,gem,gemini,ghost,gift,gift_heart,girl,globe_with_meridians,goat,goberserk,godmode,golf,grapes,green_apple,green_book,green_heart,grey_exclamation,grey_question,grimacing,grin,grinning,guardsman,guitar,gun,haircut,hamburger,hammer,hamster,hand,handbag,hankey,hash,hatched_chick,hatching_chick,headphones,hear_no_evil,heart,heart_decoration,heart_eyes,heart_eyes_cat,heartbeat,heartpulse,hearts,heavy_check_mark,heavy_division_sign,heavy_dollar_sign,heavy_exclamation_mark,heavy_minus_sign,heavy_multiplication_x,heavy_plus_sign,helicopter,herb,hibiscus,high_brightness,high_heel,hocho,honey_pot,honeybee,horse,horse_racing,hospital,hotel,hotsprings,hourglass,hourglass_flowing_sand,house,house_with_garden,hurtrealbad,hushed,ice_cream,icecream,id,ideograph_advantage,imp,inbox_tray,incoming_envelope,information_desk_person,information_source,innocent,interrobang,iphone,it,izakaya_lantern,jack_o_lantern,japan,japanese_castle,japanese_goblin,japanese_ogre,jeans,joy,joy_cat,jp,key,keycap_ten,kimono,kiss,kissing,kissing_cat,kissing_closed_eyes,kissing_face,kissing_heart,kissing_smiling_eyes,koala,koko,kr,large_blue_circle,large_blue_diamond,large_orange_diamond,last_quarter_moon,last_quarter_moon_with_face,laughing,leaves,ledger,left_luggage,left_right_arrow,leftwards_arrow_with_hook,lemon,leo,leopard,libra,light_rail,link,lips,lipstick,lock,lock_with_ink_pen,lollipop,loop,loudspeaker,love_hotel,love_letter,low_brightness,m,mag,mag_right,mahjong,mailbox,mailbox_closed,mailbox_with_mail,mailbox_with_no_mail,man,man_with_gua_pi_mao,man_with_turban,mans_shoe,maple_leaf,mask,massage,meat_on_bone,mega,melon,memo,mens,metal,metro,microphone,microscope,milky_way,minibus,minidisc,mobile_phone_off,money_with_wings,moneybag,monkey,monkey_face,monorail,mortar_board,mount_fuji,mountain_bicyclist,mountain_cableway,mountain_railway,mouse,mouse2,movie_camera,moyai,muscle,mushroom,musical_keyboard,musical_note,musical_score,mute,nail_care,name_badge,neckbeard,necktie,negative_squared_cross_mark,neutral_face,new,new_moon,new_moon_with_face,newspaper,ng,nine,no_bell,no_bicycles,no_entry,no_entry_sign,no_good,no_mobile_phones,no_mouth,no_pedestrians,no_smoking,non-potable_water,nose,notebook,notebook_with_decorative_cover,notes,nut_and_bolt,o,o2,ocean,octocat,octopus,oden,office,ok,ok_hand,ok_woman,older_man,older_woman,on,oncoming_automobile,oncoming_bus,oncoming_police_car,oncoming_taxi,one,open_file_folder,open_hands,open_mouth,ophiuchus,orange_book,outbox_tray,ox,package,page_facing_up,page_with_curl,pager,palm_tree,panda_face,paperclip,parking,part_alternation_mark,partly_sunny,passport_control,paw_prints,peach,pear,pencil,pencil2,penguin,pensive,performing_arts,persevere,person_frowning,person_with_blond_hair,person_with_pouting_face,phone,pig,pig2,pig_nose,pill,pineapple,pisces,pizza,plus1,point_down,point_left,point_right,point_up,point_up_2,police_car,poodle,poop,post_office,postal_horn,postbox,potable_water,pouch,poultry_leg,pound,pouting_cat,pray,princess,punch,purple_heart,purse,pushpin,put_litter_in_its_place,question,rabbit,rabbit2,racehorse,radio,radio_button,rage,rage1,rage2,rage3,rage4,railway_car,rainbow,raised_hand,raised_hands,raising_hand,ram,ramen,rat,recycle,red_car,red_circle,registered,relaxed,relieved,repeat,repeat_one,restroom,revolving_hearts,rewind,ribbon,rice,rice_ball,rice_cracker,rice_scene,ring,rocket,roller_coaster,rooster,rose,rotating_light,round_pushpin,rowboat,ru,rugby_football,runner,running,running_shirt_with_sash,sa,sagittarius,sailboat,sake,sandal,santa,satellite,satisfied,saxophone,school,school_satchel,scissors,scorpius,scream,scream_cat,scroll,seat,secret,see_no_evil,seedling,seven,shaved_ice,sheep,shell,ship,shipit,shirt,shit,shoe,shower,signal_strength,six,six_pointed_star,ski,skull,sleeping,sleepy,slot_machine,small_blue_diamond,small_orange_diamond,small_red_triangle,small_red_triangle_down,smile,smile_cat,smiley,smiley_cat,smiling_imp,smirk,smirk_cat,smoking,snail,snake,snowboarder,snowflake,snowman,sob,soccer,soon,sos,sound,space_invader,spades,spaghetti,sparkle,sparkler,sparkles,sparkling_heart,speak_no_evil,speaker,speech_balloon,speedboat,squirrel,star,star2,stars,station,statue_of_liberty,steam_locomotive,stew,straight_ruler,strawberry,stuck_out_tongue,stuck_out_tongue_closed_eyes,stuck_out_tongue_winking_eye,sun_with_face,sunflower,sunglasses,sunny,sunrise,sunrise_over_mountains,surfer,sushi,suspect,suspension_railway,sweat,sweat_drops,sweat_smile,sweet_potato,swimmer,symbols,syringe,tada,tanabata_tree,tangerine,taurus,taxi,tea,telephone,telephone_receiver,telescope,tennis,tent,thought_balloon,three,thumbsdown,thumbsup,ticket,tiger,tiger2,tired_face,tm,toilet,tokyo_tower,tomato,tongue,top,tophat,tractor,traffic_light,train,train2,tram,triangular_flag_on_post,triangular_ruler,trident,triumph,trolleybus,trollface,trophy,tropical_drink,tropical_fish,truck,trumpet,tshirt,tulip,turtle,tv,twisted_rightwards_arrows,two,two_hearts,two_men_holding_hands,two_women_holding_hands,u5272,u5408,u55b6,u6307,u6708,u6709,u6e80,u7121,u7533,u7981,u7a7a,uk,umbrella,unamused,underage,unlock,up,us,v,vertical_traffic_light,vhs,vibration_mode,video_camera,video_game,violin,virgo,volcano,vs,walking,waning_crescent_moon,waning_gibbous_moon,warning,watch,water_buffalo,watermelon,wave,wavy_dash,waxing_crescent_moon,waxing_gibbous_moon,wc,weary,wedding,whale,whale2,wheelchair,white_check_mark,white_circle,white_flower,white_large_square,white_medium_small_square,white_medium_square,white_small_square,white_square_button,wind_chime,wine_glass,wink,wolf,woman,womans_clothes,womans_hat,womens,worried,wrench,x,yellow_heart,yen,yum,zap,zero,zzz",c=u.split(/,/),p=c.reduce(function(t,e){return t[e]=!0,t},{}),f={blacklist:{ids:[],classes:["no-emojify"],elements:["script","textarea","a","pre","code"]},tag_type:null,only_crawl_id:null,img_dir:"images/emoji",ignore_emoticons:!1,mode:"img"},m={img:"img",sprite:"span","data-uri":"span"}
return r.prototype={validate:function(t,e,o){function s(){return r.lastEmojiTerminatedAt=d+e,a}var r=this,a=n(t)
if(a){var h=t[0],d=h.length
if(0===e)return s()
if(o.length===h.length+e)return s()
var l=this.lastEmojiTerminatedAt===e
if(l)return s()
if(i(o.charAt(e-1)))return s()
var u=i(o.charAt(h.length+e))
return u&&l?s():void 0}}},{defaultConfig:f,emojiNames:c,setConfig:function(t){Object.keys(f).forEach(function(e){e in t&&(f[e]=t[e])})},replace:a,run:h}}()
return t}),String.prototype.beginsWith=function(t){return 0===this.indexOf(t)},url_start=window.location.protocol+"//"+window.location.hostname+"/api/",days_interval=14,loading=$.loading(),loader_config={id:"visualization"},param_start=!1,dashboard_preferences={},selected_integrations={},integration_list={},$.ajax({url:window.location.protocol+"//"+window.location.hostname+"/api/integrations/getAll",contentType:"application/json",async:!1,success:function(t){getUserPreferences(t)},error:function(t,e,i){alert("Error Getting preferences..")},dataType:"json"}),items=new vis.DataSet,groups=new vis.DataSet,set_groups=!1,set_container=!1,set_event=!1,"undefined"==typeof start&&(end=new Date,start=getNextDate(end,-days_interval)),options={groupOrder:"content",editable:!1,groupEditable:!1,width:"100%",margin:{item:10},minHeight:"",maxHeight:"",zoomMin:1e6,zoomMax:12096e5,dataAttributes:"all"},newRelic_statuses={OPEN:"red",open:"red",ACKNOWLEDGED:"orange",acknowledged:"orange",CLOSED:"green",closed:"green",CLOSE:"green",close:"green"},pagerduty_statuses={triggered:"red",acknowledged:"orange",resolved:"green"},setIntegrationList(),param_start!==!1?(start=param_start,end=param_end,generateGroups(),generateContainer(),timeline.setWindow(param_start,param_end)):(generateGroups(),generateContainer(),setTimeout(function(){goToNow()},400)),generateDashboard(start,end),$(document).ready(function(){$("#zoomIn").mousedown(function(){interval=setInterval(function(){zoom(-.03)},35)}),$("#zoomIn").mouseup(function(){clearInterval(interval)}),$("#zoomOut").mousedown(function(){interval=setInterval(function(){zoom(.03)},35)}),$("#zoomOut").mouseup(function(){clearInterval(interval)}),$("#moveLeft").mousedown(function(){interval=setInterval(function(){move(.03)},35)}),$("#moveLeft").mouseup(function(){clearInterval(interval)}),$("#moveRight").mousedown(function(){interval=setInterval(function(){move(-.03)},35)}),$("#moveRight").mouseup(function(){clearInterval(interval)}),$("#button1").click(function(){goToNow()}),$("#share").click(function(){var t=getShareLink()
$("#linktext").empty(),$("#linktext").append(t),$("#linktext").on("mouseup",function(){$(this)[0].select()})
var e=new Clipboard("#copyToClipboard")
e.on("success",function(t){$("#linktext").qtip({content:{text:"Link Copied!",show:!0},position:{my:"bottom right",at:"top center"},style:{classes:"qtip-jtools nice_json"}}),$("#linktext").qtip("toggle",!0)}),e.on("error",function(t){$("#linktext").qtip({content:{text:"⌘ + C",show:!0},position:{my:"bottom right",at:"top center"},style:{classes:"qtip-jtools nice_json"}}),$("#linktext").qtip("toggle",!0)})}),setInterval(function(){$.ajax({url:window.location.protocol+"//"+window.location.hostname+"/event_logs/all_logs.log",success:function(t){var e=JSON.parse(t)
for(x=0;x<e.length;x++){var i=e[x]
if(i&&i.integration_name in integration_list){var o=integration_list[i.integration_name]
switch(i.integration_type){case"pagerduty":addPagerdutyItem(i.json_data,o.integration_group)
break
case"newrelic":addNewRelicItem(i.json_data,o.integration_group)
break
case"custom":addCustomItem(i.json_data,o.integration_group)}}}},error:function(t,e,i){console.log(err.Message),console.log(t.responseText),console.log(e)}})},1e4)})
