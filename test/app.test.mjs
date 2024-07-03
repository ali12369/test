import { expect } from 'chai';
import { getGreeting, getFarewell, isPalindrome } from '../app.js';

describe('Greeting and Farewell Functions', () => {
    it('should return the correct greeting based on the time of day', () => {
        const morningGreeting = getGreeting(9);
        expect(morningGreeting.en).to.equal('Good morning!');
        expect(morningGreeting.fr).to.equal('Bonjour!');

        const afternoonGreeting = getGreeting(15); 
        expect(afternoonGreeting.en).to.equal('Good afternoon!');
        expect(afternoonGreeting.fr).to.equal('Bon après-midi!');

        const eveningGreeting = getGreeting(20); 
        expect(eveningGreeting.en).to.equal('Good evening!');
        expect(eveningGreeting.fr).to.equal('Bonsoir!');
    });

    it('should return the correct farewell based on the time of day', () => {
        const morningFarewell = getFarewell(9); 
        expect(morningFarewell.en).to.equal('Goodbye!');
        expect(morningFarewell.fr).to.equal('Au revoir!');

        const afternoonFarewell = getFarewell(15); 
        expect(afternoonFarewell.en).to.equal('Goodbye!');
        expect(afternoonFarewell.fr).to.equal('Au revoir!');

        const eveningFarewell = getFarewell(20); 
        expect(eveningFarewell.en).to.equal('Good night!');
        expect(eveningFarewell.fr).to.equal('Bonne nuit!');
    });
});

describe('Palindrome Function', () => {
    it('should return true for palindromes', () => {
        expect(isPalindrome('racecar')).to.be.true;
        expect(isPalindrome('madam')).to.be.true;
        expect(isPalindrome('A man, a plan, a canal, Panama')).to.be.true;
    });

    it('should return false for non-palindromes', () => {
        expect(isPalindrome('hello')).to.be.false;
        expect(isPalindrome('world')).to.be.false;
        expect(isPalindrome('OpenAI')).to.be.false;
    });
});
