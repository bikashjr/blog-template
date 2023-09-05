let mybutton = document.getElementById("myBtn");
const sideBar = document.getElementsByClassName("side-bar")[0];
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

  // window.onscroll = function () {
  //   if (document.documentElement.scrollTop <= 1356) {
  //     sideBar.style.position = "fixed";
  //   } else {
  //     sideBar.style.position = "static";
  //   }
  //   console.log(
  //     document.body.scrollTop || document.documentElement.scrollTop <= 1356
  //   );
  // };

console.log(`hello world`);
