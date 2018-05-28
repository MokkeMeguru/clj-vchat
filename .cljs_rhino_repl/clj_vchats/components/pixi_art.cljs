(ns clj-vchats.components.pixi-art
  (:require [cljsjs.pixi]
            [reagent.core :as r]))

(defonce container (js/PIXI.Container.))

(defonce app-state (r/atom nil))

(defonce renderer
  (let [view-canvas (.getElementById js/document "viewing")
        canvas-width (.-width view-canvas)
        canvas-height (.-height view-canvas)]
    (.autoDetectRenderer js/PIXI
                         canvas-width
                         canvas-height
                         #js {:view view-canvas
                              :antialias true
                              :width 1280
                              :height 720})))

;; idea
;; 1. create 100 Pixi's text object's list "TL"
;; 2. if it gets a message, TL[i] (TL[0]...TL[i-1] is full)'s text become the message
;; 3. if i = 100, TL[0]'s text become the message (doesn't TL[100])
;; :. TL[i] = [object position]
;;     - first TL[i] = object / second TL[i] = position

(defn print-word [str]
  (let [style (clj->js {:font "bold 60px Arial"
                        :fill "white"
                        :dropShadow true
                        :dropShadowAlpha 0.8
                        :dropShadowColor "black"
                        :trim true
                        :stroke "black"
                        :strokeThickness 3
                        })
        textobj (js/PIXI.Text. str style)]
    (set! (.-x (.-position textobj)) (/ 720 2))
    (set! (.. textobj -position -y) 600)
    (.addChild container textobj)))

(defn completed-loading-resources!
  [loader resources]
  (println "Resource loaded!")
  (let [sample-image (js/PIXI.Sprite. (aget resources
                                            "sample-image"
                                            "texture"))]
    (.addChild container sample-image)
    (print-word "Hello Pixi!")
    (.render renderer container)))

(defn load-resources! []
  (-> (js/PIXI.loaders.Loader.)
      (.add "sample-image" "img/temp.png")
      (.load completed-loading-resources!)))
