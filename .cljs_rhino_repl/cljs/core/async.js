// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__73612 = arguments.length;
switch (G__73612) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async73613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73613 = (function (f,blockable,meta73614){
this.f = f;
this.blockable = blockable;
this.meta73614 = meta73614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async73613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73615,meta73614__$1){
var self__ = this;
var _73615__$1 = this;
return (new cljs.core.async.t_cljs$core$async73613(self__.f,self__.blockable,meta73614__$1));
});

cljs.core.async.t_cljs$core$async73613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73615){
var self__ = this;
var _73615__$1 = this;
return self__.meta73614;
});

cljs.core.async.t_cljs$core$async73613.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async73613.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async73613.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async73613.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async73613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta73614","meta73614",1578237781,null)], null);
});

cljs.core.async.t_cljs$core$async73613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async73613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73613";

cljs.core.async.t_cljs$core$async73613.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async73613");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73613.
 */
cljs.core.async.__GT_t_cljs$core$async73613 = (function cljs$core$async$__GT_t_cljs$core$async73613(f__$1,blockable__$1,meta73614){
return (new cljs.core.async.t_cljs$core$async73613(f__$1,blockable__$1,meta73614));
});

}

return (new cljs.core.async.t_cljs$core$async73613(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__73619 = arguments.length;
switch (G__73619) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__73622 = arguments.length;
switch (G__73622) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__73625 = arguments.length;
switch (G__73625) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_73627 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_73627);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_73627,ret){
return (function (){
return fn1.call(null,val_73627);
});})(val_73627,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__73629 = arguments.length;
switch (G__73629) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___73631 = n;
var x_73632 = (0);
while(true){
if((x_73632 < n__4376__auto___73631)){
(a[x_73632] = (0));

var G__73633 = (x_73632 + (1));
x_73632 = G__73633;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__73634 = (i + (1));
i = G__73634;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async73635 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73635 = (function (flag,meta73636){
this.flag = flag;
this.meta73636 = meta73636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async73635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_73637,meta73636__$1){
var self__ = this;
var _73637__$1 = this;
return (new cljs.core.async.t_cljs$core$async73635(self__.flag,meta73636__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async73635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_73637){
var self__ = this;
var _73637__$1 = this;
return self__.meta73636;
});})(flag))
;

cljs.core.async.t_cljs$core$async73635.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async73635.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async73635.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async73635.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async73635.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta73636","meta73636",-1469557883,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async73635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async73635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73635";

cljs.core.async.t_cljs$core$async73635.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async73635");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73635.
 */
cljs.core.async.__GT_t_cljs$core$async73635 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async73635(flag__$1,meta73636){
return (new cljs.core.async.t_cljs$core$async73635(flag__$1,meta73636));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async73635(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async73638 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73638 = (function (flag,cb,meta73639){
this.flag = flag;
this.cb = cb;
this.meta73639 = meta73639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async73638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73640,meta73639__$1){
var self__ = this;
var _73640__$1 = this;
return (new cljs.core.async.t_cljs$core$async73638(self__.flag,self__.cb,meta73639__$1));
});

cljs.core.async.t_cljs$core$async73638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73640){
var self__ = this;
var _73640__$1 = this;
return self__.meta73639;
});

cljs.core.async.t_cljs$core$async73638.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async73638.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async73638.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async73638.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async73638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta73639","meta73639",978936979,null)], null);
});

cljs.core.async.t_cljs$core$async73638.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async73638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73638";

cljs.core.async.t_cljs$core$async73638.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async73638");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73638.
 */
cljs.core.async.__GT_t_cljs$core$async73638 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async73638(flag__$1,cb__$1,meta73639){
return (new cljs.core.async.t_cljs$core$async73638(flag__$1,cb__$1,meta73639));
});

}

return (new cljs.core.async.t_cljs$core$async73638(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__73641_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__73641_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__73642_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__73642_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__73643 = (i + (1));
i = G__73643;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4502__auto__ = [];
var len__4499__auto___73649 = arguments.length;
var i__4500__auto___73650 = (0);
while(true){
if((i__4500__auto___73650 < len__4499__auto___73649)){
args__4502__auto__.push((arguments[i__4500__auto___73650]));

var G__73651 = (i__4500__auto___73650 + (1));
i__4500__auto___73650 = G__73651;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__73646){
var map__73647 = p__73646;
var map__73647__$1 = ((((!((map__73647 == null)))?(((((map__73647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73647):map__73647);
var opts = map__73647__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq73644){
var G__73645 = cljs.core.first.call(null,seq73644);
var seq73644__$1 = cljs.core.next.call(null,seq73644);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73645,seq73644__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__73653 = arguments.length;
switch (G__73653) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__67205__auto___73699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67205__auto___73699){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (c__67205__auto___73699){
return (function (state_73677){
var state_val_73678 = (state_73677[(1)]);
if((state_val_73678 === (7))){
var inst_73673 = (state_73677[(2)]);
var state_73677__$1 = state_73677;
var statearr_73679_73700 = state_73677__$1;
(statearr_73679_73700[(2)] = inst_73673);

(statearr_73679_73700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73678 === (1))){
var state_73677__$1 = state_73677;
var statearr_73680_73701 = state_73677__$1;
(statearr_73680_73701[(2)] = null);

(statearr_73680_73701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73678 === (4))){
var inst_73656 = (state_73677[(7)]);
var inst_73656__$1 = (state_73677[(2)]);
var inst_73657 = (inst_73656__$1 == null);
var state_73677__$1 = (function (){var statearr_73681 = state_73677;
(statearr_73681[(7)] = inst_73656__$1);

return statearr_73681;
})();
if(cljs.core.truth_(inst_73657)){
var statearr_73682_73702 = state_73677__$1;
(statearr_73682_73702[(1)] = (5));

} else {
var statearr_73683_73703 = state_73677__$1;
(statearr_73683_73703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73678 === (13))){
var state_73677__$1 = state_73677;
var statearr_73684_73704 = state_73677__$1;
(statearr_73684_73704[(2)] = null);

(statearr_73684_73704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73678 === (6))){
var inst_73656 = (state_73677[(7)]);
var state_73677__$1 = state_73677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73677__$1,(11),to,inst_73656);
} else {
if((state_val_73678 === (3))){
var inst_73675 = (state_73677[(2)]);
var state_73677__$1 = state_73677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73677__$1,inst_73675);
} else {
if((state_val_73678 === (12))){
var state_73677__$1 = state_73677;
var statearr_73685_73705 = state_73677__$1;
(statearr_73685_73705[(2)] = null);

(statearr_73685_73705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73678 === (2))){
var state_73677__$1 = state_73677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73677__$1,(4),from);
} else {
if((state_val_73678 === (11))){
var inst_73666 = (state_73677[(2)]);
var state_73677__$1 = state_73677;
if(cljs.core.truth_(inst_73666)){
var statearr_73686_73706 = state_73677__$1;
(statearr_73686_73706[(1)] = (12));

} else {
var statearr_73687_73707 = state_73677__$1;
(statearr_73687_73707[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73678 === (9))){
var state_73677__$1 = state_73677;
var statearr_73688_73708 = state_73677__$1;
(statearr_73688_73708[(2)] = null);

(statearr_73688_73708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73678 === (5))){
var state_73677__$1 = state_73677;
if(cljs.core.truth_(close_QMARK_)){
var statearr_73689_73709 = state_73677__$1;
(statearr_73689_73709[(1)] = (8));

} else {
var statearr_73690_73710 = state_73677__$1;
(statearr_73690_73710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73678 === (14))){
var inst_73671 = (state_73677[(2)]);
var state_73677__$1 = state_73677;
var statearr_73691_73711 = state_73677__$1;
(statearr_73691_73711[(2)] = inst_73671);

(statearr_73691_73711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73678 === (10))){
var inst_73663 = (state_73677[(2)]);
var state_73677__$1 = state_73677;
var statearr_73692_73712 = state_73677__$1;
(statearr_73692_73712[(2)] = inst_73663);

(statearr_73692_73712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73678 === (8))){
var inst_73660 = cljs.core.async.close_BANG_.call(null,to);
var state_73677__$1 = state_73677;
var statearr_73693_73713 = state_73677__$1;
(statearr_73693_73713[(2)] = inst_73660);

(statearr_73693_73713[(1)] = (10));


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
});})(c__67205__auto___73699))
;
return ((function (switch__67159__auto__,c__67205__auto___73699){
return (function() {
var cljs$core$async$state_machine__67160__auto__ = null;
var cljs$core$async$state_machine__67160__auto____0 = (function (){
var statearr_73694 = [null,null,null,null,null,null,null,null];
(statearr_73694[(0)] = cljs$core$async$state_machine__67160__auto__);

(statearr_73694[(1)] = (1));

return statearr_73694;
});
var cljs$core$async$state_machine__67160__auto____1 = (function (state_73677){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_73677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e73695){if((e73695 instanceof Object)){
var ex__67163__auto__ = e73695;
var statearr_73696_73714 = state_73677;
(statearr_73696_73714[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73715 = state_73677;
state_73677 = G__73715;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$state_machine__67160__auto__ = function(state_73677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67160__auto____1.call(this,state_73677);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67160__auto____0;
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67160__auto____1;
return cljs$core$async$state_machine__67160__auto__;
})()
;})(switch__67159__auto__,c__67205__auto___73699))
})();
var state__67207__auto__ = (function (){var statearr_73697 = f__67206__auto__.call(null);
(statearr_73697[(6)] = c__67205__auto___73699);

return statearr_73697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(c__67205__auto___73699))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__73716){
var vec__73717 = p__73716;
var v = cljs.core.nth.call(null,vec__73717,(0),null);
var p = cljs.core.nth.call(null,vec__73717,(1),null);
var job = vec__73717;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__67205__auto___73888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67205__auto___73888,res,vec__73717,v,p,job,jobs,results){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (c__67205__auto___73888,res,vec__73717,v,p,job,jobs,results){
return (function (state_73724){
var state_val_73725 = (state_73724[(1)]);
if((state_val_73725 === (1))){
var state_73724__$1 = state_73724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73724__$1,(2),res,v);
} else {
if((state_val_73725 === (2))){
var inst_73721 = (state_73724[(2)]);
var inst_73722 = cljs.core.async.close_BANG_.call(null,res);
var state_73724__$1 = (function (){var statearr_73726 = state_73724;
(statearr_73726[(7)] = inst_73721);

return statearr_73726;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73724__$1,inst_73722);
} else {
return null;
}
}
});})(c__67205__auto___73888,res,vec__73717,v,p,job,jobs,results))
;
return ((function (switch__67159__auto__,c__67205__auto___73888,res,vec__73717,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____0 = (function (){
var statearr_73727 = [null,null,null,null,null,null,null,null];
(statearr_73727[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__);

(statearr_73727[(1)] = (1));

return statearr_73727;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____1 = (function (state_73724){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_73724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e73728){if((e73728 instanceof Object)){
var ex__67163__auto__ = e73728;
var statearr_73729_73889 = state_73724;
(statearr_73729_73889[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73890 = state_73724;
state_73724 = G__73890;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__ = function(state_73724){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____1.call(this,state_73724);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__;
})()
;})(switch__67159__auto__,c__67205__auto___73888,res,vec__73717,v,p,job,jobs,results))
})();
var state__67207__auto__ = (function (){var statearr_73730 = f__67206__auto__.call(null);
(statearr_73730[(6)] = c__67205__auto___73888);

return statearr_73730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(c__67205__auto___73888,res,vec__73717,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__73731){
var vec__73732 = p__73731;
var v = cljs.core.nth.call(null,vec__73732,(0),null);
var p = cljs.core.nth.call(null,vec__73732,(1),null);
var job = vec__73732;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___73891 = n;
var __73892 = (0);
while(true){
if((__73892 < n__4376__auto___73891)){
var G__73735_73893 = type;
var G__73735_73894__$1 = (((G__73735_73893 instanceof cljs.core.Keyword))?G__73735_73893.fqn:null);
switch (G__73735_73894__$1) {
case "compute":
var c__67205__auto___73896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__73892,c__67205__auto___73896,G__73735_73893,G__73735_73894__$1,n__4376__auto___73891,jobs,results,process,async){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (__73892,c__67205__auto___73896,G__73735_73893,G__73735_73894__$1,n__4376__auto___73891,jobs,results,process,async){
return (function (state_73748){
var state_val_73749 = (state_73748[(1)]);
if((state_val_73749 === (1))){
var state_73748__$1 = state_73748;
var statearr_73750_73897 = state_73748__$1;
(statearr_73750_73897[(2)] = null);

(statearr_73750_73897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73749 === (2))){
var state_73748__$1 = state_73748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73748__$1,(4),jobs);
} else {
if((state_val_73749 === (3))){
var inst_73746 = (state_73748[(2)]);
var state_73748__$1 = state_73748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73748__$1,inst_73746);
} else {
if((state_val_73749 === (4))){
var inst_73738 = (state_73748[(2)]);
var inst_73739 = process.call(null,inst_73738);
var state_73748__$1 = state_73748;
if(cljs.core.truth_(inst_73739)){
var statearr_73751_73898 = state_73748__$1;
(statearr_73751_73898[(1)] = (5));

} else {
var statearr_73752_73899 = state_73748__$1;
(statearr_73752_73899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73749 === (5))){
var state_73748__$1 = state_73748;
var statearr_73753_73900 = state_73748__$1;
(statearr_73753_73900[(2)] = null);

(statearr_73753_73900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73749 === (6))){
var state_73748__$1 = state_73748;
var statearr_73754_73901 = state_73748__$1;
(statearr_73754_73901[(2)] = null);

(statearr_73754_73901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73749 === (7))){
var inst_73744 = (state_73748[(2)]);
var state_73748__$1 = state_73748;
var statearr_73755_73902 = state_73748__$1;
(statearr_73755_73902[(2)] = inst_73744);

(statearr_73755_73902[(1)] = (3));


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
});})(__73892,c__67205__auto___73896,G__73735_73893,G__73735_73894__$1,n__4376__auto___73891,jobs,results,process,async))
;
return ((function (__73892,switch__67159__auto__,c__67205__auto___73896,G__73735_73893,G__73735_73894__$1,n__4376__auto___73891,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____0 = (function (){
var statearr_73756 = [null,null,null,null,null,null,null];
(statearr_73756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__);

(statearr_73756[(1)] = (1));

return statearr_73756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____1 = (function (state_73748){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_73748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e73757){if((e73757 instanceof Object)){
var ex__67163__auto__ = e73757;
var statearr_73758_73903 = state_73748;
(statearr_73758_73903[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73904 = state_73748;
state_73748 = G__73904;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__ = function(state_73748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____1.call(this,state_73748);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__;
})()
;})(__73892,switch__67159__auto__,c__67205__auto___73896,G__73735_73893,G__73735_73894__$1,n__4376__auto___73891,jobs,results,process,async))
})();
var state__67207__auto__ = (function (){var statearr_73759 = f__67206__auto__.call(null);
(statearr_73759[(6)] = c__67205__auto___73896);

return statearr_73759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(__73892,c__67205__auto___73896,G__73735_73893,G__73735_73894__$1,n__4376__auto___73891,jobs,results,process,async))
);


break;
case "async":
var c__67205__auto___73905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__73892,c__67205__auto___73905,G__73735_73893,G__73735_73894__$1,n__4376__auto___73891,jobs,results,process,async){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (__73892,c__67205__auto___73905,G__73735_73893,G__73735_73894__$1,n__4376__auto___73891,jobs,results,process,async){
return (function (state_73772){
var state_val_73773 = (state_73772[(1)]);
if((state_val_73773 === (1))){
var state_73772__$1 = state_73772;
var statearr_73774_73906 = state_73772__$1;
(statearr_73774_73906[(2)] = null);

(statearr_73774_73906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73773 === (2))){
var state_73772__$1 = state_73772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73772__$1,(4),jobs);
} else {
if((state_val_73773 === (3))){
var inst_73770 = (state_73772[(2)]);
var state_73772__$1 = state_73772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73772__$1,inst_73770);
} else {
if((state_val_73773 === (4))){
var inst_73762 = (state_73772[(2)]);
var inst_73763 = async.call(null,inst_73762);
var state_73772__$1 = state_73772;
if(cljs.core.truth_(inst_73763)){
var statearr_73775_73907 = state_73772__$1;
(statearr_73775_73907[(1)] = (5));

} else {
var statearr_73776_73908 = state_73772__$1;
(statearr_73776_73908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73773 === (5))){
var state_73772__$1 = state_73772;
var statearr_73777_73909 = state_73772__$1;
(statearr_73777_73909[(2)] = null);

(statearr_73777_73909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73773 === (6))){
var state_73772__$1 = state_73772;
var statearr_73778_73910 = state_73772__$1;
(statearr_73778_73910[(2)] = null);

(statearr_73778_73910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73773 === (7))){
var inst_73768 = (state_73772[(2)]);
var state_73772__$1 = state_73772;
var statearr_73779_73911 = state_73772__$1;
(statearr_73779_73911[(2)] = inst_73768);

(statearr_73779_73911[(1)] = (3));


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
});})(__73892,c__67205__auto___73905,G__73735_73893,G__73735_73894__$1,n__4376__auto___73891,jobs,results,process,async))
;
return ((function (__73892,switch__67159__auto__,c__67205__auto___73905,G__73735_73893,G__73735_73894__$1,n__4376__auto___73891,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____0 = (function (){
var statearr_73780 = [null,null,null,null,null,null,null];
(statearr_73780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__);

(statearr_73780[(1)] = (1));

return statearr_73780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____1 = (function (state_73772){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_73772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e73781){if((e73781 instanceof Object)){
var ex__67163__auto__ = e73781;
var statearr_73782_73912 = state_73772;
(statearr_73782_73912[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73913 = state_73772;
state_73772 = G__73913;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__ = function(state_73772){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____1.call(this,state_73772);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__;
})()
;})(__73892,switch__67159__auto__,c__67205__auto___73905,G__73735_73893,G__73735_73894__$1,n__4376__auto___73891,jobs,results,process,async))
})();
var state__67207__auto__ = (function (){var statearr_73783 = f__67206__auto__.call(null);
(statearr_73783[(6)] = c__67205__auto___73905);

return statearr_73783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(__73892,c__67205__auto___73905,G__73735_73893,G__73735_73894__$1,n__4376__auto___73891,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73735_73894__$1)].join('')));

}

var G__73914 = (__73892 + (1));
__73892 = G__73914;
continue;
} else {
}
break;
}

var c__67205__auto___73915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67205__auto___73915,jobs,results,process,async){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (c__67205__auto___73915,jobs,results,process,async){
return (function (state_73805){
var state_val_73806 = (state_73805[(1)]);
if((state_val_73806 === (1))){
var state_73805__$1 = state_73805;
var statearr_73807_73916 = state_73805__$1;
(statearr_73807_73916[(2)] = null);

(statearr_73807_73916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73806 === (2))){
var state_73805__$1 = state_73805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73805__$1,(4),from);
} else {
if((state_val_73806 === (3))){
var inst_73803 = (state_73805[(2)]);
var state_73805__$1 = state_73805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73805__$1,inst_73803);
} else {
if((state_val_73806 === (4))){
var inst_73786 = (state_73805[(7)]);
var inst_73786__$1 = (state_73805[(2)]);
var inst_73787 = (inst_73786__$1 == null);
var state_73805__$1 = (function (){var statearr_73808 = state_73805;
(statearr_73808[(7)] = inst_73786__$1);

return statearr_73808;
})();
if(cljs.core.truth_(inst_73787)){
var statearr_73809_73917 = state_73805__$1;
(statearr_73809_73917[(1)] = (5));

} else {
var statearr_73810_73918 = state_73805__$1;
(statearr_73810_73918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73806 === (5))){
var inst_73789 = cljs.core.async.close_BANG_.call(null,jobs);
var state_73805__$1 = state_73805;
var statearr_73811_73919 = state_73805__$1;
(statearr_73811_73919[(2)] = inst_73789);

(statearr_73811_73919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73806 === (6))){
var inst_73786 = (state_73805[(7)]);
var inst_73791 = (state_73805[(8)]);
var inst_73791__$1 = cljs.core.async.chan.call(null,(1));
var inst_73792 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73793 = [inst_73786,inst_73791__$1];
var inst_73794 = (new cljs.core.PersistentVector(null,2,(5),inst_73792,inst_73793,null));
var state_73805__$1 = (function (){var statearr_73812 = state_73805;
(statearr_73812[(8)] = inst_73791__$1);

return statearr_73812;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73805__$1,(8),jobs,inst_73794);
} else {
if((state_val_73806 === (7))){
var inst_73801 = (state_73805[(2)]);
var state_73805__$1 = state_73805;
var statearr_73813_73920 = state_73805__$1;
(statearr_73813_73920[(2)] = inst_73801);

(statearr_73813_73920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73806 === (8))){
var inst_73791 = (state_73805[(8)]);
var inst_73796 = (state_73805[(2)]);
var state_73805__$1 = (function (){var statearr_73814 = state_73805;
(statearr_73814[(9)] = inst_73796);

return statearr_73814;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73805__$1,(9),results,inst_73791);
} else {
if((state_val_73806 === (9))){
var inst_73798 = (state_73805[(2)]);
var state_73805__$1 = (function (){var statearr_73815 = state_73805;
(statearr_73815[(10)] = inst_73798);

return statearr_73815;
})();
var statearr_73816_73921 = state_73805__$1;
(statearr_73816_73921[(2)] = null);

(statearr_73816_73921[(1)] = (2));


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
});})(c__67205__auto___73915,jobs,results,process,async))
;
return ((function (switch__67159__auto__,c__67205__auto___73915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____0 = (function (){
var statearr_73817 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_73817[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__);

(statearr_73817[(1)] = (1));

return statearr_73817;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____1 = (function (state_73805){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_73805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e73818){if((e73818 instanceof Object)){
var ex__67163__auto__ = e73818;
var statearr_73819_73922 = state_73805;
(statearr_73819_73922[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73923 = state_73805;
state_73805 = G__73923;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__ = function(state_73805){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____1.call(this,state_73805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__;
})()
;})(switch__67159__auto__,c__67205__auto___73915,jobs,results,process,async))
})();
var state__67207__auto__ = (function (){var statearr_73820 = f__67206__auto__.call(null);
(statearr_73820[(6)] = c__67205__auto___73915);

return statearr_73820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(c__67205__auto___73915,jobs,results,process,async))
);


var c__67205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67205__auto__,jobs,results,process,async){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (c__67205__auto__,jobs,results,process,async){
return (function (state_73858){
var state_val_73859 = (state_73858[(1)]);
if((state_val_73859 === (7))){
var inst_73854 = (state_73858[(2)]);
var state_73858__$1 = state_73858;
var statearr_73860_73924 = state_73858__$1;
(statearr_73860_73924[(2)] = inst_73854);

(statearr_73860_73924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73859 === (20))){
var state_73858__$1 = state_73858;
var statearr_73861_73925 = state_73858__$1;
(statearr_73861_73925[(2)] = null);

(statearr_73861_73925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73859 === (1))){
var state_73858__$1 = state_73858;
var statearr_73862_73926 = state_73858__$1;
(statearr_73862_73926[(2)] = null);

(statearr_73862_73926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73859 === (4))){
var inst_73823 = (state_73858[(7)]);
var inst_73823__$1 = (state_73858[(2)]);
var inst_73824 = (inst_73823__$1 == null);
var state_73858__$1 = (function (){var statearr_73863 = state_73858;
(statearr_73863[(7)] = inst_73823__$1);

return statearr_73863;
})();
if(cljs.core.truth_(inst_73824)){
var statearr_73864_73927 = state_73858__$1;
(statearr_73864_73927[(1)] = (5));

} else {
var statearr_73865_73928 = state_73858__$1;
(statearr_73865_73928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73859 === (15))){
var inst_73836 = (state_73858[(8)]);
var state_73858__$1 = state_73858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73858__$1,(18),to,inst_73836);
} else {
if((state_val_73859 === (21))){
var inst_73849 = (state_73858[(2)]);
var state_73858__$1 = state_73858;
var statearr_73866_73929 = state_73858__$1;
(statearr_73866_73929[(2)] = inst_73849);

(statearr_73866_73929[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73859 === (13))){
var inst_73851 = (state_73858[(2)]);
var state_73858__$1 = (function (){var statearr_73867 = state_73858;
(statearr_73867[(9)] = inst_73851);

return statearr_73867;
})();
var statearr_73868_73930 = state_73858__$1;
(statearr_73868_73930[(2)] = null);

(statearr_73868_73930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73859 === (6))){
var inst_73823 = (state_73858[(7)]);
var state_73858__$1 = state_73858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73858__$1,(11),inst_73823);
} else {
if((state_val_73859 === (17))){
var inst_73844 = (state_73858[(2)]);
var state_73858__$1 = state_73858;
if(cljs.core.truth_(inst_73844)){
var statearr_73869_73931 = state_73858__$1;
(statearr_73869_73931[(1)] = (19));

} else {
var statearr_73870_73932 = state_73858__$1;
(statearr_73870_73932[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73859 === (3))){
var inst_73856 = (state_73858[(2)]);
var state_73858__$1 = state_73858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73858__$1,inst_73856);
} else {
if((state_val_73859 === (12))){
var inst_73833 = (state_73858[(10)]);
var state_73858__$1 = state_73858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73858__$1,(14),inst_73833);
} else {
if((state_val_73859 === (2))){
var state_73858__$1 = state_73858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73858__$1,(4),results);
} else {
if((state_val_73859 === (19))){
var state_73858__$1 = state_73858;
var statearr_73871_73933 = state_73858__$1;
(statearr_73871_73933[(2)] = null);

(statearr_73871_73933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73859 === (11))){
var inst_73833 = (state_73858[(2)]);
var state_73858__$1 = (function (){var statearr_73872 = state_73858;
(statearr_73872[(10)] = inst_73833);

return statearr_73872;
})();
var statearr_73873_73934 = state_73858__$1;
(statearr_73873_73934[(2)] = null);

(statearr_73873_73934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73859 === (9))){
var state_73858__$1 = state_73858;
var statearr_73874_73935 = state_73858__$1;
(statearr_73874_73935[(2)] = null);

(statearr_73874_73935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73859 === (5))){
var state_73858__$1 = state_73858;
if(cljs.core.truth_(close_QMARK_)){
var statearr_73875_73936 = state_73858__$1;
(statearr_73875_73936[(1)] = (8));

} else {
var statearr_73876_73937 = state_73858__$1;
(statearr_73876_73937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73859 === (14))){
var inst_73838 = (state_73858[(11)]);
var inst_73836 = (state_73858[(8)]);
var inst_73836__$1 = (state_73858[(2)]);
var inst_73837 = (inst_73836__$1 == null);
var inst_73838__$1 = cljs.core.not.call(null,inst_73837);
var state_73858__$1 = (function (){var statearr_73877 = state_73858;
(statearr_73877[(11)] = inst_73838__$1);

(statearr_73877[(8)] = inst_73836__$1);

return statearr_73877;
})();
if(inst_73838__$1){
var statearr_73878_73938 = state_73858__$1;
(statearr_73878_73938[(1)] = (15));

} else {
var statearr_73879_73939 = state_73858__$1;
(statearr_73879_73939[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73859 === (16))){
var inst_73838 = (state_73858[(11)]);
var state_73858__$1 = state_73858;
var statearr_73880_73940 = state_73858__$1;
(statearr_73880_73940[(2)] = inst_73838);

(statearr_73880_73940[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73859 === (10))){
var inst_73830 = (state_73858[(2)]);
var state_73858__$1 = state_73858;
var statearr_73881_73941 = state_73858__$1;
(statearr_73881_73941[(2)] = inst_73830);

(statearr_73881_73941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73859 === (18))){
var inst_73841 = (state_73858[(2)]);
var state_73858__$1 = state_73858;
var statearr_73882_73942 = state_73858__$1;
(statearr_73882_73942[(2)] = inst_73841);

(statearr_73882_73942[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73859 === (8))){
var inst_73827 = cljs.core.async.close_BANG_.call(null,to);
var state_73858__$1 = state_73858;
var statearr_73883_73943 = state_73858__$1;
(statearr_73883_73943[(2)] = inst_73827);

(statearr_73883_73943[(1)] = (10));


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
});})(c__67205__auto__,jobs,results,process,async))
;
return ((function (switch__67159__auto__,c__67205__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____0 = (function (){
var statearr_73884 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73884[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__);

(statearr_73884[(1)] = (1));

return statearr_73884;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____1 = (function (state_73858){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_73858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e73885){if((e73885 instanceof Object)){
var ex__67163__auto__ = e73885;
var statearr_73886_73944 = state_73858;
(statearr_73886_73944[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73945 = state_73858;
state_73858 = G__73945;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__ = function(state_73858){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____1.call(this,state_73858);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67160__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67160__auto__;
})()
;})(switch__67159__auto__,c__67205__auto__,jobs,results,process,async))
})();
var state__67207__auto__ = (function (){var statearr_73887 = f__67206__auto__.call(null);
(statearr_73887[(6)] = c__67205__auto__);

return statearr_73887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(c__67205__auto__,jobs,results,process,async))
);

return c__67205__auto__;
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
var G__73947 = arguments.length;
switch (G__73947) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__73950 = arguments.length;
switch (G__73950) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__73953 = arguments.length;
switch (G__73953) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__67205__auto___74002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67205__auto___74002,tc,fc){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (c__67205__auto___74002,tc,fc){
return (function (state_73979){
var state_val_73980 = (state_73979[(1)]);
if((state_val_73980 === (7))){
var inst_73975 = (state_73979[(2)]);
var state_73979__$1 = state_73979;
var statearr_73981_74003 = state_73979__$1;
(statearr_73981_74003[(2)] = inst_73975);

(statearr_73981_74003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73980 === (1))){
var state_73979__$1 = state_73979;
var statearr_73982_74004 = state_73979__$1;
(statearr_73982_74004[(2)] = null);

(statearr_73982_74004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73980 === (4))){
var inst_73956 = (state_73979[(7)]);
var inst_73956__$1 = (state_73979[(2)]);
var inst_73957 = (inst_73956__$1 == null);
var state_73979__$1 = (function (){var statearr_73983 = state_73979;
(statearr_73983[(7)] = inst_73956__$1);

return statearr_73983;
})();
if(cljs.core.truth_(inst_73957)){
var statearr_73984_74005 = state_73979__$1;
(statearr_73984_74005[(1)] = (5));

} else {
var statearr_73985_74006 = state_73979__$1;
(statearr_73985_74006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73980 === (13))){
var state_73979__$1 = state_73979;
var statearr_73986_74007 = state_73979__$1;
(statearr_73986_74007[(2)] = null);

(statearr_73986_74007[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73980 === (6))){
var inst_73956 = (state_73979[(7)]);
var inst_73962 = p.call(null,inst_73956);
var state_73979__$1 = state_73979;
if(cljs.core.truth_(inst_73962)){
var statearr_73987_74008 = state_73979__$1;
(statearr_73987_74008[(1)] = (9));

} else {
var statearr_73988_74009 = state_73979__$1;
(statearr_73988_74009[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73980 === (3))){
var inst_73977 = (state_73979[(2)]);
var state_73979__$1 = state_73979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73979__$1,inst_73977);
} else {
if((state_val_73980 === (12))){
var state_73979__$1 = state_73979;
var statearr_73989_74010 = state_73979__$1;
(statearr_73989_74010[(2)] = null);

(statearr_73989_74010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73980 === (2))){
var state_73979__$1 = state_73979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73979__$1,(4),ch);
} else {
if((state_val_73980 === (11))){
var inst_73956 = (state_73979[(7)]);
var inst_73966 = (state_73979[(2)]);
var state_73979__$1 = state_73979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73979__$1,(8),inst_73966,inst_73956);
} else {
if((state_val_73980 === (9))){
var state_73979__$1 = state_73979;
var statearr_73990_74011 = state_73979__$1;
(statearr_73990_74011[(2)] = tc);

(statearr_73990_74011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73980 === (5))){
var inst_73959 = cljs.core.async.close_BANG_.call(null,tc);
var inst_73960 = cljs.core.async.close_BANG_.call(null,fc);
var state_73979__$1 = (function (){var statearr_73991 = state_73979;
(statearr_73991[(8)] = inst_73959);

return statearr_73991;
})();
var statearr_73992_74012 = state_73979__$1;
(statearr_73992_74012[(2)] = inst_73960);

(statearr_73992_74012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73980 === (14))){
var inst_73973 = (state_73979[(2)]);
var state_73979__$1 = state_73979;
var statearr_73993_74013 = state_73979__$1;
(statearr_73993_74013[(2)] = inst_73973);

(statearr_73993_74013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73980 === (10))){
var state_73979__$1 = state_73979;
var statearr_73994_74014 = state_73979__$1;
(statearr_73994_74014[(2)] = fc);

(statearr_73994_74014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73980 === (8))){
var inst_73968 = (state_73979[(2)]);
var state_73979__$1 = state_73979;
if(cljs.core.truth_(inst_73968)){
var statearr_73995_74015 = state_73979__$1;
(statearr_73995_74015[(1)] = (12));

} else {
var statearr_73996_74016 = state_73979__$1;
(statearr_73996_74016[(1)] = (13));

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
});})(c__67205__auto___74002,tc,fc))
;
return ((function (switch__67159__auto__,c__67205__auto___74002,tc,fc){
return (function() {
var cljs$core$async$state_machine__67160__auto__ = null;
var cljs$core$async$state_machine__67160__auto____0 = (function (){
var statearr_73997 = [null,null,null,null,null,null,null,null,null];
(statearr_73997[(0)] = cljs$core$async$state_machine__67160__auto__);

(statearr_73997[(1)] = (1));

return statearr_73997;
});
var cljs$core$async$state_machine__67160__auto____1 = (function (state_73979){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_73979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e73998){if((e73998 instanceof Object)){
var ex__67163__auto__ = e73998;
var statearr_73999_74017 = state_73979;
(statearr_73999_74017[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74018 = state_73979;
state_73979 = G__74018;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$state_machine__67160__auto__ = function(state_73979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67160__auto____1.call(this,state_73979);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67160__auto____0;
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67160__auto____1;
return cljs$core$async$state_machine__67160__auto__;
})()
;})(switch__67159__auto__,c__67205__auto___74002,tc,fc))
})();
var state__67207__auto__ = (function (){var statearr_74000 = f__67206__auto__.call(null);
(statearr_74000[(6)] = c__67205__auto___74002);

return statearr_74000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(c__67205__auto___74002,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__67205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67205__auto__){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (c__67205__auto__){
return (function (state_74039){
var state_val_74040 = (state_74039[(1)]);
if((state_val_74040 === (7))){
var inst_74035 = (state_74039[(2)]);
var state_74039__$1 = state_74039;
var statearr_74041_74059 = state_74039__$1;
(statearr_74041_74059[(2)] = inst_74035);

(statearr_74041_74059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74040 === (1))){
var inst_74019 = init;
var state_74039__$1 = (function (){var statearr_74042 = state_74039;
(statearr_74042[(7)] = inst_74019);

return statearr_74042;
})();
var statearr_74043_74060 = state_74039__$1;
(statearr_74043_74060[(2)] = null);

(statearr_74043_74060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74040 === (4))){
var inst_74022 = (state_74039[(8)]);
var inst_74022__$1 = (state_74039[(2)]);
var inst_74023 = (inst_74022__$1 == null);
var state_74039__$1 = (function (){var statearr_74044 = state_74039;
(statearr_74044[(8)] = inst_74022__$1);

return statearr_74044;
})();
if(cljs.core.truth_(inst_74023)){
var statearr_74045_74061 = state_74039__$1;
(statearr_74045_74061[(1)] = (5));

} else {
var statearr_74046_74062 = state_74039__$1;
(statearr_74046_74062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74040 === (6))){
var inst_74026 = (state_74039[(9)]);
var inst_74022 = (state_74039[(8)]);
var inst_74019 = (state_74039[(7)]);
var inst_74026__$1 = f.call(null,inst_74019,inst_74022);
var inst_74027 = cljs.core.reduced_QMARK_.call(null,inst_74026__$1);
var state_74039__$1 = (function (){var statearr_74047 = state_74039;
(statearr_74047[(9)] = inst_74026__$1);

return statearr_74047;
})();
if(inst_74027){
var statearr_74048_74063 = state_74039__$1;
(statearr_74048_74063[(1)] = (8));

} else {
var statearr_74049_74064 = state_74039__$1;
(statearr_74049_74064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74040 === (3))){
var inst_74037 = (state_74039[(2)]);
var state_74039__$1 = state_74039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74039__$1,inst_74037);
} else {
if((state_val_74040 === (2))){
var state_74039__$1 = state_74039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74039__$1,(4),ch);
} else {
if((state_val_74040 === (9))){
var inst_74026 = (state_74039[(9)]);
var inst_74019 = inst_74026;
var state_74039__$1 = (function (){var statearr_74050 = state_74039;
(statearr_74050[(7)] = inst_74019);

return statearr_74050;
})();
var statearr_74051_74065 = state_74039__$1;
(statearr_74051_74065[(2)] = null);

(statearr_74051_74065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74040 === (5))){
var inst_74019 = (state_74039[(7)]);
var state_74039__$1 = state_74039;
var statearr_74052_74066 = state_74039__$1;
(statearr_74052_74066[(2)] = inst_74019);

(statearr_74052_74066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74040 === (10))){
var inst_74033 = (state_74039[(2)]);
var state_74039__$1 = state_74039;
var statearr_74053_74067 = state_74039__$1;
(statearr_74053_74067[(2)] = inst_74033);

(statearr_74053_74067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74040 === (8))){
var inst_74026 = (state_74039[(9)]);
var inst_74029 = cljs.core.deref.call(null,inst_74026);
var state_74039__$1 = state_74039;
var statearr_74054_74068 = state_74039__$1;
(statearr_74054_74068[(2)] = inst_74029);

(statearr_74054_74068[(1)] = (10));


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
});})(c__67205__auto__))
;
return ((function (switch__67159__auto__,c__67205__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__67160__auto__ = null;
var cljs$core$async$reduce_$_state_machine__67160__auto____0 = (function (){
var statearr_74055 = [null,null,null,null,null,null,null,null,null,null];
(statearr_74055[(0)] = cljs$core$async$reduce_$_state_machine__67160__auto__);

(statearr_74055[(1)] = (1));

return statearr_74055;
});
var cljs$core$async$reduce_$_state_machine__67160__auto____1 = (function (state_74039){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_74039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e74056){if((e74056 instanceof Object)){
var ex__67163__auto__ = e74056;
var statearr_74057_74069 = state_74039;
(statearr_74057_74069[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74070 = state_74039;
state_74039 = G__74070;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__67160__auto__ = function(state_74039){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__67160__auto____1.call(this,state_74039);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__67160__auto____0;
cljs$core$async$reduce_$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__67160__auto____1;
return cljs$core$async$reduce_$_state_machine__67160__auto__;
})()
;})(switch__67159__auto__,c__67205__auto__))
})();
var state__67207__auto__ = (function (){var statearr_74058 = f__67206__auto__.call(null);
(statearr_74058[(6)] = c__67205__auto__);

return statearr_74058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(c__67205__auto__))
);

return c__67205__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__67205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67205__auto__,f__$1){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (c__67205__auto__,f__$1){
return (function (state_74076){
var state_val_74077 = (state_74076[(1)]);
if((state_val_74077 === (1))){
var inst_74071 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_74076__$1 = state_74076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74076__$1,(2),inst_74071);
} else {
if((state_val_74077 === (2))){
var inst_74073 = (state_74076[(2)]);
var inst_74074 = f__$1.call(null,inst_74073);
var state_74076__$1 = state_74076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74076__$1,inst_74074);
} else {
return null;
}
}
});})(c__67205__auto__,f__$1))
;
return ((function (switch__67159__auto__,c__67205__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__67160__auto__ = null;
var cljs$core$async$transduce_$_state_machine__67160__auto____0 = (function (){
var statearr_74078 = [null,null,null,null,null,null,null];
(statearr_74078[(0)] = cljs$core$async$transduce_$_state_machine__67160__auto__);

(statearr_74078[(1)] = (1));

return statearr_74078;
});
var cljs$core$async$transduce_$_state_machine__67160__auto____1 = (function (state_74076){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_74076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e74079){if((e74079 instanceof Object)){
var ex__67163__auto__ = e74079;
var statearr_74080_74082 = state_74076;
(statearr_74080_74082[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74083 = state_74076;
state_74076 = G__74083;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__67160__auto__ = function(state_74076){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__67160__auto____1.call(this,state_74076);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__67160__auto____0;
cljs$core$async$transduce_$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__67160__auto____1;
return cljs$core$async$transduce_$_state_machine__67160__auto__;
})()
;})(switch__67159__auto__,c__67205__auto__,f__$1))
})();
var state__67207__auto__ = (function (){var statearr_74081 = f__67206__auto__.call(null);
(statearr_74081[(6)] = c__67205__auto__);

return statearr_74081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(c__67205__auto__,f__$1))
);

return c__67205__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__74085 = arguments.length;
switch (G__74085) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__67205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67205__auto__){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (c__67205__auto__){
return (function (state_74110){
var state_val_74111 = (state_74110[(1)]);
if((state_val_74111 === (7))){
var inst_74092 = (state_74110[(2)]);
var state_74110__$1 = state_74110;
var statearr_74112_74133 = state_74110__$1;
(statearr_74112_74133[(2)] = inst_74092);

(statearr_74112_74133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74111 === (1))){
var inst_74086 = cljs.core.seq.call(null,coll);
var inst_74087 = inst_74086;
var state_74110__$1 = (function (){var statearr_74113 = state_74110;
(statearr_74113[(7)] = inst_74087);

return statearr_74113;
})();
var statearr_74114_74134 = state_74110__$1;
(statearr_74114_74134[(2)] = null);

(statearr_74114_74134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74111 === (4))){
var inst_74087 = (state_74110[(7)]);
var inst_74090 = cljs.core.first.call(null,inst_74087);
var state_74110__$1 = state_74110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74110__$1,(7),ch,inst_74090);
} else {
if((state_val_74111 === (13))){
var inst_74104 = (state_74110[(2)]);
var state_74110__$1 = state_74110;
var statearr_74115_74135 = state_74110__$1;
(statearr_74115_74135[(2)] = inst_74104);

(statearr_74115_74135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74111 === (6))){
var inst_74095 = (state_74110[(2)]);
var state_74110__$1 = state_74110;
if(cljs.core.truth_(inst_74095)){
var statearr_74116_74136 = state_74110__$1;
(statearr_74116_74136[(1)] = (8));

} else {
var statearr_74117_74137 = state_74110__$1;
(statearr_74117_74137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74111 === (3))){
var inst_74108 = (state_74110[(2)]);
var state_74110__$1 = state_74110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74110__$1,inst_74108);
} else {
if((state_val_74111 === (12))){
var state_74110__$1 = state_74110;
var statearr_74118_74138 = state_74110__$1;
(statearr_74118_74138[(2)] = null);

(statearr_74118_74138[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74111 === (2))){
var inst_74087 = (state_74110[(7)]);
var state_74110__$1 = state_74110;
if(cljs.core.truth_(inst_74087)){
var statearr_74119_74139 = state_74110__$1;
(statearr_74119_74139[(1)] = (4));

} else {
var statearr_74120_74140 = state_74110__$1;
(statearr_74120_74140[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74111 === (11))){
var inst_74101 = cljs.core.async.close_BANG_.call(null,ch);
var state_74110__$1 = state_74110;
var statearr_74121_74141 = state_74110__$1;
(statearr_74121_74141[(2)] = inst_74101);

(statearr_74121_74141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74111 === (9))){
var state_74110__$1 = state_74110;
if(cljs.core.truth_(close_QMARK_)){
var statearr_74122_74142 = state_74110__$1;
(statearr_74122_74142[(1)] = (11));

} else {
var statearr_74123_74143 = state_74110__$1;
(statearr_74123_74143[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74111 === (5))){
var inst_74087 = (state_74110[(7)]);
var state_74110__$1 = state_74110;
var statearr_74124_74144 = state_74110__$1;
(statearr_74124_74144[(2)] = inst_74087);

(statearr_74124_74144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74111 === (10))){
var inst_74106 = (state_74110[(2)]);
var state_74110__$1 = state_74110;
var statearr_74125_74145 = state_74110__$1;
(statearr_74125_74145[(2)] = inst_74106);

(statearr_74125_74145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74111 === (8))){
var inst_74087 = (state_74110[(7)]);
var inst_74097 = cljs.core.next.call(null,inst_74087);
var inst_74087__$1 = inst_74097;
var state_74110__$1 = (function (){var statearr_74126 = state_74110;
(statearr_74126[(7)] = inst_74087__$1);

return statearr_74126;
})();
var statearr_74127_74146 = state_74110__$1;
(statearr_74127_74146[(2)] = null);

(statearr_74127_74146[(1)] = (2));


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
});})(c__67205__auto__))
;
return ((function (switch__67159__auto__,c__67205__auto__){
return (function() {
var cljs$core$async$state_machine__67160__auto__ = null;
var cljs$core$async$state_machine__67160__auto____0 = (function (){
var statearr_74128 = [null,null,null,null,null,null,null,null];
(statearr_74128[(0)] = cljs$core$async$state_machine__67160__auto__);

(statearr_74128[(1)] = (1));

return statearr_74128;
});
var cljs$core$async$state_machine__67160__auto____1 = (function (state_74110){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_74110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e74129){if((e74129 instanceof Object)){
var ex__67163__auto__ = e74129;
var statearr_74130_74147 = state_74110;
(statearr_74130_74147[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74148 = state_74110;
state_74110 = G__74148;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$state_machine__67160__auto__ = function(state_74110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67160__auto____1.call(this,state_74110);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67160__auto____0;
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67160__auto____1;
return cljs$core$async$state_machine__67160__auto__;
})()
;})(switch__67159__auto__,c__67205__auto__))
})();
var state__67207__auto__ = (function (){var statearr_74131 = f__67206__auto__.call(null);
(statearr_74131[(6)] = c__67205__auto__);

return statearr_74131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(c__67205__auto__))
);

return c__67205__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async74149 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74149 = (function (ch,cs,meta74150){
this.ch = ch;
this.cs = cs;
this.meta74150 = meta74150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async74149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_74151,meta74150__$1){
var self__ = this;
var _74151__$1 = this;
return (new cljs.core.async.t_cljs$core$async74149(self__.ch,self__.cs,meta74150__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async74149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_74151){
var self__ = this;
var _74151__$1 = this;
return self__.meta74150;
});})(cs))
;

cljs.core.async.t_cljs$core$async74149.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async74149.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async74149.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async74149.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async74149.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async74149.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async74149.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta74150","meta74150",912605784,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async74149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async74149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74149";

cljs.core.async.t_cljs$core$async74149.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async74149");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74149.
 */
cljs.core.async.__GT_t_cljs$core$async74149 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async74149(ch__$1,cs__$1,meta74150){
return (new cljs.core.async.t_cljs$core$async74149(ch__$1,cs__$1,meta74150));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async74149(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__67205__auto___74371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67205__auto___74371,cs,m,dchan,dctr,done){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (c__67205__auto___74371,cs,m,dchan,dctr,done){
return (function (state_74286){
var state_val_74287 = (state_74286[(1)]);
if((state_val_74287 === (7))){
var inst_74282 = (state_74286[(2)]);
var state_74286__$1 = state_74286;
var statearr_74288_74372 = state_74286__$1;
(statearr_74288_74372[(2)] = inst_74282);

(statearr_74288_74372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (20))){
var inst_74185 = (state_74286[(7)]);
var inst_74197 = cljs.core.first.call(null,inst_74185);
var inst_74198 = cljs.core.nth.call(null,inst_74197,(0),null);
var inst_74199 = cljs.core.nth.call(null,inst_74197,(1),null);
var state_74286__$1 = (function (){var statearr_74289 = state_74286;
(statearr_74289[(8)] = inst_74198);

return statearr_74289;
})();
if(cljs.core.truth_(inst_74199)){
var statearr_74290_74373 = state_74286__$1;
(statearr_74290_74373[(1)] = (22));

} else {
var statearr_74291_74374 = state_74286__$1;
(statearr_74291_74374[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (27))){
var inst_74154 = (state_74286[(9)]);
var inst_74234 = (state_74286[(10)]);
var inst_74229 = (state_74286[(11)]);
var inst_74227 = (state_74286[(12)]);
var inst_74234__$1 = cljs.core._nth.call(null,inst_74227,inst_74229);
var inst_74235 = cljs.core.async.put_BANG_.call(null,inst_74234__$1,inst_74154,done);
var state_74286__$1 = (function (){var statearr_74292 = state_74286;
(statearr_74292[(10)] = inst_74234__$1);

return statearr_74292;
})();
if(cljs.core.truth_(inst_74235)){
var statearr_74293_74375 = state_74286__$1;
(statearr_74293_74375[(1)] = (30));

} else {
var statearr_74294_74376 = state_74286__$1;
(statearr_74294_74376[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (1))){
var state_74286__$1 = state_74286;
var statearr_74295_74377 = state_74286__$1;
(statearr_74295_74377[(2)] = null);

(statearr_74295_74377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (24))){
var inst_74185 = (state_74286[(7)]);
var inst_74204 = (state_74286[(2)]);
var inst_74205 = cljs.core.next.call(null,inst_74185);
var inst_74163 = inst_74205;
var inst_74164 = null;
var inst_74165 = (0);
var inst_74166 = (0);
var state_74286__$1 = (function (){var statearr_74296 = state_74286;
(statearr_74296[(13)] = inst_74166);

(statearr_74296[(14)] = inst_74163);

(statearr_74296[(15)] = inst_74165);

(statearr_74296[(16)] = inst_74204);

(statearr_74296[(17)] = inst_74164);

return statearr_74296;
})();
var statearr_74297_74378 = state_74286__$1;
(statearr_74297_74378[(2)] = null);

(statearr_74297_74378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (39))){
var state_74286__$1 = state_74286;
var statearr_74301_74379 = state_74286__$1;
(statearr_74301_74379[(2)] = null);

(statearr_74301_74379[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (4))){
var inst_74154 = (state_74286[(9)]);
var inst_74154__$1 = (state_74286[(2)]);
var inst_74155 = (inst_74154__$1 == null);
var state_74286__$1 = (function (){var statearr_74302 = state_74286;
(statearr_74302[(9)] = inst_74154__$1);

return statearr_74302;
})();
if(cljs.core.truth_(inst_74155)){
var statearr_74303_74380 = state_74286__$1;
(statearr_74303_74380[(1)] = (5));

} else {
var statearr_74304_74381 = state_74286__$1;
(statearr_74304_74381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (15))){
var inst_74166 = (state_74286[(13)]);
var inst_74163 = (state_74286[(14)]);
var inst_74165 = (state_74286[(15)]);
var inst_74164 = (state_74286[(17)]);
var inst_74181 = (state_74286[(2)]);
var inst_74182 = (inst_74166 + (1));
var tmp74298 = inst_74163;
var tmp74299 = inst_74165;
var tmp74300 = inst_74164;
var inst_74163__$1 = tmp74298;
var inst_74164__$1 = tmp74300;
var inst_74165__$1 = tmp74299;
var inst_74166__$1 = inst_74182;
var state_74286__$1 = (function (){var statearr_74305 = state_74286;
(statearr_74305[(13)] = inst_74166__$1);

(statearr_74305[(14)] = inst_74163__$1);

(statearr_74305[(15)] = inst_74165__$1);

(statearr_74305[(18)] = inst_74181);

(statearr_74305[(17)] = inst_74164__$1);

return statearr_74305;
})();
var statearr_74306_74382 = state_74286__$1;
(statearr_74306_74382[(2)] = null);

(statearr_74306_74382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (21))){
var inst_74208 = (state_74286[(2)]);
var state_74286__$1 = state_74286;
var statearr_74310_74383 = state_74286__$1;
(statearr_74310_74383[(2)] = inst_74208);

(statearr_74310_74383[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (31))){
var inst_74234 = (state_74286[(10)]);
var inst_74238 = done.call(null,null);
var inst_74239 = cljs.core.async.untap_STAR_.call(null,m,inst_74234);
var state_74286__$1 = (function (){var statearr_74311 = state_74286;
(statearr_74311[(19)] = inst_74238);

return statearr_74311;
})();
var statearr_74312_74384 = state_74286__$1;
(statearr_74312_74384[(2)] = inst_74239);

(statearr_74312_74384[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (32))){
var inst_74226 = (state_74286[(20)]);
var inst_74228 = (state_74286[(21)]);
var inst_74229 = (state_74286[(11)]);
var inst_74227 = (state_74286[(12)]);
var inst_74241 = (state_74286[(2)]);
var inst_74242 = (inst_74229 + (1));
var tmp74307 = inst_74226;
var tmp74308 = inst_74228;
var tmp74309 = inst_74227;
var inst_74226__$1 = tmp74307;
var inst_74227__$1 = tmp74309;
var inst_74228__$1 = tmp74308;
var inst_74229__$1 = inst_74242;
var state_74286__$1 = (function (){var statearr_74313 = state_74286;
(statearr_74313[(20)] = inst_74226__$1);

(statearr_74313[(21)] = inst_74228__$1);

(statearr_74313[(11)] = inst_74229__$1);

(statearr_74313[(12)] = inst_74227__$1);

(statearr_74313[(22)] = inst_74241);

return statearr_74313;
})();
var statearr_74314_74385 = state_74286__$1;
(statearr_74314_74385[(2)] = null);

(statearr_74314_74385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (40))){
var inst_74254 = (state_74286[(23)]);
var inst_74258 = done.call(null,null);
var inst_74259 = cljs.core.async.untap_STAR_.call(null,m,inst_74254);
var state_74286__$1 = (function (){var statearr_74315 = state_74286;
(statearr_74315[(24)] = inst_74258);

return statearr_74315;
})();
var statearr_74316_74386 = state_74286__$1;
(statearr_74316_74386[(2)] = inst_74259);

(statearr_74316_74386[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (33))){
var inst_74245 = (state_74286[(25)]);
var inst_74247 = cljs.core.chunked_seq_QMARK_.call(null,inst_74245);
var state_74286__$1 = state_74286;
if(inst_74247){
var statearr_74317_74387 = state_74286__$1;
(statearr_74317_74387[(1)] = (36));

} else {
var statearr_74318_74388 = state_74286__$1;
(statearr_74318_74388[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (13))){
var inst_74175 = (state_74286[(26)]);
var inst_74178 = cljs.core.async.close_BANG_.call(null,inst_74175);
var state_74286__$1 = state_74286;
var statearr_74319_74389 = state_74286__$1;
(statearr_74319_74389[(2)] = inst_74178);

(statearr_74319_74389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (22))){
var inst_74198 = (state_74286[(8)]);
var inst_74201 = cljs.core.async.close_BANG_.call(null,inst_74198);
var state_74286__$1 = state_74286;
var statearr_74320_74390 = state_74286__$1;
(statearr_74320_74390[(2)] = inst_74201);

(statearr_74320_74390[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (36))){
var inst_74245 = (state_74286[(25)]);
var inst_74249 = cljs.core.chunk_first.call(null,inst_74245);
var inst_74250 = cljs.core.chunk_rest.call(null,inst_74245);
var inst_74251 = cljs.core.count.call(null,inst_74249);
var inst_74226 = inst_74250;
var inst_74227 = inst_74249;
var inst_74228 = inst_74251;
var inst_74229 = (0);
var state_74286__$1 = (function (){var statearr_74321 = state_74286;
(statearr_74321[(20)] = inst_74226);

(statearr_74321[(21)] = inst_74228);

(statearr_74321[(11)] = inst_74229);

(statearr_74321[(12)] = inst_74227);

return statearr_74321;
})();
var statearr_74322_74391 = state_74286__$1;
(statearr_74322_74391[(2)] = null);

(statearr_74322_74391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (41))){
var inst_74245 = (state_74286[(25)]);
var inst_74261 = (state_74286[(2)]);
var inst_74262 = cljs.core.next.call(null,inst_74245);
var inst_74226 = inst_74262;
var inst_74227 = null;
var inst_74228 = (0);
var inst_74229 = (0);
var state_74286__$1 = (function (){var statearr_74323 = state_74286;
(statearr_74323[(20)] = inst_74226);

(statearr_74323[(21)] = inst_74228);

(statearr_74323[(11)] = inst_74229);

(statearr_74323[(12)] = inst_74227);

(statearr_74323[(27)] = inst_74261);

return statearr_74323;
})();
var statearr_74324_74392 = state_74286__$1;
(statearr_74324_74392[(2)] = null);

(statearr_74324_74392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (43))){
var state_74286__$1 = state_74286;
var statearr_74325_74393 = state_74286__$1;
(statearr_74325_74393[(2)] = null);

(statearr_74325_74393[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (29))){
var inst_74270 = (state_74286[(2)]);
var state_74286__$1 = state_74286;
var statearr_74326_74394 = state_74286__$1;
(statearr_74326_74394[(2)] = inst_74270);

(statearr_74326_74394[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (44))){
var inst_74279 = (state_74286[(2)]);
var state_74286__$1 = (function (){var statearr_74327 = state_74286;
(statearr_74327[(28)] = inst_74279);

return statearr_74327;
})();
var statearr_74328_74395 = state_74286__$1;
(statearr_74328_74395[(2)] = null);

(statearr_74328_74395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (6))){
var inst_74218 = (state_74286[(29)]);
var inst_74217 = cljs.core.deref.call(null,cs);
var inst_74218__$1 = cljs.core.keys.call(null,inst_74217);
var inst_74219 = cljs.core.count.call(null,inst_74218__$1);
var inst_74220 = cljs.core.reset_BANG_.call(null,dctr,inst_74219);
var inst_74225 = cljs.core.seq.call(null,inst_74218__$1);
var inst_74226 = inst_74225;
var inst_74227 = null;
var inst_74228 = (0);
var inst_74229 = (0);
var state_74286__$1 = (function (){var statearr_74329 = state_74286;
(statearr_74329[(20)] = inst_74226);

(statearr_74329[(21)] = inst_74228);

(statearr_74329[(11)] = inst_74229);

(statearr_74329[(12)] = inst_74227);

(statearr_74329[(29)] = inst_74218__$1);

(statearr_74329[(30)] = inst_74220);

return statearr_74329;
})();
var statearr_74330_74396 = state_74286__$1;
(statearr_74330_74396[(2)] = null);

(statearr_74330_74396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (28))){
var inst_74226 = (state_74286[(20)]);
var inst_74245 = (state_74286[(25)]);
var inst_74245__$1 = cljs.core.seq.call(null,inst_74226);
var state_74286__$1 = (function (){var statearr_74331 = state_74286;
(statearr_74331[(25)] = inst_74245__$1);

return statearr_74331;
})();
if(inst_74245__$1){
var statearr_74332_74397 = state_74286__$1;
(statearr_74332_74397[(1)] = (33));

} else {
var statearr_74333_74398 = state_74286__$1;
(statearr_74333_74398[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (25))){
var inst_74228 = (state_74286[(21)]);
var inst_74229 = (state_74286[(11)]);
var inst_74231 = (inst_74229 < inst_74228);
var inst_74232 = inst_74231;
var state_74286__$1 = state_74286;
if(cljs.core.truth_(inst_74232)){
var statearr_74334_74399 = state_74286__$1;
(statearr_74334_74399[(1)] = (27));

} else {
var statearr_74335_74400 = state_74286__$1;
(statearr_74335_74400[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (34))){
var state_74286__$1 = state_74286;
var statearr_74336_74401 = state_74286__$1;
(statearr_74336_74401[(2)] = null);

(statearr_74336_74401[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (17))){
var state_74286__$1 = state_74286;
var statearr_74337_74402 = state_74286__$1;
(statearr_74337_74402[(2)] = null);

(statearr_74337_74402[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (3))){
var inst_74284 = (state_74286[(2)]);
var state_74286__$1 = state_74286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74286__$1,inst_74284);
} else {
if((state_val_74287 === (12))){
var inst_74213 = (state_74286[(2)]);
var state_74286__$1 = state_74286;
var statearr_74338_74403 = state_74286__$1;
(statearr_74338_74403[(2)] = inst_74213);

(statearr_74338_74403[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (2))){
var state_74286__$1 = state_74286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74286__$1,(4),ch);
} else {
if((state_val_74287 === (23))){
var state_74286__$1 = state_74286;
var statearr_74339_74404 = state_74286__$1;
(statearr_74339_74404[(2)] = null);

(statearr_74339_74404[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (35))){
var inst_74268 = (state_74286[(2)]);
var state_74286__$1 = state_74286;
var statearr_74340_74405 = state_74286__$1;
(statearr_74340_74405[(2)] = inst_74268);

(statearr_74340_74405[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (19))){
var inst_74185 = (state_74286[(7)]);
var inst_74189 = cljs.core.chunk_first.call(null,inst_74185);
var inst_74190 = cljs.core.chunk_rest.call(null,inst_74185);
var inst_74191 = cljs.core.count.call(null,inst_74189);
var inst_74163 = inst_74190;
var inst_74164 = inst_74189;
var inst_74165 = inst_74191;
var inst_74166 = (0);
var state_74286__$1 = (function (){var statearr_74341 = state_74286;
(statearr_74341[(13)] = inst_74166);

(statearr_74341[(14)] = inst_74163);

(statearr_74341[(15)] = inst_74165);

(statearr_74341[(17)] = inst_74164);

return statearr_74341;
})();
var statearr_74342_74406 = state_74286__$1;
(statearr_74342_74406[(2)] = null);

(statearr_74342_74406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (11))){
var inst_74163 = (state_74286[(14)]);
var inst_74185 = (state_74286[(7)]);
var inst_74185__$1 = cljs.core.seq.call(null,inst_74163);
var state_74286__$1 = (function (){var statearr_74343 = state_74286;
(statearr_74343[(7)] = inst_74185__$1);

return statearr_74343;
})();
if(inst_74185__$1){
var statearr_74344_74407 = state_74286__$1;
(statearr_74344_74407[(1)] = (16));

} else {
var statearr_74345_74408 = state_74286__$1;
(statearr_74345_74408[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (9))){
var inst_74215 = (state_74286[(2)]);
var state_74286__$1 = state_74286;
var statearr_74346_74409 = state_74286__$1;
(statearr_74346_74409[(2)] = inst_74215);

(statearr_74346_74409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (5))){
var inst_74161 = cljs.core.deref.call(null,cs);
var inst_74162 = cljs.core.seq.call(null,inst_74161);
var inst_74163 = inst_74162;
var inst_74164 = null;
var inst_74165 = (0);
var inst_74166 = (0);
var state_74286__$1 = (function (){var statearr_74347 = state_74286;
(statearr_74347[(13)] = inst_74166);

(statearr_74347[(14)] = inst_74163);

(statearr_74347[(15)] = inst_74165);

(statearr_74347[(17)] = inst_74164);

return statearr_74347;
})();
var statearr_74348_74410 = state_74286__$1;
(statearr_74348_74410[(2)] = null);

(statearr_74348_74410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (14))){
var state_74286__$1 = state_74286;
var statearr_74349_74411 = state_74286__$1;
(statearr_74349_74411[(2)] = null);

(statearr_74349_74411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (45))){
var inst_74276 = (state_74286[(2)]);
var state_74286__$1 = state_74286;
var statearr_74350_74412 = state_74286__$1;
(statearr_74350_74412[(2)] = inst_74276);

(statearr_74350_74412[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (26))){
var inst_74218 = (state_74286[(29)]);
var inst_74272 = (state_74286[(2)]);
var inst_74273 = cljs.core.seq.call(null,inst_74218);
var state_74286__$1 = (function (){var statearr_74351 = state_74286;
(statearr_74351[(31)] = inst_74272);

return statearr_74351;
})();
if(inst_74273){
var statearr_74352_74413 = state_74286__$1;
(statearr_74352_74413[(1)] = (42));

} else {
var statearr_74353_74414 = state_74286__$1;
(statearr_74353_74414[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (16))){
var inst_74185 = (state_74286[(7)]);
var inst_74187 = cljs.core.chunked_seq_QMARK_.call(null,inst_74185);
var state_74286__$1 = state_74286;
if(inst_74187){
var statearr_74354_74415 = state_74286__$1;
(statearr_74354_74415[(1)] = (19));

} else {
var statearr_74355_74416 = state_74286__$1;
(statearr_74355_74416[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (38))){
var inst_74265 = (state_74286[(2)]);
var state_74286__$1 = state_74286;
var statearr_74356_74417 = state_74286__$1;
(statearr_74356_74417[(2)] = inst_74265);

(statearr_74356_74417[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (30))){
var state_74286__$1 = state_74286;
var statearr_74357_74418 = state_74286__$1;
(statearr_74357_74418[(2)] = null);

(statearr_74357_74418[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (10))){
var inst_74166 = (state_74286[(13)]);
var inst_74164 = (state_74286[(17)]);
var inst_74174 = cljs.core._nth.call(null,inst_74164,inst_74166);
var inst_74175 = cljs.core.nth.call(null,inst_74174,(0),null);
var inst_74176 = cljs.core.nth.call(null,inst_74174,(1),null);
var state_74286__$1 = (function (){var statearr_74358 = state_74286;
(statearr_74358[(26)] = inst_74175);

return statearr_74358;
})();
if(cljs.core.truth_(inst_74176)){
var statearr_74359_74419 = state_74286__$1;
(statearr_74359_74419[(1)] = (13));

} else {
var statearr_74360_74420 = state_74286__$1;
(statearr_74360_74420[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (18))){
var inst_74211 = (state_74286[(2)]);
var state_74286__$1 = state_74286;
var statearr_74361_74421 = state_74286__$1;
(statearr_74361_74421[(2)] = inst_74211);

(statearr_74361_74421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (42))){
var state_74286__$1 = state_74286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74286__$1,(45),dchan);
} else {
if((state_val_74287 === (37))){
var inst_74154 = (state_74286[(9)]);
var inst_74245 = (state_74286[(25)]);
var inst_74254 = (state_74286[(23)]);
var inst_74254__$1 = cljs.core.first.call(null,inst_74245);
var inst_74255 = cljs.core.async.put_BANG_.call(null,inst_74254__$1,inst_74154,done);
var state_74286__$1 = (function (){var statearr_74362 = state_74286;
(statearr_74362[(23)] = inst_74254__$1);

return statearr_74362;
})();
if(cljs.core.truth_(inst_74255)){
var statearr_74363_74422 = state_74286__$1;
(statearr_74363_74422[(1)] = (39));

} else {
var statearr_74364_74423 = state_74286__$1;
(statearr_74364_74423[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74287 === (8))){
var inst_74166 = (state_74286[(13)]);
var inst_74165 = (state_74286[(15)]);
var inst_74168 = (inst_74166 < inst_74165);
var inst_74169 = inst_74168;
var state_74286__$1 = state_74286;
if(cljs.core.truth_(inst_74169)){
var statearr_74365_74424 = state_74286__$1;
(statearr_74365_74424[(1)] = (10));

} else {
var statearr_74366_74425 = state_74286__$1;
(statearr_74366_74425[(1)] = (11));

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
});})(c__67205__auto___74371,cs,m,dchan,dctr,done))
;
return ((function (switch__67159__auto__,c__67205__auto___74371,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__67160__auto__ = null;
var cljs$core$async$mult_$_state_machine__67160__auto____0 = (function (){
var statearr_74367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74367[(0)] = cljs$core$async$mult_$_state_machine__67160__auto__);

(statearr_74367[(1)] = (1));

return statearr_74367;
});
var cljs$core$async$mult_$_state_machine__67160__auto____1 = (function (state_74286){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_74286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e74368){if((e74368 instanceof Object)){
var ex__67163__auto__ = e74368;
var statearr_74369_74426 = state_74286;
(statearr_74369_74426[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74427 = state_74286;
state_74286 = G__74427;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__67160__auto__ = function(state_74286){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__67160__auto____1.call(this,state_74286);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__67160__auto____0;
cljs$core$async$mult_$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__67160__auto____1;
return cljs$core$async$mult_$_state_machine__67160__auto__;
})()
;})(switch__67159__auto__,c__67205__auto___74371,cs,m,dchan,dctr,done))
})();
var state__67207__auto__ = (function (){var statearr_74370 = f__67206__auto__.call(null);
(statearr_74370[(6)] = c__67205__auto___74371);

return statearr_74370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(c__67205__auto___74371,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__74429 = arguments.length;
switch (G__74429) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___74441 = arguments.length;
var i__4500__auto___74442 = (0);
while(true){
if((i__4500__auto___74442 < len__4499__auto___74441)){
args__4502__auto__.push((arguments[i__4500__auto___74442]));

var G__74443 = (i__4500__auto___74442 + (1));
i__4500__auto___74442 = G__74443;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__74435){
var map__74436 = p__74435;
var map__74436__$1 = ((((!((map__74436 == null)))?(((((map__74436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74436):map__74436);
var opts = map__74436__$1;
var statearr_74438_74444 = state;
(statearr_74438_74444[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__74436,map__74436__$1,opts){
return (function (val){
var statearr_74439_74445 = state;
(statearr_74439_74445[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__74436,map__74436__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_74440_74446 = state;
(statearr_74440_74446[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq74431){
var G__74432 = cljs.core.first.call(null,seq74431);
var seq74431__$1 = cljs.core.next.call(null,seq74431);
var G__74433 = cljs.core.first.call(null,seq74431__$1);
var seq74431__$2 = cljs.core.next.call(null,seq74431__$1);
var G__74434 = cljs.core.first.call(null,seq74431__$2);
var seq74431__$3 = cljs.core.next.call(null,seq74431__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74432,G__74433,G__74434,seq74431__$3);
});

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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async74447 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74447 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta74448){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta74448 = meta74448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async74447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_74449,meta74448__$1){
var self__ = this;
var _74449__$1 = this;
return (new cljs.core.async.t_cljs$core$async74447(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta74448__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async74447.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_74449){
var self__ = this;
var _74449__$1 = this;
return self__.meta74448;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async74447.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async74447.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async74447.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async74447.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async74447.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async74447.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async74447.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async74447.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async74447.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta74448","meta74448",1656088983,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async74447.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async74447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74447";

cljs.core.async.t_cljs$core$async74447.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async74447");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74447.
 */
cljs.core.async.__GT_t_cljs$core$async74447 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async74447(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta74448){
return (new cljs.core.async.t_cljs$core$async74447(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta74448));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async74447(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__67205__auto___74611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67205__auto___74611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (c__67205__auto___74611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_74551){
var state_val_74552 = (state_74551[(1)]);
if((state_val_74552 === (7))){
var inst_74466 = (state_74551[(2)]);
var state_74551__$1 = state_74551;
var statearr_74553_74612 = state_74551__$1;
(statearr_74553_74612[(2)] = inst_74466);

(statearr_74553_74612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (20))){
var inst_74478 = (state_74551[(7)]);
var state_74551__$1 = state_74551;
var statearr_74554_74613 = state_74551__$1;
(statearr_74554_74613[(2)] = inst_74478);

(statearr_74554_74613[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (27))){
var state_74551__$1 = state_74551;
var statearr_74555_74614 = state_74551__$1;
(statearr_74555_74614[(2)] = null);

(statearr_74555_74614[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (1))){
var inst_74453 = (state_74551[(8)]);
var inst_74453__$1 = calc_state.call(null);
var inst_74455 = (inst_74453__$1 == null);
var inst_74456 = cljs.core.not.call(null,inst_74455);
var state_74551__$1 = (function (){var statearr_74556 = state_74551;
(statearr_74556[(8)] = inst_74453__$1);

return statearr_74556;
})();
if(inst_74456){
var statearr_74557_74615 = state_74551__$1;
(statearr_74557_74615[(1)] = (2));

} else {
var statearr_74558_74616 = state_74551__$1;
(statearr_74558_74616[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (24))){
var inst_74502 = (state_74551[(9)]);
var inst_74525 = (state_74551[(10)]);
var inst_74511 = (state_74551[(11)]);
var inst_74525__$1 = inst_74502.call(null,inst_74511);
var state_74551__$1 = (function (){var statearr_74559 = state_74551;
(statearr_74559[(10)] = inst_74525__$1);

return statearr_74559;
})();
if(cljs.core.truth_(inst_74525__$1)){
var statearr_74560_74617 = state_74551__$1;
(statearr_74560_74617[(1)] = (29));

} else {
var statearr_74561_74618 = state_74551__$1;
(statearr_74561_74618[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (4))){
var inst_74469 = (state_74551[(2)]);
var state_74551__$1 = state_74551;
if(cljs.core.truth_(inst_74469)){
var statearr_74562_74619 = state_74551__$1;
(statearr_74562_74619[(1)] = (8));

} else {
var statearr_74563_74620 = state_74551__$1;
(statearr_74563_74620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (15))){
var inst_74496 = (state_74551[(2)]);
var state_74551__$1 = state_74551;
if(cljs.core.truth_(inst_74496)){
var statearr_74564_74621 = state_74551__$1;
(statearr_74564_74621[(1)] = (19));

} else {
var statearr_74565_74622 = state_74551__$1;
(statearr_74565_74622[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (21))){
var inst_74501 = (state_74551[(12)]);
var inst_74501__$1 = (state_74551[(2)]);
var inst_74502 = cljs.core.get.call(null,inst_74501__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_74503 = cljs.core.get.call(null,inst_74501__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_74504 = cljs.core.get.call(null,inst_74501__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_74551__$1 = (function (){var statearr_74566 = state_74551;
(statearr_74566[(9)] = inst_74502);

(statearr_74566[(13)] = inst_74503);

(statearr_74566[(12)] = inst_74501__$1);

return statearr_74566;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_74551__$1,(22),inst_74504);
} else {
if((state_val_74552 === (31))){
var inst_74533 = (state_74551[(2)]);
var state_74551__$1 = state_74551;
if(cljs.core.truth_(inst_74533)){
var statearr_74567_74623 = state_74551__$1;
(statearr_74567_74623[(1)] = (32));

} else {
var statearr_74568_74624 = state_74551__$1;
(statearr_74568_74624[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (32))){
var inst_74510 = (state_74551[(14)]);
var state_74551__$1 = state_74551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74551__$1,(35),out,inst_74510);
} else {
if((state_val_74552 === (33))){
var inst_74501 = (state_74551[(12)]);
var inst_74478 = inst_74501;
var state_74551__$1 = (function (){var statearr_74569 = state_74551;
(statearr_74569[(7)] = inst_74478);

return statearr_74569;
})();
var statearr_74570_74625 = state_74551__$1;
(statearr_74570_74625[(2)] = null);

(statearr_74570_74625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (13))){
var inst_74478 = (state_74551[(7)]);
var inst_74485 = inst_74478.cljs$lang$protocol_mask$partition0$;
var inst_74486 = (inst_74485 & (64));
var inst_74487 = inst_74478.cljs$core$ISeq$;
var inst_74488 = (cljs.core.PROTOCOL_SENTINEL === inst_74487);
var inst_74489 = ((inst_74486) || (inst_74488));
var state_74551__$1 = state_74551;
if(cljs.core.truth_(inst_74489)){
var statearr_74571_74626 = state_74551__$1;
(statearr_74571_74626[(1)] = (16));

} else {
var statearr_74572_74627 = state_74551__$1;
(statearr_74572_74627[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (22))){
var inst_74510 = (state_74551[(14)]);
var inst_74511 = (state_74551[(11)]);
var inst_74509 = (state_74551[(2)]);
var inst_74510__$1 = cljs.core.nth.call(null,inst_74509,(0),null);
var inst_74511__$1 = cljs.core.nth.call(null,inst_74509,(1),null);
var inst_74512 = (inst_74510__$1 == null);
var inst_74513 = cljs.core._EQ_.call(null,inst_74511__$1,change);
var inst_74514 = ((inst_74512) || (inst_74513));
var state_74551__$1 = (function (){var statearr_74573 = state_74551;
(statearr_74573[(14)] = inst_74510__$1);

(statearr_74573[(11)] = inst_74511__$1);

return statearr_74573;
})();
if(cljs.core.truth_(inst_74514)){
var statearr_74574_74628 = state_74551__$1;
(statearr_74574_74628[(1)] = (23));

} else {
var statearr_74575_74629 = state_74551__$1;
(statearr_74575_74629[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (36))){
var inst_74501 = (state_74551[(12)]);
var inst_74478 = inst_74501;
var state_74551__$1 = (function (){var statearr_74576 = state_74551;
(statearr_74576[(7)] = inst_74478);

return statearr_74576;
})();
var statearr_74577_74630 = state_74551__$1;
(statearr_74577_74630[(2)] = null);

(statearr_74577_74630[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (29))){
var inst_74525 = (state_74551[(10)]);
var state_74551__$1 = state_74551;
var statearr_74578_74631 = state_74551__$1;
(statearr_74578_74631[(2)] = inst_74525);

(statearr_74578_74631[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (6))){
var state_74551__$1 = state_74551;
var statearr_74579_74632 = state_74551__$1;
(statearr_74579_74632[(2)] = false);

(statearr_74579_74632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (28))){
var inst_74521 = (state_74551[(2)]);
var inst_74522 = calc_state.call(null);
var inst_74478 = inst_74522;
var state_74551__$1 = (function (){var statearr_74580 = state_74551;
(statearr_74580[(7)] = inst_74478);

(statearr_74580[(15)] = inst_74521);

return statearr_74580;
})();
var statearr_74581_74633 = state_74551__$1;
(statearr_74581_74633[(2)] = null);

(statearr_74581_74633[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (25))){
var inst_74547 = (state_74551[(2)]);
var state_74551__$1 = state_74551;
var statearr_74582_74634 = state_74551__$1;
(statearr_74582_74634[(2)] = inst_74547);

(statearr_74582_74634[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (34))){
var inst_74545 = (state_74551[(2)]);
var state_74551__$1 = state_74551;
var statearr_74583_74635 = state_74551__$1;
(statearr_74583_74635[(2)] = inst_74545);

(statearr_74583_74635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (17))){
var state_74551__$1 = state_74551;
var statearr_74584_74636 = state_74551__$1;
(statearr_74584_74636[(2)] = false);

(statearr_74584_74636[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (3))){
var state_74551__$1 = state_74551;
var statearr_74585_74637 = state_74551__$1;
(statearr_74585_74637[(2)] = false);

(statearr_74585_74637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (12))){
var inst_74549 = (state_74551[(2)]);
var state_74551__$1 = state_74551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74551__$1,inst_74549);
} else {
if((state_val_74552 === (2))){
var inst_74453 = (state_74551[(8)]);
var inst_74458 = inst_74453.cljs$lang$protocol_mask$partition0$;
var inst_74459 = (inst_74458 & (64));
var inst_74460 = inst_74453.cljs$core$ISeq$;
var inst_74461 = (cljs.core.PROTOCOL_SENTINEL === inst_74460);
var inst_74462 = ((inst_74459) || (inst_74461));
var state_74551__$1 = state_74551;
if(cljs.core.truth_(inst_74462)){
var statearr_74586_74638 = state_74551__$1;
(statearr_74586_74638[(1)] = (5));

} else {
var statearr_74587_74639 = state_74551__$1;
(statearr_74587_74639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (23))){
var inst_74510 = (state_74551[(14)]);
var inst_74516 = (inst_74510 == null);
var state_74551__$1 = state_74551;
if(cljs.core.truth_(inst_74516)){
var statearr_74588_74640 = state_74551__$1;
(statearr_74588_74640[(1)] = (26));

} else {
var statearr_74589_74641 = state_74551__$1;
(statearr_74589_74641[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (35))){
var inst_74536 = (state_74551[(2)]);
var state_74551__$1 = state_74551;
if(cljs.core.truth_(inst_74536)){
var statearr_74590_74642 = state_74551__$1;
(statearr_74590_74642[(1)] = (36));

} else {
var statearr_74591_74643 = state_74551__$1;
(statearr_74591_74643[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (19))){
var inst_74478 = (state_74551[(7)]);
var inst_74498 = cljs.core.apply.call(null,cljs.core.hash_map,inst_74478);
var state_74551__$1 = state_74551;
var statearr_74592_74644 = state_74551__$1;
(statearr_74592_74644[(2)] = inst_74498);

(statearr_74592_74644[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (11))){
var inst_74478 = (state_74551[(7)]);
var inst_74482 = (inst_74478 == null);
var inst_74483 = cljs.core.not.call(null,inst_74482);
var state_74551__$1 = state_74551;
if(inst_74483){
var statearr_74593_74645 = state_74551__$1;
(statearr_74593_74645[(1)] = (13));

} else {
var statearr_74594_74646 = state_74551__$1;
(statearr_74594_74646[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (9))){
var inst_74453 = (state_74551[(8)]);
var state_74551__$1 = state_74551;
var statearr_74595_74647 = state_74551__$1;
(statearr_74595_74647[(2)] = inst_74453);

(statearr_74595_74647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (5))){
var state_74551__$1 = state_74551;
var statearr_74596_74648 = state_74551__$1;
(statearr_74596_74648[(2)] = true);

(statearr_74596_74648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (14))){
var state_74551__$1 = state_74551;
var statearr_74597_74649 = state_74551__$1;
(statearr_74597_74649[(2)] = false);

(statearr_74597_74649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (26))){
var inst_74511 = (state_74551[(11)]);
var inst_74518 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_74511);
var state_74551__$1 = state_74551;
var statearr_74598_74650 = state_74551__$1;
(statearr_74598_74650[(2)] = inst_74518);

(statearr_74598_74650[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (16))){
var state_74551__$1 = state_74551;
var statearr_74599_74651 = state_74551__$1;
(statearr_74599_74651[(2)] = true);

(statearr_74599_74651[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (38))){
var inst_74541 = (state_74551[(2)]);
var state_74551__$1 = state_74551;
var statearr_74600_74652 = state_74551__$1;
(statearr_74600_74652[(2)] = inst_74541);

(statearr_74600_74652[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (30))){
var inst_74502 = (state_74551[(9)]);
var inst_74503 = (state_74551[(13)]);
var inst_74511 = (state_74551[(11)]);
var inst_74528 = cljs.core.empty_QMARK_.call(null,inst_74502);
var inst_74529 = inst_74503.call(null,inst_74511);
var inst_74530 = cljs.core.not.call(null,inst_74529);
var inst_74531 = ((inst_74528) && (inst_74530));
var state_74551__$1 = state_74551;
var statearr_74601_74653 = state_74551__$1;
(statearr_74601_74653[(2)] = inst_74531);

(statearr_74601_74653[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (10))){
var inst_74453 = (state_74551[(8)]);
var inst_74474 = (state_74551[(2)]);
var inst_74475 = cljs.core.get.call(null,inst_74474,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_74476 = cljs.core.get.call(null,inst_74474,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_74477 = cljs.core.get.call(null,inst_74474,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_74478 = inst_74453;
var state_74551__$1 = (function (){var statearr_74602 = state_74551;
(statearr_74602[(16)] = inst_74475);

(statearr_74602[(7)] = inst_74478);

(statearr_74602[(17)] = inst_74477);

(statearr_74602[(18)] = inst_74476);

return statearr_74602;
})();
var statearr_74603_74654 = state_74551__$1;
(statearr_74603_74654[(2)] = null);

(statearr_74603_74654[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (18))){
var inst_74493 = (state_74551[(2)]);
var state_74551__$1 = state_74551;
var statearr_74604_74655 = state_74551__$1;
(statearr_74604_74655[(2)] = inst_74493);

(statearr_74604_74655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (37))){
var state_74551__$1 = state_74551;
var statearr_74605_74656 = state_74551__$1;
(statearr_74605_74656[(2)] = null);

(statearr_74605_74656[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74552 === (8))){
var inst_74453 = (state_74551[(8)]);
var inst_74471 = cljs.core.apply.call(null,cljs.core.hash_map,inst_74453);
var state_74551__$1 = state_74551;
var statearr_74606_74657 = state_74551__$1;
(statearr_74606_74657[(2)] = inst_74471);

(statearr_74606_74657[(1)] = (10));


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
});})(c__67205__auto___74611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__67159__auto__,c__67205__auto___74611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__67160__auto__ = null;
var cljs$core$async$mix_$_state_machine__67160__auto____0 = (function (){
var statearr_74607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74607[(0)] = cljs$core$async$mix_$_state_machine__67160__auto__);

(statearr_74607[(1)] = (1));

return statearr_74607;
});
var cljs$core$async$mix_$_state_machine__67160__auto____1 = (function (state_74551){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_74551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e74608){if((e74608 instanceof Object)){
var ex__67163__auto__ = e74608;
var statearr_74609_74658 = state_74551;
(statearr_74609_74658[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74659 = state_74551;
state_74551 = G__74659;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__67160__auto__ = function(state_74551){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__67160__auto____1.call(this,state_74551);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__67160__auto____0;
cljs$core$async$mix_$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__67160__auto____1;
return cljs$core$async$mix_$_state_machine__67160__auto__;
})()
;})(switch__67159__auto__,c__67205__auto___74611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__67207__auto__ = (function (){var statearr_74610 = f__67206__auto__.call(null);
(statearr_74610[(6)] = c__67205__auto___74611);

return statearr_74610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(c__67205__auto___74611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__74661 = arguments.length;
switch (G__74661) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__74665 = arguments.length;
switch (G__74665) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__74663_SHARP_){
if(cljs.core.truth_(p1__74663_SHARP_.call(null,topic))){
return p1__74663_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__74663_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async74666 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74666 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta74667){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta74667 = meta74667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async74666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_74668,meta74667__$1){
var self__ = this;
var _74668__$1 = this;
return (new cljs.core.async.t_cljs$core$async74666(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta74667__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async74666.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_74668){
var self__ = this;
var _74668__$1 = this;
return self__.meta74667;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async74666.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async74666.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async74666.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async74666.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async74666.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async74666.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async74666.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async74666.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta74667","meta74667",-1502593863,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async74666.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async74666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74666";

cljs.core.async.t_cljs$core$async74666.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async74666");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74666.
 */
cljs.core.async.__GT_t_cljs$core$async74666 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async74666(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta74667){
return (new cljs.core.async.t_cljs$core$async74666(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta74667));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async74666(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__67205__auto___74786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67205__auto___74786,mults,ensure_mult,p){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (c__67205__auto___74786,mults,ensure_mult,p){
return (function (state_74740){
var state_val_74741 = (state_74740[(1)]);
if((state_val_74741 === (7))){
var inst_74736 = (state_74740[(2)]);
var state_74740__$1 = state_74740;
var statearr_74742_74787 = state_74740__$1;
(statearr_74742_74787[(2)] = inst_74736);

(statearr_74742_74787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (20))){
var state_74740__$1 = state_74740;
var statearr_74743_74788 = state_74740__$1;
(statearr_74743_74788[(2)] = null);

(statearr_74743_74788[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (1))){
var state_74740__$1 = state_74740;
var statearr_74744_74789 = state_74740__$1;
(statearr_74744_74789[(2)] = null);

(statearr_74744_74789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (24))){
var inst_74719 = (state_74740[(7)]);
var inst_74728 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_74719);
var state_74740__$1 = state_74740;
var statearr_74745_74790 = state_74740__$1;
(statearr_74745_74790[(2)] = inst_74728);

(statearr_74745_74790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (4))){
var inst_74671 = (state_74740[(8)]);
var inst_74671__$1 = (state_74740[(2)]);
var inst_74672 = (inst_74671__$1 == null);
var state_74740__$1 = (function (){var statearr_74746 = state_74740;
(statearr_74746[(8)] = inst_74671__$1);

return statearr_74746;
})();
if(cljs.core.truth_(inst_74672)){
var statearr_74747_74791 = state_74740__$1;
(statearr_74747_74791[(1)] = (5));

} else {
var statearr_74748_74792 = state_74740__$1;
(statearr_74748_74792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (15))){
var inst_74713 = (state_74740[(2)]);
var state_74740__$1 = state_74740;
var statearr_74749_74793 = state_74740__$1;
(statearr_74749_74793[(2)] = inst_74713);

(statearr_74749_74793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (21))){
var inst_74733 = (state_74740[(2)]);
var state_74740__$1 = (function (){var statearr_74750 = state_74740;
(statearr_74750[(9)] = inst_74733);

return statearr_74750;
})();
var statearr_74751_74794 = state_74740__$1;
(statearr_74751_74794[(2)] = null);

(statearr_74751_74794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (13))){
var inst_74695 = (state_74740[(10)]);
var inst_74697 = cljs.core.chunked_seq_QMARK_.call(null,inst_74695);
var state_74740__$1 = state_74740;
if(inst_74697){
var statearr_74752_74795 = state_74740__$1;
(statearr_74752_74795[(1)] = (16));

} else {
var statearr_74753_74796 = state_74740__$1;
(statearr_74753_74796[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (22))){
var inst_74725 = (state_74740[(2)]);
var state_74740__$1 = state_74740;
if(cljs.core.truth_(inst_74725)){
var statearr_74754_74797 = state_74740__$1;
(statearr_74754_74797[(1)] = (23));

} else {
var statearr_74755_74798 = state_74740__$1;
(statearr_74755_74798[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (6))){
var inst_74719 = (state_74740[(7)]);
var inst_74671 = (state_74740[(8)]);
var inst_74721 = (state_74740[(11)]);
var inst_74719__$1 = topic_fn.call(null,inst_74671);
var inst_74720 = cljs.core.deref.call(null,mults);
var inst_74721__$1 = cljs.core.get.call(null,inst_74720,inst_74719__$1);
var state_74740__$1 = (function (){var statearr_74756 = state_74740;
(statearr_74756[(7)] = inst_74719__$1);

(statearr_74756[(11)] = inst_74721__$1);

return statearr_74756;
})();
if(cljs.core.truth_(inst_74721__$1)){
var statearr_74757_74799 = state_74740__$1;
(statearr_74757_74799[(1)] = (19));

} else {
var statearr_74758_74800 = state_74740__$1;
(statearr_74758_74800[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (25))){
var inst_74730 = (state_74740[(2)]);
var state_74740__$1 = state_74740;
var statearr_74759_74801 = state_74740__$1;
(statearr_74759_74801[(2)] = inst_74730);

(statearr_74759_74801[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (17))){
var inst_74695 = (state_74740[(10)]);
var inst_74704 = cljs.core.first.call(null,inst_74695);
var inst_74705 = cljs.core.async.muxch_STAR_.call(null,inst_74704);
var inst_74706 = cljs.core.async.close_BANG_.call(null,inst_74705);
var inst_74707 = cljs.core.next.call(null,inst_74695);
var inst_74681 = inst_74707;
var inst_74682 = null;
var inst_74683 = (0);
var inst_74684 = (0);
var state_74740__$1 = (function (){var statearr_74760 = state_74740;
(statearr_74760[(12)] = inst_74684);

(statearr_74760[(13)] = inst_74682);

(statearr_74760[(14)] = inst_74683);

(statearr_74760[(15)] = inst_74681);

(statearr_74760[(16)] = inst_74706);

return statearr_74760;
})();
var statearr_74761_74802 = state_74740__$1;
(statearr_74761_74802[(2)] = null);

(statearr_74761_74802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (3))){
var inst_74738 = (state_74740[(2)]);
var state_74740__$1 = state_74740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74740__$1,inst_74738);
} else {
if((state_val_74741 === (12))){
var inst_74715 = (state_74740[(2)]);
var state_74740__$1 = state_74740;
var statearr_74762_74803 = state_74740__$1;
(statearr_74762_74803[(2)] = inst_74715);

(statearr_74762_74803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (2))){
var state_74740__$1 = state_74740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74740__$1,(4),ch);
} else {
if((state_val_74741 === (23))){
var state_74740__$1 = state_74740;
var statearr_74763_74804 = state_74740__$1;
(statearr_74763_74804[(2)] = null);

(statearr_74763_74804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (19))){
var inst_74671 = (state_74740[(8)]);
var inst_74721 = (state_74740[(11)]);
var inst_74723 = cljs.core.async.muxch_STAR_.call(null,inst_74721);
var state_74740__$1 = state_74740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74740__$1,(22),inst_74723,inst_74671);
} else {
if((state_val_74741 === (11))){
var inst_74681 = (state_74740[(15)]);
var inst_74695 = (state_74740[(10)]);
var inst_74695__$1 = cljs.core.seq.call(null,inst_74681);
var state_74740__$1 = (function (){var statearr_74764 = state_74740;
(statearr_74764[(10)] = inst_74695__$1);

return statearr_74764;
})();
if(inst_74695__$1){
var statearr_74765_74805 = state_74740__$1;
(statearr_74765_74805[(1)] = (13));

} else {
var statearr_74766_74806 = state_74740__$1;
(statearr_74766_74806[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (9))){
var inst_74717 = (state_74740[(2)]);
var state_74740__$1 = state_74740;
var statearr_74767_74807 = state_74740__$1;
(statearr_74767_74807[(2)] = inst_74717);

(statearr_74767_74807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (5))){
var inst_74678 = cljs.core.deref.call(null,mults);
var inst_74679 = cljs.core.vals.call(null,inst_74678);
var inst_74680 = cljs.core.seq.call(null,inst_74679);
var inst_74681 = inst_74680;
var inst_74682 = null;
var inst_74683 = (0);
var inst_74684 = (0);
var state_74740__$1 = (function (){var statearr_74768 = state_74740;
(statearr_74768[(12)] = inst_74684);

(statearr_74768[(13)] = inst_74682);

(statearr_74768[(14)] = inst_74683);

(statearr_74768[(15)] = inst_74681);

return statearr_74768;
})();
var statearr_74769_74808 = state_74740__$1;
(statearr_74769_74808[(2)] = null);

(statearr_74769_74808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (14))){
var state_74740__$1 = state_74740;
var statearr_74773_74809 = state_74740__$1;
(statearr_74773_74809[(2)] = null);

(statearr_74773_74809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (16))){
var inst_74695 = (state_74740[(10)]);
var inst_74699 = cljs.core.chunk_first.call(null,inst_74695);
var inst_74700 = cljs.core.chunk_rest.call(null,inst_74695);
var inst_74701 = cljs.core.count.call(null,inst_74699);
var inst_74681 = inst_74700;
var inst_74682 = inst_74699;
var inst_74683 = inst_74701;
var inst_74684 = (0);
var state_74740__$1 = (function (){var statearr_74774 = state_74740;
(statearr_74774[(12)] = inst_74684);

(statearr_74774[(13)] = inst_74682);

(statearr_74774[(14)] = inst_74683);

(statearr_74774[(15)] = inst_74681);

return statearr_74774;
})();
var statearr_74775_74810 = state_74740__$1;
(statearr_74775_74810[(2)] = null);

(statearr_74775_74810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (10))){
var inst_74684 = (state_74740[(12)]);
var inst_74682 = (state_74740[(13)]);
var inst_74683 = (state_74740[(14)]);
var inst_74681 = (state_74740[(15)]);
var inst_74689 = cljs.core._nth.call(null,inst_74682,inst_74684);
var inst_74690 = cljs.core.async.muxch_STAR_.call(null,inst_74689);
var inst_74691 = cljs.core.async.close_BANG_.call(null,inst_74690);
var inst_74692 = (inst_74684 + (1));
var tmp74770 = inst_74682;
var tmp74771 = inst_74683;
var tmp74772 = inst_74681;
var inst_74681__$1 = tmp74772;
var inst_74682__$1 = tmp74770;
var inst_74683__$1 = tmp74771;
var inst_74684__$1 = inst_74692;
var state_74740__$1 = (function (){var statearr_74776 = state_74740;
(statearr_74776[(12)] = inst_74684__$1);

(statearr_74776[(13)] = inst_74682__$1);

(statearr_74776[(14)] = inst_74683__$1);

(statearr_74776[(15)] = inst_74681__$1);

(statearr_74776[(17)] = inst_74691);

return statearr_74776;
})();
var statearr_74777_74811 = state_74740__$1;
(statearr_74777_74811[(2)] = null);

(statearr_74777_74811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (18))){
var inst_74710 = (state_74740[(2)]);
var state_74740__$1 = state_74740;
var statearr_74778_74812 = state_74740__$1;
(statearr_74778_74812[(2)] = inst_74710);

(statearr_74778_74812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74741 === (8))){
var inst_74684 = (state_74740[(12)]);
var inst_74683 = (state_74740[(14)]);
var inst_74686 = (inst_74684 < inst_74683);
var inst_74687 = inst_74686;
var state_74740__$1 = state_74740;
if(cljs.core.truth_(inst_74687)){
var statearr_74779_74813 = state_74740__$1;
(statearr_74779_74813[(1)] = (10));

} else {
var statearr_74780_74814 = state_74740__$1;
(statearr_74780_74814[(1)] = (11));

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
});})(c__67205__auto___74786,mults,ensure_mult,p))
;
return ((function (switch__67159__auto__,c__67205__auto___74786,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__67160__auto__ = null;
var cljs$core$async$state_machine__67160__auto____0 = (function (){
var statearr_74781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74781[(0)] = cljs$core$async$state_machine__67160__auto__);

(statearr_74781[(1)] = (1));

return statearr_74781;
});
var cljs$core$async$state_machine__67160__auto____1 = (function (state_74740){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_74740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e74782){if((e74782 instanceof Object)){
var ex__67163__auto__ = e74782;
var statearr_74783_74815 = state_74740;
(statearr_74783_74815[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74816 = state_74740;
state_74740 = G__74816;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$state_machine__67160__auto__ = function(state_74740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67160__auto____1.call(this,state_74740);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67160__auto____0;
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67160__auto____1;
return cljs$core$async$state_machine__67160__auto__;
})()
;})(switch__67159__auto__,c__67205__auto___74786,mults,ensure_mult,p))
})();
var state__67207__auto__ = (function (){var statearr_74784 = f__67206__auto__.call(null);
(statearr_74784[(6)] = c__67205__auto___74786);

return statearr_74784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(c__67205__auto___74786,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__74818 = arguments.length;
switch (G__74818) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__74821 = arguments.length;
switch (G__74821) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__74824 = arguments.length;
switch (G__74824) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__67205__auto___74891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67205__auto___74891,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (c__67205__auto___74891,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_74863){
var state_val_74864 = (state_74863[(1)]);
if((state_val_74864 === (7))){
var state_74863__$1 = state_74863;
var statearr_74865_74892 = state_74863__$1;
(statearr_74865_74892[(2)] = null);

(statearr_74865_74892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74864 === (1))){
var state_74863__$1 = state_74863;
var statearr_74866_74893 = state_74863__$1;
(statearr_74866_74893[(2)] = null);

(statearr_74866_74893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74864 === (4))){
var inst_74827 = (state_74863[(7)]);
var inst_74829 = (inst_74827 < cnt);
var state_74863__$1 = state_74863;
if(cljs.core.truth_(inst_74829)){
var statearr_74867_74894 = state_74863__$1;
(statearr_74867_74894[(1)] = (6));

} else {
var statearr_74868_74895 = state_74863__$1;
(statearr_74868_74895[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74864 === (15))){
var inst_74859 = (state_74863[(2)]);
var state_74863__$1 = state_74863;
var statearr_74869_74896 = state_74863__$1;
(statearr_74869_74896[(2)] = inst_74859);

(statearr_74869_74896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74864 === (13))){
var inst_74852 = cljs.core.async.close_BANG_.call(null,out);
var state_74863__$1 = state_74863;
var statearr_74870_74897 = state_74863__$1;
(statearr_74870_74897[(2)] = inst_74852);

(statearr_74870_74897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74864 === (6))){
var state_74863__$1 = state_74863;
var statearr_74871_74898 = state_74863__$1;
(statearr_74871_74898[(2)] = null);

(statearr_74871_74898[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74864 === (3))){
var inst_74861 = (state_74863[(2)]);
var state_74863__$1 = state_74863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74863__$1,inst_74861);
} else {
if((state_val_74864 === (12))){
var inst_74849 = (state_74863[(8)]);
var inst_74849__$1 = (state_74863[(2)]);
var inst_74850 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_74849__$1);
var state_74863__$1 = (function (){var statearr_74872 = state_74863;
(statearr_74872[(8)] = inst_74849__$1);

return statearr_74872;
})();
if(cljs.core.truth_(inst_74850)){
var statearr_74873_74899 = state_74863__$1;
(statearr_74873_74899[(1)] = (13));

} else {
var statearr_74874_74900 = state_74863__$1;
(statearr_74874_74900[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74864 === (2))){
var inst_74826 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_74827 = (0);
var state_74863__$1 = (function (){var statearr_74875 = state_74863;
(statearr_74875[(9)] = inst_74826);

(statearr_74875[(7)] = inst_74827);

return statearr_74875;
})();
var statearr_74876_74901 = state_74863__$1;
(statearr_74876_74901[(2)] = null);

(statearr_74876_74901[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74864 === (11))){
var inst_74827 = (state_74863[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_74863,(10),Object,null,(9));
var inst_74836 = chs__$1.call(null,inst_74827);
var inst_74837 = done.call(null,inst_74827);
var inst_74838 = cljs.core.async.take_BANG_.call(null,inst_74836,inst_74837);
var state_74863__$1 = state_74863;
var statearr_74877_74902 = state_74863__$1;
(statearr_74877_74902[(2)] = inst_74838);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74863__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74864 === (9))){
var inst_74827 = (state_74863[(7)]);
var inst_74840 = (state_74863[(2)]);
var inst_74841 = (inst_74827 + (1));
var inst_74827__$1 = inst_74841;
var state_74863__$1 = (function (){var statearr_74878 = state_74863;
(statearr_74878[(7)] = inst_74827__$1);

(statearr_74878[(10)] = inst_74840);

return statearr_74878;
})();
var statearr_74879_74903 = state_74863__$1;
(statearr_74879_74903[(2)] = null);

(statearr_74879_74903[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74864 === (5))){
var inst_74847 = (state_74863[(2)]);
var state_74863__$1 = (function (){var statearr_74880 = state_74863;
(statearr_74880[(11)] = inst_74847);

return statearr_74880;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74863__$1,(12),dchan);
} else {
if((state_val_74864 === (14))){
var inst_74849 = (state_74863[(8)]);
var inst_74854 = cljs.core.apply.call(null,f,inst_74849);
var state_74863__$1 = state_74863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74863__$1,(16),out,inst_74854);
} else {
if((state_val_74864 === (16))){
var inst_74856 = (state_74863[(2)]);
var state_74863__$1 = (function (){var statearr_74881 = state_74863;
(statearr_74881[(12)] = inst_74856);

return statearr_74881;
})();
var statearr_74882_74904 = state_74863__$1;
(statearr_74882_74904[(2)] = null);

(statearr_74882_74904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74864 === (10))){
var inst_74831 = (state_74863[(2)]);
var inst_74832 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_74863__$1 = (function (){var statearr_74883 = state_74863;
(statearr_74883[(13)] = inst_74831);

return statearr_74883;
})();
var statearr_74884_74905 = state_74863__$1;
(statearr_74884_74905[(2)] = inst_74832);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74863__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74864 === (8))){
var inst_74845 = (state_74863[(2)]);
var state_74863__$1 = state_74863;
var statearr_74885_74906 = state_74863__$1;
(statearr_74885_74906[(2)] = inst_74845);

(statearr_74885_74906[(1)] = (5));


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
});})(c__67205__auto___74891,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__67159__auto__,c__67205__auto___74891,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__67160__auto__ = null;
var cljs$core$async$state_machine__67160__auto____0 = (function (){
var statearr_74886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74886[(0)] = cljs$core$async$state_machine__67160__auto__);

(statearr_74886[(1)] = (1));

return statearr_74886;
});
var cljs$core$async$state_machine__67160__auto____1 = (function (state_74863){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_74863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e74887){if((e74887 instanceof Object)){
var ex__67163__auto__ = e74887;
var statearr_74888_74907 = state_74863;
(statearr_74888_74907[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74908 = state_74863;
state_74863 = G__74908;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$state_machine__67160__auto__ = function(state_74863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67160__auto____1.call(this,state_74863);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67160__auto____0;
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67160__auto____1;
return cljs$core$async$state_machine__67160__auto__;
})()
;})(switch__67159__auto__,c__67205__auto___74891,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__67207__auto__ = (function (){var statearr_74889 = f__67206__auto__.call(null);
(statearr_74889[(6)] = c__67205__auto___74891);

return statearr_74889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(c__67205__auto___74891,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__74911 = arguments.length;
switch (G__74911) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__67205__auto___74965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67205__auto___74965,out){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (c__67205__auto___74965,out){
return (function (state_74943){
var state_val_74944 = (state_74943[(1)]);
if((state_val_74944 === (7))){
var inst_74923 = (state_74943[(7)]);
var inst_74922 = (state_74943[(8)]);
var inst_74922__$1 = (state_74943[(2)]);
var inst_74923__$1 = cljs.core.nth.call(null,inst_74922__$1,(0),null);
var inst_74924 = cljs.core.nth.call(null,inst_74922__$1,(1),null);
var inst_74925 = (inst_74923__$1 == null);
var state_74943__$1 = (function (){var statearr_74945 = state_74943;
(statearr_74945[(7)] = inst_74923__$1);

(statearr_74945[(8)] = inst_74922__$1);

(statearr_74945[(9)] = inst_74924);

return statearr_74945;
})();
if(cljs.core.truth_(inst_74925)){
var statearr_74946_74966 = state_74943__$1;
(statearr_74946_74966[(1)] = (8));

} else {
var statearr_74947_74967 = state_74943__$1;
(statearr_74947_74967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74944 === (1))){
var inst_74912 = cljs.core.vec.call(null,chs);
var inst_74913 = inst_74912;
var state_74943__$1 = (function (){var statearr_74948 = state_74943;
(statearr_74948[(10)] = inst_74913);

return statearr_74948;
})();
var statearr_74949_74968 = state_74943__$1;
(statearr_74949_74968[(2)] = null);

(statearr_74949_74968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74944 === (4))){
var inst_74913 = (state_74943[(10)]);
var state_74943__$1 = state_74943;
return cljs.core.async.ioc_alts_BANG_.call(null,state_74943__$1,(7),inst_74913);
} else {
if((state_val_74944 === (6))){
var inst_74939 = (state_74943[(2)]);
var state_74943__$1 = state_74943;
var statearr_74950_74969 = state_74943__$1;
(statearr_74950_74969[(2)] = inst_74939);

(statearr_74950_74969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74944 === (3))){
var inst_74941 = (state_74943[(2)]);
var state_74943__$1 = state_74943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74943__$1,inst_74941);
} else {
if((state_val_74944 === (2))){
var inst_74913 = (state_74943[(10)]);
var inst_74915 = cljs.core.count.call(null,inst_74913);
var inst_74916 = (inst_74915 > (0));
var state_74943__$1 = state_74943;
if(cljs.core.truth_(inst_74916)){
var statearr_74952_74970 = state_74943__$1;
(statearr_74952_74970[(1)] = (4));

} else {
var statearr_74953_74971 = state_74943__$1;
(statearr_74953_74971[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74944 === (11))){
var inst_74913 = (state_74943[(10)]);
var inst_74932 = (state_74943[(2)]);
var tmp74951 = inst_74913;
var inst_74913__$1 = tmp74951;
var state_74943__$1 = (function (){var statearr_74954 = state_74943;
(statearr_74954[(11)] = inst_74932);

(statearr_74954[(10)] = inst_74913__$1);

return statearr_74954;
})();
var statearr_74955_74972 = state_74943__$1;
(statearr_74955_74972[(2)] = null);

(statearr_74955_74972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74944 === (9))){
var inst_74923 = (state_74943[(7)]);
var state_74943__$1 = state_74943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74943__$1,(11),out,inst_74923);
} else {
if((state_val_74944 === (5))){
var inst_74937 = cljs.core.async.close_BANG_.call(null,out);
var state_74943__$1 = state_74943;
var statearr_74956_74973 = state_74943__$1;
(statearr_74956_74973[(2)] = inst_74937);

(statearr_74956_74973[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74944 === (10))){
var inst_74935 = (state_74943[(2)]);
var state_74943__$1 = state_74943;
var statearr_74957_74974 = state_74943__$1;
(statearr_74957_74974[(2)] = inst_74935);

(statearr_74957_74974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74944 === (8))){
var inst_74913 = (state_74943[(10)]);
var inst_74923 = (state_74943[(7)]);
var inst_74922 = (state_74943[(8)]);
var inst_74924 = (state_74943[(9)]);
var inst_74927 = (function (){var cs = inst_74913;
var vec__74918 = inst_74922;
var v = inst_74923;
var c = inst_74924;
return ((function (cs,vec__74918,v,c,inst_74913,inst_74923,inst_74922,inst_74924,state_val_74944,c__67205__auto___74965,out){
return (function (p1__74909_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__74909_SHARP_);
});
;})(cs,vec__74918,v,c,inst_74913,inst_74923,inst_74922,inst_74924,state_val_74944,c__67205__auto___74965,out))
})();
var inst_74928 = cljs.core.filterv.call(null,inst_74927,inst_74913);
var inst_74913__$1 = inst_74928;
var state_74943__$1 = (function (){var statearr_74958 = state_74943;
(statearr_74958[(10)] = inst_74913__$1);

return statearr_74958;
})();
var statearr_74959_74975 = state_74943__$1;
(statearr_74959_74975[(2)] = null);

(statearr_74959_74975[(1)] = (2));


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
});})(c__67205__auto___74965,out))
;
return ((function (switch__67159__auto__,c__67205__auto___74965,out){
return (function() {
var cljs$core$async$state_machine__67160__auto__ = null;
var cljs$core$async$state_machine__67160__auto____0 = (function (){
var statearr_74960 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74960[(0)] = cljs$core$async$state_machine__67160__auto__);

(statearr_74960[(1)] = (1));

return statearr_74960;
});
var cljs$core$async$state_machine__67160__auto____1 = (function (state_74943){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_74943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e74961){if((e74961 instanceof Object)){
var ex__67163__auto__ = e74961;
var statearr_74962_74976 = state_74943;
(statearr_74962_74976[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74977 = state_74943;
state_74943 = G__74977;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$state_machine__67160__auto__ = function(state_74943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67160__auto____1.call(this,state_74943);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67160__auto____0;
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67160__auto____1;
return cljs$core$async$state_machine__67160__auto__;
})()
;})(switch__67159__auto__,c__67205__auto___74965,out))
})();
var state__67207__auto__ = (function (){var statearr_74963 = f__67206__auto__.call(null);
(statearr_74963[(6)] = c__67205__auto___74965);

return statearr_74963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(c__67205__auto___74965,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__74979 = arguments.length;
switch (G__74979) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__67205__auto___75024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67205__auto___75024,out){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (c__67205__auto___75024,out){
return (function (state_75003){
var state_val_75004 = (state_75003[(1)]);
if((state_val_75004 === (7))){
var inst_74985 = (state_75003[(7)]);
var inst_74985__$1 = (state_75003[(2)]);
var inst_74986 = (inst_74985__$1 == null);
var inst_74987 = cljs.core.not.call(null,inst_74986);
var state_75003__$1 = (function (){var statearr_75005 = state_75003;
(statearr_75005[(7)] = inst_74985__$1);

return statearr_75005;
})();
if(inst_74987){
var statearr_75006_75025 = state_75003__$1;
(statearr_75006_75025[(1)] = (8));

} else {
var statearr_75007_75026 = state_75003__$1;
(statearr_75007_75026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (1))){
var inst_74980 = (0);
var state_75003__$1 = (function (){var statearr_75008 = state_75003;
(statearr_75008[(8)] = inst_74980);

return statearr_75008;
})();
var statearr_75009_75027 = state_75003__$1;
(statearr_75009_75027[(2)] = null);

(statearr_75009_75027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (4))){
var state_75003__$1 = state_75003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75003__$1,(7),ch);
} else {
if((state_val_75004 === (6))){
var inst_74998 = (state_75003[(2)]);
var state_75003__$1 = state_75003;
var statearr_75010_75028 = state_75003__$1;
(statearr_75010_75028[(2)] = inst_74998);

(statearr_75010_75028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (3))){
var inst_75000 = (state_75003[(2)]);
var inst_75001 = cljs.core.async.close_BANG_.call(null,out);
var state_75003__$1 = (function (){var statearr_75011 = state_75003;
(statearr_75011[(9)] = inst_75000);

return statearr_75011;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75003__$1,inst_75001);
} else {
if((state_val_75004 === (2))){
var inst_74980 = (state_75003[(8)]);
var inst_74982 = (inst_74980 < n);
var state_75003__$1 = state_75003;
if(cljs.core.truth_(inst_74982)){
var statearr_75012_75029 = state_75003__$1;
(statearr_75012_75029[(1)] = (4));

} else {
var statearr_75013_75030 = state_75003__$1;
(statearr_75013_75030[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (11))){
var inst_74980 = (state_75003[(8)]);
var inst_74990 = (state_75003[(2)]);
var inst_74991 = (inst_74980 + (1));
var inst_74980__$1 = inst_74991;
var state_75003__$1 = (function (){var statearr_75014 = state_75003;
(statearr_75014[(8)] = inst_74980__$1);

(statearr_75014[(10)] = inst_74990);

return statearr_75014;
})();
var statearr_75015_75031 = state_75003__$1;
(statearr_75015_75031[(2)] = null);

(statearr_75015_75031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (9))){
var state_75003__$1 = state_75003;
var statearr_75016_75032 = state_75003__$1;
(statearr_75016_75032[(2)] = null);

(statearr_75016_75032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (5))){
var state_75003__$1 = state_75003;
var statearr_75017_75033 = state_75003__$1;
(statearr_75017_75033[(2)] = null);

(statearr_75017_75033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (10))){
var inst_74995 = (state_75003[(2)]);
var state_75003__$1 = state_75003;
var statearr_75018_75034 = state_75003__$1;
(statearr_75018_75034[(2)] = inst_74995);

(statearr_75018_75034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (8))){
var inst_74985 = (state_75003[(7)]);
var state_75003__$1 = state_75003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_75003__$1,(11),out,inst_74985);
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
});})(c__67205__auto___75024,out))
;
return ((function (switch__67159__auto__,c__67205__auto___75024,out){
return (function() {
var cljs$core$async$state_machine__67160__auto__ = null;
var cljs$core$async$state_machine__67160__auto____0 = (function (){
var statearr_75019 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_75019[(0)] = cljs$core$async$state_machine__67160__auto__);

(statearr_75019[(1)] = (1));

return statearr_75019;
});
var cljs$core$async$state_machine__67160__auto____1 = (function (state_75003){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_75003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e75020){if((e75020 instanceof Object)){
var ex__67163__auto__ = e75020;
var statearr_75021_75035 = state_75003;
(statearr_75021_75035[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75036 = state_75003;
state_75003 = G__75036;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$state_machine__67160__auto__ = function(state_75003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67160__auto____1.call(this,state_75003);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67160__auto____0;
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67160__auto____1;
return cljs$core$async$state_machine__67160__auto__;
})()
;})(switch__67159__auto__,c__67205__auto___75024,out))
})();
var state__67207__auto__ = (function (){var statearr_75022 = f__67206__auto__.call(null);
(statearr_75022[(6)] = c__67205__auto___75024);

return statearr_75022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(c__67205__auto___75024,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async75038 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75038 = (function (f,ch,meta75039){
this.f = f;
this.ch = ch;
this.meta75039 = meta75039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async75038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75040,meta75039__$1){
var self__ = this;
var _75040__$1 = this;
return (new cljs.core.async.t_cljs$core$async75038(self__.f,self__.ch,meta75039__$1));
});

cljs.core.async.t_cljs$core$async75038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75040){
var self__ = this;
var _75040__$1 = this;
return self__.meta75039;
});

cljs.core.async.t_cljs$core$async75038.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async75038.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async75038.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async75038.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async75038.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async75041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75041 = (function (f,ch,meta75039,_,fn1,meta75042){
this.f = f;
this.ch = ch;
this.meta75039 = meta75039;
this._ = _;
this.fn1 = fn1;
this.meta75042 = meta75042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async75041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_75043,meta75042__$1){
var self__ = this;
var _75043__$1 = this;
return (new cljs.core.async.t_cljs$core$async75041(self__.f,self__.ch,self__.meta75039,self__._,self__.fn1,meta75042__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async75041.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_75043){
var self__ = this;
var _75043__$1 = this;
return self__.meta75042;
});})(___$1))
;

cljs.core.async.t_cljs$core$async75041.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async75041.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async75041.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async75041.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__75037_SHARP_){
return f1.call(null,(((p1__75037_SHARP_ == null))?null:self__.f.call(null,p1__75037_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async75041.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75039","meta75039",-1135221074,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async75038","cljs.core.async/t_cljs$core$async75038",-1194947238,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta75042","meta75042",320824353,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async75041.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async75041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75041";

cljs.core.async.t_cljs$core$async75041.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async75041");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75041.
 */
cljs.core.async.__GT_t_cljs$core$async75041 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async75041(f__$1,ch__$1,meta75039__$1,___$2,fn1__$1,meta75042){
return (new cljs.core.async.t_cljs$core$async75041(f__$1,ch__$1,meta75039__$1,___$2,fn1__$1,meta75042));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async75041(self__.f,self__.ch,self__.meta75039,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async75038.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async75038.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async75038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75039","meta75039",-1135221074,null)], null);
});

cljs.core.async.t_cljs$core$async75038.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async75038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75038";

cljs.core.async.t_cljs$core$async75038.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async75038");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75038.
 */
cljs.core.async.__GT_t_cljs$core$async75038 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async75038(f__$1,ch__$1,meta75039){
return (new cljs.core.async.t_cljs$core$async75038(f__$1,ch__$1,meta75039));
});

}

return (new cljs.core.async.t_cljs$core$async75038(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async75044 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75044 = (function (f,ch,meta75045){
this.f = f;
this.ch = ch;
this.meta75045 = meta75045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async75044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75046,meta75045__$1){
var self__ = this;
var _75046__$1 = this;
return (new cljs.core.async.t_cljs$core$async75044(self__.f,self__.ch,meta75045__$1));
});

cljs.core.async.t_cljs$core$async75044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75046){
var self__ = this;
var _75046__$1 = this;
return self__.meta75045;
});

cljs.core.async.t_cljs$core$async75044.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async75044.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async75044.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async75044.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async75044.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async75044.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async75044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75045","meta75045",-989483822,null)], null);
});

cljs.core.async.t_cljs$core$async75044.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async75044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75044";

cljs.core.async.t_cljs$core$async75044.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async75044");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75044.
 */
cljs.core.async.__GT_t_cljs$core$async75044 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async75044(f__$1,ch__$1,meta75045){
return (new cljs.core.async.t_cljs$core$async75044(f__$1,ch__$1,meta75045));
});

}

return (new cljs.core.async.t_cljs$core$async75044(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async75047 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75047 = (function (p,ch,meta75048){
this.p = p;
this.ch = ch;
this.meta75048 = meta75048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async75047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75049,meta75048__$1){
var self__ = this;
var _75049__$1 = this;
return (new cljs.core.async.t_cljs$core$async75047(self__.p,self__.ch,meta75048__$1));
});

cljs.core.async.t_cljs$core$async75047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75049){
var self__ = this;
var _75049__$1 = this;
return self__.meta75048;
});

cljs.core.async.t_cljs$core$async75047.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async75047.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async75047.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async75047.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async75047.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async75047.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async75047.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async75047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75048","meta75048",-944368522,null)], null);
});

cljs.core.async.t_cljs$core$async75047.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async75047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75047";

cljs.core.async.t_cljs$core$async75047.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async75047");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75047.
 */
cljs.core.async.__GT_t_cljs$core$async75047 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async75047(p__$1,ch__$1,meta75048){
return (new cljs.core.async.t_cljs$core$async75047(p__$1,ch__$1,meta75048));
});

}

return (new cljs.core.async.t_cljs$core$async75047(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__75051 = arguments.length;
switch (G__75051) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__67205__auto___75091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67205__auto___75091,out){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (c__67205__auto___75091,out){
return (function (state_75072){
var state_val_75073 = (state_75072[(1)]);
if((state_val_75073 === (7))){
var inst_75068 = (state_75072[(2)]);
var state_75072__$1 = state_75072;
var statearr_75074_75092 = state_75072__$1;
(statearr_75074_75092[(2)] = inst_75068);

(statearr_75074_75092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75073 === (1))){
var state_75072__$1 = state_75072;
var statearr_75075_75093 = state_75072__$1;
(statearr_75075_75093[(2)] = null);

(statearr_75075_75093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75073 === (4))){
var inst_75054 = (state_75072[(7)]);
var inst_75054__$1 = (state_75072[(2)]);
var inst_75055 = (inst_75054__$1 == null);
var state_75072__$1 = (function (){var statearr_75076 = state_75072;
(statearr_75076[(7)] = inst_75054__$1);

return statearr_75076;
})();
if(cljs.core.truth_(inst_75055)){
var statearr_75077_75094 = state_75072__$1;
(statearr_75077_75094[(1)] = (5));

} else {
var statearr_75078_75095 = state_75072__$1;
(statearr_75078_75095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75073 === (6))){
var inst_75054 = (state_75072[(7)]);
var inst_75059 = p.call(null,inst_75054);
var state_75072__$1 = state_75072;
if(cljs.core.truth_(inst_75059)){
var statearr_75079_75096 = state_75072__$1;
(statearr_75079_75096[(1)] = (8));

} else {
var statearr_75080_75097 = state_75072__$1;
(statearr_75080_75097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75073 === (3))){
var inst_75070 = (state_75072[(2)]);
var state_75072__$1 = state_75072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75072__$1,inst_75070);
} else {
if((state_val_75073 === (2))){
var state_75072__$1 = state_75072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75072__$1,(4),ch);
} else {
if((state_val_75073 === (11))){
var inst_75062 = (state_75072[(2)]);
var state_75072__$1 = state_75072;
var statearr_75081_75098 = state_75072__$1;
(statearr_75081_75098[(2)] = inst_75062);

(statearr_75081_75098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75073 === (9))){
var state_75072__$1 = state_75072;
var statearr_75082_75099 = state_75072__$1;
(statearr_75082_75099[(2)] = null);

(statearr_75082_75099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75073 === (5))){
var inst_75057 = cljs.core.async.close_BANG_.call(null,out);
var state_75072__$1 = state_75072;
var statearr_75083_75100 = state_75072__$1;
(statearr_75083_75100[(2)] = inst_75057);

(statearr_75083_75100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75073 === (10))){
var inst_75065 = (state_75072[(2)]);
var state_75072__$1 = (function (){var statearr_75084 = state_75072;
(statearr_75084[(8)] = inst_75065);

return statearr_75084;
})();
var statearr_75085_75101 = state_75072__$1;
(statearr_75085_75101[(2)] = null);

(statearr_75085_75101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75073 === (8))){
var inst_75054 = (state_75072[(7)]);
var state_75072__$1 = state_75072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_75072__$1,(11),out,inst_75054);
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
});})(c__67205__auto___75091,out))
;
return ((function (switch__67159__auto__,c__67205__auto___75091,out){
return (function() {
var cljs$core$async$state_machine__67160__auto__ = null;
var cljs$core$async$state_machine__67160__auto____0 = (function (){
var statearr_75086 = [null,null,null,null,null,null,null,null,null];
(statearr_75086[(0)] = cljs$core$async$state_machine__67160__auto__);

(statearr_75086[(1)] = (1));

return statearr_75086;
});
var cljs$core$async$state_machine__67160__auto____1 = (function (state_75072){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_75072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e75087){if((e75087 instanceof Object)){
var ex__67163__auto__ = e75087;
var statearr_75088_75102 = state_75072;
(statearr_75088_75102[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75103 = state_75072;
state_75072 = G__75103;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$state_machine__67160__auto__ = function(state_75072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67160__auto____1.call(this,state_75072);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67160__auto____0;
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67160__auto____1;
return cljs$core$async$state_machine__67160__auto__;
})()
;})(switch__67159__auto__,c__67205__auto___75091,out))
})();
var state__67207__auto__ = (function (){var statearr_75089 = f__67206__auto__.call(null);
(statearr_75089[(6)] = c__67205__auto___75091);

return statearr_75089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(c__67205__auto___75091,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__75105 = arguments.length;
switch (G__75105) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__67205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67205__auto__){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (c__67205__auto__){
return (function (state_75168){
var state_val_75169 = (state_75168[(1)]);
if((state_val_75169 === (7))){
var inst_75164 = (state_75168[(2)]);
var state_75168__$1 = state_75168;
var statearr_75170_75208 = state_75168__$1;
(statearr_75170_75208[(2)] = inst_75164);

(statearr_75170_75208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75169 === (20))){
var inst_75134 = (state_75168[(7)]);
var inst_75145 = (state_75168[(2)]);
var inst_75146 = cljs.core.next.call(null,inst_75134);
var inst_75120 = inst_75146;
var inst_75121 = null;
var inst_75122 = (0);
var inst_75123 = (0);
var state_75168__$1 = (function (){var statearr_75171 = state_75168;
(statearr_75171[(8)] = inst_75121);

(statearr_75171[(9)] = inst_75120);

(statearr_75171[(10)] = inst_75145);

(statearr_75171[(11)] = inst_75123);

(statearr_75171[(12)] = inst_75122);

return statearr_75171;
})();
var statearr_75172_75209 = state_75168__$1;
(statearr_75172_75209[(2)] = null);

(statearr_75172_75209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75169 === (1))){
var state_75168__$1 = state_75168;
var statearr_75173_75210 = state_75168__$1;
(statearr_75173_75210[(2)] = null);

(statearr_75173_75210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75169 === (4))){
var inst_75109 = (state_75168[(13)]);
var inst_75109__$1 = (state_75168[(2)]);
var inst_75110 = (inst_75109__$1 == null);
var state_75168__$1 = (function (){var statearr_75174 = state_75168;
(statearr_75174[(13)] = inst_75109__$1);

return statearr_75174;
})();
if(cljs.core.truth_(inst_75110)){
var statearr_75175_75211 = state_75168__$1;
(statearr_75175_75211[(1)] = (5));

} else {
var statearr_75176_75212 = state_75168__$1;
(statearr_75176_75212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75169 === (15))){
var state_75168__$1 = state_75168;
var statearr_75180_75213 = state_75168__$1;
(statearr_75180_75213[(2)] = null);

(statearr_75180_75213[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75169 === (21))){
var state_75168__$1 = state_75168;
var statearr_75181_75214 = state_75168__$1;
(statearr_75181_75214[(2)] = null);

(statearr_75181_75214[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75169 === (13))){
var inst_75121 = (state_75168[(8)]);
var inst_75120 = (state_75168[(9)]);
var inst_75123 = (state_75168[(11)]);
var inst_75122 = (state_75168[(12)]);
var inst_75130 = (state_75168[(2)]);
var inst_75131 = (inst_75123 + (1));
var tmp75177 = inst_75121;
var tmp75178 = inst_75120;
var tmp75179 = inst_75122;
var inst_75120__$1 = tmp75178;
var inst_75121__$1 = tmp75177;
var inst_75122__$1 = tmp75179;
var inst_75123__$1 = inst_75131;
var state_75168__$1 = (function (){var statearr_75182 = state_75168;
(statearr_75182[(8)] = inst_75121__$1);

(statearr_75182[(9)] = inst_75120__$1);

(statearr_75182[(11)] = inst_75123__$1);

(statearr_75182[(12)] = inst_75122__$1);

(statearr_75182[(14)] = inst_75130);

return statearr_75182;
})();
var statearr_75183_75215 = state_75168__$1;
(statearr_75183_75215[(2)] = null);

(statearr_75183_75215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75169 === (22))){
var state_75168__$1 = state_75168;
var statearr_75184_75216 = state_75168__$1;
(statearr_75184_75216[(2)] = null);

(statearr_75184_75216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75169 === (6))){
var inst_75109 = (state_75168[(13)]);
var inst_75118 = f.call(null,inst_75109);
var inst_75119 = cljs.core.seq.call(null,inst_75118);
var inst_75120 = inst_75119;
var inst_75121 = null;
var inst_75122 = (0);
var inst_75123 = (0);
var state_75168__$1 = (function (){var statearr_75185 = state_75168;
(statearr_75185[(8)] = inst_75121);

(statearr_75185[(9)] = inst_75120);

(statearr_75185[(11)] = inst_75123);

(statearr_75185[(12)] = inst_75122);

return statearr_75185;
})();
var statearr_75186_75217 = state_75168__$1;
(statearr_75186_75217[(2)] = null);

(statearr_75186_75217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75169 === (17))){
var inst_75134 = (state_75168[(7)]);
var inst_75138 = cljs.core.chunk_first.call(null,inst_75134);
var inst_75139 = cljs.core.chunk_rest.call(null,inst_75134);
var inst_75140 = cljs.core.count.call(null,inst_75138);
var inst_75120 = inst_75139;
var inst_75121 = inst_75138;
var inst_75122 = inst_75140;
var inst_75123 = (0);
var state_75168__$1 = (function (){var statearr_75187 = state_75168;
(statearr_75187[(8)] = inst_75121);

(statearr_75187[(9)] = inst_75120);

(statearr_75187[(11)] = inst_75123);

(statearr_75187[(12)] = inst_75122);

return statearr_75187;
})();
var statearr_75188_75218 = state_75168__$1;
(statearr_75188_75218[(2)] = null);

(statearr_75188_75218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75169 === (3))){
var inst_75166 = (state_75168[(2)]);
var state_75168__$1 = state_75168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75168__$1,inst_75166);
} else {
if((state_val_75169 === (12))){
var inst_75154 = (state_75168[(2)]);
var state_75168__$1 = state_75168;
var statearr_75189_75219 = state_75168__$1;
(statearr_75189_75219[(2)] = inst_75154);

(statearr_75189_75219[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75169 === (2))){
var state_75168__$1 = state_75168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75168__$1,(4),in$);
} else {
if((state_val_75169 === (23))){
var inst_75162 = (state_75168[(2)]);
var state_75168__$1 = state_75168;
var statearr_75190_75220 = state_75168__$1;
(statearr_75190_75220[(2)] = inst_75162);

(statearr_75190_75220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75169 === (19))){
var inst_75149 = (state_75168[(2)]);
var state_75168__$1 = state_75168;
var statearr_75191_75221 = state_75168__$1;
(statearr_75191_75221[(2)] = inst_75149);

(statearr_75191_75221[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75169 === (11))){
var inst_75120 = (state_75168[(9)]);
var inst_75134 = (state_75168[(7)]);
var inst_75134__$1 = cljs.core.seq.call(null,inst_75120);
var state_75168__$1 = (function (){var statearr_75192 = state_75168;
(statearr_75192[(7)] = inst_75134__$1);

return statearr_75192;
})();
if(inst_75134__$1){
var statearr_75193_75222 = state_75168__$1;
(statearr_75193_75222[(1)] = (14));

} else {
var statearr_75194_75223 = state_75168__$1;
(statearr_75194_75223[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75169 === (9))){
var inst_75156 = (state_75168[(2)]);
var inst_75157 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_75168__$1 = (function (){var statearr_75195 = state_75168;
(statearr_75195[(15)] = inst_75156);

return statearr_75195;
})();
if(cljs.core.truth_(inst_75157)){
var statearr_75196_75224 = state_75168__$1;
(statearr_75196_75224[(1)] = (21));

} else {
var statearr_75197_75225 = state_75168__$1;
(statearr_75197_75225[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75169 === (5))){
var inst_75112 = cljs.core.async.close_BANG_.call(null,out);
var state_75168__$1 = state_75168;
var statearr_75198_75226 = state_75168__$1;
(statearr_75198_75226[(2)] = inst_75112);

(statearr_75198_75226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75169 === (14))){
var inst_75134 = (state_75168[(7)]);
var inst_75136 = cljs.core.chunked_seq_QMARK_.call(null,inst_75134);
var state_75168__$1 = state_75168;
if(inst_75136){
var statearr_75199_75227 = state_75168__$1;
(statearr_75199_75227[(1)] = (17));

} else {
var statearr_75200_75228 = state_75168__$1;
(statearr_75200_75228[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75169 === (16))){
var inst_75152 = (state_75168[(2)]);
var state_75168__$1 = state_75168;
var statearr_75201_75229 = state_75168__$1;
(statearr_75201_75229[(2)] = inst_75152);

(statearr_75201_75229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75169 === (10))){
var inst_75121 = (state_75168[(8)]);
var inst_75123 = (state_75168[(11)]);
var inst_75128 = cljs.core._nth.call(null,inst_75121,inst_75123);
var state_75168__$1 = state_75168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_75168__$1,(13),out,inst_75128);
} else {
if((state_val_75169 === (18))){
var inst_75134 = (state_75168[(7)]);
var inst_75143 = cljs.core.first.call(null,inst_75134);
var state_75168__$1 = state_75168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_75168__$1,(20),out,inst_75143);
} else {
if((state_val_75169 === (8))){
var inst_75123 = (state_75168[(11)]);
var inst_75122 = (state_75168[(12)]);
var inst_75125 = (inst_75123 < inst_75122);
var inst_75126 = inst_75125;
var state_75168__$1 = state_75168;
if(cljs.core.truth_(inst_75126)){
var statearr_75202_75230 = state_75168__$1;
(statearr_75202_75230[(1)] = (10));

} else {
var statearr_75203_75231 = state_75168__$1;
(statearr_75203_75231[(1)] = (11));

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
});})(c__67205__auto__))
;
return ((function (switch__67159__auto__,c__67205__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__67160__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__67160__auto____0 = (function (){
var statearr_75204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75204[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__67160__auto__);

(statearr_75204[(1)] = (1));

return statearr_75204;
});
var cljs$core$async$mapcat_STAR__$_state_machine__67160__auto____1 = (function (state_75168){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_75168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e75205){if((e75205 instanceof Object)){
var ex__67163__auto__ = e75205;
var statearr_75206_75232 = state_75168;
(statearr_75206_75232[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75233 = state_75168;
state_75168 = G__75233;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__67160__auto__ = function(state_75168){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__67160__auto____1.call(this,state_75168);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__67160__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__67160__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__67160__auto__;
})()
;})(switch__67159__auto__,c__67205__auto__))
})();
var state__67207__auto__ = (function (){var statearr_75207 = f__67206__auto__.call(null);
(statearr_75207[(6)] = c__67205__auto__);

return statearr_75207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(c__67205__auto__))
);

return c__67205__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__75235 = arguments.length;
switch (G__75235) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__75238 = arguments.length;
switch (G__75238) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__75241 = arguments.length;
switch (G__75241) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__67205__auto___75288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67205__auto___75288,out){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (c__67205__auto___75288,out){
return (function (state_75265){
var state_val_75266 = (state_75265[(1)]);
if((state_val_75266 === (7))){
var inst_75260 = (state_75265[(2)]);
var state_75265__$1 = state_75265;
var statearr_75267_75289 = state_75265__$1;
(statearr_75267_75289[(2)] = inst_75260);

(statearr_75267_75289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (1))){
var inst_75242 = null;
var state_75265__$1 = (function (){var statearr_75268 = state_75265;
(statearr_75268[(7)] = inst_75242);

return statearr_75268;
})();
var statearr_75269_75290 = state_75265__$1;
(statearr_75269_75290[(2)] = null);

(statearr_75269_75290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (4))){
var inst_75245 = (state_75265[(8)]);
var inst_75245__$1 = (state_75265[(2)]);
var inst_75246 = (inst_75245__$1 == null);
var inst_75247 = cljs.core.not.call(null,inst_75246);
var state_75265__$1 = (function (){var statearr_75270 = state_75265;
(statearr_75270[(8)] = inst_75245__$1);

return statearr_75270;
})();
if(inst_75247){
var statearr_75271_75291 = state_75265__$1;
(statearr_75271_75291[(1)] = (5));

} else {
var statearr_75272_75292 = state_75265__$1;
(statearr_75272_75292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (6))){
var state_75265__$1 = state_75265;
var statearr_75273_75293 = state_75265__$1;
(statearr_75273_75293[(2)] = null);

(statearr_75273_75293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (3))){
var inst_75262 = (state_75265[(2)]);
var inst_75263 = cljs.core.async.close_BANG_.call(null,out);
var state_75265__$1 = (function (){var statearr_75274 = state_75265;
(statearr_75274[(9)] = inst_75262);

return statearr_75274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75265__$1,inst_75263);
} else {
if((state_val_75266 === (2))){
var state_75265__$1 = state_75265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75265__$1,(4),ch);
} else {
if((state_val_75266 === (11))){
var inst_75245 = (state_75265[(8)]);
var inst_75254 = (state_75265[(2)]);
var inst_75242 = inst_75245;
var state_75265__$1 = (function (){var statearr_75275 = state_75265;
(statearr_75275[(10)] = inst_75254);

(statearr_75275[(7)] = inst_75242);

return statearr_75275;
})();
var statearr_75276_75294 = state_75265__$1;
(statearr_75276_75294[(2)] = null);

(statearr_75276_75294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (9))){
var inst_75245 = (state_75265[(8)]);
var state_75265__$1 = state_75265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_75265__$1,(11),out,inst_75245);
} else {
if((state_val_75266 === (5))){
var inst_75242 = (state_75265[(7)]);
var inst_75245 = (state_75265[(8)]);
var inst_75249 = cljs.core._EQ_.call(null,inst_75245,inst_75242);
var state_75265__$1 = state_75265;
if(inst_75249){
var statearr_75278_75295 = state_75265__$1;
(statearr_75278_75295[(1)] = (8));

} else {
var statearr_75279_75296 = state_75265__$1;
(statearr_75279_75296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (10))){
var inst_75257 = (state_75265[(2)]);
var state_75265__$1 = state_75265;
var statearr_75280_75297 = state_75265__$1;
(statearr_75280_75297[(2)] = inst_75257);

(statearr_75280_75297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75266 === (8))){
var inst_75242 = (state_75265[(7)]);
var tmp75277 = inst_75242;
var inst_75242__$1 = tmp75277;
var state_75265__$1 = (function (){var statearr_75281 = state_75265;
(statearr_75281[(7)] = inst_75242__$1);

return statearr_75281;
})();
var statearr_75282_75298 = state_75265__$1;
(statearr_75282_75298[(2)] = null);

(statearr_75282_75298[(1)] = (2));


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
});})(c__67205__auto___75288,out))
;
return ((function (switch__67159__auto__,c__67205__auto___75288,out){
return (function() {
var cljs$core$async$state_machine__67160__auto__ = null;
var cljs$core$async$state_machine__67160__auto____0 = (function (){
var statearr_75283 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_75283[(0)] = cljs$core$async$state_machine__67160__auto__);

(statearr_75283[(1)] = (1));

return statearr_75283;
});
var cljs$core$async$state_machine__67160__auto____1 = (function (state_75265){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_75265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e75284){if((e75284 instanceof Object)){
var ex__67163__auto__ = e75284;
var statearr_75285_75299 = state_75265;
(statearr_75285_75299[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75300 = state_75265;
state_75265 = G__75300;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$state_machine__67160__auto__ = function(state_75265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67160__auto____1.call(this,state_75265);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67160__auto____0;
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67160__auto____1;
return cljs$core$async$state_machine__67160__auto__;
})()
;})(switch__67159__auto__,c__67205__auto___75288,out))
})();
var state__67207__auto__ = (function (){var statearr_75286 = f__67206__auto__.call(null);
(statearr_75286[(6)] = c__67205__auto___75288);

return statearr_75286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(c__67205__auto___75288,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__75302 = arguments.length;
switch (G__75302) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__67205__auto___75368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67205__auto___75368,out){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (c__67205__auto___75368,out){
return (function (state_75340){
var state_val_75341 = (state_75340[(1)]);
if((state_val_75341 === (7))){
var inst_75336 = (state_75340[(2)]);
var state_75340__$1 = state_75340;
var statearr_75342_75369 = state_75340__$1;
(statearr_75342_75369[(2)] = inst_75336);

(statearr_75342_75369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75341 === (1))){
var inst_75303 = (new Array(n));
var inst_75304 = inst_75303;
var inst_75305 = (0);
var state_75340__$1 = (function (){var statearr_75343 = state_75340;
(statearr_75343[(7)] = inst_75304);

(statearr_75343[(8)] = inst_75305);

return statearr_75343;
})();
var statearr_75344_75370 = state_75340__$1;
(statearr_75344_75370[(2)] = null);

(statearr_75344_75370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75341 === (4))){
var inst_75308 = (state_75340[(9)]);
var inst_75308__$1 = (state_75340[(2)]);
var inst_75309 = (inst_75308__$1 == null);
var inst_75310 = cljs.core.not.call(null,inst_75309);
var state_75340__$1 = (function (){var statearr_75345 = state_75340;
(statearr_75345[(9)] = inst_75308__$1);

return statearr_75345;
})();
if(inst_75310){
var statearr_75346_75371 = state_75340__$1;
(statearr_75346_75371[(1)] = (5));

} else {
var statearr_75347_75372 = state_75340__$1;
(statearr_75347_75372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75341 === (15))){
var inst_75330 = (state_75340[(2)]);
var state_75340__$1 = state_75340;
var statearr_75348_75373 = state_75340__$1;
(statearr_75348_75373[(2)] = inst_75330);

(statearr_75348_75373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75341 === (13))){
var state_75340__$1 = state_75340;
var statearr_75349_75374 = state_75340__$1;
(statearr_75349_75374[(2)] = null);

(statearr_75349_75374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75341 === (6))){
var inst_75305 = (state_75340[(8)]);
var inst_75326 = (inst_75305 > (0));
var state_75340__$1 = state_75340;
if(cljs.core.truth_(inst_75326)){
var statearr_75350_75375 = state_75340__$1;
(statearr_75350_75375[(1)] = (12));

} else {
var statearr_75351_75376 = state_75340__$1;
(statearr_75351_75376[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75341 === (3))){
var inst_75338 = (state_75340[(2)]);
var state_75340__$1 = state_75340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75340__$1,inst_75338);
} else {
if((state_val_75341 === (12))){
var inst_75304 = (state_75340[(7)]);
var inst_75328 = cljs.core.vec.call(null,inst_75304);
var state_75340__$1 = state_75340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_75340__$1,(15),out,inst_75328);
} else {
if((state_val_75341 === (2))){
var state_75340__$1 = state_75340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75340__$1,(4),ch);
} else {
if((state_val_75341 === (11))){
var inst_75320 = (state_75340[(2)]);
var inst_75321 = (new Array(n));
var inst_75304 = inst_75321;
var inst_75305 = (0);
var state_75340__$1 = (function (){var statearr_75352 = state_75340;
(statearr_75352[(10)] = inst_75320);

(statearr_75352[(7)] = inst_75304);

(statearr_75352[(8)] = inst_75305);

return statearr_75352;
})();
var statearr_75353_75377 = state_75340__$1;
(statearr_75353_75377[(2)] = null);

(statearr_75353_75377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75341 === (9))){
var inst_75304 = (state_75340[(7)]);
var inst_75318 = cljs.core.vec.call(null,inst_75304);
var state_75340__$1 = state_75340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_75340__$1,(11),out,inst_75318);
} else {
if((state_val_75341 === (5))){
var inst_75304 = (state_75340[(7)]);
var inst_75308 = (state_75340[(9)]);
var inst_75313 = (state_75340[(11)]);
var inst_75305 = (state_75340[(8)]);
var inst_75312 = (inst_75304[inst_75305] = inst_75308);
var inst_75313__$1 = (inst_75305 + (1));
var inst_75314 = (inst_75313__$1 < n);
var state_75340__$1 = (function (){var statearr_75354 = state_75340;
(statearr_75354[(11)] = inst_75313__$1);

(statearr_75354[(12)] = inst_75312);

return statearr_75354;
})();
if(cljs.core.truth_(inst_75314)){
var statearr_75355_75378 = state_75340__$1;
(statearr_75355_75378[(1)] = (8));

} else {
var statearr_75356_75379 = state_75340__$1;
(statearr_75356_75379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75341 === (14))){
var inst_75333 = (state_75340[(2)]);
var inst_75334 = cljs.core.async.close_BANG_.call(null,out);
var state_75340__$1 = (function (){var statearr_75358 = state_75340;
(statearr_75358[(13)] = inst_75333);

return statearr_75358;
})();
var statearr_75359_75380 = state_75340__$1;
(statearr_75359_75380[(2)] = inst_75334);

(statearr_75359_75380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75341 === (10))){
var inst_75324 = (state_75340[(2)]);
var state_75340__$1 = state_75340;
var statearr_75360_75381 = state_75340__$1;
(statearr_75360_75381[(2)] = inst_75324);

(statearr_75360_75381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75341 === (8))){
var inst_75304 = (state_75340[(7)]);
var inst_75313 = (state_75340[(11)]);
var tmp75357 = inst_75304;
var inst_75304__$1 = tmp75357;
var inst_75305 = inst_75313;
var state_75340__$1 = (function (){var statearr_75361 = state_75340;
(statearr_75361[(7)] = inst_75304__$1);

(statearr_75361[(8)] = inst_75305);

return statearr_75361;
})();
var statearr_75362_75382 = state_75340__$1;
(statearr_75362_75382[(2)] = null);

(statearr_75362_75382[(1)] = (2));


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
});})(c__67205__auto___75368,out))
;
return ((function (switch__67159__auto__,c__67205__auto___75368,out){
return (function() {
var cljs$core$async$state_machine__67160__auto__ = null;
var cljs$core$async$state_machine__67160__auto____0 = (function (){
var statearr_75363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75363[(0)] = cljs$core$async$state_machine__67160__auto__);

(statearr_75363[(1)] = (1));

return statearr_75363;
});
var cljs$core$async$state_machine__67160__auto____1 = (function (state_75340){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_75340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e75364){if((e75364 instanceof Object)){
var ex__67163__auto__ = e75364;
var statearr_75365_75383 = state_75340;
(statearr_75365_75383[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75384 = state_75340;
state_75340 = G__75384;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$state_machine__67160__auto__ = function(state_75340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67160__auto____1.call(this,state_75340);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67160__auto____0;
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67160__auto____1;
return cljs$core$async$state_machine__67160__auto__;
})()
;})(switch__67159__auto__,c__67205__auto___75368,out))
})();
var state__67207__auto__ = (function (){var statearr_75366 = f__67206__auto__.call(null);
(statearr_75366[(6)] = c__67205__auto___75368);

return statearr_75366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(c__67205__auto___75368,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__75386 = arguments.length;
switch (G__75386) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__67205__auto___75456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67205__auto___75456,out){
return (function (){
var f__67206__auto__ = (function (){var switch__67159__auto__ = ((function (c__67205__auto___75456,out){
return (function (state_75428){
var state_val_75429 = (state_75428[(1)]);
if((state_val_75429 === (7))){
var inst_75424 = (state_75428[(2)]);
var state_75428__$1 = state_75428;
var statearr_75430_75457 = state_75428__$1;
(statearr_75430_75457[(2)] = inst_75424);

(statearr_75430_75457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75429 === (1))){
var inst_75387 = [];
var inst_75388 = inst_75387;
var inst_75389 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_75428__$1 = (function (){var statearr_75431 = state_75428;
(statearr_75431[(7)] = inst_75389);

(statearr_75431[(8)] = inst_75388);

return statearr_75431;
})();
var statearr_75432_75458 = state_75428__$1;
(statearr_75432_75458[(2)] = null);

(statearr_75432_75458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75429 === (4))){
var inst_75392 = (state_75428[(9)]);
var inst_75392__$1 = (state_75428[(2)]);
var inst_75393 = (inst_75392__$1 == null);
var inst_75394 = cljs.core.not.call(null,inst_75393);
var state_75428__$1 = (function (){var statearr_75433 = state_75428;
(statearr_75433[(9)] = inst_75392__$1);

return statearr_75433;
})();
if(inst_75394){
var statearr_75434_75459 = state_75428__$1;
(statearr_75434_75459[(1)] = (5));

} else {
var statearr_75435_75460 = state_75428__$1;
(statearr_75435_75460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75429 === (15))){
var inst_75418 = (state_75428[(2)]);
var state_75428__$1 = state_75428;
var statearr_75436_75461 = state_75428__$1;
(statearr_75436_75461[(2)] = inst_75418);

(statearr_75436_75461[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75429 === (13))){
var state_75428__$1 = state_75428;
var statearr_75437_75462 = state_75428__$1;
(statearr_75437_75462[(2)] = null);

(statearr_75437_75462[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75429 === (6))){
var inst_75388 = (state_75428[(8)]);
var inst_75413 = inst_75388.length;
var inst_75414 = (inst_75413 > (0));
var state_75428__$1 = state_75428;
if(cljs.core.truth_(inst_75414)){
var statearr_75438_75463 = state_75428__$1;
(statearr_75438_75463[(1)] = (12));

} else {
var statearr_75439_75464 = state_75428__$1;
(statearr_75439_75464[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75429 === (3))){
var inst_75426 = (state_75428[(2)]);
var state_75428__$1 = state_75428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75428__$1,inst_75426);
} else {
if((state_val_75429 === (12))){
var inst_75388 = (state_75428[(8)]);
var inst_75416 = cljs.core.vec.call(null,inst_75388);
var state_75428__$1 = state_75428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_75428__$1,(15),out,inst_75416);
} else {
if((state_val_75429 === (2))){
var state_75428__$1 = state_75428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75428__$1,(4),ch);
} else {
if((state_val_75429 === (11))){
var inst_75392 = (state_75428[(9)]);
var inst_75396 = (state_75428[(10)]);
var inst_75406 = (state_75428[(2)]);
var inst_75407 = [];
var inst_75408 = inst_75407.push(inst_75392);
var inst_75388 = inst_75407;
var inst_75389 = inst_75396;
var state_75428__$1 = (function (){var statearr_75440 = state_75428;
(statearr_75440[(7)] = inst_75389);

(statearr_75440[(11)] = inst_75406);

(statearr_75440[(8)] = inst_75388);

(statearr_75440[(12)] = inst_75408);

return statearr_75440;
})();
var statearr_75441_75465 = state_75428__$1;
(statearr_75441_75465[(2)] = null);

(statearr_75441_75465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75429 === (9))){
var inst_75388 = (state_75428[(8)]);
var inst_75404 = cljs.core.vec.call(null,inst_75388);
var state_75428__$1 = state_75428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_75428__$1,(11),out,inst_75404);
} else {
if((state_val_75429 === (5))){
var inst_75392 = (state_75428[(9)]);
var inst_75389 = (state_75428[(7)]);
var inst_75396 = (state_75428[(10)]);
var inst_75396__$1 = f.call(null,inst_75392);
var inst_75397 = cljs.core._EQ_.call(null,inst_75396__$1,inst_75389);
var inst_75398 = cljs.core.keyword_identical_QMARK_.call(null,inst_75389,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_75399 = ((inst_75397) || (inst_75398));
var state_75428__$1 = (function (){var statearr_75442 = state_75428;
(statearr_75442[(10)] = inst_75396__$1);

return statearr_75442;
})();
if(cljs.core.truth_(inst_75399)){
var statearr_75443_75466 = state_75428__$1;
(statearr_75443_75466[(1)] = (8));

} else {
var statearr_75444_75467 = state_75428__$1;
(statearr_75444_75467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75429 === (14))){
var inst_75421 = (state_75428[(2)]);
var inst_75422 = cljs.core.async.close_BANG_.call(null,out);
var state_75428__$1 = (function (){var statearr_75446 = state_75428;
(statearr_75446[(13)] = inst_75421);

return statearr_75446;
})();
var statearr_75447_75468 = state_75428__$1;
(statearr_75447_75468[(2)] = inst_75422);

(statearr_75447_75468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75429 === (10))){
var inst_75411 = (state_75428[(2)]);
var state_75428__$1 = state_75428;
var statearr_75448_75469 = state_75428__$1;
(statearr_75448_75469[(2)] = inst_75411);

(statearr_75448_75469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75429 === (8))){
var inst_75392 = (state_75428[(9)]);
var inst_75388 = (state_75428[(8)]);
var inst_75396 = (state_75428[(10)]);
var inst_75401 = inst_75388.push(inst_75392);
var tmp75445 = inst_75388;
var inst_75388__$1 = tmp75445;
var inst_75389 = inst_75396;
var state_75428__$1 = (function (){var statearr_75449 = state_75428;
(statearr_75449[(7)] = inst_75389);

(statearr_75449[(8)] = inst_75388__$1);

(statearr_75449[(14)] = inst_75401);

return statearr_75449;
})();
var statearr_75450_75470 = state_75428__$1;
(statearr_75450_75470[(2)] = null);

(statearr_75450_75470[(1)] = (2));


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
});})(c__67205__auto___75456,out))
;
return ((function (switch__67159__auto__,c__67205__auto___75456,out){
return (function() {
var cljs$core$async$state_machine__67160__auto__ = null;
var cljs$core$async$state_machine__67160__auto____0 = (function (){
var statearr_75451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75451[(0)] = cljs$core$async$state_machine__67160__auto__);

(statearr_75451[(1)] = (1));

return statearr_75451;
});
var cljs$core$async$state_machine__67160__auto____1 = (function (state_75428){
while(true){
var ret_value__67161__auto__ = (function (){try{while(true){
var result__67162__auto__ = switch__67159__auto__.call(null,state_75428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67162__auto__;
}
break;
}
}catch (e75452){if((e75452 instanceof Object)){
var ex__67163__auto__ = e75452;
var statearr_75453_75471 = state_75428;
(statearr_75453_75471[(5)] = ex__67163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75472 = state_75428;
state_75428 = G__75472;
continue;
} else {
return ret_value__67161__auto__;
}
break;
}
});
cljs$core$async$state_machine__67160__auto__ = function(state_75428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67160__auto____1.call(this,state_75428);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67160__auto____0;
cljs$core$async$state_machine__67160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67160__auto____1;
return cljs$core$async$state_machine__67160__auto__;
})()
;})(switch__67159__auto__,c__67205__auto___75456,out))
})();
var state__67207__auto__ = (function (){var statearr_75454 = f__67206__auto__.call(null);
(statearr_75454[(6)] = c__67205__auto___75456);

return statearr_75454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67207__auto__);
});})(c__67205__auto___75456,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
