
import {z ,ZodType} from 'zod'


type formData = {
    username: String , 
    email: String , 
    subject: String,
    message: String
}

export const ContactSchema: ZodType<formData> = z.object({
    username: z.string().min(2).max(30),
    email:z.string().email('pls check your email !'),
    subject:z.string().max(980), 
    message:z.string()
})