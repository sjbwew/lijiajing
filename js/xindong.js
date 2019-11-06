function inner() {

    var box = document.getElementsByClassName('photo')[0];
    if (box) {


        function init() {
            var width = box.offsetWidth;
            var count = parseInt(width / 1920 * 1280);
            for (var i = 0; i < count; i++) {
                var size = parseInt(ran(200, 120) / 10);
                var ele = document.createElement('div');
                ele.classList.add('item');
                ele.style.width = size + 'px';
                ele.style.height = size + 'px';
                ele.style.left = ran(0, 95) + '%';
                ele.style.top = ran(20, 80) + '%';
                ele.style.animationDelay = ran(0, 30) / 10 + 's';
                box.appendChild(ele);
            }
        }

        function ran(min, max) {
            min = parseInt(min);
            max = parseInt(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        init();


        setInterval(function () {
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w1').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w2').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w3').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w4').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w5').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w6').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w7').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w8').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w9').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w10').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w11').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w12').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w13').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w14').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w15').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w16').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w17').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w18').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w19').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w20').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w21').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w22').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w23').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w24').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w25').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w26').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w27').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w28').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w29').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w30').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w31').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w32').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w33').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w34').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w35').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w36').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w37').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w38').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w39').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w40').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w41').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w42').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w43').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w44').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w45').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w46').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w47').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w48').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w49').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
        }, 2000)

    }
}
var use_name = document.getElementById('use')
var btn = document.getElementById('btn');
btn.onclick = function () {
    switch (use_name.value) {
        case '李佳静': ljj();
            break;
        // case '张佳伟': zjw();
        //     break;
        default: alert('此物个人专属');
    }
    inner()
}


function ljj() {
    document.body.innerHTML = `<div class="photo">
                                  <img src="./images/WechatIMG43.jpeg" alt="" style="width: 300px;height: 350px;">
                                </div>
                                <div class="heart"></div>
                                <embed src="./radio/薛之谦 - 为了遇见你.mp3" width=50px height=50px type=audio/mpeg loop="true" autostart="true" >
                                <div class='w' id="w1">祝佳伟、佳静新婚快乐</div>
                                <div class='w' id="w2">百年好合</div>
                                <div class='w' id="w3">早生贵子</div>
                                <div class='w' id="w4">凤凰于飞</div>
                                <div class='w' id="w5">喜结连理瓜瓞延绵</div>
                                <div class='w' id="w6">珠联壁合连理交枝</div>
                                <div class='w' id="w7">神仙眷属</div>
                                <div class='w' id="w8">才子佳人</div>
                                <div class='w' id="w9">鸳鸯比翼</div>
                                <div class='w' id="w10">郎才女貌</div>
                                <div class='w' id="w11">祝你门琴瑟和鸣</div>
                                <div class='w' id="w12">相敬如宾</div>
                                <div class='w' id="w13">美满良缘</div>
                                <div class='w' id="w14">祝你三冬暖、春不寒、天黑有灯、下雨有伞</div>
                                <div class='w' id="w15">好好对我妹妹哦</div>
                                <div class='w' id="w16">我看好你俩哦</div>
                                <div class='w' id="w17">天作之合</div>
                                <div class='w' id="w18">心心相印</div>
                                <div class='w' id="w19">永结同心</div>
                                <div class='w' id="w20">百年好合</div>
                                <div class='w' id="w21">愿得一人心、白首不分离</div>
                                <div class='w' id="w22">白头到老</div>
                                <div class='w' id="w23">花好月圆</div>
                                <div class='w' id="w24">琴瑟和鸣</div>
                                <div class='w' id="w25">老妹天生丽质</div>
                                <div class='w' id="w26">祝越来越美</div>
                                <div class='w' id="w27">老妹越来越美</div>
                                <div class='w' id="w28">祝李佳静童鞋一路有良人相伴</div>
                                <div class='w' id="w29">鸳鸯璧合</div>
                                <div class='w' id="w30">愿你三冬暖，愿你春不寒</div>
                                <div class='w' id="w31">白首成约</div>
                                <div class='w' id="w32">佳伟越来越帅</div>
                                <div class='w' id="w33">身体健康、万事如意</div>
                                <div class='w' id="w34">老妹美丽动人</div>
                                <div class='w' id="w35">祝佳伟事业顺利</div>
                                <div class='w' id="w36">遥祝新婚快乐</div>
                                <div class='w' id="w37">郎才女貌</div>
                                <div class='w' id="w38">佳静、佳伟天天开心</div>
                                <div class='w' id="w39">老妹越来越苗条</div>
                                <div class='w' id="w40">你们相遇在人海</div>
                                <div class='w' id="w41">看着你们彼此相爱</div>
                                <div class='w' id="w42">由衷的祝福你们</div>
                                <div class='w' id="w43">新郎貌美如花</div>
                                <div class='w' id="w44">祝张佳伟同学一路有良人相伴</div>
                                <div class='w' id="w45">新郎似如草</div>
                                <div class='w' id="w46">你们是天生的一对</div>
                                <div class='w' id="w47">你们是地造的一双</div>
                                <div class='w' id="w48">你们的爱情是上天的安排</div>
                                <div class='w' id="w49">你们的婚姻是上帝的夙愿</div>
                                <div class='w' id="w50">这是花开的时</div>
                                <div class='w' id="w50">是吉祥的时刻</div>
                                <div class='w' id="w50">是美丽的时刻</div>
                                <div class='w' id="w50">祝你们天赐良缘</div>
                                <div class='w' id="w50">愿你门真诚的相爱之火</div>
                                <div class='w' id="w50">如初升的太阳</div>
                                <div class='w' id="w50">百年渡</div>
                                <div class='w' id="w50">共枕眠</div>
                                <div class='w' id="w50">恩爱生世</div>
                                <div class='w' id="w50">短暂一天结千年缘</div>
                                <div class='w' id="w50">百年陪伴千年共眠</div>
                                <div class='w' id="w50">天生才子佳人搭配</div>
                                <div class='w' id="w50">只羡鸳鸯不羡仙</div>`
}
