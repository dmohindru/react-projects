import { useRef, useState, useEffect, FormEvent } from "react";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
import baseAxios, { AxiosError } from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import useInput from "../hooks/useInput";
import useToggle from "../hooks/useToggle";

const LOGIN_URL = "/auth";
const Login: React.FC = () => {
  // use global context to store authentication details
  const context = useAuth();
  const setAuth = context?.setAuth;
  const persist = context?.persist;
  const setPersist = context?.setPersist;

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLParagraphElement | null>(null);

  const [user, resetUser, userAtrribs] = useInput("user", "");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [check, toggleCheck] = useToggle("persist", false);

  // set focus to user input element when page loads
  useEffect(() => {
    userRef.current?.focus();
  }, []);

  // on successfull authentication reset errMsg
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (event: FormEvent) => {
    // this is required to prevent page reload
    event.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken as string;
      const roles = response?.data?.roles as number[];

      // TODO fix this error
      if (accessToken && roles && setAuth) {
        setAuth({ user, pwd, roles, accessToken });
      }

      //setUser("");
      resetUser();
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (baseAxios.isAxiosError(err)) {
        const axiosError = err as AxiosError;
        if (!axiosError?.response) {
          setErrMsg("No Server Response");
        } else if (axiosError.response?.status === 400) {
          setErrMsg("Missing Username or Password");
        } else if (axiosError.response?.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login failed");
        }
        errRef.current?.focus();
      } else {
        setErrMsg(`Error: ${err}`);
      }
      // Set focus to errRef so that screen reader can read it out
      errRef.current?.focus();
    }
  };

  const togglePersist = () => {
    setPersist && setPersist((prev) => !prev);
  };

  useEffect(() => {
    const persistValue = persist || false;
    localStorage.setItem("persist", persistValue.toString());
  }, [persist]);

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        {/* Username input */}
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          // onChange={(e) => setUser(e.target.value)}
          // value={user}
          {...userAtrribs}
          required
        />

        {/* Password input */}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
        />

        {/* Submit button */}
        <button>Sign In</button>
        <div className="persistCheck">
          <input
            type="checkbox"
            id="persist"
            onChange={togglePersist}
            checked={persist}
          />
          <label htmlFor="persist">Trust this device</label>
        </div>
      </form>
      <p>
        Need an Account?
        <br />
        <span className="line">
          {/* Put router link here */}
          <a href="#">Sign Up</a>
        </span>
      </p>
    </section>
  );
};

export default Login;
