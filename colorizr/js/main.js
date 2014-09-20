(function () {

    var bookmarkletClicked = false;

    $('#bookmarklet').click(function () {

        if (bookmarkletClicked === true) {
            return;
        }
        bookmarkletClicked = true;

        $('#bookmarklet-container').scrollfire('remove');

        $('#action-dude2').removeClass('flash');
        $('#action-dude').removeClass('flash');
        $('#action-click-here').removeClass('flash');
        $('#action-arrow').removeClass('flash');

    });

    $('#bookmarklet-container').scrollfire({
        onTopHidden: function( el ) {
            $('#action-dude2').addClass('flash');
        },
        onTopIn: function ( el ) {
            $('#action-dude2').removeClass('flash');
        },
        onBottomIn: function ( el ) {
            $('#action-dude').addClass('flash');
            $('#action-click-here').addClass('flash');
            $('#action-arrow').addClass('flash');
        }
    });

})();
