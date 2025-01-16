// Memastikan js sudah terhubung
console.log('JavaScript is running'); 

// Fungsi validasi 
function formValidation(event) {
    event.preventDefault(); 

    // Input pengguna
    let nameInput = document.getElementById('name').value;
    let emailInput = document.getElementById('email').value;
    let phoneInput = document.getElementById('phone').value;
    let messageInput = document.getElementById('message').value;

    // Pemeriksaan input
    if (nameInput === "" || emailInput === "" || phoneInput === "" || messageInput === "") {
        showErrorPopup(); 
    } else {
        // Pengambilan hasil input
        document.getElementById('result-form').innerHTML = `
            <div><label>Name:</label> ${nameInput}</div>
            <div><label>Email:</label> ${emailInput}</div>
            <div><label>Phone:</label> ${phoneInput}</div>
            <div><label>Message:</label> ${messageInput}</div>
        `;
        
        showThankYouPopup(nameInput); 
    }
}

// Fungsi menampilkan pop-up valid
function showThankYouPopup(name) {
    document.getElementById('overlay').style.display = 'block'; 
    let popup = document.getElementById('thank-you-popup');
    popup.innerHTML = `Thank You, ${name}!`; 
    popup.style.display = 'block'; 

    // Menyembunyikan pop-up setelah 3 detik
    setTimeout(function () {
        popup.style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }, 3000);
}

// Fungsi menampilkan pop-up error
function showErrorPopup() {
    document.getElementById('overlay').style.display = 'block'; 
    let popup = document.getElementById('error-popup');
    popup.innerHTML = "Oh no, please continue filling"; 
    popup.style.display = 'block'; 

    // Menyembunyikan pop-up setelah 2 detik
    setTimeout(function () {
        popup.style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }, 2000);
}

// Menambahkan event listener untuk tombol submit setelah DOM dimuat
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit-btn').addEventListener('click', formValidation);
});

// Fungsi banner auto-slide
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.banner-slide'); 
    let currentIndex = 0; 

    // Fungsi menampilkan slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active'); 
            } else {
                slide.classList.remove('active'); 
            }
        });
    }

    // Fungsi memulai auto-slide dan akan berganti setiap 3 detik sekali
    function startAutoSlide() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length; 
            showSlide(currentIndex);
        }, 3000); 
    }

    // Menampilkan slide pertama saat halaman website dibuka dan memulai fungsi banner auto-slide
    showSlide(currentIndex); 
    startAutoSlide(); 
});
