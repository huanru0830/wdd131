// Character object
const character = {
    name: "Snortleblat",
    class: "Swamp Beat Diplomat",
    level: 5,
    health: 100,
    image: 'https://andejuli.github.io/img/snortleblat.png',
    attacked() {
        if (this.health >= 20) {
            this.level -= 1;
            this.health -= 20;
            return "Character was attacked!";
        } else {
            alert('Character Died');
            return "Character Died!";
        }
    },
    levelUp() {
        this.level += 1;
        this.health += 20;
        return "Level up!";
    }
};

// Render function
function renderCharacter(logMsg = "") {
    document.getElementById('image').src = character.image;
    document.getElementById('name').textContent = character.name;
    document.getElementById('class').textContent = character.class;
    document.getElementById('level').textContent = character.level;
    document.getElementById('health').textContent = character.health;
    document.getElementById('log').textContent = logMsg;
}

// DOM loaded: initial render & event listeners
window.onload = function() {
    renderCharacter();

    document.getElementById('attacked').onclick = function() {
        const msg = character.attacked();
        renderCharacter(msg);
    };
    document.getElementById('levelup').onclick = function() {
        const msg = character.levelUp();
        renderCharacter(msg);
    };
};
