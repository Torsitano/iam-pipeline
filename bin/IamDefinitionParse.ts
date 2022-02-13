import * as fs from 'fs'

const iamDefinition: any = JSON.parse(fs.readFileSync('src/IamDefinitions/iam-definition.json', 'utf-8'))

const iamParsed: any = iamDefinition['iam']['privileges']

fs.writeFileSync('src/IamDefinitions/iam-priv-definition.json', JSON.stringify(iamParsed, null, 4) ,'utf-8')