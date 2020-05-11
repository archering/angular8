export default class AuthService{

    permission(){
        const promise = new Promise((resolve,reject)=>{
            setTimeout(() => {
                if( Math.round(Math.random()*1000 + 1) %2 ===0){
                    resolve(true);
                }else{
                    resolve(false);
                }
            }, 1000);
        });
        return promise;
    }

}