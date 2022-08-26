// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// const services = [
//   {
//     title: "Mobile Platforms",
//     des: `We know this in our gut, but what can we do about it? How can we motivate ourselves? One of the most difficult aspects of achieving success.`,
//     bg: 'https://themes.potenzaglobalsolutions.com/html/hi-soft/images/feature-info/03.jpg',
//     icon: 'https://svg-pro.vercel.app/_next/static/media/Announcement.2bfa83c4.svg',
//     url: "mobile_platforms"
//   },
//   {
//     title: "Information Security",
//     des: `Do it today. Remind yourself of someone you know who died suddenly and the fact that there is no guarantee that tomorrow will come.`,
//     bg: 'https://themes.potenzaglobalsolutions.com/html/hi-soft/images/feature-info/01.jpg',
//     icon: 'https://svg-pro.vercel.app/_next/static/media/safe_password_protection_lock_sequrity.439b45d3.svg',
//     url: "information_security"
//   },
//   {
//     title: "Data Synchronization",
//     des: `Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately.`,
//     bg: 'https://themes.potenzaglobalsolutions.com/html/hi-soft/images/feature-info/02.jpg',
//     icon: 'https://svg-pro.vercel.app/_next/static/media/cloud-sync.bfc04cc5.svg',
//     url: "data_synchro"
//   },
//   {
//     title: "Content Management",
//     des: `There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight.`,
//     bg: 'https://themes.potenzaglobalsolutions.com/html/hi-soft/images/feature-info/06.jpg',
//     icon: 'https://svg-pro.vercel.app/_next/static/media/management_corporate_plan_planning_strategy_analysis_business.7ac252c0.svg',
//     url: "content_management"
//   },
//   {
//     title: "Process Automation",
//     des: `It must come from within as the natural product of your desire to achieve something and your belief that you are capable to succeed at your goal.`,
//     bg: 'https://themes.potenzaglobalsolutions.com/html/hi-soft/images/feature-info/06.jpg',
//     icon: 'https://svg-pro.vercel.app/_next/static/media/information_presentation_growth_infographic_chart_data_statistics.dd853a3a.svg',
//     url: "process_automation"
//   }
//   ,
//   {
//     title: "Event Processing",
//     des: `There is really no magic to it and it’s not reserved only for a select few people. As such, success really has nothing to do with luck,`,
//     bg: 'https://themes.potenzaglobalsolutions.com/html/hi-soft/images/feature-info/05.jpg',
//     icon: 'https://svg-pro.vercel.app/_next/static/media/planning_event_date_appointment_calendar.04dfa620.svg',
//     url: "event_processing"
//   }

// ]
export default async function handler(req, res) {

  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5xr8v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  await client.connect()
  const servicesCollection = client.db("ServicesCollectionSunSine").collection('services')
  const db = await servicesCollection.find({}).toArray()
  res.status(200).json(db)
}
