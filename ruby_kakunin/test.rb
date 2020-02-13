 # タミーミナルに表示される部分
puts "１以上の数字を入力してください" # まず文字入力させる

input = gets.to_i # 整数に直す

if # 条件１
	input%15 == 0 #式が必要 最後にend
	puts "FizzBuzz"
elsif # 条件２
	input%3 == 0 #式が必要 最後にend
	puts "Fizz"
elsif # 条件３
	input%5 == 0 #式が必要 最後にend
	puts "Buzz"
else # どれにも該当しない場合
	input.to_s
end