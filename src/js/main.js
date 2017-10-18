$(document).ready( () => {
  var page = 0
  $('.btn1').click( () => {
    $('.page'+page).hide()
    $('.page1').show()
    page = 1;
  })
  $('.btn2').click( () => {
    $('.page'+page).hide()
    $('.page2').show()
    page = 2;
  })
  $('.btn3').click( () => {
    $('.page'+page).hide()
    $('.page3').show()
    page = 3;
  })
  $('.btn4').click( () => {
    $('.page'+page).hide()
    $('.page4').show()
    page = 4;
  })
  $('.btn5').click( () => {
    $('.page'+page).hide()
    $('.page5').show()
    page = 5;
  })
  $('.btn6').click( () => {
    $('.page'+page).hide()
    $('.page6').show()
    page = 6;
  })
  $('.btn7').click( () => {
    $('.page'+page).hide()
    $('.page7').show()
    page = 7;
  })
  $('.btn8').click( () => {
    $('.page'+page).hide()
    $('.page8').show()
    page = 8;
  })
  $('.btn9').click( () => {
    $('.page'+page).hide()
    $('.page9').show()
    page = 9;
  })
  $('.btn10').click( () => {
    $('.page'+page).hide()
    $('.page10').show()
    page = 10;
  })
  $('.single').click( () => {
    $('.multiForm').hide()
    $('.singleForm').show()
    $('.multi').css({'opacity': '1'})
    $('.single').css({'opacity': '0.5'})
  })
  $('.multi').click( () => {
    $('.singleForm').hide()
    $('.multiForm').show()
    $('.single').css({'opacity': '1'})
  })
  $('.dropbtn').click( () => {
    $('.dropdown-content').toggle("slow")
    $('.dropbtn').css({"opacity": "1"})
  })
})