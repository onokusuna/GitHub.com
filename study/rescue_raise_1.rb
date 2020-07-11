puts "6個のりんごを山分けします。山分けする人数を入力してください。"
num = gets.to_i
begin
  if 6 % num != 0
  raise RuntimeError, "山分けできません"
end
yourNum = 6 / num
puts "山分けすると1人#{6/num}個です"
rescue => e
  puts "1人以上の人数を数値で入力してください"
  puts "例外は #{e} です"
end