(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},143:function(e,t){},146:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(28),o=a.n(c),s=a(40),l=a(22),u=a(26),i=a(76),m=a(25),p=a(8),d=a(12),E=a.n(d),f=a(23),h=a(30),y=a.n(h),v="https://hero1appserver.herokuapp.com/api",b=function(e){return"app/".concat("concerts","/").concat(e)},O=b("START_REQUEST"),_=b("END_REQUEST"),j=b("ERROR_REQUEST"),S=b("LOAD_CONCERTS"),g={data:[],request:{pending:!1,error:null,success:null}};var k=a(20),D=function(e){return e.seats.requests},T=function(e){return"app/".concat("seats","/").concat(e)},A=T("START_REQUEST"),N=T("END_REQUEST"),x=T("ERROR_REQUEST"),w=T("LOAD_SEATS"),R=T("ADD_SEAT"),q=function(e){return{payload:e,type:A}},C=function(e){return{payload:e,type:N}},L=function(e){return{error:e,type:x}},U=function(e){return{payload:e,type:w}},F={data:[],requests:[]};var Q=Object(u.c)({concerts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case S:return Object(p.a)({},e,{data:Object(m.a)(t.payload)});case O:return Object(p.a)({},e,{request:{pending:!0,error:null,success:!1}});case _:return Object(p.a)({},e,{request:{pending:!1,error:null,success:!0}});case j:return Object(p.a)({},e,{request:{pending:!1,error:t.error,success:!1}});default:return e}},seats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case w:return Object(p.a)({},e,{data:Object(m.a)(t.payload)});case R:return Object(p.a)({},e,{data:[].concat(Object(m.a)(e.data),[t.payload])});case A:return Object(p.a)({},e,{requests:Object(p.a)({},e.requests,Object(k.a)({},t.payload.name,{pending:!0,error:null,success:!1}))});case N:return Object(p.a)({},e,{requests:Object(p.a)({},e.requests,Object(k.a)({},t.payload.name,{pending:!1,error:null,success:!0}))});case x:return Object(p.a)({},e,{requests:Object(p.a)({},e.requests,Object(k.a)({},t.error.name,{pending:!1,error:t.error.error,success:!1}))});default:return e}}}),H=Object(u.e)(Q,Object(u.d)(Object(u.a)(i.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),P=a(15),I=a(16),M=a(18),X=a(17),J=a(19),V=a(24),W=a(158),B=a(171),G=(a(107),[{src:"/img/promo/promo1.jpg",header:"Great atmosphere!",caption:"Have fun with thousands of people!",alt:"Have fun with thousands of people!"},{src:"/img/promo/promo2.jpg",altText:"Listen to the greatest hits!",caption:"Take a part in phenomenal performances.",header:"Listen to the greatest hits"},{src:"/img/promo/promo3.jpg",altText:"Meet stars!",caption:"Meet the biggest music starts live!",header:"Meet stars!"}]),Y=function(){return n.a.createElement(B.a,{className:"promoCarousel",items:G})},$=a(157),z=a(172),K=a(155),Z=a(156),ee=(a(115),function(e){var t=e.performer,a=e.price,r=e.genre,c=e.day,o=e.image;return n.a.createElement("article",{className:"concert"},n.a.createElement(K.a,{noGutters:!0},n.a.createElement(Z.a,{xs:"6"},n.a.createElement("div",{className:"concert__image-container"},n.a.createElement("img",{className:"concert__image-container__img",src:o,alt:t}))),n.a.createElement(Z.a,{xs:"6"},n.a.createElement("div",{className:"concert__info"},n.a.createElement("img",{className:"concert__info__back",src:o,alt:t}),n.a.createElement("h2",{className:"concert__info__performer"},t),n.a.createElement("h3",{className:"concert__info__genre"},r),n.a.createElement("p",{className:"concert__info__day-n-price"},"Day: ",c,", Price: ",a,"$")))))}),te=function(e){var t=e.concerts;return n.a.createElement("section",null,t.map(function(e){return n.a.createElement(ee,Object.assign({key:e.id},e))}))},ae=function(e){function t(){return Object(P.a)(this,t),Object(M.a)(this,Object(X.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.loadConcerts)()}},{key:"render",value:function(){var e=this.props,t=e.request,a=e.concerts;return t.pending?n.a.createElement($.a,{animated:!0,color:"primary",value:50}):t.error?n.a.createElement(z.a,{color:"warning"},t.error):t.success&&a.length?t.success?n.a.createElement(n.a.Fragment,null,n.a.createElement(te,{concerts:a})):void 0:n.a.createElement(z.a,{color:"info"},"No concerts")}}]),t}(n.a.Component),re=Object(l.b)(function(e){return{concerts:(a=e,a.concerts.data),request:(t=e,t.concerts.request)};var t,a},function(e){return{loadConcerts:function(){return e(function(){var e=Object(f.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:O}),e.prev=1,e.next=4,y.a.get("".concat(v,"/concerts"));case 4:a=e.sent,t({payload:a.data,type:S}),t({type:_}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({error:e.t0.message,type:j});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}())}}})(ae),ne=function(){return n.a.createElement("div",null,n.a.createElement(Y,null),n.a.createElement(W.a,null,n.a.createElement("h1",null,"Who's on?"),n.a.createElement(re,null)))},ce=a(159),oe=a(160),se=a(161),le=a(162),ue=a(163),ie=a(164),me=a(165),pe=a(166),de=function(e){function t(){var e,a;Object(P.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(M.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(n)))).state={isOpen:!1},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(J.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(ce.a,{color:"dark",dark:!0,expand:"md"},n.a.createElement(oe.a,{href:"/"},"New Wave Festival"),n.a.createElement(se.a,{onClick:this.toggle}),n.a.createElement(le.a,{isOpen:this.state.isOpen,navbar:!0},n.a.createElement(ue.a,{className:"ml-auto align-items-center",navbar:!0},n.a.createElement(ie.a,null,n.a.createElement(me.a,{href:"/"},"Home")),n.a.createElement(ie.a,null,n.a.createElement(me.a,{href:"/prices"},"Prices")),n.a.createElement(ie.a,null,n.a.createElement(me.a,{href:"/order-a-ticket"},n.a.createElement(pe.a,{outline:!0,color:"primary"},"Order a ticket!")))))))}}]),t}(n.a.Component),Ee=function(){return n.a.createElement("footer",{id:"sticky-footer",className:"py-4 mt-5 bg-dark text-white-50"},n.a.createElement("div",{className:"text-center"},n.a.createElement("small",null,"Copyright \xa9 New Wave Festival 2019")))},fe=function(e){var t=e.children;return n.a.createElement("div",null,n.a.createElement(de,null),t,n.a.createElement(Ee,null))},he=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"404 Not Found"))},ye=a(167),ve=a(168),be=a(169),Oe=a(170),_e=(a(116),a(39)),je=a(77),Se=a.n(je),ge=(a(146),function(e){function t(){var e,a;Object(P.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(M.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(c)))).socket=Se.a.connect(Object({NODE_ENV:"production",PUBLIC_URL:""}).PORT),a.isTaken=function(e){var t=a.props,r=t.seats,n=t.chosenDay;return r.some(function(t){return t.seat===e&&t.day===n})},a.prepareSeat=function(e){var t=a.props,r=t.chosenSeat,c=t.updateSeat,o=Object(_e.a)(a).isTaken;return e===r?n.a.createElement(pe.a,{key:e,className:"seats__seat",color:"primary"},e):o(e)?n.a.createElement(pe.a,{key:e,className:"seats__seat",disabled:!0,color:"secondary"},e):n.a.createElement(pe.a,{key:e,color:"primary",className:"seats__seat",outline:!0,onClick:function(t){return c(t,e)}},e)},a.availability=function(){var e=50-a.props.seats.length;return"Free seats: ".concat(e,"/50")},a}return Object(J.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.loadSeats,a=e.loadSeatsData;t(),this.socket.on("seatsUpdated",function(e){return a(e)})}},{key:"render",value:function(){var e=this.prepareSeat,t=this.props.requests;return n.a.createElement("div",null,n.a.createElement("h3",null,"Pick a seat"),n.a.createElement("small",{id:"pickHelp",className:"form-text text-muted ml-2"},n.a.createElement(pe.a,{color:"secondary"})," \u2013 seat is already taken"),n.a.createElement("small",{id:"pickHelpTwo",className:"form-text text-muted ml-2 mb-4"},n.a.createElement(pe.a,{outline:!0,color:"primary"})," \u2013 it's empty"),t.LOAD_SEATS&&t.LOAD_SEATS.success&&n.a.createElement("div",{className:"seats"},Object(m.a)(Array(50)).map(function(t,a){return e(a+1)})),t.LOAD_SEATS&&t.LOAD_SEATS.pending&&n.a.createElement($.a,{animated:!0,color:"primary",value:50}),t.LOAD_SEATS&&t.LOAD_SEATS.error&&n.a.createElement(z.a,{color:"warning"},"Couldn't load seats..."),n.a.createElement("p",{className:"seats-availability"},this.availability()))}}]),t}(n.a.Component)),ke=Object(l.b)(function(e){return{seats:(t=e,t.seats.data),requests:D(e)};var t},function(e){return{loadSeats:function(){return e(function(){var e=Object(f.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(q({name:"LOAD_SEATS"})),e.prev=1,e.next=4,y.a.get("".concat(v,"/seats"));case 4:a=e.sent,t(U(a.data)),t(C({name:"LOAD_SEATS"})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(L({name:"ERROR_REQUEST",error:e.t0.message}));case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}())},loadSeatsData:function(t){return e(U(t))}}})(ge),De=function(e){function t(){var e,a;Object(P.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(M.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(n)))).state={order:{name:"",email:"",day:1,seat:""},isError:!1},a.updateSeat=function(e,t){var r=a.state.order;e.preventDefault(),a.setState({order:Object(p.a)({},r,{seat:t})})},a.updateTextField=function(e){var t=e.target,r=a.state.order,n=t.value,c=t.name;a.setState({order:Object(p.a)({},r,Object(k.a)({},c,n))})},a.updateNumberField=function(e){var t=e.target,r=a.state.order,n=t.value,c=t.name;a.setState({order:Object(p.a)({},r,Object(k.a)({},c,parseInt(n)))})},a.submitForm=function(){var e=Object(f.a)(E.a.mark(function e(t){var r,n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.state.order,n=a.props.addSeat,t.preventDefault(),!(r.name&&r.email&&r.day&&r.seat)){e.next=9;break}return e.next=6,n(r);case 6:a.setState({order:{name:"",email:"",day:1,seat:""},isError:!1}),e.next=10;break;case 9:a.setState({isError:!0});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(J.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.updateSeat,t=this.updateTextField,a=this.updateNumberField,r=this.submitForm,c=this.props.requests,o=this.state,s=o.order,l=o.isError;return n.a.createElement(ye.a,{className:"order-ticket-form",onSubmit:r},n.a.createElement(K.a,null,n.a.createElement(Z.a,{xs:"12",md:"6"},l&&n.a.createElement(z.a,{color:"warning"},"There are some errors in you form. Have you fill all the fields? Maybe you forgot to choose your seat?"),c.ADD_SEAT&&c.ADD_SEAT.error&&!l&&n.a.createElement(z.a,{color:"danger"},c.ADD_SEAT.error),c.ADD_SEAT&&c.ADD_SEAT.success&&!l&&n.a.createElement(z.a,{color:"success"},"You've booked your ticket! Check you email in order to make a payment."),c.ADD_SEAT&&c.ADD_SEAT.pending&&n.a.createElement($.a,{animated:!0,className:"mb-5",color:"primary",value:75}),n.a.createElement(ve.a,null,n.a.createElement(be.a,{for:"nameName"},"Name"),n.a.createElement(Oe.a,{type:"text",value:s.name,name:"name",onChange:t,id:"nameName",placeholder:"John Doe"})),n.a.createElement(ve.a,null,n.a.createElement(be.a,{for:"nameEmail"},"Email"),n.a.createElement(Oe.a,{type:"email",value:s.email,name:"email",onChange:t,id:"nameEmail",placeholder:"johndoe@example.com"})),n.a.createElement(ve.a,null,n.a.createElement(be.a,{for:"nameDay"},"Select which day of festivals are you interested in:"),n.a.createElement(Oe.a,{type:"select",value:s.day,name:"day",onChange:a,id:"exampleSelect"},n.a.createElement("option",null,"1"),n.a.createElement("option",null,"2"),n.a.createElement("option",null,"3")),n.a.createElement("small",{id:"dayHelp",className:"form-text text-muted"},"Every day of the festival uses individual ticket. You can book only one ticket at the time.")),n.a.createElement(ve.a,{check:!0},n.a.createElement(be.a,{check:!0},n.a.createElement(Oe.a,{required:!0,type:"checkbox"})," I agree with ",n.a.createElement("a",{href:"#"},"Terms and conditions")," and ",n.a.createElement("a",{href:"#"},"Privacy Policy"),".")),n.a.createElement(pe.a,{color:"primary",className:"mt-3"},"Submit")),n.a.createElement(Z.a,{xs:"12",md:"6"},n.a.createElement(ke,{chosenDay:s.day,chosenSeat:s.seat,updateSeat:e}))))}}]),t}(n.a.Component),Te=Object(l.b)(function(e){return{requests:D(e)}},function(e){return{addSeat:function(t){return e(function(e){return function(){var t=Object(f.a)(E.a.mark(function t(a){var r;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(q({name:"ADD_SEAT"})),t.prev=1,t.next=4,y.a.post("".concat(v,"/seats"),e);case 4:r=t.sent,console.log(r),a({payload:r,type:R}),a(C({name:"ADD_SEAT"})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),a(L({name:"ERROR_REQUEST",error:t.t0.message}));case 13:case"end":return t.stop()}},t,null,[[1,10]])}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(De),Ae=function(){return n.a.createElement(W.a,null,n.a.createElement("h1",null,"Order a ticket"),n.a.createElement(Te,null))},Ne=function(e){function t(){return Object(P.a)(this,t),Object(M.a)(this,Object(X.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return n.a.createElement(s.a,null,n.a.createElement(fe,null,n.a.createElement(V.c,null,n.a.createElement(V.a,{exact:!0,path:"/",component:ne}),n.a.createElement(V.a,{exact:!0,path:"/prices",component:ne}),n.a.createElement(V.a,{exact:!0,path:"/order-a-ticket",component:Ae}),n.a.createElement(V.a,{component:he}))))}}]),t}(n.a.Component);a(152),a(153);o.a.render(n.a.createElement(function(){return n.a.createElement(l.a,{store:H},n.a.createElement(s.a,null,n.a.createElement(Ne,null)))},null),document.getElementById("root"))},79:function(e,t,a){e.exports=a(154)}},[[79,1,2]]]);
//# sourceMappingURL=main.ccda5b45.chunk.js.map