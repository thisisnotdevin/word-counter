const textBox = document.getElementById("text");
const wordCount = document.getElementById("wordCount");

 function wordCounter(){
  
    let text = textBox.value;

    //we need to separate the spaces, they dont count as words
    text = text.trim();
    const words = text.split(" ");
    wordCount.innerText = words.length;

    //makes sure that whenever there are no words in the text-box the count is  0
    if (words[0] == ""){
        wordCount.innerText = 0;
    } else {
        wordCount.innerText = words.length;
    }
}
