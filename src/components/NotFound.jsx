import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.error(error)
  return(
    <div id="error-page" className="container" data-testid="not-found">
      <h1>Oops!</h1>
      <p>sorry, an unexpected error has ocurred</p>
      <p><i>{error.statusText || error.message}</i></p>
    </div>
  )
}

export default NotFound;