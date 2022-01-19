goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26754 = arguments.length;
var i__4865__auto___26755 = (0);
while(true){
if((i__4865__auto___26755 < len__4864__auto___26754)){
args__4870__auto__.push((arguments[i__4865__auto___26755]));

var G__26756 = (i__4865__auto___26755 + (1));
i__4865__auto___26755 = G__26756;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((4) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq26693){
var G__26694 = cljs.core.first(seq26693);
var seq26693__$1 = cljs.core.next(seq26693);
var G__26695 = cljs.core.first(seq26693__$1);
var seq26693__$2 = cljs.core.next(seq26693__$1);
var G__26696 = cljs.core.first(seq26693__$2);
var seq26693__$3 = cljs.core.next(seq26693__$2);
var G__26697 = cljs.core.first(seq26693__$3);
var seq26693__$4 = cljs.core.next(seq26693__$3);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26694,G__26695,G__26696,G__26697,seq26693__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26757 = arguments.length;
var i__4865__auto___26758 = (0);
while(true){
if((i__4865__auto___26758 < len__4864__auto___26757)){
args__4870__auto__.push((arguments[i__4865__auto___26758]));

var G__26759 = (i__4865__auto___26758 + (1));
i__4865__auto___26758 = G__26759;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__26658__auto__,rest__26659__auto__){
var convert_case__26660__auto__ = (function (p1__26657__26661__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__26657__26661__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26659__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26658__auto__,convert_case__26660__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq26698){
var G__26699 = cljs.core.first(seq26698);
var seq26698__$1 = cljs.core.next(seq26698);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26699,seq26698__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26764 = arguments.length;
var i__4865__auto___26765 = (0);
while(true){
if((i__4865__auto___26765 < len__4864__auto___26764)){
args__4870__auto__.push((arguments[i__4865__auto___26765]));

var G__26767 = (i__4865__auto___26765 + (1));
i__4865__auto___26765 = G__26767;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq26700){
var G__26701 = cljs.core.first(seq26700);
var seq26700__$1 = cljs.core.next(seq26700);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26701,seq26700__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26769 = arguments.length;
var i__4865__auto___26770 = (0);
while(true){
if((i__4865__auto___26770 < len__4864__auto___26769)){
args__4870__auto__.push((arguments[i__4865__auto___26770]));

var G__26772 = (i__4865__auto___26770 + (1));
i__4865__auto___26770 = G__26772;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq26702){
var G__26703 = cljs.core.first(seq26702);
var seq26702__$1 = cljs.core.next(seq26702);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26703,seq26702__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26776 = arguments.length;
var i__4865__auto___26777 = (0);
while(true){
if((i__4865__auto___26777 < len__4864__auto___26776)){
args__4870__auto__.push((arguments[i__4865__auto___26777]));

var G__26778 = (i__4865__auto___26777 + (1));
i__4865__auto___26777 = G__26778;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq26704){
var G__26705 = cljs.core.first(seq26704);
var seq26704__$1 = cljs.core.next(seq26704);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26705,seq26704__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26780 = arguments.length;
var i__4865__auto___26781 = (0);
while(true){
if((i__4865__auto___26781 < len__4864__auto___26780)){
args__4870__auto__.push((arguments[i__4865__auto___26781]));

var G__26784 = (i__4865__auto___26781 + (1));
i__4865__auto___26781 = G__26784;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26658__auto__,rest__26659__auto__){
var convert_case__26660__auto__ = (function (p1__26657__26661__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__26657__26661__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26659__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26658__auto__,convert_case__26660__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq26706){
var G__26707 = cljs.core.first(seq26706);
var seq26706__$1 = cljs.core.next(seq26706);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26707,seq26706__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26787 = arguments.length;
var i__4865__auto___26788 = (0);
while(true){
if((i__4865__auto___26788 < len__4864__auto___26787)){
args__4870__auto__.push((arguments[i__4865__auto___26788]));

var G__26789 = (i__4865__auto___26788 + (1));
i__4865__auto___26788 = G__26789;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq26708){
var G__26709 = cljs.core.first(seq26708);
var seq26708__$1 = cljs.core.next(seq26708);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26709,seq26708__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26794 = arguments.length;
var i__4865__auto___26795 = (0);
while(true){
if((i__4865__auto___26795 < len__4864__auto___26794)){
args__4870__auto__.push((arguments[i__4865__auto___26795]));

var G__26796 = (i__4865__auto___26795 + (1));
i__4865__auto___26795 = G__26796;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq26710){
var G__26711 = cljs.core.first(seq26710);
var seq26710__$1 = cljs.core.next(seq26710);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26711,seq26710__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26799 = arguments.length;
var i__4865__auto___26800 = (0);
while(true){
if((i__4865__auto___26800 < len__4864__auto___26799)){
args__4870__auto__.push((arguments[i__4865__auto___26800]));

var G__26803 = (i__4865__auto___26800 + (1));
i__4865__auto___26800 = G__26803;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq26712){
var G__26713 = cljs.core.first(seq26712);
var seq26712__$1 = cljs.core.next(seq26712);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26713,seq26712__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26805 = arguments.length;
var i__4865__auto___26807 = (0);
while(true){
if((i__4865__auto___26807 < len__4864__auto___26805)){
args__4870__auto__.push((arguments[i__4865__auto___26807]));

var G__26808 = (i__4865__auto___26807 + (1));
i__4865__auto___26807 = G__26808;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__26658__auto__,rest__26659__auto__){
var convert_case__26660__auto__ = (function (p1__26657__26661__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__26657__26661__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26659__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26658__auto__,convert_case__26660__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq26714){
var G__26715 = cljs.core.first(seq26714);
var seq26714__$1 = cljs.core.next(seq26714);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26715,seq26714__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26817 = arguments.length;
var i__4865__auto___26818 = (0);
while(true){
if((i__4865__auto___26818 < len__4864__auto___26817)){
args__4870__auto__.push((arguments[i__4865__auto___26818]));

var G__26819 = (i__4865__auto___26818 + (1));
i__4865__auto___26818 = G__26819;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq26716){
var G__26717 = cljs.core.first(seq26716);
var seq26716__$1 = cljs.core.next(seq26716);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26717,seq26716__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26827 = arguments.length;
var i__4865__auto___26828 = (0);
while(true){
if((i__4865__auto___26828 < len__4864__auto___26827)){
args__4870__auto__.push((arguments[i__4865__auto___26828]));

var G__26829 = (i__4865__auto___26828 + (1));
i__4865__auto___26828 = G__26829;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq26718){
var G__26719 = cljs.core.first(seq26718);
var seq26718__$1 = cljs.core.next(seq26718);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26719,seq26718__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26834 = arguments.length;
var i__4865__auto___26835 = (0);
while(true){
if((i__4865__auto___26835 < len__4864__auto___26834)){
args__4870__auto__.push((arguments[i__4865__auto___26835]));

var G__26839 = (i__4865__auto___26835 + (1));
i__4865__auto___26835 = G__26839;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq26720){
var G__26721 = cljs.core.first(seq26720);
var seq26720__$1 = cljs.core.next(seq26720);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26721,seq26720__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26841 = arguments.length;
var i__4865__auto___26842 = (0);
while(true){
if((i__4865__auto___26842 < len__4864__auto___26841)){
args__4870__auto__.push((arguments[i__4865__auto___26842]));

var G__26843 = (i__4865__auto___26842 + (1));
i__4865__auto___26842 = G__26843;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__26658__auto__,rest__26659__auto__){
var convert_case__26660__auto__ = (function (p1__26657__26661__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__26657__26661__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26659__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26658__auto__,convert_case__26660__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq26722){
var G__26723 = cljs.core.first(seq26722);
var seq26722__$1 = cljs.core.next(seq26722);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26723,seq26722__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26849 = arguments.length;
var i__4865__auto___26856 = (0);
while(true){
if((i__4865__auto___26856 < len__4864__auto___26849)){
args__4870__auto__.push((arguments[i__4865__auto___26856]));

var G__26857 = (i__4865__auto___26856 + (1));
i__4865__auto___26856 = G__26857;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq26724){
var G__26725 = cljs.core.first(seq26724);
var seq26724__$1 = cljs.core.next(seq26724);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26725,seq26724__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26858 = arguments.length;
var i__4865__auto___26859 = (0);
while(true){
if((i__4865__auto___26859 < len__4864__auto___26858)){
args__4870__auto__.push((arguments[i__4865__auto___26859]));

var G__26861 = (i__4865__auto___26859 + (1));
i__4865__auto___26859 = G__26861;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq26726){
var G__26727 = cljs.core.first(seq26726);
var seq26726__$1 = cljs.core.next(seq26726);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26727,seq26726__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26862 = arguments.length;
var i__4865__auto___26863 = (0);
while(true){
if((i__4865__auto___26863 < len__4864__auto___26862)){
args__4870__auto__.push((arguments[i__4865__auto___26863]));

var G__26865 = (i__4865__auto___26863 + (1));
i__4865__auto___26863 = G__26865;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq26728){
var G__26729 = cljs.core.first(seq26728);
var seq26728__$1 = cljs.core.next(seq26728);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26729,seq26728__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26869 = arguments.length;
var i__4865__auto___26870 = (0);
while(true){
if((i__4865__auto___26870 < len__4864__auto___26869)){
args__4870__auto__.push((arguments[i__4865__auto___26870]));

var G__26871 = (i__4865__auto___26870 + (1));
i__4865__auto___26870 = G__26871;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26658__auto__,rest__26659__auto__){
var convert_case__26660__auto__ = (function (p1__26657__26661__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__26657__26661__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26659__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26658__auto__,convert_case__26660__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq26730){
var G__26731 = cljs.core.first(seq26730);
var seq26730__$1 = cljs.core.next(seq26730);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26731,seq26730__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26872 = arguments.length;
var i__4865__auto___26873 = (0);
while(true){
if((i__4865__auto___26873 < len__4864__auto___26872)){
args__4870__auto__.push((arguments[i__4865__auto___26873]));

var G__26874 = (i__4865__auto___26873 + (1));
i__4865__auto___26873 = G__26874;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq26732){
var G__26733 = cljs.core.first(seq26732);
var seq26732__$1 = cljs.core.next(seq26732);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26733,seq26732__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26876 = arguments.length;
var i__4865__auto___26877 = (0);
while(true){
if((i__4865__auto___26877 < len__4864__auto___26876)){
args__4870__auto__.push((arguments[i__4865__auto___26877]));

var G__26878 = (i__4865__auto___26877 + (1));
i__4865__auto___26877 = G__26878;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq26734){
var G__26735 = cljs.core.first(seq26734);
var seq26734__$1 = cljs.core.next(seq26734);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26735,seq26734__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26880 = arguments.length;
var i__4865__auto___26881 = (0);
while(true){
if((i__4865__auto___26881 < len__4864__auto___26880)){
args__4870__auto__.push((arguments[i__4865__auto___26881]));

var G__26882 = (i__4865__auto___26881 + (1));
i__4865__auto___26881 = G__26882;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq26736){
var G__26737 = cljs.core.first(seq26736);
var seq26736__$1 = cljs.core.next(seq26736);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26737,seq26736__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26883 = arguments.length;
var i__4865__auto___26884 = (0);
while(true){
if((i__4865__auto___26884 < len__4864__auto___26883)){
args__4870__auto__.push((arguments[i__4865__auto___26884]));

var G__26885 = (i__4865__auto___26884 + (1));
i__4865__auto___26884 = G__26885;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26658__auto__,rest__26659__auto__){
var convert_case__26660__auto__ = (function (p1__26657__26661__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__26657__26661__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26659__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26658__auto__,convert_case__26660__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq26738){
var G__26739 = cljs.core.first(seq26738);
var seq26738__$1 = cljs.core.next(seq26738);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26739,seq26738__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26886 = arguments.length;
var i__4865__auto___26887 = (0);
while(true){
if((i__4865__auto___26887 < len__4864__auto___26886)){
args__4870__auto__.push((arguments[i__4865__auto___26887]));

var G__26888 = (i__4865__auto___26887 + (1));
i__4865__auto___26887 = G__26888;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq26740){
var G__26741 = cljs.core.first(seq26740);
var seq26740__$1 = cljs.core.next(seq26740);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26741,seq26740__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26889 = arguments.length;
var i__4865__auto___26890 = (0);
while(true){
if((i__4865__auto___26890 < len__4864__auto___26889)){
args__4870__auto__.push((arguments[i__4865__auto___26890]));

var G__26891 = (i__4865__auto___26890 + (1));
i__4865__auto___26890 = G__26891;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq26742){
var G__26743 = cljs.core.first(seq26742);
var seq26742__$1 = cljs.core.next(seq26742);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26743,seq26742__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26892 = arguments.length;
var i__4865__auto___26893 = (0);
while(true){
if((i__4865__auto___26893 < len__4864__auto___26892)){
args__4870__auto__.push((arguments[i__4865__auto___26893]));

var G__26894 = (i__4865__auto___26893 + (1));
i__4865__auto___26893 = G__26894;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq26744){
var G__26745 = cljs.core.first(seq26744);
var seq26744__$1 = cljs.core.next(seq26744);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26745,seq26744__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26895 = arguments.length;
var i__4865__auto___26896 = (0);
while(true){
if((i__4865__auto___26896 < len__4864__auto___26895)){
args__4870__auto__.push((arguments[i__4865__auto___26896]));

var G__26897 = (i__4865__auto___26896 + (1));
i__4865__auto___26896 = G__26897;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26658__auto__,rest__26659__auto__){
var convert_case__26660__auto__ = (function (p1__26657__26661__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__26657__26661__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26659__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26658__auto__,convert_case__26660__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq26746){
var G__26747 = cljs.core.first(seq26746);
var seq26746__$1 = cljs.core.next(seq26746);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26747,seq26746__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26898 = arguments.length;
var i__4865__auto___26899 = (0);
while(true){
if((i__4865__auto___26899 < len__4864__auto___26898)){
args__4870__auto__.push((arguments[i__4865__auto___26899]));

var G__26900 = (i__4865__auto___26899 + (1));
i__4865__auto___26899 = G__26900;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq26748){
var G__26749 = cljs.core.first(seq26748);
var seq26748__$1 = cljs.core.next(seq26748);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26749,seq26748__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26901 = arguments.length;
var i__4865__auto___26902 = (0);
while(true){
if((i__4865__auto___26902 < len__4864__auto___26901)){
args__4870__auto__.push((arguments[i__4865__auto___26902]));

var G__26903 = (i__4865__auto___26902 + (1));
i__4865__auto___26902 = G__26903;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq26750){
var G__26751 = cljs.core.first(seq26750);
var seq26750__$1 = cljs.core.next(seq26750);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26751,seq26750__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26904 = arguments.length;
var i__4865__auto___26905 = (0);
while(true){
if((i__4865__auto___26905 < len__4864__auto___26904)){
args__4870__auto__.push((arguments[i__4865__auto___26905]));

var G__26907 = (i__4865__auto___26905 + (1));
i__4865__auto___26905 = G__26907;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26663__auto__,rest__26664__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__26663__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26664__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq26752){
var G__26753 = cljs.core.first(seq26752);
var seq26752__$1 = cljs.core.next(seq26752);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26753,seq26752__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
