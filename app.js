function toggleGmail(event) {
    event.preventDefault(); 
    const gmail = document.getElementById("gmail-address");
    gmail.style.display = gmail.style.display === "block" ? "none" : "block";
  }

 //about animation
 const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
      else {
        entry.target.classList.remove('visible'); // 👈 Çıkınca geri alıyoruz
      }
    });
  });

  const elements = document.querySelectorAll('#about');
  elements.forEach(el => observer.observe(el)); 

//projects animation
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });
  

  document.querySelectorAll('.card').forEach(el => obs.observe(el));

//dividers animation
const dividerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); 
      }
    });
  });
  
  document.querySelectorAll('#dividers li').forEach(el => dividerObserver.observe(el));
  
  const coverObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
  
      if (entry.isIntersecting) {
        el.classList.add('visible');
  
        
        el.style.animation = 'none';
        void el.offsetWidth; // from chatGPT
        el.style.animation = '';
      } else {
        el.classList.remove('visible');
      }
    });
  });
  
  const coverSection = document.querySelector('#cover');
  if (coverSection) {
    coverObserver.observe(coverSection);
  }
  