const labels = document.querySelectorAll('.form-control label');
labels.forEach(label=>{
  label.innerHTML = label.innerText
  .split('')
  .map((c,idx) => `<span style="transition-delay:${idx*50}ms"> 
  ${c}</span>`)
  .join('')
});