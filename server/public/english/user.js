webpackJsonp([2],{"./js/user/common.jsx":function(e,t,a){"use strict";function s(e,t){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=null;if(t){n=[new o.a("用户列表","/users"),new o.a("全体统计","/users/statistics"),new o.a("添加","/admin/adduser"),new o.a("编辑","/user/"+t)];c.a.user.permissions.filter(function(e){return e<200}).length&&(n.push(new o.a("用户统计","/user/"+t+"/statistics")),n.push(new o.a("最近操作","/user/"+t+"/op_logs/recent")))}else if(s){n=[new o.a("修改信息","/profile")];var r=c.a.user.permissions.filter(function(e){return e<200});r.length&&(n.push(new o.a("用户统计","/profile/statistics")),n.push(new o.a("最近操作","/profile/op_logs/recent")))}else n=[new o.a("用户列表","/users"),new o.a("全体统计","/users/statistics"),new o.a("添加","/admin/adduser")];a.i(o.b)(n,e)}t.a=s,a.d(t,"b",function(){return m}),a.d(t,"c",function(){return d}),a.d(t,"d",function(){return h});var n=a("../node_modules/babel-runtime/helpers/classCallCheck.js"),r=a.n(n),l=a("../node_modules/babel-runtime/helpers/createClass.js"),i=a.n(l),o=a("./js/nav.jsx"),u=a(2),c=a.n(u),m=function(){function e(){r()(this,e)}return i()(e,null,[{key:"isAdmin",value:function(t){return t===e.kAdmin}}]),e}();m.kDescDict={1:"管理员",10:"用户"},m.kAdmin=1,m.kUser=10;var d=function e(){r()(this,e)};d.kAllModules=[{code:1,desc:"数学部"}],d.kDescDict={},d.kAllModules.forEach(function(e){d.kDescDict[e.code]=e.desc}),d.kMathDepartment=1;var h=function(){function e(){r()(this,e)}return i()(e,null,[{key:"getPermissionsByModule",value:function(t){return t===d.kMathDepartment?e.kMathDepartment:null}}]),e}();h.kMathDepartment=[{code:102,desc:"题目查询"},{code:103,desc:"试卷编辑"},{code:104,desc:"录入"}],h.kAll={},[].concat(h.kMathDepartment).forEach(function(e){h.kAll[e.code]=e.desc})},"./js/user/entry.jsx":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("../node_modules/react/index.js"),n=a.n(s),r=a("../node_modules/react-dom/index.js"),l=a.n(r),i=a("../node_modules/react-router/es/index.js"),o=a("./js/user/userlist.jsx"),u=a("./js/user/manageuser.jsx"),c=a("./js/user/userinfo.jsx"),m=a("./js/user/login.jsx"),d=a("./js/user/oplogs.jsx"),h=a("./js/user/stats.jsx");l.a.render(n.a.createElement(i.a,{history:i.b},n.a.createElement(i.c,{path:"/users",component:o.a}),n.a.createElement(i.c,{path:"/users/statistics",component:h.a}),n.a.createElement(i.c,{path:"/admin/adduser",component:u.a}),n.a.createElement(i.c,{path:"/user/:id",component:u.b}),n.a.createElement(i.c,{path:"/user/:id/statistics",component:u.c}),n.a.createElement(i.c,{path:"/user/:id/op_logs/recent",component:d.a}),n.a.createElement(i.c,{path:"/profile",component:c.a}),n.a.createElement(i.c,{path:"/profile/statistics",component:c.b}),n.a.createElement(i.c,{path:"/profile/op_logs/recent",component:d.b}),n.a.createElement(i.c,{path:"/auth/login",component:m.a})),document.getElementById("main"))},"./js/user/login.jsx":function(e,t,a){"use strict";a.d(t,"a",function(){return j});var s=a("../node_modules/babel-runtime/core-js/json/stringify.js"),n=a.n(s),r=a("../node_modules/babel-runtime/helpers/defineProperty.js"),l=a.n(r),i=a("../node_modules/babel-runtime/core-js/object/get-prototype-of.js"),o=a.n(i),u=a("../node_modules/babel-runtime/helpers/classCallCheck.js"),c=a.n(u),m=a("../node_modules/babel-runtime/helpers/createClass.js"),d=a.n(m),h=a("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),p=a.n(h),f=a("../node_modules/babel-runtime/helpers/inherits.js"),b=a.n(f),E=a("../node_modules/react/index.js"),g=a.n(E),v=a("./js/quantum.js"),y=a("./css/main.scss"),k=(a.n(y),a("../config.json")),_=a.n(k),j=function(e){function t(){c()(this,t);var e=p()(this,(t.__proto__||o()(t)).call(this));return e.genImgSrc=function(){return"http://"+_.a.production.proxy.english.host+":"+_.a.production.proxy.english.port+"/auth/verifycode?num="+Math.random()},e.loginError=function(){e._refPass.focus(),e.setState({pass:""}),e.refreshCode()},e.state={email:window.localStorage.getItem("loginName")||"",pass:"",capacha:"",remember:!0,ajaxing:!1,imgSrc:e.genImgSrc()},e._refEmail=null,e._refPass=null,e._autoFocusInput=e.state.email?"pass":"email",e}return b()(t,e),d()(t,[{key:"componentDidMount",value:function(){this.state.email?this._refPass.focus():this._refEmail.focus()}},{key:"handleChange",value:function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value;this.setState(l()({},e.target.name,t))}},{key:"refreshCode",value:function(){this.codeImg.setAttribute("src",this.genImgSrc())}},{key:"login",value:function(e){var t=this;e.preventDefault(),this.setState({ajaxing:!0}),v.a.post("/auth/login",{json:this.state}).done(function(e){window.localStorage.setItem("loginName",t.state.email),localStorage.setItem("token",e.authorization),v.a.get("/user/current_user").done(function(e){window.localStorage.setItem("user",encodeURIComponent(n()(e.g.user))),location.href=t.props.location.query.next_url||"/"}).fail(t.loginError)}).fail(this.loginError).always(function(){t.setState({ajaxing:!1})})}},{key:"render",value:function(){var e=this;return g.a.createElement("div",{id:"login-page"},g.a.createElement("div",{className:"login-header"},g.a.createElement("div",{className:"logo-wrapper"},g.a.createElement("img",{src:"http://sealimg.youneng.com/static/img/logo/logo_s.png"})),g.a.createElement("div",{className:"sys-name-wrapper"},g.a.createElement("img",{src:"http://sealimg.youneng.com/static/img/logo/318x80_n.png"}))),g.a.createElement("div",{className:"login-body"},g.a.createElement("form",{id:"login-form",className:"",onSubmit:this.login.bind(this)},g.a.createElement("div",{className:"form-row"},g.a.createElement("input",{type:"email",name:"email",className:"form-control",placeholder:"用户名",required:!0,value:this.state.email,onChange:this.handleChange.bind(this),ref:function(t){e._refEmail=t},key:"email"})),g.a.createElement("div",{className:"form-row"},g.a.createElement("input",{type:"password",name:"pass",className:"form-control",required:!0,placeholder:"密码",value:this.state.pass,onChange:this.handleChange.bind(this),ref:function(t){e._refPass=t},key:"pass"})),g.a.createElement("div",{className:"form-row"},g.a.createElement("div",{className:"capacha"},g.a.createElement("input",{type:"text",name:"capacha",className:"form-control text",required:!0,placeholder:"验证码",value:this.state.capacha,onChange:this.handleChange.bind(this)}),g.a.createElement("img",{src:this.state.imgSrc,alt:"",ref:function(t){return e.codeImg=t},onClick:this.refreshCode.bind(this)}))),g.a.createElement("div",{className:"form-row"},g.a.createElement("label",{className:"checkbox-inline remember"},g.a.createElement("input",{type:"checkbox",name:"remember",checked:this.state.remember,onChange:this.handleChange.bind(this)}),g.a.createElement("span",null,"记住我"))),g.a.createElement("div",{className:"form-row"},g.a.createElement("button",{className:"btn btn-primary btn-lg",type:"submit"},"登录"),g.a.createElement("div",{className:"forget-pass hide"},g.a.createElement("a",{href:"#","data-action":"forget-pass"},"忘记密码"))))))}}]),t}(g.a.Component)},"./js/user/manageuser.jsx":function(e,t,a){"use strict";function s(e){return y.a.createElement("div",{className:"form-group"},y.a.createElement("label",{htmlFor:"inputEdu",className:"col-sm-2 control-label"},"级段"),y.a.createElement("div",{className:"col-sm-8"},y.a.createElement("select",{className:"form-control",value:e.edu,onChange:e.changeEdu},k.c.kAll.map(function(e){return y.a.createElement("option",{value:e.edu},e.name)}))))}function n(e){var t=e.user,a=e.permissions;if(!t.module)return null;var s=x.d.getPermissionsByModule(t.module);return y.a.createElement("div",{className:"form-group"},y.a.createElement("label",{className:"col-sm-2 control-label"},"权限"),y.a.createElement("div",{className:"col-sm-8"},s.map(function(t,s){return y.a.createElement("label",{className:"checkbox-inline",key:s},y.a.createElement("input",{type:"checkbox",value:t.code,checked:-1!==a.indexOf(t.code),onChange:e.changePermissions}),t.desc)})))}a.d(t,"e",function(){return S}),a.d(t,"a",function(){return I}),a.d(t,"b",function(){return F}),a.d(t,"d",function(){return U}),a.d(t,"c",function(){return P});var r=a("../node_modules/babel-runtime/helpers/defineProperty.js"),l=a.n(r),i=a("../node_modules/babel-runtime/helpers/toConsumableArray.js"),o=a.n(i),u=a("../node_modules/babel-runtime/core-js/object/get-prototype-of.js"),c=a.n(u),m=a("../node_modules/babel-runtime/helpers/classCallCheck.js"),d=a.n(m),h=a("../node_modules/babel-runtime/helpers/createClass.js"),p=a.n(h),f=a("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),b=a.n(f),E=a("../node_modules/babel-runtime/helpers/inherits.js"),g=a.n(E),v=a("../node_modules/react/index.js"),y=a.n(v),k=a("./js/quantum.js"),_=a(1),j=a.n(_),N=a("../node_modules/sprintf-js/src/sprintf.js"),w=(a.n(N),a(2)),C=a.n(w),x=a("./js/user/common.jsx"),D=function(e){function t(e){d()(this,t);var a=b()(this,(t.__proto__||c()(t)).call(this,e));return a.state={tip:""},a.isAdd="addUser"===a.props.opType,a.currentUser=C.a.user,a.setBind(),a}return g()(t,e),p()(t,[{key:"componentDidMount",value:function(){this.isAdd?a.i(x.a)("添加"):a.i(x.a)("编辑",this.props.userId),this.init(this.isAdd)}},{key:"setTip",value:function(e){this.setState({tip:e})}},{key:"setBind",value:function(){this.updateUserInfo=this.updateUserInfo.bind(this),this.changeRole=this.changeRole.bind(this),this.changePermissions=this.changePermissions.bind(this),this.banUser=this.banUser.bind(this),this.addUser=this.addUser.bind(this),this.changeEdu=this.changeEdu.bind(this),this.submit=this.submit.bind(this)}},{key:"setUser",value:function(e,t){var a=this.state.user.set(e,t);this.setState({user:a})}},{key:"init",value:function(e){var t=this;if(e){var a={email:"",name:"",pass:"",edu:k.d.kDefault,role:x.b.kUser,permissions:[]};this.setState({user:j.a.fromJS(a)})}else k.b.get("/api/user/"+this.props.userId,{query:{format:"json"}}).done(function(e){t.setState({user:j.a.fromJS(e)})})}},{key:"inputChange",value:function(e,t){var a=t.target.value;this.setUser(e,a)}},{key:"changeRole",value:function(e){var t=parseInt(e.target.value,10);this.setUser("role",t)}},{key:"changeEdu",value:function(e){var t=parseInt(e.target.value,10);this.state.user.get("edu")!==t&&this.setUser("edu",t)}},{key:"changePermissions",value:function(e){var t=parseInt(e.target.value,10),a=this.state.user.get("permissions");a=-1!==a.indexOf(t)?a.delete(a.indexOf(t)):a.push(t),this.setUser("permissions",a)}},{key:"banUser",value:function(){this.updateUser({valid:!this.state.user.get("valid")})}},{key:"submit",value:function(e){return e.preventDefault(),this.isAdd?this.addUser(e):this.updateUserInfo(e)}},{key:"updateUser",value:function(e,t){var a=this;this.setState({loading:!0}),k.b.post("/api/user/"+this.props.userId,{json:{update:e}}).done(function(e){a.setState({user:j.a.fromJS(e)}),t&&t()}).always(function(){a.setState({loading:!1})})}},{key:"updateUserInfo",value:function(){var e=this.state.user,t=e.get("pass");if(t&&(t.length<6||t.length>32))return void this.setTip("密码需要6～32位！");this.setTip("");var a={name:e.get("name"),role:e.get("role"),edu:e.get("edu"),permissions:e.get("permissions"),module:x.c.kMathDepartment};t&&(a.pass=t),this.updateUser(a,function(){k.b.alert("信息更新成功！")})}},{key:"addUser",value:function(){var e=this,t=this.state.user;if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(t.get("email")))return void this.setTip("不是合法的Email！");var a={email:t.get("email"),name:t.get("name"),role:t.get("role"),pass:t.get("pass"),edu:t.get("edu"),permissions:t.get("permissions"),module:x.c.kMathDepartment};this.setState({loading:!0}),k.b.put("/api/users",{json:a}).done(function(){k.b.alert("添加成功"),location.href="/users"}).always(function(){e.setState({loading:!1})})}},{key:"render",value:function(){return this.state.user?y.a.createElement("form",{id:"userinfo-form",className:"form-horizontal",onSubmit:this.submit},y.a.createElement("div",{className:"form-group"},y.a.createElement("label",{htmlFor:"inputEmail",className:"col-sm-2 control-label"},"邮箱"),y.a.createElement("div",{className:"col-sm-8"},y.a.createElement("input",{type:"email",id:"inputEmail",className:"form-control",disabled:!this.isAdd,value:this.state.user.get("email"),onChange:this.inputChange.bind(this,"email")}))),y.a.createElement("div",{className:"form-group"},y.a.createElement("label",{htmlFor:"inputUserName",className:"col-sm-2 control-label"},"用户名"),y.a.createElement("div",{className:"col-sm-8"},y.a.createElement("input",{type:"text",id:"inputUserName",className:"form-control",onChange:this.inputChange.bind(this,"name"),value:this.state.user.get("name")}))),y.a.createElement("div",{className:"form-group"},y.a.createElement("label",{htmlFor:"inputPass",className:"col-sm-2 control-label"},"密码"),y.a.createElement("div",{className:"col-sm-8"},y.a.createElement("input",{type:"password",id:"inputPass",className:"form-control",required:this.isAdd,onChange:this.inputChange.bind(this,"pass"),value:this.state.user.get("pass")||""}))),x.b.isAdmin(this.currentUser.role)?y.a.createElement(s,{edu:this.state.user.get("edu"),changeEdu:this.changeEdu}):null,x.b.isAdmin(this.currentUser.role)&&this.state.user.get("_id")!==this.currentUser._id?y.a.createElement("div",{className:"form-group"},y.a.createElement("label",{htmlFor:"inputRole",className:"col-sm-2 control-label"},"角色"),y.a.createElement("div",{className:"col-sm-8"},y.a.createElement("select",{className:"form-control",value:this.state.user.get("role"),onChange:this.changeRole},y.a.createElement("option",{value:"10"},"普通用户"),y.a.createElement("option",{value:"1"},"管理员")))):null,x.b.isAdmin(this.currentUser.role)?y.a.createElement(n,{user:this.currentUser,permissions:this.state.user.get("permissions"),changePermissions:this.changePermissions}):null,y.a.createElement("div",{className:this.isAdd?"hide":"form-group"},y.a.createElement("div",{className:"col-sm-offset-2 col-sm-8"},y.a.createElement("span",{className:this.state.user.get("valid")?"label label-success":"label label-warning"},this.state.user.get("valid")?"Active":"Banned"))),y.a.createElement("div",{className:""!==this.state.tip?"form-group":"hide"},y.a.createElement("div",{className:"col-sm-offset-2 col-sm-8"},y.a.createElement("div",{className:"alert alert-warning"},this.state.tip))),y.a.createElement("div",{className:"form-group"},y.a.createElement("div",{className:"col-sm-offset-2 col-sm-8"},y.a.createElement("button",{type:"submit",disabled:this.state.loading,className:"btn btn-success"},"保存"),"  ",y.a.createElement("button",{type:"button",onClick:this.banUser,disabled:this.state.loading,className:"btn btn-danger "+(this.isAdd?"hide":"")},this.state.user.get("valid")?"禁用":"激活")))):y.a.createElement("div",null,"数据加载中....")}}]),t}(y.a.Component),U=function(e){function t(e){d()(this,t);var a=b()(this,(t.__proto__||c()(t)).call(this,e));return a.state={dataReady:!1,statistics:{}},a.setBind(),a}return g()(t,e),p()(t,null,[{key:"defaultDateRange",value:function(){var e=new Date,a=new Date(e.getFullYear(),e.getMonth(),1);return[t.formatDate(a),t.formatDate(e)]}},{key:"formatDate",value:function(e){return a.i(N.sprintf)("%04d-%02d-%02d",e.getFullYear(),e.getMonth()+1,e.getDate())}}]),p()(t,[{key:"componentDidMount",value:function(){this.search.apply(this,o()(t.defaultDateRange())),this.loadUserInfo()}},{key:"setBind",value:function(){this.search=this.search.bind(this)}},{key:"loadUserInfo",value:function(){var e=this;k.b.get("/api/user/"+this.props.uid).done(function(t){e.user=t,e.setState({dataReady:!0})})}},{key:"search",value:function(e,t){var a=this,s={};e&&(s.start=e+" 00:00"),t&&(s.end=t+" 23:59"),k.b.get("/api/user/"+this.props.uid+"/statistics",{query:s}).done(function(e){a.setState({statistics:e})})}},{key:"render",value:function(){if(!this.state.dataReady)return null;var e=this.state.statistics;return y.a.createElement("div",{id:"user-statistics"},y.a.createElement("div",{className:"panel panel-default"},y.a.createElement("div",{className:"panel-heading"},y.a.createElement("span",null,this.user.name||this.user.email,"的工作量")),y.a.createElement("div",{className:"panel-body"},y.a.createElement("div",{className:"search-bar-wrapper"},y.a.createElement(S,{defaultDateRange:t.defaultDateRange(),searchCallback:this.search})),y.a.createElement("div",null,y.a.createElement("table",{className:"table table-striped table-hover"},y.a.createElement("thead",null,y.a.createElement("tr",null,y.a.createElement("th",null,"用户"),y.a.createElement("th",null,"创建题目"),y.a.createElement("th",null,"排版题目"),y.a.createElement("th",null,"标注题目"),y.a.createElement("th",null,"创建Volume"),y.a.createElement("th",null,"Volume题目数"),y.a.createElement("th",null,"标注"),y.a.createElement("th",null,"审核"))),y.a.createElement("tbody",null,y.a.createElement("tr",null,y.a.createElement("td",null,y.a.createElement("span",null,this.user.name||this.user.email)),y.a.createElement("td",null,y.a.createElement("span",null,e.create)),y.a.createElement("td",null,y.a.createElement("span",null,e.typeset)),y.a.createElement("td",null,y.a.createElement("span",null,e.tag)),y.a.createElement("td",null,y.a.createElement("span",null,e.volume)),y.a.createElement("td",null,y.a.createElement("span",null,e.volume_items)),y.a.createElement("td",null,y.a.createElement("span",null,e.review_tag)),y.a.createElement("td",null,y.a.createElement("span",null,e.review_typeset)))))))))}}]),t}(y.a.Component),P=function(e){function t(){return d()(this,t),b()(this,(t.__proto__||c()(t)).apply(this,arguments))}return g()(t,e),p()(t,[{key:"componentDidMount",value:function(){a.i(x.a)("用户统计",this.props.params.id)}},{key:"render",value:function(){return y.a.createElement(U,{uid:this.props.params.id})}}]),t}(y.a.Component),S=function(e){function t(e){d()(this,t);var a=b()(this,(t.__proto__||c()(t)).call(this,e));return a.state={start:e.defaultDateRange[0],end:e.defaultDateRange[1]},a.setBind(),a}return g()(t,e),p()(t,[{key:"setBind",value:function(){this.changeHandler=this.changeHandler.bind(this)}},{key:"changeHandler",value:function(e,t){this.setState(l()({},e,t.target.value))}},{key:"quickSearch",value:function(e){var t=this,a=[new Date,new Date];switch(e){case"yesterday":a=[new Date((new Date).getTime()-864e5),new Date((new Date).getTime()-864e5)];break;case"thisweek":a=[k.e.weekFirst(),new Date];break;case"lastweek":a=[k.e.weekFirst(new Date(k.e.weekFirst().getTime()-1)),new Date(k.e.weekFirst(new Date(k.e.weekFirst().getTime()-1)).getTime()+5184e5)]}this.setState({start:k.e.dateFormat(a[0]),end:k.e.dateFormat(a[1])},function(){return t.props.searchCallback(t.state.start,t.state.end)})}},{key:"render",value:function(){var e=this;return y.a.createElement("form",{className:"form-inline date-range-form"},y.a.createElement("div",{className:"form-group"},y.a.createElement("label",null,"开始时间："),y.a.createElement("input",{type:"date",className:"form-control",value:this.state.start,onChange:this.changeHandler.bind(this,"start")})),y.a.createElement("div",{className:"form-group"},y.a.createElement("label",null,"结束时间："),y.a.createElement("input",{type:"date",className:"form-control",value:this.state.end,onChange:this.changeHandler.bind(this,"end")})),y.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){return e.props.searchCallback(e.state.start,e.state.end)}},"查询"),y.a.createElement("button",{type:"button",className:"btn btn-default",onClick:this.quickSearch.bind(this,"today")},"今天"),y.a.createElement("button",{type:"button",className:"btn btn-default",onClick:this.quickSearch.bind(this,"yesterday")},"昨天"),y.a.createElement("button",{type:"button",className:"btn btn-default",onClick:this.quickSearch.bind(this,"thisweek")},"本周"),y.a.createElement("button",{type:"button",className:"btn btn-default",onClick:this.quickSearch.bind(this,"lastweek")},"上周"))}}]),t}(y.a.Component),I=function(){return y.a.createElement(D,{opType:"addUser"})},F=function(e){return y.a.createElement(D,{opType:"updateUser",userId:e.params.id})}},"./js/user/oplogs.jsx":function(e,t,a){"use strict";function s(e){var t=e.opLog,a=e.index;return f.a.createElement("tr",null,f.a.createElement("td",null,a+1),f.a.createElement("td",null,new Date(1e3*t.get("ctime")).toLocaleString()),f.a.createElement("td",null,t.get("obj_type")),f.a.createElement("td",null,f.a.createElement("a",{href:"/"+t.get("obj_type")+"/"+t.get("obj_id"),target:"_blank"},t.get("obj_id"))),f.a.createElement("td",null,t.get("type")))}a.d(t,"b",function(){return j}),a.d(t,"a",function(){return N});var n=a("../node_modules/babel-runtime/core-js/object/get-prototype-of.js"),r=a.n(n),l=a("../node_modules/babel-runtime/helpers/classCallCheck.js"),i=a.n(l),o=a("../node_modules/babel-runtime/helpers/createClass.js"),u=a.n(o),c=a("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),m=a.n(c),d=a("../node_modules/babel-runtime/helpers/inherits.js"),h=a.n(d),p=a("../node_modules/react/index.js"),f=a.n(p),b=a(1),E=a.n(b),g=a("./js/quantum.js"),v=a(2),y=a.n(v),k=a("./js/user/common.jsx"),_=function(e){function t(e){i()(this,t);var a=m()(this,(t.__proto__||r()(t)).call(this,e));return a.state={opLogs:null},a}return h()(t,e),u()(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/api/user/"+this.props.uid+"/op_logs/recent",{query:{days:this.props.days}}).done(function(t){e.setState({opLogs:E.a.fromJS(t)})})}},{key:"render",value:function(){return null===this.state.opLogs?f.a.createElement("div",{className:"loading"},"正在加载中..."):f.a.createElement("table",{className:"table table-hover"},f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",null,"序号"),f.a.createElement("th",null,"时间"),f.a.createElement("th",null,"类型"),f.a.createElement("th",null,"ID"),f.a.createElement("th",null,"操作"))),f.a.createElement("tbody",null,this.state.opLogs.map(function(e,t){return f.a.createElement(s,{index:t,opLog:e,key:t})})))}}]),t}(f.a.Component),j=function(e){function t(){return i()(this,t),m()(this,(t.__proto__||r()(t)).apply(this,arguments))}return h()(t,e),u()(t,[{key:"componentDidMount",value:function(){a.i(k.a)("最近操作",null,!0)}},{key:"render",value:function(){return f.a.createElement("div",{id:"my-recent-op-logs"},f.a.createElement("h3",null,"最近",this.props.days,"天的操作"),f.a.createElement(_,{uid:y.a.user._id,days:this.props.days}))}}]),t}(f.a.Component);j.defaultProps={days:7};var N=function(e){function t(){return i()(this,t),m()(this,(t.__proto__||r()(t)).apply(this,arguments))}return h()(t,e),u()(t,[{key:"componentDidMount",value:function(){a.i(k.a)("最近操作",this.props.params.id,!1)}},{key:"render",value:function(){return f.a.createElement("div",{id:"user-recent-op-logs"},f.a.createElement("h3",null,"最近",this.props.days,"天的操作"),f.a.createElement(_,{uid:this.props.params.id,days:this.props.days}))}}]),t}(f.a.Component);N.defaultProps={days:7}},"./js/user/stats.jsx":function(e,t,a){"use strict";a.d(t,"a",function(){return k});var s=a("../node_modules/babel-runtime/helpers/toConsumableArray.js"),n=a.n(s),r=a("../node_modules/babel-runtime/core-js/object/get-prototype-of.js"),l=a.n(r),i=a("../node_modules/babel-runtime/helpers/classCallCheck.js"),o=a.n(i),u=a("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),c=a.n(u),m=a("../node_modules/babel-runtime/helpers/createClass.js"),d=a.n(m),h=a("../node_modules/babel-runtime/helpers/inherits.js"),p=a.n(h),f=a("../node_modules/react/index.js"),b=a.n(f),E=a("./js/quantum.js"),g=a("./css/main.scss"),v=(a.n(g),a("./js/user/manageuser.jsx")),y=a("./js/user/common.jsx"),k=function(e){function t(e){o()(this,t);var a=c()(this,(t.__proto__||l()(t)).call(this,e));return a.state={stats:[]},a.setBind(),a}return p()(t,e),d()(t,null,[{key:"defaultDateRange",value:function(){return[E.e.dateFormat(new Date),E.e.dateFormat(new Date)]}}]),d()(t,[{key:"componentDidMount",value:function(){a.i(y.a)("全体统计",this.props.params.id),this.search.apply(this,n()(t.defaultDateRange()))}},{key:"setBind",value:function(){this.search=this.search.bind(this)}},{key:"search",value:function(e,t){var a=this,s={};e&&(s.start=E.b.dateStrToUnixTime(e)/1e3),t&&(s.end=E.b.dateStrToUnixTime(t)/1e3+86400),E.b.get("/api/users/statistics",{query:s}).done(function(e){a.setState({stats:e})})}},{key:"_renderTr",value:function(e){return b.a.createElement("tr",{key:e._id},b.a.createElement("td",null,b.a.createElement("span",null,e.name)),b.a.createElement("td",null,b.a.createElement("span",null,e.create)),b.a.createElement("td",null,b.a.createElement("span",null,e.typeset)),b.a.createElement("td",null,b.a.createElement("span",null,e.tag)),b.a.createElement("td",null,b.a.createElement("span",null,e.volume)),b.a.createElement("td",null,b.a.createElement("span",null,e.volume_items)),b.a.createElement("td",null,b.a.createElement("span",null,e.review_tag)),b.a.createElement("td",null,b.a.createElement("span",null,e.review_typeset)))}},{key:"render",value:function(){return b.a.createElement("div",{id:"user-statistics"},b.a.createElement("div",{className:"panel panel-default"},b.a.createElement("div",{className:"panel-heading"},b.a.createElement("span",null,"全体工作统计")),b.a.createElement("div",{className:"panel-body"},b.a.createElement("div",{className:"search-bar-wrapper"},b.a.createElement(v.e,{defaultDateRange:t.defaultDateRange(),searchCallback:this.search})),b.a.createElement("div",null,b.a.createElement("table",{className:"table table-striped table-hover"},b.a.createElement("thead",null,b.a.createElement("tr",null,b.a.createElement("th",null,"用户"),b.a.createElement("th",null,"创建题目"),b.a.createElement("th",null,"排版题目"),b.a.createElement("th",null,"标注题目"),b.a.createElement("th",null,"创建Volume"),b.a.createElement("th",null,"Volume题目数"),b.a.createElement("th",null,"标注"),b.a.createElement("th",null,"审核"))),b.a.createElement("tbody",null,this.state.stats.map(this._renderTr.bind(this))))))))}}]),t}(b.a.Component)},"./js/user/userinfo.jsx":function(e,t,a){"use strict";a.d(t,"a",function(){return j}),a.d(t,"b",function(){return N});var s=a("../node_modules/babel-runtime/helpers/defineProperty.js"),n=a.n(s),r=a("../node_modules/babel-runtime/core-js/object/get-prototype-of.js"),l=a.n(r),i=a("../node_modules/babel-runtime/helpers/classCallCheck.js"),o=a.n(i),u=a("../node_modules/babel-runtime/helpers/createClass.js"),c=a.n(u),m=a("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=a.n(m),h=a("../node_modules/babel-runtime/helpers/inherits.js"),p=a.n(h),f=a("../node_modules/react/index.js"),b=a.n(f),E=a("./js/quantum.js"),g=a(2),v=a.n(g),y=a("./js/user/common.jsx"),k=a("./js/user/manageuser.jsx"),_=function(e){function t(e){o()(this,t);var a=d()(this,(t.__proto__||l()(t)).call(this,e));return a.state={tip:"",newPass:"",confirmPass:"",edu:e.userEdu,pass:"",name:e.userName,showPassForm:!1,loading:!1},a.setBind(),a}return p()(t,e),c()(t,[{key:"componentWillMount",value:function(){var e=this;E.b.get("/api/user/"+this.props.userId).done(function(t){e.setState({edu:t.edu},function(){v.a.user.edu=t.edu})})}},{key:"componentDidMount",value:function(){a.i(y.a)("修改信息",null,!0)}},{key:"setBind",value:function(){this.showPassForm=this.showPassForm.bind(this),this.updateUserName=this.updateUserName.bind(this),this.updateUserEdu=this.updateUserEdu.bind(this),this.updateUserPass=this.updateUserPass.bind(this)}},{key:"setTip",value:function(e){this.setState({tip:e})}},{key:"changeEdu",value:function(e){var t=parseInt(e.target.value,10);this.state.edu!==t&&this.setState({edu:t})}},{key:"inputChange",value:function(e,t){var a=t.target.value;this.setState(n()({},e,a));var s=this.state.invalid;this.setState({invalid:s})}},{key:"showPassForm",value:function(){this.setState({showPassForm:!this.state.showPassForm})}},{key:"updateUserName",value:function(){if(this.setTip(""),!this.state.name)return void this.setTip("用户名不能为空!");this.updateUserInfo({name:this.state.name})}},{key:"updateUserEdu",value:function(){this.setTip(""),this.updateUserInfo({edu:this.state.edu})}},{key:"updateUserPass",value:function(){var e=this;return this.setTip(""),this.state.pass?this.state.newPass?this.state.newPass.length<6||this.state.pass.length<6||this.state.newPass.length>32||this.state.pass.length>32?void this.setTip("密码需要6～32位！"):this.state.newPass!==this.state.confirmPass?void this.setTip("密码输入不一致！"):void this.updateUserInfo({pass:this.state.pass,newPass:this.state.newPass},function(){e.setState({showPassForm:!1}),E.b.alert("信息更新成功")}):void this.setTip("新密码为空!"):void this.setTip("密码为空!")}},{key:"updateUserInfo",value:function(e,t){var a=this;this.setState({loading:!0}),this.setTip(""),E.b.post("/api/user/"+this.props.userId,{json:{update_profile:e}}).done(function(e){v.a.user.edu=e.edu,t?t():E.b.alert("信息更新成功")}).fail(function(){a.setState({pass:"",newPass:"",confirmPass:""})}).always(function(){a.setState({loading:!1})})}},{key:"render",value:function(){return b.a.createElement("form",{id:"userinfo-form",className:"form-horizontal"},b.a.createElement("div",{className:"form-group"},b.a.createElement("label",{htmlFor:"inputEmail",className:"col-sm-2 control-label"},"邮箱"),b.a.createElement("label",{className:"col-sm-4 control-label text-left"},this.props.email)),b.a.createElement("div",{className:"form-group"},b.a.createElement("label",{htmlFor:"inputUserName",className:"col-sm-2 control-label"},"用户名"),b.a.createElement("div",{className:"col-sm-2"},b.a.createElement("input",{type:"text",id:"inputUserName",className:"form-control",onChange:this.inputChange.bind(this,"name"),value:this.state.name})),b.a.createElement("div",{className:"col-sm-2"},b.a.createElement("button",{type:"button",onClick:this.updateUserName,disabled:this.state.loading,className:"btn btn-success"},"保存"))),b.a.createElement("div",{className:"form-group"},b.a.createElement("label",{htmlFor:"inputUserEdu",className:"col-sm-2 control-label"},"级段"),b.a.createElement("div",{className:"col-sm-2"},b.a.createElement("select",{id:"inputUserEdu",className:"form-control",value:this.state.edu,onChange:this.changeEdu.bind(this)},E.c.kAll.map(function(e){return b.a.createElement("option",{value:e.edu,key:e.edu},e.name)}))),b.a.createElement("div",{className:"col-sm-2"},b.a.createElement("button",{type:"button",onClick:this.updateUserEdu,disabled:this.state.loading,className:"btn btn-success"},"保存"))),b.a.createElement("div",{className:"form-group"},b.a.createElement("label",{className:"col-sm-2 control-label"},"密码"),b.a.createElement("label",{className:"col-sm-2 control-label text-left"},"******"),b.a.createElement("div",{className:"col-sm-2"},b.a.createElement("button",{type:"button",onClick:this.showPassForm,className:"btn btn-success"},this.state.showPassForm?"取消":"修改密码"))),this.state.showPassForm?b.a.createElement("div",null,b.a.createElement("div",{className:"form-group"},b.a.createElement("label",{htmlFor:"inputPass",className:"col-sm-2 control-label"},"当前密码"),b.a.createElement("div",{className:"col-sm-2"},b.a.createElement("input",{type:"password",id:"inputPass",className:"form-control",onChange:this.inputChange.bind(this,"pass"),value:this.state.pass}))),b.a.createElement("div",{className:"form-group"},b.a.createElement("label",{htmlFor:"inputNewPass",className:"col-sm-2 control-label"},"新密码"),b.a.createElement("div",{className:"col-sm-2"},b.a.createElement("input",{type:"password",id:"inputNewPass",className:"form-control",onChange:this.inputChange.bind(this,"newPass"),value:this.state.newPass}))),b.a.createElement("div",{className:"form-group"},b.a.createElement("label",{htmlFor:"inputConfirmPass",className:"col-sm-2 control-label"},"确认新密码"),b.a.createElement("div",{className:"col-sm-2"},b.a.createElement("input",{type:"password",id:"inputConfirmPass",className:"form-control",onChange:this.inputChange.bind(this,"confirmPass"),value:this.state.confirmPass}))),b.a.createElement("div",{className:"form-group"},b.a.createElement("div",{className:"col-sm-offset-2 col-sm-8"},b.a.createElement("button",{type:"button",onClick:this.updateUserPass,disabled:this.state.loading,className:"btn btn-success"},"保存")))):null,b.a.createElement("div",{className:""!==this.state.tip?"form-group":"hide"},b.a.createElement("div",{className:"col-sm-offset-2 col-sm-8"},b.a.createElement("div",{className:"alert alert-warning"},this.state.tip))))}}]),t}(b.a.Component),j=function(){return b.a.createElement(_,{email:v.a.user.email,userEdu:v.a.user.edu,userName:v.a.user.name,userId:v.a.user._id})},N=function(e){function t(){return o()(this,t),d()(this,(t.__proto__||l()(t)).apply(this,arguments))}return p()(t,e),c()(t,[{key:"componentDidMount",value:function(){a.i(y.a)("用户统计",null,!0)}},{key:"render",value:function(){return b.a.createElement(k.d,{uid:v.a.user._id})}}]),t}(b.a.Component)},"./js/user/userlist.jsx":function(e,t,a){"use strict";var s=a("../node_modules/babel-runtime/core-js/object/get-prototype-of.js"),n=a.n(s),r=a("../node_modules/babel-runtime/helpers/classCallCheck.js"),l=a.n(r),i=a("../node_modules/babel-runtime/helpers/createClass.js"),o=a.n(i),u=a("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),c=a.n(u),m=a("../node_modules/babel-runtime/helpers/inherits.js"),d=a.n(m),h=a("../node_modules/react/index.js"),p=a.n(h),f=a("./js/quantum.js"),b=a("./css/main.scss"),E=(a.n(b),a(2)),g=a.n(E),v=a("./js/user/common.jsx"),y=function(e){function t(){return l()(this,t),c()(this,(t.__proto__||n()(t)).apply(this,arguments))}return d()(t,e),o()(t,[{key:"getPermDesc",value:function(e){return v.d.kAll[e]}},{key:"render",value:function(){var e=this,t=this.props.user;this.currentUser=g.a.user;var a=t.valid?"label label-success":"label label-warning";return p.a.createElement("tr",null,p.a.createElement("td",null,p.a.createElement("a",{href:"/user/"+t._id},p.a.createElement("i",{className:"glyphicon glyphicon-user"}),p.a.createElement("span",null,t.name))),p.a.createElement("td",null,p.a.createElement("a",{href:"/user/"+t._id},t.email)),p.a.createElement("td",null,p.a.createElement("span",{className:a},t.valid?"Active":"Banned")),p.a.createElement("td",{className:"permissions-container"},t.permissions.map(function(t,a){return p.a.createElement("span",{key:a},e.getPermDesc(t))})),p.a.createElement("td",null,p.a.createElement("span",null,v.b.kDescDict[t.role])),this.props.showOp?p.a.createElement("td",null,p.a.createElement("a",{href:"/user/"+t._id+"/statistics"},"查看工作量")):null)}}]),t}(p.a.Component),k=function(e){function t(e){l()(this,t);var a=c()(this,(t.__proto__||n()(t)).call(this,e));return a.state={users:[]},a.currentUser=g.a.user,a}return d()(t,e),o()(t,[{key:"componentDidMount",value:function(){a.i(v.a)("用户列表"),this.init()}},{key:"init",value:function(){var e=this;f.a.get("/api/users",{query:{format:"json"}}).done(function(t){e.setState({users:t})})}},{key:"render",value:function(){var e=g.a.user.permissions.filter(function(e){return e<200}),t=e.length>0;return p.a.createElement("div",{id:"users-list"},p.a.createElement("div",{className:"userlist-container"},p.a.createElement("table",{className:"table table-wrapper"},p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",null,"用户名"),p.a.createElement("th",null,"邮箱"),p.a.createElement("th",null,"状态"),p.a.createElement("th",null,"权限"),p.a.createElement("th",null,"角色"),t?p.a.createElement("th",null,"操作"):null)),p.a.createElement("tbody",null,this.state.users.map(function(e){return p.a.createElement(y,{key:e._id,user:e,showOp:t})})))),p.a.createElement("a",{role:"button",className:"btn btn-success",href:"/admin/adduser"},"添加用户"))}}]),t}(p.a.Component);t.a=k},0:function(e,t){e.exports=jQuery},1:function(e,t){e.exports=Immutable},2:function(e,t){e.exports=Global},4:function(e,t){e.exports=Raven}},["./js/user/entry.jsx"]);
//# sourceMappingURL=user.js.map