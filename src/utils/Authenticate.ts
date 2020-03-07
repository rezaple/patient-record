import * as bcrypt from 'bcrypt';

class Authenticate {
    public static hashPassword = (password: string): Promise<string> => {
        return bcrypt.hash(password,10);
    }

    public  static  comparePassword = async(password:string, hashedPassword: string):Promise<boolean>=>{
        const result: boolean = await bcrypt.compare(password, hashedPassword);
        return result;
    }
}

export default Authenticate;