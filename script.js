
// for(char ch : myStr.toCharArray()) {
//     ch = Character.toLowerCase(ch);
//     if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
//        ++count;
//  }
function submit() {
    debugger
    var input = document.getElementById("input").value;
    var length = input.length;
    var vowel = 0;
    if (length == 0 || input == "") {
        document.getElementById('length').style.backgroundColor = "red";
        setTimeout(() => {
            document.getElementById('length').style.backgroundColor= "white"
        }, 5000);
    }
    else if (length <= 10) {
        document.getElementById('length').style.backgroundColor = "yellow";
        setTimeout(() => {
            document.getElementById('length').style.backgroundColor= "white"
        }, 5000);
    }
    else {
        document.getElementById('length').style.backgroundColor = "green";
        setTimeout(() => {
            document.getElementById('length').style.backgroundColor= "white"
        }, 5000);
    }
    for (var i = 0; i < length; i++) {
        if (isVowel(input.charAt(i))) {
            vowel++;
        }
        if (vowel == 3) {
            document.getElementById('vowel').style.backgroundColor = "red";
            setTimeout(() => {
                document.getElementById('vowel').style.backgroundColor= "white"
            }, 5000);
        }
        else if (vowel >= 3) {
            document.getElementById('vowel').style.backgroundColor = "green"
            setTimeout(() => {
                document.getElementById('vowel').style.backgroundColor= "white"
            }, 5000);
        }
    }
    document.getElementById('vowelbox').value = vowel;
    document.getElementById('lengthbox').value = length;
    setTimeout(white(), 5000);
    function white() {
        // debugger
        // document.getElementById('length').style.backgroundColor = "white";
        // document.getElementById('vowel').style.backgroundColor = "white";
    }
    function isVowel(char) {
        return ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) != -1
    }
}
// window.localStorage.setItem('name', 'Dipika')
console.log('hello')
