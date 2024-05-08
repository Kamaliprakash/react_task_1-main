import React from 'react'
import Card from './components/card'


function App() {
  let data = [
    {
      plan:"BASIC PLAN",
      price:20,
      user:"Includes a breakfast health mix.",
      isUser:true,
      // storage:"5 GB",
      // isStorage:true,
      // publicProjects:"Unlimited Public Projects",
      // iIncludes a breakfast health mix.sPublicProjects:true,
      // communityAccess:"Community Access",
      // isCommunityAccess:true,
      // privateProjects:"Unlimited Private Projects",
      // isPrivateProjects:false,
      // phoneSupport:"Dedicated Phone Support",
      // isPhoneSupport:false,
      // subDomain:"Free Subdomain",
      // isSubDomain:false,
      // reports:"Monthly Status Reports",
      // isReports:false
    },
    {
      plan:"Advantage Plan",
      price:30,
      user:" Includes everything in the Basic plan",
      isUser:true,
      storage:"Adds protein biscuits.",
      isStorage:true,
      // publicProjects:"Unlimited Public Projects",
      // isPublicProjects:true,
      communityAccess:" Adds protein biscuits.",
      isCommunityAccess:true,
      // privateProjects:"Unlimited Private Projects",
      // isPrivateProjects:true,
      // phoneSupport:"Dedicated Phone Support",
      // isPhoneSupport:true,
      subDomain:"Offers free delivery.",
      isSubDomain:true,
      // reports:"Monthly Status Reports",
      // isReports:false
    },
    {
      plan:"Amaze Plan ",
      price:40,
      user:"Includes everything in the Advantage plan.",
      isUser:true,
      storage:"Adds a GYM membership.",
      isStorage:true,
      // publicProjects:"Unlimited Public Projects",
      // isPublicProjects:true,
      communityAccess:"Adds a GYM membership",
      isCommunityAccess:true,
      // privateProjects:"Unlimited Private Projects",
      // isPrivateProjects:true,
      // phoneSupport:"Dedicated Phone Support",
      // isPhoneSupport:true,
      subDomain:" Provides phone support",
      isSubDomain:true,
      // reports:"Monthly Status Reports",
      // isReports:true
    }
  ]
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
     {
      data.map((e,i)=>{
        return <Card data={e} key={i}/>
      })
     }
    </div>
  </div>
</section>
  </>
}
export default App