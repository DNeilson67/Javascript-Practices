function canGiveBlood(d , r) {
    if (d == "O-") {
            return true
        }
    else if (d == "O+") {
        if (r == "O+" || r == "A+" || r == "AB+" || r == "B+") {
            return true
        } 
        else {
            return false
        }
    }
    else if (d == "A-") {
        if (r == "AB+" || r == "A+" || r == "A-" || r == "AB-") {
            return true
        } 
        else {
            return false
        }
    } 
    else if (d == "A+") {
        if (r == "AB+" || r == "A+") {
            return true
        } 
        else {
            return false
        }
    } 
    else if (d == "B-") {
        if (r == "AB+" || r == "AB-" || r == "B+" || r == "B-" ) {
            return true
        } 
        else {
            return false
        }
    } 
    else if (d == "B+") {
        if (r == "AB+" || r == "B+") {
            return true
        } 
        else {
            return false
        }
    } 
    else if (d == "AB-") {
        if (r == "AB-" || r == "AB+") {
            return true
        } 
        else {
            return false
        }
    } 
    else if (d == "AB+") {
        if (r == "AB+") {
            return true
        } 
        else {
            return false
        }
    }
}
var a = canGiveBlood("O+", "A+")
var b = canGiveBlood("A-","B-")
var c = canGiveBlood("A-","AB+")
console.log(a)
console.log(b)
console.log(c)