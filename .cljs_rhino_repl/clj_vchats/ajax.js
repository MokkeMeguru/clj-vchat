// Compiled by ClojureScript 1.10.238 {}
goog.provide('clj_vchats.ajax');
goog.require('cljs.core');
goog.require('ajax.core');
clj_vchats.ajax.local_uri_QMARK_ = (function clj_vchats$ajax$local_uri_QMARK_(p__78564){
var map__78565 = p__78564;
var map__78565__$1 = ((((!((map__78565 == null)))?(((((map__78565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78565):map__78565);
var uri = cljs.core.get.call(null,map__78565__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
return cljs.core.not.call(null,cljs.core.re_find.call(null,/^\w+?:\/\//,uri));
});
clj_vchats.ajax.default_headers = (function clj_vchats$ajax$default_headers(request){
if(cljs.core.truth_(clj_vchats.ajax.local_uri_QMARK_.call(null,request))){
return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__78567_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["x-csrf-token",csrfToken], null),p1__78567_SHARP_);
}));
} else {
return request;
}
});
clj_vchats.ajax.load_interceptors_BANG_ = (function clj_vchats$ajax$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.call(null,ajax.core.default_interceptors,cljs.core.conj,ajax.core.to_interceptor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default headers",new cljs.core.Keyword(null,"request","request",1772954723),clj_vchats.ajax.default_headers], null)));
});

//# sourceMappingURL=ajax.js.map