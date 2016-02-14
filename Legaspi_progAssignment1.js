//+==========================================================================+
//
//		LEGASPI,ALELI S.		2013-06797
//		CMSC128	AB-1L			Programming Assignment1
//
//+==========================================================================+

//sample run
numToWords();
var numbah=wordsToNum("two thousand sixteen");		console.log(numbah);
var numbahc=wordsToCurrency("one hundred","JPY");	console.log(numbahc);
var numbahd=numberDelimited(1000000,",",3); 		console.log(numbahd);

/**
Accepts a whole number from zero (0) to 1 million
(1000000; without commas for example: 1,000,000)
and prints on screen the number in word form
**/
function numToWords(){
	var num=900009; //sample num value
	var temp, i,next1=0,next2=0;
	
	if(num==1000000){//millions
		var d=Math.floor(num/1000000);
		temp=num%1000000;//remainder will be used later
		
		if(d==1) console.log("one million ");
	}
	
	if(num>99999){//hundred thousand
		if(num<1000000){
			temp=num;
		}
		var d= Math.floor(temp /100000);
		temp=num%100000;//remainder will be used later
		
		if(d==1) console.log("one hundred ");
		else if(d==2) console.log("two hundred ");
		else if(d==3) console.log("three hundred ");
		else if(d==4) console.log("four hundred ");
		else if(d==5) console.log("five hundred ");
		else if(d==6) console.log("six hundred ");
		else if(d==7) console.log("seven hundred ");
		else if(d==8) console.log("eight hundred ");
		else if(d==9) console.log("nine hundred ");
	}
	
	if(num>9999){//ten thousands
		if(num<100000)
			temp=num;	
	
		var d= Math.floor(temp/10000);
		temp=num%10000;//remainder will be used later
		
		if(d==1){
			var td=temp/1000;
			if(td==0) console.log("ten thousand ");
			else if(td==1) console.log("eleven thousand ");
			else if(td==2) console.log("twelve thousand ");
			else if(td==3) console.log("thirteen thousand ");
			else if(td==4) console.log("forteen thousand ");
			else if(td==5) console.log("fifteen thousand ");
			else if(td==6) console.log("sixteen thousand ");
			else if(td==7) console.log("seventeen thousand ");
			else if(td==8) console.log("eighteen thousand ");
			else if(td==9) console.log("nineteen thousand ");
			next1=1;		//skip the thousandths place
		}
		else if(d==2) console.log("twenty ");
		else if(d==3) console.log("thirty ");
		else if(d==4) console.log("forty ");
		else if(d==5) console.log("fifty ");
		else if(d==6) console.log("sixty ");
		else if(d==7) console.log("seventy ");
		else if(d==8) console.log("eighty ");
		else if(d==9) console.log("ninety ");
	}
	
	if(num>999){//thousands
		if(next1==0){
			if(num<10000)
				temp=num;
			
			var d= Math.floor(temp /1000);
			temp=num%1000;//remainder will be used later
			
			if(d==0&&num!=1000000) console.log("thousand ");
			else if(d==1) console.log("one thousand ");
			else if(d==2) console.log("two thousand ");
			else if(d==3) console.log("three thousand ");
			else if(d==4) console.log("four thousand ");
			else if(d==5) console.log("five thousand ");
			else if(d==6) console.log("six thousand ");
			else if(d==7) console.log("seven thousand ");
			else if(d==8) console.log("eight thousand ");
			else if(d==9) console.log("nine thousand ");
		}
	}
	
	if(num>99){//hundreds
		if(num<1000)
			temp=num;
	
		var d= Math.floor(temp /100);
		temp=num%100;//remainder will be used later
		
		if(d==1) console.log("one hundred ");
		else if(d==2) console.log("two hundred ");
		else if(d==3) console.log("three hundred ");
		else if(d==4) console.log("four hundred ");
		else if(d==5) console.log("five hundred ");
		else if(d==6) console.log("six hundred ");
		else if(d==7) console.log("seven hundred ");
		else if(d==8) console.log("eight hundred ");
		else if(d==9) console.log("nine hundred ");	
	}
	
	if(num>9){//tens
		if(num<100)
			temp=num;
	
		var d= Math.floor(temp /10);
		temp=num%10;//remainder will be used later
		
		if(d==1){
			if(temp==0) console.log("ten ");
			else if(temp==1) console.log("eleven ");
			else if(temp==2) console.log("twelve ");
			else if(temp==3) console.log("thirteen ");
			else if(temp==4) console.log("forteen ");
			else if(temp==5) console.log("fifteen ");
			else if(temp==6) console.log("sixteen ");
			else if(temp==7) console.log("seventeen ");
			else if(temp==8) console.log("eighteen ");
			else if(temp==9) console.log("nineteen ");
			next2=1;		//skip the ones place
		}
		else if(d==2) console.log("twenty ");
		else if(d==3) console.log("thirty ");
		else if(d==4) console.log("forty ");
		else if(d==5) console.log("fifty ");
		else if(d==6) console.log("sixty ");
		else if(d==7) console.log("seventy ");
		else if(d==8) console.log("eighty ");
		else if(d==9) console.log("ninety ");	
	}
	
	//ones
	if(next2==0){
		if(num<10){
			temp=num;
			if(temp==0) console.log("zero ");
		}
		var d= temp;
		if(d==1) console.log("one ");
		else if(d==2) console.log("two ");
		else if(d==3) console.log("three ");
		else if(d==4) console.log("four ");
		else if(d==5) console.log("five ");
		else if(d==6) console.log("six ");
		else if(d==7) console.log("seven ");
		else if(d==8) console.log("eight ");
		else if(d==9) console.log("nine ");
	}
}

/**
Accepts a number in word form (from zero to 1 million) and 
returns it in numerical form. Input must be in lowercase.
**/

function wordsToNum(str){
	var num="";
	var array =str.split(" ");//array holds the array of words
	
	for (var i in array ){
		//ones digits
		if(array[i] =="zero") num=num+"0";	
		else if(array[i] =="one") num=num+"1";
		else if(array[i] =="two") num=num+"2";
		else if(array[i] =="three") num=num+"3";
		else if(array[i] =="four") num=num+"4";
		else if(array[i] =="five") num=num+"5";
		else if(array[i] =="six") num=num+"6";
		else if(array[i] =="seven") num=num+"7";
		else if(array[i] =="eight") num=num+"8";
		else if(array[i] =="nine") num=num+"9";	
		
		else if(array[i] =="ten") num=num+"10";
		else if(array[i] =="eleven") num=num+"11";
		else if(array[i] =="twelve") num=num+"12";
		else if(array[i] =="thirteen") num=num+"13";
		else if(array[i] =="forteen") num=num+"14";
		else if(array[i] =="fifteen") num=num+"15";
		else if(array[i] =="sixteen") num=num+"16";
		else if(array[i] =="seventeen") num=num+"17";
		else if(array[i] =="eighteen") num=num+"18";
		else if(array[i] =="nineteen") num=num+"19";
		
		//tens digits
		else if(array[i] =="twenty"){
			if(array.length-1==i)
				num=num+"20";
			else num=num+"2";
		} 
		else if(array[i] =="thirty"){
			if(array.length-1==i)
				num=num+"30";
			else num=num+"3";
		}
		else if(array[i] =="forty") {
			if(array.length-1==i)
				num=num+"40";
			else num=num+"4";
		}
		else if(array[i] =="fifty") {
			if(array.length-1==i)
				num=num+"50";
			else num=num+"5";
		}
		else if(array[i] =="sixty") {
			if(array.length-1==i)
				num=num+"60";
			else num=num+"6";
		}
		else if(array[i] =="seventy") {
			if(array.length-1==i)
				num=num+"70";
			else num=num+"7";
		}
		else if(array[i] =="eighty") {
			if(array.length-1==i)
				num=num+"80";
			else num=num+"8";
		}
		else if(array[i] =="ninety") {
			if(array.length-1==i)
				num=num+"90";
			else num=num+"9";
		}
		
		//when hundred word is encountered		
		else if(array[i] =="hundred"){
			if(array.length-1==i){//if last word is hundred
				num=num+"00";
			}
			else {// not yet the last
				var next= array[Number(i)+1];
				if(next=="one"||next=="two"||next=="three"||next=="four"||next=="five"||next=="six"||next=="seven"||next=="eight"||next=="nine") {
						num=num+"0";//include 0 since there is no tens digit
				}
				if(next=="thousand") num=num+"00";//if no ones
				i++;	//skip the 0	
			}	
		}
		
		//when thousand word is encountered	
		else if(array[i] =="thousand"){//if last word is hundred
			if(array.length-1==i){
				num=num+"000";
			}
			else{// not yet the last
				var next= array[Number(i)+1];
				if(array.length-1==Number(i)+1){
					if(next=="one"||next=="two"||next=="three"||next=="four"||next=="five"||next=="six"||next=="seven"||next=="eight"||next=="nine") {
						num=num+"00";//include 00 since there is no tens and hundreds digit
					}
					if(next=="ten"||next=="eleven"||next=="twelve"||next=="thirteen"||next=="forteen"||next=="sixteen"||next=="seventen"||next=="eighteen"||next=="nineteen"||next=="twenty"||next=="thirty"||next=="forty"||next=="fifty"||next=="sixty"||next=="seventy"||next=="eighty"||next=="ninety"){
						num=num+"0";//include 0 since no hundreds digit
					}
				}
				i++;	//skip the 0
			}
		}
			
		//when million word is encountered	
		else if(array[i] =="million"){
			num=num+"000000";
		}
	}
	return num;
}


/**
Accepts two arguments: the first argument is the number in word form
(from zero to 1 million) and the second argument is
any of the following: JPY, PHP, USD. The function
returns the number in words to its numerical form with a prefix of the currency
**/
function wordsToCurrency(str,cur){
	return cur+wordsToNum(str);
}

/**Accepts three arguments: the first is the number from
zero to 1 miliion, the second is the delimiter to
be used (single character only) and third, the number of jumps when
the delimiter will appear (from right most going to left most digit)**/
function numberDelimited(num,c,pos){
	return num.toString().slice(0,num.toString().length-pos) + c + num.toString().slice(num.toString().length-pos);
	//slice the string based on position of the character to be inserted and then join
}

