// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

window.addEventListener('load', pageLoaded)

function pageLoaded() {

    document.addEventListener('click', (e) => {
        const targetElement = e.target;
    })


    const fileInputs = document.querySelectorAll('[data-upload-input]')


    fileInputs.forEach(item => {
        item.addEventListener('change', (e) => {
            uploadingFile(item)
        })
    });


    function uploadingFile(item) {
        const files = item.files

        const formPreview = item.closest('[data-upload]').querySelector('[data-upload-content]')

        for (let index = 0; index < files.length; index++) {
                const file = files[index];
                const reader = new FileReader();

                reader.onload = function (e) {
                    formPreview.innerHTML +=
                    `
                    <div class="form-preview__item">
                        <img src="${e.target.result}" alt="">
                        <span>${file.name}</span>
                    </div>
                    `
                }

                reader.readAsDataURL(file)
            }
    }



}