

let initState = {
    username: '',
    repos: '',
    following: '',
    followers: '',
    grabbedData: false,
    message: '',
    image_url: '',
  };
  
  const reducer = (state = initState, action) => {
    switch(action.type){
      case 'HANDLE_USERNAME':
        return {
          ...state,
          username: action.e.target.value
        };
        case 'SUBMIT_FORM':
          let ch= action.data;
              return {
                ...state,
                repos: ch.public_repos,
                following: ch.following,
                followers: ch.followers,
                image_url: ch.avatar_url,
                message: "",
                grabbedData: true
              };
        default:

          return {
            ...state,
           
          };

        
    }
     
  };

  
  
  export default reducer;