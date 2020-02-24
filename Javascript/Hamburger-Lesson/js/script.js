$(function() {
 
  $('.menu-trigger').on('click', function() {//.menu-triggerがクリックされたときに、処理が行われるように設定
  	//指定されているclass（ここではactive）をトグル処理するメソッド このときに.toggleClass()を設定すると、アイコンがクリックされたときにactiveクラスが追加され、もう一度クリックすると削除されます。
    $(this).toggleClass('active');//$(this)は、クリックされた要素自身を表します。
    $('#sp-menu').fadeToggle();//ハンバーガーメニューがクリックされたときに、フェードインとフェードアウトが交互に実行されるようになります。
    return false;
  });
 
 });