const setting = document.getElementById("setting")
const text = document.querySelector("p")
const resetBtn = document.getElementById("reset")
const body = document.querySelector("body")

setting.addEventListener("change",()=>{
    //บันทึกการตั้งค่าลงใน local storage
    localStorage.setItem("night-mode",setting.checked)
    loadTheme()
})

resetBtn.addEventListener("click",()=>{
    localStorage.clear()
    loadTheme()
})

function loadTheme(){
    //ดึงการตั้งค่า //string->boolean
    const status = JSON.parse(localStorage.getItem("night-mode"))
    setting.checked=status
    if(status){
        text.innerText="โหมดกลางคืน"
        body.style.backgroundColor="black"
        body.style.color="white"
        body.style.transition="1s"
    }else{
        text.innerText="โหมดกลางวัน"
        body.style.backgroundColor="white"
        body.style.color="black"
        body.style.transition="1s"
    }
}

loadTheme()