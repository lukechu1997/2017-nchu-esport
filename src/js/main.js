$(document).ready( () => {
  var page = 0
  $('.btn1').click( () => {
    $('.page'+page).hide()
    $('.page1').slideDown()
    page = 1;
  })
  $('.btn2').click( () => {
    $('.page'+page).hide()
    $('.page2').slideDown()
    page = 2;
  })
  $('.btn3').click( () => {
    $('.page'+page).hide()
    $('.page3').slideDown()
    page = 3;
  })
  $('.btn4').click( () => {
    $('.page'+page).hide()
    $('.page4').slideDown()
    page = 4;
  })
  $('.btn5').click( () => {
    $('.page'+page).hide()
    $('.page5').slideDown()
    page = 5;
  })
  $('.btn6').click( () => {
    $('.page'+page).hide()
    $('.page6').slideDown()
    page = 6;
  })
  $('.btn7').click( () => {
    $('.page'+page).hide()
    $('.page7').slideDown()
    page = 7;
  })
  $('.btn8').click( () => {
    $('.page'+page).hide()
    $('.page8').slideDown()
    page = 8;
  })
  $('.btn9').click( () => {
    $('.page'+page).hide()
    $('.page9').slideDown()
    page = 9;
  })
  $('.btn10').click( () => {
    $('.page'+page).hide()
    $('.page10').slideDown()
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