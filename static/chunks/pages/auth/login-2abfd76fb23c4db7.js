(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{2505:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return s(4800)}])},4800:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return o}});var t=s(5893),r=s(7294);function o(){let[e,n]=r.useState({user:"",pass:""}),s=()=>{fetch("/api/loginApi",{method:"POST",body:JSON.stringify({user:e.user,pass:e.pass})}).then(e=>e.json().then(e=>console.log(e)))};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{type:"text",name:"user",placeholder:"correo electronico",onChange:s=>n({...e,user:s.target.value})}),(0,t.jsx)("input",{type:"password",name:"pass",placeholder:"Password",onChange:s=>n({...e,pass:s.target.value})}),(0,t.jsx)("button",{onClick:s,children:"Press me"})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2505)}),_N_E=e.O()}]);