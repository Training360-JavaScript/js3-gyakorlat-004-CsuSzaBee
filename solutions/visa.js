export default function checkVisa(string){
  return /^4\d{15}$/.test(string);
}