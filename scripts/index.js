window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementsByClassName("preloader")[0].style.transform = "translateY(-100vh)"
    setTimeout(() => {
        
    document.getElementsByClassName("preloader")[0].style.display = "none"
    }, 4000)
});


document.getElementById("input_dna").addEventListener("input", (e) => {
    let temp = e.target.value;
    if (temp.match(/[^\sacgt-]/gi)) {
        document.getElementById("output_one").innerHTML = `⛔ Invalid Character : "${temp.match(/[^\sacgt-]/gi)}"`;
        document.getElementById("output_two").innerHTML = `⛔ Invalid Character : "${temp.match(/[^\sacgt-]/gi)}"`;
        document.getElementById("output_three").innerHTML = `⛔ Invalid Character : "${temp.match(/[^\sacgt-]/gi)}"`;
        document.getElementById("output_four").innerHTML = `⛔ Invalid Character : "${temp.match(/[^\sacgt-]/gi)}"`;
    } else {
    let dna_string = temp; 
    let raw_dna_string = dna_string.replace(/[\s]/g, "");
    let raw_dna_string_spec = dna_string.replace(/[\s-]/g, "");
    let uppercaser = raw_dna_string.toUpperCase();
    let uppercaser_spec = raw_dna_string_spec.toUpperCase();
    let replicated_arr = [];
    let replication_str = "";

    let transcripted_arr = [];
    let transcription_str = "";
    let transcription_str_spec = "";

    let translation_arr;
    let translated_str = "";
    let translated_str_two = "";

    function replication(x) {  
        if (x === "A") {
            replicated_arr.push("T");
        } else if (x === "C") {
            replicated_arr.push("G");
        } else if (x === "T") {
            replicated_arr.push("A");
        } else if (x === "G") {
            replicated_arr.push("C");
        } else if (x === "-") {
            replicated_arr.push("-");
        }
    }

    function transcription(x, md) {
        if (md === 0) {
        if (x === "A") {
            transcripted_arr.push("U");
        } else if (x === "C") {
            transcripted_arr.push("G");
        } else if (x === "T") {
            transcripted_arr.push("A");
        } else if (x === "G") {
            transcripted_arr.push("C");
        } else if (x === "-") {
            transcripted_arr.push("-");
        }
    } else if (md === 1) {
        if (x === "A") {
            transcription_str_spec += "U";
        } else if (x === "C") {
            transcription_str_spec += "G";
        } else if (x === "T") {
            transcription_str_spec += "A";
        } else if (x === "G") {
            transcription_str_spec += "C";
        } else if (x === "-") {
            transcription_str_spec += "-";
        }
    }
    }

    for (let x = 0; x < uppercaser.length; x++) {
        replication(uppercaser[x]);
        transcription(uppercaser[x], 0);
        transcription(uppercaser_spec[x], 1);
    }

    translation_arr = transcription_str_spec.match(/\w{3}/g);
    try {
    translation_arr.map(x => {
        if (x === "UUU" || x === "UUC") {
            translated_str += "Phe-";
            translated_str_two += "Phenylalanine-";
        } else if (x === "UUA" || x === "UUG") {
            translated_str += "Leu-";
            translated_str_two += "Leucine-";
        } else if (x === "UCU" || x === "UCC" || x === "UCA" || x === "UCG") {
            translated_str += "Ser-";
            translated_str_two += "Serine-";
        } else if (x === "UAU" || x === "UAC") {
            translated_str += "Tyr-";
            translated_str_two += "Tyrosine-";
        } else if (x === "UAA" || x === "UAG" || x === "UGA") {
            translated_str += "Stop-";
            translated_str_two += "Termination-";
        } else if (x === "UGU" || x === "UGC") {
            translated_str += "Cys-";
            translated_str_two += "Cysteine-";
        } else if (x === "UGG") {
            translated_str += "Trp-";
            translated_str_two += "Tryptophan-";
        } else if (x === "CUU" || x === "CUC" || x === "CUA" || x === "CUG") {
            translated_str += "Leu-";
            translated_str_two += "Leucine-";
        } else if (x === "CCU" || x === "CCC" || x === "CCA" || x === "CCG") {
            translated_str += "Pro-";
            translated_str_two += "Proline-";
        } else if (x === "CAU" || x === "CAC") {
            translated_str += "His-";
            translated_str_two += "Histidine-";
        } else if (x === "CAA" || x === "CAG") {
            translated_str += "Gln-";
            translated_str_two += "Glutamine-";
        } else if (x === "CGG" || x === "CGA" || x === "CGC" || x === "CGU") {
            translated_str += "Arg-";
            translated_str_two += "Arginine-";
        } else if (x === "AUU" || x === "AUC" || x === "AUA") {
            translated_str += "Ile-";
            translated_str_two += "Isoleucine-";
        } else if (x === "AUG") {
            translated_str += "Met-";
            translated_str_two += "Methionine-";
        } else if (x === "ACU" || x === "ACC" || x === "ACA" || x === "ACG") {
            translated_str += "Thr-";
            translated_str_two += "Threonine-";
        } else if (x === "AAU" || x === "AAC") {
            translated_str += "Asn-";
            translated_str_two += "Asparagine-";
        } else if (x === "AAA" || x === "AAG") {
            translated_str += "Lys-";
            translated_str_two += "Lysine-";
        } else if (x === "AGU" || x === "AGC") {
            translated_str += "Ser-";
            translated_str_two += "Serine-";
        } else if (x === "AGA" || x === "AGG") {
            translated_str += "Arg-";
            translated_str_two += "Arginine-";
        } else if (x === "GUU" || x === "GUC" || x === "GUA" || x === "GUG") {
            translated_str += "Val-";
            translated_str_two += "Valine-";
        } else if (x === "GCU" || x === "GCC" || x === "GCA" || x === "GCG") {
            translated_str += "Ala-";
            translated_str_two += "Alanine-";
        } else if (x === "GAU" || x === "GAC") {
            translated_str += "Asp-";
            translated_str_two += "Aspartate-";
        } else if (x === "GAA" || x === "GAG") {
            translated_str += "Glu-";
            translated_str_two += "Glutamate-";
        } else if (x === "GGU" || x === "GGC" || x === "GGA" || x === "GGG") {
            translated_str += "Gly-";
            translated_str_two += "Glycine-";
        }
    })
    } catch(e) {

    }
    
    replication_str = replicated_arr.join("");
    transcription_str = transcripted_arr.join("");
    

    document.getElementById("output_one").innerHTML = replication_str;
    document.getElementById("output_two").innerHTML = transcription_str;
    document.getElementById("output_three").innerHTML = translated_str.slice(0, -1);
    document.getElementById("output_four").innerHTML = translated_str_two.slice(0, -1);
    }
})


document.getElementById("x-button").addEventListener("click", (e) => {
    document.getElementsByClassName("license")[0].classList.remove("show");
})

document.getElementById("mit-logo").addEventListener("click", (e) => {
    document.getElementsByClassName("license")[0].classList.add("show");
})


document.getElementsByClassName("mode")[0].addEventListener("click", (e) => {
    document.getElementsByClassName("announcement-bar")[0].style.background = "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)";
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    document.getElementsByTagName("body")[0].style.color = "black";
    document.getElementById("announcement").style.color = "white";
    document.getElementsByClassName("logo")[0].style.backgroundColor = "white";
    document.getElementsByClassName("logox")[0].style.color = "black";
    document.getElementsByClassName("mitlogocolor")[0].setAttribute("fill", "#000");
    document.getElementsByClassName("mode")[0].style.display = "none";
    document.getElementsByClassName("mode")[1].style.display = "block";
    document.getElementsByClassName("scode_a")[0].style.color = "black";
})

document.getElementsByClassName("mode")[1].addEventListener("click", (e) => {
    document.getElementsByClassName("announcement-bar")[0].style.background = "linear-gradient(to bottom, #111111, transparent)";
    document.getElementsByTagName("body")[0].style.backgroundColor = "#2d3436";
    document.getElementsByTagName("body")[0].style.color = "white";
    document.getElementById("announcement").style.color = "white";
    document.getElementsByClassName("logo")[0].style.backgroundColor = "#2d3436";
    document.getElementsByClassName("logox")[0].style.color = "white";
    document.getElementsByClassName("mitlogocolor")[0].setAttribute("fill", "#FFF");
    document.getElementsByClassName("mode")[0].style.display = "block";
    document.getElementsByClassName("mode")[1].style.display = "none";
    document.getElementsByClassName("scode_a")[0].style.color = "white";
})