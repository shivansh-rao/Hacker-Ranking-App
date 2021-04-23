(this["webpackJsonphacker-ranking"]=this["webpackJsonphacker-ranking"]||[]).push([[0],{328:function(e,t,a){e.exports=a(492)},333:function(e,t,a){},334:function(e,t,a){},492:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=a.n(l);a(333),a(334);var c=function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"landing-header"},r.a.createElement("h1",null,"Welcome to HackerRank!"),r.a.createElement("a",{href:"/hacker-list",className:"btn btn-lg btn-success"},"Go to Hackers Dashboard!")),r.a.createElement("ul",{className:"slideshow"},r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null)))},i=a(13),s=a(31),m=a.n(s),u=a(20),d=a(14),g=function(){var e=Object(n.useState)(localStorage.getItem("loggedIn")),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(localStorage.getItem("userName")),c=Object(i.a)(o,2),s=c[0],g=c[1],h=Object(u.g)();return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("div",{className:"navbar-default"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"floatLeft header"},r.a.createElement(d.b,{to:"/"},"Hacker-Ranking")),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("div",{className:"floatRight flexRow"},r.a.createElement("div",null,r.a.createElement(d.b,{to:"/hacker/statistics"},"Hacker Statistics")),r.a.createElement("div",null,r.a.createElement(d.b,{to:"#"},"Logged In as ",s)),r.a.createElement("div",null,r.a.createElement(d.b,{to:"#",onClick:function(){m.a.get("http://localhost:3001/logout").then((function(e){console.log(e.data),200===e.status&&(localStorage.removeItem("loggedIn"),localStorage.removeItem("userName"),localStorage.removeItem("token"),h.push("/login"),l(!1),g(!1))}))}},"LogOut")))))):r.a.createElement("div",{className:"navbar-default"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"floatLeft header"},r.a.createElement(d.b,{to:"/"},"Hacker-Ranking")),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("div",{className:"floatRight flexRow"},r.a.createElement("div",null,r.a.createElement(d.b,{to:"/login"},"Log In")),r.a.createElement("div",null,r.a.createElement(d.b,{to:"/admin-panel"},"Log In As Admin")),r.a.createElement("div",null,r.a.createElement(d.b,{to:"/register"},"Sign Up")))))))};var h=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),c=Object(i.a)(o,2),s=c[0],d=c[1],h=Object(n.useState)(!1),E=Object(i.a)(h,2),f=E[0],v=E[1],p=Object(n.useState)(!1),b=Object(i.a)(p,2),N=b[0],k=b[1],j=Object(n.useState)(null),O=Object(i.a)(j,2),S=O[0],w=O[1];return Object(n.useEffect)((function(){console.log(f)}),[f]),f?r.a.createElement(u.a,{to:"/hacker-list"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement("div",{className:"whiteFont"},r.a.createElement("div",{className:"marAuto",id:"f"},r.a.createElement("div",{className:"text-center sheet--padding-bottom"},r.a.createElement("h4",{className:"alpha text-weight--bold "},r.a.createElement("b",null,"Login to HackerRank")),r.a.createElement("p",null,"Don't have any account? ",r.a.createElement("a",{rel:"nofollow",href:"/register"},"Register"))),r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("log in details",a);var t={username:a,password:s};m.a.post("http://localhost:3001/login",t).then((function(e){if(!1!==e.data.user)return localStorage.setItem("loggedIn",!0),localStorage.setItem("userName",e.data.user.username),localStorage.setItem("token",e.data.token),k(!1),w(null),v(!0);k(!0),w("Wrong Email or Password")})).catch((function(e){k(!0),w("Wrong Email or Password")}))}},r.a.createElement("div",{className:"maxWidth marAuto"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"form-group marginTop marginBottom"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{onChange:function(e){return l(e.target.value)},autoFocus:"autofocus",className:"form-control js-validate-field-on-blur",required:"required",type:"text",name:"username"}))),r.a.createElement("div",{className:"marginBottom"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{onChange:function(e){return d(e.target.value)},className:"form-control",type:"password",name:"password"}))),r.a.createElement("div",{className:"form-group text-center",id:"s"},r.a.createElement("button",{className:"btn btn-lg btn-primary",type:"submit"},"Login")))),N&&r.a.createElement("div",{className:"error"},S)))))};var E=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),c=Object(i.a)(o,2),s=c[0],d=c[1],h=Object(n.useState)(""),E=Object(i.a)(h,2),f=E[0],v=E[1],p=Object(n.useState)(""),b=Object(i.a)(p,2),N=b[0],k=b[1],j=Object(n.useState)(!1),O=Object(i.a)(j,2),S=O[0],w=O[1];return S?r.a.createElement(u.a,{to:"/login"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement("div",{className:"whiteFont"},r.a.createElement("div",{className:"",id:"h"},r.a.createElement("div",{className:""},r.a.createElement("h4",{className:"alpha text-weight--bold"},"Join HackerRank"),r.a.createElement("p",null,"Already have an account? ",r.a.createElement("a",{rel:"nofollow",href:"/login"},"Login")))),r.a.createElement("div",{className:"form",id:"f"},r.a.createElement("form",{onSubmit:function(e){!function(e){e.preventDefault(),console.log("ada",e);var t={username:a,email:f,password:s,ph:N};m.a.post("http://localhost:3001/register",t).then((function(e){return console.log("user posted"),w(!0)})).catch((function(e){return console.log(e)}))}(e)}},r.a.createElement("div",{className:"maxWidth marAuto"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"form-group marginTop marginBottom"},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{onChange:function(e){return v(e.target.value)},className:"form-control js-validate-field-on-blur",required:"required",type:"email",name:"email",id:"user_email"}))),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"form-group marginBottom"},r.a.createElement("label",null,"Username ",r.a.createElement("span",{className:"text-secondary"},"(only letters, numbers, and underscores)")),r.a.createElement("input",{onChange:function(e){return l(e.target.value)},className:"form-control js-validate-field-on-blur",pattern:"[a-zA-Z0-9_]*[a-zA-Z][a-zA-Z0-9_]*",required:"required",type:"text",name:"username",id:"user_username"}))),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"form-group marginBottom"},r.a.createElement("label",null,"Password ",r.a.createElement("span",{className:"text-secondary"},"(min. 6 char)")),r.a.createElement("input",{onChange:function(e){return d(e.target.value)},autoComplete:"off",minLength:"6",className:"form-control js-validate-field-on-blur",required:"required",type:"password",name:"password",id:"user_password"}))),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"form-group marginBottom"},r.a.createElement("label",null,"Phone Number"),r.a.createElement("input",{onChange:function(e){return k(e.target.value)},autoComplete:"off",minLength:"6",className:"form-control js-validate-field-on-blur",required:"required",type:"tel",name:"ph",id:"phone"}))),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-lg btn-primary",name:"veg",type:"submit"},"SUBMIT"))))))))};var f=function(e){var t=e.img,a=e.name,n=e.id,l=e.rank;return r.a.createElement("div",null,r.a.createElement("div",{key:n,className:""},r.a.createElement("div",{className:"thumbnail"},r.a.createElement("h4",null,a),r.a.createElement("img",{src:t,className:"maxImgHeightWidth"}),r.a.createElement("div",{className:"caption"},r.a.createElement("h4",null,"Rank-  ",l),r.a.createElement("p",null,r.a.createElement("a",{href:"/hacker/".concat(n),className:"btn btn-primary"},"More Info"))))))};var v=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),c=Object(i.a)(o,2),s=c[0],d=c[1],h=Object(n.useState)(!0),E=Object(i.a)(h,2),v=E[0],p=E[1],b=Object(n.useState)(localStorage.getItem("loggedIn")),N=Object(i.a)(b,2),k=N[0],j=(N[1],Object(n.useState)(localStorage.getItem("userName"))),O=Object(i.a)(j,2);O[0],O[1],Object(n.useEffect)((function(){w(),S()}),[]);var S=function(){var e=localStorage.getItem("token");m.a.post("http://localhost:3001/hackers/topHackers",{limit:3},{headers:{authentication:e}}).then((function(e){console.log(e.data),"not authenticated"===e.data||"JsonWebTokenError"===e.data.name?p(!1):(d(e.data),p(!0))})).catch((function(e){console.log(e)}))},w=function(){var e=localStorage.getItem("token");m.a.get("http://localhost:3001/hackers",{headers:{authentication:e}}).then((function(e){console.log(e.data),"not authenticated"===e.data||"JsonWebTokenError"===e.data.name?p(!1):(l(e.data),p(!0))})).catch((function(e){console.log(e)}))};return v?r.a.createElement("div",null,r.a.createElement(g,null),k?r.a.createElement("div",{className:""},r.a.createElement("div",{className:"header"},"Our Top Hackers"),r.a.createElement("div",{className:"flexRowSpcEvn"},s&&(null===s||void 0===s?void 0:s.map((function(e,t){return r.a.createElement("div",{className:"marAuto"},r.a.createElement("div",{className:"whiteBackground pointerCursor marginBottom"},r.a.createElement("img",{className:"userProfileImg  circleImg",src:e.profileLink}),r.a.createElement("div",{className:"userInfoContainer grow"},r.a.createElement("a",{className:"title",href:"/hacker/".concat(e._id)},e.name),r.a.createElement("div",{className:"subTitle"},e.overallRank))))})))),r.a.createElement("div",{className:"grid-container pagePadding"},a&&(null===a||void 0===a?void 0:a.map((function(e,t){return r.a.createElement(f,{name:e.name,img:e.profileLink,id:e._id,rank:e.overallRank})}))))):r.a.createElement(u.a,{to:"/login"})):r.a.createElement(u.a,{to:"/login"})};var p=function(){var e=Object(u.i)().id,t=Object(n.useState)(e),a=Object(i.a)(t,2),l=a[0],o=(a[1],Object(n.useState)(!1)),c=Object(i.a)(o,2),s=c[0],d=c[1],h=Object(n.useState)(localStorage.getItem("loggedIn")),E=Object(i.a)(h,2),f=E[0],v=(E[1],Object(n.useState)(localStorage.getItem("userName"))),p=Object(i.a)(v,2),b=(p[0],p[1],Object(n.useState)(!0)),N=Object(i.a)(b,2),k=N[0],j=N[1];Object(n.useEffect)((function(){O()}),[]);var O=function(){var e=localStorage.getItem("token");m.a.get("http://localhost:3001/hacker/".concat(l),{headers:{authentication:e}}).then((function(e){"not authenticated"===e.data?j(!1):d(e.data)})).catch((function(e){console.log(e)}))};return k?r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),f?s&&r.a.createElement("div",{className:"pagePadding maxWidth marginTop marginAuto"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("p",{className:"title"},s.name),r.a.createElement("div",{className:"list-group"},r.a.createElement("li",{className:"list-group-item minHeight "},"Location ",s.location),r.a.createElement("li",{className:"list-group-item minHeight"},"Education- ",s.education),r.a.createElement("li",{className:"list-group-item minHeight"},"Overall Rank- ",s.overallRank),r.a.createElement("li",{className:"list-group-item minHeight"},"Followers- ",s.followers),r.a.createElement("li",{className:"list-group-item minHeight"},"Following- ",s.following),r.a.createElement("li",{className:"list-group-item minHeight"},"Challenges Solved- ",s.challengesSolved))),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"boxStyle"},r.a.createElement("img",{className:"boxImgSize pagePadding",src:s.profileLink}),r.a.createElement("div",{className:"caption-full"},r.a.createElement("h4",{className:"pull-right"})))))):r.a.createElement(u.a,{to:"/login"})):r.a.createElement(u.a,{to:"/login"})},b=a(560),N=a(566),k={login:function(e){var t=e.username,a=e.password,n=new Request("http://localhost:3001/login",{method:"POST",body:JSON.stringify({username:t,password:a,admin:!0}),headers:new Headers({"Content-Type":"application/json"})});return fetch(n).then((function(e){if(console.log(e),e.status<200||e.status>=300)throw new Error(e.statusText);return e.json()})).then((function(e){localStorage.setItem("token",e.token),localStorage.setItem("auth",JSON.stringify(e)),localStorage.setItem("permissions",e.token)})).catch((function(){throw new Error("Network error")}))},checkError:function(e){var t=e.status;return 401===t||403===t?(localStorage.removeItem("auth"),Promise.reject()):Promise.resolve()},checkAuth:function(){return localStorage.getItem("token")?Promise.resolve():Promise.reject()},logout:function(){return localStorage.removeItem("auth"),localStorage.removeItem("token"),localStorage.removeItem("permissions"),Promise.resolve()},getIdentity:function(){try{var e=JSON.parse(localStorage.getItem("auth")).user,t=e._id,a=e.username;return Promise.resolve({userId:t,username:a})}catch(n){return Promise.reject(n)}},getPermissions:function(){return localStorage.getItem("permissions")?Promise.resolve():Promise.reject()}},j=a(561),O=a(562),S=a(558),w=a(559),y=function(e){return console.log(e),n.createElement(j.a,e,n.createElement(O.a,{rowClick:"edit"},n.createElement(S.a,{source:"id"}),n.createElement(S.a,{source:"name"}),n.createElement(S.a,{source:"location"}),n.createElement(S.a,{source:"education"}),n.createElement(w.a,{source:"overallRank"}),n.createElement(w.a,{source:"followers"}),n.createElement(w.a,{source:"following"})))},I=a(147),P=a(106),C=a(458),x=a(62),T="http://localhost:3001",R=C.a.fetchJson,L={getList:function(e,t){var a=t.pagination,n=(a.page,a.perPage,t.sort),r=(n.field,n.order,"".concat(T,"/").concat(e)),l=localStorage.getItem("token");return m.a.get(r,{headers:{authentication:l}}).then((function(e){console.log({res:e});var t=[],a=e.data.map((function(e,a){var n={id:a,name:e.name,location:e.location,education:e.education,overallRank:e.overallRank,followers:e.followers,following:e.following};t.push(n)}));return{data:t,total:a.length}}))},getOne:function(e,t){return R("".concat(T,"/").concat(e,"/").concat(t.id)).then((function(e){return{data:e.json}}))},getMany:function(e,t){var a={filter:JSON.stringify({id:t.ids})},n="".concat(T,"/").concat(e,"?").concat(Object(x.stringify)(a));return R(n).then((function(e){return{data:e.json}}))},getManyReference:function(e,t){var a=t.pagination,n=a.page,r=a.perPage,l=t.sort,o=l.field,c=l.order,i={sort:JSON.stringify([o,c]),range:JSON.stringify([(n-1)*r,n*r-1]),filter:JSON.stringify(Object(P.a)(Object(P.a)({},t.filter),{},Object(I.a)({},t.target,t.id)))},s="".concat(T,"/").concat(e,"?").concat(Object(x.stringify)(i));return R(s).then((function(e){var t=e.headers;return{data:e.json,total:parseInt(t.get("content-range").split("/").pop(),10)}}))},update:function(e,t){return R("".concat(T,"/").concat(e,"/").concat(t.id),{method:"PUT",body:JSON.stringify(t.data)}).then((function(e){return{data:e.json}}))},updateMany:function(e,t){var a={filter:JSON.stringify({id:t.ids})};return R("".concat(T,"/").concat(e,"?").concat(Object(x.stringify)(a)),{method:"PUT",body:JSON.stringify(t.data)}).then((function(e){return{data:e.json}}))},create:function(e,t){return R("".concat(T,"/").concat(e),{method:"POST",body:JSON.stringify(t.data)}).then((function(e){var a=e.json;return{data:Object(P.a)(Object(P.a)({},t.data),{},{id:a.id})}}))},delete:function(e,t){return R("".concat(T,"/").concat(e,"/").concat(t.id),{method:"DELETE"}).then((function(e){return{data:e.json}}))},deleteMany:function(e,t){var a={filter:JSON.stringify({id:t.ids})};return R("".concat(T,"/").concat(e,"?").concat(Object(x.stringify)(a)),{method:"DELETE",body:JSON.stringify(t.data)}).then((function(e){return{data:e.json}}))}},H=a(190);var J=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),c=Object(i.a)(o,2),s=c[0],d=c[1],h=Object(n.useState)(!1),E=Object(i.a)(h,2),f=E[0],v=E[1],p=Object(n.useState)(!0),b=Object(i.a)(p,2),N=b[0],k=b[1],j=Object(n.useState)(!1),O=Object(i.a)(j,2),S=O[0],w=O[1],y=Object(n.useState)(localStorage.getItem("loggedIn")),I=Object(i.a)(y,2),P=I[0];I[1],Object(n.useEffect)((function(){T(),x(),C()}),[]);var C=function(){var e=localStorage.getItem("token");m.a.get("http://localhost:3001/hackers/recentlyUpdated",{headers:{authentication:e}}).then((function(e){"not authenticated"===e.data?k(!1):d(e.data)})).catch((function(e){console.log(e)}))},x=function(){var e=localStorage.getItem("token");m.a.get("http://localhost:3001/hackers",{headers:{authentication:e}}).then((function(e){console.log(e.data),"not authenticated"===e.data||"JsonWebTokenError"===e.data.name?k(!1):(!function(e){var t=[0,0,0],a=[],n=[];e.sort((function(e,t){return t.competitivePercentiles.cpp-e.competitivePercentiles.cpp})),console.log(e),e.map((function(e,r){"Laptop"===e.competitivePercentiles.deviceType?t[0]++:"Tablet"===e.competitivePercentiles.deviceType?t[1]++:"Mobile"===e.competitivePercentiles.deviceType&&t[2]++,n.push(e.name),a.push(e.competitivePercentiles.cpp)}));var r={labels:["Laptop","Tablet","Mobile"],datasets:[{label:"Device Distribution Chart",backgroundColor:["#B21F00","#C9DE00","#2FDE00"],hoverBackgroundColor:["#501800","#4B5000","#175000"],data:t}]};v({labels:n,datasets:[{label:"C++ dataset",data:a,fill:!0,backgroundColor:"rgba(75,192,192,0.2)",borderColor:"white",lineTension:.5}]}),w(r)}(e.data),k(!0))})).catch((function(e){console.log(e)}))},T=function(){var e=localStorage.getItem("token");m.a.post("http://localhost:3001/hackers/topHackers",{limit:10},{headers:{authentication:e}}).then((function(e){"not authenticated"===e.data?k(!1):l(e.data)})).catch((function(e){console.log(e)}))};return N?r.a.createElement("div",null,r.a.createElement(g,null),P?r.a.createElement("div",null,r.a.createElement("div",{className:"header"},"Top Hackers"),r.a.createElement("div",{className:"grid-container pagePadding"},a&&(null===a||void 0===a?void 0:a.map((function(e,t){return r.a.createElement("div",{className:"marAuto"},r.a.createElement("div",{className:"whiteBackground pointerCursor marginBottom"},r.a.createElement("img",{className:"userProfileImg  circleImg",src:e.profileLink}),r.a.createElement("div",{className:"userInfoContainer grow"},r.a.createElement("a",{className:"title",href:"/hacker/".concat(e._id)},e.name),r.a.createElement("div",{className:"subTitle"},e.overallRank))))})))),r.a.createElement("div",{className:""},S&&r.a.createElement("div",{className:"graphWidth marAuto marginBottom"},r.a.createElement(H.Pie,{data:S,options:{title:{display:!0,text:"Device Distribution",fontSize:40,fontColor:"white"},legend:{labels:{fontColor:"white",fontSize:18},display:!0,position:"right"}}})),f&&r.a.createElement("div",{className:"graphWidth marAuto marginBottom"},r.a.createElement(H.Line,{data:f,scaleFontColor:"red",options:{scaleFontColor:"red",title:{display:!0,text:"CPP Distribution",fontSize:40,fontColor:"white"},legend:{labels:{fontColor:"white",fontSize:18},display:!0,position:"right"}}}))),s&&r.a.createElement("div",null,r.a.createElement("div",{className:"header"},"Latest Updated Hackers Data"),r.a.createElement("div",{className:"col2 pagePadding gridgap1"},s&&(null===s||void 0===s?void 0:s.map((function(e,t){return r.a.createElement("div",{className:"backgroundWhite"},r.a.createElement("div",{className:"pointerCursor pagePadding"},r.a.createElement("div",{className:"col2 grow"},r.a.createElement("a",{className:"title",href:"/hacker/".concat(e._id)},e.name),r.a.createElement("div",{className:"subTitle"},"Rank- ",e.overallRank))))})))))):r.a.createElement(u.a,{to:"/login"})):r.a.createElement(u.a,{to:"/login"})},B=function(){return n.createElement("div",null,n.createElement(d.a,null,n.createElement("div",{className:"App"},n.createElement(u.b,{path:"/",exact:!0,component:c}),n.createElement(u.d,null,n.createElement(u.b,{path:"/hacker-list",exact:!0,component:v}),n.createElement(u.b,{path:"/hacker/statistics",exact:!0,component:J}),n.createElement(u.b,{path:"/hacker/:id",exact:!0,component:p}),n.createElement(u.b,{path:"/login",exact:!0,component:h}),n.createElement(u.b,{path:"/register",exact:!0,component:E}),n.createElement(u.b,{path:"/admin-panel",exact:!0},n.createElement(b.a,{title:"HackerRank Admin Panel",dataProvider:L,authProvider:k},(function(e){return[n.createElement(N.a,{name:"hackers",list:y})]})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[328,1,2]]]);
//# sourceMappingURL=main.2d6d1a08.chunk.js.map