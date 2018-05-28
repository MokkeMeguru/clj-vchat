// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__64429){
var map__64430 = p__64429;
var map__64430__$1 = ((((!((map__64430 == null)))?(((((map__64430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64430):map__64430);
var m = map__64430__$1;
var n = cljs.core.get.call(null,map__64430__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__64430__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__64432_64454 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__64433_64455 = null;
var count__64434_64456 = (0);
var i__64435_64457 = (0);
while(true){
if((i__64435_64457 < count__64434_64456)){
var f_64458 = cljs.core._nth.call(null,chunk__64433_64455,i__64435_64457);
cljs.core.println.call(null,"  ",f_64458);


var G__64459 = seq__64432_64454;
var G__64460 = chunk__64433_64455;
var G__64461 = count__64434_64456;
var G__64462 = (i__64435_64457 + (1));
seq__64432_64454 = G__64459;
chunk__64433_64455 = G__64460;
count__64434_64456 = G__64461;
i__64435_64457 = G__64462;
continue;
} else {
var temp__5457__auto___64463 = cljs.core.seq.call(null,seq__64432_64454);
if(temp__5457__auto___64463){
var seq__64432_64464__$1 = temp__5457__auto___64463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64432_64464__$1)){
var c__4319__auto___64465 = cljs.core.chunk_first.call(null,seq__64432_64464__$1);
var G__64466 = cljs.core.chunk_rest.call(null,seq__64432_64464__$1);
var G__64467 = c__4319__auto___64465;
var G__64468 = cljs.core.count.call(null,c__4319__auto___64465);
var G__64469 = (0);
seq__64432_64454 = G__64466;
chunk__64433_64455 = G__64467;
count__64434_64456 = G__64468;
i__64435_64457 = G__64469;
continue;
} else {
var f_64470 = cljs.core.first.call(null,seq__64432_64464__$1);
cljs.core.println.call(null,"  ",f_64470);


var G__64471 = cljs.core.next.call(null,seq__64432_64464__$1);
var G__64472 = null;
var G__64473 = (0);
var G__64474 = (0);
seq__64432_64454 = G__64471;
chunk__64433_64455 = G__64472;
count__64434_64456 = G__64473;
i__64435_64457 = G__64474;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_64475 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_64475);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_64475)))?cljs.core.second.call(null,arglists_64475):arglists_64475));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__64436_64476 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__64437_64477 = null;
var count__64438_64478 = (0);
var i__64439_64479 = (0);
while(true){
if((i__64439_64479 < count__64438_64478)){
var vec__64440_64480 = cljs.core._nth.call(null,chunk__64437_64477,i__64439_64479);
var name_64481 = cljs.core.nth.call(null,vec__64440_64480,(0),null);
var map__64443_64482 = cljs.core.nth.call(null,vec__64440_64480,(1),null);
var map__64443_64483__$1 = ((((!((map__64443_64482 == null)))?(((((map__64443_64482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64443_64482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64443_64482):map__64443_64482);
var doc_64484 = cljs.core.get.call(null,map__64443_64483__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_64485 = cljs.core.get.call(null,map__64443_64483__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_64481);

cljs.core.println.call(null," ",arglists_64485);

if(cljs.core.truth_(doc_64484)){
cljs.core.println.call(null," ",doc_64484);
} else {
}


var G__64486 = seq__64436_64476;
var G__64487 = chunk__64437_64477;
var G__64488 = count__64438_64478;
var G__64489 = (i__64439_64479 + (1));
seq__64436_64476 = G__64486;
chunk__64437_64477 = G__64487;
count__64438_64478 = G__64488;
i__64439_64479 = G__64489;
continue;
} else {
var temp__5457__auto___64490 = cljs.core.seq.call(null,seq__64436_64476);
if(temp__5457__auto___64490){
var seq__64436_64491__$1 = temp__5457__auto___64490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64436_64491__$1)){
var c__4319__auto___64492 = cljs.core.chunk_first.call(null,seq__64436_64491__$1);
var G__64493 = cljs.core.chunk_rest.call(null,seq__64436_64491__$1);
var G__64494 = c__4319__auto___64492;
var G__64495 = cljs.core.count.call(null,c__4319__auto___64492);
var G__64496 = (0);
seq__64436_64476 = G__64493;
chunk__64437_64477 = G__64494;
count__64438_64478 = G__64495;
i__64439_64479 = G__64496;
continue;
} else {
var vec__64445_64497 = cljs.core.first.call(null,seq__64436_64491__$1);
var name_64498 = cljs.core.nth.call(null,vec__64445_64497,(0),null);
var map__64448_64499 = cljs.core.nth.call(null,vec__64445_64497,(1),null);
var map__64448_64500__$1 = ((((!((map__64448_64499 == null)))?(((((map__64448_64499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64448_64499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64448_64499):map__64448_64499);
var doc_64501 = cljs.core.get.call(null,map__64448_64500__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_64502 = cljs.core.get.call(null,map__64448_64500__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_64498);

cljs.core.println.call(null," ",arglists_64502);

if(cljs.core.truth_(doc_64501)){
cljs.core.println.call(null," ",doc_64501);
} else {
}


var G__64503 = cljs.core.next.call(null,seq__64436_64491__$1);
var G__64504 = null;
var G__64505 = (0);
var G__64506 = (0);
seq__64436_64476 = G__64503;
chunk__64437_64477 = G__64504;
count__64438_64478 = G__64505;
i__64439_64479 = G__64506;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__64450 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__64451 = null;
var count__64452 = (0);
var i__64453 = (0);
while(true){
if((i__64453 < count__64452)){
var role = cljs.core._nth.call(null,chunk__64451,i__64453);
var temp__5457__auto___64507__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___64507__$1)){
var spec_64508 = temp__5457__auto___64507__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_64508));
} else {
}


var G__64509 = seq__64450;
var G__64510 = chunk__64451;
var G__64511 = count__64452;
var G__64512 = (i__64453 + (1));
seq__64450 = G__64509;
chunk__64451 = G__64510;
count__64452 = G__64511;
i__64453 = G__64512;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__64450);
if(temp__5457__auto____$1){
var seq__64450__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64450__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__64450__$1);
var G__64513 = cljs.core.chunk_rest.call(null,seq__64450__$1);
var G__64514 = c__4319__auto__;
var G__64515 = cljs.core.count.call(null,c__4319__auto__);
var G__64516 = (0);
seq__64450 = G__64513;
chunk__64451 = G__64514;
count__64452 = G__64515;
i__64453 = G__64516;
continue;
} else {
var role = cljs.core.first.call(null,seq__64450__$1);
var temp__5457__auto___64517__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___64517__$2)){
var spec_64518 = temp__5457__auto___64517__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_64518));
} else {
}


var G__64519 = cljs.core.next.call(null,seq__64450__$1);
var G__64520 = null;
var G__64521 = (0);
var G__64522 = (0);
seq__64450 = G__64519;
chunk__64451 = G__64520;
count__64452 = G__64521;
i__64453 = G__64522;
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

//# sourceMappingURL=repl.js.map
