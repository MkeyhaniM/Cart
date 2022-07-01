let GetToBuy = document.getElementById("takeFirstLestName")
let fButtons = false;
let result = random(["موجود هست", "موجود نیس", "موجود هست"])
let table;
let num = 0;
let text = 'موجود نیس';
let number = 0;
let tbodyTableListBuy = document.getElementById("tbodyTableListBuy")
let name = [
    [
        "سامسونگ A53",
        `<input type='text' className='countContact' value='1'>`,
        random(["موجود هست", "موجود نیس", "موجود هست"]),
        `<button class="btn btn-primary">افزودن به سبد</button>`,
        60000
    ],
    [
        "سامسونگ A73",
        `<input type='text' className='countContact' value='1'>`,
        random(["موجود هست", "موجود نیس", "موجود هست"]),
        `<button class="btn btn-primary">افزودن به سبد</button>`,
        40000
    ],
    [
        "سامسونگ A32",
        `<input type='text' className='countContact' value='1'>`,
        random(["موجود هست", "موجود نیس", "موجود هست"]),
        `<button class="btn btn-primary">افزودن به سبد</button>`,
        24000
    ],
    [
        "سامسونگ A40",
        `<input type='text' className='countContact' value='1'>`,
        random(["موجود هست", "موجود نیس", "موجود هست"]),
        `<button class="btn btn-primary">افزودن به سبد</button>`,
        31000
    ],
    [
        "سامسونگ c5000",
        `<input type='text' className='countContact' value='1'>`,
        random(["موجود هست", "موجود نیس", "موجود هست"]),
        `<button class="btn btn-primary">افزودن به سبد</button>`,
        8000
    ],
    [
        "سامسونگ A53",
        `<input type='text' className='countContact' value='1'>`,
        random(["موجود هست", "موجود نیس", "موجود هست"]),
        `<button class="btn btn-primary">افزودن به سبد</button>`,
        7100
    ],
    [
        "سامسونگ S3Note",
        `<input type='text' className='countContact' value='1'>`,
        random(["موجود هست", "موجود نیس", "موجود هست"]),
        `<button class="btn btn-primary">افزودن به سبد</button>`,
        40000
    ],
    [
        "سامسونگ S2",
        `<input type='text' className='countContact' value='1'>`,
        random(["موجود هست", "موجود نیس", "موجود هست"]),
        `<button class="btn btn-primary">افزودن به سبد</button>`,
        24000
    ],
    [
        "سامسونگ M41",
        `<input type='text' className='countContact' value='1'>`,
        random(["موجود هست", "موجود نیس", "موجود هست"]),
        `<button class="btn btn-primary">افزودن به سبد</button>`,
        31000
    ],
    [
        "سامسونگ c9000",
        `<input type='text' className='countContact' value='1'>`,
        random(["موجود هست", "موجود نیس", "موجود هست"]),
        `<button class="btn btn-primary">افزودن به سبد</button>`,
        8000
    ],
    [
        "هواوی 32Wt",
        `<input type='text' className='countContact' value='1'>`,
        random(["موجود هست", "موجود نیس", "موجود هست"]),
        `<button class="btn btn-primary">افزودن به سبد</button>`,
        60000
    ],
    [
        "هواوی 16Q",
        `<input type='text' className='countContact' value='1'>`,
        random(["موجود هست", "موجود نیس", "موجود هست"]),
        `<button class="btn btn-primary">افزودن به سبد</button>`,
        40000
    ],
    [
        "هواوی 42GD",
        `<input type='text' className='countContact' value='1'>`,
        random(["موجود هست", "موجود نیس", "موجود هست"]),
        `<button class="btn btn-primary">افزودن به سبد</button>`,
        24000
    ],
    [
        "هواوی 512",
        `<input type='text' className='countContact' value='1'>`,
        random(["موجود هست", "موجود نیس", "موجود هست"]),
        `<button class="btn btn-primary">افزودن به سبد</button>`,
        4400
    ],
    [
        "هواوی 5q2",
        `<input type='text' className='countContact' value='1'>`,
        random(["موجود هست", "موجود نیس", "موجود هست"]),
        `<button class="btn btn-primary">افزودن به سبد</button>`,
        1000
    ],
    [
        "هواوی hhx",
        `<input type='text' className='countContact' value='1'>`,
        random(["موجود هست", "موجود نیس", "موجود هست"]),
        `<button class="btn btn-primary">افزودن به سبد</button>`,
        7100
    ],
    [
        "هواوی Note",
        `<input type='text' className='countContact' value='1'>`,
        random(["موجود هست", "موجود نیس", "موجود هست"]),
        `<button class="btn btn-primary">افزودن به سبد</button>`,
        7100
    ],
    [
        "هواوی M41",
        `<input type='text' className='countContact' value='1'>`,
        random(["موجود هست", "موجود نیس", "موجود هست"]),
        `<button class="btn btn-primary">افزودن به سبد</button>`,
        31000
    ],
    [
        "هواوی c9000",
        `<input type='text' className='countContact' value='1'>`,
        random(["موجود هست", "موجود نیس", "موجود هست"]),
        `<button class="btn btn-primary">افزودن به سبد</button>`,
        8000
    ]
]
let tbody = `<tr>`;
let check = false;
console.log(name[4][0])

document.getElementById("btn2").addEventListener("click", ev => {
    let fullName = GetToBuy.value;
    if (fullName != "") {
        document.getElementById("border").style.display = "none";
        document.getElementById("getdiscription").style.display = "block";
        RRR();
    } else {
        alert("لطفا نام خود را وارد کنید داخل کارد")
    }
})

function random(e) {
    let rad = Math.floor(Math.random(e) * e.length);
    return e[rad];
}

function RRR() {
    for (let j = 0; j < name.length; j++) {
        table = `<tr>`
        num++
        for (let i = -1; i <= name[num].length; i++) {
            let inthe = name[num][i];
            if (i == -1) {
                table += `<td class=" textTable count${i}" style=" text-align: right ">${num}</td>`
            } else {
                if (inthe !== undefined) {
                    table += `<td class=" textTable count${i}" style=" text-align: right ">${inthe}</td>`
                } else {
                    continue;
                }
            }
        }
        table += `</tr>`;
        document.getElementById('theadTable').innerHTML += table;
        nextCount();
    }
}

function nextCount() {
    let typeBeOrNotBe = document.querySelectorAll(".count2")
    if (typeBeOrNotBe.length > 1) {
        click(typeBeOrNotBe[++number])
    } else {
        if (typeBeOrNotBe[0].innerText === text) {
            let pe = typeBeOrNotBe[0].parentElement.children[4].firstChild
            pe.textContent = "مقدور نیس"
            pe.classList.remove("btn-primary")
            pe.classList.add("btn-danger")
            pe.classList.add("disabled")
        }
    }
}

function click(e) {
    let getParentsButton = e.parentElement.children[4].firstChild
    if (e.textContent === text) {
        getParentsButton.textContent = "مقدور نیس";
        getParentsButton.classList.remove("btn-primary")
        getParentsButton.classList.add("btn-danger")
        getParentsButton.classList.add("disabled")
        fButtons = document.getElementsByClassName("btn")
    }
    if (fButtons.length >= 19) {
        funcitonalButtons()
    }

}

function funcitonalButtons() {
    for (let i = 0; i < fButtons.length; i++) {
        if (!fButtons[i].className.includes("disabled")) {
            fButtons[i].addEventListener("click", ee => {
                let parentButtons = fButtons[i].parentElement.parentElement
                if (document.getElementById("tbodyTableListBuy").children) {
                    sendInformation(parentButtons, ee)
                }
            })
        }
    }
}

let jt = document.querySelector(".checkContent")

function sendInformation(e, t) {

    t.target.classList.remove("btn-primary")
    t.target.classList.add("btn-success")
    t.target.classList.add("choose")
    t.target.textContent = "به سبد اضافه شد"

    let child = e.children;
    let p;
    if (!check) {
        for (let i = 0; i < child.length; i++) {
            if (i === 1) {
                tbody += `<th>${i}</th>`;
            }
            if (i === 2) {
                tbody += `<th class="checkContent">${child[1].textContent}</th>`;
            }
            if (i === 3) {
                p = sclePrice();
                tbody += `<th class="points">${p}</th>`;
            }
            if (i === 4) {
                let date = new Date();
                let now;
                now = date.getFullYear() + "/"
                now += date.getMonth() + "/";
                now += date.getDay() + "  ,  ";
                now += date.getHours() + ":";
                now += date.getMinutes();
                tbody += `<th class="dateTh">${now}</th>`;
            }
            if (i === 5) {
                tbody += `<th></th>`;
                listPrice(p, child[5])
            }
        }
        tbodyTableListBuy.innerHTML += tbody;
        // tbody = "";
        check = true;
    } else {
        console.log(jt)
        // let checked = tbodyTableListBuy.children[0].children[1]
        // for (let i = 0; i < jt.length; i++) {
        //     for (let j = 0; j < name.length; j++) {
        //         if (name[j][0] == jt[j]) {
        //             console.log("hello")
        //         }
        //     }
        // }
    }
}

function sclePrice() {
    let point = Math.floor(Math.random() * 50)
    return "% " + point
}

function listPrice(pointMines, price) {
    let Mines = Number(pointMines.substr(1, 3))
    let p = Number(price.innerText);
    let result = p * Mines;
}