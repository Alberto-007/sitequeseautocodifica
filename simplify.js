const width = window.innerWidth
const height = window.innerHeight
var mouseX = 0
var mouseY = 0

const keychange = {
    "up": "ArrowUp",
    "down": "ArrowDown",
    "left": "ArrowLeft",
    "right": "ArrowRight",
    "tab": "Tab",
    "capslock": "CapsLock",
    "shift": "Shift",
    "control": "Control",
    "alt": "Alt",
    "space": " ",
    "enter": "Enter",
    "backspace": "Backspace",
    "numlock": "NumLock",
    "pageup": "PageUp",
    "pagedown": "PageDown",
    "end": "End",
    "home": "Home",
    "delete": "Delete",
    "insert": "Insert",
    "escape": "Escape",
    "f10": "F10",
    "f11": "F11",
    "f12": "F12",
}

const keys = {
    "ArrowUp": () => {},
    "ArrowDown": () => {},
    "ArrowLeft": () => {},
    "ArrowRight": () => {},
    "Tab": () => {},
    "CapsLock": () => {},
    "Shift": () => {},
    "Control": () => {},
    "Alt": () => {},
    " ": () => {},
    "Enter": () => {},
    "Backspace": () => {},
    "NumLock": () => {},
    "PageUp": () => {},
    "PageDown": () => {},
    "End": () => {},
    "Home": () => {},
    "Delete": () => {},
    "Insert": () => {},
    "Escape": () => {},
    "F10": () => {},
    "F11": () => {},
    "F12": () => {}
}

const keypressed = {
    "ArrowUp": false,
    "ArrowDown": false,
    "ArrowLeft": false,
    "ArrowRight": false,
    "Tab": false,
    "CapsLock": false,
    "Shift": false,
    "Control": false,
    "Alt": false,
    " ": false,
    "Enter": false,
    "Backspace": false,
    "NumLock": false,
    "PageUp": false,
    "PageDown": false,
    "End": false,
    "Home": false,
    "Delete": false,
    "Insert": false,
    "Escape": false,
    "F10": false,
    "F11": false,
    "F12": false
}

for (let i of Array.from("qwertyuiopasdfghjklzxcvbnm1234567890`~!@#$%^&*()_+-=[]{};\:|,./<>?")) {keychange[i] = i}
for (let i of Array.from("123456789")) {keychange["f" + i.toString()] = "F" + i.toString()}
for (let i of Array.from("qwertyuiopasdfghjklzxcvbnm1234567890`~!@#$%^&*()_+-=[]{};\:|,./<>?")) {keys[i] = () => {}}
for (let i of Array.from("123456789")) {keys["F" + i.toString()] = () => {}}
for (let i of Array.from("qwertyuiopasdfghjklzxcvbnm1234567890`~!@#$%^&*()_+-=[]{};\:|,./<>?")) {keypressed[i] = false}
for (let i of Array.from("123456789")) {keypressed["F" + i.toString()] = false}

document.addEventListener("keydown", function(e) {
    keys[e.key]()
    keypressed[e.key] = true
})

document.addEventListener("keyup", function(e) {keypressed[e.key] = false})

function isKeyDown(key) {return keypressed[keychange[key]]}

function keyPress(key, newfunction) {keys[keychange[key]] = newfunction}
function keyDown(key, newfunction) {setInterval(() => {if (isKeyDown(key)) {newfunction()}}, 1)}

mousemove = () => {}
document.addEventListener("mousemove", () => {
    mousemove()
    mouseX = event.clientX
    mouseY = event.clientY
})

mouseclick = () => {}
document.addEventListener("mousedown", () => {mouseclick()})

function mouseClick(newfunction) {mouseclick = newfunction}
function mouseMove(newfunction) {mousemove = newfunction}

elementFromId = (id) => {return document.getElementById(id)}
elementsFromClass = (class_) => {return document.getElementsByClassName(class_)}
querySelect = (query) => {return document.querySelectorAll(query)}
