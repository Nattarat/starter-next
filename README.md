# Next.js

## Develop
```
npm run dev
```

## Deploy to Heroku
* Reference: https://github.com/mars/heroku-nextjs

### Step
0. รู้ก่อนทำตาม Step
* app ของเรามีอยู่ที่ GitHub อยู่แล้ว ดังนั้นเราจะทำการเชื่อมต่อ Repository ที่ GitHub เข้ากับ heroku (ไม่ใช้ Heroku Git)

1. เพิ่มคำสั่ง "heroku-postbuild" ที่ package.json เพื่อให้ build app ทุกครั้งที่ deploy
```json
{
    "scripts": {
        "dev": "node server.js",
        "start": "next start -p $PORT",
        "heroku-postbuild": "next build"
    }
}
```

2. heroku create APP_NAME
* ขั้นตอนนี้จะเป็นการสร้าง app บน server ของ heroku
```
heroku create APP_NAME
```
* เมื่อสร้างขึ้นมาแล้ว จะได้ url สำหรับ app ของเราขึ้นมา เช่น http://APP_NAME.herokuapp.com/
* ในกรณีที่ไม่ได้กำหนด APP_NAME ตัว heroku จะสุ่มตั้งชื่อให้เราเอง เช่น http://sharp-rain-871.herokuapp.com/ ซึ่งสามารถไปเปลี่ยนที่ setting ภายหลังได้

3. ไปที่ app ของเราบน heroku > menu "deploy"
* เลือก Deployment method เป็น GitHub จากนั้นกำหนดค่าต่างๆ
    - Repository และ Branch ที่ต้องการให้ deploy ขึ้น heroku
    - Automatic deploys เลือกว่าจะ deploy ทุกครั้งที่ push หรือ deploy ด้วยตัวเอง

4. กลับมาที่ app ของเราที่ local ซึ่งตอนนี้ เชื่อมต่อ Repository ที่ GitHub เข้ากับ heroku แล้ว
```
git add .
git commit -m "First deploy to Heroku"
git push heroku
```
* คำสั่ง git push heroku ปกติจะต่อด้วย url ของ Heroku Git เช่น master, https://git.heroku.com/starternextjs.git เป็นต้น แต่เราไม่ใส่ เพราะเราไม่ได้ใช้ Heroku Git และเราเชื่อมต่อ Repository ที่ GitHub แล้วนั่นเอง

5. heroku open
* เพื่อดู app ที่ deploy ขึ้นไป
```
heroku open
```
