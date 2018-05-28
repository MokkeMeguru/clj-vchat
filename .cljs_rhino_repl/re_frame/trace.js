// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__79409){
var map__79410 = p__79409;
var map__79410__$1 = ((((!((map__79410 == null)))?(((((map__79410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79410):map__79410);
var operation = cljs.core.get.call(null,map__79410__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__79410__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__79410__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__79410__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3922__auto__ = child_of;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__79412_79424 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__79413_79425 = null;
var count__79414_79426 = (0);
var i__79415_79427 = (0);
while(true){
if((i__79415_79427 < count__79414_79426)){
var vec__79416_79428 = cljs.core._nth.call(null,chunk__79413_79425,i__79415_79427);
var k_79429 = cljs.core.nth.call(null,vec__79416_79428,(0),null);
var cb_79430 = cljs.core.nth.call(null,vec__79416_79428,(1),null);
try{cb_79430.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e79419){var e_79431 = e79419;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_79429,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_79431);
}

var G__79432 = seq__79412_79424;
var G__79433 = chunk__79413_79425;
var G__79434 = count__79414_79426;
var G__79435 = (i__79415_79427 + (1));
seq__79412_79424 = G__79432;
chunk__79413_79425 = G__79433;
count__79414_79426 = G__79434;
i__79415_79427 = G__79435;
continue;
} else {
var temp__5457__auto___79436 = cljs.core.seq.call(null,seq__79412_79424);
if(temp__5457__auto___79436){
var seq__79412_79437__$1 = temp__5457__auto___79436;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79412_79437__$1)){
var c__4319__auto___79438 = cljs.core.chunk_first.call(null,seq__79412_79437__$1);
var G__79439 = cljs.core.chunk_rest.call(null,seq__79412_79437__$1);
var G__79440 = c__4319__auto___79438;
var G__79441 = cljs.core.count.call(null,c__4319__auto___79438);
var G__79442 = (0);
seq__79412_79424 = G__79439;
chunk__79413_79425 = G__79440;
count__79414_79426 = G__79441;
i__79415_79427 = G__79442;
continue;
} else {
var vec__79420_79443 = cljs.core.first.call(null,seq__79412_79437__$1);
var k_79444 = cljs.core.nth.call(null,vec__79420_79443,(0),null);
var cb_79445 = cljs.core.nth.call(null,vec__79420_79443,(1),null);
try{cb_79445.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e79423){var e_79446 = e79423;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_79444,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_79446);
}

var G__79447 = cljs.core.next.call(null,seq__79412_79437__$1);
var G__79448 = null;
var G__79449 = (0);
var G__79450 = (0);
seq__79412_79424 = G__79447;
chunk__79413_79425 = G__79448;
count__79414_79426 = G__79449;
i__79415_79427 = G__79450;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
