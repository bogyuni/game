let resultNum = 0;

function inputSword (btn) {
    const val = parseInt(btn.value);

    if (val === resultNum) {
        btn.style.background = 'blue';
        document.querySelector('.input_section').classList.add('end');
    }else{
        btn.style.background = 'red';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const btnNext = document.querySelector('.btn_next');
    const btnRe = document.querySelector('.btn_re');

    btnNext.onclick = () => {
        const mans = document.querySelector('.set_manNum').value;
        const contentArc = document.querySelector('.content_article');

        resultNum = parseInt(Math.random() * mans + 1);

        for (i = 0; i < mans; i++) {
            contentArc.innerHTML += '<button class="sword sword'+(i+1)+'" onclick="inputSword(this)" value="'+(i+1)+'">'+(i+1)+'<span></span></button>';
        }
    
        document.querySelector('.setting_section').classList.remove('on');
        document.querySelector('.input_section').classList.add('on');
    };

    btnRe.onclick = () => {
        window.location.reload();
    };
});