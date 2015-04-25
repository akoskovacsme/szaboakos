
console.log('elindul a programunk!');

// állítsunk be pár golto
var haromszogek = document.querySelectorAll('.haromszog');
//var kezdoertekek = [240, 280, 30];
var sebessegek = [0.5, 0.3, 0.7];

var kezdoertekek =[];
for (var i = 0; i < haromszogek.length; i = i + 1) {
    var haromszog = haromszogek[i];
    var informaciok = haromszog.getBoundingClientRect();
    kezdoertekek[i] = informaciok.top;
}

// ha a böngésző szól hogy scrollozott akkor ez történjen
function szkrolloztak() {
    // ismételjük meg a lépéseket 1-től 3-ig
    // for (ciklus előtt történik, addig ez igaz, cuklosnk végén)
    /*
    ciklus előtt történi
    ismételd (amíg ez igaz)
      EZ TÖRTÉNIK MINDEN CIKLUSBAN
      CIKLUS VÉGÉN
    */
    for (var i = 0; i < haromszogek.length; i = i + 1) {
      // i: 0, 1, 2
      var haromszog = haromszogek[i];
      var kezdoertek = kezdoertekek[i];
      var sebesseg = sebessegek[i];

      haromszog.style.top =
          kezdoertek + document.body.scrollTop * sebesseg + 'px';
    }
}

// ha a böngésző szól nekünk akkor ez történjen
document.addEventListener('scroll', szkrolloztak);

/*
// ha scrollozunk
document.addEventListener('scroll', function(){

    //console.log('betoljuk a haromszog valtozoba a .haromszog elemet');
    // var haromszog = document.querySelector('.haromszog');

    console.log('betoljuk a haromszog valtozoba a .haromszog elemet');
    var haromszogek = document.querySelectorAll('.haromszog');

    // console.log('nullara allitjuk a haomszog topjat');
    // haromszog.style.top = 0;
    //
    console.log('most itt tart a scroll:'+ document.body.scrollTop);




    console.log('parallaxra allitjuk a haromszog topjat');
    var kezdoertekek = [240, 280, 30];
    var sebessegek = [0.5, 0.3, 0.7];
    for (var i = 0; i < haromszogek.length; i++) {
      haromszogek[i].style.top =
        kezdoertekek[i] + document.body.scrollTop * sebessegek[i] + 'px';
    }




    //haromszogek[1].style.top = 280 + document.body.scrollTop * 0.3 + 'px';
    //haromszogek[2].style.top = 30 + document.body.scrollTop * 0.7 + 'px';

    //haromszogek.style.top = 240 + document.body.scrollTop * 0.5 + 'px';


});
*/
