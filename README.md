# MOANI 가구 쇼핑몰 페이지 (카페24 디자인,폰트,이미지,상품 등 참고)
<br>
구성 : 메인페이지, 로그인 페이지, 회원가입 페이지, 검색 페이지, SHOP 페이지, LOOKBOOK 페이지, 상품상세 페이지, 리뷰 페이지, 리뷰 상세 페이지

<br>


##   페이지 기능 



>###  메인 페이지

<br>

| main-visual                                                                                                   |
| :---------------------------------------------------------------------------------------------------------------------- |
![image](https://github.com/kkh12345/kkh5/blob/main/mainVisual.png)

####   [ 주요 기능 ]
 * 팝업. 텍스트 자동 전환 기능
 * 자동 슬라이드 (swiper) 구현, 재생,정지 버튼 추가

<br><br>

| 헤더                                                                                                    |
| :---------------------------------------------------------------------------------------------------------------------- |
![image](https://github.com/kkh12345/kkh5/blob/main/header1.png)

![image](https://github.com/kkh12345/kkh5/blob/main/header2.png)
![image](https://github.com/kkh12345/kkh5/blob/main/header3.png)


####   [ 주요 기능 ]
 * 스크롤 시 헤더 고정됨
 * 검색아이콘 클릭 시 검색 모달(pc), 검색 모달에서 해시태그 클릭 시 태그가 검색어로 입력되고 검색 페이지로 이동됨
 * 네비게이션 메뉴 호버 시 서브메뉴 드롭다운(pc)
 * 햄버거메뉴 클릭 시 사이드 네비게이션 등장(모바일,태블릿)

   <br><br>

| Funiture, Best Item, Home Styling Item, Interior, New In                                                                                                  |
| :---------------------------------------------------------------------------------------------------------------------- |
![image](https://github.com/kkh12345/kkh5/blob/main/funiture.png)

![image](https://github.com/kkh12345/kkh5/blob/main/homestyle.png)
![image](https://github.com/kkh12345/kkh5/blob/main/bestItem.png)
![image](https://github.com/kkh12345/kkh5/blob/main/interior.png)
![image](https://github.com/kkh12345/kkh5/blob/main/newIn.png)

####   [ 주요 기능 ]
 * 상품 카드,카드 정렬 방식이 각 섹션마다 조금씩 다름
 * swiper커스텀 자동 슬라이드(Best Item)
 * 탭 기능 (Home Styling Item)
 * 상품 카드 클릭 시 상품 상세 페이지로 이동

   <br><br>

| Review                                                                                                    |
| :---------------------------------------------------------------------------------------------------------------------- |
![image](https://github.com/kkh12345/kkh5/blob/main/review.png)



####   [ 주요 기능 ]
* swiper커스텀(Best Item)
* 상품등록 없이 쓴 리뷰는 썸네일을 로고로 지정
* 리뷰 카드 이미지를 클릭하면 리뷰 상세 페이지로 이동

  
   <br><br>

| 메인 페이지 태블릿                                                                                                   |
| :---------------------------------------------------------------------------------------------------------------------- |
![image](https://github.com/kkh12345/kkh5/blob/main/tablet.gif)


 <br><br>
 
 >###  검색 페이지


| Search                                                                                                |
| :---------------------------------------------------------------------------------------------------------------------- |
![image](https://github.com/kkh12345/kkh5/blob/main/search.png)



####   [ 주요 기능 ]
* 인기검색어를 클릭하거나 검색어를 입력하면 검색 결과 표시
* 검색 결과 정렬 옵션 선택 가능 (신상품,상품명,높은가격,낮은가격), 검색 결과 개수 표시
* 상품 카드를 클릭하면 상품 상세 페이지로 이동
  
   
 <br><br>
 
 >###  룩북 페이지


| LookBook                                                                                                |
| :---------------------------------------------------------------------------------------------------------------------- |
![image](https://github.com/kkh12345/kkh5/blob/main/lookbook1.png)
![image](https://github.com/kkh12345/kkh5/blob/main/lookbook2.png)



####   [ 주요 기능 ]
* 상품 카드를 클릭하면 모달창이 뜸
* 모달창에서 이전,다음 버튼 누르면 이전 사진, 다음 사진을 보여줌

 <br><br>
 
 >###  회원가입 페이지


| Join                                                                                               |
| :---------------------------------------------------------------------------------------------------------------------- |
![image](https://github.com/kkh12345/kkh5/blob/main/join.png)
![image](https://github.com/kkh12345/kkh5/blob/main/join2.png)




####   [ 주요 기능 ]
* 정규식을 활용하여 형식을 정확히 지키도록 함
* 틀리거나 비어있는 항목이 있을 시 '완료하지 못한 항목이 있습니다.' 알림이 뜬 후 완료하지 못한 항목에 틀린 부분 지적하는 문구 표시
* 필수항목을 모두 정확히 입력하고 필수약관 동의 후 회원가입 버튼을 누르면 '회원가입이 완료되었습니다.' 알림이 뜨고 사용자의 정보를 로컬 스토리지에 저장한 후 로그인 페이지로 이동함

<br><br>

 >###  로그인 페이지


| Login                                                                                               |
| :---------------------------------------------------------------------------------------------------------------------- |
![image](https://github.com/kkh12345/kkh5/blob/main/login1.png)
![image](https://github.com/kkh12345/kkh5/blob/main/login2.png)
![image](https://github.com/kkh12345/kkh5/blob/main/login3.png)




####   [ 주요 기능 ]
* 유저의 입력값이 저장되어 있는 유저 정보과 일치하는 경우, 로그인 성공
* 로그인 실패 시 알림창

<br><br>
 
 >###  SHOP페이지


| SHOP                                                                                               |
| :---------------------------------------------------------------------------------------------------------------------- |
![image](https://github.com/kkh12345/kkh5/blob/main/shop.png)





####   [ 주요 기능 ]
* 헤더 네비게이션의 SHOP메뉴 클릭 후 이동 가능
* 상품 정렬 옵션 선택 가능
* 상품 카드를 클릭하면 상품 상세 페이지로 이동
* 등록 상품 개수 표시


 업데이트중.....



<br><br>
  ##  개발 환경

- 개발 환경 : <img src="https://img.shields.io/badge/windows11-0078D6?style=flat-square&logo=windows10&logoColor=white"/>
- 사용 프로그램 : <img src="https://img.shields.io/badge/Vs code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"/>  <img src="https://img.shields.io/badge/figma-F24E1E?style=flat-square&logo=figma&logoColor=white"/>
- 사용된 기술 :
  <img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=white">  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=Swiper&logoColor=white">

  <br><br>

  

    
   



