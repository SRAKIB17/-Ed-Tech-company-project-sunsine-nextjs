// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const crypto = require('node:crypto')

export default async function handler(req, res) {

  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5xr8v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  await client.connect();
  const coursesCollection = client.db("CourseCollectionSunSine").collection('Courses')

  const getCourseId = async () => {
    const courseId = crypto.randomBytes(Math.ceil(9))
      .toString("hex")

    // (B1) GENERATE RANDOM SALT
    const checkCourseId = await coursesCollection.find(course => course?.course_id?.includes(courseId))
    console.log(checkCourseId)
    if (false) {
      return getCourseId()
    }
    else {
      return courseId;
    }
  }
  const aa = {
    name: 'Photography - Become a Better Photographer - Part I',
    price: '20.99',
    discount_price: '15.09',
    thumbnail: 'https://thumbs.dreamstime.com/z/photography-school-course-web-banner-landing-page-professional-photographer-teaching-kid-light-setting-photo-editing-203468098.jpg',
    rating: '5',
    time: '7 May, 2021',

    short_des: 'See results today! 50 photography tips for taking amazing photos with your DSLR, Mirrorless or compact camera.',
    des:
      `
    <ul>
         <li>✔️ To explain camera settings
         </li>
         <li>✔️ To demonstrate easy tips for getting sharp images

         </li>
         <li>✔️ To show how an understanding of light and composition is worth more to you than a whole bagful of camera accessories
         </li>
    </ul>

 `,
    content_publisher: 'Abdullah ',
    duration: '20h',
    category: 'Freelance',
    content_userID: '',
    demoVideo: ''
  }
  aa.course_id = await getCourseId();
  // console.log()
  // const body = req.body;
  // console.log(await coursesCollection.insertOne(aa))
  // const db = await coursesCollection.find({}).toArray()
  res.status(200).json("db")
}
