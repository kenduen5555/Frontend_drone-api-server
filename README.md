# Frontend_drone-api-server

## ภาพรวมของโปรเจกต์
โปรเจกต์นี้เป็น **Frontend ของ Drone Dashboard**  
โดยมีฟังก์ชันหลักดังนี้:  
- แสดงค่า **Config ของโดรน**  
- กรอกค่า **Temperature Log** ผ่านฟอร์ม  
- ดู **Logs ของโดรน** พร้อมระบบ **Pagination**  

Frontend พัฒนาด้วย **React** + **Vite** + **TailwindCSS**  

---

## ความต้องการเบื้องต้น - Node.js >= 18 - npm หรือ yarn - ต้องมี **Access API ของ Drone** (ต้องตั้ง Environment Variables) --- ## การติดตั้งโปรเจกต์ 1. Clone repo มาในเครื่อง:
bash
git clone https://github.com/kenduen5555/Frontend_drone-api-server.git
cd Frontend_drone-api-server/drone-frontend
ติดตั้ง dependencies:

bash
คัดลอกโค้ด
npm install
# หรือ
yarn install
การตั้งค่า Environment Variables
สร้างไฟล์ .env ในโฟลเดอร์ drone-frontend และเพิ่มค่า:

env
คัดลอกโค้ด
VITE_API_BASE_URL=https://projectweb3-1-drone-api-server.onrender.com
VITE_DRONE_ID=66011441
ค่าของ VITE_DRONE_ID ต้องตรงกับโดรนที่คุณต้องการดูค่า logs และ config

การรันในโหมด Development
bash
คัดลอกโค้ด
npm run dev
# หรือ
yarn dev
เปิดเว็บเบราว์เซอร์ที่ http://localhost:5173

การ Build สำหรับ Production
สร้าง Production Build:

bash
คัดลอกโค้ด
npm run build
# หรือ
yarn build
Preview Production Build:

bash
คัดลอกโค้ด
npx vite preview --port 4173 --host
ต้องเพิ่ม --host เพื่อให้เครื่องอื่นสามารถเข้าถึง server ได้

การ Deploy บน Render.com
Build Command: npm install && npm run build

Start Command: npx vite preview --port $PORT --host

Root Directory: drone-frontend

Environment Variables: ตั้งตามด้านบน

ปัญหาที่เจอบ่อย:

ถ้าใช้ npx vite preview โดยไม่ใส่ --host จะมองไม่เห็น port

ต้องตั้ง Environment Variables ให้ครบทุกตัว

โครงสร้างโฟลเดอร์
bash
คัดลอกโค้ด
drone-frontend/
├─ src/
│  ├─ pages/
│  │  ├─ ConfigPage.jsx    # แสดงค่า Config ของโดรน
│  │  ├─ LogFormPage.jsx   # ฟอร์มกรอก Temperature
│  │  └─ LogsPage.jsx      # แสดง Logs ของโดรน
│  ├─ index.css            # ไฟล์ CSS หลัก
│  └─ main.jsx             # Entry point ของ React
├─ package.json
├─ tailwind.config.js
└─ postcss.config.cjs      # ต้องใช้ .cjs ถ้า package.json เป็น "type": "module"
หมายเหตุสำคัญ
TailwindCSS ต้องติดตั้งเรียบร้อย:

bash
คัดลอกโค้ด
npm install -D tailwindcss@3.4.1 postcss autoprefixer
ถ้าใช้ "type": "module" ใน package.json ต้องเปลี่ยน postcss.config.js เป็น postcss.config.cjs ดังนี้:

js
คัดลอกโค้ด
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
การรันบน Render ให้ใช้คำสั่ง start เป็น:

bash
คัดลอกโค้ด
npx vite preview --port $PORT --host
เพื่อให้ detect port และ host ได้ถูกต้อง

ควรตั้งค่า Environment Variables ก่อน deploy ทุกครั้งเพื่อให้ Frontend ดึงค่า Config และ Logs ได้ถูกต้อง
