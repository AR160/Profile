var photo = document.getElementById('btn-photo');
var hidden = document.getElementById('hidden');
var frinds = document.getElementById('btn-frinds');
var hiddenFrinds = document.getElementById('hidden-frinds');

photo.addEventListener('click',function(){
    if (hidden.style.display === 'none') {
        hidden.style.display = 'block';
    }else{
        hidden.style.display = 'none';
    }
});
photo.addEventListener('click',function(){
    if (hidden.style.display === 'block') {
        hidden.style.display = 'block';
    }else{
        hidden.style.display = 'block';
    }
});
photo.addEventListener('click',function(){
    if (photo.style.borderBottom === 'none') {
        photo.style.borderBottom = '2px solid #000';
    }else{
        photo.style.borderBottom = 'none';
    }
});

frinds.addEventListener('click',function(){
    if (frinds.style.borderBottom === 'none') {
        frinds.style.borderBottom = '2px solid #000';
    }else{
        frinds.style.borderBottom = 'none';
    }
});
frinds.addEventListener('click',function(){
    if (hidden.style.display === 'block') {
        hidden.style.display = 'none';
    }else{
        hidden.style.display = 'none';
    }
});

frinds.addEventListener('click',function(){
    if (frinds.style.borderBottom === 'none') {
        photo.style.borderBottom = 'none';
    }else{
        photo.style.borderBottom = 'none';
    }
});
photo.addEventListener('click',function(){
    if (photo.style.borderBottom === 'none') {
        frinds.style.borderBottom = 'none';
    }else{
        frinds.style.borderBottom = 'none';
    }
});

if (hidden.style.display === 'block'){
    photo.style.borderBottom = '2px solid #000';
}else{
    photo.style.borderBottom = 'none';
}
frinds.addEventListener('click',function(){
    if (hiddenFrinds.style.display === 'none') {
        hiddenFrinds.style.display = 'block';
    }else{
        hiddenFrinds.style.display = 'none';
    }
});
photo.addEventListener('click',function(){
    if (hiddenFrinds.style.display === 'block') {
        hiddenFrinds.style.display = 'none';
    }else{
        hiddenFrinds.style.display = 'none';
    }
});
frinds.addEventListener('click',function(){
    if (hiddenFrinds.style.display === 'block') {
        hiddenFrinds.style.display = 'block';
    }else{
        hiddenFrinds.style.display = 'block';
    }
});