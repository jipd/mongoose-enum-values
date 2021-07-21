# mongoose-enum-values

Add a method to Mongoose model / schemas to retrieve enum values and the default value

## Installation
```
npm install @jipd/mongoose-enum-values -S
```
## Setup (globally)
```
import mongoose from 'mongoose'
import getEnumValues from '@jipd/mongoose-enum-values'

mongoose.plugin(getEnumValues)
```
### Setup (per schema)
```
import mongoose from 'mongoose'
import getEnumValues from '@jipd/mongoose-enum-values'

const { Schema } = mongoose
const MySchema = new Schema({ ... })
MySchema.plugin(getEnumValues)

export default MySchema
```
## Usage
```
import model from './models/example'

const enumValues = model.getEnumValues('status')

/*
enumValues = {
    values: ['one', 'two', 'three'],
    default: 'one'
}
*/

```
