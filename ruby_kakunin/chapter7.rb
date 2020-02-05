apple = 110

if apple >= 100
	puts "リンゴの値段は100円以上です" # true=>処理される,条件に該当するので出力される
end

if apple <= 100
	puts "リンゴの値段は100円以下です" # false=>処理されない,条件に該当しないので出力されない
end


tall = 180 # 変数を定義しないと実行できない！

if tall >= 170 && tall <= 190
    puts "身長は170以上190以下です。"
end


apple = "Aomori"

if apple == "Nagano" # もしappleがNaganoなら
	puts "リンゴの生産地は長野です"
else # ifが当てはまらない場合は
	puts "リンゴの生産地は青森です"
end


apple = "Yamagata"

if apple == "Nagano" # もしappleがNaganoなら
	puts "リンゴの生産地は長野です"
elsif apple == "Yamagata" # それともappleがYamagataなら（appleに長野と山形が含んでいる状態）
	puts "リンゴの生産地は山形です"
else # どちらも当てはまらない場合は
	puts "リンゴの生産地は青森です"
end