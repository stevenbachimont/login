$('.form').find('input, textarea').on('keyup blur focus', function (e) {

    var $this = $(this),
        label = $this.prev('label');

    if (e.type === 'keyup') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
        } else {
            label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
        if( $this.val() === '' ) {
            label.removeClass('active highlight');
        } else {
            label.removeClass('highlight');
        }
    } else if (e.type === 'focus') {

        if( $this.val() === '' ) {
            label.removeClass('highlight');
        }
        else if( $this.val() !== '' ) {
            label.addClass('highlight');
        }
    }

});

$('.tab a').on('click', function (e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

       if(target === '#login') {
        $('#login-form').submit(function(event) {
            event.preventDefault();
            const email = $('#login-email').val();
            const password = $('#login-password').val();

            supabase.auth.signIn({ email, password }).then(({ user, error }) => {
                if (error) {
                    console.error(error.message);
                } else {
                    console.log("Connecté avec succès!", user);
                }
            });
        });
    } else if(target === '#signup') {
        $('#signup-form').submit(function(event) {
            event.preventDefault();
            const email = $('#signup-email').val();
            const password = $('#signup-password').val();

            supabase.auth.signUp({ email, password }).then(({ user, error }) => {
                if (error) {
                    console.error(error.message);
                } else {
                    console.log("Inscription réussie!", user);
                }
            });
        });
    }
});
