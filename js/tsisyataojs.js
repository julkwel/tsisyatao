function close_window() {
    if (confirm("Bonne continuation ary e !!! ")) {
        close();
    }
}

$('.ts-ye').on('click', function () {
    $.confirm({
        title: 'AHETSEO ANIE E !',
        content: 'Andao hiodikodina kely eto ary!!!',
        draggable: true,
        theme: 'supervan',
        buttons:{
            confirm:  {
                text: 'Hanohy',
                btnClass: 'btn-floating waves-effect waves-light red',
                keys: ['enter', 'shift'],
                action: function () {
                    alert("Ndao ary!!!");
                }
            },
            cancel: {
                text: 'Leo aho',
                btnClass: 'btn-floating waves-effect waves-light blue',
                keys: ['enter', 'shift'],
                action: function () {
                    window.top.close();
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