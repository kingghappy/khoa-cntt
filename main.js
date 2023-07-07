// đổi màu header khi cuộn
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


// thay đổi nội dung từng ngành
const nganhBtns = document.querySelectorAll('.nganh-item')
const nganhDscP = document.querySelector('.nganh-dsc .lead_P.top ')
const nganhName = document.querySelector('.nganh-dsc .nganh-name ')
const dscName = document.querySelector('.nganh-dsc .p1 ')
const CN1 = document.querySelector('.nganh-dsc .chuyen-nganh-name1')
const dscCN1 = document.querySelector('.nganh-dsc .p2')
const CN2 = document.querySelector('.nganh-dsc .chuyen-nganh-name2')
const dscCN2 = document.querySelector('.nganh-dsc .p3')

var mature = {
    CNTT: {
        name: 'công nghệ thông tin',
        dscName: 'Hiện nay, ngành công nghệ thông tin là một trong những ngành học được chú trọng trong hệ thống đào tạo của trường Đại học Công nghệ thông tin cũng như các trường Đại học khác có đào tạo ngành học này. Nó được xem là ngành đào tạo mũi nhọn hướng đến sự phát triển của công nghệ và khoa học kỹ thuật trong thời đại số hóa ngày nay. Công nghệ thông tin là một ngành học được đào tạo để sử dụng máy tính và các phần mềm máy tính để phân phối và xử lý các dữ liệu thông tin, đồng thời dùng để trao đổi, lưu trữ và chuyển đổi các dữ liệu thông tin dưới nhiều hình thức khác nhau.',
        subName1: 'mạng máy tính',
        dscName1: 'Đến với ngành học này, bạn sẽ hiểu và làm chủ được những công nghệ mạng phổ biến như thư tín điện tử, truyền tải tập tin, truyền thông thông tin, hay những công nghệ tiên tiến như điện toán đám mây, tính toán lưới, tính toán di động, xây dựng và vận hành data center, an toàn và bảo mật thông tin.',
        subName2: 'an toàn thông tin',
        dscName2: 'Đến với ngành học này, bạn sẽ bảo vệ các tổ chức và cá nhân trước các cuộc tấn công mạng. Đối tượng nghiên cứu cụ thể là các dịch vụ mạng như Web, hệ thống điện toán đám mây (Cloud), hệ thống không dây, các phương pháp phát hiện và bảo vệ các dịch vụ mạng này khỏi các hành vi đột nhập và phá hoại dữ liệu bất hợp pháp.'
    },
    TKDH: {
        name: 'thiết kế đồ họa',
        dscName:'Thiết kế đồ họa là nghệ thuật sử dụng các yếu tố thiết kế (typography & hình ảnh) để truyền tải thông điệp hoặc tạo ra một sự ảnh hưởng. Đây là một sản phẩm nghệ thuật. Đồ họa là một lĩnh vực truyền thông trong đó thông điệp được tiếp nhận qua con đường thị giác. Thiết kế đồ họa là tạo ra các giải pháp bằng hình ảnh cho các vấn đề truyền thông.',
        subName1: 'Đồ họa ứng dụng',
        dscName1: 'Cung cấp cho bạn kỹ thuật xử lý ảnh từ cơ bản đến nâng cao các tính năng mới giúp bạn tạo được các hình rõ nét, và mang tính kỹ thuật cao, hỗ trợ đắc lực cho kỹ thuật tách ghép hình ảnh, điều ch̉nh màu sắc; Phục hồi được ảnh cũ, nhàu, ố,...; Tạo hiệu ứng cho bức ảnh, lồng ghép khung ảnh nghệ thuật; Ch̀n chữ nghệ thuật vào trong bức ảnh; Xuất ảnh với nhiều đ̣nh dạng khác nhau; In ảnh với màu sắc trung thực…',
        subName2: 'Đồ họa đa phương tiện',
        dscName2: ' lĩnh vực bao trùm, rộng hơn, bao gồm cả các môn học, công cụ của thiết kế đồ hoạ, mô phỏng chuyển động (animation), kỹ xảo phim, lồng ghép các ấn phẩm truyền thông - âm thanh. '
    },
    KHMT: {
        name: 'khoa học máy tính',
        dscName:'Mục tiêu đào tạo của Khoa Khoa học Máy tính đó là cung cấp nguồn nhân lực chất lượng cao được đào tạo bài bản về Trí tuệ nhân tạo (Artificial Intelligence - AI) đáp ứng nhu cầu về nghiên cứu, xây dựng và phát triển các sản phẩm, giải pháp thông minh phục vụ cho cuộc sống. Chương trình đào tạo của Khoa cung cấp cho sinh viên nhiều lựa chọn theo các định hướng nghề nghiệp như Trí tuệ Nhân tạo (AI), Thị giác Máy tính (Computer Vision), Xử lý Ngôn ngữ Tự nhiên (Natural Language Processing)…. Với các kiến thức nền tảng sinh viên hoàn toàn có thể tham gia nghiên cứu và phát triển các ứng dụng thông minh như: hệ thống nhận diện khuôn mặt (Face Recognition System), hệ thống Chatbot, hệ thống tìm kiếm – truy vấn thông tin (Retrieval System) …',
        subName1: 'Công nghệ phần mềm',
        dscName1: 'Chuyên ngành này tập trung nghiên cứu cơ sở dữ liệu, các nền tảng phần mềm cũng như sự phát triển của các ứng dụng và hệ thống. Bên cạnh đó, Công nghệ phần mềm còn tập trung vào xây dựng các ứng dụng giúp nâng cao hiệu quả hoạt động của doanh nghiệp và tăng chất lượng sống của con người.',
        subName2: 'Hệ thống thông tin',
        dscName2: 'Giúp sinh viên có khả năng phân tích, thiết kế, xây dựng, triển khai, quản trị và kiểm soát các hệ thống thông tin quản lý; kiến thức về lý thuyết thống kê kinh tế... nhằm cung cấp các căn cứ khoa học, đề xuất các phương án tối ưu trong công tác quản lý kinh tế xã hội và quản trị kinh doanh'
    }
}
    
for(let nganhBtn of nganhBtns) {
    nganhBtn.addEventListener('click', function(){
        nganhDscP.classList.add('close')
        let this_output = this.getAttribute('value')
        nganhName.innerHTML = mature[this_output].name
        dscName.innerHTML =mature[this_output].dscName
        CN1.innerHTML = mature[this_output].subName1
        dscCN1.innerHTML =mature[this_output].dscName1
        CN2.innerHTML = mature[this_output].name
        dscCN2.innerHTML =mature[this_output].dscName2
    })
}

// xem ảnh hoạt động của khoa
const imgs = document.querySelectorAll('.asctivities-item img');
const gallery = document.querySelector('.gallery');
const close = document.querySelector('.closeBtn');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const galleryImg = document.querySelector('.gallery-inner img');

var imgName = [
    'Cuộc thi học thuật “VHU CODINGAME TOURNAMENT” năm học 2020 - 2021',
    'Khoa CNTT tham quan doanh nghiệp tại FSoft - TP HCM',
    'Khoa Công nghệ thông tin tổ chức Talkshow “Kỹ năng giao tiếp hiệu quả trong doanh nghiệp công nghệ”',
    'KHỞI ĐỘNG _HỘI THI HỌC THUẬT - LẦN THỨ NHẤT_ KHOA CNTT',
    'Sinh viên ngành Công nghệ thông tin hào hứng với buổi báo cáo chuyên đề về _Định hướng đối với lập trình viên .NET_',
    'Workshop_ Làm chủ Frontend - ReactJS, sẵn sàng thực hiện dự án Website_'
]

var currentIndex = 0

function hideGallery(){
    gallery.classList.remove('show')
}

function showGallery() {
    if(currentIndex == 0) {
        prev.classList.add('hide')
    } else {
        prev.classList.remove('hide')
    }

    if(currentIndex == imgs.length - 1) {
        next.classList.add('hide')
    } else {
        next.classList.remove('hide')
    }

    galleryImg.src = imgs[currentIndex].src
    gallery.classList.add('show')
}

function nextImg (){
    if(currentIndex < imgs.length - 1) {
        currentIndex++
        showGallery()
    }
}

function prevImg (){
    if(currentIndex > 0) {
        currentIndex--
        showGallery()
    }
}

imgs.forEach(function(img,index) {
    img.addEventListener('click', function(){
        currentIndex = index
        showGallery()
    })
})

close.onclick = hideGallery

prev.onclick = prevImg

next.onclick = nextImg

document.addEventListener('keydown',(e)=> {
    if(e.keyCode ===27){
        hideGallery()
    } else if (e.keyCode ===37 || e.keyCode ===40) {
        prevImg()
    } else if (e.keyCode === 39 || e.keyCode ===38){
        nextImg()
    }
})