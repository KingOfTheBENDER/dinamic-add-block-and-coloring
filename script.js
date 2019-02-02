var colorLink=document.querySelector(".color-link");
var colorPopup=document.querySelector(".color-popup");

var valueLink=document.querySelector(".value-link");
var valuePopup=document.querySelector(".value-popup");

var colorBlock=document.querySelectorAll(".block__item");
var selectValue = document.getElementById("color-selector");

var blockValue=document.getElementById("block-value");
var parent = document.getElementById("main-block");



colorLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  colorPopup.classList.toggle("modal-show");
  if(!colorPopup.classList.contains("modal-show")){
    selectValue.selectedIndex=0;
  };
});


valueLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  valuePopup.classList.toggle("modal-show");
});






function removeChildren(elem) {
  while (elem.lastChild) {
    elem.removeChild(elem.lastChild);
  };
};

function sumBlock() {
  removeChildren(parent);
  for ( var i=0;i<blockValue.value;i++){
    var div = document.createElement("div");
    div.className="block__item";
    parent.appendChild(div);
  };
};


parent.onclick = function(event) {
  var target = event.target;

  while (target != this) {
    highlight(target);
    target = target.parentNode;
  };
};

function highlight(node) {
  if (selectValue.selectedIndex==1){
    colorBlock = node;
    colorBlock.classList.remove("black","red","blue");
    colorBlock.classList.add("yellow");
  };
  if (selectValue.selectedIndex==2){
    colorBlock = node;
    colorBlock.classList.remove("red","blue","yellow");
    colorBlock.classList.add("black");
  };
  if (selectValue.selectedIndex==3){
    colorBlock = node;
    colorBlock.classList.remove("black","blue","yellow");
    colorBlock.classList.add("red");
  };
  if (selectValue.selectedIndex==4){
    colorBlock = node;
    colorBlock.classList.remove("black","yellow","red");
    colorBlock.classList.add("blue");
  };
};






