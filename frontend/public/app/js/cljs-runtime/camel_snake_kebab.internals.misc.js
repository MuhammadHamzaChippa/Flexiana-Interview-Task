goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26502 = arguments.length;
var i__4865__auto___26503 = (0);
while(true){
if((i__4865__auto___26503 < len__4864__auto___26502)){
args__4870__auto__.push((arguments[i__4865__auto___26503]));

var G__26504 = (i__4865__auto___26503 + (1));
i__4865__auto___26503 = G__26504;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((4) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4871__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__26496){
var map__26497 = p__26496;
var map__26497__$1 = cljs.core.__destructure_map(map__26497);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26497__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5751__auto__ = cljs.core.seq(camel_snake_kebab.internals.string_separator.split(separator,s));
if(temp__5751__auto__){
var vec__26498 = temp__5751__auto__;
var seq__26499 = cljs.core.seq(vec__26498);
var first__26500 = cljs.core.first(seq__26499);
var seq__26499__$1 = cljs.core.next(seq__26499);
var first = first__26500;
var rest = seq__26499__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq26482){
var G__26483 = cljs.core.first(seq26482);
var seq26482__$1 = cljs.core.next(seq26482);
var G__26484 = cljs.core.first(seq26482__$1);
var seq26482__$2 = cljs.core.next(seq26482__$1);
var G__26485 = cljs.core.first(seq26482__$2);
var seq26482__$3 = cljs.core.next(seq26482__$2);
var G__26486 = cljs.core.first(seq26482__$3);
var seq26482__$4 = cljs.core.next(seq26482__$3);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26483,G__26484,G__26485,G__26486,seq26482__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4253__auto__ = (function (){var G__26501 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__26501) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__26501));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
