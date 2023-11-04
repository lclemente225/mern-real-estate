import asyncHandler from 'express-async-handler';
import prismadb from '../db.js';

const createResidency = asyncHandler(async (req, res) => {
    const {
            title, 
            description, 
            price, 
            address, 
            country, 
            city, 
            facilities, 
            image, 
            userEmail
            } = req.body;
    
        const searchAddress = await prismadb.residency.findMany({
            where: {
                address
            },
            select:{
                address: true
            }
        }); 
        
        const existingAddress = searchAddress[0]["address"];
        
        if(existingAddress){
            console.log("Address already registered")
            return res.status(500).send({message: "address already registered"})
        }

    try{

        const residency = await prismadb.residency.create({
            data: {
                    title, 
                    description, 
                    price, 
                    address,  
                    country, 
                    city,  
                    facilities, 
                    image,
                    owner: {connect: {email: userEmail}}
                }
        });
        return res.send({
            message: "residency created successfully",
            residency
        }) 

    }catch(error){
        if(error.code === "P2002"){
            throw new Error("A residency has its address there")
        }
        if(error.code == "P2025"){
            res.send({message:"Please create an account "})
            throw new Error("No user registered in our system")
        }
        console.log("code:", res.statusCode, error)
        throw new Error("Unable to create residency", error.message)
    }
})

export const getAllResidencies = asyncHandler(async (req, res) => {
    try{
        console.log("currently obtaining all residencies")
        const residencies = await prismadb.residency.findMany({
            orderBy:{
                createdAt: "desc"
            }
        })
    
        return res.send({
            message:"got residencies",
            residencies
        })

    }catch(error){
        throw new Error("unable to retrieve residencies", error)
    }
})

export const getResidency = asyncHandler(async (req, res) => {
    try{
        console.log("currently obtaining selected residency")
        const {id} = req.params;
        const residency = await prismadb.residency.findUnique({
            where: {
                id
            }
        })
        console.log(residency)
        return res.send({
            message:"Obtained residency",
            residency
        })

    }catch(error){
        throw new Error("unable to retrieve residencies", error)
    }
})

export default createResidency;