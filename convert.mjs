import conversion from './conversions.mjs';
export function converts(amt,from,to){
   if(!conversion[from]||!conversion[from][to]){
    return `invalid`;
   }
   let rate=conversion[from][to];
   return amt*rate;
}