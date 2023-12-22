import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Icons from "../../components/icons";
import { useAuth } from "../../hooks/useAuth";
import { errorByKey } from "../../helper";

const EmailLoginForm = ({ setshowScreen, className = '', setMainScreen, setErrorMessage }: { setshowScreen: any, className?: string, setMainScreen: any, setErrorMessage: any }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const [isAgree, setisAgree] = useState(true);
  const [siginInForm, setSignInForm] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState([]);

  const { login } = useAuth()

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setSignInForm({
      ...siginInForm,
      [name]: value,
    });
  };

  return (
    <div className={`${isTabletOrMobile ? "kjjfds-janwkea" : "kjjfds-janwkea1 kjjfds-janwkea2"} white-form ${className}`}>
      <div className={`jhjij-sanwe ${isTabletOrMobile ? "klhdlfj-ajee2" : ""} email-login-form`}>
        <h3 className={`${isTabletOrMobile ? "" : "hkjsda-jesa"}`}>Enter Login Details</h3>
        <h4>Enter your email and password for this account.</h4>

        <div className={`${isTabletOrMobile ? "w-100" : "kdjsa-ajwnkelds"}`}>
          <div className={`${isTabletOrMobile ? "hjk-ajwednw" : ""} emailRowDiv sadhasdn-we`}>
            <div className={`jksd-kosaeknae ${errorByKey(errors, 'email') || errorByKey(errors, 'password') ? 'error-border' : ''}`}>
              <Icons iconNumber={90} />
              <input placeholder="Email" name='email' onChange={handleChange} />
            </div>
            <div className={`jksd-kosaeknae ${errorByKey(errors, 'email') || errorByKey(errors, 'password') ? 'error-border' : ''}`}>
              <Icons iconNumber={9} />
              <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            </div>
            {errorByKey(errors, 'email') || errorByKey(errors, 'password') ? (
              <p className="error-message">Invalid email or password</p>
            ) : ''}
          </div>
          <div className="jdaskfjnas-ajaied">
            <div onClick={() => {
              setisAgree(!isAgree)
            }} className="sandka-jwe">
              <button onClick={() => {
                setshowScreen(1)
              }} className={`${isTabletOrMobile ? "jjlkajsd-awje" : ""}`}>Create Account</button>
            </div>
            <div className={`${isTabletOrMobile ? "jdsfknla-wnejnw" : ""}`}>
              <button onClick={() => {
                setshowScreen(5)
              }} className="no-shadow">Forgot Password?</button>
            </div>
          </div>
          <div className={`${isTabletOrMobile ? "jjlkajsd-awje-msakm3e" : ""} continueBtnDiv snasdj-sawdne`}>
            <button onClick={() => {
              login(siginInForm).then((res) => {
                localStorage.setItem('loggedin', 'true');
                setMainScreen(1)
              }).catch((err) => {
                if(err?.response?.data?.message?.length) {
                  if(Array.isArray(err.response.data.message)) {
                    setErrors(err.response.data.message);
                  } else {
                    setErrorMessage(err.response.data.message);
                  }
                }
              })
              // setshowScreen(5)
            }} className={`btn`}>
              CONTINUE
              <div className="kdksa-ajwmd">
                <Icons iconNumber={7} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="ldkjfal0-fdsnfe">
        <Icons iconNumber={isTabletOrMobile ? 64 : 62} />
      </div>
    </div>
  );
};

export default EmailLoginForm;