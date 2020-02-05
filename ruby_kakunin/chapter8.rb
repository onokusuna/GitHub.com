puts "数字を２つ入力してください"
	a=gets.to_i
	b=gets.to_i
	puts "a + b=#{a + b}"


dice = 0 # Diceに0を代入し、初期値を設定する（1でもいいけど使う数字なので0の方が好ましい）
while dice != 6 do # サイコロの目が6ではない間、diceの初期値は0なので条件を満たす。
	dice = rand(1..6) # 以降はdiceに1~6の数字がランダムに出力される rand=random
	puts dice # rand(1..6)とは(1 から 6 までの整数)の意味
end			  # rand(1...6)は6未満の意味


for i in 1..10 do # 1..10は、1~10までの範囲を表す
	puts i # i=intejer(整数)
end # end忘れない！


{"apple"=>130, "strawberry"=>180, "orange"=>100}.each do |fruit, price|  # 最後にend
	puts "#{fruit}は#{price}円です。" #ハッシュの内容を順にキーをfruit、値をpriceに代入して繰り返す
end #上記は変数展開


i = 0
while i <= 10 do #  iが10以下の値を繰り返す
	if i > 5 # もしiが5以上なら
		break #iが5より大きくなると繰り返しから抜ける
	end
	puts i
	i += 1 # i の値をひとつ加算する
end