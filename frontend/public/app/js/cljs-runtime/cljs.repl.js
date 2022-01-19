goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34704){
var map__34709 = p__34704;
var map__34709__$1 = cljs.core.__destructure_map(map__34709);
var m = map__34709__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34709__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34709__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34712_35227 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34713_35228 = null;
var count__34714_35229 = (0);
var i__34715_35230 = (0);
while(true){
if((i__34715_35230 < count__34714_35229)){
var f_35231 = chunk__34713_35228.cljs$core$IIndexed$_nth$arity$2(null,i__34715_35230);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35231], 0));


var G__35232 = seq__34712_35227;
var G__35233 = chunk__34713_35228;
var G__35234 = count__34714_35229;
var G__35235 = (i__34715_35230 + (1));
seq__34712_35227 = G__35232;
chunk__34713_35228 = G__35233;
count__34714_35229 = G__35234;
i__34715_35230 = G__35235;
continue;
} else {
var temp__5753__auto___35236 = cljs.core.seq(seq__34712_35227);
if(temp__5753__auto___35236){
var seq__34712_35237__$1 = temp__5753__auto___35236;
if(cljs.core.chunked_seq_QMARK_(seq__34712_35237__$1)){
var c__4679__auto___35238 = cljs.core.chunk_first(seq__34712_35237__$1);
var G__35239 = cljs.core.chunk_rest(seq__34712_35237__$1);
var G__35240 = c__4679__auto___35238;
var G__35241 = cljs.core.count(c__4679__auto___35238);
var G__35242 = (0);
seq__34712_35227 = G__35239;
chunk__34713_35228 = G__35240;
count__34714_35229 = G__35241;
i__34715_35230 = G__35242;
continue;
} else {
var f_35246 = cljs.core.first(seq__34712_35237__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35246], 0));


var G__35247 = cljs.core.next(seq__34712_35237__$1);
var G__35248 = null;
var G__35249 = (0);
var G__35250 = (0);
seq__34712_35227 = G__35247;
chunk__34713_35228 = G__35248;
count__34714_35229 = G__35249;
i__34715_35230 = G__35250;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35251 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35251], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35251)))?cljs.core.second(arglists_35251):arglists_35251)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34723_35254 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34724_35255 = null;
var count__34725_35256 = (0);
var i__34726_35257 = (0);
while(true){
if((i__34726_35257 < count__34725_35256)){
var vec__34742_35258 = chunk__34724_35255.cljs$core$IIndexed$_nth$arity$2(null,i__34726_35257);
var name_35259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34742_35258,(0),null);
var map__34745_35260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34742_35258,(1),null);
var map__34745_35261__$1 = cljs.core.__destructure_map(map__34745_35260);
var doc_35262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34745_35261__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34745_35261__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35259], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35263], 0));

if(cljs.core.truth_(doc_35262)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35262], 0));
} else {
}


var G__35264 = seq__34723_35254;
var G__35265 = chunk__34724_35255;
var G__35266 = count__34725_35256;
var G__35267 = (i__34726_35257 + (1));
seq__34723_35254 = G__35264;
chunk__34724_35255 = G__35265;
count__34725_35256 = G__35266;
i__34726_35257 = G__35267;
continue;
} else {
var temp__5753__auto___35268 = cljs.core.seq(seq__34723_35254);
if(temp__5753__auto___35268){
var seq__34723_35269__$1 = temp__5753__auto___35268;
if(cljs.core.chunked_seq_QMARK_(seq__34723_35269__$1)){
var c__4679__auto___35270 = cljs.core.chunk_first(seq__34723_35269__$1);
var G__35271 = cljs.core.chunk_rest(seq__34723_35269__$1);
var G__35272 = c__4679__auto___35270;
var G__35273 = cljs.core.count(c__4679__auto___35270);
var G__35274 = (0);
seq__34723_35254 = G__35271;
chunk__34724_35255 = G__35272;
count__34725_35256 = G__35273;
i__34726_35257 = G__35274;
continue;
} else {
var vec__34750_35277 = cljs.core.first(seq__34723_35269__$1);
var name_35278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35277,(0),null);
var map__34753_35279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35277,(1),null);
var map__34753_35280__$1 = cljs.core.__destructure_map(map__34753_35279);
var doc_35281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34753_35280__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34753_35280__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35278], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35282], 0));

if(cljs.core.truth_(doc_35281)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35281], 0));
} else {
}


var G__35285 = cljs.core.next(seq__34723_35269__$1);
var G__35286 = null;
var G__35287 = (0);
var G__35288 = (0);
seq__34723_35254 = G__35285;
chunk__34724_35255 = G__35286;
count__34725_35256 = G__35287;
i__34726_35257 = G__35288;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34755 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34756 = null;
var count__34757 = (0);
var i__34758 = (0);
while(true){
if((i__34758 < count__34757)){
var role = chunk__34756.cljs$core$IIndexed$_nth$arity$2(null,i__34758);
var temp__5753__auto___35290__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35290__$1)){
var spec_35291 = temp__5753__auto___35290__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35291)], 0));
} else {
}


var G__35292 = seq__34755;
var G__35293 = chunk__34756;
var G__35294 = count__34757;
var G__35295 = (i__34758 + (1));
seq__34755 = G__35292;
chunk__34756 = G__35293;
count__34757 = G__35294;
i__34758 = G__35295;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__34755);
if(temp__5753__auto____$1){
var seq__34755__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34755__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34755__$1);
var G__35296 = cljs.core.chunk_rest(seq__34755__$1);
var G__35297 = c__4679__auto__;
var G__35298 = cljs.core.count(c__4679__auto__);
var G__35299 = (0);
seq__34755 = G__35296;
chunk__34756 = G__35297;
count__34757 = G__35298;
i__34758 = G__35299;
continue;
} else {
var role = cljs.core.first(seq__34755__$1);
var temp__5753__auto___35300__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35300__$2)){
var spec_35301 = temp__5753__auto___35300__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35301)], 0));
} else {
}


var G__35302 = cljs.core.next(seq__34755__$1);
var G__35303 = null;
var G__35304 = (0);
var G__35305 = (0);
seq__34755 = G__35302;
chunk__34756 = G__35303;
count__34757 = G__35304;
i__34758 = G__35305;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35306 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35307 = cljs.core.ex_cause(t);
via = G__35306;
t = G__35307;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34936 = datafied_throwable;
var map__34936__$1 = cljs.core.__destructure_map(map__34936);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34936__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34936__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34936__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34937 = cljs.core.last(via);
var map__34937__$1 = cljs.core.__destructure_map(map__34937);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34937__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34937__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34937__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34938 = data;
var map__34938__$1 = cljs.core.__destructure_map(map__34938);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34938__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34938__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34938__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34942 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34942__$1 = cljs.core.__destructure_map(map__34942);
var top_data = map__34942__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34942__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34946 = phase;
var G__34946__$1 = (((G__34946 instanceof cljs.core.Keyword))?G__34946.fqn:null);
switch (G__34946__$1) {
case "read-source":
var map__34949 = data;
var map__34949__$1 = cljs.core.__destructure_map(map__34949);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34949__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34949__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34951 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34951__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34951,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34951);
var G__34951__$2 = (cljs.core.truth_((function (){var fexpr__34952 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34952.cljs$core$IFn$_invoke$arity$1 ? fexpr__34952.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34952.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34951__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34951__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34951__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34951__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34953 = top_data;
var G__34953__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34953,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34953);
var G__34953__$2 = (cljs.core.truth_((function (){var fexpr__34958 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34958.cljs$core$IFn$_invoke$arity$1 ? fexpr__34958.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34958.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34953__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34953__$1);
var G__34953__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34953__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34953__$2);
var G__34953__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34953__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34953__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34953__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34953__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34968 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968,(3),null);
var G__34979 = top_data;
var G__34979__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34979,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34979);
var G__34979__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34979__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34979__$1);
var G__34979__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34979__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34979__$2);
var G__34979__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34979__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34979__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34979__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34979__$4;
}

break;
case "execution":
var vec__35010 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34932_SHARP_){
var or__4253__auto__ = (p1__34932_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__35016 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35016.cljs$core$IFn$_invoke$arity$1 ? fexpr__35016.cljs$core$IFn$_invoke$arity$1(p1__34932_SHARP_) : fexpr__35016.call(null,p1__34932_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__35020 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35020__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35020,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35020);
var G__35020__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35020__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35020__$1);
var G__35020__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35020__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35020__$2);
var G__35020__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35020__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35020__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35020__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35020__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34946__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35051){
var map__35052 = p__35051;
var map__35052__$1 = cljs.core.__destructure_map(map__35052);
var triage_data = map__35052__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35052__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35052__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35052__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35052__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35052__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35052__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35052__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35052__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35066 = phase;
var G__35066__$1 = (((G__35066 instanceof cljs.core.Keyword))?G__35066.fqn:null);
switch (G__35066__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35080 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35081 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35082 = loc;
var G__35083 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35128_35316 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35129_35317 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35130_35318 = true;
var _STAR_print_fn_STAR__temp_val__35131_35319 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35130_35318);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35131_35319);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35048_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35048_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35129_35317);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35128_35316);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35080,G__35081,G__35082,G__35083) : format.call(null,G__35080,G__35081,G__35082,G__35083));

break;
case "macroexpansion":
var G__35149 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35150 = cause_type;
var G__35151 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35152 = loc;
var G__35153 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35149,G__35150,G__35151,G__35152,G__35153) : format.call(null,G__35149,G__35150,G__35151,G__35152,G__35153));

break;
case "compile-syntax-check":
var G__35155 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35156 = cause_type;
var G__35157 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35158 = loc;
var G__35159 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35155,G__35156,G__35157,G__35158,G__35159) : format.call(null,G__35155,G__35156,G__35157,G__35158,G__35159));

break;
case "compilation":
var G__35160 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35161 = cause_type;
var G__35162 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35163 = loc;
var G__35164 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35160,G__35161,G__35162,G__35163,G__35164) : format.call(null,G__35160,G__35161,G__35162,G__35163,G__35164));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35169 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35170 = symbol;
var G__35171 = loc;
var G__35172 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35180_35328 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35181_35329 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35182_35330 = true;
var _STAR_print_fn_STAR__temp_val__35183_35331 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35182_35330);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35183_35331);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35050_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35050_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35181_35329);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35180_35328);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35169,G__35170,G__35171,G__35172) : format.call(null,G__35169,G__35170,G__35171,G__35172));
} else {
var G__35207 = "Execution error%s at %s(%s).\n%s\n";
var G__35208 = cause_type;
var G__35209 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35210 = loc;
var G__35211 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35207,G__35208,G__35209,G__35210,G__35211) : format.call(null,G__35207,G__35208,G__35209,G__35210,G__35211));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35066__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
