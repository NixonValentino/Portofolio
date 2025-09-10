var typed = new Typed(".auto-type",
    {
        strings : ['連絡先' , 'Selamat Datang', 'こんにちは', '連絡先' , 'Selamat Datang', 'こんにちは', 'Contact Info'],
        typeSpeed : 150,
        backSpeed : 150,
        looped : true
    }
)

var typed = new Typed(".typing",
    {
        strings : ['Welcome !!!' , 'To' , 'My' , 'Portofolio'],
        typeSpeed : 150,
        backSpeed : 150,
        looped : true
    }
)


function slide() {
    const ini = document.querySelector(".navbar")
    ini.classList.toggle("slide")
}