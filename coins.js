
var coins = function(num){

	var results = []
	
		while(num>=25){
			results.push('25')
			num -=25
		}
		while(num>=10){
			results.push('10')
			num-=10
		}
		while(num>=5){
			results.push('5')
			num -=5
		}
		while(num>=1){
			results.push('1')
			num -=1
		}

	var finalResult = results.map(function(el){
		return parseInt(el)
	})
	return finalResult
}