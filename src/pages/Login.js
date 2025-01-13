import { useEffect, useRef, useState } from "react";
import { PagiTitle, Button } from "../StyledComponent";
import { useNavigate } from "react-router";
import "./Login.css";

const Login = ({ setLogin }) => {
  const [userInput, setUserInput] = useState({
    id: "",
    pw: "",
  });
  const navigate = useNavigate();
  let loginRef = useRef();
  useEffect(() => {
    loginRef.current.parentElement.children[0].style.position = "relative";
  }, []);
  return (
    <section ref={loginRef} className="login">
      <div className="login-inner home-inner">
        <PagiTitle>로그인</PagiTitle>

        <div className="login-container">
          <h3 className="login-container-title">회원로그인</h3>
          <form action="">
            <div className="id-box">
              <input
                type="text"
                placeholder="아이디"
                onChange={(e) => {
                  let copy = { ...userInput };
                  copy.id = e.target.value;
                  setUserInput(copy);
                }}
              />
            </div>
            <div className="pw-box">
              <input
                type="password"
                placeholder="비밀번호"
                onChange={(e) => {
                  let copy = { ...userInput };
                  copy.pw = e.target.value;
                  setUserInput(copy);
                }}
              />
            </div>
            <div className="login-function-box">
              <span className="security">
                <img src="/img/home/security.gif" alt="자물쇠" />
                보안접속
              </span>
              <a className="find-id" href="#none">
                아이디찾기
              </a>
              <a className="find-pw" href="#none">
                비밀번호찾기
              </a>
            </div>
            <Button
              className="login-button"
              padding={"12px 0"}
              margin={"28px 0 25px"}
              weight={"bold"}
              width={"100%"}
              bg={"#000"}
              border={"1px solid transparent"}
              onClick={() => {
                if (userInput.id === "") {
                  alert("아이디를 입력하지 않으셨습니다.");
                } else if (userInput.pw === "") {
                  alert("비밀번호를 입력하지 않으셨습니다.");
                } else {
                  let get = JSON.parse(localStorage.getItem("userInfo"));
                  if (get !== null) {
                    let find = get.find((a) => {
                      if (a.id === userInput.id && a.pw === userInput.pw) {
                        return a;
                      }
                    });
                    if (find !== undefined) {
                      alert(`로그인 성공, ${find.id}님 환영합니다`);
                      localStorage.setItem("login", true);
                      setLogin(true);
                      navigate("/");
                    } else {
                      alert("로그인 실패, 일치하는 계정이 없습니다.");
                    }
                  } else {
                    alert("로그인 실패, 일치하는 계정이 없습니다.");
                  }
                }
              }}
            >
              <a href="#none">로그인</a>
            </Button>
          </form>
          <div className="quick-join-wrap">
            <div className="go-to-join">
              <div className="go-to-join-text">
                <h5>아직 회원이 아니신가요?</h5>
                <p>회원이 되시면 다양한 혜택을 누리실 수 있습니다.</p>
              </div>
              <Button
                fontSize={"0.875rem"}
                border={"1px solid #000"}
                weight={600}
                padding={"12px 24px"}
                className="go-to-join-button"
                onClick={() => {
                  navigate("/join");
                }}
              >
                회원가입
              </Button>
            </div>
            <div className="quick-login">
              <h5>SNS 간편로그인</h5>
              <p>간편하게 로그인 해보세요.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
