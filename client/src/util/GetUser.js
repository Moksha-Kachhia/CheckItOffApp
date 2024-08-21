export function getUserDetails(){
    let user = JSON.parse(localStorage.getItem('CheckItOffAppUser'));
    return user;
}