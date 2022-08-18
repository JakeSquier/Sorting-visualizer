(this["webpackJsonpsorting-visualizer"]=this["webpackJsonpsorting-visualizer"]||[]).push([[0],{23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a.n(r),s=a(17),i=a.n(s),c=(a(23),a(14)),o=a(2),l=a.n(o),u=a(1),h=a(5),b=a(8),d=a(9),g=a(11),m=a(10),p=(a(25),a(0)),x=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:this.props.state.showNav?"navTrigger":"navTrigger active",onClick:this.props.handleNavToggle,children:[Object(p.jsx)("i",{}),Object(p.jsx)("i",{}),Object(p.jsx)("i",{})]}),Object(p.jsxs)("div",{className:"nav-container",style:{marginLeft:"".concat(this.props.state.showNav?"-100%":"0")},children:[Object(p.jsxs)("div",{className:"sortBtnContainer",children:[Object(p.jsx)("button",{className:"sortBtn",id:"bubbleSortBtn",onClick:function(t){e.props.handleSelected(t),e.props.state.currAlg="Bubble-Sort"},children:"Bubble sort"}),Object(p.jsx)("button",{className:"sortBtn",id:"mergeSortBtn",onClick:function(t){e.props.state.currAlg="Merge-Sort",e.props.handleSelected(t)},children:"Merge sort"}),Object(p.jsx)("button",{className:"sortBtn",id:"quickSortBtn",onClick:function(t){e.props.state.currAlg="Quick-Sort",e.props.handleSelected(t)},children:"Quick sort"}),Object(p.jsx)("button",{className:"sortBtn",id:"insertionSortBtn",onClick:function(t){e.props.state.currAlg="Insertion-Sort",e.props.handleSelected(t)},children:"Insertion sort"})]}),Object(p.jsxs)("div",{className:"slideContainer",children:[Object(p.jsx)("input",{type:"range",min:"10",max:"100",class:"slider",id:"myRange",onChange:this.props.changeArrSize}),Object(p.jsxs)("p",{className:"slideInfo",children:["Array size: ",Object(p.jsx)("span",{className:"slideVal",children:this.props.state.arrSize})]})]}),Object(p.jsxs)("div",{className:"speedSliderContainer",children:[Object(p.jsx)("input",{type:"range",min:1,max:16,class:"slider",id:"speedSlider",onChange:this.props.changeAnimationSpeed}),Object(p.jsxs)("p",{className:"slideInfo",id:"speedSliderInfo",children:["Speed: ",Object(p.jsx)("span",{className:"slideVal",children:this.props.state.animationSpeed})]})]}),Object(p.jsx)("button",{className:"sortBtn",id:"newArrBtn",onClick:this.props.reset,children:"New Array"})]})]})}}]),a}(n.a.Component);function f(e,t,a){var r=0;if(!(r<e.length))return r=0,t;for(var n=0;n<e.length-r-1;n++){e[n]>e[n+1]&&(v(e,n,n+1),t.push([n,n+1,!0,a]))}return r++,t}var v=function(e,t,a){var r=e[t];e[t]=e[a],e[a]=r};function j(e){var t=[];if(e.length<=1)return e;var a=e.slice();return S(e,0,e.length-1,a,t),t}function S(e,t,a,r,n){if(t!==a){var s=Math.floor((t+a)/2);S(r,t,s,e,n),S(r,s+1,a,e,n),function(e,t,a,r,n,s){var i=t,c=t,o=a+1;for(;c<=a&&o<=r;)s.push([c,o,!1]),s.push([c,o,!1]),n[c]<=n[o]?(s.push([i,n[c],!0,n[o]]),e[i++]=n[c++]):(s.push([i,n[o],!0,n[c]]),e[i++]=n[o++]);for(;c<=a;)s.push([c,c,!1]),s.push([c,c,!1]),console.log(n[c],c),s.push([i,n[c],!0,n[i]]),e[i++]=n[c++];for(;o<=r;)s.push([o,o,!1]),s.push([o,o,!1]),console.log(n[o],e[o]),s.push([i,n[o],!0,n[c]]),e[i++]=n[o++]}(e,t,s,a,r,n)}}function y(e,t,a){var r=e[t];e[t]=e[a],e[a]=r}function k(e,t,a,r){var n;return e.length>1&&(t<(n=function(e,t,a,r){for(var n=e[Math.floor((a+t)/2)],s=t,i=a;s<=i;){for(;e[s]<n;)s++;for(;e[i]>n;)i--;s<=i&&(y(e,s,i),r.push([s,i,!0]),s++,i--)}return s}(e,t,a,r))-1&&k(e,t,n-1,r),n<a&&k(e,n,a,r)),e}function A(e,t){for(var a=0;a<e.length;a++){for(var r=e[a],n=a-1;n>=0&&e[n]>r;)e[n+1]=e[n],t.push([n,n+1]),n--;e[n+1]=r}return t}var O=a(37);a(27);function C(e){return new Promise((function(t){return setTimeout(t,e)}))}var w=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(b.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={array:[],arrRange:300,arrSize:50,animationSpeed:16,play:!1,animations:[],currAnimations:[],isSorted:!1,showNav:!0,isSorting:!1,currAlg:"Bubble-Sort",fadeIn:!1,cout:0},e.previousArr=[],e.resetArray=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.state.fadeIn=!1;var r=[],n=e.state.arrSize;if(null===a)for(var s=0;s<n-1;s++)r.push(e.randomIntFromInterval(10,e.state.arrRange));else r=a;console.log(r),setTimeout((function(){for(var e=document.getElementsByClassName("arr-bar"),t=0;t<e.length;t++)e[t].style.backgroundColor="#19bc8b"}),200);var i=document.querySelector("#bar");i.value=0,i.max=r.length,e.previousArr=r,e.setState({array:r,isSorted:!1,fadeIn:!0})},e.repeatArr=function(){var t=e.previousArr;e.resetArray(null,t)},e.changeArrSize=function(t){e.setState({arrSize:t.target.value}),e.resetArray()},e.changeAnimationSpeed=function(t){e.setState({animationSpeed:t.target.value})},e.animateBubbleSort=function(){var t=Object(h.a)(l.a.mark((function t(a){var r,n,s,i,c,o,h,b,d,g,m,p=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=p.length>1&&void 0!==p[1]?p[1]:[],e.state.isSorted){t.next=44;break}if(e.state.isSorted=!0,e.state.isSorting=!0,n=Object(u.a)(e.state.array),e.state.array.length,s=[],i=document.querySelector("#bar"),r.length<1)for(c=0;c<e.state.arrSize;c++)f(n,s,c,n.length),n=Object(u.a)(n),i.max=s.length,e.state.animations=s;else s=r,e.state.play=!0;o=0;case 10:if(!(o<s.length)){t.next=41;break}if(!0!==e.state.play){t.next=35;break}if(h=document.getElementsByClassName("arr-bar"),b=s[o],d=h[b[0]],g=h[b[1]],!b[2]){t.next=27;break}return d.style.backgroundColor="red",g.style.backgroundColor="aquamarine",t.next=21,C(e.state.animationSpeed);case 21:m=d.style.height,d.style.height=g.style.height,g.style.height=m,d.style.backgroundColor="aquamarine",t.next=31;break;case 27:return d.style.backgroundColor="aquamarine",g.style.backgroundColor="aquamarine",t.next=31,C(o*e.state.animationSpeed);case 31:i.value++,e.state.currAnimations=[Object(u.a)(s.slice(o,s.length)),e.animateBubbleSort,o,s],t.next=38;break;case 35:return e.state.isSorting=!1,e.state.currAnimations=[Object(u.a)(s.slice(o,s.length)),e.animateBubbleSort,o,s],t.abrupt("return");case 38:o++,t.next=10;break;case 41:e.handleFinish(),t.next=47;break;case 44:return e.setState({isSorted:!1}),e.resetArray(),t.abrupt("return");case 47:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.animateMergeSort=function(){var t=Object(h.a)(l.a.mark((function t(a){var r,n,s,i,o,h,b,d,g,m,p,x,f,v,S,y=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=y.length>1&&void 0!==y[1]?y[1]:[],n=y.length>2&&void 0!==y[2]?y[2]:0,e.state.isSorted){t.next=43;break}e.state.isSorted=!0,e.state.isSorting=!0,s=[],i=document.querySelector("#bar"),o=document.getElementsByClassName("arr-bar"),r.length<1?(h=Object(u.a)(e.state.array),s=j(h),i.max=s.length,e.state.animations=s):(s=r,e.state.play=!0),b=0;case 10:if(!(b<s.length)){t.next=40;break}if(!0!==e.state.play){t.next=34;break}if(s[b][2]){t.next=25;break}return d=s[b][0],g=s[b][1],m=o[d].style,p=o[g].style,x=(n+b)%3===0?"red":"aquamarine",t.next=21,C(2*e.state.animationSpeed);case 21:m.backgroundColor=x,p.backgroundColor=x,t.next=30;break;case 25:return t.next=27,C(2*e.state.animationSpeed);case 27:f=Object(c.a)(s[b],2),v=f[0],S=f[1],o[v].style.height="".concat(S,"px");case 30:i.value++,e.state.currAnimations=[Object(u.a)(s.slice(b,s.length)),e.animateMergeSort,b,s],t.next=37;break;case 34:return e.state.isSorting=!1,e.state.currAnimations=[Object(u.a)(s.slice(b,s.length)),e.animateMergeSort,b,s],t.abrupt("return");case 37:b++,t.next=10;break;case 40:e.handleFinish(),t.next=46;break;case 43:return e.setState({isSorted:!1}),e.resetArray(),t.abrupt("return");case 46:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.animateQuickSort=function(){var t=Object(h.a)(l.a.mark((function t(a){var r,n,s,i,c,o,h,b,d,g=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=g.length>1&&void 0!==g[1]?g[1]:[],e.state.isSorted){t.next=37;break}e.state.isSorted=!0,e.state.isSorting=!0,n=document.querySelector("#bar"),s=[],r.length<1?(k(Object(u.a)(e.state.array),0,e.state.array.length-1,s),n.max=s.length,e.state.animations=s):(s=r,e.state.play=!0),i=0;case 8:if(!(i<s.length)){t.next=34;break}if(!0!==e.state.play){t.next=28;break}return c=s[i],o=document.getElementsByClassName("arr-bar"),h=o[c[0]],b=o[c[1]],h.style.backgroundColor="red",b.style.backgroundColor="aquamarine",t.next=18,C(e.state.animationSpeed);case 18:return d=h.style.height,h.style.height=b.style.height,b.style.height=d,t.next=23,C(4);case 23:h.style.backgroundColor="aquamarine",n.value++,e.state.currAnimations=[Object(u.a)(s.slice(i,s.length)),e.animateQuickSort,i,s],t.next=31;break;case 28:return e.state.isSorting=!1,e.state.currAnimations=[Object(u.a)(s.slice(i,s.length)),e.animateQuickSort,i,s],t.abrupt("return");case 31:i++,t.next=8;break;case 34:e.handleFinish(),t.next=40;break;case 37:return e.setState({isSorted:!1}),e.resetArray(),t.abrupt("return");case 40:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.animateInsertionSort=function(){var t=Object(h.a)(l.a.mark((function t(a){var r,n,s,i,c,o,h,b,d,g=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=g.length>1&&void 0!==g[1]?g[1]:[],e.state.isSorted){t.next=37;break}e.state.isSorting=!0,e.state.isSorted=!0,n=[],s=document.querySelector("#bar"),r.length<1?(A(Object(u.a)(e.state.array),n),s.max=n.length,e.state.animations=n):(n=r,e.state.play=!0),i=0;case 8:if(!(i<n.length)){t.next=34;break}if(!0!==e.state.play){t.next=28;break}return c=n[i],o=document.getElementsByClassName("arr-bar"),h=o[c[0]],b=o[c[1]],h.style.backgroundColor="red",b.style.backgroundColor="aquamarine",t.next=18,C(e.state.animationSpeed);case 18:return d=h.style.height,h.style.height=b.style.height,b.style.height=d,t.next=23,C(4);case 23:h.style.backgroundColor="aquamarine",s.value++,e.state.currAnimations=[Object(u.a)(n.slice(i,n.length)),e.animateInsertionSort,i,n],t.next=31;break;case 28:return e.state.isSorting=!1,e.state.currAnimations=[Object(u.a)(n.slice(i,n.length)),e.animateInsertionSort,i,n],t.abrupt("return");case 31:i++,t.next=8;break;case 34:e.handleFinish(),t.next=40;break;case 37:return e.resetArray(),e.setState({isSorted:!1}),t.abrupt("return");case 40:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleFinish=function(){e.setState({currAnimations:[],isSorting:!1,currAlg:"null",play:!1})},e.handlePause=function(t){var a=e.state.play;if(e.setState({play:!a}),e.state.isSorted){if(!a&&e.state.currAnimations!=[]){var r=e.state.currAnimations[0],n=e.state.currAnimations[1],s=e.state.currAnimations[2];e.state.isSorted=!1,e.state.currAnimations[0]&&n(null,r,s)}}else"Bubble-Sort"===e.state.currAlg?(e.state.play=!0,e.animateBubbleSort()):"Merge-Sort"===e.state.currAlg?(e.state.play=!0,e.animateMergeSort()):"Quick-Sort"===e.state.currAlg?(e.state.play=!0,e.animateQuickSort()):"Insertion-Sort"===e.state.currAlg?(e.state.play=!0,e.animateInsertionSort()):e.state.currAlg="null"},e.handleSkip=function(){var t=Object(h.a)(l.a.mark((function t(a){var r,n,s,i,o,h,b,d,g,m,p,x,f,v,j,S,y,k;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=document.querySelector("#bar"),e.state.isSorting||!(e.state.currAnimations[0].length>0)||"Merge-Sort"==e.state.currAlg||e.state.play){t.next=21;break}return n=document.getElementsByClassName("arr-bar"),s=e.state.currAnimations[0],i=s[0],o=n[i[0]],h=n[i[1]],o.style.backgroundColor="red",h.style.backgroundColor="aquamarine",t.next=11,C(2*e.state.animationSpeed);case 11:return b=o.style.height,o.style.height=h.style.height,h.style.height=b,t.next=16,C(4);case 16:o.style.backgroundColor="aquamarine",r.value++,e.setState({currAnimations:[Object(u.a)(s.slice(1,s.length)),e.state.currAnimations[1],e.state.currAnimations[2],i]}),t.next=45;break;case 21:if("Merge-Sort"!==e.state.currAlg||e.state.play||!(e.state.currAnimations[0].length>0)){t.next=45;break}if(d=document.getElementsByClassName("arr-bar"),g=e.state.currAnimations,s=g[0],(m=g[0][0])[2]){t.next=38;break}return p=m[0],x=m[1],f=d[p].style,v=d[x].style,j=g[2]%3===0?"red":"aquamarine",t.next=34,C(2*e.state.animationSpeed);case 34:f.backgroundColor=j,v.backgroundColor=j,t.next=43;break;case 38:return t.next=40,C(2*e.state.animationSpeed);case 40:S=Object(c.a)(m,2),y=S[0],k=S[1],d[y].style.height="".concat(k,"px");case 43:r.value++,e.setState({currAnimations:[Object(u.a)(s.slice(1,s.length)),g[1],g[2],m]});case 45:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handlePrevious=function(){var t=Object(h.a)(l.a.mark((function t(a){var r,n,s,i,c,o,h,b,d,g,m,p,x,f,v,j,S,y,k,A,O;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=document.querySelector("#bar"),n=document.getElementsByClassName("arr-bar"),e.state.isSorting||!e.state.currAnimations[0]||"Merge-Sort"==e.state.currAlg||e.state.play||!(e.state.currAnimations[0].length>0)){t.next=35;break}if(s=e.state.animations,i=e.state.currAnimations,c=s.length-i[0].length,o=Object(u.a)(s.slice(c-1,s.length)),console.log(o.length,s.length),1!==o.length){t.next=19;break}e.setState({isSorted:!1,isSorting:!1}),h=0;case 11:if(!(h<n.length)){t.next=18;break}return t.next=14,C(50);case 14:n[h].style.backgroundColor="#19bc8b";case 15:h++,t.next=11;break;case 18:return t.abrupt("return");case 19:return b=n[o[0][0]],d=n[o[0][1]],b.style.backgroundColor="#19bc8b",d.style.backgroundColor="#19bc8b",t.next=25,C(2*e.state.animationSpeed);case 25:return g=b.style.height,b.style.height=d.style.height,d.style.height=g,t.next=30,C(4);case 30:b.style.backgroundColor="aquamarine",r.val--,e.setState({currAnimations:[o,e.state.currAnimations[1],e.state.currAnimations[2],o[0]]}),t.next=74;break;case 35:if("Merge-Sort"!==e.state.currAlg||e.state.play){t.next=74;break}if(m=document.getElementsByClassName("arr-bar"),p=e.state.currAnimations,s=e.state.animations,c=s.length-p[0].length,o=Object(u.a)(s.slice(c-1,s.length)),x=o[0],1!==o.length){t.next=53;break}e.setState({isSorted:!1,isSorting:!1}),f=0;case 45:if(!(f<n.length)){t.next=52;break}return t.next=48,C(50);case 48:n[f].style.backgroundColor="#19bc8b";case 49:f++,t.next=45;break;case 52:return t.abrupt("return");case 53:if(console.log(x),x[2]){t.next=66;break}return v=x[0],j=x[1],S=m[v].style,y=m[j].style,p[2],k="#19bc8b",t.next=62,C(2*e.state.animationSpeed);case 62:S.backgroundColor=k,y.backgroundColor=k,t.next=72;break;case 66:return t.next=68,C(2*e.state.animationSpeed);case 68:A=x[0],O=x[3],m[A].style.height="".concat(O,"px");case 72:r.value--,e.setState({currAnimations:[o,e.state.currAnimations[1],e.state.currAnimations[2],o[0]]});case 74:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleNavToggle=function(t){e.setState({showNav:!e.state.showNav})},e.handleSelected=function(){var e=Object(h.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target.className="".concat(t.target.className," selected");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.resetArray(),document.getElementsByClassName(".slider").value=this.state.arrSize}},{key:"randomIntFromInterval",value:function(e,t){var a=Math.floor(e),r=Math.ceil(t);return Math.floor(Math.random()*(r-a)+a)}},{key:"render",value:function(){var e=this.state.play;return Object(p.jsxs)("div",{id:"mainContainer",children:[Object(p.jsx)(x,{state:this.state,handleSelected:this.handleSelected,handleNavToggle:this.handleNavToggle,handlePause:this.handlePause,reset:this.resetArray,bubbleSort:this.animateBubbleSort,mergeSort:this.animateMergeSort,quickSort:this.animateQuickSort,insertionSort:this.animateInsertionSort,changeArrSize:this.changeArrSize,changeAnimationSpeed:this.changeAnimationSpeed}),Object(p.jsxs)("div",{className:"projectContainer",children:[Object(p.jsxs)("div",{className:"visualizer-wrapper",children:[Object(p.jsx)("div",{className:"infoContainer",children:Object(p.jsxs)("p",{className:"infoStatic",children:["Current-algorithim: ",Object(p.jsx)("span",{className:"infoDynamic",children:this.state.currAlg})]})}),Object(p.jsxs)("div",{className:"topContainer",children:[Object(p.jsx)("div",{className:"arrContainer",children:this.state.array.map((function(e,t){return Object(p.jsx)(O.a,{in:!0,appear:!0,timeout:1e3,classNames:"bar-",children:Object(p.jsx)("div",{className:"arr-bar",id:"show",style:{height:"".concat(e,"px")}},t)})}))}),Object(p.jsx)("progress",{className:"progressBar",id:"bar",value:0,max:100})]})]}),Object(p.jsxs)("div",{className:"controlsContainer",children:[Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",onClick:this.repeatArr,style:{marginTop:"-2px",marginRight:"5px"},cursor:"pointer",color:"aquamarine",width:"18",fill:"currentColor",class:"bi bi-arrow-repeat",viewBox:"0 0 16 16",children:[Object(p.jsx)("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"}),Object(p.jsx)("path",{"fill-rule":"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"})]}),Object(p.jsx)("a",{onClick:this.handlePrevious,children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{marginTop:"5px"},cursor:"pointer",color:"aquamarine",width:"52",className:"previousBtn",fill:"currentColor",class:"bi bi-skip-start-fill",viewBox:"0 0 16 16",children:Object(p.jsx)("path",{d:"M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0V4z"})})}),Object(p.jsx)("a",{className:"ppBtn",onClick:this.handlePause,children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-play-circle-fill",viewBox:"0 0 16 16",className:"playBtn",children:e?Object(p.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"}):Object(p.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"})})}),Object(p.jsx)("a",{onClick:this.handleSkip,children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{marginTop:"5px"},cursor:"pointer",color:"aquamarine",width:"50",className:"skipBtn",fill:"currentColor",class:"bi bi-skip-end-fill",viewBox:"0 0 16 16",children:Object(p.jsx)("path",{d:"M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0V4z"})})}),Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",onClick:this.resetArray,style:{marginTop:"-2px",marginLeft:"5px"},cursor:"pointer",color:"aquamarine",width:"16",fill:"currentColor",class:"bi bi-shuffle",viewBox:"0 0 16 16",children:[Object(p.jsx)("path",{"fill-rule":"evenodd",d:"M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"}),Object(p.jsx)("path",{d:"M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"})]}),Object(p.jsx)("p",{className:"animated bounce",id:"playPrompt",style:{visibility:"".concat(e?"hidden":"visible")},children:"Click-me!"})]})]})]})}}]),a}(r.Component);a(34);var N=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(w,{})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root")),B()}},[[35,1,2]]]);
//# sourceMappingURL=main.ca1cc108.chunk.js.map