# 🚀 Frontend_drone-api-server

## ภาพรวมของโปรเจกต์
โปรเจกต์นี้เป็น **Frontend ของ drone-api-server**  
พัฒนาด้วย **React + Vite + TailwindCSS**  

สามารถเข้าถึงเรียกใช้ได้บน cloud host โดยตรงที่ https://frontend-drone-api-server.onrender.com/

โดยมีฟังก์ชันหลักดังนี้:  
- แสดงค่า **Config ของโดรน**  
- กรอกค่า **Temperature Log** ผ่านฟอร์ม  
- ดู **Logs ของโดรน** พร้อมระบบ **Pagination**  

---

## ✨ Features
| หน้า | Description |
|------|-------------|
| View Config | แสดงค่า Config ของโดรนจาก API |
| Temperature Log Form | ฟอร์มกรอกค่าอุณหภูมิของโดรน |
| View Logs | แสดง Logs ของโดรน พร้อม Pagination |

---

## ⚙️ Installation & Setup

### 1. Clone repo มาในเครื่อง:
git clone https://github.com/kenduen5555/Frontend_drone-api-server.git

cd Frontend_drone-api-server/drone-frontend

### 2.ติดตั้ง dependencies:
npm install

### 3.การตั้งค่า Environment Variables
สร้างไฟล์ .env ในโฟลเดอร์ drone-frontend และเพิ่มค่า:

VITE_API_BASE_URL=https://projectweb3-1-drone-api-server.onrender.com

VITE_DRONE_ID=66011441

ค่าของ VITE_DRONE_ID ต้องตรงกับโดรนที่ต้องการดูค่า logs และ config

### 4.การรันในโหมด Development
npm run dev

---


## การ Deploy บน Render.com
Build Command: npm install && npm run build
Start Command: npx vite preview --port $PORT --host
Root Directory: drone-frontend
Environment Variables: ตั้งตามด้านบน


---

## 🌐 Pages & Components
| Component | Description |
|------|-------------|
| ConfigPage.jsx | แสดงค่า Config ของโดรน |
| LogFormPage.jsx |	ฟอร์มกรอก Temperature |
| LogsPage.jsx | แสดง Logs ของโดรน พร้อม Pagination |
| main.jsx	Entry | point ของ React |
| index.css |	CSS หลัก |

---

หมายเหตุสำคัญ
TailwindCSS ต้องติดตั้งเรียบร้อย
ถ้าใช้ "type": "module" ใน package.json ต้องเปลี่ยน postcss.config.js เป็น postcss.config.cjs
ควรตั้งค่า Environment Variables ก่อน deploy ทุกครั้งเพื่อให้ Frontend ดึงค่า Config และ Logs ได้ถูกต้อง


## 🔁 Pagination

ระบบรองรับ Pagination ผ่าน query parameter ]
โดยจะแสดง 12 รายการต่อหน้า (เรียงจาก log ล่าสุดขึ้นก่อน)

---
