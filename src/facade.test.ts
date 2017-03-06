import test from 'ava'
import { Facade } from './facade';

const packpath = require('packpath')

// test(_ => {
//   const tsconfig = require('../../fixture/tsconfig.json')
//
//   const rootRelativePath = './fixture/using-injectable-but-no-import/01.ts'
//   const facade           = new Facade(rootRelativePath, tsconfig, packpath.self())
//
//   const result = facade.run()
//   console.log(result);
// })

test(t => {
  const tsconfig = require('../../fixture/tsconfig.json')

  const rootRelativePath = './fixture/using-injectable-and-import/01.ts'
  const facade           = new Facade(rootRelativePath, tsconfig, packpath.self())

  const result = facade.run().split('\n').filter(v => !!v)
  const expected = [
    'AService',
    '└── BService',
  ]

  t.deepEqual(result, expected)
})