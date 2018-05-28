// Compiled by ClojureScript 1.10.238 {}
goog.provide('clj_vchats.events');
goog.require('cljs.core');
goog.require('clj_vchats.db');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return clj_vchats.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),(function (db,p__79884){
var vec__79885 = p__79884;
var _ = cljs.core.nth.call(null,vec__79885,(0),null);
var page = cljs.core.nth.call(null,vec__79885,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page","page",849072397),page);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-docs","set-docs",405672054),(function (db,p__79888){
var vec__79889 = p__79888;
var _ = cljs.core.nth.call(null,vec__79889,(0),null);
var docs = cljs.core.nth.call(null,vec__79889,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"docs","docs",-1974280502),docs);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"page","page",849072397),(function (db,_){
return new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"docs","docs",-1974280502),(function (db,_){
return new cljs.core.Keyword(null,"docs","docs",-1974280502).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=events.js.map
