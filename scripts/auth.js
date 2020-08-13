var auth2 = firebase.auth();
// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user
  auth2.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});
// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth2.signOut().then(() => {
    console.log('user signed out');
  })
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth2.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });

});

const forgotPw = document.querySelector('#forgot-form');
forgotPw.addEventListener('submit', (e) => {

    const emailFp = forgotPw['forgot-email'].value;
   
    auth2.sendPasswordResetEmail(emailFxcfrt).then(function() {
      // Email sent.
      }).catch(function(error) {
      // An error happened.
        console.log(toString(error));
      });

  });

  