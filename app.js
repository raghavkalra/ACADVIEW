// to hide the list when checkbox is checked
function hideFunction() {
  var cb = document.getElementById("hide");
  var text = document.getElementById("movie-list");
  if (cb.checked == true){
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
}

// to search a movie in the list
function searchfunction() {
    var inp, fi, ul, li, a, i, txtValue;
    inp = document.getElementById("Input");
    fi = inp.value.toUpperCase();
    ul = document.getElementById("UL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("name")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(fi) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        };
    };
};



// to add a movie to the list
var ad = document.querySelector('#add-movie button');
ad.addEventListener('click',function(e){
    e.preventDefault();
    var name = document.getElementById('movie');
    if(name.value!="")
        {
            var ad1 = document.querySelector('#movie-list ul');
            var node = document.createElement("li");
            var sp = document.createElement("span");
            sp.setAttribute("class","name");
            var text = document.createTextNode(name.value);
            sp.appendChild(text);
            var sp1 = document.createElement("span");
            sp1.setAttribute("class","delete");
            var text1 = document.createTextNode("delete");
            sp1.appendChild(text1);
            
            node.appendChild(sp);
            node.appendChild(sp1);
            
            ad1.appendChild(node);              
        }
                  
});

// to delete a movie from the list
var list = document.querySelector('#movie-list ul');
list.addEventListener('click', function(e){
    if(e.target.className === 'delete'){          // We want to get where did the click happened, so className
        console.log(e.target);
        const li = e.target.parentElement;         // this is the li which is the parent to the delete and we want to delete it.
        console.log(li);
        li.parentNode.removeChild(li);
        list.removeChild(li);
       }
})
