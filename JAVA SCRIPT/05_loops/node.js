const fs=require('fs')
const read=fs.readFileSync('./05_loops/text1.txt','utf8')
fs.writeFileSync('./05_loops/text2.txt',read)