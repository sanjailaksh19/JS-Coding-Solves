(function() {
    var x = 10;
    (function() {
    console.log(x);
    var x = 20;
    console.log(x);
    })();
    })();