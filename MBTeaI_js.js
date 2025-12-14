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
    let b=0
    let c=0
    //問題文格納配列
    const mondaibun = [
        '都会と田舎なら都会の方が好き',
        '問題文２',
        '問題文３',
        '問題文４',
        '問題文５',
        '問題文６',
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
        if (c == 7){
        document.querySelector("#btn_fi").disabled = false;
        document.getElementById('btn_fi').style.display = 'inline'
        document.querySelector("#btn_q1").disabled = true;
        document.querySelector("#btn_q2").disabled = true;
        document.getElementById('#btn_q1').style.display = 'none'
        document.getElementById('#btn_q2').style.display = 'none'
    }
    }
    //✖ボタンコード
    const tyousa_batu = () => {
        b+=1
        document.querySelector('#question').textContent = mondaibun[c];
        c+=1
        if (c == 7){
        document.querySelector("#btn_fi").disabled = false;
        document.getElementById('btn_fi').style.display = 'inline'
        document.querySelector("#btn_q1").disabled = true;
        document.querySelector("#btn_q2").disabled = true;
        document.getElementById('#btn_q1').style.display = 'none'
        document.getElementById('#btn_q2').style.display = 'none'
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
    const MBTeaI =[
        '１種類目',
        '２種類目',
        '３種類目',
        '４種類目',
        '５種類目',
        '６種類目',
        '１種類目',
        '２種類目',
        '３種類目',
        '４種類目',
        '５種類目',
        '６種類目',

    ]
    //お茶屋さんの格納配列
    //診断結果を表示するコード
    //ホーム画面に戻るコード
    const go_home = () => {
        window.location.href = "index.html";;
    }
    btn_fini.addEventListener('click',go_home);
});
//ホーム画面のコード
