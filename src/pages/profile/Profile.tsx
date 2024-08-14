import { Header } from "../../components/Header";
import LoginButton from "../../components/LoginButton";
import LogoutButton from "../../components/LogoutButton";

import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../../components/Footer";

function Profile(){
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <Header 
          title={"Profile"}
      />

<h1>Your store cupboard</h1>
      <div className="mt-10 grid grid-cols-3 gap-4">

        <p>item1 count 1</p>
        <p>item2 count 1</p>
        <p>item3 count 1</p>
        <p>item2 count 1</p>
        <p>item3 count 1</p>
        <p> + </p>
      </div>
      
      {isAuthenticated && 
        <div className="mt-10">
          <p>username: {user!.name}</p>
          <p>email: {user!.email}</p>
          <p>user_id: {user!.sub}</p>
        </div>}
      
      <Footer />
    </>
  )
}

export default Profile