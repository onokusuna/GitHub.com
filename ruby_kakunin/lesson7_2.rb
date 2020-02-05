 # 四則演算の結果を出力する しかも繰り返す
puts "計算を始めます"
puts "何回繰り返しますか"
input=gets.to_i # 入力値を数字で取り込む
i=1
while i <= input do #iがinputと同等なるまでの間繰り返す
puts "#{i}回目の計算"
puts "２つの値を入力してください"
	a=gets.to_i # 入力値取り込み
	b=gets.to_i
	puts "a=#{a}"
	puts "b=#{b}"
puts "計算結果を出力します"
	puts "a+b=#{a+b}" # a*b=答え と出力
	puts "a-b=#{a-b}"
	puts "a*b=#{a*b}"
	puts "a/b=#{a/b}"
	i += 1
end # while文のend忘れない
puts "計算を終了します"