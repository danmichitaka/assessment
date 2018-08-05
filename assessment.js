(function(){
'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.
getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

/**
*指定した要素の子供を全て除去
*@param{HTMLElement} element HTMLの要素
*
*/
function removeAllChildren(element){
while(element.firstChild){//子供要素あるかぎり削除
element.removeChild(element.firstChild);
}
}

assessmentButton.onclick = () => {
const userName = userNameInput.value;
if (userName.length === 0) {//名前が空の時処理終了
return;
}

//診断結果表示エリア作成
removeAllChildren(resultDivided);
const header = document.createElement('h3');
header.innerText = '診断結果';
resultDivided.appendChild(header);

const paragraph = ducument.createElement('p');
const result = assessment(userName);
paragraph.innerText=result;
resultDivided.appendChild(paragraph);

//ツイートエリアの作成
removeAllChildren(tweetDivided);
const anchor = document.createElemnt('a');
const hrefValue='https://twitter.com/intent/tweet?button_hashtag=%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%81%84%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D&text='
+encodeURIComponent(result);
anchor.setAttribute('href',hrefValue);
anchor.className='twitter-hashtag-button';
anchor.innerText='Tweet #%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%81%84%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D';
tweetDivided.appendChild(anchor);
twttr.widgets.load();
};

userNameInput.onkeydown = (event) => {
if(event.keyCode === 13) {
assessmentButton.onclick();
}
};

const answers = [
'{userName}のいいとこは声。{userName}の声は引き付ける。',
'{userName}のいいとこは目。{userName}の目は引き付ける。',
'{userName}のいいとこは情熱。{userName}の情熱は引き付ける。',
'{userName}のいいとこは厳しさ。{userName}の厳しさは引き付ける。',
'{userName}のいいとこは知識。{userName}の知識は引き付ける。',
'{userName}のいいとこはユニークさ。{userName}のユニークさは引き付ける。',
'{userName}のいいとこは用心深さ。{userName}の用心深さは引き付ける。',
'{userName}のいいとこは顔。{userName}の顔は引き付ける。',
'{userName}のいいとこは決断力。{userName}の決断力は引き付ける。',
'{userName}のいいとこは思いやり。{userName}の思いやりは引き付ける。',
'{userName}のいいとこは感受性。{userName}の感受性は引き付ける。',
'{userName}のいいとこは節度。{userName}の節度は引き付ける。',
'{userName}のいいとこは好奇心。{userName}の好奇心は引き付ける。',
'{userName}のいいとこは気配り。{userName}の気配りは引き付ける。',
'{userName}のいいとこは全て。{userName}の全ては引き付ける。',
'{userName}のいいとこは自制心。{userName}の自制心は引き付ける。',
];

/**
*名前の文字列を渡すと診断結果を返す関数
*@param{string}userName ユーザーの名前
*@return{string}診断結果
*
*/
function assessment(userName){
//全文字のコード番号を取得してそれを足す
let sumOfcharCode = 0;
for (let i = 0; i < userName.length; i++){
sumOfcharCode=sumOfcharCode+userName.charCodeAt(i);
}

//文字のコード番号の合計を回答の数で割って添え字の数値を求める
const index = sumOfcharCode % answers.length;
let result = answers[index];

result = result.replace(/{userName}/g, userName);
return result;
}

//テストコード
console.assert(
assessment('太郎') === '太郎のいいとこは決断力。太郎の決断力は引き付ける。',
'診断結果の文言の特定部分を名前に変える処理が正しくない');
console.assert(
assessment('太郎')===assessment('太郎'),
'入力が同じ名前なら同じ診断結果を出力する処理が正しくない。'
);
})();

