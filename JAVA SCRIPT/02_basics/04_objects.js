/*
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

*/

const obj=new Object()
// const obj={} //same thing

obj.name="ram"
obj.salary=15000
obj.isActive=false

// console.log(obj)

const user={
     name:{
         fname:"Premansu",
         lname:"Chakraborty"
     },
     sal:40000,
     id:{
        email:{
            firstEmail:"odn@gamil.com",
            backEmail:"ijb@gmail.com"
        },
        pass:{
             main:"156146888",
             backup:"8654894465"
        }
     }

}

// console.log(user)
// console.log(user["name"]["fname"])
// console.log(user.id.email.backEmail)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3)
// const obj3= Object.assign({},obj1, obj2, obj4)
// console.log(obj3)
const obj3={...obj1,...obj2,...obj4}
// console.log(obj3)


//object with array

let arr=[
    {
        id:546,
        pass:464664
    },
    {
        id:7206,
        pass:7596364
    },
    {
        id:78596,
        pass:745558856
    },
    {
        id:778946,
        pass:402664664
    }
]

// console.log(arr)
// console.log(arr[1])
// console.log(arr[2].id)


// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

//object destructuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor);