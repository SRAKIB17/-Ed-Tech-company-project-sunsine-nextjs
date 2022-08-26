// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const crypto = require('node:crypto')

export default async function handler(req, res) {

  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5xr8v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  await client.connect();
  const coursesCollection = client.db("CourseCollectionSunSine").collection('Courses')

  const { cat } = req.query
  const { show } = req.query;
  const { page } = req.query
  const prevSkip = eval((page - 1) * show);
  const nextLimit = eval(page * show)
  if (cat == "undefined" || !cat) {
    const db = await coursesCollection.find({}).skip(prevSkip).limit(nextLimit).toArray();
    const count = await coursesCollection.countDocuments({});
    res.status(200).json({ result: db, count: count })
  }
  else {
    const regExp = new RegExp(cat, 'i');
    const filter = { category: { $regex: regExp } }

    const db = await coursesCollection.find(filter).skip(prevSkip).limit(nextLimit).toArray();
    const count = await coursesCollection.countDocuments(filter);

    res.status(200).json({ result: db, count: count })
  }
}
