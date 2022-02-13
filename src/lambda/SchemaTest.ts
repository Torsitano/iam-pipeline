//import * as Ajv from 'ajv'
//import Ajv, {JTDDataType} from 'ajv/dist/jtd'
import Ajv from 'ajv'

//
import schema from '../CfnSpecifications/aws-iam-role.json'
import template from '../../test/test-template.json'

const ajv = new Ajv({ allErrors: true, strict: false })

//const schema = fs.readFileSync('src\\CfnSpecifications\\cfn-schema\\template-schema.json')
//type template = JTDDataType<typeof schema>
//const validate = ajv.compile<template>(schema)


const valid = ajv.validate(schema, template)

if (!valid) {
    console.log(ajv.errors)
} else {
    console.log(template)
}





// if (validate(template)) {
//     // data is MyData here
//     console.log(template)
//   } else {
//     console.log(validate.errors)
//   }


// if ( validate(template) ) {
//     console.log('valid data')
// }
// else {
//     console.log{'validate.errors'}
// }