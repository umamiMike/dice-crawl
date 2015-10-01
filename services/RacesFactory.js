diceCrawl.factory('RacesFactory', function RacesFactory(){
    var factory = {};
    factory.races = [

            { raceName: "Centaur",
                powerOne: { powerName: "Reinforcements", requirement: 2, diceOne: 1, diceTwo: 1 },
                powerTwo: { powerName: "Reinforcements", requirement: 1, diceThree: 2, diceFour: 2 },
                powerThree: { powerName: "Withdraw", requirement: null, diceFive: 6, diceSix: 6 } },
            { raceName: "Dwarf",
                powerOne: { powerName: "Reveal", requirement: 1, diceOne: 1, diceTwo: 1 },
                powerTwo: { powerName: "Swap", requirement: 2, diceThree: 2, diceFour: 2 },
                powerThree: { powerName: "Rotate", requirement: 1, diceFive: 6, diceSix: 6 } },
            { raceName: "Goblin",
                powerOne: { powerName: "Attack", requirement: 1, diceOne: 1, diceTwo: 1 },
                powerTwo: { powerName: "Hoarder", requirement: null, diceThree: 2, diceFour: 2 },
                powerThree: { powerName: "Withdraw", requirement: null, diceFive: 6, diceSix: 6 } },
            { raceName: "Halfling",
                powerOne: { powerName: "Scout", requirement: 1, diceOne: 1, diceTwo: 1 },
                powerTwo: { powerName: "Withdraw", requirement: 1, diceThree: 2, diceFour: 2 },
                powerThree: { powerName: "Hoarder", requirement: null, diceFive: 6, diceSix: 6 } },
            { raceName: "High Elf",
                powerOne: { powerName: "Scout", requirement: 1, diceOne: 1, diceTwo: 1 },
                powerTwo: { powerName: "Reveal", requirement: null, diceThree: 2, diceFour: 2 },
                powerThree: { powerName: "Rotate", requirement: null, diceFive: 6, diceSix: 6 } },
            { raceName: "Hobgoblin",
                powerOne: { powerName: "Garrison", requirement: 1, diceOne: 1, diceTwo: 1 },
                powerTwo: { powerName: "Attack", requirement: 2, diceThree: 2, diceFour: 2 },
                powerThree: { powerName: "Withdraw", requirement: 3, diceFive: 6, diceSix: 6 } },
            { raceName: "Human",
                powerOne: { powerName: "Withdraw", requirement: null, diceOne: 1, diceTwo: 1 },
                powerTwo: { powerName: "Garrison", requirement: 2, diceThree: 2, diceFour: 2 },
                powerThree: { powerName: "Roll +1", requirement: null, diceFive: 6, diceSix: 6 } },
            { raceName: "Kobold",
                powerOne: { powerName: "Attack", requirement: 1, diceOne: 1, diceTwo: 1 },
                powerTwo: { powerName: "Reinforcements", requirement: 2, diceThree: 2, diceFour: 2 },
                powerThree: { powerName: "Scout", requirement: 3, diceFive: 6, diceSix: 6 } },
            { raceName: "Lizardman",
                powerOne: { powerName: "Scout", requirement: 1, diceOne: 1, diceTwo: 1 },
                powerTwo: { powerName: "Attack", requirement: 2, diceThree: 2, diceFour: 2 },
                powerThree: { powerName: "Garrison", requirement: 1, diceFive: 6, diceSix: 6 } },
            { raceName: "Orc",
                powerOne: { powerName: "Attack", requirement: 1, diceOne: 1, diceTwo: 1 },
                powerTwo: { powerName: "Attack", requirement: 2, diceThree: 2, diceFour: 2 },
                powerThree: { powerName: "Rotate", requirement: 3, diceFive: 6, diceSix: 6 } },
            { raceName: "Troll",
                powerOne: { powerName: "Attack", requirement: 1, diceOne: 1, diceTwo: 1 },
                powerTwo: { powerName: "Attack", requirement: 1, diceThree: 2, diceFour: 2 },
                powerThree: { powerName: "Attack", requirement: 1, diceFive: 6, diceSix: 6 } },
            { raceName: "Werewolf",
                powerOne: { powerName: "Roll +1", requirement: null, diceOne: 1, diceTwo: 1 },
                powerTwo: { powerName: "Attack", requirement: 2, diceThree: 2, diceFour: 2 },
                powerThree: { powerName: "Shapechange", requirement: 6, diceFive: 6, diceSix: 6 } }
        ];

    return factory;
});