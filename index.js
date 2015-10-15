// require("babel-core/polyfill");

// import moment from "moment";
// document.getElementById("time").innerHTML = moment().toISOString();
window.addEventListener('WebComponentsReady', function(e) {
    console.log('components ready');
    console.log(moment().toISOString());
});
