// if api data doesn't have info, put 0;

export function checkEmpty(data){
    if(data) return data;
    return '0.00';
}