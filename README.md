![header](https://capsule-render.vercel.app/api?type=egg&color=auto&height=200&section=header&text=WATCHVIE%20&fontSize=60)



# About the Project ๐ฌ - WATCHVIE
Watch Movie์ ์ค์๋ง๋ก ์ํ API๋ฅผ ์ด์ฉํ ์ํ ์ ๋ณด๋ฅผ ์ ๊ณตํ๋ ์น ์๋น์ค์๋๋ค.

์ํ ์ ๋ชฉ, ์ฅ๋ฅด, ๊ฐ๋ด์ผ, ์ธ๊ธฐ๋ ๋ฑ์ ์ ๋ณด๋ฅผ ์ ๊ณตํฉ๋๋ค.

#### contents
- [Team Member](#1-team-member)<br/>
- [Getting Start](#2-installation)<br/>
- [Project Architecture](#3-project-architecture)<br/>
- [Usage](#4-usage)<br/>
- [Roadmap](#5-roadmap)<br/>
- [Contributing](#6-contributing)<br/>
- [Environment](#7-environment)<br/>
- [Convention](#8-convention)<br/>
- [License](#9-license)<br/>


## 1. Team Member  

<table>
  <tr>
    <th align="center"><a href="https://github.com/L2HYUNN"><img src="https://avatars.githubusercontent.com/u/79739512?v=4" width="150x;" alt=""/><br /></a></th>
    <th align="center"><a href="https://github.com/yoonsaeng"><img src="https://avatars.githubusercontent.com/u/30286303?s=64&v=4" width="150px;" alt=""/><br /></a></th>
    <th align="center"><a href="https://github.com/yerinjo"><img src="https://avatars.githubusercontent.com/u/114723339?s=64&v=4" width="150px;" alt=""/><br /></a></th>
  </tr>
  <tr>  
    <th><a href="https://github.com/L2HYUNN"><b>์ด๋ํ</b></a></th>
    <th><a href="https://github.com/yoonsaeng"><b>๊ณ ์ค์ฑ</b></a></th>
    <th><a href="https://github.com/yerinjo"><b>์กฐ์๋ฆฐ</b></a></th>
  </tr>
</table>


## 2. Installation

### Install NPM Dependencies
- [npm-install](https://docs.npmjs.com/cli/v8/commands/npm-install)

```bash
> npm install
```

### Start Dev Server
- [npm-start](https://docs.npmjs.com/cli/v8/commands/npm-start)

```bash
> npm start
```



## 3. Project Architecture

![แแฆแแฉแจ แแฅแนแแณแซ แแกแแตแแฅแแณแแขแท](https://user-images.githubusercontent.com/79739512/206522499-946fd975-ec80-4f15-a833-e57b81c389d1.png)


## 4. Usage 
์ฃผ์ ๊ธฐ๋ฅ ์๊ฐ
- Home page
<img width="1428" alt="แแกแแฑแซ homepage" src="https://user-images.githubusercontent.com/114723339/206464101-19bb5605-9d9f-410a-a57e-38c71cdde95b.png"> <br/>
๋ฉ์ธ ํ์ด์ง์์ ์ธ๊ธฐ์๋ ์ํ ๋ชฉ๋ก์ ๋ณด์ฌ์ค๋๋ค. <br/>
์ต์(1) ์๋จ์ ๋ด๋น๊ฒ์ด์ ๋ฐ์์ 5๊ฐ์ง ์ฅ๋ฅด ์ค ๋ง์ ๋๋ ์ฅ๋ฅด๋ฅผ ์ ํํฉ๋๋ค.<br/>
์ต์(2) ๋ด๋น๊ฒ์ด์ ๋ฐ ์ฐ์ธก ์๋จ์ ๋ก๊ทธ์ธ ๋ฐ ํ์๊ฐ์ ๋ฒํผ์ผ๋ก WATCHVIE์ ์ฌ์ฉ์ ์ ๋ณด๋ฅผ ๋ฑ๋กํ  ์ ์์ต๋๋ค. <br/>
์ต์(3) ์๋จ์ ๋ด๋น๊ฒ์ด์ ๋ฐ ์ข์ธก์ ํ ๋ก๊ณ ์ธ WATCHVIE๋ฅผ ๋๋ฅด๋ฉด ์ด๋ค ํ๋ฉด์ ์๋์ง ๋ฉ์ธ์ผ๋ก ๋์๊ฐ๋๋ค.<br/>
์ต์(4) ์ํ์ ๋ํ ์ ๋ณด๋ฅผ ๊ฒ์ํ์ฌ ํ์ธํด๋ณผ ์ ์์ต๋๋ค.<br/>
<br/>

- ๋ก๊ทธ์ธ๋ ์ํ
<img width="1428" alt="แแฉแแณแแตแซแแกแซ แแฉแทแแฆแแตแแต" src="https://user-images.githubusercontent.com/114723339/206464686-4a49dc03-8027-4f4e-a9fa-70f5aaf7dd28.png"><br/>
๋ก๊ทธ์ธ ํ ๋ฉ์ธํ๋ฉด์๋๋ค. ๋ด๋น๊ฒ์ด์ ๋ฐ ์ฐ์ธก ์๋จ์ ๋ก๊ทธ์์ ๋ฒํผ์ ๋๋ฅด๋ฉด ์์  ํํ๋ฉด์ ํํ๋ก ๋์๊ฐ๋๋ค.

- SignUp page
![signuppage](https://user-images.githubusercontent.com/114723339/206430239-d55a003c-d17c-4653-acd8-3fd6b89e55e0.jpeg) <br/>
homepage์์ ์ต์(2)์ SingUp๋ฒํผ์ ๋๋ฅด๋ฉด ์ ํ๋ฉด์ผ๋ก ์ด๋ํฉ๋๋ค.<br/>
์ด๋ฉ์ผ,์ด๋ฆ,ID,PW(password)๋ฅผ ์๋ ฅํ์ฌ ํ์๊ฐ์ ์ ์ฐจ๋ฅผ ์งํํฉ๋๋ค. <br/>
ํ๋ฉด ํ๋จ์ SignUp ๋ฒํผ์ ๋๋ฅด๋ฉด SignIn page๋ก ๋์ด๊ฐ๋๋ค.<br/>

- SignIn page
![loginpage](https://user-images.githubusercontent.com/114723339/206430248-c534ab34-109b-48ce-8738-54b3bd5f828b.jpeg)<br/>
homepage์์ ์ต์(2)์ SignIn๋ฒํผ์ ๋๋ฅด๋ฉด ์ ํ๋ฉด์ผ๋ก ์ด๋ํฉ๋๋ค. <br/>
UserID์ PW๋ฅผ ์๋ ฅํ๊ณ  ํ๋จ์ SignIn ๋ฒํผ์ ๋๋ฌ ํ์ด์ง์ ๋ก๊ทธ์ธํฉ๋๋ค. <br/>


## 5. Roadmap
#### Frontend
1๏ธโฃ ์ฅ๋ฅด ์ ํ ๋ฐ ๋ก๊ทธ์ธ/ํ์๊ฐ์์ผ๋ก ๊ตฌ์ฑ๋ ํค๋ ๊ตฌํ <br/>

2๏ธโฃ ๋ก๊ทธ์ธ, ํ์๊ฐ์, ์ํ ์ ๋ณด ๋ฑ ๋จ์ผ ํ์ด์ง ๊ตฌ์ฑ <br/>

3๏ธโฃ ๊ฐ ํ์ด์ง๋ค ๋ผ์ฐํ <br/>

4๏ธโฃ ์ํ API ์ฐ๊ฒฐ <br/>

5๏ธโฃ ํ์๊ฐ์, ๋ก๊ทธ์ธ API ์ฐ๊ฒฐ <br/>

6๏ธโฃ ๋ฆฌํฉํ ๋ง <br/>

7๏ธโฃ AWS ๋ฐฐํฌ 


## 6. Contributing
ํ๋ก์ ํธ์ ๊ธฐ์ฌํ๊ณ  ์ถ์ผ์  ๋ถ๋ค์ ์๋ ์ ์ฐจ๋ฅผ ๋ฐ๋ผ์ฃผ์๊ธฐ ๋ฐ๋๋๋ค.

    1. ํ๋ก์ ํธ fork
    2. feature branch ์์ฑ (git checkout -b feature/name)
    3. commit (git commit -m "Add feature)
    4. push (git push origin feature/name)
    5. pull request ์์ฑ
    
    Pull request๋ ์ต๋ํ ๋นจ๋ฆฌ ํ์ธํ๋๋ก ํ๊ฒ ์ต๋๋ค. 
    
pull request ํฌํจ ๋ฌธ์์ฌํญ์ ๐ง[contact](#1-team-member)  ์ผ๋ก ์ฐ๋ฝ ๋ถํ๋๋ฆฝ๋๋ค.
<br/>

## 7. Environment
- Language <br/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=black"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=black">

- Library <br/> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=black"> 


## 8. Convention
#### Commit Convention
- [Conventional Commit](https://www.conventionalcommits.org/ko/v1.0.0/#%ea%b7%9c%ea%b2%a9)

- [Commit msg](https://medium.com/humanscape-tech/%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-commit-message-%EC%9E%91%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-conventional-commits-ae885898e754)
![image](https://user-images.githubusercontent.com/114723339/206160359-4cbfbdaa-4ca1-4197-a784-b091d7b11687.png)
commit์ ์ข๋ฅ๋ ์์ ๊ฐ์ด ๊ตฌ๋ถํฉ๋๋ค.

#### Work Flow
1. ISSUE ์์ฑ<br/>
์์์ ๋ํ ์ ๋ณด๋ฅผ ํฌํจํ ISSUE๋ฅผ ์์ฑํฉ๋๋ค. <br/>
2. ์์ฑ๋ ISSUE์ ๋ํด Draft PR ์์ฑ<br/>
ISSUE๋ฅผ ์ฐ๊ฒฐํ์ฌ ๊ด๋ฆฌํ๊ณ  Pair Programming์ ์ด๋์ ๋ ์งํํ๊ธฐ ์ํด Draft PR์ ์์ฑํฉ๋๋ค. <br/>
3. ์์์ ๋ง์นํ PR Open ๋ฐ ์ฝ๋ ๋ฆฌ๋ทฐ<br/>
์์์ด ๋๋๊ฒ ๋๋ฉด Draft PR์ ์ผ๋ฐ PR๋ก ๋ณ๊ฒฝํ๊ณ  ์๋ก ์ฝ๋ ๋ฆฌ๋ทฐ๋ฅผ ์งํํฉ๋๋ค.<br/>
4. Merge & PR Close & Remove Branch<br/>
์ฝ๋ ๋ฆฌ๋ทฐ๊น์ง ๋ชจ๋ ๋ง๋ฆฌ๊ฐ ๋๋ฉด ํด๋น ๋ธ๋ฐ์น๋ฅผ dev์ mergeํ๊ณ  pr ๋ซ๊ธฐ ๋ฐ ๋ธ๋ฐ์น ์ญ์ ๋ฅผ ์งํํฉ๋๋ค.<br/>

## 9. License
movie-client is licensed under the [MIT License](https://github.com/khu-open-source/movie-client/blob/dev/LICENSE)


