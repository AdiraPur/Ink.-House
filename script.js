document.addEventListener('DOMContentLoaded', function() {
    let country = "Франция";                      
    const buttons = document.querySelectorAll('.country');    
    const galleries = document.querySelectorAll('.pictures'); 

    for (let i = 0; i < galleries.length; i++) {  
        let gallery = galleries[i];               
        if (gallery.dataset.country == country) {
            gallery.style.display = "flex";       
        } else {
            gallery.style.display = "none";       
        }
    }
   
    for (let i = 0; i < buttons.length; i++) { 
        buttons[i].addEventListener('click', function() {
            if (!buttons[i].classList.contains("active")) {
                for (let i = 0; i < buttons.length; i++) {
                    let button = buttons[i];
                    button.classList.remove("active")
                }
                country = buttons[i].innerText;
                buttons[i].classList.add("active");

                for (let i = 0; i < galleries.length; i++) {  
                    let gallery = galleries[i];               
                    if (gallery.dataset.country == country) {
                        gallery.style.display = "flex";       
                    } else {
                        gallery.style.display = "none";       
                    }
                }
            }
        })
    }
});