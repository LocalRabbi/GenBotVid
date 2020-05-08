const Discord = require('discord.js');
const { prefix , token, } = require('./config.json');
const { accounts1 , accounts2, accounts3, } = require('./accounts.json');
const client = new Discord.Client();
client.once('ready', () => {
    console.log("READY!")
    stock1 = accounts1.length
    stock2 = accounts2.length
    stock3 = accounts3.length
}) 

client.on("message", message => {
    console.log(message.content);
})

client.on("message", message => {
    if(message.content.startsWith(`${prefix}Acc1`)) {
        if(message.channel.type == "text") {

            let result1 = Math.floor((Math.random() * accounts1.length))

            message.author.send('Here is your account: \"' + accounts1[result1] + "\"")
            .catch()

        }
    }
    if(message.content.startsWith(`${prefix}Acc2`)) {
        if(message.channel.type == "text") {

            let result2 = Math.floor((Math.random() * accounts2.length))

            message.author.send('Here is your account: \"' + accounts2[result2] + "\"")
            .catch()

        }
    }
    if(message.content.startsWith(`${prefix}Acc3`)) {
        if(message.channel.type == "text") {

            let result3 = Math.floor((Math.random() * accounts3.length))

            message.author.send('Here is your account: \"' + accounts3[result3] + "\"")
            .catch()

        }
    }

    client.user.setActivity("Free Accounts");

    if(message.content.startsWith(`${prefix}Stock`)) {
        message.channel.send("The stock of Acc1 is " + stock1 + "\nThe stock of Acc2 is " + stock2 + "\nThe stock of Acc3 is " + stock3)
    }

})

client.login(token)