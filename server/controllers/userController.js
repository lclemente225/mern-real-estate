import asyncHandler from 'express-async-handler';
import prismadb from '../db.js';

const createUsers = asyncHandler(async (req, res) => {
    console.log("create a user");

    let {name, email, title, description} = req.body;
    const userExists =  await prismadb.user.findUnique({
            where:{
                email: email
            }
        }) 

    if(!userExists){
        const user = await  prismadb.user.create({
            data: req.body
        })

        return res.status(200).send({
            message: "User Registered successfully",
            user: user
        })
    }

    return res.status(201).send({
        message:"User already exists"
    })

})

export const bookVisit = asyncHandler(async (req, res) => {
    const {id} = req.params;
    const {email, date} = req.body;

    const alreadyBooked = await prismadb.user.findUnique({
        where:{email},
        select:{bookedVisits: true}
    })
    
    if(alreadyBooked.bookedVisits.some(visit => visit.id === id && visit.date === date) ){
        return res.status(400).json({
            message: "already booked by you"
        })
    }

    try{
        if(email && date){

            await prismadb.user.update({
                where: {
                        email
                        },
                data: {
                    bookedVisits: {
                                    push: {
                                            id,
                                            date
                                        }
                                }
                    }
            })
    
            return res.send({message: "visit booked successfully"})
        }
    }catch(error){
        throw new Error("unable to book visit", error)
    }
})
 
export const getAllBookings = asyncHandler(async (req, res) => {
    console.log("getting all bookings")
    const {email} = req.body;
    try{
        const bookings = await prismadb.user.findUnique({
            where: {email},
            select: {bookedVisits: true}
        })
        
        return res.send({
            message:"Successfully obtained all booking",
            bookings
        })
    }catch(error){
        throw new Error("can't get all bookings")
    }
})

export const cancelBookings = asyncHandler(async (req, res) => {
    const {email, date} = req.body;
    const {id} = req.params;

    try{
        const user = await prismadb.user.findUnique({
            where: {email: email},
            select: {bookedVisits: true}
        });

        const index = user.bookedVisits.findIndex((visit) => {
            return visit.id === id && visit.date === date
        })

        if(index === -1){
            res.status(404).json({
                message: "Booking not found"
            })
        } 
        console.log("index",index)
        if(email && date){
            user.bookedVisits.splice(index, 1);
            await prismadb.user.update({
                where: {email},
                data: {
                    bookedVisits: user.bookedVisits
                }
            })
            return res.json({
                message: "Visit cancelled successfully"
            })
        } 
         
            console.log("check visit in cancel",index)
    }catch(error){
        throw new Error("Unable to cancel", error)
    }
})

export default createUsers

