//ホーム画面のコード
document.addEventListener('DOMContentLoaded', (event) => {
    const btn_home =document.querySelector('#btn_home');
    const shindan_st = () => {
        window.location.href = "MBTeaI_question.html";;
    }
    btn_home.addEventListener('click',shindan_st);
});
//診断のコード
document.addEventListener('DOMContentLoaded', (event) => {

    const btn_q1 =document.querySelector('#btn_q1');
    const btn_q2 =document.querySelector('#btn_q2');

    let a=0
    let c=0
    let mondaisuu = 9
    //問題文格納配列
    const mondaibun = [
        '都会と田舎なら都会の方が好き',
        '問題文２',
        '問題文３',
        '問題文４',
        '問題文５',
        '問題文６',
        '問題文７',
        '問題文８',
        '問題文９',
        '診断は終了です！'
    ];

    //一問目表示のコード
    document.querySelector('#question').textContent = mondaibun[c];
    c+=1
    document.querySelector("#btn_fi").disabled = true;
    document.getElementById('btn_fi').style.display = 'none'
    //〇ボタンコード
    const tyousa_maru = () => {
        a+=1
        document.querySelector('#question').textContent = mondaibun[c];
        c+=1
        if (c == mondaisuu + 1){
        document.querySelector("#btn_fi").disabled = false;
        document.getElementById('btn_fi').style.display = 'inline'
        document.querySelector("#btn_q1").disabled = true;
        document.querySelector("#btn_q2").disabled = true;
        let k = a.toString();
        sessionStorage.setItem('shindankekka',k );
    }
    }
    //✖ボタンコード
    const tyousa_batu = () => {
        document.querySelector('#question').textContent = mondaibun[c];
        c+=1
        if (c == mondaisuu + 1){
        document.querySelector("#btn_fi").disabled = false;
        document.getElementById('btn_fi').style.display = 'inline';
        document.querySelector("#btn_q1").disabled = true;
        document.querySelector("#btn_q2").disabled = true;
        let k = a.toString();
        sessionStorage.setItem('shindankekka',k );
    }
    }

    btn_q1.addEventListener('click',tyousa_maru)
    btn_q2.addEventListener('click',tyousa_batu)
});
//診断結果に遷移するコード
document.addEventListener('DOMContentLoaded', (event) => {
    const btn_fi =document.querySelector('#btn_fi');
    const shindan_fi = () => {
        window.location.href = "MBTeaI_shindankekka.html";;
    }
    btn_fi.addEventListener('click',shindan_fi);
});
//診断結果画面のコード
document.addEventListener('DOMContentLoaded', (event) => {
    const btn_fini =document.querySelector('#btn_fini');
    //診断結果の格納配列
    const MBTeaI = [
        '〇を０回押した',
        '〇を１回押した',
        '〇を２回押した',
        '〇を３回押した',
        '〇を４回押した',
        '〇を５回押した',
        '〇を６回押した',
        '〇を７回押した',
        '〇を８回押した',
        '〇を９回押した',
    ]
    //お茶屋さんの格納配列
    const otyayasan_gazou = [
        'IMAGE/IMAGE_3730.jpg',
        'IMAGE/club_logo.png',
        'IMAGE/1755773016761.jpg',
        'IMAGE/logo.png',
        'IMAGE/スクリーンショット 2025-11-25 214845.png',
        'IMAGE/スクリーンショット 2025-11-25 214845.png',
        'IMAGE/1755773016761.jpg',
    ]
    //診断結果を表示するコード 
    let kekka = Number(sessionStorage.getItem('shindankekka'));
    document.querySelector('#kekka_hyouzi').textContent = MBTeaI[kekka];
    //const kekka_Image = document.getElementById('#otyaya_gazou');
    //kekka_Image.src = otyayasan_gazou[kekka];
    //ホーム画面に戻るコード
    const go_home = () => {
        window.location.href = "index.html";;
        kekka = 0
        k = 0
        sessionStorage.removeItem('shindankekka');
    }
    btn_fini.addEventListener('click',go_home);
});
