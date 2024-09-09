function GetGCD(a, b) {	
    console.log("---------------------------------");
	for (let GCD = a % b; GCD != 0; GCD = a % b) {		
        console.log("gcd a", a);
        console.log("gcd b", b);
        a = b;
		b = GCD;
	}
    console.log("---------------------------------");
    console.log("gcd result b", b);
    console.log("---------------------------------");
	return b;
}

function GetLCM(a, b, GCD) {
    console.log("---------------------------------");
    console.log("lcm a", a);
    console.log("lcm b", b);
    console.log("lcm gcd", GCD);
    console.log("lcm a * b / GCD", a * b / GCD);
    console.log("---------------------------------");
    return a * b / GCD;
}

function solution(arr) {
    var answer = 0;
    answer = arr.reduce((acc, cur) => {
        console.log("---------------------------------");
        console.log("acc", acc);
        console.log("cur", cur);
        console.log("---------------------------------");
        return GetLCM(acc, cur, GetGCD(acc, cur));
    });
    
    return answer;
}

console.log(solution([2,6,8,14]));
//console.log(solution([1,2,3]));