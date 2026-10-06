/* =========================================
   FORM PENDAFTARAN
========================================= */

const form =
    document.getElementById("formPendaftaran");

const nama =
    document.getElementById("nama");

const email =
    document.getElementById("email");

const password =
    document.getElementById("password");

const konfirmasi =
    document.getElementById("konfirmasi");

const setuju =
    document.getElementById("setuju");


/* =========================================
   SUBMIT FORM
========================================= */

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let valid = true;


    /* HAPUS ERROR LAMA */

    document
        .querySelectorAll(".error")
        .forEach(function(item) {

            item.textContent = "";

        });


    /* ===============================
       CEK NAMA
    =============================== */

    if (nama.value.trim() === "") {

        document.getElementById("errorNama")
            .textContent =
            "Nama lengkap wajib diisi.";

        valid = false;
    }


    /* ===============================
       CEK EMAIL
    =============================== */

    if (email.value.trim() === "") {

        document.getElementById("errorEmail")
            .textContent =
            "Email wajib diisi.";

        valid = false;

    } else if (!email.value.includes("@")) {

        document.getElementById("errorEmail")
            .textContent =
            "Masukkan email yang benar.";

        valid = false;
    }


    /* ===============================
       CEK PASSWORD
    =============================== */

    if (password.value.length < 8) {

        document.getElementById("errorPassword")
            .textContent =
            "Password minimal 8 karakter.";

        valid = false;
    }


    /* ===============================
       CEK KONFIRMASI
    =============================== */

    if (
        konfirmasi.value !==
        password.value
    ) {

        document.getElementById("errorKonfirmasi")
            .textContent =
            "Password tidak sama.";

        valid = false;
    }


    /* ===============================
       CEK EKSTRA
    =============================== */

    const pilihan =
        document.querySelectorAll(
            'input[name="ekstra"]:checked'
        );


    if (pilihan.length === 0) {

        document.getElementById("errorEkstra")
            .textContent =
            "Pilih minimal satu ekstrakurikuler.";

        valid = false;
    }


    /* ===============================
       CEK PERSETUJUAN
    =============================== */

    if (!setuju.checked) {

        document.getElementById("errorSetuju")
            .textContent =
            "Silakan centang persetujuan.";

        valid = false;
    }


    /* ===============================
       JIKA BERHASIL
    =============================== */

    if (valid) {

        let daftarEkstra = [];

        pilihan.forEach(function(item) {

            daftarEkstra.push(item.value);

        });


        alert(
            "Pendaftaran berhasil! 🎉\n\n" +

            "Nama: " +
            nama.value +

            "\nEmail: " +
            email.value +

            "\nEkstrakurikuler: " +
            daftarEkstra.join(", ")
        );


        form.reset();
    }

});


/* =========================================
   CHATBOX
========================================= */

const characterButton =
    document.getElementById(
        "characterButton"
    );

const chatbox =
    document.getElementById(
        "chatbox"
    );

const closeChat =
    document.getElementById(
        "closeChat"
    );


/* =========================================
   BUKA CHATBOX
========================================= */

characterButton.addEventListener(
    "click",
    function() {

        chatbox.classList.add("show");

    }
);


/* =========================================
   TUTUP CHATBOX
========================================= */

closeChat.addEventListener(
    "click",
    function() {

        chatbox.classList.remove("show");

    }
);


/* =========================================
   CHAT
========================================= */

const chatContent =
    document.getElementById(
        "chatContent"
    );

const chatInput =
    document.getElementById(
        "chatInput"
    );

const sendButton =
    document.getElementById(
        "sendButton"
    );


/* TAMBAH PESAN */

function tambahPesan(
    pesan,
    tipe
) {

    const div =
        document.createElement("div");


    if (tipe === "user") {

        div.className =
            "user-message";

    } else {

        div.className =
            "bot-message";

    }


    div.innerHTML = pesan;


    chatContent.appendChild(div);


    chatContent.scrollTop =
        chatContent.scrollHeight;
}


/* =========================================
   JAWABAN CHATBOT
========================================= */

function jawabanBot(
    pertanyaan
) {

    const text =
        pertanyaan.toLowerCase();


    let jawaban;


    /* PILIHAN EKSTRA */

    if (
        text.includes("ekstra") ||
        text.includes("pilihan")
    ) {

        jawaban =
            "Ada 14 ekstrakurikuler yang tersedia 😊<br><br>" +

            "🏕️ Pramuka<br>" +
            "🏀 Basket<br>" +
            "⚽ Futsal<br>" +
            "🏐 Voli<br>" +
            "🇮🇩 Paskibra<br>" +
            "🩺 PMR<br>" +
            "🌎 English Club<br>" +
            "💃 Seni Tari<br>" +
            "🎵 Seni Musik<br>" +
            "🎭 Teater<br>" +
            "📰 Jurnalistik<br>" +
            "💻 IT Club<br>" +
            "📖 Rohis<br>" +
            "🔬 KIR";

    }


    /* CARA MENDAFTAR */

    else if (
        text.includes("cara") ||
        text.includes("daftar")
    ) {

        jawaban =
            "Cara mendaftarnya mudah 😊<br><br>" +

            "1. Isi nama lengkap.<br>" +
            "2. Masukkan email.<br>" +
            "3. Buat password.<br>" +
            "4. Pilih ekstrakurikuler.<br>" +
            "5. Centang persetujuan.<br>" +
            "6. Klik Daftar Sekarang.";

    }


    /* LEBIH DARI SATU */

    else if (
        text.includes("lebih dari satu") ||
        text.includes("beberapa")
    ) {

        jawaban =
            "Tentu boleh 👍<br><br>" +

            "Kamu dapat memilih lebih dari satu ekstrakurikuler sesuai dengan minat dan bakatmu.";

    }


    /* HALO */

    else if (
        text.includes("halo") ||
        text.includes("hai")
    ) {

        jawaban =
            "Halo juga! 👋<br><br>" +

            "Ada yang ingin kamu tanyakan tentang pendaftaran ekstrakurikuler?";

    }


    /* JAWABAN DEFAULT */

    else {

        jawaban =
            "Maaf, saya belum memahami pertanyaan tersebut 😅<br><br>" +

            "Kamu bisa bertanya tentang pilihan ekstrakurikuler atau cara mendaftar.";

    }


    /* TAMPILKAN JAWABAN */

    setTimeout(
        function() {

            tambahPesan(
                jawaban,
                "bot"
            );

        },
        500
    );

}


/* =========================================
   KIRIM PESAN
========================================= */

function kirimPesan() {

    const pesan =
        chatInput.value.trim();


    if (pesan === "") {
        return;
    }


    /* PESAN USER */

    tambahPesan(
        pesan,
        "user"
    );


    /* KOSONGKAN INPUT */

    chatInput.value = "";


    /* JAWABAN BOT */

    jawabanBot(pesan);

}


/* TOMBOL KIRIM */

sendButton.addEventListener(
    "click",
    kirimPesan
);


/* TEKAN ENTER */

chatInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            kirimPesan();

        }

    }
);


/* =========================================
   TOMBOL PERTANYAAN CEPAT
========================================= */

const quickButtons =
    document.querySelectorAll(
        ".quick-menu button"
    );


quickButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                const pertanyaan =
                    this.dataset.question;


                tambahPesan(
                    pertanyaan,
                    "user"
                );


                jawabanBot(
                    pertanyaan
                );

            }
        );

    }
);