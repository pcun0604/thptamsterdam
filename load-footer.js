window.addEventListener('DOMContentLoaded', (event) => {
    fetch('footer.html')
        .then(response => response.text())  
        .then(data => {
            document.querySelector('#footer-container').innerHTML = data;
        })
        .catch(error => console.error('Có lỗi xảy ra khi tải footer:', error));  
});