var j = document.getElementsByClassName('jobsearch-SerpJobCard');
console.log('LENGTH', j.length)
var i;
for (i = 0; i < j.length; i++) {
  //text += cars[i] + "<br>";
  var c = j[i].children;
  
 //console.log('children: ', c);
 //console.log('c[5] child: ', c[5])


console.log('This is j[i]', j[i])

var s = j[i].querySelector('.jobsearch-SerpJobCard-footer')
console.log('S is equal to: ', s)
 
var t = s.querySelector('.jobsearch-SerpJobCard-footerActions')
console.log('T is equal to: ', t)


var y = t.querySelector('.result-link-bar-container')
console.log('Y is equal to: ', y)


var u = y.querySelector('.result-link-bar')
console.log('U is equal to: ', u)

q = u.children[0]
console.log('TO DELETE: ', q)


//if (u.children[0].querySelector('.sponsoredGray')) {
//    j[i].remove
// }

 
if (q.innerHTML.indexOf("Sponsored") !== -1) {

    j[i].style.display = 'none';
    console.log('DELETED: ', j[i])

}
 

} 

