export function isAuthorized(req, res, next) {
    if (req.user) {
      console.log("User is logged in");
      next();
    } else {
      res.redirect("/");
    }
  }
  
export  function isNotAuthorized(req, res, next) {
    if (!req.user) {
        console.log("User isn´t logged in");
        next();    
    } else {
      res.send('<script>window.opener.postMessage("auth_success", "http://localhost:5173");window.close();</script>');
     
    }
  }