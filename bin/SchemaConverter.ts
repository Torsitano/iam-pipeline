import * as fs from 'fs'
import * as path from 'path'
import { compileFromFile } from 'json-schema-to-typescript'
//import * as ts from "typescript"

const srcfolder = path.resolve(__dirname, '../src/Schemas/ResourceSchemas')
const destfolder = path.resolve(__dirname, '../src/Schemas/Compiled')


const fileList = fs.readdirSync(srcfolder)

function getCompile(file: string) {
    return compileFromFile(`${srcfolder}/${file}`)
}


async function forLoop(fileList: string[]) {
    for (const file of fileList) {
        console.log(process.memoryUsage().heapUsed)

        try {
            let filename = file.slice(0, -5)
            const compiled = await getCompile(file)
            fs.writeFileSync(`${destfolder}/${filename}.d.ts`, compiled)
        } catch (error) {
            console.log(error)
            console.log(file)
        }
    }
}

forLoop(fileList)









// function compile(fileNames: string[], options: ts.CompilerOptions): void {
//   // Create a Program with an in-memory emit
//   const createdFiles = {}
//   const host = ts.createCompilerHost(options);
//   host.writeFile = (fileName: string, contents: string) => createdFiles[fileName] = contents
  
//   // Prepare and emit the d.ts files
//   const program = ts.createProgram(fileNames, options, host);
//   program.emit();

//   // Loop through all the input files
//   fileNames.forEach(file => {
//     console.log("### JavaScript\n")
//     console.log(host.readFile(file))

//     console.log("### Type Definition\n")
//     const dts = file.replace(".js", ".d.ts")
//     console.log(createdFiles[dts])
//   })
// }

// // Run the compiler
// compile(fileList, {
//   allowJs: true,
//   declaration: true,
//   emitDeclarationOnly: true,
// });

//const fileList = ['aws-lex-bot.json']


// async function getCompile(file: string, srcfolder: string, destfolder: string) {
//     console.log(process.memoryUsage().heapUsed)
//     let filename = file.slice(0, -5)
//     try {
//         const compiled = await compileFromFile(`${srcfolder}/${file}`)
//         fs.writeFileSync(`${destfolder}/${filename}.d.ts`, compiled)
//     } catch (error) {
//         console.log(error)
//         console.log(file)
//     }
//     return 
// }



// async function forLoop() {
//     console.log('Start')
//     const srcfolder = path.resolve(__dirname, '../src/Schemas/ResourceSchemas')
//     const destfolder = path.resolve(__dirname, '../src/Schemas/Compiled')
//     const fileList = fs.readdirSync(srcfolder)
//     console.log(fileList.length)

//     for (let file of fileList) {
        
//         await getCompile(file, srcfolder, destfolder)
//     }
//     console.log('end')
// }

// forLoop()

// ///////

// const srcfolder = path.resolve(__dirname, '../src/Schemas/ResourceSchemas')
// const destfolder = path.resolve(__dirname, '../src/Schemas/Compiled')
// const fileList = fs.readdirSync(srcfolder)

// function getCompile(file: string, srcfolder: string) {
//         return compileFromFile(`${srcfolder}/${file}`)
// }

// async function forLoop() {

//     for (let file of fileList) {
//         console.log(process.memoryUsage().heapUsed)

//         try {
//             let compiled = await getCompile(file, srcfolder)
//             let filename = file.slice(0, -5)
//             fs.writeFileSync(`${destfolder}/${filename}.d.ts`, compiled)
        
//         } catch (error) {
//             console.log(error)
//             console.log(file)
//         }
//     }

// }

// forLoop()
// ////////

// fileList.forEach( async file => {
//     var filename = file.slice(0, -5)
//     compileFromFile(`${srcfolder}/${file}`).then(ts => fs.writeFileSync(`${destfolder}/${filename}.d.ts`, ts))
// })




// const srcfolder: string = path.resolve(__dirname, '../src/Schemas/ResourceSchemas')
// const destfolder: string = path.resolve(__dirname, '../src/Schemas/Compiled')

// const fileList = fs.readdirSync(srcfolder)

// fileList.forEach(file => {

//     var filename = file.slice(0, -5)
//     compileFromFile(`${srcfolder}/${file}`)
//         .then(ts => fs.writeFileSync(`${destfolder}/${filename}`, ts))
    
//     console.log(file)
// })

// async function compileWrite(file: string) {
//     console.log(file)
//     var filename = file.slice(0, -5)
//     var compiled = await compileFromFile(`${srcfolder}/${file}`)
//     fs.writeFileSync(`${destfolder}/${filename}.d.ts`, compiled)

//     //    .then(ts => fs.writeFileSync(`${destfolder}/${filename}.d.ts`, ts))
// }


// fileList.forEach(file => {
//     compileWrite(file)
// });

// async function getCompile(file: string) {
//     const filename = file.slice(0, -5)
//     const schema = JSON.parse(fs.readFileSync(`${srcfolder}/${file}`, 'utf-8'))
//     await compile(schema, 'test').then(ts => fs.writeFileSync(`${destfolder}/${filename}.d.ts`, ts))
    
// }

// for (let file of fileList) {

//     console.log(file)
//     getCompile(file)
// }



    //fs.writeFileSync(`${destfolder}/${filename}.d.ts`, compiled)





    //compileWrite(file)

    // var filename = file.slice(0, -5)
    // fs.promises.writeFile( `${destfolder}/${filename}.d.ts` , compileFromFile(`${srcfolder}/${file}`))
    // var filename = file.slice(0, -5)
    // var compiled = compileFromFile(`${srcfolder}/${file}`)


    // fs.writeFileSync(`${destfolder}/${filename}`, compiled)




// compileFromFile('src\\IamDefinitions\\iam-priv-schema.json')
//     .then(ts => fs.writeFileSync('src\\CfnSpecifications\\Compiled\\iam-priv-definition.d.ts', ts))
