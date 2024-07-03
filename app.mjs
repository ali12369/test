import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const getGreeting = (hour = new Date().getHours()) => {
    if (hour < 12) {
        return { en: "Good morning!", fr: "Bonjour!" };
    } else if (hour < 18) {
        return { en: "Good afternoon!", fr: "Bon après-midi!" };
    } else {
        return { en: "Good evening!", fr: "Bonsoir!" };
    }
};

export const getFarewell = (hour = new Date().getHours()) => {
    if (hour < 12) {
        return { en: "Goodbye!", fr: "Au revoir!" };
    } else if (hour < 18) {
        return { en: "Goodbye!", fr: "Au revoir!" };
    } else {
        return { en: "Good night!", fr: "Bonne nuit!" };
    }
};

export const isPalindrome = (str) => {
    const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
};

const greet = getGreeting();
console.log(`${greet.en} / ${greet.fr}`);

rl.on('line', (input) => {
    if (input.toLowerCase() === 'exit') {
        const farewell = getFarewell();
        console.log(`${farewell.en} / ${farewell.fr}`);
        rl.close();
    } else {
        console.log(input.split('').reverse().join(''));
        if (isPalindrome(input)) {
            console.log('Well said! / Bien dit!');
        }
    }
});
