
(ns frontend
  (:require [reagent.core :as r]
            [ajax.core :refer [GET]]
            [reagent-mui.material.grid :refer [grid]]
            [reagent.dom :as dom]
            [clojure.string :as str]
            [reagent-mui.material.button :refer [button]]
            [reagent-mui.material.text-field :refer [text-field]])
  )

(defonce string1 (r/atom ""))
(defonce string2 (r/atom ""))
(defonce result (r/atom ""))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn event-value
  [e]
  (.. e -target -value))

(defn url-generator 
  "If string2 is greater than string1 treat string2 as string1"
  [str1 str2]
  (let [str1-len (count str1)
        str2-len (count str2)
        ]
    (if (> str1-len str2-len)
       (str "scramble/" str1 "/" str2)
       (str "scramble/" str2 "/" str1)
      )
    )
  )

(defn result-badge
  "If result is true generate green badge, slse generate red badge"
  [result]
  (cond
    (= result "true") [:div {:style {:background-color "#006400" :color "white" :border-radius "5px" :padding-top "10px" :padding-bottom "10px"  :width "100%" :text-align "center"}} (str/upper-case result)]
    (= result "false") [:div {:style {:background-color "#800000" :color "white" :border-radius "5px" :padding-top "10px" :padding-bottom "10px"  :width "100%" :text-align "center"}}(str/upper-case result)]
    (or (= result "Enter Input") (= result  "Contains Non-Alphabets Characters")) [:div {:style {:background-color "#D37506" :color "white" :border-radius "5px" :padding-top "10px" :padding-bottom "10px"  :width "100%" :text-align "center"}}(str/upper-case result)]
    )
  )


(defn Application []
  [:div
   [:h1 "Scrambles"]
   [grid {:container true :spacing 1}
    [grid {:item true :xs 2 }
     [text-field
     {:value       @string1
      :label       "String 1"
      :variant     "outlined"
      :size        "small"
      :on-change   (fn [e]
                     (reset! string1 (event-value e)))}]
     ]
    [grid {:item true :xs 2}
     [text-field
     {:value       @string2
      :label       "String 2"
      :variant     "outlined"
      :size        "small"
      :on-change   (fn [e]
                     (reset! string2 (event-value e)))}]
     ]
    [grid {:item true :xs 2}
     [button
      {:variant "contained" 
       :style {:height "100%"}
       :on-click (fn []
                  (if (or (= (count @string1) 0) (= (count @string2) 0))
                    (reset! result "Enter Input")
                    (GET (url-generator @string1 @string2)
                     {:eror-handler error-handler
                      :handler (fn [response] (reset! result response))})

                    ) 
                   )
       } 
      "Submit"
      ]
     ]
    ]
   [grid {:container true :spacing 1 :style {:margin-top "2px"}}
    [grid {:item true :xs 4}
     (result-badge  @result)]]
   ])

(dom/render [Application] (js/document.getElementById "app"))

(defn init []
  (println "App initialization!"))