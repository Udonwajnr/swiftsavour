import {defineField, defineType} from 'sanity'

export default defineType({
    name:"restaurant",
    title:"Restaurant",
    type:"document",
    fields:[
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        {
            name: 'image',
            type: 'image',
            title: 'image of the restaurant',
         },
         {
            name: 'Logo',
            type: 'image',
            title: 'Logo of restaurant',
         },
         {
            name: 'address',
            type: 'string',
            title: 'Restaurant address',
            validation: rule=> rule.required(),
          },
         {
            name: 'latitude',
            type: 'number',
            title: 'latitude of the restaurant',
         },
         {
            name: 'longitude',
            type: 'number',
            title: 'longitude of the restaurant',
         },
          {
            name: 'rating',
            type: 'number',
            title: 'Enter a Rating number between 1 to 5',
            validation: rule=>rule.required().min(1).max(5).error('Please enter a value between 1 to 5')
          },
          {
            name: 'Phone',
            type: 'number',
            title: 'Phone Number',
         },
          {
            name: 'Delivery',
            type: 'string',
            title: 'Delivery Time',
         },
          {
            name: 'dishes',
            type: 'array',
            title: 'Dishes',
            weak:true,
            of: [{type: 'reference', to: [{type: 'dish'}]}],       
          }
    ]
})