def hello_world
	"Hello, World"
end

puts hello_world


puts hello_world
def hello_world
	"Hello, World"
end


def greeting(name)
	"Hello, #{name}" #nameの中には、文字列'John'が入っている
end

puts greeting("john") # ここでは'John'を引数として渡している


def greeting
	"Hello, John!"
	"Hi, John!" # 'Hi, John!'が、このメソッドの戻り値
end

puts greeting # greetingメソッドの戻り値を、putsメソッドで出力する


def greeting
	return "Hello, John!" # 'Hello, John!'が、このメソッドの戻り値
	"Hi, John!"
end

puts greeting # greetingメソッドの戻り値を、putsメソッドで出力する


puts 10 + "1".to_i
puts 10.to_s + "1"