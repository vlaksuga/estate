/* version : 2.1 */
const TEST_MODE = true;

const IMG_SERVER = TEST_MODE ? "http://192.168.50.24:7777/" : "https://rms.seumjnd.com:7777/" ; 
const API_SERVER = TEST_MODE ? "http://192.168.50.24:7777/" : "https://rms.seumjnd.com:7777/" ; 


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
    getAdminDashBoard(data) { return super.get("s/getAdminDashBoard.json", data) }    
    listOwner(data) { return super.get("s/listOwner.json", data) }    
    getOwner(data) { return super.get("s/getOwner.json", data) }
    listEstate(data) { return super.get("s/listEstate.json", data) }    
    getEstate(data) { return super.get("s/getEstate.json", data) }
    listPossession(data) { return super.get("s/listPossession.json", data) }    
    listPossessionByEstate(data) { return super.get("s/listPossessionByEstate.json", data) }    
    listPossessionByOwner(data) { return super.get("s/listPossessionByOwner.json", data) }    
    getPossession(data) { return super.get("s/getPossession.json", data) }          
    getUser(data) { return super.get("s/getUser.json", data) }
    listUser(data) { return super.get("s/listUser.json", data) }
    listUserByUserGroup(data) { return super.get("s/listUserByUserGroup.json", data) }
    listAgencyByUserGroup(data) { return super.get("s/listAgencyByUserGroup.json", data) }
    getMortgagee(data) { return super.get("s/getMortgagee.json", data) }
    listMortgagee(data) { return super.get("s/listMortgagee.json", data) }
    listMortgage(data) { return super.get("s/listMortgage.json", data) }
    listMortgageByPossession(data) { return super.get("s/listMortgageByPossession.json", data) }
    listMortgageByMortgagee(data) { return super.get("s/listMortgageByMortgagee.json", data) }
    getMortgage(data) { return super.get("s/getMortgage.json", data) }                            
    listProvince(data) { return super.get("s/listProvince.json", data) }    
    listArea(data) { return super.get("s/listArea.json", data) }    
    listTown(data) { return super.get("s/listTown.json", data) }
    getContract(data) { return super.get("s/getContract.json", data) }
    getContractByAgency(data) { return super.get("s/getContractByAgency.json", data) }
    listContract(data) { return super.get("s/listContract.json", data) }
    listContractByAgency(data) { return super.get("s/listContractByAgency.json", data) }
                                                   

    /* post */
    getUserInfo(data) { return super.post("getUserInfo.json", data) }
    login(data) { return super.post("login.json", data) }
    logout(data) { return super.post("logout.json", data) }
    addUser(data) { return super.post("addUser.json", data) }
    modifyUser(data) { return super.post("modifyUser.json", data) }
    modifyUserPasswordByRoot(data) { return super.post("modifyUserPasswordByRoot.json", data) }
    addEstate(data) { return super.post("addEstate.json", data) }
    modifyEstate(data) { return super.post("modifyEstate.json", data) }
    addOwner(data) { return super.post("addOwner.json", data) }
    modifyOwner(data) { return super.post("modifyOwner.json", data) }
    addPossession(data) { return super.post("addPossession.json", data) }
    modifyPossession(data) { return super.post("modifyPossession.json", data) }
    addMortgage(data) { return super.post("addMortgage.json", data) }
    modifyMortgage(data) { return super.post("modifyMortgage.json", data) }
    addMortgagee(data) { return super.post("addMortgagee.json", data) }
    modifyMortgagee(data) { return super.post("modifyMortgagee.json", data) }
    addContract(data) { return super.post("addContract.json", data) }
    modifyContract(data) { return super.post("modifyContractByAdmin.json", data) }
    modifyContractByAgency(data) { return super.post("modifyContractByAgency.json", data) }
                                                                                            
}


const API = new CommonApi();