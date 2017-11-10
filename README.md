# Next.js

## Deploy to Heroku
* Reference: https://github.com/mars/heroku-nextjs

### Step
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

