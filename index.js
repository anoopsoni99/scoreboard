let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let count = 0
let gcount = 0
function one()
{
    count +=1
    homeEl.textContent = count
}
function two()
{
    count +=2
    homeEl.textContent = count
}
function three()
{
    count +=3
    homeEl.textContent = count
}
function gone()
{
    gcount +=1
    guestEl.textContent = gcount
}
function gtwo()
{
    gcount +=2
    guestEl.textContent = gcount
}
function gthree()
{
    gcount +=3
    guestEl.textContent = gcount
}

function reset()
{
    count = 0
    gcount = 0
    homeEl.textContent = 0
    guestEl.textContent = 0
}