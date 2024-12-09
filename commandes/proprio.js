const {zokou} =require("../framework/zokou")







zokou({nomCom:"redemarrer",categorie:"Mods",reaction:"👨🏿‍💼"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("Cette commande est réservée au propriétaire du bot");
  }

  const {exec}=require("child_process") ;

    repondre("𝐫𝐞𝐝𝐞𝐦𝐚𝐫𝐫𝐚𝐠𝐞 𝐝𝐞 𝐓𝐄𝐑𝐑𝐀 𝐞𝐛 𝐜𝐨𝐮𝐫 𝐦𝐚𝐬𝐭𝐞𝐫!..");

  exec("pm2 restart all");
  

  



})
