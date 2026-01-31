const answer_call = document.getElementById("answer_call");
const end_call = document.getElementById("end_call");
const audio = document.getElementById("ringtone");
let click_count = 0;
let scale = 1;

document.addEventListener("mousedown", () => {
    audio.play();
}, { once: true });

document.addEventListener("touchstart", () => {
    audio.play();
}, { once: true });

end_call.addEventListener("click", () => {
    click_count++;

    if(click_count === 3) {
        end_call.remove();
    } else {
        scale = scale *= 1.5;
        answer_call.style.transform = `scale(${scale})`;
    }
});
