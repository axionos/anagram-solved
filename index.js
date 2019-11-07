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

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
