function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }

    const lookup = {}

    for(let char of str1){
        !!lookup[char] ? lookup[char]++ : lookup[char] = 1
    }

    console.log(lookup)

    for(let char of str2){
       if(!!lookup[char]){
        lookup[char]--
      } else {
        return false
      }
    }

    return true
}

function validAnagram2(stringA, stringB) {
  return clean(stringA) === clean(stringB)
}

clean = str => {
  return str.replace(/[^\w]/g, '').split('').sort().join('')
}

// validAnagram2('hello', 'you') // false
// validAnagram2('rat', 'car') // false
// validAnagram2('awesome', 'awesom') // false
// validAnagram2('qwerty', 'qeywrt') // true
validAnagram2('texttwisttime', 'timetwisttext') // true


// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram('rat', 'car') // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
