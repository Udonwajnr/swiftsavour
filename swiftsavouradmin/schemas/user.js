import {defineField, defineType} from 'sanity'

export default {
    name:"user",
    title:"Users",
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
            type:'number',
        },
        {
            name:'email',
            title:"Email",
            type:'string',
            validation: rule=>rule.email()
        },

    ]
}