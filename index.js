import installShopify from "./authen"

document.addEventListener("DOMContentLoaded", (req,res) => {
    let domainInput = document.getElementById("domain")
    let goButton = document.getElementById("go")
    
    goButton.onclick = () => {
        installShopify(domainInput.value)
    }
})