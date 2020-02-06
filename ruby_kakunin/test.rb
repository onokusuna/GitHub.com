 # タミーミナルに表示される部分
puts "１以上の数字を入力してください" # まず文字入力させる

input = gets.to_i # 整数に直す

if # 条件１
	input%15 == 0 #式が必要 最後にend
	puts "Fizzbuzz"
elsif # 条件２
	input%3 == 0 #式が必要 最後にend
	"結果は…#{Fizz}"
elsif # 条件３
	input%5 == 0 #式が必要 最後にend
	"結果は…#{Buzz}"
else # どれにも該当しない場合
	"結果は…#{input}"
end