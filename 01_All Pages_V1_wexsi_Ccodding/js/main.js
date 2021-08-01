 window.addEventListener("scroll",function(){
     var sticky = document.getElementById("navbar");
     sticky.classList.toggle("sticky", window.scrollY > 0)
 });
//  $(document).on('click','ul li',function(){
//     $(this).addClass('active').siblings().removeClass('active')
//  });
wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  );
  wow.init();
  document.getElementById('moar').onclick = function() {
    var section = document.createElement('section');
    section.className = 'section--purple wow fadeInDown';
    this.parentNode.insertBefore(section, this);
  };