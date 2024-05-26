// Class Questions -
// 1 . Given a sentence, capitalize the first character of each word.
// 	input - this is javascript
// 	output - This Is JavaScript

// let a="this is javascript"
// let b=""
// i=0
// while (i<a.length){
//     if (i==0){
//         b+=a[i].toUpperCase()
//     }
//     else if (a[i]==" "){
//         b+=" "
//         b+=  a[i+1].toUpperCase()
//         i+=1
//     }
//     else{
//         b+=a[i]
//     }
//     i+=1
// }

// console.log(b)

// 2. Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.
// 	input - ["javascript", "react", "node"]
// 	output - [true, false, false]

// 	input - ["java","python","c"]
// 	output - [false, false, false]

// let arr=["javascript","python","c"]
// let arr1=arr.map((ele)=>{
//     if (ele==="javascript"){
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(arr1)

// 3. Given a string which contains an email address, return true if the given email is valid, else return false.
// 	input - puran@navgurukul.org
// 	output - true

// 	input - puran@navgurukul
// 	output - false

// 	input - puran@gmail.com
// 	output - true

// let email = "puran@navgurukul.org";

// if (email.includes('@') && (email.endsWith('.com') || email.endsWith('.org'))) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// }

// 4. Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.
// 	input - below, elbow
// 	output - true

// 	input - night, thing
// 	output - true

// let a = "below";
// let b = "elbor";

// if (a.length != b.length) {
//     console.log(false);
// } else {
//     let c = 0;
//     let i = 0;

//     while (i < a.length) {
//         let j = 0;
//         while (j < a.length) {
//             if (a[i] == b[j]) {
//                 c += 1;
//                 break;
//             }
//             j += 1;
//         }
//         i += 1;
//     }

//     if (c == a.length) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// 5. Reverse the given sentence.
// 	input- i am learning javascript.
// 	output - tpircsavaj gninrael ma i

// let a="i am learning javascript"
// let b=""
// i=a.length-1;
// while (i>=0){
//     b+=a[i]
//     i=i-1
// }
// console.log(b)

// let a = "i am learning javascript";
// let reversedString = a.split("").reverse().join("");
// console.log(reversedString);

// 6. Reveres the given string word by word then return the reversed string.
// 	input - Success comes to those who work hard
// 	output - hard work who those to comes Success

// let a="Success comes to those who work hard"
// b=a.split(" ")
// let newString=""
// let i=b.length-1
// while (i>=0){
//     newString+=b[i]+" "
//     i-=1
// }
// console.log(newString)
