import {defineField, defineType} from 'sanity'

export default {
    name:"order",
    title:"Orders",
    type:"document",
    fields:[
      {
        name:'fullName',
        title:"FullName",
        type:'string',
        validation:rule=>rule.required().min(3).max(40),
    },
    {
        name:'location',
        title:"Location",
        type:'string',
    },
    {
        name:'phone',
        title:"Phone Number",
        type:'string',
    },
    {
        name:'email',
        title:"Email",
        type:'string',
        validation: rule=>rule.email()
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Ordered Dishes',    
      of: [{type: 'string'}] 
    },
    {
        name: 'status',
        type: 'boolean',
        title: 'payment Status',
      },
    ]
}