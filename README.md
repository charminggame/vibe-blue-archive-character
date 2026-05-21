# Kivotos Student Registry (Blue Archive Landing Page)

ระบบฐานข้อมูลทำเนียบรายชื่อนักเรียนและสังกัดโรงเรียนแห่งเมืองคิโวทอส (Kivotos) จากเกมมือถือยอดนิยม **Blue Archive** ที่เขียนขึ้นโดยใช้โครงสร้าง HTML5, Vanilla CSS และ JavaScript แยกไฟล์ออกเป็นสัดส่วนอย่างสะอาดตา รองรับการตอบสนองทุกประเภทหน้าจอ (Responsive Web Design) และระบบสลับธีมโหมดมืด/สว่าง

## ✨ ฟีเจอร์หลัก (Key Features)

*   **Premium Cyber-Academic UI:** การออกแบบส่วนติดต่อผู้ใช้ด้วยธีมโฮโลแกรมกึ่งไซไฟ (Signature Sky Blue `#00A3FF`) มีเอฟเฟกต์การวางซ้อนแบบกระจกฝ้า (Glassmorphism), อนิเมชันการลอยตัวอย่างสมูท และเอฟเฟกต์วงแหวน (Halo) เรืองแสงหลังรูปตัวละคร
*   **Dark & Light Theme Toggle:** รองรับการเปลี่ยนธีมสีแบบเรียลไทม์ และบันทึกค่าที่ผู้ใช้เลือกลงในหน่วยความจำของบราวเซอร์ (`localStorage`) โดยอัตโนมัติ
*   **Dynamic School Filter:** แสดงผลข้อมูล 10 โรงเรียนหลักในคิโวทอส (เช่น Abydos, Gehenna, Trinity, Millennium) พร้อมตราสัญลักษณ์ (Emblem) ของแท้ และคำอธิบายภาษาไทย สามารถกดที่การ์ดเพื่อกรองรายชื่อนักเรียนเฉพาะสังกัดได้ทันที
*   **Faceted Live Search & Filters:**
    *   ช่องค้นหาประมวลผลทันทีเมื่อพิมพ์ (ค้นหาได้จากชื่อนักเรียน, สังกัดชมรม หรือชื่อนักแสดงผู้ให้เสียงพากย์)
    *   ตัวเลือกการกรองตามรูปแบบบทบาทต่อสู้ในสนาม (STRIKER / SPECIAL)
    *   ตัวเลือกกรองตามประเภทการทำดาเมจ (ระเบิด Explosive, เจาะเกราะ Piercing, ลึกลับ Mystic, โซนิก Sonic)
    *   ตัวเลือกกรองตามระดับดาวเริ่มต้น (1★ - 3★)
    *   ระบบเรียงลำดับ (Sorting) ตามลำดับดั้งเดิมในเกม, ชื่ออักษร, ระดับดาว หรือส่วนสูง
*   **SchaleDB API & Offline Fallback:** ทำการดึงฐานข้อมูลแบบ Dynamic ล่าสุดผ่าน CDN ของ SchaleDB และกรณีไม่มีอินเทอร์เน็ตตัวเว็บจะสลับไปดึงข้อมูลจำลองภายในไฟล์อัตโนมัติ (เช่น Aru, Shiroko, Hina, Yuuka, Hoshino, Alice, Azusa, Chise)
*   **Student Profile Modal:** หน้าต่างป๊อปอัปแสดงภาพประกอบ Standee ขนาดเต็ม (Portrait) พร้อมรายละเอียดเชิงลึก เช่น อายุ, วันเกิด (แปลปฏิทินไทย), ส่วนสูง, สังกัดชมรม, ผู้พากย์เสียง, ผู้วาดภาพประกอบ, บทแนะนำตัวละคร และสเตตัสการรบพร้อมรายละเอียดอาวุธประจำตัว

---

## 📂 โครงสร้างไฟล์ในโปรเจกต์ (Project Structure)

```
blue-archive-schools/
├── index.html            # โครงสร้างหน้าเว็บหลักพร้อม Metadata SEO
├── README.md             # เอกสารอธิบายโครงการและการรันใช้งาน
├── .gitignore            # ข้ามการติดตามไฟล์ระบบ OS และ IDE
├── css/
│   ├── variables.css     # รวบรวม Color Tokens, Typography, และตัวแปร CSS
│   ├── style.css         # เลย์เอาต์หลัก ส่วนหัว แถบฮีโร่ และส่วนท้าย
│   ├── components.css    # การ์ดโรงเรียน การ์ดนักเรียน ตัวกรอง และ Modal
│   └── animations.css    # คีย์เฟรม อนิเมชันกระตุ้นแสงเรือง และอนิเมชันลอยตัว
└── js/
    ├── data.js           # ประวัติโรงเรียนแปลไทย และตัวข้อมูลสำรองออฟไลน์
    ├── ui.js             # ควบคุมธีมสว่าง/มืด, Modal และการสลับแถบข้อมูลภายใน
    └── app.js            # Fetch ข้อมูลเรียลไทม์ และตรรกะการประมวลตัวกรอง-การเรียงลำดับ
```

---

## 🎨 เครดิตไฟล์ภาพและข้อมูลอ้างอิง (Asset Credits)

โปรเจกต์นี้ไม่ได้ใช้ภาพที่สร้างขึ้นจากระบบปัญญาประดิษฐ์ (AI-generated) เพื่อรักษาความถูกต้องของข้อมูลและลิขสิทธิ์:
1.  **ตราสัญลักษณ์สถาบัน (School Emblems):** ดึงผ่าน Fandom Wikia CDN ของทางการเกม Blue Archive
2.  **ภาพนักเรียน (Portraits & Icons):** ดึงภาพประกอบจากฐานข้อมูลแฟนคลับ [SchaleDB](https://schaledb.com/) แบบเรียลไทม์
3.  **ลิขสิทธิ์ตัวละคร:** ภาพและเนื้อหาทั้งหมดเป็นสิทธิ์อันชอบธรรมของ Nexon Games / Yostar / NAT Games

---

## 🚀 วิธีการทดสอบรันหน้าเว็บในเครื่อง (How to Run Locally)

คุณสามารถเปิดไฟล์ `index.html` บนบราวเซอร์ได้โดยตรง หรือทดสอบรันผ่าน Local Server เพื่อจำลองสภาวะแวดล้อมที่เสมือนจริง:

1.  เปิดเครื่องมือ Terminal / Command Prompt
2.  เข้าโฟลเดอร์ของโครงการและรันเซิร์ฟเวอร์ด้วย Python:
    ```bash
    cd blue-archive-schools
    python3 -m http.server 8000
    ```
3.  เปิดบราวเซอร์แล้วไปที่: **[http://localhost:8000](http://localhost:8000)**

---

## 📝 รูปแบบการเขียน Commit (Conventional Commits)

โปรเจกต์นี้มีการควบคุมมาตรฐานของ Git Commit Message ตามข้อกำหนดของ [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) เช่น:
*   `feat: initialize project and implement Blue Archive student database landing page`
*   `docs: create README documentation for the repository`
