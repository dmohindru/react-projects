import { useRef, useState, useEffect, FormEvent, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import baseAxios, { AxiosError } from "axios";

const LOGIN_URL = "/auth";
const Login: React.FC = () => {
  // use global context to store authentication details
  const context = useContext(AuthContext);

  const setAuth = context?.setAuth;

  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLParagraphElement | null>(null);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

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
      const roles = response?.data?.roles as string[];

      // TODO fix this error
      if (accessToken && roles && setAuth) {
        setAuth({ user, pwd, roles, accessToken });
      }

      setUser("");
      setPwd("");
      setSuccess(true);
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

  return (
    <>
      {" "}
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
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
              onChange={(e) => setUser(e.target.value)}
              value={user}
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
      )}
    </>
  );
};

export default Login;
