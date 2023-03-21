	function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
	var target;
var words;
var
function process(wordlist) {


	words = wordlist.split("\n");
		 target=words[getRandomInt(words.length)];
var x='';

found=[true];
	for (let i=1;i!=target.length; i++) {
	x+=' ';
		found.push(false);
	}
document.getElementById("next").innerHTML="<span style='background-color:red;color:white'>"+target[0]+"</span>"+"<span style='background-color:green;color:white'>"+x+"</span></span></pre>";
document.getElementById("result").innerHTML = '';
}



function place(guess,target) {
	var word = [];
	for (let i=0;i!=guess.length;i++) {

		if(guess[i]===target[i]) {
			word.push("red");
			found[i] = true
		} else {
			word.push("blue");
		}


	}

	count = {};


	for (let i =0;i!=guess.length;i++) {

		count[target[i]]=0;
		count[guess[i]]=0;
	}
	for (let i =0;i!=guess.length;i++) {
		if (word[i]=="red") {continue};

		count[target[i]]+=1;
	}
	for (let i=0;i!=guess.length;i++) {
		if(word[i]=="blue") {
			g = guess[i];
			if(count[g]>0) {
				count[g]-=1;
				word[i]="orange";
			}
		}
	}

	return word;
}

function color(i,c1,c2,guess,target){
if (!words.includes(guess)) {
return "black";
}
word = place(guess,target);
return word[i];
}

function format2(guess,target){
var		r="";
for (let i=0;i!== target.length;i++) {
		r+='<span style="color:white;background-color:'+(found[i]==true?"red":"green")+'">'+(found[i]?target[i]:" ")+'</span>';
}
		return r+'\n';

}

function format(guess,target) {
var		r="";
for (let i=0;i!== guess.length;i++) {
		r+='<span style="color:white;background-color:'+color(i,guess[i],target[i],guess,target)+'">'+guess[i]+'</span>';
}
		return r+'\n';}

function execute(e) {
	if(e.key =="Enter"){
		let i =document.getElementById("entry");
		guess=i.value.toUpperCase();
		let j =document.getElementById("result");
		j.innerHTML+=format(guess,target);
		document.getElementById("next").innerHTML=format2(guess,target);
		i.value=""; 


	}
}

load(null);

function load(event) {
	n = parseInt(
document.getElementById("nombre_lettres").value);
	if (n<2|| n>21) {
		return;
	}
	if(isNaN(n)) {
		return;
	}

      fetch("/ods/"+n+".txt").then(
      (response) => {
               return response.text();

       } ).then( (text) => {
               process(text);
document.getElementById("nouveau_mot").addEventListener('click', (event)=>{process(text)});
       });
}
document.addEventListener("keypress", execute); 

document.getElementById("nombre_lettres").addEventListener('change', load);

