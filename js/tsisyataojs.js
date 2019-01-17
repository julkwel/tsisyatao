function close_window() {
    if (confirm("Bonne continuation ary e !!! ")) {
        close();
    }
}

$(document).ready(function () {
    document.getElementById('data').innerHTML = `
    <h1 class="ml8">
              <span class="letters-container">
                  <a class="btn-floating btn-large waves-effect waves-light red" style="margin-right: 10px"
                     onclick="close_window();return false;">
                      <i class="material-icons">close</i>
                  </a>
                <span class="letters letters-left">Kaiza</span>
                <span class="letters bang">!</span>
                  <a class="btn-floating btn-large waves-effect waves-light green ts-ye" style="margin-left: 10px">
                      <i class="material-icons">comment</i>
                  </a>
              </span>
                <span class="circle circle-white"></span>
                <span class="circle circle-dark"></span>
                <span class="circle circle-container">
                    <span class="circle circle-dark-dashed"></span>
                </span>
    </h1>`;
    $('.ts-ye').on('click', function () {
        $.confirm({
            title: 'AHETSEO ANIE E !',
            content: 'Andao hiodikodina kely eto ary!!!',
            draggable: true,
            theme: 'supervan',
            buttons: {
                confirm: {
                    text: 'Hanohy',
                    btnClass: 'btn-floating waves-effect waves-light red',
                    keys: ['enter', 'shift'],
                    action: function () {
                        document.body.style.backgroundColor = "#1abc9c";
                        document.getElementById('data').innerHTML = `<h1 class="ml11">
                                                              <span class="text-wrapper">
                                                                <span class="line line1"></span>
                                                                <span class="letters">Kaiza ry akama !</span>
                                                              </span>
                                                            </h1>`;
                        $('.ml11 .letters').each(function () {
                            $(this).html($(this).text().replace(/([^]*|\w)/g, "<span class='letter'>$&</span>"));
                        });

                        anime.timeline({loop: false})
                            .add({
                                targets: '.ml11 .line',
                                scaleY: [0, 1],
                                opacity: [0.5, 1],
                                easing: "easeOutExpo",
                                duration: 700
                            })
                            .add({
                                targets: '.ml11 .line',
                                translateX: [0, $(".ml11 .letters").width()],
                                easing: "easeOutExpo",
                                duration: 700,
                                delay: 100
                            }).add({
                            targets: '.ml11 .letter',
                            opacity: [0, 1],
                            easing: "easeOutExpo",
                            duration: 600,
                            offset: '-=775',
                            delay: function (el, i) {
                                return 34 * (i + 1)
                            },
                            complete: function() {
                                document.getElementById('data').innerHTML = `
                                                            <h1 class="ml11">
                                                              <span class="text-wrapper">
                                                                <span class="line line1"></span>
                                                                <span class="letters">Ndao hiasa amin'izay ! </span>
                                                              </span>
                                                            </h1>`;
                                $.confirm({
                                    title: 'MAZOTOA E !',
                                    draggable: true,
                                    theme: 'supervan',
                                    content: 'Mazotoa e!',
                                    buttons: {
                                        confirm: {
                                            text: 'Okay',
                                            action: function () {
                                                window.top.close();
                                                close();
                                            }
                                        }
                                    }
                                })
                            }
                        }).add({
                            targets: '.ml11',
                            opacity: 0,
                            duration: 1000,
                            easing: "easeOutExpo",
                            delay: 1000,
                        });

                    }
                },
                cancel: {
                    text: 'Leo aho',
                    btnClass: 'btn-floating waves-effect waves-light blue',
                    keys: ['enter', 'shift'],
                    action: function () {
                        window.top.close();
                        close();
                    }
                }
            },
        });
    });


    anime.timeline({loop: true})
        .add({
            targets: '.ml8 .circle-white',
            scale: [0, 3],
            opacity: [1, 0],
            easing: "easeInOutExpo",
            rotateZ: 360,
            duration: 1100
        }).add({
        targets: '.ml8 .circle-container',
        scale: [0, 1],
        duration: 1100,
        easing: "easeInOutExpo",
        offset: '-=1000'
    }).add({
        targets: '.ml8 .circle-dark',
        scale: [0, 1],
        duration: 1100,
        easing: "easeOutExpo",
        offset: '-=600'
    }).add({
        targets: '.ml8 .letters-left',
        scale: [0, 1],
        duration: 1200,
        offset: '-=550'
    }).add({
        targets: '.ml8 .bang',
        scale: [0, 1],
        rotateZ: [45, 15],
        duration: 1200,
        offset: '-=1000'
    }).add({
        targets: '.ml8',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1400
    });

    anime({
        targets: '.ml8 .circle-dark-dashed',
        rotateZ: 360,
        duration: 8000,
        easing: "linear",
        loop: true
    });
})

