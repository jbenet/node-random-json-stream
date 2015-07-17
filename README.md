# random-json-stream

This is a nodejs stream that outputs random json. Thanks to @ralphtheninja's [slump](//github.com/ralphtheninja/slump)

## Usage

```js
var rjs = require('random-json-stream')
var ndjson = require('ndjson')

rjs()
  .pipe(ndjson.stringify())
  .pipe(process.stdout)
```

Options:

- `count` - number of objects, 0 means infinity (default: 0)
- `objects` - whether to output objects or other things (default: false)
```js
var rjs = require('./')
var ndjson = require('ndjson')

rjs({ count: 10, objects: true })
  .pipe(ndjson.stringify())
  .pipe(process.stdout)
```


## Commandline

Works on the commandline, too! Thanks to @maxogden's [ndjson](//github.com/maxogden/ndjson).

```sh
> npm install -g random-json-stream
> random-json -h
random-json <options> - generate random json

Options:
  -h, --help     this help text
  -c, --count    count of json objects (0 = infinity)  [default: 0]
  -o, --objects  json objects only                     [default: false]
```

### Output 3 json objects:

```sh
> random-json -o -c 3
{"\u000bzۃ���A":-0.5168690651358595,"\u0000��[\u0017�ϳ�\u0011":795542121}
{"���":-1.2109458962934139,"�N[�\u00013̍\u0018":false,"Dʥ\ts(8�\u0005":{"~":{"�t�y�4�O\u0011\u001f":null,"��\b��c\u0013":0.2814008676018912},"G>J'C����l":false},"\u0010��9來":null,"�":1.2500814018104633,"+L�ш�����":-0.31865016626084536,"3�l��\u0016*":[true,true,false,null,false,true],"���\u001c�,�˦ԭ":null,"JҊ�;p":null}
{"�G�親�":-1267257782,"�":false,"H.f�[�":true,"`���R&":3680551801,"j�\t����":-1.6277292216680663,"\u0005� �>��\u000e\u001a7":1.1395421200213478}
```

Output infinite valid json elements:

```sh
random-json
```

### Useful for debugging parsers and codecs:

```sh
random-json | my-parser
random-json | json2cbor
random-json | json2cbor | cbor2json
random-json | json2xml
random-json | json2ubjson
```
