import loginCredential from "../dbs/loginSchemaNModel.js";

class LoginControllers {
  static homepage = (req, res) => {
    res.render("index");
  };

  //rendering registration page
  static registrationPage = (req, res) => {
    res.render("registration");
  };

  // actually registering users
  static registrationProcess = async (req, res) => {
    try {
      const doc = new loginCredential({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      // saving form fetched data
      const result = await doc.save();
      //redirection to login page
      res.redirect("/login");
    } catch (error) {
      console.log(error);
    }
  };

  //getting login page
  static loginPage = (req, res) => {
    res.render("login");
  };

  //login user using validation
  static loggingIn = async (req, res) => {
    try {
      const uCredential = {
        email: req.body.email,
        password: req.body.password,
      };
      const uDbCredetial = await loginCredential.findOne({
        email: req.body.email,
      });

     if (uCredential.email == uDbCredetial.email && uCredential.password == uDbCredetial.password) {
      res.render('dashboard', {uDbCredetial})
     } else {
      res.send('login failed')
     }
     

      
      

      // if (uCredential.email == uDbCredetial.email) {
      //   console.log(" mail verified");
      //   if (uCredential.password == uDbCredetial.password) {
      //     console.log(" password verified");
      //   }
      //   res.send("login successful");
      // } else {
      //   res.send("login failed");
      // }
    } catch (error) {
      console.log(error);
    }
  };

  // static dashboard = (req, res) => {
  //   res.render("dashboard");
  // };
}

export default LoginControllers;
