const likeButtons = document.querySelectorAll(".x6s0dn4.x78zum5.xdt5ytf.xl56j7k");
const followButtons = document.querySelectorAll("._aacw._aad6");
const unfollowButtons = document.getElementsByClassName("_a9-_");
//Insta changes frequently for automation, so accordingly add the class name 

let index = 1;
const interval = setInterval(() => {
    if (index < followButtons.length || index < likeButtons.length) {
        likePost(index);
        followUser(index);
        confirmUnfollow();
        console.log(index);
        index++;
    } else {
        stopExecution();
    }
}, 420); // to bypass auto bot detection

function likePost(index) {
    if (likeButtons[index])
        likeButtons[index].click();

    setTimeout(() => {
        const cancelButton = document.querySelector("._a9_1");
        if (cancelButton) 
            cancelButton.click();
    }, 100);
}

function followUser(index) {
    if (followButtons[index]) {
        followButtons[index].click();
        console.log('Clicked follow button at index ${index}');
    } else {
        console.error('Follow button at index ${index} not found');
    }
}

function confirmUnfollow() {
    if (unfollowButtons.length > 0) {
        const nameElement = document.getElementsByClassName("x5n08af x2b8uid x1tu3fi ")[0];
        if (nameElement && nameElement.innerHTML !== "Unfollow @someOneGreat?") {
            index--;
            unfollowButtons[0].click();
            console.log("Clicked unfollow button.");
        }
    } else {
        console.warn("No unfollow buttons found.");
    }
}

function stopExecution() {
    clearInterval(interval);
    console.log("Execution stopped.");
}
