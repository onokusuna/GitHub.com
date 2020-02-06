# fizz_buzz.rb
# メソッドを定義する(決める)
def fizz_buzz(number) # numberって何？=>このメソッドの引数(下記の変数とは内容は一緒だが違う名称にする)

	if # 条件１
		number%15 == 0 #式が必要 最後にend
		"FizzBuzz"
	elsif # 条件２
		number%3 == 0 #式が必要 最後にend
		"Fizz"
	elsif # 条件３
		number%5 == 0 #式が必要 最後にend
		"Buzz"
	else # どれにも該当しない場合
		number.to_s # stringsにしないとnumberがそのまま出てくる
	end
end
 # タミーミナルに表示される部分
puts "１以上の数字を入力してください" # まず文字入力させる

input = gets.to_i # 整数に直す

puts '結果は…' # 結果は…と表示する

puts fizz_buzz(input)# メソッドに書いた条件式から結果を表示する