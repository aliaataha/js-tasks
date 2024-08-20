//-----------array-------------------//
// problem1
// let num=12
// function returnFirstDigit(num)
//      {
//         let text=String(num).split('')
//         return text[0]
//      }   
// console.log(returnFirstDigit(num)) 

// problem2
// let numbers=[5,7,-2,0,4,-8,-3,6]
// function checkNumber(array)
//     {
//         let even=[],
//             odd=[],
//             negative=[],
//             positive=[]
//         array.forEach(element => { 
//             if (element>0)
//                 positive.push(element)
//             if(element<0)
//                 negative.push(element)
//             if(element%2==0)
//                 even.push(element)
//             if(element%2==1 || element%2==-1)
//                 odd.push(element)
            
//         });    
//         console.log(`positive: ${positive.length}\nnegative: ${negative.length}\neven: ${even.length}\nodd: ${odd.length}  `)
//     }
// checkNumber(numbers)  

// problem3
// let array=[1,NaN,2,"a","asd"]
// function returnNum(array)
//      {
//         let numbers=[]
//          array.forEach(element => {
//             if(!(isNaN(element)))
//                   numbers.push(element)
            
//          });
//          console.log(numbers)
//      }
// returnNum(array)

// problem4
// function sliceFuction(array,start=array[0],end=array.length)
// {
//     let newArray=[]
//     index=0
//     for(let i=start;i<end;i++)
//          {
//             newArray[index]=array[i]
//             index++
//          }
//     console.log(newArray)     
// }
// let array=[1,2,3,4,5,6]
// sliceFuction(array,2,4)

// problem5
// let numbers=[[1,2,3,4],[45,73,12],[13,3,10]]
//  let maxNumbers=[]
// function  returnMaxNumbers(array)
//     {
//         array.forEach(element => {
//                  max=element[0]
//                 element.forEach(value => {
//                     if (value>max)
//                         max=value
//                     else
//                      max=max 
                
//             });
//             maxNumbers.push(max)
            
//         });
//         console.log(maxNumbers)
//     }
// returnMaxNumbers(numbers)    

// problem6
// text=prompt("plz enter a text")

// if (text.length<=10)
// {
//     console.log(text)
// }
// else
//    {
//       array=text.split('')
//       let firstChar=array.shift()
//       let lastChar=array.pop()
//      console.log(`${firstChar}${array.length}${lastChar}`)
      

//    }

// problem7

// let text="ffee"
// function twoKindcharter(string)
//       {
//            if((string[0]==string[1]&&string[2]==string[3])||(string[0]==string[3]&&string[1]==string[2])||(string[0]==string[2]&&string[1]==string[3])) 
//                 {
//                     console.log(true)
//                 }
//            else
//              {
//                 console.log(false)
//              }     
//       }   
//   twoKindcharter(text)      

// problem9
// let array=["h","e","l","l","o"]
// let char="l"
// function firstLastIndex(array,char)
//     {
//         let first=array.indexOf(char)
//         let last =array.lastIndexOf(char)
//         if (first==-1 && last==-1)
//            {
//               console.log(`${char} is not exsist`) 
//            }
//         else if(first==last)
//             {
//               console.log(`${char} is exsist one time at ${first}`) 
//             } 
//         else
//            {
//               console.log(first,last)
//            }     
        
//     }
// firstLastIndex(array,char)

// problem10    
// let array=[1,1,1,1]
// let num=7
// function checkNumber(array,num)
//       {
//         for(let i=0;i<array.length;i++)
//              {   
//                 obtainedNum=array[i]
//                 for(let j=1;j<array.length;j++)
//                 {
//                     if(obtainedNum<num)
//                     {
//                         obtainedNum=obtainedNum+array[j]
//                     }
//                     else if (obtainedNum>=num)
//                     {
//                         break
//                     }
//                 }
//                if (obtainedNum==num) 
//                  {
//                     console.log(true)
//                     break
                    
//                  }
//              }
//       }
// checkNumber(array,num)      

//-----------------------------string---------------------------//
// problem1
// let text="aliaa"
// function reverseString(str)
//      {  
//         let reversedText
//         array=str.split("")
//         reversedText=array.reverse().toString()
//         reversedText=reversedText.replace(/,/g,"")
//         return reversedText
//      }
// console.log(reverseString(text))     
// problem2
// str1="Eraa"
// str2="eraa"
// function isEqual(str1,str2)
//        {
//           str1=str1.toLowerCase()
//           str2=str2.toLowerCase()
//           if(str1==str2)
//               console.log(true)
//           else  
//           console.log(false)
//         }
// isEqual(str1,str2)       
// problem3
// str="ERAA"
// function isUppercase(str)
//          { 
//             if (str==str.toUpperCase())
//                 console.log(true)
//             else
//                 console.log(false)
//          }
// isUppercase(str)         
//-----------------------------LOOP---------------------------//
// problem1
// let num=5
// let num2=15
// function summation(num1,num2)
//    {
//      if(((num1+num2)==15)||num1==15||num2==15)
//         console.log(true)
//      else 
//         console.log(false)
//    }
//    summation(num,num2)   
// problem2
// let num=24
// function isPerFectSquare(num)
//          {
//              if(Number.isInteger(Math.sqrt(num)))   
//                 console.log("perfect square")
//             else
//              console.log("not a perfect square")
//          }
// isPerFectSquare(num)         
