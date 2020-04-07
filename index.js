const input = document.getElementById('input');

input.addEventListener('change', function (e) {
    const keyword = e.target.value;
    location.href = `https://www.google.com/search?q=${keyword}`
})