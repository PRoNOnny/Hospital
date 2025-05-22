// ฟังก์ชันสำหรับควบคุมการเลื่อนรูปแพทย์
document.addEventListener('DOMContentLoaded', function() {
    // ตัวแปรสำหรับเก็บสถานะปัจจุบัน
    let slideIndex = 1;
    showSlides(slideIndex);
    
    // เพิ่ม Event Listener สำหรับปุ่มเลื่อน
    const prevBtn = document.querySelector('.doctor-slider .prev-btn');
    const nextBtn = document.querySelector('.doctor-slider .next-btn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            showSlides(slideIndex -= 1);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            showSlides(slideIndex += 1);
        });
    }
    
    // เพิ่ม Event Listener สำหรับจุดควบคุม
    const dots = document.querySelectorAll('.slider-dots .dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlides(slideIndex = index + 1);
        });
    });
    
    // ฟังก์ชันแสดงสไลด์
    function showSlides(n) {
        const slides = document.querySelectorAll('.doctor-slide');
        const dots = document.querySelectorAll('.dot');
        
        // ตรวจสอบขอบเขตของดัชนี
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        
        // ซ่อนทุกสไลด์ก่อน
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // รีเซ็ตสถานะจุด
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // แสดงสไลด์ปัจจุบัน
        slides[slideIndex - 1].classList.add('active');
        dots[slideIndex - 1].classList.add('active');
    }
    
    // เลื่อนอัตโนมัติทุก 5 วินาที
    setInterval(function() {
        showSlides(slideIndex += 1);
    }, 5000);
});

// ฟังก์ชันสำหรับการคลิกที่จุดควบคุม (เรียกจาก HTML)
function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.addEventListener('DOMContentLoaded', function() {
    // สำหรับเมนู dropdown
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.parentElement;
            const dropdownMenu = parent.querySelector('.dropdown-menu');
            
            // ปิดเมนูอื่นๆ ที่เปิดอยู่
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove('show');
                }
            });
            
            // สลับสถานะเมนูปัจจุบัน
            dropdownMenu.classList.toggle('show');
        });
    });
    
    // ปิดเมนู dropdown เมื่อคลิกที่อื่น
    document.addEventListener('click', function(e) {
        if (!e.target.matches('.dropdown-toggle')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });

    // สำหรับเมนูมือถือ
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});

// สร้างไฟล์ script.js
document.addEventListener("DOMContentLoaded", function() {
    // โหลด navbar
    fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data;
      });
    
    // โหลด footer
    fetch("footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
      });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // สำหรับสไลด์ข่าว
    let newsSlideIndex = 1;
    showNewsSlides(newsSlideIndex);
    
    // เพิ่ม Event Listener สำหรับปุ่มเลื่อนข่าว
    const newsPrevBtn = document.getElementById('news-prev-btn');
    const newsNextBtn = document.getElementById('news-next-btn');
    
    if (newsPrevBtn) {
        newsPrevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showNewsSlides(newsSlideIndex -= 1);
        });
    }
    
    if (newsNextBtn) {
        newsNextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showNewsSlides(newsSlideIndex += 1);
        });
    }
    
    // เพิ่ม Event Listener สำหรับตัวบ่งชี้สไลด์
    const newsIndicators = document.querySelectorAll('.slider-indicators .indicator');
    newsIndicators.forEach((indicator) => {
        indicator.addEventListener('click', function(e) {
            e.preventDefault();
            const slideNumber = parseInt(this.getAttribute('data-slide'));
            showNewsSlides(newsSlideIndex = slideNumber);
        });
    });
    
    // ฟังก์ชันแสดงสไลด์ข่าว
    function showNewsSlides(n) {
        const slides = document.querySelectorAll('.news-slide');
        const indicators = document.querySelectorAll('.slider-indicators .indicator');
        
        if (!slides.length) return;
        
        // ตรวจสอบขอบเขตของดัชนี
        if (n > slides.length) {
            newsSlideIndex = 1;
        }
        if (n < 1) {
            newsSlideIndex = slides.length;
        }
        
        // ซ่อนทุกสไลด์ก่อน
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // รีเซ็ตสถานะตัวบ่งชี้
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // แสดงสไลด์ปัจจุบัน
        slides[newsSlideIndex - 1].classList.add('active');
        indicators[newsSlideIndex - 1].classList.add('active');
    }
    
    // เลื่อนอัตโนมัติทุก 5 วินาที
    setInterval(function() {
        showNewsSlides(newsSlideIndex += 1);
    }, 5000);
    
    // ส่วนของ Modal สำหรับขยายรูปภาพ
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('expanded-image');
    const closeModal = document.querySelector('.close-modal');
    const readMoreBtns = document.querySelectorAll('.read-more');
    const slideImages = document.querySelectorAll('.news-image img');
    
    // เพิ่ม Event Listener สำหรับปุ่ม "อ่านเพิ่มเติม"
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const activeSlide = document.querySelector('.news-slide.active');
            const slideImage = activeSlide.querySelector('.news-image img');
            modal.style.display = 'block';
            modalImg.src = slideImage.src;
        });
    });
    
    // เพิ่ม Event Listener สำหรับรูปภาพ (เผื่อผู้ใช้คลิกที่รูปภาพด้วย)
    slideImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });
    
    // เพิ่ม Event Listener สำหรับปุ่มปิด Modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // เพิ่ม Event Listener สำหรับคลิกนอกรูปภาพเพื่อปิด Modal
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// แก้ไขเพิ่มเติมในส่วนของ JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // ส่วนอื่นๆ ของโค้ดที่มีอยู่แล้ว...
    
    // ดักจับคลิกที่ภาพในสไลด์ข่าว
    const newsImages = document.querySelectorAll('.news-image img');
    newsImages.forEach(img => {
        img.addEventListener('click', function(e) {
            e.preventDefault(); // ป้องกันการนำทางไปยังลิงก์อื่น
            e.stopPropagation(); // หยุดการบับเบิลลิ่งของอีเวนท์
            
            const modal = document.getElementById('image-modal');
            const modalImg = document.getElementById('expanded-image');
            
            // แสดงโมดัลและกำหนดรูปภาพ
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });
    
    // แก้ไขลิงก์ "อ่านเพิ่มเติม" ให้ขยายภาพแทนการนำทาง
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // ป้องกันการนำทางไปยัง news.html
            e.stopPropagation();
            
            // หาภาพที่อยู่ในสไลด์เดียวกัน
            const slide = this.closest('.news-slide');
            const slideImage = slide.querySelector('.news-image img');
            
            const modal = document.getElementById('image-modal');
            const modalImg = document.getElementById('expanded-image');
            
            // แสดงโมดัลและกำหนดรูปภาพ
            modal.style.display = 'block';
            modalImg.src = slideImage.src;
        });
    });
    
    // ส่วนอื่นๆ ที่มีอยู่แล้ว...
});