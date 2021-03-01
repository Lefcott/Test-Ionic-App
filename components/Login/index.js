const Login = () => (
  <div className="login">
    <img className="person" src="/images/person.png" alt="person" />
    <div className="title">Login</div>
    <style jsx>
      {`
        .login {
          position: relative;
          width: 80%;
          height: 250px;
          margin: 50px 0 0 10%;
          background-color: white;
          border-radius: 10px;
        }
        .person {
          position: absolute;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 0;
          width: 50px;
        }
        .title {
          margin-left: 10%;
          font-size: 20px;
        }
      `}
    </style>
  </div>
);

export default Login;
