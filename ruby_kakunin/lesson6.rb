total_price = 100
mikan = 100

if total_price > mikan # みかんが買えて、所持金に余裕がある場合
	puts "みかんを購入。所持金に余りあり"
elsif total_price == mikan # みかんは買えるが所持金が0になる場合
	puts "みかんを購入。所持金は0円"
else total_price > mikan # みかんが買えない場合
	puts "みかんを購入することができません"
end