var mydata = {
    name:"himanshu",
}
const myreducer = (storedata = mydata,action)=>{
  if(action.type === "name"){
    return{
        name:action.username,
    };
  }
  return storedata;
};
   
export default myreducer;