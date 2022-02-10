const ios = document.getElementById('ios');
const android = document.getElementById('android')

ios.addEventListener('mouseenter',()=>{
    ios.classList.toggle('bg-dark');
    ios.classList.toggle('bg-blue')
})

ios.addEventListener('mouseout',()=>{
    ios.classList.toggle('bg-dark');
    ios.classList.toggle('bg-blue')
})

android.addEventListener('mouseenter',()=>{
    android.classList.toggle('bg-white');
    android.classList.toggle('bg-orange-light')
})

android.addEventListener('mouseout',()=>{
    android.classList.toggle('bg-white');
    android.classList.toggle('bg-orange-light')
})