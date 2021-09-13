 'use strict;'
 
 const modal = document.querySelector('.modal');
 const overlay = document.querySelector('.overlay');
 const btnCloseModal = document.querySelector('.close-modal');
 const btnOpenModal = document.querySelectorAll('.btn');

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', openModal);
}

 btnCloseModal.addEventListener('click', closeModal);
 overlay.addEventListener('click', closeModal);
//  btnOpenModal.addEventListener('click', openModal);

//  window.addEventListener('keydown', function( e ) {
//      console.log(e.key);
//  })

 document.addEventListener('keydown', (e) => {
     console.log(e.key);
     if ( ( e.key === 'Escape' || e.key === 'Enter' ) && !modal.classList.contains('hidden') ) {
         closeModal();
     }
 });

