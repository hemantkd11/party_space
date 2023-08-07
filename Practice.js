const User = {
    obj: "hello",
    obj1: "hello",
    obj2: "hello"
  };
  
  function Users(){
   
   console.log( Object.keys(User).map(item=>item))
  }
  Users()