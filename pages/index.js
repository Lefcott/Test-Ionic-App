import Login from "../components/Login";

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">WeBuildWebz!</h1>
      <Login />
      <style jsx>
        {`
          .home {
            width: 100%;
            height: 100%;
            background-image: url(/images/login_background.jpg);
          }
          .title {
            color: aliceblue;
            text-align: center;
            font-size: 32px;
            transition: 0.7s;
            animation: titleAppear linear 0.7s;
          }
          @keyframes titleAppear {
            0% {
              font-size: 0;
            }
            90% {
              font-size: 40px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
