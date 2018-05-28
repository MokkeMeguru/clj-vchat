// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__76838__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__76838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76839__i = 0, G__76839__a = new Array(arguments.length -  0);
while (G__76839__i < G__76839__a.length) {G__76839__a[G__76839__i] = arguments[G__76839__i + 0]; ++G__76839__i;}
  args = new cljs.core.IndexedSeq(G__76839__a,0,null);
} 
return G__76838__delegate.call(this,args);};
G__76838.cljs$lang$maxFixedArity = 0;
G__76838.cljs$lang$applyTo = (function (arglist__76840){
var args = cljs.core.seq(arglist__76840);
return G__76838__delegate(args);
});
G__76838.cljs$core$IFn$_invoke$arity$variadic = G__76838__delegate;
return G__76838;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__76841__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__76841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76842__i = 0, G__76842__a = new Array(arguments.length -  0);
while (G__76842__i < G__76842__a.length) {G__76842__a[G__76842__i] = arguments[G__76842__i + 0]; ++G__76842__i;}
  args = new cljs.core.IndexedSeq(G__76842__a,0,null);
} 
return G__76841__delegate.call(this,args);};
G__76841.cljs$lang$maxFixedArity = 0;
G__76841.cljs$lang$applyTo = (function (arglist__76843){
var args = cljs.core.seq(arglist__76843);
return G__76841__delegate(args);
});
G__76841.cljs$core$IFn$_invoke$arity$variadic = G__76841__delegate;
return G__76841;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
