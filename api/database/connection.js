import { MongoClient, ServerApiVersion } from 'mongodb'
import { loadEnv } from 'vite'
const env=loadEnv("development", process.cwd(), 'VITE')


const uri = `mongodb+srv://${env.ATLAS_USER}:${env.ATLAS_PASSWORD}@clusterauthenticacion.lobajpy.mongodb.net/`

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
    console.log('Error  coonect the database connection  ' + error.message)
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