## Simple Medical Records System

Simple Medical Records System 是一款簡單的病例管理系統，目前可以執行建立、查詢、上傳照片的功能。
預設登入帳號密碼：{
      {
      "account": "user1",
      "password": "123456"
    },
    {
      "account": "user2",
      "password": "654321"
    }
}

### 登入頁面：

![Imgur](https://imgur.com/CRi6FCW.png)

### 查詢頁面：

![Imgur](https://imgur.com/J8hSbJ8.png)

### 個人頁面：

![Imgur](https://imgur.com/UU4llUl.png)

## 主要功能

* 1.建立病患資料。
* 2.查詢已建立的病患資料。
* 3.可以使用相簿裡的照片上傳，或是利用鏡頭拍攝照片。

## 本地安裝流程
* 開啟終端機(Terminal)，並確認已安裝 node.js 與 npm
* 在終端機輸入以下指令，將本專案 clone 到本機電腦
```
git clone https://github.com/jeff0518/homework.git
```
* 透過終端機進入存放此專案的資料夾後，輸入以下指令安裝 npm 套件
```
npm install
```
* 安裝完畢後請輸入以下指令執行專案
```
npm start
```
* 打開瀏覽器輸入以下網址即可開始使用本專案
```
http://localhost:3000/
```
## 開發工具
* "vite": "5.1.4"
* "react": "18.2.0"
* "react-dom": "18.2.0"
* "react-icons": "5.0.1",
* "typescript": "5.2.2",
* "@types/react": "18.2.56",
* "@types/react-dom": "18.2.19",
* "axios": "1.71.1"
* "sass": "1.69.7"
* "sweetalert2": "11.10.6"