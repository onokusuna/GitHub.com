// メイン部分 ２単語続く場合は２単語目の頭文字を大文字にする
var alertString;
alertString = addString("WebCamp");

// 作成した関数を呼び出す
alert(alertString);

// 作成した関数
function addString(strA){
	var addStr = "Hello "+strA;
	return addStr;
}


// じゃんけんの手を入力してもらうプロンプト欄を生成
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// 確認問題追記
// while()の条件式で、「"グー"以外且つ、チョキ"以外且つ、"パー"以外且つ、キャンセルボタン以外だったら」というような条件
while((user_hand !="グー") && (user_hand !="チョキ") && (user_hand !="パー") && (user_hand != null)){
	alert('グー・チョキ・パーのいずれかを入力して下さい'); //javascript
	user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
 
// じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();
 
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);
 
// 結果を表示する if部分確認問題追記
if (user_hand != null){
	alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else{
	alert("またチャレンジしてね"); //javascript
}
 
// ランダムでじゃんけんの手を作成する関数
function getJShand(){
    var js_hand_num = Math.floor( Math.random() * 3 );
    var hand_name;
 
    if(js_hand_num == 0){
        hand_name = "グー";
    }else if(js_hand_num == 1){
        hand_name = "チョキ";
    }else if(js_hand_num == 2){
        hand_name = "パー";
    }
 
    return hand_name;
}
 
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
    var winLoseStr;
 
    if(user == "グー"){
        if(js == "グー"){
            winLoseStr = "あいこ";
        }else if(js == "チョキ"){
            winLoseStr = "勝ち";
        }else if(js == "パー"){
            winLoseStr = "負け";
        }
    }else if(user == "チョキ"){
        if(js == "グー"){
            winLoseStr = "負け";
        }else if(js == "チョキ"){
            winLoseStr = "あいこ";
        }else if(js == "パー"){
            winLoseStr = "勝ち";
        }
    }else if(user == "パー"){
        if(js == "グー"){
            winLoseStr = "勝ち";
        }else if(js == "チョキ"){
            winLoseStr = "負け";
        }else if(js == "パー"){
            winLoseStr = "あいこ";
        }
    }

    return winLoseStr;
}