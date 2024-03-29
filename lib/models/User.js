import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        require: true,
        uinque: true
    },
    firstName: {
        type: String,
        require: true,
        
    },
    lastName: {
        type: String,
        require: true,
        
    },
    username: {
        type: String,
        require: true,
        
    },
    email: {
        type: String,
        require: true,
        
    },
    profilePhoto: {
        type: String,
        require: true,
        
    },
    posts: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: "Post"}],
        default: []
    },
    savedPosts: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: "Post"}],
        default: []
    },
    likedPosts: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: "Post"}],
        default: []
    },
    followers: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
        default: []
    },
    following: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
        default: []
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.models.User || mongoose.model("User", UserSchema)

export default User