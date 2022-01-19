goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33958 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33958(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33962 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33962(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32978 = coll;
var G__32979 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32978,G__32979) : shadow.dom.lazy_native_coll_seq.call(null,G__32978,G__32979));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33018 = arguments.length;
switch (G__33018) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33020 = arguments.length;
switch (G__33020) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33036 = arguments.length;
switch (G__33036) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33054 = arguments.length;
switch (G__33054) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33067 = arguments.length;
switch (G__33067) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33089 = arguments.length;
switch (G__33089) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33103){if((e33103 instanceof Object)){
var e = e33103;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33103;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33114 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33115 = null;
var count__33116 = (0);
var i__33117 = (0);
while(true){
if((i__33117 < count__33116)){
var el = chunk__33115.cljs$core$IIndexed$_nth$arity$2(null,i__33117);
var handler_33982__$1 = ((function (seq__33114,chunk__33115,count__33116,i__33117,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33114,chunk__33115,count__33116,i__33117,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33982__$1);


var G__33987 = seq__33114;
var G__33988 = chunk__33115;
var G__33989 = count__33116;
var G__33990 = (i__33117 + (1));
seq__33114 = G__33987;
chunk__33115 = G__33988;
count__33116 = G__33989;
i__33117 = G__33990;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33114);
if(temp__5753__auto__){
var seq__33114__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33114__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33114__$1);
var G__33994 = cljs.core.chunk_rest(seq__33114__$1);
var G__33995 = c__4679__auto__;
var G__33996 = cljs.core.count(c__4679__auto__);
var G__33997 = (0);
seq__33114 = G__33994;
chunk__33115 = G__33995;
count__33116 = G__33996;
i__33117 = G__33997;
continue;
} else {
var el = cljs.core.first(seq__33114__$1);
var handler_33998__$1 = ((function (seq__33114,chunk__33115,count__33116,i__33117,el,seq__33114__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33114,chunk__33115,count__33116,i__33117,el,seq__33114__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33998__$1);


var G__34002 = cljs.core.next(seq__33114__$1);
var G__34003 = null;
var G__34004 = (0);
var G__34005 = (0);
seq__33114 = G__34002;
chunk__33115 = G__34003;
count__33116 = G__34004;
i__33117 = G__34005;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33154 = arguments.length;
switch (G__33154) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33164 = cljs.core.seq(events);
var chunk__33165 = null;
var count__33166 = (0);
var i__33167 = (0);
while(true){
if((i__33167 < count__33166)){
var vec__33183 = chunk__33165.cljs$core$IIndexed$_nth$arity$2(null,i__33167);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33183,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33183,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34011 = seq__33164;
var G__34012 = chunk__33165;
var G__34013 = count__33166;
var G__34014 = (i__33167 + (1));
seq__33164 = G__34011;
chunk__33165 = G__34012;
count__33166 = G__34013;
i__33167 = G__34014;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33164);
if(temp__5753__auto__){
var seq__33164__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33164__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33164__$1);
var G__34017 = cljs.core.chunk_rest(seq__33164__$1);
var G__34018 = c__4679__auto__;
var G__34019 = cljs.core.count(c__4679__auto__);
var G__34020 = (0);
seq__33164 = G__34017;
chunk__33165 = G__34018;
count__33166 = G__34019;
i__33167 = G__34020;
continue;
} else {
var vec__33194 = cljs.core.first(seq__33164__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33194,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33194,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34021 = cljs.core.next(seq__33164__$1);
var G__34022 = null;
var G__34023 = (0);
var G__34024 = (0);
seq__33164 = G__34021;
chunk__33165 = G__34022;
count__33166 = G__34023;
i__33167 = G__34024;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33201 = cljs.core.seq(styles);
var chunk__33202 = null;
var count__33203 = (0);
var i__33204 = (0);
while(true){
if((i__33204 < count__33203)){
var vec__33230 = chunk__33202.cljs$core$IIndexed$_nth$arity$2(null,i__33204);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33230,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33230,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34025 = seq__33201;
var G__34026 = chunk__33202;
var G__34027 = count__33203;
var G__34028 = (i__33204 + (1));
seq__33201 = G__34025;
chunk__33202 = G__34026;
count__33203 = G__34027;
i__33204 = G__34028;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33201);
if(temp__5753__auto__){
var seq__33201__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33201__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33201__$1);
var G__34029 = cljs.core.chunk_rest(seq__33201__$1);
var G__34030 = c__4679__auto__;
var G__34031 = cljs.core.count(c__4679__auto__);
var G__34032 = (0);
seq__33201 = G__34029;
chunk__33202 = G__34030;
count__33203 = G__34031;
i__33204 = G__34032;
continue;
} else {
var vec__33236 = cljs.core.first(seq__33201__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33236,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33236,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34033 = cljs.core.next(seq__33201__$1);
var G__34034 = null;
var G__34035 = (0);
var G__34036 = (0);
seq__33201 = G__34033;
chunk__33202 = G__34034;
count__33203 = G__34035;
i__33204 = G__34036;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33247_34037 = key;
var G__33247_34038__$1 = (((G__33247_34037 instanceof cljs.core.Keyword))?G__33247_34037.fqn:null);
switch (G__33247_34038__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34040 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_34040,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_34040,"aria-");
}
})())){
el.setAttribute(ks_34040,value);
} else {
(el[ks_34040] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33283){
var map__33285 = p__33283;
var map__33285__$1 = cljs.core.__destructure_map(map__33285);
var props = map__33285__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33285__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33286 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33286,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33286,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33286,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33291 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33291,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33291;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33296 = arguments.length;
switch (G__33296) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33310){
var vec__33311 = p__33310;
var seq__33312 = cljs.core.seq(vec__33311);
var first__33313 = cljs.core.first(seq__33312);
var seq__33312__$1 = cljs.core.next(seq__33312);
var nn = first__33313;
var first__33313__$1 = cljs.core.first(seq__33312__$1);
var seq__33312__$2 = cljs.core.next(seq__33312__$1);
var np = first__33313__$1;
var nc = seq__33312__$2;
var node = vec__33311;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33317 = nn;
var G__33318 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33317,G__33318) : create_fn.call(null,G__33317,G__33318));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33322 = nn;
var G__33323 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33322,G__33323) : create_fn.call(null,G__33322,G__33323));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33328 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33328,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33328,(1),null);
var seq__33332_34044 = cljs.core.seq(node_children);
var chunk__33333_34045 = null;
var count__33334_34046 = (0);
var i__33335_34047 = (0);
while(true){
if((i__33335_34047 < count__33334_34046)){
var child_struct_34048 = chunk__33333_34045.cljs$core$IIndexed$_nth$arity$2(null,i__33335_34047);
var children_34049 = shadow.dom.dom_node(child_struct_34048);
if(cljs.core.seq_QMARK_(children_34049)){
var seq__33378_34050 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34049));
var chunk__33380_34051 = null;
var count__33381_34052 = (0);
var i__33382_34053 = (0);
while(true){
if((i__33382_34053 < count__33381_34052)){
var child_34054 = chunk__33380_34051.cljs$core$IIndexed$_nth$arity$2(null,i__33382_34053);
if(cljs.core.truth_(child_34054)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34054);


var G__34055 = seq__33378_34050;
var G__34056 = chunk__33380_34051;
var G__34057 = count__33381_34052;
var G__34058 = (i__33382_34053 + (1));
seq__33378_34050 = G__34055;
chunk__33380_34051 = G__34056;
count__33381_34052 = G__34057;
i__33382_34053 = G__34058;
continue;
} else {
var G__34059 = seq__33378_34050;
var G__34060 = chunk__33380_34051;
var G__34061 = count__33381_34052;
var G__34062 = (i__33382_34053 + (1));
seq__33378_34050 = G__34059;
chunk__33380_34051 = G__34060;
count__33381_34052 = G__34061;
i__33382_34053 = G__34062;
continue;
}
} else {
var temp__5753__auto___34063 = cljs.core.seq(seq__33378_34050);
if(temp__5753__auto___34063){
var seq__33378_34064__$1 = temp__5753__auto___34063;
if(cljs.core.chunked_seq_QMARK_(seq__33378_34064__$1)){
var c__4679__auto___34065 = cljs.core.chunk_first(seq__33378_34064__$1);
var G__34066 = cljs.core.chunk_rest(seq__33378_34064__$1);
var G__34067 = c__4679__auto___34065;
var G__34068 = cljs.core.count(c__4679__auto___34065);
var G__34069 = (0);
seq__33378_34050 = G__34066;
chunk__33380_34051 = G__34067;
count__33381_34052 = G__34068;
i__33382_34053 = G__34069;
continue;
} else {
var child_34070 = cljs.core.first(seq__33378_34064__$1);
if(cljs.core.truth_(child_34070)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34070);


var G__34071 = cljs.core.next(seq__33378_34064__$1);
var G__34072 = null;
var G__34073 = (0);
var G__34074 = (0);
seq__33378_34050 = G__34071;
chunk__33380_34051 = G__34072;
count__33381_34052 = G__34073;
i__33382_34053 = G__34074;
continue;
} else {
var G__34075 = cljs.core.next(seq__33378_34064__$1);
var G__34076 = null;
var G__34077 = (0);
var G__34078 = (0);
seq__33378_34050 = G__34075;
chunk__33380_34051 = G__34076;
count__33381_34052 = G__34077;
i__33382_34053 = G__34078;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34049);
}


var G__34079 = seq__33332_34044;
var G__34080 = chunk__33333_34045;
var G__34081 = count__33334_34046;
var G__34082 = (i__33335_34047 + (1));
seq__33332_34044 = G__34079;
chunk__33333_34045 = G__34080;
count__33334_34046 = G__34081;
i__33335_34047 = G__34082;
continue;
} else {
var temp__5753__auto___34083 = cljs.core.seq(seq__33332_34044);
if(temp__5753__auto___34083){
var seq__33332_34084__$1 = temp__5753__auto___34083;
if(cljs.core.chunked_seq_QMARK_(seq__33332_34084__$1)){
var c__4679__auto___34085 = cljs.core.chunk_first(seq__33332_34084__$1);
var G__34086 = cljs.core.chunk_rest(seq__33332_34084__$1);
var G__34087 = c__4679__auto___34085;
var G__34088 = cljs.core.count(c__4679__auto___34085);
var G__34089 = (0);
seq__33332_34044 = G__34086;
chunk__33333_34045 = G__34087;
count__33334_34046 = G__34088;
i__33335_34047 = G__34089;
continue;
} else {
var child_struct_34090 = cljs.core.first(seq__33332_34084__$1);
var children_34091 = shadow.dom.dom_node(child_struct_34090);
if(cljs.core.seq_QMARK_(children_34091)){
var seq__33388_34092 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34091));
var chunk__33390_34093 = null;
var count__33391_34094 = (0);
var i__33392_34095 = (0);
while(true){
if((i__33392_34095 < count__33391_34094)){
var child_34096 = chunk__33390_34093.cljs$core$IIndexed$_nth$arity$2(null,i__33392_34095);
if(cljs.core.truth_(child_34096)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34096);


var G__34097 = seq__33388_34092;
var G__34098 = chunk__33390_34093;
var G__34099 = count__33391_34094;
var G__34100 = (i__33392_34095 + (1));
seq__33388_34092 = G__34097;
chunk__33390_34093 = G__34098;
count__33391_34094 = G__34099;
i__33392_34095 = G__34100;
continue;
} else {
var G__34101 = seq__33388_34092;
var G__34102 = chunk__33390_34093;
var G__34103 = count__33391_34094;
var G__34104 = (i__33392_34095 + (1));
seq__33388_34092 = G__34101;
chunk__33390_34093 = G__34102;
count__33391_34094 = G__34103;
i__33392_34095 = G__34104;
continue;
}
} else {
var temp__5753__auto___34105__$1 = cljs.core.seq(seq__33388_34092);
if(temp__5753__auto___34105__$1){
var seq__33388_34106__$1 = temp__5753__auto___34105__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33388_34106__$1)){
var c__4679__auto___34107 = cljs.core.chunk_first(seq__33388_34106__$1);
var G__34108 = cljs.core.chunk_rest(seq__33388_34106__$1);
var G__34109 = c__4679__auto___34107;
var G__34110 = cljs.core.count(c__4679__auto___34107);
var G__34111 = (0);
seq__33388_34092 = G__34108;
chunk__33390_34093 = G__34109;
count__33391_34094 = G__34110;
i__33392_34095 = G__34111;
continue;
} else {
var child_34112 = cljs.core.first(seq__33388_34106__$1);
if(cljs.core.truth_(child_34112)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34112);


var G__34113 = cljs.core.next(seq__33388_34106__$1);
var G__34114 = null;
var G__34115 = (0);
var G__34116 = (0);
seq__33388_34092 = G__34113;
chunk__33390_34093 = G__34114;
count__33391_34094 = G__34115;
i__33392_34095 = G__34116;
continue;
} else {
var G__34117 = cljs.core.next(seq__33388_34106__$1);
var G__34118 = null;
var G__34119 = (0);
var G__34120 = (0);
seq__33388_34092 = G__34117;
chunk__33390_34093 = G__34118;
count__33391_34094 = G__34119;
i__33392_34095 = G__34120;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34091);
}


var G__34121 = cljs.core.next(seq__33332_34084__$1);
var G__34122 = null;
var G__34123 = (0);
var G__34124 = (0);
seq__33332_34044 = G__34121;
chunk__33333_34045 = G__34122;
count__33334_34046 = G__34123;
i__33335_34047 = G__34124;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33409 = cljs.core.seq(node);
var chunk__33410 = null;
var count__33411 = (0);
var i__33412 = (0);
while(true){
if((i__33412 < count__33411)){
var n = chunk__33410.cljs$core$IIndexed$_nth$arity$2(null,i__33412);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34125 = seq__33409;
var G__34126 = chunk__33410;
var G__34127 = count__33411;
var G__34128 = (i__33412 + (1));
seq__33409 = G__34125;
chunk__33410 = G__34126;
count__33411 = G__34127;
i__33412 = G__34128;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33409);
if(temp__5753__auto__){
var seq__33409__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33409__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33409__$1);
var G__34129 = cljs.core.chunk_rest(seq__33409__$1);
var G__34130 = c__4679__auto__;
var G__34131 = cljs.core.count(c__4679__auto__);
var G__34132 = (0);
seq__33409 = G__34129;
chunk__33410 = G__34130;
count__33411 = G__34131;
i__33412 = G__34132;
continue;
} else {
var n = cljs.core.first(seq__33409__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34133 = cljs.core.next(seq__33409__$1);
var G__34134 = null;
var G__34135 = (0);
var G__34136 = (0);
seq__33409 = G__34133;
chunk__33410 = G__34134;
count__33411 = G__34135;
i__33412 = G__34136;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33431 = arguments.length;
switch (G__33431) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33442 = arguments.length;
switch (G__33442) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33459 = arguments.length;
switch (G__33459) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34143 = arguments.length;
var i__4865__auto___34144 = (0);
while(true){
if((i__4865__auto___34144 < len__4864__auto___34143)){
args__4870__auto__.push((arguments[i__4865__auto___34144]));

var G__34146 = (i__4865__auto___34144 + (1));
i__4865__auto___34144 = G__34146;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33523_34147 = cljs.core.seq(nodes);
var chunk__33524_34148 = null;
var count__33525_34149 = (0);
var i__33526_34150 = (0);
while(true){
if((i__33526_34150 < count__33525_34149)){
var node_34151 = chunk__33524_34148.cljs$core$IIndexed$_nth$arity$2(null,i__33526_34150);
fragment.appendChild(shadow.dom._to_dom(node_34151));


var G__34152 = seq__33523_34147;
var G__34153 = chunk__33524_34148;
var G__34154 = count__33525_34149;
var G__34155 = (i__33526_34150 + (1));
seq__33523_34147 = G__34152;
chunk__33524_34148 = G__34153;
count__33525_34149 = G__34154;
i__33526_34150 = G__34155;
continue;
} else {
var temp__5753__auto___34156 = cljs.core.seq(seq__33523_34147);
if(temp__5753__auto___34156){
var seq__33523_34158__$1 = temp__5753__auto___34156;
if(cljs.core.chunked_seq_QMARK_(seq__33523_34158__$1)){
var c__4679__auto___34159 = cljs.core.chunk_first(seq__33523_34158__$1);
var G__34160 = cljs.core.chunk_rest(seq__33523_34158__$1);
var G__34161 = c__4679__auto___34159;
var G__34162 = cljs.core.count(c__4679__auto___34159);
var G__34163 = (0);
seq__33523_34147 = G__34160;
chunk__33524_34148 = G__34161;
count__33525_34149 = G__34162;
i__33526_34150 = G__34163;
continue;
} else {
var node_34164 = cljs.core.first(seq__33523_34158__$1);
fragment.appendChild(shadow.dom._to_dom(node_34164));


var G__34165 = cljs.core.next(seq__33523_34158__$1);
var G__34166 = null;
var G__34167 = (0);
var G__34168 = (0);
seq__33523_34147 = G__34165;
chunk__33524_34148 = G__34166;
count__33525_34149 = G__34167;
i__33526_34150 = G__34168;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33509){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33509));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33539_34169 = cljs.core.seq(scripts);
var chunk__33540_34170 = null;
var count__33541_34171 = (0);
var i__33542_34172 = (0);
while(true){
if((i__33542_34172 < count__33541_34171)){
var vec__33557_34174 = chunk__33540_34170.cljs$core$IIndexed$_nth$arity$2(null,i__33542_34172);
var script_tag_34175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33557_34174,(0),null);
var script_body_34176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33557_34174,(1),null);
eval(script_body_34176);


var G__34177 = seq__33539_34169;
var G__34178 = chunk__33540_34170;
var G__34179 = count__33541_34171;
var G__34180 = (i__33542_34172 + (1));
seq__33539_34169 = G__34177;
chunk__33540_34170 = G__34178;
count__33541_34171 = G__34179;
i__33542_34172 = G__34180;
continue;
} else {
var temp__5753__auto___34181 = cljs.core.seq(seq__33539_34169);
if(temp__5753__auto___34181){
var seq__33539_34182__$1 = temp__5753__auto___34181;
if(cljs.core.chunked_seq_QMARK_(seq__33539_34182__$1)){
var c__4679__auto___34193 = cljs.core.chunk_first(seq__33539_34182__$1);
var G__34194 = cljs.core.chunk_rest(seq__33539_34182__$1);
var G__34195 = c__4679__auto___34193;
var G__34196 = cljs.core.count(c__4679__auto___34193);
var G__34197 = (0);
seq__33539_34169 = G__34194;
chunk__33540_34170 = G__34195;
count__33541_34171 = G__34196;
i__33542_34172 = G__34197;
continue;
} else {
var vec__33564_34198 = cljs.core.first(seq__33539_34182__$1);
var script_tag_34199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33564_34198,(0),null);
var script_body_34200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33564_34198,(1),null);
eval(script_body_34200);


var G__34201 = cljs.core.next(seq__33539_34182__$1);
var G__34202 = null;
var G__34203 = (0);
var G__34204 = (0);
seq__33539_34169 = G__34201;
chunk__33540_34170 = G__34202;
count__33541_34171 = G__34203;
i__33542_34172 = G__34204;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33569){
var vec__33571 = p__33569;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33571,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33571,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33592 = arguments.length;
switch (G__33592) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33623 = cljs.core.seq(style_keys);
var chunk__33624 = null;
var count__33625 = (0);
var i__33626 = (0);
while(true){
if((i__33626 < count__33625)){
var it = chunk__33624.cljs$core$IIndexed$_nth$arity$2(null,i__33626);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34210 = seq__33623;
var G__34211 = chunk__33624;
var G__34212 = count__33625;
var G__34213 = (i__33626 + (1));
seq__33623 = G__34210;
chunk__33624 = G__34211;
count__33625 = G__34212;
i__33626 = G__34213;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33623);
if(temp__5753__auto__){
var seq__33623__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33623__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33623__$1);
var G__34214 = cljs.core.chunk_rest(seq__33623__$1);
var G__34215 = c__4679__auto__;
var G__34216 = cljs.core.count(c__4679__auto__);
var G__34217 = (0);
seq__33623 = G__34214;
chunk__33624 = G__34215;
count__33625 = G__34216;
i__33626 = G__34217;
continue;
} else {
var it = cljs.core.first(seq__33623__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34218 = cljs.core.next(seq__33623__$1);
var G__34219 = null;
var G__34220 = (0);
var G__34221 = (0);
seq__33623 = G__34218;
chunk__33624 = G__34219;
count__33625 = G__34220;
i__33626 = G__34221;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33637,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33641 = k33637;
var G__33641__$1 = (((G__33641 instanceof cljs.core.Keyword))?G__33641.fqn:null);
switch (G__33641__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33637,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33642){
var vec__33652 = p__33642;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33652,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33652,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33636){
var self__ = this;
var G__33636__$1 = this;
return (new cljs.core.RecordIter((0),G__33636__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33638,other33639){
var self__ = this;
var this33638__$1 = this;
return (((!((other33639 == null)))) && ((((this33638__$1.constructor === other33639.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33638__$1.x,other33639.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33638__$1.y,other33639.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33638__$1.__extmap,other33639.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33637){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33683 = k33637;
var G__33683__$1 = (((G__33683 instanceof cljs.core.Keyword))?G__33683.fqn:null);
switch (G__33683__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33637);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33636){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33686 = cljs.core.keyword_identical_QMARK_;
var expr__33687 = k__4511__auto__;
if(cljs.core.truth_((pred__33686.cljs$core$IFn$_invoke$arity$2 ? pred__33686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33687) : pred__33686.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33687)))){
return (new shadow.dom.Coordinate(G__33636,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33686.cljs$core$IFn$_invoke$arity$2 ? pred__33686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33687) : pred__33686.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33687)))){
return (new shadow.dom.Coordinate(self__.x,G__33636,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33636),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33636){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33636,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33640){
var extmap__4542__auto__ = (function (){var G__33716 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33640,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33640)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33716);
} else {
return G__33716;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33640),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33640),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33733,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33748 = k33733;
var G__33748__$1 = (((G__33748 instanceof cljs.core.Keyword))?G__33748.fqn:null);
switch (G__33748__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33733,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33753){
var vec__33754 = p__33753;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33754,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33754,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33732){
var self__ = this;
var G__33732__$1 = this;
return (new cljs.core.RecordIter((0),G__33732__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33734,other33735){
var self__ = this;
var this33734__$1 = this;
return (((!((other33735 == null)))) && ((((this33734__$1.constructor === other33735.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33734__$1.w,other33735.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33734__$1.h,other33735.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33734__$1.__extmap,other33735.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33733){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33785 = k33733;
var G__33785__$1 = (((G__33785 instanceof cljs.core.Keyword))?G__33785.fqn:null);
switch (G__33785__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33733);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33732){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33788 = cljs.core.keyword_identical_QMARK_;
var expr__33789 = k__4511__auto__;
if(cljs.core.truth_((pred__33788.cljs$core$IFn$_invoke$arity$2 ? pred__33788.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33789) : pred__33788.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33789)))){
return (new shadow.dom.Size(G__33732,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33788.cljs$core$IFn$_invoke$arity$2 ? pred__33788.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33789) : pred__33788.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33789)))){
return (new shadow.dom.Size(self__.w,G__33732,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33732),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33732){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33732,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33737){
var extmap__4542__auto__ = (function (){var G__33792 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33737,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33737)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33792);
} else {
return G__33792;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33737),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33737),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__34230 = (i + (1));
var G__34231 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34230;
ret = G__34231;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33805){
var vec__33806 = p__33805;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33806,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33806,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33810 = arguments.length;
switch (G__33810) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34236 = ps;
var G__34237 = (i + (1));
el__$1 = G__34236;
i = G__34237;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33854 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33854,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33854,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33854,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33860_34238 = cljs.core.seq(props);
var chunk__33861_34239 = null;
var count__33862_34240 = (0);
var i__33863_34241 = (0);
while(true){
if((i__33863_34241 < count__33862_34240)){
var vec__33870_34242 = chunk__33861_34239.cljs$core$IIndexed$_nth$arity$2(null,i__33863_34241);
var k_34243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33870_34242,(0),null);
var v_34244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33870_34242,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34243);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34243),v_34244);


var G__34245 = seq__33860_34238;
var G__34246 = chunk__33861_34239;
var G__34247 = count__33862_34240;
var G__34248 = (i__33863_34241 + (1));
seq__33860_34238 = G__34245;
chunk__33861_34239 = G__34246;
count__33862_34240 = G__34247;
i__33863_34241 = G__34248;
continue;
} else {
var temp__5753__auto___34249 = cljs.core.seq(seq__33860_34238);
if(temp__5753__auto___34249){
var seq__33860_34250__$1 = temp__5753__auto___34249;
if(cljs.core.chunked_seq_QMARK_(seq__33860_34250__$1)){
var c__4679__auto___34251 = cljs.core.chunk_first(seq__33860_34250__$1);
var G__34252 = cljs.core.chunk_rest(seq__33860_34250__$1);
var G__34253 = c__4679__auto___34251;
var G__34254 = cljs.core.count(c__4679__auto___34251);
var G__34255 = (0);
seq__33860_34238 = G__34252;
chunk__33861_34239 = G__34253;
count__33862_34240 = G__34254;
i__33863_34241 = G__34255;
continue;
} else {
var vec__33873_34256 = cljs.core.first(seq__33860_34250__$1);
var k_34257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33873_34256,(0),null);
var v_34258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33873_34256,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34257);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34257),v_34258);


var G__34259 = cljs.core.next(seq__33860_34250__$1);
var G__34260 = null;
var G__34261 = (0);
var G__34262 = (0);
seq__33860_34238 = G__34259;
chunk__33861_34239 = G__34260;
count__33862_34240 = G__34261;
i__33863_34241 = G__34262;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33877 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33877,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33877,(1),null);
var seq__33880_34263 = cljs.core.seq(node_children);
var chunk__33882_34264 = null;
var count__33883_34265 = (0);
var i__33884_34266 = (0);
while(true){
if((i__33884_34266 < count__33883_34265)){
var child_struct_34267 = chunk__33882_34264.cljs$core$IIndexed$_nth$arity$2(null,i__33884_34266);
if((!((child_struct_34267 == null)))){
if(typeof child_struct_34267 === 'string'){
var text_34268 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34268),child_struct_34267].join(''));
} else {
var children_34269 = shadow.dom.svg_node(child_struct_34267);
if(cljs.core.seq_QMARK_(children_34269)){
var seq__33909_34270 = cljs.core.seq(children_34269);
var chunk__33911_34271 = null;
var count__33912_34272 = (0);
var i__33913_34273 = (0);
while(true){
if((i__33913_34273 < count__33912_34272)){
var child_34274 = chunk__33911_34271.cljs$core$IIndexed$_nth$arity$2(null,i__33913_34273);
if(cljs.core.truth_(child_34274)){
node.appendChild(child_34274);


var G__34275 = seq__33909_34270;
var G__34276 = chunk__33911_34271;
var G__34277 = count__33912_34272;
var G__34278 = (i__33913_34273 + (1));
seq__33909_34270 = G__34275;
chunk__33911_34271 = G__34276;
count__33912_34272 = G__34277;
i__33913_34273 = G__34278;
continue;
} else {
var G__34279 = seq__33909_34270;
var G__34280 = chunk__33911_34271;
var G__34281 = count__33912_34272;
var G__34282 = (i__33913_34273 + (1));
seq__33909_34270 = G__34279;
chunk__33911_34271 = G__34280;
count__33912_34272 = G__34281;
i__33913_34273 = G__34282;
continue;
}
} else {
var temp__5753__auto___34283 = cljs.core.seq(seq__33909_34270);
if(temp__5753__auto___34283){
var seq__33909_34284__$1 = temp__5753__auto___34283;
if(cljs.core.chunked_seq_QMARK_(seq__33909_34284__$1)){
var c__4679__auto___34285 = cljs.core.chunk_first(seq__33909_34284__$1);
var G__34286 = cljs.core.chunk_rest(seq__33909_34284__$1);
var G__34287 = c__4679__auto___34285;
var G__34288 = cljs.core.count(c__4679__auto___34285);
var G__34289 = (0);
seq__33909_34270 = G__34286;
chunk__33911_34271 = G__34287;
count__33912_34272 = G__34288;
i__33913_34273 = G__34289;
continue;
} else {
var child_34290 = cljs.core.first(seq__33909_34284__$1);
if(cljs.core.truth_(child_34290)){
node.appendChild(child_34290);


var G__34291 = cljs.core.next(seq__33909_34284__$1);
var G__34292 = null;
var G__34293 = (0);
var G__34294 = (0);
seq__33909_34270 = G__34291;
chunk__33911_34271 = G__34292;
count__33912_34272 = G__34293;
i__33913_34273 = G__34294;
continue;
} else {
var G__34295 = cljs.core.next(seq__33909_34284__$1);
var G__34296 = null;
var G__34298 = (0);
var G__34299 = (0);
seq__33909_34270 = G__34295;
chunk__33911_34271 = G__34296;
count__33912_34272 = G__34298;
i__33913_34273 = G__34299;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34269);
}
}


var G__34301 = seq__33880_34263;
var G__34302 = chunk__33882_34264;
var G__34303 = count__33883_34265;
var G__34304 = (i__33884_34266 + (1));
seq__33880_34263 = G__34301;
chunk__33882_34264 = G__34302;
count__33883_34265 = G__34303;
i__33884_34266 = G__34304;
continue;
} else {
var G__34305 = seq__33880_34263;
var G__34306 = chunk__33882_34264;
var G__34307 = count__33883_34265;
var G__34308 = (i__33884_34266 + (1));
seq__33880_34263 = G__34305;
chunk__33882_34264 = G__34306;
count__33883_34265 = G__34307;
i__33884_34266 = G__34308;
continue;
}
} else {
var temp__5753__auto___34309 = cljs.core.seq(seq__33880_34263);
if(temp__5753__auto___34309){
var seq__33880_34310__$1 = temp__5753__auto___34309;
if(cljs.core.chunked_seq_QMARK_(seq__33880_34310__$1)){
var c__4679__auto___34311 = cljs.core.chunk_first(seq__33880_34310__$1);
var G__34312 = cljs.core.chunk_rest(seq__33880_34310__$1);
var G__34313 = c__4679__auto___34311;
var G__34314 = cljs.core.count(c__4679__auto___34311);
var G__34315 = (0);
seq__33880_34263 = G__34312;
chunk__33882_34264 = G__34313;
count__33883_34265 = G__34314;
i__33884_34266 = G__34315;
continue;
} else {
var child_struct_34316 = cljs.core.first(seq__33880_34310__$1);
if((!((child_struct_34316 == null)))){
if(typeof child_struct_34316 === 'string'){
var text_34317 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34317),child_struct_34316].join(''));
} else {
var children_34318 = shadow.dom.svg_node(child_struct_34316);
if(cljs.core.seq_QMARK_(children_34318)){
var seq__33915_34319 = cljs.core.seq(children_34318);
var chunk__33917_34320 = null;
var count__33918_34321 = (0);
var i__33919_34322 = (0);
while(true){
if((i__33919_34322 < count__33918_34321)){
var child_34323 = chunk__33917_34320.cljs$core$IIndexed$_nth$arity$2(null,i__33919_34322);
if(cljs.core.truth_(child_34323)){
node.appendChild(child_34323);


var G__34324 = seq__33915_34319;
var G__34325 = chunk__33917_34320;
var G__34326 = count__33918_34321;
var G__34327 = (i__33919_34322 + (1));
seq__33915_34319 = G__34324;
chunk__33917_34320 = G__34325;
count__33918_34321 = G__34326;
i__33919_34322 = G__34327;
continue;
} else {
var G__34331 = seq__33915_34319;
var G__34332 = chunk__33917_34320;
var G__34333 = count__33918_34321;
var G__34334 = (i__33919_34322 + (1));
seq__33915_34319 = G__34331;
chunk__33917_34320 = G__34332;
count__33918_34321 = G__34333;
i__33919_34322 = G__34334;
continue;
}
} else {
var temp__5753__auto___34335__$1 = cljs.core.seq(seq__33915_34319);
if(temp__5753__auto___34335__$1){
var seq__33915_34337__$1 = temp__5753__auto___34335__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33915_34337__$1)){
var c__4679__auto___34338 = cljs.core.chunk_first(seq__33915_34337__$1);
var G__34339 = cljs.core.chunk_rest(seq__33915_34337__$1);
var G__34340 = c__4679__auto___34338;
var G__34341 = cljs.core.count(c__4679__auto___34338);
var G__34342 = (0);
seq__33915_34319 = G__34339;
chunk__33917_34320 = G__34340;
count__33918_34321 = G__34341;
i__33919_34322 = G__34342;
continue;
} else {
var child_34343 = cljs.core.first(seq__33915_34337__$1);
if(cljs.core.truth_(child_34343)){
node.appendChild(child_34343);


var G__34344 = cljs.core.next(seq__33915_34337__$1);
var G__34345 = null;
var G__34346 = (0);
var G__34347 = (0);
seq__33915_34319 = G__34344;
chunk__33917_34320 = G__34345;
count__33918_34321 = G__34346;
i__33919_34322 = G__34347;
continue;
} else {
var G__34348 = cljs.core.next(seq__33915_34337__$1);
var G__34349 = null;
var G__34350 = (0);
var G__34351 = (0);
seq__33915_34319 = G__34348;
chunk__33917_34320 = G__34349;
count__33918_34321 = G__34350;
i__33919_34322 = G__34351;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34318);
}
}


var G__34352 = cljs.core.next(seq__33880_34310__$1);
var G__34353 = null;
var G__34354 = (0);
var G__34355 = (0);
seq__33880_34263 = G__34352;
chunk__33882_34264 = G__34353;
count__33883_34265 = G__34354;
i__33884_34266 = G__34355;
continue;
} else {
var G__34356 = cljs.core.next(seq__33880_34310__$1);
var G__34357 = null;
var G__34358 = (0);
var G__34359 = (0);
seq__33880_34263 = G__34356;
chunk__33882_34264 = G__34357;
count__33883_34265 = G__34358;
i__33884_34266 = G__34359;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34360 = arguments.length;
var i__4865__auto___34361 = (0);
while(true){
if((i__4865__auto___34361 < len__4864__auto___34360)){
args__4870__auto__.push((arguments[i__4865__auto___34361]));

var G__34362 = (i__4865__auto___34361 + (1));
i__4865__auto___34361 = G__34362;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33927){
var G__33928 = cljs.core.first(seq33927);
var seq33927__$1 = cljs.core.next(seq33927);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33928,seq33927__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33932 = arguments.length;
switch (G__33932) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__29624__auto___34378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_33937){
var state_val_33938 = (state_33937[(1)]);
if((state_val_33938 === (1))){
var state_33937__$1 = state_33937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33937__$1,(2),once_or_cleanup);
} else {
if((state_val_33938 === (2))){
var inst_33934 = (state_33937[(2)]);
var inst_33935 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33937__$1 = (function (){var statearr_33939 = state_33937;
(statearr_33939[(7)] = inst_33934);

return statearr_33939;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33937__$1,inst_33935);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29289__auto__ = null;
var shadow$dom$state_machine__29289__auto____0 = (function (){
var statearr_33940 = [null,null,null,null,null,null,null,null];
(statearr_33940[(0)] = shadow$dom$state_machine__29289__auto__);

(statearr_33940[(1)] = (1));

return statearr_33940;
});
var shadow$dom$state_machine__29289__auto____1 = (function (state_33937){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_33937);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e33941){var ex__29293__auto__ = e33941;
var statearr_33942_34379 = state_33937;
(statearr_33942_34379[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_33937[(4)]))){
var statearr_33943_34380 = state_33937;
(statearr_33943_34380[(1)] = cljs.core.first((state_33937[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34381 = state_33937;
state_33937 = G__34381;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
shadow$dom$state_machine__29289__auto__ = function(state_33937){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29289__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29289__auto____1.call(this,state_33937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29289__auto____0;
shadow$dom$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29289__auto____1;
return shadow$dom$state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_33947 = f__29625__auto__();
(statearr_33947[(6)] = c__29624__auto___34378);

return statearr_33947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
