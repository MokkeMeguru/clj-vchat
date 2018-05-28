// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_79547 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__79548 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__79549 = null;
var count__79550 = (0);
var i__79551 = (0);
while(true){
if((i__79551 < count__79550)){
var vec__79552 = cljs.core._nth.call(null,chunk__79549,i__79551);
var effect_key = cljs.core.nth.call(null,vec__79552,(0),null);
var effect_value = cljs.core.nth.call(null,vec__79552,(1),null);
var temp__5455__auto___79568 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___79568)){
var effect_fn_79569 = temp__5455__auto___79568;
effect_fn_79569.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__79570 = seq__79548;
var G__79571 = chunk__79549;
var G__79572 = count__79550;
var G__79573 = (i__79551 + (1));
seq__79548 = G__79570;
chunk__79549 = G__79571;
count__79550 = G__79572;
i__79551 = G__79573;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__79548);
if(temp__5457__auto__){
var seq__79548__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79548__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__79548__$1);
var G__79574 = cljs.core.chunk_rest.call(null,seq__79548__$1);
var G__79575 = c__4319__auto__;
var G__79576 = cljs.core.count.call(null,c__4319__auto__);
var G__79577 = (0);
seq__79548 = G__79574;
chunk__79549 = G__79575;
count__79550 = G__79576;
i__79551 = G__79577;
continue;
} else {
var vec__79555 = cljs.core.first.call(null,seq__79548__$1);
var effect_key = cljs.core.nth.call(null,vec__79555,(0),null);
var effect_value = cljs.core.nth.call(null,vec__79555,(1),null);
var temp__5455__auto___79578 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___79578)){
var effect_fn_79579 = temp__5455__auto___79578;
effect_fn_79579.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__79580 = cljs.core.next.call(null,seq__79548__$1);
var G__79581 = null;
var G__79582 = (0);
var G__79583 = (0);
seq__79548 = G__79580;
chunk__79549 = G__79581;
count__79550 = G__79582;
i__79551 = G__79583;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__77115__auto___79584 = re_frame.interop.now.call(null);
var duration__77116__auto___79585 = (end__77115__auto___79584 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__77116__auto___79585,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__77115__auto___79584);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_79547;
}} else {
var seq__79558 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__79559 = null;
var count__79560 = (0);
var i__79561 = (0);
while(true){
if((i__79561 < count__79560)){
var vec__79562 = cljs.core._nth.call(null,chunk__79559,i__79561);
var effect_key = cljs.core.nth.call(null,vec__79562,(0),null);
var effect_value = cljs.core.nth.call(null,vec__79562,(1),null);
var temp__5455__auto___79586 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___79586)){
var effect_fn_79587 = temp__5455__auto___79586;
effect_fn_79587.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__79588 = seq__79558;
var G__79589 = chunk__79559;
var G__79590 = count__79560;
var G__79591 = (i__79561 + (1));
seq__79558 = G__79588;
chunk__79559 = G__79589;
count__79560 = G__79590;
i__79561 = G__79591;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__79558);
if(temp__5457__auto__){
var seq__79558__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79558__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__79558__$1);
var G__79592 = cljs.core.chunk_rest.call(null,seq__79558__$1);
var G__79593 = c__4319__auto__;
var G__79594 = cljs.core.count.call(null,c__4319__auto__);
var G__79595 = (0);
seq__79558 = G__79592;
chunk__79559 = G__79593;
count__79560 = G__79594;
i__79561 = G__79595;
continue;
} else {
var vec__79565 = cljs.core.first.call(null,seq__79558__$1);
var effect_key = cljs.core.nth.call(null,vec__79565,(0),null);
var effect_value = cljs.core.nth.call(null,vec__79565,(1),null);
var temp__5455__auto___79596 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___79596)){
var effect_fn_79597 = temp__5455__auto___79596;
effect_fn_79597.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__79598 = cljs.core.next.call(null,seq__79558__$1);
var G__79599 = null;
var G__79600 = (0);
var G__79601 = (0);
seq__79558 = G__79598;
chunk__79559 = G__79599;
count__79560 = G__79600;
i__79561 = G__79601;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__79602 = cljs.core.seq.call(null,value);
var chunk__79603 = null;
var count__79604 = (0);
var i__79605 = (0);
while(true){
if((i__79605 < count__79604)){
var map__79606 = cljs.core._nth.call(null,chunk__79603,i__79605);
var map__79606__$1 = ((((!((map__79606 == null)))?(((((map__79606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79606):map__79606);
var effect = map__79606__$1;
var ms = cljs.core.get.call(null,map__79606__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__79606__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__79602,chunk__79603,count__79604,i__79605,map__79606,map__79606__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__79602,chunk__79603,count__79604,i__79605,map__79606,map__79606__$1,effect,ms,dispatch))
,ms);
}


var G__79610 = seq__79602;
var G__79611 = chunk__79603;
var G__79612 = count__79604;
var G__79613 = (i__79605 + (1));
seq__79602 = G__79610;
chunk__79603 = G__79611;
count__79604 = G__79612;
i__79605 = G__79613;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__79602);
if(temp__5457__auto__){
var seq__79602__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79602__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__79602__$1);
var G__79614 = cljs.core.chunk_rest.call(null,seq__79602__$1);
var G__79615 = c__4319__auto__;
var G__79616 = cljs.core.count.call(null,c__4319__auto__);
var G__79617 = (0);
seq__79602 = G__79614;
chunk__79603 = G__79615;
count__79604 = G__79616;
i__79605 = G__79617;
continue;
} else {
var map__79608 = cljs.core.first.call(null,seq__79602__$1);
var map__79608__$1 = ((((!((map__79608 == null)))?(((((map__79608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79608):map__79608);
var effect = map__79608__$1;
var ms = cljs.core.get.call(null,map__79608__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__79608__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__79602,chunk__79603,count__79604,i__79605,map__79608,map__79608__$1,effect,ms,dispatch,seq__79602__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__79602,chunk__79603,count__79604,i__79605,map__79608,map__79608__$1,effect,ms,dispatch,seq__79602__$1,temp__5457__auto__))
,ms);
}


var G__79618 = cljs.core.next.call(null,seq__79602__$1);
var G__79619 = null;
var G__79620 = (0);
var G__79621 = (0);
seq__79602 = G__79618;
chunk__79603 = G__79619;
count__79604 = G__79620;
i__79605 = G__79621;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__79622 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__79623 = null;
var count__79624 = (0);
var i__79625 = (0);
while(true){
if((i__79625 < count__79624)){
var event = cljs.core._nth.call(null,chunk__79623,i__79625);
re_frame.router.dispatch.call(null,event);


var G__79626 = seq__79622;
var G__79627 = chunk__79623;
var G__79628 = count__79624;
var G__79629 = (i__79625 + (1));
seq__79622 = G__79626;
chunk__79623 = G__79627;
count__79624 = G__79628;
i__79625 = G__79629;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__79622);
if(temp__5457__auto__){
var seq__79622__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79622__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__79622__$1);
var G__79630 = cljs.core.chunk_rest.call(null,seq__79622__$1);
var G__79631 = c__4319__auto__;
var G__79632 = cljs.core.count.call(null,c__4319__auto__);
var G__79633 = (0);
seq__79622 = G__79630;
chunk__79623 = G__79631;
count__79624 = G__79632;
i__79625 = G__79633;
continue;
} else {
var event = cljs.core.first.call(null,seq__79622__$1);
re_frame.router.dispatch.call(null,event);


var G__79634 = cljs.core.next.call(null,seq__79622__$1);
var G__79635 = null;
var G__79636 = (0);
var G__79637 = (0);
seq__79622 = G__79634;
chunk__79623 = G__79635;
count__79624 = G__79636;
i__79625 = G__79637;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__79638 = cljs.core.seq.call(null,value);
var chunk__79639 = null;
var count__79640 = (0);
var i__79641 = (0);
while(true){
if((i__79641 < count__79640)){
var event = cljs.core._nth.call(null,chunk__79639,i__79641);
clear_event.call(null,event);


var G__79642 = seq__79638;
var G__79643 = chunk__79639;
var G__79644 = count__79640;
var G__79645 = (i__79641 + (1));
seq__79638 = G__79642;
chunk__79639 = G__79643;
count__79640 = G__79644;
i__79641 = G__79645;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__79638);
if(temp__5457__auto__){
var seq__79638__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79638__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__79638__$1);
var G__79646 = cljs.core.chunk_rest.call(null,seq__79638__$1);
var G__79647 = c__4319__auto__;
var G__79648 = cljs.core.count.call(null,c__4319__auto__);
var G__79649 = (0);
seq__79638 = G__79646;
chunk__79639 = G__79647;
count__79640 = G__79648;
i__79641 = G__79649;
continue;
} else {
var event = cljs.core.first.call(null,seq__79638__$1);
clear_event.call(null,event);


var G__79650 = cljs.core.next.call(null,seq__79638__$1);
var G__79651 = null;
var G__79652 = (0);
var G__79653 = (0);
seq__79638 = G__79650;
chunk__79639 = G__79651;
count__79640 = G__79652;
i__79641 = G__79653;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
