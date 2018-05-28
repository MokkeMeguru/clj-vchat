// Compiled by ClojureScript 1.10.238 {}
goog.provide('clj_vchats.components.pixi_art');
goog.require('cljs.core');
goog.require('cljsjs.pixi');
goog.require('reagent.core');
if(typeof clj_vchats.components.pixi_art.container !== 'undefined'){
} else {
clj_vchats.components.pixi_art.container = (new PIXI.Container());
}
if(typeof clj_vchats.components.pixi_art.app_state !== 'undefined'){
} else {
clj_vchats.components.pixi_art.app_state = reagent.core.atom.call(null,null);
}
if(typeof clj_vchats.components.pixi_art.renderer !== 'undefined'){
} else {
clj_vchats.components.pixi_art.renderer = (function (){var view_canvas = document.getElementById("viewing");
var canvas_width = view_canvas.width;
var canvas_height = view_canvas.height;
return PIXI.autoDetectRenderer(canvas_width,canvas_height,({"view": view_canvas, "antialias": true, "width": (1280), "height": (720)}));
})();
}
clj_vchats.components.pixi_art.print_word = (function clj_vchats$components$pixi_art$print_word(str){
var style = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 60px Arial",new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"dropShadow","dropShadow",1001370187),true,new cljs.core.Keyword(null,"dropShadowAlpha","dropShadowAlpha",-1544864355),0.8,new cljs.core.Keyword(null,"dropShadowColor","dropShadowColor",-318037852),"black",new cljs.core.Keyword(null,"trim","trim",774319767),true,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"strokeThickness","strokeThickness",-1303725323),(3)], null));
var textobj = (new PIXI.Text(str,style));
textobj.position.x = ((720) / (2));

textobj.position.y = (600);

return clj_vchats.components.pixi_art.container.addChild(textobj);
});
clj_vchats.components.pixi_art.completed_loading_resources_BANG_ = (function clj_vchats$components$pixi_art$completed_loading_resources_BANG_(loader,resources){
cljs.core.println.call(null,"Resource loaded!");

var sample_image = (new PIXI.Sprite((resources["sample-image"]["texture"])));
clj_vchats.components.pixi_art.container.addChild(sample_image);

clj_vchats.components.pixi_art.print_word.call(null,"Hello Pixi!");

return clj_vchats.components.pixi_art.renderer.render(clj_vchats.components.pixi_art.container);
});
clj_vchats.components.pixi_art.load_resources_BANG_ = (function clj_vchats$components$pixi_art$load_resources_BANG_(){
return (new PIXI.loaders.Loader()).add("sample-image","img/temp.png").load(clj_vchats.components.pixi_art.completed_loading_resources_BANG_);
});

//# sourceMappingURL=pixi_art.js.map
