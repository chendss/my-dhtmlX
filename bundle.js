!function(t){var e={};function o(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},o.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=4)}([function(t,e,o){"use strict";o.r(e),o.d(e,"analysisParameterToId",function(){return s});const n=function(t){let e="";if(""===t.id){let o=function(){let t=(new Date).getTime();return""+(parseInt(1e3*Math.random())+1)+t}();t.setAttribute("id",o),e=t.id}else e=t.id;return e},s=function(t){let e,o=[];return(t=t instanceof Array?t:[t]).forEach(t=>{let e=document.querySelector(t);n(e);o.push(e.id)}),e=function(t){let e;return e=1===t.length?t[0]:t}(o)}},function(t,e,o){const{analysisParameterToId:n}=o(0);const s=new class{constructor(){this.dict={}}querySelector(t){let e=document.querySelector(t).id;return this.dict[e]}injectionElement(t,e){let o=n(t);(o=o instanceof Array?o:[o]).forEach(t=>{this.dict[t]=e})}};t.exports=s},function(t,e,o){const n=o(1),{analysisParameterToId:s}=o(0);t.exports=class extends dhtmlXCalendarObject{constructor(t){super(s(t)),n.injectionElement(t,this),this.config={}}monitorEvent(t,e){this.attachEvent(t,e)}injectionToDom(t){let e=s(t);this.attachObj(e)}}},function(t,e,o){const n=o(1),{analysisParameterToId:s}=o(0);t.exports=class extends dhtmlXAccordion{constructor(t){super(s(t)),this.config={hideSet:new Set([]),eventTags:{onItemClick:"onActive",onItemClickBeFor:"onBeforeActive",onBeforeDrag:"onBeforeDrag",onContentLoaded:"onContentLoaded","回到文档流":"onDock","脱离文档流":"onUnDock",onDrop:"onDrop",onDataLoad:"onXLE",onXLS:"onXLS"}},n.injectionElement(t,this)}eventDict(){return this.config.eventTags}monitorEvent(t,e){this.attachEvent(t,e)}addItem_(t,e,o,n,s){return this.addItem(...arguments)}monitorEvent(t,e){return this.attachEvent(t,e)}addFooter(t,e=null){null===e?this.attachFooter(t):this.attachFooter(t,e)}addHeader(t,e=null){null===e?this.attachHeader(t):this.attachHeader(t,e)}addMenuToHeader(t){return this.accordion.attachMenu(t)}addRibbonToHeader(t){return this.attachRibbon(t)}addStatusBarToBottom(t){return this.attachStatusBar(t)}addToolbarToHeader(t){return this.attachToolbar(t)}chose(t){let e=null;try{e=this.cells(t)}catch(t){console.log("未找到此元素")}return e}clearIcon_(t){let e=this.chose(t);null!==e&&e.clearIcon()}close_item(t){let e=this.chose(t);null!==e&&e.close()}delEvent(t){this.detachEvent(t)}delFooter(){this.detachFooter()}delHeader(){this.detachHeader()}delMenu(){this.detachMenu()}delRibbon(){this.detachRibbon()}delStatusBar(){this.detachStatusBar()}delToolbar(){this.detachToolbar()}openDND(t=!0){this.enableMultiMode(),this.enableDND()}openMultiMode(){this.enableMultiMode()}items(){let t=[];return this.forEachItem(e=>{t.push(e)}),t}eachItem(t){this.forEachItem(t)}getMenu(){return this.getAttachedMenu()}getRibbon(){return this.getAttachedRibbon()}getStatusBar(){return this.getAttachedStatusBar()}getToolbar(){return this.getAttachedToolbar()}getItemText(t){return this.chose(t).getText()}itemTexts(){let t=[];return this.forEachItem(e=>{t.push(e.getText())}),t}hideItem_(t){this.chose(t).hide(),this.config.hideSet.add(t)}showItem(t){this.chose(t).show(),this.config.hideSet.delete(t)}toggleItem(t){this.config.hideSet.has(t)?this.showItem(t):this.hide_Item(t)}hideRibbon_(){this.hideRibbon()}hideStatusBar_(){this.hideStatusBar()}hideToolbar(){this.hideToolbar()}isOpen(t){return this.chose(t).isOpened()}isItemHidden(t){return this.chose(t).isVisible()}loadFile(t,e){this.loadStruct(t,e)}moveOnTop(t){this.chose(t).moveOnTop()}openItem(t){this.chose(t).open()}openLoading(){this.progressOn()}endLoading(){this.progressOff()}removeItem_(t){this.removeItem(t)}setIcon(t,e){this.chose(t).setIcon(e)}setIconsPath_(t){this.setIconsPath(t)}setIconFont(t){this.setIconset(t)}setItemHeight(t,e){this.chose(t).setHeight(e)}setItemDy(t){this.setOffset(t)}setMargin(t){this.setOffsets(t)}autoLayout(){this.setSizes()}setTheme(t){this.setSkin(t)}setText(t,e){this.chose(t).setText(e)}showMenu_(){this.showMenu()}showRibbon_(){this.showRibbon()}showStatusBar_(){this.showStatusBar()}showToolbar_(){this.showToolbar()}delSelf(){this.unload()}dock_(t){this.chose(t).dock()}unDock_(t,e){this.chose(t).undock(...e)}linkWindow(){this.dhxWins.attachViewportTo()}}},function(t,e,o){const n=o(1),s=(o(3),o(2));window.addEventListener("load",()=>{var t=new s(["#i1","#i2"]);document.querySelector("#b1").addEventListener("click",()=>{n.querySelector(".fuck"),t.injectionToDom("#i3")})})}]);