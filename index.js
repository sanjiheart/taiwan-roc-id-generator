$(function () {

    new ClipboardJS('.btn');

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
        $('#result').val(result);
    });

});