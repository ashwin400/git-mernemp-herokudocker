(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,a,t){},111:function(e,a,t){},115:function(e,a,t){},116:function(e,a,t){},117:function(e,a,t){},118:function(e,a,t){},119:function(e,a,t){},120:function(e,a,t){},121:function(e,a,t){},122:function(e,a,t){},123:function(e,a,t){},124:function(e,a,t){},175:function(e,a,t){},177:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(76),l=t.n(c),i=(t(87),t(26)),s=t(27),o=t(30),u=t(28),m=t(31),d=t(180),g=t(182),v=t(183),p=t(181),E=t(34),f=t(19),h=t(29),b=t.n(h);var S=t(179),N=t(11),O=t.n(N),C=t(20),y=t(21),I=t.n(y);t(110);Object(f.b)(function(e){return{loggedIn:e.auth.loggedIn}},function(e){return{signOut:function(){return e(function(e){e({type:"SIGNOUT"})})}}})(function(e){function a(){!function(){var e=document.getElementsByClassName("slider")[0];document.getElementById("root").style.overflow="hidden",e.classList.toggle("active"),document.getElementsByClassName("list")[0].childNodes.forEach(function(e,a){e.style.animation?e.style.animation="":e.style.animation="listItemFade 0.5s ease forwards ".concat(a/5+.3,"s")})}(),document.getElementById("burger").classList.toggle("is-active")}return r.a.createElement("nav",{className:"nav-wrapper"},r.a.createElement("div",{id:"burger",class:"ico-btn",onClick:a},r.a.createElement("span",{class:"ico-btn__burger"})),r.a.createElement("div",{id:"slider",className:"slider"},r.a.createElement("ul",{className:"list"},r.a.createElement(S.a,{onClick:a,to:"/movies"},"Home"),e.loggedIn?r.a.createElement(S.a,{onClick:function(){a(),e.signOut()},to:"/#"},"Log out"):r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{onClick:a,to:"/login"},"Login"),r.a.createElement(S.a,{onClick:a,to:"/resigter"},"Register")))))}),t(111);function k(e){var a=e.itemsCount,t=e.pageSize,n=e.onPageChange,c=e.currentPage,l=Math.ceil(a/t);if(1===l)return null;var i=b.a.range(1,l+1);return r.a.createElement("div",{className:"pagination-container"},r.a.createElement("ul",null,i.length>1&&i.map(function(e){return r.a.createElement("li",{key:e,onClick:function(){return n(e)},className:e===c?"page-active":""},e)})))}var j=t(77);t(118);function w(e){var a=e.movies,t=e.currentPage,n=e.pageSize,c=a.slice((t-1)*n,n*t);return r.a.createElement("div",{className:"movies-grid"},!!a&&c.map(function(e){return r.a.createElement(j.a,{movie:e,key:e._id})}),"\xa0")}t(119);var _=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"square"}),r.a.createElement("div",{className:"square"}),r.a.createElement("div",{className:"square"}),r.a.createElement("div",{className:"square"}),r.a.createElement("div",{className:"square"}),r.a.createElement("div",{className:"square"}),r.a.createElement("div",{className:"square"}),r.a.createElement("div",{className:"square"}),r.a.createElement("div",{className:"square"}),r.a.createElement("div",{className:"square"}),r.a.createElement("div",{className:"square"}),r.a.createElement("div",{className:"square"}),r.a.createElement("div",{className:"square"}),r.a.createElement("div",{className:"square"}),r.a.createElement("div",{className:"square"}),r.a.createElement("div",{className:"square"}))},G=t(38),R=(t(120),t(121),function(e){var a=e.name,t=e.label,n=e.options,c=e.error,l=e.iconClass;return n?r.a.createElement("div",{className:"input-container"},t&&r.a.createElement("label",{htmlFor:a}," ",t," "),r.a.createElement("div",{className:"input-icon ".concat(l)}),r.a.createElement("select",{name:a},r.a.createElement("option",{disabled:!0,value:""},"Select"),n.map(function(e){return r.a.createElement("option",{key:e._id,value:e.value},e.value)})),c&&r.a.createElement("div",{className:"alert alert-danger"}," ",c," ")):r.a.createElement(r.a.Fragment,null," ")});t(122);t(123);var q=function(e){var a=e.name,t=e.label,n=e.error,c=e.iconClass,l=Object(G.a)(e,["name","label","error","iconClass"]);return r.a.createElement("div",{className:"input-container"},t&&r.a.createElement("label",null," ",t," "),c&&r.a.createElement("div",{className:"input-icon ".concat(c)}),r.a.createElement("input",Object.assign({name:a},l)),n&&r.a.createElement("div",{className:"alert alert-danger"}," ",n," "))},M=(t(124),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={genres:[],pageSize:12,currentPage:1,currentGenre:"All",searchFilter:"",rating:0},t.handleChange=function(e,a){var n;t.setState((n={},Object(E.a)(n,e,a),Object(E.a)(n,"currentPage",1),n))},t.onPageChange=function(e){t.setState({currentPage:e})},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.getMovies(),this.props.getGenres()}},{key:"render",value:function(){var e=this,a=this.state,t=a.currentGenre,n=a.currentPage,c=a.searchFilter,l=a.pageSize,i=a.rating,s=this.props.movies;if(b.a.isEmpty(s))return r.a.createElement("div",{className:"background-container pt-5"},r.a.createElement(_,null));var o,u,m,d,g,v=[];return u=c,m="title",v=(o=s)?u&&m&&o[0].hasOwnProperty(m)&&u.trim()?o.filter(function(e){return e[m].toString().toLowerCase().startsWith(u.toString().toLowerCase())}):o:null,d=v,v=function(e,a){return 0===a?e:e.filter(function(e){return e.rate>=a})}(v="All"===(g=t)?d:d.filter(function(e){return e.genre===g}),i),r.a.createElement("div",{className:"background-container"},r.a.createElement("div",{className:"mx-5 py-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 col-sm-12"},r.a.createElement(q,{onChange:function(a){return e.handleChange("searchFilter",a.target.value)},label:"Search Movie",iconClass:"fas fa-search",placeholder:"Search..."}),r.a.createElement("p",{className:"text-left text-muted"},v.length?"".concat(v.length):"0","movies found."),v?r.a.createElement(w,{pageSize:l,currentPage:n,movies:v}):r.a.createElement("h1",{className:"text-white"},"No Movies"),r.a.createElement("br",null),r.a.createElement(k,{itemsCount:v.length,pageSize:l,onPageChange:this.onPageChange,currentPage:n})))))}}]),a}(n.Component)),x=Object(f.b)(function(e){return{movies:e.movie.movies,genres:e.genre.genres,loggedIn:e.auth.loggedIn}},function(e){return{getMovies:function(){return e(function(){var e=Object(C.a)(O.a.mark(function e(a){var t;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("/api/movies");case 3:t=e.sent,a({type:"GET_MOVIES_SUCCESS",payload:t.data.movies}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({type:"GET_MOVIES_ERROR",error:e.t0});case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(a){return e.apply(this,arguments)}}())},getGenres:function(){return e(function(){var e=Object(C.a)(O.a.mark(function e(a){var t;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("/api/genres");case 3:t=e.sent,a({type:"GET_GENRES_SUCCESS",payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({type:"GET_GENRES_ERROR",error:e.t0});case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(a){return e.apply(this,arguments)}}())}}})(M),T=t(8),L=t(17),P=t.n(L),D={id:P.a.string(),title:P.a.string().required().label("Title"),genre:P.a.string().required().label("Genre"),numberInStock:P.a.number().min(0).required().label("Number In Stocks"),description:P.a.string().required().label("Description"),image:P.a.object().allow(null).label("Cover Image")},U=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={data:{title:"",genre:"",numberInStock:"",description:"",image:null},genres:[],errors:{}},t.handleChange=function(e){var a=e.currentTarget,n=Object(T.a)({},t.state.data);n[a.name]=a.value,t.setState({data:n})},t.handleSubmit=function(e){e.preventDefault();var a=P.a.validate(t.state,D).error;t.setState({errors:a}),a||t.props.addMovie(t.state.data)},t.uploadImage=function(e){if(e.target.files[0]){var a=Object(T.a)({},t.state.data);a.image=e.target.files[0],t.setState({data:a})}},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.errors,t=e.data,n=t.title,c=t.genre,l=t.numberInStock,i=this.props.genres;return r.a.createElement("div",{className:"background-container pt-5"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"header"},"Add a new movie"),r.a.createElement("form",{onSubmit:this.handleSubmit,encType:"multipart/form-data"},r.a.createElement(q,{name:"title",value:n,label:"Title",onChange:this.handleChange,placeholder:"Enter the title...",error:a.title,iconClass:"fas fa-film",autoFocus:!0}),r.a.createElement(R,{name:"genre",label:"Genre",onChange:this.handleChange,value:c,error:a.genre,options:i,iconClass:"fas fa-address-card"}),r.a.createElement(q,{name:"numberInStock",label:"Number In Stock",onChange:this.handleChange,placeholder:"Enter numbers the stock...",error:a.numberInStock,iconClass:"fas fa-hashtag",value:l,type:"number"}),r.a.createElement(q,{name:"image",label:"Cover Image",onChange:this.uploadImage,error:a.coverImage,iconClass:"fas fa-file-image",accept:"image/*",type:"file"}),r.a.createElement(q,{name:"description",label:"Description",placeholder:"Enter description about this movie...",iconClass:"fas fa-info",error:a.description,type:"textarea"}))))}}]),a}(r.a.Component),F=Object(f.b)(function(e){return{genres:e.genre.genres}},function(e){return{addMovie:function(a){return e(function(e){var a={headers:{"content-type":"multipart/form-data"}},t=new FormData;return t.append("title",e.title),t.append("numberInStock",e.numberInStock),t.append("genre",e.genre),t.append("image",e.image),function(){var e=Object(C.a)(O.a.mark(function e(n){var r;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("/api/movies/addmovie",t,a);case 3:r=e.sent,n({type:"GET_MOVIES_SUCCESS",payload:r.data.movies}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n({type:"GET_MOVIES_ERROR",error:e.t0});case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(a){return e.apply(this,arguments)}}()}(a))}}})(U),B=(t(175),t(23)),z={loggedIn:!1,userData:{},authMessage:null},A={movies:[],movie:{},error:null},V={genres:[],newGenre:{},error:null},J=Object(B.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN_SUCCESS":return Object(T.a)({},e,{loggedIn:!0,userData:a.payload.data.userData,authMessage:a.payload.data.message});case"LOGIN_ERROR":return Object(T.a)({},e,{authMessage:a.error.response.data.error});case"SIGNUP_SUCCESS":return Object(T.a)({},e,{loggedIn:!0,userData:a.payload.data.userData,authMessage:a.payload.data.message});case"SIGNUP_ERROR":return Object(T.a)({},e,{authMessage:a.error.response.data.error});case"SIGNOUT":return Object(T.a)({},e,{userData:{},loggedIn:!1,authMessage:null});default:return e}},movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_MOVIES_SUCCESS":return Object(T.a)({},e,{movies:a.payload});case"GET_MOVIES_ERROR":return Object(T.a)({},e,{error:a.error});default:return e}},genre:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_GENRES_SUCCESS":return Object(T.a)({},e,{genres:a.payload});case"GET_GENRES_ERROR":return Object(T.a)({},e,{error:a.error});default:return e}}}),H=[t(80).a],W=Object(B.e)(J,{},Object(B.d)(B.a.apply(void 0,H))),K=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{store:W},r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(g.a,null,r.a.createElement(v.a,{exact:!0,path:"/movies/new",component:F}),r.a.createElement(v.a,{path:"/movies",exact:!0,component:x}),r.a.createElement(p.a,{exact:!0,from:"/",to:"/movies"})))))}}]),a}(n.Component);l.a.render(r.a.createElement(K,null),document.getElementById("root"))},77:function(e,a,t){"use strict";(function(e){var n=t(0),r=t.n(n),c=t(78),l=t(79);t(117);a.a=function(a){var t=a.movie,n=t._id,i=t.title,s=t.rate,o=t.genre,u=t.image,m=t.description,d=t.trailerLink,g=t.movieLength,v="data:image/jpeg;base64,"+new e(u.data,"binary").toString("base64");return r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"card-wrapper",id:n,onClick:function(){return e=n,void document.getElementById("".concat(e)).classList.toggle("flipped");var e}},r.a.createElement(c.a,{trailerLink:d,coverImage:v,rate:s,movieLength:g,genre:o,title:i}),r.a.createElement(l.a,{description:m})))}}).call(this,t(18).Buffer)},78:function(e,a,t){"use strict";var n=t(0),r=t.n(n);t(115);a.a=function(e){var a=e.coverImage,t=e.rate,n=e.title,c=e.genre,l=e.trailerLink,i=e.movieLength;return r.a.createElement("div",{className:"front"},r.a.createElement("img",{src:a,alt:"coverImage"}),r.a.createElement("div",{className:"card-footer"},r.a.createElement("h4",null," ",n," "),r.a.createElement("p",null,i," / ",c),r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"trailer-btn"},"watch trailer")),r.a.createElement("span",{className:"like"}," ",t))}},79:function(e,a,t){"use strict";var n=t(0),r=t.n(n);t(116);a.a=function(e){e.ToggleFavouriteCard,e.id,e.liked;var a=e.description;return r.a.createElement("div",{className:"back"},r.a.createElement("h5",null," Summary "),r.a.createElement("p",null," ",a," "))}},82:function(e,a,t){e.exports=t(177)},87:function(e,a,t){}},[[82,1,2]]]);
//# sourceMappingURL=main.590edaab.chunk.js.map