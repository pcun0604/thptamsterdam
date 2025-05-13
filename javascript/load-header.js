window.addEventListener('DOMContentLoaded', (event) => {
    // Tải phần header từ file header.html
    fetch('header.html')
        .then(response => response.text())  // Chuyển phản hồi thành văn bản
        .then(data => {
            // Chèn phần header vào mỗi trang HTML ở vị trí mong muốn
            document.querySelector('#header-container').innerHTML = data;
        })
        .catch(error => console.error('Có lỗi xảy ra khi tải header:', error));  // Xử lý lỗi nếu có
});
