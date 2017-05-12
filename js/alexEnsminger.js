
/*
navigate to the selected page
*/
$(document).ready(function () {
  selectPage();

});

function titleSpinner() {
  var divs= $("#header").find($('.titleOption')).hide();
  var count = divs.length;
  var i = 0;
  transition();

  function transition(){
      divs.eq(i).fadeIn(200).delay(900).fadeOut(200, transition);
      if(++i>=count){
          i=0;
      }
  }

}




function popupModal() {
    var modal = document.getElementById('camPop');
    modal.style.display = "block";
    // Get the button that opens the modal
    var btn = document.getElementById("camIcon");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}

/*
Menu Slider and Display
*/
function slideMenu(x) {
    //toggle the change in the icons in the nav bar
    x.classList.toggle("change");
    $( "#initials" ).toggleClass("showMenu");
    $( "#octagon" ).toggleClass("showMenu");

    $( ".menu" ).slideToggle( "slow", function() {
      //$( "#initials" ).css("color", "#4f4a4a");
      //$(".octagon")
    });
}



/*
Menu Clicking Navigation Functionality
*/
function selectPage(element) {
  if (typeof element == 'object') {
    switch (element.id) {
      case "logo" : {
         window.location.hash = '#home';
         break;
      }
      case "PROJECTS" : {
         window.location.hash = '#projects';
         break;
      }
      case "CV" : {
         window.location.hash = '#cv';
         break;
      }
      case "CONTACT" : {
         window.location.hash = '#contact';
         break;
      }
      default : {
        window.location.hash = '#';
        break;
      }
    }
  }
  navigate(window.location.hash);
}


/*
Actual Menu Navigation
*/
function navigate(hashString) {
      var content_html;
      var header_html;
      var image;
      var position;
      var content_div = document.getElementById('content');
      var header_div = document.getElementById('header');

      if ($(".menu").is(':visible') && $(document).width() <1024) {
        var x= document.getElementById('burger');
        slideMenu(x);
      }

  switch (hashString) {
    case "#projects" : {
      $("#content").load('projects.html #content-projects');
      $("#header").load('projects.html #header-projects')
      $("#image-caption").load('projects.html #caption-projects');
      break;
    }
    case "#contact" : {
      $("#content").load('contact.html #content-contact');
      $("#header").load('contact.html #header-contact')
      $("#image-caption").load('contact.html #caption-contact');
      break;

    }
    case "#cv" : {
      $("#content").load('cv.html #content-cv');
      $("#header").load('cv.html #header-cv')
      $("#image-caption").load('cv.html #caption-cv');
      break;

    }
    default : {
      $("#content").load('landing.html #content-landing');
      $("#header").load('landing.html #header-landing', titleSpinner);
      $("#image-caption").load('landing.html #caption-landing');
      break;
    }
  }

}
