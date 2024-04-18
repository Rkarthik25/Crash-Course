function customMap(arr,callback){
    let ans=[]

    for(let i=0;i<arr.length;i++){
        ans.push(callback(arr[i],i,arr))
    }
    return ans
}
const num=[1,2,3,4,5]

const multiply=customMap(num,(n)=>n*2)

console.log(multiply)