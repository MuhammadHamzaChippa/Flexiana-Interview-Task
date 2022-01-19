goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36324 = arguments.length;
var i__4865__auto___36325 = (0);
while(true){
if((i__4865__auto___36325 < len__4864__auto___36324)){
args__4870__auto__.push((arguments[i__4865__auto___36325]));

var G__36326 = (i__4865__auto___36325 + (1));
i__4865__auto___36325 = G__36326;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35904){
var G__35905 = cljs.core.first(seq35904);
var seq35904__$1 = cljs.core.next(seq35904);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35905,seq35904__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35922 = cljs.core.seq(sources);
var chunk__35923 = null;
var count__35924 = (0);
var i__35925 = (0);
while(true){
if((i__35925 < count__35924)){
var map__35943 = chunk__35923.cljs$core$IIndexed$_nth$arity$2(null,i__35925);
var map__35943__$1 = cljs.core.__destructure_map(map__35943);
var src = map__35943__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35943__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35943__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35943__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35943__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35945){var e_36327 = e35945;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36327);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36327.message)].join('')));
}

var G__36328 = seq__35922;
var G__36329 = chunk__35923;
var G__36330 = count__35924;
var G__36331 = (i__35925 + (1));
seq__35922 = G__36328;
chunk__35923 = G__36329;
count__35924 = G__36330;
i__35925 = G__36331;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35922);
if(temp__5753__auto__){
var seq__35922__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35922__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35922__$1);
var G__36332 = cljs.core.chunk_rest(seq__35922__$1);
var G__36333 = c__4679__auto__;
var G__36334 = cljs.core.count(c__4679__auto__);
var G__36335 = (0);
seq__35922 = G__36332;
chunk__35923 = G__36333;
count__35924 = G__36334;
i__35925 = G__36335;
continue;
} else {
var map__35948 = cljs.core.first(seq__35922__$1);
var map__35948__$1 = cljs.core.__destructure_map(map__35948);
var src = map__35948__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35948__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35948__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35948__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35948__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35952){var e_36336 = e35952;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36336);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36336.message)].join('')));
}

var G__36337 = cljs.core.next(seq__35922__$1);
var G__36338 = null;
var G__36339 = (0);
var G__36340 = (0);
seq__35922 = G__36337;
chunk__35923 = G__36338;
count__35924 = G__36339;
i__35925 = G__36340;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35960 = cljs.core.seq(js_requires);
var chunk__35961 = null;
var count__35962 = (0);
var i__35963 = (0);
while(true){
if((i__35963 < count__35962)){
var js_ns = chunk__35961.cljs$core$IIndexed$_nth$arity$2(null,i__35963);
var require_str_36341 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36341);


var G__36342 = seq__35960;
var G__36343 = chunk__35961;
var G__36344 = count__35962;
var G__36345 = (i__35963 + (1));
seq__35960 = G__36342;
chunk__35961 = G__36343;
count__35962 = G__36344;
i__35963 = G__36345;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35960);
if(temp__5753__auto__){
var seq__35960__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35960__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35960__$1);
var G__36346 = cljs.core.chunk_rest(seq__35960__$1);
var G__36347 = c__4679__auto__;
var G__36348 = cljs.core.count(c__4679__auto__);
var G__36349 = (0);
seq__35960 = G__36346;
chunk__35961 = G__36347;
count__35962 = G__36348;
i__35963 = G__36349;
continue;
} else {
var js_ns = cljs.core.first(seq__35960__$1);
var require_str_36350 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36350);


var G__36351 = cljs.core.next(seq__35960__$1);
var G__36352 = null;
var G__36353 = (0);
var G__36354 = (0);
seq__35960 = G__36351;
chunk__35961 = G__36352;
count__35962 = G__36353;
i__35963 = G__36354;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35974){
var map__35975 = p__35974;
var map__35975__$1 = cljs.core.__destructure_map(map__35975);
var msg = map__35975__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35975__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35975__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35976(s__35977){
return (new cljs.core.LazySeq(null,(function (){
var s__35977__$1 = s__35977;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35977__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__35983 = cljs.core.first(xs__6308__auto__);
var map__35983__$1 = cljs.core.__destructure_map(map__35983);
var src = map__35983__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35983__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35983__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__35977__$1,map__35983,map__35983__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35975,map__35975__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35976_$_iter__35978(s__35979){
return (new cljs.core.LazySeq(null,((function (s__35977__$1,map__35983,map__35983__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35975,map__35975__$1,msg,info,reload_info){
return (function (){
var s__35979__$1 = s__35979;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35979__$1);
if(temp__5753__auto____$1){
var s__35979__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35979__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__35979__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__35981 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__35980 = (0);
while(true){
if((i__35980 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__35980);
cljs.core.chunk_append(b__35981,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36355 = (i__35980 + (1));
i__35980 = G__36355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35981),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35976_$_iter__35978(cljs.core.chunk_rest(s__35979__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35981),null);
}
} else {
var warning = cljs.core.first(s__35979__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35976_$_iter__35978(cljs.core.rest(s__35979__$2)));
}
} else {
return null;
}
break;
}
});})(s__35977__$1,map__35983,map__35983__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35975,map__35975__$1,msg,info,reload_info))
,null,null));
});})(s__35977__$1,map__35983,map__35983__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35975,map__35975__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35976(cljs.core.rest(s__35977__$1)));
} else {
var G__36356 = cljs.core.rest(s__35977__$1);
s__35977__$1 = G__36356;
continue;
}
} else {
var G__36357 = cljs.core.rest(s__35977__$1);
s__35977__$1 = G__36357;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35996_36358 = cljs.core.seq(warnings);
var chunk__35997_36359 = null;
var count__35998_36360 = (0);
var i__35999_36361 = (0);
while(true){
if((i__35999_36361 < count__35998_36360)){
var map__36009_36362 = chunk__35997_36359.cljs$core$IIndexed$_nth$arity$2(null,i__35999_36361);
var map__36009_36363__$1 = cljs.core.__destructure_map(map__36009_36362);
var w_36364 = map__36009_36363__$1;
var msg_36365__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36009_36363__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36009_36363__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36009_36363__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36009_36363__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36368)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36366),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36367),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36365__$1)].join(''));


var G__36369 = seq__35996_36358;
var G__36370 = chunk__35997_36359;
var G__36371 = count__35998_36360;
var G__36372 = (i__35999_36361 + (1));
seq__35996_36358 = G__36369;
chunk__35997_36359 = G__36370;
count__35998_36360 = G__36371;
i__35999_36361 = G__36372;
continue;
} else {
var temp__5753__auto___36373 = cljs.core.seq(seq__35996_36358);
if(temp__5753__auto___36373){
var seq__35996_36374__$1 = temp__5753__auto___36373;
if(cljs.core.chunked_seq_QMARK_(seq__35996_36374__$1)){
var c__4679__auto___36375 = cljs.core.chunk_first(seq__35996_36374__$1);
var G__36376 = cljs.core.chunk_rest(seq__35996_36374__$1);
var G__36377 = c__4679__auto___36375;
var G__36378 = cljs.core.count(c__4679__auto___36375);
var G__36379 = (0);
seq__35996_36358 = G__36376;
chunk__35997_36359 = G__36377;
count__35998_36360 = G__36378;
i__35999_36361 = G__36379;
continue;
} else {
var map__36010_36380 = cljs.core.first(seq__35996_36374__$1);
var map__36010_36381__$1 = cljs.core.__destructure_map(map__36010_36380);
var w_36382 = map__36010_36381__$1;
var msg_36383__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36010_36381__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36010_36381__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36010_36381__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36010_36381__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36386)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36384),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36385),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36383__$1)].join(''));


var G__36387 = cljs.core.next(seq__35996_36374__$1);
var G__36388 = null;
var G__36389 = (0);
var G__36390 = (0);
seq__35996_36358 = G__36387;
chunk__35997_36359 = G__36388;
count__35998_36360 = G__36389;
i__35999_36361 = G__36390;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35972_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35972_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36015){
var map__36016 = p__36015;
var map__36016__$1 = cljs.core.__destructure_map(map__36016);
var msg = map__36016__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36016__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36016__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__36017 = cljs.core.seq(updates);
var chunk__36019 = null;
var count__36020 = (0);
var i__36021 = (0);
while(true){
if((i__36021 < count__36020)){
var path = chunk__36019.cljs$core$IIndexed$_nth$arity$2(null,i__36021);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36148_36391 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36152_36392 = null;
var count__36153_36393 = (0);
var i__36154_36394 = (0);
while(true){
if((i__36154_36394 < count__36153_36393)){
var node_36395 = chunk__36152_36392.cljs$core$IIndexed$_nth$arity$2(null,i__36154_36394);
if(cljs.core.not(node_36395.shadow$old)){
var path_match_36396 = shadow.cljs.devtools.client.browser.match_paths(node_36395.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36396)){
var new_link_36397 = (function (){var G__36190 = node_36395.cloneNode(true);
G__36190.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36396),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36190;
})();
(node_36395.shadow$old = true);

(new_link_36397.onload = ((function (seq__36148_36391,chunk__36152_36392,count__36153_36393,i__36154_36394,seq__36017,chunk__36019,count__36020,i__36021,new_link_36397,path_match_36396,node_36395,path,map__36016,map__36016__$1,msg,updates,reload_info){
return (function (e){
var seq__36191_36398 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36193_36399 = null;
var count__36194_36400 = (0);
var i__36195_36401 = (0);
while(true){
if((i__36195_36401 < count__36194_36400)){
var map__36205_36402 = chunk__36193_36399.cljs$core$IIndexed$_nth$arity$2(null,i__36195_36401);
var map__36205_36403__$1 = cljs.core.__destructure_map(map__36205_36402);
var task_36404 = map__36205_36403__$1;
var fn_str_36405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36205_36403__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36205_36403__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36407 = goog.getObjectByName(fn_str_36405,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36406)].join(''));

(fn_obj_36407.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36407.cljs$core$IFn$_invoke$arity$2(path,new_link_36397) : fn_obj_36407.call(null,path,new_link_36397));


var G__36408 = seq__36191_36398;
var G__36409 = chunk__36193_36399;
var G__36410 = count__36194_36400;
var G__36411 = (i__36195_36401 + (1));
seq__36191_36398 = G__36408;
chunk__36193_36399 = G__36409;
count__36194_36400 = G__36410;
i__36195_36401 = G__36411;
continue;
} else {
var temp__5753__auto___36412 = cljs.core.seq(seq__36191_36398);
if(temp__5753__auto___36412){
var seq__36191_36413__$1 = temp__5753__auto___36412;
if(cljs.core.chunked_seq_QMARK_(seq__36191_36413__$1)){
var c__4679__auto___36414 = cljs.core.chunk_first(seq__36191_36413__$1);
var G__36415 = cljs.core.chunk_rest(seq__36191_36413__$1);
var G__36416 = c__4679__auto___36414;
var G__36417 = cljs.core.count(c__4679__auto___36414);
var G__36418 = (0);
seq__36191_36398 = G__36415;
chunk__36193_36399 = G__36416;
count__36194_36400 = G__36417;
i__36195_36401 = G__36418;
continue;
} else {
var map__36206_36419 = cljs.core.first(seq__36191_36413__$1);
var map__36206_36420__$1 = cljs.core.__destructure_map(map__36206_36419);
var task_36421 = map__36206_36420__$1;
var fn_str_36422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36206_36420__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36206_36420__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36424 = goog.getObjectByName(fn_str_36422,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36423)].join(''));

(fn_obj_36424.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36424.cljs$core$IFn$_invoke$arity$2(path,new_link_36397) : fn_obj_36424.call(null,path,new_link_36397));


var G__36425 = cljs.core.next(seq__36191_36413__$1);
var G__36426 = null;
var G__36427 = (0);
var G__36428 = (0);
seq__36191_36398 = G__36425;
chunk__36193_36399 = G__36426;
count__36194_36400 = G__36427;
i__36195_36401 = G__36428;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36395);
});})(seq__36148_36391,chunk__36152_36392,count__36153_36393,i__36154_36394,seq__36017,chunk__36019,count__36020,i__36021,new_link_36397,path_match_36396,node_36395,path,map__36016,map__36016__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36396], 0));

goog.dom.insertSiblingAfter(new_link_36397,node_36395);


var G__36429 = seq__36148_36391;
var G__36430 = chunk__36152_36392;
var G__36431 = count__36153_36393;
var G__36432 = (i__36154_36394 + (1));
seq__36148_36391 = G__36429;
chunk__36152_36392 = G__36430;
count__36153_36393 = G__36431;
i__36154_36394 = G__36432;
continue;
} else {
var G__36433 = seq__36148_36391;
var G__36434 = chunk__36152_36392;
var G__36435 = count__36153_36393;
var G__36436 = (i__36154_36394 + (1));
seq__36148_36391 = G__36433;
chunk__36152_36392 = G__36434;
count__36153_36393 = G__36435;
i__36154_36394 = G__36436;
continue;
}
} else {
var G__36437 = seq__36148_36391;
var G__36438 = chunk__36152_36392;
var G__36439 = count__36153_36393;
var G__36440 = (i__36154_36394 + (1));
seq__36148_36391 = G__36437;
chunk__36152_36392 = G__36438;
count__36153_36393 = G__36439;
i__36154_36394 = G__36440;
continue;
}
} else {
var temp__5753__auto___36441 = cljs.core.seq(seq__36148_36391);
if(temp__5753__auto___36441){
var seq__36148_36442__$1 = temp__5753__auto___36441;
if(cljs.core.chunked_seq_QMARK_(seq__36148_36442__$1)){
var c__4679__auto___36443 = cljs.core.chunk_first(seq__36148_36442__$1);
var G__36444 = cljs.core.chunk_rest(seq__36148_36442__$1);
var G__36445 = c__4679__auto___36443;
var G__36446 = cljs.core.count(c__4679__auto___36443);
var G__36447 = (0);
seq__36148_36391 = G__36444;
chunk__36152_36392 = G__36445;
count__36153_36393 = G__36446;
i__36154_36394 = G__36447;
continue;
} else {
var node_36448 = cljs.core.first(seq__36148_36442__$1);
if(cljs.core.not(node_36448.shadow$old)){
var path_match_36449 = shadow.cljs.devtools.client.browser.match_paths(node_36448.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36449)){
var new_link_36450 = (function (){var G__36208 = node_36448.cloneNode(true);
G__36208.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36449),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36208;
})();
(node_36448.shadow$old = true);

(new_link_36450.onload = ((function (seq__36148_36391,chunk__36152_36392,count__36153_36393,i__36154_36394,seq__36017,chunk__36019,count__36020,i__36021,new_link_36450,path_match_36449,node_36448,seq__36148_36442__$1,temp__5753__auto___36441,path,map__36016,map__36016__$1,msg,updates,reload_info){
return (function (e){
var seq__36209_36451 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36211_36452 = null;
var count__36212_36453 = (0);
var i__36213_36454 = (0);
while(true){
if((i__36213_36454 < count__36212_36453)){
var map__36218_36455 = chunk__36211_36452.cljs$core$IIndexed$_nth$arity$2(null,i__36213_36454);
var map__36218_36456__$1 = cljs.core.__destructure_map(map__36218_36455);
var task_36457 = map__36218_36456__$1;
var fn_str_36458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36218_36456__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36218_36456__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36460 = goog.getObjectByName(fn_str_36458,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36459)].join(''));

(fn_obj_36460.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36460.cljs$core$IFn$_invoke$arity$2(path,new_link_36450) : fn_obj_36460.call(null,path,new_link_36450));


var G__36461 = seq__36209_36451;
var G__36462 = chunk__36211_36452;
var G__36463 = count__36212_36453;
var G__36464 = (i__36213_36454 + (1));
seq__36209_36451 = G__36461;
chunk__36211_36452 = G__36462;
count__36212_36453 = G__36463;
i__36213_36454 = G__36464;
continue;
} else {
var temp__5753__auto___36465__$1 = cljs.core.seq(seq__36209_36451);
if(temp__5753__auto___36465__$1){
var seq__36209_36466__$1 = temp__5753__auto___36465__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36209_36466__$1)){
var c__4679__auto___36467 = cljs.core.chunk_first(seq__36209_36466__$1);
var G__36468 = cljs.core.chunk_rest(seq__36209_36466__$1);
var G__36469 = c__4679__auto___36467;
var G__36470 = cljs.core.count(c__4679__auto___36467);
var G__36471 = (0);
seq__36209_36451 = G__36468;
chunk__36211_36452 = G__36469;
count__36212_36453 = G__36470;
i__36213_36454 = G__36471;
continue;
} else {
var map__36219_36472 = cljs.core.first(seq__36209_36466__$1);
var map__36219_36473__$1 = cljs.core.__destructure_map(map__36219_36472);
var task_36474 = map__36219_36473__$1;
var fn_str_36475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36219_36473__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36219_36473__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36477 = goog.getObjectByName(fn_str_36475,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36476)].join(''));

(fn_obj_36477.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36477.cljs$core$IFn$_invoke$arity$2(path,new_link_36450) : fn_obj_36477.call(null,path,new_link_36450));


var G__36479 = cljs.core.next(seq__36209_36466__$1);
var G__36480 = null;
var G__36481 = (0);
var G__36482 = (0);
seq__36209_36451 = G__36479;
chunk__36211_36452 = G__36480;
count__36212_36453 = G__36481;
i__36213_36454 = G__36482;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36448);
});})(seq__36148_36391,chunk__36152_36392,count__36153_36393,i__36154_36394,seq__36017,chunk__36019,count__36020,i__36021,new_link_36450,path_match_36449,node_36448,seq__36148_36442__$1,temp__5753__auto___36441,path,map__36016,map__36016__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36449], 0));

goog.dom.insertSiblingAfter(new_link_36450,node_36448);


var G__36483 = cljs.core.next(seq__36148_36442__$1);
var G__36484 = null;
var G__36485 = (0);
var G__36486 = (0);
seq__36148_36391 = G__36483;
chunk__36152_36392 = G__36484;
count__36153_36393 = G__36485;
i__36154_36394 = G__36486;
continue;
} else {
var G__36487 = cljs.core.next(seq__36148_36442__$1);
var G__36488 = null;
var G__36489 = (0);
var G__36490 = (0);
seq__36148_36391 = G__36487;
chunk__36152_36392 = G__36488;
count__36153_36393 = G__36489;
i__36154_36394 = G__36490;
continue;
}
} else {
var G__36491 = cljs.core.next(seq__36148_36442__$1);
var G__36492 = null;
var G__36493 = (0);
var G__36494 = (0);
seq__36148_36391 = G__36491;
chunk__36152_36392 = G__36492;
count__36153_36393 = G__36493;
i__36154_36394 = G__36494;
continue;
}
}
} else {
}
}
break;
}


var G__36495 = seq__36017;
var G__36496 = chunk__36019;
var G__36497 = count__36020;
var G__36498 = (i__36021 + (1));
seq__36017 = G__36495;
chunk__36019 = G__36496;
count__36020 = G__36497;
i__36021 = G__36498;
continue;
} else {
var G__36499 = seq__36017;
var G__36500 = chunk__36019;
var G__36501 = count__36020;
var G__36502 = (i__36021 + (1));
seq__36017 = G__36499;
chunk__36019 = G__36500;
count__36020 = G__36501;
i__36021 = G__36502;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36017);
if(temp__5753__auto__){
var seq__36017__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36017__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36017__$1);
var G__36503 = cljs.core.chunk_rest(seq__36017__$1);
var G__36504 = c__4679__auto__;
var G__36505 = cljs.core.count(c__4679__auto__);
var G__36506 = (0);
seq__36017 = G__36503;
chunk__36019 = G__36504;
count__36020 = G__36505;
i__36021 = G__36506;
continue;
} else {
var path = cljs.core.first(seq__36017__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36220_36507 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36224_36508 = null;
var count__36225_36509 = (0);
var i__36226_36510 = (0);
while(true){
if((i__36226_36510 < count__36225_36509)){
var node_36511 = chunk__36224_36508.cljs$core$IIndexed$_nth$arity$2(null,i__36226_36510);
if(cljs.core.not(node_36511.shadow$old)){
var path_match_36512 = shadow.cljs.devtools.client.browser.match_paths(node_36511.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36512)){
var new_link_36513 = (function (){var G__36258 = node_36511.cloneNode(true);
G__36258.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36512),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36258;
})();
(node_36511.shadow$old = true);

(new_link_36513.onload = ((function (seq__36220_36507,chunk__36224_36508,count__36225_36509,i__36226_36510,seq__36017,chunk__36019,count__36020,i__36021,new_link_36513,path_match_36512,node_36511,path,seq__36017__$1,temp__5753__auto__,map__36016,map__36016__$1,msg,updates,reload_info){
return (function (e){
var seq__36263_36514 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36265_36515 = null;
var count__36266_36516 = (0);
var i__36267_36517 = (0);
while(true){
if((i__36267_36517 < count__36266_36516)){
var map__36271_36518 = chunk__36265_36515.cljs$core$IIndexed$_nth$arity$2(null,i__36267_36517);
var map__36271_36519__$1 = cljs.core.__destructure_map(map__36271_36518);
var task_36520 = map__36271_36519__$1;
var fn_str_36521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36271_36519__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36271_36519__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36525 = goog.getObjectByName(fn_str_36521,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36522)].join(''));

(fn_obj_36525.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36525.cljs$core$IFn$_invoke$arity$2(path,new_link_36513) : fn_obj_36525.call(null,path,new_link_36513));


var G__36527 = seq__36263_36514;
var G__36528 = chunk__36265_36515;
var G__36529 = count__36266_36516;
var G__36530 = (i__36267_36517 + (1));
seq__36263_36514 = G__36527;
chunk__36265_36515 = G__36528;
count__36266_36516 = G__36529;
i__36267_36517 = G__36530;
continue;
} else {
var temp__5753__auto___36531__$1 = cljs.core.seq(seq__36263_36514);
if(temp__5753__auto___36531__$1){
var seq__36263_36532__$1 = temp__5753__auto___36531__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36263_36532__$1)){
var c__4679__auto___36533 = cljs.core.chunk_first(seq__36263_36532__$1);
var G__36534 = cljs.core.chunk_rest(seq__36263_36532__$1);
var G__36535 = c__4679__auto___36533;
var G__36536 = cljs.core.count(c__4679__auto___36533);
var G__36537 = (0);
seq__36263_36514 = G__36534;
chunk__36265_36515 = G__36535;
count__36266_36516 = G__36536;
i__36267_36517 = G__36537;
continue;
} else {
var map__36273_36538 = cljs.core.first(seq__36263_36532__$1);
var map__36273_36539__$1 = cljs.core.__destructure_map(map__36273_36538);
var task_36540 = map__36273_36539__$1;
var fn_str_36541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36273_36539__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36273_36539__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36543 = goog.getObjectByName(fn_str_36541,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36542)].join(''));

(fn_obj_36543.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36543.cljs$core$IFn$_invoke$arity$2(path,new_link_36513) : fn_obj_36543.call(null,path,new_link_36513));


var G__36544 = cljs.core.next(seq__36263_36532__$1);
var G__36545 = null;
var G__36546 = (0);
var G__36547 = (0);
seq__36263_36514 = G__36544;
chunk__36265_36515 = G__36545;
count__36266_36516 = G__36546;
i__36267_36517 = G__36547;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36511);
});})(seq__36220_36507,chunk__36224_36508,count__36225_36509,i__36226_36510,seq__36017,chunk__36019,count__36020,i__36021,new_link_36513,path_match_36512,node_36511,path,seq__36017__$1,temp__5753__auto__,map__36016,map__36016__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36512], 0));

goog.dom.insertSiblingAfter(new_link_36513,node_36511);


var G__36548 = seq__36220_36507;
var G__36549 = chunk__36224_36508;
var G__36550 = count__36225_36509;
var G__36551 = (i__36226_36510 + (1));
seq__36220_36507 = G__36548;
chunk__36224_36508 = G__36549;
count__36225_36509 = G__36550;
i__36226_36510 = G__36551;
continue;
} else {
var G__36552 = seq__36220_36507;
var G__36553 = chunk__36224_36508;
var G__36554 = count__36225_36509;
var G__36555 = (i__36226_36510 + (1));
seq__36220_36507 = G__36552;
chunk__36224_36508 = G__36553;
count__36225_36509 = G__36554;
i__36226_36510 = G__36555;
continue;
}
} else {
var G__36556 = seq__36220_36507;
var G__36557 = chunk__36224_36508;
var G__36558 = count__36225_36509;
var G__36559 = (i__36226_36510 + (1));
seq__36220_36507 = G__36556;
chunk__36224_36508 = G__36557;
count__36225_36509 = G__36558;
i__36226_36510 = G__36559;
continue;
}
} else {
var temp__5753__auto___36560__$1 = cljs.core.seq(seq__36220_36507);
if(temp__5753__auto___36560__$1){
var seq__36220_36561__$1 = temp__5753__auto___36560__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36220_36561__$1)){
var c__4679__auto___36562 = cljs.core.chunk_first(seq__36220_36561__$1);
var G__36563 = cljs.core.chunk_rest(seq__36220_36561__$1);
var G__36564 = c__4679__auto___36562;
var G__36565 = cljs.core.count(c__4679__auto___36562);
var G__36566 = (0);
seq__36220_36507 = G__36563;
chunk__36224_36508 = G__36564;
count__36225_36509 = G__36565;
i__36226_36510 = G__36566;
continue;
} else {
var node_36567 = cljs.core.first(seq__36220_36561__$1);
if(cljs.core.not(node_36567.shadow$old)){
var path_match_36568 = shadow.cljs.devtools.client.browser.match_paths(node_36567.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36568)){
var new_link_36569 = (function (){var G__36276 = node_36567.cloneNode(true);
G__36276.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36568),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36276;
})();
(node_36567.shadow$old = true);

(new_link_36569.onload = ((function (seq__36220_36507,chunk__36224_36508,count__36225_36509,i__36226_36510,seq__36017,chunk__36019,count__36020,i__36021,new_link_36569,path_match_36568,node_36567,seq__36220_36561__$1,temp__5753__auto___36560__$1,path,seq__36017__$1,temp__5753__auto__,map__36016,map__36016__$1,msg,updates,reload_info){
return (function (e){
var seq__36277_36570 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36279_36571 = null;
var count__36280_36572 = (0);
var i__36281_36573 = (0);
while(true){
if((i__36281_36573 < count__36280_36572)){
var map__36289_36574 = chunk__36279_36571.cljs$core$IIndexed$_nth$arity$2(null,i__36281_36573);
var map__36289_36575__$1 = cljs.core.__destructure_map(map__36289_36574);
var task_36576 = map__36289_36575__$1;
var fn_str_36577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36289_36575__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36289_36575__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36579 = goog.getObjectByName(fn_str_36577,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36578)].join(''));

(fn_obj_36579.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36579.cljs$core$IFn$_invoke$arity$2(path,new_link_36569) : fn_obj_36579.call(null,path,new_link_36569));


var G__36580 = seq__36277_36570;
var G__36581 = chunk__36279_36571;
var G__36582 = count__36280_36572;
var G__36583 = (i__36281_36573 + (1));
seq__36277_36570 = G__36580;
chunk__36279_36571 = G__36581;
count__36280_36572 = G__36582;
i__36281_36573 = G__36583;
continue;
} else {
var temp__5753__auto___36584__$2 = cljs.core.seq(seq__36277_36570);
if(temp__5753__auto___36584__$2){
var seq__36277_36585__$1 = temp__5753__auto___36584__$2;
if(cljs.core.chunked_seq_QMARK_(seq__36277_36585__$1)){
var c__4679__auto___36586 = cljs.core.chunk_first(seq__36277_36585__$1);
var G__36587 = cljs.core.chunk_rest(seq__36277_36585__$1);
var G__36588 = c__4679__auto___36586;
var G__36589 = cljs.core.count(c__4679__auto___36586);
var G__36590 = (0);
seq__36277_36570 = G__36587;
chunk__36279_36571 = G__36588;
count__36280_36572 = G__36589;
i__36281_36573 = G__36590;
continue;
} else {
var map__36290_36591 = cljs.core.first(seq__36277_36585__$1);
var map__36290_36592__$1 = cljs.core.__destructure_map(map__36290_36591);
var task_36593 = map__36290_36592__$1;
var fn_str_36594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36290_36592__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36290_36592__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36596 = goog.getObjectByName(fn_str_36594,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36595)].join(''));

(fn_obj_36596.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36596.cljs$core$IFn$_invoke$arity$2(path,new_link_36569) : fn_obj_36596.call(null,path,new_link_36569));


var G__36597 = cljs.core.next(seq__36277_36585__$1);
var G__36598 = null;
var G__36599 = (0);
var G__36600 = (0);
seq__36277_36570 = G__36597;
chunk__36279_36571 = G__36598;
count__36280_36572 = G__36599;
i__36281_36573 = G__36600;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36567);
});})(seq__36220_36507,chunk__36224_36508,count__36225_36509,i__36226_36510,seq__36017,chunk__36019,count__36020,i__36021,new_link_36569,path_match_36568,node_36567,seq__36220_36561__$1,temp__5753__auto___36560__$1,path,seq__36017__$1,temp__5753__auto__,map__36016,map__36016__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36568], 0));

goog.dom.insertSiblingAfter(new_link_36569,node_36567);


var G__36601 = cljs.core.next(seq__36220_36561__$1);
var G__36602 = null;
var G__36603 = (0);
var G__36604 = (0);
seq__36220_36507 = G__36601;
chunk__36224_36508 = G__36602;
count__36225_36509 = G__36603;
i__36226_36510 = G__36604;
continue;
} else {
var G__36605 = cljs.core.next(seq__36220_36561__$1);
var G__36606 = null;
var G__36607 = (0);
var G__36608 = (0);
seq__36220_36507 = G__36605;
chunk__36224_36508 = G__36606;
count__36225_36509 = G__36607;
i__36226_36510 = G__36608;
continue;
}
} else {
var G__36609 = cljs.core.next(seq__36220_36561__$1);
var G__36610 = null;
var G__36611 = (0);
var G__36612 = (0);
seq__36220_36507 = G__36609;
chunk__36224_36508 = G__36610;
count__36225_36509 = G__36611;
i__36226_36510 = G__36612;
continue;
}
}
} else {
}
}
break;
}


var G__36613 = cljs.core.next(seq__36017__$1);
var G__36614 = null;
var G__36615 = (0);
var G__36616 = (0);
seq__36017 = G__36613;
chunk__36019 = G__36614;
count__36020 = G__36615;
i__36021 = G__36616;
continue;
} else {
var G__36617 = cljs.core.next(seq__36017__$1);
var G__36618 = null;
var G__36619 = (0);
var G__36620 = (0);
seq__36017 = G__36617;
chunk__36019 = G__36618;
count__36020 = G__36619;
i__36021 = G__36620;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36292){
var map__36293 = p__36292;
var map__36293__$1 = cljs.core.__destructure_map(map__36293);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36293__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36300){
var map__36301 = p__36300;
var map__36301__$1 = cljs.core.__destructure_map(map__36301);
var _ = map__36301__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36301__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36302,done,error){
var map__36303 = p__36302;
var map__36303__$1 = cljs.core.__destructure_map(map__36303);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36303__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36304,done,error){
var map__36305 = p__36304;
var map__36305__$1 = cljs.core.__destructure_map(map__36305);
var msg = map__36305__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36305__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36305__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36305__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36306){
var map__36307 = p__36306;
var map__36307__$1 = cljs.core.__destructure_map(map__36307);
var src = map__36307__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36307__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36308 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36308) : done.call(null,G__36308));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36309){
var map__36310 = p__36309;
var map__36310__$1 = cljs.core.__destructure_map(map__36310);
var msg__$1 = map__36310__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36310__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36311){var ex = e36311;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36312){
var map__36313 = p__36312;
var map__36313__$1 = cljs.core.__destructure_map(map__36313);
var env = map__36313__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36313__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36318){
var map__36319 = p__36318;
var map__36319__$1 = cljs.core.__destructure_map(map__36319);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36319__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36319__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36320){
var map__36321 = p__36320;
var map__36321__$1 = cljs.core.__destructure_map(map__36321);
var svc = map__36321__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36321__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
