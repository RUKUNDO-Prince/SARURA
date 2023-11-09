import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect()

export async function POST (request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { username, email, password } = reqBody

        console.log(reqBody)

        // CHECK IF THE USER ALREADY EXISTS
        const user = await User.findOne({email})
        if (user) {
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        // HASH PASSWORD
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        // CREATE A USER
        const newUser = new User ({
            username,
            email,
            password: hashedPassword
        })

        // SAVE THE USER TO DATABASE
        const savedUser = await newUser.save()
        console.log(savedUser);

        return NextResponse.json({message: "User created successfully"}, {status: 201})
        

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}