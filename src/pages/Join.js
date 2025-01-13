import './Join.css';
import { PagiTitle, Button } from '../StyledComponent';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Join = () => {
  const navigate = useNavigate();
  const joinRef = useRef();
  const userAgreeRef = useRef([]);
  const selectAllRef = useRef();
  const defaultSelectRef = useRef(null);
  const agreeContent = [
    {
      title: '[필수] 이용약관 동의',

      checkText: ['이용약관에 동의하십니까?'],
    },
    {
      title: '[필수] 개인정보 수집 및 이용 동의',

      checkText: ['개인정보 수집 및 이용에 동의하십니까?'],
    },
    {
      title: '[선택] 쇼핑정보 수신 동의 동의',

      checkText: ['SMS수신을 동의하십니까?', '이메일 수신을 동의하십니까?'],
    },
  ];
  const [warnInputMessage, setWarnInputMessage] = useState({
    email: null,
    id: null,
    pw: null,
    pwCheck: null,
    callNumber: null,
  });

  const [userInput, setUserInput] = useState({
    email: null,
    id: null,
    pw: null,
    pwCheck: null,
    callNumber: {
      select: null,
      num1: null,
      num2: null,
    },
  });
  const [userAgree, setUserAgree] = useState({
    agree1: null,
    agree2: null,
    agree3: null,
  });
  const handleUserInput = (e, key1, key2 = null) => {
    let copy = { ...userInput };
    if (key2 === null) {
      copy[key1] = e.target.value;
    } else {
      copy[key1][key2] = e.target.value;
    }
    setUserInput(copy);
  };
  const handleUserAgree = (e, index) => {
    let copy = { ...userAgree };
    copy[`agree${index}`] = e.target.checked;

    setUserAgree(copy);
  };

  useEffect(() => {
    joinRef.current.parentElement.children[0].style.position = 'relative';
    if (defaultSelectRef.current !== null) {
      let copy = { ...userInput };
      copy.callNumber.select = defaultSelectRef.current.value;
      setUserInput(copy);
    }
  }, []);
  return (
    <div ref={joinRef} className="join">
      <div className="join-inner home-inner">
        <PagiTitle>회원 가입</PagiTitle>
        <div className="join-container">
          <form action="">
            <table className="join-table">
              <tbody>
                <tr className="user-email">
                  <td>이메일</td>
                  <td>
                    <input
                      type="email"
                      onChange={(e) => {
                        handleUserInput(e, 'email');
                      }}
                    />
                    {warnInputMessage.email !== null ? (
                      <span className="warn">{warnInputMessage.email}</span>
                    ) : null}
                  </td>
                </tr>
                <tr className="user-id">
                  <td>아이디</td>
                  <td>
                    <input
                      type="text"
                      onChange={(e) => {
                        handleUserInput(e, 'id');
                      }}
                    />
                    {warnInputMessage.id !== null ? (
                      <span className="warn">{warnInputMessage.id}</span>
                    ) : null}
                    <span className="id-caution">(영문소문자/숫자,4~16자)</span>
                  </td>
                </tr>
                <tr className="user-pw">
                  <td>비밀번호</td>
                  <td>
                    <input
                      type="password"
                      onChange={(e) => {
                        handleUserInput(e, 'pw');
                      }}
                    />
                    {warnInputMessage.pw !== null ? (
                      <span className="warn">{warnInputMessage.pw}</span>
                    ) : null}
                    <span className="pw-caution">(영문소문자/숫자,4~16자)</span>
                  </td>
                </tr>

                <tr className="upse-pw-check">
                  <td>비밀번호 확인</td>
                  <td>
                    <input
                      type="password"
                      onChange={(e) => {
                        handleUserInput(e, 'pwCheck');
                      }}
                    />
                    {warnInputMessage.pwCheck !== null ? (
                      <span className="warn">{warnInputMessage.pwCheck}</span>
                    ) : null}
                  </td>
                </tr>
                <tr className="call-number">
                  <td>휴대전화</td>
                  <td>
                    <select
                      name=""
                      id=""
                      ref={(el) => {
                        defaultSelectRef.current = el;
                      }}
                      onChange={(e) => {
                        handleUserInput(e, 'callNumber', 'select');
                      }}
                      defaultValue={'010'}
                    >
                      <option value="010">010</option>
                      <option value="010">011</option>
                      <option value="010">016</option>
                      <option value="010">019</option>
                    </select>
                    <span className="bar">-</span>
                    <input
                      type="text"
                      onChange={(e) => {
                        handleUserInput(e, 'callNumber', 'num1');
                      }}
                    />
                    <span className="bar">-</span>
                    <input
                      type="text"
                      onChange={(e) => {
                        handleUserInput(e, 'callNumber', 'num2');
                      }}
                    />
                    {warnInputMessage.callNumber !== null ? (
                      <span className="warn">
                        {warnInputMessage.callNumber}
                      </span>
                    ) : null}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="agree-box">
              <h3 className="agree-box-title">전체 동의</h3>
              <div className="agree-container">
                <div className="agree-all">
                  <input
                    type="checkbox"
                    id="agree-all"
                    ref={selectAllRef}
                    onChange={(e) => {
                      let copy = { ...userAgree };
                      if (e.target.checked) {
                        userAgreeRef.current.forEach((a) => {
                          a.checked = true;
                        });
                        for (let key in userAgree) {
                          userAgree[key] = true;
                        }
                      } else {
                        userAgreeRef.current.forEach((a) => {
                          a.checked = false;
                        });
                        for (let key in userAgree) {
                          userAgree[key] = null;
                        }
                      }
                    }}
                  />
                  <label htmlFor="agree-all">
                    이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두
                    동의합니다.
                  </label>
                </div>
                <ul>
                  {agreeContent.map((obj, index) => {
                    return (
                      <li key={index}>
                        <h4>{obj.title}</h4>
                        <div className="terms-box">
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Molestiae nisi omnis quibusdam recusandae,
                            perferendis vel. Reprehenderit quae soluta, aut non
                            consequuntur praesentium porro modi delectus
                            corporis minus? Dignissimos, dolorem maxime illum
                            nobis laborum blanditiis aliquid dolore cum pariatur
                            ea doloremque, delectus quam quisquam corporis nemo
                            distinctio sunt nisi, ducimus quas molestiae est?
                            Enim facere voluptatum inventore ipsum expedita quod
                            laudantium accusamus rerum, numquam velit itaque
                            totam excepturi provident, nam, aspernatur voluptate
                            dicta ad qui officiis est nobis a tempore autem
                            illo? Aspernatur sunt at velit molestiae ex beatae
                            harum est fugit eveniet cupiditate ut, voluptatum
                            sed architecto eum nesciunt illo et placeat itaque
                            quod corporis. Quo nam excepturi numquam eius
                            voluptatem ad minus possimus eum, neque eligendi,
                            molestiae assumenda laudantium eos expedita!
                            Perferendis unde sit odit ducimus, minima totam
                            tempore voluptatem, rem placeat assumenda
                            repellendus maxime numquam omnis dolorem ab possimus
                            animi, quam natus repellat. Sequi est suscipit
                            cupiditate, quae, consequuntur temporibus eius vel
                            aut veniam pariatur voluptatum id animi porro
                            veritatis quaerat minima, commodi fugiat velit
                            eveniet atque explicabo unde iure? Dignissimos modi
                            qui voluptas omnis sunt vitae earum exercitationem
                            maxime tenetur magnam possimus repellat officia in
                            fuga ex, voluptatibus mollitia nam quos ad saepe
                            odit quam minus amet.
                          </span>
                        </div>

                        <div className="do-you-agree-box">
                          <span className="">{obj.checkText}</span>
                          <input
                            ref={(el) => {
                              userAgreeRef.current[index] = el;
                            }}
                            onChange={(e) => {
                              handleUserAgree(e, index + 1);
                            }}
                            type="checkbox"
                            id={`agree${index}`}
                          />
                          <label htmlFor={`agree${index}`}>동의함</label>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="join-button-wrap">
              <Button
                padding={'12px 25px'}
                fontSize={'0.8125rem'}
                bg={'#000'}
                weight={'500'}
                color={'#fff'}
                className="join-button"
                onClick={(e) => {
                  e.preventDefault();
                  let userInputFullFill = true;
                  let userAgreeFullFill = true;

                  const copyWarnInputMessage = { ...warnInputMessage };

                  //email
                  if (userInput.email === '' || userInput.email == null) {
                    copyWarnInputMessage.email = '빈 칸을 채워주세요.';
                    userInputFullFill = false;
                  } else if (
                    !/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                      userInput.email
                    )
                  ) {
                    copyWarnInputMessage.email =
                      '이메일 형식이 올바르지 않습니다.';
                    userInputFullFill = false;
                  } else {
                    copyWarnInputMessage.email = null;
                  }

                  //Id
                  if (userInput.id === '' || userInput.id === null) {
                    copyWarnInputMessage.id = '빈 칸을 채워주세요.';
                    userInputFullFill = false;
                  } else if (!/^[a-z0-9]{4,16}$/.test(userInput.id)) {
                    copyWarnInputMessage.id =
                      '아이디 형식이 올바르지 않습니다.';
                    userInputFullFill = false;
                  } else {
                    copyWarnInputMessage.id = null;
                  }

                  //pw
                  if (userInput.pw === '' || userInput.pw === null) {
                    copyWarnInputMessage.pw = '빈 칸을 채워주세요.';
                    userInputFullFill = false;
                  } else if (!/^[a-z0-9]{4,16}$/.test(userInput.pw)) {
                    copyWarnInputMessage.pw =
                      '비밀번호 형식이 올바르지 않습니다.';
                    userInputFullFill = false;
                  } else {
                    copyWarnInputMessage.pw = null;
                  }

                  //pwCheck

                  if (
                    /^[a-z0-9]{4,16}$/.test(userInput.pw) &&
                    userInput.pw !== userInput.pwCheck
                  ) {
                    copyWarnInputMessage.pwCheck = '비밀번호가 맞지 않습니다.';
                    userInputFullFill = false;
                  } else {
                    copyWarnInputMessage.pwCheck = null;
                  }

                  //callNumber
                  if (
                    userInput.callNumber.num1 === null ||
                    userInput.callNumber.num1 === '' ||
                    userInput.callNumber.num2 === null ||
                    userInput.callNumber.num2 === ''
                  ) {
                    copyWarnInputMessage.callNumber = '빈 칸이 있습니다.';
                    userInputFullFill = false;
                  } else if (
                    !/^[0-9]{4}$/.test(userInput.callNumber.num1) ||
                    !/^[0-9]{4}$/.test(userInput.callNumber.num2)
                  ) {
                    copyWarnInputMessage.callNumber =
                      '숫자4자리만 입력할 수 있습니다.';
                    userInputFullFill = false;
                  } else {
                    copyWarnInputMessage.callNumber = null;
                  }

                  setWarnInputMessage(copyWarnInputMessage);

                  for (let key in userAgree) {
                    if (key !== 'agree3') {
                      if (userAgree[key] === null || userAgree[key] === false) {
                        userAgreeFullFill = false;
                      }
                    }
                  }

                  if (
                    userInputFullFill === true &&
                    userAgreeFullFill === true
                  ) {
                    let get = JSON.parse(localStorage.getItem('userInfo'));
                    if (get !== null) {
                      if (get.length !== 0) {
                        let some = get.some((a) => {
                          return a.id === userInput.id;
                        });
                        if (!some) {
                          get.push(userInput);
                          localStorage.setItem('userInfo', JSON.stringify(get));
                          alert('회원가입이 완료되었습니다.');
                          navigate('/login');
                        } else {
                          alert('중복된 계정이 있습니다.');
                        }
                      } else {
                        alert('회원가입이 완료되었습니다.');
                        get.push(userInput);
                        localStorage.setItem('userInfo', JSON.stringify(get));
                        navigate('/login');
                      }
                    }
                  } else {
                    alert('완료하지 못한 항목이 있습니다.');
                  }
                  selectAllRef.current.checked = false;
                  userAgreeRef.current.forEach((a) => {
                    a.checked = false;
                  });
                  for (let key in userAgree) {
                    userAgree[key] = null;
                  }
                }}
              >
                회원가입
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Join;
