// 「Hello World」を表示
alert('Hello World');

// 変数を定義して「hello」を表示
var hello = "Hello, World";
alert('hello');

// 「変数i」を宣言
var i;
// 「変数num」を宣言し、初期値を「0」に設定
var num = 0;
// 変数iの初期値を「1」に設定し、変数iが「11」未満のときは変数iに1を足す（「i++」は「 i = i+1」と同じ）
for(i = 1; i < 11; i++){
// 変数numに「num+i」を代入
	num = num + i;
}
// アラートウィンドウに計算結果を表示
alert('1から10まで足し算した結果は' + num + 'です');

// 四則演算
alert(6 + 2);

alert(6 - 2);

alert(6 * 2);

alert(6 / 2);