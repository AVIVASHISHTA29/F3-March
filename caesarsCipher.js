// What is encryption?
// Why is it needed?

// Caesar's cipher is just a way of encrypting

var message = "CANCEL ATTACK";
var encrypted_message = "DBODFM BUUBDL";
// Algorithm to decrypt it
var decrypted_message = "We will attack on the castle at 10:00PM";

// Julius Caesar - > Roman Empire
// let us shift letters by 'x' amount

// A->C
// B->D
// C->E
// ....
// Y->A
// Z->B

// encryption Algorithm called rot13

// str = "ATTACK,13"
// encr_str = "NGGNPX";
// str.charCodeAt(4) -> ASCII VALUE OF C
// A->65
// 65+13 = 78 -> corresponding 78 -> N

// String.fromCharCode(65) ->A
var encryptedStr = "";

function encrypt(str) {
  for (ch in str) {
    if (str.charCodeAt(ch) >= 65 && str.charCodeAt(ch) <= 90) {
      // my current character is a CAPITAL Alphabet
      if (str.charCodeAt(ch) >= 78) {
        encryptedStr += String.fromCharCode(str.charCodeAt(ch) - 13);
      } else {
        encryptedStr += String.fromCharCode(str.charCodeAt(ch) + 13);
      }
    } else {
      encryptedStr += str[ch];
    }
  }

  return encryptedStr;
}

// console.log("ATTACK ON CASTLE AT 10");
// console.log(encrypt("ATTACK ON CASTLE AT 10"));

// var alphabetStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function rot13(str) {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === " " || char === "!" || char === "?" || char === ".") {
      ans += char;
    } else {
      const val = alpha.indexOf(str[i]);
      const new_val = (val + 13) % 26;
      ans += alpha[new_val];
    }
  }
  return ans;
}

console.log("ATTACK ON CASTLE!");
console.log(rot13("ATTACK ON CASTLE!"));
