// import React from 'react'
// import PlaceCardItem from './PlaceCardItem'

// function PlacesToVisit({trip}) {
//   return (
//     <div>
//         <h2 className='font-bold text-xl'>Places to Visit</h2>
//         <div>
//             {trip.tripData?.itinerary.map((item,index)=>(
//                 <>
//                 <div className='mt-5'>
//                     <h2 className='font-bold text-lg'>{item.day}</h2>
//                     <div className='grid md:grid-cols-2 gap-5'>
//                     {item.plan.map((place, index)=> (
//                         <>
//                         <div className='my-2'>
//                             <h2 className='font-medium text-sm text-orange-600'>{place.time}</h2>
//                             <PlaceCardItem place={place}/>
//                         </div>
//                         </>
//                     ))}
//                     </div>
//                     </div>
//                 </>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default PlacesToVisit

import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  // Ensure itinerary is always treated as an array
  const itinerary = Array.isArray(trip?.tripData?.itinerary) ? trip.tripData.itinerary : [];

  return (
    <div>
      <h2 className="font-bold text-xl">Places to Visit</h2>
      <div>
        {itinerary.map((item, index) => (
          <div className="mt-5" key={index}>
            <h2 className="font-bold text-lg">{item.day}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {item.plan.map((place, placeIndex) => (
                <div className="my-2" key={placeIndex}>
                  <h2 className="font-medium text-sm text-orange-600">{place.time}</h2>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
