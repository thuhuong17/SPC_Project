//isLoggedIn=>

export const isLoggedIn = () => {
    let data = localStorage.getItem("data");
    if (data != null) return true;
    else return false;
  };
<<<<<<< HEAD

  //doLogin=> data=>set to localstorage

=======
  
  //doLogin=> data=>set to localstorage
  
>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
  export const doLogin = (data,next) => {
    localStorage.setItem("data", JSON.stringify(data));
    next()
  };
<<<<<<< HEAD

  //doLogout=> remove from localStorage

=======
  
  //doLogout=> remove from localStorage
  
>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
  export const doLogout = (next) => {
    localStorage.removeItem("data");
    next()
  };
<<<<<<< HEAD

=======
  
>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
  //get currentUser
  export const getCurrentUserDetail = () => {
    if (isLoggedIn()) {
      return JSON.parse(localStorage.getItem("data")).user;
    } else {
      return undefined;
    }
  };
<<<<<<< HEAD

=======
  
>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
  export const getToken=()=>{
    if(isLoggedIn()){
      return JSON.parse(localStorage.getItem("data")).token
    }else{
      return null;
    }
}