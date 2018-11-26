function chbckg(){
    let pDiv = document.getElementById('d1');
    pDiv.style.backgroundColor = 'black';
    pDiv.style.color = 'white';
    pDiv.style.textAlign = 'center';
}

let created = false;
const crP = () =>{
    if (created){
        console.log ('already done')
    }
    else{
        let p1 = document.getElementById('pDiv');
        let p=document.createElement('p');
        p.innerText = 'This is kinda fishy';
        p1.appendChild(p);
        created=true;
    }
}

const animP = () => {
    let paragraph = document.getElementById('pTwo');
    paragraph.classList.add('aClass');
}
