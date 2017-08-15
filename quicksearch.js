var i;
var content = "";

obj = inputstream;

for(i=0;i < obj.length; i++){
  name = obj[i].name;
  url = obj[i].url;
  blurb = obj[i].blurb;
  lang = obj[i].lang;

  content+= "<div class='searchable-item card'>" + "<h3>" + name + "</h3>" + "<br>" + "<p>" + blurb + "</p>" + "<br>" + lang + "<br>" + "<a href=\'" + url + "\'  target=\'_blank\'>" + "View" + "</a>" + "</div>";
}

document.getElementById("content").innerHTML =  content

// quick search regex
var qsRegex;

// init Isotope
var grid = document.querySelector('.grid');
var iso = new Isotope( grid, {
  itemSelector: '.searchable-item',
  layoutMode: 'masonry'
});

// use value of search field to filter
var quicksearch = document.getElementsByClassName("quicksearch")[0];
quicksearch.onkeyup = function() {
  qsRegex = new RegExp( quicksearch.value, 'gi' );
  filterValue = function( itemElem ) {
    var name = itemElem.textContent;
    return name.match(qsRegex);
  }
  iso.arrange({ filter: filterValue });
}
