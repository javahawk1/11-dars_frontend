const socket = io("https://one1-dars-wkhy.onrender.com/")
const button = document.getElementById("button")
const input = document.getElementById("input")
const group = document.getElementById("group")
const group_btn = document.getElementById("group_btn")
const leave_gr_btn = document.getElementById("leave_gr_btn")
const root = document.getElementById("root")

const now = new Date();

socket.on("message", msg => {
    root.insertAdjacentHTML("beforeend", `
        <div style="border: 2px solid black; padding:5px; margin: 10px 0">
            <h1>text: ${msg.text}</h1>
            <p>from: ${msg.from}</p>
            <p>date: ${now.toLocaleString()}</p>
        </div>
    `)
})

button.addEventListener("click", () => {
    socket.emit("message", { text: input.value, group: group.value })
})

group_btn.addEventListener("click", () => {
    socket.emit("join-gr", group.value)
})

leave_gr_btn.addEventListener("click", () => {
    socket.emit("leave-gr", group.value)
})


