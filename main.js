$(function () {
  //ON LOAD

  $('#divBTN').fadeIn(2000);

  //ENTER RESUME

  $('#divBTN').click(function () {
    $(this).fadeOut(100);
    $('#blockProfile').slideUp(1000);
    $('.blocks').slideDown(2000);
    $('#space p').fadeOut(200);
  });

  // WORK EXPERIENCE

  $('#titleWork').click(function () {
    $('#space').hide(500);
    $('.blocks').css({
      height: '100px',
      'border-bottom': '0px',
      color: 'white',
    });
    $('#divBlock1').css({
      height: '100px',
      'border-bottom': '10px solid  #40E0D0',
      color: ' #40E0D0',
    });
    $(
      '#divBlock1-content, #divBlock2-content, #divBlock3-content, #divBlock4-content'
    ).hide(1000);
    $('#divBlock1-content').toggle(500);
  });

  // ABOUT

  $('#titleAbout').click(function () {
    $('#space').hide(500);
    $('.blocks').css({
      height: '100px',
      'border-bottom': '0px',
      color: 'white',
    });
    $('#divBlock2').css({
      height: '100px',
      'border-bottom': '10px solid #ffd700',
      color: '#ffd700',
    });
    $(
      '#divBlock1-content, #divBlock2-content, #divBlock3-content, #divBlock4-content'
    ).hide(1000);
    $('#divBlock2-content').toggle(500);
  });

  // EDUCATION

  $('#titleEducation').click(function () {
    $('#space').hide(500);
    $('.blocks').css({
      height: '100px',
      'border-bottom': '0px',
      color: 'white',
    });
    $('#divBlock3').css({
      height: '100px',
      'border-bottom': '10px solid #ff8c69',
      color: '#ff8c69',
    });
    $(
      '#divBlock1-content, #divBlock2-content, #divBlock3-content, #divBlock4-content'
    ).hide(1000);
    $('#divBlock3-content').toggle(500);
  });

  // CONTACT

  $('#titleContact').click(function () {
    $('#space').hide(500);
    $('.blocks').css({
      height: '100px',
      'border-bottom': '0px',
      color: 'white',
    });
    $('#divBlock4').css({
      height: '100px',
      'border-bottom': '10px solid #5cb85c',
      color: '#5cb85c',

    });
    $(
      '#divBlock1-content, #divBlock2-content, #divBlock3-content, #divBlock4-content'
    ).hide(1000);
    $('#divBlock4-content').toggle(500);
  });

  //CLOSE BLOCK

  $('.closeBTN').click(function () {
    $(
      '#divBlock1-content, #divBlock2-content, #divBlock3-content, #divBlock4-content'
    ).slideUp(500);
    $('#space').show(500);
    $('.blocks').css({
      height: '100px',
      'border-bottom': '0px',
      color: 'white',
    });
  });
});
