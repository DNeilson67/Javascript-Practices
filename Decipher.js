function digitalDecipher(eMessage, key){
    var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var results = "";
    var key = key.toString().split("");
    for (var i = 0; i < eMessage.length; i++) {
        results += alphabets[eMessage[i] - key[i % key.length] - 1];
      }
      return results;
    }

f = digitalDecipher([20, 12, 18, 30, 21], 1939);
g = digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990);
h = digitalDecipher([6, 4, 1, 3, 9, 20], 100);
console.log(f);
console.log(g);
console.log(h);