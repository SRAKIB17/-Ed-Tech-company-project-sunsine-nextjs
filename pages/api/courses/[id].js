// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const crypto = require('node:crypto')

export default async function handler(req, res) {

  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5xr8v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  await client.connect();
  const coursesCollection = client.db("CourseCollectionSunSine").collection('Courses')

  const { id } = req.query;
  const db = await coursesCollection.findOne({ course_id: id });
  res.status(200).json(db)
}
