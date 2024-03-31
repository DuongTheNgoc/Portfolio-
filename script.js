/*======================== toggle icon navbar ===========================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*======================== scroll sections active link ===========================*/
// Lấy tất cả các phần tử <section> và các liên kết trong thanh điều hướng (<nav>)
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// Sự kiện cuộn trang: Khi trang được cuộn, hàm được kích hoạt
window.onscroll = () => {
    // Lặp qua mỗi phần tử <section>
    sections.forEach(sec => {
        let top = window.scrollY; // Vị trí hiện tại của cửa sổ cuộn
        let offset = sec.offsetTop - 150; // Vị trí bắt đầu của phần tử <section>, trừ đi 150 pixel để xác định điểm kích hoạt
        let height = sec.offsetHeight; // Chiều cao của phần tử <section>
        let id = sec.getAttribute('id');

        // Kiểm tra xem cửa sổ cuộn đến vị trí nào
        if (top >= offset && top < offset + height) {
            // Loại bỏ lớp active từ tất cả các liên kết trong thanh điều hướng
            navlinks.forEach(links => {
                links.classList.remove('active');
                // Thêm lớp active vào liên kết tương ứng trong thanh điều hướng
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*======================== sticky navbar ===========================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*======================== remove toggle icon and navbar when click navbar link (scroll) ===========================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};



/*======================== scroll reveal ===========================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*======================== scroll reveal ===========================*/
var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer"],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 700,
    loop: true
})

document.getElementById("DownloadCV").addEventListener("click", function () {
    // Thay đổi URL bằng đường dẫn đến tập tin CV của bạn
    var cvUrl = "CV/DTN_CV.pdf";
    // Tạo một phần tử a (link)
    var downloadLink = document.createElement("a");
    // Thiết lập thuộc tính href cho link để chỉ đến URL của CV
    downloadLink.href = cvUrl;
    downloadLink.target = "_blank"; // Mở cửa sổ mới cho tệp PDF
    // Thiết lập thuộc tính download để tệp sẽ được tải xuống khi nhấp vào nút
    downloadLink.download = "DTN_CV.pdf";
    //Thêm link vào body (không hiển thị trên trình duyệt)
    document.body.appendChild(downloadLink);
    // Kích hoạt sự kiện click trên link để bắt đầu quá trình tải xuống
    downloadLink.click();
    // Xóa link sau khi tải xuống hoàn tất
    document.body.removeChild(downloadLink);
});