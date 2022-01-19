(ns backend.core
  (:require
   [liberator.core :refer [defresource]]
   [ring.adapter.jetty :refer [run-jetty]]
   [ring.middleware.params :refer [wrap-params]]
   [compojure.route :as route]
   [clojure.string :as str]
   [compojure.core :refer
    [defroutes GET]])
   (:gen-class))

(defn character-count
  "function to count number of characters in a string" 
  [str]
  (reduce #(assoc %1 %2 (inc (%1 %2 0)))
          {}
          (re-seq #"\D" str))
  )

(defn all-alphabets? [str]
  "check string contains all aplhabets character"
    (every? #(Character/isLetter %) str)
)

(defn scramble?
  "returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
   if str1 or str2 contains non-alphabet character returns error"
  [str1 str2]
  (if (and (all-alphabets? str1) (all-alphabets? str2))
    (let [s1-count (character-count (str/lower-case str1)) ; number of characters in s1 string 
          s2-count (character-count (str/lower-case str2)) ; number of characters in s2 string
          total (merge-with - s1-count s2-count) ; merge the two character counts into one by subtracting same chracters
          ]
    ; if there is a single false value in the vector return false else return true
      (not (> (count
              ; filter out false values
               (filter false?
                       (for [[k x] total
                                 ; when count of string is less than zero or the 
                                 ; word in s1 string is not present in total string return false
                             :when (or (< x 0) (not (contains? s1-count k)))]
                         false)))
              0)))
    "Contains Non-Alphabets Characters"))

(defresource scramble-api [str1 str2] 
  :available-media-types ["text/plain"]
  :allowed-method [:get]
  :handle-ok (fn [context]
               (str (scramble? str1 str2)
)                 ))

(defroutes app
(GET "/scramble/:str1/:str2" [str1 str2] (scramble-api str1 str2))
(route/not-found "Not Found !"))

(def handler
(-> app
wrap-params))

(defn -main
  "Main function which will run on lein run"
  [& args]
    ; running server on port 3000
    (run-jetty handler {:port 3000 :join? false})
    (println (str "Running webserver at http:/127.0.0.1:3000/")))
