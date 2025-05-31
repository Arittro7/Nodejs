// console.log(process.argv);
const path = require('path')  // imp: required to work with file paths
const fs = require('fs') // imp: required to append data to the file

const inputArguments = process.argv.slice(2)

const text = inputArguments.join(' ').concat("\n")

const timeStamp = new Date().toISOString()
// console.log(timeStamp);

const message = `${text} ${timeStamp} \n`
  // ! to get all words as a single string
if(!message){              //! if user didn't provide any input (error)
  console.log('❌ Please provide a message to log');
  console.log("Example: node index.js 'your message here'");
  process.exit(1) //! exit the process with an error code
}

// save the text to a file
const filePath = path.join(__dirname, "log.txt") 
// note: it's important to console the filePath to make sure the file is linked correctly 
fs.appendFile(filePath, message, {encoding: 'utf-8'}, () =>{

  console.log("Your message has been Logged successfully!");
} )

console.log(filePath);