if ( btn_home !== null) {
    const btn_home =document.querySelector('#btn_home');
    const shindan_st = () => {
        window.location.href = "MBTeaI_question.html";;
    }
    btn_home.addEventListener('click',shindan_st);
};
//診断のコード
const btn_q1 =document.querySelector('#btn_q1');
const btn_q2 =document.querySelector('#btn_q2');

let a=50
let b=50
let c=0

const mondaibun = [
    '都会と田舎なら都会の方が好き',
    '問題文２',
    '問題文３',
    '問題文４',
    '問題文５',
    '問題文６',
];

const mondai_kousin = () => {
    document.querySelector('#quetion').textContent = mondaibun[c];
    c+=1
}
const tyousa_maru = () => {
    a+=2
    b+=3
    mondai_kousin
}
const tyousa_batu = () => {
    a+=4
    b+=3
    mondai_kousin
}
btn_q1.addEventListener('click',tyousa_maru)
btn_q2.addEventListener('click',tyousa_batu)
//診断結果に遷移するコード
const btn_fi =document.querySelector('#btn_fi');
const shindan_fi = () => {
    window.location.href = "MBTeaI_shindankekka.html";;
}
btn_fi.addEventListener('click',shindan_fi);
//診断結果画面のコード
//ホーム画面のコード