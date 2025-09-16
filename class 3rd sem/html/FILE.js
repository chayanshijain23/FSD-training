// 1.Syntax
const sayHellow= () =>{
    console.log("Heyy");
};
 const addV2 = (a,b) => a+b;   //one linear
 console.log(addV2(2,3));
sayHellow()


//  argument operator is not present in arrow function we use spread function to do the task of unlimited argument 
const multiplyNumbers=(...nums)=>{
    let res =1;
    for(let i=0; i<nums.length; i++){ 
    res=res+nums[i];
    }
};
multiplyNumbers(1,2,3,4,5,6);