// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
var myNumber=42;
var myName='Kevin'

// Print -52 to 1066
for(var i=-52; i<=1066;i++){
    console.log(i)
}

// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
function beCheerful(){
    for(var i=1; i<=98; i++)
    {
        console.log('good morning!');
    }
}
beCheerful();

// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for(var i=-300;i<=0;i++){
    if(i%3 == 0)
    {
        if(i== -3 || i == -6){
            continue;
        }
        console.log(i)
    }
}

// Print integers from 2000 to 5280, using a WHILE.
var i= 2000;
while(i<=5280){
    console.log(i);
    i++
}


// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 
var month=7;
var day=21;

if(month==7 && day==19){
    console.log('How did you know?')
}
else{
    console.log('Just another day....')
}

// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

function leapYear(year){
    if(year%4==0){
        if(year % 400==0){
            return true;
        }
        else{
            return false;
        }
    }
}

console.log(leapYear(2300))
console.log(leapYear(2400))
console.log(leapYear(1432))
console.log(leapYear(2000))


// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
var count=0;
for(var i= 512;i<4097; i++){
    if(i%5==0)
    {
        console.log(i)
        count++;
    }
    if(i==4096){
        //Prints how many multiples there were
        console.log(count)
    }
}


// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.
var i=0
while(i<=60000){
    if(i%6==0){
        console.log(i)
    }
    i++;
}

// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

for(var i=1;i<=100;i++){
    if(i%5==0)
    {
        console.log('Coding');
        if(i%10==0){
            console.log(' Dojo')
        }
    }
}

// Your function will be given an input parameter incoming. Please console.log this value.
function incoming(value){
    console.log(value)
}
myVar='Kevin'
incoming('Kevin')
incoming(100)
incoming(myVar)

// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
var sum=0;
for(var i=-300000; i<=30000;i++){
    if(i%2 !=0){
        sum+=i
    }
}
console.log(sum)
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
var i=2016;
while(i>0){
    console.log(i)
    i-=4
}

// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).
function flexCount(lowNum, highNum, mult){
    for(var i=highNum; i>= lowNum; i--)
    {
        if(i%mult ==0)
        {
            console.log(i)
        }
    }
}
flexCount(0, 100, 2)
flexCount(12, 96, 8)

// The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).
//(param1 mult,param2/start,param3/end,param4/exception)
function flexCount2(param1, param2, param3, param4){
    for(var i=param2; i>= param3; i--)
    {
        if(i%param1 ==0)
        {
            if(i%param4 ==0 ){
                continue;
            }
            else{
                console.log(i);
            }
            
        }
    }
}

flexCount2(2, 100, 0, 4)
flexCount2(8, 800, 250, 5)