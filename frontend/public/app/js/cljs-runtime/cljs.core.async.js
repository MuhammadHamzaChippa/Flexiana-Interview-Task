goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29720 = arguments.length;
switch (G__29720) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29721 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29721 = (function (f,blockable,meta29722){
this.f = f;
this.blockable = blockable;
this.meta29722 = meta29722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29723,meta29722__$1){
var self__ = this;
var _29723__$1 = this;
return (new cljs.core.async.t_cljs$core$async29721(self__.f,self__.blockable,meta29722__$1));
}));

(cljs.core.async.t_cljs$core$async29721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29723){
var self__ = this;
var _29723__$1 = this;
return self__.meta29722;
}));

(cljs.core.async.t_cljs$core$async29721.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29721.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29721.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29721.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29722","meta29722",-1096663129,null)], null);
}));

(cljs.core.async.t_cljs$core$async29721.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29721");

(cljs.core.async.t_cljs$core$async29721.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29721");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29721.
 */
cljs.core.async.__GT_t_cljs$core$async29721 = (function cljs$core$async$__GT_t_cljs$core$async29721(f__$1,blockable__$1,meta29722){
return (new cljs.core.async.t_cljs$core$async29721(f__$1,blockable__$1,meta29722));
});

}

return (new cljs.core.async.t_cljs$core$async29721(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29741 = arguments.length;
switch (G__29741) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29747 = arguments.length;
switch (G__29747) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29764 = arguments.length;
switch (G__29764) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32973 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32973) : fn1.call(null,val_32973));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32973) : fn1.call(null,val_32973));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29785 = arguments.length;
switch (G__29785) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___32975 = n;
var x_32976 = (0);
while(true){
if((x_32976 < n__4741__auto___32975)){
(a[x_32976] = x_32976);

var G__32977 = (x_32976 + (1));
x_32976 = G__32977;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29808 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29808 = (function (flag,meta29809){
this.flag = flag;
this.meta29809 = meta29809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29810,meta29809__$1){
var self__ = this;
var _29810__$1 = this;
return (new cljs.core.async.t_cljs$core$async29808(self__.flag,meta29809__$1));
}));

(cljs.core.async.t_cljs$core$async29808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29810){
var self__ = this;
var _29810__$1 = this;
return self__.meta29809;
}));

(cljs.core.async.t_cljs$core$async29808.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29808.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29808.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29808.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29809","meta29809",-1494725828,null)], null);
}));

(cljs.core.async.t_cljs$core$async29808.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29808");

(cljs.core.async.t_cljs$core$async29808.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29808");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29808.
 */
cljs.core.async.__GT_t_cljs$core$async29808 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29808(flag__$1,meta29809){
return (new cljs.core.async.t_cljs$core$async29808(flag__$1,meta29809));
});

}

return (new cljs.core.async.t_cljs$core$async29808(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29819 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29819 = (function (flag,cb,meta29820){
this.flag = flag;
this.cb = cb;
this.meta29820 = meta29820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29821,meta29820__$1){
var self__ = this;
var _29821__$1 = this;
return (new cljs.core.async.t_cljs$core$async29819(self__.flag,self__.cb,meta29820__$1));
}));

(cljs.core.async.t_cljs$core$async29819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29821){
var self__ = this;
var _29821__$1 = this;
return self__.meta29820;
}));

(cljs.core.async.t_cljs$core$async29819.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29819.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29819.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29819.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29820","meta29820",1172898543,null)], null);
}));

(cljs.core.async.t_cljs$core$async29819.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29819");

(cljs.core.async.t_cljs$core$async29819.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29819");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29819.
 */
cljs.core.async.__GT_t_cljs$core$async29819 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29819(flag__$1,cb__$1,meta29820){
return (new cljs.core.async.t_cljs$core$async29819(flag__$1,cb__$1,meta29820));
});

}

return (new cljs.core.async.t_cljs$core$async29819(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29837_SHARP_){
var G__29845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29837_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29845) : fret.call(null,G__29845));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29838_SHARP_){
var G__29846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29838_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29846) : fret.call(null,G__29846));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32980 = (i + (1));
i = G__32980;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32981 = arguments.length;
var i__4865__auto___32982 = (0);
while(true){
if((i__4865__auto___32982 < len__4864__auto___32981)){
args__4870__auto__.push((arguments[i__4865__auto___32982]));

var G__32983 = (i__4865__auto___32982 + (1));
i__4865__auto___32982 = G__32983;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29863){
var map__29865 = p__29863;
var map__29865__$1 = cljs.core.__destructure_map(map__29865);
var opts = map__29865__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29859){
var G__29860 = cljs.core.first(seq29859);
var seq29859__$1 = cljs.core.next(seq29859);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29860,seq29859__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29888 = arguments.length;
switch (G__29888) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29624__auto___32985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_29955){
var state_val_29956 = (state_29955[(1)]);
if((state_val_29956 === (7))){
var inst_29950 = (state_29955[(2)]);
var state_29955__$1 = state_29955;
var statearr_29969_32986 = state_29955__$1;
(statearr_29969_32986[(2)] = inst_29950);

(statearr_29969_32986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (1))){
var state_29955__$1 = state_29955;
var statearr_29974_32987 = state_29955__$1;
(statearr_29974_32987[(2)] = null);

(statearr_29974_32987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (4))){
var inst_29920 = (state_29955[(7)]);
var inst_29920__$1 = (state_29955[(2)]);
var inst_29928 = (inst_29920__$1 == null);
var state_29955__$1 = (function (){var statearr_29975 = state_29955;
(statearr_29975[(7)] = inst_29920__$1);

return statearr_29975;
})();
if(cljs.core.truth_(inst_29928)){
var statearr_29976_32988 = state_29955__$1;
(statearr_29976_32988[(1)] = (5));

} else {
var statearr_29977_32989 = state_29955__$1;
(statearr_29977_32989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (13))){
var state_29955__$1 = state_29955;
var statearr_29978_32990 = state_29955__$1;
(statearr_29978_32990[(2)] = null);

(statearr_29978_32990[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (6))){
var inst_29920 = (state_29955[(7)]);
var state_29955__$1 = state_29955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29955__$1,(11),to,inst_29920);
} else {
if((state_val_29956 === (3))){
var inst_29952 = (state_29955[(2)]);
var state_29955__$1 = state_29955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29955__$1,inst_29952);
} else {
if((state_val_29956 === (12))){
var state_29955__$1 = state_29955;
var statearr_29979_32991 = state_29955__$1;
(statearr_29979_32991[(2)] = null);

(statearr_29979_32991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (2))){
var state_29955__$1 = state_29955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29955__$1,(4),from);
} else {
if((state_val_29956 === (11))){
var inst_29940 = (state_29955[(2)]);
var state_29955__$1 = state_29955;
if(cljs.core.truth_(inst_29940)){
var statearr_29980_32992 = state_29955__$1;
(statearr_29980_32992[(1)] = (12));

} else {
var statearr_29981_32993 = state_29955__$1;
(statearr_29981_32993[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (9))){
var state_29955__$1 = state_29955;
var statearr_29986_32994 = state_29955__$1;
(statearr_29986_32994[(2)] = null);

(statearr_29986_32994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (5))){
var state_29955__$1 = state_29955;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29989_32995 = state_29955__$1;
(statearr_29989_32995[(1)] = (8));

} else {
var statearr_29990_32996 = state_29955__$1;
(statearr_29990_32996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (14))){
var inst_29948 = (state_29955[(2)]);
var state_29955__$1 = state_29955;
var statearr_29995_32997 = state_29955__$1;
(statearr_29995_32997[(2)] = inst_29948);

(statearr_29995_32997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (10))){
var inst_29937 = (state_29955[(2)]);
var state_29955__$1 = state_29955;
var statearr_29997_32998 = state_29955__$1;
(statearr_29997_32998[(2)] = inst_29937);

(statearr_29997_32998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (8))){
var inst_29933 = cljs.core.async.close_BANG_(to);
var state_29955__$1 = state_29955;
var statearr_29998_32999 = state_29955__$1;
(statearr_29998_32999[(2)] = inst_29933);

(statearr_29998_32999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29289__auto__ = null;
var cljs$core$async$state_machine__29289__auto____0 = (function (){
var statearr_30003 = [null,null,null,null,null,null,null,null];
(statearr_30003[(0)] = cljs$core$async$state_machine__29289__auto__);

(statearr_30003[(1)] = (1));

return statearr_30003;
});
var cljs$core$async$state_machine__29289__auto____1 = (function (state_29955){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_29955);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e30004){var ex__29293__auto__ = e30004;
var statearr_30007_33000 = state_29955;
(statearr_30007_33000[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_29955[(4)]))){
var statearr_30008_33001 = state_29955;
(statearr_30008_33001[(1)] = cljs.core.first((state_29955[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33002 = state_29955;
state_29955 = G__33002;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$state_machine__29289__auto__ = function(state_29955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29289__auto____1.call(this,state_29955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29289__auto____0;
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29289__auto____1;
return cljs$core$async$state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_30010 = f__29625__auto__();
(statearr_30010[(6)] = c__29624__auto___32985);

return statearr_30010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30014){
var vec__30015 = p__30014;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30015,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30015,(1),null);
var job = vec__30015;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29624__auto___33003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_30022){
var state_val_30023 = (state_30022[(1)]);
if((state_val_30023 === (1))){
var state_30022__$1 = state_30022;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30022__$1,(2),res,v);
} else {
if((state_val_30023 === (2))){
var inst_30019 = (state_30022[(2)]);
var inst_30020 = cljs.core.async.close_BANG_(res);
var state_30022__$1 = (function (){var statearr_30031 = state_30022;
(statearr_30031[(7)] = inst_30019);

return statearr_30031;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30022__$1,inst_30020);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____0 = (function (){
var statearr_30033 = [null,null,null,null,null,null,null,null];
(statearr_30033[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__);

(statearr_30033[(1)] = (1));

return statearr_30033;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____1 = (function (state_30022){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_30022);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e30040){var ex__29293__auto__ = e30040;
var statearr_30041_33004 = state_30022;
(statearr_30041_33004[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_30022[(4)]))){
var statearr_30042_33005 = state_30022;
(statearr_30042_33005[(1)] = cljs.core.first((state_30022[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33006 = state_30022;
state_30022 = G__33006;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__ = function(state_30022){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____1.call(this,state_30022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_30054 = f__29625__auto__();
(statearr_30054[(6)] = c__29624__auto___33003);

return statearr_30054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30059){
var vec__30060 = p__30059;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30060,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30060,(1),null);
var job = vec__30060;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___33010 = n;
var __33011 = (0);
while(true){
if((__33011 < n__4741__auto___33010)){
var G__30069_33012 = type;
var G__30069_33013__$1 = (((G__30069_33012 instanceof cljs.core.Keyword))?G__30069_33012.fqn:null);
switch (G__30069_33013__$1) {
case "compute":
var c__29624__auto___33015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33011,c__29624__auto___33015,G__30069_33012,G__30069_33013__$1,n__4741__auto___33010,jobs,results,process,async){
return (function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = ((function (__33011,c__29624__auto___33015,G__30069_33012,G__30069_33013__$1,n__4741__auto___33010,jobs,results,process,async){
return (function (state_30089){
var state_val_30090 = (state_30089[(1)]);
if((state_val_30090 === (1))){
var state_30089__$1 = state_30089;
var statearr_30094_33016 = state_30089__$1;
(statearr_30094_33016[(2)] = null);

(statearr_30094_33016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (2))){
var state_30089__$1 = state_30089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30089__$1,(4),jobs);
} else {
if((state_val_30090 === (3))){
var inst_30087 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30089__$1,inst_30087);
} else {
if((state_val_30090 === (4))){
var inst_30079 = (state_30089[(2)]);
var inst_30080 = process(inst_30079);
var state_30089__$1 = state_30089;
if(cljs.core.truth_(inst_30080)){
var statearr_30098_33029 = state_30089__$1;
(statearr_30098_33029[(1)] = (5));

} else {
var statearr_30099_33031 = state_30089__$1;
(statearr_30099_33031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (5))){
var state_30089__$1 = state_30089;
var statearr_30100_33032 = state_30089__$1;
(statearr_30100_33032[(2)] = null);

(statearr_30100_33032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (6))){
var state_30089__$1 = state_30089;
var statearr_30101_33034 = state_30089__$1;
(statearr_30101_33034[(2)] = null);

(statearr_30101_33034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (7))){
var inst_30085 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
var statearr_30102_33035 = state_30089__$1;
(statearr_30102_33035[(2)] = inst_30085);

(statearr_30102_33035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33011,c__29624__auto___33015,G__30069_33012,G__30069_33013__$1,n__4741__auto___33010,jobs,results,process,async))
;
return ((function (__33011,switch__29288__auto__,c__29624__auto___33015,G__30069_33012,G__30069_33013__$1,n__4741__auto___33010,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____0 = (function (){
var statearr_30103 = [null,null,null,null,null,null,null];
(statearr_30103[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__);

(statearr_30103[(1)] = (1));

return statearr_30103;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____1 = (function (state_30089){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_30089);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e30105){var ex__29293__auto__ = e30105;
var statearr_30106_33037 = state_30089;
(statearr_30106_33037[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_30089[(4)]))){
var statearr_30108_33038 = state_30089;
(statearr_30108_33038[(1)] = cljs.core.first((state_30089[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33039 = state_30089;
state_30089 = G__33039;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__ = function(state_30089){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____1.call(this,state_30089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__;
})()
;})(__33011,switch__29288__auto__,c__29624__auto___33015,G__30069_33012,G__30069_33013__$1,n__4741__auto___33010,jobs,results,process,async))
})();
var state__29626__auto__ = (function (){var statearr_30110 = f__29625__auto__();
(statearr_30110[(6)] = c__29624__auto___33015);

return statearr_30110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
});})(__33011,c__29624__auto___33015,G__30069_33012,G__30069_33013__$1,n__4741__auto___33010,jobs,results,process,async))
);


break;
case "async":
var c__29624__auto___33040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33011,c__29624__auto___33040,G__30069_33012,G__30069_33013__$1,n__4741__auto___33010,jobs,results,process,async){
return (function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = ((function (__33011,c__29624__auto___33040,G__30069_33012,G__30069_33013__$1,n__4741__auto___33010,jobs,results,process,async){
return (function (state_30123){
var state_val_30124 = (state_30123[(1)]);
if((state_val_30124 === (1))){
var state_30123__$1 = state_30123;
var statearr_30125_33045 = state_30123__$1;
(statearr_30125_33045[(2)] = null);

(statearr_30125_33045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30124 === (2))){
var state_30123__$1 = state_30123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30123__$1,(4),jobs);
} else {
if((state_val_30124 === (3))){
var inst_30121 = (state_30123[(2)]);
var state_30123__$1 = state_30123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30123__$1,inst_30121);
} else {
if((state_val_30124 === (4))){
var inst_30113 = (state_30123[(2)]);
var inst_30114 = async(inst_30113);
var state_30123__$1 = state_30123;
if(cljs.core.truth_(inst_30114)){
var statearr_30129_33050 = state_30123__$1;
(statearr_30129_33050[(1)] = (5));

} else {
var statearr_30139_33052 = state_30123__$1;
(statearr_30139_33052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30124 === (5))){
var state_30123__$1 = state_30123;
var statearr_30140_33053 = state_30123__$1;
(statearr_30140_33053[(2)] = null);

(statearr_30140_33053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30124 === (6))){
var state_30123__$1 = state_30123;
var statearr_30141_33055 = state_30123__$1;
(statearr_30141_33055[(2)] = null);

(statearr_30141_33055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30124 === (7))){
var inst_30119 = (state_30123[(2)]);
var state_30123__$1 = state_30123;
var statearr_30146_33056 = state_30123__$1;
(statearr_30146_33056[(2)] = inst_30119);

(statearr_30146_33056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33011,c__29624__auto___33040,G__30069_33012,G__30069_33013__$1,n__4741__auto___33010,jobs,results,process,async))
;
return ((function (__33011,switch__29288__auto__,c__29624__auto___33040,G__30069_33012,G__30069_33013__$1,n__4741__auto___33010,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____0 = (function (){
var statearr_30147 = [null,null,null,null,null,null,null];
(statearr_30147[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__);

(statearr_30147[(1)] = (1));

return statearr_30147;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____1 = (function (state_30123){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_30123);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e30148){var ex__29293__auto__ = e30148;
var statearr_30150_33057 = state_30123;
(statearr_30150_33057[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_30123[(4)]))){
var statearr_30151_33058 = state_30123;
(statearr_30151_33058[(1)] = cljs.core.first((state_30123[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33059 = state_30123;
state_30123 = G__33059;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__ = function(state_30123){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____1.call(this,state_30123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__;
})()
;})(__33011,switch__29288__auto__,c__29624__auto___33040,G__30069_33012,G__30069_33013__$1,n__4741__auto___33010,jobs,results,process,async))
})();
var state__29626__auto__ = (function (){var statearr_30152 = f__29625__auto__();
(statearr_30152[(6)] = c__29624__auto___33040);

return statearr_30152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
});})(__33011,c__29624__auto___33040,G__30069_33012,G__30069_33013__$1,n__4741__auto___33010,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30069_33013__$1)].join('')));

}

var G__33060 = (__33011 + (1));
__33011 = G__33060;
continue;
} else {
}
break;
}

var c__29624__auto___33061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_30175){
var state_val_30176 = (state_30175[(1)]);
if((state_val_30176 === (7))){
var inst_30171 = (state_30175[(2)]);
var state_30175__$1 = state_30175;
var statearr_30178_33062 = state_30175__$1;
(statearr_30178_33062[(2)] = inst_30171);

(statearr_30178_33062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30176 === (1))){
var state_30175__$1 = state_30175;
var statearr_30179_33063 = state_30175__$1;
(statearr_30179_33063[(2)] = null);

(statearr_30179_33063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30176 === (4))){
var inst_30156 = (state_30175[(7)]);
var inst_30156__$1 = (state_30175[(2)]);
var inst_30157 = (inst_30156__$1 == null);
var state_30175__$1 = (function (){var statearr_30180 = state_30175;
(statearr_30180[(7)] = inst_30156__$1);

return statearr_30180;
})();
if(cljs.core.truth_(inst_30157)){
var statearr_30181_33064 = state_30175__$1;
(statearr_30181_33064[(1)] = (5));

} else {
var statearr_30182_33065 = state_30175__$1;
(statearr_30182_33065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30176 === (6))){
var inst_30156 = (state_30175[(7)]);
var inst_30161 = (state_30175[(8)]);
var inst_30161__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30162 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30163 = [inst_30156,inst_30161__$1];
var inst_30164 = (new cljs.core.PersistentVector(null,2,(5),inst_30162,inst_30163,null));
var state_30175__$1 = (function (){var statearr_30183 = state_30175;
(statearr_30183[(8)] = inst_30161__$1);

return statearr_30183;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30175__$1,(8),jobs,inst_30164);
} else {
if((state_val_30176 === (3))){
var inst_30173 = (state_30175[(2)]);
var state_30175__$1 = state_30175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30175__$1,inst_30173);
} else {
if((state_val_30176 === (2))){
var state_30175__$1 = state_30175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30175__$1,(4),from);
} else {
if((state_val_30176 === (9))){
var inst_30168 = (state_30175[(2)]);
var state_30175__$1 = (function (){var statearr_30184 = state_30175;
(statearr_30184[(9)] = inst_30168);

return statearr_30184;
})();
var statearr_30185_33068 = state_30175__$1;
(statearr_30185_33068[(2)] = null);

(statearr_30185_33068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30176 === (5))){
var inst_30159 = cljs.core.async.close_BANG_(jobs);
var state_30175__$1 = state_30175;
var statearr_30186_33072 = state_30175__$1;
(statearr_30186_33072[(2)] = inst_30159);

(statearr_30186_33072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30176 === (8))){
var inst_30161 = (state_30175[(8)]);
var inst_30166 = (state_30175[(2)]);
var state_30175__$1 = (function (){var statearr_30187 = state_30175;
(statearr_30187[(10)] = inst_30166);

return statearr_30187;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30175__$1,(9),results,inst_30161);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____0 = (function (){
var statearr_30189 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30189[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__);

(statearr_30189[(1)] = (1));

return statearr_30189;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____1 = (function (state_30175){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_30175);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e30190){var ex__29293__auto__ = e30190;
var statearr_30200_33073 = state_30175;
(statearr_30200_33073[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_30175[(4)]))){
var statearr_30201_33074 = state_30175;
(statearr_30201_33074[(1)] = cljs.core.first((state_30175[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33075 = state_30175;
state_30175 = G__33075;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__ = function(state_30175){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____1.call(this,state_30175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_30204 = f__29625__auto__();
(statearr_30204[(6)] = c__29624__auto___33061);

return statearr_30204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));


var c__29624__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_30249){
var state_val_30250 = (state_30249[(1)]);
if((state_val_30250 === (7))){
var inst_30245 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
var statearr_30251_33077 = state_30249__$1;
(statearr_30251_33077[(2)] = inst_30245);

(statearr_30251_33077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (20))){
var state_30249__$1 = state_30249;
var statearr_30252_33078 = state_30249__$1;
(statearr_30252_33078[(2)] = null);

(statearr_30252_33078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (1))){
var state_30249__$1 = state_30249;
var statearr_30253_33079 = state_30249__$1;
(statearr_30253_33079[(2)] = null);

(statearr_30253_33079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (4))){
var inst_30213 = (state_30249[(7)]);
var inst_30213__$1 = (state_30249[(2)]);
var inst_30214 = (inst_30213__$1 == null);
var state_30249__$1 = (function (){var statearr_30254 = state_30249;
(statearr_30254[(7)] = inst_30213__$1);

return statearr_30254;
})();
if(cljs.core.truth_(inst_30214)){
var statearr_30255_33083 = state_30249__$1;
(statearr_30255_33083[(1)] = (5));

} else {
var statearr_30256_33084 = state_30249__$1;
(statearr_30256_33084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (15))){
var inst_30227 = (state_30249[(8)]);
var state_30249__$1 = state_30249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30249__$1,(18),to,inst_30227);
} else {
if((state_val_30250 === (21))){
var inst_30240 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
var statearr_30261_33086 = state_30249__$1;
(statearr_30261_33086[(2)] = inst_30240);

(statearr_30261_33086[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (13))){
var inst_30242 = (state_30249[(2)]);
var state_30249__$1 = (function (){var statearr_30263 = state_30249;
(statearr_30263[(9)] = inst_30242);

return statearr_30263;
})();
var statearr_30268_33088 = state_30249__$1;
(statearr_30268_33088[(2)] = null);

(statearr_30268_33088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (6))){
var inst_30213 = (state_30249[(7)]);
var state_30249__$1 = state_30249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30249__$1,(11),inst_30213);
} else {
if((state_val_30250 === (17))){
var inst_30235 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
if(cljs.core.truth_(inst_30235)){
var statearr_30279_33090 = state_30249__$1;
(statearr_30279_33090[(1)] = (19));

} else {
var statearr_30282_33091 = state_30249__$1;
(statearr_30282_33091[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (3))){
var inst_30247 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30249__$1,inst_30247);
} else {
if((state_val_30250 === (12))){
var inst_30223 = (state_30249[(10)]);
var state_30249__$1 = state_30249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30249__$1,(14),inst_30223);
} else {
if((state_val_30250 === (2))){
var state_30249__$1 = state_30249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30249__$1,(4),results);
} else {
if((state_val_30250 === (19))){
var state_30249__$1 = state_30249;
var statearr_30295_33092 = state_30249__$1;
(statearr_30295_33092[(2)] = null);

(statearr_30295_33092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (11))){
var inst_30223 = (state_30249[(2)]);
var state_30249__$1 = (function (){var statearr_30297 = state_30249;
(statearr_30297[(10)] = inst_30223);

return statearr_30297;
})();
var statearr_30299_33093 = state_30249__$1;
(statearr_30299_33093[(2)] = null);

(statearr_30299_33093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (9))){
var state_30249__$1 = state_30249;
var statearr_30300_33094 = state_30249__$1;
(statearr_30300_33094[(2)] = null);

(statearr_30300_33094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (5))){
var state_30249__$1 = state_30249;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30301_33095 = state_30249__$1;
(statearr_30301_33095[(1)] = (8));

} else {
var statearr_30302_33096 = state_30249__$1;
(statearr_30302_33096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (14))){
var inst_30227 = (state_30249[(8)]);
var inst_30229 = (state_30249[(11)]);
var inst_30227__$1 = (state_30249[(2)]);
var inst_30228 = (inst_30227__$1 == null);
var inst_30229__$1 = cljs.core.not(inst_30228);
var state_30249__$1 = (function (){var statearr_30308 = state_30249;
(statearr_30308[(8)] = inst_30227__$1);

(statearr_30308[(11)] = inst_30229__$1);

return statearr_30308;
})();
if(inst_30229__$1){
var statearr_30309_33097 = state_30249__$1;
(statearr_30309_33097[(1)] = (15));

} else {
var statearr_30310_33098 = state_30249__$1;
(statearr_30310_33098[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (16))){
var inst_30229 = (state_30249[(11)]);
var state_30249__$1 = state_30249;
var statearr_30313_33099 = state_30249__$1;
(statearr_30313_33099[(2)] = inst_30229);

(statearr_30313_33099[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (10))){
var inst_30220 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
var statearr_30314_33100 = state_30249__$1;
(statearr_30314_33100[(2)] = inst_30220);

(statearr_30314_33100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (18))){
var inst_30232 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
var statearr_30315_33101 = state_30249__$1;
(statearr_30315_33101[(2)] = inst_30232);

(statearr_30315_33101[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (8))){
var inst_30217 = cljs.core.async.close_BANG_(to);
var state_30249__$1 = state_30249;
var statearr_30316_33102 = state_30249__$1;
(statearr_30316_33102[(2)] = inst_30217);

(statearr_30316_33102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____0 = (function (){
var statearr_30325 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30325[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__);

(statearr_30325[(1)] = (1));

return statearr_30325;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____1 = (function (state_30249){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_30249);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e30326){var ex__29293__auto__ = e30326;
var statearr_30331_33104 = state_30249;
(statearr_30331_33104[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_30249[(4)]))){
var statearr_30332_33108 = state_30249;
(statearr_30332_33108[(1)] = cljs.core.first((state_30249[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33109 = state_30249;
state_30249 = G__33109;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__ = function(state_30249){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____1.call(this,state_30249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_30337 = f__29625__auto__();
(statearr_30337[(6)] = c__29624__auto__);

return statearr_30337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));

return c__29624__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30360 = arguments.length;
switch (G__30360) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30406 = arguments.length;
switch (G__30406) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30430 = arguments.length;
switch (G__30430) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29624__auto___33119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_30472){
var state_val_30475 = (state_30472[(1)]);
if((state_val_30475 === (7))){
var inst_30464 = (state_30472[(2)]);
var state_30472__$1 = state_30472;
var statearr_30477_33120 = state_30472__$1;
(statearr_30477_33120[(2)] = inst_30464);

(statearr_30477_33120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (1))){
var state_30472__$1 = state_30472;
var statearr_30478_33121 = state_30472__$1;
(statearr_30478_33121[(2)] = null);

(statearr_30478_33121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (4))){
var inst_30441 = (state_30472[(7)]);
var inst_30441__$1 = (state_30472[(2)]);
var inst_30442 = (inst_30441__$1 == null);
var state_30472__$1 = (function (){var statearr_30480 = state_30472;
(statearr_30480[(7)] = inst_30441__$1);

return statearr_30480;
})();
if(cljs.core.truth_(inst_30442)){
var statearr_30481_33122 = state_30472__$1;
(statearr_30481_33122[(1)] = (5));

} else {
var statearr_30482_33127 = state_30472__$1;
(statearr_30482_33127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (13))){
var state_30472__$1 = state_30472;
var statearr_30483_33128 = state_30472__$1;
(statearr_30483_33128[(2)] = null);

(statearr_30483_33128[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (6))){
var inst_30441 = (state_30472[(7)]);
var inst_30451 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30441) : p.call(null,inst_30441));
var state_30472__$1 = state_30472;
if(cljs.core.truth_(inst_30451)){
var statearr_30490_33132 = state_30472__$1;
(statearr_30490_33132[(1)] = (9));

} else {
var statearr_30491_33133 = state_30472__$1;
(statearr_30491_33133[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (3))){
var inst_30470 = (state_30472[(2)]);
var state_30472__$1 = state_30472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30472__$1,inst_30470);
} else {
if((state_val_30475 === (12))){
var state_30472__$1 = state_30472;
var statearr_30494_33135 = state_30472__$1;
(statearr_30494_33135[(2)] = null);

(statearr_30494_33135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (2))){
var state_30472__$1 = state_30472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30472__$1,(4),ch);
} else {
if((state_val_30475 === (11))){
var inst_30441 = (state_30472[(7)]);
var inst_30455 = (state_30472[(2)]);
var state_30472__$1 = state_30472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30472__$1,(8),inst_30455,inst_30441);
} else {
if((state_val_30475 === (9))){
var state_30472__$1 = state_30472;
var statearr_30496_33136 = state_30472__$1;
(statearr_30496_33136[(2)] = tc);

(statearr_30496_33136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (5))){
var inst_30448 = cljs.core.async.close_BANG_(tc);
var inst_30449 = cljs.core.async.close_BANG_(fc);
var state_30472__$1 = (function (){var statearr_30497 = state_30472;
(statearr_30497[(8)] = inst_30448);

return statearr_30497;
})();
var statearr_30498_33137 = state_30472__$1;
(statearr_30498_33137[(2)] = inst_30449);

(statearr_30498_33137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (14))){
var inst_30462 = (state_30472[(2)]);
var state_30472__$1 = state_30472;
var statearr_30499_33141 = state_30472__$1;
(statearr_30499_33141[(2)] = inst_30462);

(statearr_30499_33141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (10))){
var state_30472__$1 = state_30472;
var statearr_30504_33142 = state_30472__$1;
(statearr_30504_33142[(2)] = fc);

(statearr_30504_33142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (8))){
var inst_30457 = (state_30472[(2)]);
var state_30472__$1 = state_30472;
if(cljs.core.truth_(inst_30457)){
var statearr_30505_33144 = state_30472__$1;
(statearr_30505_33144[(1)] = (12));

} else {
var statearr_30506_33145 = state_30472__$1;
(statearr_30506_33145[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29289__auto__ = null;
var cljs$core$async$state_machine__29289__auto____0 = (function (){
var statearr_30507 = [null,null,null,null,null,null,null,null,null];
(statearr_30507[(0)] = cljs$core$async$state_machine__29289__auto__);

(statearr_30507[(1)] = (1));

return statearr_30507;
});
var cljs$core$async$state_machine__29289__auto____1 = (function (state_30472){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_30472);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e30508){var ex__29293__auto__ = e30508;
var statearr_30509_33146 = state_30472;
(statearr_30509_33146[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_30472[(4)]))){
var statearr_30510_33147 = state_30472;
(statearr_30510_33147[(1)] = cljs.core.first((state_30472[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33148 = state_30472;
state_30472 = G__33148;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$state_machine__29289__auto__ = function(state_30472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29289__auto____1.call(this,state_30472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29289__auto____0;
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29289__auto____1;
return cljs$core$async$state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_30515 = f__29625__auto__();
(statearr_30515[(6)] = c__29624__auto___33119);

return statearr_30515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29624__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_30540){
var state_val_30541 = (state_30540[(1)]);
if((state_val_30541 === (7))){
var inst_30536 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
var statearr_30542_33153 = state_30540__$1;
(statearr_30542_33153[(2)] = inst_30536);

(statearr_30542_33153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (1))){
var inst_30516 = init;
var inst_30517 = inst_30516;
var state_30540__$1 = (function (){var statearr_30543 = state_30540;
(statearr_30543[(7)] = inst_30517);

return statearr_30543;
})();
var statearr_30544_33156 = state_30540__$1;
(statearr_30544_33156[(2)] = null);

(statearr_30544_33156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (4))){
var inst_30520 = (state_30540[(8)]);
var inst_30520__$1 = (state_30540[(2)]);
var inst_30521 = (inst_30520__$1 == null);
var state_30540__$1 = (function (){var statearr_30545 = state_30540;
(statearr_30545[(8)] = inst_30520__$1);

return statearr_30545;
})();
if(cljs.core.truth_(inst_30521)){
var statearr_30547_33157 = state_30540__$1;
(statearr_30547_33157[(1)] = (5));

} else {
var statearr_30548_33158 = state_30540__$1;
(statearr_30548_33158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (6))){
var inst_30517 = (state_30540[(7)]);
var inst_30520 = (state_30540[(8)]);
var inst_30525 = (state_30540[(9)]);
var inst_30525__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30517,inst_30520) : f.call(null,inst_30517,inst_30520));
var inst_30527 = cljs.core.reduced_QMARK_(inst_30525__$1);
var state_30540__$1 = (function (){var statearr_30549 = state_30540;
(statearr_30549[(9)] = inst_30525__$1);

return statearr_30549;
})();
if(inst_30527){
var statearr_30550_33162 = state_30540__$1;
(statearr_30550_33162[(1)] = (8));

} else {
var statearr_30551_33163 = state_30540__$1;
(statearr_30551_33163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (3))){
var inst_30538 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30540__$1,inst_30538);
} else {
if((state_val_30541 === (2))){
var state_30540__$1 = state_30540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30540__$1,(4),ch);
} else {
if((state_val_30541 === (9))){
var inst_30525 = (state_30540[(9)]);
var inst_30517 = inst_30525;
var state_30540__$1 = (function (){var statearr_30552 = state_30540;
(statearr_30552[(7)] = inst_30517);

return statearr_30552;
})();
var statearr_30553_33172 = state_30540__$1;
(statearr_30553_33172[(2)] = null);

(statearr_30553_33172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (5))){
var inst_30517 = (state_30540[(7)]);
var state_30540__$1 = state_30540;
var statearr_30554_33173 = state_30540__$1;
(statearr_30554_33173[(2)] = inst_30517);

(statearr_30554_33173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (10))){
var inst_30534 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
var statearr_30555_33174 = state_30540__$1;
(statearr_30555_33174[(2)] = inst_30534);

(statearr_30555_33174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (8))){
var inst_30525 = (state_30540[(9)]);
var inst_30529 = cljs.core.deref(inst_30525);
var state_30540__$1 = state_30540;
var statearr_30556_33176 = state_30540__$1;
(statearr_30556_33176[(2)] = inst_30529);

(statearr_30556_33176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29289__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29289__auto____0 = (function (){
var statearr_30563 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30563[(0)] = cljs$core$async$reduce_$_state_machine__29289__auto__);

(statearr_30563[(1)] = (1));

return statearr_30563;
});
var cljs$core$async$reduce_$_state_machine__29289__auto____1 = (function (state_30540){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_30540);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e30564){var ex__29293__auto__ = e30564;
var statearr_30565_33180 = state_30540;
(statearr_30565_33180[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_30540[(4)]))){
var statearr_30567_33181 = state_30540;
(statearr_30567_33181[(1)] = cljs.core.first((state_30540[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33182 = state_30540;
state_30540 = G__33182;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29289__auto__ = function(state_30540){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29289__auto____1.call(this,state_30540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29289__auto____0;
cljs$core$async$reduce_$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29289__auto____1;
return cljs$core$async$reduce_$_state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_30570 = f__29625__auto__();
(statearr_30570[(6)] = c__29624__auto__);

return statearr_30570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));

return c__29624__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29624__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_30580){
var state_val_30581 = (state_30580[(1)]);
if((state_val_30581 === (1))){
var inst_30575 = cljs.core.async.reduce(f__$1,init,ch);
var state_30580__$1 = state_30580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30580__$1,(2),inst_30575);
} else {
if((state_val_30581 === (2))){
var inst_30577 = (state_30580[(2)]);
var inst_30578 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30577) : f__$1.call(null,inst_30577));
var state_30580__$1 = state_30580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30580__$1,inst_30578);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29289__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29289__auto____0 = (function (){
var statearr_30588 = [null,null,null,null,null,null,null];
(statearr_30588[(0)] = cljs$core$async$transduce_$_state_machine__29289__auto__);

(statearr_30588[(1)] = (1));

return statearr_30588;
});
var cljs$core$async$transduce_$_state_machine__29289__auto____1 = (function (state_30580){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_30580);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e30589){var ex__29293__auto__ = e30589;
var statearr_30590_33193 = state_30580;
(statearr_30590_33193[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_30580[(4)]))){
var statearr_30595_33198 = state_30580;
(statearr_30595_33198[(1)] = cljs.core.first((state_30580[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33199 = state_30580;
state_30580 = G__33199;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29289__auto__ = function(state_30580){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29289__auto____1.call(this,state_30580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29289__auto____0;
cljs$core$async$transduce_$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29289__auto____1;
return cljs$core$async$transduce_$_state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_30596 = f__29625__auto__();
(statearr_30596[(6)] = c__29624__auto__);

return statearr_30596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));

return c__29624__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30601 = arguments.length;
switch (G__30601) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29624__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_30634){
var state_val_30635 = (state_30634[(1)]);
if((state_val_30635 === (7))){
var inst_30612 = (state_30634[(2)]);
var state_30634__$1 = state_30634;
var statearr_30636_33208 = state_30634__$1;
(statearr_30636_33208[(2)] = inst_30612);

(statearr_30636_33208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (1))){
var inst_30606 = cljs.core.seq(coll);
var inst_30607 = inst_30606;
var state_30634__$1 = (function (){var statearr_30637 = state_30634;
(statearr_30637[(7)] = inst_30607);

return statearr_30637;
})();
var statearr_30638_33213 = state_30634__$1;
(statearr_30638_33213[(2)] = null);

(statearr_30638_33213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (4))){
var inst_30607 = (state_30634[(7)]);
var inst_30610 = cljs.core.first(inst_30607);
var state_30634__$1 = state_30634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30634__$1,(7),ch,inst_30610);
} else {
if((state_val_30635 === (13))){
var inst_30628 = (state_30634[(2)]);
var state_30634__$1 = state_30634;
var statearr_30639_33214 = state_30634__$1;
(statearr_30639_33214[(2)] = inst_30628);

(statearr_30639_33214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (6))){
var inst_30615 = (state_30634[(2)]);
var state_30634__$1 = state_30634;
if(cljs.core.truth_(inst_30615)){
var statearr_30640_33215 = state_30634__$1;
(statearr_30640_33215[(1)] = (8));

} else {
var statearr_30641_33216 = state_30634__$1;
(statearr_30641_33216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (3))){
var inst_30632 = (state_30634[(2)]);
var state_30634__$1 = state_30634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30634__$1,inst_30632);
} else {
if((state_val_30635 === (12))){
var state_30634__$1 = state_30634;
var statearr_30642_33220 = state_30634__$1;
(statearr_30642_33220[(2)] = null);

(statearr_30642_33220[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (2))){
var inst_30607 = (state_30634[(7)]);
var state_30634__$1 = state_30634;
if(cljs.core.truth_(inst_30607)){
var statearr_30643_33225 = state_30634__$1;
(statearr_30643_33225[(1)] = (4));

} else {
var statearr_30644_33226 = state_30634__$1;
(statearr_30644_33226[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (11))){
var inst_30622 = cljs.core.async.close_BANG_(ch);
var state_30634__$1 = state_30634;
var statearr_30645_33227 = state_30634__$1;
(statearr_30645_33227[(2)] = inst_30622);

(statearr_30645_33227[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (9))){
var state_30634__$1 = state_30634;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30646_33228 = state_30634__$1;
(statearr_30646_33228[(1)] = (11));

} else {
var statearr_30647_33229 = state_30634__$1;
(statearr_30647_33229[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (5))){
var inst_30607 = (state_30634[(7)]);
var state_30634__$1 = state_30634;
var statearr_30656_33233 = state_30634__$1;
(statearr_30656_33233[(2)] = inst_30607);

(statearr_30656_33233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (10))){
var inst_30630 = (state_30634[(2)]);
var state_30634__$1 = state_30634;
var statearr_30661_33234 = state_30634__$1;
(statearr_30661_33234[(2)] = inst_30630);

(statearr_30661_33234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (8))){
var inst_30607 = (state_30634[(7)]);
var inst_30617 = cljs.core.next(inst_30607);
var inst_30607__$1 = inst_30617;
var state_30634__$1 = (function (){var statearr_30662 = state_30634;
(statearr_30662[(7)] = inst_30607__$1);

return statearr_30662;
})();
var statearr_30663_33235 = state_30634__$1;
(statearr_30663_33235[(2)] = null);

(statearr_30663_33235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29289__auto__ = null;
var cljs$core$async$state_machine__29289__auto____0 = (function (){
var statearr_30666 = [null,null,null,null,null,null,null,null];
(statearr_30666[(0)] = cljs$core$async$state_machine__29289__auto__);

(statearr_30666[(1)] = (1));

return statearr_30666;
});
var cljs$core$async$state_machine__29289__auto____1 = (function (state_30634){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_30634);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e30667){var ex__29293__auto__ = e30667;
var statearr_30668_33242 = state_30634;
(statearr_30668_33242[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_30634[(4)]))){
var statearr_30669_33243 = state_30634;
(statearr_30669_33243[(1)] = cljs.core.first((state_30634[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33245 = state_30634;
state_30634 = G__33245;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$state_machine__29289__auto__ = function(state_30634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29289__auto____1.call(this,state_30634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29289__auto____0;
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29289__auto____1;
return cljs$core$async$state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_30670 = f__29625__auto__();
(statearr_30670[(6)] = c__29624__auto__);

return statearr_30670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));

return c__29624__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30675 = arguments.length;
switch (G__30675) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33249 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33249(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33250 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33250(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33251 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33251(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33259 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33259(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30733 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30733 = (function (ch,cs,meta30734){
this.ch = ch;
this.cs = cs;
this.meta30734 = meta30734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30735,meta30734__$1){
var self__ = this;
var _30735__$1 = this;
return (new cljs.core.async.t_cljs$core$async30733(self__.ch,self__.cs,meta30734__$1));
}));

(cljs.core.async.t_cljs$core$async30733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30735){
var self__ = this;
var _30735__$1 = this;
return self__.meta30734;
}));

(cljs.core.async.t_cljs$core$async30733.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30733.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30733.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30733.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30733.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30733.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30734","meta30734",-1474046434,null)], null);
}));

(cljs.core.async.t_cljs$core$async30733.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30733");

(cljs.core.async.t_cljs$core$async30733.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30733");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30733.
 */
cljs.core.async.__GT_t_cljs$core$async30733 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30733(ch__$1,cs__$1,meta30734){
return (new cljs.core.async.t_cljs$core$async30733(ch__$1,cs__$1,meta30734));
});

}

return (new cljs.core.async.t_cljs$core$async30733(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29624__auto___33265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_30903){
var state_val_30904 = (state_30903[(1)]);
if((state_val_30904 === (7))){
var inst_30898 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
var statearr_30914_33269 = state_30903__$1;
(statearr_30914_33269[(2)] = inst_30898);

(statearr_30914_33269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (20))){
var inst_30801 = (state_30903[(7)]);
var inst_30814 = cljs.core.first(inst_30801);
var inst_30815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30814,(0),null);
var inst_30816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30814,(1),null);
var state_30903__$1 = (function (){var statearr_30917 = state_30903;
(statearr_30917[(8)] = inst_30815);

return statearr_30917;
})();
if(cljs.core.truth_(inst_30816)){
var statearr_30918_33271 = state_30903__$1;
(statearr_30918_33271[(1)] = (22));

} else {
var statearr_30919_33272 = state_30903__$1;
(statearr_30919_33272[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (27))){
var inst_30846 = (state_30903[(9)]);
var inst_30851 = (state_30903[(10)]);
var inst_30844 = (state_30903[(11)]);
var inst_30758 = (state_30903[(12)]);
var inst_30851__$1 = cljs.core._nth(inst_30844,inst_30846);
var inst_30852 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30851__$1,inst_30758,done);
var state_30903__$1 = (function (){var statearr_30922 = state_30903;
(statearr_30922[(10)] = inst_30851__$1);

return statearr_30922;
})();
if(cljs.core.truth_(inst_30852)){
var statearr_30923_33273 = state_30903__$1;
(statearr_30923_33273[(1)] = (30));

} else {
var statearr_30930_33274 = state_30903__$1;
(statearr_30930_33274[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (1))){
var state_30903__$1 = state_30903;
var statearr_30931_33275 = state_30903__$1;
(statearr_30931_33275[(2)] = null);

(statearr_30931_33275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (24))){
var inst_30801 = (state_30903[(7)]);
var inst_30821 = (state_30903[(2)]);
var inst_30822 = cljs.core.next(inst_30801);
var inst_30771 = inst_30822;
var inst_30772 = null;
var inst_30773 = (0);
var inst_30774 = (0);
var state_30903__$1 = (function (){var statearr_30933 = state_30903;
(statearr_30933[(13)] = inst_30772);

(statearr_30933[(14)] = inst_30774);

(statearr_30933[(15)] = inst_30771);

(statearr_30933[(16)] = inst_30773);

(statearr_30933[(17)] = inst_30821);

return statearr_30933;
})();
var statearr_30934_33279 = state_30903__$1;
(statearr_30934_33279[(2)] = null);

(statearr_30934_33279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (39))){
var state_30903__$1 = state_30903;
var statearr_30946_33281 = state_30903__$1;
(statearr_30946_33281[(2)] = null);

(statearr_30946_33281[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (4))){
var inst_30758 = (state_30903[(12)]);
var inst_30758__$1 = (state_30903[(2)]);
var inst_30759 = (inst_30758__$1 == null);
var state_30903__$1 = (function (){var statearr_30952 = state_30903;
(statearr_30952[(12)] = inst_30758__$1);

return statearr_30952;
})();
if(cljs.core.truth_(inst_30759)){
var statearr_30953_33282 = state_30903__$1;
(statearr_30953_33282[(1)] = (5));

} else {
var statearr_30955_33284 = state_30903__$1;
(statearr_30955_33284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (15))){
var inst_30772 = (state_30903[(13)]);
var inst_30774 = (state_30903[(14)]);
var inst_30771 = (state_30903[(15)]);
var inst_30773 = (state_30903[(16)]);
var inst_30797 = (state_30903[(2)]);
var inst_30798 = (inst_30774 + (1));
var tmp30935 = inst_30772;
var tmp30936 = inst_30771;
var tmp30937 = inst_30773;
var inst_30771__$1 = tmp30936;
var inst_30772__$1 = tmp30935;
var inst_30773__$1 = tmp30937;
var inst_30774__$1 = inst_30798;
var state_30903__$1 = (function (){var statearr_30956 = state_30903;
(statearr_30956[(13)] = inst_30772__$1);

(statearr_30956[(18)] = inst_30797);

(statearr_30956[(14)] = inst_30774__$1);

(statearr_30956[(15)] = inst_30771__$1);

(statearr_30956[(16)] = inst_30773__$1);

return statearr_30956;
})();
var statearr_30957_33289 = state_30903__$1;
(statearr_30957_33289[(2)] = null);

(statearr_30957_33289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (21))){
var inst_30825 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
var statearr_30961_33290 = state_30903__$1;
(statearr_30961_33290[(2)] = inst_30825);

(statearr_30961_33290[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (31))){
var inst_30851 = (state_30903[(10)]);
var inst_30855 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30851);
var state_30903__$1 = state_30903;
var statearr_30963_33292 = state_30903__$1;
(statearr_30963_33292[(2)] = inst_30855);

(statearr_30963_33292[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (32))){
var inst_30846 = (state_30903[(9)]);
var inst_30844 = (state_30903[(11)]);
var inst_30843 = (state_30903[(19)]);
var inst_30845 = (state_30903[(20)]);
var inst_30857 = (state_30903[(2)]);
var inst_30858 = (inst_30846 + (1));
var tmp30958 = inst_30844;
var tmp30959 = inst_30843;
var tmp30960 = inst_30845;
var inst_30843__$1 = tmp30959;
var inst_30844__$1 = tmp30958;
var inst_30845__$1 = tmp30960;
var inst_30846__$1 = inst_30858;
var state_30903__$1 = (function (){var statearr_30965 = state_30903;
(statearr_30965[(21)] = inst_30857);

(statearr_30965[(9)] = inst_30846__$1);

(statearr_30965[(11)] = inst_30844__$1);

(statearr_30965[(19)] = inst_30843__$1);

(statearr_30965[(20)] = inst_30845__$1);

return statearr_30965;
})();
var statearr_30966_33293 = state_30903__$1;
(statearr_30966_33293[(2)] = null);

(statearr_30966_33293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (40))){
var inst_30871 = (state_30903[(22)]);
var inst_30875 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30871);
var state_30903__$1 = state_30903;
var statearr_30967_33295 = state_30903__$1;
(statearr_30967_33295[(2)] = inst_30875);

(statearr_30967_33295[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (33))){
var inst_30861 = (state_30903[(23)]);
var inst_30863 = cljs.core.chunked_seq_QMARK_(inst_30861);
var state_30903__$1 = state_30903;
if(inst_30863){
var statearr_30972_33297 = state_30903__$1;
(statearr_30972_33297[(1)] = (36));

} else {
var statearr_30973_33298 = state_30903__$1;
(statearr_30973_33298[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (13))){
var inst_30787 = (state_30903[(24)]);
var inst_30794 = cljs.core.async.close_BANG_(inst_30787);
var state_30903__$1 = state_30903;
var statearr_30983_33303 = state_30903__$1;
(statearr_30983_33303[(2)] = inst_30794);

(statearr_30983_33303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (22))){
var inst_30815 = (state_30903[(8)]);
var inst_30818 = cljs.core.async.close_BANG_(inst_30815);
var state_30903__$1 = state_30903;
var statearr_30991_33304 = state_30903__$1;
(statearr_30991_33304[(2)] = inst_30818);

(statearr_30991_33304[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (36))){
var inst_30861 = (state_30903[(23)]);
var inst_30865 = cljs.core.chunk_first(inst_30861);
var inst_30866 = cljs.core.chunk_rest(inst_30861);
var inst_30867 = cljs.core.count(inst_30865);
var inst_30843 = inst_30866;
var inst_30844 = inst_30865;
var inst_30845 = inst_30867;
var inst_30846 = (0);
var state_30903__$1 = (function (){var statearr_30994 = state_30903;
(statearr_30994[(9)] = inst_30846);

(statearr_30994[(11)] = inst_30844);

(statearr_30994[(19)] = inst_30843);

(statearr_30994[(20)] = inst_30845);

return statearr_30994;
})();
var statearr_30995_33305 = state_30903__$1;
(statearr_30995_33305[(2)] = null);

(statearr_30995_33305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (41))){
var inst_30861 = (state_30903[(23)]);
var inst_30877 = (state_30903[(2)]);
var inst_30878 = cljs.core.next(inst_30861);
var inst_30843 = inst_30878;
var inst_30844 = null;
var inst_30845 = (0);
var inst_30846 = (0);
var state_30903__$1 = (function (){var statearr_30998 = state_30903;
(statearr_30998[(9)] = inst_30846);

(statearr_30998[(11)] = inst_30844);

(statearr_30998[(19)] = inst_30843);

(statearr_30998[(20)] = inst_30845);

(statearr_30998[(25)] = inst_30877);

return statearr_30998;
})();
var statearr_31000_33306 = state_30903__$1;
(statearr_31000_33306[(2)] = null);

(statearr_31000_33306[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (43))){
var state_30903__$1 = state_30903;
var statearr_31006_33307 = state_30903__$1;
(statearr_31006_33307[(2)] = null);

(statearr_31006_33307[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (29))){
var inst_30886 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
var statearr_31011_33308 = state_30903__$1;
(statearr_31011_33308[(2)] = inst_30886);

(statearr_31011_33308[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (44))){
var inst_30895 = (state_30903[(2)]);
var state_30903__$1 = (function (){var statearr_31014 = state_30903;
(statearr_31014[(26)] = inst_30895);

return statearr_31014;
})();
var statearr_31018_33309 = state_30903__$1;
(statearr_31018_33309[(2)] = null);

(statearr_31018_33309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (6))){
var inst_30835 = (state_30903[(27)]);
var inst_30834 = cljs.core.deref(cs);
var inst_30835__$1 = cljs.core.keys(inst_30834);
var inst_30836 = cljs.core.count(inst_30835__$1);
var inst_30837 = cljs.core.reset_BANG_(dctr,inst_30836);
var inst_30842 = cljs.core.seq(inst_30835__$1);
var inst_30843 = inst_30842;
var inst_30844 = null;
var inst_30845 = (0);
var inst_30846 = (0);
var state_30903__$1 = (function (){var statearr_31026 = state_30903;
(statearr_31026[(28)] = inst_30837);

(statearr_31026[(27)] = inst_30835__$1);

(statearr_31026[(9)] = inst_30846);

(statearr_31026[(11)] = inst_30844);

(statearr_31026[(19)] = inst_30843);

(statearr_31026[(20)] = inst_30845);

return statearr_31026;
})();
var statearr_31029_33314 = state_30903__$1;
(statearr_31029_33314[(2)] = null);

(statearr_31029_33314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (28))){
var inst_30843 = (state_30903[(19)]);
var inst_30861 = (state_30903[(23)]);
var inst_30861__$1 = cljs.core.seq(inst_30843);
var state_30903__$1 = (function (){var statearr_31030 = state_30903;
(statearr_31030[(23)] = inst_30861__$1);

return statearr_31030;
})();
if(inst_30861__$1){
var statearr_31031_33315 = state_30903__$1;
(statearr_31031_33315[(1)] = (33));

} else {
var statearr_31032_33316 = state_30903__$1;
(statearr_31032_33316[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (25))){
var inst_30846 = (state_30903[(9)]);
var inst_30845 = (state_30903[(20)]);
var inst_30848 = (inst_30846 < inst_30845);
var inst_30849 = inst_30848;
var state_30903__$1 = state_30903;
if(cljs.core.truth_(inst_30849)){
var statearr_31034_33319 = state_30903__$1;
(statearr_31034_33319[(1)] = (27));

} else {
var statearr_31036_33320 = state_30903__$1;
(statearr_31036_33320[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (34))){
var state_30903__$1 = state_30903;
var statearr_31040_33321 = state_30903__$1;
(statearr_31040_33321[(2)] = null);

(statearr_31040_33321[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (17))){
var state_30903__$1 = state_30903;
var statearr_31041_33324 = state_30903__$1;
(statearr_31041_33324[(2)] = null);

(statearr_31041_33324[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (3))){
var inst_30900 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30903__$1,inst_30900);
} else {
if((state_val_30904 === (12))){
var inst_30830 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
var statearr_31042_33326 = state_30903__$1;
(statearr_31042_33326[(2)] = inst_30830);

(statearr_31042_33326[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (2))){
var state_30903__$1 = state_30903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30903__$1,(4),ch);
} else {
if((state_val_30904 === (23))){
var state_30903__$1 = state_30903;
var statearr_31044_33327 = state_30903__$1;
(statearr_31044_33327[(2)] = null);

(statearr_31044_33327[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (35))){
var inst_30884 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
var statearr_31046_33331 = state_30903__$1;
(statearr_31046_33331[(2)] = inst_30884);

(statearr_31046_33331[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (19))){
var inst_30801 = (state_30903[(7)]);
var inst_30806 = cljs.core.chunk_first(inst_30801);
var inst_30807 = cljs.core.chunk_rest(inst_30801);
var inst_30808 = cljs.core.count(inst_30806);
var inst_30771 = inst_30807;
var inst_30772 = inst_30806;
var inst_30773 = inst_30808;
var inst_30774 = (0);
var state_30903__$1 = (function (){var statearr_31050 = state_30903;
(statearr_31050[(13)] = inst_30772);

(statearr_31050[(14)] = inst_30774);

(statearr_31050[(15)] = inst_30771);

(statearr_31050[(16)] = inst_30773);

return statearr_31050;
})();
var statearr_31052_33336 = state_30903__$1;
(statearr_31052_33336[(2)] = null);

(statearr_31052_33336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (11))){
var inst_30771 = (state_30903[(15)]);
var inst_30801 = (state_30903[(7)]);
var inst_30801__$1 = cljs.core.seq(inst_30771);
var state_30903__$1 = (function (){var statearr_31054 = state_30903;
(statearr_31054[(7)] = inst_30801__$1);

return statearr_31054;
})();
if(inst_30801__$1){
var statearr_31055_33337 = state_30903__$1;
(statearr_31055_33337[(1)] = (16));

} else {
var statearr_31056_33338 = state_30903__$1;
(statearr_31056_33338[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (9))){
var inst_30832 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
var statearr_31057_33345 = state_30903__$1;
(statearr_31057_33345[(2)] = inst_30832);

(statearr_31057_33345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (5))){
var inst_30765 = cljs.core.deref(cs);
var inst_30766 = cljs.core.seq(inst_30765);
var inst_30771 = inst_30766;
var inst_30772 = null;
var inst_30773 = (0);
var inst_30774 = (0);
var state_30903__$1 = (function (){var statearr_31061 = state_30903;
(statearr_31061[(13)] = inst_30772);

(statearr_31061[(14)] = inst_30774);

(statearr_31061[(15)] = inst_30771);

(statearr_31061[(16)] = inst_30773);

return statearr_31061;
})();
var statearr_31062_33346 = state_30903__$1;
(statearr_31062_33346[(2)] = null);

(statearr_31062_33346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (14))){
var state_30903__$1 = state_30903;
var statearr_31067_33347 = state_30903__$1;
(statearr_31067_33347[(2)] = null);

(statearr_31067_33347[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (45))){
var inst_30892 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
var statearr_31068_33348 = state_30903__$1;
(statearr_31068_33348[(2)] = inst_30892);

(statearr_31068_33348[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (26))){
var inst_30835 = (state_30903[(27)]);
var inst_30888 = (state_30903[(2)]);
var inst_30889 = cljs.core.seq(inst_30835);
var state_30903__$1 = (function (){var statearr_31070 = state_30903;
(statearr_31070[(29)] = inst_30888);

return statearr_31070;
})();
if(inst_30889){
var statearr_31071_33349 = state_30903__$1;
(statearr_31071_33349[(1)] = (42));

} else {
var statearr_31072_33350 = state_30903__$1;
(statearr_31072_33350[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (16))){
var inst_30801 = (state_30903[(7)]);
var inst_30804 = cljs.core.chunked_seq_QMARK_(inst_30801);
var state_30903__$1 = state_30903;
if(inst_30804){
var statearr_31073_33351 = state_30903__$1;
(statearr_31073_33351[(1)] = (19));

} else {
var statearr_31074_33352 = state_30903__$1;
(statearr_31074_33352[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (38))){
var inst_30881 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
var statearr_31076_33354 = state_30903__$1;
(statearr_31076_33354[(2)] = inst_30881);

(statearr_31076_33354[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (30))){
var state_30903__$1 = state_30903;
var statearr_31079_33355 = state_30903__$1;
(statearr_31079_33355[(2)] = null);

(statearr_31079_33355[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (10))){
var inst_30772 = (state_30903[(13)]);
var inst_30774 = (state_30903[(14)]);
var inst_30786 = cljs.core._nth(inst_30772,inst_30774);
var inst_30787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30786,(0),null);
var inst_30792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30786,(1),null);
var state_30903__$1 = (function (){var statearr_31081 = state_30903;
(statearr_31081[(24)] = inst_30787);

return statearr_31081;
})();
if(cljs.core.truth_(inst_30792)){
var statearr_31082_33357 = state_30903__$1;
(statearr_31082_33357[(1)] = (13));

} else {
var statearr_31083_33358 = state_30903__$1;
(statearr_31083_33358[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (18))){
var inst_30828 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
var statearr_31084_33359 = state_30903__$1;
(statearr_31084_33359[(2)] = inst_30828);

(statearr_31084_33359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (42))){
var state_30903__$1 = state_30903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30903__$1,(45),dchan);
} else {
if((state_val_30904 === (37))){
var inst_30758 = (state_30903[(12)]);
var inst_30861 = (state_30903[(23)]);
var inst_30871 = (state_30903[(22)]);
var inst_30871__$1 = cljs.core.first(inst_30861);
var inst_30872 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30871__$1,inst_30758,done);
var state_30903__$1 = (function (){var statearr_31087 = state_30903;
(statearr_31087[(22)] = inst_30871__$1);

return statearr_31087;
})();
if(cljs.core.truth_(inst_30872)){
var statearr_31088_33360 = state_30903__$1;
(statearr_31088_33360[(1)] = (39));

} else {
var statearr_31089_33361 = state_30903__$1;
(statearr_31089_33361[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (8))){
var inst_30774 = (state_30903[(14)]);
var inst_30773 = (state_30903[(16)]);
var inst_30776 = (inst_30774 < inst_30773);
var inst_30777 = inst_30776;
var state_30903__$1 = state_30903;
if(cljs.core.truth_(inst_30777)){
var statearr_31091_33362 = state_30903__$1;
(statearr_31091_33362[(1)] = (10));

} else {
var statearr_31092_33363 = state_30903__$1;
(statearr_31092_33363[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29289__auto__ = null;
var cljs$core$async$mult_$_state_machine__29289__auto____0 = (function (){
var statearr_31093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31093[(0)] = cljs$core$async$mult_$_state_machine__29289__auto__);

(statearr_31093[(1)] = (1));

return statearr_31093;
});
var cljs$core$async$mult_$_state_machine__29289__auto____1 = (function (state_30903){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_30903);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e31096){var ex__29293__auto__ = e31096;
var statearr_31097_33370 = state_30903;
(statearr_31097_33370[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_30903[(4)]))){
var statearr_31098_33371 = state_30903;
(statearr_31098_33371[(1)] = cljs.core.first((state_30903[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33372 = state_30903;
state_30903 = G__33372;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29289__auto__ = function(state_30903){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29289__auto____1.call(this,state_30903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29289__auto____0;
cljs$core$async$mult_$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29289__auto____1;
return cljs$core$async$mult_$_state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_31100 = f__29625__auto__();
(statearr_31100[(6)] = c__29624__auto___33265);

return statearr_31100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31107 = arguments.length;
switch (G__31107) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33374 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33374(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33375 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33375(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33376 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33376(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33377 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33377(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33384 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33384(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33385 = arguments.length;
var i__4865__auto___33386 = (0);
while(true){
if((i__4865__auto___33386 < len__4864__auto___33385)){
args__4870__auto__.push((arguments[i__4865__auto___33386]));

var G__33387 = (i__4865__auto___33386 + (1));
i__4865__auto___33386 = G__33387;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31187){
var map__31188 = p__31187;
var map__31188__$1 = cljs.core.__destructure_map(map__31188);
var opts = map__31188__$1;
var statearr_31190_33394 = state;
(statearr_31190_33394[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31194_33395 = state;
(statearr_31194_33395[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31199_33396 = state;
(statearr_31199_33396[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31163){
var G__31164 = cljs.core.first(seq31163);
var seq31163__$1 = cljs.core.next(seq31163);
var G__31165 = cljs.core.first(seq31163__$1);
var seq31163__$2 = cljs.core.next(seq31163__$1);
var G__31166 = cljs.core.first(seq31163__$2);
var seq31163__$3 = cljs.core.next(seq31163__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31164,G__31165,G__31166,seq31163__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31212 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31212 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31213){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31213 = meta31213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31214,meta31213__$1){
var self__ = this;
var _31214__$1 = this;
return (new cljs.core.async.t_cljs$core$async31212(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31213__$1));
}));

(cljs.core.async.t_cljs$core$async31212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31214){
var self__ = this;
var _31214__$1 = this;
return self__.meta31213;
}));

(cljs.core.async.t_cljs$core$async31212.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31212.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31212.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31212.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31212.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31212.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31212.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31212.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31213","meta31213",-935839078,null)], null);
}));

(cljs.core.async.t_cljs$core$async31212.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31212");

(cljs.core.async.t_cljs$core$async31212.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31212");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31212.
 */
cljs.core.async.__GT_t_cljs$core$async31212 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31212(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31213){
return (new cljs.core.async.t_cljs$core$async31212(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31213));
});

}

return (new cljs.core.async.t_cljs$core$async31212(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29624__auto___33400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_31335){
var state_val_31336 = (state_31335[(1)]);
if((state_val_31336 === (7))){
var inst_31273 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
if(cljs.core.truth_(inst_31273)){
var statearr_31345_33402 = state_31335__$1;
(statearr_31345_33402[(1)] = (8));

} else {
var statearr_31346_33403 = state_31335__$1;
(statearr_31346_33403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (20))){
var inst_31264 = (state_31335[(7)]);
var state_31335__$1 = state_31335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31335__$1,(23),out,inst_31264);
} else {
if((state_val_31336 === (1))){
var inst_31234 = calc_state();
var inst_31235 = cljs.core.__destructure_map(inst_31234);
var inst_31240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31235,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31235,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31235,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31243 = inst_31234;
var state_31335__$1 = (function (){var statearr_31348 = state_31335;
(statearr_31348[(8)] = inst_31241);

(statearr_31348[(9)] = inst_31240);

(statearr_31348[(10)] = inst_31243);

(statearr_31348[(11)] = inst_31242);

return statearr_31348;
})();
var statearr_31351_33404 = state_31335__$1;
(statearr_31351_33404[(2)] = null);

(statearr_31351_33404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (24))){
var inst_31250 = (state_31335[(12)]);
var inst_31243 = inst_31250;
var state_31335__$1 = (function (){var statearr_31356 = state_31335;
(statearr_31356[(10)] = inst_31243);

return statearr_31356;
})();
var statearr_31357_33405 = state_31335__$1;
(statearr_31357_33405[(2)] = null);

(statearr_31357_33405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (4))){
var inst_31264 = (state_31335[(7)]);
var inst_31266 = (state_31335[(13)]);
var inst_31263 = (state_31335[(2)]);
var inst_31264__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31263,(0),null);
var inst_31265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31263,(1),null);
var inst_31266__$1 = (inst_31264__$1 == null);
var state_31335__$1 = (function (){var statearr_31369 = state_31335;
(statearr_31369[(14)] = inst_31265);

(statearr_31369[(7)] = inst_31264__$1);

(statearr_31369[(13)] = inst_31266__$1);

return statearr_31369;
})();
if(cljs.core.truth_(inst_31266__$1)){
var statearr_31370_33407 = state_31335__$1;
(statearr_31370_33407[(1)] = (5));

} else {
var statearr_31371_33408 = state_31335__$1;
(statearr_31371_33408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (15))){
var inst_31251 = (state_31335[(15)]);
var inst_31293 = (state_31335[(16)]);
var inst_31293__$1 = cljs.core.empty_QMARK_(inst_31251);
var state_31335__$1 = (function (){var statearr_31372 = state_31335;
(statearr_31372[(16)] = inst_31293__$1);

return statearr_31372;
})();
if(inst_31293__$1){
var statearr_31373_33413 = state_31335__$1;
(statearr_31373_33413[(1)] = (17));

} else {
var statearr_31374_33414 = state_31335__$1;
(statearr_31374_33414[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (21))){
var inst_31250 = (state_31335[(12)]);
var inst_31243 = inst_31250;
var state_31335__$1 = (function (){var statearr_31377 = state_31335;
(statearr_31377[(10)] = inst_31243);

return statearr_31377;
})();
var statearr_31379_33415 = state_31335__$1;
(statearr_31379_33415[(2)] = null);

(statearr_31379_33415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (13))){
var inst_31281 = (state_31335[(2)]);
var inst_31282 = calc_state();
var inst_31243 = inst_31282;
var state_31335__$1 = (function (){var statearr_31397 = state_31335;
(statearr_31397[(17)] = inst_31281);

(statearr_31397[(10)] = inst_31243);

return statearr_31397;
})();
var statearr_31398_33417 = state_31335__$1;
(statearr_31398_33417[(2)] = null);

(statearr_31398_33417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (22))){
var inst_31315 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
var statearr_31403_33419 = state_31335__$1;
(statearr_31403_33419[(2)] = inst_31315);

(statearr_31403_33419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (6))){
var inst_31265 = (state_31335[(14)]);
var inst_31271 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31265,change);
var state_31335__$1 = state_31335;
var statearr_31408_33420 = state_31335__$1;
(statearr_31408_33420[(2)] = inst_31271);

(statearr_31408_33420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (25))){
var state_31335__$1 = state_31335;
var statearr_31410_33421 = state_31335__$1;
(statearr_31410_33421[(2)] = null);

(statearr_31410_33421[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (17))){
var inst_31265 = (state_31335[(14)]);
var inst_31256 = (state_31335[(18)]);
var inst_31296 = (inst_31256.cljs$core$IFn$_invoke$arity$1 ? inst_31256.cljs$core$IFn$_invoke$arity$1(inst_31265) : inst_31256.call(null,inst_31265));
var inst_31297 = cljs.core.not(inst_31296);
var state_31335__$1 = state_31335;
var statearr_31414_33422 = state_31335__$1;
(statearr_31414_33422[(2)] = inst_31297);

(statearr_31414_33422[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (3))){
var inst_31323 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31335__$1,inst_31323);
} else {
if((state_val_31336 === (12))){
var state_31335__$1 = state_31335;
var statearr_31418_33423 = state_31335__$1;
(statearr_31418_33423[(2)] = null);

(statearr_31418_33423[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (2))){
var inst_31243 = (state_31335[(10)]);
var inst_31250 = (state_31335[(12)]);
var inst_31250__$1 = cljs.core.__destructure_map(inst_31243);
var inst_31251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31250__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31250__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31250__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31335__$1 = (function (){var statearr_31422 = state_31335;
(statearr_31422[(15)] = inst_31251);

(statearr_31422[(18)] = inst_31256);

(statearr_31422[(12)] = inst_31250__$1);

return statearr_31422;
})();
return cljs.core.async.ioc_alts_BANG_(state_31335__$1,(4),inst_31257);
} else {
if((state_val_31336 === (23))){
var inst_31306 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
if(cljs.core.truth_(inst_31306)){
var statearr_31423_33424 = state_31335__$1;
(statearr_31423_33424[(1)] = (24));

} else {
var statearr_31430_33425 = state_31335__$1;
(statearr_31430_33425[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (19))){
var inst_31300 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
var statearr_31433_33426 = state_31335__$1;
(statearr_31433_33426[(2)] = inst_31300);

(statearr_31433_33426[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (11))){
var inst_31265 = (state_31335[(14)]);
var inst_31277 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31265);
var state_31335__$1 = state_31335;
var statearr_31441_33427 = state_31335__$1;
(statearr_31441_33427[(2)] = inst_31277);

(statearr_31441_33427[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (9))){
var inst_31265 = (state_31335[(14)]);
var inst_31251 = (state_31335[(15)]);
var inst_31286 = (state_31335[(19)]);
var inst_31286__$1 = (inst_31251.cljs$core$IFn$_invoke$arity$1 ? inst_31251.cljs$core$IFn$_invoke$arity$1(inst_31265) : inst_31251.call(null,inst_31265));
var state_31335__$1 = (function (){var statearr_31445 = state_31335;
(statearr_31445[(19)] = inst_31286__$1);

return statearr_31445;
})();
if(cljs.core.truth_(inst_31286__$1)){
var statearr_31447_33428 = state_31335__$1;
(statearr_31447_33428[(1)] = (14));

} else {
var statearr_31448_33430 = state_31335__$1;
(statearr_31448_33430[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (5))){
var inst_31266 = (state_31335[(13)]);
var state_31335__$1 = state_31335;
var statearr_31449_33432 = state_31335__$1;
(statearr_31449_33432[(2)] = inst_31266);

(statearr_31449_33432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (14))){
var inst_31286 = (state_31335[(19)]);
var state_31335__$1 = state_31335;
var statearr_31454_33433 = state_31335__$1;
(statearr_31454_33433[(2)] = inst_31286);

(statearr_31454_33433[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (26))){
var inst_31311 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
var statearr_31462_33434 = state_31335__$1;
(statearr_31462_33434[(2)] = inst_31311);

(statearr_31462_33434[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (16))){
var inst_31302 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
if(cljs.core.truth_(inst_31302)){
var statearr_31463_33435 = state_31335__$1;
(statearr_31463_33435[(1)] = (20));

} else {
var statearr_31464_33436 = state_31335__$1;
(statearr_31464_33436[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (10))){
var inst_31317 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
var statearr_31466_33437 = state_31335__$1;
(statearr_31466_33437[(2)] = inst_31317);

(statearr_31466_33437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (18))){
var inst_31293 = (state_31335[(16)]);
var state_31335__$1 = state_31335;
var statearr_31468_33438 = state_31335__$1;
(statearr_31468_33438[(2)] = inst_31293);

(statearr_31468_33438[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (8))){
var inst_31264 = (state_31335[(7)]);
var inst_31275 = (inst_31264 == null);
var state_31335__$1 = state_31335;
if(cljs.core.truth_(inst_31275)){
var statearr_31469_33439 = state_31335__$1;
(statearr_31469_33439[(1)] = (11));

} else {
var statearr_31473_33440 = state_31335__$1;
(statearr_31473_33440[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29289__auto__ = null;
var cljs$core$async$mix_$_state_machine__29289__auto____0 = (function (){
var statearr_31508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31508[(0)] = cljs$core$async$mix_$_state_machine__29289__auto__);

(statearr_31508[(1)] = (1));

return statearr_31508;
});
var cljs$core$async$mix_$_state_machine__29289__auto____1 = (function (state_31335){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_31335);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e31509){var ex__29293__auto__ = e31509;
var statearr_31510_33443 = state_31335;
(statearr_31510_33443[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_31335[(4)]))){
var statearr_31512_33444 = state_31335;
(statearr_31512_33444[(1)] = cljs.core.first((state_31335[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33445 = state_31335;
state_31335 = G__33445;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29289__auto__ = function(state_31335){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29289__auto____1.call(this,state_31335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29289__auto____0;
cljs$core$async$mix_$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29289__auto____1;
return cljs$core$async$mix_$_state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_31515 = f__29625__auto__();
(statearr_31515[(6)] = c__29624__auto___33400);

return statearr_31515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33448 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33448(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33449 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33449(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33454 = (function() {
var G__33455 = null;
var G__33455__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33455__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33455 = function(p,v){
switch(arguments.length){
case 1:
return G__33455__1.call(this,p);
case 2:
return G__33455__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33455.cljs$core$IFn$_invoke$arity$1 = G__33455__1;
G__33455.cljs$core$IFn$_invoke$arity$2 = G__33455__2;
return G__33455;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31564 = arguments.length;
switch (G__31564) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33454(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33454(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31590 = arguments.length;
switch (G__31590) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31571_SHARP_){
if(cljs.core.truth_((p1__31571_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31571_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31571_SHARP_.call(null,topic)))){
return p1__31571_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31571_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31674 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31674 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31675){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31675 = meta31675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31676,meta31675__$1){
var self__ = this;
var _31676__$1 = this;
return (new cljs.core.async.t_cljs$core$async31674(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31675__$1));
}));

(cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31676){
var self__ = this;
var _31676__$1 = this;
return self__.meta31675;
}));

(cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31675","meta31675",1512463763,null)], null);
}));

(cljs.core.async.t_cljs$core$async31674.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31674");

(cljs.core.async.t_cljs$core$async31674.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31674");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31674.
 */
cljs.core.async.__GT_t_cljs$core$async31674 = (function cljs$core$async$__GT_t_cljs$core$async31674(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31675){
return (new cljs.core.async.t_cljs$core$async31674(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31675));
});

}

return (new cljs.core.async.t_cljs$core$async31674(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29624__auto___33465 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_31777){
var state_val_31778 = (state_31777[(1)]);
if((state_val_31778 === (7))){
var inst_31773 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31780_33469 = state_31777__$1;
(statearr_31780_33469[(2)] = inst_31773);

(statearr_31780_33469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (20))){
var state_31777__$1 = state_31777;
var statearr_31781_33470 = state_31777__$1;
(statearr_31781_33470[(2)] = null);

(statearr_31781_33470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (1))){
var state_31777__$1 = state_31777;
var statearr_31782_33471 = state_31777__$1;
(statearr_31782_33471[(2)] = null);

(statearr_31782_33471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (24))){
var inst_31756 = (state_31777[(7)]);
var inst_31765 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31756);
var state_31777__$1 = state_31777;
var statearr_31784_33472 = state_31777__$1;
(statearr_31784_33472[(2)] = inst_31765);

(statearr_31784_33472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (4))){
var inst_31707 = (state_31777[(8)]);
var inst_31707__$1 = (state_31777[(2)]);
var inst_31708 = (inst_31707__$1 == null);
var state_31777__$1 = (function (){var statearr_31788 = state_31777;
(statearr_31788[(8)] = inst_31707__$1);

return statearr_31788;
})();
if(cljs.core.truth_(inst_31708)){
var statearr_31790_33473 = state_31777__$1;
(statearr_31790_33473[(1)] = (5));

} else {
var statearr_31792_33474 = state_31777__$1;
(statearr_31792_33474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (15))){
var inst_31750 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31796_33475 = state_31777__$1;
(statearr_31796_33475[(2)] = inst_31750);

(statearr_31796_33475[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (21))){
var inst_31770 = (state_31777[(2)]);
var state_31777__$1 = (function (){var statearr_31798 = state_31777;
(statearr_31798[(9)] = inst_31770);

return statearr_31798;
})();
var statearr_31799_33476 = state_31777__$1;
(statearr_31799_33476[(2)] = null);

(statearr_31799_33476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (13))){
var inst_31732 = (state_31777[(10)]);
var inst_31734 = cljs.core.chunked_seq_QMARK_(inst_31732);
var state_31777__$1 = state_31777;
if(inst_31734){
var statearr_31800_33477 = state_31777__$1;
(statearr_31800_33477[(1)] = (16));

} else {
var statearr_31801_33478 = state_31777__$1;
(statearr_31801_33478[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (22))){
var inst_31762 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
if(cljs.core.truth_(inst_31762)){
var statearr_31802_33479 = state_31777__$1;
(statearr_31802_33479[(1)] = (23));

} else {
var statearr_31803_33480 = state_31777__$1;
(statearr_31803_33480[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (6))){
var inst_31707 = (state_31777[(8)]);
var inst_31758 = (state_31777[(11)]);
var inst_31756 = (state_31777[(7)]);
var inst_31756__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31707) : topic_fn.call(null,inst_31707));
var inst_31757 = cljs.core.deref(mults);
var inst_31758__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31757,inst_31756__$1);
var state_31777__$1 = (function (){var statearr_31805 = state_31777;
(statearr_31805[(11)] = inst_31758__$1);

(statearr_31805[(7)] = inst_31756__$1);

return statearr_31805;
})();
if(cljs.core.truth_(inst_31758__$1)){
var statearr_31808_33481 = state_31777__$1;
(statearr_31808_33481[(1)] = (19));

} else {
var statearr_31809_33482 = state_31777__$1;
(statearr_31809_33482[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (25))){
var inst_31767 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31814_33483 = state_31777__$1;
(statearr_31814_33483[(2)] = inst_31767);

(statearr_31814_33483[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (17))){
var inst_31732 = (state_31777[(10)]);
var inst_31741 = cljs.core.first(inst_31732);
var inst_31742 = cljs.core.async.muxch_STAR_(inst_31741);
var inst_31743 = cljs.core.async.close_BANG_(inst_31742);
var inst_31744 = cljs.core.next(inst_31732);
var inst_31717 = inst_31744;
var inst_31718 = null;
var inst_31719 = (0);
var inst_31720 = (0);
var state_31777__$1 = (function (){var statearr_31816 = state_31777;
(statearr_31816[(12)] = inst_31720);

(statearr_31816[(13)] = inst_31717);

(statearr_31816[(14)] = inst_31718);

(statearr_31816[(15)] = inst_31743);

(statearr_31816[(16)] = inst_31719);

return statearr_31816;
})();
var statearr_31818_33492 = state_31777__$1;
(statearr_31818_33492[(2)] = null);

(statearr_31818_33492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (3))){
var inst_31775 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31777__$1,inst_31775);
} else {
if((state_val_31778 === (12))){
var inst_31752 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31820_33498 = state_31777__$1;
(statearr_31820_33498[(2)] = inst_31752);

(statearr_31820_33498[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (2))){
var state_31777__$1 = state_31777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31777__$1,(4),ch);
} else {
if((state_val_31778 === (23))){
var state_31777__$1 = state_31777;
var statearr_31831_33505 = state_31777__$1;
(statearr_31831_33505[(2)] = null);

(statearr_31831_33505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (19))){
var inst_31707 = (state_31777[(8)]);
var inst_31758 = (state_31777[(11)]);
var inst_31760 = cljs.core.async.muxch_STAR_(inst_31758);
var state_31777__$1 = state_31777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31777__$1,(22),inst_31760,inst_31707);
} else {
if((state_val_31778 === (11))){
var inst_31732 = (state_31777[(10)]);
var inst_31717 = (state_31777[(13)]);
var inst_31732__$1 = cljs.core.seq(inst_31717);
var state_31777__$1 = (function (){var statearr_31838 = state_31777;
(statearr_31838[(10)] = inst_31732__$1);

return statearr_31838;
})();
if(inst_31732__$1){
var statearr_31839_33506 = state_31777__$1;
(statearr_31839_33506[(1)] = (13));

} else {
var statearr_31844_33507 = state_31777__$1;
(statearr_31844_33507[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (9))){
var inst_31754 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31866_33508 = state_31777__$1;
(statearr_31866_33508[(2)] = inst_31754);

(statearr_31866_33508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (5))){
var inst_31714 = cljs.core.deref(mults);
var inst_31715 = cljs.core.vals(inst_31714);
var inst_31716 = cljs.core.seq(inst_31715);
var inst_31717 = inst_31716;
var inst_31718 = null;
var inst_31719 = (0);
var inst_31720 = (0);
var state_31777__$1 = (function (){var statearr_31868 = state_31777;
(statearr_31868[(12)] = inst_31720);

(statearr_31868[(13)] = inst_31717);

(statearr_31868[(14)] = inst_31718);

(statearr_31868[(16)] = inst_31719);

return statearr_31868;
})();
var statearr_31869_33510 = state_31777__$1;
(statearr_31869_33510[(2)] = null);

(statearr_31869_33510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (14))){
var state_31777__$1 = state_31777;
var statearr_31874_33511 = state_31777__$1;
(statearr_31874_33511[(2)] = null);

(statearr_31874_33511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (16))){
var inst_31732 = (state_31777[(10)]);
var inst_31736 = cljs.core.chunk_first(inst_31732);
var inst_31737 = cljs.core.chunk_rest(inst_31732);
var inst_31738 = cljs.core.count(inst_31736);
var inst_31717 = inst_31737;
var inst_31718 = inst_31736;
var inst_31719 = inst_31738;
var inst_31720 = (0);
var state_31777__$1 = (function (){var statearr_31880 = state_31777;
(statearr_31880[(12)] = inst_31720);

(statearr_31880[(13)] = inst_31717);

(statearr_31880[(14)] = inst_31718);

(statearr_31880[(16)] = inst_31719);

return statearr_31880;
})();
var statearr_31881_33519 = state_31777__$1;
(statearr_31881_33519[(2)] = null);

(statearr_31881_33519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (10))){
var inst_31720 = (state_31777[(12)]);
var inst_31717 = (state_31777[(13)]);
var inst_31718 = (state_31777[(14)]);
var inst_31719 = (state_31777[(16)]);
var inst_31726 = cljs.core._nth(inst_31718,inst_31720);
var inst_31727 = cljs.core.async.muxch_STAR_(inst_31726);
var inst_31728 = cljs.core.async.close_BANG_(inst_31727);
var inst_31729 = (inst_31720 + (1));
var tmp31870 = inst_31717;
var tmp31871 = inst_31718;
var tmp31872 = inst_31719;
var inst_31717__$1 = tmp31870;
var inst_31718__$1 = tmp31871;
var inst_31719__$1 = tmp31872;
var inst_31720__$1 = inst_31729;
var state_31777__$1 = (function (){var statearr_31882 = state_31777;
(statearr_31882[(12)] = inst_31720__$1);

(statearr_31882[(13)] = inst_31717__$1);

(statearr_31882[(14)] = inst_31718__$1);

(statearr_31882[(17)] = inst_31728);

(statearr_31882[(16)] = inst_31719__$1);

return statearr_31882;
})();
var statearr_31883_33527 = state_31777__$1;
(statearr_31883_33527[(2)] = null);

(statearr_31883_33527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (18))){
var inst_31747 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31884_33528 = state_31777__$1;
(statearr_31884_33528[(2)] = inst_31747);

(statearr_31884_33528[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (8))){
var inst_31720 = (state_31777[(12)]);
var inst_31719 = (state_31777[(16)]);
var inst_31722 = (inst_31720 < inst_31719);
var inst_31723 = inst_31722;
var state_31777__$1 = state_31777;
if(cljs.core.truth_(inst_31723)){
var statearr_31886_33532 = state_31777__$1;
(statearr_31886_33532[(1)] = (10));

} else {
var statearr_31887_33533 = state_31777__$1;
(statearr_31887_33533[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29289__auto__ = null;
var cljs$core$async$state_machine__29289__auto____0 = (function (){
var statearr_31888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31888[(0)] = cljs$core$async$state_machine__29289__auto__);

(statearr_31888[(1)] = (1));

return statearr_31888;
});
var cljs$core$async$state_machine__29289__auto____1 = (function (state_31777){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_31777);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e31889){var ex__29293__auto__ = e31889;
var statearr_31890_33534 = state_31777;
(statearr_31890_33534[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_31777[(4)]))){
var statearr_31891_33535 = state_31777;
(statearr_31891_33535[(1)] = cljs.core.first((state_31777[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33536 = state_31777;
state_31777 = G__33536;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$state_machine__29289__auto__ = function(state_31777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29289__auto____1.call(this,state_31777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29289__auto____0;
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29289__auto____1;
return cljs$core$async$state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_31892 = f__29625__auto__();
(statearr_31892[(6)] = c__29624__auto___33465);

return statearr_31892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31894 = arguments.length;
switch (G__31894) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31922 = arguments.length;
switch (G__31922) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31925 = arguments.length;
switch (G__31925) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29624__auto___33551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_31983){
var state_val_31984 = (state_31983[(1)]);
if((state_val_31984 === (7))){
var state_31983__$1 = state_31983;
var statearr_31986_33555 = state_31983__$1;
(statearr_31986_33555[(2)] = null);

(statearr_31986_33555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (1))){
var state_31983__$1 = state_31983;
var statearr_31987_33556 = state_31983__$1;
(statearr_31987_33556[(2)] = null);

(statearr_31987_33556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (4))){
var inst_31929 = (state_31983[(7)]);
var inst_31930 = (state_31983[(8)]);
var inst_31932 = (inst_31930 < inst_31929);
var state_31983__$1 = state_31983;
if(cljs.core.truth_(inst_31932)){
var statearr_31988_33560 = state_31983__$1;
(statearr_31988_33560[(1)] = (6));

} else {
var statearr_31989_33561 = state_31983__$1;
(statearr_31989_33561[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (15))){
var inst_31969 = (state_31983[(9)]);
var inst_31974 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31969);
var state_31983__$1 = state_31983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31983__$1,(17),out,inst_31974);
} else {
if((state_val_31984 === (13))){
var inst_31969 = (state_31983[(9)]);
var inst_31969__$1 = (state_31983[(2)]);
var inst_31970 = cljs.core.some(cljs.core.nil_QMARK_,inst_31969__$1);
var state_31983__$1 = (function (){var statearr_31990 = state_31983;
(statearr_31990[(9)] = inst_31969__$1);

return statearr_31990;
})();
if(cljs.core.truth_(inst_31970)){
var statearr_31991_33562 = state_31983__$1;
(statearr_31991_33562[(1)] = (14));

} else {
var statearr_31992_33563 = state_31983__$1;
(statearr_31992_33563[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (6))){
var state_31983__$1 = state_31983;
var statearr_31994_33567 = state_31983__$1;
(statearr_31994_33567[(2)] = null);

(statearr_31994_33567[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (17))){
var inst_31976 = (state_31983[(2)]);
var state_31983__$1 = (function (){var statearr_32006 = state_31983;
(statearr_32006[(10)] = inst_31976);

return statearr_32006;
})();
var statearr_32007_33568 = state_31983__$1;
(statearr_32007_33568[(2)] = null);

(statearr_32007_33568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (3))){
var inst_31981 = (state_31983[(2)]);
var state_31983__$1 = state_31983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31983__$1,inst_31981);
} else {
if((state_val_31984 === (12))){
var _ = (function (){var statearr_32008 = state_31983;
(statearr_32008[(4)] = cljs.core.rest((state_31983[(4)])));

return statearr_32008;
})();
var state_31983__$1 = state_31983;
var ex32002 = (state_31983__$1[(2)]);
var statearr_32010_33570 = state_31983__$1;
(statearr_32010_33570[(5)] = ex32002);


if((ex32002 instanceof Object)){
var statearr_32012_33574 = state_31983__$1;
(statearr_32012_33574[(1)] = (11));

(statearr_32012_33574[(5)] = null);

} else {
throw ex32002;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (2))){
var inst_31928 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31929 = cnt;
var inst_31930 = (0);
var state_31983__$1 = (function (){var statearr_32013 = state_31983;
(statearr_32013[(7)] = inst_31929);

(statearr_32013[(11)] = inst_31928);

(statearr_32013[(8)] = inst_31930);

return statearr_32013;
})();
var statearr_32014_33575 = state_31983__$1;
(statearr_32014_33575[(2)] = null);

(statearr_32014_33575[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (11))){
var inst_31943 = (state_31983[(2)]);
var inst_31944 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31983__$1 = (function (){var statearr_32015 = state_31983;
(statearr_32015[(12)] = inst_31943);

return statearr_32015;
})();
var statearr_32016_33576 = state_31983__$1;
(statearr_32016_33576[(2)] = inst_31944);

(statearr_32016_33576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (9))){
var inst_31930 = (state_31983[(8)]);
var _ = (function (){var statearr_32018 = state_31983;
(statearr_32018[(4)] = cljs.core.cons((12),(state_31983[(4)])));

return statearr_32018;
})();
var inst_31955 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31930) : chs__$1.call(null,inst_31930));
var inst_31956 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31930) : done.call(null,inst_31930));
var inst_31957 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31955,inst_31956);
var ___$1 = (function (){var statearr_32019 = state_31983;
(statearr_32019[(4)] = cljs.core.rest((state_31983[(4)])));

return statearr_32019;
})();
var state_31983__$1 = state_31983;
var statearr_32021_33577 = state_31983__$1;
(statearr_32021_33577[(2)] = inst_31957);

(statearr_32021_33577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (5))){
var inst_31967 = (state_31983[(2)]);
var state_31983__$1 = (function (){var statearr_32022 = state_31983;
(statearr_32022[(13)] = inst_31967);

return statearr_32022;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31983__$1,(13),dchan);
} else {
if((state_val_31984 === (14))){
var inst_31972 = cljs.core.async.close_BANG_(out);
var state_31983__$1 = state_31983;
var statearr_32023_33578 = state_31983__$1;
(statearr_32023_33578[(2)] = inst_31972);

(statearr_32023_33578[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (16))){
var inst_31979 = (state_31983[(2)]);
var state_31983__$1 = state_31983;
var statearr_32024_33579 = state_31983__$1;
(statearr_32024_33579[(2)] = inst_31979);

(statearr_32024_33579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (10))){
var inst_31930 = (state_31983[(8)]);
var inst_31960 = (state_31983[(2)]);
var inst_31961 = (inst_31930 + (1));
var inst_31930__$1 = inst_31961;
var state_31983__$1 = (function (){var statearr_32025 = state_31983;
(statearr_32025[(14)] = inst_31960);

(statearr_32025[(8)] = inst_31930__$1);

return statearr_32025;
})();
var statearr_32026_33581 = state_31983__$1;
(statearr_32026_33581[(2)] = null);

(statearr_32026_33581[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (8))){
var inst_31965 = (state_31983[(2)]);
var state_31983__$1 = state_31983;
var statearr_32028_33582 = state_31983__$1;
(statearr_32028_33582[(2)] = inst_31965);

(statearr_32028_33582[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29289__auto__ = null;
var cljs$core$async$state_machine__29289__auto____0 = (function (){
var statearr_32030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32030[(0)] = cljs$core$async$state_machine__29289__auto__);

(statearr_32030[(1)] = (1));

return statearr_32030;
});
var cljs$core$async$state_machine__29289__auto____1 = (function (state_31983){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_31983);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e32031){var ex__29293__auto__ = e32031;
var statearr_32032_33586 = state_31983;
(statearr_32032_33586[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_31983[(4)]))){
var statearr_32033_33587 = state_31983;
(statearr_32033_33587[(1)] = cljs.core.first((state_31983[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33588 = state_31983;
state_31983 = G__33588;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$state_machine__29289__auto__ = function(state_31983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29289__auto____1.call(this,state_31983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29289__auto____0;
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29289__auto____1;
return cljs$core$async$state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_32034 = f__29625__auto__();
(statearr_32034[(6)] = c__29624__auto___33551);

return statearr_32034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32045 = arguments.length;
switch (G__32045) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29624__auto___33591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_32094){
var state_val_32095 = (state_32094[(1)]);
if((state_val_32095 === (7))){
var inst_32058 = (state_32094[(7)]);
var inst_32059 = (state_32094[(8)]);
var inst_32058__$1 = (state_32094[(2)]);
var inst_32059__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32058__$1,(0),null);
var inst_32060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32058__$1,(1),null);
var inst_32062 = (inst_32059__$1 == null);
var state_32094__$1 = (function (){var statearr_32096 = state_32094;
(statearr_32096[(7)] = inst_32058__$1);

(statearr_32096[(8)] = inst_32059__$1);

(statearr_32096[(9)] = inst_32060);

return statearr_32096;
})();
if(cljs.core.truth_(inst_32062)){
var statearr_32097_33595 = state_32094__$1;
(statearr_32097_33595[(1)] = (8));

} else {
var statearr_32098_33596 = state_32094__$1;
(statearr_32098_33596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32095 === (1))){
var inst_32048 = cljs.core.vec(chs);
var inst_32049 = inst_32048;
var state_32094__$1 = (function (){var statearr_32100 = state_32094;
(statearr_32100[(10)] = inst_32049);

return statearr_32100;
})();
var statearr_32101_33597 = state_32094__$1;
(statearr_32101_33597[(2)] = null);

(statearr_32101_33597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32095 === (4))){
var inst_32049 = (state_32094[(10)]);
var state_32094__$1 = state_32094;
return cljs.core.async.ioc_alts_BANG_(state_32094__$1,(7),inst_32049);
} else {
if((state_val_32095 === (6))){
var inst_32085 = (state_32094[(2)]);
var state_32094__$1 = state_32094;
var statearr_32105_33598 = state_32094__$1;
(statearr_32105_33598[(2)] = inst_32085);

(statearr_32105_33598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32095 === (3))){
var inst_32087 = (state_32094[(2)]);
var state_32094__$1 = state_32094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32094__$1,inst_32087);
} else {
if((state_val_32095 === (2))){
var inst_32049 = (state_32094[(10)]);
var inst_32051 = cljs.core.count(inst_32049);
var inst_32052 = (inst_32051 > (0));
var state_32094__$1 = state_32094;
if(cljs.core.truth_(inst_32052)){
var statearr_32107_33600 = state_32094__$1;
(statearr_32107_33600[(1)] = (4));

} else {
var statearr_32108_33601 = state_32094__$1;
(statearr_32108_33601[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32095 === (11))){
var inst_32049 = (state_32094[(10)]);
var inst_32078 = (state_32094[(2)]);
var tmp32106 = inst_32049;
var inst_32049__$1 = tmp32106;
var state_32094__$1 = (function (){var statearr_32111 = state_32094;
(statearr_32111[(11)] = inst_32078);

(statearr_32111[(10)] = inst_32049__$1);

return statearr_32111;
})();
var statearr_32112_33602 = state_32094__$1;
(statearr_32112_33602[(2)] = null);

(statearr_32112_33602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32095 === (9))){
var inst_32059 = (state_32094[(8)]);
var state_32094__$1 = state_32094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32094__$1,(11),out,inst_32059);
} else {
if((state_val_32095 === (5))){
var inst_32083 = cljs.core.async.close_BANG_(out);
var state_32094__$1 = state_32094;
var statearr_32115_33603 = state_32094__$1;
(statearr_32115_33603[(2)] = inst_32083);

(statearr_32115_33603[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32095 === (10))){
var inst_32081 = (state_32094[(2)]);
var state_32094__$1 = state_32094;
var statearr_32116_33605 = state_32094__$1;
(statearr_32116_33605[(2)] = inst_32081);

(statearr_32116_33605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32095 === (8))){
var inst_32049 = (state_32094[(10)]);
var inst_32058 = (state_32094[(7)]);
var inst_32059 = (state_32094[(8)]);
var inst_32060 = (state_32094[(9)]);
var inst_32069 = (function (){var cs = inst_32049;
var vec__32054 = inst_32058;
var v = inst_32059;
var c = inst_32060;
return (function (p1__32036_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32036_SHARP_);
});
})();
var inst_32070 = cljs.core.filterv(inst_32069,inst_32049);
var inst_32049__$1 = inst_32070;
var state_32094__$1 = (function (){var statearr_32118 = state_32094;
(statearr_32118[(10)] = inst_32049__$1);

return statearr_32118;
})();
var statearr_32119_33606 = state_32094__$1;
(statearr_32119_33606[(2)] = null);

(statearr_32119_33606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29289__auto__ = null;
var cljs$core$async$state_machine__29289__auto____0 = (function (){
var statearr_32120 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32120[(0)] = cljs$core$async$state_machine__29289__auto__);

(statearr_32120[(1)] = (1));

return statearr_32120;
});
var cljs$core$async$state_machine__29289__auto____1 = (function (state_32094){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_32094);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e32125){var ex__29293__auto__ = e32125;
var statearr_32128_33607 = state_32094;
(statearr_32128_33607[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_32094[(4)]))){
var statearr_32129_33608 = state_32094;
(statearr_32129_33608[(1)] = cljs.core.first((state_32094[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33609 = state_32094;
state_32094 = G__33609;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$state_machine__29289__auto__ = function(state_32094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29289__auto____1.call(this,state_32094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29289__auto____0;
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29289__auto____1;
return cljs$core$async$state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_32136 = f__29625__auto__();
(statearr_32136[(6)] = c__29624__auto___33591);

return statearr_32136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32146 = arguments.length;
switch (G__32146) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29624__auto___33611 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_32186){
var state_val_32187 = (state_32186[(1)]);
if((state_val_32187 === (7))){
var inst_32166 = (state_32186[(7)]);
var inst_32166__$1 = (state_32186[(2)]);
var inst_32167 = (inst_32166__$1 == null);
var inst_32168 = cljs.core.not(inst_32167);
var state_32186__$1 = (function (){var statearr_32192 = state_32186;
(statearr_32192[(7)] = inst_32166__$1);

return statearr_32192;
})();
if(inst_32168){
var statearr_32193_33612 = state_32186__$1;
(statearr_32193_33612[(1)] = (8));

} else {
var statearr_32195_33613 = state_32186__$1;
(statearr_32195_33613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (1))){
var inst_32159 = (0);
var state_32186__$1 = (function (){var statearr_32198 = state_32186;
(statearr_32198[(8)] = inst_32159);

return statearr_32198;
})();
var statearr_32199_33614 = state_32186__$1;
(statearr_32199_33614[(2)] = null);

(statearr_32199_33614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (4))){
var state_32186__$1 = state_32186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32186__$1,(7),ch);
} else {
if((state_val_32187 === (6))){
var inst_32181 = (state_32186[(2)]);
var state_32186__$1 = state_32186;
var statearr_32201_33615 = state_32186__$1;
(statearr_32201_33615[(2)] = inst_32181);

(statearr_32201_33615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (3))){
var inst_32183 = (state_32186[(2)]);
var inst_32184 = cljs.core.async.close_BANG_(out);
var state_32186__$1 = (function (){var statearr_32202 = state_32186;
(statearr_32202[(9)] = inst_32183);

return statearr_32202;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32186__$1,inst_32184);
} else {
if((state_val_32187 === (2))){
var inst_32159 = (state_32186[(8)]);
var inst_32161 = (inst_32159 < n);
var state_32186__$1 = state_32186;
if(cljs.core.truth_(inst_32161)){
var statearr_32203_33616 = state_32186__$1;
(statearr_32203_33616[(1)] = (4));

} else {
var statearr_32208_33617 = state_32186__$1;
(statearr_32208_33617[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (11))){
var inst_32159 = (state_32186[(8)]);
var inst_32173 = (state_32186[(2)]);
var inst_32174 = (inst_32159 + (1));
var inst_32159__$1 = inst_32174;
var state_32186__$1 = (function (){var statearr_32212 = state_32186;
(statearr_32212[(10)] = inst_32173);

(statearr_32212[(8)] = inst_32159__$1);

return statearr_32212;
})();
var statearr_32214_33618 = state_32186__$1;
(statearr_32214_33618[(2)] = null);

(statearr_32214_33618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (9))){
var state_32186__$1 = state_32186;
var statearr_32218_33619 = state_32186__$1;
(statearr_32218_33619[(2)] = null);

(statearr_32218_33619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (5))){
var state_32186__$1 = state_32186;
var statearr_32245_33620 = state_32186__$1;
(statearr_32245_33620[(2)] = null);

(statearr_32245_33620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (10))){
var inst_32178 = (state_32186[(2)]);
var state_32186__$1 = state_32186;
var statearr_32248_33621 = state_32186__$1;
(statearr_32248_33621[(2)] = inst_32178);

(statearr_32248_33621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (8))){
var inst_32166 = (state_32186[(7)]);
var state_32186__$1 = state_32186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32186__$1,(11),out,inst_32166);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29289__auto__ = null;
var cljs$core$async$state_machine__29289__auto____0 = (function (){
var statearr_32251 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32251[(0)] = cljs$core$async$state_machine__29289__auto__);

(statearr_32251[(1)] = (1));

return statearr_32251;
});
var cljs$core$async$state_machine__29289__auto____1 = (function (state_32186){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_32186);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e32252){var ex__29293__auto__ = e32252;
var statearr_32253_33627 = state_32186;
(statearr_32253_33627[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_32186[(4)]))){
var statearr_32258_33628 = state_32186;
(statearr_32258_33628[(1)] = cljs.core.first((state_32186[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33630 = state_32186;
state_32186 = G__33630;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$state_machine__29289__auto__ = function(state_32186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29289__auto____1.call(this,state_32186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29289__auto____0;
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29289__auto____1;
return cljs$core$async$state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_32262 = f__29625__auto__();
(statearr_32262[(6)] = c__29624__auto___33611);

return statearr_32262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32269 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32269 = (function (f,ch,meta32270){
this.f = f;
this.ch = ch;
this.meta32270 = meta32270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32271,meta32270__$1){
var self__ = this;
var _32271__$1 = this;
return (new cljs.core.async.t_cljs$core$async32269(self__.f,self__.ch,meta32270__$1));
}));

(cljs.core.async.t_cljs$core$async32269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32271){
var self__ = this;
var _32271__$1 = this;
return self__.meta32270;
}));

(cljs.core.async.t_cljs$core$async32269.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32269.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32269.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32269.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32269.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32287 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32287 = (function (f,ch,meta32270,_,fn1,meta32288){
this.f = f;
this.ch = ch;
this.meta32270 = meta32270;
this._ = _;
this.fn1 = fn1;
this.meta32288 = meta32288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32289,meta32288__$1){
var self__ = this;
var _32289__$1 = this;
return (new cljs.core.async.t_cljs$core$async32287(self__.f,self__.ch,self__.meta32270,self__._,self__.fn1,meta32288__$1));
}));

(cljs.core.async.t_cljs$core$async32287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32289){
var self__ = this;
var _32289__$1 = this;
return self__.meta32288;
}));

(cljs.core.async.t_cljs$core$async32287.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32287.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32287.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32287.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32266_SHARP_){
var G__32301 = (((p1__32266_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32266_SHARP_) : self__.f.call(null,p1__32266_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32301) : f1.call(null,G__32301));
});
}));

(cljs.core.async.t_cljs$core$async32287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32270","meta32270",-1319375408,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32269","cljs.core.async/t_cljs$core$async32269",1072557004,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32288","meta32288",1948576753,null)], null);
}));

(cljs.core.async.t_cljs$core$async32287.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32287");

(cljs.core.async.t_cljs$core$async32287.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32287");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32287.
 */
cljs.core.async.__GT_t_cljs$core$async32287 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32287(f__$1,ch__$1,meta32270__$1,___$2,fn1__$1,meta32288){
return (new cljs.core.async.t_cljs$core$async32287(f__$1,ch__$1,meta32270__$1,___$2,fn1__$1,meta32288));
});

}

return (new cljs.core.async.t_cljs$core$async32287(self__.f,self__.ch,self__.meta32270,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32322 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32322) : self__.f.call(null,G__32322));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32269.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32269.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32270","meta32270",-1319375408,null)], null);
}));

(cljs.core.async.t_cljs$core$async32269.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32269");

(cljs.core.async.t_cljs$core$async32269.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32269");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32269.
 */
cljs.core.async.__GT_t_cljs$core$async32269 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32269(f__$1,ch__$1,meta32270){
return (new cljs.core.async.t_cljs$core$async32269(f__$1,ch__$1,meta32270));
});

}

return (new cljs.core.async.t_cljs$core$async32269(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32343 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32343 = (function (f,ch,meta32344){
this.f = f;
this.ch = ch;
this.meta32344 = meta32344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32345,meta32344__$1){
var self__ = this;
var _32345__$1 = this;
return (new cljs.core.async.t_cljs$core$async32343(self__.f,self__.ch,meta32344__$1));
}));

(cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32345){
var self__ = this;
var _32345__$1 = this;
return self__.meta32344;
}));

(cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32344","meta32344",1587303047,null)], null);
}));

(cljs.core.async.t_cljs$core$async32343.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32343");

(cljs.core.async.t_cljs$core$async32343.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32343");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32343.
 */
cljs.core.async.__GT_t_cljs$core$async32343 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32343(f__$1,ch__$1,meta32344){
return (new cljs.core.async.t_cljs$core$async32343(f__$1,ch__$1,meta32344));
});

}

return (new cljs.core.async.t_cljs$core$async32343(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32380 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32380 = (function (p,ch,meta32381){
this.p = p;
this.ch = ch;
this.meta32381 = meta32381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32382,meta32381__$1){
var self__ = this;
var _32382__$1 = this;
return (new cljs.core.async.t_cljs$core$async32380(self__.p,self__.ch,meta32381__$1));
}));

(cljs.core.async.t_cljs$core$async32380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32382){
var self__ = this;
var _32382__$1 = this;
return self__.meta32381;
}));

(cljs.core.async.t_cljs$core$async32380.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32380.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32380.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32380.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32380.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32380.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32380.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32381","meta32381",601996610,null)], null);
}));

(cljs.core.async.t_cljs$core$async32380.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32380");

(cljs.core.async.t_cljs$core$async32380.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32380");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32380.
 */
cljs.core.async.__GT_t_cljs$core$async32380 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32380(p__$1,ch__$1,meta32381){
return (new cljs.core.async.t_cljs$core$async32380(p__$1,ch__$1,meta32381));
});

}

return (new cljs.core.async.t_cljs$core$async32380(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32390 = arguments.length;
switch (G__32390) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29624__auto___33644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_32421){
var state_val_32422 = (state_32421[(1)]);
if((state_val_32422 === (7))){
var inst_32413 = (state_32421[(2)]);
var state_32421__$1 = state_32421;
var statearr_32427_33645 = state_32421__$1;
(statearr_32427_33645[(2)] = inst_32413);

(statearr_32427_33645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (1))){
var state_32421__$1 = state_32421;
var statearr_32428_33646 = state_32421__$1;
(statearr_32428_33646[(2)] = null);

(statearr_32428_33646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (4))){
var inst_32395 = (state_32421[(7)]);
var inst_32395__$1 = (state_32421[(2)]);
var inst_32396 = (inst_32395__$1 == null);
var state_32421__$1 = (function (){var statearr_32429 = state_32421;
(statearr_32429[(7)] = inst_32395__$1);

return statearr_32429;
})();
if(cljs.core.truth_(inst_32396)){
var statearr_32430_33647 = state_32421__$1;
(statearr_32430_33647[(1)] = (5));

} else {
var statearr_32431_33648 = state_32421__$1;
(statearr_32431_33648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (6))){
var inst_32395 = (state_32421[(7)]);
var inst_32400 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32395) : p.call(null,inst_32395));
var state_32421__$1 = state_32421;
if(cljs.core.truth_(inst_32400)){
var statearr_32432_33649 = state_32421__$1;
(statearr_32432_33649[(1)] = (8));

} else {
var statearr_32433_33650 = state_32421__$1;
(statearr_32433_33650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (3))){
var inst_32415 = (state_32421[(2)]);
var state_32421__$1 = state_32421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32421__$1,inst_32415);
} else {
if((state_val_32422 === (2))){
var state_32421__$1 = state_32421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32421__$1,(4),ch);
} else {
if((state_val_32422 === (11))){
var inst_32407 = (state_32421[(2)]);
var state_32421__$1 = state_32421;
var statearr_32435_33651 = state_32421__$1;
(statearr_32435_33651[(2)] = inst_32407);

(statearr_32435_33651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (9))){
var state_32421__$1 = state_32421;
var statearr_32436_33655 = state_32421__$1;
(statearr_32436_33655[(2)] = null);

(statearr_32436_33655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (5))){
var inst_32398 = cljs.core.async.close_BANG_(out);
var state_32421__$1 = state_32421;
var statearr_32437_33656 = state_32421__$1;
(statearr_32437_33656[(2)] = inst_32398);

(statearr_32437_33656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (10))){
var inst_32410 = (state_32421[(2)]);
var state_32421__$1 = (function (){var statearr_32438 = state_32421;
(statearr_32438[(8)] = inst_32410);

return statearr_32438;
})();
var statearr_32439_33659 = state_32421__$1;
(statearr_32439_33659[(2)] = null);

(statearr_32439_33659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (8))){
var inst_32395 = (state_32421[(7)]);
var state_32421__$1 = state_32421;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32421__$1,(11),out,inst_32395);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29289__auto__ = null;
var cljs$core$async$state_machine__29289__auto____0 = (function (){
var statearr_32441 = [null,null,null,null,null,null,null,null,null];
(statearr_32441[(0)] = cljs$core$async$state_machine__29289__auto__);

(statearr_32441[(1)] = (1));

return statearr_32441;
});
var cljs$core$async$state_machine__29289__auto____1 = (function (state_32421){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_32421);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e32443){var ex__29293__auto__ = e32443;
var statearr_32444_33663 = state_32421;
(statearr_32444_33663[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_32421[(4)]))){
var statearr_32445_33664 = state_32421;
(statearr_32445_33664[(1)] = cljs.core.first((state_32421[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33666 = state_32421;
state_32421 = G__33666;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$state_machine__29289__auto__ = function(state_32421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29289__auto____1.call(this,state_32421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29289__auto____0;
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29289__auto____1;
return cljs$core$async$state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_32446 = f__29625__auto__();
(statearr_32446[(6)] = c__29624__auto___33644);

return statearr_32446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32448 = arguments.length;
switch (G__32448) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29624__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_32512){
var state_val_32513 = (state_32512[(1)]);
if((state_val_32513 === (7))){
var inst_32508 = (state_32512[(2)]);
var state_32512__$1 = state_32512;
var statearr_32514_33669 = state_32512__$1;
(statearr_32514_33669[(2)] = inst_32508);

(statearr_32514_33669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (20))){
var inst_32477 = (state_32512[(7)]);
var inst_32489 = (state_32512[(2)]);
var inst_32490 = cljs.core.next(inst_32477);
var inst_32463 = inst_32490;
var inst_32464 = null;
var inst_32465 = (0);
var inst_32466 = (0);
var state_32512__$1 = (function (){var statearr_32516 = state_32512;
(statearr_32516[(8)] = inst_32465);

(statearr_32516[(9)] = inst_32464);

(statearr_32516[(10)] = inst_32466);

(statearr_32516[(11)] = inst_32489);

(statearr_32516[(12)] = inst_32463);

return statearr_32516;
})();
var statearr_32517_33670 = state_32512__$1;
(statearr_32517_33670[(2)] = null);

(statearr_32517_33670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (1))){
var state_32512__$1 = state_32512;
var statearr_32518_33672 = state_32512__$1;
(statearr_32518_33672[(2)] = null);

(statearr_32518_33672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (4))){
var inst_32452 = (state_32512[(13)]);
var inst_32452__$1 = (state_32512[(2)]);
var inst_32453 = (inst_32452__$1 == null);
var state_32512__$1 = (function (){var statearr_32519 = state_32512;
(statearr_32519[(13)] = inst_32452__$1);

return statearr_32519;
})();
if(cljs.core.truth_(inst_32453)){
var statearr_32520_33677 = state_32512__$1;
(statearr_32520_33677[(1)] = (5));

} else {
var statearr_32521_33678 = state_32512__$1;
(statearr_32521_33678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (15))){
var state_32512__$1 = state_32512;
var statearr_32525_33679 = state_32512__$1;
(statearr_32525_33679[(2)] = null);

(statearr_32525_33679[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (21))){
var state_32512__$1 = state_32512;
var statearr_32527_33680 = state_32512__$1;
(statearr_32527_33680[(2)] = null);

(statearr_32527_33680[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (13))){
var inst_32465 = (state_32512[(8)]);
var inst_32464 = (state_32512[(9)]);
var inst_32466 = (state_32512[(10)]);
var inst_32463 = (state_32512[(12)]);
var inst_32473 = (state_32512[(2)]);
var inst_32474 = (inst_32466 + (1));
var tmp32522 = inst_32465;
var tmp32523 = inst_32464;
var tmp32524 = inst_32463;
var inst_32463__$1 = tmp32524;
var inst_32464__$1 = tmp32523;
var inst_32465__$1 = tmp32522;
var inst_32466__$1 = inst_32474;
var state_32512__$1 = (function (){var statearr_32528 = state_32512;
(statearr_32528[(8)] = inst_32465__$1);

(statearr_32528[(9)] = inst_32464__$1);

(statearr_32528[(14)] = inst_32473);

(statearr_32528[(10)] = inst_32466__$1);

(statearr_32528[(12)] = inst_32463__$1);

return statearr_32528;
})();
var statearr_32529_33681 = state_32512__$1;
(statearr_32529_33681[(2)] = null);

(statearr_32529_33681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (22))){
var state_32512__$1 = state_32512;
var statearr_32530_33682 = state_32512__$1;
(statearr_32530_33682[(2)] = null);

(statearr_32530_33682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (6))){
var inst_32452 = (state_32512[(13)]);
var inst_32461 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32452) : f.call(null,inst_32452));
var inst_32462 = cljs.core.seq(inst_32461);
var inst_32463 = inst_32462;
var inst_32464 = null;
var inst_32465 = (0);
var inst_32466 = (0);
var state_32512__$1 = (function (){var statearr_32531 = state_32512;
(statearr_32531[(8)] = inst_32465);

(statearr_32531[(9)] = inst_32464);

(statearr_32531[(10)] = inst_32466);

(statearr_32531[(12)] = inst_32463);

return statearr_32531;
})();
var statearr_32533_33684 = state_32512__$1;
(statearr_32533_33684[(2)] = null);

(statearr_32533_33684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (17))){
var inst_32477 = (state_32512[(7)]);
var inst_32482 = cljs.core.chunk_first(inst_32477);
var inst_32483 = cljs.core.chunk_rest(inst_32477);
var inst_32484 = cljs.core.count(inst_32482);
var inst_32463 = inst_32483;
var inst_32464 = inst_32482;
var inst_32465 = inst_32484;
var inst_32466 = (0);
var state_32512__$1 = (function (){var statearr_32534 = state_32512;
(statearr_32534[(8)] = inst_32465);

(statearr_32534[(9)] = inst_32464);

(statearr_32534[(10)] = inst_32466);

(statearr_32534[(12)] = inst_32463);

return statearr_32534;
})();
var statearr_32535_33685 = state_32512__$1;
(statearr_32535_33685[(2)] = null);

(statearr_32535_33685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (3))){
var inst_32510 = (state_32512[(2)]);
var state_32512__$1 = state_32512;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32512__$1,inst_32510);
} else {
if((state_val_32513 === (12))){
var inst_32498 = (state_32512[(2)]);
var state_32512__$1 = state_32512;
var statearr_32536_33689 = state_32512__$1;
(statearr_32536_33689[(2)] = inst_32498);

(statearr_32536_33689[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (2))){
var state_32512__$1 = state_32512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32512__$1,(4),in$);
} else {
if((state_val_32513 === (23))){
var inst_32506 = (state_32512[(2)]);
var state_32512__$1 = state_32512;
var statearr_32537_33690 = state_32512__$1;
(statearr_32537_33690[(2)] = inst_32506);

(statearr_32537_33690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (19))){
var inst_32493 = (state_32512[(2)]);
var state_32512__$1 = state_32512;
var statearr_32539_33691 = state_32512__$1;
(statearr_32539_33691[(2)] = inst_32493);

(statearr_32539_33691[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (11))){
var inst_32477 = (state_32512[(7)]);
var inst_32463 = (state_32512[(12)]);
var inst_32477__$1 = cljs.core.seq(inst_32463);
var state_32512__$1 = (function (){var statearr_32540 = state_32512;
(statearr_32540[(7)] = inst_32477__$1);

return statearr_32540;
})();
if(inst_32477__$1){
var statearr_32541_33692 = state_32512__$1;
(statearr_32541_33692[(1)] = (14));

} else {
var statearr_32542_33693 = state_32512__$1;
(statearr_32542_33693[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (9))){
var inst_32500 = (state_32512[(2)]);
var inst_32501 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32512__$1 = (function (){var statearr_32543 = state_32512;
(statearr_32543[(15)] = inst_32500);

return statearr_32543;
})();
if(cljs.core.truth_(inst_32501)){
var statearr_32544_33694 = state_32512__$1;
(statearr_32544_33694[(1)] = (21));

} else {
var statearr_32545_33695 = state_32512__$1;
(statearr_32545_33695[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (5))){
var inst_32455 = cljs.core.async.close_BANG_(out);
var state_32512__$1 = state_32512;
var statearr_32546_33696 = state_32512__$1;
(statearr_32546_33696[(2)] = inst_32455);

(statearr_32546_33696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (14))){
var inst_32477 = (state_32512[(7)]);
var inst_32480 = cljs.core.chunked_seq_QMARK_(inst_32477);
var state_32512__$1 = state_32512;
if(inst_32480){
var statearr_32547_33697 = state_32512__$1;
(statearr_32547_33697[(1)] = (17));

} else {
var statearr_32548_33698 = state_32512__$1;
(statearr_32548_33698[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (16))){
var inst_32496 = (state_32512[(2)]);
var state_32512__$1 = state_32512;
var statearr_32549_33699 = state_32512__$1;
(statearr_32549_33699[(2)] = inst_32496);

(statearr_32549_33699[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (10))){
var inst_32464 = (state_32512[(9)]);
var inst_32466 = (state_32512[(10)]);
var inst_32471 = cljs.core._nth(inst_32464,inst_32466);
var state_32512__$1 = state_32512;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32512__$1,(13),out,inst_32471);
} else {
if((state_val_32513 === (18))){
var inst_32477 = (state_32512[(7)]);
var inst_32487 = cljs.core.first(inst_32477);
var state_32512__$1 = state_32512;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32512__$1,(20),out,inst_32487);
} else {
if((state_val_32513 === (8))){
var inst_32465 = (state_32512[(8)]);
var inst_32466 = (state_32512[(10)]);
var inst_32468 = (inst_32466 < inst_32465);
var inst_32469 = inst_32468;
var state_32512__$1 = state_32512;
if(cljs.core.truth_(inst_32469)){
var statearr_32551_33704 = state_32512__$1;
(statearr_32551_33704[(1)] = (10));

} else {
var statearr_32552_33705 = state_32512__$1;
(statearr_32552_33705[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29289__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29289__auto____0 = (function (){
var statearr_32553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32553[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29289__auto__);

(statearr_32553[(1)] = (1));

return statearr_32553;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29289__auto____1 = (function (state_32512){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_32512);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e32554){var ex__29293__auto__ = e32554;
var statearr_32555_33706 = state_32512;
(statearr_32555_33706[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_32512[(4)]))){
var statearr_32556_33707 = state_32512;
(statearr_32556_33707[(1)] = cljs.core.first((state_32512[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33708 = state_32512;
state_32512 = G__33708;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29289__auto__ = function(state_32512){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29289__auto____1.call(this,state_32512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29289__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29289__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_32557 = f__29625__auto__();
(statearr_32557[(6)] = c__29624__auto__);

return statearr_32557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));

return c__29624__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32560 = arguments.length;
switch (G__32560) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32563 = arguments.length;
switch (G__32563) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32567 = arguments.length;
switch (G__32567) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29624__auto___33717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_32591){
var state_val_32592 = (state_32591[(1)]);
if((state_val_32592 === (7))){
var inst_32586 = (state_32591[(2)]);
var state_32591__$1 = state_32591;
var statearr_32593_33718 = state_32591__$1;
(statearr_32593_33718[(2)] = inst_32586);

(statearr_32593_33718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (1))){
var inst_32568 = null;
var state_32591__$1 = (function (){var statearr_32596 = state_32591;
(statearr_32596[(7)] = inst_32568);

return statearr_32596;
})();
var statearr_32597_33719 = state_32591__$1;
(statearr_32597_33719[(2)] = null);

(statearr_32597_33719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (4))){
var inst_32571 = (state_32591[(8)]);
var inst_32571__$1 = (state_32591[(2)]);
var inst_32572 = (inst_32571__$1 == null);
var inst_32573 = cljs.core.not(inst_32572);
var state_32591__$1 = (function (){var statearr_32598 = state_32591;
(statearr_32598[(8)] = inst_32571__$1);

return statearr_32598;
})();
if(inst_32573){
var statearr_32599_33720 = state_32591__$1;
(statearr_32599_33720[(1)] = (5));

} else {
var statearr_32600_33721 = state_32591__$1;
(statearr_32600_33721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (6))){
var state_32591__$1 = state_32591;
var statearr_32601_33722 = state_32591__$1;
(statearr_32601_33722[(2)] = null);

(statearr_32601_33722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (3))){
var inst_32588 = (state_32591[(2)]);
var inst_32589 = cljs.core.async.close_BANG_(out);
var state_32591__$1 = (function (){var statearr_32602 = state_32591;
(statearr_32602[(9)] = inst_32588);

return statearr_32602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32591__$1,inst_32589);
} else {
if((state_val_32592 === (2))){
var state_32591__$1 = state_32591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32591__$1,(4),ch);
} else {
if((state_val_32592 === (11))){
var inst_32571 = (state_32591[(8)]);
var inst_32580 = (state_32591[(2)]);
var inst_32568 = inst_32571;
var state_32591__$1 = (function (){var statearr_32603 = state_32591;
(statearr_32603[(7)] = inst_32568);

(statearr_32603[(10)] = inst_32580);

return statearr_32603;
})();
var statearr_32604_33723 = state_32591__$1;
(statearr_32604_33723[(2)] = null);

(statearr_32604_33723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (9))){
var inst_32571 = (state_32591[(8)]);
var state_32591__$1 = state_32591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32591__$1,(11),out,inst_32571);
} else {
if((state_val_32592 === (5))){
var inst_32568 = (state_32591[(7)]);
var inst_32571 = (state_32591[(8)]);
var inst_32575 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32571,inst_32568);
var state_32591__$1 = state_32591;
if(inst_32575){
var statearr_32608_33724 = state_32591__$1;
(statearr_32608_33724[(1)] = (8));

} else {
var statearr_32609_33725 = state_32591__$1;
(statearr_32609_33725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (10))){
var inst_32583 = (state_32591[(2)]);
var state_32591__$1 = state_32591;
var statearr_32610_33726 = state_32591__$1;
(statearr_32610_33726[(2)] = inst_32583);

(statearr_32610_33726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (8))){
var inst_32568 = (state_32591[(7)]);
var tmp32605 = inst_32568;
var inst_32568__$1 = tmp32605;
var state_32591__$1 = (function (){var statearr_32611 = state_32591;
(statearr_32611[(7)] = inst_32568__$1);

return statearr_32611;
})();
var statearr_32612_33727 = state_32591__$1;
(statearr_32612_33727[(2)] = null);

(statearr_32612_33727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29289__auto__ = null;
var cljs$core$async$state_machine__29289__auto____0 = (function (){
var statearr_32613 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32613[(0)] = cljs$core$async$state_machine__29289__auto__);

(statearr_32613[(1)] = (1));

return statearr_32613;
});
var cljs$core$async$state_machine__29289__auto____1 = (function (state_32591){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_32591);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e32617){var ex__29293__auto__ = e32617;
var statearr_32618_33728 = state_32591;
(statearr_32618_33728[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_32591[(4)]))){
var statearr_32619_33729 = state_32591;
(statearr_32619_33729[(1)] = cljs.core.first((state_32591[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33730 = state_32591;
state_32591 = G__33730;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$state_machine__29289__auto__ = function(state_32591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29289__auto____1.call(this,state_32591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29289__auto____0;
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29289__auto____1;
return cljs$core$async$state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_32623 = f__29625__auto__();
(statearr_32623[(6)] = c__29624__auto___33717);

return statearr_32623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32628 = arguments.length;
switch (G__32628) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29624__auto___33736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_32690){
var state_val_32691 = (state_32690[(1)]);
if((state_val_32691 === (7))){
var inst_32686 = (state_32690[(2)]);
var state_32690__$1 = state_32690;
var statearr_32693_33738 = state_32690__$1;
(statearr_32693_33738[(2)] = inst_32686);

(statearr_32693_33738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (1))){
var inst_32649 = (new Array(n));
var inst_32650 = inst_32649;
var inst_32651 = (0);
var state_32690__$1 = (function (){var statearr_32697 = state_32690;
(statearr_32697[(7)] = inst_32650);

(statearr_32697[(8)] = inst_32651);

return statearr_32697;
})();
var statearr_32699_33739 = state_32690__$1;
(statearr_32699_33739[(2)] = null);

(statearr_32699_33739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (4))){
var inst_32654 = (state_32690[(9)]);
var inst_32654__$1 = (state_32690[(2)]);
var inst_32655 = (inst_32654__$1 == null);
var inst_32656 = cljs.core.not(inst_32655);
var state_32690__$1 = (function (){var statearr_32703 = state_32690;
(statearr_32703[(9)] = inst_32654__$1);

return statearr_32703;
})();
if(inst_32656){
var statearr_32704_33740 = state_32690__$1;
(statearr_32704_33740[(1)] = (5));

} else {
var statearr_32706_33741 = state_32690__$1;
(statearr_32706_33741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (15))){
var inst_32680 = (state_32690[(2)]);
var state_32690__$1 = state_32690;
var statearr_32710_33743 = state_32690__$1;
(statearr_32710_33743[(2)] = inst_32680);

(statearr_32710_33743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (13))){
var state_32690__$1 = state_32690;
var statearr_32712_33744 = state_32690__$1;
(statearr_32712_33744[(2)] = null);

(statearr_32712_33744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (6))){
var inst_32651 = (state_32690[(8)]);
var inst_32676 = (inst_32651 > (0));
var state_32690__$1 = state_32690;
if(cljs.core.truth_(inst_32676)){
var statearr_32716_33746 = state_32690__$1;
(statearr_32716_33746[(1)] = (12));

} else {
var statearr_32717_33747 = state_32690__$1;
(statearr_32717_33747[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (3))){
var inst_32688 = (state_32690[(2)]);
var state_32690__$1 = state_32690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32690__$1,inst_32688);
} else {
if((state_val_32691 === (12))){
var inst_32650 = (state_32690[(7)]);
var inst_32678 = cljs.core.vec(inst_32650);
var state_32690__$1 = state_32690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32690__$1,(15),out,inst_32678);
} else {
if((state_val_32691 === (2))){
var state_32690__$1 = state_32690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32690__$1,(4),ch);
} else {
if((state_val_32691 === (11))){
var inst_32669 = (state_32690[(2)]);
var inst_32670 = (new Array(n));
var inst_32650 = inst_32670;
var inst_32651 = (0);
var state_32690__$1 = (function (){var statearr_32723 = state_32690;
(statearr_32723[(10)] = inst_32669);

(statearr_32723[(7)] = inst_32650);

(statearr_32723[(8)] = inst_32651);

return statearr_32723;
})();
var statearr_32724_33749 = state_32690__$1;
(statearr_32724_33749[(2)] = null);

(statearr_32724_33749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (9))){
var inst_32650 = (state_32690[(7)]);
var inst_32667 = cljs.core.vec(inst_32650);
var state_32690__$1 = state_32690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32690__$1,(11),out,inst_32667);
} else {
if((state_val_32691 === (5))){
var inst_32654 = (state_32690[(9)]);
var inst_32650 = (state_32690[(7)]);
var inst_32651 = (state_32690[(8)]);
var inst_32660 = (state_32690[(11)]);
var inst_32659 = (inst_32650[inst_32651] = inst_32654);
var inst_32660__$1 = (inst_32651 + (1));
var inst_32661 = (inst_32660__$1 < n);
var state_32690__$1 = (function (){var statearr_32726 = state_32690;
(statearr_32726[(12)] = inst_32659);

(statearr_32726[(11)] = inst_32660__$1);

return statearr_32726;
})();
if(cljs.core.truth_(inst_32661)){
var statearr_32728_33757 = state_32690__$1;
(statearr_32728_33757[(1)] = (8));

} else {
var statearr_32730_33758 = state_32690__$1;
(statearr_32730_33758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (14))){
var inst_32683 = (state_32690[(2)]);
var inst_32684 = cljs.core.async.close_BANG_(out);
var state_32690__$1 = (function (){var statearr_32733 = state_32690;
(statearr_32733[(13)] = inst_32683);

return statearr_32733;
})();
var statearr_32734_33759 = state_32690__$1;
(statearr_32734_33759[(2)] = inst_32684);

(statearr_32734_33759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (10))){
var inst_32674 = (state_32690[(2)]);
var state_32690__$1 = state_32690;
var statearr_32738_33760 = state_32690__$1;
(statearr_32738_33760[(2)] = inst_32674);

(statearr_32738_33760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (8))){
var inst_32650 = (state_32690[(7)]);
var inst_32660 = (state_32690[(11)]);
var tmp32731 = inst_32650;
var inst_32650__$1 = tmp32731;
var inst_32651 = inst_32660;
var state_32690__$1 = (function (){var statearr_32740 = state_32690;
(statearr_32740[(7)] = inst_32650__$1);

(statearr_32740[(8)] = inst_32651);

return statearr_32740;
})();
var statearr_32741_33761 = state_32690__$1;
(statearr_32741_33761[(2)] = null);

(statearr_32741_33761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29289__auto__ = null;
var cljs$core$async$state_machine__29289__auto____0 = (function (){
var statearr_32745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32745[(0)] = cljs$core$async$state_machine__29289__auto__);

(statearr_32745[(1)] = (1));

return statearr_32745;
});
var cljs$core$async$state_machine__29289__auto____1 = (function (state_32690){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_32690);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e32747){var ex__29293__auto__ = e32747;
var statearr_32750_33762 = state_32690;
(statearr_32750_33762[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_32690[(4)]))){
var statearr_32752_33763 = state_32690;
(statearr_32752_33763[(1)] = cljs.core.first((state_32690[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33764 = state_32690;
state_32690 = G__33764;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$state_machine__29289__auto__ = function(state_32690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29289__auto____1.call(this,state_32690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29289__auto____0;
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29289__auto____1;
return cljs$core$async$state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_32755 = f__29625__auto__();
(statearr_32755[(6)] = c__29624__auto___33736);

return statearr_32755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32757 = arguments.length;
switch (G__32757) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29624__auto___33766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29625__auto__ = (function (){var switch__29288__auto__ = (function (state_32803){
var state_val_32804 = (state_32803[(1)]);
if((state_val_32804 === (7))){
var inst_32799 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
var statearr_32805_33767 = state_32803__$1;
(statearr_32805_33767[(2)] = inst_32799);

(statearr_32805_33767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (1))){
var inst_32759 = [];
var inst_32760 = inst_32759;
var inst_32761 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32803__$1 = (function (){var statearr_32807 = state_32803;
(statearr_32807[(7)] = inst_32761);

(statearr_32807[(8)] = inst_32760);

return statearr_32807;
})();
var statearr_32808_33768 = state_32803__$1;
(statearr_32808_33768[(2)] = null);

(statearr_32808_33768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (4))){
var inst_32764 = (state_32803[(9)]);
var inst_32764__$1 = (state_32803[(2)]);
var inst_32765 = (inst_32764__$1 == null);
var inst_32766 = cljs.core.not(inst_32765);
var state_32803__$1 = (function (){var statearr_32809 = state_32803;
(statearr_32809[(9)] = inst_32764__$1);

return statearr_32809;
})();
if(inst_32766){
var statearr_32812_33769 = state_32803__$1;
(statearr_32812_33769[(1)] = (5));

} else {
var statearr_32814_33770 = state_32803__$1;
(statearr_32814_33770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (15))){
var inst_32760 = (state_32803[(8)]);
var inst_32791 = cljs.core.vec(inst_32760);
var state_32803__$1 = state_32803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32803__$1,(18),out,inst_32791);
} else {
if((state_val_32804 === (13))){
var inst_32786 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
var statearr_32818_33771 = state_32803__$1;
(statearr_32818_33771[(2)] = inst_32786);

(statearr_32818_33771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (6))){
var inst_32760 = (state_32803[(8)]);
var inst_32788 = inst_32760.length;
var inst_32789 = (inst_32788 > (0));
var state_32803__$1 = state_32803;
if(cljs.core.truth_(inst_32789)){
var statearr_32821_33772 = state_32803__$1;
(statearr_32821_33772[(1)] = (15));

} else {
var statearr_32822_33773 = state_32803__$1;
(statearr_32822_33773[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (17))){
var inst_32796 = (state_32803[(2)]);
var inst_32797 = cljs.core.async.close_BANG_(out);
var state_32803__$1 = (function (){var statearr_32826 = state_32803;
(statearr_32826[(10)] = inst_32796);

return statearr_32826;
})();
var statearr_32827_33774 = state_32803__$1;
(statearr_32827_33774[(2)] = inst_32797);

(statearr_32827_33774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (3))){
var inst_32801 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32803__$1,inst_32801);
} else {
if((state_val_32804 === (12))){
var inst_32760 = (state_32803[(8)]);
var inst_32779 = cljs.core.vec(inst_32760);
var state_32803__$1 = state_32803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32803__$1,(14),out,inst_32779);
} else {
if((state_val_32804 === (2))){
var state_32803__$1 = state_32803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32803__$1,(4),ch);
} else {
if((state_val_32804 === (11))){
var inst_32764 = (state_32803[(9)]);
var inst_32768 = (state_32803[(11)]);
var inst_32760 = (state_32803[(8)]);
var inst_32776 = inst_32760.push(inst_32764);
var tmp32829 = inst_32760;
var inst_32760__$1 = tmp32829;
var inst_32761 = inst_32768;
var state_32803__$1 = (function (){var statearr_32835 = state_32803;
(statearr_32835[(7)] = inst_32761);

(statearr_32835[(12)] = inst_32776);

(statearr_32835[(8)] = inst_32760__$1);

return statearr_32835;
})();
var statearr_32838_33775 = state_32803__$1;
(statearr_32838_33775[(2)] = null);

(statearr_32838_33775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (9))){
var inst_32761 = (state_32803[(7)]);
var inst_32772 = cljs.core.keyword_identical_QMARK_(inst_32761,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32803__$1 = state_32803;
var statearr_32840_33776 = state_32803__$1;
(statearr_32840_33776[(2)] = inst_32772);

(statearr_32840_33776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (5))){
var inst_32761 = (state_32803[(7)]);
var inst_32769 = (state_32803[(13)]);
var inst_32764 = (state_32803[(9)]);
var inst_32768 = (state_32803[(11)]);
var inst_32768__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32764) : f.call(null,inst_32764));
var inst_32769__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32768__$1,inst_32761);
var state_32803__$1 = (function (){var statearr_32845 = state_32803;
(statearr_32845[(13)] = inst_32769__$1);

(statearr_32845[(11)] = inst_32768__$1);

return statearr_32845;
})();
if(inst_32769__$1){
var statearr_32847_33777 = state_32803__$1;
(statearr_32847_33777[(1)] = (8));

} else {
var statearr_32849_33778 = state_32803__$1;
(statearr_32849_33778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (14))){
var inst_32764 = (state_32803[(9)]);
var inst_32768 = (state_32803[(11)]);
var inst_32781 = (state_32803[(2)]);
var inst_32782 = [];
var inst_32783 = inst_32782.push(inst_32764);
var inst_32760 = inst_32782;
var inst_32761 = inst_32768;
var state_32803__$1 = (function (){var statearr_32853 = state_32803;
(statearr_32853[(7)] = inst_32761);

(statearr_32853[(14)] = inst_32783);

(statearr_32853[(15)] = inst_32781);

(statearr_32853[(8)] = inst_32760);

return statearr_32853;
})();
var statearr_32854_33779 = state_32803__$1;
(statearr_32854_33779[(2)] = null);

(statearr_32854_33779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (16))){
var state_32803__$1 = state_32803;
var statearr_32861_33780 = state_32803__$1;
(statearr_32861_33780[(2)] = null);

(statearr_32861_33780[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (10))){
var inst_32774 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
if(cljs.core.truth_(inst_32774)){
var statearr_32863_33781 = state_32803__$1;
(statearr_32863_33781[(1)] = (11));

} else {
var statearr_32864_33782 = state_32803__$1;
(statearr_32864_33782[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (18))){
var inst_32793 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
var statearr_32866_33783 = state_32803__$1;
(statearr_32866_33783[(2)] = inst_32793);

(statearr_32866_33783[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (8))){
var inst_32769 = (state_32803[(13)]);
var state_32803__$1 = state_32803;
var statearr_32881_33784 = state_32803__$1;
(statearr_32881_33784[(2)] = inst_32769);

(statearr_32881_33784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29289__auto__ = null;
var cljs$core$async$state_machine__29289__auto____0 = (function (){
var statearr_32883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32883[(0)] = cljs$core$async$state_machine__29289__auto__);

(statearr_32883[(1)] = (1));

return statearr_32883;
});
var cljs$core$async$state_machine__29289__auto____1 = (function (state_32803){
while(true){
var ret_value__29290__auto__ = (function (){try{while(true){
var result__29291__auto__ = switch__29288__auto__(state_32803);
if(cljs.core.keyword_identical_QMARK_(result__29291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29291__auto__;
}
break;
}
}catch (e32888){var ex__29293__auto__ = e32888;
var statearr_32889_33786 = state_32803;
(statearr_32889_33786[(2)] = ex__29293__auto__);


if(cljs.core.seq((state_32803[(4)]))){
var statearr_32892_33787 = state_32803;
(statearr_32892_33787[(1)] = cljs.core.first((state_32803[(4)])));

} else {
throw ex__29293__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33791 = state_32803;
state_32803 = G__33791;
continue;
} else {
return ret_value__29290__auto__;
}
break;
}
});
cljs$core$async$state_machine__29289__auto__ = function(state_32803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29289__auto____1.call(this,state_32803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29289__auto____0;
cljs$core$async$state_machine__29289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29289__auto____1;
return cljs$core$async$state_machine__29289__auto__;
})()
})();
var state__29626__auto__ = (function (){var statearr_32896 = f__29625__auto__();
(statearr_32896[(6)] = c__29624__auto___33766);

return statearr_32896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29626__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
