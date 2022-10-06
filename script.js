    const deg = 6;
    const hr =  document.querySelector('#hour');
    const mn = document.querySelector('#min'); 
    const sc =  document.querySelector('#sec');

  setInterval(() => {
    let time = new Date()
    let hour = time.getHours()*30;
    let  min = time.getMinutes() * deg;
    let sec = time.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hour) + (min/12)}deg)`;
    mn.style.transform = `rotateZ(${min}deg)`;
    sc.style.transform = `rotateZ(${sec}deg)`;
     });



