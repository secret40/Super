// ==UserScript==
// @name         BotaSupervivientesNow
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  try to take over the world!
// @author       Secret
// @match        https://app.ex.co/stories/item/28480866-5f87-4959-b8e7-a57452d05d01
// @icon         https://www.google.com/s2/favicons?sz=64&domain=telecinco.es
// @grant        none
// @license MIT
// @run-at       document-end
// ==/UserScript==

(function() {
    
     const _0x4765fd=_0x4af4;(function(_0x459967,_0x49ec24){const _0x1456ba=_0x4af4,_0x1c760f=_0x459967();while(!![]){try{const _0x5de7f1=parseInt(_0x1456ba(0xd1))/0x1*(parseInt(_0x1456ba(0xca))/0x2)+parseInt(_0x1456ba(0xb7))/0x3+parseInt(_0x1456ba(0xb8))/0x4+parseInt(_0x1456ba(0xc4))/0x5*(-parseInt(_0x1456ba(0xc5))/0x6)+parseInt(_0x1456ba(0xbf))/0x7*(-parseInt(_0x1456ba(0xd2))/0x8)+parseInt(_0x1456ba(0xd3))/0x9+-parseInt(_0x1456ba(0xd4))/0xa;if(_0x5de7f1===_0x49ec24)break;else _0x1c760f['push'](_0x1c760f['shift']());}catch(_0x883858){_0x1c760f['push'](_0x1c760f['shift']());}}}(_0x3c23,0x70293),localStorage[_0x4765fd(0xc1)]());function randomIntFromInterval(_0x1d5315,_0x227b87){const _0x4a3717=_0x4765fd;return Math[_0x4a3717(0xcf)](Math[_0x4a3717(0xc7)]()*(_0x227b87-_0x1d5315+0x1)+_0x1d5315);}const rndInt=randomIntFromInterval(0x1b,0x20),rndPon=randomIntFromInterval(0x2,0x4);let SEGUNDOS,getit=!![],ELIGE_VOTADO;ELIGE_VOTADO=0x3;function _0x4af4(_0x2f1bf2,_0x50da37){const _0x3c23f5=_0x3c23();return _0x4af4=function(_0x4af4ca,_0x46579b){_0x4af4ca=_0x4af4ca-0xb7;let _0x16e867=_0x3c23f5[_0x4af4ca];return _0x16e867;},_0x4af4(_0x2f1bf2,_0x50da37);}let ELIGE_TIEMPO;ELIGE_TIEMPO=rndInt,SEGUNDOS=ELIGE_TIEMPO;function _0x3c23(){const _0xf52a88=['match','801741RomKmg','1797448PvPSUk','innerText','pop','sumatorio','toUTCString','reload','question-text','2251627YsLpJV',';\x20expires=','clear','\x5cs*=\x5cs*([^;]+)','getElementsByClassName','40DZEsGu','420558YHTRGp','Vas\x20a\x20votar\x20automaticamente\x20a\x20Raquel,\x20deja\x20que\x20el\x20bot\x20vote\x20solo,\x20no\x20toques\x20nada,\x20si\x20hay\x20algún\x20problema\x20tecnico\x20como\x20que\x20no\x20vote\x20nunca,\x20avisanos\x20-^.^-','random','setTime','span','1257404RWSyKG','click','⛔⛔\x20Estamos\x20en\x20el\x20descanso,\x20quedan\x20','\x20minutos\x20para\x20volver\x20a\x20votar,\x20no\x20te\x20desesperes\x20si\x20el\x20bot\x20no\x20vota,\x20deja\x20que\x20descanse\x20los\x20minutos\x20necesarios\x20en\x20un\x20rato\x20volverá\x20a\x20votar\x20automaticamente...\x20no\x20toques\x20nada\x20-^.^-\x20⛔⛔','getElementsByTagName','floor','(^|;)\x5cs*','1RhYNsf','16MNydDI','6545286WTgqgP','4090880LCzfRU','cookie','answer-wrapper','undefined'];_0x3c23=function(){return _0xf52a88;};return _0x3c23();}let TIEMPO_DESCANSO=0x7,textelegido,sumatorio,textsumatorio;function setCookie(_0x340fcf,_0x438424,_0x4845a3){const _0x52ed0d=_0x4765fd;var _0x55e5bb='';if(_0x4845a3){var _0x3fb6b3=new Date();_0x3fb6b3[_0x52ed0d(0xc8)](_0x3fb6b3['getTime']()+_0x4845a3*0x18*0x3c*0x3c*0x3e8),_0x55e5bb=_0x52ed0d(0xc0)+_0x3fb6b3[_0x52ed0d(0xbc)]();}document['cookie']=_0x340fcf+'='+(_0x438424||'')+_0x55e5bb+';\x20path=/';}const getCookieValue=_0x551dd9=>document[_0x4765fd(0xd5)][_0x4765fd(0xd8)](_0x4765fd(0xd0)+_0x551dd9+_0x4765fd(0xc2))?.[_0x4765fd(0xba)]()||'';typeof getCookieValue(_0x4765fd(0xbb))===_0x4765fd(0xd7)||getCookieValue(_0x4765fd(0xbb))==''?sumatorio=0x1:(textsumatorio=getCookieValue(_0x4765fd(0xbb)),sumatorio=parseInt(textsumatorio,0xa),sumatorio++);if(sumatorio>=0x34){if(sumatorio==0x34)TIEMPO_DESCANSO=0x6;else{if(sumatorio==0x35)TIEMPO_DESCANSO=0x5;else{if(sumatorio==0x36)TIEMPO_DESCANSO=0x4;else{if(sumatorio==0x37)TIEMPO_DESCANSO=0x3;else{if(sumatorio==0x38)TIEMPO_DESCANSO=0x2;else sumatorio==0x39&&(TIEMPO_DESCANSO=0x1);}}}}document['getElementsByClassName'](_0x4765fd(0xbe))[0x0]['getElementsByTagName']('span')[0x0][_0x4765fd(0xb9)]=_0x4765fd(0xcc)+String(TIEMPO_DESCANSO)+_0x4765fd(0xcd),setTimeout(function(){const _0xb4893f=_0x4765fd;location[_0xb4893f(0xbd)]();},0xea60);}else document[_0x4765fd(0xc3)](_0x4765fd(0xbe))[0x0][_0x4765fd(0xce)]('span')[0x0][_0x4765fd(0xb9)]=_0x4765fd(0xc6);let ic=0x0;setInterval(function(){const _0x35d14e=_0x4765fd;getit==!![]&&(sumatorio<0x34&&document[_0x35d14e(0xc3)](_0x35d14e(0xd6))[ELIGE_VOTADO-0x1][_0x35d14e(0xce)]('div')[0x0][_0x35d14e(0xce)]('button')[0x0][_0x35d14e(0xcb)](),getit=![]);if(sumatorio>=0x34){if(sumatorio==0x34)TIEMPO_DESCANSO=0x6;else{if(sumatorio==0x35)TIEMPO_DESCANSO=0x5;else{if(sumatorio==0x36)TIEMPO_DESCANSO=0x4;else{if(sumatorio==0x37)TIEMPO_DESCANSO=0x3;else{if(sumatorio==0x38)TIEMPO_DESCANSO=0x2;else sumatorio==0x39&&(TIEMPO_DESCANSO=0x1);}}}}document[_0x35d14e(0xc3)](_0x35d14e(0xbe))[0x0]['getElementsByTagName'](_0x35d14e(0xc9))[0x0][_0x35d14e(0xb9)]=_0x35d14e(0xcc)+String(TIEMPO_DESCANSO)+_0x35d14e(0xcd),setTimeout(function(){const _0x1e2eff=_0x35d14e;location[_0x1e2eff(0xbd)]();},0xea60);}else setTimeout(function(){const _0x3522bc=_0x35d14e;location[_0x3522bc(0xbd)]();},SEGUNDOS*0x3e8);},rndPon*0x3e8);sumatorio>=0x39&&(sumatorio=0x1);setCookie('sumatorio',sumatorio,0x2);

})();