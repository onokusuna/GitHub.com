// （API_KEY には、"取得したAPIキー" を記述）
API_KEY = "906d272bd19b06318c453747a8867de5";

$(function(){
  $('#btn').on('click', function() {
 	// 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',

    }).done(function (data){//(data)を指定していますが、その引数内に取得した結果が入ります。（dataは任意の変数名）
        //通信成功
        //$('#id名').text(JSONから欲しい値)の形で指定
        // 位置
        $('#place').text(data.name);
        // 最高気温
        $('#temp_max').text(data.main.temp_max);
        // 最低気温
        $('#temp_min').text(data.main.temp_min);
        //　湿度
        $('#humidity').text(data.main.humidity);
        //　風速
        $('#speed').text(data.wind.speed);
        // 天気
        $('#weather').text(data.weather[0].main);
        // 天気アイコン
        $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
        $('img').attr("alt",data.weather[0].main);
    }).fail(function (data) {
       //通信失敗
       alert('通信に失敗しました。');
    });
  });
});