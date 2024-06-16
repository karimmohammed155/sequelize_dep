import {Sequelize} from "sequelize"

export const seq_instance=new Sequelize("bqvvpn504xfyugz5v2za","uteu9hldjo0br4c2","7GURQvSFMBUn2Fmyexh1",{
    host:"bqvvpn504xfyugz5v2za-mysql.services.clever-cloud.com",
    dialect:"mysql"
})

export const db_connection=async()=>{
    try {
    await seq_instance.sync({alter:true ,force:false});
    console.log('Connection has been established successfully.');
    } 
    catch (error) {
    console.error('Unable to connect to the database:', error);
    }
}


