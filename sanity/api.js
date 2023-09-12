import client from "./sanity";

let sanityQuery = (query,params) => client.fetch(query,params);

export const getRestaurant =()=>{
 return sanityQuery(
    `
    *[_type == 'restaurant']{
        _id,
          name
          ,image,
          Logo,
          address,
          longitude,
          latitude,
          rating,
          Delivery
          ,dishes[]->{_id,name,image,description,price,
            type->{title},restaurant->{name,address,
              longitude,
              latitude}}
      }
    `
 )   
}