// /// COming Soon saat layar berubah //

// function checkScreenWidth() {
//     if (window.innerWidth <= 833) {
//         window.location.href = "./coming-soon.html";
//     }
// }

// // Jalankan fungsi saat halaman dimuat dan saat ukuran layar berubah
// window.onload = checkScreenWidth;
// window.onresize = checkScreenWidth;


// Tombol NavLinks //
const navlinks = document.querySelector('.navlinks');
const navmobile = document.querySelector('.navbar .mobile');

document.querySelector('.menu-toggle').addEventListener('click', function() {
    navlinks.classList.toggle('active');
    
    
    if (navlinks.classList.contains('active')) {
        navlinks.style.maxHeight = navlinks.scrollHeight + "px"; // Set to content height
    } else {
        navlinks.style.maxHeight = null; // Remove max-height
    }
});



// Running Teks //
const texts = document.querySelectorAll('.marquee-content p');
let index = 0;

function showNextText() {
    // Sembunyikan semua teks terlebih dahulu
    texts.forEach((text) => (text.style.display = 'none'));

    // Tampilkan teks saat ini
    const currentText = texts[index];
    currentText.style.display = 'block';
    currentText.style.animation = 'bounceUp 1200ms ease-in-out forwards';

    // Pindah ke teks berikutnya, ulang dari awal jika sudah sampai akhir
    index = (index + 1) % texts.length;

     // Panggil fungsi ini lagi setelah 800ms jeda + 600ms durasi animasi
    setTimeout(showNextText, 1600);
}

// Mulai animasi saat halaman dimuat
window.onload = showNextText;


// Button Scroll //
document.addEventListener("DOMContentLoaded", function() {
    const portfolioPlacement = document.querySelector('.portfolioPlacement');
     // Set scroll amount based on screen width
     let scrollAmount = window.innerWidth <= 1024 ? 576 : 865;

     // Update scrollAmount on window resize
     window.addEventListener('resize', function() {
         scrollAmount = window.innerWidth <= 1024 ? 576 : 865;
     });

    document.querySelector('.arrowRight').addEventListener('click', function() {
        portfolioPlacement.scrollBy({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth' // Smooth scrolling
        });
    });

    document.querySelector('.arrowLeft').addEventListener('click', function() {
        portfolioPlacement.scrollBy({
            top: 0,
            left: -scrollAmount,
            behavior: 'smooth' // Smooth scrolling
        });
    });
    
});


//Optimize Picture //
document.addEventListener("DOMContentLoaded", function() {
    const logos = document.querySelectorAll('.logo');

    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const logo = entry.target;
                const bgImage = logo.getAttribute('data-bg');
                logo.style.backgroundImage = `url(${bgImage})`;
                observer.unobserve(logo); // Hentikan pengamatan setelah gambar dimuat
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Memicu ketika 10% elemen terlihat
    });

    logos.forEach(logo => {
        observer.observe(logo);
    });
});



// Navbar yang berubah warna saat di scroll //

// Listen for the scroll event
window.addEventListener('scroll', function () {
    var navbarDesktop = document.getElementById('navbar-desktop');
    var navbarMobile = document.getElementById('navbar-mobile');
    var scrollLimit = window.innerWidth <= 1024 ? 314 : 900; // Set scroll limit based on screen width

    if (window.scrollY > scrollLimit) {
        if (navbarDesktop) navbarDesktop.classList.add('scrolled');
        if (navbarMobile) navbarMobile.classList.add('scrolled');
    } else {
        if (navbarDesktop) navbarDesktop.classList.remove('scrolled');
        if (navbarMobile) navbarMobile.classList.remove('scrolled');
    }
});




// dark mode system //

// Select the button
const btnMode = document.querySelector('.btn-mode');

// Check localStorage for saved theme on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');  // Apply dark mode
        btnMode.classList.add('dark-active');  // Ensure button reflects dark mode state
    }
});

// Toggle dark mode when the button is clicked
btnMode.addEventListener('click', () => {
    btnMode.classList.toggle('dark-active'); // Toggle button active state
    document.body.classList.toggle('dark-mode'); // Toggle dark mode on body
    
    // Save theme preference in localStorage
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    
     
});





// Select Menu //

const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");


selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
        option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;        
        optionMenu.classList.remove("active");
        
        
        
    });
    
});

// protfolio sBtn-text
$(window).on("load", function() {
    var t = $(".framePict"); // Select the parent container for your gallery items

    // Initially show #iniKaryaku by default
    $("#dokumentasi").hide();
    $("#iniKaryaku").show();

    // Click event for filtering
    $(".options li").click(function() {
        $(".options .active").removeClass("active");
        $(this).addClass("active");
        
        var filterValue = $(this).attr("data-filter");

        // Filter based on id: #iniKaryaku or #dokumentasi with animation
        if (filterValue === "iniKaryaku") {
            $("#dokumentasi").slideUp(400, function() { // Slide up the content first
                $("#iniKaryaku").slideDown(400); // Then slide down #iniKaryaku
            });
        } else if (filterValue === "dokumentasi") {
            $("#iniKaryaku").slideUp(400, function() { // Slide up the content first
                $("#dokumentasi").slideDown(400); // Then slide down #dokumentasi
            });
        }

        return false;
    });
});






// ambil elemen galeri
const galeriDokumentasi = document.getElementById('dokumentasi');
const galeriKaryaku = document.getElementById('iniKaryaku');

// Function to create and show gallery items
function createGalleryItem(item, galeri) {
  // Create the gallery item container
  const galeriItem = document.createElement('div');
  galeriItem.classList.add('pictFrame', 'max-w-xs', 'overflow-hidden', 'relative', 'rounded-lg', 'cursor-pointer', 'hover:shadow-lg', 'transition-all');

  // Create the image element
  const gambar = document.createElement('img');
  gambar.classList.add('galleryPict', 'w-full', 'h-full', 'object-cover', 'rounded');
  gambar.src = item.galleryPict;

  // Set an event listener on the image to open the modal
  gambar.addEventListener('click', () => openModal(item));

  // Add image to the gallery item
  galeriItem.appendChild(gambar);

  // Append the item to the gallery container
  galeri.appendChild(galeriItem);
}

// Function to open the modal and display the clicked item's data
function openModal(item) {
  const modal = document.getElementById('galleryModal');
  document.getElementById('modalImage').src = item.galleryPict;
  document.getElementById('modalTitle').textContent = item.hGdesc;
  document.getElementById('modalDescription').textContent = item.pGdesc;
  document.getElementById('modalId').textContent = `Kategori: ${item.id}`;
  
  // Show the modal
  modal.classList.remove('hidden');
}

// Close the modal
document.querySelector('.closeModal').addEventListener('click', () => {
  const modal = document.getElementById('galleryModal');
  modal.classList.add('hidden');
});


// Close the modal when clicking on the background or the close button
document.getElementById('galleryModal').addEventListener('click', (event) => {
    // Close the modal if the background (not modal content) is clicked
    if (event.target === event.currentTarget) {
      const modal = document.getElementById('galleryModal');
      modal.classList.add('hidden');
    }
  });

// Fetch the gallery data from JSON
fetch('./assets/json/gallery-dokumentasi.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => createGalleryItem(item, galeriDokumentasi));
  })
  .catch(error => console.error('Error loading dokumentasi data:', error));

fetch('./assets/json/gallery-karya.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => createGalleryItem(item, galeriKaryaku));
  })
  .catch(error => console.error('Error loading karyaku data:', error));

// dashboard Button

const btnModeDashboard = document.getElementById('dashboard');
const redirectUrl = '/dashboard';
const btnModeSettings = document.querySelector('.Dashboard-container');
btnModeDashboard.addEventListener('click', () => {
    location.href = redirectUrl;
});
window.onload = () => {
    if (sessionStorage.name) {
        btnModeSettings.classList.add('show');
          
    }
};

// // Menampilkan data dari sessionStorage di konsol
// const displaySessionStorageData = () => {
//     console.log("Data di sessionStorage:");
//     console.log("Name:", sessionStorage.getItem('name'));
//     console.log("Username:", sessionStorage.getItem('username'));
//     console.log("Role:", sessionStorage.getItem('role'));
// };

// // Panggil fungsi untuk menampilkan data
// displaySessionStorageData();
