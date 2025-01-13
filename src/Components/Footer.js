import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <div className="footer-inner home-inner">
        <section className="footer01">
          <div className="footer-logo-wrap">
            <img src="/img/home/flogo.png" alt="로고" />
          </div>
          <div className="text01">
            <span>COMPANY : 굿디몰디자인</span>
            <span>CEO : 굿디몰디자인</span>
            <span>PHONE : 031-628-6380</span> <span>FAX : 031-628-6381</span>
            <br />
            <span>
              BUSINESS LICENCE : 202-67-00083
              <a href="#none">[사업자정보확인]</a> E-COMMERCE
            </span>
            <span>PERMINT 2016-성남분당-0137</span>
            <br />
            <span className="address">
              ADDRESS : 13494 경기도 성남시 분당구 대왕판교로 670 (삼평동)
              유스페이스2
            </span>
            <br />
            <span>
              PERSONL INFORMATION MANAGER :
              <a href="#none">
                <u>굿디몰디자인(help@goodymall.co.kr)</u>
              </a>
            </span>
            <br />
            <span>Copyright © 2023 MOANY ALL RIGHTS REVERVED</span>
            <span>Hosting by 카페24</span>
            <span className="copyright">
              <img
                src="/img/home/goodymall_logo.gif"
                alt="저작권:굿디몰디자인"
              />
            </span>
          </div>
          <div className="text02">
            <span>
              구매안전서비스 : 고객님은 안전거래를 위해 현금 등으로 결제시 저희
              쇼핑몰이 가입한 PG에스크로 구매안전서비스를 이용하실 수 있습니다.
            </span>
            <a href="#none">[가입사실확인]</a>
            <br />
            <span className="footer-icon-wrap">
              <img src="/img/home/footer_icon01.png" alt="눈아이콘" />
              <img src="/img/home/footer_icon02.png" alt="SSL" />
              <img src="/img/home/footer_icon03.png" alt="카페24" />
              <img src="/img/home/footer_icon04.png" alt="KCP" />
            </span>
          </div>
        </section>
        <section className="footer02">
          <ul>
            <li className="call">
              <span>고객문의 대표전화</span> <span>031-628-6380</span>
              <span>평일 09:00 - 18:00</span>
              <span>주말 및 공휴일 휴무입니다.</span>
            </li>
            <li className="account">
              <span>입금계좌안내</span> <span>우리 1002-355-664254</span>{' '}
              <span>예금주 : 굿디몰디자인</span>
            </li>
          </ul>
        </section>
        <section className="footer03">
          <ul>
            <li>
              <a href="#none">회사소개</a>
            </li>
            <li>
              <a href="#none">이용약관</a>
            </li>
            <li>
              <a href="#none">개인정보처리방침</a>
            </li>
            <li>
              <a href="#none">이용안내</a>
            </li>
          </ul>

          <div className="sns-icon-wrap">
            <a href="#none">
              <i className="xi-facebook"></i>
            </a>
            <a href="#none">
              <i className="xi-instagram"></i>
            </a>
            <a href="#none">
              <i className="xi-twitter"></i>
            </a>
            <a href="#none">
              <i className="xi-kakaotalk"></i>
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
