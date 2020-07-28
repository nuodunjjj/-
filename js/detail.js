window.addEventListener('load', function() {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    console.log(big);
    //1、当鼠标经过就显示和隐藏mask和big
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function() {
            mask.style.display = 'block';
            big.style.display = 'block';
        })
        //2、鼠标移动的时候，让黄色盒子跟着鼠标走
    preview_img.addEventListener('mousemove', function(e) {
        //(1)计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        //mask宽高动态变化
        //(2)盒子高度的一半，就可以使得鼠标处于mask的中心
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        //遮挡层移动距离
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        //（3）mask只能在盒子内移动
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            //遮挡层是正方形
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        //大图片
        var bigImg = document.querySelector('.bigImg');
        //大图片的最大移动距离
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        //大图片的移动距离
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
    })
})