// ==UserScript==
// @name         BotaSupervivientesNow
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  try to take over the world!
// @author       Secret
// @match        https://app.ex.co/stories/item/43854fd0-26bc-4cc6-a597-f1e94c37d027
// @icon         https://www.google.com/s2/favicons?sz=64&domain=telecinco.es
// @grant        none
// @license MIT
// @run-at       document-end
// ==/UserScript==

(function() {
    
     const _0x3444ff=_0x4725;(function(_0x49be41,_0x9de101){const _0x2b0714=_0x4725,_0x47b44c=_0x49be41();while(!![]){try{const _0x4c1f98=-parseInt(_0x2b0714(0x13c))/0x1+parseInt(_0x2b0714(0x11d))/0x2+-parseInt(_0x2b0714(0x122))/0x3+parseInt(_0x2b0714(0x126))/0x4*(parseInt(_0x2b0714(0x138))/0x5)+parseInt(_0x2b0714(0x11e))/0x6*(-parseInt(_0x2b0714(0x12e))/0x7)+parseInt(_0x2b0714(0x133))/0x8*(parseInt(_0x2b0714(0x148))/0x9)+parseInt(_0x2b0714(0x121))/0xa*(parseInt(_0x2b0714(0x13a))/0xb);if(_0x4c1f98===_0x9de101)break;else _0x47b44c['push'](_0x47b44c['shift']());}catch(_0x129c07){_0x47b44c['push'](_0x47b44c['shift']());}}}(_0x3564,0xbba45),localStorage[_0x3444ff(0x135)]());function randomIntFromInterval(_0x4a3c42,_0x171b09){const _0x48f979=_0x3444ff;return Math[_0x48f979(0x13e)](Math['random']()*(_0x171b09-_0x4a3c42+0x1)+_0x4a3c42);}const rndInt=randomIntFromInterval(0x16,0x16),rndPon=randomIntFromInterval(0x3,0x4);let SEGUNDOS,getit=!![],ELIGE_VOTADO;ELIGE_VOTADO=0x2;let ELIGE_TIEMPO,TIEMPO_DESCANSO=0x7,textelegido,sumatorio,textsumatorio;function _0x4725(_0x5bd0a8,_0x33150f){const _0x3564ec=_0x3564();return _0x4725=function(_0x4725bd,_0x22ed39){_0x4725bd=_0x4725bd-0x11c;let _0x5e4d6f=_0x3564ec[_0x4725bd];return _0x5e4d6f;},_0x4725(_0x5bd0a8,_0x33150f);}function setCookie(_0x5c0fb3,_0x5f5ca0,_0x2db4a2){const _0x169a07=_0x3444ff;var _0x4879b7='';if(_0x2db4a2){var _0x1a2863=new Date();_0x1a2863[_0x169a07(0x145)](_0x1a2863[_0x169a07(0x11f)]()+_0x2db4a2*0x18*0x3c*0x3c*0x3e8),_0x4879b7=_0x169a07(0x12f)+_0x1a2863['toUTCString']();}document[_0x169a07(0x140)]=_0x5c0fb3+'='+(_0x5f5ca0||'')+_0x4879b7+_0x169a07(0x11c);}const getCookieValue=_0x39f233=>document[_0x3444ff(0x140)]['match'](_0x3444ff(0x128)+_0x39f233+_0x3444ff(0x146))?.[_0x3444ff(0x142)]()||'';typeof getCookieValue('tiempovoto')==='undefined'||getCookieValue(_0x3444ff(0x131))==''?(ELIGE_TIEMPO=0x16,SEGUNDOS=ELIGE_TIEMPO):(ELIGE_TIEMPO=getCookieValue(_0x3444ff(0x131)),SEGUNDOS=ELIGE_TIEMPO);function _0x3564(){const _0x89e636=['getTime','boton2','60DgdHvN','4128195slSNdj','undefined','createElement','sumatorio','172utXjQu','\x20minutos\x20para\x20volver\x20a\x20votar,\x20no\x20te\x20desesperes\x20si\x20el\x20bot\x20no\x20vota,\x20deja\x20que\x20descanse\x20los\x20minutos\x20necesarios\x20en\x20un\x20rato\x20volverá\x20a\x20votar\x20automaticamente...\x20no\x20toques\x20nada\x20-^.^-\x20⛔⛔','(^|;)\x5cs*','body','innerText','TIEMPO\x20ENTRE\x20VOTO\x20Y\x20VOTO\x20=\x20','BAJA\x20SEGUNDOS\x20ENTRE\x20VOTOS','getElementsByTagName','28UNIMwU',';\x20expires=','getElementById','tiempovoto','<br/>','929336lGVZyk','getElementsByClassName','clear','tiempovotoy','button','41795tLpQua','reload','4793481ziChwE','span','907375babpGj','innerHTML','floor','boton1','cookie','onclick','pop','question-text','div','setTime','\x5cs*=\x5cs*([^;]+)','Vas\x20a\x20votar\x20automaticamente\x20a\x20Bosco,\x20deja\x20que\x20el\x20bot\x20vote\x20solo,\x20no\x20toques\x20nada,\x20si\x20hay\x20algún\x20problema\x20tecnico\x20como\x20que\x20no\x20vote\x20nunca,\x20avisanos\x20-^.^-','72CIgOta','appendChild',';\x20path=/','409060TnTZNP','1583862gaCZQG'];_0x3564=function(){return _0x89e636;};return _0x3564();}typeof getCookieValue(_0x3444ff(0x125))===_0x3444ff(0x123)||getCookieValue(_0x3444ff(0x125))==''?sumatorio=0x1:(textsumatorio=getCookieValue(_0x3444ff(0x125)),sumatorio=parseInt(textsumatorio,0xa),sumatorio++);let divtext=document[_0x3444ff(0x124)](_0x3444ff(0x144));divtext['id']=_0x3444ff(0x136),divtext['innerHTML']='TIEMPO\x20ENTRE\x20VOTO\x20Y\x20VOTO\x20=\x20'+String(SEGUNDOS)+_0x3444ff(0x132),document[_0x3444ff(0x129)][_0x3444ff(0x149)](divtext);let btn=document[_0x3444ff(0x124)](_0x3444ff(0x137));btn['id']=_0x3444ff(0x13f),btn[_0x3444ff(0x13d)]='SUBE\x20SEGUNDOS\x20ENTRE\x20VOTOS',document[_0x3444ff(0x129)][_0x3444ff(0x149)](btn);let btn2=document[_0x3444ff(0x124)]('button');btn2['id']=_0x3444ff(0x120),btn2[_0x3444ff(0x13d)]=_0x3444ff(0x12c),document[_0x3444ff(0x129)][_0x3444ff(0x149)](btn2),document[_0x3444ff(0x130)]('boton1')[_0x3444ff(0x141)]=function(){subebaja(0x0);},document['getElementById'](_0x3444ff(0x120))[_0x3444ff(0x141)]=function(){subebaja(0x1);};function subebaja(_0xf12c39){const _0x5390b3=_0x3444ff;if(_0xf12c39==0x0)ELIGE_TIEMPO++,SEGUNDOS=ELIGE_TIEMPO;else _0xf12c39==0x1&&ELIGE_TIEMPO>=0x2&&(ELIGE_TIEMPO--,SEGUNDOS=ELIGE_TIEMPO);document[_0x5390b3(0x130)](_0x5390b3(0x136))[_0x5390b3(0x13d)]=_0x5390b3(0x12b)+String(SEGUNDOS)+_0x5390b3(0x132),setCookie(_0x5390b3(0x131),SEGUNDOS,0x2);}if(sumatorio>=0x34){if(sumatorio==0x34)TIEMPO_DESCANSO=0x6;else{if(sumatorio==0x35)TIEMPO_DESCANSO=0x5;else{if(sumatorio==0x36)TIEMPO_DESCANSO=0x4;else{if(sumatorio==0x37)TIEMPO_DESCANSO=0x3;else{if(sumatorio==0x38)TIEMPO_DESCANSO=0x2;else sumatorio==0x39&&(TIEMPO_DESCANSO=0x1);}}}}document[_0x3444ff(0x134)](_0x3444ff(0x143))[0x0]['getElementsByTagName'](_0x3444ff(0x13b))[0x0][_0x3444ff(0x12a)]='⛔⛔\x20Estamos\x20en\x20el\x20descanso,\x20quedan\x20'+String(TIEMPO_DESCANSO)+_0x3444ff(0x127),setTimeout(function(){location['reload']();},0xea60);}else document['getElementsByClassName'](_0x3444ff(0x143))[0x0][_0x3444ff(0x12d)](_0x3444ff(0x13b))[0x0][_0x3444ff(0x12a)]=_0x3444ff(0x147);let ic=0x0;setInterval(function(){const _0x5ac923=_0x3444ff;getit==!![]&&(sumatorio<0x34&&document['getElementsByClassName']('answer-wrapper')[ELIGE_VOTADO-0x1][_0x5ac923(0x12d)](_0x5ac923(0x144))[0x0][_0x5ac923(0x12d)](_0x5ac923(0x137))[0x0]['click'](),getit=![]);if(sumatorio>=0x34){if(sumatorio==0x34)TIEMPO_DESCANSO=0x6;else{if(sumatorio==0x35)TIEMPO_DESCANSO=0x5;else{if(sumatorio==0x36)TIEMPO_DESCANSO=0x4;else{if(sumatorio==0x37)TIEMPO_DESCANSO=0x3;else{if(sumatorio==0x38)TIEMPO_DESCANSO=0x2;else sumatorio==0x39&&(TIEMPO_DESCANSO=0x1);}}}}document[_0x5ac923(0x134)](_0x5ac923(0x143))[0x0][_0x5ac923(0x12d)](_0x5ac923(0x13b))[0x0][_0x5ac923(0x12a)]='⛔⛔\x20Estamos\x20en\x20el\x20descanso,\x20quedan\x20'+String(TIEMPO_DESCANSO)+_0x5ac923(0x127),setTimeout(function(){const _0x4f9318=_0x5ac923;location[_0x4f9318(0x139)]();},0xea60);}else setTimeout(function(){const _0x9dd79a=_0x5ac923;location[_0x9dd79a(0x139)]();},SEGUNDOS*0x3e8);},rndPon*0x3e8);sumatorio>=0x39&&(sumatorio=0x1);setCookie(_0x3444ff(0x125),sumatorio,0x2),setCookie(_0x3444ff(0x131),SEGUNDOS,0x2);

})();