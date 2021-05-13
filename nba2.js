$('#missShot').hide();
$('#makeShot').hide();
$('#shotBlock').hide();
$('#driveBlock').hide();
$('#passShot').hide(); $('#driveDunk').hide();
$('#dunk').hide(); $('#passDunk').hide();
$('#threePoints').hide();
$('#fives').hide(); $('#blocked').hide();

// var gameScore = '118 - 119';
// $('.score').text(gameScore);


$('#start').on('click', function () {
    const dfMove = Math.floor(Math.random() * 3);
    // Defense DRIVE
    if (dfMove == 0) {
        $('#action').text("Drive");

        $('#driveBtn').on('click', function () {
            $('#driveBlock').show();
            video = $('#driveBlock');
        });


        $('#shootBtn').on('click', function () {
            const shootResult = Math.floor(Math.random() * 2); {
                if (shootResult == 0) {
                    $('#makeShot').show();
                    video = $('#makeShot');
                    // gameScore.replace(/118/g, '120');
                }

                else {
                    $('#fives').show();
                    video = $('#fives');
                }
            };
        });

        $('#passBtn').on('click', function () {
            $('#passShot').show();
            video = $('#passShot');

        });
    }

    // Defense JUMP
    else if (dfMove == 1) {
        $('#action').text('Jump');
        $('#driveBtn').on('click', function () {
            $('#driveDunk').show();
            video = $('#driveDunk');

        })

        $('#shootBtn').on('click', function () {
            $('#blocked').show();
            video = $('#blocked');
        })

        $('#passBtn').on('click', function () {
            $('#passDunk').show();
            video = $('#passDunk');

        })

    }
    // Defense Pass
    else if (dfMove == 2) {
        $('#action').text("Pass");
        $('#passBtn').on('click', function () {
            $('#shotBlock').show();
            video = $('#shotBlock');

        });

        $('#shootBtn').on('click', function () {
            const shootResult = Math.floor(Math.random() * 2); {
                if (shootResult == 0) {
                    $('#threePoints').show();
                    video = $('#threePoints');

                }
                else {
                    $('#missShot').show();
                    video = $('#missShot');

                }
            };
        });

        $('#driveBtn').on('click', function () {
            $('#dunk').show();
            video = $('#dunk');

        })
    }


    // タイマー
    const totalTime = 3000;
    const oldTime = Date.now();
    const timeId = setInterval(() => {
        const currentTime = Date.now();
        // 差分を求める
        const diff = currentTime - oldTime;
        const diffSec = totalTime - diff;
        //ミリ秒を整数に変換
        const remainSec = Math.ceil(diffSec / 1000);
        let text = `00:0${remainSec}`;
        // 0秒以下になったら
        if (diffSec <= 0) {
            clearInterval(timeId);
            // タイマー終了の文言を表示する
            text = "Time Over";
        }
        // 画面に表示する
        document.querySelector('#log').innerHTML = text;
    })
})

// nba2.js: 36 Uncaught TypeError: video.play is not a function
//     at HTMLButtonElement.< anonymous > (nba2.js: 36)
// at HTMLButtonElement.dispatch(jquery.min.js: 2)
// at HTMLButtonElement.v.handle(jquery.min.js: 2)