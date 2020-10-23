//import React, { Component } from 'react';

import './App.css';
import React, { Fragment } from "react";
import Api from "./components/api";

const App = () => {
  return (
    <Fragment>
      <Api />
    </Fragment>
  );
};

export default App;

// //import axios from 'axios';
// class App extends  Component {

//    onHandleChange =(e)=>{
//      let {dispatch} = this.props;
//     dispatch({ type: 'UPDATE_USERNAME', username:e.target.value })
//   }
//   onSearch =()=>{
//     let {dispatch} = this.props;
//     let{username}=this.props;

//     fetch(`https://api.github.com/users/${username}`)
//     .then(resresult=> {
//         return resresult.json()
//         //console.log(res);
//     })
//      .then(res=>{
//        dispatch({type: 'UPDATE_USERPROFILE', userprofile: res})
//      })
//   }
//   // onRepoFetch =()=>{
//   //   let {dispatch} = this.props;
//   //   let {repo_url} = this.props.userprofile;
//   //   fetch(repo_url)
//   //   .then(res=>{ 
//   //     return res.json()
//   //   })
//   //   .then(res=>{
//   //        dispatch({type: 'UPDATE_REPOS', repos: res})
//   //   })
//   // }
//   render(){
//     let {userprofile} = this.props;
    
//   return (
//     <div>
//        <h1>{this.props.username}</h1> 
//       <input type="text"
//       onChange={this.onHandleChange}
//        value={this.props.user}/> 

//       <button onClick={this.onSearch}>Search</button><br/><br/>
//       <h3>{userprofile.login}</h3>
//        </div>);
//     {/* //   
//     //   
//     //   <button onClick={this.onRepoFetch}>Fetch Repos</button>
//     </div> */}
//   // );
// }
// }

// const mapStateToProps =(state)=>{
//   return{
       
//       username: state.username,
//       userprofile: state.userprofile,
//       repos: state.repos,
//   }
// }
// export default connect(mapStateToProps)(App);
