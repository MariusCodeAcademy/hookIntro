import React, { useContext } from "react";
import UserContext from "./UserContext";

export default function MovieRow() {
  const userContext = useContext(UserContext);
  console.log(userContext.user.age);
  return <div>{userContext.user.name} sits in 58 Movie Row</div>;
}
