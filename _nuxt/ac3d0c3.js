(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(t,n,e){"use strict";e.r(n);var o=e(99),r={data:function(){return{isStarted:!1,synth:null,isRings:!1}},methods:{appStart:function(){this.isStarted=!0,this.synth=(new o.b).toDestination()},ringStart:function(){this.isRings=!0,this.ring()},ringStop:function(){this.isRings=!1,this.ring()},ring:function(t){var n=new o.a("E1").toFrequency(),e=new o.a("E5").toFrequency(),r=0,c=0;void 0!==t&&(void 0!==t.touches&&t.touches.length>0?(r=-t.touches[0].clientX,c=t.touches[0].clientY):(r=t.clientX,c=t.clientY));var h=document.getElementById("touchZone").clientHeight,l=Math.round(c/h*-36);console.log(l),this.synth.volume.value=l;var d=document.getElementById("touchZone").clientWidth,f=Math.round(r*(e-n)/d)+n;this.isRings?this.synth.triggerAttack(f):this.synth.triggerRelease()}}},c=(e(217),e(45)),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",{staticClass:"main"},[!1===t.isStarted?e("button",{staticClass:"startBtn",on:{click:t.appStart}},[t._v("\n    Start\n  ")]):e("section",{staticClass:"touchZone",attrs:{id:"touchZone"},on:{mousedown:t.ringStart,touchstart:t.ringStart,mouseup:t.ringStop,touchend:t.ringStop,mouseleave:t.ringStop,touchleave:t.ringStop,mousemove:t.ring,touchmove:t.ring}},[t._v(" ")])])}),[],!1,null,null,null);n.default=component.exports},162:function(t,n,e){var content=e(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(97).default)("ce48eb08",content,!0,{sourceMap:!1})},174:function(t,n,e){e(175),t.exports=e(176)},217:function(t,n,e){"use strict";e(162)},218:function(t,n,e){var o=e(96)(!1);o.push([t.i,".main{width:100%;height:100vh;display:flex;justify-content:center;align-items:center}.startBtn{border:1px solid #000;border-radius:10px;padding:10px 20px}.touchZone{background:linear-gradient(45deg,#fff,#64ffff);width:100%;min-width:100%;height:100vh;min-height:100vh}",""]),t.exports=o}},[[174,3,1,4]]]);