(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(2),l=n.n(i),o=(n(15),n(1)),c=n(3),s=n(4),u=n(7),m=n(5),h=n(6);n(16);function d(e){return a.a.createElement("button",{className:"square",id:e.id,onClick:e.onClick},e.number)}var f=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"newSquare",value:function(e){var t=this;return a.a.createElement(d,{id:this.props.id[e],onClick:function(){t.props.onClick(e)},number:this.props.numbers[e]})}},{key:"render",value:function(){for(var e=[],t=0;t<4;t++){for(var n=[],r=0;r<4;r++)n.push(this.newSquare(4*r+t));e.push(a.a.createElement("div",{className:"board-row"},n))}return a.a.createElement("div",{className:"board"},e)}}]),t}(r.Component);function v(e){for(var t=Array(e).fill(null),n=0;n<e;n++)t[n]=n+1;return t}function b(e){for(var t=Array(e).fill(null),n=Array(e).fill(!1),r=0;r!==e-1;){var a=Math.floor(Math.random()*e);!1===n[a]&&a!==e&&0!==a&&(t[r]=a,n[a]=!0,r++)}return t}var k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={id:v(16),numbers:b(16),sign:"Gra ci\u0105gle trwa",trwa:!0,moves:0},n.clickHandler=n.clickHandler.bind(Object(o.a)(Object(o.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"clickHandler",value:function(e){var t=this.state.numbers,n=this.state.sign,r=this.state.trwa,a=this.state.moves;if(!1!==r){a++,e%4!==0&&null===t[e-1]&&(t[e-1]=t[e],t[e]=null),e%4!==3&&null===t[e+1]&&(t[e+1]=t[e],t[e]=null),e-4>=0&&null===t[e-4]&&(t[e-4]=t[e],t[e]=null),e+4<=15&&null===t[e+4]&&(t[e+4]=t[e],t[e]=null);for(var i=!0,l=0;l<15;l++)if(t[l]!==this.state.id[l]){i=!1;break}!0===i&&(n="Koniec!",r=!1),this.setState({numbers:t,sign:n,trwa:r,moves:a})}}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("h1",null,this.state.sign),a.a.createElement("h1",null,"Wykonane ruchy: ",this.state.moves),a.a.createElement(f,{numbers:this.state.numbers,id:this.state.id,onClick:function(t){return e.clickHandler(t)}}))}}]),t}(r.Component),w=k;l.a.render(a.a.createElement(k,null),document.getElementById("root"));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.852d8d03.chunk.js.map