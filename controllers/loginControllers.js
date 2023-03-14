
class LoginControllers {
 
    static homepage = (req, res) => {
        res.render('index')
        // res.send('hi')
      }
      static registrationPage = (req, res)=>{
        res.render('registration')
      }
      static registrationProcess = (req, res)=>{
        res.render('dashboard')
        
      }
      static loginPage = (req, res)=>{
        res.render('login')
      }
      static dashboard = (req, res)=>{
        res.render('dashboard')
      }
}

export default LoginControllers