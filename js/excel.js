
 class Excel {
    constructor() {}
    getExcelData(titles, list) {
        var ret = []
        ret.push(titles);
        for(var i=0; i<list.length; i++) {
            ret.push(list[i]);
        }
        return ret;
    }
    getSheet(sel) {
        var t = [];  
        var l = [];      
        var p = document.getElementsByClassName(sel)[0];                

        var ta = p.querySelectorAll('[tname]');
        for(var i=0; i<ta.length; i++) {
            t.push(ta[i].textContent);
        }

        var items = p.querySelectorAll('item');        
        for(var ii=0; ii<items.length; ii++) {
            var row = [];
            var vals = items[ii].querySelectorAll('[excol]');
            for(var iii=0; iii<vals.length; iii++) {
                row.push(vals[iii].textContent);
            }      
            l.push(row);      
        }        

        return XLSX.utils.aoa_to_sheet(this.getExcelData(t, l));
    }
 }

 

 function s2ab(s) {
    var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf);  //create uint8array as viewer
    for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
    return buf;    
}

 function downloadExcel(ele, sel) {    
    var EXCEL = new Excel();
    var wb = XLSX.utils.book_new();
    var ws = EXCEL.getSheet(sel);
    XLSX.utils.book_append_sheet(wb, ws, $(ele).attr('sheetname'));
    var ww = XLSX.write(wb, {bookType:'xlsx', type:'binary'});
    var file = new Blob([s2ab(ww)], {type : "application/octet-stream"});
    var a = document.createElement('a');
    var url = window.URL.createObjectURL(file);
    a.href = url;
    a.download = $(ele).attr('titlename');
    a.click();
    window.URL.revokeObjectURL(url);
}

function getExcelTitle(selector) {
    var ret = Array.from($(selector + ' span'));
    return ret;
}