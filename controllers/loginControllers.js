
class LoginControllers {
 
    static homepage = (req, res) => {
        res.render('index')
        // res.send('hi')
      }
      static registrationPage = (req, res)=>{
        res.render('registration')
      }
      static loginPage = (req, res)=>{
        res.render('login')
      }
}

export default LoginControllers