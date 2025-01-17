function vowelcount(txt)
{
     let count = 0;
    for(let i=0;i<txt.length;i++)
    {  
        t = txt.toLowerCase();
        if(t[i]=='a' || t[i]=='e' || t[i]=='i' || t[i]=='o' || t[i]=='u')
            count++;
    }
    console.log(count)
    
}
// vowelcount("apnaA")

let arr = [45,60,90,91,65]
let newArr = arr.filter((val)=>{return val >=90})
console.log(newArr)




