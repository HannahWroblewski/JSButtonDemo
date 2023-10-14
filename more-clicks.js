// One
$('.task-input button').click( function () {
    let input = $('.task-input input').val();

    if (input.length > 0) {
        $('.task-list').append($('<li>').text(input))
    }

    $('.task-input input').val('');
});

// Two
$('.decider button').click( function () {
    let stat = $('.decider .status')
    stat.toggleClass('active');

    if (stat.hasClass('active') ) {
        $('.decider button').text('Turn Off');
        stat.text('on');
        $('.decider img').attr("src", 'https://media.giphy.com/media/szmSyB2PnehgY/giphy.gif');
      } else {
        $('.decider button').text('Turn On');
        $('.decider span').text('off');
        $('.decider img').attr("src", 'https://si.wsj.net/public/resources/images/BN-WB523_1109RO_12S_20171109172506.jpg');
      }
});

// Three
$('.cool-kids button').click( function () {
    let color = $(this).css('background-color');
    $('main').css('background-color', color);
})
