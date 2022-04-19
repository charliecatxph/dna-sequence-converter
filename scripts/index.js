document.getElementById("input_dna").addEventListener("input", (e) => {
    let temp = e.target.value;
    if (temp.match(/[^acgt-]/gi)) {
        document.getElementById("output_one").innerHTML = "Invalid Input!";
        document.getElementById("output_two").innerHTML = "Invalid Input!";
        document.getElementById("output_three").innerHTML = "Invalid Input!";
        document.getElementById("output_four").innerHTML = "Invalid Input!";
    } else {

    let dna_string = temp;
    let uppercaser = dna_string.toUpperCase();
    let splitted_dna = uppercaser.split("-");

    let replicated_arr = [];
    let replication_str = "";

    let transcripted_arr = [];
    let transcription_str = "";

    let translation_arr = [];
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

    function transcription(x) {
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
    }

    for (let x = 0; x < splitted_dna.length; x++) {
        for (let y = 0; y < splitted_dna[x].length; y++) {
            replication(splitted_dna[x][y]);
            transcription(splitted_dna[x][y]);
        }
        replication("-");
        transcription("-");
    }
    replication_str = replicated_arr.join("").slice(0, -1);

    transcription_str = transcripted_arr.join("").slice(0, -1);

    translation_arr = transcription_str.split("-");

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