import { RuleTester } from 'eslint';
import rule from '../../../lib/rules/with-file-header';
import fs from 'fs';
import path from 'path';

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 9
  }
})

const validCode = fs.readFileSync(path.join(__dirname, '../../../../src/__test__/sample/valid/with-file-header.ts'), { encoding: 'utf8' })
const invalidCode = fs.readFileSync(path.join(__dirname, '../../../../src/__test__/sample/invalid/with-file-header.ts'), { encoding: 'utf8' })

ruleTester.run('test with-file-header', rule, {
  valid: [validCode],
  invalid: [
    {
      code: invalidCode,
      errors: [{
        message: 'needs to add file header'
      }]
    }
  ]
})
