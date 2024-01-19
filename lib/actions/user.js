import User from "@lib/models/User";
import { connectToDb } from "@lib/mongoosedb/mongoose";

export const createOrUpdateUser = async (id, first_name, last_name, image_url, email_addressess, username ) => {
    try {
        await connectToDb()
        
        const user = await User.findOneAndUpdate(
            {clerkId: id},
            {
                $set: {
                    firstName: first_name,
                    lastName: last_name,
                    profilePhoto: image_url,
                    email: email_addressess[0].email_addressess,
                    username: username
                }
                
            },
            {upsert: true, new: true}
        )
            await user.save()
            return user
        
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (id) => {
    try {
        await connectToDb()
        await User.findOneAndDelete({clerkId: id})
    } catch (error) {
        console.log(error);
    }
}