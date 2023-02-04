const ajv = new (require('ajv'))()
const validate = ajv.compile(require('./schema.json'))

let foundError = false
for (const item of require('./index.json')) {
  const valid = validate(item)
  if (!valid) {
    foundError = true
    console.error(item)
    console.error(validate.errors)
  }
}

process.exit(foundError ? 1 : 0)
