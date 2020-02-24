$('#tab-contents .tab[id != "tab1"]').hide();//属性値が特定の値に等しくない要素だけを取得かつ該当要素を隠す
 
$('#tab-menu a').on('click', function() {
  $("#tab-contents .tab").hide();//id="tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内の全コンテンツをいったん非表示
  //タブのクラスがactiveのときは背景色が白色／文字色が黒色になるように設定されています。
  $("#tab-menu .active").removeClass("active");//タブを切り替えるときは、このCSS設定もいったん削除しなければなりません。このため、.removeClass()にactiveクラスを指定しています。
  $(this).addClass("active");//this=.on('click', function(){}  activeが追加対象のクラスとして指定されています。
  //.show()は要素を表示するメソッドなので、取得したhref属性の中身が表示されることになります。
  $($(this).attr("href")).show();//どのときに表示されるかというと、$(this)のとき、つまり、タブがクリックされたときです。
  return false;
});