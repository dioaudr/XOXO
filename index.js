let kata = "xoxoxo";
let x = 0;
let o = 0;

for(var i = 0; i < kata.length; i++){
    temp = ""
   if(kata[i] == "x"){
    x++
  }else if(kata[i] == "o"){
    o++
  }
} 
if(x == o){
    console.log(true)
} else{
    console.log(false)
}