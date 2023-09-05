import {defineField, defineType} from 'sanity'

export default {
    name:"dish",
    title:"Dishes",
    type:'document',
    fields:[
        {       name: 'name',
                type: 'string',
                title: 'Name',
                validation: rule=> rule.required(),
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            
         },
         {
            name: 'image',
            type: 'image',
            title: 'Image of the Dish',
         },
         {
            name: 'type',
            title: 'Category',
            validation: rule=> rule.required(),
            type: 'reference',
            to: [{type: 'category'}]
          },
          {
            name: 'price',
            type: 'number',
            title: 'price',
            validation: rule=>rule.required().min(1)
          },
          {
            name: 'restaurant',
            type: 'reference',
            title: 'Restaurant',
            to: {type: 'restaurant'}
          }
              
    ]
}