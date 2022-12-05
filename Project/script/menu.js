$('#menuToggle #toggleCheckbox').change(function() {
    if(this.checked) {
        $('body').css({'overflow': "hidden" })
    }
    else {
        $('body').css({'overflow': "visible" })
    }
});

$('#home').on('click', function(e){
    e.preventDefault()
    $('html, body').animate({scrollTop: $('#about').offset().top}, 500)
   document.getElementById('toggleCheckbox').checked = false
    $('body').css({'overflow': "visible" })
});
