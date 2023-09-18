import { MongoClient, ServerApiVersion } from 'mongodb'
import { config } from 'dotenv'

config()

const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.e7umrrf.mongodb.net/`

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export async function connect () {
  try {
    await client.connect()
    const database = client.db('platform_academic_campus')
    return database
  } catch (error) {
    console.log(error)
  }
}

export async function closeConnection () {
  try {
    await client.close()
    console.log('Database connection closed')
  } catch (error) {
    console.error('Error closing the database connection')
    console.error(error)
  }
}