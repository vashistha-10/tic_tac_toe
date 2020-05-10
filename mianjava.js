var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var seven = document.querySelector(".seven");
var eight = document.querySelector(".eight");
var nine = document.querySelector(".nine");
var init = one.textContent;

var p = document.querySelector(".show_win");
var res = document.getElementById("restart");
var h1 = document.querySelector("h1");

var totalcount = 0;
var winnerName;
var win=0;

res.addEventListener("click",function(){
     win=0;
     winnerName = "";
     totalcount = 0;
     p.textContent = "";
     one.textContent = init;
     two.textContent = init;
     three.textContent = init;
     four.textContent = init;
     five.textContent = init;
     six.textContent = init;
     seven.textContent = init;
     eight.textContent = init;
     nine.textContent = init;
     h1.style.backgroundColor = "rebeccapurple";
     
});

one.addEventListener("click",function(){
    if(one.textContent === "X" || one.textContent === "O")
    {
        one.textContent = one.textContent;
    }
    else if(win === 1)
    {
        one.textContent = one.textContent;
    }
    else{
        if(totalcount%2==0) { one.textContent = "X"; }
        else { one.textContent = "O"; }
        totalcount++;
        win = checkWin();
    }
});

two.addEventListener("click",function(){
    if(two.textContent === "X" || two.textContent === "O")
    {
        two.textContent = two.textContent;
    }
    else if(win === 1)
    {
        two.textContent = two.textContent;
    }
    else{
        if(totalcount%2==0) { two.textContent = "X"; }
        else { two.textContent = "O"; }
        totalcount++;
        win = checkWin();
    }
});

three.addEventListener("click",function(){
    if(three.textContent === "X" || three.textContent === "O")
    {
        three.textContent = three.textContent;
    }
    else if(win === 1)
    {
        three.textContent = three.textContent;
    }
    else{
        if(totalcount%2==0) { three.textContent = "X"; }
        else { three.textContent = "O"; }
        totalcount++;
        win = checkWin();
    }
});

four.addEventListener("click",function(){
    if(four.textContent === "X" || four.textContent === "O")
    {
        four.textContent = four.textContent;
    }
    else if(win === 1)
    {
        four.textContent = four.textContent;
    }
    else{
        if(totalcount%2==0) { four.textContent = "X"; }
        else { four.textContent = "O"; }
        totalcount++;
        win = checkWin();
    }
});

five.addEventListener("click",function(){
    if(five.textContent === "X" || five.textContent === "O")
    {
        five.textContent = five.textContent;
    }
    else if(win === 1)
    {
        five.textContent = five.textContent;
    }
    else{
        if(totalcount%2==0) { five.textContent = "X"; }
        else { five.textContent = "O"; }
        totalcount++;
        win = checkWin();
    }
});


six.addEventListener("click",function(){
    if(six.textContent === "X" || six.textContent === "O")
    {
        six.textContent = six.textContent;
    }
    else if(win === 1)
    {
        six.textContent = six.textContent;
    }
    else{
        if(totalcount%2==0) { six.textContent = "X"; }
        else { six.textContent = "O"; }
        totalcount++;
        win = checkWin();
    }
});

seven.addEventListener("click",function(){
    if(seven.textContent === "X" || seven.textContent === "O")
    {
        seven.textContent = seven.textContent;
    }
    else if(win === 1)
    {
        seven.textContent = seven.textContent;
    }
    else{
        if(totalcount%2==0) { seven.textContent = "X"; }
        else { seven.textContent = "O"; }
        totalcount++;
        win = checkWin();
    }
});


eight.addEventListener("click",function(){
    if(eight.textContent === "X" || eight.textContent === "O")
    {
        eight.textContent = eight.textContent;
    }
    else if(win === 1)
    {
        eight.textContent = eight.textContent;
    }
    else{
        if(totalcount%2==0) { eight.textContent = "X"; }
        else { eight.textContent = "O"; }
        totalcount++;
        win = checkWin();
    }
});



nine.addEventListener("click",function(){
    if(nine.textContent === "X" || nine.textContent === "O")
    {
        nine.textContent = nine.textContent;
    }
    else if(win === 1)
    {
        nine.textContent = nine.textContent;
    }
    else{
        if(totalcount%2==0) { nine.textContent = "X"; }
        else { nine.textContent = "O"; }
        totalcount++;
        win = checkWin();
    }
});


function checkWin()
{
    if(one.textContent === "X" && four.textContent === "X" && seven.textContent === "X")
    {
        win =1;
        winnerName = one.textContent;
        p.textContent = "Winner is " + winnerName;
        totalcount = 0;
        h1.style.backgroundColor = "#1FA03E";
        return 1;
    }

    if(one.textContent === "X" && two.textContent === "X" && three.textContent === "X")
    {
        win =1;
        winnerName = one.textContent;
        p.textContent = "Winner is " + winnerName;
        totalcount = 0;
        h1.style.backgroundColor = "#1FA03E";
        return 1;
    }

    if(one.textContent === "X" && nine.textContent === "X" && five.textContent === "X")
    {
        win =1;
        winnerName = one.textContent;
        p.textContent = "Winner is " + winnerName;
        totalcount = 0;
        h1.style.backgroundColor = "#1FA03E";
        return 1;
    }

    if(three.textContent === "X" && six.textContent === "X" && nine.textContent === "X")
    {
        win =1;
        winnerName = three.textContent;
        p.textContent = "Winner is " + winnerName;
        totalcount = 0;
        h1.style.backgroundColor = "#1FA03E";
        return 1;
    }

    if(three.textContent === "X" && seven.textContent === "X" && five.textContent === "X")
    {
        win =1;
        winnerName = three.textContent;
        p.textContent = "Winner is " + winnerName;
        totalcount = 0;
        h1.style.backgroundColor = "#1FA03E";
        return 1;
    }

    if(six.textContent === "X" && four.textContent === "X" && five.textContent === "X")
    {
        win =1;
        winnerName = six.textContent;
        p.textContent = "Winner is " + winnerName;
        totalcount = 0;
        h1.style.backgroundColor = "#1FA03E";
        return 1;
    }

    if(eight.textContent === "X" && seven.textContent === "X" && nine.textContent === "X")
    {
        win =1;
        winnerName = nine.textContent;
        p.textContent = "Winner is " + winnerName;
        totalcount = 0;
        h1.style.backgroundColor = "#1FA03E";
        return 1;
    }
    
    if(eight.textContent === "X" && two.textContent === "X" && five.textContent === "X")
    {
        win =1;
        winnerName = eight.textContent;
        p.textContent = "Winner is " + winnerName;
        totalcount = 0;
        h1.style.backgroundColor = "#1FA03E";
        return 1;
    }

    if(one.textContent === "O" && four.textContent === "O" && seven.textContent === "O")
    {
        win =1;
        winnerName = one.textContent;
        p.textContent = "Winner is " + winnerName;
        totalcount = 0;
        h1.style.backgroundColor = "#1FA03E";
        return 1;
    }

    if(one.textContent === "O" && two.textContent === "O" && three.textContent === "O")
    {
        win =1;
        winnerName = one.textContent;
        p.textContent = "Winner is " + winnerName;
        totalcount = 0;
        h1.style.backgroundColor = "#1FA03E";
        return 1;
    }

    if(one.textContent === "O" && nine.textContent === "O" && five.textContent === "O")
    {
        win =1;
        winnerName = one.textContent;
        p.textContent = "Winner is " + winnerName;
        totalcount = 0;
        h1.style.backgroundColor = "#1FA03E";
        return 1;
    }

    if(three.textContent === "O" && six.textContent === "O" && nine.textContent === "O")
    {
        win =1;
        winnerName = three.textContent;
        p.textContent = "Winner is " + winnerName;
        totalcount = 0;
        h1.style.backgroundColor = "#1FA03E";
        return 1;
    }

    if(three.textContent === "O" && seven.textContent === "O" && five.textContent === "O")
    {
        win =1;
        winnerName = three.textContent;
        p.textContent = "Winner is " + winnerName;
        totalcount = 0;
        h1.style.backgroundColor = "#1FA03E";
        return 1;
    }

    if(six.textContent === "O" && four.textContent === "O" && five.textContent === "O")
    {
        win =1;
        winnerName = six.textContent;
        p.textContent = "Winner is " + winnerName;
        totalcount = 0;
        h1.style.backgroundColor = "#1FA03E";
        return 1;
    }

    if(eight.textContent === "O" && seven.textContent === "O" && nine.textContent === "O")
    {
        win =1;
        winnerName = nine.textContent;
        p.textContent = "Winner is " + winnerName;
        totalcount = 0;
        h1.style.backgroundColor = "#1FA03E";
        return 1;
    }
    
    if(eight.textContent === "O" && two.textContent === "O" && five.textContent === "O")
    {
        win =1;
        winnerName = eight.textContent;
        p.textContent = "Winner is " + winnerName;
        totalcount = 0;
        h1.style.backgroundColor = "#1FA03E";
        return 1;
    }
    
    if(totalcount === 9) {
        win=1;
        p.textContent = "Draw !";
        h1.style.backgroundColor = "orange";
    }
}


