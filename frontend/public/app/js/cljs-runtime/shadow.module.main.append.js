
shadow.cljs.devtools.client.env.module_loaded('main');

try { frontend.init(); } catch (e) { console.error("An error occurred when calling (frontend/init)"); throw(e); }