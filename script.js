let a = document.getElementById("king");
let b = document.getElementById("quoteDisplay");
let c = document.getElementById("quoteInput");
let d = document.getElementById("result");
let e = document.getElementById("submitBtn");
let f = document.getElementById("resetBtn");
let y = document.getElementById("spinner")
let z = document.getElementById("speedTypingTest");

function bot() {
    y.classList.toggle("d-none")
    z.classList.remove("d-none")
}
let uniqueId = null;

function timer() {
    let counter = 0;
    uniqueId = setInterval(function() {
        a.textContent = counter
        counter = counter + 1;
    }, 1000);
}

e.onclick = function() {
    let h = a.textContent
    if (b.textContent === c.value) {
        d.textContent = "You Typed in " + parseInt(h) + " seconds"
        clearInterval(uniqueId);
    } else if (c.value === "") {
        d.textContent = "Enter the text"
    } else {
        d.textContent = "You typed incorrect sentence"
    }
}


function reload() {

    let options = {
        method: "GET"
    };
    y.classList.toggle("d-none")
    z.classList.add("d-none")
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            let httpResponse = JSON.stringify(data);
            let obj = JSON.parse(httpResponse);
            b.textContent = obj.content;
            bot()
        });
    timer()

}
f.onclick = function() {

    clearInterval(uniqueId);
    reload()
    d.textContent = ""
    c.value = ""
};
reload()