// create a singleton class that handle the database operation 
// singleton are often use for read operation 

class DatabaseConnect{

    static dbconnect:DatabaseConnect = new DatabaseConnect();

    private DatabaseConnect(){}

    public static getValue():DatabaseConnect{

        return DatabaseConnect.dbconnect
    }

    // methods to read some data 
    public getName(a:number):String{
        
        return `you enter ${a}`;
    }


}

export {DatabaseConnect}