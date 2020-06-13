// ==UserScript==
// @name         meno lf menadżer
// @version      1.0
// @author       KaciPL
// @match        http://*.margonem.pl/
// @grant        none
// ==/UserScript==
g.loadQueue.push({
    fun: function() {
        if (!localStorage.getItem(`zposx`)) {
            let tmpobj = {
                x: 200,
                y: 160
            }
            localStorage.setItem(`zposx`, JSON.stringify(tmpobj));
        };
        const kordyx = JSON.parse(localStorage.getItem(`zposx`));
        var timer33;
        const divlf = document.createElement('div');
        divlf.style.width = '110px';
        divlf.style.height = '75px';
        divlf.style.border = '3px ridge purple';
        divlf.style.left = `${kordyx.x}px`;
        divlf.style.top = `${kordyx.y}px`;
        divlf.tip = 'lf meno menadżer by KaciPL#8830';
        const input1 = document.createElement('input');
        if (localStorage.getItem('menolf') == 'on') {
            input1.checked = true;
        } else {
            input1.checked = false;
        }
        input1.type = 'checkbox';
        input1.style.marginLeft = '45px';
        divlf.appendChild(input1);
        const span = document.createElement('span');
        span.innerHTML = '<center>przęłącznik lf</center><br>';
        divlf.appendChild(span);
        var input = document.createElement("input");
        input.style.marginLeft = '5px';
        input.type = "button";
        input.value = "reset pozycji lf";
        input.onclick = showAlert;
        document.body.appendChild(divlf);

        function showAlert() {
            document.getElementById('Lootfiltr_Suheyaku').style.top = '100px';
            document.getElementById('Lootfiltr_Suheyaku').style.left = '100px';
            message('Pozycja lf została zresetowana');
        }
        divlf.appendChild(input);
        $(divlf).draggable({
            stop: () => {
                let tmpobj = {
                    x: parseInt(divlf.style.left),
                    y: parseInt(divlf.style.top)
                }
                localStorage.setItem(`zposx`, JSON.stringify(tmpobj));
                message(`Zapisano pozycję`);
            }
        });
        input1.addEventListener('change', () => {
            if (input1.checked == true) {
                message('lootfilter włączony, odśwież grę')
                localStorage.setItem('menolf', 'on');
                localStorage.removeItem(`disable-lf-b`);
            } else {
                message('lootfliter wyłączony, odśwież grę')
                localStorage.setItem('menolf', 'off');
                localStorage.setItem(`disable-lf-b`, 1);
            }
        });
    }
})