(() => {
    const isOpen = document.getElementById('open-status');

    function getTime() {
        if(isOpen){
            const date = new Date();
            const time = parseInt(
                    date.toLocaleTimeString('en-GB', 
                    {
                        timeZone: 'Europe/London', 
                        hour12: false, 
                        hour: '2-digit'
                    })
                );
            if(time >= 9 && time < 17){
                isOpen.innerHTML = "We're Open";
            } else {
                isOpen.innerHTML = "We're Closed";
            }  
        }
    }

    getTime();
    setInterval(getTime, 1000);
})();
