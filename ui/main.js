console.log('Loaded!');
var thing = document.getElementById('thing');

thing.onclick = function(){
    var marginLeft = 0;
    var interval = setInterval(function(){
        marginLeft += 10;
        thing.style.marginLeft = marginLeft + "px";
    }, 200);
    thing.style.marginLeft = "100px";
};