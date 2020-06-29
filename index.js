$(function () {

    new ClipboardJS('.btn-secondary');

    $('#generate').click(() => {
        let cityCodeNum = $('#city-code').val().split('');
        let n1 = parseInt(cityCodeNum[1]);
        let n2 = parseInt(cityCodeNum[2]);
        let n3 = parseInt($('#gender').val());
        let n4 = Math.floor(Math.random() * 9) + 1;
        let n5 = Math.floor(Math.random() * 9) + 1;
        let n6 = Math.floor(Math.random() * 9) + 1;
        let n7 = Math.floor(Math.random() * 9) + 1;
        let n8 = Math.floor(Math.random() * 9) + 1;
        let n9 = Math.floor(Math.random() * 9) + 1;
        let n10 = Math.floor(Math.random() * 9) + 1;
        // mod 10 to get units digit
        let n11 = (10 - (n1 * 1 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2 + n10 * 1) % 10) % 10;
        let result = cityCodeNum[0] + String(n3) + String(n4) + String(n5) + String(n6) + String(n7) + String(n8) + String(n9) + String(n10) + String(n11);
        $('#g-result').val(result);
    });

    $('#validate').click(() => {
        if ($('#source').val() !== '') {
            if ($('#source').val().length === 10) {
                let n1 = 0;
                let n2 = 0;
                $.each($('#city-code').find('option'), function () {
                    if ($(this).val().includes($('#source').val()[0])) {
                        let cityCodeNum = $(this).val().split('');
                        n1 = parseInt(cityCodeNum[1]);
                        n2 = parseInt(cityCodeNum[2]);
                    }
                });
                let n3 = parseInt($('#source').val()[1]);
                let n4 = parseInt($('#source').val()[2]);
                let n5 = parseInt($('#source').val()[3]);
                let n6 = parseInt($('#source').val()[4]);
                let n7 = parseInt($('#source').val()[5]);
                let n8 = parseInt($('#source').val()[6]);
                let n9 = parseInt($('#source').val()[7]);
                let n10 = parseInt($('#source').val()[8]);
                let n11 = parseInt($('#source').val()[9]);
                let checkNum = (10 - (n1 * 1 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2 + n10 * 1) % 10) % 10;
                n11 === checkNum ? $('#v-result').val('出現了，滅鬼成功！') : $('#v-result').val('沒出現，再加把勁！');
            } else {
                $('#v-result').val('身分證字號長度不足，無法全集中吸吸。');
            }
        }
    });

});