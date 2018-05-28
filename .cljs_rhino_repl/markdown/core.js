// Compiled by ClojureScript 1.10.238 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__78807){
var map__78808 = p__78807;
var map__78808__$1 = ((((!((map__78808 == null)))?(((((map__78808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78808):map__78808);
var replacement_transformers = cljs.core.get.call(null,map__78808__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__78808__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__78808__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__78808,map__78808__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_78810 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__78811 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR_78810,map__78808,map__78808__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__78814,transformer){
var vec__78815 = p__78814;
var text = cljs.core.nth.call(null,vec__78815,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__78815,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR_78810,map__78808,map__78808__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__3922__auto__ = replacement_transformers;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__78811,(0),null);
var new_state = cljs.core.nth.call(null,vec__78811,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_78810;
}});
;})(map__78808,map__78808__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4502__auto__ = [];
var len__4499__auto___78820 = arguments.length;
var i__4500__auto___78821 = (0);
while(true){
if((i__4500__auto___78821 < len__4499__auto___78820)){
args__4502__auto__.push((arguments[i__4500__auto___78821]));

var G__78822 = (i__4500__auto___78821 + (1));
i__4500__auto___78821 = G__78822;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.format.cljs$lang$applyTo = (function (seq78818){
var G__78819 = cljs.core.first.call(null,seq78818);
var seq78818__$1 = cljs.core.next.call(null,seq78818);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78819,seq78818__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__78823_78827 = cljs.core.seq.call(null,lines);
var chunk__78824_78828 = null;
var count__78825_78829 = (0);
var i__78826_78830 = (0);
while(true){
if((i__78826_78830 < count__78825_78829)){
var line_78831 = cljs.core._nth.call(null,chunk__78824_78828,i__78826_78830);
markdown.links.parse_reference_link.call(null,line_78831,references);


var G__78832 = seq__78823_78827;
var G__78833 = chunk__78824_78828;
var G__78834 = count__78825_78829;
var G__78835 = (i__78826_78830 + (1));
seq__78823_78827 = G__78832;
chunk__78824_78828 = G__78833;
count__78825_78829 = G__78834;
i__78826_78830 = G__78835;
continue;
} else {
var temp__5457__auto___78836 = cljs.core.seq.call(null,seq__78823_78827);
if(temp__5457__auto___78836){
var seq__78823_78837__$1 = temp__5457__auto___78836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__78823_78837__$1)){
var c__4319__auto___78838 = cljs.core.chunk_first.call(null,seq__78823_78837__$1);
var G__78839 = cljs.core.chunk_rest.call(null,seq__78823_78837__$1);
var G__78840 = c__4319__auto___78838;
var G__78841 = cljs.core.count.call(null,c__4319__auto___78838);
var G__78842 = (0);
seq__78823_78827 = G__78839;
chunk__78824_78828 = G__78840;
count__78825_78829 = G__78841;
i__78826_78830 = G__78842;
continue;
} else {
var line_78843 = cljs.core.first.call(null,seq__78823_78837__$1);
markdown.links.parse_reference_link.call(null,line_78843,references);


var G__78844 = cljs.core.next.call(null,seq__78823_78837__$1);
var G__78845 = null;
var G__78846 = (0);
var G__78847 = (0);
seq__78823_78827 = G__78844;
chunk__78824_78828 = G__78845;
count__78825_78829 = G__78846;
i__78826_78830 = G__78847;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__78848_78852 = cljs.core.seq.call(null,lines);
var chunk__78849_78853 = null;
var count__78850_78854 = (0);
var i__78851_78855 = (0);
while(true){
if((i__78851_78855 < count__78850_78854)){
var line_78856 = cljs.core._nth.call(null,chunk__78849_78853,i__78851_78855);
markdown.links.parse_footnote_link.call(null,line_78856,footnotes);


var G__78857 = seq__78848_78852;
var G__78858 = chunk__78849_78853;
var G__78859 = count__78850_78854;
var G__78860 = (i__78851_78855 + (1));
seq__78848_78852 = G__78857;
chunk__78849_78853 = G__78858;
count__78850_78854 = G__78859;
i__78851_78855 = G__78860;
continue;
} else {
var temp__5457__auto___78861 = cljs.core.seq.call(null,seq__78848_78852);
if(temp__5457__auto___78861){
var seq__78848_78862__$1 = temp__5457__auto___78861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__78848_78862__$1)){
var c__4319__auto___78863 = cljs.core.chunk_first.call(null,seq__78848_78862__$1);
var G__78864 = cljs.core.chunk_rest.call(null,seq__78848_78862__$1);
var G__78865 = c__4319__auto___78863;
var G__78866 = cljs.core.count.call(null,c__4319__auto___78863);
var G__78867 = (0);
seq__78848_78852 = G__78864;
chunk__78849_78853 = G__78865;
count__78850_78854 = G__78866;
i__78851_78855 = G__78867;
continue;
} else {
var line_78868 = cljs.core.first.call(null,seq__78848_78862__$1);
markdown.links.parse_footnote_link.call(null,line_78868,footnotes);


var G__78869 = cljs.core.next.call(null,seq__78848_78862__$1);
var G__78870 = null;
var G__78871 = (0);
var G__78872 = (0);
seq__78848_78852 = G__78869;
chunk__78849_78853 = G__78870;
count__78850_78854 = G__78871;
i__78851_78855 = G__78872;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__78874 = cljs.core.split_with.call(null,(function (p1__78873_SHARP_){
return cljs.core.not_empty.call(null,p1__78873_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__78874,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__78874,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_78877 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_78878 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_78877,_STAR_formatter_STAR_78878){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_78877,_STAR_formatter_STAR_78878))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__78879 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__78879,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__78879,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__78885_78892 = lines__$1;
var vec__78886_78893 = G__78885_78892;
var seq__78887_78894 = cljs.core.seq.call(null,vec__78886_78893);
var first__78888_78895 = cljs.core.first.call(null,seq__78887_78894);
var seq__78887_78896__$1 = cljs.core.next.call(null,seq__78887_78894);
var line_78897 = first__78888_78895;
var more_78898 = seq__78887_78896__$1;
var state_78899 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__78885_78900__$1 = G__78885_78892;
var state_78901__$1 = state_78899;
while(true){
var vec__78889_78902 = G__78885_78900__$1;
var seq__78890_78903 = cljs.core.seq.call(null,vec__78889_78902);
var first__78891_78904 = cljs.core.first.call(null,seq__78890_78903);
var seq__78890_78905__$1 = cljs.core.next.call(null,seq__78890_78903);
var line_78906__$1 = first__78891_78904;
var more_78907__$1 = seq__78890_78905__$1;
var state_78908__$2 = state_78901__$1;
var line_78909__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_78908__$2))?"":line_78906__$1);
var state_78910__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_78908__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_78908__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_78908__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_78908__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_78908__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_78907__$1))){
var G__78911 = more_78907__$1;
var G__78912 = cljs.core.assoc.call(null,transformer.call(null,html,line_78909__$2,cljs.core.first.call(null,more_78907__$1),cljs.core.dissoc.call(null,state_78910__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_78909__$2));
G__78885_78900__$1 = G__78911;
state_78901__$1 = G__78912;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_78910__$3))),line_78909__$2,"",cljs.core.assoc.call(null,state_78910__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_78878;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_78877;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4502__auto__ = [];
var len__4499__auto___78915 = arguments.length;
var i__4500__auto___78916 = (0);
while(true){
if((i__4500__auto___78916 < len__4499__auto___78915)){
args__4502__auto__.push((arguments[i__4500__auto___78916]));

var G__78917 = (i__4500__auto___78916 + (1));
i__4500__auto___78916 = G__78917;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq78913){
var G__78914 = cljs.core.first.call(null,seq78913);
var seq78913__$1 = cljs.core.next.call(null,seq78913);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78914,seq78913__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4502__auto__ = [];
var len__4499__auto___78920 = arguments.length;
var i__4500__auto___78921 = (0);
while(true){
if((i__4500__auto___78921 < len__4499__auto___78920)){
args__4502__auto__.push((arguments[i__4500__auto___78921]));

var G__78922 = (i__4500__auto___78921 + (1));
i__4500__auto___78921 = G__78922;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq78918){
var G__78919 = cljs.core.first.call(null,seq78918);
var seq78918__$1 = cljs.core.next.call(null,seq78918);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78919,seq78918__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4502__auto__ = [];
var len__4499__auto___78924 = arguments.length;
var i__4500__auto___78925 = (0);
while(true){
if((i__4500__auto___78925 < len__4499__auto___78924)){
args__4502__auto__.push((arguments[i__4500__auto___78925]));

var G__78926 = (i__4500__auto___78925 + (1));
i__4500__auto___78925 = G__78926;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq78923){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78923));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4502__auto__ = [];
var len__4499__auto___78928 = arguments.length;
var i__4500__auto___78929 = (0);
while(true){
if((i__4500__auto___78929 < len__4499__auto___78928)){
args__4502__auto__.push((arguments[i__4500__auto___78929]));

var G__78930 = (i__4500__auto___78929 + (1));
i__4500__auto___78929 = G__78930;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq78927){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78927));
});


//# sourceMappingURL=core.js.map
