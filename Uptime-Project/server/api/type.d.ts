// It is a File to Declare types of Request Object 
// We are adding it Explicitily => OverRide Request Object 
// We are Adding type on top of it in Express 
declare namespace Express {

    interface Request {
        userId: String
        headers: String
    }

}