const TEST_MODE = false;

const IMG_SERVER = TEST_MODE ? "http://192.168.50.24:7777/" : "http://15.164.216.77:7777/" ; 
const API_SERVER = TEST_MODE ? "http://192.168.50.24:7777/" : "http://15.164.216.77:7777/" ; 


class Api {
    constructor(apikind) {
        this.apikind = apikind;
    }

    get(url, data) {
        let obj = {};
        try{obj.t = currentUser.t } catch { }
        if(data) { Object.assign(obj, data) }        
        let ret = new Promise( (res, rej) => {
            fetch(API_SERVER + this.apikind + url + this.getParam(obj)).then(response => {
                res(response.json());
            }).catch(err => { rej(); });
        });
        return ret;
    }
    

    post(url, data) {    
        let obj = {};
        try { obj.t = currentUser.t } catch {}
        if(data) {Object.assign(obj, data)}
        let option = {
            method : 'POST',
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded'
            }, 
            body : new URLSearchParams(obj)
        }
        let ret = new Promise((res, rej) => {  
            fetch(API_SERVER + this.apikind + url, option).then(response => {
                res(response.json());
            }).catch(err => {
                this.rfn("알 수 없는 에러가 발생했습니다.");
                rej(); });            
        });
        return ret; 
    }

    getParam(obj) {
        let ret = "";
        if(obj == undefined) { return ret; }
        let paramString = "?" + new URLSearchParams(obj).toString();
        ret = paramString;
        return ret;
    }

    rtn(msg) {
        showToast(msg);
    }
}

class CommonApi extends Api {
    constructor() {
        super("api/");        
    }

    /* get */
    listProvince(data) { return super.get("s/listProvince.json", data) }    
    listArea(data) { return super.get("s/listArea.json", data) }    
    listTown(data) { return super.get("s/listTown.json", data) }    
    listEstate(data) { return super.get("s/listEstate.json", data) }    
    listPossessionByEstate(data) { return super.get("s/listPossessionByEstate.json", data) }    
    listPossessionByOwner(data) { return super.get("s/listPossessionByOwner.json", data) }    
        
    listOwner(data) { return super.get("s/listOwner.json", data) }    
    listUser(data) { return super.get("s/listUser.json", data) }
    listMortgagee(data) { return super.get("s/listMortgagee.json", data) }
    listPossessionMortgage(data) { return super.get("s/listPossessionMortgage.json", data) }

    getEstate(data) { return super.get("s/getEstate.json", data) }
    getOwner(data) { return super.get("s/getOwner.json", data) }
    getPossession(data) { return super.get("s/getPossession.json", data) }    
        
                                           

    /* post */
    addEstate(data) { return super.post("addEstate.json", data) }
    modifyEstate(data) { return super.post("modifyEstate.json", data) }

    addOwner(data) { return super.post("addOwner.json", data) }
    modifyOwner(data) { return super.post("modifyOwner.json", data) }
    addUser(data) { return super.post("addUser.json", data) }
    addPossession(data) { return super.post("addPossession.json", data) }
    addMortgage(data) { return super.post("addMortgage.json", data) }
                                                                                            
}


const API = new CommonApi();