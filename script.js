let $ = document
let body = $.body
let head =  $.getElementById('heading')
let ascii =  $.getElementById('ascii')
let ascii_code = $.getElementById('keyCode')
let infosDiv =  $.getElementById('infos')
let event_key =  $.getElementById('key')
let event_location =  $.getElementById('location')
let event_which =  $.getElementById('which')
let event_code =  $.getElementById('code')
let starter =  $.getElementById('starter')

body.addEventListener('keydown' , function (event){
    event.preventDefault()
    ascii_code.innerHTML = event.which
    event_key.innerHTML = event.key
    event_location.innerHTML = event.location
    event_which.innerHTML = event.which
    event_code.innerHTML = event.code
    starter.style.display = 'none'
    head.style.display = 'flex'    
    ascii.style.display = 'flex'
    infosDiv.style.display = 'flex'
})