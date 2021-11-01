const textBox = document.getElementById("text");
const wordCount = document.getElementById("wordCount");

 function wordCounter(){
  
    let text = textBox.value;
    text = text.trim();
    const words = text.split(" ");
    wordCount.innerText = words.length;
    if (words[0] == ""){
        wordCount.innerText = 0;
    } else {
        wordCount.innerText = words.length;
    }
}