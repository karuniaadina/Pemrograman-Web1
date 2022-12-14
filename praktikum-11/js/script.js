document.querySelectorAll("a").forEach((a)=>{
    // Jika diklik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})
function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    // membuat pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan user == pilihan komputer (Draw)
    if(pilihanUser == pilihanKomputer){
        // alert("DRAW");
        setTimeout(()=>alert("DRAW"), 300);
    }

    // jika pilihan user menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        setTimeout(()=>alert("USER WIN"), 300);
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        setTimeout(()=>alert("USER WIN"), 300);
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        setTimeout(()=>alert("USER WIN"), 300);
    }

    // jika pilihan user kalah
    if(pilihanUser == "Rock" && pilihanKomputer == "Paper"){
        setTimeout(()=>alert("USER lOSE"), 300);
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Scissors"){
        setTimeout(()=>alert("USER lOSE"), 300);
    }else if(pilihanUser == "Scissor" && pilihanKomputer == "Rock"){
        setTimeout(()=>alert("USER lOSE"), 300);
    }
}